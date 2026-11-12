---
title: Filtered colimits of spaces and based loops
status: draft
research_item: thm-adjudicate-992e776cd750-filtered-space-colimits-input
dependency_level: 0
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory, author-hosted PDF
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 5.3.3.3 and forward proof, printed pp. 394–395 (zero-based
        PDF pages 411–412)
      statement: For a small filtered infinity-category I, the colimit functor
        Fun(I,S) to S preserves finite limits (kappa=omega).
      hypotheses: Small filtered indexing category; compatible universes;
        homotopy-coherent limits and colimits of spaces.
      reading_limits: Read the proposition and forward proof in the live PDF on 12
        November 2026. The proof reduces to filtered Kan-complex pullback and
        product assertions; this citation is not used for the arbitrary
        simplicial-set ordinary-colimit comparison. Model and cofinality
        foundations remain imported.
    - title: "J. F. Jardine, Lectures on Homotopy Theory, Lecture 05: Fibrations,
        geometric realization"
      url: https://math.sci.uwo.ca/~jardine/HomTh/lecture005a.pdf
      locator: Theorem 13.6 and proof, printed pp. 23–24 (zero-based PDF pages 22–23);
        Corollary 13.7, printed p. 24
      statement: The realization/singular adjunction has weak-equivalence unit and
        counit and induces an equivalence of homotopy categories.
      hypotheses: All simplicial sets and compactly generated weak Hausdorff spaces,
        with weak homotopy equivalences.
      reading_limits: Read Theorem 13.6, its proof and Corollary 13.7 in the live PDF
        on 12 November 2026, including the stated CGWH convention. Earlier
        fibration foundations remain imported. Singular-chain identification
        below uses the library definitions, not an additional assertion
        attributed to this theorem.
    - title: Jacob Lurie, Kerodon, Filtered Colimits of Simplicial Sets
      url: https://kerodon.net/tag/03DD
      locator: Proposition 9.1.6.1 (03DE), Remark 9.1.6.2 (03DF), Variant 9.1.6.4 (03DH)
      statement: For a small filtered ordinary category and any simplicial-set
        diagram, the canonical homotopy-colimit to ordinary-colimit map is a
        weak homotopy equivalence. For Kan-complex diagrams the ordinary colimit
        represents the colimit in the homotopy-coherent category of spaces.
      hypotheses: Small filtered ordinary indexing category; arbitrary simplicial sets
        for the comparison, Kan complexes for the space-model assertion;
        compatible size bounds.
      reading_limits: Read the three named records and the proof of Proposition
        9.1.6.1 from Proposition 9.1.6.7 on 12 November 2026. Projective
        replacement and localization foundations invoked there are imported, not
        reconstructed. Remark 9.1.6.2 explicitly states the weak-equivalence
        comparison.
    - title: Jacob Lurie, Kerodon, Fibrant Replacement
      url: https://kerodon.net/tag/00UU
      locator: Proposition 3.1.8.1, its proof, and Corollary 3.1.8.2
      statement: Functorial factorization into an anodyne weak equivalence followed by
        a Kan fibration can be chosen to commute with filtered colimits. Applied
        to the map to a point this gives functorial Kan replacement with that
        property.
      hypotheses: Arbitrary maps of simplicial sets; small filtered colimits;
        compatible universe bounds.
      reading_limits: Read the proposition, corollary and horn-attachment proof on 12
        November 2026. The theorem that anodyne maps are weak equivalences
        remains an imported foundation of this factorization. No replacement
        construction is claimed as locally proved.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)
