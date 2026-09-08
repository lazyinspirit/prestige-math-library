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
      - formal-set-theoretic-syntax-structures-and-satisfaction
      - order-zorn-and-the-axiom-of-choice
      - dependent-choice-and-the-complete-metric-baire-theorem
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
      - set-theoretic-trees-delta-systems-and-diamond
      - deduction-soundness-completeness-and-compactness
---

## sets-relations-and-functions

Everything else in the library is a set, so the axioms come first: extensionality,
pairing, union, power set, separation, replacement, infinity, foundation and choice, over a
language whose only symbol is membership. On top of them the ordered pair, the Cartesian
product, relations, functions and quotients are constructions rather than primitives, which
is what lets a quotient later be taken without asking whether it exists.

## naturals-order-and-choice

The natural numbers are built as the von Neumann finite ordinals, with induction and
recursion proved rather than assumed. Formal syntax for arbitrary set signatures makes this
recursion precise: parsing supports term denotation, satisfaction, substitution, renaming,
isomorphism, and relativization within ZF. Partial orders, chains, and maximal elements give
Zorn's lemma, where full choice enters. The dependent-choice page works over ZF, reconciles
the serial-relation and category formulations, and proves equivalence with the complete-metric
Baire principle while identifying local uses of choice. Filters and ultrafilters are the
first application of full choice: a maximal filter exists because Zorn says so.

## ordinals-and-cardinals

Well-ordering extends induction past the finite, and transfinite recursion makes staged
definitions legitimate. Well-founded relations, rank, and Mostowski collapse lead to the
cumulative hierarchy; ordinal arithmetic, cardinals, cofinality, and alephs measure size.
The weak-choice page keeps ZF distinctions explicit, while clubs, stationarity, normality,
pressing down, and stationary partitions provide large-ordinal combinatorics. Trees and finite
delta systems organize branch, antichain, and compatibility arguments; Diamond is explicitly
assumed where it constructs a normal Suslin tree. The logic page then uses set-coded derivations
for deduction and soundness, Henkin constructions for countable-language completeness and
compactness, and elementary embeddings and diagrams for its stated Löwenheim--Skolem results.
