---
id: thm-uniqueness-of-dirichlet-series-coefficients
kind: theorem
title: "A Dirichlet series with absolute convergence on a right half-plane is determined there by its coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-series]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Jan-Hendrik Evertse, Analytic Number Theory, Theorem 2.1.6"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/ant20-2.pdf"
pipeline_run: null
---

## Statement

Let $f,g : \mathbb Z_{>0} \to \mathbb C$ be arithmetic functions. Suppose the
Dirichlet series

$$\sum_{n \ge 1} f(n)n^{-s},\qquad \sum_{n \ge 1} g(n)n^{-s}$$

both converge absolutely on some half-plane $\Re s > \sigma$, and agree there as
functions. Then $f(n)=g(n)$ for every $n$.

## Facts & Assumptions

**Given:** Absolute convergence and equality of the two Dirichlet series on
$\Re s > \sigma$.

[L1] A Dirichlet series is a sum $\sum a_n n^{-s}$
([[def-dirichlet-series]]).

## Proof

**Proof technique:** direct.

1.1 Subtract the two series. It is enough to prove that if $$\sum_{n \ge 1} h(n)n^{-s} = 0$$ for all $\Re s > \sigma$ and the series converges absolutely there, then $h=0$. Assume otherwise and let $m$ be the least index with $h(m)\ne0$. [L1, given, assume-contra]

2.1 For real $t > \sigma$, multiply the zero identity by $m^t$: $$0 = h(m) + \sum_{n>m} h(n)\left(\frac{m}{n}\right)^t.$$ Because the original series converges absolutely at one fixed real point $t_0>\sigma$, the tail is dominated by $$\sum_{n>m} |h(n)| \left(\frac{m}{n}\right)^{t_0},$$ and for each $n>m$ the factor $(m/n)^t$ tends to $0$ as $t\to+\infty$. Hence the tail tends to $0$, so letting $t\to+\infty$ yields $0=h(m)$, contradiction. [step 1.1, given, algebra]

3.1 Therefore no such least $m$ exists and all coefficients agree. [step 1.1, step 2.1, discharge-contradiction] ∎
