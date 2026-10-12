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

1.1 **The simple matrix, with its indices fixed.** Work in one finite multiset block and write $D_{A,B}=d_{A,B}(1)$ with simple rows $A$ and standard columns $B$. Its unitriangularity makes $D$ invertible over $\mathbb Z$. The composition series and the standard-class isomorphism of [F1] give $[M(B)]=\sum_A D_{A,B}[L(A)]$ and $M_B=\sum_A D_{A,B}L_A$. Subtracting these equations after transport to Fock space gives $\sum_A D_{A,B}([L(A)]-L_A)=0$ for every $B$; multiplication by $D^{-1}$ gives $[L(A)]=L_A$ for every label, including repeated-entry singular blocks. No simple is renamed a standard. [F1, F5, algebra]

1.2 **The opposite matrix and the canonical chart.** Retain the reverse-column labels of [F3], and put $\widetilde D_{A,B}=[\bar M(B):\bar L(A)]$. The same mixed composition calculation as in [F1], applied to the opposite block with its typed reverse-factor monomials, gives $\widetilde M_B=\sum_A\widetilde D_{A,B}\widetilde L_A$ at $s=1$. For $E=\widetilde D^{-1}$ this reads $\widetilde L_A=\sum_B E_{B,A}\widetilde M_B$. Write $T_C=\sum_B H_{B,C}M_B$. The specialized labelled reverse Gram matrix in [F4] is the identity, so $C(\widetilde L_A,T_C)=\sum_B E_{B,A}H_{B,C}=\delta_{AC}$. Therefore $E^{\mathsf T}H=I$ and $H=\widetilde D^{\mathsf T}$, giving $T_A=\sum_B\widetilde D_{A,B}M_B$. This computes the coefficients rather than identifying two unnamed matrices. [F1, F3, F4, algebra]

2.1 **The projective matrix.** BGG reciprocity [F2] gives $(P(A):M(B))=[M(B):L(A)]=D_{A,B}$. Consequently $[P(A)]=\sum_B D_{A,B}M_B=P_A$ by the definition of the quasi-canonical family. Thus the projective-to-standard coefficient matrix has entries $D_{A,B}$, with projective rows and standard columns; it is not the inverse simple-to-standard matrix. [F1, F2, step 1.1, algebra]

2.2 **Tilting reciprocity.** The exact parabolic Ringel transport of [F3] preserves the displayed labels and gives $(T(A):M(B))=\widetilde D_{A,B}$. Its standard flag and the standard-class map therefore give $[T(A)]=\sum_B\widetilde D_{A,B}M_B=T_A$ by step 1.2. The inverse transpose appearing in the intermediate pairing equation is the inverse transpose of $E=\widetilde D^{-1}$, hence the transpose of the opposite composition matrix; it is not the inverse transpose of $D$. [F1, F3, step 1.2, algebra]

3.1 **All labels and the specialization.** Each object and each finite coefficient calculation belongs to a finite multiset block, and the standard-class identification and the Fock charts commute with the stated cut embeddings. Taking their compatible direct sum gives the three identities for every admitted label. Categorical $M(A)$, $L(A)$, $P(A)$ and $T(A)$ remain generalized standards, simples, projectives and tiltings respectively, whereas the Fock vectors are $M_A,L_A,P_A,T_A$. The comparison is at $s=1$ and supplies exactly the dual-canonical, quasi-canonical and canonical source families claimed in the Statement. [F1, step 1.1, step 2.1, step 2.2] ∎
