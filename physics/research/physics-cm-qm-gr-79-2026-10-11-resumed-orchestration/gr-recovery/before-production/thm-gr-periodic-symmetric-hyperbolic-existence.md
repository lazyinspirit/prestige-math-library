---
id: thm-gr-periodic-symmetric-hyperbolic-existence
kind: theorem
title: "Local existence of Sobolev and classical solutions of a periodic symmetric hyperbolic system, uniform on bounded H^s data"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: constructive
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-ode-local-solution, lem-gr-galerkin-energy-inequality, lem-gr-galerkin-time-derivative-bound, lem-gr-galerkin-compactness, lem-gr-galerkin-limit-is-classical-solution, lem-gr-galerkin-projection-properties, lem-gr-periodic-sobolev-embedding, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-ode-local-solution: mathematical-premise
  lem-gr-galerkin-energy-inequality: mathematical-premise
  lem-gr-galerkin-time-derivative-bound: mathematical-premise
  lem-gr-galerkin-compactness: mathematical-premise
  lem-gr-galerkin-limit-is-classical-solution: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Chapter 7 (Hyperbolic Equations): the wave equation, weak solutions, existence, continuity and uniqueness"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$, let $A^\mu,B$ be a periodic symmetric
hyperbolic coefficient family on the open set $O\subseteq\mathbb R^m$
([[def-gr-periodic-symmetric-hyperbolic-system]]) and let $K\subseteq O$ be
compact, and let $K'\subseteq O$ be compact with $K$ contained in the
interior of $K'$. Then for every $R\ge0$ there are a time $T>0$ and a constant
$C$ (depending on $A^\mu,B,K,K',s$ and on $R$) such that:

for every $u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ taking values in $K$ with
$\|u_0\|_{H^s}\le R$ there is a Sobolev solution
$u:(-T,T)\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ of $(\star)$ with
$u(0)=u_0$ which is classical and satisfies
$$u\in L^\infty((-T,T);H^s)\cap C^0((-T,T);H^{s-1}),\quad \partial_tu\in L^\infty((-T,T);H^{s-1}),$$
$$\sup_{|t|<T}\|u(t)\|_{H^s}\le C(1+R),\qquad \sup_{|t|<T}\|\partial_tu(t)\|_{H^{s-1}}\le C(1+R),$$
and whose values lie in $K'$.

## Facts & Assumptions

**Given:** Countable Choice, $s\ge5$, the coefficient family on $O$, the compact $K\subseteq O$, and $R\ge0$.

[L1] Galerkin theory: for every $N$ and every initial projection $P_Nu_0$ which takes values in $K$ with norm at most $R$, the Galerkin system has a unique maximal $C^1$ solution $u_N$ through $P_Nu_0$, and it extends as long as its values remain in a compact subset of $O$ and its $H^s$ norm stays bounded ([[lem-gr-galerkin-ode-local-solution]], [[def-gr-galerkin-fourier-projection]]).

[L2] Energy equivalence and inequality: on a compact value set $C\subseteq O$ and ball $\|u_N\|_{H^s}\le R_1$, the weighted energy $e_N(t)=\sum_{|\alpha|\le s}\int(D^\alpha u_N)^{\mathsf T}A^0(t,\cdot,u_N)D^\alpha u_N\,d\mu$ satisfies $a\|u_N\|_{H^s}^2\le e_N\le b\|u_N\|_{H^s}^2$ and $e_N'\le C_1(1+e_N)$ with $C_1$ depending on $A^\mu,B,C,R_1,s$ ([[lem-gr-galerkin-energy-inequality]]).

[L3] Time-derivative bound: on the same sets, $\|\partial_tu_N(t)\|_{H^{s-1}}\le C_2(1+\|u_N(t)\|_{H^s})$ ([[lem-gr-galerkin-time-derivative-bound]]).

[L4] Compactness: bounded $H^s$ families have $H^{s-1}$-convergent subsequences, and the Galerkin family is equicontinuous in $H^{s-1}$ with a subsequence converging uniformly on every compact subinterval of $(-T,T)$ ([[lem-gr-galerkin-compactness]] clauses (a)-(c)).

[L5] The limit of a convergent Galerkin sequence is a classical solution with initial value $u_0$, $L^\infty H^s$ and $L^\infty H^{s-1}$ time-derivative bounds and values in any closed set containing all the $u_N$ ([[lem-gr-galerkin-limit-is-classical-solution]]).

[L6] Sobolev embedding on the torus: $\|v\|_{C^0}\le C_{\mathrm{emb}}\|v\|_{H^s}$ for all $v\in H^s$, and $P_Nu_0\to u_0$ in $H^s$ ([[lem-gr-periodic-sobolev-embedding]], [[lem-gr-galerkin-projection-properties]] clause (d)).

## Proof

**Proof technique:** constructive.

1.1 (Choice of constants.) Since $K\subseteq\operatorname{int}K'$, there is $\delta>0$ with $K+B(0,2\delta)\subseteq K'$, where $B(0,r)$ is the open ball in $\mathbb R^m$. Put $R_1:=C_1'(1+R)$, a bound for the energy inequality [L2] on the compact value set $K'$ which is larger than $R$; let $a,b,C_1$ be the constants of [L2] for $K'$ and $R_1$, and let $C_2$ be the constant of [L3] on the same sets. Choose $T>0$ so small that $(1+bR^2)e^{C_1T}\le aR_1^2$ and $TC_2(1+R_1)\le\delta$. [L2, L3, algebra]

2.1 (Uniform existence of the Galerkin solutions on $(-T,T)$.) For $N\ge0$ let $u_N$ be the Galerkin solution with $u_N(0)=P_Nu_0$ [L1]. Suppose its forward-maximal interval were $[0,T_*)$ with $T_*<T$. As long as $0\le t<T_*$ and $u_N$ stays in $K'$ with $\|u_N\|_{H^s}\le R_1$, [L2] gives $e_N(t)\le(1+e_N(0))e^{C_1t}<aR_1^2$, hence $\|u_N(t)\|_{H^s}<R_1$; and [L3] with [L6] bounds the pointwise drift $|u_N(t,x)-u_N(0,x)|\le\int_0^t\sup|\partial_tu_N|\,ds\le TC_2(1+R_1)\le\delta$. If some $t_1\le T_*$ were the first time at which $u_N(t_1)$ leaves $K'$, then for all $s<t_1$ the trajectory lies in $K'$, so the estimates apply and give $|u_N(t_1,x)-u_N(0,x)|\le\delta$ for every $x$, placing $u_N(t_1)$ in $K+B(0,\delta)\subseteq K'$, a contradiction; hence values remain in $K'$ and the $H^s$ bound remains strict on $[0,T_*)$, so the continuation criterion [L1] contradicts a finite endpoint $T_*<T$. The backward direction is identical. Hence each $u_N$ exists on $(-T,T)$ with values in $K'$ and $\|u_N(t)\|_{H^s}\le R_1$, and $\|\partial_tu_N(t)\|_{H^{s-1}}\le C_2(1+R_1)$ by [L3]. [step 1.1, L1, L2, L3]

3.1 (Extraction of a limit and conclusion.) By [L4] there is a subsequence $u_{N_j}\to u$ uniformly on every compact subinterval of $(-T,T)$ in $H^{s-1}$. By [L5] $u$ is a classical solution of $(\star)$ with $u(0)=u_0$, $u\in L^\infty H^s\cap C^0H^{s-1}$, $\partial_tu\in L^\infty H^{s-1}$, values in $K'$ and the bounds with constant $C=C(R)$ obtained from $R_1,C_2$. This is the asserted solution. [step 2.1, L4, L5, construct, discharge-construct] ∎

## Remarks

- **Uniformity.** The time $T$ and the constant $C$ depend only on the coefficient family, $K$, $s$ and $R$, not on the particular datum or on $N$; this is the uniformity used by [[thm-gr-local-symmetric-hyperbolic-well-posedness]].
- **Scope.** No endpoint regularity ($s=5/2$-type thresholds), no global-in-time existence and no uniform slab on noncompact spatial domains are asserted.
