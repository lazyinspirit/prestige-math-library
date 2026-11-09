---
title: Local free chains detect natural perfect operations on every qcqs base
status: draft
research_item: lem-author-9b6cb358ddc9-local-chains
dependency_level: 19
---

PDF p. 14: Lemma6.4; scheme conventions p3

## Prerequisites

- [thm-author-3cde9692a7e9-plus-model-input](item-thm-author-3cde9692a7e9-plus-model-input)
- [thm-adjudicate-9ead0798f06a-projective-q-w-comparison](item-thm-adjudicate-9ead0798f06a-projective-q-w-comparison)
- [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied perfect-K-space and derived-sheaf constructions. Let $X$ be any qcqs scheme over a field. On its small Zariski site let $\mathcal K=\Omega^\infty K_{\rm Perf}$ and $j:\underline{\mathbb Z}\times BGL\to\mathcal K$ be the actual stable free-class map, with locally constant ranks. The maps $j$, $j\times j$, and the component-zero map $j_0:BGL\to S$ into the actual rank-zero fiber induce local quasi-isomorphisms on normalized free integral chains. Therefore precomposition detects homotopy classes of derived sheaf maps into each actual abelian EM coefficient target $A_i=\Omega^\infty(\mathbb Z(i)_{\rm mot}[2i])$. No noetherianness, dimension bound, or continuity of motivic complexes is assumed.

## Facts & Assumptions
[A1] AC and fixed universe bounds are assumed for the small presentations and enhanced realizations in the suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [thm-adjudicate-9ead0798f06a-projective-q-w-comparison](item-thm-adjudicate-9ead0798f06a-projective-q-w-comparison) supplies the full natural Quillen-to-bounded-projective Waldhausen K-space comparison, including its degree-zero object map, and the canonical acyclic plus map for every commutative local ring. The latter clause covers Zariski local rings. [thm-author-3cde9692a7e9-plus-model-input](item-thm-author-3cde9692a7e9-plus-model-input) fixes the actual free-object/addition comparison used by the completed sheaf model; its stated Nisnevich-local scope alone is not used to infer the all-local-ring clause.

[F2] [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) supplies the actual sheaf model, coefficient targets and completion construction. On the small site of open subschemes of $X$, write $D(\operatorname{Sh}(X_{\rm Zar},\mathbb Z))$ for the unbounded derived category of abelian sheaves, localized at cohomology-sheaf isomorphisms, with its derived mapping spaces and cochain convention $H^a(C[s])=H^{a+s}(C)$. Define $R\Gamma_{\rm Zar}(U,C)=R\operatorname{Hom}(\mathbb Z[U],C)$, where $\mathbb Z[U]$ is the free abelian sheaf on the represented open. For a space-valued sheaf $Y$, its derived free integral chains are sheafified normalized free chains of a simplicial resolution, placed in nonpositive cochain degrees. The right adjoint is the underlying derived abelian EM-space functor, using the nonpositive truncation for Dold–Kan. Thus the actual target associated to $C_i[2i]$, with $C_i=\mathbb Z(i)_{\rm mot}$, is $A_i(U)=\Omega^\infty H(R\Gamma_{\rm Zar}(U,C_i[2i]))$. These are local Zariski conventions, not an enlargement of the separately scoped derived-sections definition. The actual complexes satisfy Zariski descent, so restriction is evaluated by these derived sections.

[F3] [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge) identifies the actual nonconnective perfect $K_0$ on every affine ring with its finite-projective Grothendieck group, by the object-class map; it uses the idempotent completeness of $\mathrm{Perf}$. The Quillen and bounded-projective degree-zero object maps in [F1] send each generator to that same class.

[F4] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) supplies the actual bounded finite-projective enhanced model and K-projective mapping property. [lem-author-4f716d60801a-lifted-affine-equivalence](item-lem-author-4f716d60801a-lifted-affine-equivalence) supplies the actual associated-sheaf equivalence with the affine perfect category, including preservation of shifts and cones.

[F5] [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) supplies the natural Waldhausen-to-connective equivalence under factorization and DHKS-saturation, its actual core/object maps, and the canonical connective-to-nonconnective comparison in positive degrees. Its statement does not by itself supply the missing degree-zero comparison; [F3] does.


