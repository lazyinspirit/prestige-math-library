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
  - def-oriented-smooth-manifold-and-oriented-chart
justified_by:
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
proof_strategy: direct
verification:
  precheck: n/a
axiom_strength: "ZF + full AC, inherited from Chern–Weil theory"
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Definition

For the real-coefficient cohomological interpretation below, assume full AC as in [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]. The displayed form definitions themselves use only the supplied bundles and connections.

Let $M$ be an oriented Riemannian manifold of dimension $2m$ and let $\Omega^{LC}$ be the skew-symmetric matrix of curvature two-forms of the Levi–Civita connection, with curvature convention
$R(X,Y)=[\nabla_X,\nabla_Y]-\nabla_{[X,Y]}$.
Define
$$\widehat A(TM,\nabla^{LC})=\det{}^{1/2}\!\left(\frac{i\Omega^{LC}/4\pi}{\sinh(i\Omega^{LC}/4\pi)}\right).$$
The determinant and square root are formal power series in commuting even-degree differential forms; the square-root branch has constant term $1$, and terms above degree $2m$ are discarded. This fixes the A-hat normalization using the curvature convention of [[def-chern-pontryagin-and-euler-characteristic-forms]].

For $m\ge1$ and a graded Hermitian Clifford module $V$ with compatible connection, use the local multiplicity space and relative curvature from [[lem-spinor-and-clifford-associated-bundles-are-well-defined]]. Define the **relative Chern character form** by
$$
\operatorname{ch}(V/S)=\operatorname{str}_{W}\exp\!\left(-\frac{F^{V/S}}{2\pi i}\right).
$$
Here $\operatorname{str}$ is the ordinary trace if $W$ is ungraded and the even trace minus odd trace if it is graded. The cited well-definedness lemma proves this local expression patches to a global even form. For $V=S\widehat\otimes E$ with the product connection, it is $\operatorname{tr}\exp(-F^E/(2\pi i))$. The Chern–Weil supplier [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]] identifies the resulting cohomology classes after passage to real coefficients; this definition asserts no integral torsion identity.

For $m=0$, let $\varepsilon_x\in\{1,-1\}$ be the supplied orientation sign at $x$ ([[def-oriented-smooth-manifold-and-oriented-chart]]). The reference zero-dimensional Clifford module $S_{0,x}$ is the complex line with grading operator $\Gamma_{S_{0,x}}=\varepsilon_x I$: it is even at a positive point and odd at a negative point. The zero-dimensional Clifford algebra is $\mathbb C$, acting by scalars. Set $W_x=\operatorname{Hom}_{\mathbb C}(S_{0,x},V_x)$ with the grading for which evaluation $S_{0,x}\widehat\otimes W_x\to V_x$ is even. Identifying a map with its value at $1$ gives $\Gamma_{W_x}=\varepsilon_x\Gamma_{V_x}$. All curvature two-forms vanish, so $\widehat A_0=1$, $F^{V/S}=0$, and
$$\operatorname{ch}(V/S)_0(x)=\operatorname{str}_{W_x}I=\varepsilon_x\bigl(\dim V_x^+-\dim V_x^-\bigr).$$
This formula is independent of any basis of $V_x$ and leaves its arbitrary given grading unrestricted. For $V=S_0\widehat\otimes E$ with $E$ in even degree, evaluation identifies $W=E$ in even degree, so the relative character is the ordinary rank, consistently with the product formula above. This reference-line convention makes no assertion about a Spin$(0)$ lift or its isomorphism classes.
