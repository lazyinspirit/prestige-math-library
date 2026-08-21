---
id: thm-entire-polynomial-growth-is-polynomial
kind: theorem
title: "An entire function of polynomial growth is a polynomial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-taylor-expansion-holomorphic-function, cor-cauchy-estimates-taylor-coefficients, lem-integer-part, def-real-power, thm-real-power-laws, def-natural-logarithm, thm-exponential-is-strictly-increasing, thm-exponential-limits-and-range]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.3"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Let $f:\mathbb C\to\mathbb C$ be entire. Suppose there are real numbers $C,N\ge0$ such that

$$|f(z)|\le C(1+|z|)^N\qquad(z\in\mathbb C),$$

where real powers have the convention of [[def-real-power]]. Put $m=\lfloor N\rfloor$. Then there are complex coefficients $c_0,\ldots,c_m$ such that

$$f(z)=\sum_{k=0}^{m}c_kz^k\qquad(z\in\mathbb C).$$

Thus $f$ is a polynomial, and if it is nonzero its degree is at most $\lfloor N\rfloor$.

## Facts & Assumptions

**Given:** An entire function $f$ and real constants $C,N\ge0$ satisfying the displayed growth bound.

[L1] If $f$ is holomorphic on $D(a,R_0)$, $0<r<R_0$, and $|f(\zeta)|\le M$ on $|\zeta-a|=r$, then the $n$th Taylor coefficient $c_n$ satisfies $|c_n|\le M/r^n$ ([[cor-cauchy-estimates-taylor-coefficients]]).

[L2] For $a>0$ and real $x$, the real power is $a^x=\exp(x\log a)$; zero-base powers are defined only for positive exponents ([[def-real-power]]).

[L3] Positive-base real powers satisfy $a^{r+s}=a^ra^s$ and $(ab)^r=a^rb^r$ ([[thm-real-power-laws]]).

[L4] The natural logarithm is the inverse of the exponential on the positive reals ([[def-natural-logarithm]]).

[L5] The exponential tends to $0$ at $-\infty$ and to $+\infty$ at $+\infty$ ([[thm-exponential-limits-and-range]]).

[L6] Every entire function equals its Taylor series at the origin on the whole complex plane ([[thm-taylor-expansion-holomorphic-function]]).

[L7] For every real $x$ there is a unique integer $\lfloor x\rfloor$ satisfying $\lfloor x\rfloor\le x<\lfloor x\rfloor+1$ ([[lem-integer-part]]).

[L8] The exponential function is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).

## Proof

**Proof technique:** direct.

1.1 Let $f(z)=\sum_{n\ge0}c_nz^n$ be its Taylor series at $0$, fix a natural $n>N$, and take any real $R\ge1$; the growth hypothesis bounds $|f|$ on $|\zeta|=R$ by $C(1+R)^N$, so [L1], applied with outer radius $R+1$, gives $|c_n|\le C(1+R)^N/R^n$. [given, L1]

2.1 Since $R\ge1$ gives $1+R\le2R$, [L2], [L3], [L4], and [L8] give $|c_n|\le C2^NR^{N-n}=C2^N\exp(-(n-N)\log R)$; by [L4], [L5], and [L8], $\log R\to+\infty$ as $R\to+\infty$, so the right side tends to $0$, forcing $c_n=0$. [step 1.1, L2, L3, L4, L5, L8, algebra]

3.1 Step 2.1 applies to every natural $n>N$, and [L6] represents $f$ globally by its Taylor series, so all terms with index exceeding $N$ vanish and the series truncates. [step 2.1, L6]

4.1 Put $m=\lfloor N\rfloor$. By [L7], $m\le N<m+1$, so every natural $n\ge m+1$ satisfies $n>N$ and has $c_n=0$ by step 3.1; because $N\ge0$, the integer $m$ is a natural number, and the displayed finite polynomial has no term above $m$. [step 3.1, L7]

5.1 If $C=0$, the hypothesis gives $f=0$ directly; if $N=0$, step 4.1 gives $m=0$ and $f$ is constant. In every case step 4.1 proves the stated polynomial representation, with the degree qualification interpreted only for a nonzero polynomial. [step 3.1, step 4.1, algebra] ∎
