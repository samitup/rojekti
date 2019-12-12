Tässä tiedostossa on kuvattu Puskaradio-websovelluksessa käytettävän rajapinnan kutsut ja niissä käytettävät json-muodot.

	API resurssit:
		
		Viestit ja niiden kommentit kuvauksineen:
		
		// Hakee kaikki viestit ja niiden kommentit
		app.get('/screams', getAllScreams);
		
		// Lähettää uuden viestin
		app.post('/scream', FBAuth, postOneScream);
		
		// Hakee viestin ID:n perusteella 
		app.get('/scream/:screamId', getScream);
		
		// Poistaa viestin ID:n perusteella
		app.delete('/scream/:screamId', FBAuth, deleteScream);
		
		// Lähettää uuden kommentin viestiin
		app.post('/scream/:screamId/comment', FBAuth, commentOnScream);
		

		Käyttäjät:
	
		// Lähettää uuden käyttäjän rekisteröitymistiedot 
		app.post('/signup', signup);
		
		// Lähettää käyttäjän kirjautumistiedot 
		app.post('/login', login);
		
		// Hakee käyttäjän rekisteröitymistiedot
		app.get('/user', FBAuth, getAuthenticatedUser);

		
		VIESTIT JA NIIDEN KOMMENTIT:
		
		Kutsu:
		GET /screams
		
		Esimerkkivastausrunko JSON-muodossa:
[
{
        "screamId": "9qKzB8QAgtSMdLfpf2Kp",
        "body": "Hei kaikille!",
        "userHandle": "user",
        "createdAt": "2019-12-10T18:10:19.942Z",
        "commentCount": 0
},
{
        "screamId": "ng3yJ3BMb3cQVgYtnOzn",
        "body": "Moikka!",
        "userHandle": "näsijärventiikeri",
        "createdAt": "2019-12-11T08:10:16.421Z",
        "commentCount": 0
}
]

		Kutsu:
		POST /scream
		
		Esimerkkivastausrunko JSON-muodossa:
		
{
		"body": "Morjesta Näsijärven rannalta!",
		"userHandle": "näsijärventiikeri",
		"createdAt": "2019-12-11T08:10:16.421Z",
		"commentCount": 0,
		"screamId": "ng3yJ3BMb3cQVgYtnOzn"
}
		
		Kutsu:
		GET /scream/:screamId
		
		Esimerkkivastausrunko JSON-muodossa:
{
		"createdAt": "2019-12-11T08:10:16.421Z",
		"commentCount": 0,
		"userHandle": "näsijärventiikeri",
		"body": "Morjesta Näsijärven rannalta!",
		"screamId": "ng3yJ3BMb3cQVgYtnOzn",
		"comments": []
}
		
		Kutsu:
		POST /scream/:screamId/comment
		
		Esimerkkivastausrunko JSON-muodossa:
		
{
		"body": "Eka kommentti",
		"createdAt": "2019-12-11T08:30:26.462Z",
		"screamId": "ng3yJ3BMb3cQVgYtnOzn",
		"userHandle": "näsijärventiikeri"
}

		Kutsu: 
		DELETE /scream/:screamId
		
		Esimerkkivastausrunko JSON-muodossa:
		
{
		"message": "Puskahuuto poistettu"
}
		
		KÄYTTÄJÄT:
		
		Kutsu:
		POST /signup
		
		Esimerkkivastausrunko JSON-muodossa:
{
		"token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ1OThkYjVjZjE1ZWNhOTI0OWJhZTUzMDYzOWVkYzUzNmMzYzViYjUiLCJ0eXAiOiJKV1QifQ.eyJ
		pc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc29jaWFsYXBlLTgwZTBiIiwiYXVkIjoic29jaWFsYXBlLTgwZTBiIiwiYXV0aF90aW1l
		IjoxNTc2MDUxMzk4LCJ1c2VyX2lkIjoibjcxTE5jSzVKWVBkZFZNN1hMemxxQnhpUlpPMiIsInN1YiI6Im43MUxOY0s1SllQZGRWTTdYTHpscUJ4aVJaT
		zIiLCJpYXQiOjE1NzYwNTEzOTgsImV4cCI6MTU3NjA1NDk5OCwiZW1haWwiOiJrYWtrYXBlcnNlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYW
		xzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrYWtrYXBlcnNlQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3
		b3JkIn19.Z-Cb2byfsPpiWMzVYcmsb73WAQPuZad8FzKMSbPMzZd2zJ1zrNRYRX8I5BVjeSWS1CbktObuJRhK0iFRRhLENyf7uD9FWKJie7BEIXGbJYT7w
		WsICdTioaisMXv8QKdnYsymZgxpvA848aH3piXy78hVs6V2DcloBRoaJQ9MvUjBNw6RZFI8pK8BD7v5rbuw2WAEnn6pF7KSKNY-zv7lMGhfuBQgolQbSpyz
		ljCR_ju3kiM1U_wMwNuMr0Ju0oh9JOrARTp78gVSQnZ-24N52d-cK8haecJamxeTfKsd_TeOpjZEcPW-LZC0__bDGmvw4i0SKznhQHkB23_SXD491QSYqw"
}
		
		
		Kutsu:
		POST /login
		
		Esimerkkivastausrunko JSON-muodossa:	
{
		"token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ1OThkYjVjZjE1ZWNhOTI0OWJhZTUzMDYzOWVkYzUzNmMzYzViYjUiLCJ0eXAiOiJKV1QifQ.eyJ
		pc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc29jaWFsYXBlLTgwZTBiIiwiYXVkIjoic29jaWFsYXBlLTgwZTBiIiwiYXV0aF90aW1l
		IjoxNTc2MDUxMzk4LCJ1c2VyX2lkIjoibjcxTE5jSzVKWVBkZFZNN1hMemxxQnhpUlpPMiIsInN1YiI6Im43MUxOY0s1SllQZGRWTTdYTHpscUJ4aVJaT
		zIiLCJpYXQiOjE1NzYwNTEzOTgsImV4cCI6MTU3NjA1NDk5OCwiZW1haWwiOiJrYWtrYXBlcnNlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYW
		xzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJrYWtrYXBlcnNlQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3
		b3JkIn19.Z-Cb2byfsPpiWMzVYcmsb73WAQPuZad8FzKMSbPMzZd2zJ1zrNRYRX8I5BVjeSWS1CbktObuJRhK0iFRRhLENyf7uD9FWKJie7BEIXGbJYT7w
		WsICdTioaisMXv8QKdnYsymZgxpvA848aH3piXy78hVs6V2DcloBRoaJQ9MvUjBNw6RZFI8pK8BD7v5rbuw2WAEnn6pF7KSKNY-zv7lMGhfuBQgolQbSpyz
		ljCR_ju3kiM1U_wMwNuMr0Ju0oh9JyWJp4md-PciGZMRedkcaG4HRWu2QI7Se-2GQgTaIUE5cpyxuxvYUsHEVZQJYyS8RzdjhJYdPQHiFfOMvWBCVQ"
}

		Kutsu:
		GET /user
		
		Esimerkkivastausrunko JSON-muodossa:
{
    "credentials": {
        "createdAt": "2019-12-10T18:08:59.860Z",
        "handle": "näsijärventiikeri",
        "email": "näsijärventiikeri@gmail.com",
        "userId": "n71LNcK5JYPddVM7XLzlqBxiRZO2"
    }
}

	

