---
id: cor-prime-spectrum-insensitive-to-nilpotents
kind: corollary
title: "Passing to the reduced quotient does not change the prime spectrum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nilradical-and-reduced-ring, thm-prime-spectrum-of-a-quotient-bijection]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $N=\operatorname{Nil}(R)$, and let $\pi:R\to R/N$ be the quotient map. Then contraction along $\pi$ induces an inclusion-preserving bijection $\operatorname{Spec}(R/N)\to\operatorname{Spec}(R)$. If $J\trianglelefteq R/N$ and $I=\pi^{-1}(J)$, this bijection identifies $V(J)$ with $V(I)$.

## Facts & Assumptions

**Given:** A commutative ring $R$, its nilradical $N=\operatorname{Nil}(R)$, and the quotient map $\pi:R\to R/N$.

[L1] Prime ideals of a quotient correspond exactly to prime ideals of the original ring containing the kernel ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L2] Every element of $N$ is nilpotent ([[def-nilradical-and-reduced-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak p\in\operatorname{Spec}(R)$. If $x\in N$, then $x^m=0$ for some $m\ge 1$, so $x^m\in\mathfrak p$. Because $\mathfrak p$ is prime, this forces $x\in\mathfrak p$. Thus every prime ideal of $R$ contains $N$. [L2, given, algebra]

2.1 Applying [L1] to the quotient map $\pi$ and using step 1.1, one gets an inclusion-preserving bijection from $\operatorname{Spec}(R/N)$ onto all of $\operatorname{Spec}(R)$. Moreover, for an ideal $J\trianglelefteq R/N$ with pullback $I$, a prime $\mathfrak q$ of $R/N$ contains $J$ exactly when its contraction $\pi^{-1}(\mathfrak q)$ contains $I$. So the same bijection carries $V(J)$ onto $V(I)$. [L1, step 1.1]

3.1 Therefore passing from $R$ to its reduced quotient does not change the prime spectrum or the vanishing sets attached to quotient ideals. [step 2.1] ∎
