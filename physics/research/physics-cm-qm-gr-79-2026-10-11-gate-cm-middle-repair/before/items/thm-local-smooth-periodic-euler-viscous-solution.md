---
id: thm-local-smooth-periodic-euler-viscous-solution
kind: theorem
title: "Local smooth solutions of the periodic incompressible Euler and constant-viscosity equations on $\\mathbb T^3$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-cm-lattice-shell-count-and-weight-sums, lem-cm-integral-and-ftc-for-continuous-normed-space-curves, lem-fourier-lattice-sobolev-embedding, lem-discrete-young-and-sobolev-product, lem-tame-transport-commutator, lem-fluid-galerkin-coefficient-ivp, lem-fluid-energy-common-lifespan, lem-high-sobolev-norms-share-base-lifespan, lem-fourier-tail-diagonal-compact-convergence, lem-cm-strong-solution-smoothness-bootstrap, def-countable-choice]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-cm-lattice-shell-count-and-weight-sums: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  lem-tame-transport-commutator: mathematical-premise
  lem-fluid-galerkin-coefficient-ivp: mathematical-premise
  lem-fluid-energy-common-lifespan: mathematical-premise
  lem-high-sobolev-norms-share-base-lifespan: mathematical-premise
  lem-fourier-tail-diagonal-compact-convergence: mathematical-premise
  lem-cm-strong-solution-smoothness-bootstrap: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Theorem 3.4 (local-in-time existence of solutions to the Euler and Navier-Stokes equations, with T ≤ 1/(c_m||v_0||_m) for m ≥ [N/2]+2), Theorem 3.5 (continuity in the high norm) and Corollary 3.2 (maximal time of existence)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Theorem 4.14 and Theorem 4.16 (existence of strong solutions and higher regularity for the periodic 3D Euler and Navier-Stokes equations)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $s\ge4$ be an integer, let $\nu\ge0$, and let $u_0\in H^s_\sigma(\mathbb T^3;\mathbb R^3)\cap C^\infty(\mathbb T^3;\mathbb R^3)$ be a smooth divergence-free field (so that $\|u_0\|_{H^m}<+\infty$ for every $m$). Let $Y_0:=\|u_0\|_{H^s}$, let $C_s$ be the commutator constant of [[lem-tame-transport-commutator]], and set
$$T:=\begin{cases}(2C_sY_0)^{-1},&Y_0>0,\\ 1,&Y_0=0.\end{cases}$$
Then there exists a field $u\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$ such that:

1. $u(0,\cdot)=u_0$; for every real $m\ge s$ the identity
$$\partial_tu+P\bigl((u\cdot\nabla)u\bigr)=\nu\Delta u$$
holds in $C([0,T],H^{m-2})$ (hence pointwise on the strip after the smoothness conclusion), where $P$ is the Leray projection of [[def-periodic-vector-sobolev-space-and-leray-projection]]; the identities $\operatorname{div}u=0$ and $\int_{\mathbb T^3}u(t,x)\,dx=\int_{\mathbb T^3}u_0(x)\,dx$ hold for all $t$;
2. for every real $m\ge s$ the uniform bound $\sup_{0\le t\le T}\|u(t)\|_{H^m}\le B_m:=\|u_0\|_{H^m}e^{4C_mY_0T}$ holds, where $C_m$ is the commutator constant of order $m$;
3. if $Y_0=0$ then $u_0=0$ and $u\equiv0$. The existence time $T$ depends only on the single number $Y_0=\|u_0\|_{H^s}$ (and on $s$), not on the finer profile of $u_0$; the case $\nu=0$ is the periodic incompressible Euler model and $\nu>0$ the constant-viscosity Navier-Stokes model.

## Facts & Assumptions

**Given:** The smooth divergence-free datum $u_0$, the integer $s\ge4$, the viscosity $\nu\ge0$, the time $T$ and the constants $B_m,B_m'$ of [[lem-high-sobolev-norms-share-base-lifespan]].

