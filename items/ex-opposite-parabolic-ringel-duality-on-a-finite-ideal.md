---
id: ex-opposite-parabolic-ringel-duality-on-a-finite-ideal
kind: example
title: "Opposite-parabolic Ringel duality on a finite ideal"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 31
deps:
  - thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic
  - def-the-ringel-dual-of-a-finite-highest-weight-ideal
  - thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - def-axiom-of-choice
  - lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases
  - thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jonathan Brundan, Tilting modules for Lie superalgebras, Comm. Algebra 32 (2004) 2251-2268 (complete arXiv article)"
      url: "https://arxiv.org/pdf/math/0209235"
      locator: "Corollary 5.8 and (6.5) with Theorem 6.4 (printed pp. 9-12): the reciprocity formula $(T(E):\\Delta(F))=[\\nabla(C_{-\\gamma}\\otimes F^{\\#}):L(C_{-\\gamma}\\otimes E^{\\#})]$ used to compute the tilting multiplicities; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 4.3, Lemma 4.10 and (3.5) (printed pp. 20-21 and 37-38): the parabolic statement and Arkhipov-Soergel reciprocity for the opposite parabolic; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.5 (printed pp. 20-21): the characteristic tilting module and the Ringel dual; complete passage read."
    - title: "Wolfgang Soergel, Character formulas for tilting modules over Kac-Moody algebras (complete 22-page author English preprint; some later additions absent)"
      url: "https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps"
      locator: "Sections1–2 (pp1–6), Sections5–6 (pp10–15) and Section7 parabolic grading and Lemma7.4 (pp16–19); actual full body read via converted PDF/OCR, with local correction of the nonzero-Levi PBW dimension shortcut."
---

## Example

Use classical $\mathfrak{gl}_3$ with Levi $(2,1)$, $I=\{0,1\}$ and
$\Lambda=\Lambda_1+\Lambda_0$, in the distinct-entry regular block of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]].

In target tableau order let
$$A_0=(1,0|2),\qquad A_1=(2,0|1),\qquad A_2=(2,1|0),$$
with highest weights $(1,1,4),(2,1,3),(2,2,2)$. The target standard/simple matrix
is
$$D=\begin{pmatrix}1&0&0\\1&1&0\\0&1&1\end{pmatrix}.$$
The reverse readings $(2|1,0),(1|2,0),(0|2,1)$ give the opposite highest weights
$(2,2,2),(1,3,2),(0,3,3)$ and the opposite matrix
$$N=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}.$$
The semiregular label shift is verified on each of the three weights,
$F\bar M(A)=\nabla(A)$ and $F\bar P(A)=T(A)$ hold, and the tilting-standard
**row** matrix is $N^{t}$, distinct from the target projective-standard rows
$D^{t}$. On the genuine target lower ideal $\Gamma=\{A_0,A_1\}$ the tilting rows
are $\begin{pmatrix}1&0\\1&1\end{pmatrix}$, and its Ringel dual is the opposite
highest-weight **Serre quotient** with standard/simple rows
$\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Simples and canonical classes in the
target ideal are unchanged ambient ones, whereas projective and quasi-canonical
classes use the standard-flag truncation of the ambient projectives. This gives
the actual three-basis finite-ideal dictionary without a false same-downset
opposite restriction.

## Facts & Assumptions

**Given:** The $\mathfrak{gl}_3$ Levi-$(2,1)$ distinct-entry regular block with the three displayed tableaux, their highest weights, the reverse readings, the target and opposite matrices $D,N$, and the finite witnesses of the semiregular and Ringel items.

[F1] Semiregular and Ringel ([[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]], [[thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic]]): the explicit shift on each weight, $F\bar M(A)=\nabla(A)$, $F\bar P(A)=T(A)$ and $(T(A):M(B))=[\bar M(B):\bar L(A)]$.

[F2] Coefficients ([[thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix]], [[thm-simples-projectives-and-tiltings-map-to-the-three-distinguished-fock-bases]], [[thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module]]): the mixed standard/simple matrix $D$, the opposite matrix $N$, and the identification of simples, projectives and tiltings with the three Fock families at $s=1$.

[F3] Finite ideal transport ([[def-the-ringel-dual-of-a-finite-highest-weight-ideal]], [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]): lower-ideal invariance of the tiltings and the corner-quotient realization of the Ringel dual.

## Verification

**Proof technique:** direct.

1.1 **The two matrices.** Finite Levi Weyl cancellation with $W_J=\{e,s_1\}$ and $W_{\bar J}=\{e,s_2\}$, together with all ordinary $S_3$ Kazhdan-Lusztig values at $1$ being $1$, gives the target standard/simple matrix $D$ and the opposite matrix $N$ independently on the displayed labels; subtracting the scalar $(2,2,2)$ reduces the comparison to the actual regular $S_3$ example of the block, and the target dominant labels appear in the reverse tableau order while the reverse-side dominant labels appear in the displayed order. [F2, algebra]

2.1 **The semiregular shift and the functor values.** Applying the explicit block-offset shift of [F1] to each of the three highest weights verifies the label computation: the shifted coordinates return the original column readings, so $F\bar M(A)=\nabla(A)$ and the central-character blocks match. Opposite BGG then gives the entrywise tilting-standard matrix $N^{t}$ through $F\bar P(A)=T(A)$. [F1, step 1.1, algebra]

3.1 **The proper ideal and the quotient.** Restricting to $\Gamma=\{A_0,A_1\}$, the invariant tiltings have rows $\begin{pmatrix}1&0\\1&1\end{pmatrix}$, while the projective-corner $\operatorname{Hom}$ quotient of [F3] has standard/simple rows $\begin{pmatrix}1&1\\0&1\end{pmatrix}$; this is the opposite highest-weight Serre quotient by the complementary label, not the same opposite down-set subcategory. Simples and canonical classes are unchanged ambient ones, while projectives and quasi-canonical classes use the standard-flag truncation of the ambient projectives. [F3, step 2.1, algebra]

4.1 **Conclusion.** In this finite $\mathfrak{gl}_3$ example the semiregular label shift, the functor values $F\bar M=\nabla$ and $F\bar P=T$, the opposite BGG tilting matrix $N^{t}$, the distinction from the target projective rows $D^{t}$, and the two-label ideal quotient data are all verified; the three Fock families correspond to simples, projectives and tiltings exactly as stated. [step 1.1, step 2.1, step 3.1] ∎
