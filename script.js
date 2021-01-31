
        const counterbtn = document.getElementById("counter")
        const incrementbtn = document.getElementById("increment")
        const resetbtn = document.getElementById("reset")
        const decrementbtn = document.getElementById("decrement")

        let counterValue = 0;

        incrementbtn.addEventListener("click", function(event){
            counterValue += 1;
            counterbtn.innerHTML = counterValue;
        });
        decrementbtn.addEventListener("click", function(event) {
            counterValue -= 1;
            counterbtn.innerHTML = counterValue;
        });
        resetbtn.addEventListener("click", function(event){
            counterValue = 0;
            counterbtn.innerHTML = counterValue;
        })
   