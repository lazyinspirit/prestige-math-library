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
      - minimal-walks-oscillation-and-l-and-s-spaces
      - proper-forcing-countable-support-iterations-and-pfa
      - halpern-lauchli-and-bpi-without-choice
      - symmetric-collapse-and-ultrafilter-free-models
      - suslin-trees-lines-algebras-and-independence
      - prikry-forcing-and-gitiks-singular-cardinal-model
      - boolean-prime-ideal-theorem-in-the-basic-cohen-model
      - solovays-model-and-regularity-of-all-sets-of-reals
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

Ordinals: well-ordering, recursion, rank, arithmetic, cofinality, alephs,
weak choice; clubs, stationarity, trees, delta systems, Diamond; analytic
sets, determinacy; PCF, Dowker spaces; completeness, incompleteness;
reflection, elementary submodels; BPI, Stone duality, Halpern--Läuchli, BPI
below Choice (basic Cohen model). Large cardinals: ultrafilters,
ultrapowers, embeddings, supercompactness yielding PFA by countable-support
proper iterations; Prikry forcing, Gitik's all-singular model; minimal
walks: ZFC L-space, PFA killing S-spaces. $L$, HOD: definable well-orders,
condensation, GCH, diamond; Suslin trees, lines, algebras equivalent, SH
conditionally independent. Forcing: generics, names, truth lemma, chain
conditions, Cohen, collapse, Lévy collapse, finite-support iterations
forcing MA+$\neg$CH; symmetric extensions and permutation models fail
choice: Dedekind-finite reals, non-well-orderable atoms, countable pairs,
Jech--Sochor. Feferman--Levy, Blass, Solovay give countable unions of
countable sets, principal ultrafilters, regular sets of reals.
