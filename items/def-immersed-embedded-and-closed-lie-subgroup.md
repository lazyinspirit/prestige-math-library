---
id: def-immersed-embedded-and-closed-lie-subgroup
kind: definition
title: Immersed, embedded, and closed Lie subgroups
status: draft
origin: pipeline
deps: [def-lie-group, def-lie-group-homomorphism-isomorphism-and-automorphism, def-immersed-submanifold, def-smooth-embedding, def-topological-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Chapter 7, Lie subgroups; Theorem 19.25, printed page 506
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Definitions 3.10 and 4.5, printed pages 26 and 29
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

An **immersed Lie subgroup** of a Lie group $G$ is a Lie group $H$ together
with an injective smooth group homomorphism $i:H\to G$ that is an immersion.
When no adjective is printed, “Lie subgroup” means an immersed Lie subgroup.
It may be identified with the set $i(H)$ only if that set is remembered with
the intrinsic smooth-manifold topology transported from $H$; this topology
need not equal the subspace topology from $G$.

The subgroup is **embedded** if $i$ is a smooth embedding, so its intrinsic
topology is the subspace topology. It is **closed** if $i(H)$ is closed as a
subset of $G$. These adjectives refer to the specified immersed subgroup;
closedness alone does not silently replace its given intrinsic structure.

The definition permits $H=\{e\}$, $H=G$, disconnected subgroups, and
zero-dimensional subgroups. Unless stated otherwise, all groups here are the
finite-dimensional real Lie groups fixed by [[def-lie-group]].
