# Copyright (c) 2025, nada and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Expense(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from batwara.batwara.doctype.expense_split.expense_split import ExpenseSplit
		from frappe.types import DF

		amended_from: DF.Link | None
		amount: DF.Currency
		currency: DF.Link
		date_ripp: DF.Date
		description: DF.Data
		notes: DF.SmallText | None
		paid: DF.Link | None
		spilts: DF.Table[ExpenseSplit]
		split_method: DF.Literal["equally", "manual"]
	# end: auto-generated types
	
	def validate (self) :
		print("-----------------------------------------****")

		self.apply_split()

	def apply_split(self) : 
		print("-----------------------------------------****")
		if self.split_method == "equally" :
			self.calculate_equal_splits()
		else:
			#manual
			pass
	
	def calculate_equal_splits(self):
		mum_splits = len (self.spilts)
		print(mum_splits)
		spilt_amount= self.amount / mum_splits 
		print(spilt_amount)

		for s in self.spilts :
			s.amount = spilt_amount


