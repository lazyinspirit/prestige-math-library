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

run: frontier-27
role: alpha
label: 6b-gate-step6-routing-adjudicate-1

# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [cex-a-preconditioner-can-worsen-the-preconditioned-condition-number] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number`, `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number`, `fs-translation-is-continuous-in-l-infinity`, `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes`, `thm-box-step-functions-are-dense-in-l-p-of-rn`, `ex-c-of-a-compact-space-is-banach`, `ex-cb-of-a-space-is-banach`, `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category`, `prop-local-graph-characterization-by-transversality-to-vertical-fibres`, `cex-model-invariance-means-equal-step-counts`, `fs-model-invariance-means-equal-step-counts`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 449 item(s) routed, 139 adjudication obligation(s), 11 error(s)
ERROR decision-not-applied: [cex-a-preconditioner-can-worsen-the-preconditioned-condition-number] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-translation-is-continuous-in-l-infinity] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-box-step-functions-are-dense-in-l-p-of-rn] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-c-of-a-compact-space-is-banach] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-cb-of-a-space-is-banach] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [prop-local-graph-characterization-by-transversality-to-vertical-fibres] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-model-invariance-means-equal-step-counts] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-model-invariance-means-equal-step-counts] accepted_repair no longer matches the reader result

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
`research/frontier-27-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

