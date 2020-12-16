export interface Pagination {
    offset: number;
    limit: number;
    count: number;
    total: number;
}

export interface RootObject {
    pagination: Pagination;
    data: any[];
}