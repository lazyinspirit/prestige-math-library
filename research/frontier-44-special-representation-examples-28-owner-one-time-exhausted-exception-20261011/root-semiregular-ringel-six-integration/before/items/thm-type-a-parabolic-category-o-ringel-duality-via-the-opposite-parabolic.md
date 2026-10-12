---
id: thm-type-a-parabolic-category-o-ringel-duality-via-the-opposite-parabolic
kind: theorem
title: "Type-A parabolic category-O Ringel duality via the opposite parabolic"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 29
deps:
  - def-the-ringel-dual-of-a-finite-highest-weight-ideal
  - thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o
  - def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-parabolic-category-o-for-a-standard-parabolic
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - def-standard-and-costandard-objects-in-category-o
  - prop-restricted-duality-is-an-exact-involution-on-category-o
  - def-axiom-of-choice
  - lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map
  - def-projective-object
  - thm-bgg-reciprocity
  - thm-parabolic-category-o-is-a-highest-weight-category
  - thm-projectives-in-category-o-have-verma-flags
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
      locator: "Section 5, Lemma 5.3, Theorems 5.1 and 5.4, Corollaries 5.7-5.8, and Section 6, Theorems 6.3-6.4 with (6.5) (printed pp. 7-12): the semi-regular bimodule, the equivalences, the transport $\\Delta(E)\\mapsto\\Delta(C_{-\\gamma}\\otimes E^{\\#})$, $P\\mapsto T$, the reciprocity formula and Example 7.1; complete passage read."
    - title: "Henning Haahr Andersen and Catharina Stroppel, Twisting functors on O, Represent. Theory 7 (2003) 681-699 (author-hosted complete article, University of Bonn)"
      url: "http://www.math.uni-bonn.de/ag/stroppel/Twisting.pdf"
      locator: "Section 2, Lemma 2.1, Theorems 2.2-2.3 and Corollary 4.2 (printed pp. 683-693): twisting functors defined by the semi-regular bimodule, right exactness, preservation of blocks, commutation with finite tensoring and translation functors, acyclicity on Verma-flagged objects, the action on dual Vermas and the derived auto-equivalence; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 4.3, Lemma 4.10 and its attribution (printed pp. 37-38): the type-A parabolic statement identifying the longest-element twisting functor as an equivalence between standard-filtered objects of the opposite parabolic and costandard-filtered objects of the original one, with $T_w(\\bar M(A))\\cong M(A)^\\star$ and $T_w(\\bar P(A))\\cong T(A)$; complete passage read."
    - title: "Wolfgang Soergel, Character formulas for tilting modules over Kac-Moody algebras (complete 22-page author English preprint; some later additions absent)"
      url: "https://home.mathematik.uni-freiburg.de/soergel/PReprints/CharKippengl.ps"
      locator: "Sections1–2 (pp1–6), Sections5–6 (pp10–15) and Section7 parabolic grading and Lemma7.4 (pp16–19); actual full body read via converted PDF/OCR, with local correction of the nonzero-Levi PBW dimension shortcut."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the actual type-$A$
tableau parabolic data of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]].
Let $\bar{\mathfrak p}$ have the reversed Levi block order, conjugate to the
opposite parabolic, with reverse-column labels, and let
$F=D\Psi$ be the exact **covariant** equivalence constructed by
[[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]].
Then
$$F:\mathcal F(\bar\Delta)\simeq\mathcal F(\nabla),\qquad F(\bar M(A))=\nabla(A),\qquad F(\bar P(A))=T(A),$$
and the explicit highest-weight shifts cancel to the original column reading, so
labels $A$ and the matching central-character blocks are preserved. Therefore the
full-block Ringel dual is the opposite-parabolic block, and
$$(T(A):M(B))=[\bar M(B):\bar L(A)] .$$
For a proper original lower ideal $\Gamma$, its Ringel dual is the matching
opposite **highest-weight Serre quotient** by the complementary labels (an upper
ideal in the opposite order), not the same Serre down-set subcategory. The
filtered equivalence and the projective/tilting corner construction give this
compatible finite-ideal transport. No unchanged underived full-longest Borel
twisting and no equivalence on arbitrary category-$\mathcal O$ objects is
asserted.

