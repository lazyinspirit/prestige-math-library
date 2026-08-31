# Step 6c repair — impact-audit-6c

This file is the authority for repair cycle 6.
Primary gate: `impact-audit-6c`
Reason: ERROR receipt-changed-scope: research/frontier-27-impact-6c.json: changed_interfaces must exactly match the computed interface changes
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cex-model-invariance-means-equal-step-counts`, `cex-universality-decides-halting`, `cor-effective-enumeration-of-turing-machines`, `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property`, `def-kleene-t-predicate-and-output-function`, `def-universal-turing-machine`, `ex-effective-enumeration-of-turing-machines`, `ex-lambda-definable-iff-partial-recursive`, `ex-machine-descriptions-form-a-decidable-language`, `ex-polynomially-related-encodings-preserve-polynomial-classes`, `ex-polynomially-related-encodings-preserve-polynomial-size`, `fs-every-countable-language-is-decidable`, `fs-model-invariance-means-equal-step-counts`, `fs-time-bounds-never-need-constructibility`, `fs-universality-decides-halting`, `lem-clocked-machine-construction`, `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`, `lem-machine-encoding-is-injective-and-decodable`, `lem-multitape-simulation-has-quadratic-time-overhead`, `lem-step-by-step-interpreter-for-machine-codes`, `lem-turing-step-coding-is-primitive-recursive`, `prop-machine-descriptions-form-a-decidable-language`, `prop-polynomial-time-and-space-are-model-invariant`, `prop-polynomially-related-encodings-preserve-polynomial-classes`, `prop-polynomially-related-encodings-preserve-polynomial-size`, `rem-model-equivalence-supports-but-does-not-prove-the-thesis`, `thm-existence-of-a-universal-turing-machine`, `thm-kleene-normal-form`, `thm-lambda-definable-iff-partial-recursive`, `thm-multitape-to-single-tape-space-simulation`, `thm-multitape-to-single-tape-time-simulation`, `thm-nondeterministic-and-deterministic-recognizability-agree`, `thm-partial-recursive-iff-turing-computable`, `thm-ram-register-and-turing-computability-agree`, `thm-universal-simulation-with-logarithmic-overhead`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
impact-audit: 10 changed public interface(s), 35 affected item(s)
  cor-effective-enumeration-of-turing-machines: 2 logical, 2 direct citation consumer(s)
  def-effective-encoding-of-turing-machines: 23 logical, 11 direct citation consumer(s)
  def-instance-size-under-an-encoding: 4 logical, 3 direct citation consumer(s)
  def-universal-turing-machine: 12 logical, 4 direct citation consumer(s)
  lem-machine-encoding-is-injective-and-decodable: 19 logical, 7 direct citation consumer(s)
  lem-multitape-simulation-has-quadratic-time-overhead: 4 logical, 1 direct citation consumer(s)
  prop-polynomially-related-encodings-preserve-polynomial-size: 3 logical, 2 direct citation consumer(s)
  thm-existence-of-a-universal-turing-machine: 6 logical, 4 direct citation consumer(s)
  thm-leaf-deletion-preserves-virality-of-a-finite-family: 2 logical, 2 direct citation consumer(s)
  thm-multitape-machines-have-one-tape-simulations: 15 logical, 6 direct citation consumer(s)
ERROR receipt-changed-scope: research/frontier-27-impact-6c.json: changed_interfaces must exactly match the computed interface changes
ERROR receipt-impact-scope: research/frontier-27-impact-6c.json: required_review must exactly match the computed downstream impact set
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item cex-model-invariance-means-equal-step-counts
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item cex-universality-decides-halting
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item cor-effective-enumeration-of-turing-machines
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item def-kleene-t-predicate-and-output-function
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item def-universal-turing-machine
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item ex-effective-enumeration-of-turing-machines
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item ex-lambda-definable-iff-partial-recursive
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item ex-machine-descriptions-form-a-decidable-language
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item ex-polynomially-related-encodings-preserve-polynomial-classes
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item ex-polynomially-related-encodings-preserve-polynomial-size
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item fs-every-countable-language-is-decidable
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item fs-model-invariance-means-equal-step-counts
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item fs-time-bounds-never-need-constructibility
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item fs-universality-decides-halting
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item lem-clocked-machine-construction
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item lem-machine-encoding-is-injective-and-decodable
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item lem-multitape-simulation-has-quadratic-time-overhead
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item lem-step-by-step-interpreter-for-machine-codes
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item lem-turing-step-coding-is-primitive-recursive
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item prop-machine-descriptions-form-a-decidable-language
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item prop-polynomial-time-and-space-are-model-invariant
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item prop-polynomially-related-encodings-preserve-polynomial-classes
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item prop-polynomially-related-encodings-preserve-polynomial-size
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item rem-model-equivalence-supports-but-does-not-prove-the-thesis
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-existence-of-a-universal-turing-machine
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-kleene-normal-form
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-lambda-definable-iff-partial-recursive
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-multitape-to-single-tape-space-simulation
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-multitape-to-single-tape-time-simulation
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-nondeterministic-and-deterministic-recognizability-agree
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-partial-recursive-iff-turing-computable
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-ram-register-and-turing-computability-agree
ERROR receipt-missing-impact: research/frontier-27-impact-6c.json: no disposition for affected item thm-universal-simulation-with-logarithmic-overhead

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

