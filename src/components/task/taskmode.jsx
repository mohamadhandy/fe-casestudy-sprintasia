import { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";
import TaskList from "@/components/task/tasklist";

export default function TaskMode(data) {
  return (
    <div>
      {data ? (
        <section className="vh-100">
          <MDBContainer className="py-5 h-100">
            <MDBRow className="d-flex justify-content-center align-items-center">
              <MDBCol md="12" xl="10">
                <MDBCard className="mask-custom">
                  <MDBCardBody className="p-4">
                    <div className="text-center pt-3 pb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                        alt="Check"
                        width="60"
                      />
                      <h2 className="my-4">Task List {data.mode}</h2>
                    </div>
                    <MDBTable className="text-white mb-0">
                      <MDBTableHead>
                        <tr>
                          <th scope="col" className="text-black">Task Title</th>
                          <th scope="col" className="text-black">Task Description</th>
                          <th scope="col" className="text-black">Created At</th>
                          <th scope="col" className="text-black">Status</th>
                        </tr>
                      </MDBTableHead>
                      <TaskList task={data.data}/>
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
}