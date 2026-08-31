---
id: thm-generalized-holder-inequality-for-products
kind: theorem
title: "Generalized Holder inequality puts products into $L^r$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holder-inequality-for-integrals, def-conjugate-exponents, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound]
proof_strategy: "Raise |fg| to the r-th power and apply Holder to |f|^r and |g|^r with conjugate exponents p/r and q/r."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
    - title: "John K. Hunter, Measure Theory, Section 7.2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $1\le p,q,r\le\infty$ satisfy

$$\frac1r=\frac1p+\frac1q,$$

with the convention $1/\infty=0$. If $f$ and $g$ lie in the corresponding
measurable-function spaces ($\mathcal L^p(\mu)$ or $L^\infty(\mu)$ according to
whether the exponent is finite or infinite), then $fg$ lies in the
corresponding space for $r$ and

$$\|fg\|_r\le\|f\|_p\|g\|_q.$$

## Facts & Assumptions

**Given:** Exponents $p,q,r$ with $1/r=1/p+1/q$ and measurable functions $f,g$
in the spaces named in the Statement.

[L1] Holder's inequality for integrals, including the endpoint cases, is
available ([[thm-holder-inequality-for-integrals]]).

[L2] Conjugate exponents include the endpoint convention $1/\infty=0$
([[def-conjugate-exponents]]).

[L3] For $0<s<\infty$, $h\in\mathcal L^s(\mu)$ means $\int |h|^s\,d\mu<\infty$,
and $L^\infty(\mu)$ means finite essential supremum
([[def-calligraphic-l-p-on-a-measure-space]],
[[def-l-infinity-on-a-measure-space]]).

[L4] If $h\in L^\infty(\mu)$, then $|h|\le\|h\|_\infty$ almost everywhere
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

## Proof

**Proof technique:** Raise $|fg|$ to the $r$-th power and apply Holder to
$|f|^r$ and $|g|^r$ with conjugate exponents $p/r$ and $q/r$.

1.1 If $r=\infty$, then $1/p=1/q=0$, so $p=q=\infty$ by [L2]. Hence [L2, L3, L4, given]
$$|fg|\le\|f\|_\infty\|g\|_\infty$$
almost everywhere, and taking essential suprema gives
$$\|fg\|_\infty\le\|f\|_\infty\|g\|_\infty.$$

1.2 If $p=\infty$ and $r<\infty$, then $q=r$. The pointwise bound and the definition of $\|g\|_r$ give [L2, L3, L4, given]
$$\|fg\|_r^r\le\|f\|_\infty^r\|g\|_r^r.$$
Indeed, [L4] gives $|f|\le\|f\|_\infty$ almost everywhere, so
$|fg|^r\le\|f\|_\infty^r|g|^r$ almost everywhere. Taking $r$-th roots yields
the claim. The case $q=\infty$ is symmetric.

1.3 Assume now that $r<\infty$ and $p,q<\infty$. Then [L1, L2, L3, given, algebra]
$$1=\frac rp+\frac rq,$$
so the exponents $p/r$ and $q/r$ are conjugate. Because
$|f|^r\in\mathcal L^{p/r}(\mu)$ and $|g|^r\in\mathcal L^{q/r}(\mu)$, [L1]
applied to these two functions gives
$$\int |fg|^r\,d\mu\le\left(\int |f|^p\,d\mu\right)^{r/p}\left(\int |g|^q\,d\mu\right)^{r/q}=\|f\|_p^r\|g\|_q^r.$$

2.1 Step 1.1 covers $r=\infty$, step 1.2 covers the one-infinite endpoint cases, and step 1.3 covers the fully finite case. [step 1.1, step 1.2, step 1.3]
In each case $\|fg\|_r\le\|f\|_p\|g\|_q$, so $fg$ lies in the stated
$r$-space. ∎
