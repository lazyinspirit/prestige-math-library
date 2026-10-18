---
id: lem-gauss-jacobi-weight-finite-moment-measure
kind: lemma
title: The Jacobi weight defines a finite positive measure with full support
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [lem-real-power-lebesgue-integrability, def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, def-measure-with-density, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-substitution]
proof_strategy: direct
axiom_use: Countable Choice is used only to instantiate Lebesgue measure and its density measure; no full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Christopher J. Bishop, The Riemann Mapping Theorem, Chapter 3 §3, Gauss-Jacobi quadrature lecture notes
      url: https://www.math.stonybrook.edu/~bishop/classes/math401.F09/t.pdf
      locator: Chapter 3 §3, printed pp. 108–119, Jacobi weight and Gaussian rule hypotheses.
---

## Statement

Assume Countable Choice. Let $\alpha,\beta>-1$ and define
$$w_{\alpha,\beta}(t)=\begin{cases}(1-t)^\alpha(1+t)^\beta,&-1<t<1,\\0,&t=\pm1.\end{cases}$$
Let $\lambda$ be Lebesgue measure restricted to the Borel subsets of $[-1,1]$, and set $\mu_{\alpha,\beta}(E)=\int_Ew_{\alpha,\beta}\,d\lambda$. Then $\mu_{\alpha,\beta}$ is a finite positive Borel measure, its relative support is all of $[-1,1]$, and every moment $\int|t|^k\,d\mu_{\alpha,\beta}$ is finite for $k\in\mathbb N_0$.

## Facts & Assumptions

**Given:** Countable Choice and real parameters $\alpha,\beta>-1$.

[A1] [[def-countable-choice]]: the Countable Choice axiom is assumed.

[F1] [[lem-real-power-lebesgue-integrability]]: for every $q>-1$, $x\mapsto x^q$ on $(0,1]$, extended by zero at zero, is nonnegative and Lebesgue integrable with integral $1/(q+1)$.

[F2] [[thm-lebesgue-measure-is-a-complete-measure]] and [[thm-borel-sets-are-lebesgue-measurable]]: under [A1], Borel sets in $[-1,1]$ lie in the Lebesgue sigma-algebra and Lebesgue measure is a measure there; an interval has measure its length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: products, restrictions, and finite piecewise definitions on measurable sets preserve measurability.

[F4] [[def-measure-with-density]]: a nonnegative measurable density $w$ defines the measure $w\,d\lambda$ by $E\mapsto\int_Ew\,d\lambda$.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous real function on a compact interval attains its finite minimum and maximum.

[F6] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and positively homogeneous.

## Proof

1.1 The density is nonnegative and Borel measurable by [F3], since it is continuous on $(-1,1)$ and differs from that continuous expression only at the two Borel endpoints. Put $M_\alpha=\max(1,2^\alpha)$ and $M_\beta=\max(1,2^\beta)$. On $[-1,0]$, $(1-t)^\alpha\le M_\alpha$, so the substitution $u=1+t$ and [F1] give $\int_{-1}^0w_{\alpha,\beta}\,d\lambda\le M_\alpha/(\beta+1)$. On $[0,1]$, $(1+t)^\beta\le M_\beta$, and $u=1-t$ gives $\int_0^1w_{\alpha,\beta}\,d\lambda\le M_\beta/(\alpha+1)$. Thus the total density integral is finite. [A1, F1, F2, F3, algebra]

2.1 By [F4], $\mu_{\alpha,\beta}$ is a positive Borel measure, and step 1.1 makes its total mass finite. If $U\subseteq[-1,1]$ is nonempty and relatively open, choose a nondegenerate closed interval $[c,d]\subset U\cap(-1,1)$. The density is continuous and strictly positive on $[c,d]$, so [F5] gives a minimum $m>0$ there. By [F2] and monotonicity [F6], $\mu_{\alpha,\beta}(U)\ge\int_{[c,d]}w_{\alpha,\beta}\,d\lambda\ge m(d-c)>0$. Therefore every point is in the relative support. [A1, F2, F4, F5, F6, step 1.1, choose]

3.1 For every $k\in\mathbb N_0$, $|t|^k\le1$ on $[-1,1]$, so [F6] gives $\int|t|^k\,d\mu_{\alpha,\beta}\le\mu_{\alpha,\beta}([-1,1])<\infty$ by step 1.1. This proves all moment claims. [F6, step 1.1, algebra] ∎

