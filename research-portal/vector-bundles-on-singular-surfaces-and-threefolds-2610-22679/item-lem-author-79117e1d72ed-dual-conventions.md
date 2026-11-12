---
title: Quotient and line projectivizations agree after dualizing
status: published
research_item: lem-author-79117e1d72ed-dual-conventions
dependency_level: 13
sources:
  references:
    - title: The Stacks Project, Projective bundles
      url: https://stacks.math.columbia.edu/tag/01OA
      locator: Section 27.21, Lemma 27.21.4
      statement: For every scheme S and quasi-coherent O_S-module E, the
        projective-bundle structure morphism Proj_S(Sym(E)) -> S is separated.
      hypotheses: S is any scheme; E is quasi-coherent. The application uses finite
        locally free E, which is quasi-coherent. No Noetherian or field
        hypothesis.
      reading_limits: Read Section 27.21 through Lemma 27.21.4 on the linked
        primary-source page in this adjudication, including the lemma statement
        and its one-line proof invoking Lemma 27.16.9. The earlier relative-Proj
        proof is imported, not reconstructed.
    - title: The Stacks Project, Separation axioms
      url: https://stacks.math.columbia.edu/tag/01KH
      locator: Section 26.21, paragraph after Definition 26.21.3; Remark 26.21.18(2)
        and its proof, with P = quasi-compact and quasi-separated
      statement: A separated morphism is quasi-separated. If Y is a qcqs scheme and
        f:X -> Y is a qcqs morphism, then X is qcqs.
      hypotheses: Morphisms of schemes; for the second assertion the target Y is qcqs
        and f is quasi-compact and quasi-separated. Apply to the
        projective-bundle projection after establishing quasi-compactness by
        finite standard affine charts.
      reading_limits: Read Definition 26.21.3 and its following paragraph, Lemma
        26.21.6, and Remark 26.21.18 with its proof on the linked primary-source
        page in this adjudication. The affine criterion agrees with the declared
        definitions. Earlier results used by these source proofs remain
        imported; no reconstruction of their foundations is claimed.
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)
- [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)
- [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf)
- [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)
- [math:def-kernel-cokernel-image-sheaves](https://alphabetamath.cc/item/def-kernel-cokernel-image-sheaves)
- [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)
- [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)
- [math:thm-local-ring-unit-characterisations](https://alphabetamath.cc/item/thm-local-ring-unit-characterisations)
- [` The Stacks Project, Projective bundles · Section 27.21, Lemma 27.21.4 `](https://stacks.math.columbia.edu/tag/01OA)
- [` The Stacks Project, Separation axioms · Section 26.21, paragraph after Definition 26.21.3; Remark 26.21.18(2) and its proof, with P = quasi-compact and quasi-separated `](https://stacks.math.columbia.edu/tag/01KH)


## Statement
Assume the Axiom of Choice. Let $X$ be a scheme and $E$ a finite locally free $\mathcal O_X$-module of constant rank $r>0$. Write $E^\vee$ for its sheaf dual and $Q_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$ for its quotient projectivization, with tautological quotient $\mathcal O_Q(1)$.

For a finite locally free sheaf $V$ of constant positive rank, the line projectivization $P_X^{\rm lin}(V)$ represents the following data over an $X$-scheme $g:T\to X$: an inclusion $S\hookrightarrow g^*V$ with $S$ invertible and locally free cokernel, up to isomorphism of inclusions. Here locally free cokernel means one locally isomorphic to a direct sum of copies of the structure sheaf; its rank is necessarily finite in this situation, as shown below. Its existence over an arbitrary $X$ is established below using $Q_X(V^\vee)$. Such an inclusion is called a rank-one subbundle; its universal line is $\mathcal O_{P^{\rm lin}}(-1)$, and $\mathcal O_{P^{\rm lin}}(1)$ means its dual.

There is a canonical base-change-compatible $X$-isomorphism $\alpha:Q_X(E)\simeq P_X^{\rm lin}(E^\vee)$. It identifies the universal subbundle after pullback with $\mathcal O_Q(1)^\vee$, and hence $\alpha^*\mathcal O_{P^{\rm lin}}(1)\simeq\mathcal O_Q(1)$. These geometric assertions impose no quasi-compactness, quasi-separatedness, field, smoothness, reducedness, Noetherianity or dimension hypothesis on $X$.

For the EM first Chern map, additionally let $X$ be quasi-compact and quasi-separated over $F=\mathbb Q$ or $\mathbb F_p$, with $p$ prime. The two projectivizations are then again qcqs $F$-schemes, their line convention agrees with EM’s, and $\alpha^*c_1(\mathcal O_{P^{\rm lin}}(1))=c_1(\mathcal O_Q(1))$ in $H^2(\mathbb Z(1)_{\rm mot}(Q_X(E)))$. Thus there is no sign change. The same conclusion holds over any field by regarding its schemes as schemes over its prime subfield. No Chern class is asserted on an unrestricted scheme without a specified applicable theory.

## Statement references

[math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme)

[math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients)

[thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change)

[math:def-scheme](https://alphabetamath.cc/item/def-scheme)

[math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf)

[math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces)

[math:def-kernel-cokernel-image-sheaves](https://alphabetamath.cc/item/def-kernel-cokernel-image-sheaves)

[math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)

[math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts)

[math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[math:def-local-ring](https://alphabetamath.cc/item/def-local-ring)

[math:thm-local-ring-unit-characterisations](https://alphabetamath.cc/item/thm-local-ring-unit-characterisations)

## Facts & Assumptions
[F1] [math:def-scheme](https://alphabetamath.cc/item/def-scheme), [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) fix schemes, morphisms and morphisms over a base. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) and [math:def-invertible-sheaf](https://alphabetamath.cc/item/def-invertible-sheaf) fix the bundle types: invertible means locally free of rank one; finite locally free sheaves have finite free local frames and are quasi-coherent. [math:def-local-ring](https://alphabetamath.cc/item/def-local-ring) fixes local rings. Under AC, [math:thm-local-ring-unit-characterisations](https://alphabetamath.cc/item/thm-local-ring-unit-characterisations) supplies that the nonunits form the unique maximal ideal; hence a finite row generating the unit ideal has a unit entry at each stalk.

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). In step 2.1 it discharges the inherited choice assumption of the quotient representation and construction in [F2], of the affine quasi-compactness supplier in [F6], and of the EM supplier in [F5]; in step 1.1 it discharges the local-ring unit-characterization hypothesis in [F1]. No further choice principle is introduced.

[F2] [math:def-projective-bundle-scheme](https://alphabetamath.cc/item/def-projective-bundle-scheme) defines $Q_X(V)$, its symmetric-algebra relative Proj, twists, tautological quotient and arbitrary base change. Under AC, [math:thm-projective-bundle-represents-line-quotients](https://alphabetamath.cc/item/thm-projective-bundle-represents-line-quotients) naturally identifies its $T$-points with isomorphism classes of invertible quotients of $g^*V$, the identity point corresponding to the universal quotient.

[F3] [math:lem-dual-locally-free-and-base-change](https://alphabetamath.cc/item/lem-dual-locally-free-and-base-change) defines $V^\vee=\mathcal H om(V,\mathcal O)$, gives its finite local freeness with unchanged rank, the canonical evaluation isomorphism $V\simeq V^{\vee\vee}$, and the natural isomorphism $g^*(V^\vee)\simeq(g^*V)^\vee$. [math:def-pullback-module-ringed-spaces](https://alphabetamath.cc/item/def-pullback-module-ringed-spaces) defines module pullback. Its tensor formula identifies the pullback of $\mathcal O^r$ with $\mathcal O^r$, so pullback preserves finite locally free sheaves and their ranks. On finite free frames pullback takes a matrix to its coefficientwise pullback and duality takes it to its transpose; these descriptions also verify compatibility with compositions and evaluation.

[F4] [math:def-kernel-cokernel-image-sheaves](https://alphabetamath.cc/item/def-kernel-cokernel-image-sheaves) fixes sheaf kernels and cokernels; [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves) fixes exactness for module sheaves. By [math:thm-exactness-of-sheaves-stalkwise](https://alphabetamath.cc/item/thm-exactness-of-sheaves-stalkwise), a surjective sheaf morphism is surjective on stalks, so each of finitely many local sections has a lift after shrinking near a given point. Local splitting and preservation of these split sequences by pullback and duality are checked explicitly in step 1.1.

[F5] [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1) supplies EM’s line-subbundle convention, the dual tautological line and its natural map $c_1:\operatorname{Pic}(Z)\to H^2(\mathbb Z(1)_{\rm mot}(Z))$ on qcqs prime-field schemes. In particular it depends only on the isomorphism class of the line bundle. Its restriction along the prime-subfield forgetful functor gives the same map on qcqs schemes over any field; no extension to arbitrary schemes is used.

[F6] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-quasi-compact-and-quasi-separated-morphism](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-morphism) fix qcqs schemes and morphisms; [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes) fixes separatedness. The local models in [F2] and the finite standard affine charts in [math:def-relative-projective-space-standard-charts](https://alphabetamath.cc/item/def-relative-projective-space-standard-charts), together with the AC-qualified [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact), imply that $Q_X(E)$ is quasi-compact if $X$ is quasi-compact: extract a finite affine trivializing cover and then use finitely many charts above each member. Reference 0 supplies separatedness of its projection. Reference 1 supplies separated-implies-quasi-separated and the passage from a qcqs morphism over a qcqs base to a qcqs total scheme. Step 2.1 applies these precise imported premises to put the Chern comparison in its domain.

## External input
Reference 0 imports only the separatedness of the projective-bundle projection, under the scheme and quasi-coherence hypotheses recorded in that citation. It applies to the finite locally free sheaves in [F1].

Reference 1 imports that a separated morphism is quasi-separated and that a qcqs morphism with qcqs target has qcqs source. For quasi-compactness of the projection, apply the finite-cover argument in [F6] over each quasi-compact open of the base: choose a finite affine trivializing cover of that open, then take the finitely many standard affine charts above each member. These imported geometry facts justify the domain of the EM Chern comparison; the duality correspondence and tautological identification below are local arguments, not imported proofs.

## Proof
**Given:** AC, the scheme $X$, the rank-$r$ sheaf $E$, and a test $X$-scheme $g:T\to X$ as in the Statement; impose the additional qcqs field hypothesis only for the EM conclusion.

**Goal:** Construct the canonical isomorphism, track its tautological line and prove the Chern comparison in the specified domain.

1.1 Put $M=g^*E$. A quotient $q:M\twoheadrightarrow L$ with $L$ invertible locally splits: trivialize $M$ and $L$ near a point, lift the basis of $L$ using [F4], and shrink. In the resulting row $(a_1,\ldots,a_r)$ at that point, surjectivity implies that some $a_i$ is a unit in the local ring; after shrinking it is invertible. Then $e_i/a_i$ maps to $1$, while $e_j-(a_j/a_i)e_i$ for $j\ne i$ form a free basis of the kernel. Thus the dual inclusion $L^\vee\hookrightarrow M^\vee$ has locally free cokernel of rank $r-1$. Conversely, for an inclusion $S\hookrightarrow M^\vee$ with invertible $S$ and locally free cokernel $C$, the quotient $C$ is locally of finite rank: its stalk is generated by the finitely many images of a frame of $M^\vee$, and a free module with a finite generating family has finite basis, since the union of the finite supports of those generators must contain every basis index. Trivialize $C$ and lift its finitely many basis sections by [F4], giving a local splitting. Dualizing this split sequence gives a quotient $M^{\vee\vee}\twoheadrightarrow S^\vee$, hence $M\twoheadrightarrow S^\vee$ by [F3]. Evaluation shows that these operations are inverse up to the specified isomorphisms of quotients and inclusions. The splittings are used only to verify exactness and local freeness, so the maps themselves are canonical. On these local split sequences, pullback preserves the direct-sum decompositions; the coefficientwise matrix and transpose descriptions in [F3] show that dualizing commutes with pullback, including its evaluation identifications. Hence the bijection commutes with every test-scheme pullback. [A1, F1, F3, F4, construct]

2.1 For a finite locally free $V$ of constant positive rank, apply step 1.1 to $V^\vee$ and the evaluation $V\simeq V^{\vee\vee}$: by [A1] and [F2], $Q_X(V^\vee)$ represents precisely the subline data defining $P_X^{\rm lin}(V)$. Its universal quotient dualizes to the universal subline. Applying the two inverse correspondences to the universal quotient on $Q_X(E)$ and the universal subline on $P_X^{\rm lin}(E^\vee)$ gives morphisms in both directions. Their composites classify the same universal data as the identities, hence equal the identities by the bijectivity in [F2] and step 1.1. This constructs $\alpha$ independently of any chosen representative of the line projectivization. For the universal quotient line $L=\mathcal O_Q(1)$, the pulled-back subline is $S=L^\vee$, whence $\alpha^*\mathcal O_{P^{\rm lin}}(1)=S^\vee\simeq L$ by [F3]. After arbitrary base change the same universal data and the same duality correspondence apply by [F2] and step 1.1, so both the isomorphism and the line identification commute with that base change. Finally, if $X$ is qcqs over $F$, apply the chart argument of [F6] over each quasi-compact open of $X$ as specified in External input; this proves that $Q_X(E)\to X$ is quasi-compact. Its separatedness and the imported permanence facts in [F6] then show that this projection is qcqs, its total scheme is qcqs, and the isomorphic line projectivization is qcqs as well. The projection and the $X$-isomorphism make them $F$-schemes. Under [A1], [F5] therefore applies: naturality of its Chern map and $S^\vee\simeq L$ give the stated equality with no negative sign. Over any field restrict the same construction along its prime subfield as in [F5]. [A1, F1, F2, F3, F5, F6, step 1.1] ∎
