---
id: thm-ip-tcc-local-minimum-norm-identifiability
kind: theorem
title: Local uniqueness of an x₀-minimum-norm solution under TCC
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-nonlinear-forward-map
  - def-ip-x0-minimum-norm-solution
  - def-ip-tangential-cone-condition
  - lem-ip-tcc-residual-derivative-comparison
  - def-frechet-derivative-between-banach-spaces
  - def-kernel-and-image-of-a-linear-map
  - def-orthogonality-and-orthogonal-complement
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
  - cor-inner-product-induces-a-norm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Theorem 9.9"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, Iterative methods for nonlinear ill-posed problems in Banach spaces, Proposition 1"
      url: "https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf"
verification:
  precheck: pass
---

## Statement

Let $X,Y$ be real Hilbert spaces, let $U\subseteq X$ be open, and let $F:U\to Y$ be Fréchet differentiable. Let $x_0\in X$, $y\in Y$, and let $x^\dagger\in U$ be an $x_0$-minimum-norm solution of $F(x)=y$ on $U$. Suppose that for some $\delta>0$ the closed ball $\overline B_\delta(x^\dagger)$ lies in $U$, the local tangential cone condition holds at $x^\dagger$ on radius $\delta$ with a constant $0\le\eta<1$, and

$$x^\dagger-x_0\in\ker(F'(x^\dagger))^\perp.$$

Then every $x\in\overline B_\delta(x^\dagger)$ with $F(x)=y$ and $x\ne x^\dagger$ satisfies

$$\|x-x_0\|_X>\|x^\dagger-x_0\|_X.$$

Consequently, $x^\dagger$ is the unique $x_0$-minimum-norm solution among the exact solutions in $\overline B_\delta(x^\dagger)$.

## Statement references

[[def-ip-nonlinear-forward-map|Nonlinear forward maps and exact solutions]]

[[def-ip-x0-minimum-norm-solution|The $x_0$-minimum-norm solution condition]]

[[def-ip-tangential-cone-condition|Local tangential cone condition]]

[[lem-ip-tcc-residual-derivative-comparison|Derivative/data-residual comparison]]

[[def-frechet-derivative-between-banach-spaces|Fréchet derivative]]

[[def-kernel-and-image-of-a-linear-map|Kernel of a linear operator]]

[[def-orthogonality-and-orthogonal-complement|Orthogonal complement]]

[Christian Clason, *Regularization of Inverse Problems*, Theorem 9.9](https://arxiv.org/pdf/2001.00617v2)

[Barbara Kaltenbacher, Frank Schöpfer, and Thomas Schuster, *Iterative methods for nonlinear ill-posed problems in Banach spaces*, Proposition 1](https://www.f08.uni-stuttgart.de/.content/media/downloads/Mathematik/mathematische_berichte/2008/2008-005.pdf)

## Facts & Assumptions

**Given:** Real Hilbert spaces $X,Y$, an open set $U\subseteq X$, a Fréchet differentiable map $F:U\to Y$, $x_0\in X$, $y\in Y$, and an $x_0$-minimum-norm solution $x^\dagger\in U$ of $F(x)=y$. For some $\delta>0$, $\overline B_\delta(x^\dagger)\subseteq U$ and the local tangential cone condition holds there with $0\le\eta<1$. Also assume $x^\dagger-x_0\in\ker(F'(x^\dagger))^\perp$.

[F1] Under the local tangential cone condition, $(1-\eta)\|F(x+h)-F(x)\|_Y\le\|F'(x)h\|_Y\le(1+\eta)\|F(x+h)-F(x)\|_Y$ for all admissible $h$ ([[lem-ip-tcc-residual-derivative-comparison]]).

[F2] For a linear map $T:V\to W$, its kernel is $\ker T:=\{v\in V:T(v)=0_W\}$ ([[def-kernel-and-image-of-a-linear-map]]).

[F3] For a subset $S$ of an inner-product space, $S^\perp:=\{v:\langle v,s\rangle=0\text{ for every }s\in S\}$ ([[def-orthogonality-and-orthogonal-complement]]).

[F4] If $u,v$ are orthogonal in an inner-product space, then $\|u+v\|^2=\|u\|^2+\|v\|^2$ ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[F5] The induced Hilbert norm is nonnegative and vanishes only at the zero vector ([[cor-inner-product-induces-a-norm]]).

[A1] $x^\dagger$ is an exact solution and globally minimizes distance to $x_0$ among solutions on $U$ ([[def-ip-x0-minimum-norm-solution]]).

[A2] The TCC holds at $x^\dagger$ on the stated closed ball, with $0\le\eta<1$ ([[def-ip-tangential-cone-condition]]).

[A3] $x^\dagger-x_0$ is orthogonal to every vector in $\ker(F'(x^\dagger))$ ([[def-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 Choose any $x\in\overline B_\delta(x^\dagger)$ with $F(x)=y$ and $x\ne x^\dagger$, and put $h:=x-x^\dagger$. Applying [F1] at $x^\dagger$ gives $\|F'(x^\dagger)h\|_Y\le(1+\eta)\|F(x)-F(x^\dagger)\|_Y=0$. Hence $F'(x^\dagger)h=0$, so [F2] gives $h\in\ker(F'(x^\dagger))$; also $h\ne0$. [given, A2, F1, F2, choose, algebra]

2.1 By [A3] and [F3], $x^\dagger-x_0$ is orthogonal to $h$. Applying [F4] to $x^\dagger-x_0$ and $h$ yields $\|x-x_0\|_X^2=\|x^\dagger-x_0\|_X^2+\|h\|_X^2>\|x^\dagger-x_0\|_X^2$, since [F5] and $h\ne0$ imply $\|h\|_X>0$. The norms are nonnegative, so the strict inequality of squares gives the strict norm inequality. With [A1], this proves uniqueness of the $x_0$-minimum-norm solution among the local exact solutions. [step 1.1, A1, A3, F3, F4, F5, algebra] ∎

## Remarks

The conclusion is local minimum-norm uniqueness, not injectivity of $F$: other exact solutions may lie in the ball, but each has strictly larger distance to $x_0$.
