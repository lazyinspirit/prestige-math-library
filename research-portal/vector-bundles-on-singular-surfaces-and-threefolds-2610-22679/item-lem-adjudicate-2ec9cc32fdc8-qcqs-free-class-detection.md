---
title: Free-class detection on qcqs perfect K-space models
status: published
research_item: lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection
dependency_level: 21
---

PDF p. 11: Lemma 5.3: qcqs perfect-class Chern arithmetic supplier

## Prerequisites

- [thm-author-3cde9692a7e9-plus-model-input](item-thm-author-3cde9692a7e9-plus-model-input)
- [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [lem-author-3cde9692a7e9-derived-chain-detection](item-lem-author-3cde9692a7e9-derived-chain-detection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds of the supplied constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. On its smooth qcqs Nisnevich site, let $\mathcal K$ be the specified local replacement of the perfect K-space presheaf, using the stalkwise local homotopy convention consistently. Put $\mathcal B=\operatorname{colim}_n BGL_n$ and let $\underline{\mathbb Z}$ be the sheaf of locally constant integers. The canonical stable free-class map
$$j:\underline{\mathbb Z}\times\mathcal B\longrightarrow\mathcal K$$
is a local integral-chain quasi-isomorphism, as is $j\times j$. It sends $(m,g)$ to the rank-$m$ translate of the reduced stable free-bundle class of $g$, and carries block sum and integer addition to actual K-space addition. The same construction on the rank-zero components gives a local integral-chain quasi-isomorphism from $\mathcal B$ to the rank-zero local K-space.

For any supplied coefficient complex $D$ and its derived Eilenberg target $K(D,n)$, precomposition with either comparison induces an equivalence of derived mapping spaces into that target. Thus identities between the actual natural operations, or between their two-variable Cartan expressions, are detected by these free-class comparisons. Composing an identity of local-model maps with the canonical perfect-space local-replacement unit gives that identity on every global perfect K-space. No claim that global perfect classes are differences of global vector bundles is needed. Here qcqs means quasi-compact and quasi-separated; neither normality, noetherianity, finite type nor finite dimension is assumed.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the stated compatible size bounds. These are inherited by the actual model, local comparisons and derived mapping constructions in [F1]–[F3] at steps 1.1–3.1.

[F1] [thm-author-3cde9692a7e9-plus-model-input](item-thm-author-3cde9692a7e9-plus-model-input) identifies the canonical local-ring free-class arrow with $\mathbb Z\times BGL(R)\to\mathbb Z\times BGL(R)^+\simeq\Omega^\infty K_{\rm Perf}(R)$, with $K_0(R)=\mathbb Z$, plus acyclicity and the block-sum/direct-sum comparison. Its local-ring statement has no noetherian or dimension hypothesis.

[F2] [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification) supplies the full natural affine comparison for every commutative unital ring, its local sheafification on the smooth qcqs site, and the canonical unit from global perfect K-spaces. [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) specifies that same local model, its rank-reduced universal operations and its actual derived coefficient targets over every qcqs field-scheme. Only local comparison and the unit are used, without asserting ordinary and hypercomplete descent agree.

[F3] The general first assertion of [lem-author-3cde9692a7e9-derived-chain-detection](item-lem-author-3cde9692a7e9-derived-chain-detection) applies to every local integral-chain quasi-isomorphism and every derived Eilenberg target. Its additional application to the older noetherian free-class lemma is not used to enlarge that lemma's scope.

## Proof
**Given:** $k,X$, the stated local model and coefficient targets, Choice and compatible site and universe bounds.

**Goal:** Establish the free-class detection needed in qcqs scope using the already supplied unrestricted local-ring and affine comparisons.

1.1 Form $j$ by the actual free-object/core map into K, subtracting the trivial rank of each finite free object, stabilizing, and translating by the locally constant rank. The canonical comparisons in [F1]–[F2] preserve these object maps and direct sum, so this construction gives the stated addition square. At each Nisnevich local stalk its map is precisely [F1]'s componentwise plus arrow. That arrow is an integral homology isomorphism. The identification uses [F2]'s full-space affine comparison on arbitrary rings, including components, rather than a noetherian version of the local free-class lemma. Hence the normalized free integral chain map is a quasi-isomorphism on all stalks, and therefore locally. On the rank-zero component the same argument applies to $BGL(R)\to BGL(R)^+$. [A1, F1, F2, construct]

2.1 Local stalks commute with finite products. On each stalk the normalized free integral chain complexes are nonnegative complexes of free abelian groups. The Eilenberg–Zilber comparison identifies chains on a product with the tensor product up to chain homotopy. Tensoring the two homology equivalences preserves quasi-isomorphisms here: their cones are acyclic bounded-below flat complexes, and the other factors are bounded-below flat complexes. Thus $j\times j$ is also a local integral-chain quasi-isomorphism. This proves precisely the hypothesis required by the general detection statement in [F3]. [F1, step 1.1]

3.1 Apply [F3] to the maps verified in steps 1.1–2.1. Precomposition is an equivalence on derived mapping spaces, hence injective on homotopy classes. A difference of two coefficient-valued operations is a map to the same additive Eilenberg target, so zero after precomposition implies zero before it. The construction and adjunction are natural and retain all descent morphisms. Apply derived evaluation and precompose with [F2]'s canonical perfect-space unit to obtain the corresponding identity on global perfect K-spaces. This does not require the unit to be an equivalence or assert hyperdescent of the original perfect-space presheaf. [A1, F2, F3, step 1.1, step 2.1] ∎

## Source scope and reading limits
The local plus input and the full affine/sheaf-model and general chain-detection arguments were read for this application. The cached author-hosted K-book Chapter IV PDF, SHA256 `9f1c1b8cccfe19d547c27dd04c61f198fd7a0cddd0018a0b84442b00fa575248`, was read at printed pp. 3–6, including Definitions 1.1.1, 1.4 and 1.4.1, Theorem 1.5, Lemma 1.6 and Construction 1.9(ii). The live primary URL was opened. Only plus acyclicity, its integral-homology consequence and the completion model are used from those pages; no new proof of plus existence or full Quillen–Waldhausen/BGT foundations is claimed. The full-space and model comparisons remain the precise existing supplied inputs. No library acceptance or independent review is asserted.
