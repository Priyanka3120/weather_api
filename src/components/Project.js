import React from "react";
import { Button } from "semantic-ui-react";
import "./Project.css";
const Project = () => {
	const handleSubmit = e => {
		e.preventDefault();
		try {
			console.log("Form submited");
		} catch (err) {
			console.log(err);
		}
  };
 return (
		<div>
			<div className="project-management">
				<div className="project-page">
					<div className="login">
						<h1>Project</h1>
					</div>
					<div className="project-form">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<label>TASKNAME</label>
								<input type="text" name="taskname" />
							</div>
							<div className="form-group">
								<label>Start Date</label>
								<input
									type="date"
									name="startdate"
								/>
							</div>
							<div className="form-group">
								<label>End Date</label>
								<input type="date" name="enddate" />
							</div>
							<div className="form-group">
								<label>Start Time</label>
								<input
									type="text"
									name="starttime"
									defaultValue="00:00"
								/>
							</div>
							<div className="form-group">
								<label>End Time</label>
								<input
									type="text"
									name="endtime"
									defaultValue="00:00"
								/>
							</div>
							<div className="form-group">
								<label>Status</label>
								<input type="text" name="status" />
							</div>
							<div className="form-group">
								<Button type="submit">Submit</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Project;