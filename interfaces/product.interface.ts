export interface IProduct {
    createdAt: string;
    lastModifiedAt: string;
    id: string;
    key: string;
    version: number;
    taxCategory: IResourceReference;
    productType: IResourceReference;
    lastVariantId: number;
    masterData: IProductMasterData;
}
export interface IResourceReference {
    typeId: string;
    id?: string;
    key?: string;
}

export interface IProductMasterData {
    current: IProductMasterDataAtStage;
    staged: IProductMasterDataAtStage;
    published: boolean;
    hasStagedChanges: boolean;
}

export interface IProductMasterDataAtStage {
    name: ILocaleString;
    slug: ILocaleString;
    description: ILocaleString;
    categories: IResourceReference[];
    masterVariant: IProductVariant;
    variants: IProductVariant[];
}

export interface ILocaleString {
    [key: string]: string;
}

export interface IProductVariant {
    id: number;
    sku: string;
    key: string;
    prices: IProductVariantPrice[];
    images: IProductVariantImage[];
    attributes: IProductAttribute[];
    assets: any[];
    availability: any[];
}

export interface IProductVariantPrice {
    id?: string;
    country?: string;
    validFrom?: string;
    validUntil?: string;
    discounted?: {
        value: IMoney;
        discount: IResourceReference;
    };
    value: IMoney;
}

export interface IProductVariantImage {
    url: string;
    label: string;
    dimensions: {
        w: number;
        h: number;
    }
}

export interface IProductAttribute {
    name: string;
    value: any;
}

export interface IMoney {
    type: MoneyTypes;
    currencyCode: string;
    centAmount: number;
    fractionDigits?: number;
}

export enum MoneyTypes {
    CentPrecision = "centPrecision",
    HighPrecision = "highPrecision",
}
