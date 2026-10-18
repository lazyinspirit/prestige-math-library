---
page: quantum-groups-at-roots-of-unity-and-tilting-quotients-examples
title: "Quantum Groups at Roots of Unity and Tilting Quotients: Examples and Counterexamples"
status: draft
items: []
examples: [ex-sl2-small-quantum-group-at-fifth-root, cex-sl2-specialization-map-not-injective-at-fifth-root]
---

This companion checks the A-page conventions in two rank-one cases. Neither
calculation supplies the unresolved higher-rank Frobenius or Verlinde proofs.

Companion: [[quantum-groups-at-roots-of-unity-and-tilting-quotients]].

## Worked example

At a primitive fifth root $\zeta$, the rank-one root-power quotient has basis
$$\{\overline F^{,a}\overline K^{,b}\overline E^{,c}:0\le a,b,c<5\}$$
and therefore dimension $5^3=125$. The calculation is the specialization
of the A-page basis theorem, not a general higher-rank dimension formula.

## Counterexample

The identity-on-generators map from the rank-one De Concini–Kac
specialization to the Lusztig divided-power specialization is not injective
at order five: the source element $E^5$ is nonzero by its PBW basis and its
image vanishes by $E^5=[5]_\zeta!E^{(5)}=0$. This refutes preservation of
injectivity under this specialization.

The source and calculation details are recorded in the [batch-68 coverage
ledger](../../research/non-ml-math-remaining-81-2026-10-18-batch-68.coverage.json).
