---
title: Constant cdh sections on the two article sites
status: published
research_item: lem-author-a279c89ed6c8-cdh-zero-site-comparison
dependency_level: 9
sources:
  references:
    - title: The Stacks Project, Noetherianity under finite-type morphisms
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, complete statement and displayed proof
      statement: A morphism locally of finite type to a locally Noetherian scheme has
        locally Noetherian source; the finite-type version over a Noetherian
        target has Noetherian source.
      hypotheses: Apply first over Spec k, whose only ideals are zero and the unit
        ideal, and then to affine open pieces of etale schemes over a
        finite-type k-scheme. No reducedness or perfectness is required.
      reading_limits: Read the complete statement and short proof on tag 01T6. The
        referenced Hilbert-basis algebra and its proof were not reconstructed.
        Only Noetherianity is imported.
    - title: The Stacks Project, finite presentation over a locally Noetherian base
      url: https://stacks.math.columbia.edu/tag/01TX
      locator: Lemma 29.22.9(2), statement and displayed proof; its
        quasi-separatedness input, Lemma 29.15.7 at tag 01T7, also read
      statement: A finite-type morphism to a locally Noetherian scheme is finitely
        presented, including quasi-separatedness of the morphism.
      hypotheses: Apply to the proper map and closed immersion of each finite-type
        abstract blowup family, and to the finite-type affine etale refinements
        constructed in the proof. All targets in these applications are
        Noetherian.
      reading_limits: Read clause (2) and its proof at 01TX, and the statement and
        proof at 01T7. The underlying finite-presentation theorem for Noetherian
        algebras was not reconstructed. No implication from quasi-compactness
        alone to finite presentation is imported.
    - title: The Stacks Project, Noetherian scheme topology
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Definition 28.5.1; Lemmas 28.5.2, 28.5.4, 28.5.5 and 28.5.8, statements
        and displayed proofs
      statement: Open subschemes of locally Noetherian schemes are locally Noetherian;
        locally Noetherian schemes are quasi-separated; a Noetherian scheme has
        Noetherian underlying space; every morphism with Noetherian source is
        quasi-compact.
      hypotheses: Use the first assertion for affine opens in the Nisnevich members
        and the last assertion for their maps to the target. An affine locally
        Noetherian scheme is Noetherian because affine schemes are
        quasi-compact.
      reading_limits: Read precisely the definition and four indicated lemmas and
        proofs on the section page. Their linked algebra and topological
        compactness lemmas were not reconstructed. No finite Nisnevich-subcover
        theorem is imported.
    - title: The Stacks Project, finite-presentation calculus
      url: https://stacks.math.columbia.edu/tag/01TO
      locator: Definition 29.22.1 and Lemmas 29.22.4 and 29.22.8
      statement: Finite presentation means local finite presentation together with
        quasi-compactness and quasi-separatedness. It is preserved by arbitrary
        base change and implies finite type; locally finite presentation implies
        locally finite type.
      hypotheses: Use base change for the two finitely presented maps in a qcqs
        abstract blowup generator, and use the finite-type implications for
        those maps and for etale affine refinements. There is no Noetherian
        hypothesis on the base-change assertion.
      reading_limits: Read the definition, both lemma statements, and the displayed
        proof of Lemma 29.22.4. The source omits the proof of Lemma 29.22.8; it
        is imported as stated. The earlier algebra and quasi-compact base-change
        lemmas were not reconstructed.
    - title: The Stacks Project, properness under base change
      url: https://stacks.math.columbia.edu/tag/01W4
      locator: Lemma 29.42.5, complete statement and displayed proof
      statement: Arbitrary base change of a proper morphism is proper.
      hypotheses: Apply to the proper member of an abstract blowup generator when
        pulling it back along an F-morphism from a separated finite-type
        k-scheme. No finite-type assumption on that F-morphism is needed.
      reading_limits: Read the complete statement and short proof at 01W4. The cited
        separation and finite-type base-change lemmas were not independently
        reconstructed; only properness under base change is imported.
    - title: The Stacks Project, closed immersions are proper
      url: https://stacks.math.columbia.edu/tag/01W5
      locator: Lemma 29.42.6, complete statement and displayed proof
      statement: A closed immersion is proper, in particular separated and of finite type.
      hypotheses: Apply to the center in an abstract blowup family. Over a Noetherian
        target the separate 01TX input then gives finite presentation.
      reading_limits: Read the statement and proof on tag 01W5, including its explicit
        separatedness and finite-type premises. Its linked structural proofs
        were not reconstructed. No finite-presentation conclusion without the
        stated Noetherian target is imported.
