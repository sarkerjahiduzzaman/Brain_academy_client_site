import React from 'react';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Pdfg = () => {
    return (
        <div>
            <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}> Pdf Link</button>}
      </Pdf>
      <div ref={ref}>
       Please Click This Button
      </div>
    </div>
        </div>
    );
};

export default Pdfg;


