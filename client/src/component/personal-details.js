import { t } from "/node_modules/@blaze-case-ai/blaze-engine/client/src/locale/lang.js";
class PersonalDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._caseData = null;
    this.context = this.getAttribute("context") || "client";

    this.renderComponent().then(() => {
      this.updateTexts(); // update texts after render
      if (this._caseData) {
        this.populateForm();
      }
    });

    document.addEventListener("lang-changed", () => this.updateTexts());
  }

  renderComponent() {
    return new Promise((resolve) => {
      fetch("/node_modules/blaze-engine/client/style/floating-label.css")
        .then((response) => response.text())
        .then((css) => {
          this.shadowRoot.innerHTML = `
            <style>
              .form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 700px;
}


.form-group.floating {
  position: relative;
  margin-bottom: 16px;
}

.form-group.floating input[type="text"],
.form-group.floating input[type="tel"],
.form-group.floating input[type="date"] {
  width: 100%;
  padding: 24px 12px 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 8px;
  background: none;
  transition: border-bottom-color 0.2s ease-in-out;
}

.form-group.floating input:focus {
  border-bottom-color: #007bff;
  outline: none;
}

.form-group.floating select {
  width: 20%;
  padding: 44px 12px 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 8px 8px 0 0;
  background: none;
  appearance: none;
  margin-right:10px;
}

.form-group.floating label {
  position: absolute;
  top: 16px;
  left: 12px;
  background: white;
  padding: 0 4px;
  color: #999;
  font-size: 16px;
  pointer-events: none;
  transition: 0.2s ease all;
}

.form-group.floating input:focus + label,
.form-group.floating input:not(:placeholder-shown) + label,
.form-group.floating select:focus + label,
.form-group.floating select:not([value=""]) + label {
  top: 4px;
  left: 10px;
  font-size: 12px;
  color: #333;
  background: white;
}

.full-width {
  grid-column: span 2;
}

.phone-group-inner {
  display: flex;
}

.phone-group-inner select {
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 8px 0 0 8px;
  width: 100px;
  padding: 24px 12px 8px;
  appearance: none;
}

.phone-group-inner input[type="tel"] {
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0 8px 8px 0;
  flex: 1;
  padding: 24px 12px 8px;
}

.phone-group-inner input[type="tel"]:focus {
  border-bottom-color: #007bff;
  outline: none;
}

            </style>
            <form id="personalForm">
              <div class="form-container">
                <div class="form-group floating">
                  <input type="text" id="firstName" name="${this.context}.firstName" placeholder=" " required />
                  <label for="firstName">First Name</label>
                </div>
                <div class="form-group floating">
                  <input type="text" id="lastName" name="${this.context}.lastName" placeholder=" " required />
                  <label for="lastName">Last Name</label>
                </div>
                <div class="form-group floating">
                  <input type="text" id="bsn" name="${this.context}.bsn" placeholder=" " required />
                  <label for="bsn">BSN</label>
                </div>
                <div class="form-group floating">
                  <input type="date" id="dateOfBirth" name="${this.context}.dateOfBirth" placeholder=" " required />
                  <label for="dateOfBirth">Date of Birth</label>
                </div>
                <div class="form-group floating full-width">
                  <div class="phone-group-inner">
                    <select id="countryCode" name="${this.context}.countryCode" required>
                      <option value="">Select</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+31">+31 (Netherlands)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (India)</option>
                    </select>
                    <input type="tel" id="phoneNumber" name="${this.context}.phoneNumber" placeholder=" " required />
                    <label for="phoneNumber">Phone Number</label>
                  </div>
                </div>
              </div>
            </form>
          `;
          resolve();
        });
    });
  }

  captureFormData() {
    const form = this.shadowRoot.querySelector("#personalForm");
    const formData = {};
    const formElements = form.querySelectorAll("input, select");
    formElements.forEach((el) => {
      formData[el.name.split(".").pop()] = el.value;
    });
    return { [this.context]: formData };
  }

  setFormData(data) {
    const form = this.shadowRoot.querySelector("#personalForm");
    Object.keys(data).forEach((key) => {
      const input = form.querySelector(`#${key}`);
      if (input) {
        input.value = data[key];
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.captureFormData();
    this.dispatchEvent(new CustomEvent("formSubmitted", { detail: formData }));
  }

  updateTexts() {
    // Update all labels and placeholders
    const shadow = this.shadowRoot;
    if (!shadow) return;

    // Labels
    shadow.querySelector('label[for="firstName"]').textContent = t(
      "personal",
      "first_name",
      "First Name"
    );
    shadow.querySelector('label[for="lastName"]').textContent = t(
      "personal",
      "last_name",
      "Last Name"
    );
    shadow.querySelector('label[for="bsn"]').textContent = t(
      "personal",
      "bsn",
      "BSN"
    );
    shadow.querySelector('label[for="dateOfBirth"]').textContent = t(
      "personal",
      "date_of_birth",
      "Date of Birth"
    );
    shadow.querySelector('label[for="phoneNumber"]').textContent = t(
      "personal",
      "phone_number",
      "Phone Number"
    );

    // Placeholders (if you want to localize them)
    shadow.querySelector("#firstName").placeholder = t(
      "personal",
      "first_name_placeholder",
      " "
    );
    shadow.querySelector("#lastName").placeholder = t(
      "personal",
      "last_name_placeholder",
      " "
    );
    shadow.querySelector("#bsn").placeholder = t(
      "personal",
      "bsn_placeholder",
      " "
    );
    shadow.querySelector("#dateOfBirth").placeholder = t(
      "personal",
      "date_of_birth_placeholder",
      " "
    );
    shadow.querySelector("#phoneNumber").placeholder = t(
      "personal",
      "phone_number_placeholder",
      " "
    );

    // Select options
    const countryCode = shadow.querySelector("#countryCode");
    if (countryCode) {
      countryCode.options[0].text = t("personal", "select_country", "Select");
      countryCode.options[1].text = t("personal", "country_us", "+1 (US)");
      countryCode.options[2].text = t(
        "personal",
        "country_nl",
        "+31 (Netherlands)"
      );
      countryCode.options[3].text = t("personal", "country_uk", "+44 (UK)");
      countryCode.options[4].text = t("personal", "country_in", "+91 (India)");
    }
  }

  connectedCallback() {
    this.shadowRoot.addEventListener("submit", this.handleSubmit.bind(this));
    if (this._caseData) {
      this.populateForm();
    }
    this.updateTexts(); // ensure texts are set on connect
  }

  set caseData(data) {
    this._caseData = data;
    if (this.shadowRoot.querySelector("#personalForm")) {
      this.populateForm();
    }
  }

  get caseData() {
    return this._caseData;
  }

  populateForm() {
    if (!this._caseData || !this._caseData.client) return;
    const { firstName, lastName, bsn, dateOfBirth, countryCode, phoneNumber } =
      this._caseData.client;

    const firstNameField = this.shadowRoot.querySelector("#firstName");
    if (firstNameField) firstNameField.value = firstName || "";

    const lastNameField = this.shadowRoot.querySelector("#lastName");
    if (lastNameField) lastNameField.value = lastName || "";

    const bsnField = this.shadowRoot.querySelector("#bsn");
    if (bsnField) bsnField.value = bsn || "";

    const dateOfBirthField = this.shadowRoot.querySelector("#dateOfBirth");
    if (dateOfBirthField) dateOfBirthField.value = dateOfBirth || "";

    const countryCodeField = this.shadowRoot.querySelector("#countryCode");
    if (countryCodeField) countryCodeField.value = countryCode || "";

    const phoneNumberField = this.shadowRoot.querySelector("#phoneNumber");
    if (phoneNumberField) phoneNumberField.value = phoneNumber || "";
  }
}

customElements.define("personal-details", PersonalDetails);
export default PersonalDetails;
