
frappe.ui.form.on ("Friend Circle",{
    refresh(frm){
        frm.set_query("user", () => {
            return {
                filters: {
                    "ignore_user_type": 1
                }
            }
        });

        frm.fields_dict["friends"].grid.get_field("friend").get_query = (doc) => {
            return {
                filters: {
                    "ignore_user_type": 1
                }
            }
        }

    },
});

