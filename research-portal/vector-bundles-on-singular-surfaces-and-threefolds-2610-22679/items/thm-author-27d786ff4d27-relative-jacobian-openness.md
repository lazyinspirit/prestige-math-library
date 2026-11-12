---
id: thm-author-27d786ff4d27-relative-jacobian-openness
kind: theorem
title: External relative Jacobian criterion and openness of smooth maps
status: published
domain: mathematics
deps:
  - math:def-smooth-morphism-schemes
  - math:def-relative-dimension-smooth-morphism
  - math:def-sheaf-relative-differentials
  - math:def-fibre-of-module-at-point
  - math:def-ag-standard-smooth-algebra
  - math:lem-sheaf-differentials-affine-compatibility
  - math:lem-ag-polynomial-quotient-differentials
  - math:thm-right-exactness-of-tensor-products
  - math:def-fibre-product-schemes-universal-property
  - math:def-base-change-morphism-schemes
  - math:thm-affine-scheme-ring-anti-equivalence
  - math:lem-quotient-spectrum-map-is-closed
  - math:lem-fibre-product-open-restriction
  - math:thm-affine-fibre-product-tensor-ring
  - math:lem-spectrum-localization-open-immersion
dependency_roles:
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-relative-dimension-smooth-morphism: mathematical-premise
  math:def-sheaf-relative-differentials: mathematical-premise
  math:def-fibre-of-module-at-point: mathematical-premise
  math:def-ag-standard-smooth-algebra: mathematical-premise
  math:lem-sheaf-differentials-affine-compatibility: mathematical-premise
  math:lem-ag-polynomial-quotient-differentials: mathematical-premise
  math:thm-right-exactness-of-tensor-products: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:def-base-change-morphism-schemes: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
  math:lem-quotient-spectrum-map-is-closed: mathematical-premise
  math:lem-fibre-product-open-restriction: mathematical-premise
  math:thm-affine-fibre-product-tensor-ring: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, standard smooth algebras
      url: https://stacks.math.columbia.edu/tag/00T7
      locator: Algebra Lemma 10.137.6 (00T7), clauses (1), (2), (4), (5), (7) and
        displayed proof; Definition 10.137.5 (00T6) in Section 10.137 (00T1).
      statement: For a polynomial quotient with an invertible defining Jacobian minor,
        the algebra is smooth, its differential module has rank variables minus
        equations, and localization and arbitrary scalar extension preserve
        standard smoothness.
      hypotheses: Any commutative base ring; finitely many variables and equations;
        the indicated maximal minor is a unit in the quotient. Used after
        inverting a minor nonzero at the selected zero-locus point.
      reading_limits: Read Definition 10.137.5 and the full statement and displayed
        proof of Lemma 10.137.6 at their individual tag pages. Localization
        proofs omitted by Stacks and earlier algebraic foundations are imported,
        not reconstructed.
    - title: The Stacks Project, local standard smooth presentations
      url: https://stacks.math.columbia.edu/tag/01V7
      locator: Morphisms Lemma 29.35.11 (01V7), full statement and displayed proof
        reference.
      statement: At a smooth point, over any affine base neighbourhood there is an
        affine source neighbourhood with a standard smooth presentation.
      hypotheses: A scheme morphism smooth at the specified point. Applied to the
        ambient morphism after restricting to the open where the local functions
        are defined.
      reading_limits: Read the statement and printed proof reference. The cited
        Algebra Lemma 10.137.9 and its prerequisite chain were not independently
        reconstructed.
    - title: The Stacks Project, smooth maps are universally open
      url: https://stacks.math.columbia.edu/tag/056G
      locator: Morphisms Lemma 29.35.10 (056G), full statement and displayed proof
        references.
      statement: "Every smooth scheme morphism is universally open: after any base
        change it maps open subsets of its source to open subsets of its
        target."
      hypotheses: A smooth morphism of arbitrary schemes. Applied to the smooth
        zero-locus neighbourhood containing the specified point.
      reading_limits: Read the full statement and its two printed proof routes. The
        referenced flat-openness and syntomic-openness proofs were not reread.
    - title: The Stacks Project, arbitrary base change of smooth morphisms
      url: https://stacks.math.columbia.edu/tag/01VB
      locator: Morphisms Lemma 29.35.5 (01VB), full statement and displayed proof.
      statement: Pulling back a smooth scheme morphism along any scheme morphism
        yields a smooth morphism.
      hypotheses: The original morphism is smooth; the base-change map is arbitrary,
        with no flatness restriction.
      reading_limits: Read the full statement and displayed proof reduction. The cited
        local-property machinery and Algebra Lemma 10.137.3 were not separately
        reverified.
    - title: The Stacks Project, differential rank and relative dimension
      url: https://stacks.math.columbia.edu/tag/02G1
      locator: Morphisms Lemma 29.35.12 (02G1), full statement and displayed proof;
        Definition 29.35.13 in Section 29.35 (01V4).
      statement: For a smooth scheme morphism, the relative differential sheaf is
        finite locally free and its rank at a point equals the local dimension
        of that point in its fibre.
      hypotheses: Smooth morphism of arbitrary schemes. Used to match the
        standard-presentation rank to the relative dimension and to preserve
        this dimension on base-changed standard charts.
      reading_limits: Read the full lemma, its reduction to standard charts, and the
        subsequent definition in Section 29.35. Earlier complete-intersection
        dimension results are imported.
