---
id: def-ahat-and-relative-chern-character-forms
kind: definition
title: "The A-hat form and relative Chern character"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 0
deps:
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - def-complex-linear-and-compatible-bundle-connections
  - def-axiom-of-choice
justified_by:
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
proof_strategy: direct
verification:
  precheck: n/a
erification:
  precheck: n/a
axiom_strength: "ZF + full AC, inherited from Chern–Weil theory"
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Definition

Let $M$ be an oriented Riemannian manifold of dimension $2m$ and let $\Omega^{LC}$ be the skew-symmetric matrix of curvature two-forms of the Levi–Civita connection, with curvature convention
$R(X,Y)=[\nabla_X,\nabla_Y]-\nabla_{[X,Y]}$.
Define
$$\widehat A(TM,\nabla^{LC})=\det{}^{1/2}\!\left(\frac{i\Omega^{LC}/4\pi}{\sinh(i\Omega^{LC}/4\pi)}\right).$$
The determinant and square root are formal power series in commuting even-degree differential forms; the square-root branch has constant term $1$, and terms above degree $2m$ are discarded. This is the normalization of the A-hat characteristic form in [[def-chern-pontryagin-and-euler-characteristic-forms]].

For a graded Hermitian Clifford module $V$ with compatible connection, use the local multiplicity space and relative curvature from [[lem-spinor-and-clifford-associated-bundles-are-well-defined]]. Define the **relative Chern character form** by
$$
\operatorname{ch}(V/S)=\operatorname{str}_{W}\exp\!\left(-\frac{F^{V/S}}{2\pi i}\right).
$$
Here $\operatorname{str}$ is the ordinary trace if $W$ is ungraded and the even trace minus odd trace if it is graded. The cited well-definedness lemma proves this local expression patches to a global even form. For $V=S\widehat\otimes E$ with the product connection, it is $\operatorname{tr}\exp(-F^E/(2\pi i))$. The Chern–Weil supplier [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] identifies the resulting cohomology classes after passage to real coefficients; this definition asserts no integral torsion identity.
