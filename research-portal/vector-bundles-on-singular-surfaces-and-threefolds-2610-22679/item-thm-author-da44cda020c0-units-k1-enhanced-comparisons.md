---
title: External connective, nonconnective and automorphism comparisons
status: published
research_item: thm-author-da44cda020c0-units-k1-enhanced-comparisons
dependency_level: 12
sources:
  references:
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory (arXiv:1001.2282v4, 5 February 2013)
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §7.1, Definition 7.1 and the one-skeleton map, pp. 43–45; Lemma
        7.11/Corollary 7.12, pp. 48–49; Definition 9.1 through Definition
        9.6/Theorem 9.8, pp. 57–58; Definition 9.30, p. 63; Proposition
        9.32/Remark 9.33, p. 64
      statement: The S-infinity construction and its core/one-skeleton maps define
        connective K-theory. Lemma 7.11 and Corollary 7.12 compare it naturally
        with Waldhausen K-theory under saturation and factorization. Definition
        9.6 defines the spectrum-valued IK on every small stable
        infinity-category; Theorem 9.8 identifies it with the mapping spectrum
        from the compact-sphere motive, not with the motive-valued U_loc itself.
        Definition 9.30, Proposition 9.32 and Remark 9.33 give canonical
        positive-degree agreement for the stated Waldhausen categories; the
        degree-zero clause additionally requires idempotent completeness.
      hypotheses: Assume AC and nested Grothendieck universes U in V in W with omega
        in U, input D U-small, the presentation W-small and all comparisons in
        common enlarged universes as stated; this universe existence is separate
        from AC. Smallness in compatible presentation universes, DHKS-saturation
        and cofibration/weak-equivalence factorization for the Waldhausen
        statements. The general stable-category application uses the separately
        proved stable-Yoneda presentation supplier. The restriction to the
        specified nonconnective functor on idempotent-complete categories uses
        the separately declared multiplicative input. No degree-zero claim is
        made for a general non-idempotent-complete D. Fix the uncountable
        regular cardinal kappa of Definition 9.1 and universes supporting the
        cone/suspension tower of Definition 9.6.
      reading_limits: In this adjudication read the live arXiv:1001.2282v4 PDF text at
        Definition 7.1 and the core/one-skeleton and iterated-S constructions,
        printed pp. 44–45; the Waldhausen comparison discussion, Lemma 7.11 and
        Corollary 7.12 with their displayed proofs, pp. 48–49; Definition 9.1,
        p. 57; Definition 9.6 and Theorem 9.8 statement and announced proof
        dependencies, p. 58; Definition 9.30, p. 63; and Proposition 9.32 with
        its displayed proof and Remark 9.33, p. 64. Checked the comparison
        hypotheses and their application through the declared presentation
        supplier. Corepresentability, rigidification and delooping foundations
        remain imported. No scan inspection, complete-paper reading or new
        cached-byte verification is claimed. The previous carrier's cache SHA256
        08a8ae7fb5715d8269fd728c8a20d72403527aaefbeaa974b7040ec21d667a2d remains
        historical only. Detailed presentation properties are supplied by the
        separately declared local helper, not attributed to the paragraph after
        Corollary 7.12.
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)
- [lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation](item-lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [` Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic K-theory (arXiv:1001.2282v4, 5 February 2013) · §7.1, Definition 7.1 and the one-skeleton map, pp. 43–45; Lemma 7.11/Corollary 7.12, pp. 48–49; Definition 9.1 through Definition 9.6/Theorem 9.8, pp. 57–58; Definition 9.30, p. 63; Proposition 9.32/Remark 9.33, p. 64 `](https://arxiv.org/pdf/1001.2282v4)


## Statement
Assume the Axiom of Choice and fixed nested Grothendieck universes $U\in V\in W$ with $\omega\in U$; their existence is a separate assumption. Use the stated universe closure convention. Small means $U$-small for the input stable categories, and essentially small means equivalent to a $U$-small category. Input rings lie in $U$. The spectral-presheaf presentation uses $V$-small objects and forms a $W$-small category. All comparisons are evaluated in a common enlarged universe containing that presentation and the cone/suspension tower of BGT Definition 9.6; larger compatible universes for these constructions and motives are assumed when required. For a $U$-small stable infinity-category $D$, its $S_\infty$ construction gives a natural map $D^\simeq\to\Omega^\infty K^{\mathrm{cn}}(D)$ from the maximal subgroupoid. The induced loop at an object $E$ defines a homomorphism $\pi_0\operatorname{Aut}_D(E)\to\pi_1K^{\mathrm{cn}}(D)$; on $\pi_1$ one translates the component of $E$ to the zero component of the grouplike K-space. Composition of automorphisms maps to addition, and exact functors preserve these classes. The canonical natural map $j_D:K^{\mathrm{cn}}(D)\to\mathbb K(D)$ is an isomorphism on $\pi_i$ for $i>0$, in particular on $\pi_1$. On all small stable infinity-categories define $\mathbb K(D)=IK(D)$, BGT's spectrum-valued suspension-colimit functor of Definition 9.6, and take $j_D$ to be its canonical initial-stage map. By Theorem 9.8 this spectrum is naturally equivalent to $\operatorname{Map}_{\mathcal M_{\mathrm{loc}}}(U_{\mathrm{loc}}(\mathrm{Sp}^{\omega}),U_{\mathrm{loc}}(D))$; $U_{\mathrm{loc}}$ itself is motive-valued. On small stable idempotent-complete categories its restriction is naturally identified with the specified nonconnective perfect-complex functor, because that functor is explicitly BGT's $IK$ in the declared multiplicative input. Extend this identification to essentially small categories through equivalence, as in the perfect-complex interface. No value of that restricted interface outside its domain is presupposed.

For a small DHKS-saturated Waldhausen category $C$ admitting factorization, BGT's comparison gives $K^W(C)\simeq K^{\mathrm{cn}}(C_\infty)$, naturally in weakly exact functors; its S-construction map carries each object automorphism class to the class of the same automorphism in $C_\infty$. Here $C_\infty=N(C)[W^{-1}]$ denotes infinity-localization at the weak equivalences, and $K^{\mathrm{cn}}$ is the iterated $S_\infty$ spectrum for a pointed infinity-category with finite colimits. For any commutative unital ring $A$ in $U$, let $C(A)$ be the essentially small Waldhausen category of bounded cochain complexes of $U$-small finitely generated projective $A$-modules, with chain maps, degreewise split monomorphisms as cofibrations, and quasi-isomorphisms as weak equivalences. Apply the small-category comparison to a $U$-small presentation, with its transported Waldhausen structure, in the common enlarged universe. Its localization $C(A)_\infty$ is the full enhanced perfect module category via the actual finite-projective model. Degreewise associated sheaf then identifies it, by the enhanced affine equivalence, with the specified perfect category on $\operatorname{Spec}A$. No noetherian or regularity hypothesis on $A$ is imposed. These comparisons, followed by $j$, compare the class of an automorphism in $\pi_1$, not merely degree-zero object classes.

## Statement references

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)

[lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)

[thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input)

[lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation](item-lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation)

[math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)

## Facts & Assumptions
**Given:** AC and nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, assumed to exist independently of AC; a $U$-small stable infinity-category $D$ and exact functors. Use $V$-small spectral presheaves, a $W$-small presentation and the common enlarged universes specified in the Statement. For the Waldhausen comparison retain factorization and DHKS-saturation. In the local application $A\in U$ is any commutative unital ring.

**Goal:** Import the positive-degree comparison to the specified nonconnective model, record its maps on object automorphisms, and verify the bounded finite-projective application.

[F1] BGT arXiv:1001.2282v4, §7.1, pp. 44–45, gives the S-construction and its natural one-skeleton/core map. Lemma 7.11 and Corollary 7.12, pp. 48–49, give the actual natural Waldhausen comparison under factorization and DHKS-saturation.

[F2] BGT Definition 9.6 and Theorem 9.8, p. 58, supply the spectrum-valued functor $IK$ on all small stable infinity-categories, its initial-stage map $j$ and its mapping-spectrum identification. Fix the uncountable regular cardinal $\kappa$ of BGT Definition 9.1 and the compatible enlarged universes of the Statement containing the cone and suspension tower used in Definition 9.6. For a DHKS-saturated Waldhausen category with factorization, Definition 9.30, p. 63, uses its stabilized localization; Proposition 9.32 and Remark 9.33, p. 64, give canonical positive-degree connective-to-nonconnective agreement. The degree-zero clause requires idempotent completeness and is not asserted in the general part here. [thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input](item-thm-author-c5bc2838d897-kcoherent-nonconnective-multiplicative-input) explicitly identifies its spectrum-valued nonconnective functor with BGT's $IK$ on small stable idempotent-complete categories, and supplies the stable/exact, idempotent-complete and motive/mapping-spectrum conventions. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) uses precisely that functor and extends it coherently to essentially small categories; this supplies the required compatibility on its actual domain.

[F3] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) supplies the actual bounded-projective enhanced model and its K-projective mapping property. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) identifies the associated-sheaf functor with the enhanced affine perfect equivalence. Their Choice- and universe-qualified hypotheses hold for the present commutative unital ring application. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) supplies the projective lifting property used to encode finite projectives in a small matrix presentation; finite generation means existence of a finite generating list.

