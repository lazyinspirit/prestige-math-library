# Contract-rework certification — `frontier-25`

Read the open contract-quality ledger row and the latest matching Beta result in
`research/frontier-25-dispatch/`. Sample the affected rewritten contract rows
against their item text, including every changed `checked` or `not_applicable`
disposition.

Rerun the contract merge, `boundary-audit --fail-on-contradicted
--fail-on-template`, and `proof-contract --strict`. On success, close that same
ledger row with sample and gate evidence, render the ledger, and close its
matching obligation. On failure, retain the row and append the exact reason.

Write the sample, row verdicts, gate results, and final ledger state in the
dispatch report. Do not modify item text in this certification dispatch.
