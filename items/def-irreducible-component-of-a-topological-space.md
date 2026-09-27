---
id: "def-irreducible-component-of-a-topological-space"
kind: "definition"
title: "Irreducible components of a topological space"
status: draft
origin: pipeline
deps: [def-topological-space, def-irreducible-topological-space-and-subset, def-maximal-element, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Topology"
      url: https://stacks.math.columbia.edu/download/topology.pdf
---

## Definition

Let $(X,\mathcal T)$ be a topological space ([[def-topological-space]]),
and let irreducible subsets be as in
[[def-irreducible-topological-space-and-subset]].

An **irreducible component** of $X$ is an irreducible subset $C\subseteq X$
which is **maximal** among the irreducible subsets of $X$ under inclusion
([[def-maximal-element]]): if $D\subseteq X$ is irreducible and
$C\subseteq D$, then $D=C$.

The empty space has no irreducible components, because an irreducible space is
required to be nonempty; a one-point space has exactly one irreducible
component, namely the point itself, because the only nonempty subset of a
one-point space is the space itself. Assuming the Axiom of Choice
([[def-axiom-of-choice]]), for a nonempty space the irreducible components
exist, they are closed subsets whose union is $X$, every
irreducible subset of $X$ is contained in an irreducible component, and $X$ is
irreducible exactly when $X$ is its own unique irreducible component. A
Noetherian space has only finitely many irreducible components. These statements
are proved under that hypothesis in [[lem-irreducible-components-of-a-topological-space]] and
[[lem-noetherian-space-has-finitely-many-irreducible-components]].
