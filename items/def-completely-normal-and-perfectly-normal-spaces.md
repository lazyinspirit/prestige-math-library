---
id: def-completely-normal-and-perfectly-normal-spaces
kind: definition
title: "Completely normal ($T_5$) and perfectly normal ($T_6$) spaces"
status: draft
origin: session
deps: [def-normal-and-t4-spaces, def-separated-sets,
       def-g-delta-and-f-sigma-in-a-topological-space, def-zero-sets-and-cozero-sets,
       def-t0-and-t1-spaces, def-topological-space]
justified_by: []
aliases: [def-completely-normal-space, def-perfectly-normal-space, def-t5-space, def-t6-space]
landmark: true
short: "completely normal, perfectly normal"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "S. Willard, General Topology, §15"
      url: "https://en.wikipedia.org/wiki/General_topology"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **completely normal** when any two **separated** sets can be put into
  disjoint open sets: for all $A, B \subseteq X$ that are separated
  ([[def-separated-sets]]) there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
  $X$ is **$T_5$** when it is completely normal and $T_1$
  ([[def-t0-and-t1-spaces]]).
- $X$ is **perfectly normal** when $X$ is normal ([[def-normal-and-t4-spaces]])
  **and** every closed subset of $X$ is a $G_\delta$
  ([[def-g-delta-and-f-sigma-in-a-topological-space]]). $X$ is **$T_6$** when it
  is perfectly normal and $T_1$.

As with *regular* and *normal*, neither adjective carries a $T_1$ hypothesis in
this library, and the numerals name the conjunctions.

**The $G_\delta$ condition, restated by complementation.** Every closed subset of
$X$ is a $G_\delta$ if and only if every open subset of $X$ is an $F_\sigma$,
because complementation exchanges the two classes and exchanges open with closed
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Both forms are used below,
and the second is the one the implication $T_6 \Rightarrow T_5$ consumes.

**Complete normality really is stronger than normality, on its face.** Disjoint
closed sets are separated ([[def-separated-sets]]), so the complete-normality
condition applies in particular to them; that is the whole proof of the next
item. What complete normality adds is the ability to separate sets that are not
closed, for instance the two sets $(0,1)$ and $(1,2)$ of $\mathbb{R}$, which are
separated and neither of which is closed.

**A competing definition of *perfectly normal*, and why this library does not
use it.** Some texts define a perfectly normal space to be a normal space in
which every closed set is a **zero set** ([[def-zero-sets-and-cozero-sets]]).
That condition is equivalent to the one above, but the equivalence rests on
Urysohn's lemma, which is not available at this point in the reading order; the
$G_\delta$ form is therefore the definition here, and no statement on this page
asserts the equivalence. What *is* proved here is one direction in the metric
case, where the distance function exhibits every closed set simultaneously as a
zero set and as a $G_\delta$.

## Remarks

- **Both axioms are about pairs of sets, not about points.** Neither implies
  $T_0$: the indiscrete topology on a two-point set is completely normal and
  perfectly normal, since its only separated pairs have an empty member and its
  only closed sets are open, and it is not $T_0$. That is why the numerals $T_5$
  and $T_6$ include $T_1$.

- **A frequently quoted equivalent of complete normality is not proved here.** A
  space is completely normal exactly when every subspace of it is normal, which
  is why *hereditarily normal* is the other common name. This page defines and
  uses only the separated-sets form; the hereditary characterisation belongs to a
  later page, and nothing here depends on it.

- **The chain at the top.** Perfectly normal implies completely normal, which
  implies normal; the second implication is immediate and the first is a real
  theorem, proved two items below.
