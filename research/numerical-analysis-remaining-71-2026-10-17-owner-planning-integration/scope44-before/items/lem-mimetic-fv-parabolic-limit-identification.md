---
id: lem-mimetic-fv-parabolic-limit-identification
kind: lemma
title: Conditional monotone finite-volume parabolic limit identification
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps: [def-pe12-gelfand-triple, def-pe12-monotone-diffusion-flux, lem-pe12-space-time-gradient-weak-compactness, lem-pe12-minty-identification, lem-pe12-evolution-energy-chain-rule, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice. It is used only through the PE12 weak-gradient compactness, Minty, and evolution-trace suppliers; the passage through the stated finite-volume weak identities uses no additional choice."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§1.2 and §4, PDF pp. 5–20: energy/compactness requirements and hybrid mimetic finite-volume formulations."
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^d$ be bounded and open with $C^1$ boundary, $d\ge1$, let $p>\max(1,2d/(d+2))$, put $p'=p/(p-1)$, $V=W_0^{1,p}(\Omega;\mathbb R)$ with gradient norm, $H=L^2(\Omega;\mathbb R)$, and $Q=(0,T)\times\Omega$ for $T>0$. Let $a(x,\xi)$ satisfy the Carathéodory, $p$-growth, coercivity, and monotonicity hypotheses of [[def-pe12-monotone-diffusion-flux]].

For each $m$, let $\mathcal P_m$ be a finite measurable partition of $\Omega$ into cells of positive measure and let a finite time partition carry cell values. Let $\bar U_m$ be the function constant on each resulting space-time cell. Suppose there are conforming reconstructions $w_m\in L^p(0,T;V)$ and a function $u\in L^p(0,T;V)\cap L^\infty(0,T;H)$ such that
$$ \bar U_m\to u\text{ strongly in }L^p(0,T;H),\qquad \|\bar U_m-w_m\|_{L^p(0,T;H)}\to0, $$
and $\sup_m\|w_m\|_{L^p(0,T;V)}<\infty$. Write $\xi_m=\nabla w_m$ and $q_m=a(x,\xi_m)$. Assume, along the same subsequence, $q_m\rightharpoonup q$ in $L^{p'}(Q;\mathbb R^d)$ and
$$ \limsup_{m\to\infty}\int_Qq_m\cdot\xi_m\le\int_Qq\cdot\nabla u. $$
Finally, assume $f\in L^{p'}(Q)$, $u_0\in H$, and the finite-volume weak identities have residuals $r_m(\varphi)\to0$ for every $\varphi\in C_c^\infty([0,T)\times\Omega)$:
$$ -\int_Q\bar U_m\,\partial_t\varphi+\int_Qq_m\cdot\nabla\varphi-\int_Qf\varphi-\int_\Omega u_0(x)\varphi(x,0)\,dx=r_m(\varphi). $$
Then $q=a(x,\nabla u)$ almost everywhere, and $u$ is a weak evolution solution of $u_t-\operatorname{div}(a(x,\nabla u))=f$ with initial trace $u(0)=u_0$, in the sense of [[def-pe12-monotone-diffusion-flux]]:
$$ -\int_Q u\,\partial_t\varphi+\int_Qa(x,\nabla u)\cdot\nabla\varphi=\int_Qf\varphi+\int_\Omega u_0(x)\varphi(x,0)\,dx $$
for every such test function. This is a conditional finite-volume limit-identification result; the reconstruction, residual, compactness, and energy hypotheses are not conclusions of the statement.

## Facts & Assumptions

**Given:** The Axiom of Choice; the domain, exponent, spaces and monotone flux; the finite-volume states and conforming reconstructions; their strong and weak convergence hypotheses; the energy limsup; and the residual weak identities.

[F1] [[def-pe12-gelfand-triple]]: $V=W_0^{1,p}(\Omega)$ embeds densely and continuously into $H=L^2(\Omega)$ with the stated real-space pairing.

[F2] [[def-pe12-monotone-diffusion-flux]]: outside one null set, $a(x,\cdot)$ is continuous and monotone, and $a(x,\xi)$ has the stated $p$-growth.

[F3] [[lem-pe12-space-time-gradient-weak-compactness]]: under the Axiom of Choice, a bounded sequence in $L^p(0,T;V)$ whose images converge strongly in $L^p(0,T;H)$ has a subsequence with weakly convergent space-time gradients, and the strong $H$ limit is the image of the weak $V$ limit.

[F4] [[lem-pe12-minty-identification]]: if $\xi_m\rightharpoonup\xi$ in $L^p$, $a(x,\xi_m)\rightharpoonup q$ in $L^{p'}$, and $\limsup\int a(x,\xi_m)\cdot\xi_m\le\int q\cdot\xi$, then $q=a(x,\xi)$ almost everywhere.

[F5] [[lem-pe12-evolution-energy-chain-rule]]: assuming AC, if $z\in L^p(0,T;V)\cap L^\infty(0,T;H)$ and $z'\in L^{p'}(0,T;V^*)$, then $z$ has a unique continuous $H$ representative on $[0,T]$.

[F6] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: assuming AC, a scalar $W^{1,1}(0,T)$ class has an absolutely continuous representative on $[0,T]$ whose increments are integrals of its weak derivative.

[A1] The Axiom of Choice is assumed for supplier conclusions [F3]–[F6].

[A2] The finite-volume state reconstruction and conforming reconstruction differ by a term tending to zero in $L^p(0,T;H)$; the discrete weak residual tends to zero on every stated test; and the flux-energy limsup holds.

[A3] The limit $u$ belongs to $L^\infty(0,T;H)$, as stated; this is needed together with the derived time derivative to invoke the PE12 continuous-trace result.

## Proof

1.1 The strong convergence $\bar U_m\to u$ and the reconstruction estimate in [A2] imply $w_m\to u$ strongly in $L^p(0,T;H)$. The sequence is bounded in $L^p(0,T;V)$, so [F3] gives, after subsequence extraction, $w_m\rightharpoonup u$ in $L^p(0,T;V)$ and $\xi_m=\nabla w_m\rightharpoonup\nabla u$ in $L^p(Q;\mathbb R^d)$. [A1, A2, F1, F3, given]

2.1 Fix $\varphi\in C_c^\infty([0,T)\times\Omega)$. Strong convergence of $\bar U_m$ gives $\int_Q\bar U_m\partial_t\varphi\to\int_Qu\partial_t\varphi$; weak convergence of $q_m$ gives $\int_Qq_m\cdot\nabla\varphi\to\int_Qq\cdot\nabla\varphi$. The source and initial terms are fixed, and [A2] gives $r_m(\varphi)\to0$. Passing to the limit in the discrete weak identity therefore yields $-\int_Qu\,\partial_t\varphi+\int_Qq\cdot\nabla\varphi=\int_Qf\varphi+\int_\Omega u_0\varphi(\cdot,0).$ [A2, step 1.1, given, algebra]

2.2 Step 1.1 gives $\xi_m\rightharpoonup\nabla u$ in $L^p$, the statement gives $q_m=a(x,\xi_m)\rightharpoonup q$ in $L^{p'}$, and the assumed energy limsup is exactly the remaining hypothesis of [F4]. Thus [F4] implies $q=a(x,\nabla u)$ almost everywhere. [A1, A2, F2, F4, step 1.1, given]

3.1 For $v\in C_c^\infty(\Omega)$ and $\theta\in C_c^\infty(0,T)$, use $\varphi(t,x)=\theta(t)v(x)$ in step 2.1. The weak identity shows in distributions that $u'=g$, where $\langle g(t),v\rangle=\int_\Omega f(t,x)v(x)\,dx-\int_\Omega q(t,x)\cdot\nabla v(x)\,dx$. By H\"older and the Poincar\'e norm equivalence in [F2], $\|g(t)\|_{V^*}\le C_P\|f(t)\|_{L^{p'}(\Omega)}+\|q(t)\|_{L^{p'}(\Omega)}$ for almost every $t$. Thus $g\in L^{p'}(0,T;V^*)$. The identity extends from smooth $v$ to every $v\in V$ by the defining density of $C_c^\infty(\Omega)$ in $W_0^{1,p}(\Omega)$ and the displayed bound, so it is the distributional derivative from [F1]. Hence $u\in W_p(0,T;V)$. [F1, F2, step 2.1, given, algebra]

4.1 By [A1], [A3], step 3.1, and the assumed $u\in L^p(0,T;V)$, the continuous-trace theorem [F5] gives a unique representative $u\in C([0,T];H)$. [A1, F5, A3, step 3.1, given]

5.1 Fix $v\in C_c^\infty(\Omega)$ and $\theta\in C_c^\infty([0,T))$. The scalar function $t\mapsto(u(t),v)_H$ is bounded on $(0,T)$ by [A3], and its distributional derivative $t\mapsto\langle u'(t),v\rangle$ lies in $L^1(0,T)$ by step 3.1 and finite $T$. Thus it belongs to $W^{1,1}(0,T)$, so [A1] and [F6] give an absolutely continuous representative and integration by parts on $[0,T]$. This representative agrees almost everywhere with the continuous scalar function from step 4.1; since both are continuous, they agree everywhere, including at $t=0$. Apply step 2.1 to $\varphi=\theta v$ and use $\langle u',v\rangle=\int fv-\int q\cdot\nabla v$ from step 3.1. The bulk terms cancel and leave $(u(0)-u_0,v)_H\theta(0)=0$. Choose $\theta(0)=1$. This holds for every smooth compactly supported $v$, which is dense in $H$; therefore $u(0)=u_0$ in $H$. [A1, A3, F6, step 2.1, step 3.1, step 4.1, given, algebra]

6.1 By step 3.1 and the definition of the induced operator in [F2], $u'+A(u)=f$ in $L^{p'}(0,T;V^*)$ after substituting $q=a(x,\nabla u)$ from step 2.2. Step 4.1 gives the required continuous $H$ representative and step 5.1 gives its initial trace. These are exactly the weak evolution solution conditions of [F2]. [F2, step 3.1, step 4.1, step 5.1, step 2.2, algebra] ∎

## Remarks

The conditional assumptions are explicit. In particular, the weak-gradient supplier [F3] requires conforming $W_0^{1,p}$ reconstructions, and [A3] supplies the $L^\infty(0,T;H)$ bound needed for the initial-trace result. This lemma does not establish that a particular hybrid finite-volume scheme supplies these assumptions or the required residual and energy limits.
