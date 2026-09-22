---
id: def-torus-and-maximal-torus-in-a-compact-lie-group
kind: definition
title: Tori and maximal tori
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-group, def-immersed-embedded-and-closed-lie-subgroup]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4, opening definitions of torus and maximal torus"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§8"
---

## Definition

Let $G$ be a compact Lie group with identity $e$ ([[def-lie-group]]).

- A **torus** is a compact connected abelian Lie group. The basic example is
  the circle group $S^1=\mathbb R/\mathbb Z$; the product of $r$ copies of
  $S^1$ is a torus of dimension $r$.
- A **subgroup** of $G$ is a subgroup in the algebraic sense; by a Lie
  subgroup we mean a subgroup that is an immersed, embedded or closed Lie
  subgroup in the sense of
  [[def-immersed-embedded-and-closed-lie-subgroup]]. A torus *of* $G$ is a
  subgroup $T\le G$ that is a torus in the above sense and is a closed
  (equivalently, embedded) Lie subgroup of $G$.
- A **maximal torus** of $G$ is a torus $T\le G$ that is maximal under
  inclusion among torus subgroups of $G$: no torus subgroup of $G$ properly
  contains $T$. Maximality is with respect to inclusion of subgroups, not with
  respect to dimension or Lie algebra alone.

Since $G$ is a finite-dimensional real Lie group, a closed subgroup of $G$ is
an embedded Lie subgroup (this is Cartan's closed subgroup theorem, used later
on this page); in particular every maximal torus is a compact connected abelian
embedded Lie subgroup, and its Lie algebra is a subspace of
$\operatorname{Lie}G$.

## Remarks

- A torus is a compact connected abelian *Lie* group; the compact abelian
  topological group $\mathbb Z_p$ for a prime $p$ is not a torus because it is
  totally disconnected (and is not a positive-dimensional Lie group), and a disconnected
  compact abelian Lie group such as $\mathbb Z/2$ is not a torus either.
- Connectedness is part of the definition: the orthogonal group $O(2)$ is a
  compact Lie group that is not connected, and its identity component $SO(2)$
  is its unique maximal torus; the reflection component contains no torus.
- In an abelian compact Lie group every subgroup is normal. If $A$ is compact
  abelian and possibly disconnected, every torus in $A$ is connected and hence
  lies in the identity component $A^0$, which is itself a torus; so $A^0$ is
  the unique maximal torus of $A$ in that case. Maximality here always means
  *largest* in the inclusion order among torus subgroups.
