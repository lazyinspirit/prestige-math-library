# Step 5b repair — cross-group-edges

This file is the authority for repair cycle 3.
Primary gate: `cross-group-edges`
Reason: ERROR gate-verdict-stale: [prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps] gate verdict hash does not match the current composite carrier
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
cross-group-edges: 6 edge(s), 0 forward reference(s), 0 post-5a change(s), 1 error(s)
ERROR gate-verdict-stale: [prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps] gate verdict hash does not match the current composite carrier

```

## Advisory failures

```json
[
  {
    "stage": "5b-cross",
    "gate": "impact-audit",
    "why": "ERROR receipt-reviewer: research/phase-2-nine-step-25-impact.json: reviewer is required"
  },
  {
    "stage": "5b-cross",
    "gate": "impact-audit-5b",
    "why": "ERROR receipt-reviewer: research/phase-2-nine-step-25-impact-5b.json: reviewer is required"
  }
]
```

## Canonical repair protocol

# Step 5 gate repair

- Read the generated task's live IDs and exact failures. Repair only assigned carriers; do not revisit exhausted IDs or other groups. Reproduce the named checks.
- Apply `briefs/alpha-step5.md`: be impartial, consult authoritative sources for unfamiliar mathematics, and try fully authored local definitions/lemmas before escalating substantial unmet prerequisites.
- Repair concrete defects or explain false positives with exact evidence. Update affected contracts, manifests, provenance, risk reviews, and decisions together. Do not invent mathematical defects for mechanical failures.
- For a missing risk review, read the named item and record a specific `risk_review`; use scoped checks. This read alone does not warrant a defect row.
- At 5A, update affected `authored` decisions, including local suppliers; attach each new defect row to its item's decision, without a duplicate gate decision. Historical version-2 scopes retain supplemental `gate:<defect-id>`, route `gate` decisions.
- At 5B, retain the required `kind: "gate"` verdict and current carrier hash in `research/<run>-5b-verdicts.jsonl`, plus changed-item/page verdicts.
- Preserve the completed lead audit. Update only the assigned finding, affected evidence and validation results; do not repeat unrelated edge reviews or migration inventories. Once the named gate passes and affected records agree, finish the handoff. The engine reruns the full gate battery and assigns remaining blockers.
- Record every defective published item in the canonical published-consumer ledger. Preserve prior retry evidence and report current checks and unresolved blockers.

# Step 5b — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-5a carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

For a migrated run read `research/<run>-checkpoint-import.json` and its
source export. Original review attribution is historical, not a new review.
Preserve the exact published-repair handoff in
`research/<run>-step7-published-repairs.jsonl`; its later judgments remain owed.

If `research/<run>-merge-import.json` exists, read its source mappings and
baseline origins. Preserve imported source review evidence and exact pending
Step8 published-repair handoffs. The import is not a new mathematical verdict:
review the combined cross-batch interfaces and impact obligations on current
content, including later repairs recorded in the source handoffs.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-5b-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id ITEM_ID` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `5b-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

For the full lead audit, close both impact windows with `tools/impact-audit.mjs`:

- `--touches research/<run>-touches.json --from pre-author --to post-5a --receipt research/<run>-impact.json`
- `--touches research/<run>-touches.json --from post-5a --current --receipt research/<run>-impact-5b.json`

Record a reviewer even for an empty window. For every affected item, record
the exact changed supplier, consumed clause and justified disposition. Reuse
historical review evidence only after checking its attribution, current hashes
and coverage of the current interface changes; never copy approvals blindly.
Preserve the original baseline. Record unresolved findings and published debt
honestly; do not clear the receipt with generic notes. A narrowly assigned gate
repair covers only its primary blocker, not unrelated impact candidates.

Write `research/<run>-alpha-5b.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-5 gate
battery.

