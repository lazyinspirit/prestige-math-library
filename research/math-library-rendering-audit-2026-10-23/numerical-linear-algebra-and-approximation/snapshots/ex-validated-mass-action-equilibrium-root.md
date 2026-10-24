---
id: ex-validated-mass-action-equilibrium-root
kind: example
title: A validated mass-action chemical equilibrium root
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation-examples
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-scalar-interval-newton-certification
  - thm-scalar-interval-newton-exclusion-and-inclusion
  - lem-real-interval-arithmetic-preserves-enclosure
  - def-continuity-and-derivative-on-real-interval
verification:
  precheck: pass
---

## Example

Consider the reversible reaction $2A\rightleftharpoons B$ with equilibrium constant $1$ and conserved amount $[A]+2[B]=1$. Writing $a=[A]$, the mass-action equilibrium relation is $[B]=a^2$, so the reduced residual is $f(a)=2a^2+a-1$. The dyadic box $X=[3/8,5/8]$ certifies one positive equilibrium with $a=1/2$ and $[B]=1/4$.

## Facts & Assumptions

**Given:** The stated mass-action relation, conservation law, residual $f(a)=2a^2+a-1$, and box $X=[3/8,5/8]$.

[F1] The scalar procedure forms an outward interval Newton image from an enclosure of $f(m)$ and an interval enclosure of $f'(X)$; strict inclusion returns a unique-root status ([[alg-scalar-interval-newton-certification]]).

[F2] If $0\notin f'(X)$ and the interval Newton image lies in $\operatorname{int}X$, then $f$ has exactly one root in $X$ ([[thm-scalar-interval-newton-exclusion-and-inclusion]]).

[F3] Finite real interval arithmetic encloses exact additions, multiplications, divisions away from zero, and squares ([[lem-real-interval-arithmetic-preserves-enclosure]]).

[F4] The derivative on a real interval is the ordinary difference-quotient limit ([[def-continuity-and-derivative-on-real-interval]]).

## Verification

1.1 The conservation law and $[B]=a^2$ reduce to $f(a)=a+2a^2-1=0$. At $a=1/2$, $[B]=1/4$, so $[B]=a^2$ and $a+2[B]=1/2+1/2=1$; both concentrations are positive. [given, algebra]

1.2 Natural interval evaluation gives $E_f(X)=2[3/8,5/8]^2+[3/8,5/8]-1=[-11/32,13/32]$, which contains zero. The difference quotient gives $f'(a)=\lim_{h\to0}(4ah+2h^2+h)/h=4a+1$. The midpoint of $X$ is $m=1/2$, with $f(m)=0$ and $f'(X)=4[3/8,5/8]+1=[5/2,7/2]$, which excludes zero. [given, F3, F4, algebra]

2.1 The interval Newton image is $N=m-[0,0]/[5/2,7/2]=\{1/2\}$ by exact interval arithmetic [F3]. Since $\{1/2\}\subset(3/8,5/8)$, the algorithm returns "unique-root" by [F1], and [F2] proves that this is the only root in the box. The box therefore certifies the stated positive equilibrium. [step 1.1, step 1.2, F1, F2, F3] ∎