[F1] For each $N$ the Galerkin approximation $u_N:[0,T]\to X_N$ with $u_N(0)=P_Nu_0$ is the unique maximal solution of $u_N'=-P_NP((u_N\cdot\nabla)u_N)+\nu\Delta u_N$ and exists on $[0,T]$ with $\sup_{[0,T]}\|u_N\|_{H^m}\le B_m$ for every $m\ge s$ and $\sup_{[0,T]}\|u_N'\|_{H^{m-2}}\le B_m'$ for every $m>7/2$ ([[lem-fluid-galerkin-coefficient-ivp]], [[lem-fluid-energy-common-lifespan]], [[lem-high-sobolev-norms-share-base-lifespan]]).

[F2] The diagonal extraction of [[lem-fourier-tail-diagonal-compact-convergence]] applies to the sequence $(u_N)$ with the bounds $B_m,B_m'$: there are a subsequence $(N_j)$ and $u\in\bigcap_{m\ge s}C([0,T],H^m)$ with $u_{N_j}\to u$ in $C([0,T],H^{m-1})$ for every $m\ge s+1$, $\sup_{[0,T]}\|u\|_{H^m}\le B_m$, $u$ real and divergence-free, and $u(0)=\lim_jP_{N_j}u_0=u_0$ (the last equality from the truncation tail bound $\|P_Nu_0-u_0\|_{H^m}\le(2\pi(N+1))^{-1}\|u_0\|_{H^{m+1}}$ of [[lem-fluid-galerkin-coefficient-ivp]], claim 4).

[F3] Product bounds: for $p>3/2$, $\|fg\|_{H^p}\le C_p\|f\|_{H^p}\|g\|_{H^p}$ and $\|(f\cdot\nabla)g\|_{H^p}\le3C_p\|f\|_{H^p}\|g\|_{H^{p+1}}$ ([[lem-discrete-young-and-sobolev-product]], claims 2 and 3).

[F4] $P$ and the truncations $P_N$ commute with $\Delta$ and are bounded by $1$; $\|(P_N-P)z\|_{H^r}\le(2\pi(N+1))^{-1}\|z\|_{H^{r+1}}$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[lem-fluid-galerkin-coefficient-ivp]], claim 4).

[F5] Riemann integration and the fundamental theorem for continuous curves in the complete space $H^r$: for continuous $G:[0,T]\to H^r$ the curve $t\mapsto\int_0^tG$ is differentiable with derivative $G$, and coefficient functionals commute with the integral ([[lem-cm-integral-and-ftc-for-continuous-normed-space-curves]]).

[F6] If $u\in C([0,T],H^p)$ for every $p$, satisfies $u'=\nu\Delta u-P((u\cdot\nabla)u)$ in $H^p$ for every $p$ and is divergence-free, then $u\in C^\infty([0,T]\times\mathbb T^3)$ ([[lem-cm-strong-solution-smoothness-bootstrap]]).

## Proof


**Proof technique:** direct; take the Galerkin approximations on the common lifespan, extract a subsequence converging in every $H^{m-1}$, pass to the limit in the integrated equation, and upgrade regularity with the strong-solution bootstrap.

**Given:** The data $u_0,\nu,s,T$ and the facts [F1]-[F6].

1.1 By [F1] each Galerkin approximation $u_N$ is defined on $[0,T]$ and bounded by $B_m$ in $H^m$ and by $B_m'$ in $H^{m-2}$ for every $m\ge s$; by [F2] there is a subsequence $(N_j)$ and $u\in\bigcap_{m\ge s}C([0,T],H^m)$ with $u_{N_j}\to u$ in $C([0,T],H^{m-1})$ for every $m\ge s+1$, $\sup_{[0,T]}\|u(t)\|_{H^m}\le B_m$, and $u(0)=u_0$. [F1, F2]

