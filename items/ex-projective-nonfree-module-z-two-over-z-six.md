---
id: ex-projective-nonfree-module-z-two-over-z-six
kind: example
title: "$\\mathbb Z/2\\mathbb Z$ is projective but not free over $\\mathbb Z/6\\mathbb Z$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-projective-module-characterizations, thm-free-modules-are-projective-with-choice-boundary, def-free-module-on-a-set-and-standard-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Example

Let $R=\mathbb Z/6\mathbb Z$. The ideal $3R=\{0,3\}$ is isomorphic to $\mathbb Z/2\mathbb Z$ as an $R$-module. It is projective but not free.

## Facts & Assumptions

**Given:** The ring $R=\mathbb Z/6\mathbb Z$ and its ideal $P=3R$.

[L1] Under AC, being a direct summand of a free module is equivalent to projectivity ([[thm-projective-module-characterizations]]).

[L2] A free module with a finite basis is projective using only finite choice, which is provable in ZF ([[thm-free-modules-are-projective-with-choice-boundary]]).

[F1] A free module is a direct sum of copies of the regular module, with one standard vector per basis element ([[def-free-module-on-a-set-and-standard-basis]]).

## Verification

**Proof technique:** direct.

1.1 The element $3$ is idempotent modulo $6$, and $1-3=4$ is also idempotent, with $3\cdot4=0$ and $3+4=1$. Hence $R=3R\oplus4R$. [given, algebra]

1.2 The module $P$ has two elements. A free module on the empty set has one element; a free module on a nonempty finite set of size $k$ has $6^k$ elements; and a free module on an infinite set has infinitely many distinct standard basis vectors. None has two elements. [F1, algebra]

2.1 Thus $P=3R$ is a direct summand of the rank-one free module $R$, which is projective without AC by [L2]. Precomposing a map from $P$ with the projection $R\to P$, lifting from $R$, and restricting the lift to $P$ proves directly that $P$ is projective. The map $\mathbb Z/2\mathbb Z\to P$ sending $1$ to $3$ is an $R$-module isomorphism. [step 1.1, L1, L2, algebra]

3.1 Hence $P\cong\mathbb Z/2\mathbb Z$ is projective and nonfree over $\mathbb Z/6\mathbb Z$. [step 2.1, step 1.2] ∎
