---
id: def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks
kind: definition
title: "The residue translation functors on the sum of parabolic blocks"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 23
deps:
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-parabolic-category-o-for-a-standard-parabolic
  - lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective
  - lem-block-projection-preserves-projectives
  - def-translation-functor-between-o-blocks
  - prop-translation-functors-are-exact-and-biadjoint-across-a-wall
  - thm-category-o-decomposes-by-generalized-central-character
  - def-grothendieck-group-and-character-of-category-o
  - def-axiom-of-choice
  - prop-restricted-duality-is-an-exact-involution-on-category-o
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
      locator: "Section 3.1, display (3.6) and the preceding paragraph (printed pp. 19-21): $f_i,e_i$ defined by tensoring with the natural module and its dual and projecting onto a block, their exactness, biadjunction and commutation with duality; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 4.3-4.4 (printed pp. 19-22): the functors $f_i,e_i$ on parabolic categories, biadjunction, the effect on parabolic Verma flags and the crystal action on irreducibles; complete passage read."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and work with the finite
classical $\mathfrak{gl}_n$ tableau blocks of
[[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]],
and with the general translation machinery of
[[def-translation-functor-between-o-blocks]] and
[[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]].

Let $V$ be the natural $\mathfrak{gl}_n$-module and $V^{*}$ its dual. For a
residue $i$ define the **residue translation functor** $f_i$ on
$\mathcal O^\Lambda$ by tensoring with $V$ and projecting onto the entry-multiset
central character in which exactly one entry $i$ is replaced by $i+1$; define
$e_i$ by tensoring with $V^{*}$ and the reverse character change ($i+1\mapsto i$,
with the signs of the natural form). Concretely, on a block
$\mathcal O^\Lambda_\alpha$ the functor is the exact block projection
$\operatorname{pr}_{\alpha-\alpha_i}(-\otimes V)$ for $f_i$ and
$\operatorname{pr}_{\alpha+\alpha_i}(-\otimes V^{*})$ for $e_i$, where
$\alpha_i$ is the Fock root label of the dictionary item
([[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]).

On the direct sum $\mathcal O^\Lambda$ of the blocks these functors are exact
and biadjoint, preserve projective and injective objects, and commute with the
restricted transpose duality
([[prop-restricted-duality-is-an-exact-involution-on-category-o]]).
Equivalently, $f_i$ is the generalized $i$-eigencomponent of the tensor
Casimir (including the place factors), and $e_i$ is the generalized
$-n-i$-eigencomponent on the dual tensor product.

The functors are **special residue translations**, not automatically ordinary
regular-wall translations; the Fock root label shifts by $\pm\alpha_i$, and
that label is not the classical $\mathfrak{gl}_n$ highest weight.

## Facts & Assumptions

**Given:** The finite classical blocks $\mathcal O^\Lambda_\alpha$ with their generalized standards, simples, projectives and costandards, the natural module $V$ and its dual $V^{*}$, a residue $i$, and the translation and block-projection machinery.

[F1] Translation and projection ([[def-translation-functor-between-o-blocks]], [[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]], [[thm-category-o-decomposes-by-generalized-central-character]]): exactness and biadjunction of the finite tensor/block-projection functors, and the decomposition of $\mathcal O$ by generalized central characters.

[F2] Preservation of (co)projectives ([[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]], [[lem-block-projection-preserves-projectives]]): tensoring a projective with a finite-dimensional module is projective, and block projection preserves projectives; dually for injectives.

[F3] Duality ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]): restricted duality is an exact contravariant involution fixing the finite natural modules with their forms and preserving blocks.

[F4] Block dictionary ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]): the central characters are labelled by entry multisets and the Fock root label $\alpha_i$ shifts one entry.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Verification

1.1 **Definition of the functors.** Tensoring with the finite-dimensional module $V$ preserves the ambient category $\mathcal O$, and the decomposition of $\mathcal O$ into generalized central characters [F1] provides the exact projection onto each character; the character shifts by replacing one entry $i$ with $i+1$ by the weight computation of [F4]. Hence $f_i=\operatorname{pr}\circ(-\otimes V)$ is a well-defined exact functor between the stated blocks, and $e_i$ is defined verbatim with $V^{*}$ and the reverse shift. [F1, F4, construct]

2.1 **Exactness and biadjunction.** On the direct sum of blocks, exactness is inherited from the exactness of tensoring with a finite-dimensional module and of the block projections [F1]. Biadjunction holds because the general clause of the published translation supplier applies to the finite modules $V$ and $V^{*}$ without any regular-wall crossing: the unit and counit are those of the tensor/block-projection adjunction, and they restrict to the stated blocks by construction of the projections. [F1, F5, step 1.1]

2.2 **The Casimir description.** On a weight vector of weight $\lambda$ in a block, the tensor Casimir of the natural factor acts by the scalar $\lambda_j+1-j$, i.e. by the entry $a_j$ of the tableau reading, and on the dual tensor product by $-a_j-n+1$; an entry $i+1$ therefore contributes the generalized eigenvalue $-n-i$. Hence the generalized $i$-eigencomponent of the tensor Casimir is exactly the functor $f_i$ of step 1.1, and the generalized $-n-i$-eigencomponent of the dual tensor product is $e_i$. This also identifies the Fock root labels: they shift by $\pm\alpha_i$ and are not the classical highest weights. [F4, step 1.1, algebra]

3.1 **Projectives and injectives.** If $P$ is projective in a block, $P\otimes V$ is projective in $\mathcal O$ by [F2], and the block projection of a projective is projective by [F2]; hence $f_i$ and, dually, $e_i$ preserve projectives. Applying restricted duality [F3], which preserves the blocks and exchanges projectives with injectives, gives the injective statement. [F2, F3, step 2.1]

3.2 **Commutation with duality.** Restricted transpose duality fixes $V$ and $V^{*}$ with their respective forms and commutes with tensoring with a fixed finite-dimensional module and with the character projections; therefore $D f_i\cong f_i D$ and $D e_i\cong e_i D$ on the direct sum, which is the stated compatibility. [F3, step 2.1]

4.1 **Conclusion.** The residue translation functors $f_i,e_i$ on the direct sum of finite classical blocks are exact, biadjoint, preserve projectives and injectives, commute with restricted duality, and agree with the stated Casimir eigencomponents; they are special residue translations with the Fock root label shifts, not ordinary regular-wall translations and not classical highest-weight shifts. [step 1.1, step 2.1, step 3.1, step 3.2, step 2.2] ∎
