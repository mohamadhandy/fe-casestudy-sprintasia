import { MDBBadge, MDBIcon, MDBTableBody, MDBTooltip } from "mdb-react-ui-kit";
import axios from "axios";

export default function TaskList(data) {
  const handleDelete = async (taskId) => {
    try {
      const res = await axios.delete(`http://localhost:8001/api/v1/tasks/${taskId}`);
      console.log(res)
    } catch (error) {
      console.error("Error remove data:", error);
    }
  };
  return (
    <MDBTableBody>
      {data.task ? (
        data.task.data.map((task) => (
          <tr className="fw-normal" key={task.id}>
            <th className="border-0">
              <span color="success" className="ms-2 text-black">
                {task.title}
              </span>
            </th>
            <td className="border-0 align-middle text-black">
              <span>{task.description}</span>
            </td>
            <td className="border-0 align-middle">
              <h6 className="mb-0">
                <MDBBadge className="mx-2" color="success">
                  {task.created_at}
                </MDBBadge>
              </h6>
            </td>
            <td className="border-0 align-middle text-black">
              <span>{!task.completed ? "not completed" : "completed"}</span>
            </td>
            <td className="border-0 align-middle">
              {!task.completed ? (
                <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Done">
                  <MDBIcon
                    fas
                    icon="check"
                    color="success"
                    size="lg"
                    className="me-3"
                  />
                </MDBTooltip>
              ) : (
                <></>
              )}
              <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Remove">
                <MDBIcon
                  fas
                  icon="trash-alt"
                  color="danger"
                  size="lg"
                  className="me-3"
                  onClick={handleDelete(task.id)}
                />
              </MDBTooltip>
              <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Edit">
                <MDBIcon
                  fas
                  icon="pen"
                  color="warning"
                  size="lg"
                  className="me-3"
                />
              </MDBTooltip>
            </td>
          </tr>
        ))
      ) : (
        <div>Loading data...</div>
      )}
    </MDBTableBody>
  );
}