[F4] [lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation](item-lem-adjudicate-55b16ac0b0e5-stable-yoneda-waldhausen-presentation) defines the Waldhausen, factorization, weakly exact and DHKS-saturated interfaces and constructs, under AC and nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, for every $U$-small stable $D$, a $W$-small saturated Waldhausen presentation $C_D$ with factorization and $N(C_D)[W_D^{-1}]\simeq D$. The presheaves are $V$-small, as required by that supplier. It uses the stably representable spectral-presheaf model of BGT Definition 4.7/Proposition 4.8, with a local verification of homotopy-colimit closure, model factorization, full localization and size. It does not pass to the retract closure of $D$, and does not import those detailed assertions from the unnumbered paragraph after Corollary 7.12.

[F5] [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) under Choice and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) show that $\operatorname{Spec}A$ is qcqs (quasi-compact and quasi-separated), so the scheme domain of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) applies to every affine ring in this item.

[A1] [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) defines the universe closure convention; $U$-small means that the category or simplicial-set data belong to $U$. The existence of the stated nested universes and any required larger ones is assumed separately. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the supplied enhanced realizations in [F3] and the selected small presentations, including [F4]. No claim to a choice-free reconstruction of those suppliers is made.

## External input
Import the BGT comparisons and constructions in [F1] and [F2] at reference 0, with their stated hypotheses. The Waldhausen presentation is the locally proved supplier [F4]; compatibility with the specified restricted functor is supplied by the two direct inputs in [F2]. The numbered proof below checks the presentation hypotheses and composes these inputs; the whole item is a local application, not a claimed reconstruction of the imported foundations. The automorphism normalization is the literal map on the core/one-skeleton in the S constructions: a loop of weak equivalences at $E$ is sent to that same loop in the localized core. The comparison is natural at that construction level. Translation to the zero component is canonical on $\pi_1$ of the grouplike homotopy-commutative K-space; different choices of a path give conjugation, which acts trivially on its abelian $\pi_1$. This does not assert arbitrary K-flat complexes are K-projective.

