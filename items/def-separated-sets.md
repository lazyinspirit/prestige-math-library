---
id: def-separated-sets
kind: definition
title: "Separated sets: $\\overline{A} \\cap B = A \\cap \\overline{B} = \\varnothing$"
status: published
origin: session
deps: [def-topological-space, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, def-subspace-topology-top,
       thm-subspace-closure-and-interior]
justified_by: []
aliases: [def-separated-sets-top]
landmark: true
short: "separated sets"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Separated sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separated_sets"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "S. Willard, General Topology, §14"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$A, B \subseteq X$, with closures taken in $X$
([[def-interior-closure-boundary-top]]). Then $A$ and $B$ are **separated** when

$$\overline{A} \cap B = \varnothing \qquad \text{and} \qquad A \cap \overline{B} = \varnothing .$$

Equivalently, neither set meets the closure of the other. The condition is
symmetric in $A$ and $B$ by construction, and it is inherited downwards: if $A$
and $B$ are separated and $A' \subseteq A$, $B' \subseteq B$, then $A'$ and $B'$
are separated, because $A' \subseteq A$ forces
$\overline{A'} \subseteq \overline{A}$, the closure $\overline{A}$ being a closed
superset of $A'$ and $\overline{A'}$ the smallest such
([[thm-closure-characterisation-top]], claim 2).

**Separated sets are disjoint, and being disjoint is not enough.** From
$A \subseteq \overline{A}$ one gets
$A \cap B \subseteq \overline{A} \cap B = \varnothing$. The converse fails: in
$\mathbb{R}$ with its usual topology the sets $A = (0,1)$ and $B = [1,2)$ are
disjoint, yet $1 \in \overline{A} \cap B$, so they are not separated.

**Two sufficient conditions, both used constantly below.**

1. *Disjoint closed sets are separated.* If $A$ and $B$ are closed and disjoint
   then $\overline{A} = A$ and $\overline{B} = B$
   ([[thm-closure-characterisation-top]], claim 2), so both displayed
   intersections are $A \cap B = \varnothing$.
2. *Disjoint open sets are separated.* Let $U, V$ be open and disjoint. If
   $y \in V$ then $V$ is an open set containing $y$ and missing $U$, so
   $y \notin \overline{U}$ by clause (c) of
   [[thm-closure-characterisation-top]]; hence $\overline{U} \cap V = \varnothing$,
   and symmetrically $U \cap \overline{V} = \varnothing$.

**Separation is absolute rather than relative to a subspace.** Let
$A, B \subseteq S \subseteq X$ with $S$ carrying the subspace topology
([[def-subspace-topology-top]]). Then $A$ and $B$ are separated in the space $S$
if and only if they are separated in $X$. Indeed
$\operatorname{cl}_S(A) = \overline{A} \cap S$
([[thm-subspace-closure-and-interior]], claim 1), so

$$\operatorname{cl}_S(A) \cap B = \overline{A} \cap S \cap B = \overline{A} \cap B$$

because $B \subseteq S$, and symmetrically for the other intersection. So the
phrase "$A$ and $B$ are separated" needs no ambient space named once both sets
are fixed, and this is exactly what makes the notion the right hypothesis for
complete normality later on this page.

## Remarks

- **Why the notion is not "disjoint closures".** Requiring
  $\overline{A} \cap \overline{B} = \varnothing$ is strictly stronger, and it is
  too strong to be useful: in $\mathbb{R}$ the sets $(0,1)$ and $(1,2)$ are
  separated in the sense above, while their closures $[0,1]$ and $[1,2]$ meet.
  The definition asks only that each set avoid the *other's* closure.

- **The vocabulary collides with two others and neither is meant here.** "$A$ and
  $B$ are separated by disjoint open sets" is a different, stronger condition,
  and it is the conclusion of the normality and complete-normality axioms below,
  not the hypothesis. "Separable", meaning "has an at most countable dense
  subset", is unrelated and is not used in this library at all.

- **Nothing here needs a separation axiom.** The definition and all four
  observations above hold in an arbitrary topological space, points closed or
  not.
