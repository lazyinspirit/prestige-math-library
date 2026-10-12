---
id: def-gr-common-subdevelopment-and-corresponding-boundary
kind: definition
title: "Common subdevelopments, maximal common developments and corresponding boundary points"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-development-and-data-fixing-isometry, def-gr-smooth-lorentzian-objects]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Definition 2.4 (common development realised as a subset of one development), Theorem 3.4 (maximal common development), Definition 3.5 and Proposition 3.7 (corresponding boundary points), printed pp. 11-16"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): causal convexity and the elementary regions of Theorem 2.9.9, printed pp. 46-50"
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

**(d) Side of the initial surface.** For a corresponding pair $(p,p')$: if
$V,V'$ range over a base of neighbourhoods, the condition of (c) forces every
$x$ witnessing it to lie on one side of $j(\Sigma)$: either $x\in I^+(j(\Sigma))$
for cofinally many witnesses, or $x\in I^-(j(\Sigma))$ for cofinally many
witnesses, but not both, since $I^\pm(j(\Sigma))$ are open and determined by
the trichotomy of [[lem-gr-cauchy-set-topology-and-graph]]. The corresponding
pair is then said to lie to the **future** or to the **past** of the initial
surface; the future case is the one used in this batch, the past case being
its time reverse.

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
