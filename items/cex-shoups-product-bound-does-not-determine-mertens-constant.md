---
id: cex-shoups-product-bound-does-not-determine-mertens-constant
kind: counterexample
title: "A Theta(1/log x) product bound does not determine the Mertens constant"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-second-mertens-theorem-for-primes,
       thm-third-mertens-theorem-for-primes]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
    - title: "Terence Tao, Mertens' theorems"
      url: "https://terrytao.wordpress.com/2013/12/11/mertens-theorems/"
pipeline_run: null
---

## Statement refuted

Knowing only that a positive function $F(x)$ satisfies

$$
F(x)=\Theta(1/\log x)
$$

determines the exact leading constant in front of $1/\log x$.

## Facts & Assumptions

**Given:** The weaker $\Theta(1/\log x)$ conclusion of Shoup's product bound and
the exact constant statement of [[thm-third-mertens-theorem-for-primes]].

[L1] The second and third Mertens theorems distinguish a bounded-error
reciprocal-prime asymptotic from the exact factor $e^{-\gamma}$ in the product
formula ([[thm-second-mertens-theorem-for-primes]],
[[thm-third-mertens-theorem-for-primes]]).

## Counterexample

**Proof technique:** direct.

1.1 The two positive functions $ F_1(x):=\frac1{\log x}, \qquad F_2(x):=\frac2{\log x} $ both satisfy $F_j(x)=\Theta(1/\log x)$ as $x\to\infty$. [given, construct]

2.1 Their leading constants are different: one is $1$ and the other is $2$. So a mere $\Theta(1/\log x)$ estimate leaves the multiplicative constant free. What [[thm-third-mertens-theorem-for-primes]] adds over that weaker statement is exactly the identification of the constant as $e^{-\gamma}$. [L1, step 1.1, algebra] ∎
