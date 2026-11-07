---
dependency_level: 2
id: lem-relative-curve-picard-rigidification-and-affine-diagonal
kind: lemma
title: Relative Picard rigidification and its affine diagonal over a DVR
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-relative-curve-over-dvr-universal-cohomology
- lem-smooth-proper-curve-over-dvr-has-finite-flat-cartier-multisection
- lem-proper-flat-fp-cohomology-perfect-complex
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- def-fppf-sheaf-and-sheafification
- lem-fppf-sheafification-exists
- thm-flat-finite-presentation-is-open
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC and DC are explicit actual cohomology, regularity, scheme and descent
  supplier hypotheses; arbitrary tests retain their nilpotents and need not be Noetherian.
sources:
  references:
  - title: Quentin Guignard, On the ramified class field theory of relative curves,
      arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Section4.1–4.14, printed/PDF16–21, full relevant passage read; the basic
      prerequisites are locally proved, not imported from its relativePicard citations.
  - title: Steven Kleiman, The Picard Scheme
    url: https://arxiv.org/pdf/math/0504020
    locator: Theorem4.8 andLemma4.9, PDF27–31, complete printed proof read; the cited
      properflatquotient theorem is not imported or claimed proved here.
---

## Statement

Assume AC and DC. Let $R$ be any DVR and $C/R$ a smooth proper curve with geometrically connected fibres, of any genus. Define $\mathcal P$ on all $R$-schemes to be the fppf sheafification of
$$T\longmapsto\operatorname{Pic}(C_T)/p_T^*\operatorname{Pic}(T),$$
where $\operatorname{Pic}$ denotes isomorphism classes of invertible sheaves under tensor product. This is a definition of the relative fppf Picard sheaf, not an assertion that it is represented.

If a section $a:T\to C_T$ is supplied after any base change, then $\mathcal P_T$ is the all-test functor of pairs $(L,\rho)$, with $L$ invertible on $C_U$ and $\rho:a_U^*L\xrightarrow{\sim}\mathcal O_U$, modulo rigidification-preserving isomorphisms. Such an isomorphism, if it exists, is unique, and these pairs and maps have effective fppf descent.

The diagonal of $\mathcal P$ is represented by affine morphisms of finite presentation: for every $T$ and $x,y\in\mathcal P(T)$, the functor on $T$-schemes $U$ defined by $x|_U=y|_U$ is represented by an affine finitely presented $T$-scheme. Every statement is on arbitrary tests, including nonreduced and non-Noetherian ones, with no original section, complete or henselian base, or perfect residue field required. No representability, properness or smoothness of the whole relative Picard sheaf, and no ordinary universal line bundle without a section, is asserted.

## Facts & Assumptions

**Given:** AC/DC, the DVR curve and the explicitly defined sheaf $\mathcal P$. Test schemes and their nilpotents are unrestricted.

[A1] AC/DC are the actual cohomology and descent hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Universally $p_{T,*}\mathcal O_{C_T}=\mathcal O_T$, with canonical all-algebra comparisons. [[lem-relative-curve-over-dvr-universal-cohomology]]

[F2] There is a finite faithfully flat Cartier multisection $Z\to\operatorname{Spec}R$ and a tautological section after that base change, with no étale or reducedness claim. [[lem-smooth-proper-curve-over-dvr-has-finite-flat-cartier-multisection]]

[F3] Every base-flat finitely presented sheaf on a proper finitely presented family has a bounded nonnegative finite-projective complex computing its cohomology naturally after every algebra base change, locally finite free. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F4] Modules and commutative algebras with compatible faithfully flat descent data descend effectively; the descended algebra is the invariant equalizer and recovers the original after tensoring. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F5] Fppf sheafification exists and identifies presheaf sections exactly when they agree after an fppf cover. [[def-fppf-sheaf-and-sheafification]] [[lem-fppf-sheafification-exists]]

[F6] Flat morphisms of finite presentation are open. [[thm-flat-finite-presentation-is-open]]

## Proof

**Proof technique:** normalize line bundles, represent their unique isomorphisms by finite linear equations, and descend the equality schemes without assuming Picard representability.

**Given:** The Statement data under [A1].

1.1 An automorphism of a line bundle on $C_U$ is a global unit of its structure sheaf, hence a base unit by [F1]. If it respects a rigidification at $a_U$, that unit is $1$. For any line bundle $L$, normalization replaces it by $L\otimes p_U^*(a_U^*L)^{-1}$ with its canonical rigidification. Tensoring $L$ by a base line changes none of this normalized pair. A rigidified pair is in turn isomorphic to its own normalization. Thus the quotient presheaf identifies with normalized pairs wherever a section is supplied. [A1, F1, given, construct, algebra]

