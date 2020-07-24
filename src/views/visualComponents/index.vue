<template>
  <div>
		<div 
			v-for="(item, index) in list" 
			:key="index"
			draggable="true" 
			@dragstart="dragstart($event, item.id)">
			{{ item.name }}
		</div>
		<div v-show="false">
			<div v-for="item in list" :key="item.id">
				<component :ref="item.id" :is="item.id">
					<template v-if="item.name === 'button'">
						<div>
							{{item.name}}
						</div>
					</template>
				</component>
			</div>
		</div>
  </div>
</template>
<script>
const list = require('./index.json')
import { mapState, mapActions, createNamespacedHelpers } from 'vuex'
const mod = createNamespacedHelpers('components/button')
export default {
	data() {
		return {
			list: list
		}
	},
  methods: {
		...mod.mapActions(['queryInstance']),
    dragstart(ev, id) {
      console.log(ev);
			ev.dataTransfer.setData("text", JSON.stringify(ev));
			console.log(this.$refs[id][0])
			this.queryInstance(this.$refs[id][0])
    },
    onClick(e) {
      console.log(e);
		}
	},
	computed: {
		...mod.mapState(['instance'])
	},
};
</script>