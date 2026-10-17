---
id: ex-elliptic-diffusion-coefficient-sensitivity
kind: example
title: A one-dimensional elliptic diffusion coefficient has the adjoint gradient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [thm-elliptic-adjoint-reduced-gradient, def-parameterized-elliptic-variational-problem, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, lem-two-cell-hat-and-quadratic-functions-lie-in-h10, lem-one-dimensional-zero-boundary-poincare, thm-ftc-second-part, thm-algebra-of-derivatives, thm-holder-inequality-for-integrals, def-countable-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the Lax--Milgram and adjoint variational suppliers used by the gradient theorem."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §§1.1–1.2 and Example 3.39"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael B. Giles and Niles A. Pierce, An Introduction to the Adjoint Approach to Design, §§2.4–3"
      url: "https://www.its.caltech.edu/~niles/refs/giles00.pdf"
---

## Example

Let $V=H_0^1(0,1)$ with its standard $H^1$ norm, let $\Theta=(-1,\infty)$, and define $a_\theta(u,v)=(1+\theta)\int_0^1u'v'\,dx$ and $\ell(v)=\int_0^1v\,dx$. Take $J(u)=\int_0^1u\,dx$. On a neighborhood of each fixed $\theta>-1$, the form is uniformly coercive in the $H^1$ norm, so this is a parameterized coercive elliptic problem in the sense of [[def-parameterized-elliptic-variational-problem]].

## Facts & Assumptions

**Given:** The one-dimensional Sobolev space, the displayed bilinear form/load, and the reduced-gradient formula.

[F1] For a uniformly coercive parameterized elliptic variational state and $C^1$ objective, the adjoint formula gives $D_\theta j=D_\theta J+D_\theta\ell(p)-D_\theta a(u,p)$ ([[thm-elliptic-adjoint-reduced-gradient]]).

[F2] The elliptic variational definition treats states as weak solutions of $a_\theta(u,v)=\ell_\theta(v)$ ([[def-parameterized-elliptic-variational-problem]]).

[F3] The quadratic $w(x)=x(1-x)/2$ belongs to $H^1_0(0,1)$ ([[lem-two-cell-hat-and-quadratic-functions-lie-in-h10]]).

[F4] For $v\in H^1_0(0,1)$, $\|v\|_{H^1}\le\sqrt2\|v'\|_{L^2}$ ([[lem-one-dimensional-zero-boundary-poincare]]).

[F5] $H^1_0(0,1)$ is the closure of $C_c^\infty(0,1)$ in the $H^1$ norm ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] The integral of the derivative of a C1 scalar function equals its endpoint increment ([[thm-ftc-second-part]]).

[F7] Differentiable products obey the product rule ([[thm-algebra-of-derivatives]]).

[F8] The integral pairing is bounded by the product of L2 norms ([[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice is inherited from the state, adjoint, and H0 membership suppliers ([[def-countable-choice]]).

## Verification

1.1 Put $w(x)=x(1-x)/2$. Direct differentiation gives $w''=-1$, $w(0)=w(1)=0$, and [F3] gives $w\in V$. For each $v\in V$ and $\varepsilon>0$, [F5] supplies $v_\varepsilon\in C_c^\infty(0,1)$ with $\|v-v_\varepsilon\|_{H^1}<\varepsilon$. By the product rule [F7], $(w'v_\varepsilon)'=w''v_\varepsilon+w'v_\varepsilon'$; since $v_\varepsilon$ vanishes at both endpoints, [F6] gives $\int_0^1w'v_\varepsilon'=\int_0^1v_\varepsilon$. By [F8], the difference between the two sides with $v$ in place of $v_\varepsilon$ is at most $(\|w'\|_{L^2}+1)\varepsilon$, so the weak identity $\int_0^1w'v'=\int_0^1v$ follows as $\varepsilon\downarrow0$. Also, [F4] gives $a_\theta(v,v)\ge(1+\theta)\|v\|_{H^1}^2/2$; on a neighborhood of each $\theta>-1$ this is a uniform coercivity bound. Hence $u_\theta=w/(1+\theta)$ solves the state equation and is unique. Finally $\int_0^1w=1/12$, so $j(\theta)=1/(12(1+\theta))$. [A1, F2, F3, F4, F5, F6, F7, F8, given, algebra]

2.1 The adjoint equation is $a_\theta(v,p)=D_uJ[v]=\int_0^1v$ for all $v\in V$, so symmetry of $a_\theta$ and uniqueness give $p=u_\theta$. The direct parameter derivatives of $J$ and $\ell$ vanish. For the scalar parameter direction $1$, $D_\theta a[1](u,p)=\int_0^1u'p'\,dx=(1+\theta)^{-2}\int_0^1(w')^2dx$. Direct integration gives $\int_0^1(w')^2dx=\frac14\int_0^1(1-2x)^2dx=1/12$, hence $D_\theta a[1](u,p)=1/(12(1+\theta)^2)$. [A1, F1, F2, F3, step 1.1, algebra]

3.1 Formula [F1] therefore gives $j'(\theta)=-1/(12(1+\theta)^2)$, equal to the derivative of the explicit reduced objective in step 1.1. [F1, step 1.1, step 2.1, algebra] ∎ 