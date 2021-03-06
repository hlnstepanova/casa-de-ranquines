import http from "./httpService";

const apiEndpoint = "/collaborators";

function collaboratorUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCollaborators() {
  return http.get(apiEndpoint);
}

export function getCollaborator(collaboratorId) {
  return http.get(collaboratorUrl(collaboratorId));
}

export function saveCollaborator(collaborator) {
  if (collaborator._id) {
    const body = { ...collaborator };
    delete body._id;
    console.log(body);
    return http.put(collaboratorUrl(collaborator._id), body);
  }

  return http.post(apiEndpoint, collaborator);
}

export function changeCollaboratorStatus(collaborator) {
  const body = { ...collaborator };
  const statusId =
    body.status._id === "5d8bbcd8694a2d0016104809"
      ? "5d8bbcd8694a2d001610480a"
      : "5d8bbcd8694a2d0016104809";
  const childrenId = body.children._id;
  delete body._id;
  delete body.status;
  delete body.children;
  body.statusId = statusId;
  body.childrenId = childrenId;
  return http.put(collaboratorUrl(collaborator._id), body);
}

export function deleteMovie(collaboratorId) {
  return http.delete(collaboratorUrl(collaboratorId));
}
