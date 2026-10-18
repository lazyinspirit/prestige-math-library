---
id: thm-geometric-clifford-module-dirac-index-formula
kind: theorem
title: "Atiyah–Singer index formula for a closed even-dimensional geometric Clifford module"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 13
deps:
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-ahat-and-relative-chern-character-forms
  - lem-spinor-and-clifford-associated-bundles-are-well-defined
  - lem-dirac-maximal-domain-is-h1
  - lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel
  - lem-dirac-heat-trace-and-mckeen-singer-index
  - lem-dirac-heat-parametrix-has-graph-norm-remainder
  - lem-getzler-radial-gauge-oscillator-leading-term
  - lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character
  - lem-geometric-dirac-operator-is-well-defined
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - def-axiom-of-choice
  - thm-complex-spin-modules-and-compact-reducibility
  - lem-clifford-even-subalgebra-signature-identification
  - thm-real-complex-clifford-algebra-classification
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; conditional on the exact PA-04 complex Clifford-module interface"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC and the exact local complex Clifford-module interface [A1]. Let $M$ be a compact, boundaryless, oriented Riemannian manifold of even dimension $2m\ge2$, and let $V=V^+\oplus V^-$ be a finite-rank graded Hermitian Clifford module with compatible connection as in [[def-graded-hermitian-clifford-module-and-geometric-dirac]]. The chiral operator
$$D_V^+:H^1(M;V^+)\longrightarrow L^2(M;V^-)$$
is Fredholm and its complex index is
$$\operatorname{ind}(D_V^+)=\int_M\left[\widehat A(TM,\nabla^{LC})\operatorname{ch}(V/S)\right]_{2m}.$$
The integral is with the stated orientation. The result is a complex index; it makes no real KO-index assertion.

## Facts & Assumptions

**Given:** Full AC; the manifold, module, and connection in the Statement; and the conditional complex module interface.

[F1] The maximal domain of $D_V$ is $H^1$, and the chiral operator has finite-dimensional kernel and cokernel and closed range ([[lem-dirac-maximal-domain-is-h1]], [[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]]).

[F2] The heat operator is trace class for $t>0$ and its graded supertrace equals $\operatorname{ind}(D_V^+)$ ([[lem-dirac-heat-trace-and-mckeen-singer-index]]).

[F3] The heat kernel has a uniform differentiated parametrix remainder to arbitrary order ([[lem-dirac-heat-parametrix-has-graph-norm-remainder]]).

[F4] In normal coordinates and radial gauge, Getzler rescaling makes all diagonal supertrace coefficients below order $m$ vanish, and the order-$m$ coefficient is the oscillator coefficient ([[lem-getzler-radial-gauge-oscillator-leading-term]]).

[F5] The normalized oscillator coefficient is $[\widehat A(TM,\nabla^{LC})\operatorname{ch}(V/S)]_{2m}$ with the curvature and chirality conventions fixed in the cited definition ([[lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character]], [[def-ahat-and-relative-chern-character-forms]]).

[A1] The current PA-04 supplier [[thm-complex-spin-modules-and-compact-reducibility]] is conditional on the unready items [[lem-clifford-even-subalgebra-signature-identification]] and [[thm-real-complex-clifford-algebra-classification]]. In particular, the local irreducible spinor factor and multiplicity-space supertrace used in [F4]–[F5] are not yet verified from current supplier bodies. Full AC is inherited through the analytic and characteristic-form suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The closed data of the Statement and the positive heat operator $D_V^2$.

1.1 By [F1], $D_V^+$ is a Fredholm operator on the stated exact domain. For each $t>0$, [F2] makes $e^{-tD_V^2}$ trace class and gives $\operatorname{ind}(D_V^+)=\operatorname{Tr}(\Gamma_Ve^{-tD_V^2})=\int_M\operatorname{str}K_t(x,x)\,d\operatorname{vol}_g(x)$, where $\Gamma_V$ is $+1$ on $V^+$ and $-1$ on $V^-$. [A1, F1, F2]

2.1 In each normal-coordinate neighborhood, [F3] replaces $K_t$ by its finite heat parametrix with a remainder $O(t^N)$ in the diagonal $C^0$ norm for any prescribed $N$, after increasing the truncation order. Since $M$ is compact, the volume is finite, so the integral of that remainder tends to zero. The rescaled expansion in [F4] has zero supertrace in every degree below $2m$; terms above degree $2m$ vanish as differential forms on $M$. Thus the limit of the diagonal supertrace integral as $t\downarrow0$ is the integral of its single degree-$2m$ oscillator coefficient. [F3, F4, step 1.1]

3.1 By [F5], that coefficient is the form $[\widehat A(TM,\nabla^{LC})\operatorname{ch}(V/S)]_{2m}$. Taking the limit in the $t$-independent identity of step 1.1 proves the displayed index formula. The result is computed over the complex Hilbert spaces $L^2(V^\pm)$, so no conclusion about real KO-index groups follows. The empty manifold has zero domain and codomain and both sides are zero; dimension zero is excluded from the Statement, and no boundary condition is needed because $M$ has no boundary. The PA-04 gap in [A1] remains the exact readiness blocker. [A1, F5, step 1.1, step 2.1] ∎

