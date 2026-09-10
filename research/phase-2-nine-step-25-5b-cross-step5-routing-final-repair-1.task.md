# Step 5b repair — step5-routing-final

This file is the authority for repair cycle 1.
Primary gate: `step5-routing-final`
Reason: ERROR step5-open: [prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps] phase-2-nine-step-25-import-phase-2-merged-25-import-1-p2c24-6b-d8-published-reflection-deps remains deferred
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step5-scope: 760 item(s) routed, 784 adjudication obligation(s), 1 error(s)
ERROR step5-open: [prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps] phase-2-nine-step-25-import-phase-2-merged-25-import-1-p2c24-6b-d8-published-reflection-deps remains deferred

```

## Advisory failures

```json
[
  {
    "stage": "5b-cross",
    "gate": "coverage-15",
    "why": "ERROR coverage-alternative-deps [pcf-scales-and-zfc-dowker-spaces]: phase-2-nine-step-25-batch-15.coverage.json: pcf-scales-and-zfc-dowker-spaces: alternative thm-balogh-continuum-sized-zfc-dowker-space must name a scaffolded item and decla"
  },
  {
    "stage": "5b-cross",
    "gate": "url-liveness",
    "why": "FAIL 403 https://homepages.math.uic.edu/~marker/math512/dst.pdf — HTTP 403"
  },
  {
    "stage": "5b-cross",
    "gate": "impact-audit",
    "why": "ERROR receipt-missing: research/phase-2-nine-step-25-impact.json: no receipt existed — wrote the template there with 5483 pending disposition(s); fill reviewer and every disposition, then re-run"
  },
  {
    "stage": "5b-cross",
    "gate": "impact-audit-5b",
    "why": "ERROR receipt-missing: research/phase-2-nine-step-25-impact-5b.json: no receipt existed — wrote the template there with 0 pending disposition(s); fill reviewer and every disposition, then re-run"
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

Write `research/<run>-alpha-5b.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-5 gate
battery.

