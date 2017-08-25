export const questionsList = [
	 {
	 	id: "question_1",
	 	user: "user_1",
	 	title: "Will insulin make my patient gain weight?",
	 	content: "All my patients with diabetes should see an ophthalmologist yearly for a dialated eye examination - beginning at diagnosis in people with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients with known eye disease, symptoms of blurred vision in one eye or blind spots may need to see their ophthalmologist more frequently.",
	 	activ_count: 3,
	 	rel_disc: 1,
	 	peers: 6,
	 	conversations: 3,
	 	answers: ['answer_4', 'answer_2', 'answer_3', 'answer_1']
	 },
	 {
	 	id: "question_2",
	 	user: "user_2",
	 	title: "Vegan diet in diabetes treatment?",
	 	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ornare quam ut ornare. Etiam accumsan efficitur tincidunt. Duis sollicitudin velit odio, sit amet euismod diam faucibus ac. Proin id dui odio. Suspendisse ornare tortor eu nunc vulputate, ac sagittis nisi lobortis. Pellentesque ut velit vel metus luctus consectetur. Aenean eget auctor libero. Etiam quis nisi mauris.",
	 	activ_count: 6,
	 	rel_disc: 2,
	 	peers: 9,
	 	conversations: 5,
	 	answers: ['answer_3', 'answer_2', 'answer_4', 'answer_1']
	 },
	 {
	 	id: "question_3",
	 	user: "user_3",
	 	title: "Vegan diet to stop diabetes progress",
	 	content: "Aenean quis enim quis tortor fermentum finibus vitae quis ante. Morbi eleifend, orci quis pellentesque gravida, urna justo pulvinar tellus, at rhoncus ligula purus et tellus. Sed sed magna in quam commodo efficitur non vel dolor. Donec sed ullamcorper augue. Aliquam cursus commodo metus vel fermentum. Fusce vel semper dui. Proin luctus est sed tincidunt sagittis. Sed pretium non eros id iaculis. Maecenas feugiat lacinia lacinia. Nullam mattis quis mi sollicitudin interdum.",
	 	activ_count: 0,
	 	rel_disc: 5,
	 	peers: 4,
	 	conversations: 0,
	 	answers: ['answer_2', 'answer_3', 'answer_1']
	 }
];

export const userList = {
	user_1: {
		name: "Eva",
		img: "img/adrian-siewiera.jpg"
	},
	user_2: {
		name: "Andrew",
		img: "img/jaroslaw-blazkow.jpg"
	},
	user_3: {
		name: "Joseph",
		img: "img/tomasz-piatek.png"
	},
	user_4: {
		name: "Adrian",
		img: "img/wojciech-samek.jpg"
	}
};

export const answerList = {
  	answer_1: {
	  	user: "user_4",
	  	content: "Numbers or tingling in your feet should be reported to your doctor at your regular visits.",
	  	time: "yesterday",
	  	votes: 8,
	  	comments: ['answer_2']
  	},
  	answer_2: {
	  	user: "user_2",
	  	content: "You should check your feet daily for redness, caluses, cracks or skin breakdown.",
	  	time: "yesterday",
	  	votes: 2,
	  	comments: []
  	},
  	answer_3: {
	  	user: "user_1",
	  	content: "When your blood sugar is low, your body gives out signs that you need food. Different people have different symptoms. You will learn to recognise your symptoms.",
	  	time: "two days",
	  	votes: -3,
	  	comments: []
 	 },
    answer_4: {
  	  	user: "user_3",
  	  	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique ornare quam ut ornare.",
  	  	time: "four days",
  	  	votes: 1,
  	  	comments: []
   	 }
};