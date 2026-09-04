---
id: cor-finite-dimensional-normed-spaces-are-banach
kind: corollary
title: "Every finite-dimensional normed space is Banach"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space,
       thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent,
       def-banach-space, thm-componentwise-convergence-and-completeness,
       thm-complex-numbers-are-the-real-coordinate-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
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

**Given:** A normed space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$ with an
ordered basis $e:n\to X$.

[L1] The basis map $T:\mathbb K^n\to X$ is a topological isomorphism
([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] For $m\ge1$, $\mathbb R^m$ is complete in every norm
([[thm-componentwise-convergence-and-completeness]]).

[L3] $\mathbb C$ is the real coordinate plane
([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[L4] A Banach space is a normed space complete for its norm metric
([[def-banach-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], it is enough to prove that $\mathbb K^n$ is complete for the coordinate $\ell^1$ norm, because a bounded bijection with bounded inverse preserves Cauchy sequences and their limits. [L1, L4]

1.2 In the real case $\mathbb K=\mathbb R$, if $n=0$ then $\mathbb R^0=\{0\}$ is complete trivially. If $n\ge1$, [L2] applies directly to the $\ell^1$ norm on $\mathbb R^n$, so $\mathbb R^n$ is complete. [L2]

1.3 In the complex case $\mathbb K=\mathbb C$, if $n=0$ the same trivial argument applies. If $n\ge1$, [L3] identifies $\mathbb C^n$ with $\mathbb R^{2n}$ by real and imaginary parts, and the proof of [[thm-coordinate-map-for-a-finite-dimensional-normed-space]] already shows that the complex coordinate $\ell^1$ norm is equivalent to a real norm on $\mathbb R^{2n}$. By [L2], that real norm is complete, hence so is $\mathbb C^n$ with the complex coordinate $\ell^1$ norm. [L2, L3]

2.1 Let $(x_m)$ be a Cauchy sequence in $X$, and write $a_m:=T^{-1}x_m$. Since $T^{-1}$ is bounded, $(a_m)$ is Cauchy in $\mathbb K^n$; by steps 1.2 and 1.3 it converges to some $a\in\mathbb K^n$. Since $T$ is bounded, $x_m=T(a_m)\to T(a)$ in $X$. Thus every Cauchy sequence in $X$ converges in $X$. [step 1.1, step 1.2, step 1.3, L1]

3.1 By [L4], step 2.1 says exactly that $X$ is Banach. [L4, step 2.1] ∎

## Remarks

- The only substantive input is completeness of finite-dimensional real
  coordinate space. Everything else is transport of structure.
