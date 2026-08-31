---
id: thm-holder-inequality-for-integrals
kind: theorem
title: "Holder's inequality for integrals, including the endpoint cases"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-exponents, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-young-inequality-real-exponents, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-monotone-convergence-for-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: "For 1 < p < infinity, normalize the nonzero norms and apply the published Young inequality pointwise before integrating. Treat the endpoint pairs (1, infinity) and (infinity, 1) separately from the essential-bound definition."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Holder's Inequality"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Section 7.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space, let $p,q\in[1,\infty]$ be
conjugate exponents, and let $f,g$ be measurable real-valued functions.

1. If $1\le p<\infty$ and $q<\infty$ with $f\in\mathcal L^p(\mu)$ and
   $g\in\mathcal L^q(\mu)$, then
   $$\int |fg|\,d\mu\le\|f\|_p\|g\|_q.$$
2. If $p=1$ and $q=\infty$ with $f\in\mathcal L^1(\mu)$ and
   $g\in L^\infty(\mu)$, then
   $$\int |fg|\,d\mu\le\|f\|_1\|g\|_\infty.$$
3. If $p=\infty$ and $q=1$ with $f\in L^\infty(\mu)$ and
   $g\in\mathcal L^1(\mu)$, then
   $$\int |fg|\,d\mu\le\|f\|_\infty\|g\|_1.$$

In every case the right-hand side is finite, so $fg$ is integrable.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, conjugate exponents $p,q\in[1,\infty]$, and measurable real-valued functions $f,g$ in the spaces named in the relevant clause of the Statement.

[L1] Conjugate exponents are defined in [[def-conjugate-exponents]].

[L2] For $0<r<\infty$, membership in $\mathcal L^r(\mu)$ means $\int |h|^r\,d\mu<\infty$, while $L^\infty(\mu)$ means finite essential supremum ([[def-calligraphic-l-p-on-a-measure-space]], [[def-l-infinity-on-a-measure-space]]).

[L3] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L4] If $h\in L^\infty(\mu)$, then $|h|\le\|h\|_\infty$ almost everywhere ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L5] Young's inequality says $uv\le u^p/p+v^q/q$ for $u,v\ge0$ when $1<p,q<\infty$ are conjugate ([[thm-young-inequality-real-exponents]]).

[L6] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L7] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** For $1 < p < infinity$, normalize the nonzero norms and apply the published Young inequality pointwise before integrating. Treat the endpoint pairs $(1,\infty)$ and $(\infty,1)$ separately from the essential-bound definition.

1.1 Assume first $1<p,q<\infty$, and put $A:=\|f\|_p$ and $B:=\|g\|_q$. If $A=0$ or $B=0$, then the corresponding power integral is $0$, so the corresponding function vanishes almost everywhere and $\int|fg|\,d\mu=0$. Thus only the case $A,B>0$ remains. [L2, L3, given]

1.2 For the endpoint pair $(p,q)=(1,\infty)$, let $M:=\|g\|_\infty$. Then [L2, L4, L6, given]
$$\int |fg|\,d\mu\le M\int |f|\,d\mu=\|g\|_\infty\|f\|_1.$$
Indeed, [L4] gives a measurable null set $N$ with $|g|\le M$ on $X\setminus N$, so $|fg|\le M|f|$ almost everywhere.

2.1 In the remaining strict-exponent case, Young's inequality applied pointwise to $u=|f|/A$ and $v=|g|/B$ gives [step 1.1, L1, L2, L5, L6, L7, algebra]
$$\frac{|f||g|}{AB}\le\frac{|f|^p}{pA^p}+\frac{|g|^q}{qB^q}.$$
Integrating and using additivity, monotonicity, homogeneity, and the definitions of $A$ and $B$ yields
$$\int |fg|\,d\mu\le\frac{B}{pA^{p-1}}\int |f|^p\,d\mu+\frac{A}{qB^{q-1}}\int |g|^q\,d\mu=\frac{AB}{p}+\frac{AB}{q}=AB.$$

2.2 The case $(p,q)=(\infty,1)$ is identical after exchanging $f$ and $g$. [step 1.2, given]
$$\int |fg|\,d\mu\le\|f\|_\infty\|g\|_1.$$

3.1 Step 2.1 proves the strict-exponent case, and steps 1.2 and 2.2 prove the two endpoint cases. In every case the right-hand side is finite by [L2], so $fg$ is integrable. [step 2.1, step 1.2, step 2.2, L2] ∎
