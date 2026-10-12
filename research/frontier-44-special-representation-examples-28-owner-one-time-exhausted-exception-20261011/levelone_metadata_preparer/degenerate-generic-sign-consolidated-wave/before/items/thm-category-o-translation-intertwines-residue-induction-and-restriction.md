---
id: thm-category-o-translation-intertwines-residue-induction-and-restriction
kind: theorem
title: "Category-O translation intertwines residue induction and restriction"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 38
deps: [def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks,
       lem-residue-casimir-operators-give-local-affine-hecke-actions,
       thm-residue-translation-functors-give-the-integrable-fock-space-action,
       def-the-higher-level-schur-weyl-projective-generator-and-schur-functor,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Theorem 3.7(iv) and its proof, Theorem 4.5 and Section 4.1, printed pp. 27-28 and 33-35: the functors f_i commuting with the Schur quotient pi^Lambda and with the duality; complete passages read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 5.16 and its proof, printed pp. 32-33: the natural isomorphisms sigma and tau intertwining induction with the tensor functors; complete passage read."
    - title: "Alexander Kleshchev, Linear and Projective Representations of Symmetric Groups, Cambridge Tracts in Mathematics 163, Lemma 8.2.2 (as cited by [BKAR, (3.19)])"
      url: "https://doi.org/10.1017/CBO9780511542806"
      locator: "The biadjunction and duality compatibility of the Hecke residue functors used on the Hecke side; supplemented locally by the trace-form verification of the batch-17 definition item."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and fix an admissible origin $c$; let
$f_i^{\mathcal O},e_i^{\mathcal O}$ be the residue translation functors on the
sum of parabolic blocks of
[[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]] and let
$f_i^{H},e_i^{H}$ be the Hecke residue functors of
[[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]].
Then there are natural isomorphisms
$$f_i^{H}\pi\cong\pi f_i^{\mathcal O},\qquad e_i^{H}\pi\cong\pi e_i^{\mathcal O},$$
where $\pi=\operatorname{Hom}_{\mathfrak g}(T,-)$ is the Schur functor of
[[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]],
compatible with the residue eigenvalue projectors, the units and counits of the
two adjunctions, and with ordinary restricted duality and the $*$-duality of the
Hecke side. Consequently the ungraded Grothendieck operators at parameter $1$
agree and the Schur quotient is a module map over the Hecke algebra. For
admissible nonintegral origins the category $\mathcal O$ side uses the genuine
typed coset realization, not an unqualified integer block. The statement
preserves the actual residue and standard filtrations; no graded parity or
Koszul lift is asserted by these ungraded suppliers.

## Facts & Assumptions

**Given:** The admissible origin $c$, the tensor objects $T_d=P_c\otimes V^{\otimes d}$ and $T_{d+1}=T_d\otimes V$, the Schur functors $\pi_d,\pi_{d+1}$, and the residue functors on both sides.

[F1] The O-side residue functors are exact, biadjoint, preserve projectives and injectives, commute with restricted duality, and agree with the generalized Casimir eigencomponents; their $K_0$ operators are the integrable Fock Chevalley action ([[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], [[lem-residue-casimir-operators-give-local-affine-hecke-actions]], [[thm-residue-translation-functors-give-the-integrable-fock-space-action]]).

[F2] The Hecke-side residue functors are exact, biadjoint, commute with the $*$-duality, and their operators are adjoint for the Cartan pairing ([[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]]).

[F3] The Schur functor is exact with kernel the off-standard Serre subcategory, is fully faithful on projectives and tiltings, and sends standard and costandard objects to Specht modules and their costandard mates; in the stable range the Hecke image is the full cyclotomic algebra ([[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]], [[def-the-higher-level-schur-weyl-projective-generator-and-schur-functor]]).

[F4] The parabolic and genuine category-O interfaces with the typed coset realization for admissible nonintegral origins ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]).



## Proof

**Proof technique:** direct.

**Given:** The tensor identity $T_{d+1}=T_d\otimes V$ and the two pairs of residue functors.

1.1 The tensor-Hom identity. For any object $N$ of the $(d+1)$-step summand, $\operatorname{Hom}_{\mathfrak g}(T_d,N\otimes V)\cong\operatorname{Hom}_{\mathfrak g}(T_d\otimes V^{*},N)\cong\operatorname{Hom}_{\mathfrak g}(T_{d+1},N)$ because $V^{*}\cong V$ as $\mathfrak g$-modules; reading the right-hand side as a module over $H_{d+1}(\mathbf a)$ and restricting along the tower inclusion gives the natural isomorphism $\pi_d(-\otimes V)\cong\operatorname{Res}\,\pi_{d+1}$, and dually $\pi_d(-\otimes V^{*})\cong\operatorname{Res}\,\pi_{d+1}$ with the opposite tensor factor. This is the tensor-Hom adjunction written on the level of the Hecke tower. [F3, F4, algebra]

2.1 The residue projectors. By [F1] the O-side functor $f_i^{\mathcal O}$ is the generalized-$i$ eigencomponent of the tensor Casimir, and by the Casimir/flip compatibility of the tensor action the last-eigenvalue projector $u_i$ on the Hecke side corresponds to the same eigencomponent; hence the projections defining $f_i^{\mathcal O}$ and $f_i^{H}$ match under the identification of step 1.1. This identifies the functors up to unique natural isomorphism: both are exact, both are left adjoint to the corresponding restriction, and transport of the residue projector along the isomorphism of step 1.1 gives $f_i^{H}\pi\cong\pi f_i^{\mathcal O}$; the dual projector gives $e_i^{H}\pi\cong\pi e_i^{\mathcal O}$. [F1, F2, step 1.1, algebra]

3.1 Units, counits and duality. Uniqueness of adjoints identifies the units and counits of the two biadjoint pairs, compatibly with the projections of step 2.1. The O-side compatibility $D f_i^{\mathcal O}\cong e_i^{\mathcal O}D$ of [F1] and the Hecke-side commutativity with $*$-duality of [F2] transport through $\pi$ by the same natural maps, so the residue functors on the two sides also intertwine the two dualities; taking adjoints again recovers the corresponding statement for $e_i$. [F1, F2, step 2.1, algebra]

3.2 Grothendieck operators. $\pi$ induces an isomorphism of the Grothendieck groups of the relevant blocks by [F3] (the exact quotient kills exactly the off-standard simples on both the module and the projective side), so the natural isomorphisms of steps 2.1 and 3.1 give equalities of the induced operators $[f_i^{H}]\circ[\pi]=[\pi]\circ[f_i^{\mathcal O}]$ and likewise for $e_i$; this is an equality of operators induced by the natural maps, not a dimension comparison. [F3, step 2.1, algebra]

4.1 Filtrations and boundaries. Applying the exact functor $\pi$ to a residue flag of an O-side object preserves the standard/tensor residue flag filtration, and the eigenvalue projections of step 2.1 preserve the corresponding graded pieces; hence the genuine filtrations are respected. For admissible nonintegral origins the O-side constructions use the typed coset realization of [F4], and the whole statement is ungraded at parameter $1$: no parity or Koszul structure is asserted. [F1, F3, F4, step 2.1, given] ∎

## Remarks

- The symmetry of the statement is the categorical shadow of $V\cong V^{*}$: the same tensor factor supplies both the induction and the restriction, which is why both adjunctions of the Hecke tower appear.
- Only the ungraded interfaces are used; the graded lift is a separate question and is not claimed by the suppliers used here.
