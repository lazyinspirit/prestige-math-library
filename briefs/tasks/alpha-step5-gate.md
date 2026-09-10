# Step 5 gate repair

- Read the generated task's live IDs and exact failures. Repair only assigned carriers; do not revisit exhausted IDs or other groups. Reproduce the named checks.
- Apply `briefs/alpha-step5.md`: be impartial, consult authoritative sources for unfamiliar mathematics, and try fully authored local definitions/lemmas before escalating substantial unmet prerequisites.
- Repair concrete defects or explain false positives with exact evidence. Update affected contracts, manifests, provenance, risk reviews, and decisions together. Do not invent mathematical defects for mechanical failures.
- For a missing risk review, read the named item and record a specific `risk_review`; use scoped checks. This read alone does not warrant a defect row.
- At 5A, update affected `authored` decisions, including local suppliers; attach each new defect row to its item's decision, without a duplicate gate decision. Historical version-2 scopes retain supplemental `gate:<defect-id>`, route `gate` decisions.
- At 5B, retain the required `kind: "gate"` verdict and current carrier hash in `research/<run>-5b-verdicts.jsonl`, plus changed-item/page verdicts.
- Preserve the completed lead audit. Update only the assigned finding, affected evidence and validation results; do not repeat unrelated edge reviews or migration inventories. Once the named gate passes and affected records agree, finish the handoff. The engine reruns the full gate battery and assigns remaining blockers.
- Record every defective published item in the canonical published-consumer ledger. Preserve prior retry evidence and report current checks and unresolved blockers.
