> The dispatch block supplies batch `<i>`.

# Contract worksheet rework — batch `<i>`, `{{run}}`

Read the assigned open contract-quality ledger row and each affected item. Edit
only `research/{{run}}-batch-<i>.proof-contracts.json`.

Rewrite each affected boundary disposition from the current proof: a `checked`
row names the exact discharging step and its case; a `not_applicable` row gives
an item-specific mathematical reason. Leave a discovered proof failure visible
and report it rather than changing item text.

Run the contract merge, `boundary-audit --fail-on-contradicted
--fail-on-template`, and `proof-contract --strict`. Report every rewritten row
and any unresolved proof gap; the certifying Alpha closes the ledger row.
