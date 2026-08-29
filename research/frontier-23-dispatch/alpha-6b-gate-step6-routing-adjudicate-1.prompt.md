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

run: frontier-23
role: alpha
label: 6b-gate-step6-routing-adjudicate-1

# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [thm-grushko-decomposition-and-rank-additivity] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `thm-grushko-decomposition-and-rank-additivity`, `cor-the-top-exterior-power-acts-by-the-determinant`, `def-completed-product-measure`, `def-distribution-function-of-absolute-value`, `def-measurable-rectangle`, `def-sections-of-sets-and-functions-on-products`, `rem-borel-product-equality-needs-second-countability`, `rem-caratheodory-also-constructs-the-product-measure`, `ex-strip-to-disc-biholomorphism-by-exponential-and-cayley`, `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps`, `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism`, `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 504 item(s) routed, 227 adjudication obligation(s), 12 error(s)
ERROR decision-not-applied: [thm-grushko-decomposition-and-rank-additivity] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-the-top-exterior-power-acts-by-the-determinant] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-completed-product-measure] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-distribution-function-of-absolute-value] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-measurable-rectangle] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-sections-of-sets-and-functions-on-products] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [rem-borel-product-equality-needs-second-countability] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [rem-caratheodory-also-constructs-the-product-measure] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-strip-to-disc-biholomorphism-by-exponential-and-cayley] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks] accepted_repair no longer matches the reader result

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
`research/frontier-23-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

