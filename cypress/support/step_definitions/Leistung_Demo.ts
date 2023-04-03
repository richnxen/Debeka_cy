import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("ich habe die Anwendung geöffnet", () => {
  cy.visit('https://health-factory.test.k8s.debeka.dmz.nexinsure.org/debeka_web/iaf/xhtml/jbit-login.xhtml',{
    onBeforeLoad (win) {
      Object.defineProperty(win.navigator, 'language', { value: 'de-DE' });
      Object.defineProperty(win.navigator, 'languages', { value: ['de'] });
      Object.defineProperty(win.navigator, 'accept_languages', { value: ['de'] });  
      
    },
    headers: {
      'Accept-Language': 'de',
      },
  })
});

When("einen Login durchgeführt als {string}", (username: string) => {
  cy.get('input[name="LoginForm:login_user:inputText"]').type(username)
  cy.get('input[name="LoginForm:login_password:inputSecret"]').type(username)
  cy.get('a[id="LoginForm:login:button"]').click()
});

When("ich in Menü KV-Vertrag Neuer Vertrag anklicke", () => {
  cy.get('a[id="JBITWorkspaceForm:hipm:menu"]').click()
  cy.get('a[id="JBITWorkspaceForm:hipm:newcontr:menuLink"]').click()
});

When("ich in den Versicherungsbeginn eingebe und auf VN Auswählen klicke", () => {
    cy.get('input[name="NewContractForm:ContractNumberSect1:headSection1:dateWrapper:startDate:inputText_input"]').type('01.08.2021')
    cy.get('a[id="NewContractForm:buttonBar:buttonsRight:buttonPartnerSearch:button"]').click()
});

When("ich die Natürliche Person auswähle", () => {
    cy.get('select[id="PartnersearchForm:partnersearch_new_section:grid1:left_section:partnerSpecification:selectOneMenu_input"]').select("NATURALPERSON", { force: true }).invoke('val').should('eq', 'NATURALPERSON')
});

When("ich den Namen und Vornamen eingebe", () => {
  cy.get('input[name="PartnersearchForm:partnersearch_new_section:grid1:left_section:surname:inputText"]').type('Juhahahuj')
  cy.get('input[name="PartnersearchForm:partnersearch_new_section:grid1:left_section:firstname:inputText"]').type('Miflow')
});

When("ich auf Suchen klicke", () => {
  cy.get('a[id="PartnersearchForm:buttons:buttongrid1:right:search:button:button"]').click()
});

When("ich auf Neuanlage Natürliche Person klicke", () => {
  cy.get('a[id="PartnersearchForm:buttongrid2:right:new_natural:button"]').click()
});

When("ich weitere Partnerdaten eingebe", () => {
  cy.get('select[id="CoredataForm:sec2_natural:grid1:left_section_natural:selectSalutation:selectOneMenu:selectOneMenu_input"]').select("#1#", { force: true }).invoke('val').should('eq', '#1#')
  cy.get('input[name="CoredataForm:sec2_natural:grid1:left_section_natural:birth:dateOfBirth:inputDate:inputText_input"]').type('01.01.1990')
  cy.get('select[id="CoredataForm:sec2_natural:grid1:left_section_natural:selectActivity:selectOneMenu:selectOneMenu_input"]').select("#4#", { force: true }).invoke('val').should('eq', '#4#')
  cy.get('select[id="CoredataForm:sec2_natural:grid1:left_section_natural:sex:selectOneMenu:selectOneMenu_input"]').select("MALE", { force: true }).invoke('val').should('eq', 'MALE')
  cy.get('a[id="CoredataForm:btngrid:right:ok:button:button"]').click()
});

When("ich auf der Maske Partnerübersicht auf Adresse klicke", () => {
  cy.get('a[id="OverviewForm:secPartnerAddress:icon:icon:icon"]').click()
});

When("ich die Adressdaten eingebe", () => {
  cy.get('input[name="AddressDataForm:sec2:grid4:street:inputText:inputText"]').type('Auf der Höh')
  cy.get('input[name="AddressDataForm:sec2:grid4:houseNumber:inputText:inputText"]').type('19')
  cy.get('input[name="AddressDataForm:sec2:grid4:postalcode:inputText:inputText"]').type('56332')
  cy.get('input[name="AddressDataForm:sec2:grid4:city:inputText:inputText"]').type('Koblenz')
  cy.get('select[id="AddressDataForm:sec3:grid5:addressType:selectOneMenu:selectOneMenu_input"]').select("#1#", { force: true }).invoke('val').should('eq', '#1#')
  cy.get('a[id="AddressDataForm:btngrid:right:IconButtonOk:button:button"]').click()
});

When("ich auf der Maske Partnerübersicht auf Bankverbindung klicke", () => {
  cy.get('a[id="OverviewForm:secPartnerBankAccount:icon:icon:icon"]').click()
});

When("ich die Bankdaten eingebe", () => {
  cy.get('input[name="BankDataForm:sec2:grid4:iban:inputText:inputText"]').type('DE45 5001 0517 3355 5785 85')
  cy.get('a[id="BankDataForm:btngrid:right:IconButtonOk:button:button"]').click()
});

When("ich auf Partneruebersicht - Schließen klicke", () => {
  cy.get('a[id="OverviewForm:btngrid1:right:Next:button:button"]').click()
});

When("ich die Antragsadten eingebe", () => {
    cy.get('input[name="ApplicationDataForm:ApplicationDataSect1:Vermittlerdaten:AgentNr:inputText"]').type('255')
    cy.get('input[name="ApplicationDataForm:ApplicationDataSect2:Antragsdaten2:wrapdate2:applicationDate:inputText_input"]').type('01.01.2023')
    cy.get('input[name="ApplicationDataForm:ApplicationDataSect2:Antragsdaten2:applicationReceiptDate:inputText_input"]').type('01.01.2023')
    cy.get('a[id="ApplicationDataForm:contractNumberButtons:buttonsRight:executeForward:button:button"]').click()
});

When("ich die Daten auf der Maske Neuer Vertrag eingebe", () => {
  cy.get('select[id="NewContractForm:NewContractSect2:headSection2:ReasonForChange:selectOneMenu_input"]').select("#100#", { force: true }).invoke('val').should('eq', '#100#')
  cy.get('a[id="NewContractForm:NewContractButtons:NewContractButtonList1:buttonOkWithNewRisk:button"]').click()
});

When("ich den Tarif eingebe", () => {
    cy.get('select[id="InsuredPersonForm:NewIpSect2:headSection2:civilServantInstitute:selectOneMenu_input"]').select("#1#", { force: true }).invoke('val').should('eq', '#1#')
    cy.get('select[id="InsuredPersonForm:NewIpSect4:headSection4:ipConditionCharactCNCI:selectOneMenu_input"]').select("#401#", { force: true }).invoke('val').should('eq', '#401#')
    cy.get('input[name="InsuredPersonForm:NewIpSect5:headSection5:tariffs:inputText"]').type('N,PVN')
    cy.get('a[id="InsuredPersonForm:buttonGrid:NewIpButtonRight:buttonOk:button:button"]').click()
});

When("ich auf Vorgangsende klicke", () => {
  cy.get('a[id="OverviewIpForm:buttonBar:buttonsRight:buttonFinishProcess:button:button"]').click()
});

Then("ich den Vorgangsende freigebe", () => {
  cy.get('a[id="FinishProcessForm:printButtons:buttonsRight:executeForward:button:button"]').click()
});