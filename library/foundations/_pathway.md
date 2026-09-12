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
      - borel-analytic-sets-perfect-sets-and-determinacy
      - set-theoretic-trees-delta-systems-and-diamond
      - deduction-soundness-completeness-and-compactness
      - pcf-scales-and-zfc-dowker-spaces
      - reflection-absoluteness-and-elementary-submodels
      - boolean-algebras-stone-duality-and-the-prime-ideal-theorem
      - arithmetization-incompleteness-and-relative-consistency
      - large-cardinals-measures-and-elementary-embeddings
      - the-constructible-hierarchy-and-inner-models
      - forcing-orders-names-and-generic-extensions
      - the-forcing-theorem-and-formal-consistency-transfer
      - condensation-gch-and-diamond-in-l
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

Ordinals first: well-ordering, transfinite recursion, rank, the cumulative hierarchy, ordinal
and cardinal arithmetic, cofinality, alephs and weak-choice distinctions inside ZF. Clubs,
stationarity, pressing down, trees, delta systems, Diamond, Borel codes, analytic sets,
determinacy, PCF scales, ZFC Dowker spaces. Deduction, soundness, completeness, compactness and
arithmetized incompleteness; reflection, absoluteness and elementary submodels; Boolean ideals,
BPI, Stone duality. Large cardinals: inaccessibility, Mahloness, weak and strong compactness,
measurability and supercompactness, via ultrafilters, ultrapowers, measures and covering
embeddings; the constructible hierarchy and HOD give inner models with definable well-orders and
choice. Condensation in $L$ gives GCH, diamond under $V=L$ and a Suslin tree, plus a
finite-fragment consistency transfer; forcing closes the part through generics, names, the truth
lemma, generic ZF/ZFC extensions and formal consistency transfer.
