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

[F1] The partition variation is defined by taking the supremum of sums of vector norms over Borel partitions. ([[lem-ip-vector-radon-variation-is-radon]])

[F2] A finite Radon measure has compact inner approximation on the open set $X$. ([[def-radon-measure-on-an-lch-space]])

[F3] Each coordinate formula $\mu_i(A):=\int_A\nu_i\,d\lambda$ defines a finite signed Borel measure. Countable additivity follows by dominated convergence for disjoint Borel unions, since $|\nu_i|\le1$ and $\lambda(X)<\infty$. Its partition variation satisfies $|\mu_i|(A)\le\lambda(A)$ by the triangle inequality, and $|\mu_i|$ is a measure by [[thm-total-variation-is-a-measure]]. Although the Radon convention for $\lambda$ states compact inner approximation only on open sets, finiteness upgrades it to all Borel sets: for Borel $A$ and $\epsilon>0$, choose compact $C\subset X$ with $\lambda(X\setminus C)<\epsilon/2$ and open $G\supset X\setminus A$ with $\lambda(G\cap A)<\epsilon/2$; then $C\setminus G$ is compact in $A$ and $\lambda(A\setminus(C\setminus G))<\epsilon$. Thus $\lambda$ is regular on all Borel sets, and domination transfers compact inner and open outer approximations to $|\mu_i|$. By the repository convention that a finite signed measure is Radon when its total variation is regular, each coordinate measure is finite signed Radon and the vector-variation result [F1] applies. ([[thm-dominated-convergence]], [[thm-total-variation-is-a-measure]], [[def-radon-measure-on-an-lch-space]], [[def-regular-complex-borel-measure-on-an-lch-space]])

## Proof

**Given:** The space $X$, the finite Radon measure $\lambda$, and the continuous unit field $\nu$.

1.1 By [F3], the coordinate measures of $\mu$ are finite signed Radon measures, as required before applying [F1]. For any countable Borel partition $(A_j)$ of a Borel set $A$, the triangle inequality for vector integrals gives $\sum_j|\mu(A_j)|\le\sum_j\int_{A_j}|\nu|\,d\lambda=\lambda(A)$. Thus $|\mu|(A)\le\lambda(A)$. [F1, F3, given, algebra]

2.1 If $\lambda(X)=0$, step 1.1 already gives $|\mu|(X)=0$. Otherwise fix $0<\varepsilon<1$ and also choose it small enough that $\varepsilon<\lambda(X)$. By [F2] choose compact $K\subset X$ with $\lambda(X\setminus K)<\varepsilon$; then $K$ is nonempty. Uniform continuity of $\nu$ on $K$ gives a finite Borel partition $K=\bigsqcup_{j=1}^N A_j$ such that $|\nu(x)-\nu(y)|<\varepsilon$ for all $x,y\in A_j$. Choose $x_j\in A_j$ for each nonempty part. Then $$|\mu(A_j)|\ge\nu(x_j)\cdot\mu(A_j)=\int_{A_j}\nu(x_j)\cdot\nu(x)\,d\lambda(x)\ge(1-\varepsilon^2/2)\lambda(A_j),$$ since $\nu(x_j)\cdot\nu(x)=1-\tfrac12|\nu(x_j)-\nu(x)|^2$. The partition of $X$ consisting of these $A_j$ and $X\setminus K$ therefore gives $|\mu|(X)\ge(1-\varepsilon^2/2)\lambda(K)\ge(1-\varepsilon^2/2)(\lambda(X)-\varepsilon)$. Letting $\varepsilon\downarrow0$ and using step 1.1 proves $|\mu|(X)=\lambda(X)$. Applying the same argument to each Borel subset with the restricted measure proves equality on every Borel set. [F1, F2, step 1.1, choose]

3.1 The preceding equality on all Borel subsets is precisely equality of the two positive measures $|\mu|$ and $\lambda$. [step 2.1] ∎
