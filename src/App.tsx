import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'App',
    setup() {
        const val = ref('')
        return () => {
            return (
                <div>
                    <p>{val.value}</p>
                    <input type="text" v-model={val.value} />
                </div>
            )
        }
    }
})
