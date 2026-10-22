---
id: lem-ip-unit-vector-density-has-scalar-variation
kind: lemma
title: A unit vector density has scalar variation measure
status: draft
origin: pipeline
deps:
  - lem-ip-vector-radon-variation-is-radon
  - def-radon-measure-on-an-lch-space
  - def-regular-complex-borel-measure-on-an-lch-space
  - thm-dominated-convergence
  - thm-total-variation-is-a-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
---

## Statement

Let $X$ be a locally compact second-countable metric space, let $\lambda$ be a finite positive Radon measure on $X$, and let $\nu:X\to\mathbb R^m$ be continuous with $|\nu(x)|=1$ for every $x$. Define the vector measure $\mu(A):=\int_A\nu\,d\lambda$ on Borel sets. Its partition variation satisfies $|\mu|=\lambda$.

## Statement references

[[lem-ip-vector-radon-variation-is-radon|Partition variation for finite vectors of Radon measures.]]

## Facts & Assumptions

**Given:** A locally compact second-countable metric space $X$, a finite positive Radon measure $\lambda$, and a continuous unit-vector field $\nu$.

[F1] Here partition variation means $V(A):=\sup\{\sum_j|\mu(A_j)|:(A_j)_{j\ge1}\text{ is a Borel partition of }A\}$, with empty parts allowed. This is the formula used in the Euclidean vector-Radon lemma; we prove the equality directly on $X$, without applying that lemma's Euclidean regularity conclusion to a general metric space. ([[lem-ip-vector-radon-variation-is-radon]])

[F2] Each coordinate formula $\mu_i(A):=\int_A\nu_i\,d\lambda$ defines a finite signed Borel measure. Countable additivity follows by dominated convergence for disjoint Borel unions, since $|\nu_i|\le1$ and $\lambda(X)<\infty$. ([[thm-dominated-convergence]])

## Proof

**Given:** The space $X$, the finite Radon measure $\lambda$, and the continuous unit field $\nu$.

1.1 The coordinate measures are well-defined by [F2]. For every countable Borel partition $(A_j)$ of a Borel set $A$, the triangle inequality for vector integrals gives $\sum_j|\mu(A_j)|\le\sum_j\int_{A_j}|\nu|\,d\lambda=\lambda(A)$. Taking the supremum in the definition [F1] gives $V(A)\le\lambda(A)$. [F1, F2, given, algebra]

2.1 Fix a Borel $A$ and $0<\varepsilon<1$. Partition the unit sphere in $\mathbb R^m$ into finitely many Borel pieces $C_j$ of diameter below $\varepsilon$, by intersecting it with a sufficiently fine finite grid of half-open boxes in $[-1,1]^m$ (including the outer faces). Choose a unit vector $e_j$ in each nonempty piece, requiring only finite choice. The sets $A_j=A\cap\nu^{-1}(C_j)$ are a finite Borel partition of $A$, since $\nu$ is continuous. For $x\in A_j$, $e_j\cdot\nu(x)=1-\tfrac12|e_j-\nu(x)|^2\ge1-\varepsilon^2/2$. Thus $|\mu(A_j)|\ge e_j\cdot\mu(A_j)\ge(1-\varepsilon^2/2)\lambda(A_j)$. Adding empty parts gives an admissible countable partition in [F1], so $V(A)\ge(1-\varepsilon^2/2)\lambda(A)$. Letting $\varepsilon\downarrow0$ and using step 1.1 proves $V(A)=\lambda(A)$ for every Borel $A$, including zero-mass sets. [F1, step 1.1, choose, construct, algebra]

3.1 Consequently the partition set function is the positive Radon measure $\lambda$ itself. This proves $|\mu|=\lambda$ on the stated space without any Euclidean-domain assumption or restriction of $A$ to an open set. [step 2.1] ∎
