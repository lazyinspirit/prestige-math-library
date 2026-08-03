---
id: def-adjunction-cone-suspension
kind: definition
title: "The adjunction space $Y \\cup_f X$ glued along a continuous map, and the cone and the suspension of a space as quotients of $X \\times [0,1]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-quotient-topology, def-disjoint-union-topology, def-product-topology,
       def-subspace-topology-top, def-continuous-map-top, def-interval,
       def-metrizable-space, lem-real-line-is-a-metric-space,
       thm-coproduct-universal-property]
justified_by: []
aliases: [def-adjunction-space, def-cone-top, def-suspension-top, def-mapping-cone-top]
landmark: true
short: "adjunction space, cone, suspension"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Adjunction space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Adjunction_space"
    - title: "Cone (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cone_(topology)"
    - title: "Suspension (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Suspension_(topology)"
pipeline_run: null
---

## Definition

Throughout, $[0,1]$ denotes the closed unit interval ([[def-interval]]) with the
subspace topology inherited from the usual topology of $\mathbb{R}$
([[def-subspace-topology-top]], [[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]), and $X \times [0,1]$ the binary product with the
product topology ([[def-product-topology]]). All three constructions below are
quotients ([[def-quotient-topology]]) of a space already built on this page, and
none of them needs anything further.

**Adjunction space.** Let $X$ and $Y$ be topological spaces, let $A \subseteq X$
carry the subspace topology, and let $f : A \to Y$ be continuous
([[def-continuous-map-top]]). Form the disjoint union $Y \sqcup X$ with its
canonical injections $\kappa_Y$ and $\kappa_X$
([[def-disjoint-union-topology]]) and let $\sim_f$ be the relation on $Y \sqcup X$
whose classes are

$$C_y \;:=\; \{\kappa_Y(y)\} \cup \{\, \kappa_X(a) : a \in A,\ f(a) = y \,\} \quad (y \in Y), \qquad \{\kappa_X(x)\} \quad (x \in X \setminus A) .$$

These sets are pairwise disjoint and their union is $Y \sqcup X$, since every
element of $Y \sqcup X$ is $\kappa_Y(y)$ for exactly one $y$, or $\kappa_X(x)$
for exactly one $x$, and in the latter case lies in $C_{f(x)}$ when $x \in A$ and
in its own singleton otherwise. A family of pairwise disjoint nonempty sets
covering a set is the family of classes of exactly one equivalence relation, so
$\sim_f$ is well defined. The **adjunction space** is the identification space

$$Y \cup_f X \;:=\; (Y \sqcup X)/\!\sim_f$$

with the quotient topology of its canonical projection. It is said to be obtained
by **gluing $X$ to $Y$ along $f$**: each point $a \in A$ is identified with its
image $f(a)$, and nothing else is identified.

**Collapsing a subset.** For a space $Z$ and a nonempty $B \subseteq Z$, write
$Z/B$ for the quotient of $Z$ by the equivalence relation whose classes are $B$
and the singletons $\{z\}$, $z \notin B$ ([[def-quotient-topology]]): all of $B$
becomes one point and nothing else is identified.

**Cone.** The **cone** on a space $X$ is

$$CX \;:=\; \big(X \times [0,1]\big)\big/\big(X \times \{1\}\big) ,$$

the product of $X$ with the unit interval, with the whole top face collapsed to a
single point, called the **apex**. The definition presupposes only that
$X \times \{1\}$ is nonempty, which holds exactly when $X$ is nonempty; for
$X = \varnothing$ the product is empty, the quotient of the empty space is empty,
and no apex is produced; this library nonetheless **takes $C\varnothing$ to be the
one-point space by convention**, so that the apex always exists and every cone is
nonempty. The convention is a stipulation, not a consequence of the description
above, which gives the empty space.

**Suspension.** The **suspension** of $X$ is

$$\Sigma X \;:=\; \big(X \times [0,1]\big)\big/\!\sim ,$$

where $\sim$ has as classes $X \times \{0\}$, $X \times \{1\}$, and the singletons
$\{(x,t)\}$ for $0 < t < 1$. So both faces are collapsed, each to its own point,
and the two resulting points are distinct as soon as $X$ is nonempty. For
$X = \varnothing$ this library **takes $\Sigma\varnothing$ to be the two-point
discrete space**, one apex from each end, matching the convention that a
suspension is two cones glued along $X$; the alternative stipulation of a single
point is also in use in the literature, and nothing here depends on the choice.

**Mapping cone.** For a continuous $f : X \to Y$ the **mapping cone** is the
adjunction space $Y \cup_{f'} CX$, where $CX$ is the cone, $X$ is identified with
the subspace $X \times \{0\}$ of $X \times [0,1]$ and thence with its image in
$CX$, and $f'$ is the corresponding map into $Y$. It is recorded here as the
standard instance of the two constructions used together, and nothing below
depends on it.

**What is deliberately not asserted.** These constructions produce spaces, and
this page proves nothing about which of them are homeomorphic to which. The
invariants that separate them, connectedness, compactness and the homotopy
notions, are not available **for general topological spaces** at this point in the
reading order: connectedness and compactness are developed here only for subsets
of $\mathbb{R}$ ([[def-connected-r]]) and for metric spaces
([[def-metric-compactness]]), and neither development applies to a quotient that
has not been shown metrizable, while the homotopy notions are absent altogether.
So no statement here says that two of these spaces are different, and none says
that the cone or the suspension of a familiar space is any particular familiar
space.

## Remarks

- **Every construction above is a quotient of a coproduct or of a product, and
  that is the whole point.** The adjunction space needs the disjoint union
  ([[def-disjoint-union-topology]]) so that $X$ and $Y$ start out unattached, and
  then one quotient to attach them; the cone and the suspension need the product
  with $[0,1]$ and then one quotient. So the constructions of this page suffice,
  and the universal properties already proved apply verbatim: a continuous map
  out of $Y \cup_f X$ is exactly a pair of continuous maps out of $Y$ and out of
  $X$ agreeing along $f$, by [[thm-coproduct-universal-property]] together with
  [[thm-quotient-universal-property]].

- **Why a partition rather than a generated relation.** The classes of $\sim_f$
  are written down explicitly instead of taking "the equivalence relation
  generated by $\kappa_X(a) \sim \kappa_Y(f(a))$". The two agree, but the
  explicit form makes the verification that $\sim_f$ is an equivalence relation a
  one-line check on a partition, and it makes the saturated sets easy to
  recognise, which is what every computation with the quotient topology needs.

- **The interval is the only piece of $\mathbb{R}$ used.** Nothing here needs the
  order or the arithmetic of $[0,1]$ beyond the fact that it is a topological
  space with two distinguished points $0$ and $1$; the choice of $[0,1]$ rather
  than another such space is conventional, and the companion page's cylinder and
  Mobius band are quotients of $[0,1] \times [0,1]$ for the same reason.
