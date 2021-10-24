import {
  addNewProject,
  getProjects,
  getProjectWithID,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const projectRoutes = (app) => {
  app.route("/projects").get(getProjects).post(addNewProject);

  app
    .route("/project/:projectID")
    .get(getProjectWithID)
    .put(updateProject)
    .delete(deleteProject);
};

export default projectRoutes;