## Proof
1.1 For an arbitrary $U$-small stable infinity-category $D$, apply [F4] with the assumed universes $U\in V\in W$ and $\omega\in U$. Its $V$-small presheaf construction gives the $W$-small saturated Waldhausen presentation $C_D$, with $N(C_D)[W_D^{-1}]\simeq D$. Its local proof verifies inherited model cofibrations and weak equivalences, factorization, gluing, the full infinity-localization and size, so the exact hypotheses of [F1] and the Waldhausen part of [F2] hold. Choice and the separately assumed universe existence are retained through [A1]. Since $C_D$ is $W$-small, apply the comparisons in the common enlarged universe of the Statement; do not assert that $C_D$ is $U$-small. No idempotent completion or functorial strict choice of presentations is used. [F4, A1, construct]

1.2 The indicated split cofibrations and quasi-isomorphisms give the usual Waldhausen structure on $C(A)$: pushouts along degreewise split monomorphisms remain bounded finite-projective complexes, and the quasi-isomorphism gluing property follows from the corresponding short exact sequences of complexes. For a map $f:P\to Q$, use $Q\oplus\operatorname{Cone}(\operatorname{id}_P)$ as a mapping cylinder. The graph of $f$ and the canonical inclusion $P\to\operatorname{Cone}(\operatorname{id}_P)$ is a degreewise split monomorphism, and projection to $Q$ is a quasi-isomorphism since the identity cone is contractible. Their composite is $f$, so factorization holds within $C(A)$. The finite sums, shifts and cones used here remain in the model of [F3]; the Waldhausen axioms are those of [F4]. For the asserted $U$-small presentation, choose a finite generating list of each finite projective $P$, giving a surjection $q:A^n\to P$. Lift $\operatorname{id}_P$ through $q$ by the projective property in [F3], obtaining $s:P\to A^n$; then $e=sq$ satisfies $e^2=e$ and $P\cong\operatorname{im}e$. Between two such image modules, maps are precisely matrices $u$ with $u=e' u e$, where $e'$ denotes the target idempotent. Thus bounded complexes and their chain maps have presentations by finite lists of these matrices and the equations for their differentials. All such codes and maps form sets in $U$, because $A,\omega\in U$ and [A1] gives closure under the required finite products, subsets and countable unions. The resulting category is fully faithfully and essentially surjectively mapped to $C(A)$; transport its split cofibrations and quasi-isomorphisms along that equivalence. This is the promised $U$-small Waldhausen presentation. Selecting equivalent representatives uses [A1], and no regularity or noetherian hypothesis is added. [F3, F4, A1, given, construct]

