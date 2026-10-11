---
id: thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars
kind: theorem
title: "Equivariant constructible Ext is degreewise finite and compatible with characteristic zero scalars"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 23
deps: [thm-the-canonical-pair-is-a-t-structure, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-complex-algebraic-stratifications-have-finite-conical-cochain-models, def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-axiom-of-choice, def-derived-category-of-an-abelian-category,
       def-derived-hom-in-the-bounded-setting, def-direct-image-sheaf,
       def-inverse-image-presheaf-and-sheaf, def-sheaf-hom,
       def-sheaf-on-topological-space, def-sheaf-tensor-product,
       def-equivariant-constructible-derived-category-for-complex-algebraic-varieties,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap,
       lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative,
       lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph Bernstein and Valery Lunts, Equivariant Sheaves and Functors, Lecture Notes in Mathematics 1578, Part I (Derived category and functors)"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
      locator: "2.7.1-2.7.2 and 3.1 (finite approximations and their interval bounds), 2.8 and 3.6 (constructibility and its preservation by the functors), 5.1 (equivariant perverse sheaves)"
    - title: "A. A. Beilinson, J. Bernstein, P. Deligne, Faisceaux pervers, Asterisque 100 (1982)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "2.1 (the ordinary perverse input)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$G=\prod_i\operatorname{GL}_{n_i}(\mathbb C)$ be a finite product of complex
general linear groups acting algebraically on a separated finite-type complex
algebraic variety $X$, and let $k$ be a field of characteristic zero. For
bounded algebraically constructible $A,B$ in the equivariant category
$D^b_{G,c}(X;k)$ of
[[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]]:

1. every $\operatorname{Ext}_G^m(A,B)=\operatorname{Hom}(A,B[m])$ is
   finite-dimensional over $k$ and vanishes for all sufficiently negative $m$;
2. for every field extension $k\to K$ of characteristic-zero fields, the
   canonical map
   $\operatorname{Ext}_G^m(A,B)\otimes_kK\to\operatorname{Ext}_G^m(A_K,B_K)$
   is an isomorphism, natural in $A$ and $B$ and compatible with shifts and
   with Yoneda composition;
3. coefficient extension commutes with the coherent six operations, normalized
   Verdier duality, perverse truncation and intermediate extension on these
   bounded constructible objects.

The total Ext space $\bigoplus_m\operatorname{Ext}_G^m(A,B)$ need not be
finite-dimensional, and simplicity is not asserted to be preserved under
coefficient extension.

## Facts & Assumptions

**Given:** The group $G$ and variety $X$ with the equivariant category $D^b_{G,c}(X;k)$ over the characteristic-zero field $k$; the field extension $k\to K$; the Axiom of Choice [[def-axiom-of-choice]]; the conventions of [[def-derived-category-of-an-abelian-category]], [[def-derived-hom-in-the-bounded-setting]], [[def-sheaf-tensor-product]] and [[def-sheaf-hom]].

[F1] The finite Stiefel comparison ([[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]], [[lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap]]): for $A\le a$ and $B\ge b$ and $m\le b+r_N-a$ there is a natural isomorphism $\operatorname{Hom}_G(A,B[m])\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$; the frame spaces have the cohomology gap $H^j(U_N;k)=0$ for $1\le j\le r_N$, and for a fixed bounded amplitude one can choose $N$ with $r_N$ larger than any prescribed finite bound.

[F2] Finite constructible models ([[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]], [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]], which globalizes the incidence models by finite affine-open descent): bounded algebraically constructible complexes on separated finite-type complex varieties have bounded finite-dimensional cochain models for ordinary Hom, and the models commute with every coefficient field extension.

[F3] The equivariant operations and perverse structure ([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]], [[thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative]]): $D^b_{G,c}$ carries the coherent equivariant six operations, normalized Verdier duality, the middle-perverse t-structure with its truncations, and the intermediate extension $j_{!*}$ constructed as the image ${}^pH^0j_!\to{}^pH^0j_*$.

[F4] Coefficient extension ([[def-sheaf-tensor-product]]): for a field extension $k\to K$ the functor $-\otimes_kK$ is exact, termwise, and commutes with inverse image, with finite tensor products and with finite-dimensional duals; on the fixed finite models of [F2] it is a termwise base change of finite-dimensional vector spaces.

[F5] The canonical derived t-structure and its precise Hom vanishing bound are proved by [[thm-the-canonical-pair-is-a-t-structure]]: if $A\le a$ and $B\ge b$, then $\operatorname{Hom}(A,B[m])=0$ for $m<b-a$.