## Facts & Assumptions

**Given:** The reversed-block parabolic $\bar{\mathfrak p}$ with its semi-regular bimodule and the covariant equivalence $F=D\Psi$ of [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]; the tilting classification of [[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]]; the Ringel-dual definition of [[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]; the block structure of [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]] and [[thm-parabolic-category-o-is-a-highest-weight-category]].

[F1] Semi-regular duality ([[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]): exactness on the finite flag categories, $F(\bar\Delta(A))=\nabla(A)$, preservation of central blocks, and the label map.

[F2] Tilting classification ([[thm-indecomposable-tiltings-exist-and-are-classified-in-parabolic-category-o]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]]): uniqueness/maximal support, $T(A)$ with $M(A)$ once at the bottom, restricted duality fixing tiltings, and lower-ideal invariance.

[F3] Ringel duality ([[def-the-ringel-dual-of-a-finite-highest-weight-ideal]]): the characteristic tilting generator and the exact fully faithful Hom to the reversed highest-weight category.

[F4] BGG and duality ([[thm-bgg-reciprocity]], [[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[def-projective-object]], [[thm-projectives-in-category-o-have-verma-flags]]): opposite projective BGG reciprocity, self-duality of tiltings, and projective presentations.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The equivalence on flags and its variance.** By [F1] the functor $F=D\Psi$ is exact and covariant on the finite generalized-standard flag categories, sends $\bar M(A)$ to $\nabla(A)$, preserves the central blocks and maps the reverse-column labels to the original ones by the explicit offset computation; it is an equivalence onto the costandard-filtered objects. [F1]

1.2 **Projectives map to tiltings.** The tilting theorem [F2] together with $F(\bar P(A))=T(A)$: the image of an opposite projective cover is standard-filtered with $\bar M(A)$-bottom and only lower labels, and projectivity makes its positive Ext against costandards vanish, so it is tilting with maximal support label $A$; uniqueness of normalized tiltings identifies it with $T(A)$. Self-duality of tiltings then gives $F(\bar P(A))=T(A)$ also under the dual variance used in [F1]. [F1, F2, F5]

2.1 **Reciprocity.** The standard flag of $F(\bar P(A))=T(A)$ is computed by opposite projective BGG reciprocity and the label dictionary, yielding $(T(A):M(B))=[\bar M(B):\bar L(A)]$. [F2, F4, step 1.2]

3.1 **Full blocks and proper ideals.** Since both filtered equivalences are fully faithful, the endomorphism ring of the opposite projective generator equals that of the characteristic tilting generator, so the full-block Ringel dual is the opposite-parabolic block. For a proper original lower ideal $\Gamma$, every $T(A)$ with $A\in\Gamma$ has support $\le A$ and remains unchanged in the Serre truncation; its end algebra equals that of the corresponding sum of opposite full projectives. The functor $\operatorname{Hom}$ from that sum is exact, kills precisely the complementary simples, and is dense by projective presentations, realizing the Serre quotient as the corner $e_\Gamma\bar Ae_\Gamma$; this is the opposite highest-weight quotient by the complementary labels, an upper ideal in the opposite order, not the same down-set subcategory. [F3, F4, step 1.2, step 2.1]

4.1 **Conclusion.** The covariant semi-regular equivalence identifies the opposite standard flags with target costandard flags, sends opposite projectives to tiltings, preserves labels and central blocks, gives the reciprocity $(T(A):M(B))=[\bar M(B):\bar L(A)]$, and realizes the Ringel dual of the full block as the opposite-parabolic block and of a proper lower ideal as the opposite highest-weight Serre quotient; no unchanged full-longest Borel twisting or arbitrary-object equivalence is asserted. [step 1.1, step 1.2, step 2.1, step 3.1] ∎
