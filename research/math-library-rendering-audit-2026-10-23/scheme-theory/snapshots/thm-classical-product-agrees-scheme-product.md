---
id: "thm-classical-product-agrees-scheme-product"
kind: "theorem"
title: "Classical products and scheme products"
status: published
origin: "pipeline"
deps: ["thm-affine-variety-product-coordinate-ring", "thm-classical-varieties-equivalent-integral-separated-finite-type-schemes", "thm-fibre-products-of-schemes-exist", "lem-fibre-product-open-restriction"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.3 and 10.4.E; local published affine product theorem"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

Let $k$ be algebraically closed and let $V,W$ be irreducible classical $k$-varieties. Write $V^*,W^*$ for their associated schemes. Then the associated scheme of their classical product is canonically isomorphic to $V^*\times_kW^*$, compatibly with the projections. For nonempty affine charts with coordinate rings $A,B$, the product chart ring is the unreduced tensor product $A\otimes_kB$, which is a domain in this setting.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $X,Y$ be classical affine varieties over an algebraically closed field $k$. Then their affine product exists, is a classical affine variety, and has coordinate ring $$k[X\times_kY]\cong k[X]\otimes_k k[Y].$$ Its projections make it a product in the classical affine-variety category. ([[thm-affine-variety-product-coordinate-ring]])

[F2] Let $k$ be algebraically closed. The closed-point construction and its inverse whose points are the nonempty irreducible closed subsets (with each original point identified with its singleton) give an equivalence between irreducible classical $k$-varieties (which have a finite affine cover by definition) and integral finite-type $k$-schemes satisfying the affine-overlap separation condition. ([[thm-classical-varieties-equivalent-integral-separated-finite-type-schemes]])

[F3] Every diagram $X\to S\leftarrow Y$ of schemes has a fibre product. Given an affine cover $S=\bigcup_i\operatorname{Spec}A_i$ and affine covers $f^{-1}(\operatorname{Spec}A_i)=\bigcup_j\operatorname{Spec}B_{ij}$ and $g^{-1}(\operatorname{Spec}A_i)=\bigcup_k\operatorname{Spec}C_{ik}$, the product has open affine cover $$\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik}).$$ ([[thm-fibre-products-of-schemes-exist]])

[F4] Suppose $P=X\times_S Y$ exists, with projections $p,q$. If opens $V\subseteq X$, $W\subseteq Y$ map into an open $U\subseteq S$, then the open subscheme $Q=p^{-1}(V)\cap q^{-1}(W)$ represents $V\times_U W$, and also $V\times_S W$. Independently, for $f:X\to S$ and an open $U\subseteq S$, the open subscheme $f^{-1}(U)$ represents $X\times_S U$. ([[lem-fibre-product-open-restriction]])

## Proof

1.1 Choose nonempty classical affine charts $U\subset V$, $Z\subset W$. F1 constructs their classical affine product with ring $A\otimes_kB$. It asserts that this is a classical affine variety, not an arbitrary reduced scheme. By F2 its associated scheme is integral, so its affine coordinate ring is a domain. Thus no reduction of the tensor ring is required. The hypotheses algebraically closed and irreducible are retained. [given, F1, F2]

2.1 F3 and F4 identify the corresponding open in $V^*\times_kW^*$ with $\operatorname{Spec}(A\otimes_kB)$, with the same projections. On chart overlaps these identifications agree after the two projections: a map from any test scheme into the product is uniquely determined by those projections. The associated-scheme construction in F2 preserves the affine restrictions. Hence the local identifications glue and their local inverses glue. [F2, F3, F4, step 1.1]

3.1 For completeness, these local classical products construct the classical product globally: glue their chart transitions along overlaps of the two factors. A pair of classical maps factors locally into these charts, and F1 gives its unique local lift; uniqueness glues the lifts. The glued classical space has a finite affine cover by the products of finite covers of $V,W$. It is separated in the classical sense: the equalizer of two maps into it is the intersection of the equalizers of their two projections, which are closed since $V,W$ are classical varieties. Thus once irreducibility is checked below it is a classical variety. Its associated scheme is the product of step 2.1. The glued classical space is irreducible: its irreducible product charts have pairwise nonempty open intersections, because nonempty affine opens in each irreducible factor intersect; a cover by irreducible opens with these intersections is irreducible. Indeed any nonempty open in one chart meets its intersection with another, and then meets every nonempty open there. Nonemptiness follows from any chart. If a factor is a point, the tensor ring is the other ring. [F1, F2, step 1.1, step 2.1] ∎
