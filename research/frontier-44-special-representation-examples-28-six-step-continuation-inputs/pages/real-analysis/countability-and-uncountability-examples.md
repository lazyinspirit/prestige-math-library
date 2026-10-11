---
page: countability-and-uncountability-examples
title: "Countability and the Uncountability of R: Examples and Counterexamples"
status: draft
requires: [countability-and-uncountability, roots-and-rational-powers]
items: []
examples: [ex-integers-are-countably-infinite,
           ex-deleting-a-point-from-a-countably-infinite-set,
           ex-power-set-of-the-naturals-is-uncountable,
           ex-binary-sequences-are-uncountable,
           ex-rationals-in-an-interval,
           ex-complement-of-a-countable-set-of-reals-is-uncountable,
           cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n,
           cex-the-empty-set-is-not-a-surjective-image-of-n,
           ex-explicit-enumeration-of-the-rationals,
           lem-finite-real-coefficient-lists-have-at-most-degree-many-roots,
           ex-real-algebraic-numbers-are-countably-infinite,
           ex-cantor-diagonal-misses-every-listed-binary-sequence]
---

**Objective.** This companion page works the machinery of
[[countability-and-uncountability]] on concrete sets and boundary cases. Every
item here is a dependency leaf: the theory it consumes is supplied by the parent
page and its established prerequisite closure, and nothing outside this page
depends on anything homed here. The rational enumeration and the algebraic-number
item also use the finite-sum and natural-power interfaces of
[[roots-and-rational-powers]]. Each item states its hypotheses and checks its
arguments locally, and the page makes no claim beyond the statements of its
items; in particular no decimal expansion, series or complex algebraic-closure
machinery is used anywhere.

## Examples and counterexamples

The items are listed in the order in which they appear in the page inventory;
same-page dependencies always point backwards.

- [[ex-integers-are-countably-infinite]] transports the product bijection to the
  integers by two injections and Schröder-Bernstein.
- [[ex-deleting-a-point-from-a-countably-infinite-set]] deletes one point of a
  countably infinite set by an explicit shift, and contrasts this with the
  finite case.
- [[ex-power-set-of-the-naturals-is-uncountable]] instantiates Cantor's theorem
  at $\mathbb{N}$ and draws the strict-domination conclusion.
- [[ex-binary-sequences-are-uncountable]] identifies binary sequences with
  subsets of $\mathbb{N}$ by characteristic functions.
- [[ex-rationals-in-an-interval]] separates density from cardinality inside an
  interval.
- [[ex-complement-of-a-countable-set-of-reals-is-uncountable]] deletes an at
  most countable set of reals by a two-set interleaving with no choice.
- [[cex-a-surjective-image-of-n-need-not-be-equinumerous-with-n]] and
  [[cex-the-empty-set-is-not-a-surjective-image-of-n]] record the two boundary
  defects of the onto criterion: repetitions, and the empty set.
- [[ex-explicit-enumeration-of-the-rationals]] writes a completely specified
  surjection $\mathbb{N} \to \mathbb{Q}$ and then deletes repetitions by least
  new index.
- [[lem-finite-real-coefficient-lists-have-at-most-degree-many-roots]] bounds
  the real root set of a finite real coefficient list, by finite synthetic
  division.
- [[ex-real-algebraic-numbers-are-countably-infinite]] codes integer coefficient
  lists, uses that bound, and injects the real algebraic numbers into
  $\mathbb{N}$; their complement is uncountable.
- [[ex-cantor-diagonal-misses-every-listed-binary-sequence]] performs the
  literal diagonal construction.
