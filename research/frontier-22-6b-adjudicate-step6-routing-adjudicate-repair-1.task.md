# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r`, `thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces`, `lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex`, `thm-binet-cauchy-formula`, `cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic`, `cex-n-times-z-is-not-normal-near-zero`, `cor-compact-open-topology-is-independent-of-exhaustion`, `cor-derivative-operators-are-continuous-for-local-uniform-convergence`, `cor-holomorphic-functions-are-closed-for-local-uniform-convergence`, `ex-cayley-transform-biholomorphism-upper-half-plane-to-disc`, `ex-chordal-distance-formula-from-complex-coordinates`, `ex-classification-of-z-plus-one-two-z-and-one-over-z`, `ex-mobius-transformation-from-three-point-correspondence`, `ex-stereographic-projection-formulas-on-the-unit-sphere`, `ex-the-unit-ball-family-is-normal-on-any-domain`, `ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane`, `fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity`, `fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity`, `fs-arzela-ascoli-alone-proves-montel`, `fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism`, `fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism`, `fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane`, `thm-chordal-metric-induces-sphere-topology`, `thm-classification-mobius-transformations`, `thm-rational-map-fibre-count-degree`, `thm-vitali-porter-convergence-theorem`, `fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 425 item(s) routed, 181 adjudication obligation(s), 27 error(s)
ERROR decision-not-applied: [fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-binet-cauchy-formula] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-n-times-z-is-not-normal-near-zero] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-compact-open-topology-is-independent-of-exhaustion] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-derivative-operators-are-continuous-for-local-uniform-convergence] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-holomorphic-functions-are-closed-for-local-uniform-convergence] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-cayley-transform-biholomorphism-upper-half-plane-to-disc] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-chordal-distance-formula-from-complex-coordinates] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-classification-of-z-plus-one-two-z-and-one-over-z] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-mobius-transformation-from-three-point-correspondence] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-stereographic-projection-formulas-on-the-unit-sphere] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-the-unit-ball-family-is-normal-on-any-domain] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-arzela-ascoli-alone-proves-montel] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-chordal-metric-induces-sphere-topology] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-classification-mobius-transformations] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-rational-map-fibre-count-degree] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-vitali-porter-convergence-theorem] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero] accepted_repair no longer matches the reader result

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

