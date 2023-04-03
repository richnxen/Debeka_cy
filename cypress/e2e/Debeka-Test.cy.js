describe('SmokeTest Bestand', () => {
  it('Test of Cypress', () => {
    //cy.visit('https://health-factory.reg.k8s.debeka.dmz.nexinsure.org/debeka_web/iaf/xhtml/jbit-login.xhtml')
   
    cy.visit('https://health-factory.test.k8s.debeka.dmz.nexinsure.org/debeka_web/iaf/xhtml/jbit-login.xhtml',{
      onBeforeEachLoad (win) {
        Object.defineProperty(win.navigator, 'language', { value: 'de-DE' });
        Object.defineProperty(win.navigator, 'languages', { value: ['de'] });
        Object.defineProperty(win.navigator, 'accept_languages', { value: ['de'] });  
        
      },
      headers: {
        'Accept-Language': 'de',
        },
    });

    
    cy.contains('Anmelden').click()

   

    // Should be on a new URL which
    // includes 'factory.reg'
    cy.url().should('include', 'factory.test')

    // Login
    cy.get('input[name="LoginForm:login_user:inputText"]').type('kern.test913')
    //  Check login
    cy.get('input[name="LoginForm:login_user:inputText"]').should('have.value', 'kern.test913')

    // Password
    cy.get('input[name="LoginForm:login_password:inputSecret"]').type('kern.test913{enter}')
    //  Check password
    //cy.get('input[name="LoginForm:login_password:inputSecret"]').should('have.value', 'kern.test913')
  
    //Login Button
    //cy.get('a[id="LoginForm:login:button"]').click()

    //Zeitreise aktivieren
    // cy.get('a[id="PostboxForm:timetravel:link"]').should($a => {
    //   expect($a.attr('target'), 'target').to.equal('_blank')
    //   $a.attr('target', '_self')      
    // })
    // .click()
  
    //Zeitreise angeben
    // cy.get('input[name="SystemDateForm:systemDateSection:systemDateGrid:newdate:inputText"]').type('01.01.2025')
    // cy.get('a[id="SystemDateForm:systemDateSection:buttonGrid:right:start:button"]').click()

    // //Zeitreise schliessen - Neuer Postkorb
    // cy.get('a[id="SystemDateForm:postbox:link"]').should($a => {
    //   expect($a.attr('target'), 'target').to.equal('_blank')
    //   $a.attr('target', '_self')      
    // })
    // .click()

    //cy.get('input[name="username"]').type('kern.test913')
    //cy.get('input[name="password"]').type('kern.test913{enter}')


    // KV Vertrag/Neuer Vertrag
    cy.get('a[id="JBITWorkspaceForm:hipm:menu"]').click()
    cy.get('a[id="JBITWorkspaceForm:hipm:newcontr:menuLink"]').click()

    // Page Vertragsnummer
    cy.get('input[name="NewContractForm:ContractNumberSect1:headSection1:dateWrapper:startDate:inputText_input"]').type('01.08.2021')
    cy.get('a[id="NewContractForm:buttonBar:buttonsRight:buttonPartnerSearch:button"]').click()

    // Page Partnersuche
    cy.get('select[id="PartnersearchForm:partnersearch_new_section:grid1:left_section:partnerSpecification:selectOneMenu_input"]').select("NATURALPERSON", { force: true }).invoke('val').should('eq', 'NATURALPERSON')
    cy.get('input[name="PartnersearchForm:partnersearch_new_section:grid1:left_section:surname:inputText"]').type('Juhahahuj')
    cy.get('input[name="PartnersearchForm:partnersearch_new_section:grid1:left_section:firstname:inputText"]').type('Miflow')
    cy.get('a[id="PartnersearchForm:buttons:buttongrid1:right:search:button:button"]').click()
    cy.get('a[id="PartnersearchForm:buttongrid2:right:new_natural:button"]').click()

   // Page Partnerneuanlage
   cy.get('select[id="CoredataForm:sec2_natural:grid1:left_section_natural:selectSalutation:selectOneMenu:selectOneMenu_input"]').select("#1#", { force: true }).invoke('val').should('eq', '#1#')
   cy.get('input[name="CoredataForm:sec2_natural:grid1:left_section_natural:birth:dateOfBirth:inputDate:inputText_input"]').type('01.01.1990')
   cy.get('select[id="CoredataForm:sec2_natural:grid1:left_section_natural:selectActivity:selectOneMenu:selectOneMenu_input"]').select("#4#", { force: true }).invoke('val').should('eq', '#4#')
   cy.get('select[id="CoredataForm:sec2_natural:grid1:left_section_natural:sex:selectOneMenu:selectOneMenu_input"]').select("MALE", { force: true }).invoke('val').should('eq', 'MALE')
   cy.get('a[id="CoredataForm:btngrid:right:ok:button:button"]').click()

   //Duplette
   //cy.get('a[id="PartnerDuplicateRegistrationForm:btngrid1:right:NewPartner:button"]').click()

    // Page Partneruebersicht - Adresse
    cy.get('a[id="OverviewForm:secPartnerAddress:icon:icon:icon"]').click()

    //Adresse
    cy.get('input[name="AddressDataForm:sec2:grid4:street:inputText:inputText"]').type('Auf der Höh')
    cy.get('input[name="AddressDataForm:sec2:grid4:houseNumber:inputText:inputText"]').type('19')
    cy.get('input[name="AddressDataForm:sec2:grid4:postalcode:inputText:inputText"]').type('56332')
    cy.get('input[name="AddressDataForm:sec2:grid4:city:inputText:inputText"]').type('Koblenz')
    cy.get('select[id="AddressDataForm:sec3:grid5:addressType:selectOneMenu:selectOneMenu_input"]').select("#1#", { force: true }).invoke('val').should('eq', '#1#')
    cy.get('a[id="AddressDataForm:btngrid:right:IconButtonOk:button:button"]').click()

    // Page Partneruebersicht - Bankverbindung
    cy.get('a[id="OverviewForm:secPartnerBankAccount:icon:icon:icon"]').click()

    //Bankverbindung
    cy.get('input[name="BankDataForm:sec2:grid4:iban:inputText:inputText"]').type('DE45 5001 0517 3355 5785 85')
    cy.get('a[id="BankDataForm:btngrid:right:IconButtonOk:button:button"]').click()

   // Page Partneruebersicht - Schließen
    cy.get('a[id="OverviewForm:btngrid1:right:Next:button:button"]').click()

    //Antragsdaten
    cy.get('input[name="ApplicationDataForm:ApplicationDataSect1:Vermittlerdaten:AgentNr:inputText"]').type('255')
    cy.get('input[name="ApplicationDataForm:ApplicationDataSect2:Antragsdaten2:wrapdate2:applicationDate:inputText_input"]').type('01.01.2023')
    cy.get('input[name="ApplicationDataForm:ApplicationDataSect2:Antragsdaten2:applicationReceiptDate:inputText_input"]').type('01.01.2023')
    cy.get('a[id="ApplicationDataForm:contractNumberButtons:buttonsRight:executeForward:button:button"]').click()

    // Neuer Vertrag
    cy.get('select[id="NewContractForm:NewContractSect2:headSection2:ReasonForChange:selectOneMenu_input"]').select("#100#", { force: true }).invoke('val').should('eq', '#100#')
    cy.get('a[id="NewContractForm:NewContractButtons:NewContractButtonList1:buttonOkWithNewRisk:button"]').click()

    //Versicherte Person
    cy.get('select[id="InsuredPersonForm:NewIpSect2:headSection2:civilServantInstitute:selectOneMenu_input"]').select("#1#", { force: true }).invoke('val').should('eq', '#1#')
    cy.get('select[id="InsuredPersonForm:NewIpSect4:headSection4:ipConditionCharactCNCI:selectOneMenu_input"]').select("#401#", { force: true }).invoke('val').should('eq', '#401#')
    cy.get('input[name="InsuredPersonForm:NewIpSect5:headSection5:tariffs:inputText"]').type('N,PVN')
    cy.get('a[id="InsuredPersonForm:buttonGrid:NewIpButtonRight:buttonOk:button:button"]').click()

    //VP Uebersicht
    cy.get('a[id="OverviewIpForm:buttonBar:buttonsRight:buttonFinishProcess:button:button"]').click()
   
    // Vorgangsende
   cy.get('a[id="FinishProcessForm:printButtons:buttonsRight:executeForward:button:button"]').click()

  })
})