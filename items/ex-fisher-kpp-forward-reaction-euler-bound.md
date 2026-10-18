---
id: ex-fisher-kpp-forward-reaction-euler-bound
kind: example
title: A forward-Euler Fisher–KPP reaction step preserves its interval under a sharp simple bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
aliases: []
deps:
  - def-fv-tpfa-no-flux-diffusion-specialization
  - alg-euler-reaction-lie-diffusion-step
  - thm-euler-lie-step-preserves-invariant-rectangle-and-mass
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the bound follows from scalar algebra and the exact diffusion invariant result.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Willem Hundsdorfer, Numerical Solution of Advection-Diffusion-Reaction Equations, lecture notes for Ph.D. course, 1996
      url: https://ir.cwi.nl/pub/4797/4797D.pdf
      locator: "§6, printed pp. 39–40: forward-Euler positivity bounds for reaction updates; the scalar interval calculation is verified here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $r>0$ and use the scalar Fisher–KPP reaction $F(u)=ru(1-u)$ on $R=[0,1]$, followed by exact no-flux TPFA diffusion with any diffusivity $d\ge0$. For a nonnegative step $\tau$, the forward-Euler reaction map preserves $[0,1]$ for every starting value $u\in[0,1]$ exactly when $0\le\tau r\le1$; after that step, exact no-flux TPFA diffusion also preserves the interval. For $\tau>0$, on any finite grid with positive cell weights, the reaction strictly increases the discrete mass if at least one cell value lies in $(0,1)$ and leaves it unchanged if every cell value is a reaction equilibrium $0$ or $1$. At $\tau=0$ the reaction map is the identity. This example makes no mass-conservation claim.

## Facts & Assumptions

**Given:** The scalar reaction and rectangle in the Statement, the no-flux TPFA diffusion flow, and the Euler Lie update theorem.

[F1] [[def-fv-tpfa-no-flux-diffusion-specialization]]: the no-flux TPFA diffusion generator is a finite conservative diffusion operator with positive cell weights.

[F2] [[alg-euler-reaction-lie-diffusion-step]]: the Euler Lie update applies $u\mapsto u+\tau F(u)$ at each cell before applying exact diffusion.

[F3] [[thm-euler-lie-step-preserves-invariant-rectangle-and-mass]]: when the Euler reaction map preserves $R$ under its step restriction, exact TPFA diffusion preserves the same component interval.

[A1] The reaction equation is the scalar Fisher–KPP field $F(u)=ru(1-u)$ with $r>0$.

## Proof

1.1 On $[0,1]$, $F(0)=F(1)=0$, so the field points inward at both endpoints. Also $|F'(u)|=|r(1-2u)|\le r$, giving the coordinate Lipschitz constant $L=r$ and Euler restriction $\tau\le1/r$. [F1, A1, algebra]

2.1 For $u\in[0,1]$, set $\alpha=\tau r\in[0,1]$. The Euler value is $u^+=u+\alpha u(1-u)\ge0$, while $ 1-u^+=(1-u)(1-\alpha u)\ge0 $ because both factors are nonnegative. Thus the reaction step preserves $[0,1]$. [A1, step 1.1, algebra]

3.1 If $\alpha=\tau r>1$, choose $u$ with $1/\alpha<u<1$. Then $1-u^+=(1-u)(1-\alpha u)<0$, so the Euler map leaves $[0,1]$. Together with step 2.1 this proves the stated necessary-and-sufficient bound for the reaction map. [A1, step 2.1, choose, algebra]

4.1 The reaction map satisfies the hypothesis of [F3] by step 2.1; applying [F2] and then [F3] proves that the full TPFA Lie update also remains in $[0,1]$. For a grid state $U=(u_i)_i$ with positive weights $m_i$, its Euler reaction mass increment is $\sum_i m_i\tau r u_i(1-u_i)$. This is strictly positive for $\tau>0$ exactly when some $u_i\in(0,1)$, and is zero when every $u_i\in\{0,1\}$; for $\tau=0$ it is zero for every state. Thus the mass claim in the Statement holds, and no mass-conservation claim is made. [F1, F2, F3, step 2.1, algebra] ∎
