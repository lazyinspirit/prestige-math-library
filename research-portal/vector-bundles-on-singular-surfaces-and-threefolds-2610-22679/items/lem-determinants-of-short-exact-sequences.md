---
id: lem-determinants-of-short-exact-sequences
kind: lemma
title: Determinants and exact sequences
status: published
domain: mathematics
deps:
  - def-exterior-determinant-bundles
  - lem-surjection-kernel-bundle
  - math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-exact-sequence-sheaves
  - math:def-kernel-cokernel-image-sheaves
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
  - math:thm-sheafification-universal-property
  - math:def-sheaf-on-topological-space
  - math:def-picard-group-scheme
  - math:def-axiom-of-choice
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:lem-exterior-algebra-basis-monomials
dependency_roles:
  def-exterior-determinant-bundles: mathematical-premise
  lem-surjection-kernel-bundle: mathematical-premise
  math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-exact-sequence-sheaves: mathematical-premise
  math:def-kernel-cokernel-image-sheaves: mathematical-premise
  math:def-sheaf-tensor-product: mathematical-premise
  math:thm-universal-property-of-module-tensor-products: mathematical-premise
  math:thm-sheafification-universal-property: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-picard-group-scheme: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:lem-exterior-algebra-basis-monomials: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
formulation_deps:
  - def-exterior-determinant-bundles
  - math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-exact-sequence-sheaves
  - math:def-kernel-cokernel-image-sheaves
  - math:def-sheaf-tensor-product
  - math:def-picard-group-scheme
  - math:def-axiom-of-choice
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-locally-free-sheaf-finite-rank
argument_deps:
  - def-exterior-determinant-bundles
  - lem-surjection-kernel-bundle
  - math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-exact-sequence-sheaves
  - math:def-kernel-cokernel-image-sheaves
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
  - math:thm-sheafification-universal-property
  - math:def-sheaf-on-topological-space
  - math:def-picard-group-scheme
  - math:def-axiom-of-choice
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-locally-free-sheaf-finite-rank
  - math:lem-exterior-algebra-basis-monomials
---

## Statement
Let $X$ be a scheme and let $0\to E'\xrightarrow{i}E\xrightarrow{p}E''\to0$ be a short exact sequence of vector bundles, meaning finite locally free $\mathcal O_X$-modules. There is a canonical isomorphism of line bundles

$$\det E'\otimes\det E''\xrightarrow{\sim}\det E.$$

It is natural for isomorphisms of short exact sequences and compatible with pullback along scheme morphisms. Ranks may be locally constant rather than constant: the determinant is defined on each open rank locus by the corresponding top exterior power.

Assume the Axiom of Choice and suppose $X$ is locally Noetherian. Then determinant induces a group homomorphism $K^0(X)\to\operatorname{Pic}(X)$ from the vector-bundle Grothendieck group to the Picard group, given by $[E]-[F]\mapsto[\det E\otimes(\det F)^{-1}]$. Here $(\det F)^{-1}$ is the tensor-inverse line bundle, and Picard group addition is tensor product. This assertion concerns $K^0$, not the coherent-sheaf group $K_0$.

## Statement references

[[def-exterior-determinant-bundles]]

[[math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]

[[math:def-scheme]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-morphism-of-schemes]]

[[math:def-exact-sequence-sheaves]]

[[math:def-sheaf-tensor-product]]

[[math:def-picard-group-scheme]]

