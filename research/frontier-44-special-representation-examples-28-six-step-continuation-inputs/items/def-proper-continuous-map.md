---
id: def-proper-continuous-map
kind: definition
title: Proper continuous maps of topological spaces
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-compact-space, def-continuous-map-top, def-hausdorff-space, def-locally-compact-space, def-subspace-topology-top, def-topological-space, lem-compactness-of-a-subspace-is-ambient]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Louis Verdier, Dualité dans la cohomologie des espaces localement compacts, Séminaire N. Bourbaki 1964–1966, exposé 300, pp. 337–349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20): §12 flasque sheaves, §16 cohomology on Hausdorff quasi-compact spaces, §17 the base change map, §18 proper base change in topology, §21 cohomology with support in a closed subset, §54 projection formula"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X$ and $Y$ be topological spaces ([[def-topological-space]]) and let
$f:X\to Y$ be continuous ([[def-continuous-map-top]]). Then $f$ is **proper**
when for every compact subset $K\subseteq Y$ ([[def-compact-space]]) its
preimage $f^{-1}(K)$ is a compact subset of $X$. Compactness of subsets is the
intrinsic condition of [[def-compact-space]], namely compactness of the
subspace $f^{-1}(K)$ with the subspace topology ([[def-subspace-topology-top]]);
by [[lem-compactness-of-a-subspace-is-ambient]] it is equivalent to the ambient
reading, so a subset is compact exactly when every cover by open subsets of the
ambient space has a finite subcover, and the two readings are used
interchangeably below without further comment.

This is the notion of properness used throughout the analytic six-operation
development on this page, where the spaces involved are locally compact
Hausdorff ([[def-locally-compact-space]], [[def-hausdorff-space]]). The
stability properties consumed by the later items — closed inclusions are
proper, composites of proper maps are proper, properness is preserved by base
change along a continuous map into a Hausdorff space, and fibres and closed
subspaces of a proper map inherit properness — are proved in the lemma
`lem-proper-continuous-map-stability` on this page. The definition involves no
choice principle: it quantifies over compact subsets and preimages only.
