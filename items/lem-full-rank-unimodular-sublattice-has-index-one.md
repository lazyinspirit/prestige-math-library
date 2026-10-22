---
id: lem-full-rank-unimodular-sublattice-has-index-one
kind: lemma
title: A full-rank unimodular sublattice has index one
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Shalom Eliahou and Eitan Shalom, Number Theory course notes
      url: https://math.huji.ac.il/~deshalit/new_site/files/NTcourse.pdf
      locator: Appendix, Proposition 1.1, printed pp. 57–58; index of a full-rank integer sublattice equals absolute determinant
---

## Statement

Let $n\ge1$, let $L$ be a free abelian group of rank $n$ with an integer-valued symmetric bilinear form whose Gram determinant is $1$ or $-1$, and let $f:L\to\mathbb Z^n$ be an isometric homomorphism, where $\mathbb Z^n$ has its standard dot product. Then $f(L)=\mathbb Z^n$.

## Facts & Assumptions

**Given:** A rank-$n$ free abelian group $L$, a unimodular integral symmetric form on $L$, and an isometric homomorphism $f$ to the standard dot-product lattice $\mathbb Z^n$.

[A1] The stated Gram determinant has absolute value one; the argument is finite integral linear algebra and uses no choice axiom.

[F1] If $A\in M_n(\mathbb Z)$ has nonzero determinant, then the subgroup $A\mathbb Z^n$ has index $|\det A|$ in $\mathbb Z^n$. [[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]]

## Proof

1.1 Choose an integral basis of $L$ and let $B$ be the integer $n\times n$ matrix whose columns are the images of that basis under $f$. Since $f$ is isometric, the Gram matrix of $L$ is $B^{\mathsf T}B$. [given, A1, choose, construct]

2.1 Taking determinants gives $1=|\det(B^{\mathsf T}B)|=|\det B|^2$, hence $\det B=1$ or $-1$. [step 1.1, algebra]

3.1 By [F1] and step 2.1, the image subgroup $B\mathbb Z^n=f(L)$ has index $|\det B|=1$ in $\mathbb Z^n$. The quotient therefore has one element, which means $B\mathbb Z^n=\mathbb Z^n$ and $f(L)=\mathbb Z^n$. [F1, step 2.1, algebra] ∎

