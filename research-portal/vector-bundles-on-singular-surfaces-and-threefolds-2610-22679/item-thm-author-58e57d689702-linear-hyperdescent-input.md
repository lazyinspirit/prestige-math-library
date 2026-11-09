---
title: Exact linear hyperdescent and derived-localization input
status: published
research_item: thm-author-58e57d689702-linear-hyperdescent-input
dependency_level: 0
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

None.

## Statement
For a small Grothendieck site $\mathcal C$ and a commutative unital ring $\Lambda$, the localization of presheaves of unbounded complexes of $\Lambda$-modules at maps inducing isomorphisms on all associated cohomology sheaves has as its local objects exactly the objects satisfying descent for every hypercover. Its homotopy category is $D(\operatorname{Sh}(\mathcal C,\Lambda))$. Equivalently its hypercomplete reflector is $L^h=Ri\,a$, represented by evaluating a K-injective sheaf resolution after exact degreewise sheafification. Hypercover descent means that evaluation on an augmented hypercover is the derived product totalization of the cosimplicial evaluation diagram.

## Localization convention
The superscript $h$ records localization at cohomology-sheaf equivalences. Ordinary derived sheafification $L^o$ instead reflects into presheaves satisfying covering-family/Čech descent. Every hypercomplete local object is ordinary local; no equivalence $L^oP\simeq L^hP$ for arbitrary unbounded $P$ is asserted.

## External input
Import the stated established hypercover criterion and derived-sheaf model comparison. The source uses homological complexes; reindexing to cochains converts its homology sheaves into cohomology sheaves without changing which maps are local equivalences. The completed general site-derived input supplies K-injective resolutions on the chosen small site.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] The exact theorem and comparison recorded in External input.

## Proof
1.1 Import Theorem5.7 and Lemma5.10, with Definitions5.1/5.3, for the arbitrary small site and coefficient ring. [F1]

2.1 Fact5.15 identifies its localization with the derived category of sheaves. The K-injective reflector has the same local equivalences and target derived sheaves, hence is the same localization by its universal property. This is a precise external model/descent theorem, not a deduction of hyperdescent from ordinary Čech descent. [F1, step 1.1] ∎
