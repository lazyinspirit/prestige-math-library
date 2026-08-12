---
id: thm-c2-holomorphic-function-has-holomorphic-derivative
kind: theorem
title: "If a holomorphic function has $C^2$ components, then its derivative is holomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann,
       thm-continuous-partials-and-cauchy-riemann-imply-holomorphic,
       def-ck-and-multi-index-notation-in-several-variables,
       thm-clairaut-schwarz-mixed-partials]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Orloff, MIT 18.04 Topic 2, Theorem 2.13"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Statement

Let $f=u+iv$ be holomorphic on an open set $U\subseteq\mathbb C$, and suppose $u,v\in C^2(U)$. Then the complex derivative $f':U\to\mathbb C$ is holomorphic.

## Facts & Assumptions

**Given:** A holomorphic $f=u+iv$ with $C^2$ components.

[L1] Holomorphy gives $f'=u_x+iv_x$ and the equations $u_x=v_y$, $u_y=-v_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

[F1] A $C^2$ function has continuous first and second partial derivatives ([[def-ck-and-multi-index-notation-in-several-variables]]).

[L2] For $C^2$ functions, mixed second partial derivatives agree ([[thm-clairaut-schwarz-mixed-partials]]).

[L3] Continuous first partial derivatives satisfying the Cauchy–Riemann equations imply holomorphy ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

## Proof

**Proof technique:** direct.

1.1 Write $f'=p+iq$ with $p=u_x$ and $q=v_x$. By [F1], the first partial derivatives of $p$ and $q$ exist and are continuous. [given, L1, F1]

1.2 Differentiating $u_x=v_y$ in $x$ and using [L2] gives $p_x=u_{xx}=v_{yx}=v_{xy}=q_y$. [L1, L2, F1, algebra]

1.3 Differentiating $u_y=-v_x$ in $x$ and using [L2] gives $p_y=u_{xy}=u_{yx}=-v_{xx}=-q_x$. [L1, L2, F1, algebra]

2.1 Thus $p,q$ have continuous first partials and satisfy the Cauchy–Riemann equations throughout $U$, so [L3] makes $f'=p+iq$ holomorphic. [step 1.1, step 1.2, step 1.3, L3] ∎
