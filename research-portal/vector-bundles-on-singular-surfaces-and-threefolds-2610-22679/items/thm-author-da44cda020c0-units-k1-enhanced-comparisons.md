---
id: thm-author-da44cda020c0-units-k1-enhanced-comparisons
kind: theorem
title: External connective, nonconnective and automorphism comparisons
status: published
domain: mathematics
deps:
  - lem-author-4f716d60801a-finite-projective-model
  - lem-author-4f716d60801a-lifted-affine-equivalence
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-4f716d60801a-finite-projective-model: mathematical-premise
  lem-author-4f716d60801a-lifted-affine-equivalence: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory (arXiv:1001.2282v4, 5 February 2013)
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §7.1, Definition 7.1 and the one-skeleton map, pp. 44–45; Lemma
        7.11/Corollary 7.12, pp. 48–49; Definition 9.6/Theorem 9.8, p. 58;
        Definition 9.30, p. 63; Proposition 9.32/Remark 9.33, p. 64
      statement: The S∞ construction and Waldhausen comparison preserve core maps.
        Definition 9.6 defines IK and Theorem 9.8 identifies its U_loc model.
        Proposition 9.32 compares connective K-theory before and after
        stabilizing a Waldhausen localization. Remark 9.33 gives positive-degree
        connective-to-nonconnective agreement for that Waldhausen category, with
        degree-zero agreement under idempotent completeness. The extension to
        arbitrary small stable infinity-categories uses the separate
        presentation input below.
      hypotheses: The Waldhausen category is small in the presentation universe,
        DHKS-saturated and admits cofibration/weak-equivalence factorization.
        Definition 9.30 uses its stabilized infinity-localization. For Chᵇ(P(A))
        that localization is already stable; bounded projective
        quasi-isomorphisms have contractible cones. Only positive-degree
        agreement is asserted here; the degree-zero clause requires idempotent
        completeness.
      reading_limits: "This round read the cached primary arXiv:1001.2282v4 PDF text,
        printed pp. 44–49, 57–58 and 63–64, including the displayed comparison
        proofs and Remark 9.33. Theorem 9.8 and the comparison/delooping
        foundations are imported, not reconstructed. No scan inspection or
        full-paper reading is claimed. Cache SHA256:
        08a8ae7fb5715d8269fd728c8a20d72403527aaefbeaa974b7040ec21d667a2d. The
        live versioned primary URL was also opened."
    - title: "Blumberg–Gepner–Tabuada, A universal characterization of higher
        algebraic K-theory (arXiv:1001.2282v4, 5 February 2013): Waldhausen
        presentations"
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §4.2, Definition 4.7/Propositions 4.8–4.10, pp. 26–27; Theorem 4.22, p.
        30; Lemma 7.11, p. 48, and the unnumbered presentation paragraph
        immediately after the proof of Corollary 7.12, p. 49
      statement: A homotopically pointed simplicial category with finite homotopy
        colimits has a DK-equivalent Waldhausen presentation by the same
        presheaf construction as Lemma 7.11. It is a full category of cofibrant
        objects weakly equivalent to representables in a homotopy-exact presheaf
        model. The spectral/simplicial realizations in §4.2 apply to every small
        stable infinity-category.
      hypotheses: A small stable infinity-category D has a homotopically pointed
        simplicial realization with finite homotopy colimits. Use compatible
        presentation universes and Choice for size choices. Use the full
        homotopy-closed cofibrant presheaf category, small in a fixed larger
        presentation universe, with inherited model weak equivalences and
        cofibrations. An ordinary skeleton that loses the model constructions is
        not used. No idempotent-completeness assumption on D is imposed, and its
        retract closure is not substituted for D.
      reading_limits: This round read the primary cached v4 PDF text on printed pp.
        26–27, 30 and 48–49, including the construction in Lemma 7.11 and the
        entire unnumbered presentation paragraph on p. 49. Existence and
        DK-equivalence of that presentation are imported from this paragraph;
        the deeper rigidification and presheaf-model foundations and the
        paragraph’s further references [81, §5] and [10, §14] are not
        reconstructed or claimed read. The cache hash is recorded in the
        preceding reference; no scan inspection is claimed.
dependency_level: 10
---

