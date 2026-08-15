---
id: cor-complex-power-series-sums-have-derivatives-of-all-orders
kind: corollary
title: "A complex power-series sum has complex derivatives of every order, obtained by repeated termwise differentiation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-termwise-differentiation-of-complex-power-series, lem-derived-complex-power-series-has-the-same-radius, def-factorial-and-falling-factorial]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

If $f(z)=\sum_{n\ge0}c_n(z-a)^n$ has radius $R$, then for every $k\in\mathbb N$ and $|z-a|<R$,
$$f^{(k)}(z)=\sum_{n\ge k}\frac{n!}{(n-k)!}c_n(z-a)^{n-k}.$$
Every derived series has radius $R$.

## Facts & Assumptions

**Given:** A complex power series $f$ of radius $R$.

[L1] A complex power series may be differentiated term by term inside its radius ([[thm-termwise-differentiation-of-complex-power-series]]).

[L2] Every successive formal derivative has the same radius as the original series ([[lem-derived-complex-power-series-has-the-same-radius]]).

[L3] Falling factorials satisfy $n^{\underline{k}}=n!/(n-k)!$ when $k\le n$ ([[def-factorial-and-falling-factorial]]).

## Proof

**Proof technique:** induction.

1.1 For $k=0$, the displayed formula is the original series because $n!/(n-0)!=1$. [base, L3]

1.2 Assume the formula holds for $k$. By [L2] its series has radius $R$, so [L1] differentiates it termwise and changes the coefficient $n!/(n-k)!$ into $n!/(n-k-1)!$ for $n\ge k+1$. [ih, L1, L2, L3]

2.1 Thus the formula holds for $k+1$, and induction gives it for every $k$. The cases $k>n$ contribute no term and $k=0$ was the base case. [step 1.1, step 1.2, discharge-induction] ∎
