---
title: The stable free-class comparison is locally integrally acyclic
status: draft
research_item: lem-author-3cde9692a7e9-local-free-test
dependency_level: 19
---

PDF p. 11: Lemma5.3, second Chern additivity

## Prerequisites

- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [thm-author-3cde9692a7e9-plus-model-input](item-thm-author-3cde9692a7e9-plus-model-input)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

Fix a noetherian finite-dimensional scheme $X$ over a field and its small Nisnevich site, with the completed local K-space model. Write $\mathcal K=\Omega^\infty K_{\rm Perf}$ and $\mathcal B=BGL=\operatorname{colim}_nBGL_n$. The actual stable free-class construction gives a natural map $j:\underline{\mathbb Z}\times\mathcal B\to\mathcal K$, taking $(m,g)$ to the rank-$m$ translate of the reduced free-bundle class of $g$. It is an integral homology equivalence locally on this site. The product $j\times j$ has the same property. This is a sheaf-local assertion: it is not an assertion that this map is a homology equivalence on every affine ring with nonfree projective classes.

## Facts & Assumptions

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated universe and site-size bounds. They are inherited from the plus and actual sheaf K-space comparisons in [F1]–[F2] when constructing and identifying the local free-class map at step 1.1. The product chain calculation in step 2.1 adds no further choice principle.

[F1] [thm-author-3cde9692a7e9-plus-model-input](item-thm-author-3cde9692a7e9-plus-model-input) identifies the canonical free-class map at a Nisnevich local ring $R$ with $\mathbb Z\times BGL(R)\to\mathbb Z\times BGL(R)^+\simeq\Omega^\infty K(R)$. Projectives over $R$ are free and $K_0(R)=\mathbb Z$.

[F2] [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) fixes this actual sheaf K-space comparison, its completion construction, and the present perfect K-theory model. Direct sum induces the actual K-space addition; on stable free classes it is the block-sum operation, coherently.

## Proof
**Given:** The stated scheme/site/model, AC and the existing size bounds.

**Goal:** Identify the precise local acyclic comparison and its product.

1.1 Construct $j$ using the actual core/free-module map into K, stabilization by a trivial line, and rank translation. Its addition square is the block-sum/direct-sum square of [F2]. On the local stalks of the site it is exactly the canonical plus comparison in [F1], so the plus map gives an isomorphism on all integral homology groups there. The sheaf of ranks is the locally constant integer sheaf, not an arbitrary objectwise constant value on disconnected objects. [F1, F2, construct, A1]

2.1 On each local component pair the homotopy fiber of the product plus map is the product of the two acyclic fibers. The integral Eilenberg–Zilber/Künneth calculation makes that fiber acyclic: normalized integral chains of simplicial sets are nonnegative complexes of free groups, and tensoring their augmentation quasi-isomorphisms gives the augmentation quasi-isomorphism for the product. Equivalently the product induces the same integral homology isomorphism. Products commute with taking local stalks here, proving the assertion for $j\times j$. Nothing says the affine global projective classes are all free. [F1, step 1.1] ∎
