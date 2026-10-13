---
id: def-gr-common-subdevelopment-and-corresponding-boundary
kind: definition
title: "Common subdevelopments, maximal common developments and corresponding
  boundary points"
status: published
origin: session
domain: mathematics
dependency_level: 27
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gr-development-and-data-fixing-isometry
  - def-gr-smooth-lorentzian-objects
  - lem-gr-cauchy-set-topology-and-graph
  - lem-gr-chronology-openness
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the
        Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015):
        Definition 2.4 (common development realised as a subset of one
        development), Theorem 3.4 (maximal common development), Definition 3.5
        and Proposition 3.7 (corresponding boundary points), printed pp. 11-16"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011):
        causal convexity and the elementary regions of Theorem 2.9.9, printed
        pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be two developments of the same
data in the sense of [[def-gr-development-and-data-fixing-isometry]].

**(a) Common subdevelopment.** A **common subdevelopment** of $M$ and $M'$ is
a pair $(U,\varphi)$ in which

1. $U\subseteq M$ is an open subset with $j(\Sigma)\subseteq U$ such that the
   restriction $(U,g|_U,N|_U,j,\psi|_U)$ is a development of the same data
   (with the induced field equations on the open submanifold $U$); and
2. $\varphi:(U,g|_U,N|_U,j,\psi|_U)\to(M',g',N',j',\psi')$ is a development
   embedding in the sense of [[def-gr-development-and-data-fixing-isometry]]
   clause (c).

Here "the induced field equations on $U$" means the equations of clause (a)4
of [[def-gr-development-and-data-fixing-isometry]] restricted to $U$; the
induced Lorentzian manifold is $(U,g|_U)$ with the time orientation $N|_U$
([[def-gr-smooth-lorentzian-objects]]).

**(b) Maximal common development.** A common subdevelopment $(U^*,\varphi^*)$
is a **maximal common development** (MCD) of $M$ and $M'$ when for every
common subdevelopment $(U,\varphi)$ one has $U\subseteq U^*$ and
$\varphi^*|_U=\varphi$. Existence is not asserted by this definition; it is
proved in [[lem-gr-maximal-common-development]].

**(c) Corresponding boundary points.** Let $(U,\varphi)$ be a common
subdevelopment. Its **corresponding boundary points** are pairs
$(p,p')\in\partial^M U\times\partial^{M'}\varphi(U)$, where the boundaries are
taken in $M$ and in $M'$ respectively, such that for every open neighbourhood
$V$ of $p$ in $M$ and every open neighbourhood $V'$ of $p'$ in $M'$ there is
$x\in V\cap U$ with $\varphi(x)\in V'$.

**(d) Side of the initial surface.** Write $\Sigma_M=j(\Sigma)$ and
$\Sigma_{M'}=j'(\Sigma)$. For a corresponding pair $(p,p')$, openness of
$U\supseteq\Sigma_M$ and of $\varphi(U)\supseteq\Sigma_{M'}$ implies
$p\notin\Sigma_M$ and $p'\notin\Sigma_{M'}$.
The Cauchy-set trichotomy of
[[lem-gr-cauchy-set-topology-and-graph]] clause (a) puts each boundary point
in exactly one chronological side. These sides are open because
$I^\pm(\Sigma_M)=\bigcup_{s\in\Sigma_M}I^\pm(s)$, and each point future
and past is open by [[lem-gr-chronology-openness]] clause (a); the same
argument applies in $M'$.
For $x\in U$, its ambient and intrinsic sides agree: the trichotomy in
$U$ gives an intrinsic timelike curve between $x$ and $\Sigma_M$ in one
direction, and that curve is also an ambient curve; the disjoint ambient
trichotomy excludes the other direction. The development embedding
$\varphi$ preserves these curves and the initial surface, so corresponding
interior points have matching ambient sides in $M$ and $M'$.
Choose neighbourhoods of $p,p'$ contained in their respective sides.
Condition (c) supplies an interior witness $x$ in both neighbourhoods under
$\varphi$; hence the two sides must match. Every witness for neighbourhoods
contained in these sides then has this same sign. Thus the pair lies either
to the **future** of both initial surfaces or to their **past**, with no
cofinal witnesses of the opposite sign. The future case is used below;
the past case is its time reverse.

**(e) Scope.** These are mathematical relations between two fixed developments
and their boundary points. Neither the existence of boundary points, nor the
existence of a common subdevelopment with nonempty boundary, nor uniqueness of
a corresponding point, is asserted here.

## Remarks

Clause (a) realises the common development as a subset of $M$, breaking the
symmetry between $M$ and $M'$; this is the convention of Sbierski's second
variant, chosen because the construction below patches maps on subsets of a
fixed ambient development. Clause (c) is the definition of a corresponding
boundary pair; the equivalent characterisation by timelike curves is proved,
not assumed, in [[lem-gr-corresponding-boundary-structure]].
