---
page: tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples
title: "Tensor-Product Crystals and Highest-Weight Crystal Uniqueness — Examples"
status: published
requires: [tensor-product-crystals-and-highest-weight-crystal-uniqueness]
items: []
examples: [cex-changing-the-tensor-equality-convention-changes-the-crystal,
           ex-tensor-crystal-b-one-tensor-b-one-for-sl-two,
           ex-highest-components-in-a-small-type-a-two-tensor-crystal,
           ex-dual-crystal-reverses-arrows-and-weights]
---

**Objective.** This companion page works the tensor-product crystal machinery
of [[tensor-product-crystals-and-highest-weight-crystal-uniqueness]] on
concrete vertices. The dual-crystal example uses the two preceding tensor
examples as internal suppliers. The theory is supplied by the parent page and
its established prerequisite closure; nothing outside this page depends on
anything homed here, and every computation is
finite and choice-free except where the parent-page uniqueness theorem is
explicitly invoked with its declared axiom of choice.

## Examples and counterexamples

The items are listed in the order in which they appear in the page inventory.

- [[cex-changing-the-tensor-equality-convention-changes-the-crystal]] shows
  that the equality case of the tensor rule is not a matter of taste: on
  $B(2)\otimes B(2)$ for $\mathfrak{sl}_2$ the exchanged-equality rule fails
  the partial-inverse axiom at $v_1\otimes w_1$, the strict-for-both and
  non-strict-for-both variants fail at neighbouring vertices, and the modified
  lowering rule has a four-vertex chain where the correct component $B(2)$ has three.
- [[ex-tensor-crystal-b-one-tensor-b-one-for-sl-two]] computes
  $B(1)\otimes B(1)$ for $\mathfrak{sl}_2$ vertex by vertex, obtains the two
  components $B(2)\sqcup B(0)$ with the $\varepsilon_1/\varphi_1$ table
  checked against the max formulas, and matches the classical
  $V(1)\otimes V(1)=V(2)\oplus V(0)$.
- [[ex-highest-components-in-a-small-type-a-two-tensor-crystal]] applies the
  highest-vertex criterion to the standard $A_2$ crystal: the only highest
  vertices of $B(\lambda_1)\otimes B(\lambda_1)$ are $u_1\otimes u_1$ and
  $u_1\otimes u_2$, the components are $B(2\lambda_1)\sqcup B(\lambda_2)$, and
  the count $9=6+3$ matches
  $V(\lambda_1)\otimes V(\lambda_1)=V(2\lambda_1)\oplus V(\lambda_2)$.
- [[ex-dual-crystal-reverses-arrows-and-weights]] verifies the dual-crystal
  rules on three small cases: $B(1)^\vee\cong B(1)$ for $\mathfrak{sl}_2$ with
  the highest vertex moved to $v_1^\vee$, $B(\lambda_1)^\vee\cong B(\lambda_2)$
  for the standard $\mathfrak{sl}_3$ crystal, and the order-reversing tensor
  swap $(B(1)\otimes B(1))^\vee\cong B(1)^\vee\otimes B(1)^\vee$, where both
  sides split as $B(2)\sqcup B(0)$.
