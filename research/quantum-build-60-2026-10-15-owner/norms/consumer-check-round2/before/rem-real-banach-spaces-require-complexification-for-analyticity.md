---
id: rem-real-banach-spaces-require-complexification-for-analyticity
kind: remark
title: Real Banach spaces require complexification for analyticity
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [def-complex-sector-and-bounded-analytic-semigroup, lem-canonical-banach-complexification-of-a-real-banach-space, def-complexification-of-a-real-linear-map, def-complexification-of-a-real-vector-space, def-resolvent-of-a-closed-operator, def-sectorial-operator-with-the-semigroup-sign-convention, thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups, rem-real-and-complex-normed-space-convention, def-dependent-choice]
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, the complexification and real-operator formalism underlying sectoriality, printed pp. 95-108'
verification:
  precheck: n/a
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Given a real Banach space $X$ and a strongly continuous semigroup $(T(t))_{t\ge0}$ of bounded real-linear operators, first complexify each real-time operator to $T_{\mathbb C}(t):=(T(t))_{\mathbb C}$ on $X_{\mathbb C}=X\times X$ with the rotation-supremum norm ([[lem-canonical-banach-complexification-of-a-real-banach-space]]). The real semigroup is analytic of angle $\delta$ when this complexified real-time semigroup admits an analytic extension $\widetilde T_{\mathbb C}(z)$ to $\Sigma_\delta\cup\{0\}$ on $X_{\mathbb C}$, agreeing with $T_{\mathbb C}(t)$ for $t\ge0$; the real-time operators preserve the embedded copy $X\times\{0\}$; preservation at nonreal times is not guaranteed, but can occur (the identity semigroup preserves it at every complex time) ([[def-complex-sector-and-bounded-analytic-semigroup]]). It is bounded analytic when the extension is bounded on every strictly smaller sector. A holomorphic map is complex-time: a real-linear family defined only for real $t$ is not itself a map on a complex sector.

For a bounded real-linear operator its spectrum and resolvent are computed on its complexification using [[def-resolvent-of-a-closed-operator]]; no spectral-radius assertion is used here. For an unbounded real generator $A$, complexify its domain and action, $A_{\mathbb C}(x,y)=(Ax,Ay)$ on $D(A)\times D(A)\subset X_{\mathbb C}$, then impose the closed-unbounded resolvent and sectorial conditions on $A_{\mathbb C}$ using [[def-resolvent-of-a-closed-operator]] and [[def-sectorial-operator-with-the-semigroup-sign-convention]]. The sectorial-generation theorem [[thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups]] is applied to that complexified operator. The heat equation on real $L^2$ is recovered by restricting $T_{\mathbb C}(t)$ to the real summand for real $t\ge0$; its holomorphic extension is on the complexification, not a real-valued map at nonreal times.
