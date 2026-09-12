---
id: lem-block-centre-locality-and-trace-ideal-sums
kind: lemma
title: Block centre locality and trace ideal sums
deps: [def-block-bimodule-for-the-double-group, thm-krull-schmidt-for-finite-dimensional-kg-modules]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
sources:
  references:
    - title: Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
proof_strategy: direct
---

## Statement

The centre $Z(B)$ of a finite-dimensional block $B=kGb$ is a local algebra. If $b$ is a sum of elements belonging to finitely many ideals of $Z(B)$, then one of those ideals contains $b$. In particular the images $\operatorname{Tr}_H^G(B^H)\subseteq Z(B)$ are ideals to which this assertion applies.

## Facts & Assumptions

**Given:** A block $B$ with identity $b$.

[F1] The block bimodule is indecomposable and its endomorphisms are central multiplication. ([[def-block-bimodule-for-the-double-group]])

[F2] The finite-dimensional setting permits indecomposable decomposition and Fitting stabilization. ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]])

## Proof

**Proof technique:** direct.

1.1 For $c\in Z(B)$, choose $n$ so the kernels and images of multiplication by $c^n$ stabilize. Their intersection is zero: $c^nx$ in the kernel gives $c^{2n}x=0$, hence $c^nx=0$. Rank-nullity now gives $B=\ker c^n\oplus\operatorname{im}c^n$ as bimodules. Indecomposability forces one summand to be zero. Thus $c$ is nilpotent or multiplication by $c$ is bijective. In the latter case a preimage of $b$ is its inverse and commutes with $B$, so $c$ is a unit in $Z(B)$. [F1, F2]

2.1 Nonunits in this commutative algebra are nilpotent. A sum of two nilpotents is nilpotent by expanding $(c+d)^{r+s}$ when $c^r=d^s=0$; scalar multiplication by any central element also preserves nilpotence. Nonunits therefore form a proper ideal containing all proper ideals, which is the unique maximal ideal. If $b=\sum z_j$ with $z_j$ in specified ideals, some $z_j$ must be a unit, since a sum of nonunits cannot equal $b$. Its ideal contains $z_j^{-1}z_j=b$. [step 1.1]

3.1 For $a\in B^H$ the trace is $G$-fixed, hence central. For $c\in Z(B)$, $c\operatorname{Tr}_H^G(a)=\operatorname{Tr}_H^G(ca)$ and $ca\in B^H$. The trace image is a linear subspace stable under central multiplication, hence an ideal, proving the stated application. [step 2.1] ∎

## Sources

Webb, A Course in Finite Group Representation Theory, §§11.3, 11.6 and 12.3–12.5, especially pp.240–245. Local argument and conventions as displayed above.
