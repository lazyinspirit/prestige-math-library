---
id: lem-affine-form-integrable-on-bochner-l2
kind: lemma
title: Affine diffusion forms are well-defined on Bochner L2
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-uniformly-elliptic-affine-random-diffusion
  - def-finite-input-bochner-l2-space
  - thm-finite-input-bochner-l2-is-hilbert
  - def-strongly-measurable-banach-valued-function
  - cor-cauchy-schwarz-inequality-for-l-two
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice enters through the Bochner L2 Hilbert-space interface; the scalar bounds themselves use no further choice.
verification: {}
sources:
  references:
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §4
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
    - title: Ivo Babuška, Fabio Nobile, and Raúl Tempone, A Stochastic Collocation Method for Elliptic Partial Differential Equations with Random Input Data, §1
      url: https://www.ices.utexas.edu/media/reports/2005/0547.pdf
---

## Statement

For the model of [[def-uniformly-elliptic-affine-random-diffusion]], let
$\mathcal H=L^2_\rho(V)$. For $U,W\in\mathcal H$, the scalar functions
$y\mapsto a_y(U(y),W(y))$ and $y\mapsto F(y)(W(y))$ are measurable and
integrable, so $\mathcal A(U,W)$ and $\mathcal F(W)$ are well-defined on
equivalence classes. They satisfy
$$|\mathcal A(U,W)|\le a^*\|U\|_{\mathcal H}\|W\|_{\mathcal H},\qquad
\mathcal A(U,U)\ge a_*\|U\|_{\mathcal H}^2,$$
and
$$|\mathcal F(W)|\le \|F\|_{L^2_\rho(V^*)}\|W\|_{\mathcal H}<\infty.$$

## Facts & Assumptions

**Given:** A bounded-support product law, the affine coefficient and forcing, and the uniform coefficient bounds in [[def-uniformly-elliptic-affine-random-diffusion]].

[F1] For every $y\in\Gamma$, the pointwise form satisfies $|a_y(v,w)|\le a^*\|v\|_V\|w\|_V$ and $a_y(v,v)\ge a_*\|v\|_V^2$; $F(y)=f_0+\sum_j y_jf_j$ is bounded and affine ([[def-uniformly-elliptic-affine-random-diffusion]]).

[F2] Strongly measurable maps are almost-everywhere limits of measurable finite-valued simple maps ([[def-strongly-measurable-banach-valued-function]]).

[F3] The scalar integral Cauchy--Schwarz inequality is [[cor-cauchy-schwarz-inequality-for-l-two]].

[F4] [[def-finite-input-bochner-l2-space]] identifies $\mathcal H$ with strongly measurable square-integrable maps modulo almost-everywhere equality.

## Proof

1.1 Choose finite-valued measurable simple maps $U_n,W_n$ converging respectively to $U,W$ almost everywhere, using [F2]. On every intersection of their finite partition sets, $y\mapsto a_y(U_n(y),W_n(y))$ is an affine continuous scalar function of $y$ by the displayed coefficient formula in [F1]. It is therefore measurable. On the common full-measure set where both approximations converge, continuity of the bounded bilinear form gives convergence to $a_y(U(y),W(y))$. Defining the scalar function arbitrarily on the measurable exceptional null set gives a measurable representative. [F1, F2, given, algebra]

1.2 For a finite-valued simple $W_n$ converging almost everywhere to $W$, the scalar function $F(y)(W_n(y))$ is measurable on each partition piece because $F(y)$ is affine continuous into the finite-dimensional span of $f_0,\ldots,f_d$. Its pointwise limit on the full-measure convergence set is $F(y)(W(y))$, so the latter has a measurable representative. Since $|y_j|\le R_j$, $\|F(y)\|_{V^*}\le\|f_0\|_{V^*}+\sum_jR_j\|f_j\|_{V^*}$; hence $F\in L^2_\rho(V^*)$. [F1, F2, given]

2.1 The pointwise bound [F1] gives $|a_y(U(y),W(y))|\le a^*\|U(y)\|_V\|W(y)\|_V$. Both norm functions are square-integrable, so [F3] makes this majorant integrable. The form integral is finite and depends only on the almost-everywhere classes by [F4]. [F1, F3, F4, step 1.1]

2.2 Pointwise duality gives $|F(y)(W(y))|\le\|F(y)\|_{V^*}\|W(y)\|_V$. Apply [F3] to obtain the stated integrability and functional bound. [F3, step 1.2]

3.1 Integrating the pointwise coercivity bound [F1] gives $\mathcal A(U,U)\ge a_*\int\|U(y)\|_V^2\,d\rho=a_*\|U\|_{\mathcal H}^2$. Integrating the pointwise continuity bound and applying [F3] as in step 2.1 gives $|\mathcal A(U,W)|\le a^*\|U\|_{\mathcal H}\|W\|_{\mathcal H}$. These estimates prove the remaining assertions. [F1, F3, F4, step 2.1] ∎