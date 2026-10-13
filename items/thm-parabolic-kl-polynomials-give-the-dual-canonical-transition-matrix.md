---
id: thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
kind: theorem
title: "Parabolic Kazhdan-Lusztig polynomials give the dual-canonical transition matrix"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 23
deps:
  - lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties
  - lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts
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

[F2] Parabolic KL data ([[def-parabolic-kazhdan-lusztig-basis-and-polynomials]], [[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]], [[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]], [[def-parabolic-hecke-module-and-antispherical-standard-basis]], [[def-cg-parabolic-quotient-and-two-sided-minima]], [[lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties]]): spherical and antispherical bases, the alternating-sum expression of parabolic polynomials in ordinary ones, and the coset/composition conventions.

[F3] Block dictionary and coefficients ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-weyl-character-formula]], [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]): labels, generalized standards, character injectivity of the block Grothendieck group, and the spherical singular multiplicities $P_{yw_0,ww_0}(1)$.

[F4] Axiom of Choice ([[def-axiom-of-choice]]).

[F6] Independent tensor coefficient bridge ([[lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts]]): reciprocal generator action and induced bar, signed positive chart, complementary longest-element spherical inverse chart, and ordinary-bar signed exterior embedding in both factor orders.

## Proof

**Proof technique:** direct.

1.1 **Coset representatives.** Put $b=a(A)w_A$, the weakly increasing tuple. The permutations sorting $a(A)$ are exactly $w_AK$: indeed $a(A)w=b$ if and only if $b(w_A^{-1}w)=b$. Choosing $w_A$ shortest in this coset makes it minimal-right modulo $K$, and inversion makes $d(A)=w_A^{-1}$ minimal-left. The column Levi subgroup $J$ permutes positions within each column; it is generally different from $K$, which permutes the equal-entry positions of $b$. [F1, F2, algebra]

1.2 **Explicit reciprocal action and signed chart.** The independent construction [[lem-finite-type-a-tensor-hecke-bars-and-complementary-coefficient-charts]] gives, at $v=s^{-1}$, the actual action $M_aH_i=M_{as_i}$ on an ascent, $sM_a$ on an equality, and $M_{as_i}+(s-s^{-1})M_a$ on a descent. The cyclic sorted tuple is fixed by the source bar and has stabilizer character $s$, so this is the trivial-induced tensor module with its induced bar, including equal entries. Changing generators to $G_i=-H_i$ gives the algebra at $v=s$, the sign character $-s$, and standard vector $n_{d(A)}=(-1)^{\ell(d(A))}M_A$. Thus the source-positive tensor fixed vector is the sign canonical vector multiplied by its leading sign. The helper's alternating-sum calculation and the inversion anti-involution of the Hecke algebra yield its coefficient $p_{A,B}(-s)$ and precisely the polynomial $p_{A,B}(s)$ stated. This resolves the bar sign by an explicit generator and standard-vector transport. [F6, F1, F2, algebra]

1.3 **Ordinary-bar exterior embedding and complementary spherical chart.** The same helper constructs the primitive exterior vector of a decreasing column as $\sum_C(-s)^{\ell(B,C)}M_{a(C)}$. Its adjacent generator eigenvalue is $-s^{-1}$, quantum replacements preserve its coefficient-one normalization, and quasi-$R$ naturality identifies its ordinary bar with the wedge-factor bar. Product embeddings therefore have the displayed independent column sum, with leading coefficient one and positive-source corrections; triangular uniqueness gives $\iota(L_A)=L_{a(A)}$. Independently, the reverse-position chart has representative $c_A=w_Kd(A)w_0$. The actual bilinear normalization is $(M_a,\psi M_b^*)=\delta_{ab}$; symmetry and complementary positive/negative polynomial congruences give $U^{\mathsf T}\bar V=I$. Hence the inverse tensor chart is $D_{a,b}=\bar V_{b,a}=s^{\ell(w_b)-\ell(w_a)}P_{d(b)w_0,d(a)w_0}(s^{-2})$. Expanding the primitive exterior sum in this inverse chart proves the wedge inverse formula, including its signs and all repeated-entry indices. [F6, F1, F2, F3, algebra]

2.1 **Support and inverse matrix.** Triangularity of the ordinary KL basis and the sign alternation give $p_{A,A}=1$ and $p_{A,B}=0$ unless $A\le B$; the complementary chart $d$ defined by $M_B=\sum_A d_{A,B}L_A$ is the inverse unitriangular matrix through $p(-s)$, as in the definition of the Fock bases of [F3]. [F1, F2, F3, step 1.2]

2.2 **The mixed composition matrix.** Step 1.3 gives $D_{a(A),a(C)}(1)=P_{d(C)w_0,d(A)w_0}(1)$ and $d_{A,B}(1)=\sum_C(-1)^{\ell(B,C)}D_{a(A),a(C)}(1)$. Apply the singular ordinary multiplicity theorem of [F3] first to the minimal-right labels $w_C,w_A$, where $d(C)=w_C^{-1}$ and $d(A)=w_A^{-1}$. Inverse-index symmetry gives $P_{w_Cw_0,w_Aw_0}=P_{w_0d(C),w_0d(A)}$. Conjugation by $w_0$ permutes the simple Hecke generators, commutes with bar and preserves Bruhat triangularity; uniqueness of the ordinary KL basis therefore gives $P_{w_0d(C),w_0d(A)}=P_{d(C)w_0,d(A)w_0}$ ([[lem-type-a-kazhdan-lusztig-basis-has-elementary-triangular-bar-properties]]). Thus these are the same multiplicities for the sorted-entry stabilizer. Finite Levi Weyl characters and PBW give $\mathrm{ch}\,M(B)=\sum_C(-1)^{\ell(B,C)}\mathrm{ch}\,M_{\mathrm{ord}}(C)$, with $C$ running over independent column permutations. Comparing coefficients of simple characters, which are linearly independent in the finite block, gives the same signed sum. Therefore $[M(B):L(A)]=d_{A,B}(1)$ with the displayed mixed parabolic matrix. The column subgroup and the equal-entry subgroup are used at separate stages, so repeated entries cause no conflation of sign and spherical families. [F2, F3, F4, step 1.3, algebra]

3.1 **Conclusion.** The parabolic KL polynomials give the dual-canonical transition matrix of the Fock module in the exact entry-stabilizer/column-spherical normalization stated, and the genuine parabolic composition matrix is the displayed signed sum of spherical ordinary numbers; regular and singular ambient cases are both handled locally without Koszul duality or a double-coset category equivalence. [step 1.2, step 2.1, step 1.3, step 2.2] ∎
