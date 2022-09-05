Feature: Sample download page

    Sample download page using cy-verify-download

    Background:
        Given A user opens a testing site 
    
    Scenario: Testing Download file using cy-verify-download plugin
    When user is on download page
    And click Download button
    Then verify file is downloaded