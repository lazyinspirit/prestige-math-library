---
id: thm-cm-energy-stability-of-a-strict-minimum
kind: theorem
title: "A strict local minimum of the potential gives a Lyapunov stable equilibrium of the mechanical system, by energy conservation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-mechanical-vector-field-and-energy-in-a-chart, lem-cm-energy-conservation-for-the-mechanical-system, def-cm-equilibrium-and-lyapunov-stability, thm-cm-compact-continuation-for-locally-lipschitz-odes, def-locally-lipschitz-in-the-state-variable, lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, cor-inverse-matrix-by-adjugate, thm-continuous-partial-derivatives-imply-total-differentiability, def-metric-ball, thm-heine-borel-rn, thm-extreme-value-metric, thm-additivity-over-subintervals, def-euclidean-inner-product, thm-intermediate-value]
dependency_roles:
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  lem-cm-energy-conservation-for-the-mechanical-system: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-intermediate-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.7, Theorem 6.16: a fixed point of Newton's equation is stable if the potential has a local minimum there"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 version), Section 2.6 (stability of equilibria from the potential), printed pages 37-39"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, let $M:\Omega\to M_n(\mathbb R)$ be a $C^2$ field of symmetric positive definite matrices, let $U:\Omega\to\mathbb R$ be $C^2$, let $q_0\in\Omega$ with $\nabla U(q_0)=0$, and suppose $q_0$ is a **strict local minimum** of $U$: there is $r_0>0$ with $\overline B(q_0,r_0)\subseteq\Omega$ and

$$U(q)>U(q_0)\qquad(0<\|q-q_0\|_2<r_0).$$

Let $G$ be the mechanical vector field of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]] on $\Omega\times\mathbb R^n$, with energy $E(q,v)=\tfrac12v^{\mathsf T}M(q)v+U(q)$. Then $(q_0,0)$ is a Lyapunov stable equilibrium of $(q',v')=G(q,v)$ in the sense of [[def-cm-equilibrium-and-lyapunov-stability]]: for every $\varepsilon>0$ with $\overline B((q_0,0),\varepsilon)\subseteq\Omega\times\mathbb R^n$ there is $\delta>0$ such that every solution $(q,v)$ with $\|(q(0),v(0))-(q_0,0)\|_2<\delta$ is defined for all $t\ge0$ and satisfies

$$\|(q(t),v(t))-(q_0,0)\|_2<\varepsilon\qquad(t\ge0).$$

No asymptotic stability is asserted.

## Facts & Assumptions

**Given:** The $C^2$ positive definite kinetic metric field $M$, the $C^2$ potential $U$, the strict local minimum $q_0$ and the mechanical vector field $G$.

[F1] $G$ is $C^1$ on $\Omega\times\mathbb R^n$: the formula involves $M$, its first derivatives, $\nabla U$ and $M^{-1}$, with $M^{-1}$ having entries polynomial in the entries of $M$ divided by the nonvanishing continuous function $\det M$; hence $G$ is $C^1$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]], [[cor-inverse-matrix-by-adjugate]], [[thm-continuous-partial-derivatives-imply-total-differentiability]]). A $C^1$ map is locally Lipschitz on compact coordinate subsets ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]], [[def-locally-lipschitz-in-the-state-variable]]), so every initial value problem has a unique maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]).

[F2] Energy conservation: for every $C^2$ solution $(q,v)$ of the mechanical system, $t\mapsto E(q(t),v(t))$ is constant ([[lem-cm-energy-conservation-for-the-mechanical-system]]).

[F3] Compact continuation: an autonomous solution trapped in a compact subset of the open state domain near a finite endpoint extends past that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[F4] Compactness and extrema: closed bounded subsets of $\mathbb R^{2n}$ are compact ([[thm-heine-borel-rn]]) and a continuous real function on a nonempty compact set attains a minimum ([[thm-extreme-value-metric]]); the Euclidean norm is a norm, so the triangle inequality and the reverse triangle inequality hold ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; use the energy as a Lyapunov function on the boundary of a ball and extend the trapped solution by compact continuation.

