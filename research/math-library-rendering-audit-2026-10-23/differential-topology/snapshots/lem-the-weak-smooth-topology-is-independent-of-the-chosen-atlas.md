---
id: lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas
kind: lemma
title: "The weak smooth topology is independent of the chosen atlas"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-weak-compact-open-smooth-topology-on-mapping-spaces, def-smooth-manifold, def-compact-space, thm-chain-rule-for-differentials-of-smooth-maps, thm-heine-cantor-metric, thm-compactness-agrees-with-metric-compactness, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, lem-compactness-of-a-subspace-is-ambient, thm-extreme-value-metric]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 (disk), Definition 2.5 (Serre fibration), Definition 2.6 and Proposition 2.7 (flexible sheaves)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem (notes by C. Elliott), PDF pp. 1–4: Lemma 1.1, Corollary 1.2, Lemma 1.3 (Hirsch–Smale Fibration Lemma, n > k), Theorems 1.5 and 1.7, Lemma 1.6, Lemma 1.9"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
dependency_level: 1
---

## Statement

The weak compact-open $C^\infty$ topology on $C^\infty(M,Q)$ is independent of the atlases of the fixed smooth structures used to describe it. In particular any supplied countable locally finite smooth atlas suffices. It is the initial topology for restriction of all jets to compact subsets of $M$: on an arbitrary compact $K$, restriction retains every coordinate derivative of every order, not merely the values of the map on $K$. Thus two smooth maps agreeing on $K$ but having different derivatives there have different restricted jet data.

## Facts & Assumptions

**Given:** Smooth manifolds $M,Q$ and two atlases of their fixed smooth structures.

[F1] Weak neighbourhoods constrain finitely many coordinate derivatives on compact chart pieces ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]]); compatible chart changes are smooth ([[def-smooth-manifold]]).

[L1] Coordinate balls have compact closures inside prescribed open neighbourhoods; compact subsets admit finite ambient open subcovers ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]], [[lem-compactness-of-a-subspace-is-ambient]]).

[L2] The chain rule and its repeated applications express finite-order derivatives of a composite in terms of finite-order derivatives of its factors ([[thm-chain-rule-for-differentials-of-smooth-maps]]). Continuous functions on compact Euclidean pieces are bounded and uniformly continuous ([[thm-extreme-value-metric]], [[thm-heine-cantor-metric]]).

## Proof

**Proof technique:** direct.

1.1 Fix a neighbourhood specified in the first atlases and a map $h$ belonging to it. On each of its nonempty compact pieces $K_i$, the maximum derivative error of $h$ is strictly smaller than the prescribed tolerance, so there is a positive residual margin. Around each point of $K_i$, choose a coordinate ball with compact closure inside the old source chart, a source chart of the second atlas, and the inverse image under $h$ of a target chart of the second atlas intersected with the old target chart. Finitely many smaller balls cover $K_i$ by [L1]. The resulting closed pieces $C_{ij}$ are compact, cover $K_i$, and lie entirely in these chart overlaps; unlike intersections of $K_i$ with open chart domains, they really are compact. [F1, L1, given, choose]

2.1 Choose compact target neighbourhoods of $h(C_{ij})$ inside the target overlaps, and impose sufficiently small zeroth-order conditions to keep nearby maps there. Source transition derivatives are bounded on the $C_{ij}$; target transition derivatives are bounded and uniformly continuous on these fixed target neighbourhoods. Repeated chain and product rules write each derivative in an old chart as a finite sum of products of new-coordinate derivatives and transition derivatives evaluated at the nearby map. Uniform continuity of the latter, together with boundedness of the former near $h$, implies that sufficiently small new-coordinate errors through order $r_i$ make each old-coordinate error smaller than the residual margin from step 1.1. This comparison holds uniformly on each $C_{ij}$. [L2, step 1.1, algebra]

3.1 Intersect the finitely many new-chart conditions furnished by step 2.1. They give a weak neighbourhood of $h$ contained in the original neighbourhood, since the $C_{ij}$ cover each $K_i$. Thus every first-atlas neighbourhood is open in the second-atlas topology. Interchanging the atlases proves equality. This also applies to any supplied countable locally finite atlas; no existence claim about such an atlas is needed here. [F1, step 1.1, step 2.1]

4.1 Give the set of restricted jet data on a compact $K$ the topology generated by the finite-order chartwise uniform conditions on compact subsets of $K$. Every such condition pulls back to a weak open condition on $C^\infty(M,Q)$, and every weak basic condition is a pullback of one of them, using its compact piece $K_i$. These two inclusions prove the asserted initial-topology description. Retaining jets makes this description meaningful even for a singleton or a compact set with empty interior. [F1, step 3.1] ∎
