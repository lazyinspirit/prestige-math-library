---
id: lem-riemannian-gradient-vanishes-exactly-at-critical-points
kind: lemma
title: "The Riemannian gradient vanishes exactly at the critical points"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-riemannian-gradient-of-a-smooth-function, def-critical-point-and-critical-value-of-a-smooth-function]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

For a Riemannian metric $g$, a smooth $f:M\to\mathbb R$, and $x\in M$,
$\operatorname{grad}_g f(x)=0$ if and only if $x$ is a critical point of $f$.

## Facts & Assumptions

**Given:** A Riemannian metric $g$, a smooth function $f:M\to\mathbb R$, and $x\in M$.

[F1] The gradient is characterized by $g_x(\operatorname{grad}_g f(x),v)=df_x(v)$ for every $v\in T_xM$ ([[def-riemannian-gradient-of-a-smooth-function]]).

[F2] A point is critical exactly when its differential is the zero map ([[def-critical-point-and-critical-value-of-a-smooth-function]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{grad}_g f(x)=0$, then [F1] gives $df_x(v)=g_x(0,v)=0$ for every $v$, so $df_x=0$. [F1, given]

1.2 Conversely, if $df_x=0$, then [F1] gives $g_x(\operatorname{grad}_g f(x),v)=0$ for every $v$. Taking $v=\operatorname{grad}_g f(x)$ and using positive definiteness gives $\operatorname{grad}_g f(x)=0$. [F1, given]

2.1 By [F2], the two implications say exactly that $\operatorname{grad}_g f(x)=0$ if and only if $x$ is critical. [F2, step 1.1, step 1.2] ∎
