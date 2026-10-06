---
id: cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets
kind: counterexample
title: "Degenerate ellipticity allows nonconstant solutions with interior zero sets"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [cor-strong-maximum-principle-for-weak-elliptic-solutions, lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-weak-derivative-of-a-locally-integrable-function, def-hk-and-hk-zero-notation, def-connected-space, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 5, Section 8, the uniform ellipticity condition (5.74) and its use in the maximum principle, printed pp. 139-141 (read in full)"
    - title: "Bozhidar Velichkov, Elliptic PDEs: Teorema di De Giorgi (Universita di Pisa; complete 7-page note, in Italian)"
      url: "https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf"
      locator: "The uniform ellipticity condition (1) is a standing hypothesis of Teorema 1, printed p. 1 (read in full)"
verification:
  precheck: pass
---

## Statement refuted

**Statement refuted.** The strong maximum principle of [[cor-strong-maximum-principle-for-weak-elliptic-solutions]] holds for every divergence-form equation with bounded measurable symmetric coefficient matrix that is positive semidefinite, $\sum_{i,j=1}^na^{ij}(x)\xi_i\xi_j\ge0$ for a.e. $x\in\Omega$ and all $\xi\in\mathbb R^n$: degeneracy of the coefficients does not affect the conclusion.

**Counterexample.** On $\Omega=B_1(0)\subset\mathbb R^3$ take $A=\operatorname{diag}(1,0,0)$ (so the matrix is positive semidefinite but degenerate: the uniform ellipticity inequality fails for $\xi=e_2$) and $u(x)=x_2^+:=\max\{x_2,0\}$. Then $u$ is Lipschitz, nonnegative and nonconstant on $\Omega$, and its zero set contains the lower half-ball $\{x_2<0\}$ of positive measure. Its weak gradient is $(0,\mathbf1_{\{x_2>0\}},0)$, so $A\nabla u=0$ a.e. and the weak identity $\int_{B_1}A\nabla u\cdot\nabla v\,dx=0$ holds for every $v\in H^1_0(B_1)$ — the integral identity of [[def-local-weak-solution-for-a-divergence-form-operator]] applied to the degenerate matrix. The analogue of [[cor-strong-maximum-principle-for-weak-elliptic-solutions]] fails: uniform ellipticity is a hypothesis of the theorem.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the unit ball $B_1(0)\subset\mathbb R^3$; the coefficient matrix $A=\operatorname{diag}(1,0,0)$; and the function $u(x)=x_2^+$.

[F1] The coefficient matrix is bounded, measurable, symmetric and positive semidefinite, but not uniformly elliptic: $\xi^TA\xi=\xi_1^2\ge0$ for all $\xi$, while for $\xi=e_2$ one has $\xi^TA\xi=0<\theta|\xi|^2$ for every $\theta>0$, so the ellipticity hypothesis of [[def-uniformly-elliptic-divergence-form-operator]] fails ([[def-hk-and-hk-zero-notation]]).

[F2] The function $u(x)=x_2^+$ is Lipschitz and nonnegative on $B_1(0)\subset\mathbb R^3$, nonconstant, and its zero set contains the lower half-ball $\{x\in B_1(0):x_2<0\}$, an open interior set of positive measure; moreover $u(x)>0$ on the upper half-ball ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-connected-space]]).

[F3] The weak gradient of $u$ is $Du=(0,\mathbf1_{\{x_2>0\}},0)$ a.e. on $B_1(0)\subset\mathbb R^3$, so $u\in H^1(B_1(0))$. For $A=\operatorname{diag}(1,0,0)$ one has $A Du=0$ a.e., hence the degenerate form $a_0(u,v)=\int_{B_1}A Du\cdot Dv\,dx$ is zero for every $v\in H^1_0(B_1)$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-local-weak-solution-for-a-divergence-form-operator]]).

[F4] The conclusion that fails: for uniformly elliptic coefficients, a nonnegative weak solution of $L_0u=0$ on a connected open set is either zero a.e. or strictly positive a.e., and its continuous representative has no interior zero unless it vanishes identically ([[cor-strong-maximum-principle-for-weak-elliptic-solutions]], [[lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution]]).

## Counterexample

1.1 The degenerate matrix and the function. By [F1] the matrix satisfies the stated boundedness and positive-semidefiniteness but violates uniform ellipticity, and by [F2] the function $u(x)=x_2^+$ is nonnegative, nonconstant and has a half-ball of interior zeros; by [F3] its weak gradient is $(0,\mathbf1_{\{x_2>0\}},0)$ and $A Du=0$, so $u\in H^1(B_1(0))$. [given, F1, F2, F3]

2.1 The weak identity holds. For every $v\in H^1_0(B_1(0))$, the matrix-vector product is $A Du=0$ a.e.; therefore $\int_{B_1(0)}A Du\cdot Dv\,dx=0$ directly. No distributional derivative of a sign function is involved. Hence $u$ is a weak solution of the degenerate equation in the integral sense of [[def-local-weak-solution-for-a-divergence-form-operator]]. [step 1.1, F3]

3.1 The strong maximum principle fails. The function of step 1.1 is a nonnegative nonconstant weak solution of the degenerate equation whose zero set contains a half-ball of positive measure, so its a.e.-class is neither zero nor strictly positive and its representative has interior zeros; this contradicts the conclusion of [F4] for uniformly elliptic coefficients. The example therefore shows that uniform ellipticity cannot be dropped from [[cor-strong-maximum-principle-for-weak-elliptic-solutions]] and from the De Giorgi-Nash machinery of the page. All verifications use the explicit function and the cited definitions, with no choice principle beyond the declared Axiom of Choice and Countable Choice. [step 2.1, F4] ∎
