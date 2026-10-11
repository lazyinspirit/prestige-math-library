---
page: ordinals-and-transfinite-recursion-examples
title: "Ordinals and Transfinite Recursion: Examples and Counterexamples"
status: draft
requires: [ordinals-and-transfinite-recursion]
items: []
examples: [ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega,
           cex-a-set-of-ordinals-that-is-not-transitive,
           ex-lexicographic-orders-on-products-of-naturals,
           ex-the-one-point-extension-of-a-well-order,
           cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order,
           ex-an-explicit-well-ordering-of-the-integers,
           cex-the-shift-is-a-nonidentity-order-automorphism,
           ex-the-mostowski-collapse-of-a-finite-chain,
           cex-the-collapsing-recursion-has-no-solution-on-the-integers,
           ex-the-hartogs-number-of-a-finite-set,
           ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal,
           cex-transfinite-induction-fails-when-the-minimum-is-exempted]
---

**Objective.** This companion page works the machinery of
[[ordinals-and-transfinite-recursion]] on concrete orders, ordinals and boundary
cases. Every item here is a dependency leaf: the theory it consumes is supplied
by the parent page and its established prerequisite closure, and nothing
outside this page depends on anything homed here. Each item states its
hypotheses and checks its argument locally, and the page makes no claim beyond
the statements of its items; no ordinal arithmetic, cumulative hierarchy or
cardinal arithmetic is used anywhere, and no item spends a choice principle.

## Examples and counterexamples

The items are listed in the order in which they appear in the page inventory;
same-page dependencies always point backwards.

- [[ex-the-finite-von-neumann-ordinals-and-the-limit-ordinal-omega]] expands
  $0,1,2,3$ as ordinals, computes their initial segments, and records that
  $\omega$ is an ordinal, a limit, equal to the union of its members, and the
  least limit ordinal.
- [[cex-a-set-of-ordinals-that-is-not-transitive]] shows that $\{0,1,\omega\}$
  is well ordered by membership and still not an ordinal, since
  $2\in\omega\in A$ while $2\notin A$.
- [[ex-lexicographic-orders-on-products-of-naturals]] well-orders
  $\{0,1\}\times\mathbb{N}$ and $\mathbb{N}\times\mathbb{N}$ lexicographically,
  identifies the initial segment below $(1,0)$, and computes the collapse
  through $F(1,0)=\omega$.
- [[ex-the-one-point-extension-of-a-well-order]] adjoins a top element to a
  well-order, compares the result with the original in
  [[lem-well-order-comparability]], and computes its order type $\omega^{+}$ at
  $V=\omega$.
- [[cex-the-lexicographic-order-on-integer-pairs-is-not-a-well-order]] is the
  matching failure: the lexicographic order on $\mathbb{Z}\times\mathbb{Z}$ is
  total but the column $\{0\}\times\mathbb{Z}$ has no least element.
- [[ex-an-explicit-well-ordering-of-the-integers]] writes the order
  $0\prec1\prec-1\prec2\prec-2\prec\cdots$ by one formula, proves the
  least-element property and the initial segments, and observes that the usual
  order of $\mathbb{Z}$ is not a well-order.
- [[cex-the-shift-is-a-nonidentity-order-automorphism]] shows that the
  well-ordering hypothesis of rigidity cannot be weakened to totality:
  $x\mapsto x+1$ is a nonidentity automorphism of $(\mathbb{Z},<)$ and
  $x\mapsto x-1$ is strictly increasing with $x-1<x$.
- [[ex-the-mostowski-collapse-of-a-finite-chain]] computes the collapse of a
  four-element chain as $0,1,2,3$, so that its order type is $4$, and verifies
  the uniqueness of the solution directly.
- [[cex-the-collapsing-recursion-has-no-solution-on-the-integers]] is the
  recursion-side failure: on $(\mathbb{Z},<)$ the equation
  $F(a)=\{F(b):b<a\}$ has no solution, because Foundation forbids the set of
  values along the descending sequence.
- [[ex-the-hartogs-number-of-a-finite-set]] computes $\aleph(A)=n^{+}$ for
  $A\approx n$, by identifying the order types of well-orders of subsets of $A$
  with the ordinals at most $n$.
- [[ex-the-hartogs-number-of-the-naturals-is-a-limit-ordinal]] identifies
  $\aleph(\omega)$ with the set of at most countable ordinals and shows it is an
  uncountable limit ordinal above $\omega$.
- [[cex-transfinite-induction-fails-when-the-minimum-is-exempted]] refutes the
  restricted form of transfinite induction: on $\omega$ the hypothesis checked
  only at $a\ne0$ holds for $S=\omega\setminus\{0\}$ while $S\ne\omega$.
