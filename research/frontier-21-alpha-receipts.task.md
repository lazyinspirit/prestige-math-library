# Step 9 — whole-level receipts, `frontier-21`

Generate `research/frontier-21-spine-audit.json` with `spine-audit --template` and
read every selected proof before completing its current-hash evidence.

Generate `research/frontier-21-audit-coverage.json` with
`level-coverage --template`. Supply the reviewer, concrete attestation, and an
item-specific `plan_reconciliation` reason for every authored dependency delta.

Run `level-coverage` with the contracts, judge ledger, adjudications, spine
receipt, audit receipt, and run manifests. Do not alter a receipt to conceal a
missing configured-judge verdict, open fatal, or unadjudicated rejection; report
that condition instead.
