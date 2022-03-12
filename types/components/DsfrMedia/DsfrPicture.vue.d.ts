declare const _default: import('vue').DefineComponent<{
    alt: {
        type: StringConstructor;
        default: string;
    };
    legend: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    alt: {
        type: StringConstructor;
        default: string;
    };
    legend: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: any;
        validator: (val: string) => boolean;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    legend: string;
    title: string;
    size: string;
    alt: string;
}>
export default _default
