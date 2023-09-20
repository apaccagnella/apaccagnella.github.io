(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `<button type="button" id="myBtn">Helper Button</button>` ;   
   
    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {            
              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

	    
	

	   
        fireChanged() {
        console.log("OnClick Triggered");
	const url = "https://libertyutilities-q.us10.hcs.cloud.sap/api/v1/csrf";
         return fetch(url, { method: 'GET',  headers: {
                'x-csrf-token': 'fetch',} })
        .then(response => {
           var csrfToken = response.headers.get('x-csrf-token');
            console.log('CSRF token:', csrfToken);
             if (messagesElement) {
           messagesElement.textContent = '';  // Clear the messages
          messagesElement.textContent += 'CSRF token: ' + csrfToken + '\n';}

        })
        .catch(error => console.error('Error:', error));
  	};    
            
        }        
        
    }

    customElements.define('custom-button', PerformanceHelp);
})();
