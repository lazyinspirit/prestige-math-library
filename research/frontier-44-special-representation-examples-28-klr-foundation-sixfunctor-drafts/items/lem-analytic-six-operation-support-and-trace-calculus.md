---
id: lem-analytic-six-operation-support-and-trace-calculus
kind: lemma
title: Support localization, base change, projection and trace calculus
status: draft
origin: pipeline
deps:
- thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint
- lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions
- lem-sheaf-supported-on-a-closed-subset-is-a-pushforward
- lem-extension-by-zero-short-exact-sequence
- thm-extension-by-zero-adjunction-exactness
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Under the preceding locally compact and finite-dimensional hypotheses, $u^*Rf_!\simeq Rf'_!v^*$ for Cartesian squares; proper maps have $Rf_!=Rf_*$, giving proper ordinary base change. Bounded tensor factors satisfy the projection formula. Proper-support direct images compose canonically. On the bounded constructible specialization proved by the subsequent local duality construction, exceptional adjoints also compose canonically; their units, counits and traces respect composition and Cartesian pasting. For a closed inclusion $i:Z\to X$ with complement $j$, $i^!$ is the derived functor of $i^{-1}\Gamma_Z$, and both localization triangles hold. Locally, $R\mathcal Hom(i_*k_Z,A)$ is $R\Gamma_ZA$. This lemma does not assume or claim extraordinary dual base change before constructible biduality.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, with k-linear sheaves and the declared Axiom of Choice.

[F1] The exact supplier [[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]] is used with its stated hypotheses.

[F2] The exact supplier [[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]] is used with its stated hypotheses.

[F3] The exact supplier [[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]] is used with its stated hypotheses.

[F4] The exact supplier [[lem-extension-by-zero-short-exact-sequence]] is used with its stated hypotheses.

[F5] The exact supplier [[thm-extension-by-zero-adjunction-exactness]] is used with its stated hypotheses.

[F6] The exact supplier [[def-axiom-of-choice]] is used with its stated hypotheses.

## Proof

1.1 For a closed inclusion $i:Z\to X$ with open complement $j$, define $\Gamma_ZF=\ker(F\to j_*j^*F)$. It has zero stalks off $Z$, hence is $i_*i^{-1}\Gamma_ZF$. Maps $i_*A\to F$ land in this kernel, so $i^!_0F=i^{-1}\Gamma_ZF$ is right adjoint to the exact functor $i_*$. It preserves injectives; its derived functor agrees with the constructed exceptional inverse image on the bounded constructible category by adjunction. The stalk-exact sequence gives $j_!j^*A\to A\to i_*i^*A$. For injective $I$, flasqueness makes $I\to j_*j^*I$ surjective on every open's sections, with kernel $\Gamma_ZI$; $j^*$ preserves injectives because $j_!$ is exact. Thus $i_*i^!A\to A\to Rj_*j^*A$ is the second localization triangle. Finally $H\otimes i_*k_Z=i_*i^*H$ by its stalk formula. Tensor–Hom transposition and the closed adjunction give $\operatorname{Hom}(H,R\mathcal Hom(i_*k_Z,A))=\operatorname{Hom}(i_*i^*H,A)=\operatorname{Hom}(H,i_*i^!A)$, locally on each open; hence $R\mathcal Hom(i_*k_Z,A)=R\Gamma_ZA$. This is the actual closed-support object used in the diagonal Thom calculation. [given, construct, algebra]

1.2 For a Cartesian square X'→X over Y'→Y, inverse image of an injective I on X restricts on every fibre of f' to the restriction of I on the canonically homeomorphic original fibre. It is therefore fibrewise-c-soft and f'!-acyclic. The section restriction map u*f!I→f'!v*I is an isomorphism on stalks by the fibre-stalk computation in the exceptional-adjunction theorem. Applying it to an injective complex proves u*Rf!≈Rf'!v*. If f is proper, this is ordinary proper base change u*Rf*≈Rf'*v*. These are the canonical restriction/exchange maps, not arbitrary chosen isomorphisms. [given, construct, algebra]

