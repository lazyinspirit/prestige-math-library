---
id: prop-cm-local-action-family-exists
kind: proposition
title: "A smooth local family of extremals with prescribed endpoint exists when the endpoint momentum map has invertible derivative"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-legendre-map-in-a-time-dependent-chart, lem-cm-legendre-map-local-invertibility, prop-cm-hamiltonian-branch-identities, thm-cm-endpoint-action-differential, thm-fundamental-theorem-for-nonautonomous-smooth-odes, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-euclidean-maps-and-diffeomorphisms, def-total-derivative-in-euclidean-space, def-invertible-euclidean-linear-map, def-matrix-product-and-identity-matrix, def-interval, def-vector-valued-derivative-and-integral, def-metric-ball]
dependency_roles:
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  thm-cm-endpoint-action-differential: mathematical-premise
  thm-fundamental-theorem-for-nonautonomous-smooth-odes: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-higher-regularity-of-local-inverses: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-interval: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.4 (Hamilton-Jacobi Theory: the action functional as generating function and Jacobi's complete integral)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.7 (background for the action W as a function of the endpoint data; the invertibility hypothesis of this item is not stated there), printed pages 121-125"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $J\subseteq\mathbb R$ and $U\subseteq\mathbb R^n$ be open and nonempty, and let
$\mathcal L:J\times U\times\mathbb R^n\to\mathbb R$ be a smooth ($C^\infty$) fibre-full
time-dependent Lagrangian chart that is hyperregular, with inverse Legendre branch $v$. Let
$t_0,t_1\in J$, $q_0\in U$, $p_0^*\in\mathbb R^n$, and suppose the maximal solution of Hamilton's
equations

$$q'=H_p(t,q,p),\qquad p'=-H_q(t,q,p),\qquad H(t,q,p):=p\cdot v(t,q,p)-\mathcal L\bigl(t,q,v(t,q,p)\bigr),$$

with initial data $(q(t_0),p(t_0))=(q_0,p_0^*)$ is defined at $t_1$. Write
$E(t,p_0)$ for the $q$-component at time $t$ of the solution with data $(q_0,p_0)$ at $t_0$, and
suppose that the derivative $\partial_{p_0}E(t_1,p_0^*)$ is invertible
([[def-invertible-euclidean-linear-map]], [[def-total-derivative-in-euclidean-space]]). Then there
are open neighbourhoods $J_1\subseteq J$ of $t_1$, $Q_1\subseteq U$ of $q_1:=E(t_1,p_0^*)$ and
$P_1\subseteq\mathbb R^n$ of $p_0^*$, with $t_0\notin J_1$, and a smooth map

$$p_0:J_1\times Q_1\longrightarrow P_1,\qquad p_0(t_1,q_1)=p_0^*,$$

with $E\bigl(t,p_0(t,q)\bigr)=q$ for all $(t,q)\in J_1\times Q_1$; and, after possibly shrinking
$J_1$ and $Q_1$ once more, the formula
$X(t,q,s):=$ the $q$-component at time $s$ of the solution with data $(q_0,p_0(t,q))$ at $t_0$
defines, for some open interval $K\subseteq J$ containing $t_0$ and $J_1$, a $C^\infty$ map $X:J_1\times Q_1\times K\to U$ with $X(t,q,t)=q$,
$X(t,q,t_0)=q_0$, whose curves $s\mapsto X(t,q,s)$ solve the Euler–Lagrange equation of
$\mathcal L$. Consequently the family $X$ satisfies the hypotheses of
[[thm-cm-endpoint-action-differential]] on $J_1\times Q_1$, and the resulting action function
$W(t,q)=\int_{t_0}^{t}\mathcal L(s,X,\partial_sX)ds$ has $W_q=p$ and $W_t=-H(t,q,p)$.

## Facts & Assumptions

**Given:** The smooth hyperregular chart $\mathcal L$ with inverse branch $v$, the Hamiltonian $H$,
the data $t_0,t_1,q_0,p_0^*$, and the endpoint map $E$.

[F1] Since $\mathcal L$ is $C^\infty$ and hyperregular, the inverse branch $v$ is $C^\infty$:
locally, the Legendre map is a $C^\infty$ map with invertible derivative and hence has $C^\infty$
local inverses ([[lem-cm-legendre-map-local-invertibility]],
[[thm-higher-regularity-of-local-inverses]]), and the global inverse agrees with each local
inverse near the corresponding point. Hence $H$ is $C^\infty$, and Hamilton's equations are a
smooth ($C^\infty$) nonautonomous system on $J\times U\times\mathbb R^n$
([[def-cm-legendre-map-in-a-time-dependent-chart]],
[[thm-ck-euclidean-maps-closed-under-algebra-and-composition]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] Smooth dependence on initial data
([[thm-fundamental-theorem-for-nonautonomous-smooth-odes]]): for every base point of the smooth
nonautonomous field $X_H(t,q,p)=\bigl(H_p,-H_q\bigr)$ there are a common time interval and a
neighbourhood of initial data on which the local solution map is smooth in the initial time and
initial state.

[F3] The Euclidean inverse function theorem and its higher regularity
([[thm-euclidean-inverse-function-theorem]], [[thm-higher-regularity-of-local-inverses]]): a
$C^\infty$ map between open subsets of $\mathbb R^{1+n}$ with invertible derivative at a point has
a $C^\infty$ local inverse; the derivative of the map
$F(t,p_0)=\bigl(t,E(t,p_0)\bigr)$ is invertible at $(t_1,p_0^*)$ if and only if
$\partial_{p_0}E(t_1,p_0^*)$ is invertible, by the explicit kernel computation of
[[lem-cm-legendre-map-local-invertibility]] applied to the block form
$\begin{pmatrix}1&0\\ \partial_tE&\partial_{p_0}E\end{pmatrix}$
([[def-total-derivative-in-euclidean-space]], [[def-invertible-euclidean-linear-map]],
[[def-matrix-product-and-identity-matrix]], [[thm-chain-rule-for-total-derivatives]]).

[F4] Translation between the Hamiltonian and Lagrangian descriptions on the inverse branch
([[prop-cm-hamiltonian-branch-identities]]): a $C^1$ curve $(q,p)$ solves Hamilton's equations iff
$q$ solves the Euler–Lagrange equation of $\mathcal L$ with $p=\mathcal L_v(t,q,q')$. Hence the
smooth family constructed below consists of Euler–Lagrange extremals. Neighbourhoods are Euclidean
balls ([[def-metric-ball]], [[def-interval]],
[[def-vector-valued-derivative-and-integral]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Proof

**Proof technique:** construct the momentum selection by the inverse function theorem and read the
solution family off the smooth flow.

1.1 By [F1] and [F2], the solution map of Hamilton's equations is smooth in the initial state near $(q_0,p_0^*)$ on a common open solution interval $K$ containing $t_0$ and $t_1$. The local conclusion is propagated along the reference solution as follows. Choose a compact time interval strictly inside its lifetime containing both times in its interior. Local smooth solution neighbourhoods from [F2] cover the compact reference trajectory. Choose around each reference time $u$ a radius $r_u>0$ so small that initial pairs along the reference curve for $|s-u|<2r_u$ lie in its local smooth-solution domain, and that this local map evaluates solutions throughout that larger interval. The smaller intervals $|s-u|<r_u$ cover the compact time segment, so finitely many suffice. A subdivision of mesh less than the minimum of these finitely many radii, with $t_0$ inserted, has each short piece in one larger interval: its first endpoint lies in a smaller interval and every point of that piece differs from it by less than the corresponding radius. Compose the local solution maps, shrinking the initial-state neighbourhood at each of the finitely many joins so its image stays in the next domain. Uniqueness identifies the composition with the initial-value solution; the same construction backwards covers earlier times. This supplies smooth dependence on a common open interval containing the compact segment. Thus in particular the endpoint map $E$ is defined and smooth on a neighbourhood of $(t_1,p_0^*)$, and $F(t,p_0)=(t,E(t,p_0))$ is a smooth map whose derivative at $(t_1,p_0^*)$ is invertible by the hypothesis and [F3]. [F1, F2, F3]

2.1 Since $E(t_0,p_0)\equiv q_0$, its momentum derivative at $t_0$ is zero; invertibility implies $t_1\ne t_0$, so choose $J_1$ to exclude $t_0$. By the inverse function theorem with higher regularity [F3], there are open neighbourhoods $J_1\ni t_1$, $Q_1\ni q_1$ and $P_1\ni p_0^*$ and a $C^\infty$ map $p_0:J_1\times Q_1\to P_1$ with $p_0(t_1,q_1)=p_0^*$ and $F(t,p_0(t,q))=(t,q)$, i.e. $E(t,p_0(t,q))=q$, for all $(t,q)\in J_1\times Q_1$. [F3, step 1.1]

3.1 Define $X(t,q,s)$ as the $q$-component at time $s$ of the Hamiltonian solution with data $(q_0,p_0(t,q))$ at $t_0$. By [F2] the local solution map is smooth in the initial state and in the evaluation time, so, after shrinking $J_1$ and $Q_1$ so that $p_0(t,q)$ remains in the region of smooth dependence and so that all these solutions exist on a common open interval $K\subseteq J$ containing $t_0$ and $J_1$, the map $X$ is $C^\infty$ on $J_1\times Q_1\times K$. [F2, step 2.1]

4.1 Properties of $X$: $X(t,q,t_0)=q_0$, because every solution starts at $q_0$ at time $t_0$; and $X(t,q,t)=E(t,p_0(t,q))=q$ by step 2.1. For each $(t,q)$, the curve $s\mapsto(X(s),p(s))$ solves Hamilton's equations with $p$ the momentum component of the same solution, so by [F4] $s\mapsto X(t,q,s)$ solves the Euler–Lagrange equation of $\mathcal L$ with velocity $\partial_sX$. [step 2.1, step 3.1, F4]

5.1 Steps 3.1 and 4.1 show that $X$ satisfies the hypotheses of [[thm-cm-endpoint-action-differential]] on $J_1\times Q_1$; applying that theorem gives that $W(t,q):=\int_{t_0}^{t}\mathcal L(s,X,\partial_sX)ds$ is $C^1$ with $W_q(t,q)=p(t,q)$ and $W_t(t,q)=-H(t,q,p(t,q))$, where $p(t,q)=\mathcal L_v(t,q,\partial_sX(t,q,t))$. [step 3.1, step 4.1, F4] ∎

## Remarks

- The proposition is a *local* existence statement: it produces the family on some neighbourhood
  of the chosen endpoint $(t_1,q_1)$ from the invertibility of the endpoint momentum map. It
  proves neither that the family extends beyond that neighbourhood, nor that the endpoint problem
  is solvable for arbitrary data; failure of the invertibility hypothesis is exactly the
  degenerate case excluded here, and no boundary-value solvability is claimed.

- The construction uses the Hamiltonian flow and the equivalence with the Euler–Lagrange
  equations on the inverse branch, so the hyperregularity of $\mathcal L$ is used both to define
  $H$ globally and to translate trajectories. In the merely regular case the same argument works
  locally on each inverse branch.
