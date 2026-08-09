# Wave 7 A4 gate recovery — apply only corrected decisions

The original A4 application is complete. Do not repeat A1/A2, redo already
applied repairs, or widen your manifest. The A4 gate then exposed an
over-broad authority ruling, which the orchestrator corrected in
`research/audit/wave7-A3.md` under “A3 recovery amendment after the A4 gate”.
Alpha also completed the D2-only recovery in
`research/audit/wave7-alpha.md`: all 23 `established-knowledge` rows now have
`alpha_concurred:true` in the two affected ledgers.

Read the current dirty tree, your manifest/findings/ledger/contracts, the full
A3 recovery amendment, and the Alpha D2 table. Apply only the still-outstanding
corrected decisions for your own batch:

- transcribe every newly Alpha-concurred ledger row in your batch into the
  matching item provenance/source frontmatter;
- apply the amended A3 repair approvals belonging to your batch, including
  generated-target containment and exact proof-contract updates;
- preserve every already-correct A4 edit and every decision the amendment did
  not change.

This is an A4 repair substage, not A6. Do not certify your own work, write a
`verification.verified` stamp, run a judge, alter judge ledgers, disposition
impact/genrisk, or perform Alpha duties. The orchestrator recorded the unique
stage baseline `pre-A4-recovery`; do not write any touch snapshot or reuse a
snapshot label. For each material item edit, remove stale
`verification.judge` and obsolete `verification.audited` as the audit protocol
requires. Pure provenance/source transcription preserves them.

Update only your namespaced findings, provenance ledger, and proof-contract
file plus the approved item/page targets. Finish every approved change in one
pass per item. Run the local precheck/reflow and strict batch-contract checks,
validate JSON/JSONL, and append a concise A4-recovery section naming exact
edited item/page ids. Exit nonzero if any corrected decision cannot be applied
honestly or if your batch contract does not close.