- [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)
- [math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy)
- [math:def-singular-simplex-and-singular-chain-group-with-coefficients](https://alphabetamath.cc/item/def-singular-simplex-and-singular-chain-group-with-coefficients)
- [math:def-singular-chain-complex-and-singular-homology](https://alphabetamath.cc/item/def-singular-chain-complex-and-singular-homology)
- [` Jacob Lurie, Higher Topos Theory, author-hosted PDF · Proposition 5.3.3.3 and forward proof, printed pp. 394–395 (zero-based PDF pages 411–412) `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` J. F. Jardine, Lectures on Homotopy Theory, Lecture 05: Fibrations, geometric realization · Theorem 13.6 and proof, printed pp. 23–24 (zero-based PDF pages 22–23); Corollary 13.7, printed p. 24 `](https://math.sci.uwo.ca/~jardine/HomTh/lecture005a.pdf)
- [` Jacob Lurie, Kerodon, Filtered Colimits of Simplicial Sets · Proposition 9.1.6.1 (03DE), Remark 9.1.6.2 (03DF), Variant 9.1.6.4 (03DH) `](https://kerodon.net/tag/03DD)
- [` Jacob Lurie, Kerodon, Fibrant Replacement · Proposition 3.1.8.1, its proof, and Corollary 3.1.8.2 `](https://kerodon.net/tag/00UU)


## Statement
Assume the Axiom of Choice and fixed compatible Grothendieck universes containing $\omega$. A filtered category here is a nonempty small category in which every finite diagram admits a cocone. Filtered colimits of spaces commute with finite homotopy limits. Consequently, for a filtered diagram of pointed spaces $(T_a,t_a)$,
$$\operatorname*{colim}_a\Omega_{t_a}T_a\simeq\Omega_t\operatorname*{colim}_aT_a.$$
The ordinary filtered colimit of a diagram of simplicial sets represents its colimit as spaces; equivalently, the canonical map from its homotopy colimit to its ordinary colimit is a weak equivalence. One may compute this with functorial Kan replacements.

A simplicial set is a contravariant functor from the simplex category to sets, with degreewise ordinary colimits. A Kan complex is a simplicial set in which every horn extends to a simplex. Spaces mean homotopy types of simplicial sets, using the homotopy-coherent Kan-complex model $\mathcal S$; homotopy limits and colimits mean limits and colimits in this model. A simplicial map is a weak equivalence when its realization induces a bijection on path components and isomorphisms on all based homotopy groups. For a pointed space, $\Omega_tT=*\times_T^h*$ uses the two arrows selecting its basepoint. The point $t$ on the colimit is induced by the diagram of basepoints.

Write $|T|$ for the geometric realization obtained by gluing topological simplices according to the face and degeneracy maps of $T$. The singular simplicial set $\operatorname{Sing}V$ has as its $n$-simplices the continuous maps from the standard topological $n$-simplex to $V$, with faces and degeneracies given by precomposition. Realization and singular complex are equivalent homotopy models: the maps $T\to\operatorname{Sing}|T|$ and $|\operatorname{Sing}V|\to V$ are weak equivalences, for simplicial sets $T$ and compactly generated weak Hausdorff spaces $V$. These conventions include the nerve realizations used for Quillen K-spaces; a category's nerve has composable strings of $n$ arrows as its $n$-simplices. This contextual application imposes no further K-theory hypothesis.

## Statement references
[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration)

[math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)

[math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy)

[math:def-singular-simplex-and-singular-chain-group-with-coefficients](https://alphabetamath.cc/item/def-singular-simplex-and-singular-chain-group-with-coefficients)

## Facts & Assumptions
[A1] Choice is retained for the imported homotopy constructions and their small presentations; compatible universes containing $\omega$ are separately assumed. The local deductions below do not assert that those universes exist. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] Source reference 0 imports preservation of finite homotopy limits by filtered colimits in $\mathcal S$. In particular, it preserves the terminal point and homotopy pullbacks. This source is not used to assert the arbitrary simplicial-set ordinary-colimit comparison.

[F2] Source reference 1 imports the realization/singular comparison. The weak-equivalence and CGWH conventions are [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence) and [math:def-compactly-generated-conventions-for-based-homotopy](https://alphabetamath.cc/item/def-compactly-generated-conventions-for-based-homotopy).

[F3] Source reference 2 imports both the canonical homotopy-colimit comparison for arbitrary simplicial sets and the ordinary filtered Kan-colimit model for colimits in $\mathcal S$. Simplicial sets and their degreewise constructions are [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration); Kan complexes and horns are [math:def-simplicial-horn-and-kan-fibration](https://alphabetamath.cc/item/def-simplicial-horn-and-kan-fibration).

[F4] Source reference 3 imports a functorial Kan replacement $u:T\to Q(T)$ by weak equivalences such that $Q$ commutes with filtered colimits.

[F5] Integral singular homology is the homology of $C_\bullet(V;\mathbb Z)$. Its degree-$n$ group is free on the continuous singular $n$-simplices, and its boundary is the alternating sum of their faces. Thus it can be computed from the unnormalized free chains on $\operatorname{Sing}V$, including when $V$ is a CW model of a plus map. [math:def-singular-simplex-and-singular-chain-group-with-coefficients](https://alphabetamath.cc/item/def-singular-simplex-and-singular-chain-group-with-coefficients) [math:def-singular-chain-complex-and-singular-homology](https://alphabetamath.cc/item/def-singular-chain-complex-and-singular-homology)

## External input
Import precisely the finite-limit theorem of reference 0, the realization comparison of reference 1, the two filtered simplicial/Kan comparisons of reference 2, and the functorial replacement of reference 3, under [A1]. Their hypotheses apply to the small filtered diagrams and homotopy models specified here. The imported model structures, cofinality and localization arguments are not reconstructed. The proof below gives the local loop application, transports the Kan-colimit model to arbitrary simplicial sets, and checks the singular-chain identification from its definition. No continuity of motivic coefficients is asserted.

## Proof

**Goal:** Establish the stated filtered-colimit, loop, simplicial-model and realization assertions.
**Given:** The size and Choice assumptions, a small filtered indexing category, and the pointed-space or simplicial-set diagram in the Statement.

1.1 By [F1], filtered colimits preserve finite homotopy limits, including the empty limit, so the filtered colimit of constant points is a point. Apply preservation of homotopy pullbacks to the diagram of spans $*\to T_a\leftarrow *$ selected by the compatible basepoints. Its colimit span is $*\to\operatorname*{colim}_a T_a\leftarrow *$, with both arrows selecting $t$. The pullbacks of these spans are exactly the two sides of the loop formula. This proves that formula with its induced basepoint and retains the full finite-limit assertion of [F1]. [A1, F1, given]

2.1 For a simplicial-set diagram $D$, [F4] gives a natural weak equivalence from its degreewise colimit to $Q(\operatorname*{colim}D)=\operatorname*{colim}Q(D)$. By [F3] the latter is a model of the colimit in $\mathcal S$; the objectwise maps $D\to Q(D)$ identify the diagrams of homotopy types. Hence the former also represents that colimit. The canonical homotopy-colimit comparison itself is supplied explicitly by [F3]. The realization unit and singular counit are the weak equivalences of [F2], so the same conventions apply to nerve realizations. Finally, degreewise free chains on $\operatorname{Sing}V$ have exactly the generators and alternating face boundary of $C_\bullet(V;\mathbb Z)$ in [F5]. This is a natural identity of chain complexes, so it computes the same integral singular homology for each arrow of a plus-map CW model. It needs no additional inference that the realization theorem by itself preserves homology. [F2, F3, F4, F5, step 1.1] ∎
