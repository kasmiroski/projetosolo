const $ = document.querySelector.bind(document)

function TabNavigation() {

    const html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab: $('[data-open]')
    }

    function hideAllTabContent(){
        // faz com que as seçoes desapareçam
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }

    function removeAllActiveClass(){
        // faz com que as classes ativas sejam removidas 
        html.links.forEach(tab => {
            tab.className = tab.className.replace(" active", "")
        })
    }

    function showCurrentTab(id){
        // mostra a tab que foi selecionada 
        const tabcontent = $('#' + id)
        tabcontent.style.display = "block"
    }

    function selectTab(event){
        hideAllTabContent()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)

        target.className += " active"
    }

    function listenForChange(){
        // ouve quais mudanças ocorreram
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }

    function init(){
        // inicia o codigo
        hideAllTabContent()
        listenForChange()

        html.openTab.click()
    }

    return {
        init
    }

}


window.addEventListener('load', () => {
    const tabNavigation = TabNavigation()
    tabNavigation.init()
})