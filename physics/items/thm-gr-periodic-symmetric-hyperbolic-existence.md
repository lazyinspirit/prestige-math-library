---
id: thm-gr-periodic-symmetric-hyperbolic-existence
kind: theorem
title: "Local existence of Sobolev and classical solutions of a periodic symmetric hyperbolic system, uniform on bounded H^s data"
status: draft
origin: session
domain: mathematics
dependency_level: 10
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
([[def-countable-choice]]). Let $s\ge5$ be an integer, let $A^\mu,B$ be a periodic symmetric
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

**Given:** Countable Choice, integer $s\ge5$, coefficient family on the open time interval $I\ni0$, the compact sets $K\subseteq\operatorname{int}K'\subseteq O$, and $R\ge0$.

[L1] An admissible $X_N$ datum has a unique smooth ODE solution; bounded norm and compact values prevent endpoints inside $I$ ([[lem-gr-galerkin-ode-local-solution]]).

[L2] On a compact time slab, compact value set and norm ball, $a\|u_N\|_{H^s}^2\le e_N\le b\|u_N\|_{H^s}^2$ and $|e_N'|\le C_1(1+e_N)$ uniformly in $N$ ([[lem-gr-galerkin-energy-inequality]]).

[L3] $\|\partial_tu_N\|_{H^{s-1}}\le C_2(1+\|u_N\|_{H^s})$ uniformly in $N$ ([[lem-gr-galerkin-time-derivative-bound]]).

[L4] Bounded Galerkin sequences are locally uniformly precompact in $H^{s-1}$ ([[lem-gr-galerkin-compactness]]).

[L5] Such convergent sequences give classical Sobolev solutions with the stated bounds and closed value sets ([[lem-gr-galerkin-limit-is-classical-solution]]).

[L6] $H^{s-1}$ controls $C^0$, projections contract in $H^s$, and $\|(I-P_N)u_0\|_{H^{s-1}}\le C_s(1+N^2)^{-1/2}R$ ([[lem-gr-periodic-sobolev-embedding]], [[lem-gr-galerkin-projection-properties]]).

## Proof

**Proof technique:** constructive.

1.1 (Uniformly admissible projected data.) If the stated data class is empty, choose any positive $T$ with $[-T,T]$ inside $I$ and any $C>0$; all quantified conclusions are vacuous. Otherwise $K$ is nonempty. Choose $\tau>0$ with $[-\tau,\tau]\subseteq I$ and $\delta>0$ with the closed $3\delta$-neighborhood of $K$ contained in $\operatorname{int}K'$. Let $Q$ be the closed $2\delta$-neighborhood of $K$, a compact subset of $\operatorname{int}K'$. The tail and embedding estimates give $\|P_Nu_0-u_0\|_{C^0}\le C_{\mathrm{emb}}C_s(1+N^2)^{-1/2}R$. Choose $N_0$ so the right side is less than $\delta$ for every $N\ge N_0$. Thus $P_Nu_0$ takes values in the closed $\delta$-neighborhood of $K$, hence in $Q\subseteq O$, and $\|P_Nu_0\|_{H^s}\le R$. Only this cofinal family of admissible projections is used. [L1, L6, choose]

1.2 (Strict bootstrap constants.) On $[-\tau,\tau]\times\mathbb T^3\times Q$ choose positive energy-equivalence constants $a,b$ before choosing the norm radius. Choose $R_1>R$ with $aR_1^2>2(1+bR^2)$. Obtain $C_1,C_2$ for value set $Q$ and norm ball of radius $R_1$. Choose $0<T<\tau$ with $(1+bR^2)e^{C_1T}<aR_1^2$ and $TC_{\mathrm{emb}}C_2(1+R_1)<\delta/2$. Every constant is fixed before choosing $T$, and the energy inequality already has a strict margin at $T=0$. [L2, L3, L6, choose]

2.1 (Uniform existence by first exit.) For $N\ge N_0$ solve the admissible ODE from $P_Nu_0$. On the connected component containing $0$ of times with values in $\operatorname{int}Q$ and $\|u_N\|_{H^s}<R_1$, the absolute energy inequality gives $1+e_N(t)\le(1+e_N(0))e^{C_1|t|}\le(1+bR^2)e^{C_1T}<aR_1^2$. The derivative and embedding bounds give $\|u_N(t)-P_Nu_0\|_{C^0}<\delta/2$. Step 1.1 therefore places all values in the closed $3\delta/2$-neighborhood of $K$, a compact subset of $\operatorname{int}Q$. These strict margins exclude a first exit before $T$ in either direction. For each fixed $N$ the norm and value bounds give a compact coordinate trajectory inside the ODE domain; since $[-T,T]\subseteq I$, continuation excludes a maximal endpoint before $T$. Thus every $N\ge N_0$ exists on $(-T,T)$ with values in $Q\subseteq K'$, norm at most $R_1$ and time derivative norm at most $C_2(1+R_1)$. [step 1.1, step 1.2, L1, L2, L3, L6]

3.1 (Extraction and passage to the limit.) Apply compactness to $N=N_0,N_0+1,\ldots$; its proof uses only boundedness and equicontinuity, so this relabeling gives indices $N_j\to\infty$ and locally uniform $H^{s-1}$ convergence to $u$. The limit lemma gives the asserted classical Sobolev solution with datum $u_0$, values in $Q\subseteq K'$, and bounds $\|u\|_{L^\infty H^s}\le C_sR_1$ and $\|\partial_tu\|_{L^\infty H^{s-1}}\le C_{\mathrm{lim}}C_2(1+R_1)$, where $C_s,C_{\mathrm{lim}}$ cover its Fourier norm-equivalence factors. Choose $C$ to dominate these two constants divided by $1+R$. This proves the statement. [step 2.1, L4, L5, construct, discharge-construct] ∎
