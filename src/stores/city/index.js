const state = {
    nm : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1 ,
    city_weath : window.localStorage.getItem("city_weath") || '晴空万里'
};

const actions = {

};

const mutations = {
    CITY_INFO(state , payload){
        state.nm = payload.nm;
        state.id = payload.id;
        state.city_weath = payload.city_weath
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}