2.1 Normalized pairs form an fppf sheaf. Indeed on an fppf cover, representatives of the same normalized pair have unique rigidified isomorphisms by step 1.1, so these maps obey the full overlap cocycle, including nilpotent overlaps. Apply [F4] on affine covers of $C_U$ to descend their line bundles and rigidifications; being invertible is faithfully flat local, and the descended maps are unique. Conversely any isomorphisms descend by the same uniqueness. Taking [F5] therefore identifies this sheaf exactly with $\mathcal P_U$. No ordinary universal bundle or rational section before the supplied base change has been used. [F1, F4, F5, step 1.1, construct]

3.1 Suppose for now a section is supplied and two normalized line bundles are actual representatives over an affine test $\operatorname{Spec}A$. Let $M$ be their ratio with its induced rigidification. Both $M$ and $M^{-1}$ are flat over $A$, since $C_A$ is flat and they are invertible. Apply [F3] and work on an open cover where their bounded nonnegative complexes are finite free. For every algebra $B$ over such an open, sections of $M_B$ are exactly the vectors in the degree-zero bundle satisfying the linear equation $d^0(s)=0$, and similarly for $M_B^{-1}$. Thus their section functors are represented by affine schemes with finitely many linear equations. This uses the actual natural comparison for every $B$, not only residue fields. [F1, F3, step 2.1, construct, algebra]

4.1 Evaluation at the section is a natural $B$-linear map from each kernel functor in step 3.1 to $B$. By Yoneda it is a regular function in the kernel scheme's graded coordinate ring. Scaling the universal section by an indeterminate $t$ makes this function homogeneous of degree one; the homogeneous coordinate grading remains a direct sum even over rings with zero divisors. Its degree-one class therefore lifts to a linear functional on the original degree-zero vector bundle. Consequently evaluation is represented by one linear equation $a(s)=1$, without presuming an extra derived chain-map refinement of [F3]. Impose $d(s)=d(t)=0$ and $a(s)=a(t)=1$ for the two section vectors. Their product $st$ is a global function, hence a base scalar by [F1], and its value at the section is $1$, so $st=1$. These equations thus represent precisely an invertible trivialization of $M$ respecting the rigidification. [F1, F3, step 3.1, construct, algebra]

5.1 The resulting scheme is closed in the product of the two affine vector bundles and is of finite presentation over the test base. It represents a rigidified isomorphism, which is unique by step 1.1. It thus represents the equality of the two Picard classes: if they agree only fppf locally, their normalized isomorphisms glue uniquely by step 2.1, giving the required global pair of inverse sections. Its representations on different cohomology/free patches agree uniquely by this all-test functor and glue. Affineness and finite presentation are local on the target, so the resulting equality scheme is affine and finitely presented there. A closed embedding into these vector bundles is not being asserted to be a closed embedding into the test base itself. [F1, F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 For arbitrary $T$ and $x,y\in\mathcal P(T)$, choose an fppf cover on which they have line-bundle representatives, as in [F5], and pull it back further along $Z_T\to T$ from [F2]. This supplies a section and permits normalization; steps 3.1–5.1 represent their equality over that cover. The equality functor depends only on $x,y$, so the two pullbacks of these affine schemes to every overlap have a unique representing isomorphism, satisfying the cocycle. On an affine open of $T$ one may choose a finite affine fppf subcover: images of the affine finitely presented flat cover pieces are open by [F6], and quasi-compactness supplies finitely many such affine pieces covering the base. Their finite disjoint union is affine faithfully flat of finite presentation. Apply [F4] to descend the affine algebras; uniqueness glues the results on the open cover of $T$. For completeness, finite presentation of the descended algebra follows directly: finitely many generators after the cover are finite sums of base tensors, whose finitely many coefficients from the descended algebra already generate it by faithful flatness. Present it as a quotient of a polynomial ring in these generators. The kernel after the cover is generated by finitely many elements, each using finitely many elements of the original kernel; collect those and use faithful flatness to see they generate the whole original kernel. Thus the descended algebra is finitely presented. This represents the diagonal of $\mathcal P$ by affine finitely presented schemes on all tests. [F2, F4, F5, F6, step 2.1, step 5.1, construct, algebra] ∎

## Remarks

Only the diagonal and rigidified-pair functor are represented here. The full relative Picard/Jacobian construction remains separate. The finite-flat multisection may be ramified and nonreduced, and the descent includes its complete tensor-algebra overlaps.
