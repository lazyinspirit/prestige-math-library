---
id: def-urysohn-space
kind: definition
title: "Urysohn ($T_{2\\frac{1}{2}}$) space: distinct points have neighbourhoods with disjoint closures"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-topological-space, def-hausdorff-space, def-neighbourhood-top,
       def-interior-closure-boundary-top]
justified_by: []
aliases: [def-t2-and-a-half-space]
landmark: false
short: "Urysohn ($T_{2\\frac12}$) space"
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
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "S. Willard, General Topology, §13"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]]. Then $X$ is an **Urysohn
space**, also written **$T_{2\frac{1}{2}}$**, when any two distinct points have
open neighbourhoods whose *closures* are disjoint: for all $x, y \in X$ with
$x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad \overline{U} \cap \overline{V} = \varnothing .$$

Equivalently, by [[def-neighbourhood-top]], distinct points have disjoint closed
neighbourhoods: if $U$ and $V$ are as displayed then $\overline{U}$ and
$\overline{V}$ are disjoint closed neighbourhoods of $x$ and $y$; conversely
disjoint closed neighbourhoods $K \ni x$ and $L \ni y$ contain open
$U \ni x$ and $V \ni y$ with $\overline{U} \subseteq K$ and
$\overline{V} \subseteq L$, since $K$ and $L$ are closed, so the closures are
disjoint.

The condition is vacuous for a space with at most one point, and nothing is
asserted about equal points.

**The condition strictly strengthens the Hausdorff condition** on its face:
$U \subseteq \overline{U}$ and $V \subseteq \overline{V}$, so disjointness of the
closures forces disjointness of $U$ and $V$ and hence the Hausdorff property
([[def-hausdorff-space]]). That implication is proved as the next item, together
with the implication that puts Urysohn spaces below the regular $T_1$ spaces.
This page does not exhibit a Hausdorff space that is not Urysohn, and it does not
assert that one exists: every witness reachable from the material developed here
would need machinery this page does not have, so the question whether the
implication reverses is left open here.

**A live naming collision, flagged here and settled in this page's
conventions.** Two different conditions travel under Urysohn's name:

- the one defined above, separation of points by *disjoint closed
  neighbourhoods*, which is what this library calls **Urysohn** and
  $T_{2\frac{1}{2}}$;
- separation of points by a *continuous real-valued function*, which is usually
  called **completely Hausdorff** and which this library does not define.

Some texts exchange the two names. Neither is **Urysohn's lemma**, a theorem
about normal spaces that is not proved on this page at all
([[rem-separation-axiom-conventions]]).

## Remarks

- **The fractional numeral is an interpolation, not an arithmetic fact.** It
  records that the condition sits between $T_2$ and $T_3$ in the standard
  ordering and carries no other meaning; the same is true of $T_{3\frac12}$
  later on this page.

- **Closures, not interiors.** Replacing "$\overline{U} \cap \overline{V} =
  \varnothing$" by "$U \cap V = \varnothing$" gives back the Hausdorff condition
  exactly, so the whole content of the axiom is the passage to closures.
