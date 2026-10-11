---
id: thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases
kind: theorem
title: "Simples, projectives and tiltings map to the three distinguished Fock bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 30
deps:
  - thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module
  - thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - thm-bgg-reciprocity
  - thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials
  - prop-the-grothendieck-group-of-o-has-simple-and-standard-bases
  - def-axiom-of-choice
  - def-the-ringel-dual-of-a-finite-highest-weight-ideal
  - lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings
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
      locator: "Section 3.1, Theorem 3.1(i) and its proof (printed pp. 21-22): $[L(A)]=L_A$, $[P(A)]=P_A$ and $[T(A)]=T_A$, with the tilting case derived from Arkhipov-Soergel reciprocity, [B1, Corollary 12] and [B1, (5.8)]; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 4.3, equation (3.5) and Lemma 4.10 (printed pp. 20-21 and 37-38): Arkhipov-Soergel reciprocity $(T(A):M(B))=[\\bar M(B):\\bar L(A)]$; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Corollary 12 and formula (5.8) (printed pp. 17-19): the transition matrix from the semi-standard to the dual-canonical basis and the coefficients $k^*_{A,B}$; complete passage read."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the genuine tableau
$K_0$/Fock identification at $s=1$
([[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]]). For
every label $A$,
$$[L(A)]=L_A,\qquad [P(A)]=P_A,\qquad [T(A)]=T_A .$$
The projective coefficients are $d_{A,B}(1)$ by BGG reciprocity; the tilting
coefficients are the **opposite/reverse-column** composition coefficients
$\widetilde d_{A,B}(1)$, by the exact parabolic Ringel equivalence. They are not
generally the inverse-transpose of the original composition matrix. Simples,
projectives and tiltings therefore give the dual-canonical, quasi-canonical and
canonical Fock families respectively. These are ungraded specializations; no
Koszul grading and no identification of the library upper and lower families is
asserted.

## Facts & Assumptions

**Given:** The tableau parabolic blocks with their simples, projectives, tiltings and Grothendieck bases; the source Fock families $L,P,T$ and their transition matrices; the mixed multiplicity theorem and the Ringel equivalence.

[F1] Coefficients and bases ([[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]], [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]]): $[M(B):L(A)]=d_{A,B}(1)$ including repeated entries, the standard-class isomorphism, the definition of $d$ as the inverse of the source dual-canonical transition matrix, and $P_A,M_A$ charts.

[F2] BGG and reciprocity ([[thm-bgg-reciprocity]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]): projective/standard multiplicities are the simple multiplicities of standards, and simple/standard classes form bases.

[F3] Ringel duality ([[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]], [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]): $(T(A):M(B))=[\bar M(B):\bar L(A)]$ and the reverse-column label dictionary.

[F4] Reverse pairing ([[lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings]], [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]): $C(\widetilde L_A,T_B)=\delta_{AB}$ with labelled monomial Gram matrix specializing to the identity at $s=1$.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Simples.** The mixed singular/parabolic coefficient theorem gives $[M(B):L(A)]=d_{A,B}(1)$ including repeated entries; inverting this unitriangular matrix by the standard-class isomorphism of [F1] gives $[L(A)]=L_A$, because $L_A$ is defined as the inverse chart of the monomial basis through the same matrix $d$ as the Fock bases. [F1, F5, algebra]

1.2 **Projectives.** BGG reciprocity [F2] gives $[P(A)]=\sum_B[P(A):M(B)][M(B)]=\sum_Bd_{A,B}(1)M_B=P_A$, which is exactly the quasi-canonical family of [F1]. [F1, F2, algebra]

2.1 **Tiltings.** The opposite block labels and reversed order were computed by the semi-regular label helper, and Ringel reciprocity [F3] gives $[T(A)]=\sum_B\widetilde d_{A,B}(1)M_B$; the typed reverse-factor pairing of [F4] has labelled monomial Gram matrix specializing to the identity at $s=1$, and it identifies exactly this latter matrix with the source canonical coefficients, giving $[T(A)]=T_A$. The matrix $\widetilde d$ is the opposite/reverse-column matrix and is not generally the inverse transpose of the original composition matrix. [F3, F4, step 1.2]

3.1 **Conclusion.** At $s=1$ the simple, projective and tilting classes of the block are the dual-canonical, quasi-canonical and canonical Fock vectors respectively, with the stated coefficient matrices; the result is ungraded and asserts neither Koszul grading nor an identification of library upper and lower families. [step 1.1, step 1.2, step 2.1] ∎
