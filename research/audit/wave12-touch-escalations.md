# Wave 12 repeated-touch escalation receipt

Stage: A6, before A7.  Reviewer: root orchestrator personal no-sampling audit,
recorded by Wave 12 Audit-Alpha.  The touch ledger contains fourteen snapshots
through `post-A6`; verification stamps are excluded from its mathematical hash.

## Exact mechanical census

`node tools/touchlog.mjs report research/audit/wave12-touches.json --min 2`
returns exactly 34 items:

- 5 repairs: `thm-norm-inequality-for-the-vector-valued-integral`.
- 4 repairs: `cex-m-over-m-plus-n-has-noncommuting-iterated-limits`;
  `ex-componentwise-convergence-and-a-vector-valued-integral-computed`.
- 3 repairs: `cex-shrinking-rectangles-have-integral-one`;
  `cex-uniform-convergence-does-not-control-derivatives`;
  `cor-bolzano-weierstrass-in-rn`;
  `thm-componentwise-limits-and-continuity`.
- 2 repairs: `cex-dini-needs-a-compact-domain`;
  `cex-dini-needs-monotonicity`;
  `cex-mean-value-equality-fails-for-a-vector-valued-function`;
  `cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly`;
  `cex-the-mean-value-inequality-is-attained`;
  `cex-the-one-norm-comes-from-no-inner-product`;
  `cor-uniform-cauchy-criterion-function-series`;
  `cor-uniform-limit-uniformly-continuous`;
  `cor-vector-valued-ftc-and-lipschitz-bound`;
  `def-continuous-real-functions-on-a-compact-metric-space`;
  `def-norm-and-normed-space`;
  `def-pointwise-uniform-and-uniformly-cauchy-convergence`;
  `def-series-of-real-functions`;
  `def-vector-valued-derivative-and-integral`;
  `def-vector-valued-functions-limits-and-continuity`;
  `lem-uniform-convergence-implies-pointwise-convergence-real-functions`;
  `lem-uniform-integral-error-bound`;
  `lem-uniform-limits-linear-combinations`;
  `lem-uniform-product-limit-under-boundedness`;
  `rem-rn-conventions-and-scope`;
  `rem-uniform-convergence-agrees-with-the-later-uniform-topology`;
  `thm-c-k-complete-in-the-sup-metric`;
  `thm-mean-value-inequality`;
  `thm-uniform-cauchy-criterion-real-functions`;
  `thm-uniform-derivative-limit-on-a-closed-interval`;
  `thm-uniform-limit-continuous-real-functions`;
  `thm-uniform-limit-interchanges-riemann-integration`.

No A7 judge ledger exists at this checkpoint, so this escalation is driven by
the mechanically recorded repair transitions rather than judge refutations.

## Personal-audit disposition

The root orchestrator personally read the complete exact-current text of every
one of the 34 items above.  Sampling used: none.  This expanded the earlier
eight-item substantive/source review of
`cor-bolzano-weierstrass-in-rn`,
`cex-the-one-norm-comes-from-no-inner-product`,
`thm-componentwise-limits-and-continuity`,
`thm-norm-inequality-for-the-vector-valued-integral`,
`cex-m-over-m-plus-n-has-noncommuting-iterated-limits`,
`cex-shrinking-rectangles-have-integral-one`,
`cex-uniform-convergence-does-not-control-derivatives`, and
`ex-componentwise-convergence-and-a-vector-valued-integral-computed`.

That complete read found two local proof defects: the norm-integral theorem
used its bound `K` before defining it, and the worked componentwise example
quantified only over positive rational epsilon.  A6 moved the square-root
continuity step after `K` is defined and changed the example to every positive
real epsilon.  Exact-current proof contracts, refuter routes, and independent
certifier routes were regenerated after the repairs.

For the other 32 items, the personal disposition is **retain**.  In particular,
the 26 metadata-only source-maintenance rows have no mathematical-body drop
implication: their removed endpoints were redundant dead URLs, while dropping
their surviving live semantic sources would weaken rather than improve the
provenance record.  This describes the metadata-only transition and does not
erase any separately recorded A6 interface repair on an affected item.

Dropping any of the eight substantive/source-audited results would remove a
published interface, theorem, example, or counterexample and would reopen its
manifest consumers; no such removal is mathematically warranted.  No item was
removed, and no drop was authorized.  The successive retry history, including
all refusals and superseded exact-current packets, remains append-only under
`research/audit/wave12-dispatch/` and is incorporated into the A6 receipts.

## A8 addendum — combined touch-plus-judge personal audit

A7 produced 28 rejection rows over 23 unique ids. The root orchestrator
personally read the complete exact-current text of all 23, with no sampling and
without inferring severity from model agreement. Nineteen were already in the
34-id repeated-touch census above. The four newly read ids were:

- `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`
- `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-cauchy-schwarz-and-the-euclidean-norm`

Thus the exact personal-audit union is 38 unique ids: the 34-id A6 census plus
those four. Root's no-sampling requirement is complete for all 38.

Alpha independently adjudicated all 28 exact `(id, model, context_sha256,
verdict_item_sha256)` rows from the complete item and every dependency needed
for the finding. The result is three `confirmed_fatal`, 24
`confirmed_nonfatal`, and one `false_positive`. The three fatal defects are the
nondegenerate-subinterval typing error in
`def-vector-valued-derivative-and-integral`, the zero-to-negative-rational
scope error in `rem-rn-conventions-and-scope`, and the `a=b` integrability
typing error in `thm-norm-inequality-for-the-vector-valued-integral`. Each has
the minimal A8 correction recorded in `wave12-published-repairs.md`.

The other 20 rejected ids remain unchanged under fatal-only R1. Their findings
are either real but sub-thirty-second citation/input compression, or (for
`lem-uniform-integral-error-bound`) a false positive contradicted by its exact
L1 source. Dropping any of the 23 rejected ids is unwarranted: the three fatal
items are now corrected public interfaces, and each unchanged item remains a
true definition, theorem, corollary, example, counterexample, or future-scope
record. Exact per-id fault and drop ramifications are durable in
`wave12-A8.md`; no deletion, id change, or reading-order change is proposed.
