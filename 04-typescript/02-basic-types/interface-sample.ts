interface Color{
    readonly rgb: String;
    opacity: Number;
    alias?: String;
}

const tq: Color = {rgb: '00afcc', opacity: 1};
tq.alias = 'turquoise';
tq.rgb = '03c1ff'