---
id: cor-taylor-lagrange-and-cauchy-remainders
kind: corollary
title: "The Lagrange and Cauchy forms of Taylor's remainder"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-taylor-schlomilch-roche-remainder, def-factorial-and-falling-factorial, def-integer-power, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "MathWorld, Schlömilch's remainder"
      url: "https://mathworld.wolfram.com/SchloemilchRemainder.html"
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
pipeline_run: null
---

## Statement

Under the hypotheses of [[thm-taylor-schlomilch-roche-remainder]], there are points $\xi_L,\xi_C$ between $a$ and $x$ such that
$$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi_L)}{\iota((n+1)!)}(x-a)^{n+1}$$
and
$$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi_C)}{\iota(n!)}(x-\xi_C)^n(x-a).$$

## Facts & Assumptions

**Given:** The hypotheses of the Schlömilch-Roche theorem.

[L1] For each natural $1\le p\le n+1$, the Schlömilch-Roche theorem gives a point $\xi$ strictly between $a$ and $x$ such that $$R_{n,a}f(x)=\frac{f^{(n+1)}(\xi)}{\iota(p)\iota(n!)}(x-\xi)^{n+1-p}(x-a)^p.$$ ([[thm-taylor-schlomilch-roche-remainder]]).

[L2] Factorials and natural powers obey [[def-factorial-and-falling-factorial]] and [[def-integer-power]], while the canonical embedding preserves products and positive naturals are nonzero ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** direct.

1.1 Set $p=n+1$ in [L1]. Then $(x-\xi)^0=1$ and $\iota(n+1)\iota(n!)=\iota((n+1)!)$, giving the Lagrange form.  [L1, L2, algebra]

1.2 Set $p=1$. Since $\iota(1)=1$, the formula becomes the Cauchy form.  [L1, L2, algebra]

2.1 These are the asserted special cases.  [step 1.1, step 1.2] ∎
