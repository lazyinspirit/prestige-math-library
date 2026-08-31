---
id: thm-minkowski-inequality-for-integrals
kind: theorem
title: "Minkowski's inequality for integrals, including $p = \\infty$"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holder-inequality-for-integrals, def-calligraphic-l-p-on-a-measure-space, def-l-infinity-on-a-measure-space, prop-essential-supremum-is-attained-as-the-least-essential-bound, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-monotone-convergence-for-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, thm-holder-finite-real-exponents]
proof_strategy: "For 1 < p < infinity, first use the two-term finite Holder inequality to show |f + g|^p is integrable, then apply the standard Holder step to |f + g| |f + g|^(p - 1). The cases p = 1 and p = infinity are handled directly from subadditivity of absolute value and the essential-supremum bound."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Minkowski's Inequality"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 7.5"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space.

1. If $1\le p<\infty$ and $f,g\in\mathcal L^p(\mu)$, then
   $$\|f+g\|_p\le\|f\|_p+\|g\|_p.$$
2. If $f,g\in L^\infty(\mu)$, then
   $$\|f+g\|_\infty\le\|f\|_\infty+\|g\|_\infty.$$

## Facts & Assumptions

**Given:** A measure space and functions $f,g$ in the spaces named in the relevant clause of the Statement.

[L1] Holder's inequality for integrals is available ([[thm-holder-inequality-for-integrals]]).

[L2] Membership in $\mathcal L^p(\mu)$ and $L^\infty(\mu)$ is defined in [[def-calligraphic-l-p-on-a-measure-space]] and [[def-l-infinity-on-a-measure-space]].

[L3] If $h\in L^\infty(\mu)$, then $|h|\le\|h\|_\infty$ almost everywhere ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L4] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L5] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L6] Holder's inequality for finite sums gives, for nonnegative reals $a,b$, $$a+b\le 2^{1/q}(a^p+b^p)^{1/p}$$ when $q=p/(p-1)$ ([[thm-holder-finite-real-exponents]]).

## Proof

**Proof technique:** For $1 < p < infinity$, first use the two-term finite Holder inequality to show $|f + g|^p$ is integrable, then apply the standard Holder step to $|f + g| |f + g|^{p - 1}$. The cases $p = 1$ and $p = \infty$ are handled directly from subadditivity of absolute value and the essential-supremum bound.

1.1 If $p=1$, then $|f+g|\le|f|+|g|$ pointwise, so [L4, L5, given]
$$\|f+g\|_1=\int|f+g|\,d\mu\le\int|f|\,d\mu+\int|g|\,d\mu=\|f\|_1+\|g\|_1.$$

1.2 Assume $1<p<\infty$ and let $q:=p/(p-1)$. Then [L1, L2, L4, L5, L6, given, algebra]
$$\int |f+g|^p\,d\mu\le 2^{p-1}\left(\int |f|^p\,d\mu+\int |g|^p\,d\mu\right)<\infty.$$
Indeed, [L6] applied pointwise to the two-term families $(|f(x)|,|g(x)|)$ and $(1,1)$ gives
$$|f(x)|+|g(x)|\le 2^{1/q}\bigl(|f(x)|^p+|g(x)|^p\bigr)^{1/p},$$
so
$$|f+g|^p\le(|f|+|g|)^p\le 2^{p-1}(|f|^p+|g|^p)$$
pointwise. Thus $f+g\in\mathcal L^p(\mu)$. Put $C:=\|f+g\|_p$. If $C=0$, the claim is immediate. Otherwise
$$|f+g|^p=|f+g|\,|f+g|^{p-1}\le |f|\,|f+g|^{p-1}+|g|\,|f+g|^{p-1}.$$
Because $(p-1)q=p$, the function $|f+g|^{p-1}$ lies in $\mathcal L^q(\mu)$ and has $q$-norm $C^{p-1}$. Integrating and applying [L1] with conjugate exponents $p$ and $q$ to each term yields
$$C^p\le\|f\|_p\left(\int |f+g|^{(p-1)q}\,d\mu\right)^{1/q}+\|g\|_p\left(\int |f+g|^{(p-1)q}\,d\mu\right)^{1/q}.$$
Since $(p-1)q=p$, this becomes
$$C^p\le(\|f\|_p+\|g\|_p)C^{p-1}.$$
If $C>0$, divide by $C^{p-1}$ to obtain the claim.

1.3 For $p=\infty$, let $M:=\|f\|_\infty$ and $N:=\|g\|_\infty$. Then [L2, L3, given]
$$|f+g|\le |f|+|g|\le M+N.$$
Indeed, outside the union of the two null exceptional sets supplied by [L3], one has $|f|\le M$ and $|g|\le N$. Therefore $\|f+g\|_\infty\le M+N$.

2.1 Steps 1.1, 1.2, and 1.3 prove the $p=1$, $1<p<\infty$, and $p=\infty$ cases. [step 1.1, step 1.2, step 1.3] ∎
