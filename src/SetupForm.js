import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

	return (
		<main>
			<section className="quiz quiz-small">
				<form className="setup-form">
					<h2>setup quiz</h2>
					<div className="form-control">
						<label htmlFor="date">Date:</label>
						<input
							type="date"
							className="form-input"
							type="date"
							name="date"
							id="date"
							value={quiz.date}
							onChange={handleChange}
						/>
					</div>
					{/*amount*/}
					<div className="form-control">
						<label htmlFor="amount">number of questions</label>
						<input
							className="form-input"
							min={1}
							max={50}
							type="number"
							name="amount"
							id="amount"
							value={quiz.amount}
							onChange={handleChange}
						/>
					</div>
					{/*category*/}
					<div className="form-control">
						<label htmlFor="category">category</label>
						<select
							name="category"
							id="category"
							className="form-input"
							value={quiz.category}
							onChange={handleChange}
						>
							<option value="entertainment">Entertainmen</option>
							<option value="sports">Sports</option>
							<option value="animals">Animals</option>
						</select>
					</div>
					{/*difficulty*/}
					<div className="form-control">
						<label htmlFor="difficulty">select difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							className="form-input"
							value={quiz.difficulty}
							onChange={handleChange}
						>
							<option value="easy">easy</option>
							<option value="medium">medium</option>
							<option value="hard">hard</option>
						</select>
					</div>
					{error && <p className="error">can't generate questions, please try different options </p>}
					<button type="submit" onClick={handleSubmit} className="submit-btn">
						start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;