---

PDF p. 10: Lemma 5.1, weight-zero restriction

## Prerequisites

- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-adjudicate-57a7caabd963-cdp-abstract-generation](item-lem-adjudicate-57a7caabd963-cdp-abstract-generation)
- [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)
- [math:lem-etale-stable-base-change-composition](https://alphabetamath.cc/item/lem-etale-stable-base-change-composition)
- [math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition)
- [math:cor-base-change-finite-type-and-products](https://alphabetamath.cc/item/cor-base-change-finite-type-and-products)
- [math:lem-field-valued-points-of-schemes](https://alphabetamath.cc/item/lem-field-valued-points-of-schemes)
- [math:lem-base-change-open-closed-immersions](https://alphabetamath.cc/item/lem-base-change-open-closed-immersions)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)
- [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [` The Stacks Project, Noetherianity under finite-type morphisms · Lemma 29.15.6, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/01T6)
- [` The Stacks Project, finite presentation over a locally Noetherian base · Lemma 29.22.9(2), statement and displayed proof; its quasi-separatedness input, Lemma 29.15.7 at tag 01T7, also read `](https://stacks.math.columbia.edu/tag/01TX)
- [` The Stacks Project, Noetherian scheme topology · Definition 28.5.1; Lemmas 28.5.2, 28.5.4, 28.5.5 and 28.5.8, statements and displayed proofs `](https://stacks.math.columbia.edu/tag/01OU)
- [` The Stacks Project, finite-presentation calculus · Definition 29.22.1 and Lemmas 29.22.4 and 29.22.8 `](https://stacks.math.columbia.edu/tag/01TO)
- [` The Stacks Project, properness under base change · Lemma 29.42.5, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/01W4)
- [` The Stacks Project, closed immersions are proper · Lemma 29.42.6, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/01W5)


## Statement
Assume the Axiom of Choice and choose the site universes specified below. Let $k$ be a field with prime subfield $F$, and let $X$ be a separated finite-type $k$-scheme. Evaluation at $X$ of the constant integer cdh sheaf on the specified qcqs $F$-scheme site is canonically isomorphic to evaluation at $X$ of the constant integer cdh sheaf on the site of separated finite-type $k$-schemes. The isomorphism is natural for morphisms between such $k$-schemes.

Here qcqs means quasi-compact and quasi-separated. The first site is the small skeleton of qcqs $F$-schemes in the chosen universe, with topology generated by Nisnevich covers and abstract blowup families whose closed immersion and proper map are finitely presented. The second site consists of separated finite-type $k$-schemes with the cdh topology generated by Nisnevich covers and abstract blowup families. An abstract blowup family is $\{Z\to T,T'\to T\}$, where $Z\to T$ is a closed immersion, $T'\to T$ is proper, and $T'\setminus(T'\times_T Z)\to T\setminus Z$ is an isomorphism. The constant integer sheaf is the sheafification of the presheaf with value $\mathbb Z$ and identity restriction maps.


## Statement references

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[def-cdh-topology-interface](item-def-cdh-topology-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[lem-adjudicate-57a7caabd963-cdp-abstract-generation](item-lem-adjudicate-57a7caabd963-cdp-abstract-generation)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base)

[math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield)

## Facts & Assumptions

**Given:** Choice, the compatible universe and representative conventions of the qcqs site, a field $k$ with prime subfield $F$, and a separated finite-type $k$-scheme $X$.

**Goal:** Compare the constant-sheaf evaluations naturally, retaining both specified cdh topologies.

[F1] The large-site universe, skeleton and evaluation conventions are those of [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site). Choice is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) for those representatives and for the supplied affine quasi-compactness and etale-stability results. The prime subfield is the smallest subfield, as in [math:def-prime-subfield](https://alphabetamath.cc/item/def-prime-subfield). The finite-type category and cdp definition of cdh are those of [def-cdh-topology-interface](item-def-cdh-topology-interface). The exact equivalence with generation by Nisnevich and actual abstract blowup families, also on nonreduced schemes, is [lem-adjudicate-57a7caabd963-cdp-abstract-generation](item-lem-adjudicate-57a7caabd963-cdp-abstract-generation).

[F2] Sieves, generated Grothendieck topologies, presheaves and double-plus sheafification have the meanings of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). A matching family assigns to each arrow of a sieve a presheaf section, compatibly with precomposition; equality of plus classes means equality after a common covering refinement. For a family with fibre products, its matching sections are precisely sections on the members agreeing on each pairwise fibre product: restriction gives the forward direction, and in the reverse direction define the value on an arrow factoring through a member by restriction; agreement on the fibre product makes it independent of the factorization.

[F3] Quasi-compact and quasi-separated schemes are defined by [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme); the corresponding morphism conditions are [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism). Finite type means locally given by finite algebra generators and quasi-compact, as in [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Locally Noetherian means covered by affine spectra of Noetherian rings; Noetherian means also quasi-compact. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) The imported inputs in source references 0–3 give Noetherianity over $k$, quasi-compactness of maps from Noetherian sources, and finite presentation, including quasi-separatedness, for finite-type maps to locally Noetherian targets. Finite presentation and local finite presentation imply their finite-type counterparts; finite presentation survives arbitrary base change.

[F4] A Nisnevich family has an etale residue-field-preserving lift of every point, with no finiteness requirement on the index set. [def-nisnevich-covering-interface](item-def-nisnevich-covering-interface) Etale maps are locally of finite presentation and retain etaleness under restriction to source opens. [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes) They remain etale under base change and composition under the assumed Choice. [math:lem-etale-stable-base-change-composition](https://alphabetamath.cc/item/lem-etale-stable-base-change-composition) A point and an embedding of its residue field into $K$ specify a morphism from $\operatorname{Spec}K$, compatibly with all scheme morphisms. [math:lem-field-valued-points-of-schemes](https://alphabetamath.cc/item/lem-field-valued-points-of-schemes) Thus a residue-field-preserving lift over $s$ gives a $\kappa(t)$-valued lift after any base change at $t$ above $s$; the resulting image point has residue field $\kappa(t)$, since its field embeds back into $\kappa(t)$ over $\kappa(t)$. Hence Nisnevich families remain Nisnevich after base change. Open refinements preserve the same residue fields.

[F5] Affine schemes are quasi-compact under Choice. [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) Affine schemes are absolutely separated and are separated over each base: the latter follows by pulling their absolute diagonal back to the relative product. [math:cor-affine-schemes-separated](https://alphabetamath.cc/item/cor-affine-schemes-separated) [math:def-separated-scheme-over-base](https://alphabetamath.cc/item/def-separated-scheme-over-base) Separated morphisms compose. [math:lem-separated-stable-under-composition](https://alphabetamath.cc/item/lem-separated-stable-under-composition) Finite-type morphisms compose and are preserved by base change, as proved in [math:cor-base-change-finite-type-and-products](https://alphabetamath.cc/item/cor-base-change-finite-type-and-products), including its proof step 2.1 for composition. All scheme fibre products exist by [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist), with the universal property of [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property). The finite-type site's represented fibre products are the scheme fibre products. [def-cdh-topology-interface](item-def-cdh-topology-interface) Open and closed immersions are preserved by arbitrary base change. [math:lem-base-change-open-closed-immersions](https://alphabetamath.cc/item/lem-base-change-open-closed-immersions) The properness and finite-type properties of closed immersions, and properness under base change, are imported in source references 4–5. These facts and reference 3 show that base changes of the large abstract blowup generators retain both finite-presentation conditions and the actual open-complement isomorphism.

## External input

For F3, import [Stacks 01T6](https://stacks.math.columbia.edu/tag/01T6), [Stacks 01TX(2)](https://stacks.math.columbia.edu/tag/01TX), and the specified clauses of [Stacks 01OU](https://stacks.math.columbia.edu/tag/01OU), recorded in source references 0–2. Their applications are to Noetherian finite-type targets or to Noetherian affine sources, as established before each use.

For F3 and F5, import the definition and finite-presentation base-change and finite-type implications from [Stacks 01TO, Definition 29.22.1 and Lemmas 29.22.4 and 29.22.8](https://stacks.math.columbia.edu/tag/01TO), recorded in source reference 3.

For F5, import properness under base change from [Stacks 01W4](https://stacks.math.columbia.edu/tag/01W4), and properness, separatedness and finite type of closed immersions from [Stacks 01W5](https://stacks.math.columbia.edu/tag/01W5), recorded in source references 4–5. These are precise imported premises of the local comparison argument below; no reconstruction of the cited foundations or independent acceptance is asserted.

## Proof

1.1 Write $\mathcal C$ for the qcqs $F$-scheme category, temporarily transporting the skeleton convention along its chosen representatives, and $\mathcal D$ for the separated finite-type $k$-scheme category. The forgetful functor $u:\mathcal D\to\mathcal C$ need not be full. It does induce a full inclusion on each slice over $T\in\mathcal D$: an $F$-arrow between two objects over $T$ commuting with their maps to $T$ respects their induced $k$-structures. Their scheme fibre products are therefore common fibre products in these slices. By F1 the finite-type topology has the abstract-blowup presentation. Its generators become large-site covers: the proper and closed-immersion maps are finite type, their targets are Noetherian by F3, and hence they are finitely presented; their separated finite-type members are qcqs by F3. Nisnevich generators have the same pointwise property in both sites. Conversely pull a large-site generator on any $S\in\mathcal C$ back along any $F$-arrow $uT\to S$, with $T\in\mathcal D$. For an abstract blowup generator, F3 and F5 preserve the defining conditions under this base change. Both resulting maps are finite type and separated over $T$, so their sources lie in $\mathcal D$ by F5; the resulting family is a finite-type cdh cover. For a Nisnevich generator, F4 makes its pullback a Nisnevich family over $T$. Refine every member by all its affine open subschemes. Each affine open $V$ is locally Noetherian by F3, because it is locally of finite type over Noetherian $T$, and is quasi-compact by F5; hence it is Noetherian. Its map to $T$ is quasi-compact by F3 and locally of finite type by F4, so is finite type and in fact finitely presented by F3, with the necessary quasi-separatedness included. Its composite to $\operatorname{Spec}k$ is finite type by F5, and the affine $V$ is separated over $k$ by F5. Thus every $V$ belongs to $\mathcal D$. Every point's lift lies in such an affine open, so this entire affine family is a Nisnevich refinement in $\mathcal D$. The universe bounds admit this set of all affine opens. No finite Nisnevich subfamily or extension of a lift to a Zariski section is required. [F1, F3, F4, F5, given, construct]

2.1 We verify cofinality for all covering sieves, rather than assuming that finite composites suffice. Define a topology $K$ on $\mathcal C$ as follows: a sieve $R$ on $S$ is $K$-covering if for every $T\in\mathcal D$ and every $F$-arrow $f:uT\to S$, the sieve on $T$ consisting of $k$-arrows $g:V\to T$ with $f\,u(g)\in R$ is covering in $\mathcal D$. Maximality is immediate; pullback stability follows by composing $f$ with the pulling-back arrow. For local character, let $R$ be $K$-covering on $S$ and let $R'$ have $K$-covering pullbacks along every arrow of $R$. Fix $f:uT\to S$. The restriction of $f^*R$ covers $T$. For each $g:V\to T$ in it, apply the hypothesis to $f\,u(g)$ and test at $V$ with its identity: the restriction of $(f\,u(g))^*R'$ covers $V$. Local character in $\mathcal D$ now makes the restriction of $f^*R'$ cover $T$, which proves the required axiom for $K$. Step 1.1 shows that $K$ contains every large-site generating cover, so every large-site covering sieve belongs to $K$. In particular every large-site covering sieve on $uT$ contains the images of a covering sieve on $T$. In the other direction, the sieves $Q$ on objects of $\mathcal D$ whose generated $\mathcal C$-sieves cover form a topology on $\mathcal D$: pullback commutes with generating such sieves because the slice fibre products are common; for local character, every arrow in the generated sieve factors through a $u(g)$ with $g\in Q$, so pullback stability and local character in $\mathcal C$ give the assertion. This topology contains all finite-type generators by step 1.1; hence every $\mathcal D$-cover generates a $\mathcal C$-cover. Therefore the $\mathcal C$-sieves generated by $\mathcal D$-covering families are cofinal among covering sieves on $uT$. For any presheaf $P$ on $\mathcal C$, F2 computes its matching families on such a sieve from sections on the family members and pairwise fibre products. These are the same objects and arrows over $T$ in both sites, by step 1.1. Common refinements can likewise be computed in $\mathcal D$, using the just-proved restriction of every large covering sieve and intersections of covering sieves. Thus $P^+(uT)\cong(u^*P)^+(T)$ canonically, where $u^*P$ means restriction. The construction commutes with restriction along every $k$-morphism, since it uses the same pullbacks and refinements. Apply it first to the constant presheaf $P=\mathbb Z$, and then to $P^+$; F2 identifies the double-plus values with the two constant sheaves. The comparison preserves pointwise addition, so it is a natural isomorphism of groups. For the empty scheme the empty Nisnevich family covers in both sites and both sheaves have the zero group there. Choice is used only as declared in F1 and F5 and through the etale-stability supplier in F4. This proves the entire stated comparison. [F1, F2, F3, F4, F5, step 1.1] ∎
