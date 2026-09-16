---
id: thm-external-product-and-whitney-sum-formulas-for-thom-classes
kind: theorem
title: External-product and Whitney-sum formulas for Thom classes
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-naturality-and-uniqueness-of-thom-classes, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-disk-sphere-and-thom-space-of-a-metric-vector-bundle, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring, def-relative-cup-product, prop-relative-cup-products-are-natural-and-compatible-with-connectors, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "products of Thom classes, printed pp.195–196"
---

## Statement

Assume AC.  For ordered oriented bundles $\xi\to B$ and $\eta\to C$ of ranks
$n,m$, the canonical product-pair identification gives
$$u_{\xi\times\eta}=u_\xi\times u_\eta.$$
For bundles over one base, diagonal pullback gives
$$u_{\xi\oplus\eta}=u_\xi\smile u_\eta.$$
Interchanging the ordered summands changes the orientation and the displayed
class by the Koszul sign $(-1)^{nm}$.

## Facts & Assumptions

**Given:** The two supplied orientations and Thom classes in the scope of the general theorem.

[F1] [[thm-naturality-and-uniqueness-of-thom-classes]] gives pullback naturality and uniqueness under AC.

[F2] [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]] identifies the Whitney sum as diagonal pullback of the external product bundle.

[F3] [[def-disk-sphere-and-thom-space-of-a-metric-vector-bundle]] gives radial pair maps, while [[lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]] fixes the ordered fiber generators.

[F4] [[def-relative-cup-product]] and [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] give the relative external/cup product and its naturality.

[A1] [[def-axiom-of-choice]] is used only through [F1].

## Proof

**Proof technique:** normalize the external product and use uniqueness.

1.1 Give $\xi\times\eta$ the sum metric.  The product pair $(D\xi\times D\eta,(S\xi\times D\eta)\cup(D\xi\times S\eta))$ is the unit pair for the maximum norm.  On every nonzero fiber vector $z=(v,w)$, the formula $z\mapsto(\max\{\|v\|,\|w\|\}/\sqrt{\|v\|^2+\|w\|^2})z$, extended by zero, is a base-preserving homeomorphism to the sum-metric disk/sphere pair; its inverse uses the reciprocal radial ratio. [F3]

2.1 Form $u_\xi\times u_\eta$ with [F4] on the product pair and transport it across step 1.1.  On the fiber over $(b,c)$ its restriction is the ordered product of the two normalized generators.  The connector normalization in [F3] makes this exactly the ordered rank-$(n+m)$ generator.  Thus the transported class is normalized, and [F1] identifies it with $u_{\xi\times\eta}$. [F1, F3, F4, step 1.1]

3.1 For bundles over $B$, [F2] identifies $\xi\oplus\eta$ with the pullback of $\xi\times\eta$ along $\Delta:B\to B\times B$.  By [F1], its Thom class is $\Delta^*(u_\xi\times u_\eta)$.  The cochain definition in [F4] pulls this external product back to $u_\xi\smile u_\eta$, proving the Whitney-sum formula. [F1, F2, F4, step 2.1]

3.2 Swapping the two ordered fiber blocks crosses $n$ degree-one coordinate connectors past $m$ such connectors.  The signed relative product rule in [F4] contributes $(-1)$ for each of the $nm$ crossings, so the generator and Thom class change by $(-1)^{nm}$.  This is precisely the orientation of the block permutation. [F3, F4, step 2.1]

4.1 If either base is empty the external pair and both classes are zero; ranks zero and one reduce respectively to the unit and one connector.  The zero ring, zero class, identity diagonal, equal bundles, the zero vector in the radial map, maximum/sum unit boundaries, and both factor orders are all covered above.  The radial ratio is locally bounded at zero and the map fixes zero.  AC is used exactly through [A1] in [F1]; all product and sign formulas are finite and choice-free. [F1, F2, F3, F4, A1, step 1.1, step 2.1, step 3.1, step 3.2] ∎
