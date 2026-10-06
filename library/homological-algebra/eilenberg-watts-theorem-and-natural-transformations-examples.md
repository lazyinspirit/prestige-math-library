---
page: eilenberg-watts-theorem-and-natural-transformations-examples
title: "Eilenberg–Watts Theorem and Natural Transformations — Examples"
status: published
items: []
examples: [ex-natural-transformations-between-tensor-composites, ex-eilenberg-watts-recovers-extension-of-scalars, cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor, cex-coproduct-preserving-left-exact-module-functor-is-not-tensor]
---

These examples test the hypotheses and the classification of the companion page.
The first identifies a composite $T_N\circ T_M$ of tensor functors with the
tensor functor of the $(C,A)$-bimodule $N\otimes_BM$ via associativity of the
balanced tensor product, so that natural transformations between composites
correspond to all $(C,A)$-bimodule maps of the tensor-product kernels: pairs of
bimodule maps $g,f$ give the components $(g\otimes f)\otimes1_X$, and the page
exhibits a bimodule map that is not of that form.

The second shows that the Eilenberg–Watts kernel of extension of scalars along a
unital homomorphism of commutative rings is the bimodule ${}_SS_R$ with right
action $s\cdot r=sf(r)$, together with the caveat that the published definition
of extension of scalars covers only the commutative case.

The last two separate the two hypotheses of the theorem for one-sided exact
functors. Over a field, the countable product $F(V)=\prod_{n\ge0}V$ is additive
and exact under the Axiom of Choice — used exactly to lift countably many
surjections coordinatewise — yet it fails to preserve the coproduct of
countably many copies of the field, so it is not tensor. Dually,
$\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,-)$ preserves arbitrary direct sums
and is left exact but not right exact, so coproduct preservation together with
left exactness does not force a functor to be tensor; that counterexample is
choice-free.
