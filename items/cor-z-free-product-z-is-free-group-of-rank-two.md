---
id: cor-z-free-product-z-is-free-group-of-rank-two
kind: corollary
title: "The free product of two infinite cyclic groups is the free group on two generators"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-free-product-of-infinite-cyclic-groups-is-free, def-rank-of-a-finite-rank-free-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Statement

The free product of two infinite cyclic groups is the free group on two generators, hence has rank two.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] A free product of a family of infinite cyclic groups is a free group on one chosen generator from each factor. The empty family gives the free group on the empty set. ([[cor-free-product-of-infinite-cyclic-groups-is-free]]).

[L2] A free group $F$ has **finite rank** if it admits a finite free basis. In that case its **rank** is $$\operatorname{rank}(F):=|B|,$$ where $B$ is any finite free basis of $F$. This is well-defined by thm-finite-free-bases-have-the-same-cardinality. This definition is deliberately restricted to free groups that admit a finite free basis. It neither defines rank for a free group whose bases are infinite nor asserts that arbitrary infinite free bases have the same cardinality. ([[def-rank-of-a-finite-rank-free-group]]).

## Proof

**Proof technique:** direct.

1.1 Apply the preceding result to two factors with chosen generators $x$ and $y$; their tagged singleton bases have union $\{x,y\}$. [given, L1, L2]

2.1 The resulting free group is free on this two-element set, which is exactly rank two by definition. [step 1.1] ∎
