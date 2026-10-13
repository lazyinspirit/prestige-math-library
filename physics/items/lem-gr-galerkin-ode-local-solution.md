---
id: lem-gr-galerkin-ode-local-solution
kind: lemma
title: "The Galerkin system is a smooth finite-dimensional ODE: local existence, smooth dependence and the continuation criterion"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-positive-definite-symmetric-matrix-bounds, lem-gr-smooth-composition-and-commutator-estimates, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, def-ck-euclidean-maps-and-diffeomorphisms, thm-heine-borel-rn, thm-extreme-value-metric, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-countable-choice]
dependency_roles:
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis lecture notes), Section 6.4 (The Galerkin approximation) of Chapter 6 (Parabolic Equations)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $s\ge5$ be an integer, let $O\subseteq\mathbb R^m$ be open,
let $A^\mu,B$ be a periodic symmetric hyperbolic coefficient family on $O$ over
an open interval $I\ni0$ ([[def-gr-periodic-symmetric-hyperbolic-system]]), let
$u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ take values in a compact
$K\subseteq O$ with $\|u_0\|_{H^s}\le R$, and let $P_N$, $X_N$ be the Galerkin
projection and space ([[def-gr-galerkin-fourier-projection]]). Fix $N\ge0$ for which $P_Nu_0$ takes values in $O$. Then:

**(a)** there is an open interval $J_N\ni0$ and a $C^1$ map $u_N:J_N\to X_N$
such that for all $t\in J_N$
$$P_N\Bigl[A^0(t,\cdot,u_N(t))\,\partial_tu_N(t)+\sum_{i=1}^3A^i(t,\cdot,u_N(t))\,\partial_iu_N(t)+B(t,\cdot,u_N(t))\Bigr]=0\quad\text{in }L^2,$$
with $u_N(0)=P_Nu_0$;

**(b)** [continuation criterion] if $[0,T_*)$ is the forward-maximal interval of
existence of $u_N$ and there are a compact $C\subseteq O$ and a constant
$R_1\ge0$ with $u_N(t)$ taking values in $C$ and $\|u_N(t)\|_{H^s}\le R_1$ for
all $t\in[0,T_*)$, and $T_*\in I$, then $u_N$ does not have $T_*$ as a finite forward endpoint:
the solution extends beyond $T_*$;

**(c)** the solution is unique and its local flow depends smoothly on the
finite-dimensional coordinates of the initial data.

## Facts & Assumptions
**Given:** Countable Choice, integer $s\ge5$, the coefficient family on $O$, the data $u_0$ with values in the compact $K$ and $\|u_0\|_{H^s}\le R$, and $N\ge0$ with admissible $P_Nu_0$.

[L1] $X_N$ is a finite-dimensional real vector space of dimension $d_N=m|\Lambda_N|$, and $P_N$ is linear, self-adjoint, idempotent with range $X_N$ and commutes with all spatial derivatives ([[def-gr-galerkin-fourier-projection]], [[lem-gr-galerkin-projection-properties]]).

[L2] Uniform positivity: for every compact $C\subseteq O$ and every compact time interval $I_0$ with $I_0\subseteq I$ there is $a>0$ with $z^{\mathsf T}A^0(t,x,u)z\ge a|z|^2$ for all $z\in\mathbb R^m$, $(t,x,u)\in I_0\times\mathbb T^3_{2\pi}\times C$ ([[lem-gr-positive-definite-symmetric-matrix-bounds]] clause (c)).

[L3] Picard--Lindelöf: for $G$ continuous and locally Lipschitz on an open subset of $\mathbb R\times\mathbb R^d$, every initial point has a unique local solution; the solution map is smooth when $G$ is smooth ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L4] The coefficient evaluations $t\mapsto A^\mu(t,\cdot,\pi(z))$ and $B(t,\cdot,\pi(z))$ are smooth functions of $(t,z)$ for $z$ in the open set $V:=\{z:\pi(z)\text{ takes values in }O\}$, and the map $z\mapsto P_N[F(\cdot,\pi(z))v]$ is smooth for fixed smooth $F$ and $v\in X_N$, because all maps involved act between finite-dimensional spaces and $P_N$ is linear ([[lem-gr-smooth-composition-and-commutator-estimates]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L5] Closed bounded Euclidean sets are compact, continuous real functions on compact metric spaces are bounded, and a $C^1$ finite-dimensional curve satisfies its norm-valued integral identity ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).



