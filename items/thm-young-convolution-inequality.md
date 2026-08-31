---
id: thm-young-convolution-inequality
kind: theorem
title: "Young's convolution inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, thm-minkowski-integral-inequality, thm-holder-inequality-for-integrals, thm-generalized-holder-inequality-for-products, def-conjugate-exponents]
landmark: true
proof_strategy: "Treat the $r=\\infty$ endpoint with Holder directly and the finite-$r$ case by combining the $L^1$ convolution bound, the generalized Holder product estimate, and Minkowski's integral inequality on a normalized kernel. The exponents are kept in the exact relation $1/r = 1/p + 1/q - 1$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Let $1 \le p,q,r \le \infty$ satisfy

$$
\frac1r = \frac1p + \frac1q - 1.
$$

If $f \in L^p(\mathbb{R}^n)$ and $g \in L^q(\mathbb{R}^n)$, then the
convolution $f*g$ is defined almost everywhere and satisfies

$$
\|f*g\|_r \le \|f\|_p\|g\|_q.
$$

## Facts & Assumptions

**Given:** Exponents $p,q,r$ as displayed and functions $f \in L^p$, $g \in L^q$.

[L1] The $L^1$ convolution bound is available ([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]]).

[L2] Holder's inequality and generalized Holder are available ([[thm-holder-inequality-for-integrals]], [[thm-generalized-holder-inequality-for-products]], [[def-conjugate-exponents]]).

[L3] Minkowski's integral inequality is available ([[thm-minkowski-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 If $r=\infty$, then $1/p+1/q=1$, so $q$ is conjugate to $p$. For every $x$, [L2, given, algebra] [L2] gives $$ |f*g(x)| \le \int |f(x-y)||g(y)|\,dy \le \|f\|_p\|g\|_q. $$ Hence $\|f*g\|_\infty \le \|f\|_p\|g\|_q$. [L2, given, algebra]

1.2 Assume $r<\infty$. If $r=p$, interpret the factor [L2, given, algebra] $|f(x-y)|^{1-p/r}$ as $1$ and the exponent $pr/(r-p)$ as $\infty$; likewise, if $r=q$, interpret $|g(y)|^{1-q/r}$ as $1$ and $qr/(r-q)$ as $\infty$. With this endpoint convention, generalized Holder from [L2] applies to the three factors $$ \bigl(|f(x-y)|^p|g(y)|^q\bigr)^{1/r},\qquad |f(x-y)|^{1-p/r},\qquad |g(y)|^{1-q/r} $$ with exponents $$ r,\qquad \frac{pr}{r-p},\qquad \frac{qr}{r-q}, $$ because their reciprocals sum to $1/r + (1/p-1/r) + (1/q-1/r) = 1$. This yields $$ |f*g(x)|^r \le \|f\|_p^{r-p}\|g\|_q^{r-q} \int |f(x-y)|^p|g(y)|^q\,dy. $$ [L2, given, algebra]

2.1 Integrate the inequality from step 1.2 in $x$. Tonelli on the nonnegative [L1, L3, step 1.1, step 1.2, algebra] right-hand side gives $$ \|f*g\|_r^r \le \|f\|_p^{r-p}\|g\|_q^{r-q} \iint |f(x-y)|^p|g(y)|^q\,dy\,dx = \|f\|_p^r\|g\|_q^r. $$ Taking $r$th roots proves the finite-$r$ case. Together with step 1.1, this is Young's inequality. [L1, L3, step 1.1, step 1.2, algebra] ∎
