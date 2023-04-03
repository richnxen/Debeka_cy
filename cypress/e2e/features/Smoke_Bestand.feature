Feature: Smoke Bestand
  Scenario: Testfall 2069
    Given ich habe die Anwendung geöffnet
    When ich einen Login durchgeführt habe
    When ich in Menü KV-Vertrag Neuer Vertrag anklicke
    When ich in den Versicherungsbeginn eingebe und auf VN Auswählen klicke
    When ich die Natürliche Person auswähle
    When ich den Namen und Vornamen eingebe
    When ich auf Suchen klicke
    When ich auf Neuanlage Natürliche Person klicke
    When ich weitere Partnerdaten eingebe
    When ich auf der Maske Partnerübersicht auf Adresse klicke
    When ich die Adressdaten eingebe
    When ich auf der Maske Partnerübersicht auf Bankverbindung klicke
    When ich die Bankdaten eingebe
    When ich auf Partneruebersicht - Schließen klicke
    When ich die Antragsadten eingebe
    When ich die Daten auf der Maske Neuer Vertrag eingebe
    When ich den Tarif eingebe
    When ich auf Vorgangsende klicke
    Then ich den Vorgangsende freigebe
  