document.getElementById("sub-btn").addEventListener("click",function(){
document.getElementById("lilist").style.color="green"
    let newlist=document.getElementById("input-name").value
    let listelement=document.createElement("li")
    listelement.innerHTML=newlist
    document.getElementById("lilist").appendChild(listelement)
    document.getElementById("input-name").value=""
})

document.getElementById("sub-btn").addEventListener("click",function(){
    document.getElementById("lilist2").style.color="green"
        let newlist=document.getElementById("input-phone").value
        let listelement=document.createElement("li")
        listelement.innerHTML=newlist
        document.getElementById("lilist2").appendChild(listelement)
    document.getElementById("input-phone").value=""
    })

    document.getElementById("sub-btn").addEventListener("click",function(){
        document.getElementById("lilist3").style.color="green"
            let newlist=document.getElementById("input-email").value
            let listelement=document.createElement("li")
            listelement.innerHTML=newlist
            document.getElementById("lilist3").appendChild(listelement)
        document.getElementById("input-email").value=""
        })

        document.getElementById("sub-btn").addEventListener("click",function(){
            document.getElementById("lilist4").style.color="green"
                let newlist=document.getElementById("input-doc").value
                let listelement=document.createElement("li")
                listelement.innerHTML=newlist
                document.getElementById("lilist4").appendChild(listelement)
            document.getElementById("input-doc").value=""
            })

            document.getElementById("sub-btn").addEventListener("click",function(){
                document.getElementById("lilist5").style.color="green"
                    let newlist=document.getElementById("input-age").value
                    let listelement=document.createElement("li")
                    listelement.innerHTML=newlist
                    document.getElementById("lilist5").appendChild(listelement)
                document.getElementById("input-age").value=""
                })

                document.getElementById("sub-btn").addEventListener("click",function(){
                    document.getElementById("lilist6").style.color="green"
                        let newlist=document.getElementById("input-exp").value
                        let listelement=document.createElement("li")
                        listelement.innerHTML=newlist
                        document.getElementById("lilist6").appendChild(listelement)
                    document.getElementById("input-exp").value=""
                    })