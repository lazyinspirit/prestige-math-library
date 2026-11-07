---
id: rem-brauer-manin-global-cohomology-proof-gate
kind: remark
title: "Global cohomology and exactness proof gate for Brauer–Manin statements"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-brauer-manin-set
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - thm-global-function-field-brauer-hasse-sequence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.2"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Evaluation finite-support proof and global invariant-sum argument."
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Complete global function-field Brauer invariant sequence proof."
    - title: "Werner Hürlimann, A short proof of the Albert–Brauer–Hasse–Noether theorem"
      url: "https://www.numdam.org/item/AST_1992__209__215_0.pdf"
      locator: "Number-field class-formation/Tate–Nakayama proof route."
verification: {}
---

## Remark

The rational-points-in-Brauer–Manin argument requires two separate
inputs: each adelic evaluation has finite local support, and the global
Brauer–Hasse–Noether sequence makes the sum of the local invariants of a
global class zero. The number-field sequence carrier now proves finite support, injectivity,
and exact zero-sum realization under its original AC hypothesis. The
function-field sequence carrier also has a complete local divisor/Picard and
actual-localization proof at its declared hypotheses. This note adds no
independent review of either supplier. Descent-to-Brauer comparisons require
the additional regular-scheme Azumaya/cohomological comparison and
projective-linear torsor interfaces. The remaining arbitrary-adelic-evaluation and Azumaya/projective-linear
comparison obligations are distinct from the completed global field sequences.

## Remark references

[[thm-rational-points-lie-in-brauer-manin-set|Rational points lie in the Brauer–Manin set]]

[[def-brauer-manin-set|Brauer–Manin definition and finite-support gate]]

[[thm-global-brauer-hasse-noether-exact-sequence-number-field|Completed number-field global sequence under AC]]

[[thm-global-function-field-brauer-hasse-sequence|Completed function-field global sequence at its declared hypotheses]]

[[thm-number-field-brauer-classes-have-finite-local-support|Completed number-field finite-support supplier]]

[[thm-gabber-cohomological-brauer-group-equals-azumaya-for-regular-quasiprojective-schemes|Proposed cohomological/Azumaya supplier]]

[[thm-pgl-torsors-classify-azumaya-algebras|Proposed projective-linear torsor supplier]]

[Poonen, §8.2](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Milne, Appendix A.7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Hürlimann, full article](https://www.numdam.org/item/AST_1992__209__215_0.pdf)

## Facts & Assumptions

**Given:** The current number-field and function-field global sequence
carriers and the local evaluation construction.

[F1] Under its original AC hypothesis, the number-field global sequence now
proves finite support, localization injectivity, the zero invariant-sum kernel,
and realization of every finite-support zero-sum tuple.
[[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[F2] The current function-field exact-sequence body proves the global
invariant sequence through its finite-field divisor/Picard and local
comparison suppliers. Its provided interface is used at its declared hypotheses; no new review of
its transitive suppliers is asserted here.
[[thm-global-function-field-brauer-hasse-sequence]]

[F3] For arbitrary adelic points, the evaluation finite-support proof uses a
cohomological spreading-out theorem and vanishing over valuation rings; those
items are not current proved suppliers:
`thm-cohomological-brauer-classes-spread-out-over-finite-set-of-places`
`thm-cohomological-brauer-group-of-henselian-dvr-is-zero`. The
Brauer–Manin definition makes this finite-support obligation explicit.
[[def-brauer-manin-set]]

[F4] The descent comparison further needs the cohomological/Azumaya and
projective-linear torsor interfaces to represent cohomological classes by
Azumaya algebras and then by $\operatorname{PGL}_n$-torsors.
`thm-gabber-cohomological-brauer-group-equals-azumaya-for-regular-quasiprojective-schemes`
`thm-pgl-torsors-classify-azumaya-algebras`

## Proof

**Proof technique:** separate the finite-support, global-reciprocity, and
Azumaya-comparison obligations by the claims that use them.

**Given:** The data above.

1.1 Pulling a Brauer class on $X$ back along a rational point gives a global class on $K$. Its local evaluations are restrictions of this class, so the rational-point inclusion uses both the global invariant sequence [F1 or F2] and its finite-support assertion. [F1, F2, F3]

1.2 The descent comparison instead passes from a cohomological class to an Azumaya representative and then to a $\operatorname{PGL}_n$-torsor, so it uses [F4] in addition to the global invariant sequence. Because these suppliers are separate from the conclusion they support, this Remark does not use either target theorem as its own proof input. [F1, F2, F4]

2.1 The completed field sequences [F1] and [F2] now discharge the finite-support and zero-sum input for the pullback of a rational-point Brauer class. The remaining prerequisites recorded here concern arbitrary adelic evaluation in [F3] and the Azumaya/projective-linear comparison in [F4]. This current-status correction asserts no completion of those separate scheme-theoretic inputs and no new independent review of the field sequences. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
