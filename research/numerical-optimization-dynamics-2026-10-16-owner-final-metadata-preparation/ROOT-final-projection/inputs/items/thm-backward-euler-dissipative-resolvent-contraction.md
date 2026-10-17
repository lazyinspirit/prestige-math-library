---
id: thm-backward-euler-dissipative-resolvent-contraction
title: "Backward Euler has a globally defined nonexpansive resolvent (contractive when strongly dissipative)"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-backward-euler-step-equation
  - lem-strongly-monotone-continuous-map-is-bijective
  - def-euclidean-inner-product
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9, PDF pp. 78–79 / printed pp. 76–77: implicit Euler for a stiff scalar equation and unconditional damping."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 11: Stiffness"
      url: "https://fncbook.com/stiffness/"
      locator: "§§11.3–11.4: backward Euler scalar stability and the distinction between stability and accuracy."
---

## Statement

Let $d\ge1$, let $f:\mathbb R\times\mathbb R^d\to\mathbb R^d$ be continuous, and suppose for every fixed $t$ and all $x,y\in\mathbb R^d$,

$$\langle f(t,x)-f(t,y),x-y\rangle\le-\mu\|x-y\|_2^2$$

for some $\mu\ge0$. For every $h>0$, define $H_{t,h}(x)=x-hf(t,x)$. Then $H_{t,h}$ is bijective and its inverse $R_{t,h}=H_{t,h}^{-1}$, the backward Euler step map, satisfies

$$\|R_{t,h}(u)-R_{t,h}(v)\|_2\le\frac{1}{1+h\mu}\|u-v\|_2.$$

In particular, for each input state $u$, the equation $z=u+h f(t,z)$ has exactly one solution on all of $\mathbb R^d$. No $hL<1$ contraction assumption is needed for this dissipative branch.

## Facts & Assumptions

**Given:** $d\ge1$, $h>0$, $\mu\ge0$, a continuous $f$ on the full space, and the dissipativity inequality in the Statement.

[F1] [[def-backward-euler-step-equation]]: the backward Euler endpoint $z$ solves $z=u+h f(t,z)$, equivalently $H_{t,h}(z)=u$.

[F2] [[lem-strongly-monotone-continuous-map-is-bijective]]: a continuous map $H:\mathbb R^d\to\mathbb R^d$ satisfying $\langle H(x)-H(y),x-y\rangle\ge\kappa\|x-y\|_2^2$ for $\kappa>0$ is bijective and its inverse is $\kappa^{-1}$-Lipschitz.

[F3] [[def-euclidean-inner-product]]: $\|x\|_2^2=\langle x,x\rangle$ for the Euclidean inner product.


[A1] The vector field is continuous on all of $\mathbb R\times\mathbb R^d$, and the same $\mu$ in the stated dissipativity inequality works for every time under consideration.

## Proof


1.1 For fixed $t,h$ and $x,y\in\mathbb R^d$, [F3] and the dissipativity assumption give $\langle H_{t,h}(x)-H_{t,h}(y),x-y\rangle=\|x-y\|_2^2-h\langle f(t,x)-f(t,y),x-y\rangle\ge(1+h\mu)\|x-y\|_2^2$. The constant $1+h\mu$ is positive, and $H_{t,h}$ is continuous by [A1]. [A1, F1, F3, algebra]

2.1 Apply [F2] with $\kappa=1+h\mu$. It gives a unique inverse image $z=R_{t,h}(u)$ for every $u$, and the inverse Lipschitz bound in the Statement. By [F1], this inverse image is exactly the backward Euler root. [F1, F2, step 1.1] ∎