[[math:def-axiom-of-choice]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

## Facts & Assumptions

**Given:** A scheme $X$ and a short exact sequence of vector bundles as in the statement; for the Grothendieck-group assertion, also assume the Axiom of Choice and that $X$ is locally Noetherian.

**Goal:** Construct the canonical determinant isomorphism, prove its functorial properties, and show that determinant respects the defining relations of $K^0(X)$.

[F1] The surjection $E\to E''$ splits locally. On a splitting neighbourhood, $E\cong E'\oplus E''$; ranks add there. [[lem-surjection-kernel-bundle]]

[F2] Exterior powers and determinant of a constant-rank bundle are defined by sheafified exterior algebra. For a commutative unital ring $R$ and a finite free $R$-module $M$ with ordered basis $e_1,\ldots,e_r$, the increasing wedges $e_{j_1}\wedge\cdots\wedge e_{j_q}$, with $1\leq j_1<\cdots<j_q\leq r$, form an $R$-basis of $\Lambda_R^q M$ for every integer $q\geq0$. The empty wedge is the degree-zero basis element; in particular the top wedge generates a free rank-one module, and wedges above the rank vanish. Exterior powers commute naturally with pullback. The Picard group consists of line-bundle isomorphism classes under tensor product. [[def-exterior-determinant-bundles]] [[math:lem-exterior-algebra-basis-monomials]] [[math:def-picard-group-scheme]]

[F3] Under the stated choice and locally Noetherian hypotheses, $K^0(X)$ is generated by isomorphism classes of vector bundles with the relations $[E]=[E']+[E'']$ for short exact sequences. [[math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]] Here Choice means that every family of nonempty sets has a choice function, and locally Noetherian means admitting an affine open cover by spectra of Noetherian rings. Choice is retained solely as the stated hypothesis of this group supplier when invoking its presentation of $K^0(X)$; the local determinant construction below makes no arbitrary family of choices. [[math:def-axiom-of-choice]] [[math:def-locally-noetherian-and-noetherian-scheme]]

[F4] The sheaf tensor product is the sheafification of the presheaf $U\mapsto M(U)\otimes_{\mathcal O_X(U)}N(U)$. A balanced pairing of section modules factors uniquely through their module tensor product; if the pairing is linear in each argument, the induced map is $\mathcal O_X(U)$-linear, as checked on elementary tensors. Restriction-compatible presheaf maps to a sheaf extend uniquely to its sheafification. [[math:def-sheaf-tensor-product]] [[math:thm-universal-property-of-module-tensor-products]] [[math:thm-sheafification-universal-property]]

[F5] A scheme is a locally ringed space locally isomorphic to affine schemes. A scheme morphism is a morphism of locally ringed spaces. Module pullback and its local free-basis description, together with exterior-power base change, are those in the determinant construction. [[math:def-scheme]] [[math:def-morphism-of-schemes]] [[def-exterior-determinant-bundles]]

[F6] Compatible sections of a sheaf on an open cover glue uniquely, including the empty cover of the empty set. Thus local module maps agreeing on overlaps glue: apply this axiom to the images of each section; linearity and restriction compatibility can be checked on that cover. [[math:def-sheaf-on-topological-space]]

[F7] Exactness for module sheaves means image sheaf equals kernel sheaf at each term. Kernels are computed on section modules. In our short exact sequence, $i$ identifies $E'$ with $\ker p$, and $p$ is a surjection of sheaves. [[math:def-exact-sequence-sheaves]] [[math:def-kernel-cokernel-image-sheaves]]

[F8] A finite locally free sheaf has a well-defined rank function $r:X\to\mathbb N$, independent of the local trivialization, and this function is locally constant. Restriction to an open subscheme preserves that rank function. [[math:def-locally-free-sheaf-finite-rank]]

## Proof

**Proof technique:** direct; construct the map locally by wedging lifts and use the exact-sequence presentation.

1.1 By [F8], the rank of a vector bundle is well-defined and locally constant. Its rank loci are disjoint open subsets covering $X$. Define its determinant separately on these loci by [F2]; the sheaf on an open $W$ has the product of the section modules of these pieces on the intersections of $W$ with the rank loci, with componentwise restrictions and scalar action. The sheaf axiom [F6] verifies this construction and its unique identifications with the pieces. The empty wedge defines the determinant of a rank-zero bundle as $\mathcal O$. [given, F2, F6, F8, construct]

1.2 Work on an open set where the sequence splits and $E',E''$ are free of ranks $a,b$. For local sections $e'_1,\ldots,e'_a$ and $e''_1,\ldots,e''_b$, use a splitting to choose lifts $\widetilde e''_j$ linearly in the latter and send $(e'_1\wedge\cdots\wedge e'_a)\otimes(e''_1\wedge\cdots\wedge e''_b)$ to $i(e'_1)\wedge\cdots\wedge i(e'_a)\wedge\widetilde e''_1\wedge\cdots\wedge\widetilde e''_b$. This formula is multilinear and alternating in each block, so the exterior-algebra quotient in [F2] gives a bilinear pairing of the two top exterior powers. By [F4] it induces a linear map from their sectionwise module tensor product. These formulas commute with restriction, and the sheafification universal property in [F4] gives a morphism from the sheaf tensor product. If a lift changes, its difference lies in $\ker p=i(E')$ by [F7]; every new term has $a+1$ factors from $E'$ and vanishes by [F2]. Thus the map is independent of the chosen lifts, including when either rank is zero. [F1, F2, F4, F7, construct]

2.1 With bases of $E'$ and $E''$ and lifts supplied by a splitting, the concatenated vectors form a basis of $E$. On such a free chart, the wedge bases in [F2] commute with restrictions, so the exterior-power presheaves are already free sheaves there and their sheafifications preserve these bases by [F4]. The map of step 1.2 sends the generator formed from the two top wedges to the top wedge of that basis, so it is an isomorphism. Its lift-independent formula agrees on overlaps; hence [F6] glues the local maps and their inverses to the asserted global isomorphism. The formula is preserved by isomorphisms of short exact sequences. Pulling it back gives the same wedge formula for the pulled-back sequence, which remains locally split; the exterior-power pullback isomorphisms therefore identify the two determinant maps. Here the tensor-pullback comparison for the two line bundles is constructed locally by sending the pulled-back tensor of their frame generators to the tensor of their pulled-back generators. This is an isomorphism of free rank-one modules; scalar extension carries a product of frame-change units to the product of their images, so these comparisons agree on overlaps and glue by [F6]. No exactness of arbitrary pullback is assumed: the pulled-back splitting itself proves exactness of this sequence. [F1, F2, F4, F5, F6, F7, step 1.2, construct]

3.1 Isomorphic bundles have isomorphic determinants by functoriality. Step 2.1 shows that every exact-sequence relation in [F3] maps to the identity relation in $\operatorname{Pic}(X)$. Consequently the assignment $[E]\mapsto[\det E]$ descends from the free abelian group on bundle classes to a homomorphism on $K^0(X)$. [F2, F3, step 2.1, construct]

4.1 Every element of $K^0(X)$ is a difference $[E]-[F]$: collect positive and negative terms into finite direct sums, using the split exact-sequence relations, and use the zero bundle for an empty sum. The homomorphism of step 3.1 therefore has the displayed formula, with inverse in the Picard group represented by the tensor-inverse line bundle. This completes the proof. [F2, F3, step 3.1, algebra] ∎
