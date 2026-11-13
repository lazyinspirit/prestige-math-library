---
id: def-expander-prereq-stability-and-attraction
kind: definition
title: Point stability, attraction and stability of a set
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-metric-space
  - math:def-metric-topology
  - math:def-euclidean-local-extrema-and-critical-points
  - math:lem-real-line-is-a-metric-space
  - math:def-product-topology
  - math:def-continuous-map-top
  - math:lem-metric-nonnegativity
  - math:thm-infimum-property
  - math:def-limits-at-infinity
dependency_roles:
  math:def-metric-space: mathematical-premise
  math:def-metric-topology: mathematical-premise
  math:def-euclidean-local-extrema-and-critical-points: mathematical-premise
  math:lem-real-line-is-a-metric-space: mathematical-premise
  math:def-product-topology: mathematical-premise
  math:def-continuous-map-top: mathematical-premise
  math:lem-metric-nonnegativity: mathematical-premise
  math:thm-infimum-property: mathematical-premise
  math:def-limits-at-infinity: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $(X,d)$ be a metric space. Equip $X$ with its metric topology, $\mathbb R$ with the usual topology induced by the metric $d_{\mathbb R}(s,t)=|s-t|$, and $\mathbb R\times X$ with the product topology. A complete flow is a continuous map $\Phi:\mathbb R\times X\to X$ such that $\Phi_0(x)=x$ and $\Phi_{t+s}(x)=\Phi_t(\Phi_s(x))$ for all $s,t\in\mathbb R$ and $x\in X$. An equilibrium is a point $q$ with $\Phi_t(q)=q$ for every $t$. It is Lyapunov stable if, for every $\varepsilon>0$, there is $\delta>0$ such that $d(x,q)<\delta$ implies $d(\Phi_t(x),q)<\varepsilon$ for all $t\ge0$. A point $x$ is attracted to $q$ if $d(\Phi_t(x),q)\to0$ as $t\to\infty$; its point basin is the set of all such $x$.

For a nonempty set $C\subseteq X$, write $d(x,C)=\inf_{c\in C}d(x,c)$. The set is invariant if $\Phi_t(C)=C$ for every $t\in\mathbb R$. An invariant set $C$ is stable if, for every $\varepsilon>0$, there is $\delta>0$ such that $d(x,C)<\delta$ implies $d(\Phi_t(x),C)<\varepsilon$ for all $t\ge0$. A point $x$ is attracted to $C$ if $d(\Phi_t(x),C)\to0$ as $t\to\infty$. The attraction set of $C$ consists of all such points. The set $C$ attracts a neighbourhood if some open set containing $C$ is contained in its attraction set.

For a differentiable real function on an open subset of Euclidean space, a local minimum $q$ has a neighbourhood on which $f(x)\ge f(q)$; it is strict if the inequality is strict whenever $x\ne q$. A critical point has zero derivative, and it is isolated if some neighbourhood contains no other critical point. These properties are distinct. Stability alone does not imply that the point basin of a prescribed equilibrium in a family of equilibria is open.

## Definition references

[[math:def-metric-space|Metric spaces]].

[[math:def-metric-topology|Metric topology]].

[[math:def-euclidean-local-extrema-and-critical-points|Euclidean local extrema and critical points]].

[[math:lem-real-line-is-a-metric-space|The usual metric and topology on the real line]].

[[math:def-product-topology|Product topology]].

[[math:def-continuous-map-top|Continuity of maps of topological spaces]].

[[math:lem-metric-nonnegativity|Nonnegativity of metric distances]].

[[math:thm-infimum-property|The infimum property of the real numbers]].

[[math:def-limits-at-infinity|Limits of real functions at positive infinity]].

## Justification

For each $x\in X$, the set $S_x=\{d(x,c):c\in C\}$ is nonempty because $C$ is nonempty, consists of finite real numbers, and is bounded below by $0$ by metric nonnegativity. The infimum property of $\mathbb R$ therefore gives $\inf S_x\in\mathbb R$; it is nonnegative because $0$ is a lower bound, and for any $c_0\in C$ it is at most $d(x,c_0)$. Thus $d(x,C)$ is well defined, finite and nonnegative. For a singleton $C=\{q\}$, the set definitions reduce to the point definitions.

The distinction between the Euclidean properties is illustrated by the constant function, whose points are non-strict local minima and non-isolated critical points, and by $f(x)=x^3$, whose critical point $0$ is isolated but is not a local minimum.

Finally, consider the identity flow $\Phi_t(x)=x$ on $\mathbb R$ with its usual metric $d_{\mathbb R}(x,y)=|x-y|$. The map $(t,x)\mapsto x$ is continuous: for every open $U\subseteq\mathbb R$, its preimage $\mathbb R\times U$ is open in the product topology, so each $(t,x)$ with $x\in U$ has an open neighbourhood mapped into $U$. The flow identities hold, every point is an equilibrium, and choosing $\delta=\varepsilon$ proves Lyapunov stability. Since $d_{\mathbb R}(\Phi_t(x),q)=|x-q|$ is constant in time, the point basin of $q$ is $\{q\}$. This singleton is not open: for each $r>0$, the ball $(q-r,q+r)$ contains $q+r/2\ne q$. Thus stability by itself does not give an open point basin.
