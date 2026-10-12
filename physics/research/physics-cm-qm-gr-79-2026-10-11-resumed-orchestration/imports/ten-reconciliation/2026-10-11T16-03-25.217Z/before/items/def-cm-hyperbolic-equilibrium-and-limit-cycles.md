---
id: def-cm-hyperbolic-equilibrium-and-limit-cycles
kind: definition
title: "Hyperbolic equilibria, hyperbolic fixed points, periodic orbits, limit cycles and homoclinic trajectories"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-equilibrium-and-lyapunov-stability, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-total-derivative-in-euclidean-space]
dependency_roles:
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, Section 9.1 (hyperbolic systems), printed pages 253-255, and Section 6.4 (the Poincare map), printed page 198"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.2 and Chapter 4"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $F:U\to\mathbb R^n$ be a map; a solution means a solution of $z'(t)=F(z(t))$ as in [[def-cm-equilibrium-and-lyapunov-stability]].

**Hyperbolic equilibrium.** Let $z_*\in U$ be an equilibrium of $F$ and suppose $F$ is totally differentiable at $z_*$ ([[def-total-derivative-in-euclidean-space]]) with total derivative $DF(z_*)$. Then $z_*$ is **hyperbolic** when no eigenvalue of the real matrix of $DF(z_*)$ has real part $0$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

**Hyperbolic fixed point of a map.** Let $\varphi:V\to V$ be a map on a set $V\subseteq\mathbb R^n$ and let $p\in V$ satisfy $\varphi(p)=p$. Suppose $\varphi$ is totally differentiable at $p$. Then $p$ is a **hyperbolic fixed point** of $\varphi$ when no eigenvalue of $D\varphi(p)$ has modulus $1$.

**Periodic solutions and periodic orbits.** A solution $z:\mathbb R\to U$ is **$T$-periodic** for $T>0$ when $z(t+T)=z(t)$ for every $t\in\mathbb R$, and **periodic** when it is $T$-periodic for some $T>0$. It is **nonconstant** when $z(t_1)\ne z(t_2)$ for some $t_1,t_2$. The **image** of a periodic solution is $\{z(t):t\in\mathbb R\}$; a subset of $U$ is a **periodic orbit** when it is the image of a periodic solution. A number $T>0$ is a **least period** of $z$ when $T$ is a period of $z$ and no $T'\in(0,T)$ is a period of $z$.

**Limit cycle.** A periodic orbit $S\subseteq U$ is a **limit cycle** when it is **isolated**: there is an open set $W\subseteq U$ with $S\subseteq W$ such that the image of every periodic solution lying in $W$ equals $S$; equivalently, no other periodic orbit of the system is contained in $W$. Stability or attraction of $S$ is a separate property and is not part of the definition.

**Homoclinic and heteroclinic trajectories.** A solution $z$ defined on all of $\mathbb R$ is **homoclinic** to the equilibrium $z_*$ when $z(t)\to z_*$ as $t\to+\infty$ and as $t\to-\infty$ and $z$ is not the constant solution $z\equiv z_*$. It is **heteroclinic** from $z_*$ to $z_{**}$ when $z_*\ne z_{**}$ are equilibria and $z(t)\to z_{**}$ as $t\to+\infty$ and $z(t)\to z_*$ as $t\to-\infty$.

## Remarks

- Hyperbolicity is a spectral condition on the derivative at a single point. It does not by itself assert Lyapunov stability, instability, the existence of local stable or unstable manifolds, or any statement about the nonlinear system; each of those is a theorem about the system under stated hypotheses, not a definitional consequence.

- The qualifier "isolated" in the definition of a limit cycle is taken with respect to the periodic orbits of the same system on an open neighbourhood of the cycle's image. A given periodic orbit may be isolated in this sense while being orbitally unstable; conversely an orbitally stable periodic orbit in a system with a continuum of periodic orbits filling an annulus is not a limit cycle.

- Stability and attraction of an invariant set are defined in [[def-cm-orbital-and-linear-stability]]; for a periodic orbit they are separate from the isolation condition used here, and neither is implied by it.

- The stable set $W^+(z_*)=\{z:z(t)\to z_*\text{ as }t\to+\infty\}$ and unstable set $W^-(z_*)$ are defined by convergence alone. Calling them differentiable manifolds requires a stable-manifold theorem with its own hypotheses; no such conclusion is drawn here, and none is used by the local items of this page.
