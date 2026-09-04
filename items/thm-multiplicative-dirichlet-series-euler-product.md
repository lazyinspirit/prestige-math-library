---
id: thm-multiplicative-dirichlet-series-euler-product
kind: theorem
title: "A multiplicative Dirichlet series factors as an Euler product on its absolute half-plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dirichlet-series-multiplication-convolution, def-multiplicative-arithmetic-function, thm-fundamental-theorem-of-arithmetic]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.6"
      url: "https://kskedlaya.org/ant/part-1-3.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Theorem 3.2"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Statement

Let $f$ be a multiplicative arithmetic function. If

$$\sum_{n \ge 1} |f(n)| n^{-\sigma} < \infty,$$

then for every $s$ with $\Re s \ge \sigma$,

$$\sum_{n \ge 1} f(n)n^{-s} = \prod_p \sum_{k \ge 0} f(p^k)p^{-ks},$$

where the infinite product is the limit of the finite prime products.

## Facts & Assumptions

**Given:** A multiplicative arithmetic function $f$ and a complex number $s$
with $\Re s \ge \sigma$.

[L1] Multiplicative functions satisfy $f(mn)=f(m)f(n)$ for coprime $m,n$
([[def-multiplicative-arithmetic-function]]).

[L2] Every positive integer has a unique prime factorization
([[thm-fundamental-theorem-of-arithmetic]]).

[L3] Products of absolutely convergent Dirichlet series multiply by convolution
([[thm-dirichlet-series-multiplication-convolution]]).

## Proof

**Proof technique:** direct.

1.1 For a finite set $P$ of primes, expand $$\prod_{p \in P}\sum_{k \ge 0} f(p^k)p^{-ks}.$$ Using multiplicativity [L1] and unique factorization [L2], this is exactly $$\sum_{\substack{n \ge 1\\\text{all prime factors of }n\text{ lie in }P}} f(n)n^{-s}.$$ [L1, L2, L3, given, algebra]

2.1 As $P$ increases, these partial Euler products exhaust the original Dirichlet series. Because $\Re s \ge \sigma$ and the series $\sum |f(n)|n^{-\sigma}$ converges, the omitted tail tends to $0$ absolutely. Hence the finite prime products converge to $\sum_{n \ge 1} f(n)n^{-s}$. [step 1.1, given, algebra] ∎
