import { get } from '@/utils/request';

export async function accountinfo(params = {}) {
    const queryParam = { queryParam: JSON.stringify(params) };
    return get('/site/account/find', queryParam);
}

export async function accountinfo1(params = {}) {
    const queryParam = { queryParam: JSON.stringify(params) };
    return get('/site/account/find2', queryParam);
}
