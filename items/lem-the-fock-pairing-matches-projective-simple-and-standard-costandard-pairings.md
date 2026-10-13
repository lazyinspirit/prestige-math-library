---
id: lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings
kind: lemma
title: "The Fock pairing matches the projective-simple and standard-costandard pairings"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 29
deps:
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module
  - thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule
  - thm-bgg-reciprocity
  - def-projective-simple-hom-pairing-on-grothendieck-groups
  - thm-projective-hom-pairing-is-additive-and-graded-sesquilinear
  - def-contravariant-form-on-an-integrable-quantum-highest-weight-module
  - def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half
  - prop-restricted-duality-is-an-exact-involution-on-category-o
  - def-axiom-of-choice
  - thm-parabolic-category-o-is-a-highest-weight-category
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - thm-the-highest-weight-fock-submodule-has-the-qg-global-bases
  - thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations
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
      locator: "Sections 2.6 and 3.1 (printed pp. 13-16 and 21-22): the sesquilinear form (2.38)-(2.41), the contravariant form (2.42)-(2.44), Lemma 2.6, Theorem 2.7 and the Hom-pairing statement of Theorem 3.1(ii); complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Section 4, Lemma 3, Theorem 4 and Corollary 5 (printed pp. 12-13): the bilinear form $(M_\\alpha,M^*_\\beta)=\\delta_{\\alpha,\\beta}$, the adjunction identity and $(L_\\alpha,L^*_\\beta)=\\delta_{\\alpha,\\beta}$; complete passage read."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). At $s=1$ the source Fock
pairing gives $\langle P_A,L_B\rangle=\delta_{AB}$ and
$\langle[P],[N]\rangle=\dim\operatorname{Hom}(P,N)$ for projectives $P$ and
finite-length $N$. Genuine generalized-standard/costandard Hom has its separate
delta pairing
$$\operatorname{Hom}(M(A),\nabla(B))=\delta_{AB}\mathbb C,$$
transported by restricted duality and the typed opposite filtered equivalence.

At general $s$ the source forms are $\langle M_A,\psi M_B\rangle=\delta$ and
$C(\widetilde M_A,\psi M_B)=\delta$; their labelled raw Gram matrix is
$B_\psi^{-1}$, not the identity. They satisfy
$\langle P_A,L_B\rangle=\delta$, $C(\widetilde L_A,T_B)=\delta$ and the
complementary duality. On the highest constituent let $C_0$ be the normalized
$\mathcal E\mathcal F$-swap bilinear form; for weight $\Lambda-\alpha$ the actual
library polarization is $s^{-a(\alpha)}C_0$ with
$a(\alpha)=(2\Lambda-\alpha,\alpha)/2$. Hence the library upper family uses its
own form-adjoint bar and the rescaling of
[[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]; the two
source forms and the library form are not conflated.

## Facts & Assumptions

**Given:** The source Fock bases, forms and transition matrices; the parabolic blocks with their standards, costandards and projectives; the library polarization $B_8$; the highest constituent $V(\Lambda)$ with its normalized form $C_0$.

[F1] Source forms and charts ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]]): the triangular transition matrices $d,p$, the forms with labelled monomial Gram matrix $B_\psi^{-1}$, the delta identities $\langle P_A,L_B\rangle=\delta$, $C(\widetilde L_A,T_B)=\delta$, and the completions at $s=1$.

[F2] Parabolic Hom and duality ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-bgg-reciprocity]]): $\operatorname{Hom}(M(A),\nabla(B))=\delta_{AB}\mathbb C$ in each block, restricted duality, and BGG reciprocity.

[F3] Library polarization ([[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]], [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]], [[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]]): the normalized highest constituent form $C_0$, the weight recursion $a(\alpha)-a(\alpha-\alpha_i)=\langle\mu,h_i\rangle+1$, and the library form $B_8$.

[F4] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The general delta identities.** Substituting the inverse transition matrices of [F1] into the explicitly bar-twisted pairings gives the general identities $\langle P_A,L_B\rangle=\delta_{AB}$, $C(\widetilde L_A,T_B)=\delta_{AB}$ and the complementary ones; the source sesquilinear form has semilinear $\tau$-adjunction, while the reverse-factor bilinear form has the linear $\mathcal E\mathcal F$-swap adjunction with the torus fixed, checked on the raw generator matrices and their coefficient conjugates. [F1, algebra]

1.2 **The highest-constituent form $C_0$.** On irreducible highest constituents the normalized nondegenerate restriction of the reverse-factor bilinear form is $C_0$; the dictionary sends the library $\sigma$ with $\sigma(F_i)=t^{-1}K_iE_i$ to the source anti-involution acting by $sD^{-1}E$, which contributes $s^{-\langle\mu,h_i\rangle-1}$ on a target vector of weight $\mu$, and the exponent identity $a(\alpha)-a(\alpha-\alpha_i)=\langle\mu,h_i\rangle+1$ with highest normalization and induction on lowering monomials proves $B_8=s^{-a}C_0$ on every weight space of the constituent. [F1, F3, F4, algebra]

2.1 **The specialization at $s=1$ and the Hom pairing.** At $s=1$ the ordinary bar becomes the identity because the normalized Hecke generators are bar-fixed there, so the labelled monomial Gram matrices specialize to the identity and the delta identities of step 1.1 give $\langle P_A,L_B\rangle=\delta_{AB}$. For a projective $P$ and finite-length $N$, exactness and additivity of $\operatorname{Hom}(P,-)$ on a composition series, together with the projective/simple pairing, give $\langle[P],[N]\rangle=\dim\operatorname{Hom}(P,N)$. [F1, step 1.1, algebra]

3.1 **The standard/costandard pairing.** The pairing $\operatorname{Hom}(M(A),\nabla(B))=\delta_{AB}\mathbb C$ is the actual generalized-standard Hom theorem of the block structure [F2], transported by restricted duality and the typed opposite filtered equivalence; it is not a restriction of the ordinary Verma lemma, and it is a separate pairing from the source Fock forms. The types original/reverse/dual and ordinary/adjoint bars remain explicit: the library upper family uses the form-adjoint bar and the rescaling of [F3], not the bare source forms. [F2, F3, step 1.2, step 2.1]

4.1 **Conclusion.** The source Fock forms pair projectives with simples and reverse-canonical with canonical vectors by the stated deltas, the standard/costandard pairing is the separate generalized Hom delta, and the library polarization is $B_8=s^{-a}C_0$ on the highest constituent; the source forms, the standard/costandard form and the library form are not conflated. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
