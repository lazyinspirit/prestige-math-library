---
id: ex-thomae-integral-function-differentiates-through-dense-discontinuities
kind: example
title: "Thomae's integrand is discontinuous at every rational, yet its integral function is identically zero and differentiable everywhere"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dirichlet-and-thomae-functions, thm-dirichlet-and-thomae-continuity-sets, thm-rationals-countable, lem-subset-of-countable, cor-countably-many-discontinuities-integrable, lem-q-and-irrationals-dense-r, def-darboux-sums, def-darboux-integral, def-the-integral-function, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Thomae's function"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
pipeline_run: null
---

## Example

Let $t$ be Thomae's function on $[0,1]$. Then $t$ is Riemann integrable and

$$\int_0^1t=0.$$

Consequently its integral function $T(x)=\int_0^x t$ is identically zero and is differentiable at every point. At every irrational $x$, $T'(x)=t(x)=0$; at every rational $x$, $t$ is discontinuous and $T'(x)=0\ne t(x)$. Thus the derivative of an integral function may exist at every point even though the integrand is discontinuous on a dense set.

## Facts & Assumptions

**Given:** Thomae's function $t$, equal to $1/q$ at a rational with least positive denominator $q$ and to $0$ at an irrational ([[def-dirichlet-and-thomae-functions]]).

[L1] Thomae's continuity points are exactly the irrationals ([[thm-dirichlet-and-thomae-continuity-sets]]).

[L2] The rationals are countable, and subsets of countable sets are countable ([[thm-rationals-countable]], [[lem-subset-of-countable]]).

[L3] A bounded function with at most countably many discontinuities is Riemann integrable ([[cor-countably-many-discontinuities-integrable]]).

[L4] Darboux upper sums bound the integral from above, and a nonnegative integrable function has nonnegative integral ([[def-darboux-sums]], [[def-darboux-integral]], [[thm-monotonicity-of-the-integral]]).

[L5] Integral functions and additivity give $T(y)-T(x)=\int_x^y t$ ([[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L6] The rationals and irrationals are both dense in the reals ([[lem-q-and-irrationals-dense-r]]).

## Verification

**Proof technique:** direct.

1.1 The function satisfies $0\le t\le1$, and by [L1] its discontinuity set is $\mathbb Q\cap[0,1]$, which is countable by [L2]. Hence [L3] makes $t$ integrable. [given, L1, L2, L3]

1.2 Fix $\varepsilon>0$ and choose an integer $N\ge1$ with $1/N<\varepsilon/2$. The rationals in $[0,1]$ with least denominator at most $N$ form a finite set, since each has a representation $p/q$ with $0\le p\le q\le N$. [given, choose, algebra]

2.1 Choose finitely many intervals around that finite set with total length below $\varepsilon/2$. A partition containing their endpoints has upper contribution below $\varepsilon/2$ on those intervals because $t\le1$, and below $1/N<\varepsilon/2$ on their complement because every positive value there has denominator greater than $N$. Thus it has upper sum below $\varepsilon$. [step 1.2, L4, construct]

3.1 Since $t\ge0$, [L4] and the arbitrarily small upper sums in step 2.1 force $\int_0^1t=0$. The same argument on every subinterval gives $\int_x^y t=0$. [step 2.1, L4]

4.1 By [L5], $T(y)-T(x)=0$ for all $x,y$, so $T$ is identically zero and $T'=0$ everywhere, with relative derivatives at $0$ and $1$. [step 3.1, L5]

5.1 By [L6], the rationals and irrationals are both dense. Combining the definition of $t$, [L1], and step 4.1 gives the claimed equality at irrationals and failure at rationals. [given, step 4.1, L1, L6] ∎
