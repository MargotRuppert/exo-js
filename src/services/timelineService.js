import { timelineSteps } from './timelineDataService.js';



export function renderTimeline(timeLine) {
    
    let timeline = document.querySelector(timeLine);
    
    timelineSteps.forEach((steps) => {

        let li = document.createElement("li");
        timeline.appendChild(li);

        let div = document.createElement("div");
        div.classList.add("timeline-middle");
        li.appendChild(div);

        let svg = document.createElement("svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("viewBox", "0 0 20 20");
        svg.setAttribute("fill", "currentColor");
        svg.setAttribute("class", "h-5 w-5");
        div.appendChild(svg);

        let path = document.createElement('path');
        path.setAttribute("fill-rule", "evenodd");
        path.setAttribute("d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z");
        path.setAttribute("clip-rule", "evennodd");
        svg.appendChild(path);

        let divTimeline = document.createElement("div");
        divTimeline.classList.add(`timeline-${steps.side}`, "mb-10", "md:text-end");
        li.appendChild(divTimeline);

        let time = document.createElement("time");
        time.innerText = steps.year;
        time.classList.add('font-mono', "italic");
        divTimeline.appendChild(time);

        let divTitre = document.createElement("div");
        divTitre.innerText = steps.title;
        divTitre.classList.add("text-lg", "font-black");
        divTimeline.appendChild(divTitre);

        let contenu = document.createElement("p");
        contenu.innerText = steps.text;
        divTimeline.appendChild(contenu);
    })


}



