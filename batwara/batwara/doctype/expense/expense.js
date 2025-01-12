frappe.ui.form.on("Expense", {
    onload(frm) {
        frm.set_query("paid_by", function() {
            frappe.msgprint("Only users with 'ignore_user_type = 1' can be selected for 'Paid By'");
            return {
                filters: {
                    "ignore_user_type": 1
                }
            };
        });
    },
});
