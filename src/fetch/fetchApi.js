import { ref } from "vue";

const data = ref(null);

const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw Error("fetch data 失敗");
        }
        data.value = await res.json();
    }
    catch (err) {
        throw Error("Error: ", err);
    }
}

export { data, fetchData };