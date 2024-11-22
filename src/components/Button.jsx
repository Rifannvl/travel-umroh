import React from "react";
import { Button } from "primereact/button";
// Importing PrimeReact's core CSS and theme
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Choose the theme you prefer
import "primereact/resources/primereact.min.css"; // PrimeReact core styles

export default function ButtonDemo() {
  return (
    <div className="card flex justify-content-center">
      <Button label="Save" icon="pi pi-check" />
    </div>
  );
}
