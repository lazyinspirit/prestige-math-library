---
title: Augmented tower comparisons preserve supported graded projections
status: draft
research_item: lem-author-16f30f6b95cb-augmented-filtered-support-transport
dependency_level: 14
---

PDF p. 16: Supported leading weight two

## Prerequisites

- [lem-filtered-support-exactness](item-lem-filtered-support-exactness)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)

## Statement
Let $F^\bullet E\to E$ and $G^\bullet E'\to E'$ be coherent augmented filtered presheaves of spectra, and let a specified natural comparison between them commute with transitions and augmentations. Suppose it is an equivalence on all stages and on the underlying spectra on a scheme $X$ and its open complement $V=X\setminus T$. Then it induces equivalences on supported stages, underlying support fibers and supported graded pieces, and the square of actual stage-to-graded projections commutes. In particular a supported normalization transported by this comparison is the normalization of the specified tower map, rather than one selected from equality of its target groups. If the stage-$q$ augmentation to the support fiber is an equivalence, the induced map obtained by its inverse and the graded projection is also preserved.

## Facts & Assumptions

**Given:** The two augmented diagrams, actual comparison and stated equivalences on $X,V$.

**Goal:** Preserve the exact supported projection and its inverse-augmentation version.

[F1] Supports are fibers of restriction, and in the stable category fibers are functorial finite limits. [def-cohomology-with-support](item-def-cohomology-with-support), [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F2] Taking these support fibers commutes with forming the graded cofiber of adjacent stages. [lem-filtered-support-exactness](item-lem-filtered-support-exactness)

## Proof

1.1 At each stage apply the fiber functor to the commuting restriction square. It takes a diagram of equivalences to an equivalence, by the universal property of the limit. This supplies the supported-stage equivalences, and applying the same argument to the underlying spectra gives the support-fiber equivalence. The augmentation square still commutes because it is the image of the given coherent augmentation square under the same functor. [F1, given]

2.1 Applying [F2] identifies the supported graded objects with the cofibers of the supported transition maps. The induced equivalences on their two initial terms give an equivalence on cofibers. The map from a stage to its cofiber is part of that cofiber diagram, so the comparison commutes with that actual projection. [F2, step 1.1]

3.1 If a stage augmentation is an equivalence, its homotopy inverse is an inverse in the homotopy category and is compatible with the transported augmentation square. Composing it with the commuting projections of step 2.1 gives the asserted preserved leading map. No independently chosen identification of homotopy groups has been used. [F1, step 1.1, step 2.1] ∎
