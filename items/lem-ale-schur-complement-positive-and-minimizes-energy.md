---
id: lem-ale-schur-complement-positive-and-minimizes-energy
kind: lemma
title: "The diffusion Schur complement is positive and minimizes energy"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ale-linear-diffusion-transmission-model]
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Emil Engström and Eskil Hansen, Time-dependent Steklov–Poincaré operators and space-time Robin–Robin decomposition for the heat equation (2022)"
      url: "https://arxiv.org/pdf/2210.13868"
      locator: "§5, Steklov–Poincaré operators and coercivity; the present finite-dimensional completion-of-squares proof is independent."
    - title: "Martina Maria Joosten, Aspects of interface modelling in fluid-structure interaction problems, PhD thesis, Swansea University (2011)"
      url: "https://cronfa.swan.ac.uk/Record/cronfa42211/Download/0042211-02082018162436.pdf"
      locator: "Chapter 5, interface block systems and partitioned solution operators."
---

## Statement

Let $B=\begin{pmatrix}K&C\\C^*&D\end{pmatrix}$ be a self-adjoint positive-definite operator on a finite-dimensional real inner-product direct sum $I\oplus\Lambda$. Then $K$ is positive definite, $S:=D-C^*K^{-1}C$ is positive definite on $\Lambda$, and for every $z\in\Lambda$,

$$\langle Sz,z\rangle=\min_{x\in I}\langle B(x,z),(x,z)\rangle.$$

In particular, the local Schur operators $S_i$ in [[def-ale-linear-diffusion-transmission-model]] are positive definite.

## Facts & Assumptions

**Given:** The block matrix $B$ is self-adjoint positive definite on $I\oplus\Lambda$, as are the local backward-Euler blocks $B_i$ in [[def-ale-linear-diffusion-transmission-model]].

[F1] [[def-ale-linear-diffusion-transmission-model]]: each $B_i=\Delta t^{-1}M_i+A_i$ is self-adjoint positive definite and its interface Schur complement is $S_i=B_{i,\Gamma\Gamma}-B_{i,\Gamma0}B_{i,00}^{-1}B_{i,0\Gamma}$.

## Proof

1.1 For $x\ne0$, $\langle Kx,x\rangle=\langle B(x,0),(x,0)\rangle>0$. Thus $K$ has zero kernel and is invertible because it is an endomorphism of a finite-dimensional space. [given, F1, algebra]

2.1 For fixed $z$, put $x_*=-K^{-1}Cz$. Expanding the quadratic form and completing the square gives $\langle B(x,z),(x,z)\rangle=\langle K(x-x_*),x-x_*\rangle+\langle(D-C^*K^{-1}C)z,z\rangle$. The first term is nonnegative and vanishes exactly at $x=x_*$, proving the minimum formula. [step 1.1, algebra]

3.1 If $z\ne0$, then $(x_*,z)\ne0$, so positive definiteness of $B$ gives $\langle Sz,z\rangle=\langle B(x_*,z),(x_*,z)\rangle>0$. Hence $S$ is positive definite; applying this to each $B_i$ in [F1] proves the final claim. [F1, step 2.1, given, algebra] ∎
