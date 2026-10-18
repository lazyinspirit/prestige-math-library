---
id: thm-geometric-clifford-module-dirac-index-formula
kind: theorem
title: "Atiyah–Singer index formula for a closed even-dimensional geometric Clifford module"
status: published
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
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; exact current Clifford/Spin interfaces"
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC. Let $M$ be a compact, boundaryless, oriented Riemannian manifold of even dimension $2m$ with $m\ge0$, and let $V=V^+\oplus V^-$ be a finite-rank graded Hermitian Clifford module with compatible connection as in [[def-graded-hermitian-clifford-module-and-geometric-dirac]]. The chiral operator
$$D_V^+:H^1(M;V^+)\longrightarrow L^2(M;V^-)$$
is Fredholm and its complex index is
$$\operatorname{ind}(D_V^+)=\int_M\left[\widehat A(TM,\nabla^{LC})\operatorname{ch}(V/S)\right]_{2m}.$$
The integral is with the stated orientation. For $m=0$, write $\varepsilon_x\in\{1,-1\}$ for the orientation sign at $x$. Use the reference line $S_{0,x}=\mathbb C$ with grading $\Gamma_{S_{0,x}}=\varepsilon_xI$ and multiplicity grading $\Gamma_{W_x}=\varepsilon_x\Gamma_{V_x}$ from [[def-ahat-and-relative-chern-character-forms]]. The relative curvature is zero and the degree-zero integrand is $\varepsilon_x(\dim V_x^+-\dim V_x^-)$. The given grading of $V$ remains arbitrary, and no Spin lift is required. The result is a complex index; it makes no real KO-index assertion.

## Facts & Assumptions

**Given:** Full AC; the manifold, module, and connection in the Statement; and the complex module suppliers in [A1].

[F1] The maximal domain of $D_V$ is $H^1$, and the chiral operator has finite-dimensional kernel and cokernel and closed range ([[lem-dirac-maximal-domain-is-h1]], [[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]]).

[F2] The heat operator is trace class for $t>0$ and its graded supertrace equals $\operatorname{ind}(D_V^+)$ ([[lem-dirac-heat-trace-and-mckeen-singer-index]]).

[F3] The heat kernel has a uniform differentiated parametrix remainder to arbitrary order ([[lem-dirac-heat-parametrix-has-graph-norm-remainder]]).

[F4] In normal coordinates and radial gauge, Getzler rescaling makes all diagonal supertrace coefficients below order $m$ vanish, and the order-$m$ coefficient is the oscillator coefficient ([[lem-getzler-radial-gauge-oscillator-leading-term]]).

[F5] The normalized oscillator coefficient is $[\widehat A(TM,\nabla^{LC})\operatorname{ch}(V/S)]_{2m}$ with the curvature and chirality conventions fixed in the cited definition ([[lem-mehler-supertrace-normalization-is-ahat-times-relative-chern-character]], [[def-ahat-and-relative-chern-character-forms]]).

[A1] The actual [[thm-complex-spin-modules-and-compact-reducibility]], [[lem-clifford-even-subalgebra-signature-identification]] and [[thm-real-complex-clifford-algebra-classification]] supply the local spinor and multiplicity-space dimensions used in [F4]–[F5]. Full AC is inherited through the analytic and characteristic-form suppliers ([[def-axiom-of-choice]]).

[F6] On a compact oriented zero-manifold, $\int_M f=\sum_{x\in M}\varepsilon_x f(x)$, where $\varepsilon_x$ is its point orientation sign ([[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]).

## Proof

**Given:** The closed data of the Statement and the positive heat operator $D_V^2$.

1.1 If $m=0$, compactness makes the discrete manifold $M$ finite. The $H^1$ and $L^2$ spaces are the same finite direct sums of fibers, and $D_V^+=0:\bigoplus_xV_x^+\to\bigoplus_xV_x^-$ because $T^*M=0$. Its kernel and cokernel are those two finite direct sums, so its index is $\sum_x(\dim V_x^+-\dim V_x^-)$. The reference grading in the Statement gives $\operatorname{str}_{W_x}I=\varepsilon_x(\dim V_x^+-\dim V_x^-)$, while $\widehat A_0=1$ and $F^{V/S}=0$. The signed integration rule [F6] therefore gives $\int_M[\widehat A\operatorname{ch}(V/S)]_0=\sum_x\varepsilon_x^2(\dim V_x^+-\dim V_x^-)=\operatorname{ind}(D_V^+)$. This includes negative points, mixtures of signs, arbitrary fiber gradings, rank-zero fibers and the empty manifold. [F6, given, construct, algebra]

1.2 Suppose $m\ge1$. By [F1], $D_V^+$ is a Fredholm operator on the stated exact domain. For each $t>0$, [F2] makes $e^{-tD_V^2}$ trace class and gives $\operatorname{ind}(D_V^+)=\operatorname{Tr}(\Gamma_Ve^{-tD_V^2})=\int_M\operatorname{str}K_t(x,x)\,d\operatorname{vol}_g(x)$, where $\Gamma_V$ is $+1$ on $V^+$ and $-1$ on $V^-$. [A1, F1, F2]

2.1 In each normal-coordinate neighborhood, [F3] replaces $K_t$ by its finite heat parametrix with a remainder $O(t^N)$ in the diagonal $C^0$ norm for any prescribed $N$, after increasing the truncation order. Since $M$ is compact, the volume is finite, so the integral of that remainder tends to zero. By [F4], $\operatorname{str}u_j(x,x)=0$ for $j<m$. In $(4\pi t)^{-m}\sum_jt^ju_j(x,x)$ each smooth coefficient with $j>m$ is multiplied by $t^{j-m}$ and tends uniformly to zero. Within $u_m$, only Clifford degree $2m$ contributes to supertrace. Thus the limit of the diagonal supertrace integral as $t\downarrow0$ is the integral of its single degree-$2m$ oscillator coefficient. [F3, F4, step 1.2]

3.1 By [F5], that coefficient is the form $[\widehat A(TM,\nabla^{LC})\operatorname{ch}(V/S)]_{2m}$. Taking the limit in the $t$-independent identity of step 1.2 proves the displayed index formula. The result is computed over the complex Hilbert spaces $L^2(V^\pm)$, so no conclusion about real KO-index groups follows. The empty manifold has zero domain and codomain and both sides are zero; the zero-dimensional case is computed in step 1.1, and no boundary condition is needed because $M$ has no boundary. [A1, F5, step 1.1, step 1.2, step 2.1] ∎

