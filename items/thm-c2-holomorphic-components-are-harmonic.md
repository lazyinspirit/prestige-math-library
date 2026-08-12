---
id: thm-c2-holomorphic-components-are-harmonic
kind: theorem
title: "The $C^2$ real and imaginary parts of a holomorphic function satisfy Laplace's equation and form a harmonic-conjugate pair"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       def-ck-and-multi-index-notation-in-several-variables,
       thm-clairaut-schwarz-mixed-partials]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercises 2.1.6–2.1.7"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. Howell and J. Mathews, Complex Analysis, Theorem 3.3.1"
      url: "https://complexanalysis.org/web/sec_harmonic-functions.html"
pipeline_run: null
---

## Statement

Let $f=u+iv$ be holomorphic on an open set $U\subseteq\mathbb C$, and assume $u,v\in C^2(U)$. Then

$$ u_{xx}+u_{yy}=0,\qquad v_{xx}+v_{yy}=0. $$

A $C^2$ real function satisfying this equation is called harmonic. Thus $u$ and $v$ are harmonic, and $v$ is a harmonic conjugate of $u$ in the sense that $u+iv$ is holomorphic. No automatic $C^2$ regularity or global existence of harmonic conjugates is asserted.

## Facts & Assumptions
**Given:** A holomorphic $f=u+iv$ on $U$ with $u,v\in C^2(U)$.

[L1] Holomorphy gives $u_x=v_y$ and $u_y=-v_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F1] A $C^2$ function has continuous iterated partial derivatives through order two ([[def-ck-and-multi-index-notation-in-several-variables]]).

[L2] If a function is $C^2$ on an open subset of $\mathbb R^m$, then its mixed second partial derivatives agree ([[thm-clairaut-schwarz-mixed-partials]]).

## Proof

**Proof technique:** direct.

1.1 Differentiating $u_x=v_y$ in $x$ and $u_y=-v_x$ in $y$ gives $u_{xx}=v_{yx}$ and $u_{yy}=-v_{xy}$. [given, L1, F1]

1.2 Differentiating $u_x=v_y$ in $y$ and $u_y=-v_x$ in $x$ gives $u_{xy}=v_{yy}$ and $u_{yx}=-v_{xx}$. [given, L1, F1]

2.1 By [L2], $v_{yx}=v_{xy}$, so step 1.1 gives $u_{xx}+u_{yy}=0$. [step 1.1, L2, algebra]

3.1 By [L2], $u_{xy}=u_{yx}$, so step 1.2 gives $v_{xx}+v_{yy}=0$. The terminology in the Statement now applies to the given pair $u,v$. [step 1.2, L2, algebra] ∎
