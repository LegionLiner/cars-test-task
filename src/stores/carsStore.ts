import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

export interface Vehicle {
    vin: number;
    vehicle_name: string;
    placeholder: string; // img
    uploads: number; // будем считать это за количество, в макете надпись 13/30, например.
}

export const storeCars = defineStore("carsStore", () => {
    const cars = ref<Vehicle[]>([]);
    const query = reactive({
        per_page: 9,
        page: 1,
        search: "",
    });
    const lastPage = ref(0);
    const total = ref(0);

    function getCars() {
        fetch(`https://api.caiman-app.de/api/cars-test?per_page=${query.per_page}&page=${query.page}`)
            .then(res => res.json())
            .then(res => {
                cars.value = res.data;
                lastPage.value = res.meta.last_page;
                total.value = res.meta.total;
            });
    }

    function getCarsByVin() {
        if (query.search) {
            fetch(`https://api.caiman-app.de/api/cars-test?search=${query.search}`)
                .then(res => res.json())
                .then(res => {
                    cars.value = res.data;
                    lastPage.value = res.meta.last_page;
                    total.value = res.meta.total;
                    query.page = 1;
                });
        }
    }

    watch(() => query.per_page, (val, oldval) => {
        if (val !== oldval) {
            query.page = 1;
        }
        query.search = "";
        getCars();
    });

    watch(() => query.page, () => {
        query.search = "";
        getCars();
    });

    return {
        cars,
        query,
        lastPage,
        total,

        getCars,
        getCarsByVin,
    };
});