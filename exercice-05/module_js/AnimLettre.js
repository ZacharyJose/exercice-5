import {
    Util
} from './Util.js'


export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {string} lesLettres - contient les lettres à animer
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = lesLettres
        this.elmParent = elementParent
        this.animerLettres(this.lesLettres)
        this.fonction = fonction
    }

    animerLettres(lesLettres)
    {
        console.log(lesLettres = ` + lesLettres = ${lesLettres}`)
        let elmConteneur = this.creerElement(this.elmParent, 'section', '', 'mot')
        let i =0
       for (let uneLettre of lesLettres)
       {
        let elmLettre = this.creerElement(elmConteneur, 'div', uneLettre, '')
        elmLettre.style.animationDelay = (i++ * 0.5) + "s";
       }
    }

 

creerElement(elmParent, balise, contenu, classCSS) {
    console.log(balise)
    let noeud = document.createElement(balise)
    if (contenu != '') {
        noeud.innerHTML = contenu
    }
    if (classCSS != ''){
    noeud.classList.add(classCSS)
    }
    elmParent.appendChild(noeud)
    return noeud
}



}