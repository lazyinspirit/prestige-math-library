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
      - filters-and-ultrafilters
  - part: ordinals-and-cardinals
    title: "Ordinals and cardinals"
    pages:
      - ordinals-and-transfinite-recursion
      - ordinal-arithmetic
      - cardinal-arithmetic-and-cofinality
---

## sets-relations-and-functions

Everything else in the library is a set, so the axioms come first: extensionality,
pairing, union, power set, separation, replacement, infinity, foundation and choice, over a
language whose only symbol is membership. On top of them the ordered pair, the Cartesian
product, relations, functions and quotients are constructions rather than primitives, which
is what lets a quotient later be taken without asking whether it exists.

## naturals-order-and-choice

The natural numbers are built as the von Neumann finite ordinals, with induction and
recursion proved rather than assumed. Partial orders, chains and maximal elements give
Zorn's lemma, which is where choice enters in the form the rest of the library actually
uses. Filters and ultrafilters are the first application: a maximal filter exists because
Zorn says so, and nothing weaker produces one.

## ordinals-and-cardinals

Well-ordering extends induction past the finite, and transfinite recursion is what makes a
definition by stages legitimate. Ordinal arithmetic follows, with the laws it satisfies and
the commutativity it does not, up to the first uncountable ordinal. Cardinals are then the
ordinals that are not equinumerous with anything smaller, and their arithmetic, cofinality
and the alephs measure the sizes the library goes on to compare.
