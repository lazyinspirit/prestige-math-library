---
id: thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
kind: theorem
title: "Parabolic Kazhdan-Lusztig polynomials give the dual-canonical transition matrix"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 23
deps:
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - def-higher-level-wedge-tensor-fock-module
  - def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules
  - def-parabolic-kazhdan-lusztig-basis-and-polynomials
  - thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones
  - thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis
  - def-parabolic-hecke-module-and-antispherical-standard-basis
  - def-normalized-type-a-hecke-algebra-and-its-bar-involution
  - thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis
  - def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization
  - thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials
  - def-cg-parabolic-quotient-and-two-sided-minima
  - lem-bruhat-order-basic-properties-for-permutations
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - thm-parabolic-category-o-is-a-highest-weight-category
  - thm-weyl-character-formula
  - thm-kazhdan-lusztig-inversion-formula
  - def-axiom-of-choice
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
      locator: "Section 2.3, formulas (2.16)-(2.18) (printed pp. 8-9): the transition polynomials and the displayed formula for $p_{A,B}$ with the definition of $w_A$ and $Z_A$; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Sections 4-5 and Remark 10 (printed pp. 10-19): the Hecke module $M_\\lambda=1_\\lambda\\otimes_{H_\\lambda}H_d$, the two families (4.3), the coefficients (4.7) and their explicit Kazhdan-Lusztig formulas; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.4 (printed p. 20): BGG reciprocity and the quasi-hereditary standard/simple comparison; complete passage read."
    - title: "Joseph Chuang and Raphael Rouquier, Derived equivalences for symmetric groups and sl2-categorification (complete45-page arXiv0407205)"
      url: "https://arxiv.org/pdf/math/0407205"
      locator: "Sections3.2–3.3 (pp5–10),4.3 (pp13–14),5.1–5.4 (pp14–21), especially Lemma3.6 and Proposition5.20 full proofs; Grassmannian duality replaced by the explicit local partial-coinvariant complete-intersection proof."
    - title: "Masaki Kashiwara, Global crystal bases of quantum groups, Duke Math. J.69 (1993)455–485 (complete33-page author PDF)"
      url: "https://www.kurims.kyoto-u.ac.jp/~kenkyubu/kashiwara/global-crystal.pdf"
      locator: "Printedpp462–474, Sections3.1–3.2 upper/lower operators and Sections5.1–5.3 balanced kernel/string filtrations and Proposition5.3.1 with complete proof; Section5 explicitly concerns upper crystal charts."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras (complete109-page arXiv0508003)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Sections4.2–4.4 (printedpp38–45), especially equations4.3/4.6/4.8/4.34–4.37 and Theorems4.4–4.5 with their actual CR dependency; full needed passages read."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For $I$ bounded below use
the actual finite classical tableau-block dictionary of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]],
including repeated entries. Fix the right place action $(a w)_i=a_{w(i)}$. Let
$w_A$ be shortest with $a(A)w_A$ weakly increasing, and let $K$ be the Young
stabilizer of that sorted multiset. Then $w_A$ is shortest RIGHT modulo $K$,
$d(A)=w_A^{-1}$ is shortest LEFT, and
$$p_{A,B}(s)=s^{\ell(w_B)-\ell(w_A)}\sum_{z\in K}(-1)^{\ell(z)}P_{w_Az,\,w_B}(s^{-2}).$$
This is the **antispherical/sign** family for the entry stabilizer, in the left
convention after inversion, with Hecke variable $v=s$; the library quantum
parameter is instead $t=s^{-1}$. It has support $A\le B$ and diagonal $1$, and
$d$ is its inverse coefficient matrix through $p(-s)$. The **column Levi**
subgroup $J$ is generally different from $K$. The genuine parabolic block
composition matrix is
$$[M(B):L(A)]=d_{A,B}(1)=\sum_{C\sim_{\mathrm{col}}B}(-1)^{\ell(B,C)}P_{d(C)w_0,\,d(A)w_0}(1),$$
where $C$ runs over the column permutations of $B$. This uses singular ordinary
**spherical** coefficients for the entry stabilizer inside finite Levi
cancellation, so it covers mixed singular-ambient/parabolic-Levi blocks. It does
not identify a singular category with genuine parabolic $\mathcal O$ and does
not identify the two polynomial families by an opposite convention.

## Facts & Assumptions

