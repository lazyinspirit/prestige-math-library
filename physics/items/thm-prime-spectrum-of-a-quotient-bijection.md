---
id: thm-prime-spectrum-of-a-quotient-bijection
kind: theorem
title: "Prime ideals of a quotient ring are exactly the prime ideals containing the ideal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-primes-of-a-quotient-are-primes-over-the-kernel, thm-prime-spectrum-map-by-contraction]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $\pi:R\to R/I$ be the quotient map. Then contraction along $\pi$ induces an inclusion-preserving bijection $\operatorname{Spec}(R/I)\to V(I)$, sending $\mathfrak q$ to $\pi^{-1}(\mathfrak q)$. Its inverse sends a prime ideal $\mathfrak p\supseteq I$ to $\mathfrak p/I$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and the quotient map $\pi:R\to R/I$.

[L1] Primes of $R/I$ correspond to primes of $R$ containing $I$, and strict inclusions are preserved ([[lem-primes-of-a-quotient-are-primes-over-the-kernel]]).

[L2] Every quotient map induces a spectrum map by contraction ([[thm-prime-spectrum-map-by-contraction]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], contraction along $\pi$ gives a map $\operatorname{Spec}(R/I)\to\operatorname{Spec}(R)$. The quotient-prime correspondence [L1] shows that its values are precisely prime ideals containing $I$, so the map lands in $V(I)$. [L1, L2]

1.2 The same correspondence [L1] provides the inverse assignment $\mathfrak p\mapsto\mathfrak p/I$ on $V(I)$, and it also shows that extension and contraction undo one another and preserve inclusion. [L1]

2.1 Therefore contraction along $\pi$ identifies $\operatorname{Spec}(R/I)$ with $V(I)$. [step 1.1, step 1.2] ∎
