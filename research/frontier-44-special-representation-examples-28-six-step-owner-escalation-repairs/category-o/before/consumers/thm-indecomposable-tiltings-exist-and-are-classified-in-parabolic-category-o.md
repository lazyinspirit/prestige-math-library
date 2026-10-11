---
id: thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o
kind: theorem
title: "Indecomposable tilting objects exist and are classified in parabolic category O"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 27
deps:
  - def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-parabolic-category-o-for-a-standard-parabolic
  - thm-parabolic-category-o-is-a-highest-weight-category
  - thm-projectives-in-category-o-have-verma-flags
  - cor-injectives-have-costandard-filtrations
  - lem-finite-length-objects-decompose-into-indecomposables
  - prop-projective-covers-in-o-are-indecomposable-and-unique
  - thm-bgg-reciprocity
  - def-axiom-of-choice
  - lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map
  - thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule
  - thm-residue-translation-functors-give-the-integrable-fock-space-action
  - thm-the-highest-weight-fock-submodule-has-the-qg-global-bases
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Tilting modules for Lie superalgebras, Comm. Algebra 32 (2004) 2251-2268 (complete arXiv article)"
      url: "https://arxiv.org/pdf/math/0209235"
      locator: "Section 5, Theorem 5.1 with its proof (printed pp. 7-9): existence of the partial tiltings with the bottom standard section, the nesting inclusions, the direct limit and uniqueness; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.5, Theorems 4.8-4.9 (printed pp. 20-21): the unique indecomposable tilting $T(\\mu)\\in\\mathcal F(\\Delta)\\cap\\mathcal F(\\nabla)$ with $\\Delta(\\mu)\\subset T(\\mu)$ and standard-filtered cokernel, and the characteristic tilting module; complete passage read."
    - title: "Jonathan Brundan, Tilting modules for Lie superalgebras, Comm. Algebra 32 (2004) 2251-2268 (complete arXiv article)"
      url: "https://arxiv.org/pdf/math/0209235"
      locator: "Section 6, Theorem 6.3 and Example 7.1 (printed pp. 11-12): the ungraded existence/uniqueness statement and its identification with the classical BGG category O; complete passage read."
    - title: "Wolfgang Soergel, Character formulas for tilting modules over Kac-Moody algebras (complete 22-page author English preprint; some later additions absent)"
      url: "https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps"
      locator: "Sections1–2 (pp1–6), Sections5–6 (pp10–15) and Section7 parabolic grading and Lemma7.4 (pp16–19); actual full body read via converted PDF/OCR, with local correction of the nonzero-Levi PBW dimension shortcut."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every label $A$ in a
genuine tableau parabolic block of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]
has a unique indecomposable tilting object $T(A)$ whose standard flag begins
with $M(A)$ once at the bottom and has all remaining labels $B<A$.
Equivalently, $T(A)$ has that maximal-label normalized standard flag and
$\operatorname{Ext}^1(M(B),T(A))=0$ for all $B$. Every tilting object is a finite
direct sum of these, and their classes form a unitriangular Grothendieck basis.
Restricted duality fixes $T(A)$. For a finite lower ideal $\Gamma$ containing
$A$ the corresponding partial tilting is the same ambient $T(A)$, since all
support labels are $\le A$; compatible ideal systems therefore stabilize in each
finite block, with flag-preserving inclusions. No uniqueness is claimed from a
bottom-standard occurrence alone without indecomposability and maximal support.
In the inline prinjectivity claim, $P(A)$ is projective-injective (equivalently
self-dual) exactly when $A$ is standard; in that case $P(A)=T(A^{\uparrow})$
with the proved rectification label.

## Facts & Assumptions

**Given:** A finite genuine tableau parabolic block with its generalized standards $M(A)$, simples $L(A)$, projectives $P(A)$ and the filtered category of [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]]; the semi-regular duality $\Psi$ and $F=D\Psi$ of [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]; the residue functors and their head/socle behavior of [[thm-residue-translation-functors-give-the-integrable-fock-space-action]]; the highest-component normalization of [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]; the standard-monomial basis of [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]].

[F1] Filtered categories ([[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]]): the homological criterion, uniqueness of an indecomposable tilting object with bottom label $A$ and maximal support, BGG reciprocity, restricted duality, closure under summands and lower-ideal invariance.