[A1] AC is used through the finite-resolution comparison [F1] and the constructible models [F2]; the finite-dimensional Hom, tensor and truncation comparisons themselves are choice-free ([[def-axiom-of-choice]]).

## Proof

1.1 **Finiteness and vanishing.** Let $A,B$ be bounded constructible with $A\le a$ and $B\ge b$, fix $m$, and let $I$ be an ordinary cohomological interval containing the amplitudes of $A$ and of $B[m]$. Choose $N_i\ge n_i+1$ with $r_N\ge\operatorname{length}(I)$; such a choice is possible because $r_N=2\min_i(N_i-n_i)$ grows without bound with the $N_i$. By [F1] there is a natural isomorphism $\operatorname{Ext}_G^m(A,B)\cong\operatorname{Hom}_{X_N}(Q_N(A),Q_N(B)[m])$, and by [F2] the right-hand side is computed by a bounded finite-dimensional cochain model on the finite-type variety $X_N$, hence is finite-dimensional. If $b-a>m$, then $B[m]\ge b-m>a$ and the ordinary t-structure orthogonality makes $\operatorname{Hom}_G(A,B[m])=0$ for $m<b-a$, so the groups vanish for sufficiently negative $m$. This proves claim 1. [F1, F2, F5]

1.2 **Scalar extension.** Coefficient extension on the simplicial category is termwise tensor with $K$, hence exact by [F4], and it commutes with inverse image and with the free-quotient descent used to define $Q_N$ because those constructions are given locally by exact inverse image along algebraic sections together with gluing. Therefore $Q_N(A_K)\cong(Q_N(A))_K$ and $Q_N(B_K)\cong(Q_N(B))_K$, and the same $N$ works over $k$ and over $K$: the fiber-gap vanishing of [F1] is field-independent and the finite models of [F2] commute with coefficient extension, so the interval bookkeeping is unchanged. In the resulting commutative square of Hom comparisons the vertical arrows are the full-faithfulness isomorphisms of [F1] over $k$ and over $K$, and the bottom horizontal arrow is the ordinary bounded constructible Hom coefficient-extension isomorphism of [F2]; hence the top horizontal arrow, which is the canonical map $\operatorname{Ext}_G^m(A,B)\otimes_kK\to\operatorname{Ext}_G^m(A_K,B_K)$, is an isomorphism. Naturality in $A$ and $B$ and compatibility with shifts hold because all maps are induced by functors and by the termwise base change, and compatibility with Yoneda composition holds because the comparisons are induced by functors and one sufficiently large $N$ serves the finitely many composable classes of a Yoneda product. No infinite totalization or infinite product of injectives is tensored with $K$. This proves claim 2. [F1, F2, F4]

2.1 **Commutation with the operations and the perverse structure.** The ordinary coherent six operations and normalized Verdier duality are determined on the finite constructible models of [F2], and the ordinary coefficient-extension clause of [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] shows that termwise exact coefficient extension commutes with inverse image, finite cochain pushforward, tensor, internal Hom and the finite-dimensional duality comparisons of [F3]; transporting through the finite-resolution comparisons as in step 1.2 gives the commutation with the equivariant operations and with normalized duality. For the perverse structure, exact coefficient extension preserves the upper support inequalities on ordinary restriction. It also preserves the lower inequalities, since it commutes with ordinary Verdier duality and that duality exchanges the two aisles. Hence it is perverse t-exact in the equivariant category detected by restriction [F3]. Applying it to a truncation triangle gives the unique truncation triangle over $K$, so perverse truncations and cohomology commute with extension. Its induced functor on the abelian hearts is exact and therefore preserves the image defining $j_{!*}$; the already proved commutation with $j_!$ and $Rj_*$ gives intermediate-extension commutation. This proves claim 3. Simplicity under extension is deliberately not asserted: a simple local system may fail to remain simple after extending scalars. [F2, F3, F4, step 1.2]

3.1 **Conclusion.** Steps 1.1, 1.2 and 2.1 prove claims 1 to 3. The proof is finite-stage: one sufficiently large resolution handles a fixed bounded object and its finitely many shifted targets, and no infinite-dimensional total Ext space is used. The total Ext space is not claimed to be finite, and simplicity is not claimed to be preserved. AC enters as recorded in [A1]. [given, A1, step 1.1, step 1.2, step 2.1] ∎

## Remarks

- The finiteness statement is degreewise; the total Ext space $\bigoplus_m\operatorname{Ext}^m_G(A,B)$ can be infinite-dimensional, as the point example of this page's companion shows.

- Coefficient extension is exact on the heart but need not preserve simplicity of objects; the theorem asserts only the Ext and operation compatibilities.
