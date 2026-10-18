---
id: lem-epsilon-net-controls-symmetric-operator-norm
kind: lemma
title: "A sphere net controls the operator norm of a symmetric matrix"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-euclidean-spheres-and-closed-balls
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-epsilon-net-of-unit-sphere-has-cardinality-bound
  - lem-symmetric-matrix-operator-norm-rayleigh
  - thm-cauchy-schwarz-finite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, Lemma 1.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Hunter, Measure Theory, finite epsilon nets and Euclidean norm facts"
      url: "https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf"
---

## Statement

Let $A\in\mathbb R^{p\times p}$ be symmetric and let $\mathcal N$ be a $1/4$-net of the Euclidean unit sphere in $\mathbb R^p$. Then
$$\|A\|_{\mathrm{op}}\le2\max_{v\in\mathcal N}|v^{\mathsf T}Av|.$$
The operator norm is the finite-dimensional norm of [[def-operator-norm-on-a-finite-dimensional-inner-product-space]].

## Facts & Assumptions

**Given:** A symmetric real matrix $A$ and a $1/4$-net $\mathcal N\subseteq S^{p-1}$, with $p\ge1$.

[F1] A symmetric matrix has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]), and its operator norm equals its largest absolute eigenvalue ([[lem-symmetric-matrix-operator-norm-rayleigh]]).

[F2] Every point of the sphere is within $1/4$ in Euclidean norm of some point of $\mathcal N$ ([[lem-epsilon-net-of-unit-sphere-has-cardinality-bound]]).

[F3] The Euclidean inner product satisfies Cauchy–Schwarz ([[thm-cauchy-schwarz-finite]]).

[F4] The operator norm bounds $\|Aw\|_2\le\|A\|_{\mathrm{op}}\|w\|_2$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 By [F1], choose a unit eigenvector $u$ for an eigenvalue $\lambda$ with $|\lambda|=\|A\|_{\mathrm{op}}$. By [F2], choose $v\in\mathcal N$ with $\|u-v\|_2\le1/4$. [F1, F2, choose]

2.1 Symmetry and [F3]–[F4] imply $|u^{\mathsf T}Au-v^{\mathsf T}Av|\le|(u-v)^{\mathsf T}Au|+|v^{\mathsf T}A(u-v)|\le2(1/4)\|A\|_{\mathrm{op}}.$ Thus $|v^{\mathsf T}Av|\ge|\lambda|-\frac12\|A\|_{\mathrm{op}}=\frac12\|A\|_{\mathrm{op}}$, giving the claimed inequality. [F1, F3, F4, step 1.1, algebra] ∎
