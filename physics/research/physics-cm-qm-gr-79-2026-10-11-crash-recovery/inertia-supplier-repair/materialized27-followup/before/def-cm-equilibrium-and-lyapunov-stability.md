---
id: def-cm-equilibrium-and-lyapunov-stability
kind: definition
title: "Equilibria, Lyapunov stability and asymptotic stability of an autonomous first-order system"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-euclidean-inner-product, def-metric-ball]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, Section 6.5 (Stability of fixed points), printed pages 198-200, licensed author preliminary version"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 6 (Non-inertial frames)"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $F:U\to\mathbb R^n$ be a map. Consider the autonomous first-order system

$$z'(t)=F(z(t)),$$

read as the first-order system of [[def-first-order-ode-initial-value-problem-and-solution]] with $D=\mathbb R\times U$ and right-hand side $(t,z)\mapsto F(z)$. A **solution** below means a solution of this system on an interval containing $0$; a solution whose interval is $[0,\infty)$ or contains it is said to be **defined for all $t\ge0$**.

A point $z_*\in U$ is an **equilibrium** (also **fixed point** or **zero**) of $F$ when $F(z_*)=0$; then the constant function $z(t)=z_*$ is a solution on every interval containing $0$.

Let $z_*\in U$ be an equilibrium.

1. $z_*$ is **Lyapunov stable** (or simply **stable**) when for every Euclidean ball $B_\varepsilon(z_*)$ with $\overline{B_\varepsilon(z_*)}\subseteq U$ ([[def-metric-ball]]) there is $\delta\in(0,\varepsilon]$ such that every solution $z$ with $\|z(0)-z_*\|_2<\delta$ ([[def-euclidean-inner-product]]) is defined for all $t\ge0$ and satisfies

$$\|z(t)-z_*\|_2<\varepsilon\qquad(t\ge0).$$

2. $z_*$ is **asymptotically stable** when it is Lyapunov stable and in addition there is $\delta_0>0$ such that every solution $z$ with $\|z(0)-z_*\|_2<\delta_0$ is defined for all $t\ge0$ and satisfies $\|z(t)-z_*\|_2\to0$ as $t\to\infty$.

An equilibrium which is not Lyapunov stable is **unstable**. An equilibrium is **globally asymptotically stable** when it is asymptotically stable and every solution of the system is defined for all $t\ge0$ and converges to it as $t\to\infty$.

## Remarks

- The two clauses are not equivalent. The equation $z'=0$ on $\mathbb R$ has every point Lyapunov stable and no point asymptotically stable. Conversely, convergence of nearby solutions to $z_*$ does not by itself imply stability, which is why clause 2 requires stability explicitly; a standard planar witness is recorded in Problem 6.16 of the cited source. No claim about any physical system is made by either clause.

- The quantification in clause 1 is invariant under replacing Euclidean balls by arbitrary neighbourhoods of $z_*$: if the ball form holds then the neighbourhood form holds by choosing a ball inside the given neighbourhood, and conversely. Requiring $\overline{B_\varepsilon(z_*)}\subseteq U$ costs no generality, because $\varepsilon$ is only a test radius and $U$ is open.

- Whether the definition is non-vacuous for a given $F$ depends on an existence theory for solutions. If $F$ is locally Lipschitz, every Picard-Lindelof initial value problem has a unique maximal solution ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]), and clause 1 can be read as forbidding finite-time breakdown before any boundary of the ball is reached. No such hypothesis is built into this definition.

- Linear stability and orbital stability are defined separately in [[def-cm-orbital-and-linear-stability]]; hyperbolicity, limit cycles and homoclinic trajectories in [[def-cm-hyperbolic-equilibrium-and-limit-cycles]]. The stability of a limit cycle is orbital stability of its image, not Lyapunov stability of any of its points.
