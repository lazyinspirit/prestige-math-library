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
      - symmetric-extensions-and-basic-choice-failure-models
      - finite-support-iterations-and-martins-axiom
      - preservation-cohen-forcing-and-the-continuum
      - permutation-models-and-transfer-to-zf
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

Ordinals: well-ordering, transfinite recursion, rank, cumulative hierarchy, ordinal and
cardinal arithmetic, cofinality, alephs, weak choice. Clubs, stationarity, trees, delta
systems, Diamond; Borel/analytic sets, determinacy; PCF, Dowker spaces; soundness,
completeness, incompleteness; reflection, elementary submodels; Boolean ideals, BPI,
Stone duality. Large cardinals from inaccessibility to supercompactness via ultrafilters,
ultrapowers, embeddings; $L$ and HOD give inner models with definable well-orders,
condensation yielding GCH, diamond, a Suslin tree. Forcing closes the part: generics,
names, the truth lemma; closure, distributivity, chain conditions with nice-name counting
for Cohen, collapse, Lévy-collapse forcing; symmetric extensions and permutation models
(Fraenkel--Mostowski, second Fraenkel, ordered Mostowski) fail choice: Dedekind-finite
sets of reals, non-well-orderable atoms, countable pairs, the ZFA version transferred to
ZF by Jech--Sochor; finite-support iterations force Martin's Axiom with $\neg$CH.
