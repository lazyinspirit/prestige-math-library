---
id: lem-abelian-finite-pl-cut-manifolds-have-edge-group-fundamental-group
kind: lemma
title: "An abelian finite PL gluing forces the cut fundamental group to be the edge group"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-seifert-van-kampen, thm-hnn-normal-form-theorem, def-hnn-extension-and-stable-letter, def-choice-of-transversals-for-hnn-normal-forms]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-original
  proof: ai-original
sources:
  references: []
---

## Statement

Let $M$ be a compact connected finite PL manifold and $F\subset M$ a connected two-sided proper finite PL submanifold of codimension one, with a supplied bicollar and injective map $\pi_1(F)\to\pi_1(M)$. Suppose cutting along $F$ gives a connected finite PL manifold $N$ and that $\pi_1(M)$ is abelian. Then the inclusions of both boundary copies $F_-,F_+$ induce isomorphisms onto $\pi_1(N)$, the map $\pi_1(N)\to\pi_1(M)$ is injective, and
$$\pi_1(M)\cong\pi_1(F)\times\mathbb Z.$$
The edge subgroup is consequently a direct summand. Basepoints are connected by specified finite paths in the cut manifold. No choice hypothesis is introduced.

## Facts & Assumptions

**Given:** The finite PL pair, bicollar, connected cut, fundamental-group injectivity and abelian ambient group.

[F1] Seifert–van Kampen gives the fundamental-group presentation from finite paths and two-cell attachments ([[thm-seifert-van-kampen]]).

[F2] An HNN extension with specified right-coset transversals has unique normal forms ([[thm-hnn-normal-form-theorem]], [[def-hnn-extension-and-stable-letter]], [[def-choice-of-transversals-for-hnn-normal-forms]]).

## Proof

**Given:** The data above. Put $A=\pi_1(N)$ and $H=\pi_1(F)$.

1.1 The two maps $i_\pm:H\to A$ are injective: their composites to $\pi_1(M)$ equal the given injective inclusion, up to the specified basepaths. Restoring the bicollar gives the presentation $$\pi_1(M)=\langle A,t\mid t i_-(u)t^{-1}=i_+(u),\ u\in H\rangle.$$ This finite cut version of [F1] can be seen directly in the cell decomposition: join basepoints of the two boundary copies by a chosen path in $N$, take one vertical bicollar edge as $t$, and use a finite spanning tree of the triangulation of $F$ to eliminate its other vertical edge symbols. Every remaining edge strip of $F\times I$ supplies exactly the displayed conjugacy relation for the corresponding edge-loop generator of $\pi_1(F)$. Its triangle prisms make the relations for those generators compatible with the triangle relations of $F$, without adding other relations in $A$. The cells already in $N$ give its fundamental-group presentation. Thus [F1] identifies this group with the indicated HNN extension, without assuming in advance that $A$ embeds. [given, F1, construct]

2.1 The required transversal data in [F2] exist without a choice principle here. A finite connected complex $N$ has a finite generating list for $A$, from the oriented edges outside a finite spanning tree of its one-skeleton. Order all words in these generators and their inverses first by length and then lexicographically, putting the empty word first. For each right coset of either $i_-(H)$ or $i_+(H)$ take the group element represented by the least word in that coset. The least word exists in a nonempty subset of this explicit well-order; the rule defines all representatives uniquely, so no family of arbitrary selections is used. They are right-coset transversals containing the identity. Apply [F2] with precisely these data. It follows that $A$ embeds in the HNN extension, and that a word with a stable letter and no pin is nontrivial: normalization moves coset subgroup factors past stable letters but cannot delete a stable letter in the absence of a pin. [F2, step 1.1, construct]

3.1 If $a\notin i_-(H)$, the commutator word $t a t^{-1}a^{-1}$ has no pin and contains stable letters. It is nontrivial by step 2.1, contrary to abelianness of $\pi_1(M)$. Therefore $A=i_-(H)$. Applying the same argument to $t^{-1}a t a^{-1}$ gives $A=i_+(H)$. Moreover the two boundary identifications agree on $H$: the conjugacy relation and abelianness give $i_-(u)=i_+(u)$ in $\pi_1(M)$, and injectivity of $A$ from step 2.1 gives equality in $A$. Thus the presentation of step 1.1 is exactly the presentation of $A\times\langle t\rangle$, with $t$ commuting with all of $A$. The exponent-sum map on $t$ identifies its factor with $\mathbb Z$, and the first boundary inclusion identifies $A$ with $H$. This proves all assertions using finite paths and uniquely defined least-word transversals. No choice principle has been introduced. [given, step 1.1, step 2.1, algebra] ∎
