---
id: ex-burgers-rarefaction-riemann-solution
kind: example
title: The Burgers rarefaction Riemann solution
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
deps: [def-self-similar-riemann-problem, thm-riemann-solver-for-strictly-convex-scalar-flux, def-kruzhkov-entropy-solution, thm-chain-rule, def-countable-choice]
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§6.1, (6.4), pp. 50–52"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.1, pp. 350–351"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the analytic prerequisites used below.

Let $f(u)=\tfrac12u^2$ and $u_L<u_R$. Then the entropy solution of the Riemann
problem ([[def-self-similar-riemann-problem]]) is the centred rarefaction
$$u(t,x)=\begin{cases}u_L,&x\le u_Lt,\\[2pt] x/t,&u_Lt<x<u_Rt,\\[2pt] u_R,&x\ge u_Rt.\end{cases}$$
The middle branch satisfies $u_t+uu_x=0$, the outer branches are constant, and
the values match continuously across the rays $x=u_Lt$ and $x=u_Rt$. For every
$t>0$ the profile is locally Lipschitz in $(t,x)$ (on the fan $u_x=1/t$); thus
the chain rule gives zero distributional production for every convex entropy
pair on $\mathbb R\times(0,\infty)$. The solution attains the Riemann data in
the strong local $L^1$ sense as $t\downarrow0$. For $u_L=0$, $u_R=1$, the fan
is $u=x/t$ on $0<x<t$
([[thm-riemann-solver-for-strictly-convex-scalar-flux]],
[[def-kruzhkov-entropy-solution]]).

## Facts & Assumptions

**Given:** Countable Choice, the flux $f(u)=\tfrac12u^2$, states $u_L<u_R$, the centred rarefaction profile $u$ of the statement, and a test function $\varphi\in C_c^\infty(\Pi_T)$.

[F1] The strictly convex Riemann solver: for $f\in C^2$ strictly convex with $u_L<u_R$, the unique Kruzhkov entropy solution of the Riemann problem is the centred rarefaction $u_L$ for $x/t\le f'(u_L)$, $(f')^{-1}(x/t)$ for $f'(u_L)<x/t<f'(u_R)$, and $u_R$ for $x/t\ge f'(u_R)$; it satisfies the weak conservation law, all Kruzhkov entropy inequalities and the strong local $L^1$ initial trace ([[thm-riemann-solver-for-strictly-convex-scalar-flux]], [[def-kruzhkov-entropy-solution]], [[def-self-similar-riemann-problem]]).

[F2] For $f(u)=\tfrac12u^2$ one has $f'(u)=u$ and $f''\equiv1>0$, so $f$ is strictly convex with $(f')^{-1}(\xi)=\xi$ for all $\xi$ (directly, the Jensen gap for $a,b$ is $\lambda(1-\lambda)(a-b)^2/2$, positive for $a\ne b$ and $0<\lambda<1$).

[F3] Calculus on the self-similar profile: the chain rule computes $u_t=-\xi U'(\xi)/t$ and $u_x=U'(\xi)/t$ for $u(t,x)=U(x/t)$; a continuous piecewise $C^1$ profile with equal traces across an interface produces no interface term in the weak or entropy residual, since the traces of $u$, $f(u)$, and of $\eta(u)$, $q(u)$ for continuous pairs coincide from both sides ([[thm-chain-rule]]).

## Proof

**Proof technique:** direct.

1.1 **Specialisation of the solver.** By [F2], $f'(u)=u$ and $(f')^{-1}(\xi)=\xi$; the three branches of the strictly convex Riemann solver [F1] read $u_L$ for $x/t\le u_L$, $x/t$ for $u_L<x/t<u_R$, and $u_R$ for $x/t\ge u_R$, which is exactly the displayed centred rarefaction. Hence by [F1] it is the unique Kruzhkov entropy solution of the Riemann problem, satisfies the weak conservation law, all Kruzhkov entropy inequalities, and attains the Riemann datum in the strong local $L^1$ sense. [F1, F2]


1.2 **Direct check of the middle branch and the interfaces.** On the fan, $u(t,x)=x/t$, so $u_t=-x/t^2$, $u_x=1/t$ and $u_t+uu_x=-x/t^2+(x/t)(1/t)=0$ by the chain rule [F3]; on the two outer regions $u$ is constant, so both derivatives vanish there. At $x=u_Lt$ the three-branch formula gives $u_L$ from both the first and middle branches, and at $x=u_Rt$ it gives $u_R$ from both the middle and last branches; the traces of $u$ and of $f(u)$ therefore agree across the rays, so by [F3] no interface terms arise in the weak residual and the profile is a distributional weak solution. [F2, F3]


2.1 **Entropy production and regularity.** For any convex $C^2$ pair $(\eta,q)$ with $q'=\eta'f'$, the chain rule gives $\partial_t\eta(u)+\partial_xq(u)=\eta'(u)\bigl(u_t+f'(u)u_x\bigr)=\eta'(u)\bigl(u_t+uu_x\bigr)$ on each smooth branch; this vanishes on the fan by step 1.2 and on the outer branches because $u$ is constant. Across the rays the traces of $\eta(u)$ and $q(u)$ agree because $u$ is continuous there, so no interface measure arises: the entropy production is identically $0$ on $\mathbb R\times(0,\infty)$ for every convex $C^2$ pair. (For the non-smooth Kruzhkov pairs, the entropy inequalities are supplied by the solver [F1].) On the fan $u_x=1/t$, so the profile is locally Lipschitz on every compact subset of the open strip $t>0$; no uniform Lipschitz bound as $t\downarrow0$ is claimed. [F1, F3, step 1.1]


3.1 **Initial trace and the special case.** The discrepancy from the initial step is supported between $\min\{0,u_L\}t$ and $\max\{0,u_R\}t$, and is bounded by $u_R-u_L$. Thus $\int_K|u(t)-u_0|\le(u_R-u_L)(\max\{0,u_R\}-\min\{0,u_L\})t\to0$. When $u_L=0$, $u_R=1$, the fan is $x/t$ on $0<x<t$, with outer states $0$ and $1$. For nonsmooth convex pairs, smooth convex approximation and uniform convergence of the integral fluxes pass the zero-production identity of step 2.1 to the limit; thus production is zero, not merely nonpositive. [F1, F3, step 1.1, step 2.1] ∎
