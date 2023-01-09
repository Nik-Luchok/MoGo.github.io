// drop down info buttons "Accordion" | Service



// get buttons by class
const coll = document.getElementsByClassName('accordion__header');

// change the first button immidiatly
addEventListener('load', function() {
    let content = coll[0].nextElementSibling;
    content.style.maxHeight = content.scrollHeight + 'px';

});

// iterate thru the list of buttons
for (let i = 0; i < coll.length; i++){
    // add an event listener to each of them
    coll[i].addEventListener('click', function() {
        // button that are clicked on
        let clicked = this;
        // collapse other accordion items, that are currently oppened
        // so only 1 remains open at a time

        // search for class name
        let active = document.getElementsByClassName('accordion__header active');
        for (let j = 0; j < active.length; j++){
            // execute code if clicked button and button on the list are not hte same elements
            if (clicked !== active[j]){

                // save element from live html list to var. Don't change
                let button = active[j];

                button.classList.toggle('active');

                let content = button.nextElementSibling;

                content.classList.toggle('active');

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }

            }
        }


        this.classList.toggle('active');

        content = this.nextElementSibling;
        content.classList.toggle('active');

        // adds max height and padding
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }

    });
};
