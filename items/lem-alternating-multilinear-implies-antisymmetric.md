---
id: lem-alternating-multilinear-implies-antisymmetric
kind: lemma
title: "Every alternating multilinear matrix function is antisymmetric under a column swap"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions, lem-ring-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. New, MATH 146 Linear Algebra 1 Lecture Notes, Theorem 4.19"
      url: "https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $F:M_n(R)\to R$ be column-multilinear and alternating. Interchanging any two columns of $A$ negates $F(A)$. This holds over every commutative ring, including characteristic $2$.

## Facts & Assumptions

**Given:** An alternating column-multilinear function $F$ and two selected column positions containing $u$ and $v$.

[L1] Alternation makes $F$ vanish on equal columns, while multilinearity expands sums separately in each column ([[def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions]]).

[L2] Ring addition has additive inverses and satisfies the usual sign identities ([[lem-ring-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 Put $u+v$ in both selected positions. Alternation gives $0=F(\ldots,u+v,\ldots,u+v,\ldots)$. [L1]

2.1 Expanding twice gives $0=F(\ldots,u,\ldots,v,\ldots)+F(\ldots,v,\ldots,u,\ldots)$ because the two equal-column terms vanish. Adding the inverse of the first term yields the antisymmetry formula, without dividing by $2$. [step 1.1, L1, L2, algebra] ∎
