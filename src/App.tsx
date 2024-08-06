import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {

  const [hideorShow, setAlertShow] = useState(false);
  return (
    <div>
      {hideorShow && <Alert onClose={()=>setAlertShow(false)}>Alert!</Alert>}
      <Button color={"primary"} onClick={() => setAlertShow(true)}>
        click me
      </Button>
    </div>
  );
}

export default App;
