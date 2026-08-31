# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [ex-dedekind-localisation-is-dvr] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `ex-dedekind-localisation-is-dvr`, `lem-fractional-ideal-operations-well-defined`, `thm-submodules-of-projectives-over-dedekind-domains`, `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product`, `ex-the-word-category-on-words-of-length-three`, `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes`, `lem-the-mapping-cylinder-differential-squares-to-zero`, `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum`, `thm-lyapunov-interpolation-inequality-for-l-p-norms`, `ex-square-root-continuation-around-the-origin-changes-sign`, `ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five`, `lem-state-elimination-preserves-path-language`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 441 item(s) routed, 128 adjudication obligation(s), 12 error(s)
ERROR decision-not-applied: [ex-dedekind-localisation-is-dvr] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-fractional-ideal-operations-well-defined] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-submodules-of-projectives-over-dedekind-domains] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-the-word-category-on-words-of-length-three] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-the-mapping-cylinder-differential-squares-to-zero] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-lyapunov-interpolation-inequality-for-l-p-norms] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-square-root-continuation-around-the-origin-changes-sign] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-state-elimination-preserves-path-language] accepted_repair no longer matches the reader result

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