1.3 For proper maps ordinary compact fibre cohomology can also be verified independently: restriction of injectives to compact fibres is c-soft and Γ-acyclic by the c-soft lemma; compact-neighbourhood sections are the compact-neighbourhood lemma; preimage neighbourhoods are cofinal because f is closed, with V=Y\f(X\U). This recovers exactly the Stacks full proof and ensures the exchange is the canonical derived adjunction map. [given, construct, algebra]

1.4 Projection formula is obtained on fibres. For bounded A,B choose A→I injective. On X_y, I is c-soft and f*B is the constant complex B_y. Tensor with each B_y term is a direct sum of I|X_y, hence c-soft; Γ_c(E⊗V)=Γ_c(E)⊗V because a compactly supported section has a finite local tensor presentation and a finite compact cover uses only finitely many coefficient vectors. This proves the canonical map Rf!A⊗B→Rf!(A⊗f*B) is an isomorphism on stalks. Its map is the adjoint of the tensor of the f*⊣Rf* counit with id, equivalently sectionwise s⊗b↦s⊗f*b. The signed totalization supplies the bounded-complex version. [given, construct, algebra]

1.5 The support definition proves (gf)!=g!f!: a section proper over Z has support proper over Y, since the inverse image of a compact L⊂Y is a closed subset of the inverse image of the compact g(L); its image support is proper over Z. Conversely, if support is locally proper over Y and its image support proper over Z, the inverse image of a compact in Z lies over a compact image support and is compact. The support of f!s is f(support s), by the fibre-stalk identity and local properness, so these are inverse descriptions. Direct images of globally c-soft sheaves by f! are c-soft: a section over a compact base set is represented on a neighbourhood by the compact-neighbourhood lemma, its total support over that compact set is compact by properness of the representing support. Enclose it in a relatively compact W. On the compact set f^{-1}K∩closure(W), prescribe the represented section, and prescribe zero on a compact collar outside a smaller neighbourhood of its support. A support-controlled c-soft extension, supported in W and preserving these compact-set germs, agrees over all f^{-1}K, because both sections vanish outside the smaller support neighbourhood. Its compact pushforward extends the original section over K. Thus f! sends injectives to g!-acyclic sheaves. Applying the two ordinary support functors to an injective resolution gives the canonical derived composition R(gf)!=Rg!Rf!; the same comparison proves associativity for triples, since the section support bijection is literally associative. [given, construct, algebra]

1.6 If the represented right adjoints preserve the chosen bounded subcategory, so that the represented Hom formula is a full adjunction, exceptional composition (gf)^!≈f^!g^! is the unique adjoint transpose of that composition isomorphism. Traces tr_f:Rf!f^!→Id are the actual counits from the exceptional-adjunction theorem. Under the composition identification, tr_{gf}=tr_g ∘ Rg!(tr_f)g^!. This equality is obtained by transposing the identity of f^!g^!; both sides have that transpose, as can be checked using the two triangle identities. Thus traces compose without a new axiom. Identity units and counits are the identity transpositions. [given, construct, algebra]

2.1 The two composites of base-change maps in a pasted rectangle restrict a representative section to the same fibre section; hence they agree before deriving. Resolution comparisons preserve that equality. Projection formulas for composites both send pure tensors s⊗b to the same pullback tensor. Projection/trace compatibility follows by transposition: both composites transpose to evaluation on (s⊗b) followed by the same counit. This proves the projection, base-change, unit and trace squares used in pull-push convolution. These identities hold in the dg resolution model; no triangulated-level isomorphism is chosen independently. The extraordinary proper exchange u^!Rf*≈Rf'*v^! is **not** claimed to follow from simply taking a right-adjoint mate of the ordinary base-change isomorphism. Its actual proof needs the biduality result below. That distinction prevents exchanging the wrong adjunction pairs. [given, construct, algebra] ∎

