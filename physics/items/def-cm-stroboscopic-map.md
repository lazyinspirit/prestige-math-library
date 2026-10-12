---
id: def-cm-stroboscopic-map
kind: definition
title: "The stroboscopic (time-$P$) map of a $P$-periodic first-order system"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-maximal-ode-solution, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-interval]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, Section 6.4 (the Poincare map, Problem 6.14) and Sections 4.6-4.7 on periodic equations, printed pages 198 and 133-141"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 6 (motion in a rotating frame, periodic forcing examples)"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $P>0$, and let $F:\mathbb R\times U\to\mathbb R^n$ be a map that is continuous and locally Lipschitz in the state variable, in the sense of the hypotheses of [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], and that is **$P$-periodic**:

$$F(t+P,z)=F(t,z)\qquad(t\in\mathbb R,\ z\in U).$$

Consider the first-order system $x'(t)=F(t,x(t))$ of [[def-first-order-ode-initial-value-problem-and-solution]] on the open domain $\mathbb R\times U$. For $z\in U$ let

$$x_z:J_z\longrightarrow U$$

be the unique maximal solution of the initial value problem $x'(t)=F(t,x(t))$, $x(0)=z$; here $J_z$ is the open maximal interval of existence containing $0$, and by [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]] every solution of this initial value problem is a restriction of $x_z$ ([[def-maximal-ode-solution]], [[def-interval]]).

The **domain of the stroboscopic map** is

$$D_P:=\{\,z\in U:[0,P]\subseteq J_z\,\},$$

the set of initial states whose solution exists over one full period. The **stroboscopic map** (or **time-$P$ map**) of the system is the function

$$\theta_P:D_P\longrightarrow U,\qquad \theta_P(z):=x_z(P).$$

This is a well-defined function: for $z\in D_P$ the interval $J_z$ contains $P$, so $x_z(P)$ is a point of $U$, and by the uniqueness clause of the maximal-solution theorem the value $x_z(P)$ does not depend on any choice, since $x_z$ is the only maximal solution through $(0,z)$.

## Remarks

- The definition depends on the chosen initial time $0$. Replacing the initial time by $t_0$ and defining $\theta_P^{t_0}(z):=x_{t_0,z}(t_0+P)$ on the corresponding domain gives the same family of maps up to the time-translation flow of the $P$-periodic system; only the initial time $0$ is used on this page.

- The domain $D_P$ is the set where the solution exists up to time $P$; it need not be open, need not be invariant under $\theta_P$, and need not be all of $U$. Formal iterates $\theta_P^k$ are defined only on the subset of points for which each successive value remains in $D_P$; the precise statement is [[lem-cm-stroboscopic-iterate-identity]].

- If $F$ does not depend on $t$ (the autonomous case), then $\theta_P$ is the time-$P$ map of the autonomous system and every equilibrium $z_*$ of the autonomous right-hand side satisfies $\theta_P(z_*)=z_*$. No claim about the existence of periodic solutions of period $P$ is made by the definition; $\theta_P(z)=z$ is a necessary condition on an initial state for a periodic solution of period $P$, not a sufficient one.

- The map $\theta_P$ is the discrete-time system used in [[def-cm-hyperbolic-equilibrium-and-limit-cycles]]: hyperbolicity of a fixed point of $\theta_P$ is hyperbolicity of a periodic solution of the continuous system under the identifications supplied by that definition and its consumers.
