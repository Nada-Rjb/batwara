// Copyright (c) 2025, nada and contributors
// For license information, please see license.txt

frappe.ui.form.on("mapping", {
 	onload(frm) {
        frm.set_query("a", function() {
            return {
                filters: {
                    "ignore_user_type": 1
                }
            };
        });

        frm.set_query("b", function() {
            return {
                filters: {
                    "ignore_user_type": 1
                }
            };
        });

 	},
 });

