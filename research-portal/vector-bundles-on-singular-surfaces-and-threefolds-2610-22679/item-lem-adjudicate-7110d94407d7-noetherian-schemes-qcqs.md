---
title: Noetherian schemes belong to the qcqs domain
status: draft
research_item: lem-adjudicate-7110d94407d7-noetherian-schemes-qcqs
dependency_level: 0
---

PDF p. 4: Motivic dimension vanishing: Noetherian domain membership

## Prerequisites

- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)
- [math:def-compact-space](https://alphabetamath.cc/item/def-compact-space)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)
- [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)
- [math:def-morphism-locally-ringed-spaces](https://alphabetamath.cc/item/def-morphism-locally-ringed-spaces)
- [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)
- [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)


## Statement
Assume the Axiom of Choice. Let $X$ be a Noetherian scheme. Every open subset of its underlying space $|X|$, with the subspace topology, is quasi-compact. Consequently $X$ is quasi-compact and quasi-separated (qcqs): its underlying space is quasi-compact, and the intersection of every two affine open subschemes is quasi-compact. Quasi-compact means that every open cover has a finite subcover, without any Hausdorff condition. The empty scheme and empty open subsets are included.

## Statement references
[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)

[math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact)

[math:def-compact-space](https://alphabetamath.cc/item/def-compact-space)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)

[math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

[math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)

[math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)

[math:def-morphism-locally-ringed-spaces](https://alphabetamath.cc/item/def-morphism-locally-ringed-spaces)

[math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces)

[math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

## Facts & Assumptions
**Given:** The Axiom of Choice and a Noetherian scheme $X$.

**Goal:** Establish quasi-compactness of every open subset and hence the qcqs conditions.

[A1] The Axiom of Choice is assumed to meet the explicit hypotheses of both spectrum and compact-open suppliers in [F2]; it also permits the finite selections of subcovers below. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] A Noetherian scheme has a finite affine open cover $X_1,\ldots,X_m$, with each $X_a$ isomorphic to the spectrum of a Noetherian ring; for $X=\varnothing$ the empty cover suffices. Affine opens carry the restricted structure sheaf and their underlying topology. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-scheme](https://alphabetamath.cc/item/def-scheme) [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)

[F2] Under Choice, the spectrum of a Noetherian ring is a Noetherian topological space, and every open subset of a Noetherian topological space is quasi-compact, including the empty open subset. [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum) [math:lem-noetherian-open-subsets-are-quasi-compact](https://alphabetamath.cc/item/lem-noetherian-open-subsets-are-quasi-compact) [math:def-noetherian-topological-space](https://alphabetamath.cc/item/def-noetherian-topological-space)

[F3] Quasi-compactness means the intrinsic finite-subcover property. Relative open sets are traces of ambient open sets, and tracing twice gives the same subspace topology. Quasi-separatedness of a scheme means quasi-compactness of intersections of two affine opens. [math:def-compact-space](https://alphabetamath.cc/item/def-compact-space) [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top) [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) The whole space, the empty set and intersections of two open sets are open. [math:def-topological-space](https://alphabetamath.cc/item/def-topological-space)

[F4] Affine identifications are isomorphisms of locally ringed spaces: here an isomorphism means a morphism with a two-sided inverse. Morphisms of locally ringed spaces are morphisms of ringed spaces, whose underlying maps are continuous and whose composition composes those maps. A homeomorphism is a continuous bijection with continuous inverse; it carries open sets bijectively to open sets. [math:def-morphism-locally-ringed-spaces](https://alphabetamath.cc/item/def-morphism-locally-ringed-spaces) [math:def-morphism-ringed-spaces](https://alphabetamath.cc/item/def-morphism-ringed-spaces) [math:def-homeomorphism-and-open-maps](https://alphabetamath.cc/item/def-homeomorphism-and-open-maps)

## Proof
1.1 Choose the finite cover of [F1]. For any open subset $O\subseteq|X|$, the subset $O\cap X_a$ is open in $X_a$. By [F4] the affine identification and its inverse induce continuous maps whose composites are identity maps, hence a homeomorphism. Therefore the inverse image of $O\cap X_a$ is open in the spectrum of the Noetherian coordinate ring. By [A1] and [F2] that inverse image is quasi-compact. Pulling any open cover back along this homeomorphism and pushing a finite subcover forward proves that $O\cap X_a$ is quasi-compact in its subspace topology. The successive subspace topologies agree by [F3]. [A1, F1, F2, F3, F4, choose]

2.1 Let $\mathcal U$ be any open cover of the space $O$. For each $a$, its traces on $O\cap X_a$ form an open cover of that space. Step 1.1 gives finitely many such traces covering it; choose their corresponding members of $\mathcal U$. There are only finitely many $a$, so the union of these finite lists is a finite subfamily of $\mathcal U$ and covers $O=\bigcup_{a=1}^m(O\cap X_a)$. If $O$ is empty, take the empty subfamily. Hence every open $O$ is quasi-compact. Taking $O=|X|$ proves quasi-compactness of $X$, and taking $O$ to be the intersection of any two affine opens proves quasi-separatedness by [F3]. Thus $X$ is qcqs. [A1, F1, F3, step 1.1] ∎
