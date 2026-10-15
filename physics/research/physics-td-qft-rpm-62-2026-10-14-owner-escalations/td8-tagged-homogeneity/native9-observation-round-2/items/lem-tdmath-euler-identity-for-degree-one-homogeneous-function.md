---
id: lem-tdmath-euler-identity-for-degree-one-homogeneous-function
kind: lemma
title: Euler identity for a differentiable degree-one homogeneous function
status: draft
origin: pipeline
domain: mathematics
library: physics
deps:
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  thm-chain-rule-for-total-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Mehran Kardar, Statistical Mechanics I, Lecture Note 3, §I.H
      url: https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/df0c4e121858c0be246b496dd8c39d2c_MIT8_333F13_Lec3.pdf
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
---

## Statement

Let $C\subseteq\mathbb R^d$ be open and $f:C\to\mathbb R$ be $C^1$. Suppose that for every $x\in C$ there is an interval $J_x\subset(0,\infty)$ containing $1$ such that $\lambda x\in C$ and $f(\lambda x)=\lambda f(x)$ for every $\lambda\in J_x$. Then

$$f(x)=Df(x)[x]=\sum_{j=1}^d x_j\,\partial_j f(x)\qquad(x\in C).$$

The hypothesis is local along each ray and uses degree-one homogeneity for the same function on the same domain. It asserts nothing about a family of functions on different tagged domains.

## Facts & Assumptions

**Given:** The open domain $C$, the $C^1$ function $f$, and the stated radial homogeneity for each $x\in C$.

[F1] [[thm-chain-rule-for-total-derivatives]]: If $f$ and $g$ are totally differentiable at the relevant points, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

## Proof

**Proof technique:** direct.

1.1 Fix $x\in C$ and define $g:J_x\to\mathbb R$ by $g(\lambda)=f(\lambda x)$. By [F1], $g'(\lambda)=Df(\lambda x)[x]$ for $\lambda\in J_x$. [given, F1, construct]

1.2 The homogeneity hypothesis gives $g(\lambda)=\lambda f(x)$ throughout $J_x$, so $g'(1)=f(x)$. The derivative formula in step 1.1 gives $g'(1)=Df(x)[x]$; writing the total derivative in Euclidean coordinates yields $Df(x)[x]=\sum_{j=1}^d x_j\partial_j f(x)$. [given, step 1.1, algebra] ∎
