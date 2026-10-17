---
id: lem-parabolic-bochner-l2-approximate-identity
kind: lemma
title: Smooth mollifiers approximate Bochner L² functions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-bochner-integrable-function
  - def-countable-choice
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - def-strongly-measurable-banach-valued-function
  - def-translation-of-a-function-on-rn
  - lem-bochner-integral-norm-inequality
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-bochner-integrability-criterion
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 11, §11.1, PDF pp. 100–101: mollification in the parabolic evolution space."
verification: {}
---

## Statement

Assume Countable Choice. Let $X$ be a real Hilbert space, let
$q\in L^2(\mathbb R;X)$ be strongly measurable, and let $(\eta_\epsilon)$ be
a nonnegative smooth mollifier family of mass one. Define
$$q_\epsilon(t)=\int_{\mathbb R}\eta_\epsilon(t-s)q(s)\,ds.$$
Then each $q_\epsilon$ is smooth with values in $X$ and
$$\|q_\epsilon-q\|_{L^2(\mathbb R;X)}\longrightarrow0\qquad(\epsilon\downarrow0).$$

## Facts & Assumptions

**Given:** Countable Choice, a real Hilbert space $X$, a strongly measurable
$q\in L^2(\mathbb R;X)$, and a nonnegative smooth compactly supported scalar
kernel of mass one at each scale.

[F1] Strong measurability is almost-everywhere pointwise norm approximation
by finite-valued measurable simple functions
([[def-strongly-measurable-banach-valued-function]]).

[F2] A strongly measurable function with integrable norm is Bochner
integrable, and the Bochner integral is the norm limit of simple integrals
([[thm-bochner-integrability-criterion]],
[[def-bochner-integrable-function]]).

[F3] Scalar translations are continuous and isometric on $L^2(\mathbb R)$
under Countable Choice ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]]).

[F4] The mollifier kernel is smooth, nonnegative, compactly supported, and
has integral one ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F5] The norm of a Bochner integral is at most the integral of the norm
([[lem-bochner-integral-norm-inequality]]).

[F6] Tonelli permits changing the order of integration for a nonnegative
measurable function ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] Scalar dominated convergence turns almost-everywhere convergence under
an integrable majorant into convergence of the integrals
([[thm-dominated-convergence]]).

[F8] Lebesgue measure is translation invariant, so scalar and Bochner $L^2$
translations preserve their norms ([[def-translation-of-a-function-on-rn]],
[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[A1] Countable Choice is assumed by the scalar translation theorem
([[def-countable-choice]]).

## Proof
1.1 Finite-valued simple functions are dense in Bochner $L^2$. Choose simple $s_n\to q$ almost everywhere as in [F1]. Replace $s_n$ by zero where $\|s_n\|>2\|q\|$. The clipped functions are still simple, converge to $q$ almost everywhere, and have squared error bounded by $9\|q\|^2$. Scalar dominated convergence [F7] gives convergence in $L^2(X)$. If $q=0$ almost everywhere, the zero simple sequence suffices. [F1, F7, given, construct]

1.2 For fixed $t$, the integrand in the definition of $q_\epsilon(t)$ is strongly measurable and has integrable norm on the compact support of the kernel, so [F2] defines the Bochner integral. Differentiating the scalar kernel under this integral gives $$q_\epsilon^{(k)}(t)=\int\eta_\epsilon^{(k)}(t-s)q(s)\,ds\qquad(k\ge0).$$ Indeed, for $t$ in a fixed compact interval the difference quotients of each kernel derivative converge uniformly and are bounded on one compact set; the $L^1(X)$ norm of $q$ on that set and [F5] let the limit pass through the integral. The same bound proves continuity of every displayed derivative, so $q_\epsilon$ is smooth. [F2, F4, F5, given, construct]

2.1 For a finite-valued simple function $s=\sum_{j=1}^m x_j\mathbf1_{E_j}$, omit zero values; each remaining $E_j$ has finite measure. Then $\|s(\cdot-h)-s\|_{L^2(X)}\le\sum_j\|x_j\|_X \|\mathbf1_{E_j}(\cdot-h)-\mathbf1_{E_j}\|_{L^2}$, which tends to zero by [F3]. For general $q$, use the density from step 1.1 and translation's isometry [F8] to obtain $\|q(\cdot-h)-q\|_{L^2(X)}\to0$. [A1, F1, F3, F8, step 1.1, algebra]

3.1 Fix $R>0$ with $\operatorname{supp}\eta\subset[-R,R]$ for the generating bump, so $\operatorname{supp}\eta_\epsilon\subset[-R\epsilon,R\epsilon]$ by [F4]. Since $\eta_\epsilon(s)ds$ is a probability measure, Cauchy–Schwarz and [F5] give $$\|q_\epsilon(t)-q(t)\|_X^2\le\int\eta_\epsilon(s) \|q(t-s)-q(t)\|_X^2\,ds.$$ Integrate in $t$ and apply [F6]. The result is bounded by $\sup_{|s|\le R\epsilon}\|q(\cdot-s)-q\|_{L^2(X)}^2$, which tends to zero by step 2.1. This proves the asserted $L^2$ convergence. [A1, F3, F4, F5, F6, step 2.1, algebra] ∎