2.1 Apply [F1] and [F2] to $C_D$. Since $D$ is stable, suspension is already an equivalence, so $N(C_D)[W_D^{-1}][\Sigma^{-1}]\simeq D$. Corollary 7.12 identifies $K^W(C_D)$ with $K^{\mathrm{cn}}(D)$, and Definition 9.30 identifies its nonconnective target with $IK(D)$. Remark 9.33 gives isomorphisms on $\pi_i$ for $i>0$. These are induced by the initial-stage map $j_D$ into the suspension-colimit of Definition 9.6, rather than an independently chosen isomorphism of groups. Theorem 9.8 supplies its natural mapping-spectrum model. By the explicit identification in the multiplicative input of [F2], this same $IK$ restricts naturally to the functor used by the specified perfect-complex interface. Thus the general expression is defined on all small stable categories and agrees with the specified functor wherever that interface is defined. Naturality of $j$ and of the core maps comes from [F1] and [F2], independently of the auxiliary presentation choices. [F1, F2, step 1.1]

2.2 A bounded acyclic projective complex is contractible: its identity map is nullhomotopic by the K-projective property in [F3]. Thus a quasi-isomorphism between bounded projective complexes is a homotopy equivalence. Conversely, a map invertible in the localization induces an isomorphism in the derived category, hence on cohomology, so it is a quasi-isomorphism. This verifies DHKS-saturation. The actual localization is the full perfect module category by [F3], and the associated-sheaf functor gives its enhanced affine identification. By [F5] this affine scheme is qcqs, and [F2] therefore identifies its specified nonconnective functor with the present restriction of $IK$. The enhanced realizations and a small presentation use [A1]. [F2, F3, F5, A1, step 1.2]

3.1 Apply [F1] with the hypotheses verified in steps 1.2 and 2.2. Use the actual module and affine equivalences of [F3] and then the nonconnective comparison of [F2]. Its positive-degree agreement applies to $\pi_1$. For any $D$ the automorphism space $\operatorname{Aut}_D(E)$ is the loop space of $D^\simeq$ at $E$, so the core map induces a group homomorphism on loop components. Composition of automorphisms corresponds to concatenation of these loops. Translation by the inverse of the object class moves its image to the zero component of the grouplike K-space. Its fundamental group is abelian: loop concatenation and the K-space addition have the same unit and satisfy interchange, so they coincide and commute. Changing the translation path therefore has trivial conjugation on $\pi_1$. These maps commute with exact functors by naturality of the core construction and of $j$. The Waldhausen core maps in [F1] carry each automorphism loop to that same localized loop, and associated sheaf carries it to the corresponding sheaf automorphism. This proves the local application with its automorphism normalization. The general positive-degree comparison was derived in step 2.1 using the additional presentation input [F4]; it was not inferred from the Waldhausen-scoped citation alone. Corepresentability, rigidification and delooping foundations remain imported. [F1, F2, F3, step 2.1, step 1.2, step 2.2] ∎
