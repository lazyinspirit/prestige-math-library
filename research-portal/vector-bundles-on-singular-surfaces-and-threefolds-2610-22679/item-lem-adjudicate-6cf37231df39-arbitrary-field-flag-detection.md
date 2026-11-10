---
title: Flag detection over an arbitrary field by prime-field restriction
status: published
research_item: lem-adjudicate-6cf37231df39-arbitrary-field-flag-detection
dependency_level: 9
---

PDF p. 3: qcqs scheme conventions; PDF p. 11: Lemma 5.3 and Proposition 5.5: flag detection prerequisite; PDF p. 14: Lemma 6.4: lower-Chern comparison prerequisite

## Prerequisites

- [thm-author-ab0a6fc202cb-elmanto-morrow-projective-input](item-thm-author-ab0a6fc202cb-elmanto-morrow-projective-input)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)
- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, arXiv:2309.08463v1 · Theorem 1.1 opening, printed p. 3; Theorem 5.24(2), printed p. 43, preceding projectivization convention, and proof conclusion p. 44; negative-weight convention p. 34](https://arxiv.org/pdf/2309.08463v1)

## Statement
Assume the Axiom of Choice and the fixed site-size and universe bounds of the actual motivic complexes. Let $k$ be any field and $X$ any qcqs $k$-scheme. For finitely many finite locally free sheaves on $X$, the simultaneous line-quotient flag tower $q:Y\to X$, constructed on the finite common clopen rank partition, detects integral motivic cohomology:
$$q^*:H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)\longrightarrow H^{a,b}_{\mathrm{mot}}(Y,\mathbb Z)$$
is injective for every $a\in\mathbb Z$ and $b\geq0$. No algebraic closure, finite-type, noetherian or dimension assumption is required. With the source zero extension in weights $b<0$, detection in those weights is vacuous.

## Facts & Assumptions
[F1] The prime-field complexes and their restrictions to field-schemes are homotopy-coherent derived Nisnevich sheaves, and cohomology is evaluated on these actual complexes. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes), [def-motivic-cohomology](item-def-motivic-cohomology)

[F2] The actual projective-bundle equivalence for qcqs prime-field schemes has pullback as its zero summand. Its line-subbundle convention becomes the line-quotient convention by applying it to the dual bundle. [thm-author-ab0a6fc202cb-elmanto-morrow-projective-input](item-thm-author-ab0a6fc202cb-elmanto-morrow-projective-input)

[F3] The simultaneous flag construction is a finite composite of positive-rank projective bundles on each common rank stratum. On qcqs $X$ the partition and its union are finite and qcqs. [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)

[A1] Choice and the stated bounds are inherited through the flag construction and the derived sheaf evaluations. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
**Given:** $k,X$, the finite bundle family, Choice and the size bounds in the statement.

**Goal:** Supply detection in the arbitrary-field scope used by the actual second-stage comparison.

1.1 Let $F\subseteq k$ be the prime subfield. Forgetting to $F$ changes neither the underlying qcqs scheme, its vector bundles and projective bundles, nor the value of its restricted motivic complex in [F1]. For a positive constant-rank bundle $G$, an invertible quotient of $G$ dualizes to a locally split line subbundle of $G^\vee$, and dualizing again is inverse. Thus the source projective bundle for $G^\vee$ is the required quotient-projective bundle for $G$, with the same tautological $\mathcal O(1)$. Apply [F2] to $G^\vee$. Projection onto the index-zero summand of the inverse equivalence is a left inverse to the actual quotient-projective pullback. Thus that pullback is injective on cohomology in every degree and nonnegative weight. [F1, F2, A1]

2.1 For constant ranks the tower in [F3] is finite. Applying step 1.1 at each stage and composing the injective homomorphisms proves detection for that tower. Rank-zero cases contribute the identity tower. [F3, step 1.1]

3.1 For varying ranks write $X=\coprod_\alpha X_\alpha$ for the finite clopen common rank partition and $Y=\coprod_\alpha Y_\alpha$ for its towers. Derived Nisnevich descent in [F1] for this disjoint open cover identifies the complexes on $X$ and $Y$ with the finite products on their pieces; their empty intersections contribute zero, since derived sheaf descent for the empty cover gives the zero complex on the empty scheme. Taking cohomology commutes with these finite products. Therefore $q^*$ is the product of the injective maps of step 2.1 and is injective. The additional negative-weight assertion follows only from the expressly adopted zero extension. [F1, F3, step 1.1, step 2.1] ∎
