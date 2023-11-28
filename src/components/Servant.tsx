import MaterialList from "./MaterialList";

interface Servant {
    id: number
    name: string
    icon: string
    portraits: Array<string>
    skills: Array<Skill>
    appends: Array<Skill>
    classIcon: string
    ascensionMaterials: Array<MaterialList>
    skillMaterials: Array<MaterialList>
    appendMaterials: Array<MaterialList>
}

interface Skill {
    name: string
    icon: string
}

export default Servant