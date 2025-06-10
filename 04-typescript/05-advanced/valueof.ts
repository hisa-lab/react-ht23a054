type ValueOf<T> = T[keyof T];
type PermNum = ValueOf<typeof permissions>;

const permissions = {
    r: 0b100,
    w: 0b010,
    x: 0b001,
}as const;

const species = ['rabbit', 'bear', 'fox', 'dog']as const;
type Species = typeof species[number]; 