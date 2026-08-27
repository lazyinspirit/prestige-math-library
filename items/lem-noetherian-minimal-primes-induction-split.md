---
id: lem-noetherian-minimal-primes-induction-split
kind: lemma
title: "The Noetherian minimal-prime induction split"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-and-product-of-ideals, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "The Stacks Project, Section 10.31: Noetherian rings"
      url: "https://stacks.math.columbia.edu/tag/00FM"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $I\trianglelefteq R$ be a proper radical ideal that is not prime. Then there exist elements $x,y\in R\setminus I$ with $xy\in I$. For any such choice of $x$ and $y$, every prime ideal minimal over $I$ is minimal over $I+(x)$ or minimal over $I+(y)$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a proper radical ideal $I\trianglelefteq R$ that is not prime.

[L1] A prime ideal is proper and contains one factor whenever it contains a product ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Because $I$ is not prime, [L1] gives elements $x,y\in R$ with $xy\in I$ but $x\notin I$ and $y\notin I$. [L1, given, choose]

2.1 Let $\mathfrak p$ be a prime ideal minimal over $I$. Since $xy\in I\subseteq\mathfrak p$ and $\mathfrak p$ is prime, [L1] gives $x\in\mathfrak p$ or $y\in\mathfrak p$. If $x\in\mathfrak p$ and $\mathfrak q$ is a prime ideal with $I+(x)\subseteq\mathfrak q\subseteq\mathfrak p$, then $I\subseteq\mathfrak q\subseteq\mathfrak p$, so minimality of $\mathfrak p$ over $I$ forces $\mathfrak q=\mathfrak p$. Thus $\mathfrak p$ is minimal over $I+(x)$. The same argument with $y$ in place of $x$ shows that if $y\in\mathfrak p$, then $\mathfrak p$ is minimal over $I+(y)$. [L1, step 1.1, given]

3.1 Therefore every prime ideal minimal over $I$ appears on one side of the split $I+(x)$ or $I+(y)$. [step 2.1] ∎
