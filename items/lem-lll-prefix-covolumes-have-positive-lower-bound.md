---
id: lem-lll-prefix-covolumes-have-positive-lower-bound
kind: lemma
title: Prefix covolumes of lattice bases have a positive lower bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-full-euclidean-lattice-and-covolume, def-euclidean-inner-product]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. K. Lenstra, H. W. Lenstra Jr., and L. Lovász, Factoring Polynomials with Rational Coefficients, termination proof in §1"
      url: "https://ir.cwi.nl/pub/9304/9304D.pdf"
verification: {}
---

## Statement

Let $L\subseteq\mathbb R^n$ be a fixed full lattice with an ordered integer basis $v_1,\ldots,v_n$. For any other ordered integer basis $b_1,\ldots,b_n$ of $L$ and any $1\le i<n$, let $d_i=\det(\langle b_j,b_k\rangle)_{1\le j,k\le i}$. There is a constant $c_i(L)>0$, independent of the chosen basis, such that $d_i\ge c_i(L)$.

## Statement references

[Lenstra–Lenstra–Lovász, termination argument in §1](https://ir.cwi.nl/pub/9304/9304D.pdf)

## Facts & Assumptions

**Given:** The full lattice and Euclidean inner product in the Statement.

[F1] A full lattice is the integer span of a real basis ([[def-full-euclidean-lattice-and-covolume]]).

[F2] The Euclidean inner product is the coordinate dot product ([[def-euclidean-inner-product]]).

## Proof



1.1 Let $B$ be the matrix with columns $v_1,\ldots,v_n$. The coordinate matrix $C$ expressing the basis $b_1,\ldots,b_n$ in the fixed basis is an integer unimodular matrix. Its first $i$ columns form an $n\times i$ integer matrix $C_i$ of rank $i$, so the vector $z$ of all $i\times i$ row minors of $C_i$ is a nonzero integer vector and has Euclidean norm at least $1$. [F1, given, algebra]

2.1 By the Cauchy–Binet identity, $d_i$ is the sum of the squares of all $i\times i$ row minors of $BC_i$. These minors are obtained from $z$ by a fixed invertible linear map $M_i$ determined by $B$; its inverse is the corresponding map determined by $B^{-1}$. Hence $\lVert M_i z\rVert\ge \lVert z\rVert/\lVert M_i^{-1}\rVert\ge1/\lVert M_i^{-1}\rVert>0$. Taking $c_i(L)=\lVert M_i^{-1}\rVert^{-2}$ proves $d_i=\lVert M_i z\rVert^2\ge c_i(L)$. [F2, step 1.1, algebra] ∎

