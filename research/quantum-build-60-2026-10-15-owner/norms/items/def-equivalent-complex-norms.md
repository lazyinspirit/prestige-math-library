---
id: def-equivalent-complex-norms
kind: definition
title: "Equivalent complex norms"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-norm-and-complex-normed-space, def-complete-ordered-field]
sources:
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1, Definition 1.1 and Example 1.2"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
---

## Definition

Let $M,N$ be complex norms on the same complex vector space $V$ ([[def-complex-norm-and-complex-normed-space]]). They are **equivalent** if there exist positive real constants $c,C$ such that $cM(v)\le N(v)\le CM(v)$ for every $v\in V$.

The order and the constants are those of the real complete ordered field ([[def-complete-ordered-field]]); the vector scalar field is still $\mathbb C$. No comparison of vectors or complex numbers by an order is intended.
