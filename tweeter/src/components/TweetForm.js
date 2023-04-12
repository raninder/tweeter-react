import React from 'react'; //optional
import TweetList from './TweetList'

function TweetForm(){
	return (
	
		<main className="container">
			
			<section className="error-container"><i class="fas fa-exclamation-triangle"></i>
		 <i class="fas fa-exclamation-triangle"></i>
			</section>
	
			<section className="newtweet">
				<form method="post" action="/tweets" class="newtweet__form">
					<textarea className="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
					<input type="submit" value="Tweet" className="form__input" />
					<span className="form__counter">140</span>
				</form>
			</section>
			<TweetList />
		</main>
	);
}

export default TweetForm;