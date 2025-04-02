# FirstHive Tag Manager Scripts

This repository contains all of the custom scripts developed for the FirstHive Tag Manager. These scripts are designed to enhance tracking capabilities across our websites by managing URL parameters, filter interactions, and sending analytics events only when new or changed data is detected.

## Overview

The FirstHive Tag Manager scripts provide:
- **URL Parameter Processing:** Capture and assign URL parameters (e.g., `body`, `make`, `serie`, `fuel`, `drive`, `min_price`, `max_price`, `exterior_color`) to fixed dimensions.
- **Incremental Filter Tracking:** Store the last URL query in session storage and compare it to the current query, ensuring that only new or changed parameters are tracked.
- **Debugging Support:** Built-in (but commented out) console messages to help diagnose and understand script behavior during development and integration.

## Contents

- **inventory-search.js:**  
  Contains the main logic for tracking filter changes, comparing URL parameters, and pushing analytics events using session storage.

- **(Optional) Additional Scripts:**  
  Future or auxiliary scripts related to FirstHive Tag Manager integrations can be added here.

- **README.md:**  
  This file, providing an overview and instructions.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/firsthive-tag-manager-scripts.git

2. **Navigate to the Repository**

   Open your terminal and change to the repository directory:

    ```bash
    cd firsthive-tag-manager-scripts

## Usage

- **URL Parameter Mapping:**  
  The script maps each URL parameter to a specific dimension. For example, `body` is assigned to dimension 6, `make` to dimension 7, and so on.  
  You can modify this mapping by editing the `paramToDimension` object within the script.

- **Incremental Tracking:**  
  The script uses session storage to retain the last query string (`lastUrlQuery`). On every filtering action, it compares the current parameters against the stored state and only pushes analytics events if new or updated parameters are detected.

- **Debugging:**  
  Console messages are included for development purposes. These messages are commented out by default. To enable debugging, simply uncomment the relevant lines in the script.

## Customization

- **Modifying Parameter Dimensions:**  
  Adjust the `paramToDimension` mapping to fit your tracking needs if additional parameters or dimension changes are required.

- **Event Handling:**  
  The script is configured to push events to your analytics system (e.g., via `_paq.push()`). Customize the event type or structure if needed.

## Contributing

Contributions and improvements are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For further questions or support, please contact Shawn Goodin at [shawn.goodin@firsthive.com].