## Statement
Assume the Axiom of Choice. For a small stable infinity-category $D$, its $S_\infty$ construction gives a natural map $D^\simeq\to\Omega^\infty K^{\mathrm{cn}}(D)$ from the maximal subgroupoid. The induced loop at an object $E$ defines a homomorphism $\pi_0\operatorname{Aut}_D(E)\to\pi_1K^{\mathrm{cn}}(D)$; on $\pi_1$ one translates the component of $E$ to the zero component of the grouplike K-space. Composition of automorphisms maps to addition, and exact functors preserve these classes. The canonical natural map $j_D:K^{\mathrm{cn}}(D)\to\mathbb K(D)$ is an isomorphism on $\pi_i$ for $i>0$, in particular on $\pi_1$. The nonconnective functor here is the $U_{\mathrm{loc}}$ functor of the specified perfect-complex interface, identified with BGT's suspension-colimit $IK$ by Theorem 9.8.

For a small DHKS-saturated Waldhausen category $C$ admitting factorization, BGT's comparison gives $K^W(C)\simeq K^{\mathrm{cn}}(C_\infty)$, naturally in weakly exact functors; its S-construction map carries each object automorphism class to the class of the same automorphism in $C_\infty$. For any commutative unital ring $A$, let $C(A)$ be the essentially small Waldhausen category of bounded cochain complexes of finitely generated projective $A$-modules, with chain maps, degreewise split monomorphisms as cofibrations, and quasi-isomorphisms as weak equivalences. Apply the small-category comparison to a small presentation. Its localization $C(A)_\infty$ is the full enhanced perfect module category via the actual finite-projective model. Degreewise associated sheaf then identifies it, by the enhanced affine equivalence, with the specified perfect category on $\operatorname{Spec}A$. No noetherian or regularity hypothesis on $A$ is imposed. These comparisons, followed by $j$, compare the class of an automorphism in $\pi_1$, not merely degree-zero object classes.

## Statement references

[[def-nonconnective-k-spectrum-interface]]

[[lem-author-4f716d60801a-finite-projective-model]]

[[lem-author-4f716d60801a-lifted-affine-equivalence]]

## Facts & Assumptions
**Given:** AC, the fixed universe bounds, stable infinity-categories and exact functors; for the Waldhausen comparison also the stated smallness, factorization and DHKS-saturation hypotheses. In the local application $A$ is any commutative unital ring.

**Goal:** Import the positive-degree comparison to the specified nonconnective model, record its maps on object automorphisms, and verify the bounded finite-projective application.

[F1] BGT arXiv:1001.2282v4, §7.1, pp. 44–45, gives the S-construction and its natural one-skeleton/core map. Lemma 7.11 and Corollary 7.12, pp. 48–49, give the actual natural Waldhausen comparison under factorization and DHKS-saturation.

[F2] BGT Definition 9.6 and Theorem 9.8, p. 58, define the canonical map into $IK$ and identify its $U_{\mathrm{loc}}$ model. For a DHKS-saturated Waldhausen category with factorization, Definition 9.30, p. 63, defines its $IK$ using the stabilized localization; Proposition 9.32, p. 64, identifies connective K-theory with that of this stabilization, and Remark 9.33 gives positive-degree agreement with $IK$. These passages do not by themselves state the comparison for an arbitrary small stable infinity-category. The degree-zero clause requires idempotent completeness and is not used here. The specified nonconnective functor is that of [[def-nonconnective-k-spectrum-interface]].

[F3] [[lem-author-4f716d60801a-finite-projective-model]] supplies the actual bounded-projective enhanced model and its K-projective mapping property. [[lem-author-4f716d60801a-lifted-affine-equivalence]] identifies the associated-sheaf functor with the enhanced affine perfect equivalence. Their Choice-qualified hypotheses hold for the present commutative unital ring application.

[F4] Import the Waldhausen-presentation construction stated immediately after Corollary 7.12 in BGT v4, p. 49, using the homotopically pointed simplicial realization of a small stable infinity-category supplied by §4.2, pp. 26–27 (see also Theorem 4.22, p. 30). The same homotopy-exact presheaf construction as Lemma 7.11 gives a DK-equivalent full category of cofibrant objects weakly equivalent to representables. It inherits model cofibrations and weak equivalences and is closed under finite homotopy colimits and factorization. Use the full presheaf presentation in a fixed larger universe, where it is small; the size choices use [A1]. This is a presentation of $D$ itself, without passing to its idempotent completion. The construction and DK-equivalence are imported at the second six-field reference above; their foundations are not a new local proof.

[A1] [[math:def-axiom-of-choice]] is assumed for the supplied enhanced realizations in [F3] and the selected small presentations, including [F4]. No claim to a choice-free reconstruction of those suppliers is made.


Import [F1] and [F2] with their stated hypotheses. The automorphism normalization is the literal map on the core/one-skeleton in the S constructions: a loop of weak equivalences at $E$ is sent to that same loop in the localized core. The comparison is natural at that construction level. Translation to the zero component is canonical on $\pi_1$ of the grouplike homotopy-commutative K-space; different choices of a path give conjugation, which acts trivially on its abelian $\pi_1$. This does not assert arbitrary K-flat complexes are K-projective.

