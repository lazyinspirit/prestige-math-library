---
id: thm-finite-measure-l-r-includes-into-l-p-for-p-less-r
kind: theorem
title: "Finite-measure $L^r$ includes into $L^p$ for $p < r$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holder-inequality-for-integrals, def-conjugate-exponents, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound]
proof_strategy: "Write |f|^p as |f|^p times 1 and apply Holder with exponents r/p and r/(r - p). The finite total measure contributes the factor mu(X)^(1/p - 1/r)."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.2"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Chapter 17 overview"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space with $\mu(X)<\infty$.

1. If $1\le p<r<\infty$ and $f\in\mathcal L^r(\mu)$, then
   $f\in\mathcal L^p(\mu)$ and
   $$\|f\|_p\le\mu(X)^{1/p-1/r}\|f\|_r.$$
2. If $1\le p<\infty$ and $f\in L^\infty(\mu)$, then
   $f\in\mathcal L^p(\mu)$ and
   $$\|f\|_p\le\mu(X)^{1/p}\|f\|_\infty.$$

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$.

[L1] Holder's inequality for integrals is available
([[thm-holder-inequality-for-integrals]]).

[L2] Conjugate exponents are defined in [[def-conjugate-exponents]].

[L3] $\mathcal L^r(\mu)$ and $L^\infty(\mu)$ are the measurable-function spaces
of [[def-calligraphic-l-p-on-a-measure-space]] and
[[def-l-infinity-on-a-measure-space]].

[L4] If $h\in L^\infty(\mu)$, then $|h|\le\|h\|_\infty$ almost everywhere
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** Write $|f|^p$ as $|f|^p\cdot1$ and apply Holder with
exponents $r/p$ and $r/(r-p)$. The finite total measure contributes the factor
$\mu(X)^{1/p-1/r}$.

1.1 Suppose $1\le p<r<\infty$ and put [L1, L2, L3, given, algebra]
$$a:=\frac{r}{p},\qquad b:=\frac{r}{r-p}.$$
Then $a,b\in(1,\infty)$ and $1/a+1/b=1$, so [L2] makes them conjugate. Apply
[L1] to the functions $|f|^p$ and $1$:
$$\int |f|^p\,d\mu\le\left(\int |f|^{pa}\,d\mu\right)^{1/a}\left(\int 1^b\,d\mu\right)^{1/b}=\left(\int |f|^r\,d\mu\right)^{p/r}\mu(X)^{1-p/r}.$$
Taking $p$-th roots gives the claimed bound.

1.2 If $f\in L^\infty(\mu)$, then [L3, L4, given, algebra]
$$\int |f|^p\,d\mu\le\|f\|_\infty^p\mu(X).$$
Indeed, $|f|^p\le\|f\|_\infty^p$ almost everywhere by [L4]. Thus
$f\in\mathcal L^p(\mu)$ and $\|f\|_p\le\mu(X)^{1/p}\|f\|_\infty$.

2.1 Steps 1.1 and 1.2 prove the finite-measure inclusion laws. [step 1.1, step 1.2] ∎
