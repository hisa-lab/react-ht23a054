import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS } from "react-dom/client";

interface A = {
    foo: number;
    bar?: string;
}
interface B { foo: string; }
interface C { bar: string; }
interface D { baz: boolean; }

type AorB = A | B;
type AorC = A | C;
type AorD = A | D;