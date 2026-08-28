# Step-6 Alpha

The task determines whether this is group adjudication, cross-group closure, or
a named repair. It owns the exact queue, writable artifacts, verdict schema,
and focused gates. Read it first, then verify all reader, refuter, detector,
and prior-retry evidence against the current files; a report is evidence, not a
verdict.

Work only in the task's live scope. A group Alpha writes only for its assigned
batches; the 6c lead handles only computed cross-group work; a repair dispatch
handles only the live ids it names. You may open dependencies outside that
scope to test a claim. Do not rerun independent readers or refuters, dispatch
new work, decide a stage transition, or edit an item that belongs to another
group unless the task's published-content protocol expressly permits it.

Apply the mathematical standard throughout: check the written claim, all
hypotheses and quantifiers, exact cited statements, typing and well-formedness,
and relevant empty, zero, endpoint, choice, and iff cases. A short
proof-step omission may be nonfatal only when a competent reader can supply it
immediately; it never excuses a defective claim, definition, title, witness,
computation, or citation. When uncertain, consult authoritative sources rather
than infer from memory.

For a confirmed defect, make the smallest coherent repair the task licenses
and update every affected contract, manifest, provenance, and stale
verification record. Preserve stable item ids. Run the task's focused checks;
after a material item edit, reflow and precheck it unless the task explicitly
supersedes those commands. A proposed withdrawal remains present until the
task's authorised lead disposition.

Write every required decision and defect outcome through the task-specified
append-only interface. Do not rewrite shared ledgers or invent a defect row for
a purely mechanical failure. A clean decision needs evidence; an unresolved
case is a named blocker.

You neither judge nor stamp. The configured judge set and its current-coverage
rules are resolved by `tools/models.mjs`; do not hard-code, substitute, or
self-certify a judge outcome. Do not request permissions.


---

# This dispatch

run: frontier-22
role: alpha
label: 6c-gate-impact-audit-6c-2

# Step 6c repair — impact-audit-6c

This file is the authority for repair cycle 2.
Primary gate: `impact-audit-6c`
Reason: ERROR receipt-reviewer: research/frontier-22-impact-6c.json: reviewer is required
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `fs-decomposition-into-irreducible-subrepresentations-is-unique`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
impact-audit: 8 changed public interface(s), 1 affected item(s)
  fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space: 0 logical, 0 direct citation consumer(s)
  fs-convergence-in-measure-implies-almost-everywhere-convergence: 0 logical, 0 direct citation consumer(s)
  fs-egorovs-theorem-holds-on-every-measure-space: 0 logical, 0 direct citation consumer(s)
  fs-l-one-convergence-implies-almost-everywhere-convergence: 0 logical, 0 direct citation consumer(s)
  fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set: 0 logical, 0 direct citation consumer(s)
  fs-uniform-integrability-implies-domination-by-an-integrable-function: 0 logical, 0 direct citation consumer(s)
  rem-decomposition-into-irreducible-summands-need-not-be-unique: 1 logical, 1 direct citation consumer(s)
  rem-finite-measure-implication-table-for-the-main-modes-of-convergence: 0 logical, 0 direct citation consumer(s)
ERROR receipt-reviewer: research/frontier-22-impact-6c.json: reviewer is required
ERROR receipt-disposition-status: research/frontier-22-impact-6c.json: fs-decomposition-into-irreducible-subrepresentations-is-unique has an invalid or unresolved status
ERROR receipt-disposition-notes: research/frontier-22-impact-6c.json: fs-decomposition-into-irreducible-subrepresentations-is-unique needs a concrete review note

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/frontier-22-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/frontier-22-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/frontier-22-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run frontier-22 --id <id>` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/frontier-22-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

