---
id: ex-qftx-penrose-flat-summand-vanishing
kind: example
title: Flat summands in coupled Penrose vanishing
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-coupled-penrose-vanishing-on-the-round-four-sphere-examples
dependency_level: 7
axiom_base: "ZF + full AC inherited from the conditional theorem inputs."
deps:
  - lem-qftx-coupled-penrose-injective-edge
  - lem-qftx-coupled-penrose-operator-coefficient
  - thm-qftx-coupled-penrose-vanishing
dependency_roles:
  lem-qftx-coupled-penrose-injective-edge: mathematical-premise
  lem-qftx-coupled-penrose-operator-coefficient: mathematical-premise
  thm-qftx-coupled-penrose-vanishing: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "J. H. Rawnsley, On the Atiyah-Hitchin-Drinfeld-Manin vanishing theorem for cohomology groups of instanton bundles"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf"
      locator: "§§2–3, printed pp. 46–56: coupled vanishing and its componentwise fibre transform."
    - title: "R. O. Wells, The Conformally Invariant Laplacian and the Instanton Vanishing Theorem"
      url: "https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html"
      locator: "§3, printed pp. 488–494: coupled operator and Bochner positivity."
verification:
  precheck: pass
---

## Example

For any integer $m\ge0$, let $E=S^4\times\mathbb C^m$ have its standard Hermitian metric and trivial unitary connection, and let $F=\mathcal O_Z^{\oplus m}$ be the induced holomorphic bundle on the twistor space. Then $H^1(Z,F\otimes\mathcal O_Z(-2))=H^1(Z,F^\vee\otimes\mathcal O_Z(-2))=0$. The fibre-harmonic transform and its dual act componentwise, so adjoining this flat summand preserves the coupled vanishing conclusion.

## Example references

[[thm-qftx-coupled-penrose-vanishing]]

[[lem-qftx-coupled-penrose-injective-edge]]

[[lem-qftx-coupled-penrose-operator-coefficient]]

[Rawnsley, §§2–3, pp. 46–56](https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0241/LOG_0014.pdf)

[Wells, §3, pp. 488–494](https://dokumen.pub/seminar-on-differential-geometry-am-102-volume-102-9781400881918.html)

## Facts & Assumptions

**Given:** The unit round sphere, the trivial Hermitian rank-$m$ bundle and connection, and the conditional analytic comparison used by the coupled theorem.

[A1] The theorem uses the local analytic Dolbeault-resolution comparison with its full AC and holomorphic-bundle hypotheses; no algebraic GAGA or independent general Penrose theorem is supplied as a premise. [[thm-qftx-coupled-penrose-vanishing]]

[F1] The coupled theorem asserts both twists vanish for every finite-rank unitary ASD bundle, including reducible and flat bundles, under the stated Ward Dolbeault hypotheses. [[thm-qftx-coupled-penrose-vanishing]]

[F2] The transform is defined by fibrewise harmonic projection, and its correction is the unique solution of a fibrewise Dolbeault equation; the local operator is $\nabla_A^*\nabla_A+2$. [[lem-qftx-coupled-penrose-injective-edge]], [[lem-qftx-coupled-penrose-operator-coefficient]]

## Verification

**Given:** The example data, the exact coupled theorem [F1], and the transform construction [F2].

1.1 The trivial connection has zero curvature, hence is unitary and ASD. Its pullback holomorphic structure is the trivial bundle $F=\mathcal O_Z^{\oplus m}$, and its dual is again trivial. Applying [F1] gives the two asserted analytic cohomology vanishings, including the zero-rank case $m=0$. [given, A1, F1, algebra]

2.1 The global Dolbeault complex of a direct sum is the direct sum of its Dolbeault complexes. The fibre harmonic projection in [F2] is the orthogonal projection for the direct-sum metric, hence is block diagonal; the vertical correction is unique on every summand, so it is block diagonal too. Therefore $\mathcal P_{E\oplus\mathbb C^m}=\mathcal P_E\oplus\mathcal P_{\mathbb C^m}$, and the same identity holds after dualization. On the added flat summand the operator is $\nabla^*\nabla+2$; pairing with a section and integrating gives $\|\nabla s\|^2+2\|s\|^2$, so its kernel is zero. This verifies preservation under adding any finite flat summand. [F2, step 1.1, algebra] ∎
