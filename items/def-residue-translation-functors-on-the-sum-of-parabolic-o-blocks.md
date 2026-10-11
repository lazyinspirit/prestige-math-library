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
justified_by: [lem-residue-casimir-operators-give-local-affine-hecke-actions]
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
$\operatorname{pr}_{\alpha+\alpha_i}(-\otimes V)$ for $f_i$ and
$\operatorname{pr}_{\alpha-\alpha_i}(-\otimes V^{*})$ for $e_i$, where
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

[F1] Semisimple-ambient translation and projection ([[def-translation-functor-between-o-blocks]], [[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]], [[thm-category-o-decomposes-by-generalized-central-character]]): exactness and biadjunction of the finite tensor/block-projection functors, and the decomposition of $\mathcal O$ by generalized central characters.

[F3] Duality ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]): restricted Chevalley duality in semisimple category $\mathcal O$ is an exact contravariant involution preserving characters and simple composition multiplicities.

[F4] Block dictionary ([[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]]): the central characters are labelled by entry multisets and the Fock root label $\alpha_i$ shifts one entry; its Verification constructs the fixed-centre $\mathfrak{gl}_n$ reduction to $\mathfrak{sl}_n$.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

[F6] The Casimir eigencomponent description is established by the well-definedness supplier [[lem-residue-casimir-operators-give-local-affine-hecke-actions]], using eigenvalues on generalized-standard flag sections, rather than on arbitrary weight vectors.

## Verification

1.1 **Definition of the functors.** Tensoring with $V$ or $V^{*}$ preserves $\mathcal O$ and parabolic local finiteness: tensor a finite parabolic span of a vector with the finite tensor factor. By the fixed-centre equivalence in [F4], the exact semisimple central-character projections in [F1] extend to $\mathfrak{gl}_n$: first project to an $I_n$ eigenvalue and then to the corresponding $\mathfrak{sl}_n$ central character. Tensoring with $V$ shifts the centre scalar by $1$, and tensoring with $V^*$ shifts it by $-1$. Thus these projections define the stated functors. Replacing $i$ by $i+1$ changes the Fock weight by $-\alpha_i$, so a source weight $\Lambda-\alpha$ becomes $\Lambda-(\alpha+\alpha_i)$; the reverse move gives $\alpha-\alpha_i$. A target with no admitted tableau is the zero category and its projection is zero. [F1, F4, construct, algebra]

2.1 **Exactness and biadjunction.** Tensoring with a finite-dimensional module is exact, and the fixed-centre block projections of step 1.1 are exact, hence so are $f_i,e_i$. For $W=V$ or $V^*$, evaluation and coevaluation give both adjunctions between $-\otimes W$ and $-\otimes W^*$; $W^{**}=W$ supplies the second direction. These maps are $\mathfrak{gl}_n$-linear, preserve the Cartan-semisimple and locally parabolic-finite categories, and respect the scalar-centre shifts. For a source block $\alpha$ and target block $\beta=\alpha+\alpha_i$, no maps connect distinct central-character components. Therefore projection restricts both adjunctions to $\operatorname{Hom}(f_iM,N)\cong\operatorname{Hom}(M,e_iN)$ and $\operatorname{Hom}(N,f_iM)\cong\operatorname{Hom}(e_iN,M)$, with the evaluation/coevaluation units and counits. This proves biadjunction without a regular-wall hypothesis, including zero target blocks. [F1, F4, F5, step 1.1, algebra]

2.2 **The Casimir description.** The well-definedness supplier [F6] computes the tensor-Casimir scalars on generalized-standard flag sections: a valid $\lambda\mapsto\lambda+\varepsilon_j$ section has scalar $a_j$, and a valid $\lambda\mapsto\lambda-\varepsilon_j$ section has scalar $-a_j-n+1$. In particular the reverse move from entry $i+1$ has scalar $-n-i$. Its extension from these flag sections to arbitrary finite-length objects proves that the generalized $i$-eigencomponent is $f_i$ and the generalized $-n-i$-eigencomponent is $e_i$, with the block shifts of step 1.1. [F4, F6, step 1.1]

2.3 **Commutation with duality.** Extend the semisimple restricted duality [F3] through the fixed-centre equivalence [F4]; transpose fixes $I_n$, so its scalar is retained. For a finite-dimensional weight module $W$, the evaluation map $DM\otimes DW\to D(M\otimes W)$, $(\varphi\otimes\eta)(m\otimes w)=\varphi(m)\eta(w)$, is a natural isomorphism: at each total weight only finitely many weights of $W$ occur, and all the participating weight spaces are finite dimensional. The diagonal tensor action and the transpose anti-involution make this map $\mathfrak{gl}_n$-linear. In the standard coordinate bases, the dot forms on $V$ and $V^*$ identify $DV\cong V$ and $D(V^*)\cong V^*$: the matrices are $x$ on $V$ and $-x^{\mathsf T}$ on $V^*$, and in each case the transpose action is the adjoint for the dot form. Thus $D(M\otimes V)\cong DM\otimes V$, and likewise for $V^*$. Exactness and preservation of the simple composition factors show that $D$ preserves every finite-length central-character block, so $D\operatorname{pr}_\beta\cong\operatorname{pr}_\beta D$. Combining the two natural isomorphisms gives $Df_i\cong f_iD$ and $De_i\cong e_iD$. [F3, F4, step 1.1, algebra]

3.1 **Projectives and injectives.** The biadjunction of step 2.1 holds inside the parabolic blocks. For a projective $P$, the identity $\operatorname{Hom}(f_iP,-)\cong\operatorname{Hom}(P,e_i-)$ is exact because $e_i$ is exact, so $f_iP$ is projective; interchange the functors for the other direction. For an injective $J$, $\operatorname{Hom}(-,f_iJ)\cong\operatorname{Hom}(e_i-,J)$ is exact, and again interchange the functors. Thus both preserve projectives and injectives in the stated categories. [step 2.1, algebra]

4.1 **Conclusion.** The residue translation functors $f_i,e_i$ on the direct sum of finite classical blocks are exact, biadjoint, preserve projectives and injectives, commute with restricted duality, and agree with the stated Casimir eigencomponents; they are special residue translations with the Fock root label shifts, not ordinary regular-wall translations and not classical highest-weight shifts. [step 1.1, step 2.1, step 3.1, step 2.3, step 2.2] ∎