dependency_level: 0
proof_strategy: direct
---

## Statement
Let $f:X\to S$ be a smooth morphism of pure relative dimension $d\geq0$, let $W=\operatorname{Spec}B\subseteq X$ be an affine open, and let $a_1,\ldots,a_r\in B$, where $0\leq r\leq d$. Define their common zero scheme on $W$ by $Z=\operatorname{Spec}(B/(a_1,\ldots,a_r))$, with its induced map to $S$. Fix a point $x\in W$ whose prime contains every $a_j$, so that $x$ is also a point of $Z$, and set $s=f(x)$. Here $\kappa(x)$ is the residue field of $\mathcal O_{X,x}$ and $\Omega_{X/S}(x)=\Omega_{X/S,x}\otimes_{\mathcal O_{X,x}}\kappa(x)$ is the fibre of the relative differential sheaf. Assume that the classes $\mathrm da_1(x),\ldots,\mathrm da_r(x)$ are linearly independent in this vector space: a relation $\sum_j\lambda_j\mathrm da_j(x)=0$ with $\lambda_j\in\kappa(x)$ forces every $\lambda_j=0$.

There is an open neighbourhood $N\subseteq Z$ of $x$ such that $N\to S$ is smooth of pure relative dimension $d-r$. Its image is an open neighbourhood of $s$. These smoothness, dimension and openness conclusions hold after arbitrary base change $S'\to S$: $N\times_S S'\to S'$ is smooth of pure relative dimension $d-r$ and has open image, containing the image of each of its points over $x$. All assertions hold in every characteristic. The affine convention loses no local-function case, since functions defined on any open neighbourhood of $x$ restrict to an affine one.

## Statement references
[[math:def-smooth-morphism-schemes]]

[[math:def-relative-dimension-smooth-morphism]]

[[math:def-sheaf-relative-differentials]]

[[math:def-fibre-of-module-at-point]]

[[math:def-fibre-product-schemes-universal-property]]

[[math:def-base-change-morphism-schemes]]

## Source contract
**Given:** The point $x$ on the common zero scheme and independence in $\Omega_{X/S}(x)$ as specified above. The augmented Jacobian minor is a conclusion to establish, rather than an additional hypothesis.

**Goal:** Construct a smooth zero-locus neighbourhood of $x$ whose image is an open neighbourhood of $s$, with relative dimension $d-r$ and arbitrary-base-change stability.

Write $I=(a_1,\ldots,a_r)\subseteq B$ and let $i:Z\to W$ be the morphism induced by the quotient homomorphism, using [[math:thm-affine-scheme-ring-anti-equivalence]]. By [[math:lem-quotient-spectrum-map-is-closed]], its point map identifies $Z$ homeomorphically with $V(I)\subseteq W$, so the point denoted $x$ in $Z$ is the prime $\mathfrak p_x/I$. The affine restriction and principal-localization identifications in [F4] preserve the scheme structure, rather than only the set of zeros. In particular $(B/I)_h\cong B_h/IB_h$, so shrinking around $x$ preserves the same local zero scheme. A standard smooth presentation means a polynomial quotient, possibly localized, with a unit maximal defining Jacobian minor, as in [[math:def-ag-standard-smooth-algebra]]. Fibre products and base change have the interfaces [[math:def-fibre-product-schemes-universal-property]] and [[math:def-base-change-morphism-schemes]]; the latter includes existence of the required scheme fibre products through its declared supplier.

## Facts & Assumptions
[F1] Stacks Lemma 29.35.11 supplies a standard smooth chart around a smooth point. Stacks Lemma 10.137.6 supplies smoothness, differential rank, localization and scalar-extension stability of such presentations. The presentation convention is [[math:def-ag-standard-smooth-algebra]].

[F2] [[math:lem-sheaf-differentials-affine-compatibility]] identifies the sheaf differentials with the algebraic module on affine charts. [[math:lem-ag-polynomial-quotient-differentials]] presents that module as the cokernel of the defining Jacobian. [[math:thm-right-exactness-of-tensor-products]] preserves this cokernel on tensoring with $\kappa(x)$; [[math:def-fibre-of-module-at-point]] gives precisely the resulting differential fibre.

[F3] Stacks Lemma 29.35.10 supplies universal openness, meaning openness after every base change. Stacks Lemma 29.35.5 supplies smoothness after every base change. Stacks Lemma 29.35.12 identifies the differential rank with the local fibre dimension used in [[math:def-relative-dimension-smooth-morphism]].

