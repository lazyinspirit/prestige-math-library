---
id: thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module
kind: theorem
title: "The parabolic category-O Grothendieck group is the integral Fock module"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 28
deps:
  - thm-residue-translation-functors-give-the-integrable-fock-space-action
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks
  - def-higher-level-wedge-tensor-fock-module
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - def-grothendieck-group-and-character-of-category-o
  - prop-the-grothendieck-group-of-o-has-simple-and-standard-bases
  - thm-finite-length-grothendieck-groups-have-simple-class-bases
  - def-grothendieck-group-of-an-essentially-small-abelian-category
  - def-projective-simple-hom-pairing-on-grothendieck-groups
  - thm-bgg-reciprocity
  - def-axiom-of-choice
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - lem-residue-casimir-operators-give-local-affine-hecke-actions
  - thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - thm-projective-hom-pairing-is-additive-and-graded-sesquilinear
  - thm-the-highest-weight-fock-submodule-has-the-qg-global-bases
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
      locator: "Section 3.1, Theorem 3.1(i)-(iii) and its proof (printed pp. 21-22): the identification of $[\\mathcal O^\\Lambda]$ with $F(\\Lambda)_{\\mathbb Z}$ by $[M(A)]\\leftrightarrow M_A$, the functor action and the Hom-pairing statement; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.4 (printed p. 20): BGG reciprocity and the simple/standard Grothendieck bases of a block; complete passage read."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and $I$ bounded below. The
standard-class map $[M(A)]\mapsto M_A$ identifies the direct-sum $K_0$ of the
genuine tableau parabolic blocks with the full integral Fock module, with
matching multiset degrees and the residue Chevalley action of
$\mathfrak{gl}_{I^+}$. For every projective $P$ and finite-length $N$,
$$\dim\operatorname{Hom}(P,N)=\langle[P],[N]\rangle\quad\text{at }s=1 .$$
In particular $\langle P_A,L_B\rangle=\delta_{AB}$; no false standard/simple
orthogonality $\langle M_A,L_B\rangle=\delta$ is asserted. The projective,
simple and tilting basis identifications are proved separately.

## Facts & Assumptions

**Given:** The direct-sum parabolic blocks with their finite-length simple and standard classes, the residue functors and their Fock operators, the source forms and bases, and the projective covers.

[F1] Standard bases and operators ([[lem-residue-casimir-operators-give-local-affine-hecke-actions]], [[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]], [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[def-grothendieck-group-and-character-of-category-o]]): the standard-class map, character injectivity on each block, the mixed multiplicity matrix, the integral Fock Chevalley action and the standard/simple bases.

[F2] Fock bases and pairing ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]], [[def-projective-simple-hom-pairing-on-grothendieck-groups]], [[thm-projective-hom-pairing-is-additive-and-graded-sesquilinear]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]], [[thm-finite-length-grothendieck-groups-have-simple-class-bases]], [[def-grothendieck-group-of-an-essentially-small-abelian-category]], [[thm-bgg-reciprocity]]): the source forms with monomial Gram matrix the inverse ordinary-bar matrix, the delta pairings, additivity of the projective-simple Hom pairing, and the simple/standard Grothendieck bases.

[F3] Residue action and heads/socles ([[thm-residue-translation-functors-give-the-integrable-fock-space-action]], [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]): the Fock Chevalley action on classes, and the tilting basis.

[F4] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The standard-class map is an isomorphism.** In each finite block the standard classes form a basis of the Grothendieck group and characters are injective, while the residue functors act on the standard basis by the explicit single-entry moves; the Fock monomials satisfy the identical relations and have the same degrees. Hence $[M(A)]\mapsto M_A$ is a degree-preserving isomorphism in each block, and it extends to the direct sum over the blocks because the direct sum decomposition is by central character on both sides. [F1, F3, algebra]

2.1 **The transition matrix and duality at $1$.** The mixed multiplicity theorem of [F1] gives the exact standard/simple transition matrix, and BGG reciprocity identifies the projective/standard matrix as its inverse. At $s=1$ the ordinary bar becomes the identity, because the normalized Hecke generators are bar-fixed there, so the monomial Gram matrices of the source forms specialize to the identity; substituting the transition matrices therefore gives $P/L$ duality at $1$. [F1, F2, F4, step 1.1, algebra]

3.1 **The general Hom pairing.** For a projective $P$ and a finite-length $N$, the functor $\operatorname{Hom}(P,-)$ is exact, so its dimension on $N$ is additive on a composition series and equals the pairing of $[P]$ with $[N]$ under the $P/L$ duality of step 2.1; in particular $\langle P_A,L_B\rangle=\delta_{AB}$. This is a projective/simple statement: the standard/simple matrix is the unitriangular mixed multiplicity matrix, not the identity, so no standard/simple orthogonality is claimed. [F2, step 2.1]

4.1 **Conclusion.** The standard-class map identifies the direct-sum $K_0$ with the integral Fock module compatibly with degrees and the residue Chevalley action; the projective/simple pairing is the Fock pairing at $s=1$, giving $\dim\operatorname{Hom}(P,N)=\langle[P],[N]\rangle$ and $\langle P_A,L_B\rangle=\delta_{AB}$, while standard/simple orthogonality is false; the projective, simple and tilting bases are proved separately. [step 1.1, step 2.1, step 3.1] ∎
