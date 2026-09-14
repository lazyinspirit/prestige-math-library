---
id: def-grothendieck-ring-structure-and-rank-map
kind: definition
title: Grothendieck ring structure and rank map
status: published
origin: pipeline
deps: [def-complex-topological-k-zero-by-grothendieck-completion, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-singular-cohomology-ring]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Ring structure and dimension homomorphism, printed pp.40–41"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §1"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Ring structure on KU(X), printed pp.203–204"
---

## Definition

Tensor product distributes over Whitney sum, so it extends through the
Grothendieck completion to a commutative unital multiplication on $K^0(X)$.
On virtual-bundle representatives,

$$([E]-[F])([E']-[F'])=[E\otimes E'\oplus F\otimes F']-[E\otimes F'\oplus F\otimes E'].$$

The unit is the trivial complex line $[\varepsilon^1]$. Together with the
addition in [[def-complex-topological-k-zero-by-grothendieck-completion]], this
makes $K^0(X)$ a commutative ring.

Fiber dimension is topologically locally constant. Define the **rank map**

$$\operatorname{rk}:K^0(X)\longrightarrow H^0(X;\mathbb Z)$$

by

$$\operatorname{rk}([E]-[F])(x)=\dim_{\mathbb C}E_x-\dim_{\mathbb C}F_x.$$

Here singular $H^0(X;\mathbb Z)$ is identified, as in
[[def-singular-cohomology-ring]], with integer-valued functions constant on
path components. A topologically locally constant rank function is constant
along every path and hence defines such a class. Direct sum and tensor product
give pointwise addition and multiplication of ranks, so
$\operatorname{rk}$ is a unital ring homomorphism. No assertion that path
components are open is needed.
