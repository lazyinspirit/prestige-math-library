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
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
---

## Statement

Let $C\subseteq\mathbb R^d$ be open and $f:C\to\mathbb R$ be $C^1$. Suppose that for every $x\in C$ there is a nondegenerate interval $J_x\subset(0,\infty)$ containing $1$ such that $\lambda x\in C$ and $f(\lambda x)=\lambda f(x)$ for every $\lambda\in J_x$. Here nondegenerate means that $J_x$ contains a point different from $1$; $1$ may be an endpoint. Then

$$f(x)=Df(x)[x]=\sum_{j=1}^d x_j\,\partial_j f(x)\qquad(x\in C).$$

The radial identity need only hold on one side of $1$: openness of $C$ and $C^1$ regularity supply an ambient derivative, and the interval makes $1$ a nonisolated point at which that derivative is determined by the radial identity. This uses the same function on the same domain; it asserts nothing about a family of functions on different tagged domains.

## Facts & Assumptions

**Given:** The open domain $C$, the $C^1$ function $f$, and for each $x\in C$ the stated radial homogeneity on a nondegenerate interval containing $\lambda=1$.

[F1] [[thm-chain-rule-for-total-derivatives]]: If $f$ and $g$ are totally differentiable at the relevant points, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

## Proof

**Proof technique:** direct.

1.1 Fix $x\in C$. Openness of $C$ and continuity of $\lambda\mapsto\lambda x$ give an open interval $K_x\subset(0,\infty)$ around $1$ with $\lambda x\in C$ for $\lambda\in K_x$. Define $g:K_x\to\mathbb R$ by $g(\lambda)=f(\lambda x)$. By [F1], $g'(1)=Df(x)[x]$. This ambient derivative exists even if $1$ is an endpoint of the interval $J_x$ on which homogeneity is assumed. [given, F1, construct]

2.1 Since $J_x$ is a nondegenerate interval containing $1$, it contains points $\lambda\ne1$ arbitrarily close to $1$, also lying in $K_x$. For these points, homogeneity and $g(1)=f(x)$ give $(g(\lambda)-g(1))/(\lambda-1)=f(x)$. The ambient derivative in step 1.1 exists, so its limit along this possibly one-sided set is $g'(1)=f(x)$. Therefore $f(x)=Df(x)[x]$, and writing the total derivative in Euclidean coordinates gives $Df(x)[x]=\sum_{j=1}^d x_j\partial_j f(x)$. [given, step 1.1, algebra] ∎
