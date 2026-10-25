---
id: lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions
kind: lemma
title: Common plaque lifted caps admit nested source-disk inclusions
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
- def-countable-choice-principle-for-foliation-pair
- lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches
- lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood
- lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
- lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 15
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: S. P. Novikov, The Topology of Foliations (complete English translation)
    url: https://homepage.mi-ras.ru/~snovikov/23.pdf
    locator: §8, printed pp. 26-28; nested source-disk adapter supplied locally
---

## Statement

For recurrent caps with simple universal-cover boundaries and a common interior plaque patch, one can choose an increasing sequence of source-disk inclusions whose projected cap maps agree on the included disks, even if the projected caps are immersed.

## Facts & Assumptions

**Given:** Recurrent caps with simple universal-cover boundaries and a common interior plaque patch supplied by [[lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches]], with the fixed-neighbourhood avoidance of [[lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood]].

[F1] The in-pair item [[lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches]] gives one common plaque patch in a leaf $B$ whose lifts lie in the interiors of all sufficiently late caps; the in-pair item [[lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood]] gives the avoidance of the original loop $\gamma$; the in-pair item [[lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band]] supplies the lifted Jordan disk regions and their diffeomorphic disk parametrizations.

[F2] The sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the Jordan disk in the leaf universal cover and the compact separation of disjoint compact sets in the metric ambient manifold.

[F3] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Fix a late cap $C_n$ and a later cap $C_m$ from the recurrent family. The projected image of $C_n$ is compact and disjoint from the original loop $\gamma$ by the avoidance clause of [F1], so the two compact sets $\operatorname{image}(C_n)$ and $\gamma(S^1)$ have positive distance by [F2]; uniform convergence $\gamma_{t(s)}\to\gamma$ therefore implies that every sufficiently late boundary $\gamma_{t(s_m)}$ avoids the entire projected image of $C_n$. Base both lifted caps in the universal cover of $B$ at the same point of their common interior plaque patch. [F1, F2, given]

2.1 The Jordan disk regions $\Delta_n$ and $\Delta_m$ overlap at that common point, and $\partial\Delta_m$ is disjoint from $\Delta_n$ because its projection avoids the image of $C_n$. Any path in the connected disk $\Delta_n$ from the common interior point to another point cannot exit $\Delta_m$ without crossing $\partial\Delta_m$, so $\Delta_n\subseteq\operatorname{int}\Delta_m$. The disk parametrizations into $\Delta_n$ and $\Delta_m$ are diffeomorphisms by [F1], so their inverses compose to a $C^2$ embedding $h_{n,m}:D\to\operatorname{int}D$ on the actual reference C² disk region $D$ of the development satisfying $C_n=C_m\circ h_{n,m}$ as projected maps. [F1, step 1.1]

3.1 Fix the recurrence sequence once. At each stage take the least later index whose boundary avoids the preceding compact cap image; step 1.1 guarantees such an index. This is a deterministic recursion on natural numbers, requiring no dependent choice, and produces the required increasing sequence of source-disk inclusions whose projected cap maps agree on the included disks. This is nesting of source disks in one based universal cover, not a claim that the ambient projected images are embedded disks, and the maps $h_{n,m}$ are exactly the base gluing maps needed by the immersed paired-sweep seam lemma. [F1, F2, F3, step 2.1] ∎
