---
id: lem-finite-locally-constant-etale-sheaves-represent-finite-etale-covers
kind: lemma
title: "Finite locally constant étale sheaves are represented by finite étale covers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-small-etale-site-of-a-scheme
  - def-lisse-etale-sheaf-of-finite-modules
  - lem-locally-constant-functions-sheafify-the-constant-etale-presheaf
  - lem-etale-coverings-form-a-grothendieck-site
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - thm-etale-morphisms-open-and-quasi-finite
  - def-locally-noetherian-and-noetherian-scheme
  - def-locally-finite-presentation-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-effective-fpqc-descent-of-finite-etale-covers
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - def-presheaf-representable-functor-and-representation
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC through the openness, finite étale refinement, and effective descent suppliers. No additional choice is used to define the descent datum."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.64, Lemma 59.64.4"
      url: https://stacks.math.columbia.edu/tag/09Y8
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 6, Proposition 6.16"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Statement

Assume AC. Let $X$ be a connected Noetherian scheme with an algebraically closed geometric basepoint $\bar x$. The functor sending a finite étale $X$-scheme $Y$ to the sheaf $h_Y(U)=\operatorname{Hom}_X(U,Y)$ is an equivalence from finite étale $X$-schemes to finite locally constant sheaves of sets on $X_{\acute e t}$.

## Statement references

[The Stacks Project, Lemma 59.64.4](https://stacks.math.columbia.edu/tag/09Y8)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6, Proposition 6.16](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** AC, a connected Noetherian scheme $X$ with geometric basepoint $\bar x$, and the small étale site specified in [[def-small-etale-site-of-a-scheme]].

[F1] [[def-lisse-etale-sheaf-of-finite-modules]]: a finite locally constant sheaf of sets is étale locally the constant sheaf of a finite set.

[F2] [[lem-locally-constant-functions-sheafify-the-constant-etale-presheaf]]: the constant sheaf of a finite set $E$ has sections the locally constant functions to $E$.

[F3] [[thm-etale-morphisms-open-and-quasi-finite]]: under AC, étale maps are open.

[F4] [[lem-finite-etale-galois-refinements-and-quotients]]: every finite étale cover of a connected scheme is trivialized by a connected finite étale cover.

[F5] [[thm-effective-fpqc-descent-of-finite-etale-covers]]: finite étale covers and their morphisms descend effectively along faithfully flat quasi-compact covers.

[F6] [[lem-nonaffine-fppf-descent-of-scheme-morphisms]]: represented scheme functors satisfy descent for fppf covering families, hence for étale covering families.

[F7] [[def-presheaf-representable-functor-and-representation]]: natural transformations between represented presheaves correspond uniquely to morphisms between their representing schemes.

[F8] [[def-locally-noetherian-and-noetherian-scheme]]: a Noetherian scheme is quasi-compact and has affine opens with Noetherian coordinate rings.

[F9] [[def-locally-finite-presentation-morphism]]: étale morphisms are locally of finite presentation, and on affine charts this is finite presentation of ring maps.

[F10] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: a finite-type algebra over a Noetherian ring is Noetherian.

[F11] [[def-etale-morphism-schemes]]: an étale morphism is flat, and étaleness is local on the source and preserved by restriction to open subschemes.

[F12] [[def-finite-morphism-schemes]]: a finite disjoint union of identity maps is finite.

[F13] [[lem-etale-coverings-form-a-grothendieck-site]]: étale covering families remain covers after base change, and the fiber products used to form them exist.

[A1] [[def-axiom-of-choice]]: AC is assumed in [F3]–[F6]; the argument adds no separate arbitrary selection.

## Proof

**Given:** The data and interfaces [F1]–[F13] under [A1].

1.1 Let $Y\to X$ be finite étale. Its functor $h_Y$ is a sheaf by [F6]. By [F4], some connected finite étale cover $T\to X$ trivializes $Y$. Thus $Y\times_XT$ is a finite disjoint union of copies of $T$, and [F2] identifies its represented sheaf with the constant sheaf on the finite set indexing those copies. Hence $h_Y$ is finite locally constant. This proves that the functor lands in the stated category. [F2, F4, F6]

1.2 Let $\mathcal F$ be a finite locally constant sheaf of sets. By [F1], an étale covering family trivializes it. Refine the covering objects by affine opens mapping into affine opens of $X$; their images form an open cover of $X$ by [F3]. By [F8], $X$ is quasi-compact, so finitely many such affine opens $V_a=\operatorname{Spec}B_a$ over affine opens $\operatorname{Spec}A_a$ cover $X$. By [F9] the maps $A_a\to B_a$ are finitely presented and hence of finite type; [F10] makes each $B_a$ Noetherian. Every open subset of $V_a$ is then quasi-compact, so $V=\coprod_a V_a\to X$ is quasi-compact. It is flat by [F11] and surjective, hence fpqc. [F1, F3, F8, F9, F10, F11, A1, choose]

1.3 On each affine $V_a=\operatorname{Spec}B_a$, the restricted sheaf is constant with a finite value $E_a$, so it is represented by $Y_a=\coprod_{e\in E_a}V_a\to V_a$: a map over $V_a$ into this finite coproduct is exactly the locally constant function specifying the open-and-closed preimage of each component, as in [F2]. The morphism is finite by [F12]; it is étale because on each open-and-closed component it is the identity and étaleness is local on the source by [F11]. Hence $Y_V=\coprod_aY_a\to V$ is finite étale and there is an isomorphism $h_{Y_V}\cong\mathcal F|_V$. On $V\times_XV$, this isomorphism identifies the two pullbacks of $h_{Y_V}$ with the same restriction of $\mathcal F$. By [F7], that identification corresponds to an isomorphism between the two pullbacks of $Y_V$. On the triple fiber product, both composites identify with the same restriction of $\mathcal F$, so faithfulness in [F7] gives the cocycle identity. [F2, F7, F11, F12, construct]

2.1 Effective descent [F5] descends this finite étale cover and its cocycle datum to a finite étale cover $Y\to X$. Step 1.3 gives a local isomorphism $h_Y|_V\cong\mathcal F|_V$ compatible with the descent datum on $V\times_XV$. For any étale object $U\to X$, [F13] makes $U\times_XV\to U$ a covering family. Applying the local isomorphism to a section of $h_Y(U)$ gives matching sections of $\mathcal F$ on this cover, which glue uniquely because $\mathcal F$ is a sheaf. This defines a natural morphism $h_Y\to\mathcal F$. Applying the same construction to the inverse local isomorphism gives an inverse: both composites restrict to identities on the cover and hence equal the identities by uniqueness of gluing. The representable functor is a sheaf by [F6], so this is an isomorphism of sheaves and every finite locally constant sheaf is represented. [F5, F6, F13, step 1.3, construct]

3.1 The represented-functor construction is fully faithful by [F7]: every sheaf morphism $h_Y\to h_Z$ is uniquely induced by an $X$-morphism $Y\to Z$. Combining this with steps 1.1, 1.3, and 2.1 proves essential surjectivity and full faithfulness, hence the equivalence. The empty cover descends to the empty scheme and corresponds to the empty finite set, so the empty-fiber case is included. AC is inherited through [F3]–[F6]. [F3, F4, F5, F6, F7, A1, step 1.1, step 1.3, step 2.1] ∎
