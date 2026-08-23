---
id: lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple
kind: lemma
title: 'A linear functional annihilating the kernel of a surjection is a unique transpose multiple'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-map, def-kernel-and-image-of-a-linear-map, def-injection-surjection-bijection, lem-standard-basis-of-f-n, def-euclidean-inner-product, thm-linear-kernel-image-and-injectivity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Lagrange multipliers discussion'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'University of Toronto MAT237 notes, Section 2.8'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.8.html'
pipeline_run: null
---

## Statement

Let $A:\mathbb R^m\to\mathbb R^n$ be a surjective linear map, with $m,n\ge1$, and let $\ell:\mathbb R^m\to\mathbb R$ be linear. If $\ell$ vanishes on $\ker A$, then there is a unique $\lambda\in\mathbb R^n$ such that
$$\ell(v)=\langle\lambda,Av\rangle\quad\text{for every }v\in\mathbb R^m.$$
Equivalently, the row vector of $\ell$ is $A^{\mathsf T}\lambda$.

## Facts & Assumptions

**Given:** The surjective linear map $A$ and the linear functional $\ell$ vanishing on $\ker A$.

[L1] Surjectivity provides a preimage of each standard basis vector, and the standard basis gives the coordinate expansion of every vector in $\mathbb R^n$ ([[def-injection-surjection-bijection]], [[lem-standard-basis-of-f-n]]).

[L2] Kernels are the vectors mapped to zero, and linear maps preserve finite linear combinations ([[def-kernel-and-image-of-a-linear-map]], [[def-linear-map]], [[thm-linear-kernel-image-and-injectivity]]); the Euclidean inner product is the coordinate dot product ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 For each standard basis vector $e_j$, choose $w_j\in\mathbb R^m$ with $Aw_j=e_j$, and define $\lambda_j=\ell(w_j)$. These are finitely many choices. [given, L1, choose]

2.1 For $v\in\mathbb R^m$, put $w=\sum_{j<n}(Av)_jw_j$. Then $Aw=Av$ by [L1] and linearity, so $v-w\in\ker A$ and $\ell(v)=\ell(w)=\sum_{j<n}(Av)_j\lambda_j=\langle\lambda,Av\rangle$. [step 1.1, L1, L2, algebra]

3.1 If both $\lambda$ and $\mu$ work, surjectivity gives $v$ with $Av=\lambda-\mu$; then $0=\langle\lambda-\mu,Av\rangle=\|\lambda-\mu\|_2^2$, so $\lambda=\mu$. This proves existence and uniqueness. [step 2.1, L1, L2] ∎
