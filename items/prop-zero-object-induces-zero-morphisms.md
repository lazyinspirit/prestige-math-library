---
id: prop-zero-object-induces-zero-morphisms
kind: proposition
title: "A zero object supplies a unique compatible system of zero morphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-initial-terminal-and-zero-object, def-category-with-zero-morphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Haru Park, Category Theory and Homological Algebra, section 2.2"
      url: "https://yglena.github.io/files/CategoryTheory210618.pdf"
pipeline_run: null
---

## Statement

A chosen zero object $0$ in a category supplies a unique compatible system of
zero morphisms.

## Facts & Assumptions

**Given:** A zero object $0$ in a category $\mathcal C$.

[L1] A zero object is both initial and terminal, so there are unique arrows $A\to0$ and $0\to B$ for every $A,B$ ([[def-initial-terminal-and-zero-object]]).

[L2] A system of zero morphisms must absorb composition on either side ([[def-category-with-zero-morphisms]]).

## Proof

**Proof technique:** direct.

1.1 Define $0_{A,B}$ as the composite of the unique arrows $A\to0$ and $0\to B$ supplied by [L1]. [given, L1]

2.1 For $f:A'\to A$, both $0_{A,B}\circ f$ and $0_{A',B}$ factor through $0$ using the unique arrow $A'\to0$, so they are equal; the same uniqueness proves $g\circ0_{A,B}=0_{A,B'}$. [step 1.1, L1, L2]

3.1 Any compatible zero family must have $0_{A,B}=0_{0,B}\circ0_{A,0}$, and both factors are the unique arrows to and from $0$, so the family of step 1.1 is unique. [step 2.1, L1, L2] ∎

