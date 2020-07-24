const state = {
	instance: null,
}
const mutations = {
	// 更新实例
	changeInstance(state, payload) {
		const { data } = payload;
		state.instance = data
	},
}
const actions = {
	async queryInstance({ commit }, data) {
		await commit({
			type: 'changeInstance',
			data
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}