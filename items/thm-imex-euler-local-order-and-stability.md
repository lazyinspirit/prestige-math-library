---
id: thm-imex-euler-local-order-and-stability
kind: theorem
title: "IMEX Euler has a first-order local defect and a one-step stability bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-imex-euler-step
  - lem-imex-euler-local-branch
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-continuous-implies-integrable
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, first-order additive equations and implicit branch equation, PDF pp. 2–4."
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§2.1, Taylor-based order conditions for the coupled explicit/implicit equations, PDF pp. 2–3."
---

## Statement

Let $d\ge1$ and let $F=a+b$ on an open set $U\subseteq\mathbb R^d$ as in [[def-additive-ode-and-partition]]. On a common compact convex tube $\mathcal T\subset U$, suppose $a,b$ are bounded and Lipschitz with constants $M_a,M_b,L_a,L_b$. For every $u\in\mathcal T$ and sufficiently small $h>0$, assume there is a closed ball $\overline B(c_u,R_u)\subset\mathcal T$ with $R_u>0$, centered at $c_u:=u+ha(u)$, and with $hM_b\le R_u$; the branch lemma then gives a unique root $\Psi_h(u)=c_u+hb(\Psi_h(u))$ in that ball when $hL_b\le1/2$. Require that the exact solution segment from each reference state $y(t)\in\mathcal T$ stays in $\mathcal T$ and that its endpoint $y(t+h)$ lies in $\overline B(c_{y(t)},R_{y(t)})$. Then, uniformly on the tube,
$$\|\Psi_h(y(t))-y(t+h)\|_2\le C h^2,\qquad \|\Psi_h(u)-\Psi_h(v)\|_2\le(1+Lh)\|u-v\|_2,$$
where one may take $L=2(L_a+L_b)$ and $C$ depends only on the stated tube bounds and branch margins. The local defect is therefore $O(h^2)$, and the exact-root method is first order locally.

## Facts & Assumptions

**Given:** The additive IVP, a common tube with uniform field bounds, the positive-radius branch balls and branch hypotheses for every starting state in that tube, exact path segments and endpoints admitted in their branch balls, and $hL_b\le1/2$.

[F1] [[alg-imex-euler-step]]: the exact update is $Y=y+ha(y)+hb(Y)$.

[F2] [[lem-imex-euler-local-branch]]: if $\|b\|\le M_b$, $b$ is $L_b$-Lipschitz on the selected ball, $hM_b\le R$, and $hL_b<1$, the exact branch exists uniquely and satisfies the residual-to-root bound.

[F3] Along each exact solution segment in $\mathcal T$, $s\mapsto F(y(s))$ is continuous because $F$ is Lipschitz on $\mathcal T$ and $y$ is continuous. Each coordinate is therefore integrable on the compact segment ([[thm-continuous-implies-integrable]]), so the vector derivative is integrable; the vector-valued fundamental theorem of calculus ([[cor-vector-valued-ftc-and-lipschitz-bound]]) gives $y(t+s)-y(t)=\int_0^sF(y(t+r))\,dr$.

[F4] [[thm-norm-inequality-for-the-vector-valued-integral]]: for an integrable vector function on an increasing interval, $\|\int f\|_2\le\int\|f\|_2$.

[A1] $F=a+b$ is bounded by $M_F:=M_a+M_b$ and Lipschitz with $L_F:=L_a+L_b$ on the tube; the exact path and its endpoints remain in the stated convex tube, and each selected root belongs to its stated branch ball in that tube.

## Proof

1.1 By [F3], for $0\le s\le h$, $\phi_s-y=\int_0^sF(\phi_r)\,dr$, so [F4] and [A1] give $\|\phi_s-y\|_2\le M_Fs$. Subtracting $hF(y)$ from the integral at $h$ and applying [F4] again yields $\|\phi_h-y-hF(y)\|_2\le\int_0^hL_F\|\phi_s-y\|_2ds\le\frac12L_FM_Fh^2$. [A1, F3, F4, algebra]

2.1 Set $c=y+ha(y)$ and evaluate the implicit residual of the exact endpoint: $r_\phi:=\phi_h-c-hb(\phi_h)=(\phi_h-y-hF(y))-h(b(\phi_h)-b(y))$. By [A1] and step 1.1, $\|r_\phi\|_2\le M_F(\frac12L_F+L_b)h^2$. The exact endpoint and the branch root lie in the same admitted branch ball, so [F2] gives $\|\Psi_h(y)-\phi_h\|_2\le2M_F(\frac12L_F+L_b)h^2$. [A1, F1, F2, step 1.1, algebra]

3.1 For two inputs $u,v$ with selected roots $Y_u,Y_v$, subtracting their equations in [F1] and using the Lipschitz bounds gives $(1-hL_b)\|Y_u-Y_v\|_2\le(1+hL_a)\|u-v\|_2$. Since $hL_b\le1/2$, $(1+hL_a)/(1-hL_b)=1+h(L_a+L_b)/(1-hL_b)\le1+2(L_a+L_b)h$. This is the stated one-step stability bound. [A1, F1, algebra] ∎

