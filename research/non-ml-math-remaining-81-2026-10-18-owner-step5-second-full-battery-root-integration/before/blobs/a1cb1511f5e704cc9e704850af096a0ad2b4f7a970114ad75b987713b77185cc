---
id: def-category-o-klr-and-hecke-route-conventions
kind: definition
title: "Category O, KLR, and Hecke route conventions"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-bgg-category-o
  - def-degenerate-affine-hecke-algebra
  - def-arakawa-suzuki-casimir-operators-on-tensor-functors
  - thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations
  - thm-higher-level-schur-weyl-double-centralizer
  - thm-higher-level-schur-weyl-endomorphism-isomorphism
  - thm-category-o-translation-intertwines-residue-induction-and-restriction
  - def-affine-and-cyclotomic-type-a-hecke-algebras
  - def-nondegenerate-root-of-unity-level-one-hecke-regime
  - def-cyclotomic-klr-quotient-at-a-dominant-weight
  - def-graded-module-and-projective-grothendieck-groups-for-klr-towers
  - thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism
  - thm-klr-categorification-of-the-negative-quantum-half
  - thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module
  - thm-ariki-canonical-basis-theorem-in-characteristic-zero
  - thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero
  - thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment
  - thm-murphy-tableau-elements-form-a-cellular-basis
  - thm-soergels-character-conjecture
  - thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials
  - thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Tomoyuki Arakawa and Takeshi Suzuki, Lie algebras and degenerate affine Hecke algebras of type A, J. Algebra 209 (1998), complete 16-page preprint"
      url: "https://arxiv.org/pdf/q-alg/9710037"
      locator: "§§1.2 and 2.2, printed pp. 6–7: Casimir/place operators, formulas (2.2.1)–(2.2.2), Lemma 2.2.1 and Theorem 2.2.2."
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, Invent. Math. 178 (2009), complete 32-page preprint"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction, printed pp. 1–5, and §§2–6: finite quantum characteristic, the separate degenerate and nondegenerate cases, and the blockwise Hecke–KLR isomorphism."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, Adv. Math. 222 (2009), complete 57-page preprint"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "§§2.2 and 4–5, printed pp. 6–10 and 30–57: KLR grading conventions, characteristic-zero canonical-basis/decomposition results, and the positive-characteristic adjustment matrix."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bull. Amer. Math. Soc. 47 (2010), complete 66-page survey"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "§§2.7–2.11, printed pp. 12–23, and §§9.1–9.5, printed pp. 39–46: Hecke/KLR conventions, blocks, Fock space, and the characteristic boundary."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, AMS University Lecture Series 15 manuscript, complete 79-page book text"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 1, §2 and the basis results in §§3–4, printed pp. 1–30: finite type-A Hecke parameter convention, specialization at parameter 1, and Murphy/cellular bases."
---

## Definition

This page uses the following **route convention**. Category O means the BGG
category for a fixed finite-dimensional complex semisimple Lie algebra and a
chosen positive system, as defined in [[def-bgg-category-o]]. The
Arakawa–Suzuki route is the *degenerate affine* route over $\mathbb C$: on
$M\otimes (\mathbb C^N)^{\otimes d}$ use the operators $x_j$ and $s_i$ of
[[def-arakawa-suzuki-casimir-operators-on-tensor-functors]], with the verified
right $H_d$-action of
[[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]].
The source-normalized operators are
$$y_j=x_j-\frac{1}{N}z_M+\frac{N-1}{2};$$
they are not new generators to be identified with a nondegenerate Hecke
generator. Here $z_M$ is the central endomorphism specified in the cited
definition. This convention asserts no extension of the cited hypotheses on
$M$, origin, or tensor functor.

The finite cyclic type-A Hecke/KLR route uses a field $F$, a finite quantum
characteristic $e\ge2$, and its declared residue and cyclotomic conventions
([[def-affine-and-cyclotomic-type-a-hecke-algebras]]). In the nondegenerate
branch write the Hecke parameter as $\xi\ne1$ and reserve $q$ for the grading
and Laurent-polynomial variable. The blockwise identification is exactly
[[thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]]: write
$\xi_{\mathrm{BK}}$ for its Hecke parameter (denoted $q$ in that theorem),
independent of the grading variable $q$. Its $\xi_{\mathrm{BK}}=1$ branch
requires $\operatorname{char}F=e$, while its $\xi_{\mathrm{BK}}\ne1$ branch is
separate. For
level-one Ariki statements, use only the regime in
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]]. In characteristic
zero the canonical-basis and graded-decomposition conclusions are those of
[[thm-ariki-canonical-basis-theorem-in-characteristic-zero]] and
[[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]].
In positive characteristic retain the adjustment factorization of
[[thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment]];
no identity adjustment matrix is part of this route.

The negative-half KLR categorification and the cyclotomic highest-weight
projective-$K_0$ theorem are distinct routes, respectively
[[thm-klr-categorification-of-the-negative-quantum-half]] and
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]].
Each keeps its own field, grading, weight and Axiom-of-Choice hypotheses
([[def-axiom-of-choice]]).
Likewise, the type-A Hecke cellular result
[[thm-murphy-tableau-elements-form-a-cellular-basis]], the local type-A
character theorem [[thm-soergels-character-conjecture]], the singular spherical
formula [[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]],
and the regular-ambient parabolic antispherical formula
[[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]] retain
their distinct statements and ranges. This route convention introduces no
new theorem, grading, equivalence, or cross-characteristic transfer.

## Remarks

The shifted-Yangian PBW result
[[thm-ordered-monomial-pbw-basis-for-the-shifted-yangian]] is not a supplier
for these Category-O, Hecke, or KLR conventions; the link records a scope
boundary only.
