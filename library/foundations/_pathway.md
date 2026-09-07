---
category: foundations
status: published
parts:
  - part: sets-relations-and-functions
    title: "Sets, relations and functions"
    pages:
      - the-zfc-axioms-and-basic-set-constructions
      - relations-functions-and-quotients
  - part: naturals-order-and-choice
    title: "The naturals, order and choice"
    pages:
      - construction-of-the-natural-numbers
      - order-zorn-and-the-axiom-of-choice
      - formal-set-theoretic-syntax-structures-and-satisfaction
      - filters-and-ultrafilters
  - part: ordinals-and-cardinals
    title: "Ordinals and cardinals"
    pages:
      - ordinals-and-transfinite-recursion
      - ordinal-arithmetic
      - well-founded-relations-rank-and-the-cumulative-hierarchy
      - cardinal-arithmetic-and-cofinality
      - weak-choice-principles-and-sierpinskis-theorem
      - club-stationary-sets-and-pressing-down
---

## sets-relations-and-functions

Everything else in the library is a set, so the axioms come first: extensionality,
pairing, union, power set, separation, replacement, infinity, foundation and choice, over a
language whose only symbol is membership. On top of them the ordered pair, the Cartesian
product, relations, functions and quotients are constructions rather than primitives, which
is what lets a quotient later be taken without asking whether it exists.

## naturals-order-and-choice

The natural numbers are built as the von Neumann finite ordinals, with induction and
recursion proved rather than assumed. Formal syntax for arbitrary set signatures makes such
recursion precise: unique parsing supports term denotation and satisfaction in nonempty set
structures, then substitution, renaming, isomorphism, and relativization; this remains a ZF
metatheory and supplies no uniform truth predicate for the universe. Partial orders, chains,
and maximal elements give Zorn's lemma, which is where choice enters in the form the rest of
the library uses. Filters and ultrafilters are the first application: a maximal filter exists
because Zorn says so.

## ordinals-and-cardinals

Well-ordering extends induction past the finite, and transfinite recursion makes a definition
by stages legitimate. The well-founded-relations page separates induction, recursion, rank,
and Mostowski collapse from any ambient use of Foundation, then relates membership rank to
the cumulative hierarchy. Ordinal arithmetic reaches the first uncountable ordinal, while
cardinals, cofinality, and the alephs measure size. The weak-choice page keeps ZF distinctions
between choice principles explicit and proves Sierpiński's local-GCH implication to choice.
For regular uncountable cardinals, clubs, stationary sets, normality, pressing down, and
stationary partitions provide the corresponding large-ordinal combinatorics.
