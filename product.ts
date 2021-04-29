import {IProduct, IProductVariant} from "./interfaces/product.interface";

export function getAllVariants(product: IProduct, isStaged: boolean = false): IProductVariant[] {
    const stage = isStaged ? 'staged' : 'current';
    return [product.masterData[stage].masterVariant, ...product.masterData[stage].variants];
}
