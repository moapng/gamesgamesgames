import { writable, type Writable } from "svelte/store";

export const shapes: boolean[][][] = [
    [[true]],
    [[true], [true]],
    [[true], [true], [true]],
    [[true], [true], [true], [true]],
    [[true, true]],
    [[true, true, true]],
    [[true, true, true, true]],
    [
        [true, true],
        [true, true]
    ],
    [
        [true, true],
        [false, true]
    ],
    [
        [true, true],
        [true, false]
    ],
    [
        [false, true],
        [true, true]
    ],
    [
        [true, false],
        [true, true]
    ],
    [
        [false, true],
        [true, false]
    ],
    [
        [true, false],
        [false, true]
    ],
    [
        [false, false, true],
        [false, true, false],
        [true, false, false]
    ],
    [
        [true, false, false],
        [false, true, false],
        [false, false, true]
    ],
    [
        [false, true, false],
        [true, true, true],
        [false, true, false]
    ]
];

export const returnRandom = () => {
    return Math.floor(Math.random() * 13);
};
export const shapesToPlace: Writable<{ [key: string]: boolean[][] }> = writable({
    shape1: shapes[returnRandom()],
    shape2: shapes[returnRandom()],
    shape3: shapes[returnRandom()]
});

