const getStoredBook = () => {
    const storeBookSTR = localStorage.getItem("redlist")
    if(storeBookSTR) {
        const storedBookData = JSON.parse(storeBookSTR);
        return storedBookData;
    }

    else{
        return[];
    }
}

const addToStoredDB = (id) => {
    const storedBookData = getStoredBook();

    if(storedBookData.includes(id)){
        alert("This Book Is Already Exist")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        console.log(storedBookData);
        localStorage.setItem("redlist", data)
        
    }
}

export { addToStoredDB, getStoredBook }
