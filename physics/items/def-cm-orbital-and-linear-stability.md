---
id: def-cm-orbital-and-linear-stability
kind: definition
title: "Invariant sets, orbital stability of an invariant set, and linear stability of an equilibrium"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-equilibrium-and-lyapunov-stability, def-total-derivative-in-euclidean-space, def-euclidean-inner-product, def-first-order-ode-initial-value-problem-and-solution]
dependency_roles:
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, Sections 3.2 and 6.5, printed pages 61-67 and 198-200"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.2 (small oscillations and equilibrium)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $F:U\to\mathbb R^n$ be a map; retain the convention of [[def-cm-equilibrium-and-lyapunov-stability]] that a solution means a solution of $z'(t)=F(z(t))$, read as a system of [[def-first-order-ode-initial-value-problem-and-solution]], and that it is defined for all $t\ge0$ when its interval contains $[0,\infty)$. A maximal solution means one with no proper extension, as defined there; the invariance and stability predicates below quantify over maximal solutions through time $0$, not their arbitrary local restrictions. No existence or uniqueness is asserted for an arbitrary $F$.

**Invariant sets.** A set $S\subseteq U$ is **forward invariant** (for this system) when every maximal solution $z$ with $z(0)\in S$ is defined for all $t\ge0$ and satisfies $z(t)\in S$ for all $t\ge0$.

**Distance to a set.** For a nonempty $S\subseteq U$ define

$$\operatorname{dist}(z,S):=\inf\{\,\|z-s\|_2:s\in S\,\}\qquad(z\in\mathbb R^n),$$

the infimum of a nonempty set of nonnegative reals that is bounded below, computed for the Euclidean norm of [[def-euclidean-inner-product]]. Define the Euclidean closure of $S$ by

$$\overline S:=\{z\in\mathbb R^n:\text{for every }\varepsilon>0\text{ there is }s\in S\text{ with }\|z-s\|_2<\varepsilon\}.$$

The map $z\mapsto\operatorname{dist}(z,S)$ is nonnegative and vanishes exactly on $\overline S$: by the defining property of the infimum, $\operatorname{dist}(z,S)=0$ exactly when every positive-radius Euclidean ball about $z$ meets $S$. When $S=\{z_*\}$ is a singleton, $\operatorname{dist}(z,S)=\|z-z_*\|_2$.

**Orbital stability.** Let $S\subseteq U$ be nonempty and forward invariant. Then $S$ is **orbitally stable** when for every $\varepsilon>0$ there is $\delta>0$ such that every maximal solution $z$ with $\operatorname{dist}(z(0),S)<\delta$ is defined for all $t\ge0$ and satisfies

$$\operatorname{dist}(z(t),S)<\varepsilon\qquad(t\ge0).$$

It is **asymptotically orbitally stable** when it is orbitally stable and there is $\delta_0>0$ such that every maximal solution with $\operatorname{dist}(z(0),S)<\delta_0$ is defined for all $t\ge0$ and satisfies $\operatorname{dist}(z(t),S)\to0$ as $t\to\infty$.

**Linear stability.** Let $z_*\in U$ be an equilibrium of $F$ and suppose $F$ is totally differentiable at $z_*$ in the sense of [[def-total-derivative-in-euclidean-space]], with total derivative $DF(z_*):\mathbb R^n\to\mathbb R^n$; write $L:=DF(z_*)$. The **linearized system** at $z_*$ is the autonomous linear system

$$y'(t)=L\,y(t).$$

The equilibrium $z_*$ is **linearly stable** when every maximal solution $y$ of the linearized system ([[def-first-order-ode-initial-value-problem-and-solution]]) is defined for all $t\ge0$ and is bounded on $[0,\infty)$, that is, there is a real constant $C\ge0$ with $\|y(t)\|_2\le C$ for every $t\ge0$. It is **linearly asymptotically stable** when every maximal solution of the linearized system is defined for all $t\ge0$ and satisfies $\|y(t)\|_2\to0$ as $t\to\infty$.

## Remarks

- Orbital stability of $S$ is a statement about the set $S$, not about any chosen point of it: it controls the distance of a whole solution to $S$ and does not assert that a solution starting near one point of $S$ stays near that point. Lyapunov stability of an equilibrium is the special case $S=\{z_*\}$; orbital stability of a limit cycle concerns its periodic image $S$ ([[def-cm-hyperbolic-equilibrium-and-limit-cycles]]) when that image is forward invariant in the sense of the Definition. Under the arbitrary-$F$ hypotheses here, a periodic solution alone does not ensure that every maximal solution through its image remains there; forward invariance must be established separately.

- Linear stability is a property of the linear system alone. It is not equivalent to Lyapunov stability of $z_*$ for the nonlinear system; linearization transfers stability only under additional spectral hypotheses, which this definition does not supply.

- The constant $C$ in the definition of linear stability is not required to be uniform over a family of systems, and no rate of decay is required; linear asymptotic stability is a strictly stronger property than linear stability. Both are defined here for the concrete Euclidean finite-dimensional case only.
