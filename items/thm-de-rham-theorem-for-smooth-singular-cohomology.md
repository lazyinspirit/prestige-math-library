---
id: "thm-de-rham-theorem-for-smooth-singular-cohomology"
kind: "theorem"
title: "De Rham theorem for smooth singular cohomology"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains","thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection","thm-countable-mayer-vietoris-open-set-principle","lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","prop-naturality-of-the-de-rham-map","lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors","lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every finite-dimensional Hausdorff second-countable smooth manifold $M$, possibly with boundary, integration is a natural isomorphism
$$I_M:H^k_{\mathrm{dR}}(M)\xrightarrow{\cong}H_\infty^k(M;\mathbb R)\qquad(k\in\mathbb Z).$$
For boundary manifolds, forms and cohomology use the locally extendible complex supplied on this page. This theorem is the vector-space comparison with smooth singular cohomology. Multiplication and comparison with continuous singular cohomology are separate results.

## Facts & Assumptions

[F1] [[lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains]] gives the comparison on convex open boxes and relatively open convex half-boxes, including dimension zero.

[F2] [[thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection]] proves the two-open comparison implication under countable choice.

[F3] [[thm-countable-mayer-vietoris-open-set-principle]] proves the two-stage Euclidean-open/manifold globalization principle, with a boundary variant requiring the extended functors, sequences, product maps and half-box base cases.

[F4] [[lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions]] gives the component product complexes and cohomology maps for smooth singular cohomology and for boundaryless de Rham cohomology. Its proof identifies the two uses of countable choice in passing from product complexes to cohomology.

[F5] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies the boundary de Rham cochain functor, its local derivative and quotient maps.

[F6] [[prop-naturality-of-the-de-rham-map]] proves naturality of integration in every degree, already on cochains.

[F7] [[lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors]] supplies the exact sequences and the restriction/difference compatibility, including boundary manifolds.

[F8] [[lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors]] proves the remaining connector compatibility with the same conventions.

[F9] [[def-countable-choice]] states the only choice axiom assumed here.

## Proof

**Given:** The stated manifold $M$ and $\mathrm{AC}_\omega$. The two functors to compare are de Rham cohomology and smooth singular cohomology, with natural transformation $I$.

1.1 By [F5] and [F6], these are contravariant functors and integration is natural; the smooth singular functor and its maps are those in [F4]. A diffeomorphism and its inverse induce inverse pullbacks, so both functors are invariant under diffeomorphisms. By [F7] the functors have exact two-open Mayer–Vietoris sequences and their restriction and difference squares commute with $I$; by [F8] so do their connector squares. All assertions include boundary manifolds and every integer degree. [F4, F5, F6, F7, F8, given]

1.2 For a supplied countable disjoint family $(M_i)$ of a fixed dimension, [F4] gives the smooth singular product complex and, under [F9], its cohomology product. In the boundary case the de Rham complex has the same product description: a family of forms glues uniquely on the disjoint union, since every point has an open neighbourhood in its one component; the local derivative in [F5] is componentwise. Thus $$\Omega^\bullet\!\left(\bigsqcup_iM_i\right)=\prod_i\Omega^\bullet(M_i)$$ without choice. This also agrees with the boundaryless identification in [F4]. [F4, F5, F9, given]

2.1 For the product complex of boundary forms, a cocycle is exactly a family of cocycles. Given a family of boundaries, [F9] chooses one primitive in each of the at most countably many components; their family is a product cochain and differentiates to the given family. Consequently a product cocycle whose component classes all vanish is a boundary. Given a family of cohomology classes, [F9] chooses one cocycle representative per component, and these form a product cocycle. This proves injectivity and surjectivity of the restriction map $$H^k_{\mathrm{dR}}\!\left(\bigsqcup_iM_i\right)\longrightarrow\prod_iH^k_{\mathrm{dR}}(M_i).$$ It is linear and independent of these temporary choices, since it sends a class to its restrictions. By [F6], integration commutes with every component restriction, hence with these product isomorphisms coordinatewise. This verifies the boundary product hypothesis missing from the boundaryless clause of [F4]. [F4, F5, F6, F9, step 1.2]

2.2 On the empty manifold both complexes and their cohomologies are zero, and the unique comparison is an isomorphism. Every nonempty rational open box is convex, and every nonempty intersection of such a box with the closed half-space is a convex relatively open half-box. Therefore [F1] gives all local comparisons required by [F3]; empty boxes were just treated. The dimension-zero box is a point, also covered by [F1]. Two-open closure is precisely [F2]. [F1, F2, F3, step 1.1]

3.1 We have now verified every hypothesis of [F3]: naturality and all exact-sequence squares in step 1.1, countable products and compatibility in step 1.2 and step 2.1, and the empty/local cases in step 2.2. Applying its boundaryless or boundary version, as appropriate, proves that $I_M$ is an isomorphism in every degree. Its two-stage argument first handles arbitrary Euclidean or half-space opens by rational-box finite unions and exhaustion bands, and then all chart-contained opens of $M$. Intersections of chart opens are handled in that second stage as open subsets of a chart; they are not assumed convex. The band argument uses even and odd disjoint unions, not an unproved continuity assertion for increasing unions. [F3, step 1.1, step 1.2, step 2.1, step 2.2]

4.1 Naturality of the resulting isomorphisms is the already proved equality [F6], not a choice of abstract inverses. Degree zero is included by the initial exact-sequence terms and the local constant-function calculation; degree one and top degree are included in the same argument. Negative groups are zero. A countable family may include empty components, and an empty product of vector spaces is zero; singleton families give the identity. Degenerate simplices remain in the smooth chain complexes. Countable choice was used for the form partitions underlying [F7]–[F8], the component primitives and representatives in step 2.1, and the countable exhaustion/finite-band selections in [F3]. No full AC or selection of all simplex primitives was used. [F1, F3, F4, F6, F7, F8, F9, step 2.1, step 3.1] ∎
