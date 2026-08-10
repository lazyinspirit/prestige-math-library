---
id: cor-improper-integral-test-for-series
kind: corollary
title: "Integral test as an equivalence with an improper integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity, thm-integral-test-for-series,
       cor-monotone-converges-iff-bounded,
       lem-improper-integral-splitting-and-tail-invariance,
       thm-of-archimedean, def-canonical-natural, def-series,
       lem-series-tail-invariance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 4.3.1"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $f:[1,\infty)\to[0,\infty)$ be nonincreasing and Riemann integrable on every compact interval. Then
$$\sum_{n=1}^{\infty}f(n)\quad\text{converges if and only if}\quad\int_1^\infty f(x)\,dx\quad\text{converges}.$$

Changing finitely many initial terms or moving the finite lower integration endpoint does not affect this equivalence.

## Facts & Assumptions

**Given:** A nonnegative nonincreasing locally integrable $f$.

[L1] The proper integral test bounds the integral at integer truncations between neighboring partial sums ([[thm-integral-test-for-series]]).

[L2] Nonnegative partial sums and integer truncation integrals are nondecreasing, hence converge exactly when bounded ([[cor-monotone-converges-iff-bounded]]).

[L3] Every real truncation is bracketed between two integer truncations ([[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the series partial sums are bounded exactly when the values $\int_1^Nf$ at positive integer $N$ are bounded. By [L2], this is exactly convergence of the corresponding two monotone sequences. [L1, L2]

2.1 Suppose the integer truncations converge to $I$. Given a sufficiently large integer $N$ and any real $R\ge N$, [L3] supplies an integer $M>R$. Nonnegativity gives $\int_1^Nf\le\int_1^Rf\le\int_1^Mf$, and both integer bounds tend to $I$; hence the full real-parameter limit is $I$. The reverse implication is immediate by restriction to integer truncations. Tail invariance handles finite changes. [L3] ∎
