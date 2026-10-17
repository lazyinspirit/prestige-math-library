---
id: lem-delay-history-space-is-banach
kind: lemma
title: "The continuous delay-history space is Banach"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-retarded-delay-equation-and-history-space
  - def-banach-space
  - lem-vector-valued-continuous-curve-space-is-complete
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Statement

For every integer $d\ge1$ and delay $\tau>0$, the history space
$\mathcal C_\tau=C([-\tau,0],\mathbb R^d)$ from
[[def-retarded-delay-equation-and-history-space]], equipped with
$\|\phi\|_\infty=\sup_{s\in[-\tau,0]}\|\phi(s)\|_2$, is a Banach space.

## Facts & Assumptions

**Given:** $d\ge1$, $\tau>0$, and the history-space definition.

[F1] The history space is $C([-\tau,0],\mathbb R^d)$ with the supremum of the Euclidean norm ([[def-retarded-delay-equation-and-history-space]]).

[F2] The Euclidean norm on $\mathbb R^d$ satisfies the norm axioms, including the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] For every nonempty compact interval $J$ and $d\ge1$, $C(J,\mathbb R^d)$ is complete in the metric $d_\infty(x,y)=\sup_{s\in J}\|x(s)-y(s)\|_2$ ([[lem-vector-valued-continuous-curve-space-is-complete]]).

[F4] A real normed space is Banach exactly when its norm-induced metric is complete ([[def-banach-space]]).

## Proof

1.1 The interval $J=[-\tau,0]$ is nonempty and compact. By [F1], $\mathcal C_\tau=C(J,\mathbb R^d)$, so [F3] gives the finite supremum metric $d_\infty$ and its completeness. In particular $\|\phi\|_\infty=d_\infty(\phi,0)$ is finite for every $\phi\in\mathcal C_\tau$. [given, F1, F3]

2.1 The Euclidean norm properties in [F2], applied pointwise and then followed by taking suprema, give nonnegativity, definiteness, scalar homogeneity, and the triangle inequality for $\|\cdot\|_\infty$. Its induced metric is therefore exactly $d_\infty$ from step 1.1. [F2, step 1.1, algebra]

3.1 Step 1.1 gives completeness for this induced metric, and [F4] defines that complete normed space to be Banach. Hence $\mathcal C_\tau$ is Banach. [F4, step 1.1, step 2.1] ∎