## Proof

**Proof technique:** direct.

1.1 (The finite-dimensional form of the Galerkin system.) Fix a basis of $X_N$ and let $\pi:\mathbb R^{d_N}\to X_N$ be the coordinate isomorphism. Define $V:=\{z\in\mathbb R^{d_N}:\pi(z)(x)\in O\ \forall x\}$, an open set containing the coordinates of $P_Nu_0$, and for $z\in V$ and $v\in X_N$ define $M(t,z)v:=P_N[A^0(t,\cdot,\pi(z))\,v]$. For $v\ne0$, self-adjointness [L1] gives $\langle v,M(t,z)v\rangle_{L^2}=\int v^{\mathsf T}A^0(t,\cdot,\pi(z))v\,d\mu\ge a_z\|v\|_2^2$ with $a_z>0$ by [L2] applied to a compact set containing the values of $\pi(z)$; on compact subsets of $V$ the bound is uniform, so $M(t,z)$ is invertible with smooth inverse there by [[lem-gr-positive-definite-symmetric-matrix-bounds]] clause (d). Define $G(t,z):=\pi^{-1}\!\left(M(t,z)^{-1}\bigl(-P_N[\sum_iA^i(t,\cdot,\pi(z))\partial_i\pi(z)+B(t,\cdot,\pi(z))]\bigr)\right)$, which is smooth in $(t,z)$ on $I\times V$ by [L4] and the smoothness of the inverse; then $u_N(t)=\pi(z(t))$ solves the Galerkin system iff $z'(t)=G(t,z(t))$, and $z(0)$ is the coordinate of $P_Nu_0$. [L1, L2, L4, algebra]

2.1 (Local existence and smooth dependence (a), (c).) Since $G$ is continuous and locally Lipschitz on the open set $I\times V$ and the initial point lies in it, Picard--Lindelöf [L3] gives a unique local solution through the initial point, defined on an open interval $J_N\ni0$; smoothness of $G$ and the smooth-dependence theorem [L3] give the smooth finite-dimensional flow, hence (c), and (a) follows by transporting through $\pi$. [step 1.1, L3]

3.1 (Continuation within the coefficient time domain.) Suppose $T_*\in I$ is finite and the stated value and norm bounds hold. The coordinate set $Q$ of fields in $X_N$ whose values lie in compact $C\subseteq O$ and whose $H^s$ norms are at most $R_1$ is closed and bounded in a finite-dimensional space, hence compact, and it lies inside $V$. Choose $\delta>0$ with $[T_*-\delta,T_*+\delta]\subseteq I$. The smooth field $G$ is bounded by some $L$ on this compact time interval times $Q$. Thus for $T_*-\delta<t<t'<T_*$ the equation and the ordinary fundamental theorem of calculus give $|z(t')-z(t)|\le L|t'-t|$. The coordinate curve has a limit $z_*\in Q$ as $t\uparrow T_*$, by completeness of Euclidean space and closedness of $Q$. Extend it to $z(T_*)=z_*$. Continuity of $G$ gives $G(t,z(t))\to G(T_*,z_*)$, so its integral identity extends to $T_*$ and the extended curve is $C^1$ there from the left. Picard--Lindelöf [L3] at the interior point $(T_*,z_*)$ supplies a local solution on both sides of $T_*$. The original curve and this local solution agree on their overlap by uniqueness, hence glue to a solution beyond $T_*$. This contradicts maximality and proves (b). The backward criterion follows by reversing time. [step 1.1, step 2.1, L3, L5, algebra] ∎
