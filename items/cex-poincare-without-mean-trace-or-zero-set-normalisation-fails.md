---
id: cex-poincare-without-mean-trace-or-zero-set-normalisation-fails
kind: counterexample
title: "A gradient-only Poincare estimate needs normalisation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-sobolev-conjugate-exponent, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, thm-ftc-second-part, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-countable-choice, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.47, printed pp. 90–91; explicit constant-function necessity witness."
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$ and $1<p<n$ with $p^{*}=\frac{np}{n-p}$, and let $\Omega$ be a nonempty bounded connected domain with smooth boundary. The following two assertions are false:

1. there is a finite constant $C$ with $\|u\|_{L^{p^{*}}(\Omega)}\le C\|Du\|_{L^p(\Omega)}$ for every $u\in W^{1,p}(\Omega;\mathbb K)$;
2. there is a finite constant $C$ with $\|u\|_{L^p(\Omega)}\le C\|Du\|_{L^p(\Omega)}$ for every $u\in W^{1,p}(\Omega;\mathbb K)$.

A condition excluding nonzero constants is necessary; mean subtraction, zero trace, and vanishing on a set of positive measure are standard normalisations.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge2$; $1<p<n$; the nonempty bounded connected smooth domain $\Omega_0=\Omega$ of the statement; and a test function $\varphi\in C_c^\infty(\Omega_0)$.

[F1] $W^{1,p}(\Omega_0)$ consists of the $L^p$ classes whose first weak derivatives exist as $L^p$ classes; the weak derivative $D_iu$ is characterized by $\int_{\Omega_0}u\,\partial_i\varphi=-\int_{\Omega_0}D_iu\,\varphi$ for every test function ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] $L^p$ consists of almost-everywhere classes, and the constant class $u\equiv1$ lies in $L^p(\Omega_0)$ because $\Omega_0$ contains a ball and is bounded, so it has finite positive measure ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F3] On sigma-finite products nonnegative measurable functions may be integrated in either order (Tonelli-Fubini) ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] If $G$ is differentiable everywhere on a compact interval and $G'$ is integrable, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]). Applied to a compactly supported smooth real section, or separately to both components of a complex section, its derivative integral is zero.

[F5] The Sobolev conjugate satisfies $p^{*}>p$ and $\frac1{p^{*}}=\frac1p-\frac1n$, so the two exponents in the refuted assertions are distinct and both finite ([[def-sobolev-conjugate-exponent]]).

## Counterexample

**Proof technique:** direct.

1.1 The constant function is a Sobolev function with zero gradient. Take $u\equiv1$ on $\Omega_0$. By [F2], $u\in L^p(\Omega_0;\mathbb K)$ (the class is represented by the constant function; for $\mathbb K=\mathbb C$ it is the complex constant). Fix $i$ and let $\varphi\in C_c^\infty(\Omega_0)$; extend $\varphi$ by zero to $\mathbb R^n$. Writing $\hat x_i$ for the coordinates other than $x_i$ and using Fubini [F3], $\int_{\Omega_0}\partial_i\varphi=\int_{\mathbb R^n}\partial_i\varphi=\int_{\mathbb R^{n-1}}\bigl(\int_{\mathbb R}\partial_i\varphi(\dots,t,\dots)\,dt\bigr)\,d\hat x_i=0$, because for each fixed $\hat x_i$ the inner function $t\mapsto\varphi(\dots,t,\dots)$ is compactly supported and smooth, so [F4] gives vanishing integral. Hence $\int_{\Omega_0}u\,\partial_i\varphi=0=\int_{\Omega_0}0\cdot\varphi$ for every test function, i.e. the zero class is the weak derivative $D_iu$ by [F1]; in particular $Du=0$ as an element of $L^p(\Omega_0;\mathbb K)$. [F1, F2, F3, F4, given, algebra]

2.1 Both proposed inequalities fail. Since $u\equiv1$ and $Du=0$, the two sides of the first proposed estimate are $\|u\|_{L^{p^{*}}(\Omega_0)}=|\Omega_0|^{1/p^{*}}>0$ by [F2] and $\|Du\|_{L^p(\Omega_0)}=0$; the second has $\|u\|_{L^p(\Omega_0)}=|\Omega_0|^{1/p}>0$ and again $\|Du\|_{L^p(\Omega_0)}=0$. No finite $C$ can satisfy $|\Omega_0|^{1/p^{*}}\le C\cdot0$ or $|\Omega_0|^{1/p}\le C\cdot0$. Finally $u-u_{\Omega_0}=0$ and $u$ does not vanish on any set of positive measure and satisfies no vanishing trace condition, so mean subtraction annihilates precisely this witness while trace or positive-measure zero-set normalisations exclude it; a condition excluding nonzero constants is therefore necessary. [F2, F5, step 1.1, given, algebra] ∎

## Source notes

The refutation is the explicit constant-function witness against the un-normalised inequalities. Kinnunen's Theorem 3.47, printed pp. 90-91, states the mean-zero form; the constant witness directly shows why that normalisation matters. The computation of the weak gradient of a constant uses only Fubini and the one-dimensional fundamental theorem, so it applies to every nonempty open $\Omega_0$ of finite measure, not only to a ball; the same computation proves the claim on the arbitrary finite-measure domain in the statement.
