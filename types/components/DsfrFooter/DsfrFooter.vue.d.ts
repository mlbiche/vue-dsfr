interface FooterLink {
    to: import('vue-router').RouteLocationRaw;
    label: string;
}

interface FooterPartner {
    href: string;
    logo: string;
    name: string;
}

interface FooterPartners {
    mainPartner: FooterPartner;
    subPartners: FooterPartner[];
    title: string;
}

declare const _default: import('vue').DefineComponent<{
    a11yCompliance: {
        type: StringConstructor;
        default: string;
    };
    a11yComplianceLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    legalLink: {
        type: StringConstructor;
        default: string;
    };
    homeLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    partners: {
        type: ObjectConstructor;
        default: () => any;
    };
    personalDataLink: {
        type: StringConstructor;
        default: string;
    };
    cookiesLink: {
        type: StringConstructor;
        default: string;
    };
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string[];
    };
    descText: {
        type: StringConstructor;
        default: string;
    };
    beforeMandatoryLinks: {
        type: ArrayConstructor;
        default: () => FooterLink[];
    };
    afterMandatoryLinks: {
        type: ArrayConstructor;
        default: () => FooterLink[];
    };
}, unknown, {
    ecosystemLinks: any;
    mandatoryLinks: FooterLink[];
}, {
    allLinks(): any[];
    linkComponent(): 'nuxt-link' | 'router-link';
    isWithSlotLinkLists(): any;
    isWithSlotOperator(): any;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    a11yCompliance: {
        type: StringConstructor;
        default: string;
    };
    a11yComplianceLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    legalLink: {
        type: StringConstructor;
        default: string;
    };
    homeLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    partners: {
        type: ObjectConstructor;
        default: () => any;
    };
    personalDataLink: {
        type: StringConstructor;
        default: string;
    };
    cookiesLink: {
        type: StringConstructor;
        default: string;
    };
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string[];
    };
    descText: {
        type: StringConstructor;
        default: any;
    };
    beforeMandatoryLinks: {
        type: ArrayConstructor;
        default: () => FooterLink[];
    };
    afterMandatoryLinks: {
        type: ArrayConstructor;
        default: () => FooterLink[];
    };
}>>, {
    logoText: string | string[];
    a11yCompliance: string;
    a11yComplianceLink: import('vue-router').RouteLocationRaw;
    legalLink: string;
    homeLink: import('vue-router').RouteLocationRaw;
    partners: FooterPartners;
    personalDataLink: string;
    cookiesLink: string;
    descText: string;
    beforeMandatoryLinks: FooterLink[];
    afterMandatoryLinks: FooterLink[];
}>
export default _default
