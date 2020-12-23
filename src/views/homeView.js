import { AutomaticForm } from "presentation-form";

const SCHEMA = {
	"$schema": "http://json-schema.org/draft-04/schema#",
	"title": "User",
	"description": "User Form",
	"type": "object",
	"properties": {
		"@context": {
			"type": "string",
			"description": "@context"
		},
		"@id": {
			"type": "string",
			"description": "@id"
		},
		"name": {
			"type": "string",
			"description": "name"
		},
		"born": {
			"type": "string",
			"description": "born"
		},
		"spouse": {
			"type": "string",
			"description": "spouse"
		}
	}
};
const MOUNT_POINT = "#main";

class HomeView extends AutomaticForm {
  constructor(data) {
    super({
      "el": MOUNT_POINT,
      "name": "user",
      "title": SCHEMA.title,
      "schema": SCHEMA,
      "submitButton": "Submit",
      "resetButton": "Reset",
      "uri": `/users/${data.identifier}`,
      "data": data,
      "display": null,
      "large": true
    });
  };
};

export default HomeView;
