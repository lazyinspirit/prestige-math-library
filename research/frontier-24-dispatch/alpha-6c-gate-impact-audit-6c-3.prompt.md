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

run: frontier-24
role: alpha
label: 6c-gate-impact-audit-6c-3

# Step 6c repair — impact-audit-6c

This file is the authority for repair cycle 3.
Primary gate: `impact-audit-6c`
Reason: ERROR receipt-changed-scope: research/frontier-24-impact-6c.json: changed_interfaces must exactly match the computed interface changes
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cex-a-language-is-a-set-of-symbols`, `cor-regular-languages-are-closed-under-boolean-operations`, `def-context-free-grammar`, `def-decision-search-and-function-problem`, `def-dfa-acceptance-and-recognized-language`, `def-language-boolean-operations`, `def-language-concatenation-powers-and-kleene-star`, `def-language-over-an-alphabet`, `ex-cfl-closure-under-union-concatenation-star-and-homomorphism`, `ex-language-concatenation-is-associative`, `fs-a-language-is-a-set-of-symbols`, `fs-complementing-a-dfa-complements-its-transition-graph`, `lem-computation-words-agree-with-published-finite-words`, `lem-induced-word-map-has-the-free-extension-property`, `lem-language-concatenation-is-associative`, `lem-reversal-is-an-involution-and-reverses-concatenation`, `prop-every-finite-language-is-regular`, `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`, `thm-complementing-accept-states-complements-the-language`, `thm-dfa-for-language-difference`, `thm-product-dfa-for-union-and-intersection`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
impact-audit: 4 changed public interface(s), 21 affected item(s)
  def-alphabet-homomorphism-and-induced-word-map: 3 logical, 2 direct citation consumer(s)
  def-computation-alphabet-and-word-convention: 7 logical, 8 direct citation consumer(s)
  def-language-boolean-operations: 5 logical, 3 direct citation consumer(s)
  def-language-over-an-alphabet: 3 logical, 7 direct citation consumer(s)
ERROR receipt-changed-scope: research/frontier-24-impact-6c.json: changed_interfaces must exactly match the computed interface changes
ERROR receipt-impact-scope: research/frontier-24-impact-6c.json: required_review must exactly match the computed downstream impact set
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item cex-a-language-is-a-set-of-symbols
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item cor-regular-languages-are-closed-under-boolean-operations
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item def-context-free-grammar
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item def-decision-search-and-function-problem
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item def-dfa-acceptance-and-recognized-language
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item def-language-boolean-operations
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item def-language-concatenation-powers-and-kleene-star
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item def-language-over-an-alphabet
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item ex-cfl-closure-under-union-concatenation-star-and-homomorphism
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item ex-language-concatenation-is-associative
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item fs-a-language-is-a-set-of-symbols
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item fs-complementing-a-dfa-complements-its-transition-graph
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item lem-computation-words-agree-with-published-finite-words
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item lem-induced-word-map-has-the-free-extension-property
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item lem-language-concatenation-is-associative
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item lem-reversal-is-an-involution-and-reverses-concatenation
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item prop-every-finite-language-is-regular
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item thm-cfl-closure-under-union-concatenation-star-and-homomorphism
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item thm-complementing-accept-states-complements-the-language
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item thm-dfa-for-language-difference
ERROR receipt-missing-impact: research/frontier-24-impact-6c.json: no disposition for affected item thm-product-dfa-for-union-and-intersection

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
`research/frontier-24-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/frontier-24-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/frontier-24-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run frontier-24 --id <id>` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/frontier-24-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

