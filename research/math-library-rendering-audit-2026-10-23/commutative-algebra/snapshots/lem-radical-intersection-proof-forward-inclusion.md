---
id: lem-radical-intersection-proof-forward-inclusion
kind: lemma
title: "Primes containing an ideal contain its radical"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-radical-of-an-ideal, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $\mathfrak p$ be a prime ideal with $I\subseteq\mathfrak p$. Then $\sqrt{I}\subseteq\mathfrak p$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and a prime ideal $\mathfrak p$ containing $I$.

[L1] An element lies in $\sqrt{I}$ exactly when some positive power of it lies in $I$ ([[def-radical-of-an-ideal]]).

[L2] A prime ideal is proper and contains a factor whenever it contains a product ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in\sqrt{I}$. Choose $n\ge 1$ with $x^n\in I$. Since $I\subseteq\mathfrak p$, one has $x^n\in\mathfrak p$. [L1, given, choose]

2.1 Repeatedly applying primality from [L2] to the factorization $x^n=x\cdot x^{n-1}$ shows that $x\in\mathfrak p$: if $x\notin\mathfrak p$, then $x^{n-1}\in\mathfrak p$; repeating the same argument eventually forces $x\in\mathfrak p$ after all. [L2, step 1.1, algebra]

3.1 Every element of $\sqrt{I}$ lies in $\mathfrak p$, so $\sqrt{I}\subseteq\mathfrak p$. [step 2.1] ∎
