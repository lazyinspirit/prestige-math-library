---
title: Gysin purity for a smooth closed pair
status: draft
research_item: prop-smooth-pair-gysin-input
dependency_level: 14
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)
- [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)
- [lem-author-9415fc97ee80-purity-shift-index](item-lem-author-9415fc97ee80-purity-shift-index)
- [lem-author-9415fc97ee80-compatible-relative-transport](item-lem-author-9415fc97ee80-compatible-relative-transport)
- [lem-author-9415fc97ee80-relative-empty-split-cases](item-lem-author-9415fc97ee80-relative-empty-split-cases)
- [def-supported-complex-indexing](item-def-supported-complex-indexing)


## Statement
Let $k$ be a perfect field and let $X$ be in $\mathrm{Sm}/k$, meaning a smooth separated scheme of finite type over $k$. Let $i:Z\hookrightarrow X$ be a smooth closed subscheme of pure codimension $c\geq0$, and put $U=X\setminus Z$. In the classical category $DM^{\mathrm{eff},-}_{\mathrm{Nis}}(k,\mathbb Z)$ there is the distinguished Gysin triangle
$$M(U)\longrightarrow M(X)\xrightarrow{\gamma}M(Z)(c)[2c]\longrightarrow M(U)[1].$$
Here $M(W)$ is the source motive of $W$, represented by $\mathbb Z_{\mathrm{tr}}(W)$ and isomorphic in this category to $C_*\mathbb Z_{\mathrm{tr}}(W)$; $(c)$ is the Tate twist by tensoring with $\mathbb Z(c)$, and $[2c]$ is cohomological translation. The first arrow is induced by the open immersion, and $\gamma$ is the source's Gysin map.

Equivalently one may take the relative motive of the pair, a cofiber of $M(U)\to M(X)$, to be $M(Z)(c)[2c]$. Any separately chosen cone triangle for that first arrow admits a compatible isomorphism of its third object with this one; a unique or functorial choice of that cone is not asserted from triangulated axioms alone.

This is a classical smooth-pair input, not a purity statement for a singular curve. A separately supplied compatible comparison of theories on both $X$ and $U$ suffices, by the transport construction, to identify the article's support complex; a direct compatible comparison of support objects is another possible input. Computing its cohomological twist shift further requires the relevant coefficient representability and twist comparison in the weights used. Under precisely those premises the formal shift is $(a,j)\mapsto(a-2c,j-c)$, not $(a+2c,j-c)$. No negative-weight convention or comparison outside its given scope is silently introduced.

## Facts & Assumptions

**Given:** The perfect field, the two smooth schemes, closed immersion and pure codimension in the Statement; the ambient workflow permits AC. Additional application premises are as explicitly stated.

**Goal:** Record the exact imported triangle and give its rigorous formal interpretation without claiming a local proof of Gysin purity.

[F1] MVW Theorem 15.15 supplies the displayed triangle for precisely this smooth pair. The source's category and $M(W)\cong C_*\mathbb Z_{\mathrm{tr}}(W)$ notation are fixed in Definition 14.1 and Lemma 14.4. These are explicit external inputs in the source records.

[F2] A relative cone has the quotient model only when the chosen complex map is termwise monomorphic; it is a cofiber construction, without that extra condition in general. [lem-author-9415fc97ee80-relative-cone-quotient-model](item-lem-author-9415fc97ee80-relative-cone-quotient-model)

[F3] Contravariant Hom reverses this triangle to the cohomological restriction long exact sequence; an enhanced derived Hom identifies the relative object with the fiber of restriction only when that enhancement is supplied. [lem-author-9415fc97ee80-contravariant-relative-hom](item-lem-author-9415fc97ee80-contravariant-relative-hom)

[F4] A supplied twist comparison gives the cohomological shift $a-2c$ and weight $j-c$ with its exact weight bounds. [lem-author-9415fc97ee80-purity-shift-index](item-lem-author-9415fc97ee80-purity-shift-index)

[F5] Compatible isomorphisms on the two initial objects transport cone triangles, and compatible derived comparisons on $X,U$ transport the support fiber. [lem-author-9415fc97ee80-compatible-relative-transport](item-lem-author-9415fc97ee80-compatible-relative-transport), [def-supported-complex-indexing](item-def-supported-complex-indexing)

[F6] Identity, zero and split-pair maps have the formal relative/support special cases already computed, independently of Gysin purity. [lem-author-9415fc97ee80-relative-empty-split-cases](item-lem-author-9415fc97ee80-relative-empty-split-cases)

## External input
Import the whole smooth-pair Gysin theorem in [F1]. The five local prerequisites establish setup, covariance, indexing, transport and boundary cases. They do not reconstruct the normal-bundle proof, the affine-space Gysin normalization, or Exercise 15.14. The source's displayed proof invokes those established ingredients; this authoring assistance does not claim to have filled their foundational proofs.

## Justification of the formal reformulation

1.1 Apply the imported [F1] to the stated perfect-field smooth pair. Its third term, with its map from $M(X)$ and connecting map, is a specified cofiber in the triangulated sense. If another relative cone was chosen for the same first arrow, [F5] applied with identities on $M(U)$ and $M(X)$ gives a compatible isomorphism to this third term. This establishes the relative-motive reformulation without asserting uniqueness of that isomorphism. [F1, F5, given]

2.1 In a complex model, [F2] explains when the source's quotient notation for relative motives is valid. Apply [F3] to the distinguished triangle of step 1.1 to obtain its contravariant Hom long exact sequence. If the application additionally supplies the enhanced mapping-object premise, its support complex is the homotopy fiber of restriction. If a second theory has a compatible derived comparison on both $X$ and $U$, [F5] transports that fiber to the second theory's support fiber. These are applications of explicit premises, not automatic identifications with the article's motivic complex. [F2, F3, F5, step 1.1]

3.1 If coefficient representability and the twist identification of [F4] are also supplied, apply it with $A=M(Z)$. The relative Hom group in degree $a$ becomes the coefficient group on $Z$ in degree $a-2c$ and weight $j-c$. Only the supplied weight range is used. For empty or split support cases satisfying the independent functor premises of [F6], its direct calculations give the indicated formal boundary cases without invoking an extension of purity. [F4, F6, step 1.1, step 2.1] ∎

## Scope and application limit
Both smoothness hypotheses matter. In particular a possibly singular integral curve inside a smooth threefold is not covered by this input merely because its embedding has pure codimension. Nor does the source's Sm/k statement automatically extend to every qcqs scheme, a nonseparated smooth scheme, or an arbitrary smooth locus without checking the actual finite-type pair to which it is applied. The article's smooth motivic comparison and any twist/cancellation comparison retain their own authoring and scope obligations; this target supplies neither by renaming the classical cohomology theory.
