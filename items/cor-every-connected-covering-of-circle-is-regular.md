---
id: cor-every-connected-covering-of-circle-is-regular
kind: corollary
title: "Every connected covering of the circle is regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-regular-covering-characterizations,
       thm-fundamental-group-of-the-circle,
       cor-subgroups-of-abelian-groups-are-normal, thm-int-comm-ring,
       prop-real-line-mod-integers-is-compact-and-path-connected,
       lem-open-quotient-arcs-in-real-line-mod-integers,
       thm-convex-subsets-have-trivial-fundamental-group,
       def-locally-connected,
       prop-local-path-connectedness-lifts-and-descends-along-coverings,
       thm-connected-and-locally-path-connected-implies-path-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.39"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Every connected covering of $\mathbb R/\mathbb Z$ is regular, including the universal cover and the one-sheeted cover.

## Facts & Assumptions

**Given:** A connected covering $p:(E,e_0)\to(\mathbb R/\mathbb Z,[0])$.

[L1] For a covering with path-connected total space and path-connected locally path-connected base, regularity is equivalent to normality of the induced subgroup in the base fundamental group ([[thm-regular-covering-characterizations]]).

[F1] Degree gives an isomorphism from the circle fundamental group to $(\mathbb Z,+)$ ([[thm-fundamental-group-of-the-circle]]).

[F2] Every subgroup of an abelian group is normal ([[cor-subgroups-of-abelian-groups-are-normal]]).

[F3] The additive group of $\mathbb Z$ is abelian ([[thm-int-comm-ring]]).

[F4] The quotient circle is path-connected ([[prop-real-line-mod-integers-is-compact-and-path-connected]]).

[F5] Open quotient arcs are homeomorphic to convex real intervals and form arbitrarily small path-connected neighbourhoods of circle points, so the quotient circle is locally path-connected ([[lem-open-quotient-arcs-in-real-line-mod-integers]], [[thm-convex-subsets-have-trivial-fundamental-group]], [[def-locally-connected]]).

[F6] Local path-connectedness lifts from the base of a covering to its total space ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F7] A connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 By [F4] and [F5], the base is path-connected and locally path-connected. Since the covering total space is connected, [F6] and [F7] make it path-connected. By [F1] and [F3], its induced subgroup corresponds to a subgroup of an abelian group, so [F2] makes it normal. [F1, F2, F3, F4, F5, F6, F7]

2.1 Applying [L1] to step 1.1 shows that the covering is regular. [step 1.1, L1] ∎