1.1 Fix $\varepsilon>0$ with $\overline B((q_0,0),\varepsilon)\subseteq\Omega\times\mathbb R^n$ and shrink $\varepsilon$ if necessary so that $\varepsilon<r_0$; then the projection of the ball to the first factor lies in $\overline B(q_0,\varepsilon)\subseteq\overline B(q_0,r_0)$. Write $E_0:=E(q_0,0)=U(q_0)$. On the sphere $S_\varepsilon:=\{(q,v):\|(q,v)-(q_0,0)\|_2=\varepsilon\}$ the continuous function $E-E_0$ is strictly positive: if $v\ne0$ then $\tfrac12v^{\mathsf T}M(q)v>0$, and if $v=0$ then $0<\|q-q_0\|_2=\varepsilon<r_0$ and $U(q)>U(q_0)$. As $S_\varepsilon$ is nonempty and compact by [F4], there is $\delta_0:=\min_{S_\varepsilon}(E-E_0)>0$. [given, F4, algebra]

2.1 Continuity of $E$ at $(q_0,0)$ gives $\delta>0$ such that $\|(q,v)-(q_0,0)\|_2<\delta$ implies $E(q,v)-E_0<\delta_0$. Shrinking $\delta$ further, assume $\delta\le\varepsilon$. [step 1.1, F4, algebra]

3.1 Let $(q,v):[0,b)\to\Omega\times\mathbb R^n$ be the maximal forward solution with $\|(q(0),v(0))-(q_0,0)\|_2<\delta$. Then $\|(q(t),v(t))-(q_0,0)\|_2<\varepsilon$ for all $t\in[0,b)$. Indeed, suppose not and let $t_1:=\inf\{t\in(0,b):\|(q(t),v(t))-(q_0,0)\|_2\ge\varepsilon\}$; since the radius function is continuous with value $<\varepsilon$ at $t=0$ and $\ge\varepsilon$ at some time, the intermediate value theorem ([[thm-intermediate-value]]) shows that the infimum is attained with $\|(q(t_1),v(t_1))-(q_0,0)\|_2=\varepsilon$ and $t_1>0$. By [F2], $E(q(t_1),v(t_1))=E(q(0),v(0))$, so $E-E_0$ at time $t_1$ is $<\delta_0$ by step 2.1, contradicting the definition of $\delta_0$ on $S_\varepsilon$. [step 1.1, 2.1, F1, F2, F4, algebra]

4.1 The solution is defined for all $t\ge0$: if $b<\infty$, then the values $(q(t),v(t))$ for $t\in[0,b)$ lie in the compact set $\overline B((q_0,0),\varepsilon)\subseteq\Omega\times\mathbb R^n$ by step 3.1, so [F3] extends the solution past $b$, contradicting maximality of the maximal solution ([[def-maximal-ode-solution]]). [step 3.1, F3]

5.1 Therefore every solution starting at distance $<\delta$ from $(q_0,0)$ is defined for all $t\ge0$ and stays at distance $<\varepsilon$; since $\varepsilon$ was an arbitrary admissible radius, $(q_0,0)$ is Lyapunov stable. This is exactly the defining condition of [[def-cm-equilibrium-and-lyapunov-stability]]: the $\delta$ produced in step 2.1 depends only on $\varepsilon$, not on the solution. [step 2.1, 3.1, 4.1] ∎

## Remarks

- The proof uses exact energy conservation, so it can certify stability but not attraction: a conservative system whose energy is constant cannot have the equilibrium asymptotically stable (the level sets are invariant). The theorem therefore makes no asymptotic-stability claim, in contrast with [[thm-cm-exponential-stability-by-a-lyapunov-quadratic-form]], which requires dissipation or a strict Lyapunov decrease.

- Neither strict positivity of the Hessian nor a Taylor expansion is used: a degenerate strict minimum such as $U(q)=\|q\|_2^4$ is covered. The strictness hypothesis on the ball is essential for the positivity of $E-E_0$ on the sphere; a non-strict minimum with a flat direction, such as $U\equiv\mathrm{const}$ near $q_0$, would give $E-E_0=0$ at points of the sphere with $v=0$ and the argument would not apply.
