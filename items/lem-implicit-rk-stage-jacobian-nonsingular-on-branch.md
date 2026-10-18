---
id: lem-implicit-rk-stage-jacobian-nonsingular-on-branch
kind: lemma
title: A contractive implicit Runge-Kutta stage branch has a nonsingular residual Jacobian
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-implicit-runge-kutta-stage-equations, lem-small-step-implicit-rk-branch-and-residual-error, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, thm-rank-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.3"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
    - title: "John C. Butcher, Implicit Runge-Kutta Methods, tutorial, §§1–2"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
---

## Statement

Use the implicit Runge–Kutta residual $G(Y)=Y-\mathbf1\otimes y-h(A\otimes I_d)F(Y)$ from [[def-implicit-runge-kutta-stage-equations]], where $y$ is the input state in that definition. Let $\mathcal B=\{Y:\|Y-\mathbf1\otimes y\|_{\infty,2}\le R\}$, with $R>0$, be a closed product ball in the admissible stage set. Suppose $F$ is $C^1$ on a convex open neighborhood of $\mathcal B$, and constants $M,L\ge0$ satisfy
$$\|F(Y)\|_{\infty,2}\le M,\qquad \|D_YF(Y)Z\|_{\infty,2}\le L\|Z\|_{\infty,2}\quad(Y\in\mathcal B).$$
Assume $h\|A\|_\infty M\le R$ and $q:=h\|A\|_\infty L<1$. Then [[lem-small-step-implicit-rk-branch-and-residual-error]] gives a unique stage root in $\mathcal B$, and $D_YG(Y)$ is invertible at every point of $\mathcal B$. This lemma supplies nonsingularity for implicit differentiation.

## Facts & Assumptions

**Given:** The finite-dimensional stage space, implicit Runge–Kutta residual, selected invariant ball, $C^1$ map $F$, derivative bound $L$ on the ball, and $q<1$.

[F1] The stage residual is $G(Y)=Y-\mathbf1\otimes y-h(A\otimes I_d)F(Y)$, where $y$ is the input state; a selected stage root satisfies $G(Y)=0$ ([[def-implicit-runge-kutta-stage-equations]]).

[F2] On a closed product ball of radius $R$ centered at $c$, bounds $\|F\|_{\infty,2}\le M$ and $\|F(Y)-F(Z)\|_{\infty,2}\le L\|Y-Z\|_{\infty,2}$ with $h\|A\|_\infty M\le R$ and $h\|A\|_\infty L<1$ give a unique root ([[lem-small-step-implicit-rk-branch-and-residual-error]]).

[F3] A vector-valued function continuous on $[0,1]$, differentiable on $(0,1)$, and with Euclidean derivative norm at most $M$ has endpoint difference at most $M$ ([[thm-mean-value-inequality]]). The chain rule differentiates a $C^1$ map along a segment ([[thm-chain-rule-for-total-derivatives]]).

[F4] For a linear map on a finite-dimensional vector space, $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

## Proof

1.1 Let $Y,W\in\mathcal B$. Its convexity puts $Y+t(W-Y)$ in $\mathcal B$ for $0\le t\le1$. For each block $i$, the curve $\gamma_i(t)=F_i(Y+t(W-Y))$ is continuous on $[0,1]$ and differentiable inside because $F$ is $C^1$ on an open neighborhood. Its derivative obeys $$\|\gamma_i'(t)\|_2\le\|D_YF(Y+t(W-Y))(W-Y)\|_{\infty,2}\le L\|W-Y\|_{\infty,2}.$$ Apply [F3] to each block and take the maximum to obtain $\|F(W)-F(Y)\|_{\infty,2}\le L\|W-Y\|_{\infty,2}$. The fixed-point map $\Phi(Y)=\mathbf1\otimes y+h(A\otimes I_d)F(Y)$ satisfies $\|\Phi(Y)-\mathbf1\otimes y\|_{\infty,2}\le h\|A\|_\infty M\le R$, so it maps $\mathcal B$ into itself. Thus [F2] supplies the unique stage root in $\mathcal B$. [given, F2, F3]

1.2 Differentiating [F1] with respect to $Y$ gives $D_YG=I-h(A\otimes I_d)D_YF$. If $D_YG\,Z=0$, the block row-sum norm and the derivative bound imply $$\|Z\|_{\infty,2}\le h\|A\|_\infty L\|Z\|_{\infty,2}=q\|Z\|_{\infty,2}.$$ Since $q<1$, this forces $Z=0$; thus the square finite-dimensional map $D_YG$ has trivial kernel. [F1, given, algebra]

2.1 By [F4], a linear map on the stage space has rank equal to its dimension when its kernel has dimension zero. Therefore $D_YG$ is onto as well as one-to-one, hence invertible. This holds at every point of the prescribed branch ball. [F4, step 1.2] ∎
