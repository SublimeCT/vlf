import Vue, { VueConstructor } from "vue"
import { LocalForage } from "./main"

declare module "vue/types/vue" {
    interface Vue {
        $vlf: LocalForage
    }
    interface VueConstructor {
        $vlf: LocalForage
    }
}

declare module "vue/types/options" {
    interface ComponentOptions<V extends Vue> {
        $ls?: LocalForage;
        $ss?: LocalForage;
    }
}

export { VueConstructor };
export default Vue;
