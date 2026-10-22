---
id: lem-os-link-surgery-filtered-complex-and-triangle
kind: lemma
title: "Ozsváth–Szabó link-surgery filtered complex and exact triangle"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-link-surgery-filtered-complex-for-double-branched-cover
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: direct
axiom_use: "Uses the ACω analytic branch of the supplied Heegaard Floer construction."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §§2 and 4, Theorems 4.1 and 4.7"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Let $Y$ be a closed oriented three-manifold and let $\mathbb L$ be an ordered framed $n$-component link in $Y$ with an admissible pointed Heegaard multi-diagram subordinate to all its sublinks. For each subset $I\subseteq\{1,\ldots,n\}$, let $Y_I$ denote the result of the specified surgeries on the components indexed by $I$. The mod-two polygon maps on the direct sum of the hat complexes of the $Y_I$ form a differential whose component maps do not decrease the cube filtration. The filtered total complex has homology isomorphic to $\widehat{HF}(Y_{\{1,\ldots,n\}};\mathbb F_2)$ and its associated surgery triangle yields the long exact sequence for any surgery triad. No filtered quasi-isomorphism between distinct surgery presentations is included.

## Statement references

[[def-link-surgery-filtered-complex-for-double-branched-cover|Resolution-cube filtered module]]

[[lem-os-disk-and-polygon-analytic-foundations|Disk and polygon regularity, compactness, and gluing obligation]]

[[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant|Closed-manifold Floer invariance obligation]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §§2 and 4](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** An ordered framed link and an admissible Heegaard multi-diagram subordinate to each sublink.

[F1] The cube vertices and filtration are the surgery-cube construction in [[def-link-surgery-filtered-complex-for-double-branched-cover]].

[F2] The total differential, its square-zero identity, the vertex identifications, and the surgery exact triangle require the polygon analytic statement ([[lem-os-disk-and-polygon-analytic-foundations]]).

[F3] The total homology is interpreted as an invariant of the filled manifold only after closed-manifold Heegaard Floer invariance ([[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]).

## Proof

1.1 The cube module and its filtration are fixed by [F1]. The candidate total differential is the sum of polygon-count maps from a vertex to coordinatewise larger vertices. To be a filtered chain complex it must have square zero, and its associated filtered data must be natural under the admissible multi-diagram choices. [F1, given]

1.2 The required square-zero, compactification, gluing, and surgery-map identities are [F2]; identifying the total homology with a manifold invariant further uses [F3]. Those are substantial analytic and move-invariance inputs, and no local proof supplying them has been found. The exact unresolved obligation is to construct the multi-diagrams and polygon maps, prove all required boundary strata and mod-two cancellations, and derive the mapping-cone exact triangle for every surgery triad. [F2, F3, step 1.1]
