(()=>{"use strict";function e(){const e=document.getElementById("content");e.textContent="";const t=document.createElement("div"),n=document.createElement("h2");n.textContent="The world's No. 1 (non-fake!) Italian restaurant and pizzeria";const a=new Image;a.src="../src/assets/pizza.jpg",t.append(n,a),e.appendChild(t)}function t(e){const t=document.createElement("div"),n=document.createElement("h2");return n.textContent=e,t.appendChild(n),t}function n(e,t,n){const a=document.createElement("div"),o=document.createElement("h3");o.textContent=e;const c=document.createElement("p");c.textContent=t;const r=document.createElement("p");return r.textContent=n,a.append(o,c,r),a}function a(){const e=document.getElementById("content");e.textContent="";const a=document.createElement("div"),o=t("Pizza");o.append(n("Margherita","$10","organic tomato sauce, fresh mozzarella"),n("Carnivora","$15","organic sauce, fresh mozzarella, sweet italian sausage, pancetta, soppressata"));const c=t("Pasta");c.append(n("Spaghetti carbonara","$20","homemade spaghetti, pancetta, fresh cream and egg sauce"),n("Penne all'Arrabbiata","$20","Homemade, organic tomatoes, spicy marianara sauce"));const r=t("Beverages");r.append(n("San Benegrino mineral water","$5","world's No. 1 mineral water"),n("Espresso","$5 - $7","black, with sugar and/or organic milk")),a.append(o,c,r),e.appendChild(a)}function o(){const e=document.getElementById("content");e.textContent="";const t=document.createElement("div"),n=document.createElement("p");n.textContent="Tel: 123 456 789";const a=document.createElement("p");a.textContent="E-mail: info@nonfalso.com";const o=document.createElement("p");o.textContent="Address: -",t.append(n,a,o),e.appendChild(t)}!function(){const e=document.getElementById("header"),t=document.createElement("h1");t.textContent="Nonfalso";const n=document.createElement("div"),a=document.createElement("button");a.textContent="Home";const o=document.createElement("button");o.textContent="Menu";const c=document.createElement("button");c.textContent="Contact",n.append(a,o,c),e.append(t,n)}(),e();const c=document.getElementsByTagName("button");for(const t of c)switch(t.textContent){case"Home":default:t.addEventListener("click",e);break;case"Menu":t.addEventListener("click",a);break;case"Contact":t.addEventListener("click",o)}})();