## External input
Import [F1], [F2] and the presentation construction [F4] with their stated hypotheses. The numbered proof below checks the presentation hypotheses and composes these inputs; the whole item is a local application, not a claimed reconstruction of the imported foundations. The automorphism normalization is the literal map on the core/one-skeleton in the S constructions: a loop of weak equivalences at $E$ is sent to that same loop in the localized core. The comparison is natural at that construction level. Translation to the zero component is canonical on $\pi_1$ of the grouplike homotopy-commutative K-space; different choices of a path give conjugation, which acts trivially on its abelian $\pi_1$. This does not assert arbitrary K-flat complexes are K-projective.

## Proof
1.1 For an arbitrary small stable infinity-category $D$, choose the homotopically pointed simplicial realization and presheaf Waldhausen presentation $C_D$ of [F4], with $N(C_D)[W^{-1}]\simeq D$. Its factorization stays in $C_D$: a model factorization of a map between its cofibrant objects has a cofibrant middle object weakly equivalent to the target, hence still in the homotopy-closed representable class. Pushouts along inherited cofibrations compute homotopy pushouts of cofibrant objects and remain in that class by finite homotopy-colimit closure. A map is a model weak equivalence precisely when it is invertible in the ambient homotopy category; the presentation identifies its localization fully with $D$, so the same criterion holds there. Thus $C_D$ is DHKS-saturated and has factorization. Use this full homotopy-closed category in the fixed larger presentation universe, where it is small, rather than an ordinary skeleton that could lose the preceding constructions. The compatible size choices use [A1]; no canonical strict choice of presentations is asserted. [F4, A1, construct]

1.2 The indicated split cofibrations and quasi-isomorphisms give the usual Waldhausen structure on $C(A)$: pushouts along degreewise split monomorphisms remain bounded finite-projective complexes, and the quasi-isomorphism gluing property follows from the corresponding short exact sequences of complexes. For a map $f:P\to Q$, use $Q\oplus\operatorname{Cone}(\operatorname{id}_P)$ as a mapping cylinder. The graph of $f$ and the canonical inclusion $P\to\operatorname{Cone}(\operatorname{id}_P)$ is a degreewise split monomorphism, and projection to $Q$ is a quasi-isomorphism since the identity cone is contractible. Their composite is $f$, so factorization holds within $C(A)$. The finite sums, shifts and cones used here remain in the model of [F3]. [F3, given, construct]

2.1 Apply [F1] and [F2] to $C_D$. Since $D$ is stable, suspension is already an equivalence, so $N(C_D)[W^{-1}][\Sigma^{-1}]\simeq D$. Corollary 7.12 identifies $K^W(C_D)$ with $K^{\mathrm{cn}}(D)$, and Definition 9.30 identifies its nonconnective target with $IK(D)$. Remark 9.33 therefore gives isomorphisms on $\pi_i$ for $i>0$. These are induced by $j_D$: under those identifications the comparison is the map into the suspension-colimit of Definition 9.6, followed by its natural Theorem 9.8 identification, rather than an independently chosen isomorphism of groups. Consequently this proves the claimed property of the canonical natural $j_D$ for every $D$. Naturality of $j$ and of the core construction comes from [F1] and [F2]; it does not require functorial choices of $C_D$. [F1, F2, step 1.1]

2.2 A bounded acyclic projective complex is contractible: its identity map is nullhomotopic by the K-projective property in [F3]. Thus a quasi-isomorphism between bounded projective complexes is a homotopy equivalence. Conversely, a map invertible in the localization induces an isomorphism in the derived category, hence on cohomology, so it is a quasi-isomorphism. This verifies DHKS-saturation. The actual localization is the full perfect module category by [F3], and the associated-sheaf functor gives its enhanced affine identification. The enhanced realizations and a small presentation use [A1]. [F3, A1, step 1.2]

3.1 Apply [F1] with the hypotheses verified in steps 1.2 and 2.2. Use the actual module and affine equivalences of [F3] and then the nonconnective comparison of [F2]. Its positive-degree agreement applies to $\pi_1$. The core maps in [F1] carry the loop of an automorphism to the loop of the same automorphism, and associated sheaf carries it to the corresponding sheaf automorphism. This proves the local application with its automorphism normalization. The general positive-degree comparison was derived in step 2.1 using the additional presentation input [F4]; it was not inferred from the Waldhausen-scoped citation alone. Corepresentability, rigidification and delooping foundations remain imported. [F1, F2, F3, step 2.1, step 1.2, step 2.2] ∎
