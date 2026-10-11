---
id: lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree
kind: lemma
title: "Indecomposable labels, characters and filtration ranks agree after real scalar extension"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-real-type-a-soergel-category-and-scalar-extension, lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support, lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds, thm-the-type-a-soergel-hom-formula, lem-type-a-support-filtration-multiplicities-are-intrinsic, lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations, lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis, thm-kazhdan-lusztig-basis-multiplication-formula, lem-type-a-character-recursion-under-simple-soergel-tensoring, lem-type-a-top-support-layers-are-controlled-by-reflection-localization, def-type-a-standard-graph-bimodules-support-filtrations-and-character, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 3.5 (the classification of indecomposables, the characters and Soergel's Hom formula, Theorem 3.6)"
    - title: "Soergel, Kazhdan-Lusztig-Polynome und unzerlegbare Bimoduln ueber Polynomringen (arXiv:math/0403496, published J. Inst. Math. Jussieu 6 (2007) 501-525)"
      url: "https://arxiv.org/pdf/math/0403496"
      locator: "Satz 6.14: existence, classification by W x Z, self-duality and stability under direct summands, proved for an arbitrary infinite field of characteristic not two; Theorem 5.15 (the Hom formula)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Theoreme 1.5 and Lemme 1.7 (classification and the two elementary structure results), Proposition 1.9 (characters) and Proposition 1.13 (hom spaces)"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** The rational and real bimodule Soergel categories, scalar extension $M^R=M\otimes_{\mathbb Q}\mathbb R$, normalized top-support labels $B_x$, and the convention $M(d)_i=M_{i+d}$.

[F1] Bimodule classification, finite Krull-Schmidt decompositions and the local degree-zero endomorphism algebra with residue field the base field are proved intrinsically from top-support Hom lifting, independently of any diagrammatic equivalence ([[lem-indecomposable-type-a-soergel-bimodules-are-classified-by-top-support]]).

[F2] Normalized $B_x$ is self-dual, with one-dimensional bottom and top reductions in degrees $-\ell(x),\ell(x)$; words have perfect invariant trace forms ([[lem-normalized-type-a-soergel-bimodules-are-self-dual-and-have-length-degree-bounds]]). Canonical support layers and their image equalities and right splittings are proved locally ([[lem-type-a-top-support-layers-are-controlled-by-reflection-localization]], [[lem-type-a-support-filtration-multiplicities-are-intrinsic]]).

[F3] The graded Hom formula is locally proved for flagged carriers and arbitrary Soergel summands ([[thm-the-type-a-soergel-hom-formula]]). In the Hodge convention a generator of degree $a$ contributes $v^a$ to this Hom rank, so a polynomial in nonnegative powers entails no negative-degree maps.

[F4] The generator recursion $h_\Delta(MB_s)=h_\Delta(M)\underline H_s$ and its $\nabla$ version follow from the independently proved support flags ([[lem-type-a-character-recursion-under-simple-soergel-tensoring]], [[lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations]]). The standard trace basis is orthonormal; $(\underline H_y,\underline H_z)$ has no negative powers and constant term $\delta_{yz}$ ([[lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis]]).

[F5] Kazhdan-Lusztig triangularity gives coefficients $p_{y,x}\in v\mathbb Z[v]$ for $y<x$, and the simple-reflection multiplication formula gives the ascent and descent character products ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], [[thm-kazhdan-lusztig-basis-multiplication-formula]]).



## Statement

Let $B_w$ be the rational indecomposable type-A Soergel bimodule and let $B_w^R$ be its real scalar extension. (1) $B_w^R$ is indecomposable; its finite-dimensional degree-zero endomorphism algebra is local with residue field $\mathbb R$. If $S(w)$ holds, its degree-zero endomorphism algebra is $\mathbb R$, but no rank-one assertion for the full graded endomorphism module is made. (2) Real extension preserves the labels and shifts of all finite Krull-Schmidt decompositions of rational Soergel bimodules, and every real indecomposable is a unique $B_w^R(d)$. (3) $\Delta$/$\nabla$ support-filtration multiplicities, characters, reduction by positive-degree right polynomials, and Hom spaces commute with scalar extension; thus character identities over $\mathbb R$ descend to $\mathbb Q$. (4) If $xs>x$ and $S(y)$ holds for all $y<xs$, then $B_xB_s=B_{xs}\oplus\bigoplus_{y<xs}B_y^{a_y}$ with $a_y$ nonnegative integers and no grading shifts; the top summand occurs once. If $xs<x$ and $S(x)$ holds, then $B_xB_s=B_x(1)\oplus B_x(-1)$. All assertions concern the normalized self-dual indecomposables.



## Proof

1.1 For finite right-free rational $M,N$, a homogeneous bimodule map is determined by the images of a finite right basis. In a fixed degree the finitely many left-generator commutation relations are finite linear equations with rational coefficients. Their kernel commutes with the flat field extension to $\mathbb R$. Thus every homogeneous Hom space, and its composition, commutes with extension. The support cut on a specified graph union is the common kernel of its finitely generated graph ideal acting on the carrier: the carrier is right-free and generically a sum of reduced graph modules, so the relations hold before localization by torsion-freeness. These kernels commute with flat extension as well. Therefore the canonical support submodules, quotients, graph generator degrees and multiplicities commute with extension. Right reduction commutes with it by tensor associativity and the augmentation map. [given, F2, F3, algebra]

