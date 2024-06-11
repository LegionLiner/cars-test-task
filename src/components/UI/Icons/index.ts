import UK from "./UK.vue";
import Germany from "./Germany.vue";
import Portugal from "./Portugal.vue";
import { VueElement } from "vue";

interface IIcons {
    [key: string]: VueElement
}

interface Item {
    title: string,
    value: string
}

export const IconItems = [
    {
        title: 'English',
        value: 'En'
    },
    {
        title: 'Deutsch',
        value: 'Ge'
    },
    {
        title: 'Português',
        value: 'Po'
    }
] as Item[]

export const lang = {
    'En': UK,
    'Ge': Germany,
    'Po': Portugal
} as unknown as IIcons