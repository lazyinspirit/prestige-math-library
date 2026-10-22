---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/cor-finite-dimensional-normed-spaces-are-banach.json
id: cor-finite-dimensional-normed-spaces-are-banach
kind: corollary
title: "Every finite-dimensional normed space is Banach"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-complex-coordinate-l1-is-a-norm, lem-complex-norm-realification-is-a-real-norm, thm-coordinate-map-for-a-finite-dimensional-normed-space,
       thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent,
       def-banach-space, thm-componentwise-convergence-and-completeness,
       thm-complex-numbers-are-the-real-coordinate-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and assume
$X$ admits an ordered basis of finite length. Then $X$ is a Banach space in the
sense of [[def-banach-space]].

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$ with an ordered basis $e:n\to X$.

[L1] The basis map $T:\mathbb K^n\to X$ is a topological isomorphism ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] For $m\ge1$, $\mathbb R^m$ is complete in every norm ([[thm-componentwise-convergence-and-completeness]]).

[L3] $\mathbb C$ is the real coordinate plane with coordinate arithmetic ([[thm-complex-numbers-are-the-real-coordinate-plane]]). The coordinate $\ell^1$ function is a complex norm ([[lem-complex-coordinate-l1-is-a-norm]]), and realification preserves its metric ([[lem-complex-norm-realification-is-a-real-norm]]).

[L4] A Banach space is a normed space complete for its norm metric ([[def-banach-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], it is enough to prove that $\mathbb K^n$ is complete for the coordinate $\ell^1$ norm, because a bounded bijection with bounded inverse preserves Cauchy sequences and their limits. [L1, L4]

1.2 In the real case $\mathbb K=\mathbb R$, if $n=0$ then $\mathbb R^0=\{0\}$ is complete trivially. If $n\ge1$, [L2] applies directly to the $\ell^1$ norm on $\mathbb R^n$, so $\mathbb R^n$ is complete. [L2]

1.3 In the complex case, if $n=0$ the coordinate space is a singleton and complete. If $n\ge1$, let $\Psi:\mathbb C^n\to\mathbb R^{2n}$ send each coordinate to its real and imaginary parts. By [L3] it is a real-linear bijection, and $Q(u):=\|\Psi^{-1}u\|_1$ is a real norm on $\mathbb R^{2n}$. It is complete by [L2]. Since $Q(\Psi a-\Psi b)=\|a-b\|_1$, the bijection $\Psi$ transports Cauchy sequences and limits exactly; thus $\mathbb C^n$ is complete in its complex coordinate norm metric. [L2, L3, algebra]

2.1 Let $(x_m)$ be a Cauchy sequence in $X$, and write $a_m:=T^{-1}x_m$. Since $T^{-1}$ is bounded, $(a_m)$ is Cauchy in $\mathbb K^n$; by steps 1.2 and 1.3 it converges to some $a\in\mathbb K^n$. Since $T$ is bounded, $x_m=T(a_m)\to T(a)$ in $X$. Thus every Cauchy sequence in $X$ converges in $X$. [step 1.1, step 1.2, step 1.3, L1]

3.1 By [L4], step 2.1 says exactly that $X$ is Banach. [L4, step 2.1] ∎

## Remarks

- The only substantive input is completeness of finite-dimensional real coordinate space. Everything else is transport of structure.
