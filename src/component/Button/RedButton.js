import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

function RedButton() {
  return (
    <ButtonToolbar>
      <Button type="button" variant="btn btn-danger btn-sm">
        상세보기
      </Button>
    </ButtonToolbar>
  );
}

export default RedButton;