[F4] [[math:lem-quotient-spectrum-map-is-closed]] identifies the points and topology of $Z$ with $V(I)\subseteq W$. For an affine open $U=\operatorname{Spec}C\subseteq W$, [[math:lem-fibre-product-open-restriction]] identifies the open subscheme $i^{-1}(U)$ of $Z$ with $Z\times_W U$. By [[math:thm-affine-fibre-product-tensor-ring]], it is $\operatorname{Spec}((B/I)\otimes_B C)\cong\operatorname{Spec}(C/IC)$, where $IC$ is generated by the restrictions of the $a_j$. The ring isomorphism sends $\bar b\otimes c$ to $bc+IC$; its inverse sends $c+IC$ to $1\otimes c$. These maps are well defined by the balancing relation, kill the indicated ideals, are multiplicative, and their composites fix the displayed generators. For $h\in C$, [[math:lem-spectrum-localization-open-immersion]] identifies $\operatorname{Spec}((C/IC)_h)$ with the open $D_{C/IC}(\bar h)$ in this restricted zero scheme. The localization identity $(C/IC)_h\cong C_h/IC_h$ is given by $(c+IC)/h^m\mapsto c/h^m+IC_h$ and its reverse; the fraction relations make both maps well defined. Thus a principal chart constructed in this quotient is open in the original $Z$, and contains $x$ whenever $h(x)\ne0$.

## External input
The imported premises are exactly the Stacks results in [F1] and [F3], with individual URLs, locators, statements, hypotheses and reading limits in the source references. Their deeper proofs are imported within those reading limits. The differential-independence argument and the neighbourhood application below are locally supplied; this composite item is not marked as an imported theorem. No characteristic-zero or dominance hypothesis is used.

## Proof

The imported premises are exactly the Stacks results in [F1] and [F3], with individual URLs, locators, statements, hypotheses and reading limits in the source references. Their deeper proofs are imported within those reading limits. The differential-independence argument and the neighbourhood application below are locally supplied; this composite item is not marked as an imported theorem. No characteristic-zero or dominance hypothesis is used.


**Given:** The morphism, affine local functions, zero-locus point and independent differential classes in the Statement.

1.1 By [F1], applied to $f|_W$, take an affine open neighbourhood $U=\operatorname{Spec}C\subseteq W$ of $x$ mapping into an affine base neighbourhood $\operatorname{Spec}A$, with a standard smooth presentation $C=A[t_1,\ldots,t_n]/(g_1,\ldots,g_c)$ with a unit $c\times c$ defining Jacobian minor. By [F4], $i^{-1}(U)=\operatorname{Spec}(C/IC)$ is an open neighbourhood of $x$ in $Z$. Restrict the $a_j$ to this chart and lift them to polynomials $b_j\in A[t_1,\ldots,t_n]$. The original Jacobian rows $\mathrm dg_i(x)$ are independent in $\kappa(x)^n$. By [F2], the quotient of this vector space by their span is $\Omega_{X/S}(x)$; hence the rows $\mathrm dg_i(x),\mathrm db_j(x)$ together are independent. Indeed, any relation projects to a relation among the independent $\mathrm da_j(x)$, forcing their coefficients to vanish, after which the original invertible minor forces the remaining coefficients to vanish. Finite Gaussian elimination on these $c+r$ independent rows provides $c+r$ pivot columns, and their square minor $\Delta$ is nonzero in $\kappa(x)$. Equivalently, one may choose a nonzero pivot, eliminate its column in the other rows, and repeat; each step leaves an independent shorter row family, and the resulting pivot product is a nonzero maximal minor. Set $N=\operatorname{Spec}((C/IC)_\Delta)$, with presentation $(A[t_1,\ldots,t_n]/(g_1,\ldots,g_c,b_1,\ldots,b_r))_\Delta$ and unit defining minor. By [F4], this is the principal open $D_{C/IC}(\bar\Delta)$ in $i^{-1}(U)$, hence is open in $Z$; it contains $x$ since $\Delta(x)\ne0$. By [F1], it is standard smooth of differential rank $n-c-r$. The original chart has $n-c=d$ by [F1], [F3] and the given relative dimension, so $N\to S$ is smooth of pure relative dimension $d-r$. If $c=0$, the original defining minor is the empty determinant $1$; if $r=0$, no equations are added. When $c+r=0$, the augmented minor is also $1$. The same construction applies in these cases. [F1, F2, F3, F4, given, algebra]

2.1 By [F3], the image of $N\to S$ is open and contains $s$ because $x\in N$. Under any base change $S'\to S$ this morphism remains smooth and open. Its standard smooth charts retain the same numbers of variables and equations by [F1], so [F3] gives the same relative dimension $d-r$ wherever the base-changed source is nonempty. In particular its open image contains the image of every point over $x$; if there are no such points this last assertion is vacuous. The proof used only the indicated Jacobian minors and imported results over arbitrary rings, so it imposes no characteristic restriction. [F1, F3, step 1.1] ∎
