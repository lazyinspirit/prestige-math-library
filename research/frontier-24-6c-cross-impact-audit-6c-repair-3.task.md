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
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id <id>` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/<run>-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