**Given:** $X$ as stated, AC and the fixed universe bounds.

**Goal:** Supply the locality and derived-map argument beyond the earlier finite-dimensional scope.

## Proof
1.1 Finite projective modules over a filtered colimit of rings descend: represent one by an idempotent finite matrix, and descend its finitely many entries and idempotent equations. Morphisms, their equalities, inverses, and split exact sequences descend by the same finite-matrix argument. A Quillen Q morphism is a finite admissible diagram modulo an isomorphism of such diagrams; the diagram, its splitting data, and any witnessing isomorphism descend. Consequently every finite simplex of the Q nerve descends, with equality after a further index. Realization preserves filtered colimits, and finite homotopy data and the finite limits defining based loops commute with filtered colimits of spaces. Thus $K^Q(P(-))$ commutes with these ring colimits, including its components. [given, construct]

1.2 The full Q/Waldhausen comparison of [F1] applies because surjections of finite projectives split. Bounded projective complexes admit mapping-cylinder factorization within this category, and their acyclic cones are contractible by [F4]. A quasi-isomorphism is therefore a homotopy equivalence; conversely a map invertible in the localization induces an isomorphism on cohomology, so DHKS-saturation holds. Their actual localization is the affine enhanced perfect category by [F4], and extension of scalars preserves split cofibrations and contractible cones. Hence [F5] applies naturally. The resulting comparison to the actual nonconnective perfect K-space is an isomorphism in every positive degree. On degree zero, the Q and Waldhausen object classes generate their Grothendieck groups, and [F3] identifies their image with the same finite-projective class in actual perfect $K_0$. Thus this canonical comparison is also an isomorphism on components. Translation in these grouplike K-spaces identifies all components, so it is an equivalence of the full K-spaces. Choice is used in the supplied small presentations and enhanced realizations, not as a substitute for the component argument. [A1, F1, F3, F4, F5]

2.1 Combine the natural full-space comparison in step 1.2 with the Q continuity in step 1.1. This identifies the connective space of actual perfect K-theory of a filtered colimit ring with the filtered colimit of the corresponding spaces, compatibly with free-object maps. Only this K-theoretic continuity is used. No assertion about continuity of motivic complexes enters. [step 1.1, step 1.2]

3.1 At a Zariski point $x$, the affine-neighborhood rings have colimit $\mathcal O_{X,x}$. Step 2.1 identifies the stalk of $\mathcal K$ with its actual K-space. Finite matrices and invertibility descend in the same way, so the source stalk is $\mathbb Z\times BGL(\mathcal O_{X,x})$. Finite projectives over this local ring are free, and the actual free-class map is componentwise the acyclic plus map of [F1]. The rank map on its $K_0$ is the isomorphism to $\mathbb Z$, so taking the fiber over zero selects precisely the zero component. This proves the integral chain quasi-isomorphism for $j$ and for $j_0$. [F1, F2, step 2.1]

4.1 Eilenberg–Zilber identifies normalized chains of a product with the tensor product of the two chain complexes. These complexes are degreewise free and bounded below in homological grading, hence K-flat; tensoring the chain quasi-isomorphisms for $j$ therefore preserves them. This proves the assertion for $j\times j$. Stalks commute with these finite products and chain constructions, and Zariski points detect isomorphisms of abelian sheaves on every scheme, without a dimension hypothesis. [step 3.1, algebra]

5.1 Sheafify normalized free integral chains. Abelian sheafification is exact, so steps 3.1 and 4.1 give quasi-isomorphisms of complexes of sheaves for all three maps. The free-abelian and normalized-chain adjunctions, applied to simplicial resolutions and derived EM targets as in [F2], identify maps of space-valued sheaves into $A_i$ with derived maps from these chains into $C_i[2i]$. Precomposition by a chain quasi-isomorphism is an equivalence of these derived mapping spaces and hence detects their homotopy classes. This uses no stalk calculation or filtered-colimit assertion for the motivic coefficients. Applying derived sections on $X$ to an equality of derived sheaf-map classes retains its descent data. [F2, step 3.1, step 4.1] ∎
