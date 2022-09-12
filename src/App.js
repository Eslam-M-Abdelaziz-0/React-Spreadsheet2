import * as React from "react";

import { SpreadsheetComponent } from "@syncfusion/ej2-react-spreadsheet";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return <SpreadsheetComponent showSheetTabs={false} />;
  }
}