**Given:** The finite classical tableau blocks with labels $\mathrm{Col}^\Lambda$, the Hecke algebra of the symmetric group with its bar involution and Kazhdan-Lusztig basis [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]], [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], the parabolic KL data [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]], [[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], [[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]], [[def-parabolic-hecke-module-and-antispherical-standard-basis]], [[def-cg-parabolic-quotient-and-two-sided-minima]], and the finite Fock data of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]] with forms of [[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]. The deps also include [[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]], [[lem-bruhat-order-basic-properties-for-permutations]], [[thm-kazhdan-lusztig-inversion-formula]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-weyl-character-formula]] and [[def-axiom-of-choice]].

[F1] Hecke and KL supplies ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]], [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[thm-kazhdan-lusztig-inversion-formula]], [[lem-bruhat-order-basic-properties-for-permutations]]): the Hecke generators, the bar involution, the Kazhdan-Lusztig basis with its triangularity, the inversion formula and the basic Bruhat order.

[F2] Parabolic KL data ([[def-parabolic-kazhdan-lusztig-basis-and-polynomials]], [[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], [[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]], [[def-parabolic-hecke-module-and-antispherical-standard-basis]], [[def-cg-parabolic-quotient-and-two-sided-minima]]): spherical and antispherical bases, the alternating-sum expression of parabolic polynomials in ordinary ones, and the coset/composition conventions.

[F3] Block dictionary and coefficients ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-weyl-character-formula]], [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]): labels, generalized standards, character injectivity of the block Grothendieck group, and the spherical singular multiplicities $P_{yw_0,ww_0}(1)$.

[F4] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Coset representatives.** Because $a(A)w$ is weakly increasing exactly when $w$ is minimal-right modulo the Young stabilizer $K$ of the sorted multiset, $w_A$ is the shortest right coset representative and $d(A)=w_A^{-1}$ is shortest left; this uses the Bruhat order basics of [F1]. The column Levi subgroup $J$ of the block acts by permuting columns, generally different from $K$, which permutes equal entries. [F1, F2, algebra]

1.2 **The polynomial identity.** Check the tensor Hecke generator action directly on tuple monomials at the source parameter: sorting realizes the trivial-induced module for the entry stabilizer $K$, and the opposite triangular chart is the sign quotient of the ordinary Kazhdan-Lusztig basis. Simultaneous inversion of the Hecke algebra gives $p_{w_Az,w_B}=p_{z^{-1}d(A),d(B)}$, and the alternating-sum uniqueness theorem of [F2] supplies the full identity $p_{A,B}(s)=s^{\ell(w_B)-\ell(w_A)}\sum_{z\in K}(-1)^{\ell(z)}P_{w_Az,w_B}(s^{-2})$; this is a polynomial identity, not a sample or a $q=1$ family test. [F1, F2, algebra]

1.3 **The source-positive wedge embedding.** The source positive-$s$ wedge antisymmetrizer has ordered leading coefficient $1$, positive-degree within-column corrections, and a compatible ordinary bar (highest-factor intertwining and quasi-R naturality); expanding a source $L_A$ gives the ambient tensor $L_{a(A)}$ by positive-chart uniqueness. This embedding is not asserted to be library-lower based. [F3, algebra]

2.1 **Support and inverse matrix.** Triangularity of the ordinary KL basis and the sign alternation give $p_{A,A}=1$ and $p_{A,B}=0$ unless $A\le B$; the complementary chart $d$ defined by $M_B=\sum_A d_{A,B}L_A$ is the inverse unitriangular matrix through $p(-s)$, as in the definition of the Fock bases of [F3]. [F1, F2, F3, step 1.2]

2.2 **The mixed composition matrix.** The ordinary singular spherical multiplicities of [F3] give $[M(a):L(c)]=P_{w_aw_0,w_cw_0}(1)=P_{d(a)w_0,d(c)w_0}(1)$ by inversion plus longest-conjugation invariance. Finite Levi Weyl characters and PBW give $\mathrm{ch}\,M(B)=\sum_C(-1)^{\ell(B,C)}\mathrm{ch}\,M_{\mathrm{ord}}(C)$ with $C$ running over the column permutations of $B$; comparing this signed expansion with the same exterior monomial expansion in the tensor $L$-basis, and using character injectivity of the block Grothendieck group, identifies $d_{A,B}(1)$ with the displayed mixed parabolic matrix. [F2, F3, F4, step 1.3, algebra]

3.1 **Conclusion.** The parabolic KL polynomials give the dual-canonical transition matrix of the Fock module in the exact entry-stabilizer/column-spherical normalization stated, and the genuine parabolic composition matrix is the displayed signed sum of spherical ordinary numbers; regular and singular ambient cases are both handled locally without Koszul duality or a double-coset category equivalence. [step 1.2, step 2.1, step 1.3, step 2.2] ∎