2.1 Fix $m\ge s+1$. Since $(u_{N_j}\cdot\nabla)u_{N_j}-(u\cdot\nabla)u=(u_{N_j}-u)\cdot\nabla u_{N_j}+u\cdot\nabla(u_{N_j}-u)$, [F3] gives $\|(u_{N_j}\cdot\nabla)u_{N_j}-(u\cdot\nabla)u\|_{H^{m-2}}\le3C_{m-2}\bigl(\|u_{N_j}-u\|_{H^{m-2}}\|u_{N_j}\|_{H^{m-1}}+\|u\|_{H^{m-2}}\|u_{N_j}-u\|_{H^{m-1}}\bigr)\to0$ uniformly in $t$. Moreover $P_{N_j}P((u_{N_j}\cdot\nabla)u_{N_j})\to P((u\cdot\nabla)u)$ in $C([0,T],H^{m-2})$: the difference is $(P_{N_j}-P)P((u_{N_j}\cdot\nabla)u_{N_j})+P\bigl(P((u_{N_j}\cdot\nabla)u_{N_j})-P((u\cdot\nabla)u)\bigr)$, whose first term is bounded by $(2\pi(N_j+1))^{-1}\|P((u_{N_j}\cdot\nabla)u_{N_j})\|_{H^{m-1}}\le(2\pi(N_j+1))^{-1}3C_{m-1}B_{m-1}^2$ by [F4] and the second tends to $0$ by the previous estimate. Hence $F_{N_j}(u_{N_j})\to\nu\Delta u-P((u\cdot\nabla)u)=:G$ in $C([0,T],H^{m-2})$. [step 1.1, F3, F4]

3.1 Each Galerkin solution satisfies the integral identity $u_{N_j}(t)=P_{N_j}u_0+\int_0^tF_{N_j}(u_{N_j})(s)\,ds$ in $H^{m-2}$, because its $H^{m-2}$-derivative is $F_{N_j}(u_{N_j})$ and [F5] applies. Passing to the limit coefficientwise (justified by the uniform convergence of step 2.1 and $P_{N_j}u_0\to u_0$ of [F2], together with the continuity of coefficient functionals and [F5]) gives $u(t)=u_0+\int_0^tG(s)\,ds$ in $H^{m-2}$; by [F5] again, $t\mapsto u(t)$ is differentiable in $H^{m-2}$ with $u'(t)=G(t)$, i.e. $u'=\nu\Delta u-P((u\cdot\nabla)u)$ holds in $C([0,T],H^{m-2})$; since $m\ge s+1$ was arbitrary, it holds for every real $m\ge s$. [step 1.1, step 2.1, F5]

4.1 The curve satisfies the hypotheses of [F6]: for every real $p$ it is continuous and differentiable into $H^p$ (take an integer $m\ge p$; continuity in $H^p$ follows from continuity in $H^m$ and $\|v\|_{H^p}\le\|v\|_{H^m}$, and the identity $u'=\nu\Delta u-P((u\cdot\nabla)u)$ holds in $H^m$ hence in $H^p$), it is divergence-free and real by [F2]. Hence $u\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$ and the differentiated identities hold. [step 3.1, F6]

5.1 Collecting: $u(0)=u_0$ by [F2]; the equation holds in every $H^{m-2}$, $m\ge s$, by step 3.1, hence pointwise after step 4.1; the divergence-free condition and the bound $\sup_{[0,T]}\|u\|_{H^m}\le B_m$ hold by [F2]. The mean is preserved because $\int_{\mathbb T^3}(u\cdot\nabla)u\,dx=0$ and $\int\Delta u\,dx=0$ pointwise in $t$ (divergence theorem for smooth periodic fields), so $\frac{d}{dt}\int u=0$; formally, differentiating under the integral and using the equation gives this, and it also follows by passing the Galerkin identity $\int u_N(t)=\int P_Nu_0=\int u_0$ to the limit. If $Y_0=0$ then $u_0=P_Nu_0=0$ for every $N$, so $u_N\equiv0$ and $u\equiv0$. This proves claims 1-3. [step 3.1, step 4.1, F1, F2] ∎

## Remarks

- The time of existence $T$ improves as the $H^s$ norm of the datum decreases and is independent of the viscosity; for $\nu=0$ this is the classical local existence statement for the periodic Euler equation used by the mechanics track.
- This is explicitly a *local* statement and a statement about the model equations $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$; no global regularity, boundary behaviour or empirical claim is made. The scope limitations are recorded in [[rem-local-versus-known-open-global-fluid-scope]].
