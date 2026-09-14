---
id: def-whitney-sum-monoid-of-complex-vector-bundles
kind: definition
title: The Whitney-sum monoid of complex vector bundles
status: published
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-vector-bundle-map-section-subbundle-and-isomorphism]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Definition of K(X) from vector bundles, printed pp.39–40"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "The monoid of complex vector bundles, printed pp.203–204"
---

## Definition

For a compact Hausdorff space $X$, let

$$\operatorname{Vect}_{\mathbb C}(X)$$

be the set of isomorphism classes of finite-rank complex vector bundles over
$X$. Here a finite-rank bundle is allowed to have locally varying rank: it is
a finite disjoint clopen decomposition $X=\coprod_jX_j$ together with a
fixed-rank bundle in the sense of
[[def-real-and-complex-topological-vector-bundle]] over each $X_j$. Equivalently,
its fiber-dimension function is locally constant; compactness of $X$ makes its
image finite and its rank fibers clopen. Thus no single global rank is imposed,
but the notion is reduced to the library's fixed-rank bundles on finitely many
clopen pieces.

Define

$$[E]+[F]=[E\oplus F],\qquad 0=[0_X],$$

where $0_X=X\times\mathbb C^0$. This is well-defined on isomorphism classes by
[[def-vector-bundle-map-section-subbundle-and-isomorphism]] and
[[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]], applied on the
finite common refinement of the two rank decompositions. The fiberwise
swap, reassociation, and zero maps are bundle isomorphisms, so Whitney sum makes
$\operatorname{Vect}_{\mathbb C}(X)$ a commutative monoid.

When $X=\varnothing$, every total space of a bundle over $X$ is empty. Hence
there is one isomorphism class, and
$\operatorname{Vect}_{\mathbb C}(\varnothing)$ is the one-element monoid.
