---
id: lem-gauss-jacobi-weight-finite-moment-measure
kind: lemma
title: The Jacobi weight defines a finite positive measure with full support
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [lem-real-power-lebesgue-integrability, def-countable-choice, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, def-measure-with-density, prop-closure-properties-of-measurable-functions-used-by-the-integral, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-substitution, thm-real-power-continuity-and-derivatives, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions, thm-monotone-convergence-for-the-integral, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-riemann-criterion]
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

[F3] [[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-continuous-functions]], and [[thm-composition-of-continuous-functions]]: positive-base powers are continuous, as are the finite products and compositions used in the density.

[F4] [[def-measure-with-density]]: a nonnegative measurable density $w$ defines the measure $w\,d\lambda$ by $E\mapsto\int_Ew\,d\lambda$.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a continuous real function on a compact interval attains its finite minimum and maximum.

[F6] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and positively homogeneous.

[F7] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: bounded Riemann-integrable functions on compact intervals have the same Lebesgue integral under [A1]; [[thm-substitution]] gives the ordinary Riemann substitution on intervals away from the singular endpoints.

[F8] [[thm-monotone-convergence-for-the-integral]] and [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: increasing nonnegative measurable cutoffs have integrals increasing to the integral of their limit.

[F9] [[thm-riemann-criterion]]: a bounded function whose Darboux gaps can be made arbitrarily small is Riemann integrable.

## Proof

1.1 The density is nonnegative and continuous on $(-1,1)$ by [F3]. For every real $c$, its strict superlevel is all of $[-1,1]$ when $c<0$, and the relatively open set $\{t\in(-1,1):w_{\alpha,\beta}(t)>c\}$ when $c\ge0$; thus the endpoint extension is Borel, and [F2] makes it Lebesgue measurable. Put $M_\alpha=\max(1,2^\alpha)$ and $M_\beta=\max(1,2^\beta)$. On $(-1,0]$ the factor $(1-t)^\alpha$ is at most $M_\alpha$, and on $[0,1)$ the factor $(1+t)^\beta$ is at most $M_\beta$. [A1, F2, F3, given, algebra]

1.2 To justify the endpoint integral comparisons, set $w_n=w_{\alpha,\beta}\chi_{[-1+1/n,1-1/n]}$ for $n\ge2$. Its superlevels are Borel by step 1.1. It is bounded and continuous except possibly at the two cutoff points; isolating these in intervals of arbitrarily small total length and using uniform continuity on the remaining compact pieces proves the Darboux criterion [F9]. The same argument applies to each half-interval restriction and to the corresponding power cutoffs. Consequently [F7] and the Riemann substitutions $u=1+t$ and $u=1-t$ give $\int_{-1}^0w_n\,d\lambda\le M_\alpha\int_{1/n}^1u^\beta\,d\lambda\le M_\alpha/(\beta+1)$ and $\int_0^1w_n\,d\lambda\le M_\beta\int_{1/n}^1u^\alpha\,d\lambda\le M_\beta/(\alpha+1)$, using [F1] and [F6] for the final bounds. Since $w_n\uparrow w_{\alpha,\beta}$ pointwise, including at the endpoints, [F8] gives $\int_{[-1,1]}w_{\alpha,\beta}\,d\lambda\le M_\alpha/(\beta+1)+M_\beta/(\alpha+1)<\infty$. [A1, F1, F6, F7, F8, F9, step 1.1, construct, algebra]

2.1 By [F4], $\mu_{\alpha,\beta}$ is a positive Borel measure, and step 1.2 makes its total mass finite. If $U\subseteq[-1,1]$ is nonempty and relatively open, choose a nondegenerate closed interval $[c,d]\subset U\cap(-1,1)$. The density is continuous and strictly positive on $[c,d]$, so [F5] gives a minimum $m>0$ there. By [F2] and monotonicity [F6], $\mu_{\alpha,\beta}(U)\ge\int_{[c,d]}w_{\alpha,\beta}\,d\lambda\ge m(d-c)>0$. Therefore every point is in the relative support. [A1, F2, F4, F5, F6, step 1.1, step 1.2, choose]

3.1 For every $k\in\mathbb N_0$, $|t|^k\le1$ on $[-1,1]$, so [F6] gives $\int|t|^k\,d\mu_{\alpha,\beta}\le\mu_{\alpha,\beta}([-1,1])<\infty$ by step 1.2. This proves all moment claims. [F6, step 1.2, algebra] ∎