[F2] Semi-regular duality ([[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]): $\Psi$ is an exact contravariant equivalence of opposite and target standard-flag categories, sends $\bar\Delta(A)$ to $\Delta(A)$, and reverses the label order; $D\Psi$ is covariant and takes opposite standards to target costandards.

[F3] Parabolic structure ([[def-parabolic-category-o-for-a-standard-parabolic]], [[thm-parabolic-category-o-is-a-highest-weight-category]], [[thm-projectives-in-category-o-have-verma-flags]], [[cor-injectives-have-costandard-filtrations]], [[lem-finite-length-objects-decompose-into-indecomposables]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[thm-bgg-reciprocity]]): enough projectives and injectives, finite-length decomposition, uniqueness of projective covers, generalized-standard flags.

[F4] Residue functors and labels ([[thm-residue-translation-functors-give-the-integrable-fock-space-action]], [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]): simple head/socle of residue translates, the projection kernel spanned by off-standard $L$-vectors, the straightening formula, and the normalization $P_A=s^{a}T_{A^{\uparrow}}$ at $s=1$.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **Construction from actual exact sequences.** Let $\bar P(A)$ be the labelled opposite projective cover. Its highest-weight sequence is $0\to\bar K(A)\to\bar P(A)\to\bar\Delta(A)\to0$, with $\bar K(A)$ standard-filtered by labels strictly above $A$. Applying $\Psi$ gives $0\to M(A)\to X(A)\to\Psi\bar K(A)\to0$, where $X(A)=\Psi\bar P(A)$ and the quotient has a finite standard flag with labels strictly below $A$. Its endomorphism algebra is the opposite of the local endomorphism algebra of $\bar P(A)$, so $X(A)$ is indecomposable. For an arbitrary extension $0\to X(A)\to Z\to M(B)\to0$, extension closure makes $Z$ standard-filtered. Inverting $\Psi$ turns this into an extension with source projective $\bar P(A)$ as quotient, which splits; exact equivalence transfers the splitting back. Hence $\operatorname{Ext}^1(M(B),X(A))=0$ for every $B$. The proved homological criterion of [F1] gives a costandard flag of $X(A)$, so it is the required actual tilting object with normalized bottom-standard inclusion. [F5, F1, F2, F3, algebra]

2.1 **Uniqueness.** Let $T,T'$ be two indecomposable tilting objects with $M(A)$ once at the bottom and all other labels $\prec A$. Extending the common normalized bottom inclusion both ways uses $\operatorname{Ext}^1$ vanishing against standard flags, and the resulting composites restrict to the identity on the bottom standard, hence are not nilpotent; finite-dimensional local $\operatorname{End}$ and Fitting's lemma force them to be isomorphisms. So $T\cong T'$, and [F1] identifies its unique maximal support label as $A$. [F1, step 1.1]

3.1 **Every tilting is a sum of these.** Let $T\ne0$ be an arbitrary tilting object and let $\Gamma$ be the lower ideal generated by its entire composition support. Choose one maximal support label $A$, which is maximal in $\Gamma$, and put $m=[T:L(A)]\ge1$. All standard and costandard sections of $T$ have labels in $\Gamma$, so it is tilting in that truncated highest-weight category. The proved maximal-standard trace in [F1] injects $\Delta(A)^{\oplus m}$ into $T$ with standard-filtered quotient. Choose one copy $i:\Delta(A)\hookrightarrow T$; its quotient is still standard-filtered, since the other $m-1$ copies and the trace quotient have such flags. Let $j:\Delta(A)\hookrightarrow X(A)$ be the actual normalized inclusion of step 1.1. Since $X(A)/\Delta(A)$ is standard-filtered and $T$ is tilting, $\operatorname{Ext}^1(X(A)/\Delta(A),T)=0$ extends $i$ to $f:X(A)\to T$ with $fj=i$. Similarly $\operatorname{Ext}^1(T/\Delta(A),X(A))=0$ extends $j$ to $g:T\to X(A)$ with $gi=j$. The composite $gf$ fixes the nonzero bottom standard of the indecomposable $X(A)$, so it is invertible by the finite local-End/Fitting argument. Hence $f$ splits with retraction $(gf)^{-1}g$, and $T\cong X(A)\oplus T'$. The complement is tilting by summand closure and has strictly smaller length; induction proves the stated finite decomposition. Incomparable maximal support labels and multiplicities $m>1$ are both allowed: no normalized flag of the entire $T$ was assumed. [F1, F3, step 1.1, step 2.1, algebra]

3.2 **Duality, ideals and Grothendieck basis.** Restricted duality makes $DT(A)$ an indecomposable tilting object with the same composition support $\le A$ and $[DT(A):L(A)]=1$. In the lower highest-weight ideal of labels $\le A$, the maximal-standard trace proved in [F1] gives an inclusion $M(A)\hookrightarrow DT(A)$ with standard-filtered quotient of strictly smaller labels, since its multiplicity space has dimension one. This supplies an actual normalized standard flag, so uniqueness identifies $DT(A)\cong T(A)$. If $\Gamma$ is a lower ideal containing $A$, every support label of $T(A)$ lies in $\Gamma$, so $T(A)$ computed in the ambient block lies in the Serre subcategory of $\Gamma$ and coincides with the partial tilting there; the classes $[T(A)]$ are unitriangular in the standard basis by the flag multiplicities, hence form a Grothendieck basis. [F1, step 1.1, step 2.1]

4.1 **The projection kernel and standard embeddings.** The projection $\pi$ of [F4] has kernel spanned by the $L$-vectors off $\mathrm{Std}^\Lambda$ and is $U$-stable; the residue functors have nonnegative composition coefficients, so iterating them on an off-standard simple never produces a standard composition factor. For this embedding argument, enlarge a finite upper alphabet if necessary while keeping the lower endpoint and the Levi column heights fixed. The blocks of the original labels are unchanged, because their entry multisets are unchanged; the established Fock projection and its off-standard kernel apply on the enlarged alphabet, where the standard predicate for those labels is the same. Every generalized standard $M(B)$ then embeds into an iterated $e$-word applied to an irreducible standard $M(C)$: add successively huge offsets to the later columns so that all later entries lie above the earlier ones, making $C$ the unique minimum in its fixed-multiset tableau order and hence $M(C)=L(C)$ simple; then lower the later-column entries back, column by column and bottom to top, with the explicit residue word. A later column stays above the active residues, so a wrong move can only occur in an earlier column and strictly increases an earlier prefix weight; hence $B$ is the unique maximal final standard section and occurs once, and the canonical maximal trace embeds $M(B)$ at the bottom. If $L(A)$ embedded into $M(B)$ with $A$ off standard, adjunction would give the standard $L(C)$ as a quotient of an $f$-word applied to $L(A)$, impossible by kernel stability. [F4, step 3.1]

5.1 **Converse and prinjectivity.** Conversely every standard label is reached from the ground simple projective by the crystal $f$-word, and the simple-head clause of [F4] makes $P(A)$ a summand of that translated projective-injective, hence injective; projectivity of $P(A)$ is by definition. A projective-injective indecomposable is self-dual: $DP(A)=P(B)$ with $[P(A)]=[P(B)]$ because simple classes are duality-fixed and the Cartan matrix is $DD^{t}$ with unitriangular invertible $D$, so $A=B$. A self-dual $P(A)$ has its head in its socle, and its standard flag embeds that simple into a standard section; conversely if $A$ is standard then $P(A)$ is projective-injective by the previous sentence. BGG reciprocity and [[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]] identify the standard coefficients of $[P(A)]$ with the transpose composition matrix defining the quasi-canonical vector $P_A$ at $s=1$. Thus the normalization $P_A=s^{a}T_{A^{\uparrow}}$ of [F4] identifies that actual projective class with the source canonical vector at $s=1$, whose unitriangular monomial expansion has unique maximal label $A^{\uparrow}$. Since $P(A)$ is an indecomposable tilting object its unique maximal standard label identifies it as $T(A^{\uparrow})$. [F3, F4, step 4.1]

6.1 **Conclusion.** Every label has a unique normalized indecomposable tilting object with the stated maximal-support flag, every tilting is a finite sum of these, restricted duality fixes them, lower ideals stabilize the same objects, and $P(A)$ is projective-injective exactly for standard $A$, in which case $P(A)=T(A^{\uparrow})$; no Irving criterion or future Schur-theoretic input is used. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎
