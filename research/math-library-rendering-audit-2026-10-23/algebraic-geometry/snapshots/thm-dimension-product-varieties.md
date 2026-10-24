---
id: "thm-dimension-product-varieties"
kind: "theorem"
title: "Dimensions add under products"
deps: ["thm-dimension-equals-transcendence-degree", "lem-classical-variety-noetherian-components", "lem-dimension-finite-union-components", "lem-chain-dimension-open-cover", "thm-affine-variety-product-coordinate-ring", "def-product-varieties-universal-property", "cor-noether-normalisation-module-finiteness"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Milne Proposition 5.35, §5j"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Glue products of affine charts on their open overlaps by the universal property; separatedness follows from equalizers on product charts. Irreducible affine products have domain coordinate rings. Tensor two normalization polynomial subalgebras; their tensor injects over k and the full tensor is finite over it. Use trdeg and pass to component products. For reducible affine factors the evaluation proof gives the reduced tensor coordinate ring: a tensor vanishing at every pair is zero by linear independence and Nullstellensatz. Glue these chart products, then use the finitely many irreducible component products."
---

## Statement

Products of nonempty classical varieties exist in the category of classical varieties, and $\dim(X\times_kY)=\dim X+\dim Y$. If both factors are irreducible, their product is irreducible.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-equals-transcendence-degree]]).

[F2] Every classical variety is Noetherian and has finitely many irreducible components. Every open or closed subvariety has a finite affine cover. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-classical-variety-noetherian-components]]).

[F3] If a Noetherian space $T$ is a finite union of closed subsets $T_1,\ldots,T_m$, then $\dim T=\max_i\dim T_i$. For $m=0$ both sides are $-\infty$. ([[lem-dimension-finite-union-components]]).

[F4] For every open cover $T=\bigcup_{i\in I}U_i$ of a Noetherian space, $\dim T=\sup_i\dim U_i$, with empty supremum $-\infty$. ([[lem-chain-dimension-open-cover]]).

[F5] Let $X,Y$ be classical affine varieties over an algebraically closed field $k$. Then their affine product exists, is a classical affine variety, and has coordinate ring $$k[X\times_kY]\cong k[X]\otimes_k k[Y].$$ Its projections make it a product in the classical affine-variety category. ([[thm-affine-variety-product-coordinate-ring]]).

[F6] Fix the page's algebraically closed field $k$. Let $\mathcal C$ be the category whose objects are classical affine or projective algebraic sets over $k$ (including empty and reducible ones), and whose arrows are regular $k$-maps. Objects isomorphic to such sets are understood with their transported algebraic structure. No existence of products for arbitrary mixed affine/projective factors is asserted. For $X,Y$ in $\mathcal C$, a **constructed product** $X\times_kY$ is an object of $\mathcal C$ with morphisms $p:X\times_kY\to X$ and $q:X\times_kY\to Y$ such that, for every object $T$ of $\mathcal C$ and morphisms $f:T\to X$, $g:T\to Y$, there is a unique morphism $\langle f,g\rangle:T\to X\times_kY$ satisfying $p\langle f,g\rangle=f$ and $q\langle f,g\rangle=g$. Thus it is the categorical product of def-products-and-coproducts in $\mathcal C$. The underlying set is written as pairs when a construction supplies that identification. If either factor is empty, the product set is empty. A product with the one-point affine algebraic set has the evident projection isomorphism. When $X,Y$ are varieties, this definition is used only after a construction shows that the resulting nonempty algebraic set is irreducible. ([[def-product-varieties-universal-property]]).

[F7] Let $k$ be a field and let $A$ be a nonzero finite-type $k$-algebra. Then there exist algebraically independent elements $z_1,\ldots,z_d\in A$ such that $A$ is a module-finite algebra over the polynomial ring $k[z_1,\ldots,z_d]$. ([[cor-noether-normalisation-module-finiteness]]).

## Proof

1.1 First take affine algebraic sets with reduced coordinate rings $A,B$. Their set-theoretic product is cut out by the equations of the two factors in disjoint coordinates. Its ring is $A\otimes_kB$: to check that no additional vanishing relation occurs, write a tensor as $\sum_{i=1}^s a_i\otimes b_i$ with the $b_i$ linearly independent over $k$. If it vanishes at all pairs, fixing $x$ gives $\sum_i a_i(x)b_i=0$ as functions on $Y$, hence all $a_i(x)=0$. Varying $x$ gives all $a_i=0$. In particular the tensor ring is reduced. Polynomial maps into this product are exactly pairs of polynomial maps into the factors. For irreducible affine factors the supplied affine-product theorem also gives irreducibility. [F5]

2.1 Choose finite affine covers of the factors. Glue the affine products on $(U_i\cap U_j)\times(V_a\cap V_b)$, using their principal-open covers and the coordinate identifications from the first step. The cocycle identities are identities of pairs. More explicitly the sheaf consists of functions regular on these product charts; compatible local functions glue uniquely. The result has a finite affine cover and the pair of projections. Maps into it are uniquely pairs of maps into $X,Y$, checked on affine charts of their common inverse images. Its equalizer for two maps is the intersection of the two factor equalizers, hence is closed by separatedness of the factors. This extends the product universal property to all classical varieties, rather than assuming that the earlier restricted category already contains them. [F2, F6, step 1.1]

2.2 For irreducible affine factors choose normalization polynomial subrings $k[u_1,\ldots,u_d]\subset A$ and $k[v_1,\ldots,v_e]\subset B$. Tensoring their inclusions over a field is injective (extend vector-space bases); products of their finite module generators span $A\otimes_kB$ over the resulting polynomial ring in $d+e$ variables. In the domain fraction field this is an algebraic extension of $k(u_1,\ldots,u_d,v_1,\ldots,v_e)$. Thus transcendence degree gives dimension $d+e=\dim X+\dim Y$ in this affine case. [F1, F7, step 1.1]

3.1 For irreducible general factors all nonempty product charts are irreducible and their pairwise intersections are nonempty opens. A union of irreducible open subsets with pairwise nonempty intersections is irreducible: any nonempty open meeting one chart meets every chart, by density in that chart and the overlaps. The chart dimensions all equal $\dim X+\dim Y$, so the open-cover formula gives that value globally. [F1, F4, step 2.1, step 2.2]

4.1 For arbitrary nonempty factors write $X=\bigcup_iX_i$ and $Y=\bigcup_jY_j$ as their finite irreducible-component covers. Their product is the finite closed union of $X_i\times Y_j$, hence has dimension $\max_{i,j}(\dim X_i+\dim Y_j)=\dim X+\dim Y$. Zero-dimensional factors are allowed, and the product with a point is the other factor by the projections. [F2, F3, step 3.1] ∎
