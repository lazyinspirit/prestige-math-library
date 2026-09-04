---
id: thm-dirichlet-series-absolute-half-plane-holomorphy
kind: theorem
title: "Absolute convergence at one point forces absolute and locally uniform convergence on closed half-planes to the right"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-series, thm-weierstrass-m-test-for-complex-function-series, thm-weierstrass-convergence-holomorphic-functions]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Lemma 2.2"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.3"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Statement

If a Dirichlet series $\sum_{n \ge 1} a_n n^{-s}$ converges absolutely at a
point $s_0$, then for every $\varepsilon > 0$ it converges absolutely and
locally uniformly on the closed half-plane $\Re s \ge \Re s_0+\varepsilon$.
Moreover its derivative series

$$\sum_{n \ge 1} -a_n (\log n) n^{-s}$$

also converges locally uniformly there, so termwise differentiation is valid on
the open half-plane to the right of $s_0$.

## Facts & Assumptions

**Given:** A Dirichlet series $\sum_{n \ge 1} a_n n^{-s}$ that converges
absolutely at $s_0$, and a fixed $\varepsilon > 0$.

[L1] The Weierstrass M-test gives absolute pointwise and uniform convergence
from a convergent majorant series
([[thm-weierstrass-m-test-for-complex-function-series]]).

[L2] Locally uniform convergence of holomorphic functions controls the limit and
its derivatives ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Write $\sigma_0 := \Re s_0$. Since $\sum |a_n|n^{-\sigma_0}$ converges, for every $s$ with $\Re s \ge \sigma_0+\varepsilon$ one has $$|a_n n^{-s}| \le |a_n| n^{-\sigma_0-\varepsilon} \le |a_n| n^{-\sigma_0}.$$ Thus [L1] gives absolute and locally uniform convergence of the original series on the stated closed half-plane. [L1, given, algebra]

2.1 For large $n$ one has $\log n \le n^{\varepsilon/2}$, so on the same region $$|a_n (\log n)n^{-s}| \le |a_n| n^{-\sigma_0-\varepsilon/2}.$$ The majorant series on the right converges because it is termwise bounded by $\sum |a_n|n^{-\sigma_0}$. Therefore [L1] also gives local uniform convergence of the derivative series. [L1, step 1.1, algebra]

3.1 The partial sums are holomorphic, the derivative series converges locally uniformly, and the original series converges at every point of the half-plane from step 1.1. Hence [L2] yields termwise differentiation there. [L2, step 1.1, step 2.1] ∎