2.1 Let $A=\operatorname{End}^0(B_x)$ over $\mathbb Q$. By [F1] it is finite-dimensional local with residue $\mathbb Q$, and its maximal ideal $J$ is nilpotent by the finite-algebra proof there. Step 1.1 gives $\operatorname{End}^0(B_x^R)=A\otimes_{\mathbb Q}\mathbb R$. The ideal $J\otimes\mathbb R$ is nilpotent and its quotient is $\mathbb R$; an element with nonzero residue is invertible by a finite geometric series after subtracting its scalar part. Hence this algebra is local with residue $\mathbb R$, and $B_x^R$ is indecomposable. Its top support layer is unchanged by step 1.1, so the real classification [F1] identifies it with the same normalized real label. Every real word is the extension of its rational word and its rational finite decomposition; the real classification and uniqueness imply that all real indecomposables and all real decompositions are the corresponding labels and shifts. [F1, step 1.1, algebra]

3.1 Duality exchanges the $\Delta$ and $\nabla$ flags: dualize their right-split canonical layer sequences, which reverses order and the homogeneous degrees of their graph generators. A $\Delta_y(d)$ layer dualizes to $\nabla_y(-d)$. Therefore normalized self-duality gives $h_\Delta(B_y)=h_\nabla(B_y)$ by the weight conventions. The same is true for $B_xB_s$: an invariant isomorphism $B_x\to DB_x$ can be extended by the induced rank-one form construction in [F2], whose mixed-basis matrix has determinant one and yields an invariant isomorphism $B_xB_s\to D(B_xB_s)$. If $S(y)$ holds, both characters of $B_y$ are consequently $\underline H_y$. By [F3],[F4], its endomorphism Hom rank has no negative powers and constant term one. Since the polynomial ring has degree-zero part $\mathbb R$ and no negative degrees, its degree-zero endomorphism algebra is then exactly $\mathbb R$. [F2, F3, F4, step 2.1]

3.2 Step 1.1 proves the support multiplicity, character, Hom and reduction identities in (3). These characters have integer Laurent coefficients recording finite homogeneous graph bases; equality over the real category therefore gives the same integer coefficient equality over the rational category. No injectivity assertion about an unrelated extension of the coefficient ring is needed. [step 1.1, step 2.1]

3.3 For $xs>x$, assume $S(y)$ for every $y<xs$, including $x$. The tensor $M=B_xB_s$ is a summand of the reduced word for $xs$. Its top layer is the word's unique $\Delta_{xs}$, because the reduced word for $x$ decomposes as $B_x$ and lower-support summands, whose tensor with $B_s$ cannot reach length $\ell(xs)$. By [F1] its unique top summand is therefore $B_{xs}$ unshifted and once; the other summands are $B_y(d)$ with $y<xs$. This top-layer argument makes no substitution of the unknown character of $B_{xs}$. [F1, F2, F4, step 2.1]

4.1 The character of $M$ is $\underline H_x\underline H_s$, and its standard expansion lies in $\mathbb Z[v]$: the only $v^{-1}$ in simple multiplication multiplies a strictly lower coefficient already divisible by $v$, while the top coefficient is on an ascent. For every lower $y$, the two Hom ranks $\operatorname{Hom}(B_y,M)$ and $\operatorname{Hom}(M,B_y)$ are the standard pairings of this polynomial character with $\underline H_y$, using self-duality from step 3.1. Hence they have no negative powers, and both Hom spaces have no negative-degree maps. A summand $B_y(d)$ with $d>0$ gives a negative-degree inclusion from unshifted $B_y$, and one with $d<0$ gives a negative-degree projection to it, by the convention $M(d)_i=M_{i+d}$. Both are impossible. Thus every lower summand is unshifted, proving the ascent statement with its actual nonnegative multiplicities $a_y$. The character of the top summand is not yet required to equal $\underline H_{xs}$, and no equality $a_y=\mu(y,x)$ is inferred. [F3, F4, F5, step 3.1, step 3.3]

4.2 For $xs<x$ and $S(x)$, the support of $M=B_xB_s$ stays at most $x$: take a reduced word for $x$ ending in $s$; toggling its last letter shows that the graphs $y,ys$ for $y\le x$ stay in this Bruhat interval. Its character is $(v+v^{-1})\underline H_x$ by [F4],[F5], so its top $x$ layer has the two shifts $\Delta_x(1),\Delta_x(-1)$. The maximal-layer splitting proof of [F1] splits off exactly $B_x(1)$ and $B_x(-1)$. Under $S(x)$ their characters already sum to the whole character of $M$. Any remaining nonzero summand would have a nonzero graph layer with a positive integral multiplicity, contradicting its zero character. Thus $M=B_x(1)\oplus B_x(-1)$ with no other summands, without assuming $S$ for any other label. [F1, F4, F5, step 3.1]

5.1 The local algebra and real indecomposability are step 2.1, and the degree-zero scalar assertion under $S(x)$ is step 3.1. Step 2.1 proves classification after extension, step 3.2 proves all base-change identities, and steps 3.3–7.1 prove the two decompositions with their exact stated hypotheses. Normalization and self-duality come from [F2], proved before the character comparisons. [F2, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2] ∎

## Remarks

The ascent multiplicities are the actual summand counts. Their later identification with Kazhdan-Lusztig multiplication coefficients requires the next character theorem; it is not part of this pre-induction comparison proof.
