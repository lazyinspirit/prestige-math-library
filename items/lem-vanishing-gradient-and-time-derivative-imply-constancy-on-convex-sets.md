---
id: lem-vanishing-gradient-and-time-derivative-imply-constancy-on-convex-sets
kind: lemma
title: "Vanishing gradient and time derivative force constancy on convex sets"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-convex-subset-of-euclidean-space, def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-total-derivative-computes-directional-and-partial-derivatives, cor-zero-total-derivative-on-a-convex-open-set-is-constant, thm-continuous-partial-derivatives-imply-total-differentiability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed pp. 290-291: the step '$u_t=\\nabla u=0$ on $S_T$ ... since we can select $T$ arbitrarily' ends by constancy of $u$"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $U\subseteq\mathbb R^m$ be an open convex set
([[def-convex-subset-of-euclidean-space]]) and let $w\in C^1(U)$
([[def-ck-and-multi-index-notation-in-several-variables]]) with $Dw=0$ on $U$,
that is $\partial_iw=0$ on $U$ for every coordinate $i$
([[def-directional-and-partial-derivatives]]). Then $w$ is constant on $U$.

In particular, if $(x,t)\mapsto u(x,t)$ is $C^1$ on an open convex subset
$V$ of space-time $\mathbb R^{n+1}$ with $\partial_tu=0$ and
$D_xu=(\partial_0u,\ldots,\partial_{n-1}u)=0$ on $V$, then $u$ is constant on
$V$; this is the conclusion used when the energy density of a wave vanishes
identically on a cone or a ball and the displacement is recovered from
$u_t=Du=0$.

## Facts & Assumptions

**Given:** An open convex set $U\subseteq\mathbb R^m$ and a $C^1$ function $w:U\to\mathbb R$ whose total derivative vanishes on $U$; for the last sentence an open convex subset $V$ of space-time and a $C^1$ function $u$ on $V$ with $\partial_tu=0$ and all spatial partial derivatives zero.

[F1] If $f:U\to\mathbb R^n$ is totally differentiable at $a$, then $D_vf(a)$ exists for every $v$ and equals $Df(a)v$; in particular $\partial_jf(a)=Df(a)e_j$, and the matrix of $Df(a)$ is the Jacobian $Jf(a)$. ([[thm-total-derivative-computes-directional-and-partial-derivatives]])

[F2] For scalar-valued $f$ its gradient is $\nabla f(a)=(\partial_0f(a),\ldots,\partial_{m-1}f(a))$. ([[def-jacobian-matrix-and-gradient]])

[F3] If $U\subseteq\mathbb R^m$ is convex and open and $f:U\to\mathbb R^n$ is totally differentiable at every point with $Df(z)=0$ for every $z\in U$, then $f$ is constant on $U$. ([[cor-zero-total-derivative-on-a-convex-open-set-is-constant]])

[F4] A subset $U\subseteq\mathbb R^m$ is convex when $(1-t)x+ty\in U$ for all $x,y\in U$ and $t\in[0,1]$. ([[def-convex-subset-of-euclidean-space]])

[F5] Continuous partial derivatives imply total differentiability, with the Jacobian as its matrix. ([[thm-continuous-partial-derivatives-imply-total-differentiability]])

## Proof

1.1 The two forms of the hypothesis are equivalent: at every $a\in U$ the map $w$ is totally differentiable by its $C^1$ regularity and [F5], so by [F1] the Jacobian $Jw(a)$ is the matrix of $Dw(a)$ and its entries are exactly $\partial_iw(a)$, the coordinates of $\nabla w(a)$ [F2]; a linear map is zero exactly when its matrix (equivalently, all its partial derivatives) vanishes, so $Dw=0$ on $U$ if and only if $\partial_iw=0$ on $U$ for every $i$. [given, F1, F2, F5, algebra]

2.1 Constancy: if $Dw=0$ on the open convex $U$, then [F3] applied to $f=w$ gives that $w$ is constant on $U$; conversely if all partial derivatives of $w$ vanish, step 1.1 converts this to $Dw=0$ and the same conclusion follows, so the first claim holds under either form of the hypothesis. [step 1.1, F3, F4]

3.1 The space-time case: an open convex subset $V$ of $\mathbb R^{n+1}$ with its Euclidean coordinates is an instance of the first claim for $m=n+1$, and the hypothesis $\partial_tu=0$ together with $D_xu=0$ says precisely that every coordinate partial derivative of $u$ vanishes on $V$; by steps 1.1 and 2.1 the function $u$ is constant on $V$. [given, step 1.1, step 2.1] ∎ 