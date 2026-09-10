# Step 8 — whole-level receipts, `phase-2-nine-step-25`

Before writing receipts, reconcile every proof-bearing manifest item against its
owning batch contract, including reused items. For missing entries, read the full
current proof and cited interfaces, then add item-specific citations, step inputs,
boundary dispositions and required risk review to that batch's contract. Preserve
existing valid entries. Merge the batch contracts and run strict contract, risk,
boundary and citation checks. This authorizes evidence repair only: do not change
mathematical content, invent an attestation, or suppress an unresolved defect.

Generate `research/phase-2-nine-step-25-spine-audit.json` with `spine-audit --template` and
read every selected proof before completing its current-hash evidence.

Generate `research/phase-2-nine-step-25-audit-coverage.json` with
`level-coverage --template`. Supply the reviewer, concrete attestation, and an
item-specific `plan_reconciliation` reason for every authored dependency delta.

Run `level-coverage` with the contracts, judge ledger, adjudications,
`--terminal-resolutions research/phase-2-nine-step-25-step7-terminal-resolutions.jsonl`,
`--verify-current-context`, spine receipt, audit receipt, and all run manifests.
Use the same complete scope when generating templates. Terminal resolutions are
required evidence, not missing judge verdicts. Do not alter a receipt to conceal a
missing configured-judge verdict, open fatal, or unadjudicated rejection; report
that condition instead.
