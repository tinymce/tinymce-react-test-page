import { fetchEventSource } from "@microsoft/fetch-event-source";

  const API_URL = 'https://demouserdirectory.tiny.cloud/v1/users';

	const advtemplate_templates = [
		{
			id: '1',
			title: 'Quick replies',
			items: [
				{
					id: '2',
					title: 'Message received',
					content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">Just a quick note to say we&rsquo;ve received your message, and will get back to you within 48 hours.</p>\n<p dir="ltr">For reference, your ticket number is: {{Ticket.Number}}</p>\n<p dir="ltr">Should you have any questions in the meantime, just reply to this email and it will be attached to this ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Regards,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
				},
				{
					id: '3',
					title: 'Thanks for the feedback',
					content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We appreciate you taking the time to provide feedback on {{Product.Name}}.</p>\n<p dir="ltr">It sounds like it wasn&rsquo;t able to fully meet your expectations, for which we apologize. Rest assured our team looks at each piece of feedback and uses it to decide what to focus on next with {{Product.Name}}.</p>\n<p dir="ltr"><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best, and let us know if there&rsquo;s anything else we can do to help.</p>\n<p dir="ltr">-{{Agent.FirstName}}</p>'
				},
				{
					id: '6',
					title: 'Still working on case',
					content: '<p dir="ltr"><img src="https://lh4.googleusercontent.com/-H7w_COxrsy2fVpjO6RRnoBsujhaLyg6AXux5zidqmQ_ik1mrE6BtnaTUdWYQuVbtKpviRqQiuPBOHNGUsEXvrRliEHc4-hKDrCLgQQ9Co-MI4uY2ehUvYtU1nn3EeS0WiUzST-7MQB2Z5YFXrMDwRk" width="320" height="240"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">Just a quick note to let you know we&rsquo;re still working on your case. It&rsquo;s taking a bit longer than we hoped, but we&rsquo;re aiming to get you an answer in the next 48 hours.</p>\n<p dir="ltr">Stay tuned,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
				}
			]
		},
		{
			id: '4',
			title: 'Closing tickets',
			items: [
				{
					id: '7',
					title: 'Closing ticket',
					content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We haven&rsquo;t heard back from you in over a week, so we have gone ahead and closed your ticket number {{Ticket.Number}}.</p>\n<p dir="ltr">If you&rsquo;re still running into issues, not to worry, just reply to this email and we will re-open your ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
				},
				{
					id: '8',
					title: 'Post-call survey',
					content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">&nbsp;</p>\n<p dir="ltr">How did we do?</p>\n<p dir="ltr">If you have a few moments, we&rsquo;d love you to fill out our post-support survey: {{Survey.Link}}</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks in advance!<br>{{Company.Name}} Customer Support</p>'
				}
			]
		},
		{
			id: '5',
			title: 'Product support',
			items: [
				{
					id: '9',
					title: 'How to find model number',
					content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">My name is {{Agent.FirstName}} and I will be glad to assist you today.</p>\n<p dir="ltr">To troubleshoot your issue, we first need your model number, which can be found on the underside of your product beneath the safety warning label.&nbsp;</p>\n<p dir="ltr">It should look something like the following: XX.XXXXX.X</p>\n<p dir="ltr">Once you send it over, I will advise on next steps.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks!</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
				},
				{
					id: '10',
					title: 'Support escalation',
					content: '<p dir="ltr"><img src="https://lh3.googleusercontent.com/z4hleIymnERrS9OQQMBwmkqVne8kYZA0Kly9Ny64pp4fi47CWWUy30Q0-UkjGf-K-50zrfR-wltHUTbExzZ7VUSUAUG60Fll5f2E0UZcKjKoa-ZVlIcuOoe-RRckFWqiihUOfVds7pXtM8Y59uy2hpw" width="295" height="295"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We have escalated your ticket {{Ticket.Number}} to second-level support.</p>\n<p dir="ltr">You should hear back from the new agent on your case, {{NewAgent.FirstName}}, shortly.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks,</p>\n<p dir="ltr">{{Company.Name}} Customer Support</p>'
				}
			]
		},
		{
			id: '6',
			title: 'Email Signatures',
			items: [
				{
					id: '11',
					title: 'Tiny Signature',
					content: '<p>Regards<br /><br /><br /><a title="Tiny Technologies Inc" href="https://www.tiny.cloud/" target="_blank"><img src="https://www.tiny.cloud/email-static/tiny-logo.png" alt="Tiny Technologies Inc" width="130" height="42" /></a></p><p>Shiridi Gandham<br />QA Template Manager</p><p>Email:&nbsp;<a title="Email Shiridi" href="mailto:shiridi.gandham@tiny.cloud" target="_blank">shiridi.gandham@tiny.cloud</a><br />Phone:&nbsp;(+617) 3161 3557</p><p>Tiny Technologies<br /><a title="Tiny Technologies" href="https://www.tiny.cloud/" target="_blank">www.tiny.cloud</a></p><p><a title="Linkedin" href="https://www.linkedin.com/company/jointiny/" target="_blank" aria-invalid="true"><img src="https://www.tiny.cloud/email-static/social-linkedin.png" alt="Linkedin" width="20" height="20" /></a>&nbsp;<a title="Facebook" href="https://www.facebook.com/jointiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-facebook.png" alt="Facebook" width="20" height="20" /></a>&nbsp;<a title="Twitter" href="https://twitter.com/joinTiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-twitter.png" alt="Twitter" width="20" height="20" /></a>&nbsp;<a title="GitHub" href="https://github.com/tinymce/" target="_blank"><img src="https://www.tiny.cloud/email-static/social-github.png" alt="GitHub" width="20" height="20" /></a>&nbsp;<a title="Stack Overflow" href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank"><img src="https://www.tiny.cloud/email-static/social-stackoverflow.png" alt="Stack Overflow" width="20" height="20" /></a></p>'
				}
			]
		}
	];

	const mergetags_list = [
		{
			value: 'Current.Date',
			title: 'Current date in DD/MM/YYYY format'
		},
		{
			value: 'Campaign.Toc',
			title: 'Linked table of contents in your campaign'
		},
		{
			title: 'Phone',
			menu: [
				{
					value: 'Phone.Home'
				},
				{
					value: 'Phone.work'
				}
			]
		},
		{
			title: 'Person',
			menu: [
				{
					value: 'Person.Name'
				},
				{
					value: 'Person.Name.First'
				},
				{
					value: 'Person.Name.Last'
				},
				{
					value: 'Person.Name.Full'
				},
				{
					title: 'Email',
					menu: [
						{
							value: 'Person.Email.Work'
						},
						{
							value: 'Person.Email.Home'
						}
					]
				}
			]
		}
	];

  // const userNames = [		//Fake users
  //   'Terry Green', 'Edward Carroll', 'Virginia Turner', 'Alexander Schneider', 'Gary Vasquez', 'Randy Howell',
  //   'Katherine Moore', 'Betty Washington', 'Grace Chapman', 'Christina Nguyen', 'Danielle Rose', 'Thomas Freeman',
  //   'Thomas Armstrong', 'Vincent Lee', 'Brittany Kelley', 'Brenda Wheeler', 'Amy Price', 'Hannah Harvey',
  //   'Bobby Howard', 'Frank Fox', 'Diane Hopkins', 'Johnny Hawkins', 'Sean Alexander', 'Emma Roberts', 'Thomas Snyder',
  //   'Thomas Allen', 'Rebecca Ross', 'Amy Boyd', 'Kenneth Watkins', 'Sarah Tucker', 'Lawrence Burke', 'Emma Carr',
  //   'Zachary Mason', 'John Scott', 'Michelle Davis', 'Nicholas Cole', 'Gerald Nelson', 'Emily Smith', 'Christian Stephens',
  //   'Grace Carr', 'Arthur Watkins', 'Frances Baker', 'Katherine Cook', 'Roger Wallace', 'Pamela Arnold', 'Linda Barnes',
  //   'Jacob Warren', 'Billy Ramirez', 'Pamela Walsh', 'Paul Wade', 'Katherine Campbell', 'Jeffrey Berry', 'Patrick Bowman',
  //   'Dennis Alvarez', 'Crystal Lucas', 'Howard Mendoza', 'Patricia Wallace', 'Peter Stone', 'Tiffany Lane', 'Joe Perkins',
  //   'Gloria Reynolds', 'Willie Fernandez', 'Doris Harper', 'Heather Sandoval', 'Danielle Franklin', 'Ann Ellis',
  //   'Christopher Hernandez', 'Pamela Perry', 'Matthew Henderson', 'Jesse Mitchell', 'Olivia Reed', 'David Clark', 'Juan Taylor',
  //   'Michael Garrett', 'Gerald Guerrero', 'Jerry Coleman', 'Joyce Vasquez', 'Jane Bryant', 'Sean West', 'Deborah Bradley',
  //   'Phillip Castillo', 'Martha Coleman', 'Ryan Santos', 'Harold Hanson', 'Frances Hoffman', 'Heather Fisher', 'Martha Martin',
  //   'George Gray', 'Rachel Herrera', 'Billy Hart', 'Kelly Campbell', 'Kelly Marshall', 'Doris Simmons', 'Julie George',
  //   'Raymond Burke', 'Ruth Hart', 'Jack Schmidt', 'Billy Schmidt', 'Ruth Wagner', 'Zachary Estrada', 'Olivia Griffin', 'Ann Hayes',
  //   'Julia Weaver', 'Anna Nelson', 'Willie Anderson', 'Anna Schneider', 'Debra Torres', 'Jordan Holmes', 'Thomas Dean',
  //   'Maria Burton', 'Terry Long', 'Danielle McDonald', 'Kyle Flores', 'Cheryl Garcia', 'Judy Delgado', 'Karen Elliott',
  //   'Vincent Ortiz', 'Ann Wright', 'Ann Ramos', 'Roy Jensen', 'Keith Cunningham', 'Mary Campbell', 'Jesse Ortiz', 'Joseph Mendoza',
  //   'Nathan Bishop', 'Lori Valdez', 'Tammy Jacobs', 'Mary West', 'Juan Mitchell', 'Thomas Adams', 'Christian Martinez', 'James Ramos',
  //   'Deborah Ross', 'Eric Holmes', 'Thomas Diaz', 'Sharon Morales', 'Kathryn Hamilton', 'Helen Edwards', 'Betty Powell',
  //   'Harry Campbell', 'Raymond Perkins', 'Melissa Wallace', 'Danielle Hicks', 'Harold Brewer', 'Jack Burns', 'Anna Robinson',
  //   'Dorothy Nguyen', 'Jane Dean', 'Janice Hunter', 'Ryan Moore', 'Brian Riley', 'Brittany Bradley', 'Phillip Ortega', 'William Fisher',
  //   'Jennifer Schultz', 'Samantha Perez', 'Linda Carr', 'Ann Brown', 'Shirley Kim', 'Jeremy Alvarez', 'Dylan Oliver', 'Roy Gomez',
  //   'Ethan Brewer', 'Ruth Lucas', 'Marilyn Myers', 'Danielle Wright', 'Jose Meyer', 'Bobby Brown', 'Angela Crawford', 'Brandon Willis',
  //   'Kyle McDonald', 'Aaron Valdez', 'Kevin Webb', 'Ashley Gordon', 'Karen Jenkins', 'Johnny Santos', 'Ashley Henderson', 'Amy Walters',
  //   'Amber Rodriguez', 'Thomas Ross', 'Dorothy Wells', 'Jennifer Murphy', 'Douglas Phillips', 'Helen Johnston', 'Nathan Hawkins',
  //   'Roger Mitchell', 'Michael Young', 'Eugene Cruz', 'Kevin Snyder', 'Frank Ryan', 'Tiffany Peters', 'Beverly Garza', 'Maria Wright',
  //   'Shirley Jensen', 'Carolyn Munoz', 'Kathleen Day', 'Ethan Meyer', 'Rachel Fields', 'Joan Bell', 'Ashley Sims', 'Sara Fields',
  //   'Elizabeth Willis', 'Ralph Torres', 'Charles Lopez', 'Aaron Green', 'Arthur Hanson', 'Betty Snyder', 'Jose Romero', 'Linda Martinez',
  //   'Zachary Tran', 'Sean Matthews', 'Eric Elliott', 'Kimberly Welch', 'Jason Bennett', 'Nicole Patel', 'Emily Guzman', 'Lori Snyder',
  //   'Sandra White', 'Christina Lawson', 'Jacob Campbell', 'Ruth Foster', 'Mark McDonald', 'Carol Williams', 'Alice Washington',
  //   'Brandon Ross', 'Judy Burns', 'Zachary Hawkins', 'Julie Chavez', 'Randy Duncan', 'Lisa Robinson', 'Jacqueline Reynolds', 'Paul Weaver',
  //   'Edward Gilbert', 'Deborah Butler', 'Frances Fox', 'Joshua Schmidt', 'Ashley Oliver', 'Martha Chavez', 'Heather Hudson',
  //   'Lauren Collins', 'Catherine Marshall', 'Katherine Wells', 'Robert Munoz', 'Pamela Nelson', 'Dylan Bowman', 'Virginia Snyder',
  //   'Janet Ruiz', 'Ralph Burton', 'Jose Bryant', 'Russell Medina', 'Brittany Snyder', 'Richard Cruz', 'Matthew Jimenez', 'Danielle Graham',
  //   'Steven Guerrero', 'Benjamin Matthews', 'Janet Mendoza', 'Harry Brewer', 'Scott Cooper', 'Alexander Keller', 'Virginia Gordon',
  //   'Randy Scott', 'Kimberly Olson', 'Helen Lynch', 'Ronald Garcia', 'Joseph Willis', 'Philip Walker', 'Tiffany Harris', 'Brittany Weber',
  //   'Gregory Harris', 'Sean Owens', 'Wayne Meyer', 'Roy McCoy', 'Keith Lucas', 'Christian Watkins', 'Christopher Porter', 'Sandra Lopez',
  //   'Harry Ward', 'Julie Sims', 'Albert Keller', 'Lori Ortiz', 'Virginia Henry', 'Samuel Green', 'Judith Cole', 'Ethan Castillo', 'Angela Ellis',
  //   'Amy Reid', 'Jason Brewer', 'Aaron Clark', 'Aaron Elliott', 'Doris Herrera', 'Howard Castro', 'Kenneth Davis', 'Austin Spencer',
  //   'Jonathan Marshall', 'Phillip Nelson', 'Julia Guzman', 'Robert Hansen', 'Kevin Anderson', 'Gerald Arnold', 'Austin Castro', 'Zachary Moore',
  //   'Joseph Cooper', 'Barbara Black', 'Albert Mendez', 'Marie Lane', 'Jacob Nichols', 'Virginia Marshall', 'Aaron Miller', 'Linda Harvey',
  //   'Christopher Morris', 'Emma Fields', 'Scott Guzman', 'Olivia Alexander', 'Kelly Garrett', 'Jesse Hanson', 'Henry Wong', 'Billy Vasquez',
  //   'Larry Ramirez', 'Bryan Brooks', 'Alan Berry', 'Nicole Powell', 'Stephen Bowman', 'Eric Hughes', 'Elizabeth Obrien', 'Timothy Ramos',
  //   'Michelle Russell', 'Denise Ruiz', 'Sean Carter', 'Amanda Barnett', 'Kathy Black', 'Terry Gutierrez', 'John Jensen', 'Grace Sanchez',
  //   'Tiffany Harvey', 'Jacqueline Sims', 'Wayne Lee', 'Roy Foster', 'Joyce Hart', 'Joseph Russell', 'Harold Washington', 'Beverly Cox',
  //   'Nicole Morales', 'Anna Carpenter', 'Jesse Ray', 'Ann Snyder', 'Mark Diaz', 'Elizabeth Harper', 'Andrew Guerrero', 'Cheryl Silva',
  //   'Michelle Hudson', 'Jeffrey Santos', 'Victoria Vasquez', 'Matthew Meyer', 'Jacob Murray', 'Jose Munoz', 'Edward Howell', 'Vincent Hunter',
  //   'Daniel Walters', 'Samantha Obrien', 'Laura Elliott', 'Richard Olson', 'Daniel Graham', 'Carol Lee', 'Grace Sullivan', 'Nancy Rodriguez',
  //   'Tyler Tran', 'Crystal Shaw', 'Madison Allen', 'Ralph Sims', 'Joe Jenkins', 'Dennis Ray', 'Arthur Davidson', 'Victoria Allen', 'Arthur Jackson',
  //   'Joan Thomas', 'Daniel Hopkins', 'Gloria Hicks', 'Danielle Price', 'Craig Keller', 'Alan Morgan', 'Gregory Silva', 'Samantha Kelly',
  //   'Rachel Williamson', 'Bruce Garrett', 'Jacob Smith', 'Kathleen Nichols', 'Sarah Long', 'Carol Pearson', 'Virginia Mendez', 'Judy Valdez',
  //   'Jason Garza', 'Brenda Fowler', 'Karen Edwards', 'Alexander Anderson', 'Pamela Wallace', 'Ruth Howell', 'Walter Hernandez', 'George Lucas',
  //   'Samantha Long', 'Margaret Garza', 'Kathleen Schultz', 'Frances Guerrero', 'Amber Meyer', 'Rachel Morales', 'Teresa Curtis', 'Heather Bell',
  //   'Grace Johnson', 'Melissa King', 'Zachary Cook', 'Carol Schultz', 'Jane Beck', 'Karen Stone', 'Roger Brooks', 'Carolyn Fuller', 'Nicholas Coleman',
  //   'William Bishop', 'Christine May', 'Linda George', 'Jean Meyer', 'Cheryl Armstrong', 'Danielle Welch', 'Amanda Graham', 'Janice Carter',
  //   'Catherine Brooks', 'Lawrence Gonzalez', 'Amy Russell', 'Eugene Jimenez', 'Joseph Carlson', 'Peter McCoy', 'Jerry Washington', 'Carolyn Obrien',
  //   'Mark Walker', 'Stephanie Hoffman', 'Julie Pena', 'Karen Curtis', 'Bryan Cruz', 'Madison Shaw', 'Rachel Graham', 'Susan Simpson', 'Andrea Harrison',
  //   'Bryan Miller', 'Vincent McDonald', 'Jesse McCoy', 'Christine Ramos', 'Dorothy Riley', 'Karen Warren', 'Ashley Weber', 'Judith Robinson',
  //   'Alan Mendez', 'Donna Medina', 'Helen Lane', 'Douglas Clark', 'Brenda Romero', 'Doris Wells', 'Patrick Howell', 'Doris Lawrence', 'Harry Jacobs',
  //   'Phillip Rose', 'Deborah Patel', 'Bryan Day', 'Rachel Butler', 'Paul Butler', 'Judy Knight', 'Willie Wallace', 'Phillip Anderson', 'Emma Black',
  //   'Lisa Lynch', 'Kimberly Freeman', 'Ronald West', 'Kathleen Harris', 'Martha Ruiz', 'Phillip Moreno', 'Robert Vargas', 'Jesse Diaz', 'Christine Weber',
  //   'Karen Stanley', 'Theresa Edwards', 'Kathryn Chavez', 'Sarah Rios', 'Danielle Wong', 'Kathy Carr', 'Joan Diaz', 'Albert Walters',
  //   'Denise Kim', 'Katherine Pearson', 'Diana Richardson', 'Harry Ford', 'Eric Mills', 'Sean Hicks', 'Joe Brown', 'Judith Morgan', 'Harry Hunter',
  //   'Matthew Bryant', 'Tyler Rose', 'Mildred Delgado', 'Emma Peters', 'Walter Delgado', 'Lauren Gilbert', 'Christopher Romero'
  // ];

  // const fakeServer = (function () {
  //   const descriptions = [	//user profile descriptions
  //       'I like to work hard, play hard!',
  //       'I drink like a fish, that is a fish that drinks coffee.',
  //       'OutOfCheeseError: Please reinstall universe.',
  //       'Do not quote me.',
  //       'No one reads these things right?'
  //   ];

  //   const userDb = {};		//database of users
  //   userNames.map(function (fullName) {
  //       const name = fullName.toLowerCase().replace(/ /g, '');
  //       const description = descriptions[Math.floor(descriptions.length * Math.random())];
  //       const image = 'https://www.google.com/google.jpg';
  //       return {
  //           id: name,
  //           name: name,
  //           fullName: fullName,
  //           description: description,
  //           image: image
  //       };
  //   }).forEach(function(user) {
  //       userDb[user.id] = user;
  //   });

  //   const fetchUsers = function() {		//fetch list of users with basic details
  //       return new Promise(function(resolve) {
  //           setTimeout(function() {
  //               const users = Object.keys(userDb).map(function(id) {
  //                   const user = userDb[id];
  //                   return {
  //                       id: id,
  //                       name: user.name,
  //                       image: user.image,
  //                       description: user.description
  //                   };
  //               });
  //               resolve(users);
  //           }, 500);
  //       });
  //   };

  //   const fetchUser = function(id) {	//fetch all details of single user
  //       return new Promise(function(resolve, reject) {
  //           setTimeout(function() {
  //               if (Object.prototype.hasOwnProperty.call(userDb, id)) {
  //                   resolve(userDb[id]);
  //               }
  //               reject('unknown user id "' + id + '"');
  //           }, 300);
  //       });
  //   };
  //   return {
  //       fetchUsers: fetchUsers,
  //       fetchUser: fetchUser
  //   };
  // })();
  
  const mentions_fetch = async (query, success) => {
    const searchPhrase = query.term.toLowerCase();
    await fetch(`${API_URL}?q=${encodeURIComponent(searchPhrase)}`)
    .then((response) => response.json())
    .then((users) => success(users.data.map((userInfo) => ({
      id: userInfo.id,
      name: userInfo.name,
      image: userInfo.avatar,
      description: userInfo.custom.role
    }))))
    .catch((error) => console.log(error));
  };

  const createCard = (userInfo) => {
    const div = document.createElement('div');
    div.innerHTML = (
      '<div class="card">' +
        '<img class="avatar" src="' + userInfo.image + '">' +
        '<h1>' + userInfo.name + '</h1>' +
        '<p>' + userInfo.description + '</p>' +
      '</div>'
    );
    return div;
  };

  const mentions_menu_complete = (editor, userInfo) => {
    const span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  };

  const mentions_menu_hover = async (userInfo, success) => {
    const card = createCard(userInfo);
    success(card);
  };

  const mentions_select = async (mention, success) => {
    const id = mention.getAttribute('data-mention-id');
    await fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((userInfo) => {
        const card = createCard({
          id: userInfo.id,
          name: userInfo.name,
          image: userInfo.avatar,
          description: userInfo.custom.role
        });
        success(card);
      })
      .catch((error) => console.error(error));
  };

	const ai_request = (request, respondWith) => {
    respondWith.stream((signal, streamMessage) => {
      // Adds each previous query and response as individual messages
      const conversation = request.thread.flatMap((event) => {
        if (event.response) {
          return [
            { role: 'user', content: event.request.query },
            { role: 'assistant', content: event.response.data }
          ];
        } else {
          return [];
        }
      });
  
      // System messages provided by the plugin to format the output as HTML content.
      const systemMessages = request.system.map((content) => ({
        role: 'system',
        content
      }));
  
      // Forms the new query sent to the API
      const content = request.context.length === 0 || conversation.length > 0
        ? request.query
        : `Question: ${request.query} Context: """${request.context}"""`;
  
      const messages = [
        ...conversation,
        ...systemMessages,
        { role: 'user', content }
      ];
    
      let hasHead = false;
      let markdownHead = "";
    
      const hasMarkdown = (message) => {
        if (message.includes("`") && markdownHead !== "```") {
        const numBackticks = message.split("`").length - 1;
        markdownHead += "`".repeat(numBackticks);
        if (hasHead && markdownHead === "```") {
          markdownHead = "";
          hasHead = false;
        }
        return true;
        } else if (message.includes("html") && markdownHead === "```") {
        markdownHead = "";
        hasHead = true;
        return true;
        }
        return false;
      };
    
      const requestBody = {
        model: 'gpt-4o',
        temperature: 0.7,
        max_tokens: 4000,
        messages,
        stream: true
      };

      const openAiOptions = {
        signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      };

      const onopen = async (response) => {
        if (response) {
          const contentType = response.headers.get('content-type');
          if (response.ok && contentType?.includes('text/event-stream')) {
            return;
          } else if (contentType?.includes('application/json')) {
            const data = await response.json();
            if (data.error) {
              throw new Error(`${data.error.type}: ${data.error.message}`);
            }
          }
        } else {
          throw new Error('Failed to communicate with the ChatGPT API');
        }
      };

      // This function passes each new message into the plugin via the `streamMessage` callback.
      const onmessage = (ev) => {
        const data = ev.data;
        if (data !== '[DONE]') {
          const parsedData = JSON.parse(data);
          const firstChoice = parsedData?.choices[0];
          const message = firstChoice?.delta?.content;
          if (message && message !== "") {
            if (!hasMarkdown(message)) {
              streamMessage(message);
            }
          }
        }
      };

      const onerror = (error) => {
        // Stop operation and do not retry by the fetch-event-source
        throw error;
      };

      return fetchEventSource('https://openai-dev-proxy.tiny.work/v1/chat/completions', {
            ...openAiOptions,
            openWhenHidden: true,
            onopen,
            onmessage,
            onerror
          }).then(async (response) => {
            if (response && !response.ok) {
              const data = await response.json();
              if (data.error) {
                throw new Error(`${data.error.type}: ${data.error.message}`);
              }
            }
          }
      ).catch(onerror);
    });
  };

	const revisions = [
		{
			'revisionId': '1',
			'createdAt': '2023-11-25T03:30:46.171Z',
			'content': '<h2>Rev 1</h2>'
		},
		{
			'revisionId': '2',
			'createdAt': '2023-11-25T12:06:09.675Z',
			'content': '<h2>Rev 2</h2>'
		},
		{
			'revisionId': '3',
			'createdAt': '2023-11-27T03:23:32.351Z',
			'content': '<h2>Rev 3</h2>'
		},
		{
			'revisionId': '4',
			'createdAt': '2023-11-29T12:35:16.203Z',
			'content': '<h2>Rev 4</h2>'
		},
		{
			'revisionId': '5',
			'createdAt': '2023-11-28T08:01:56.100Z',
			'content': '<h2>Rev 5</h2>'
		}
	];

  const suggestededitsModel = {
    'history': {
        '2': [
            {
                'id': 1,
                'uid': 'james-wilson',
                'timestamp': 1752576936000,
                'feedback': 'Nice improvement!'
            }
        ]
    },
    'version': 1,
    'contents': [
        {
            'type': 'p',
            'children': [
                {
                    'type': 'img',
                    'attrs': {
                        'style': 'display: block; margin-left: auto; margin-right: auto;',
                        'title': 'Tiny Logo',
                        'src': 'https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png',
                        'alt': 'TinyMCE Logo',
                        'width': '128',
                        'height': '128'
                    }
                }
            ]
        },
        {
            'type': 'h2',
            'attrs': {
                'style': 'text-align: center;'
            },
            'children': [
                {
                    'text': 'Welcome to the TinyMCE Suggested Edits '
                },
                {
                    'text': 'interactive ',
                    'opData': {
                        'id': 1,
                        'type': 'insert',
                        'uid': 'alex-thompson',
                        'timestamp': 1752015064000
                    }
                },
                {
                    'text': 'demo!'
                }
            ]
        },
        {
            'type': 'p',
            'attrs': {
                'style': 'text-align: center;'
            },
            'children': [
                {
                    'text': 'Try out the Suggested Edits feature'
                },
                {
                    'text': ': type in the editor, apply formatting or delete some content. T',
                    'opData': {
                        'id': 2,
                        'type': 'insert',
                        'uid': 'alex-thompson',
                        'timestamp': 1752415064000
                    }
                },
                {
                    'text': ' by typing in the editor and t',
                    'opData': {
                        'id': 2,
                        'type': 'remove',
                        'uid': 'alex-thompson',
                        'timestamp': 1752415064000
                    }
                },
                {
                    'text': 'hen'
                },
                {
                    'text': ',',
                    'opData': {
                        'id': 3,
                        'type': 'insert',
                        'uid': 'alex-thompson',
                        'timestamp': 1752515064000
                    }
                },
                {
                    'text': ' click'
                },
                {
                    'text': 'ing',
                    'opData': {
                        'id': 4,
                        'type': 'remove',
                        'uid': 'alex-thompson',
                        'timestamp': 1752515064000
                    }
                },
                {
                    'text': ' the Review Changes button in the toolbar'
                },
                {
                    'text': ' to see your changes',
                    'opData': {
                        'id': 5,
                        'type': 'insert',
                        'uid': 'kai-nakamura',
                        'timestamp': 1752615064000
                    }
                },
                {
                    'text': '.'
                }
            ]
        },
        {
            'type': 'p',
            'attrs': {
                'style': 'text-align: center;'
            },
            'children': [
                {
                    'text': 'And visit the '
                },
                {
                    'text': 'pricing page',
                    'opData': {
                        'id': 6,
                        'type': 'modify',
                        'uid': 'kai-nakamura',
                        'timestamp': 1752615064000
                    },
                    'format': [
                        {
                            'type': 'a',
                            'attrs': {
                                'href': 'https://www.tiny.cloud/pricing'
                            }
                        }
                    ],
                    'oldFormat': [
                        {
                            'type': 'a',
                            'attrs': {
                                'href': 'https://www.tiny.cloud/pricing'
                            }
                        },
                        'em'
                    ]
                },
                {
                    'text': ' to learn more about our Premium plugins.'
                }
            ]
        },
        {
            'type': 'h2',
            'children': [
                {
                    'text': 'A simple table to play with'
                }
            ]
        },
        {
            'type': 'table',
            'attrs': {
                'style': 'border-collapse: collapse; width: 100%;',
                'border': '1'
            },
            'children': [
                {
                    'type': 'thead',
                    'children': [
                        {
                            'type': 'tr',
                            'attrs': {
                                'style': 'text-align: left;'
                            },
                            'children': [
                                {
                                    'type': 'th',
                                    'children': [
                                        {
                                            'text': 'Product'
                                        }
                                    ]
                                },
                                {
                                    'type': 'th',
                                    'children': [
                                        {
                                            'text': 'Cost'
                                        }
                                    ]
                                },
                                {
                                    'type': 'th',
                                    'children': [
                                        {
                                            'text': 'Really?'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    'type': 'tbody',
                    'children': [
                        {
                            'type': 'tr',
                            'children': [
                                {
                                    'type': 'td',
                                    'children': [
                                        {
                                            'text': 'TinyMCE Cloud'
                                        }
                                    ]
                                },
                                {
                                    'type': 'td',
                                    'children': [
                                        {
                                            'text': 'Get started for free'
                                        }
                                    ]
                                },
                                {
                                    'type': 'td',
                                    'children': [
                                        {
                                            'text': 'Yes!',
                                            'format': [
                                                'strong'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'type': 'tr',
                            'children': [
                                {
                                    'type': 'td',
                                    'children': [
                                        {
                                            'text': 'Plupload'
                                        }
                                    ]
                                },
                                {
                                    'type': 'td',
                                    'children': [
                                        {
                                            'text': 'Free'
                                        }
                                    ]
                                },
                                {
                                    'type': 'td',
                                    'children': [
                                        {
                                            'text': 'Yes!',
                                            'format': [
                                                'strong'
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            'type': 'h2',
            'opData': {
                'id': 7,
                'type': 'insert',
                'uid': 'mia-andersson',
                'timestamp': 1752576331000
            },
            'children': [
                {
                    'text': 'Found a bug?'
                }
            ]
        },
        {
            'type': 'p',
            'children': [
                {
                    'text': ' ',
                    'opData': {
                        'id': 7,
                        'type': 'remove',
                        'uid': 'mia-andersson',
                        'timestamp': 1752576331000
                    }
                },
                {
                    'text': 'If you believe you have found a bug please create an issue on the ',
                    'opData': {
                        'id': 7,
                        'type': 'insert',
                        'uid': 'mia-andersson',
                        'timestamp': 1752576331000
                    }
                },
                {
                    'text': 'GitHub repo',
                    'opData': {
                        'id': 7,
                        'type': 'insert',
                        'uid': 'mia-andersson',
                        'timestamp': 1752576331000
                    },
                    'format': [
                        {
                            'type': 'a',
                            'attrs': {
                                'href': 'https://github.com/tinymce/tinymce/issues'
                            }
                        }
                    ]
                },
                {
                    'text': ' to report it to the developers.',
                    'opData': {
                        'id': 7,
                        'type': 'insert',
                        'uid': 'mia-andersson',
                        'timestamp': 1752576331000
                    }
                }
            ]
        },
        {
            'type': 'h2',
            'children': [
                {
                    'text': 'Finally…'
                }
            ]
        },
        {
            'type': 'p',
            'children': [
                {
                    'text': 'Don’t forget to check out '
                },
                {
                    'text': 'Plupload',
                    'format': [
                        {
                            'type': 'a',
                            'attrs': {
                                'href': 'http://www.plupload.com',
                                'target': '_blank',
                                'rel': 'noopener'
                            }
                        }
                    ]
                },
                {
                    'text': ', the upload solution featuring HTML5 upload support.'
                }
            ]
        },
        {
            'type': 'p',
            'children': [
                {
                    'text': 'Thanks for supporting TinyMCE. We hope it helps you and your users create great content.'
                }
            ]
        },
        {
            'type': 'p',
            'children': [
                {
                    'text': 'All the best from the TinyMCE team.'
                }
            ]
        }
    ]
};

	const basicConfig = {
		height: 600,
		autocorrect_autocorrect: true,
		autocorrect_capitalize: true,
		advcode_inline: true,
		mobile: {
			theme: "silver",
			contextmenu: "link image table preview",
		},
		pad_empty_with_br: true,
		help_accessibility: true,
    // TODO: Target for tinymce 8
    user_id: 'kai-nakamura',
    fetch_users: (userIds) =>
      Promise.all(userIds.map((userId) => fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .catch(() => ({ id: userId })))),
    
	};

  const pluginsConfig = [
    {
      name: 'accordion',
      config: {}
    },
    { 
      name: 'advlist',
      config: {
        advlist_number_styles: "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman",
        advlist_bullet_styles: "default,circle,disc,square",
      }
    },
    { 
      name: 'anchor',
      config: {}
    },
    {
      name: 'autolink',
      config: {}
    },
    {
      name: 'autoresize',
      config: {}
    },
    {
      name: 'autosave',
      config: {}
    },
    {
      name: 'charmap',
      config: {}
    },
    {
      name: 'code',
      config: {}
    },
    {
      name: 'codesample',
      config: {
        codesample_languages: [
          { text: 'HTML/XML', value: 'markup' },
          { text: 'JavaScript', value: 'javascript' },
          { text: 'CSS', value: 'css' },
          { text: 'PHP', value: 'php' },
          { text: 'Ruby', value: 'ruby' },
          { text: 'Python', value: 'python' },
          { text: 'Java', value: 'java' },
          { text: 'C', value: 'c' },
          { text: 'C#####', value: 'csharpppppp' },
          { text: 'C++', value: 'cpp' }
        ],
      }
    },
    {
      name: 'directionality',
      config: {}
    },
    {
      name: 'emoticons',
      config: {}
    },
    // fullscreen is only available in TinyMCE < v7
    {
      name: 'fullscreen',
      config: {}
    },
    {
      name: 'help',
      config: {}
    },
    {
      name: 'image',
      config: {
        image_advtab: true,
        image_description: true,
        image_dimensions: true,
        image_title: true,
        image_caption: true,
      }
    },
    {
      name: 'importcss',
      config: {}
    },
    {
      name: 'insertdatetime',
      config: {
        // override the default formatting rule for date formats inserted by the mceInsertDate command
        insertdatetime_dateformat: "%Y/%m/%d",

        // override the default formatting rule for times inserted by the mceInsertTime command
        insertdatetime_timeformat: "%H%M%S",

        // specify a list of date/time formats to be used in the date menu or date select box
        insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D", "%H%M%S", "%Y/%m/%d"],
      }
    },
    {
      name: 'link',
      config: {}
    },
    {
      name: 'lists',
      config: {}
    },
    {
      name: 'media',
      config: {}
    },
    {
      name: 'nonbreaking',
      config: {}
    },
    {
      name: 'pagebreak',
      config: {}
    },
    {
      name: 'preview',
      config: {}
    },
    {
      name: 'quickbars',
      config: {}
    },
    {
      name: 'save',
      config: {}
    },
    {
      name: 'searchreplace',
      config: {
        save_onsavecallback: function () { alert("Saved"); },
        save_oncancelcallback: function () { alert("Save Cancelled"); },
      }
    },
    {
      name: 'table',
      config: {}
    },
    {
      name: 'visualblocks',
      config: {}
    },
    {
      name: 'visualchars',
      config: {}
    },
    {
      name: 'wordcount',
      config: {}
    },
    // Premium plugins
    {
      name: 'a11ychecker',
      config: {},
    },
    {
      name: 'advcode',
      config: {
        advcode_inline: true
      },
    },
    {
      name: 'advtable',
      config: {},
    },
    {
      name: 'advtemplate',
      config: {
        advtemplate_templates
      },
    },
    {
      name: 'ai',
      config: {
        ai_request
      },
    },
    {
      name: 'autocorrect',
      config: {
        autocorrect_autocorrect: true,
        autocorrect_capitalize: true,
      },
    },
    {
      name: 'casechange',
      config: {},
    },
    {
      name: 'checklist',
      config: {},
    },
    {
      name: 'editimage',
      config: {
        editimage_toolbar: "rotateleft rotateright flipv fliph editimage imageoptions",
        // TODO: re-check DOD
        editimage_proxy_service_url: 'https://imageproxy.tiny.cloud',

      },
    },
    {
      name: 'exportpdf',
      config: {
        exportpdf_service_url: "https://exportpdf.converter.tiny.cloud",
        exportpdf_converter_options: {
        // HTML content to be used as the header in each page of the PDF
        header_html: '<div style="text-align:center;">Document Title</div><div>Date: <span class="date"></span></div><div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
  
        // HTML content to be used as the footer in each page of the PDF
        footer_html: '<div style="text-align:right;">Confidential</div>',
  
        // CSS styles specifically for the header and footer
        header_and_footer_css: 'div { color: blue; font-family: Arial, sans-serif; font-size: 10pt; }',
  
        margin_top: '2cm',
        margin_bottom: '2cm',
        margin_left: '20mm',
        margin_right: '20mm',
  
        // 'Letter', 'Legal', 'Tabloid', 'Ledger', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6'
        format: 'A4',
        // 'portrait' or 'landscape'
        page_orientation: 'portrait',
      },
      exportpdf_converter_style: 'body { color: black !important; font-family: Helvetica, Arial, sans-serif; } p { color: cyan !important; }',
      },
    },
    {
      name: 'exportword',
      config: {
        exportword_service_url: "https://exportdocx.converter.tiny.cloud",
        exportword_converter_options: {
          // 'Letter', 'Legal', 'Tabloid', 'Statement', 'Executive', 'A3', 'A4', 'A5', 'A6', 'B4', 'B5'
          format: 'A4',
    
          margin_top: '1in',
          margin_bottom: '1in',
          margin_right: '1in',
          margin_left: '1in',
          header: [
            {
              html: '<h1>First page header.</h1>', 
              css: 'h1 { font-size: 30px; }',
              
              //'default', 'even', 'odd', 'first'
              type: 'first'
            }
          ],
    
          footer: [
            {
              html: '<p>Page footer</p>',
              css: 'p { font-size: 12px; }',
              // 'default', 'even', 'odd', 'first'
              type: 'default'
            }
          ],
    
          // 'portrait' or 'landscape'
          orientation: 'portrait',
          auto_pagination: true,
    
          base_url: 'https://example.com',
          timezone: 'UTC'
        },
        exportword_converter_style: 'p { color: cyan !important }',
      },
    },
    {
      name: 'footnotes',
      config: {},
    },
    {
      name: 'formatpainter',
      config: {},
    },
    {
      name: 'importword',
      config: {
	      importword_service_url: "https://importdocx.converter.tiny.cloud",
        importword_converter_options: {
          formatting: {
            styles: 'inline',
            resets: 'inline',
            defaults: 'inline',
          }
        }
      }
    },
    {
      name: 'inlinecss',
      config: {},
    },
    {
      name: 'linkchecker',
      config: {},
    },
    {
      name: 'markdown',
      config: {},
    },
    {
      name: 'math',
      config: {},
    },
    {
      name: 'mediaembed',
      config: {},
    },
    {
      name: 'mentions',
      config: {
        mentions_fetch,
        mentions_menu_complete,
        mentions_menu_hover,
        mentions_select,
        mentions_selector: '.mymention',
        mentions_item_type: 'profile',
        mentions_min_chars: 0,
      },
    },
    {
      name: 'mergetags',
      config: {
        mergetags_prefix: '${',
		    mergetags_suffix: '}',
		    mergetags_list,
      },
    },
    {
      name: 'pageembed',
      config: {},
    },
    {
      name: 'permanentpen',
      config: {
        permanentpen_properties: {
          fontname: 'impact,sans-serif',
          forecolor: '#E74C3C',
          fontsize: '12px',
          bold: true,
          italic: false,
          strikethrough: false,
          underline: false
        },
      },
    },
    {
      name: 'powerpaste',
      config: {},
    },
    // TODO: Validate content with data
    {
      name: 'revisionhistory',
      config: {
          revisionhistory_fetch: () => Promise.resolve(revisions),
      },
    },
    // TODO: Validate content with model
    {
      name: 'suggestededits',
      config: {
        suggestededits_model: suggestededitsModel,
        suggestededits_access: 'full',
        suggestededits_content: 'html',
      },
    },
    {
      name: 'tableofcontents',
      config: {},
    },
    // {
    //   name: 'tinycomments',
    //   config: {},
    // },
    // TODO: 
    // {
    //   name: 'tinydrive',
    //   config: {},
    // },
    {
      name: 'tinymcespellchecker',
      config: {},
    },
    {
      name: 'typography',
      config: {},
    },
    // TODO: Only for classic editor
    // {
    //   name: 'uploadcare',
    //   config: {
    //     uploadcare_public_key: '6ff5776be9bb64e10023',
    //   },
    // },
  ];


	const basicToolbar = "bold italic underline strikethrough subscript superscript | math uploadcare | exportpdf exportword importword | aidialog aishortcuts | accordion addtemplate inserttemplate| fontfamily fontsize fontsizeinput | numlist bullist checklist mergetags footnotes footnotesupdate| typography permanentpen formatpainter removeformat forecolor backcolor | blockquote nonbreaking hr pagebreak | casechange styles blocks lineheight | ltr rtl outdent indent | align alignleft aligncenter alignright alignjustify alignnone | h1 h2 h3 h4 h5 h6 h7 | wordcount searchreplace | undo redo | revisionhistory save cancel restoredraft | fullscreen print preview code help | insertdatetime codesample emoticons charmap | anchor link unlink image media pageembed insertfile | visualblocks visualchars | suggestededits";

  

  const generateConfig = ({ excludePlugins = [] }) => {
    const plugins = pluginsConfig.map((p) => p.name).filter((name) => !excludePlugins.includes(name));
    const configs = pluginsConfig.reduce((acc, cur) => ({ ...acc, ...cur.config }), basicConfig);

    return {
      ...configs,  
      plugins: plugins,
      toolbar: basicToolbar,
    };
  }

  
	export default {
    generateConfig
	};
