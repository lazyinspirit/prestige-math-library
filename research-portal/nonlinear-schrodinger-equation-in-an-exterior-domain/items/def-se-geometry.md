---
id: def-se-geometry
kind: definition
domain: mathematics
title: Exterior and truncated obstacle domains
status: published
deps:
  - math:def-compact-space
  - math:def-connected-space
  - math:def-interior-closure-boundary-top
  - math:def-metric-ball
  - math:def-bounded-c-k-domain-and-boundary-charts
  - math:thm-compact-subset-of-a-hausdorff-space-is-closed
  - math:thm-metric-hausdorff-separation
  - prop-se-generalized-ray-contract
dependency_roles:
  math:def-compact-space: mathematical-premise
  math:def-connected-space: mathematical-premise
  math:def-interior-closure-boundary-top: mathematical-premise
  math:def-metric-ball: mathematical-premise
  math:def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  math:thm-compact-subset-of-a-hausdorff-space-is-closed: mathematical-premise
  math:thm-metric-hausdorff-separation: mathematical-premise
  prop-se-generalized-ray-contract: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 1
---

## Definition

Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be nonempty and compact, with smooth boundary. Compactness means that every open cover of $\Theta$ in its Euclidean subspace topology has a finite subcover. Set $\Omega=\mathbb R^n\setminus\Theta$ and require it to be connected: it has no separation into two nonempty disjoint relatively open sets.

Smooth boundary is understood in the one-sided smooth-obstacle sense: for each $x\in\partial\Theta$ there are an open neighborhood $W$ of $x$, a rigid motion $Q$, an open ball $B\subset\mathbb R^{n-1}$, and $h\in C^\infty(B;\mathbb R)$, with $Q(W)\subset B\times\mathbb R$, such that $Q(\partial\Theta\cap W)=Q(W)\cap\{(y,s):s=h(y)\}$ and $Q(\Omega\cap W)=Q(W)\cap\{(y,s):s<h(y)\}$. Equivalently, $Q(\Theta\cap W)=Q(W)\cap\{(y,s):s\ge h(y)\}$. The one-sided condition is part of the smooth-obstacle convention used here.

For $R_0>0$ with $\Theta\subset B_{R_0}(0)$, where $B_{R_0}(0)=\{x\in\mathbb R^n:|x|<R_0\}$, define the truncated exterior $\Omega_0=B_{R_0}(0)\setminus\Theta$, the outer boundary piece $\Gamma_1=\partial B_{R_0}(0)$, the obstacle boundary piece $\Gamma_2=\partial\Theta$, and $\Gamma=\partial\Omega_0=\Gamma_1\cup\Gamma_2$. All boundaries are taken in $\mathbb R^n$.

The standing hypothesis (H) additionally requires $\Theta$ to be non-trapping: every generalized reflected ray in the exterior leaves every compact set in finite time. This condition is imposed on the geometry; it is not needed to define the sets above and does not here assert a common escape time.

## Definition references

[[math:def-compact-space]]

[[math:def-connected-space]]

[[math:def-interior-closure-boundary-top]]

[[math:def-metric-ball]]

[[math:def-bounded-c-k-domain-and-boundary-charts|Bounded $C^k$ domains and boundary charts]]

[[prop-se-generalized-ray-contract]]

## Justification

The one-sided graph convention is the local boundary-chart convention of [[math:def-bounded-c-k-domain-and-boundary-charts|Bounded $C^k$ domains and boundary charts]], used for every finite differentiability order. Only that local convention is used; no Sobolev interface or assertion that the unbounded exterior is bounded is imported. In the displayed chart the exterior occupies exactly one open side of the smooth boundary, as required by the domain-side hypothesis of [[prop-se-generalized-ray-contract]]. This is an explicit condition in the Definition, not a claimed deduction from a graph-only hypothesis. The generalized-ray and non-trapping convention, including glancing rays and without an assertion of a uniform escape time, is supplied by [[prop-se-generalized-ray-contract]].

The sets in the definition are uniquely determined by set difference, the Euclidean ball, and topological boundary as in [[math:def-metric-ball]] and [[math:def-interior-closure-boundary-top]]. An admissible $R_0$ exists: the traces on $\Theta$ of the balls $B_m(0)$, for positive integers $m$, cover $\Theta$; a finite subcover exists by compactness, and its largest radius contains $\Theta$.

Applied to the Euclidean metric, [[math:thm-metric-hausdorff-separation]] makes $\mathbb R^n$ Hausdorff. Thus [[math:thm-compact-subset-of-a-hausdorff-space-is-closed]] makes $\Theta$ closed, so $\Omega$ and $\Omega_0$ are open. The boundary identity follows locally. At a point of $\partial\Theta$, a sufficiently small ball lies inside $B_{R_0}(0)$, so $\Omega_0$ and $\mathbb R^n\setminus\Theta$ agree there; both $\Theta$ and its complement meet every neighborhood, giving a point of $\partial\Omega_0$. At a point of $\partial B_{R_0}(0)$, closedness of $\Theta$ gives a neighborhood disjoint from $\Theta$, and the ball and its complement both meet every neighborhood. Conversely, a point on neither boundary has a neighborhood lying entirely on one side of each of $B_{R_0}(0)$ and $\Theta$; its intersection with $\Omega_0$ is therefore either the whole neighborhood or empty. Thus no other boundary points occur. The two displayed pieces are disjoint because $\Theta$ is closed and contained in the open ball.

## Source notes

The original article supplies the geometry and notation at (1.4), and collects non-trapping and connectedness in (H). The explicit one-sided clause specifies the smooth-obstacle convention required by the independent boundary-chart and ray suppliers; it is a clarification of this generated definition, not a finding of a defect in the original article. Its citation is attribution for this article-origin definition; the justification above uses the stated mathematical suppliers.
