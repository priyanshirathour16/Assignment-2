const  form = document.querySelector("form");
const ul= document.querySelector("ul");

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    getName();
})

function getName(){
    // console.log("url responding");
    const URL = 'http://tubemastercrm.com/crm/api/task/?format=json';
    ul.innerText ="";
    axios.get(URL)
         .then((res)=>{
            //   console.log(res.data);
              const data = res.data;
              data.forEach((obj)=>{
            //   console.log(obj.alternate_name);
              const li = document.createElement("li");
              li.innerText = obj.alternate_name;
              ul.append(li);
              })
    
         })
         .catch(err=> alert("error 505 occur please wait"));

}

ul.addEventListener("click" , (e)=>{
    const removeli = e.target;
    // console.log(e.target);
    removeli.remove();
})
