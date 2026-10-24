---
id: thm-quotient-group-laws
kind: theorem
title: 'For $N\mathrel{\trianglelefteq}G$, the cosets form a group with identity $N$ and inverse $(gN)^{-1}=g^{-1}N$'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-group, thm-coset-multiplication-well-defined-iff-normal, def-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, Factor Groups and Normal Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups"
pipeline_run: null
---

## Statement

Let $N\mathrel{\trianglelefteq}G$. The left cosets form a group $G/N$ under

$$ (gN)(hN)=ghN.$$

Its identity is $N=eN$, and the inverse of $gN$ is $g^{-1}N$.

## Facts & Assumptions

**Given:** A group $G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[L1] Coset multiplication $(gN)(hN)=ghN$ is well defined when $N$ is normal ([[thm-coset-multiplication-well-defined-iff-normal]]).

[F1] The quotient set $G/N$ consists of the left cosets of $N$, with the proposed product $(gN)(hN)=ghN$ ([[def-quotient-group]]).

[F2] A group operation is associative, has a two-sided identity, and gives every element a two-sided inverse ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the formula in [F1] is a binary operation on the coset set, independent of representatives. [L1, F1]

1.2 For $g,h,k\in G$, one has $((gN)(hN))(kN)=(gh)kN=g(hk)N=(gN)((hN)(kN))$. Also $(eN)(gN)=gN=(gN)(eN)$, so $N=eN$ is the identity. [F1, F2, algebra]

1.3 The products $(gN)(g^{-1}N)$ and $(g^{-1}N)(gN)$ both equal $eN=N$, so $g^{-1}N$ is the inverse of $gN$. [F1, F2, algebra]

2.1 Steps 1.1 through 1.3 verify the binary operation, associativity, identity, and inverse axioms; therefore $G/N$ is a group with the stated identity and inverses. [step 1.1, step 1.2, step 1.3, F2] ∎
