# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-29",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "e",
  "failures": [
    {
      "id": "depcheck",
      "stage": "8-preflight",
      "why": "FAIL",
      "output": "depcheck: 12217 items (11234 published), 706 pages\n\npage dependency depth (0 = no prerequisites):\n   0  affine-algebraic-sets-and-coordinate-rings       0 items  <- (none)\n   0  affine-algebraic-sets-and-coordinate-rings-examples   0 items  <- (none)\n   0  computable-reductions-and-rices-theorem          0 items  <- (none)\n   0  computable-reductions-and-rices-theorem-examples   0 items  <- (none)\n   0  context-free-grammars-and-normal-forms           0 items  <- (none)\n   0  context-free-grammars-and-normal-forms-examples   0 items  <- (none)\n   0  context-free-pumping-ogden-and-parsing           0 items  <- (none)\n   0  context-free-pumping-ogden-and-parsing-examples   0 items  <- (none)\n   0  decidable-recognizable-and-enumerable-languages   0 items  <- (none)\n   0  decidable-recognizable-and-enumerable-languages-examples   0 items  <- (none)\n   0  deferred-algebraic-topology                     17 items  <- (none)\n   0  deferred-functional-analysis                    33 items  <- (none)\n   0  deferred-measure-and-integration                29 items  <- (none)\n   0  deferred-set-theory-beyond-choice               22 items  <- (none)\n   0  derived-functors                                 0 items  <- (none)\n   0  derived-functors-examples                        0 items  <- (none)\n   0  deterministic-finite-automata-and-regular-languages   0 items  <- (none)\n   0  deterministic-finite-automata-and-regular-languages-examples   0 items  <- (none)\n   0  diagonalization-and-the-halting-problem          0 items  <- (none)\n   0  diagonalization-and-the-halting-problem-examples   0 items  <- (none)\n   0  formal-languages-encodings-and-decision-problems   0 items  <- (none)\n   0  formal-languages-encodings-and-decision-problems-examples   0 items  <- (none)\n   0  myhill-nerode-theory-and-dfa-minimization        0 items  <- (none)\n   0  myhill-nerode-theory-and-dfa-minimization-examples   0 items  <- (none)\n   0  nondeterministic-finite-automata-and-subset-construction   0 items  <- (none)\n   0  nondeterministic-finite-automata-and-subset-construction-examples   0 items  <- (none)\n   0  p-np-conp-and-polynomial-reductions              0 items  <- (none)\n   0  p-np-conp-and-polynomial-reductions-examples     0 items  <- (none)\n   0  primitive-recursive-and-partial-computable-functions   0 items  <- (none)\n   0  primitive-recursive-and-partial-computable-functions-examples   0 items  <- (none)\n   0  pushdown-automata-and-context-free-languages     0 items  <- (none)\n   0  pushdown-automata-and-context-free-languages-examples   0 items  <- (none)\n   0  randomized-complexity-and-amplification          0 items  <- (none)\n   0  randomized-complexity-and-amplification-examples   0 items  <- (none)\n   0  regular-expressions-and-kleenes-theorem          0 items  <- (none)\n   0  regular-expressions-and-kleenes-theorem-examples   0 items  <- (none)\n   0  resource-bounds-and-machine-invariance           0 items  <- (none)\n   0  resource-bounds-and-machine-invariance-examples   0 items  <- (none)\n   0  robust-machine-models-and-universal-computation   0 items  <- (none)\n   0  robust-machine-models-and-universal-computation-examples   0 items  <- (none)\n   0  space-complexity-savitch-and-tqbf                0 items  <- (none)\n   0  space-complexity-savitch-and-tqbf-examples       0 items  <- (none)\n   0  the-cook-levin-theorem                           0 items  <- (none)\n   0  the-cook-levin-theorem-examples                  0 items  <- (none)\n   0  the-zfc-axioms-and-basic-set-constructions      39 items  <- (none)\n   0  turing-machines-configurations-and-computation   0 items  <- (none)\n   0  turing-machines-configurations-and-computation-examples   0 items  <- (none)\n   1  open-problems-and-research-frontier             13 items  <- deferred-set-theory-beyond-choice\n   1  relations-functions-and-quotients               39 items  <- the-zfc-axioms-and-basic-set-constructions\n   1  the-zfc-axioms-and-basic-set-constructions-examples  10 items  <- the-zfc-axioms-and-basic-set-constructions\n   2  construction-of-the-natural-numbers             39 items  <- relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions\n   2  relations-functions-and-quotients-examples      10 items  <- relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, deferred-set-theory-beyond-choice\n   3  construction-of-r-via-cauchy-sequences          40 items  <- construction-of-the-natural-numbers\n   3  order-zorn-and-the-axiom-of-choice              21 items  <- relations-functions-and-quotients, construction-of-the-natural-numbers, deferred-set-theory-beyond-choice\n   4  construction-of-r-via-dedekind-cuts             39 items  <- construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences\n   4  filters-and-ultrafilters                        12 items  <- the-zfc-axioms-and-basic-set-constructions, construction-of-the-natural-numbers, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, deferred-set-theory-beyond-choice\n   4  order-zorn-and-the-axiom-of-choice-examples      8 items  <- order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, construction-of-the-natural-numbers, deferred-set-theory-beyond-choice\n   5  filters-and-ultrafilters-examples                8 items  <- filters-and-ultrafilters, construction-of-the-natural-numbers\n   5  foundations-of-the-real-numbers                 43 items  <- construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, construction-of-r-via-dedekind-cuts\n   6  suprema-and-infima                              17 items  <- foundations-of-the-real-numbers, construction-of-the-natural-numbers\n   7  countability-and-uncountability                 21 items  <- relations-functions-and-quotients, construction-of-the-natural-numbers, foundations-of-the-real-numbers, suprema-and-infima, construction-of-r-via-cauchy-sequences, deferred-set-theory-beyond-choice\n   7  roots-and-rational-powers                       22 items  <- construction-of-the-natural-numbers, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima\n   7  suprema-and-infima-examples                      8 items  <- suprema-and-infima, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences\n   8  finite-counting-and-binomial-coefficients       26 items  <- countability-and-uncountability, relations-functions-and-quotients, construction-of-the-natural-numbers, roots-and-rational-powers, foundations-of-the-real-numbers\n   8  monoids-groups-and-subgroups                    27 items  <- relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, construction-of-the-natural-numbers, countability-and-uncountability, construction-of-r-via-cauchy-sequences\n   8  sequences-and-limits                            18 items  <- construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, foundations-of-the-real-numbers, suprema-and-infima, countability-and-uncountability\n   9  divisibility-gcd-and-bezout                     26 items  <- construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, construction-of-the-natural-numbers, relations-functions-and-quotients\n   9  finite-counting-and-binomial-coefficients-examples  14 items  <- finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, roots-and-rational-powers\n   9  inclusion-exclusion-and-the-pigeonhole-principle  21 items  <- finite-counting-and-binomial-coefficients, relations-functions-and-quotients, roots-and-rational-powers, countability-and-uncountability, foundations-of-the-real-numbers, construction-of-the-natural-numbers\n   9  monoids-groups-and-subgroups-examples           11 items  <- foundations-of-the-real-numbers, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, relations-functions-and-quotients, countability-and-uncountability\n   9  monotone-sequences-and-cauchy-completeness      20 items  <- foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, sequences-and-limits, construction-of-the-natural-numbers, roots-and-rational-powers\n  10  chains-antichains-sperner-and-dilworth          32 items  <- relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, inclusion-exclusion-and-the-pigeonhole-principle\n  10  divisibility-gcd-and-bezout-examples             9 items  <- divisibility-gcd-and-bezout, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers\n  10  formal-laurent-series-field                     11 items  <- construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, construction-of-the-natural-numbers, sequences-and-limits, monotone-sequences-and-cauchy-completeness\n  10  graphs-walks-and-connectivity                   37 items  <- finite-counting-and-binomial-coefficients, relations-functions-and-quotients, construction-of-the-natural-numbers, inclusion-exclusion-and-the-pigeonhole-principle\n  10  inclusion-exclusion-and-the-pigeonhole-principle-examples  10 items  <- inclusion-exclusion-and-the-pigeonhole-principle, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, roots-and-rational-powers, relations-functions-and-quotients, construction-of-the-natural-numbers, countability-and-uncountability\n  10  limsup-and-subsequential-limits                 23 items  <- construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, sequences-and-limits, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, roots-and-rational-powers\n  10  metric-spaces                                   28 items  <- construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, roots-and-rational-powers, sequences-and-limits, countability-and-uncountability, relations-functions-and-quotients\n  10  monotone-sequences-and-cauchy-completeness-examples  11 items  <- monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, construction-of-the-natural-numbers, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, suprema-and-infima\n  10  primes-and-the-fundamental-theorem-of-arithmetic  18 items  <- divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, monoids-groups-and-subgroups, countability-and-uncountability, relations-functions-and-quotients, foundations-of-the-real-numbers\n  10  regular-continued-fractions-and-diophantine-approximation  19 items  <- construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, divisibility-gcd-and-bezout, foundations-of-the-real-numbers, monoids-groups-and-subgroups\n  10  rings-subrings-and-integral-domains             28 items  <- monoids-groups-and-subgroups, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, countability-and-uncountability, relations-functions-and-quotients, divisibility-gcd-and-bezout, finite-counting-and-binomial-coefficients\n  11  chains-antichains-sperner-and-dilworth-examples   8 items  <- chains-antichains-sperner-and-dilworth, primes-and-the-fundamental-theorem-of-arithmetic, finite-counting-and-binomial-coefficients\n  11  completeness-and-uniform-continuity             24 items  <- metric-spaces, sequences-and-limits, construction-of-r-via-cauchy-sequences, suprema-and-infima, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, countability-and-uncountability, roots-and-rational-powers, construction-of-the-natural-numbers, relations-functions-and-quotients\n  11  congruences-and-the-chinese-remainder-theorem   23 items  <- divisibility-gcd-and-bezout, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, primes-and-the-fundamental-theorem-of-arithmetic, inclusion-exclusion-and-the-pigeonhole-principle\n  11  equivalent-forms-of-completeness                21 items  <- formal-laurent-series-field, foundations-of-the-real-numbers, order-zorn-and-the-axiom-of-choice, sequences-and-limits, construction-of-the-natural-numbers, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, suprema-and-infima\n  11  eulerian-and-hamiltonian-graphs                 22 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers\n  11  finite-probability-spaces-and-random-variables  37 items  <- relations-functions-and-quotients, finite-counting-and-binomial-coefficients, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, rings-subrings-and-integral-domains, suprema-and-infima, foundations-of-the-real-numbers\n  11  graph-colouring                                  6 items  <- graphs-walks-and-connectivity, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, countability-and-uncountability\n  11  graphs-walks-and-connectivity-examples           8 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients\n  11  incidence-algebras-and-mobius-inversion         24 items  <- relations-functions-and-quotients, countability-and-uncountability, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, construction-of-the-natural-numbers, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, chains-antichains-sperner-and-dilworth, roots-and-rational-powers, inclusion-exclusion-and-the-pigeonhole-principle, order-zorn-and-the-axiom-of-choice, divisibility-gcd-and-bezout, primes-and-the-fundamental-theorem-of-arithmetic\n  11  induced-subgraphs-and-hereditary-graph-classes  23 items  <- graphs-walks-and-connectivity, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers\n  11  limsup-and-subsequential-limits-examples         9 items  <- limsup-and-subsequential-limits, monotone-sequences-and-cauchy-completeness, sequences-and-limits, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, foundations-of-the-real-numbers, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, roots-and-rational-powers\n  11  metric-spaces-examples                          12 items  <- metric-spaces, roots-and-rational-powers, suprema-and-infima, foundations-of-the-real-numbers, sequences-and-limits, construction-of-the-natural-numbers, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients\n  11  pell-equations-and-generalized-pell-orbits      17 items  <- regular-continued-fractions-and-diophantine-approximation\n  11  primes-and-the-fundamental-theorem-of-arithmetic-examples   9 items  <- primes-and-the-fundamental-theorem-of-arithmetic, divisibility-gcd-and-bezout, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, countability-and-uncountability, relations-functions-and-quotients\n  11  regular-continued-fractions-and-diophantine-approximation-examples   8 items  <- regular-continued-fractions-and-diophantine-approximation, divisibility-gcd-and-bezout\n  11  rings-subrings-and-integral-domains-examples    10 items  <- rings-subrings-and-integral-domains, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, monoids-groups-and-subgroups, divisibility-gcd-and-bezout, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients\n  11  series-and-nonnegative-tests                    25 items  <- roots-and-rational-powers, sequences-and-limits, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, construction-of-the-natural-numbers, suprema-and-infima, limsup-and-subsequential-limits\n  11  topological-spaces-and-continuity               26 items  <- relations-functions-and-quotients, countability-and-uncountability, construction-of-the-natural-numbers, sequences-and-limits, metric-spaces, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers\n  11  topology-of-r                                   22 items  <- construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, suprema-and-infima, sequences-and-limits, countability-and-uncountability, relations-functions-and-quotients, construction-of-the-natural-numbers, metric-spaces\n  11  trees-forests-and-spanning-trees                27 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, suprema-and-infima\n  11  vector-spaces-and-subspaces                     17 items  <- foundations-of-the-real-numbers, monoids-groups-and-subgroups, construction-of-the-natural-numbers, countability-and-uncountability, rings-subrings-and-integral-domains\n  12  absolute-convergence-and-rearrangement          26 items  <- series-and-nonnegative-tests, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, sequences-and-limits, roots-and-rational-powers, construction-of-the-natural-numbers, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients, limsup-and-subsequential-limits, countability-and-uncountability\n  12  compactness-in-metric-spaces                    26 items  <- relations-functions-and-quotients, countability-and-uncountability, sequences-and-limits, construction-of-the-natural-numbers, metric-spaces, order-zorn-and-the-axiom-of-choice, suprema-and-infima, filters-and-ultrafilters, completeness-and-uniform-continuity, foundations-of-the-real-numbers, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences\n  12  completeness-and-uniform-continuity-examples    12 items  <- completeness-and-uniform-continuity, construction-of-r-via-cauchy-sequences, metric-spaces, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, roots-and-rational-powers, countability-and-uncountability, suprema-and-infima, construction-of-the-natural-numbers, relations-functions-and-quotients\n  12  congruences-and-the-chinese-remainder-theorem-examples  10 items  <- congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, monoids-groups-and-subgroups, primes-and-the-fundamental-theorem-of-arithmetic, foundations-of-the-real-numbers\n  12  cosets-and-lagranges-theorem                    15 items  <- monoids-groups-and-subgroups, relations-functions-and-quotients, countability-and-uncountability, finite-counting-and-binomial-coefficients, divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-the-natural-numbers, congruences-and-the-chinese-remainder-theorem\n  12  eulerian-and-hamiltonian-graphs-examples         9 items  <- eulerian-and-hamiltonian-graphs, graphs-walks-and-connectivity\n  12  finite-probability-spaces-and-random-variables-examples  11 items  <- finite-probability-spaces-and-random-variables\n  12  graph-colouring-examples                         2 items  <- graph-colouring, graphs-walks-and-connectivity\n  12  incidence-algebras-and-mobius-inversion-examples   8 items  <- incidence-algebras-and-mobius-inversion, chains-antichains-sperner-and-dilworth, congruences-and-the-chinese-remainder-theorem, countability-and-uncountability, construction-of-the-natural-numbers\n  12  induced-subgraphs-and-hereditary-graph-classes-examples  12 items  <- induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity\n  12  limits-of-real-functions                        21 items  <- topology-of-r, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, sequences-and-limits, suprema-and-infima, construction-of-the-natural-numbers, countability-and-uncountability\n  12  linear-independence-bases-and-dimension         20 items  <- vector-spaces-and-subspaces, foundations-of-the-real-numbers, monoids-groups-and-subgroups, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, rings-subrings-and-integral-domains\n  12  matchings-covers-menger-and-network-flows       26 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, relations-functions-and-quotients, construction-of-the-natural-numbers, eulerian-and-hamiltonian-graphs, rings-subrings-and-integral-domains\n  12  pell-equations-and-generalized-pell-orbits-examples   9 items  <- pell-equations-and-generalized-pell-orbits, regular-continued-fractions-and-diophantine-approximation\n  12  series-and-nonnegative-tests-examples           12 items  <- series-and-nonnegative-tests, construction-of-the-natural-numbers, roots-and-rational-powers, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, suprema-and-infima, construction-of-r-via-cauchy-sequences, limsup-and-subsequential-limits, sequences-and-limits\n  12  subspaces-products-and-quotients                24 items  <- topological-spaces-and-continuity, metric-spaces, countability-and-uncountability, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, suprema-and-infima\n  12  topological-spaces-and-continuity-examples      14 items  <- topological-spaces-and-continuity, countability-and-uncountability, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, metric-spaces, foundations-of-the-real-numbers, suprema-and-infima, construction-of-the-natural-numbers\n  12  topology-of-r-examples                          11 items  <- topology-of-r, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, suprema-and-infima, construction-of-the-natural-numbers, countability-and-uncountability\n  12  trees-forests-and-spanning-trees-examples       12 items  <- trees-forests-and-spanning-trees, graphs-walks-and-connectivity\n  12  vector-spaces-and-subspaces-examples             8 items  <- vector-spaces-and-subspaces, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, countability-and-uncountability, monoids-groups-and-subgroups\n  13  absolute-convergence-and-rearrangement-examples  14 items  <- absolute-convergence-and-rearrangement, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, foundations-of-the-real-numbers, sequences-and-limits, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, relations-functions-and-quotients, suprema-and-infima\n  13  cantor-set-baire-and-measure-zero               24 items  <- topology-of-r, countability-and-uncountability, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, series-and-nonnegative-tests, roots-and-rational-powers, foundations-of-the-real-numbers, suprema-and-infima, sequences-and-limits, deferred-set-theory-beyond-choice, compactness-in-metric-spaces\n  13  compactness-in-metric-spaces-examples           11 items  <- metric-spaces, compactness-in-metric-spaces, completeness-and-uniform-continuity, countability-and-uncountability, order-zorn-and-the-axiom-of-choice, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, sequences-and-limits, monotone-sequences-and-cauchy-completeness, suprema-and-infima, relations-functions-and-quotients\n  13  continuity-ivt-evt-and-uniform-continuity       21 items  <- limits-of-real-functions, topology-of-r, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, countability-and-uncountability, sequences-and-limits, construction-of-r-via-cauchy-sequences, suprema-and-infima, roots-and-rational-powers, construction-of-the-natural-numbers, metric-spaces, completeness-and-uniform-continuity, compactness-in-metric-spaces\n  13  cosets-and-lagranges-theorem-examples            8 items  <- cosets-and-lagranges-theorem, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, countability-and-uncountability, relations-functions-and-quotients\n  13  limits-of-real-functions-examples               12 items  <- limits-of-real-functions, topology-of-r, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, sequences-and-limits\n  13  linear-independence-bases-and-dimension-examples   8 items  <- linear-independence-bases-and-dimension, vector-spaces-and-subspaces, monoids-groups-and-subgroups, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, rings-subrings-and-integral-domains\n  13  linear-maps-rank-nullity-and-quotient-spaces     7 items  <- vector-spaces-and-subspaces, foundations-of-the-real-numbers, relations-functions-and-quotients, linear-independence-bases-and-dimension, monoids-groups-and-subgroups, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients\n  13  matchings-covers-menger-and-network-flows-examples   6 items  <- matchings-covers-menger-and-network-flows, graphs-walks-and-connectivity\n  13  normal-subgroups-and-quotient-groups            18 items  <- monoids-groups-and-subgroups, cosets-and-lagranges-theorem, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, congruences-and-the-chinese-remainder-theorem\n  13  ordinals-and-transfinite-recursion              23 items  <- relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, construction-of-the-natural-numbers, the-zfc-axioms-and-basic-set-constructions, countability-and-uncountability, linear-independence-bases-and-dimension, deferred-set-theory-beyond-choice, compactness-in-metric-spaces\n  13  ramsey-theory                                   21 items  <- countability-and-uncountability, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, graphs-walks-and-connectivity, inclusion-exclusion-and-the-pigeonhole-principle, roots-and-rational-powers, limits-of-real-functions, relations-functions-and-quotients\n  14  cantor-set-baire-and-measure-zero-examples      12 items  <- cantor-set-baire-and-measure-zero, countability-and-uncountability, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, topology-of-r, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, sequences-and-limits, relations-functions-and-quotients\n  14  continuity-ivt-evt-and-uniform-continuity-examples  10 items  <- metric-spaces, continuity-ivt-evt-and-uniform-continuity, completeness-and-uniform-continuity, limits-of-real-functions, construction-of-r-via-cauchy-sequences, suprema-and-infima, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, topology-of-r, sequences-and-limits, roots-and-rational-powers\n  14  extremal-graph-theory                           20 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, graph-colouring, ramsey-theory, inclusion-exclusion-and-the-pigeonhole-principle, monotone-sequences-and-cauchy-completeness\n  14  group-homomorphisms-and-the-isomorphism-theorems  20 items  <- monoids-groups-and-subgroups, relations-functions-and-quotients, normal-subgroups-and-quotient-groups, cosets-and-lagranges-theorem\n  14  linear-maps-rank-nullity-and-quotient-spaces-examples   1 items  <- vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, relations-functions-and-quotients, foundations-of-the-real-numbers, construction-of-the-natural-numbers\n  14  matrices-and-the-matrix-of-a-linear-map         32 items  <- vector-spaces-and-subspaces, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, linear-maps-rank-nullity-and-quotient-spaces, relations-functions-and-quotients, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients\n  14  monotone-functions-and-discontinuities          32 items  <- foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, sequences-and-limits, relations-functions-and-quotients, limits-of-real-functions, topology-of-r, suprema-and-infima, continuity-ivt-evt-and-uniform-continuity, countability-and-uncountability, construction-of-the-natural-numbers, series-and-nonnegative-tests, roots-and-rational-powers, cantor-set-baire-and-measure-zero, limsup-and-subsequential-limits, divisibility-gcd-and-bezout, rings-subrings-and-integral-domains, metric-spaces, vector-spaces-and-subspaces, linear-independence-bases-and-dimension, order-zorn-and-the-axiom-of-choice\n  14  normal-subgroups-and-quotient-groups-examples    5 items  <- normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, congruences-and-the-chinese-remainder-theorem\n  14  ordinal-arithmetic                              28 items  <- ordinals-and-transfinite-recursion, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients\n  14  ramsey-theory-examples                           8 items  <- ramsey-theory, inclusion-exclusion-and-the-pigeonhole-principle, graphs-walks-and-connectivity, construction-of-the-natural-numbers, sequences-and-limits, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers\n  14  subspaces-products-and-quotients-examples       13 items  <- subspaces-products-and-quotients, metric-spaces, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, suprema-and-infima, cantor-set-baire-and-measure-zero, series-and-nonnegative-tests, roots-and-rational-powers, sequences-and-limits, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, limits-of-real-functions, countability-and-uncountability, relations-functions-and-quotients\n  15  cardinal-arithmetic-and-cofinality              26 items  <- ordinals-and-transfinite-recursion, countability-and-uncountability, relations-functions-and-quotients, ordinal-arithmetic, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers\n  15  connectedness                                   28 items  <- relations-functions-and-quotients, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, order-zorn-and-the-axiom-of-choice, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, metric-spaces, topology-of-r, suprema-and-infima, subspaces-products-and-quotients, construction-of-the-natural-numbers, countability-and-uncountability, ordinal-arithmetic, ordinals-and-transfinite-recursion\n  15  cyclic-groups-and-direct-products                6 items  <- monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients, divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups\n  15  extremal-graph-theory-examples                   9 items  <- extremal-graph-theory, graphs-walks-and-connectivity, ramsey-theory, graph-colouring\n  15  free-groups-and-presentations                   32 items  <- construction-of-the-natural-numbers, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, roots-and-rational-powers, cosets-and-lagranges-theorem\n  15  gaussian-elimination-and-row-reduction          29 items  <- vector-spaces-and-subspaces, foundations-of-the-real-numbers, matrices-and-the-matrix-of-a-linear-map, construction-of-the-natural-numbers, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, finite-counting-and-binomial-coefficients, countability-and-uncountability, construction-of-r-via-cauchy-sequences\n  15  group-actions-and-cayleys-theorem               37 items  <- monoids-groups-and-subgroups, relations-functions-and-quotients, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem, finite-counting-and-binomial-coefficients, normal-subgroups-and-quotient-groups, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, inclusion-exclusion-and-the-pigeonhole-principle\n  15  group-homomorphisms-and-the-isomorphism-theorems-examples   5 items  <- group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients\n  15  ideals-and-quotient-rings                       24 items  <- rings-subrings-and-integral-domains, monoids-groups-and-subgroups, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, cosets-and-lagranges-theorem, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, relations-functions-and-quotients\n  15  matrices-and-the-matrix-of-a-linear-map-examples   7 items  <- matrices-and-the-matrix-of-a-linear-map, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers\n  15  monotone-functions-and-discontinuities-examples  11 items  <- monotone-functions-and-discontinuities, topology-of-r, construction-of-r-via-cauchy-sequences, limits-of-real-functions, foundations-of-the-real-numbers, countability-and-uncountability, series-and-nonnegative-tests, relations-functions-and-quotients, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, cantor-set-baire-and-measure-zero, suprema-and-infima, sequences-and-limits, vector-spaces-and-subspaces, metric-spaces, order-zorn-and-the-axiom-of-choice\n  15  ordinal-arithmetic-examples                      8 items  <- ordinal-arithmetic, ordinals-and-transfinite-recursion, construction-of-the-natural-numbers, countability-and-uncountability\n  15  positive-definite-binary-quadratic-forms-and-reduction  23 items  <- divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, matrices-and-the-matrix-of-a-linear-map, construction-of-the-natural-numbers\n  15  the-derivative-and-mean-value-theorems          19 items  <- limits-of-real-functions, topology-of-r, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, continuity-ivt-evt-and-uniform-continuity, roots-and-rational-powers, construction-of-the-natural-numbers, monotone-functions-and-discontinuities, relations-functions-and-quotients, suprema-and-infima, completeness-and-uniform-continuity\n  15  the-riemann-integral                            18 items  <- monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, suprema-and-infima, construction-of-the-natural-numbers, foundations-of-the-real-numbers, sequences-and-limits, relations-functions-and-quotients, monotone-functions-and-discontinuities, limsup-and-subsequential-limits, order-zorn-and-the-axiom-of-choice, continuity-ivt-evt-and-uniform-continuity, topology-of-r, cantor-set-baire-and-measure-zero, countability-and-uncountability, limits-of-real-functions, construction-of-r-via-cauchy-sequences\n  16  cardinal-arithmetic-and-cofinality-examples      8 items  <- cardinal-arithmetic-and-cofinality, countability-and-uncountability, ordinals-and-transfinite-recursion, relations-functions-and-quotients, construction-of-the-natural-numbers, cantor-set-baire-and-measure-zero, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, sequences-and-limits, ordinal-arithmetic\n  16  cayley-graphs-word-metrics-and-quasi-isometry   60 items  <- graphs-walks-and-connectivity, construction-of-the-natural-numbers, metric-spaces, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, monoids-groups-and-subgroups, free-groups-and-presentations, group-actions-and-cayleys-theorem, group-homomorphisms-and-the-isomorphism-theorems, completeness-and-uniform-continuity, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups, limits-of-real-functions\n  16  compactness                                     31 items  <- topological-spaces-and-continuity, countability-and-uncountability, compactness-in-metric-spaces, order-zorn-and-the-axiom-of-choice, metric-spaces, subspaces-products-and-quotients, filters-and-ultrafilters, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, relations-functions-and-quotients, sequences-and-limits, connectedness, ordinals-and-transfinite-recursion, ordinal-arithmetic, topology-of-r\n  16  cyclic-groups-and-direct-products-examples       2 items  <- cyclic-groups-and-direct-products, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, congruences-and-the-chinese-remainder-theorem, group-homomorphisms-and-the-isomorphism-theorems\n  16  darboux-lhopital-and-taylor                     20 items  <- the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, roots-and-rational-powers, foundations-of-the-real-numbers, topology-of-r, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, limsup-and-subsequential-limits\n  16  euclidean-domains-pids-and-unique-factorisation   7 items  <- rings-subrings-and-integral-domains, monoids-groups-and-subgroups, construction-of-the-natural-numbers, ideals-and-quotient-rings\n  16  free-groups-and-presentations-examples          12 items  <- free-groups-and-presentations, monoids-groups-and-subgroups, congruences-and-the-chinese-remainder-theorem, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, cyclic-groups-and-direct-products, construction-of-r-via-cauchy-sequences\n  16  free-products-and-amalgamation                  27 items  <- monoids-groups-and-subgroups, construction-of-the-natural-numbers, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, free-groups-and-presentations, cosets-and-lagranges-theorem, relations-functions-and-quotients\n  16  gaussian-elimination-and-row-reduction-examples   9 items  <- gaussian-elimination-and-row-reduction, construction-of-r-via-cauchy-sequences, matrices-and-the-matrix-of-a-linear-map, congruences-and-the-chinese-remainder-theorem\n  16  group-actions-and-cayleys-theorem-examples      17 items  <- group-actions-and-cayleys-theorem, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, group-homomorphisms-and-the-isomorphism-theorems\n  16  ideals-and-quotient-rings-examples               6 items  <- ideals-and-quotient-rings, construction-of-r-via-cauchy-sequences, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, rings-subrings-and-integral-domains\n  16  modules-and-module-homomorphisms                14 items  <- rings-subrings-and-integral-domains, monoids-groups-and-subgroups, ideals-and-quotient-rings, normal-subgroups-and-quotient-groups, relations-functions-and-quotients, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem\n  16  properties-of-the-integral-and-the-working-ftc  20 items  <- the-riemann-integral, suprema-and-infima, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, foundations-of-the-real-numbers, construction-of-the-natural-numbers, countability-and-uncountability, continuity-ivt-evt-and-uniform-continuity, topology-of-r, monotone-functions-and-discontinuities, completeness-and-uniform-continuity, metric-spaces, the-derivative-and-mean-value-theorems, limits-of-real-functions, absolute-convergence-and-rearrangement, series-and-nonnegative-tests, sequences-and-limits\n  16  symmetric-groups-and-the-sign-homomorphism      14 items  <- monoids-groups-and-subgroups, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, group-actions-and-cayleys-theorem, construction-of-r-via-cauchy-sequences, group-homomorphisms-and-the-isomorphism-theorems\n  16  the-derivative-and-mean-value-theorems-examples  10 items  <- the-derivative-and-mean-value-theorems, roots-and-rational-powers, foundations-of-the-real-numbers, topology-of-r, limits-of-real-functions, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, relations-functions-and-quotients, suprema-and-infima, completeness-and-uniform-continuity\n  16  the-gauge-integral-and-cousins-lemma            18 items  <- the-riemann-integral, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, countability-and-uncountability, the-derivative-and-mean-value-theorems, foundations-of-the-real-numbers, construction-of-the-natural-numbers, limits-of-real-functions\n  16  the-riemann-integral-examples                   10 items  <- the-riemann-integral, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, suprema-and-infima, limits-of-real-functions, monotone-functions-and-discontinuities, cantor-set-baire-and-measure-zero, topology-of-r, countability-and-uncountability, sequences-and-limits, construction-of-r-via-cauchy-sequences\n  16  the-structure-of-finite-abelian-groups          27 items  <- normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, cyclic-groups-and-direct-products, group-homomorphisms-and-the-isomorphism-theorems, construction-of-the-natural-numbers, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients\n  17  bounded-variation-and-riemann-stieltjes         33 items  <- the-riemann-integral, roots-and-rational-powers, suprema-and-infima, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, limits-of-real-functions, continuity-ivt-evt-and-uniform-continuity, series-and-nonnegative-tests, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, completeness-and-uniform-continuity, construction-of-r-via-cauchy-sequences, absolute-convergence-and-rearrangement, countability-and-uncountability, topology-of-r\n  17  compactness-examples                             8 items  <- foundations-of-the-real-numbers, compactness, topological-spaces-and-continuity, countability-and-uncountability, subspaces-products-and-quotients, construction-of-the-natural-numbers, cantor-set-baire-and-measure-zero, compactness-in-metric-spaces, monotone-sequences-and-cauchy-completeness, metric-spaces, topology-of-r, ordinal-arithmetic, ordinals-and-transfinite-recursion, continuity-ivt-evt-and-uniform-continuity, construction-of-r-via-cauchy-sequences, connectedness, suprema-and-infima, order-zorn-and-the-axiom-of-choice\n  17  conjugacy-and-simplicity-in-the-symmetric-groups  18 items  <- monoids-groups-and-subgroups, symmetric-groups-and-the-sign-homomorphism, group-actions-and-cayleys-theorem, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups\n  17  convexity                                       19 items  <- monotone-sequences-and-cauchy-completeness, continuity-ivt-evt-and-uniform-continuity, completeness-and-uniform-continuity, limits-of-real-functions, the-derivative-and-mean-value-theorems, monotone-functions-and-discontinuities, darboux-lhopital-and-taylor, construction-of-the-natural-numbers, roots-and-rational-powers, foundations-of-the-real-numbers, relations-functions-and-quotients\n  17  countability-axioms-and-cardinal-functions      35 items  <- topological-spaces-and-continuity, countability-and-uncountability, ordinals-and-transfinite-recursion, cardinal-arithmetic-and-cofinality, relations-functions-and-quotients, compactness, metric-spaces, subspaces-products-and-quotients, construction-of-r-via-cauchy-sequences, order-zorn-and-the-axiom-of-choice, monotone-sequences-and-cauchy-completeness\n  17  darboux-lhopital-and-taylor-examples             8 items  <- limits-of-real-functions, darboux-lhopital-and-taylor, the-derivative-and-mean-value-theorems, roots-and-rational-powers, foundations-of-the-real-numbers, monotone-functions-and-discontinuities, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers\n  17  decision-problems-for-finitely-presented-groups  27 items  <- free-groups-and-presentations, free-products-and-amalgamation\n  17  euclidean-domains-pids-and-unique-factorisation-examples   1 items  <- euclidean-domains-pids-and-unique-factorisation, rings-subrings-and-integral-domains, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout\n  17  free-products-and-amalgamation-examples          8 items  <- free-products-and-amalgamation, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products, free-groups-and-presentations, group-homomorphisms-and-the-isomorphism-theorems\n  17  function-space-topologies                       24 items  <- subspaces-products-and-quotients, topological-spaces-and-continuity, construction-of-the-natural-numbers, suprema-and-infima, foundations-of-the-real-numbers, metric-spaces, compactness-in-metric-spaces, compactness, construction-of-r-via-cauchy-sequences, completeness-and-uniform-continuity, relations-functions-and-quotients, monotone-sequences-and-cauchy-completeness, sequences-and-limits, vector-spaces-and-subspaces, countability-and-uncountability\n  17  hnn-extensions-and-brittons-lemma               23 items  <- monoids-groups-and-subgroups, free-groups-and-presentations, free-products-and-amalgamation, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem, countability-and-uncountability\n  17  improper-integrals                              25 items  <- limits-of-real-functions, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, construction-of-r-via-cauchy-sequences, suprema-and-infima, series-and-nonnegative-tests, roots-and-rational-powers, the-derivative-and-mean-value-theorems, monotone-functions-and-discontinuities, continuity-ivt-evt-and-uniform-continuity\n  17  modules-and-module-homomorphisms-examples        2 items  <- modules-and-module-homomorphisms, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, ideals-and-quotient-rings, rings-subrings-and-integral-domains\n  17  nets-and-filters                                28 items  <- relations-functions-and-quotients, topological-spaces-and-continuity, subspaces-products-and-quotients, filters-and-ultrafilters, compactness, countability-and-uncountability, sequences-and-limits\n  17  polynomial-rings-and-roots                      44 items  <- rings-subrings-and-integral-domains, construction-of-the-natural-numbers, foundations-of-the-real-numbers, euclidean-domains-pids-and-unique-factorisation, ideals-and-quotient-rings, monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients, the-structure-of-finite-abelian-groups, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem\n  17  properties-of-the-integral-and-the-working-ftc-examples  13 items  <- properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, roots-and-rational-powers, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, suprema-and-infima, series-and-nonnegative-tests, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients, limits-of-real-functions, topology-of-r, cantor-set-baire-and-measure-zero, countability-and-uncountability, sequences-and-limits, metric-spaces\n  17  rn-as-a-normed-space                            22 items  <- vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, metric-spaces, foundations-of-the-real-numbers, linear-independence-bases-and-dimension, roots-and-rational-powers, construction-of-the-natural-numbers, countability-and-uncountability, suprema-and-infima, completeness-and-uniform-continuity, compactness-in-metric-spaces, sequences-and-limits, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, topology-of-r, order-zorn-and-the-axiom-of-choice, the-derivative-and-mean-value-theorems, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, monotone-functions-and-discontinuities, series-and-nonnegative-tests, absolute-convergence-and-rearrangement, relations-functions-and-quotients\n  17  separation-axioms                               28 items  <- topological-spaces-and-continuity, countability-and-uncountability, subspaces-products-and-quotients, cantor-set-baire-and-measure-zero, topology-of-r, metric-spaces, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, construction-of-the-natural-numbers, suprema-and-infima, ordinals-and-transfinite-recursion, connectedness, compactness\n  17  simplicial-trees-and-group-actions              25 items  <- cayley-graphs-word-metrics-and-quasi-isometry, trees-forests-and-spanning-trees, group-actions-and-cayleys-theorem, monoids-groups-and-subgroups\n  17  subgroups-of-free-groups-and-schreier-rewriting  21 items  <- cosets-and-lagranges-theorem, free-groups-and-presentations, relations-functions-and-quotients, countability-and-uncountability, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, free-products-and-amalgamation\n  17  symmetric-groups-and-the-sign-homomorphism-examples   7 items  <- monoids-groups-and-subgroups, symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, normal-subgroups-and-quotient-groups, cosets-and-lagranges-theorem\n  17  the-structure-of-finite-abelian-groups-examples   8 items  <- the-structure-of-finite-abelian-groups, congruences-and-the-chinese-remainder-theorem, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients\n  17  uniform-convergence-of-functions                19 items  <- vector-spaces-and-subspaces, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, series-and-nonnegative-tests, suprema-and-infima, metric-spaces, completeness-and-uniform-continuity, compactness-in-metric-spaces, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, the-derivative-and-mean-value-theorems, limits-of-real-functions, topology-of-r, absolute-convergence-and-rearrangement, order-zorn-and-the-axiom-of-choice, construction-of-the-natural-numbers\n  18  approximation-and-compactness-in-ck             29 items  <- uniform-convergence-of-functions, compactness-in-metric-spaces, completeness-and-uniform-continuity, countability-and-uncountability, roots-and-rational-powers, finite-counting-and-binomial-coefficients, metric-spaces, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, the-derivative-and-mean-value-theorems, limits-of-real-functions\n  18  arc-length-and-rectifiable-curves               15 items  <- rn-as-a-normed-space, the-riemann-integral, foundations-of-the-real-numbers, limsup-and-subsequential-limits, bounded-variation-and-riemann-stieltjes, linear-independence-bases-and-dimension, monotone-functions-and-discontinuities, completeness-and-uniform-continuity, metric-spaces, uniform-convergence-of-functions, continuity-ivt-evt-and-uniform-continuity, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc\n  18  bounded-variation-and-riemann-stieltjes-examples  12 items  <- bounded-variation-and-riemann-stieltjes, foundations-of-the-real-numbers, the-derivative-and-mean-value-theorems, completeness-and-uniform-continuity, roots-and-rational-powers, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities, monotone-sequences-and-cauchy-completeness, metric-spaces, continuity-ivt-evt-and-uniform-continuity, construction-of-r-via-cauchy-sequences, limits-of-real-functions, the-riemann-integral, series-and-nonnegative-tests, suprema-and-infima, properties-of-the-integral-and-the-working-ftc, sequences-and-limits\n  18  composition-series-and-solvable-groups          27 items  <- normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, conjugacy-and-simplicity-in-the-symmetric-groups, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, construction-of-the-natural-numbers, cyclic-groups-and-direct-products, group-actions-and-cayleys-theorem, primes-and-the-fundamental-theorem-of-arithmetic\n  18  conjugacy-and-simplicity-in-the-symmetric-groups-examples   8 items  <- conjugacy-and-simplicity-in-the-symmetric-groups, symmetric-groups-and-the-sign-homomorphism, normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups\n  18  connectedness-examples                           8 items  <- connectedness, subspaces-products-and-quotients, metric-spaces, rn-as-a-normed-space, vector-spaces-and-subspaces, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, topology-of-r, foundations-of-the-real-numbers, ordinal-arithmetic, ordinals-and-transfinite-recursion, suprema-and-infima, sequences-and-limits\n  18  convexity-examples                               4 items  <- convexity, foundations-of-the-real-numbers, roots-and-rational-powers, relations-functions-and-quotients, monotone-functions-and-discontinuities, the-derivative-and-mean-value-theorems, darboux-lhopital-and-taylor\n  18  decision-problems-for-finitely-presented-groups-examples   6 items  <- decision-problems-for-finitely-presented-groups, free-groups-and-presentations\n  18  determinants-of-matrices-over-a-commutative-ring  24 items  <- rings-subrings-and-integral-domains, relations-functions-and-quotients, construction-of-the-natural-numbers, monoids-groups-and-subgroups, vector-spaces-and-subspaces, matrices-and-the-matrix-of-a-linear-map, symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, polynomial-rings-and-roots, gaussian-elimination-and-row-reduction\n  18  field-extensions-and-the-complex-numbers        21 items  <- foundations-of-the-real-numbers, rings-subrings-and-integral-domains, polynomial-rings-and-roots, ideals-and-quotient-rings, construction-of-r-via-cauchy-sequences\n  18  formal-power-series                             22 items  <- rings-subrings-and-integral-domains, polynomial-rings-and-roots, foundations-of-the-real-numbers, ideals-and-quotient-rings, finite-counting-and-binomial-coefficients, construction-of-r-via-cauchy-sequences, formal-laurent-series-field\n  18  function-space-topologies-examples               9 items  <- function-space-topologies, metric-spaces, compactness-in-metric-spaces, monotone-sequences-and-cauchy-completeness, completeness-and-uniform-continuity, topological-spaces-and-continuity, suprema-and-infima, foundations-of-the-real-numbers, subspaces-products-and-quotients, relations-functions-and-quotients\n  18  graphs-of-groups-and-bass-serre-theory          26 items  <- monoids-groups-and-subgroups, simplicial-trees-and-group-actions, free-groups-and-presentations, hnn-extensions-and-brittons-lemma, free-products-and-amalgamation, cosets-and-lagranges-theorem, group-actions-and-cayleys-theorem, subgroups-of-free-groups-and-schreier-rewriting\n  18  hausdorff-via-the-diagonal                      13 items  <- topological-spaces-and-continuity, subspaces-products-and-quotients, separation-axioms, construction-of-the-natural-numbers, compactness, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, countability-and-uncountability, metric-spaces, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences\n  18  hnn-extensions-and-brittons-lemma-examples       6 items  <- hnn-extensions-and-brittons-lemma\n  18  improper-integrals-examples                     12 items  <- improper-integrals, properties-of-the-integral-and-the-working-ftc, monotone-sequences-and-cauchy-completeness, absolute-convergence-and-rearrangement, series-and-nonnegative-tests, foundations-of-the-real-numbers, the-derivative-and-mean-value-theorems, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, limits-of-real-functions\n  18  nets-and-filters-examples                        8 items  <- nets-and-filters, topological-spaces-and-continuity, finite-counting-and-binomial-coefficients, absolute-convergence-and-rearrangement, countability-and-uncountability, series-and-nonnegative-tests, foundations-of-the-real-numbers, filters-and-ultrafilters, compactness, subspaces-products-and-quotients, construction-of-the-natural-numbers, suprema-and-infima\n  18  polynomial-rings-and-roots-examples             14 items  <- polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, ideals-and-quotient-rings, divisibility-gcd-and-bezout, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, construction-of-the-natural-numbers\n  18  power-series-and-real-analytic-functions        32 items  <- series-and-nonnegative-tests, absolute-convergence-and-rearrangement, roots-and-rational-powers, limsup-and-subsequential-limits, monotone-sequences-and-cauchy-completeness, uniform-convergence-of-functions, continuity-ivt-evt-and-uniform-continuity, foundations-of-the-real-numbers, sequences-and-limits, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, darboux-lhopital-and-taylor, topology-of-r, limits-of-real-functions, equivalent-forms-of-completeness, construction-of-r-via-cauchy-sequences\n  18  primitive-roots-and-unit-groups-modulo-n        28 items  <- congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups, divisibility-gcd-and-bezout, cyclic-groups-and-direct-products, rings-subrings-and-integral-domains, polynomial-rings-and-roots, cosets-and-lagranges-theorem, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, primes-and-the-fundamental-theorem-of-arithmetic, group-homomorphisms-and-the-isomorphism-theorems, the-structure-of-finite-abelian-groups\n  18  rn-as-a-normed-space-examples                   12 items  <- rn-as-a-normed-space, the-derivative-and-mean-value-theorems, foundations-of-the-real-numbers, roots-and-rational-powers, linear-independence-bases-and-dimension, monotone-sequences-and-cauchy-completeness, continuity-ivt-evt-and-uniform-continuity, metric-spaces, suprema-and-infima, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, vector-spaces-and-subspaces, relations-functions-and-quotients, absolute-convergence-and-rearrangement, series-and-nonnegative-tests, construction-of-r-via-cauchy-sequences, countability-and-uncountability, construction-of-the-natural-numbers, compactness-in-metric-spaces, completeness-and-uniform-continuity, limsup-and-subsequential-limits\n  18  separation-axioms-examples                       8 items  <- topological-spaces-and-continuity, separation-axioms, subspaces-products-and-quotients, countability-and-uncountability, monotone-sequences-and-cauchy-completeness, cantor-set-baire-and-measure-zero, metric-spaces, foundations-of-the-real-numbers, suprema-and-infima, topology-of-r, ordinal-arithmetic, ordinals-and-transfinite-recursion\n  18  simplicial-trees-and-group-actions-examples      6 items  <- simplicial-trees-and-group-actions, cayley-graphs-word-metrics-and-quasi-isometry\n  18  small-cancellation-and-dehn-algorithms          26 items  <- free-groups-and-presentations, normal-subgroups-and-quotient-groups, finite-counting-and-binomial-coefficients, decision-problems-for-finitely-presented-groups, monoids-groups-and-subgroups\n  18  subgroups-of-free-groups-and-schreier-rewriting-examples   7 items  <- subgroups-of-free-groups-and-schreier-rewriting\n  18  the-field-of-fractions-and-localisation         22 items  <- rings-subrings-and-integral-domains, foundations-of-the-real-numbers, polynomial-rings-and-roots, ideals-and-quotient-rings\n  18  the-fundamental-theorems-of-calculus            10 items  <- properties-of-the-integral-and-the-working-ftc, the-riemann-integral, the-derivative-and-mean-value-theorems, countability-and-uncountability, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, limits-of-real-functions, uniform-convergence-of-functions, compactness-in-metric-spaces, bounded-variation-and-riemann-stieltjes\n  18  the-riemann-integral-in-rn-and-jordan-content   30 items  <- metric-spaces, rn-as-a-normed-space, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, the-riemann-integral, construction-of-the-natural-numbers, suprema-and-infima, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, compactness-in-metric-spaces, series-and-nonnegative-tests, countability-and-uncountability, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities, limsup-and-subsequential-limits, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, completeness-and-uniform-continuity\n  18  the-topology-of-euclidean-space                 23 items  <- subspaces-products-and-quotients, continuity-ivt-evt-and-uniform-continuity, rn-as-a-normed-space, topological-spaces-and-continuity, metric-spaces, suprema-and-infima, compactness-in-metric-spaces, compactness, countability-and-uncountability, connectedness, finite-counting-and-binomial-coefficients, monotone-sequences-and-cauchy-completeness, vector-spaces-and-subspaces, foundations-of-the-real-numbers, construction-of-the-natural-numbers, topology-of-r, order-zorn-and-the-axiom-of-choice, linear-independence-bases-and-dimension\n  18  the-total-derivative                            17 items  <- rn-as-a-normed-space, linear-independence-bases-and-dimension, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, metric-spaces\n  18  uniform-convergence-of-functions-examples        8 items  <- uniform-convergence-of-functions, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, continuity-ivt-evt-and-uniform-continuity, topology-of-r, suprema-and-infima, construction-of-r-via-cauchy-sequences, the-derivative-and-mean-value-theorems\n  19  approximation-and-compactness-in-ck-examples     7 items  <- approximation-and-compactness-in-ck, uniform-convergence-of-functions, compactness-in-metric-spaces, monotone-sequences-and-cauchy-completeness, countability-and-uncountability\n  19  ascoli-arzela                                   24 items  <- compactness, topological-spaces-and-continuity, function-space-topologies, metric-spaces, subspaces-products-and-quotients, compactness-in-metric-spaces, approximation-and-compactness-in-ck, uniform-convergence-of-functions, foundations-of-the-real-numbers\n  19  combinatorial-classes-and-the-symbolic-method   38 items  <- finite-counting-and-binomial-coefficients, formal-power-series, construction-of-r-via-cauchy-sequences, group-actions-and-cayleys-theorem, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem\n  19  composition-series-and-solvable-groups-examples  10 items  <- composition-series-and-solvable-groups, cyclic-groups-and-direct-products, conjugacy-and-simplicity-in-the-symmetric-groups, normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, group-homomorphisms-and-the-isomorphism-theorems\n  19  determinants-of-matrices-over-a-commutative-ring-examples   7 items  <- determinants-of-matrices-over-a-commutative-ring, symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, rings-subrings-and-integral-domains\n  19  dual-spaces-bilinear-forms-and-inertia          33 items  <- linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, vector-spaces-and-subspaces, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, determinants-of-matrices-over-a-commutative-ring\n  19  equivalent-forms-of-completeness-examples       10 items  <- the-field-of-fractions-and-localisation, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, polynomial-rings-and-roots, equivalent-forms-of-completeness, formal-laurent-series-field, sequences-and-limits, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, suprema-and-infima, construction-of-the-natural-numbers\n  19  field-extensions-and-the-complex-numbers-examples   7 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, congruences-and-the-chinese-remainder-theorem, ideals-and-quotient-rings\n  19  formal-power-series-examples                     9 items  <- formal-power-series, finite-counting-and-binomial-coefficients, congruences-and-the-chinese-remainder-theorem\n  19  free-modules-and-exact-sequences                29 items  <- modules-and-module-homomorphisms, determinants-of-matrices-over-a-commutative-ring, relations-functions-and-quotients, monoids-groups-and-subgroups, order-zorn-and-the-axiom-of-choice, rings-subrings-and-integral-domains, euclidean-domains-pids-and-unique-factorisation, construction-of-r-via-cauchy-sequences\n  19  graphs-of-groups-and-bass-serre-theory-examples   7 items  <- graphs-of-groups-and-bass-serre-theory, simplicial-trees-and-group-actions\n  19  hausdorff-via-the-diagonal-examples              8 items  <- hausdorff-via-the-diagonal, subspaces-products-and-quotients, metric-spaces, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, separation-axioms, countability-and-uncountability, continuity-ivt-evt-and-uniform-continuity, compactness, construction-of-r-via-cauchy-sequences, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients\n  19  hereditary-and-productive-separation            24 items  <- separation-axioms, subspaces-products-and-quotients, topological-spaces-and-continuity, order-zorn-and-the-axiom-of-choice, monotone-sequences-and-cauchy-completeness, metric-spaces, countability-and-uncountability, compactness, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients, cardinal-arithmetic-and-cofinality, cantor-set-baire-and-measure-zero, foundations-of-the-real-numbers, hausdorff-via-the-diagonal, ordinal-arithmetic\n  19  homotopy-and-homotopy-equivalence               22 items  <- topological-spaces-and-continuity, subspaces-products-and-quotients, monotone-sequences-and-cauchy-completeness, connectedness, metric-spaces, relations-functions-and-quotients, rn-as-a-normed-space, the-topology-of-euclidean-space, countability-and-uncountability\n  19  inverse-and-implicit-function-theorems           5 items  <- the-total-derivative, relations-functions-and-quotients, rn-as-a-normed-space, metric-spaces, completeness-and-uniform-continuity\n  19  permutation-statistics-inversions-and-eulerian-numbers  29 items  <- symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, relations-functions-and-quotients, formal-power-series\n  19  plane-graphs-euler-and-the-five-colour-theorem  36 items  <- the-topology-of-euclidean-space, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, metric-spaces, connectedness, topological-spaces-and-continuity, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, graphs-walks-and-connectivity, construction-of-the-natural-numbers, suprema-and-infima, trees-forests-and-spanning-trees, matchings-covers-menger-and-network-flows, inclusion-exclusion-and-the-pigeonhole-principle, graph-colouring\n  19  power-series-and-real-analytic-functions-examples   8 items  <- series-and-nonnegative-tests, power-series-and-real-analytic-functions, absolute-convergence-and-rearrangement, foundations-of-the-real-numbers, limsup-and-subsequential-limits, sequences-and-limits, finite-counting-and-binomial-coefficients, uniform-convergence-of-functions, equivalent-forms-of-completeness\n  19  primitive-roots-and-unit-groups-modulo-n-examples  11 items  <- primitive-roots-and-unit-groups-modulo-n, congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups\n  19  quadratic-residues-and-the-legendre-symbol      16 items  <- congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, primitive-roots-and-unit-groups-modulo-n, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic, monoids-groups-and-subgroups, group-homomorphisms-and-the-isomorphism-theorems, polynomial-rings-and-roots, rings-subrings-and-integral-domains, finite-counting-and-binomial-coefficients\n  19  semidirect-products-and-automorphism-groups     25 items  <- group-actions-and-cayleys-theorem, group-homomorphisms-and-the-isomorphism-theorems, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products, rings-subrings-and-integral-domains, composition-series-and-solvable-groups, congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, free-groups-and-presentations, polynomial-rings-and-roots, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic\n  19  sigma-algebras-and-borel-sets                   45 items  <- topological-spaces-and-continuity, the-topology-of-euclidean-space, countability-and-uncountability, construction-of-r-via-cauchy-sequences, metric-spaces, compactness, foundations-of-the-real-numbers, ordinals-and-transfinite-recursion, ordinal-arithmetic, relations-functions-and-quotients, cardinal-arithmetic-and-cofinality, construction-of-the-natural-numbers\n  19  sine-cosine-and-the-definition-of-pi            16 items  <- power-series-and-real-analytic-functions, series-and-nonnegative-tests, the-derivative-and-mean-value-theorems, absolute-convergence-and-rearrangement, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, construction-of-the-natural-numbers, roots-and-rational-powers\n  19  small-cancellation-and-dehn-algorithms-examples   7 items  <- small-cancellation-and-dehn-algorithms\n  19  splitting-fields                                18 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, rings-subrings-and-integral-domains, construction-of-the-natural-numbers, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, monoids-groups-and-subgroups\n  19  the-determinant-of-a-linear-operator            20 items  <- matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, determinants-of-matrices-over-a-commutative-ring, gaussian-elimination-and-row-reduction, rings-subrings-and-integral-domains, monoids-groups-and-subgroups\n  19  the-exponential-function                        19 items  <- power-series-and-real-analytic-functions, finite-counting-and-binomial-coefficients, roots-and-rational-powers, foundations-of-the-real-numbers, series-and-nonnegative-tests, the-derivative-and-mean-value-theorems, limits-of-real-functions, continuity-ivt-evt-and-uniform-continuity, construction-of-r-via-cauchy-sequences, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, uniform-convergence-of-functions, the-riemann-integral, construction-of-the-natural-numbers\n  19  the-field-of-fractions-and-localisation-examples   8 items  <- the-field-of-fractions-and-localisation, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, rings-subrings-and-integral-domains, primes-and-the-fundamental-theorem-of-arithmetic, ideals-and-quotient-rings, congruences-and-the-chinese-remainder-theorem, polynomial-rings-and-roots, foundations-of-the-real-numbers\n  19  the-riemann-integral-in-rn-and-jordan-content-examples   8 items  <- the-riemann-integral-in-rn-and-jordan-content, roots-and-rational-powers, countability-and-uncountability, topology-of-r, metric-spaces, cantor-set-baire-and-measure-zero, compactness-in-metric-spaces, continuity-ivt-evt-and-uniform-continuity, foundations-of-the-real-numbers, construction-of-the-natural-numbers, limits-of-real-functions\n  19  the-topology-of-euclidean-space-examples         6 items  <- the-topology-of-euclidean-space, metric-spaces, linear-independence-bases-and-dimension, topological-spaces-and-continuity, foundations-of-the-real-numbers, rn-as-a-normed-space, connectedness, compactness, subspaces-products-and-quotients\n  19  the-total-derivative-examples                    6 items  <- the-total-derivative, the-derivative-and-mean-value-theorems, rn-as-a-normed-space, metric-spaces, completeness-and-uniform-continuity\n  19  uniform-spaces                                  54 items  <- filters-and-ultrafilters, hausdorff-via-the-diagonal, topological-spaces-and-continuity, subspaces-products-and-quotients, metric-spaces, completeness-and-uniform-continuity, finite-counting-and-binomial-coefficients, compactness-in-metric-spaces, roots-and-rational-powers, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, nets-and-filters, relations-functions-and-quotients, compactness, order-zorn-and-the-axiom-of-choice, countability-and-uncountability, separation-axioms, foundations-of-the-real-numbers, monoids-groups-and-subgroups\n  19  urysohn-lemma-and-tietze                        13 items  <- monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, countability-and-uncountability, topological-spaces-and-continuity, suprema-and-infima, metric-spaces, separation-axioms, compactness-in-metric-spaces, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, series-and-nonnegative-tests, equivalent-forms-of-completeness, continuity-ivt-evt-and-uniform-continuity, compactness, hausdorff-via-the-diagonal, subspaces-products-and-quotients, ordinals-and-transfinite-recursion, topology-of-r\n  20  algebraic-extensions-degree-and-finite-fields   35 items  <- field-extensions-and-the-complex-numbers, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, polynomial-rings-and-roots, splitting-fields, roots-and-rational-powers\n  20  arc-length-and-rectifiable-curves-examples       8 items  <- arc-length-and-rectifiable-curves, rn-as-a-normed-space, sine-cosine-and-the-definition-of-pi, the-riemann-integral, series-and-nonnegative-tests, foundations-of-the-real-numbers, bounded-variation-and-riemann-stieltjes, construction-of-the-natural-numbers, linear-independence-bases-and-dimension, uniform-convergence-of-functions, monotone-sequences-and-cauchy-completeness, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities\n  20  ascoli-arzela-examples                           5 items  <- topological-spaces-and-continuity, ascoli-arzela, function-space-topologies, compactness, metric-spaces, compactness-in-metric-spaces, foundations-of-the-real-numbers\n  20  blocks-primitivity-and-multiple-transitivity    23 items  <- group-actions-and-cayleys-theorem, primes-and-the-fundamental-theorem-of-arithmetic, normal-subgroups-and-quotient-groups, semidirect-products-and-automorphism-groups\n  20  cayley-graphs-word-metrics-and-quasi-isometry-examples  19 items  <- cayley-graphs-word-metrics-and-quasi-isometry, metric-spaces, free-groups-and-presentations, semidirect-products-and-automorphism-groups, graphs-walks-and-connectivity, limits-of-real-functions, cosets-and-lagranges-theorem, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, cyclic-groups-and-direct-products, group-homomorphisms-and-the-isomorphism-theorems\n  20  combinatorial-classes-and-the-symbolic-method-examples  11 items  <- combinatorial-classes-and-the-symbolic-method, group-actions-and-cayleys-theorem, formal-power-series\n  20  countability-axioms-and-cardinal-functions-examples   9 items  <- countability-axioms-and-cardinal-functions, the-topology-of-euclidean-space, metric-spaces, topological-spaces-and-continuity, hereditary-and-productive-separation, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, construction-of-r-via-cauchy-sequences, cardinal-arithmetic-and-cofinality-examples, cardinal-arithmetic-and-cofinality, relations-functions-and-quotients, compactness, separation-axioms, ordinal-arithmetic\n  20  dual-spaces-bilinear-forms-and-inertia-examples  12 items  <- dual-spaces-bilinear-forms-and-inertia, congruences-and-the-chinese-remainder-theorem, linear-independence-bases-and-dimension, polynomial-rings-and-roots, determinants-of-matrices-over-a-commutative-ring, matrices-and-the-matrix-of-a-linear-map\n  20  eigenvalues-eigenvectors-and-the-characteristic-polynomial  23 items  <- linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, foundations-of-the-real-numbers, determinants-of-matrices-over-a-commutative-ring, polynomial-rings-and-roots, the-determinant-of-a-linear-operator\n  20  free-modules-and-exact-sequences-examples       10 items  <- free-modules-and-exact-sequences, modules-and-module-homomorphisms, linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, rings-subrings-and-integral-domains\n  20  fubini-and-change-of-variables                  25 items  <- the-riemann-integral-in-rn-and-jordan-content, roots-and-rational-powers, metric-spaces, compactness-in-metric-spaces, inverse-and-implicit-function-theorems, the-total-derivative, determinants-of-matrices-over-a-commutative-ring, gaussian-elimination-and-row-reduction, completeness-and-uniform-continuity, rn-as-a-normed-space, properties-of-the-integral-and-the-working-ftc, monotone-functions-and-discontinuities\n  20  fundamental-trigonometric-identities            19 items  <- sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers, roots-and-rational-powers, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, continuity-ivt-evt-and-uniform-continuity\n  20  hereditary-and-productive-separation-examples    7 items  <- hereditary-and-productive-separation, topological-spaces-and-continuity, separation-axioms, hausdorff-via-the-diagonal\n  20  homotopy-and-homotopy-equivalence-examples       7 items  <- homotopy-and-homotopy-equivalence, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, topological-spaces-and-continuity, connectedness, subspaces-products-and-quotients, the-topology-of-euclidean-space\n  20  inner-product-spaces-and-orthogonality          34 items  <- dual-spaces-bilinear-forms-and-inertia, field-extensions-and-the-complex-numbers, roots-and-rational-powers, monoids-groups-and-subgroups, linear-independence-bases-and-dimension, vector-spaces-and-subspaces, determinants-of-matrices-over-a-commutative-ring, the-determinant-of-a-linear-operator, matrices-and-the-matrix-of-a-linear-map, linear-maps-rank-nullity-and-quotient-spaces\n  20  inverse-and-implicit-function-theorems-examples   3 items  <- inverse-and-implicit-function-theorems, the-total-derivative, the-derivative-and-mean-value-theorems, metric-spaces, foundations-of-the-real-numbers, sine-cosine-and-the-definition-of-pi, monotone-functions-and-discontinuities\n  20  inverse-systems-profinite-groups-and-completion  33 items  <- nets-and-filters, monoids-groups-and-subgroups, the-zfc-axioms-and-basic-set-constructions, subspaces-products-and-quotients, topological-spaces-and-continuity, uniform-spaces, compactness, hereditary-and-productive-separation, order-zorn-and-the-axiom-of-choice, normal-subgroups-and-quotient-groups, connectedness, cosets-and-lagranges-theorem, cayley-graphs-word-metrics-and-quasi-isometry, free-groups-and-presentations\n  20  measures-and-their-basic-properties             50 items  <- limsup-and-subsequential-limits, construction-of-the-natural-numbers, order-zorn-and-the-axiom-of-choice, sigma-algebras-and-borel-sets, countability-and-uncountability, roots-and-rational-powers, series-and-nonnegative-tests, sequences-and-limits, foundations-of-the-real-numbers\n  20  mixed-partials-taylor-and-extrema               30 items  <- the-total-derivative, finite-counting-and-binomial-coefficients, roots-and-rational-powers, vector-spaces-and-subspaces, the-derivative-and-mean-value-theorems, foundations-of-the-real-numbers, darboux-lhopital-and-taylor, rn-as-a-normed-space, metric-spaces, linear-independence-bases-and-dimension, compactness-in-metric-spaces, the-exponential-function\n  20  partitions-of-unity-and-paracompactness         25 items  <- compactness, topological-spaces-and-continuity, subspaces-products-and-quotients, separation-axioms, metric-spaces, relations-functions-and-quotients, urysohn-lemma-and-tietze, compactness-in-metric-spaces, ordinals-and-transfinite-recursion, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, order-zorn-and-the-axiom-of-choice, hereditary-and-productive-separation\n  20  permutation-statistics-inversions-and-eulerian-numbers-examples   8 items  <- permutation-statistics-inversions-and-eulerian-numbers, symmetric-groups-and-the-sign-homomorphism\n  20  pi-the-equivalent-characterizations             16 items  <- arc-length-and-rectifiable-curves, rn-as-a-normed-space, sine-cosine-and-the-definition-of-pi, the-riemann-integral, foundations-of-the-real-numbers, monotone-functions-and-discontinuities, continuity-ivt-evt-and-uniform-continuity, roots-and-rational-powers, the-derivative-and-mean-value-theorems, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, series-and-nonnegative-tests, monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients\n  20  picard-lindelof-and-first-order-odes            26 items  <- rn-as-a-normed-space, monotone-sequences-and-cauchy-completeness, completeness-and-uniform-continuity, metric-spaces, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, construction-of-the-natural-numbers, uniform-convergence-of-functions, topological-spaces-and-continuity, connectedness, compactness-in-metric-spaces, series-and-nonnegative-tests, finite-counting-and-binomial-coefficients, the-exponential-function, the-derivative-and-mean-value-theorems, topology-of-r, countability-and-uncountability, improper-integrals, monotone-functions-and-discontinuities\n  20  plane-graphs-euler-and-the-five-colour-theorem-examples   7 items  <- plane-graphs-euler-and-the-five-colour-theorem, trees-forests-and-spanning-trees, graphs-walks-and-connectivity, graph-colouring, connectedness\n  20  positive-definite-binary-quadratic-forms-and-reduction-examples  10 items  <- positive-definite-binary-quadratic-forms-and-reduction, quadratic-residues-and-the-legendre-symbol, congruences-and-the-chinese-remainder-theorem\n  20  quadratic-reciprocity-and-the-jacobi-symbol     18 items  <- quadratic-residues-and-the-legendre-symbol, monoids-groups-and-subgroups, primes-and-the-fundamental-theorem-of-arithmetic, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, primitive-roots-and-unit-groups-modulo-n, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem\n  20  quadratic-residues-and-the-legendre-symbol-examples   9 items  <- quadratic-residues-and-the-legendre-symbol, primitive-roots-and-unit-groups-modulo-n, congruences-and-the-chinese-remainder-theorem, primes-and-the-fundamental-theorem-of-arithmetic, monoids-groups-and-subgroups\n  20  semidirect-products-and-automorphism-groups-examples  16 items  <- semidirect-products-and-automorphism-groups, monoids-groups-and-subgroups, symmetric-groups-and-the-sign-homomorphism, group-homomorphisms-and-the-isomorphism-theorems, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, cyclic-groups-and-direct-products, normal-subgroups-and-quotient-groups, group-actions-and-cayleys-theorem, cosets-and-lagranges-theorem, rings-subrings-and-integral-domains, composition-series-and-solvable-groups\n  20  set-partitions-stirling-numbers-and-exponential-generating-functions  21 items  <- finite-counting-and-binomial-coefficients, symmetric-groups-and-the-sign-homomorphism, permutation-statistics-inversions-and-eulerian-numbers, formal-power-series, combinatorial-classes-and-the-symbolic-method, inclusion-exclusion-and-the-pigeonhole-principle, the-exponential-function\n  20  sigma-algebras-and-borel-sets-examples          16 items  <- sigma-algebras-and-borel-sets, countability-and-uncountability, cantor-set-baire-and-measure-zero, topology-of-r, cardinal-arithmetic-and-cofinality\n  20  sine-cosine-and-the-definition-of-pi-examples    5 items  <- sine-cosine-and-the-definition-of-pi, absolute-convergence-and-rearrangement, foundations-of-the-real-numbers, limits-of-real-functions, the-derivative-and-mean-value-theorems\n  20  splitting-fields-examples                        8 items  <- splitting-fields, polynomial-rings-and-roots, foundations-of-the-real-numbers, field-extensions-and-the-complex-numbers, construction-of-r-via-cauchy-sequences, roots-and-rational-powers, congruences-and-the-chinese-remainder-theorem\n  20  sums-of-two-squares                             18 items  <- divisibility-gcd-and-bezout, primes-and-the-fundamental-theorem-of-arithmetic, quadratic-residues-and-the-legendre-symbol, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, inclusion-exclusion-and-the-pigeonhole-principle, suprema-and-infima, foundations-of-the-real-numbers, construction-of-the-natural-numbers, the-structure-of-finite-abelian-groups\n  20  sylow-theorems-and-nilpotent-groups             46 items  <- group-actions-and-cayleys-theorem, primes-and-the-fundamental-theorem-of-arithmetic, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, the-structure-of-finite-abelian-groups, composition-series-and-solvable-groups, semidirect-products-and-automorphism-groups, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, cyclic-groups-and-direct-products, congruences-and-the-chinese-remainder-theorem, conjugacy-and-simplicity-in-the-symmetric-groups, symmetric-groups-and-the-sign-homomorphism\n  20  symmetric-polynomials                           29 items  <- rings-subrings-and-integral-domains, polynomial-rings-and-roots, monoids-groups-and-subgroups, splitting-fields, finite-counting-and-binomial-coefficients\n  20  tensor-products-of-modules                      38 items  <- modules-and-module-homomorphisms, monoids-groups-and-subgroups, rings-subrings-and-integral-domains, free-modules-and-exact-sequences, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, construction-of-r-via-cauchy-sequences, linear-independence-bases-and-dimension, dual-spaces-bilinear-forms-and-inertia, matrices-and-the-matrix-of-a-linear-map, ideals-and-quotient-rings\n  20  the-determinant-of-a-linear-operator-examples    8 items  <- the-determinant-of-a-linear-operator, construction-of-r-via-cauchy-sequences, matrices-and-the-matrix-of-a-linear-map, determinants-of-matrices-over-a-commutative-ring, divisibility-gcd-and-bezout, rings-subrings-and-integral-domains\n  20  the-exponential-function-examples                7 items  <- the-exponential-function, roots-and-rational-powers, sequences-and-limits, uniform-convergence-of-functions, the-derivative-and-mean-value-theorems, power-series-and-real-analytic-functions, finite-counting-and-binomial-coefficients, darboux-lhopital-and-taylor, metric-spaces, linear-independence-bases-and-dimension, vector-spaces-and-subspaces, monotone-functions-and-discontinuities, countability-and-uncountability, relations-functions-and-quotients, foundations-of-the-real-numbers, continuity-ivt-evt-and-uniform-continuity\n  20  the-fundamental-group                            6 items  <- connectedness, homotopy-and-homotopy-equivalence, topological-spaces-and-continuity, subspaces-products-and-quotients, continuity-ivt-evt-and-uniform-continuity, monoids-groups-and-subgroups\n  20  the-fundamental-theorems-of-calculus-examples    6 items  <- the-fundamental-theorems-of-calculus, the-riemann-integral, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities, countability-and-uncountability, topology-of-r, properties-of-the-integral-and-the-working-ftc, monotone-sequences-and-cauchy-completeness\n  20  the-gauge-integral-and-cousins-lemma-examples    9 items  <- the-gauge-integral-and-cousins-lemma, countability-and-uncountability, monotone-functions-and-discontinuities, topology-of-r, the-riemann-integral, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, improper-integrals, foundations-of-the-real-numbers, series-and-nonnegative-tests, darboux-lhopital-and-taylor\n  20  the-logarithm-and-general-powers                26 items  <- the-exponential-function, monotone-functions-and-discontinuities, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, sequences-and-limits, series-and-nonnegative-tests, power-series-and-real-analytic-functions, absolute-convergence-and-rearrangement, construction-of-the-natural-numbers\n  20  tychonoff-embedding-and-stone-cech              12 items  <- topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, subspaces-products-and-quotients, separation-axioms, hereditary-and-productive-separation, compactness, nets-and-filters, topology-of-r, metric-spaces, hausdorff-via-the-diagonal, urysohn-lemma-and-tietze, compactness-in-metric-spaces\n  20  uniform-spaces-examples                          8 items  <- uniform-spaces, metric-spaces, completeness-and-uniform-continuity, topological-spaces-and-continuity, foundations-of-the-real-numbers, monoids-groups-and-subgroups, topology-of-r, separation-axioms, subspaces-products-and-quotients, nets-and-filters, countability-and-uncountability, hereditary-and-productive-separation\n  20  urysohn-lemma-and-tietze-examples                8 items  <- urysohn-lemma-and-tietze, separation-axioms, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, topological-spaces-and-continuity, metric-spaces, compactness-in-metric-spaces, foundations-of-the-real-numbers, topology-of-r\n  21  algebraic-closure-embeddings-and-separability   60 items  <- relations-functions-and-quotients, construction-of-the-natural-numbers, countability-and-uncountability, rings-subrings-and-integral-domains, polynomial-rings-and-roots, foundations-of-the-real-numbers, field-extensions-and-the-complex-numbers, splitting-fields, eigenvalues-eigenvectors-and-the-characteristic-polynomial, algebraic-extensions-degree-and-finite-fields, vector-spaces-and-subspaces, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients, ideals-and-quotient-rings, order-zorn-and-the-axiom-of-choice\n  21  algebraic-extensions-degree-and-finite-fields-examples  14 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, foundations-of-the-real-numbers, roots-and-rational-powers, algebraic-extensions-degree-and-finite-fields, congruences-and-the-chinese-remainder-theorem, primes-and-the-fundamental-theorem-of-arithmetic, ideals-and-quotient-rings\n  21  areas-of-elementary-plane-figures               15 items  <- rn-as-a-normed-space, the-riemann-integral-in-rn-and-jordan-content, pi-the-equivalent-characterizations, fubini-and-change-of-variables, metric-spaces, topology-of-r, inner-product-spaces-and-orthogonality, determinants-of-matrices-over-a-commutative-ring, foundations-of-the-real-numbers, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients, compactness-in-metric-spaces, connectedness, roots-and-rational-powers\n  21  blocks-primitivity-and-multiple-transitivity-examples  12 items  <- blocks-primitivity-and-multiple-transitivity, symmetric-groups-and-the-sign-homomorphism\n  21  categories-functors-and-natural-transformations  60 items  <- the-zfc-axioms-and-basic-set-constructions, ordinals-and-transfinite-recursion, relations-functions-and-quotients, monoids-groups-and-subgroups, rings-subrings-and-integral-domains, vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, modules-and-module-homomorphisms, topological-spaces-and-continuity, construction-of-r-via-cauchy-sequences, the-fundamental-group\n  21  chain-conditions-and-semisimple-modules         43 items  <- modules-and-module-homomorphisms, rings-subrings-and-integral-domains, free-modules-and-exact-sequences, tensor-products-of-modules, polynomial-rings-and-roots, order-zorn-and-the-axiom-of-choice, the-determinant-of-a-linear-operator, construction-of-r-via-cauchy-sequences\n  21  complete-metrizability-and-baire                40 items  <- topological-spaces-and-continuity, countability-and-uncountability, compactness, the-zfc-axioms-and-basic-set-constructions, completeness-and-uniform-continuity, metric-spaces, separation-axioms, compactness-in-metric-spaces, approximation-and-compactness-in-ck, subspaces-products-and-quotients, series-and-nonnegative-tests, countability-axioms-and-cardinal-functions, relations-functions-and-quotients, limits-of-real-functions, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, construction-of-the-natural-numbers, monotone-sequences-and-cauchy-completeness, tychonoff-embedding-and-stone-cech, filters-and-ultrafilters, hausdorff-via-the-diagonal, partitions-of-unity-and-paracompactness, urysohn-lemma-and-tietze\n  21  convex-and-semicontinuous-functions-on-rn       31 items  <- the-total-derivative, monotone-sequences-and-cauchy-completeness, the-zfc-axioms-and-basic-set-constructions, construction-of-the-natural-numbers, roots-and-rational-powers, suprema-and-infima, construction-of-r-via-dedekind-cuts, the-riemann-integral-in-rn-and-jordan-content, rn-as-a-normed-space, completeness-and-uniform-continuity, compactness-in-metric-spaces, metric-spaces, vector-spaces-and-subspaces, linear-independence-bases-and-dimension, relations-functions-and-quotients, countability-and-uncountability, the-topology-of-euclidean-space, mixed-partials-taylor-and-extrema, convexity, the-derivative-and-mean-value-theorems, monotone-functions-and-discontinuities, continuity-ivt-evt-and-uniform-continuity, topological-spaces-and-continuity, subspaces-products-and-quotients, foundations-of-the-real-numbers\n  21  counting-up-to-symmetry-burnside-and-polya      20 items  <- group-actions-and-cayleys-theorem, symmetric-groups-and-the-sign-homomorphism, polynomial-rings-and-roots, rings-subrings-and-integral-domains, symmetric-polynomials, formal-power-series, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, combinatorial-classes-and-the-symbolic-method\n  21  covering-spaces-and-lifting                     32 items  <- topological-spaces-and-continuity, subspaces-products-and-quotients, homotopy-and-homotopy-equivalence, connectedness, countability-and-uncountability, compactness-in-metric-spaces, compactness, the-fundamental-group, group-actions-and-cayleys-theorem, monoids-groups-and-subgroups, cosets-and-lagranges-theorem\n  21  diagonalisation-and-the-minimal-polynomial      26 items  <- linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, eigenvalues-eigenvectors-and-the-characteristic-polynomial, ideals-and-quotient-rings, polynomial-rings-and-roots, field-extensions-and-the-complex-numbers, vector-spaces-and-subspaces, splitting-fields, determinants-of-matrices-over-a-commutative-ring\n  21  eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples   7 items  <- eigenvalues-eigenvectors-and-the-characteristic-polynomial, foundations-of-the-real-numbers, congruences-and-the-chinese-remainder-theorem, linear-independence-bases-and-dimension, determinants-of-matrices-over-a-commutative-ring\n  21  euclidean-ordinary-differential-equations-with-smooth-dependence  17 items  <- picard-lindelof-and-first-order-odes, the-total-derivative, mixed-partials-taylor-and-extrema, compactness-in-metric-spaces, rn-as-a-normed-space, the-derivative-and-mean-value-theorems\n  21  finite-probability-and-the-probabilistic-method  28 items  <- finite-probability-spaces-and-random-variables, the-exponential-function, the-derivative-and-mean-value-theorems, roots-and-rational-powers, graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, series-and-nonnegative-tests, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, extremal-graph-theory, eulerian-and-hamiltonian-graphs, the-logarithm-and-general-powers, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups, suprema-and-infima, graph-colouring\n  21  frattini-subgroups-and-the-burnside-basis-theorem  24 items  <- sylow-theorems-and-nilpotent-groups, composition-series-and-solvable-groups, group-homomorphisms-and-the-isomorphism-theorems, group-actions-and-cayleys-theorem, monoids-groups-and-subgroups, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-the-natural-numbers, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products\n  21  fubini-and-change-of-variables-examples         13 items  <- fubini-and-change-of-variables, monotone-functions-and-discontinuities, the-riemann-integral, the-riemann-integral-in-rn-and-jordan-content, the-exponential-function, properties-of-the-integral-and-the-working-ftc, determinants-of-matrices-over-a-commutative-ring, sine-cosine-and-the-definition-of-pi, the-derivative-and-mean-value-theorems, construction-of-the-natural-numbers\n  21  fundamental-trigonometric-identities-examples    6 items  <- fundamental-trigonometric-identities, sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers\n  21  further-trigonometric-identities-and-inverses    6 items  <- sine-cosine-and-the-definition-of-pi, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, monotone-functions-and-discontinuities, foundations-of-the-real-numbers, fundamental-trigonometric-identities, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, series-and-nonnegative-tests, power-series-and-real-analytic-functions, absolute-convergence-and-rearrangement, the-exponential-function, the-logarithm-and-general-powers, finite-counting-and-binomial-coefficients, roots-and-rational-powers, darboux-lhopital-and-taylor, limsup-and-subsequential-limits, sequences-and-limits\n  21  group-extensions-complements-and-schur-zassenhaus  23 items  <- semidirect-products-and-automorphism-groups, group-homomorphisms-and-the-isomorphism-theorems, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups, group-actions-and-cayleys-theorem, composition-series-and-solvable-groups, sylow-theorems-and-nilpotent-groups\n  21  hyperbolic-spaces-and-hyperbolic-groups         31 items  <- cayley-graphs-word-metrics-and-quasi-isometry, metric-spaces, free-groups-and-presentations, sylow-theorems-and-nilpotent-groups, group-actions-and-cayleys-theorem\n  21  inner-product-spaces-and-orthogonality-examples  16 items  <- inner-product-spaces-and-orthogonality, monoids-groups-and-subgroups, vector-spaces-and-subspaces, field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, dual-spaces-bilinear-forms-and-inertia\n  21  integer-partitions-and-the-twelvefold-way       21 items  <- the-structure-of-finite-abelian-groups, combinatorial-classes-and-the-symbolic-method, finite-counting-and-binomial-coefficients, formal-power-series, set-partitions-stirling-numbers-and-exponential-generating-functions\n  21  inverse-systems-profinite-groups-and-completion-examples   7 items  <- inverse-systems-profinite-groups-and-completion, free-groups-and-presentations\n  21  lagrange-four-square-theorem                    16 items  <- primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, sums-of-two-squares, construction-of-r-via-cauchy-sequences, quadratic-reciprocity-and-the-jacobi-symbol, construction-of-the-natural-numbers, monoids-groups-and-subgroups, countability-and-uncountability\n  21  line-integrals-and-the-gradient-theorem         31 items  <- arc-length-and-rectifiable-curves, rn-as-a-normed-space, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, the-total-derivative, the-fundamental-theorems-of-calculus, relations-functions-and-quotients, linear-independence-bases-and-dimension, the-derivative-and-mean-value-theorems, fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content, topology-of-r, compactness-in-metric-spaces\n  21  linear-algebra-methods-in-combinatorics         64 items  <- foundations-of-the-real-numbers, vector-spaces-and-subspaces, finite-counting-and-binomial-coefficients, linear-independence-bases-and-dimension, dual-spaces-bilinear-forms-and-inertia, matrices-and-the-matrix-of-a-linear-map, gaussian-elimination-and-row-reduction, congruences-and-the-chinese-remainder-theorem, linear-maps-rank-nullity-and-quotient-spaces, inner-product-spaces-and-orthogonality, graphs-walks-and-connectivity, construction-of-the-natural-numbers, relations-functions-and-quotients, polynomial-rings-and-roots, primes-and-the-fundamental-theorem-of-arithmetic\n  21  linear-recurrences-and-rational-generating-functions  32 items  <- formal-power-series, polynomial-rings-and-roots, linear-independence-bases-and-dimension, the-field-of-fractions-and-localisation, splitting-fields, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, determinants-of-matrices-over-a-commutative-ring, eigenvalues-eigenvectors-and-the-characteristic-polynomial, the-determinant-of-a-linear-operator, matrices-and-the-matrix-of-a-linear-map, construction-of-the-natural-numbers\n  21  measures-and-their-basic-properties-examples     9 items  <- measures-and-their-basic-properties, countability-and-uncountability, series-and-nonnegative-tests, roots-and-rational-powers, sigma-algebras-and-borel-sets, topology-of-r, cardinal-arithmetic-and-cofinality, cantor-set-baire-and-measure-zero, relations-functions-and-quotients, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, filters-and-ultrafilters\n  21  metrization-theorems                            13 items  <- partitions-of-unity-and-paracompactness, topological-spaces-and-continuity, countability-and-uncountability, separation-axioms, metric-spaces, relations-functions-and-quotients, countability-axioms-and-cardinal-functions, subspaces-products-and-quotients\n  21  mixed-partials-taylor-and-extrema-examples       9 items  <- mixed-partials-taylor-and-extrema, the-exponential-function, the-derivative-and-mean-value-theorems, the-total-derivative\n  21  outer-measure-and-the-caratheodory-extension-theorem  35 items  <- limsup-and-subsequential-limits, measures-and-their-basic-properties, the-derivative-and-mean-value-theorems, sigma-algebras-and-borel-sets, countability-and-uncountability, metric-spaces\n  21  partitions-of-unity-and-paracompactness-examples   7 items  <- partitions-of-unity-and-paracompactness, monotone-sequences-and-cauchy-completeness, compactness, separation-axioms, relations-functions-and-quotients, hereditary-and-productive-separation, subspaces-products-and-quotients, countability-and-uncountability\n  21  pi-the-equivalent-characterizations-examples     7 items  <- pi-the-equivalent-characterizations, sequences-and-limits, sine-cosine-and-the-definition-of-pi, arc-length-and-rectifiable-curves, rn-as-a-normed-space, the-riemann-integral\n  21  picard-lindelof-and-first-order-odes-examples    8 items  <- picard-lindelof-and-first-order-odes, the-exponential-function, the-derivative-and-mean-value-theorems, roots-and-rational-powers, monotone-functions-and-discontinuities, darboux-lhopital-and-taylor, topology-of-r, the-logarithm-and-general-powers\n  21  quadratic-reciprocity-and-the-jacobi-symbol-examples   9 items  <- quadratic-reciprocity-and-the-jacobi-symbol, quadratic-residues-and-the-legendre-symbol, primes-and-the-fundamental-theorem-of-arithmetic, monoids-groups-and-subgroups, countability-and-uncountability, relations-functions-and-quotients, divisibility-gcd-and-bezout\n  21  set-partitions-stirling-numbers-and-exponential-generating-functions-examples  13 items  <- set-partitions-stirling-numbers-and-exponential-generating-functions, inclusion-exclusion-and-the-pigeonhole-principle\n  21  sums-of-two-squares-examples                     8 items  <- sums-of-two-squares, the-structure-of-finite-abelian-groups\n  21  sylow-theorems-and-nilpotent-groups-examples    11 items  <- sylow-theorems-and-nilpotent-groups, symmetric-groups-and-the-sign-homomorphism, conjugacy-and-simplicity-in-the-symmetric-groups, semidirect-products-and-automorphism-groups, congruences-and-the-chinese-remainder-theorem, cyclic-groups-and-direct-products, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, composition-series-and-solvable-groups\n  21  symmetric-polynomials-examples                   9 items  <- symmetric-polynomials, congruences-and-the-chinese-remainder-theorem\n  21  tensor-products-of-modules-examples             11 items  <- tensor-products-of-modules, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, ideals-and-quotient-rings, modules-and-module-homomorphisms, polynomial-rings-and-roots, matrices-and-the-matrix-of-a-linear-map, vector-spaces-and-subspaces, field-extensions-and-the-complex-numbers, linear-independence-bases-and-dimension, rings-subrings-and-integral-domains\n  21  the-complex-exponential-and-eulers-formula      28 items  <- field-extensions-and-the-complex-numbers, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, finite-counting-and-binomial-coefficients, monoids-groups-and-subgroups, foundations-of-the-real-numbers, rn-as-a-normed-space, metric-spaces, completeness-and-uniform-continuity, power-series-and-real-analytic-functions, series-and-nonnegative-tests, limsup-and-subsequential-limits, absolute-convergence-and-rearrangement, the-exponential-function, sine-cosine-and-the-definition-of-pi, fundamental-trigonometric-identities, the-logarithm-and-general-powers, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, compactness-in-metric-spaces\n  21  the-fundamental-group-examples                   1 items  <- the-fundamental-group, monotone-sequences-and-cauchy-completeness, the-total-derivative\n  21  the-integral-logarithm-and-its-characterisations  19 items  <- properties-of-the-integral-and-the-working-ftc, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, the-derivative-and-mean-value-theorems, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, relations-functions-and-quotients, the-exponential-function, the-logarithm-and-general-powers, monotone-functions-and-discontinuities\n  21  the-inverse-function-theorem-completed          16 items  <- mixed-partials-taylor-and-extrema, inverse-and-implicit-function-theorems, relations-functions-and-quotients, the-total-derivative, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, topological-spaces-and-continuity, construction-of-the-natural-numbers, the-determinant-of-a-linear-operator, determinants-of-matrices-over-a-commutative-ring, metric-spaces, compactness-in-metric-spaces, the-topology-of-euclidean-space, connectedness, countability-and-uncountability, fubini-and-change-of-variables, foundations-of-the-real-numbers, matrices-and-the-matrix-of-a-linear-map, rn-as-a-normed-space\n  21  the-logarithm-and-general-powers-examples        6 items  <- the-logarithm-and-general-powers, foundations-of-the-real-numbers, the-exponential-function, continuity-ivt-evt-and-uniform-continuity\n  21  trigonometric-and-oscillatory-examples-in-several-variables   1 items  <- sine-cosine-and-the-definition-of-pi, fundamental-trigonometric-identities\n  21  tychonoff-embedding-and-stone-cech-examples      4 items  <- tychonoff-embedding-and-stone-cech, topological-spaces-and-continuity, compactness, construction-of-the-natural-numbers, topology-of-r, metric-spaces\n  21  uniform-completeness-and-samuel-compactification  12 items  <- uniform-spaces, monotone-sequences-and-cauchy-completeness, metric-spaces, foundations-of-the-real-numbers, topology-of-r, finite-counting-and-binomial-coefficients, order-zorn-and-the-axiom-of-choice, compactness-in-metric-spaces, tychonoff-embedding-and-stone-cech, urysohn-lemma-and-tietze, hausdorff-via-the-diagonal, compactness\n  22  algebraic-closure-embeddings-and-separability-examples  12 items  <- algebraic-closure-embeddings-and-separability, algebraic-extensions-degree-and-finite-fields, construction-of-r-via-cauchy-sequences, rings-subrings-and-integral-domains, polynomial-rings-and-roots, field-extensions-and-the-complex-numbers, roots-and-rational-powers, the-field-of-fractions-and-localisation\n  22  areas-of-elementary-plane-figures-examples       6 items  <- areas-of-elementary-plane-figures, fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content\n  22  block-designs-and-finite-projective-planes      24 items  <- congruences-and-the-chinese-remainder-theorem, algebraic-extensions-degree-and-finite-fields, linear-algebra-methods-in-combinatorics\n  22  categories-functors-and-natural-transformations-examples  25 items  <- categories-functors-and-natural-transformations, rings-subrings-and-integral-domains, free-groups-and-presentations, modules-and-module-homomorphisms, matrices-and-the-matrix-of-a-linear-map, connectedness, homotopy-and-homotopy-equivalence, topological-spaces-and-continuity, the-fundamental-group, subspaces-products-and-quotients, relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, group-homomorphisms-and-the-isomorphism-theorems, construction-of-the-natural-numbers, determinants-of-matrices-over-a-commutative-ring, group-actions-and-cayleys-theorem, ordinals-and-transfinite-recursion\n  22  chain-conditions-and-semisimple-modules-examples  12 items  <- chain-conditions-and-semisimple-modules, divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, modules-and-module-homomorphisms, free-modules-and-exact-sequences, congruences-and-the-chinese-remainder-theorem, matrices-and-the-matrix-of-a-linear-map, cosets-and-lagranges-theorem, foundations-of-the-real-numbers, the-field-of-fractions-and-localisation, determinants-of-matrices-over-a-commutative-ring\n  22  complete-metrizability-and-baire-examples        6 items  <- compactness, topological-spaces-and-continuity, countability-and-uncountability, completeness-and-uniform-continuity, complete-metrizability-and-baire, cantor-set-baire-and-measure-zero, metric-spaces, separation-axioms, approximation-and-compactness-in-ck\n  22  complex-differentiability-and-cauchy-riemann    28 items  <- field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, the-topology-of-euclidean-space, metric-spaces, connectedness, the-total-derivative, sine-cosine-and-the-definition-of-pi, polynomial-rings-and-roots, the-exponential-function, the-derivative-and-mean-value-theorems, partitions-of-unity-and-paracompactness, rn-as-a-normed-space, mixed-partials-taylor-and-extrema\n  22  complexification-realification-and-real-structures  18 items  <- vector-spaces-and-subspaces, field-extensions-and-the-complex-numbers, tensor-products-of-modules, linear-maps-rank-nullity-and-quotient-spaces, free-modules-and-exact-sequences, linear-independence-bases-and-dimension, eigenvalues-eigenvectors-and-the-characteristic-polynomial, diagonalisation-and-the-minimal-polynomial\n  22  constant-rank-submersions-and-regular-level-sets  19 items  <- the-inverse-function-theorem-completed, linear-maps-rank-nullity-and-quotient-spaces, the-total-derivative, determinants-of-matrices-over-a-commutative-ring, gaussian-elimination-and-row-reduction, linear-independence-bases-and-dimension, metric-spaces, relations-functions-and-quotients, inverse-and-implicit-function-theorems, topological-spaces-and-continuity, subspaces-products-and-quotients, inner-product-spaces-and-orthogonality, rn-as-a-normed-space, mixed-partials-taylor-and-extrema\n  22  convex-and-semicontinuous-functions-on-rn-examples  13 items  <- convex-and-semicontinuous-functions-on-rn, rn-as-a-normed-space, the-derivative-and-mean-value-theorems, the-total-derivative, compactness-in-metric-spaces, relations-functions-and-quotients, countability-and-uncountability, metric-spaces, mixed-partials-taylor-and-extrema\n  22  counting-up-to-symmetry-burnside-and-polya-examples  12 items  <- counting-up-to-symmetry-burnside-and-polya, group-actions-and-cayleys-theorem, combinatorial-classes-and-the-symbolic-method\n  22  covering-spaces-and-lifting-examples             8 items  <- covering-spaces-and-lifting, subspaces-products-and-quotients, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, limits-of-real-functions, monoids-groups-and-subgroups\n  22  diagonalisation-and-the-minimal-polynomial-examples  12 items  <- diagonalisation-and-the-minimal-polynomial, eigenvalues-eigenvectors-and-the-characteristic-polynomial, linear-independence-bases-and-dimension, field-extensions-and-the-complex-numbers, splitting-fields\n  22  erdos-hajnal-property-and-homogeneous-sets      14 items  <- induced-subgraphs-and-hereditary-graph-classes, the-logarithm-and-general-powers, the-exponential-function, ramsey-theory, finite-counting-and-binomial-coefficients, graphs-walks-and-connectivity, foundations-of-the-real-numbers, finite-probability-and-the-probabilistic-method, finite-probability-spaces-and-random-variables\n  22  euclidean-ordinary-differential-equations-with-smooth-dependence-examples   6 items  <- euclidean-ordinary-differential-equations-with-smooth-dependence\n  22  extraspecial-p-groups-and-central-products      48 items  <- normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, composition-series-and-solvable-groups, finite-counting-and-binomial-coefficients, primes-and-the-fundamental-theorem-of-arithmetic, the-structure-of-finite-abelian-groups, group-actions-and-cayleys-theorem, sylow-theorems-and-nilpotent-groups, frattini-subgroups-and-the-burnside-basis-theorem, cosets-and-lagranges-theorem, semidirect-products-and-automorphism-groups, group-homomorphisms-and-the-isomorphism-theorems, cyclic-groups-and-direct-products, congruences-and-the-chinese-remainder-theorem, rings-subrings-and-integral-domains\n  22  finite-probability-and-the-probabilistic-method-examples   6 items  <- finite-probability-and-the-probabilistic-method, finite-probability-spaces-and-random-variables, finite-counting-and-binomial-coefficients, ramsey-theory, roots-and-rational-powers, limits-of-real-functions, the-exponential-function, the-logarithm-and-general-powers\n  22  frattini-subgroups-and-the-burnside-basis-theorem-examples  12 items  <- frattini-subgroups-and-the-burnside-basis-theorem, monoids-groups-and-subgroups, primitive-roots-and-unit-groups-modulo-n, cyclic-groups-and-direct-products, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, semidirect-products-and-automorphism-groups, normal-subgroups-and-quotient-groups, sylow-theorems-and-nilpotent-groups, symmetric-groups-and-the-sign-homomorphism, conjugacy-and-simplicity-in-the-symmetric-groups, composition-series-and-solvable-groups\n  22  further-trigonometric-identities-and-inverses-examples   3 items  <- further-trigonometric-identities-and-inverses, sine-cosine-and-the-definition-of-pi, fundamental-trigonometric-identities, the-derivative-and-mean-value-theorems\n  22  group-extensions-complements-and-schur-zassenhaus-examples   6 items  <- group-extensions-complements-and-schur-zassenhaus, cyclic-groups-and-direct-products, semidirect-products-and-automorphism-groups, symmetric-groups-and-the-sign-homomorphism, monoids-groups-and-subgroups\n  22  improper-and-parameter-dependent-multiple-integrals  15 items  <- the-riemann-integral-in-rn-and-jordan-content, metric-spaces, compactness-in-metric-spaces, fubini-and-change-of-variables, topology-of-r, countability-and-uncountability, the-topology-of-euclidean-space, construction-of-the-natural-numbers, limsup-and-subsequential-limits, the-derivative-and-mean-value-theorems, improper-integrals, finite-probability-and-the-probabilistic-method, the-exponential-function, the-riemann-integral, fundamental-trigonometric-identities, sine-cosine-and-the-definition-of-pi, limits-of-real-functions, properties-of-the-integral-and-the-working-ftc, foundations-of-the-real-numbers\n  22  integer-partitions-and-the-twelvefold-way-examples  15 items  <- integer-partitions-and-the-twelvefold-way, formal-power-series\n  22  lagrange-four-square-theorem-examples           10 items  <- lagrange-four-square-theorem, sums-of-two-squares, congruences-and-the-chinese-remainder-theorem, primes-and-the-fundamental-theorem-of-arithmetic\n  22  lattice-paths-and-catalan-numbers               74 items  <- construction-of-r-via-cauchy-sequences, linear-recurrences-and-rational-generating-functions, finite-counting-and-binomial-coefficients, monoids-groups-and-subgroups, relations-functions-and-quotients, construction-of-the-natural-numbers, divisibility-gcd-and-bezout, foundations-of-the-real-numbers, group-actions-and-cayleys-theorem, congruences-and-the-chinese-remainder-theorem, countability-and-uncountability, formal-power-series, rings-subrings-and-integral-domains, polynomial-rings-and-roots, the-zfc-axioms-and-basic-set-constructions, symmetric-groups-and-the-sign-homomorphism, determinants-of-matrices-over-a-commutative-ring\n  22  lebesgue-measure-on-euclidean-space             55 items  <- limsup-and-subsequential-limits, the-riemann-integral-in-rn-and-jordan-content, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, metric-spaces, sigma-algebras-and-borel-sets, measures-and-their-basic-properties, construction-of-the-natural-numbers, compactness-in-metric-spaces, rn-as-a-normed-space, areas-of-elementary-plane-figures, foundations-of-the-real-numbers, outer-measure-and-the-caratheodory-extension-theorem, series-and-nonnegative-tests, countability-and-uncountability, construction-of-r-via-cauchy-sequences, limits-of-real-functions, the-topology-of-euclidean-space, compactness, separation-axioms, cantor-set-baire-and-measure-zero, the-riemann-integral, the-total-derivative, linear-maps-rank-nullity-and-quotient-spaces, gaussian-elimination-and-row-reduction, determinants-of-matrices-over-a-commutative-ring, matrices-and-the-matrix-of-a-linear-map, completeness-and-uniform-continuity, inner-product-spaces-and-orthogonality, vector-spaces-and-subspaces, fubini-and-change-of-variables, monoids-groups-and-subgroups\n  22  line-integrals-and-the-gradient-theorem-examples   9 items  <- line-integrals-and-the-gradient-theorem, sine-cosine-and-the-definition-of-pi, the-fundamental-theorems-of-calculus, the-derivative-and-mean-value-theorems, the-riemann-integral, continuity-ivt-evt-and-uniform-continuity\n  22  linear-algebra-methods-in-combinatorics-examples  18 items  <- linear-algebra-methods-in-combinatorics, congruences-and-the-chinese-remainder-theorem, graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, gaussian-elimination-and-row-reduction, matrices-and-the-matrix-of-a-linear-map, inner-product-spaces-and-orthogonality, dual-spaces-bilinear-forms-and-inertia, polynomial-rings-and-roots, linear-independence-bases-and-dimension, primes-and-the-fundamental-theorem-of-arithmetic\n  22  linear-recurrences-and-rational-generating-functions-examples  15 items  <- linear-recurrences-and-rational-generating-functions, polynomial-rings-and-roots\n  22  metrization-theorems-examples                    4 items  <- metrization-theorems, topological-spaces-and-continuity, countability-axioms-and-cardinal-functions, countability-and-uncountability, hereditary-and-productive-separation, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients, separation-axioms, subspaces-products-and-quotients, foundations-of-the-real-numbers, cantor-set-baire-and-measure-zero, cardinal-arithmetic-and-cofinality, partitions-of-unity-and-paracompactness\n  22  outer-measure-and-the-caratheodory-extension-theorem-examples   8 items  <- outer-measure-and-the-caratheodory-extension-theorem, measures-and-their-basic-properties, countability-and-uncountability, metric-spaces, sigma-algebras-and-borel-sets\n  22  pro-p-groups-and-the-p-adic-integers            25 items  <- inverse-systems-profinite-groups-and-completion, cyclic-groups-and-direct-products, frattini-subgroups-and-the-burnside-basis-theorem\n  22  regular-pairs-and-induced-counting              25 items  <- graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, finite-probability-spaces-and-random-variables, finite-probability-and-the-probabilistic-method\n  22  smooth-manifolds-and-smooth-maps                40 items  <- subspaces-products-and-quotients, countability-axioms-and-cardinal-functions, topological-spaces-and-continuity, mixed-partials-taylor-and-extrema, the-total-derivative, hereditary-and-productive-separation, the-topology-of-euclidean-space, connectedness, compactness, partitions-of-unity-and-paracompactness, metrization-theorems\n  22  socles-and-the-onan-scott-landscape             21 items  <- monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, composition-series-and-solvable-groups, semidirect-products-and-automorphism-groups, group-homomorphisms-and-the-isomorphism-theorems, the-structure-of-finite-abelian-groups, conjugacy-and-simplicity-in-the-symmetric-groups, blocks-primitivity-and-multiple-transitivity, frattini-subgroups-and-the-burnside-basis-theorem\n  22  stone-weierstrass-general                       18 items  <- vector-spaces-and-subspaces, topological-spaces-and-continuity, compactness, subspaces-products-and-quotients, rings-subrings-and-integral-domains, function-space-topologies, field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, approximation-and-compactness-in-ck, uniform-convergence-of-functions, metric-spaces\n  22  the-complex-exponential-and-eulers-formula-examples   8 items  <- the-complex-exponential-and-eulers-formula, the-exponential-function, sine-cosine-and-the-definition-of-pi, rn-as-a-normed-space, field-extensions-and-the-complex-numbers, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness\n  22  the-fundamental-group-of-the-circle             21 items  <- subspaces-products-and-quotients, construction-of-r-via-cauchy-sequences, limits-of-real-functions, topological-spaces-and-continuity, continuity-ivt-evt-and-uniform-continuity, covering-spaces-and-lifting, compactness-in-metric-spaces, compactness, connectedness, the-fundamental-group, monoids-groups-and-subgroups, homotopy-and-homotopy-equivalence, group-homomorphisms-and-the-isomorphism-theorems, sine-cosine-and-the-definition-of-pi, the-derivative-and-mean-value-theorems, rn-as-a-normed-space, fundamental-trigonometric-identities, metric-spaces\n  22  the-galois-correspondence                       30 items  <- algebraic-closure-embeddings-and-separability, monoids-groups-and-subgroups, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, algebraic-extensions-degree-and-finite-fields, splitting-fields, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, field-extensions-and-the-complex-numbers, symmetric-polynomials, symmetric-groups-and-the-sign-homomorphism, group-actions-and-cayleys-theorem, sylow-theorems-and-nilpotent-groups\n  22  the-integral-logarithm-and-its-characterisations-examples   5 items  <- the-integral-logarithm-and-its-characterisations, the-logarithm-and-general-powers, monotone-functions-and-discontinuities, the-exponential-function, relations-functions-and-quotients, continuity-ivt-evt-and-uniform-continuity, series-and-nonnegative-tests, properties-of-the-integral-and-the-working-ftc\n  22  the-inverse-function-theorem-completed-examples  10 items  <- the-inverse-function-theorem-completed, inverse-and-implicit-function-theorems, sine-cosine-and-the-definition-of-pi, the-derivative-and-mean-value-theorems, fundamental-trigonometric-identities, the-total-derivative, the-exponential-function, monotone-functions-and-discontinuities, roots-and-rational-powers, metric-spaces\n  22  triangularisation-and-jordan-canonical-form     36 items  <- vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, linear-independence-bases-and-dimension, eigenvalues-eigenvectors-and-the-characteristic-polynomial, diagonalisation-and-the-minimal-polynomial, matrices-and-the-matrix-of-a-linear-map, polynomial-rings-and-roots, construction-of-the-natural-numbers\n  22  trigonometric-and-oscillatory-examples-in-one-variable  11 items  <- the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, uniform-convergence-of-functions, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, series-and-nonnegative-tests, continuity-ivt-evt-and-uniform-continuity, topological-spaces-and-continuity, limits-of-real-functions, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, darboux-lhopital-and-taylor, approximation-and-compactness-in-ck, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, the-complex-exponential-and-eulers-formula, field-extensions-and-the-complex-numbers\n  22  uniform-completeness-and-samuel-compactification-examples   5 items  <- uniform-completeness-and-samuel-compactification, uniform-spaces, metric-spaces, foundations-of-the-real-numbers, limits-of-real-functions, finite-counting-and-binomial-coefficients, topology-of-r, monotone-sequences-and-cauchy-completeness, tychonoff-embedding-and-stone-cech, construction-of-the-natural-numbers, countability-and-uncountability, separation-axioms\n  22  universal-properties-and-the-yoneda-lemma       21 items  <- categories-functors-and-natural-transformations, relations-functions-and-quotients\n  22  volumes-of-elementary-solids-and-solids-of-revolution  15 items  <- the-riemann-integral-in-rn-and-jordan-content, compactness-in-metric-spaces, metric-spaces, the-topology-of-euclidean-space, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, limits-of-real-functions, fubini-and-change-of-variables, areas-of-elementary-plane-figures, partitions-of-unity-and-paracompactness, monotone-functions-and-discontinuities, the-riemann-integral, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc, topological-spaces-and-continuity, construction-of-the-natural-numbers\n  23  block-designs-and-finite-projective-planes-examples   7 items  <- block-designs-and-finite-projective-planes\n  23  classification-of-covering-spaces               16 items  <- topological-spaces-and-continuity, compactness, connectedness, subspaces-products-and-quotients, order-zorn-and-the-axiom-of-choice, covering-spaces-and-lifting, the-fundamental-group, group-actions-and-cayleys-theorem, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, the-fundamental-group-of-the-circle, divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, cosets-and-lagranges-theorem, congruences-and-the-chinese-remainder-theorem\n  23  complex-differentiability-and-cauchy-riemann-examples  13 items  <- complex-differentiability-and-cauchy-riemann, field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, the-exponential-function, metric-spaces\n  23  complex-power-series-and-analytic-functions     29 items  <- the-complex-exponential-and-eulers-formula, complex-differentiability-and-cauchy-riemann, uniform-convergence-of-functions, field-extensions-and-the-complex-numbers, rn-as-a-normed-space, power-series-and-real-analytic-functions, finite-counting-and-binomial-coefficients, the-exponential-function, monoids-groups-and-subgroups\n  23  complexification-realification-and-real-structures-examples  11 items  <- complexification-realification-and-real-structures\n  23  constant-rank-submersions-and-regular-level-sets-examples  14 items  <- constant-rank-submersions-and-regular-level-sets, rn-as-a-normed-space, the-derivative-and-mean-value-theorems, the-total-derivative, mixed-partials-taylor-and-extrema, the-inverse-function-theorem-completed, roots-and-rational-powers, linear-maps-rank-nullity-and-quotient-spaces, metric-spaces\n  23  contour-integration                             21 items  <- complex-differentiability-and-cauchy-riemann, arc-length-and-rectifiable-curves, line-integrals-and-the-gradient-theorem, bounded-variation-and-riemann-stieltjes, field-extensions-and-the-complex-numbers, rn-as-a-normed-space, the-riemann-integral, compactness-in-metric-spaces, the-topology-of-euclidean-space, the-complex-exponential-and-eulers-formula, properties-of-the-integral-and-the-working-ftc, sine-cosine-and-the-definition-of-pi\n  23  erdos-hajnal-property-and-homogeneous-sets-examples   8 items  <- erdos-hajnal-property-and-homogeneous-sets, graphs-walks-and-connectivity, the-logarithm-and-general-powers, induced-subgraphs-and-hereditary-graph-classes\n  23  exterior-powers-orientation-and-hodge-duality   28 items  <- vector-spaces-and-subspaces, tensor-products-of-modules, linear-independence-bases-and-dimension, the-determinant-of-a-linear-operator, determinants-of-matrices-over-a-commutative-ring, construction-of-r-via-cauchy-sequences, triangularisation-and-jordan-canonical-form, finite-counting-and-binomial-coefficients, matrices-and-the-matrix-of-a-linear-map, inner-product-spaces-and-orthogonality\n  23  extraspecial-p-groups-and-central-products-examples  16 items  <- extraspecial-p-groups-and-central-products, semidirect-products-and-automorphism-groups, monoids-groups-and-subgroups, the-structure-of-finite-abelian-groups, cosets-and-lagranges-theorem, finite-counting-and-binomial-coefficients, cyclic-groups-and-direct-products, frattini-subgroups-and-the-burnside-basis-theorem, normal-subgroups-and-quotient-groups, congruences-and-the-chinese-remainder-theorem\n  23  finite-fields-and-cyclotomic-extensions         65 items  <- monoids-groups-and-subgroups, cosets-and-lagranges-theorem, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, algebraic-extensions-degree-and-finite-fields, the-galois-correspondence, polynomial-rings-and-roots, algebraic-closure-embeddings-and-separability, field-extensions-and-the-complex-numbers, splitting-fields, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients, determinants-of-matrices-over-a-commutative-ring, matrices-and-the-matrix-of-a-linear-map, linear-maps-rank-nullity-and-quotient-spaces, the-determinant-of-a-linear-operator, diagonalisation-and-the-minimal-polynomial, triangularisation-and-jordan-canonical-form, eigenvalues-eigenvectors-and-the-characteristic-polynomial, rings-subrings-and-integral-domains, construction-of-r-via-cauchy-sequences, euclidean-domains-pids-and-unique-factorisation, primes-and-the-fundamental-theorem-of-arithmetic, foundations-of-the-real-numbers, countability-and-uncountability, the-structure-of-finite-abelian-groups, cyclic-groups-and-direct-products, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups\n  23  improper-and-parameter-dependent-multiple-integrals-examples   4 items  <- improper-and-parameter-dependent-multiple-integrals, properties-of-the-integral-and-the-working-ftc, further-trigonometric-identities-and-inverses, fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content, primes-and-the-fundamental-theorem-of-arithmetic, foundations-of-the-real-numbers, topology-of-r, improper-integrals, the-exponential-function, the-derivative-and-mean-value-theorems, the-logarithm-and-general-powers\n  23  lattice-paths-and-catalan-numbers-examples      16 items  <- lattice-paths-and-catalan-numbers, finite-counting-and-binomial-coefficients, formal-power-series, linear-recurrences-and-rational-generating-functions, relations-functions-and-quotients\n  23  lebesgue-measure-on-euclidean-space-examples    13 items  <- lebesgue-measure-on-euclidean-space, cantor-set-baire-and-measure-zero, series-and-nonnegative-tests, measures-and-their-basic-properties, countability-and-uncountability, separation-axioms, continuity-ivt-evt-and-uniform-continuity, compactness-in-metric-spaces, foundations-of-the-real-numbers, determinants-of-matrices-over-a-commutative-ring, the-riemann-integral-in-rn-and-jordan-content, topology-of-r, monotone-sequences-and-cauchy-completeness, sigma-algebras-and-borel-sets, cardinal-arithmetic-and-cofinality, relations-functions-and-quotients\n  23  lebesgue-stieltjes-measures-and-distribution-functions  22 items  <- limits-of-real-functions, sigma-algebras-and-borel-sets, measures-and-their-basic-properties, monotone-sequences-and-cauchy-completeness, outer-measure-and-the-caratheodory-extension-theorem, topology-of-r, bounded-variation-and-riemann-stieltjes, countability-and-uncountability, lebesgue-measure-on-euclidean-space, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities\n  23  limits-and-colimits                             46 items  <- categories-functors-and-natural-transformations, universal-properties-and-the-yoneda-lemma, relations-functions-and-quotients, cardinal-arithmetic-and-cofinality, free-groups-and-presentations, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, monoids-groups-and-subgroups, subspaces-products-and-quotients, topological-spaces-and-continuity, modules-and-module-homomorphisms\n  23  modules-over-a-pid-and-canonical-forms          38 items  <- modules-and-module-homomorphisms, euclidean-domains-pids-and-unique-factorisation, chain-conditions-and-semisimple-modules, ideals-and-quotient-rings, tensor-products-of-modules, free-modules-and-exact-sequences, construction-of-the-natural-numbers, linear-independence-bases-and-dimension, the-field-of-fractions-and-localisation, determinants-of-matrices-over-a-commutative-ring, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, divisibility-gcd-and-bezout, the-structure-of-finite-abelian-groups, the-determinant-of-a-linear-operator, polynomial-rings-and-roots, eigenvalues-eigenvectors-and-the-characteristic-polynomial, diagonalisation-and-the-minimal-polynomial, triangularisation-and-jordan-canonical-form, matrices-and-the-matrix-of-a-linear-map\n  23  modules-substitution-and-prime-graphs           36 items  <- graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, erdos-hajnal-property-and-homogeneous-sets, the-logarithm-and-general-powers, inclusion-exclusion-and-the-pigeonhole-principle, relations-functions-and-quotients, the-exponential-function, foundations-of-the-real-numbers\n  23  non-measurable-sets-and-the-cost-of-choice      32 items  <- compactness, topology-of-r, lebesgue-measure-on-euclidean-space, countability-and-uncountability, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients, measures-and-their-basic-properties, foundations-of-the-real-numbers, monotone-functions-and-discontinuities, cantor-set-baire-and-measure-zero, continuity-ivt-evt-and-uniform-continuity, sigma-algebras-and-borel-sets, construction-of-r-via-cauchy-sequences, sequences-and-limits, ordinals-and-transfinite-recursion, cardinal-arithmetic-and-cofinality, filters-and-ultrafilters, deferred-measure-and-integration, deferred-set-theory-beyond-choice\n  23  pro-p-groups-and-the-p-adic-integers-examples    7 items  <- pro-p-groups-and-the-p-adic-integers, cyclic-groups-and-direct-products\n  23  regular-pairs-and-induced-counting-examples      8 items  <- regular-pairs-and-induced-counting, induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity\n  23  regular-surfaces-and-surface-integrals          22 items  <- rn-as-a-normed-space, linear-independence-bases-and-dimension, determinants-of-matrices-over-a-commutative-ring, inner-product-spaces-and-orthogonality, the-inverse-function-theorem-completed, the-riemann-integral-in-rn-and-jordan-content, metric-spaces, vector-spaces-and-subspaces, fubini-and-change-of-variables, the-total-derivative, improper-and-parameter-dependent-multiple-integrals, constant-rank-submersions-and-regular-level-sets, matrices-and-the-matrix-of-a-linear-map, compactness-in-metric-spaces, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, the-riemann-integral\n  23  smooth-manifolds-and-smooth-maps-examples       10 items  <- smooth-manifolds-and-smooth-maps, subspaces-products-and-quotients, connectedness, countability-axioms-and-cardinal-functions\n  23  smooth-partitions-of-unity-and-exhaustions      33 items  <- the-exponential-function, the-derivative-and-mean-value-theorems, the-total-derivative, smooth-manifolds-and-smooth-maps, partitions-of-unity-and-paracompactness, countability-axioms-and-cardinal-functions, separation-axioms, compactness\n  23  socles-and-the-onan-scott-landscape-examples     7 items  <- socles-and-the-onan-scott-landscape\n  23  sparse-restricted-subgraphs-and-rodl-nikiforov  26 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, induced-subgraphs-and-hereditary-graph-classes, regular-pairs-and-induced-counting, inclusion-exclusion-and-the-pigeonhole-principle, graph-colouring, the-logarithm-and-general-powers, monotone-sequences-and-cauchy-completeness\n  23  stone-weierstrass-general-examples               8 items  <- stone-weierstrass-general, field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, construction-of-the-natural-numbers, compactness-in-metric-spaces, compactness, metric-spaces, function-space-topologies, subspaces-products-and-quotients, order-zorn-and-the-axiom-of-choice, topology-of-r, hereditary-and-productive-separation, topological-spaces-and-continuity, partitions-of-unity-and-paracompactness, approximation-and-compactness-in-ck, fundamental-trigonometric-identities, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers\n  23  tangent-cotangent-and-the-differential          49 items  <- smooth-manifolds-and-smooth-maps, dual-spaces-bilinear-forms-and-inertia, the-fundamental-theorems-of-calculus, the-derivative-and-mean-value-theorems, the-inverse-function-theorem-completed, countability-and-uncountability, countability-axioms-and-cardinal-functions\n  23  the-fundamental-group-of-the-circle-examples     7 items  <- the-fundamental-group-of-the-circle, subspaces-products-and-quotients, topological-spaces-and-continuity, limits-of-real-functions, homotopy-and-homotopy-equivalence, continuity-ivt-evt-and-uniform-continuity, the-fundamental-group, covering-spaces-and-lifting\n  23  the-fundamental-theorem-of-algebra              13 items  <- continuity-ivt-evt-and-uniform-continuity, polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, eigenvalues-eigenvectors-and-the-characteristic-polynomial, splitting-fields, field-extensions-and-the-complex-numbers, algebraic-extensions-degree-and-finite-fields, algebraic-closure-embeddings-and-separability, the-galois-correspondence, sylow-theorems-and-nilpotent-groups\n  23  the-galois-correspondence-examples              15 items  <- the-galois-correspondence, algebraic-extensions-degree-and-finite-fields, polynomial-rings-and-roots, field-extensions-and-the-complex-numbers, splitting-fields, algebraic-closure-embeddings-and-separability, symmetric-polynomials\n  23  the-lebesgue-integral-and-the-convergence-theorems  45 items  <- measures-and-their-basic-properties, sigma-algebras-and-borel-sets, limsup-and-subsequential-limits, field-extensions-and-the-complex-numbers, the-derivative-and-mean-value-theorems, convexity, lebesgue-measure-on-euclidean-space\n  23  the-real-gamma-and-beta-functions               25 items  <- convexity, the-logarithm-and-general-powers, improper-integrals, the-exponential-function, properties-of-the-integral-and-the-working-ftc, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, improper-and-parameter-dependent-multiple-integrals, the-derivative-and-mean-value-theorems, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, sequences-and-limits, limits-of-real-functions, sine-cosine-and-the-definition-of-pi, fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content, pi-the-equivalent-characterizations, volumes-of-elementary-solids-and-solids-of-revolution\n  23  the-seifert-van-kampen-theorem                  15 items  <- the-fundamental-group, connectedness, compactness-in-metric-spaces, topological-spaces-and-continuity, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, the-topology-of-euclidean-space, rn-as-a-normed-space, partitions-of-unity-and-paracompactness, subspaces-products-and-quotients, homotopy-and-homotopy-equivalence, free-products-and-amalgamation, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, the-fundamental-group-of-the-circle, free-groups-and-presentations, construction-of-the-natural-numbers, cyclic-groups-and-direct-products\n  23  triangularisation-and-jordan-canonical-form-examples  17 items  <- triangularisation-and-jordan-canonical-form, diagonalisation-and-the-minimal-polynomial, eigenvalues-eigenvectors-and-the-characteristic-polynomial\n  23  trigonometric-and-oscillatory-examples-in-one-variable-examples  14 items  <- trigonometric-and-oscillatory-examples-in-one-variable, sine-cosine-and-the-definition-of-pi, roots-and-rational-powers, limits-of-real-functions, foundations-of-the-real-numbers, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, uniform-convergence-of-functions, approximation-and-compactness-in-ck, topology-of-r, metric-spaces, connectedness, subspaces-products-and-quotients, compactness-in-metric-spaces, topological-spaces-and-continuity, arc-length-and-rectifiable-curves, fundamental-trigonometric-identities, properties-of-the-integral-and-the-working-ftc, the-logarithm-and-general-powers, further-trigonometric-identities-and-inverses, construction-of-r-via-cauchy-sequences, completeness-and-uniform-continuity, absolute-convergence-and-rearrangement, bounded-variation-and-riemann-stieltjes, series-and-nonnegative-tests\n  23  universal-properties-and-the-yoneda-lemma-examples  14 items  <- universal-properties-and-the-yoneda-lemma, categories-functors-and-natural-transformations, the-zfc-axioms-and-basic-set-constructions, relations-functions-and-quotients, construction-of-the-natural-numbers, monoids-groups-and-subgroups, free-groups-and-presentations, polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, rings-subrings-and-integral-domains, topological-spaces-and-continuity\n  23  volumes-of-elementary-solids-and-solids-of-revolution-examples   9 items  <- volumes-of-elementary-solids-and-solids-of-revolution, areas-of-elementary-plane-figures, the-riemann-integral-in-rn-and-jordan-content, properties-of-the-integral-and-the-working-ftc, improper-integrals, pi-the-equivalent-characterizations, the-derivative-and-mean-value-theorems, cantor-set-baire-and-measure-zero, roots-and-rational-powers, compactness-in-metric-spaces, metric-spaces, fubini-and-change-of-variables, monotone-functions-and-discontinuities\n  24  adjunctions-units-and-counits                   51 items  <- categories-functors-and-natural-transformations, universal-properties-and-the-yoneda-lemma, limits-and-colimits, relations-functions-and-quotients, free-groups-and-presentations, free-modules-and-exact-sequences, monoids-groups-and-subgroups, construction-of-the-natural-numbers, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, topological-spaces-and-continuity, tychonoff-embedding-and-stone-cech, urysohn-lemma-and-tietze, foundations-of-the-real-numbers, rings-subrings-and-integral-domains, congruences-and-the-chinese-remainder-theorem, modules-and-module-homomorphisms, the-zfc-axioms-and-basic-set-constructions, ordinal-arithmetic, ordinals-and-transfinite-recursion\n  24  applications-of-the-fundamental-group           17 items  <- homotopy-and-homotopy-equivalence, the-fundamental-group, the-topology-of-euclidean-space, the-fundamental-group-of-the-circle, rn-as-a-normed-space, partitions-of-unity-and-paracompactness, monotone-functions-and-discontinuities, foundations-of-the-real-numbers, the-complex-exponential-and-eulers-formula, field-extensions-and-the-complex-numbers, subspaces-products-and-quotients, covering-spaces-and-lifting, the-seifert-van-kampen-theorem, relations-functions-and-quotients, metric-spaces, separation-axioms, uniform-spaces, topological-spaces-and-continuity, monoids-groups-and-subgroups, linear-independence-bases-and-dimension, compactness-in-metric-spaces, connectedness\n  24  arithmetic-functions-and-dirichlet-convolution  19 items  <- incidence-algebras-and-mobius-inversion, field-extensions-and-the-complex-numbers, divisibility-gcd-and-bezout, rings-subrings-and-integral-domains, construction-of-the-natural-numbers, primes-and-the-fundamental-theorem-of-arithmetic, finite-counting-and-binomial-coefficients, the-logarithm-and-general-powers, finite-fields-and-cyclotomic-extensions\n  24  blockades-combs-and-pattern-graphs              11 items  <- sparse-restricted-subgraphs-and-rodl-nikiforov, induced-subgraphs-and-hereditary-graph-classes, erdos-hajnal-property-and-homogeneous-sets\n  24  bull-free-graphs-and-the-erdos-hajnal-property  25 items  <- graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, graph-colouring, the-logarithm-and-general-powers, the-derivative-and-mean-value-theorems, the-exponential-function, modules-substitution-and-prime-graphs, erdos-hajnal-property-and-homogeneous-sets\n  24  classical-and-loglog-erdos-hajnal-bounds         5 items  <- erdos-hajnal-property-and-homogeneous-sets, sparse-restricted-subgraphs-and-rodl-nikiforov, graph-colouring, induced-subgraphs-and-hereditary-graph-classes, the-logarithm-and-general-powers, regular-pairs-and-induced-counting\n  24  classification-of-covering-spaces-examples       3 items  <- classification-of-covering-spaces, divisibility-gcd-and-bezout, monoids-groups-and-subgroups, covering-spaces-and-lifting, the-fundamental-group, the-fundamental-group-of-the-circle, connectedness, normal-subgroups-and-quotient-groups, the-seifert-van-kampen-theorem, free-groups-and-presentations, group-actions-and-cayleys-theorem, congruences-and-the-chinese-remainder-theorem, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem\n  24  complex-power-series-and-analytic-functions-examples  11 items  <- complex-power-series-and-analytic-functions, the-complex-exponential-and-eulers-formula, the-logarithm-and-general-powers, foundations-of-the-real-numbers, field-extensions-and-the-complex-numbers, series-and-nonnegative-tests, finite-counting-and-binomial-coefficients, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, darboux-lhopital-and-taylor\n  24  contour-integration-examples                    12 items  <- contour-integration, complex-differentiability-and-cauchy-riemann, arc-length-and-rectifiable-curves, field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula\n  24  exterior-powers-orientation-and-hodge-duality-examples  13 items  <- exterior-powers-orientation-and-hodge-duality\n  24  finite-fields-and-cyclotomic-extensions-examples  19 items  <- finite-fields-and-cyclotomic-extensions, polynomial-rings-and-roots, field-extensions-and-the-complex-numbers, algebraic-extensions-degree-and-finite-fields, divisibility-gcd-and-bezout, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, the-galois-correspondence, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem\n  24  geometric-actions-svarc-milnor-and-growth       20 items  <- group-actions-and-cayleys-theorem, metric-spaces, cayley-graphs-word-metrics-and-quasi-isometry, foundations-of-the-real-numbers, construction-of-the-natural-numbers, free-groups-and-presentations, modules-over-a-pid-and-canonical-forms, composition-series-and-solvable-groups\n  24  goursat-and-cauchys-theorem-in-a-convex-domain  17 items  <- complex-differentiability-and-cauchy-riemann, contour-integration, metric-spaces, field-extensions-and-the-complex-numbers, arc-length-and-rectifiable-curves, line-integrals-and-the-gradient-theorem, the-total-derivative, completeness-and-uniform-continuity, the-complex-exponential-and-eulers-formula, compactness-in-metric-spaces, construction-of-the-natural-numbers, monotone-sequences-and-cauchy-completeness, topology-of-r, finite-counting-and-binomial-coefficients, pi-the-equivalent-characterizations\n  24  lebesgue-stieltjes-measures-and-distribution-functions-examples   9 items  <- lebesgue-stieltjes-measures-and-distribution-functions, measures-and-their-basic-properties\n  24  limits-and-colimits-examples                    17 items  <- limits-and-colimits, categories-functors-and-natural-transformations, relations-functions-and-quotients, subspaces-products-and-quotients, topological-spaces-and-continuity, monoids-groups-and-subgroups\n  24  measurable-functions-and-simple-approximation   28 items  <- sigma-algebras-and-borel-sets, limsup-and-subsequential-limits, lebesgue-measure-on-euclidean-space, countability-and-uncountability, construction-of-r-via-cauchy-sequences, monotone-functions-and-discontinuities, measures-and-their-basic-properties, non-measurable-sets-and-the-cost-of-choice, cantor-set-baire-and-measure-zero, separation-axioms\n  24  modules-over-a-pid-and-canonical-forms-examples  12 items  <- euclidean-domains-pids-and-unique-factorisation, modules-over-a-pid-and-canonical-forms, the-structure-of-finite-abelian-groups, triangularisation-and-jordan-canonical-form, modules-and-module-homomorphisms, ideals-and-quotient-rings, construction-of-r-via-cauchy-sequences, polynomial-rings-and-roots, divisibility-gcd-and-bezout, free-modules-and-exact-sequences\n  24  modules-substitution-and-prime-graphs-examples  14 items  <- modules-substitution-and-prime-graphs, graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, erdos-hajnal-property-and-homogeneous-sets\n  24  noetherian-rings-and-hilbert-basis              39 items  <- rings-subrings-and-integral-domains, chain-conditions-and-semisimple-modules, modules-and-module-homomorphisms, ideals-and-quotient-rings, tensor-products-of-modules, the-field-of-fractions-and-localisation, free-modules-and-exact-sequences, polynomial-rings-and-roots, construction-of-the-natural-numbers, modules-over-a-pid-and-canonical-forms, euclidean-domains-pids-and-unique-factorisation, monoids-groups-and-subgroups, group-actions-and-cayleys-theorem, symmetric-polynomials, order-zorn-and-the-axiom-of-choice\n  24  non-measurable-sets-and-the-cost-of-choice-examples  11 items  <- non-measurable-sets-and-the-cost-of-choice, countability-and-uncountability, cantor-set-baire-and-measure-zero, lebesgue-measure-on-euclidean-space, monotone-functions-and-discontinuities, measures-and-their-basic-properties, relations-functions-and-quotients, topology-of-r, deferred-set-theory-beyond-choice\n  24  polynomial-rodl-and-viral-equivalence           15 items  <- induced-subgraphs-and-hereditary-graph-classes, sparse-restricted-subgraphs-and-rodl-nikiforov, the-logarithm-and-general-powers, erdos-hajnal-property-and-homogeneous-sets, graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, inclusion-exclusion-and-the-pigeonhole-principle, finite-probability-spaces-and-random-variables, foundations-of-the-real-numbers, finite-probability-and-the-probabilistic-method, the-exponential-function, graph-colouring\n  24  presheaves-sheaves-stalks-and-sheafification    29 items  <- categories-functors-and-natural-transformations, topological-spaces-and-continuity, limits-and-colimits, relations-functions-and-quotients\n  24  pure-pairs-forests-and-path-antipath-classes     7 items  <- induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity, erdos-hajnal-property-and-homogeneous-sets, the-logarithm-and-general-powers, sparse-restricted-subgraphs-and-rodl-nikiforov, trees-forests-and-spanning-trees\n  24  rank-theorems-and-embedded-submanifolds         37 items  <- tangent-cotangent-and-the-differential, constant-rank-submersions-and-regular-level-sets, smooth-manifolds-and-smooth-maps, inverse-and-implicit-function-theorems, the-inverse-function-theorem-completed, topological-spaces-and-continuity, subspaces-products-and-quotients, compactness, hereditary-and-productive-separation, countability-axioms-and-cardinal-functions, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, the-total-derivative, the-exponential-function\n  24  regular-surfaces-and-surface-integrals-examples  13 items  <- regular-surfaces-and-surface-integrals, sine-cosine-and-the-definition-of-pi, fubini-and-change-of-variables, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, the-integral-logarithm-and-its-characterisations, volumes-of-elementary-solids-and-solids-of-revolution, improper-integrals, areas-of-elementary-plane-figures, sequences-and-limits, limits-of-real-functions, foundations-of-the-real-numbers, the-total-derivative, rn-as-a-normed-space\n  24  smooth-partitions-of-unity-and-exhaustions-examples   9 items  <- smooth-partitions-of-unity-and-exhaustions\n  24  solvability-by-radicals-and-kummer-theory       28 items  <- algebraic-extensions-degree-and-finite-fields, the-determinant-of-a-linear-operator, matrices-and-the-matrix-of-a-linear-map, algebraic-closure-embeddings-and-separability, the-galois-correspondence, determinants-of-matrices-over-a-commutative-ring, dual-spaces-bilinear-forms-and-inertia, finite-fields-and-cyclotomic-extensions, splitting-fields, rings-subrings-and-integral-domains, the-structure-of-finite-abelian-groups, composition-series-and-solvable-groups, symmetric-groups-and-the-sign-homomorphism, conjugacy-and-simplicity-in-the-symmetric-groups, group-actions-and-cayleys-theorem, symmetric-polynomials, the-field-of-fractions-and-localisation\n  24  sparse-restricted-subgraphs-and-rodl-nikiforov-examples  11 items  <- sparse-restricted-subgraphs-and-rodl-nikiforov, induced-subgraphs-and-hereditary-graph-classes, regular-pairs-and-induced-counting, graphs-walks-and-connectivity\n  24  tangent-cotangent-and-the-differential-examples  10 items  <- tangent-cotangent-and-the-differential, smooth-manifolds-and-smooth-maps\n  24  the-divergence-theorem-and-classical-stokes     45 items  <- the-total-derivative, the-inverse-function-theorem-completed, regular-surfaces-and-surface-integrals, rn-as-a-normed-space, the-derivative-and-mean-value-theorems, line-integrals-and-the-gradient-theorem, mixed-partials-taylor-and-extrema, the-fundamental-theorems-of-calculus, compactness-in-metric-spaces, uniform-convergence-of-functions, the-riemann-integral, the-riemann-integral-in-rn-and-jordan-content, completeness-and-uniform-continuity, improper-and-parameter-dependent-multiple-integrals, fubini-and-change-of-variables, inverse-and-implicit-function-theorems, metric-spaces, determinants-of-matrices-over-a-commutative-ring, symmetric-groups-and-the-sign-homomorphism, volumes-of-elementary-solids-and-solids-of-revolution, linear-independence-bases-and-dimension, properties-of-the-integral-and-the-working-ftc, limits-of-real-functions, construction-of-r-via-cauchy-sequences, sine-cosine-and-the-definition-of-pi\n  24  the-group-algebra-and-representations           24 items  <- rings-subrings-and-integral-domains, free-modules-and-exact-sequences, monoids-groups-and-subgroups, tensor-products-of-modules, ideals-and-quotient-rings, linear-independence-bases-and-dimension, foundations-of-the-real-numbers, group-actions-and-cayleys-theorem, modules-and-module-homomorphisms, matrices-and-the-matrix-of-a-linear-map, vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, chain-conditions-and-semisimple-modules, symmetric-groups-and-the-sign-homomorphism, the-structure-of-finite-abelian-groups, finite-fields-and-cyclotomic-extensions, triangularisation-and-jordan-canonical-form, eigenvalues-eigenvectors-and-the-characteristic-polynomial, composition-series-and-solvable-groups\n  24  the-lebesgue-integral-and-the-convergence-theorems-examples  14 items  <- measures-and-their-basic-properties, the-lebesgue-integral-and-the-convergence-theorems, monotone-functions-and-discontinuities, lebesgue-measure-on-euclidean-space, series-and-nonnegative-tests\n  24  the-real-gamma-and-beta-functions-examples       7 items  <- the-real-gamma-and-beta-functions, convexity, the-logarithm-and-general-powers, sine-cosine-and-the-definition-of-pi, the-exponential-function\n  24  the-seifert-van-kampen-theorem-examples          5 items  <- the-seifert-van-kampen-theorem, the-fundamental-group, connectedness, homotopy-and-homotopy-equivalence, free-groups-and-presentations, group-homomorphisms-and-the-isomorphism-theorems, the-fundamental-group-of-the-circle, the-topology-of-euclidean-space, free-products-and-amalgamation\n  24  the-spectral-theorem-and-singular-value-decomposition  34 items  <- inner-product-spaces-and-orthogonality, matrices-and-the-matrix-of-a-linear-map, triangularisation-and-jordan-canonical-form, the-fundamental-theorem-of-algebra, field-extensions-and-the-complex-numbers, diagonalisation-and-the-minimal-polynomial, algebraic-closure-embeddings-and-separability, polynomial-rings-and-roots, the-galois-correspondence, dual-spaces-bilinear-forms-and-inertia, foundations-of-the-real-numbers, linear-maps-rank-nullity-and-quotient-spaces, linear-independence-bases-and-dimension, eigenvalues-eigenvectors-and-the-characteristic-polynomial\n  24  trigonometric-and-oscillatory-examples-in-several-variables-examples   9 items  <- sine-cosine-and-the-definition-of-pi, rn-as-a-normed-space, the-derivative-and-mean-value-theorems, the-total-derivative, foundations-of-the-real-numbers, roots-and-rational-powers, the-logarithm-and-general-powers, approximation-and-compactness-in-ck, trigonometric-and-oscillatory-examples-in-one-variable, compactness-in-metric-spaces, volumes-of-elementary-solids-and-solids-of-revolution, fundamental-trigonometric-identities, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, regular-surfaces-and-surface-integrals, fubini-and-change-of-variables, the-inverse-function-theorem-completed\n  25  adjunctions-units-and-counits-examples          10 items  <- adjunctions-units-and-counits, free-groups-and-presentations, free-modules-and-exact-sequences, polynomial-rings-and-roots, ideals-and-quotient-rings, categories-functors-and-natural-transformations, construction-of-the-natural-numbers, group-actions-and-cayleys-theorem, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, limits-of-real-functions, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers\n  25  algebraic-and-spectral-graph-theory             24 items  <- graphs-walks-and-connectivity, determinants-of-matrices-over-a-commutative-ring, eigenvalues-eigenvectors-and-the-characteristic-polynomial, the-spectral-theorem-and-singular-value-decomposition, matrices-and-the-matrix-of-a-linear-map, linear-recurrences-and-rational-generating-functions, trees-forests-and-spanning-trees\n  25  amenable-groups-and-folner-criteria             29 items  <- monoids-groups-and-subgroups, modules-over-a-pid-and-canonical-forms, normal-subgroups-and-quotient-groups, composition-series-and-solvable-groups, matchings-covers-menger-and-network-flows, filters-and-ultrafilters, geometric-actions-svarc-milnor-and-growth, free-products-and-amalgamation, cayley-graphs-word-metrics-and-quasi-isometry, countability-and-uncountability\n  25  analyticity-liouville-and-morera                22 items  <- function-space-topologies, compactness-in-metric-spaces, mixed-partials-taylor-and-extrema, rn-as-a-normed-space, finite-counting-and-binomial-coefficients, roots-and-rational-powers, series-and-nonnegative-tests, the-complex-exponential-and-eulers-formula, goursat-and-cauchys-theorem-in-a-convex-domain, limsup-and-subsequential-limits, construction-of-the-natural-numbers, contour-integration, monotone-sequences-and-cauchy-completeness, field-extensions-and-the-complex-numbers, metric-spaces, complex-differentiability-and-cauchy-riemann, complex-power-series-and-analytic-functions, the-topology-of-euclidean-space, limits-of-real-functions, the-logarithm-and-general-powers, the-exponential-function, pi-the-equivalent-characterizations, fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content, the-riemann-integral, topological-spaces-and-continuity\n  25  applications-of-the-fundamental-group-examples   6 items  <- homotopy-and-homotopy-equivalence, applications-of-the-fundamental-group, the-topology-of-euclidean-space, the-complex-exponential-and-eulers-formula, rn-as-a-normed-space, topological-spaces-and-continuity, foundations-of-the-real-numbers, covering-spaces-and-lifting, the-fundamental-group-of-the-circle, the-fundamental-group, metric-spaces\n  25  arithmetic-functions-and-dirichlet-convolution-examples   8 items  <- arithmetic-functions-and-dirichlet-convolution, primes-and-the-fundamental-theorem-of-arithmetic, incidence-algebras-and-mobius-inversion, congruences-and-the-chinese-remainder-theorem\n  25  blockades-combs-and-pattern-graphs-examples      9 items  <- blockades-combs-and-pattern-graphs, sparse-restricted-subgraphs-and-rodl-nikiforov\n  25  bull-free-graphs-and-the-erdos-hajnal-property-examples   6 items  <- bull-free-graphs-and-the-erdos-hajnal-property, graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, graph-colouring, modules-substitution-and-prime-graphs\n  25  classical-and-loglog-erdos-hajnal-bounds-examples   5 items  <- classical-and-loglog-erdos-hajnal-bounds, the-logarithm-and-general-powers, erdos-hajnal-property-and-homogeneous-sets\n  25  cographs-perfect-patterns-and-pure-pairs        21 items  <- graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, pure-pairs-forests-and-path-antipath-classes, modules-substitution-and-prime-graphs, graph-colouring, erdos-hajnal-property-and-homogeneous-sets, the-logarithm-and-general-powers, roots-and-rational-powers, blockades-combs-and-pattern-graphs, finite-counting-and-binomial-coefficients, the-derivative-and-mean-value-theorems, the-exponential-function\n  25  ends-coends-and-weighted-limits                 50 items  <- categories-functors-and-natural-transformations, limits-and-colimits, universal-properties-and-the-yoneda-lemma, relations-functions-and-quotients, free-modules-and-exact-sequences, modules-and-module-homomorphisms, adjunctions-units-and-counits, monoids-groups-and-subgroups, the-zfc-axioms-and-basic-set-constructions, finite-counting-and-binomial-coefficients, countability-and-uncountability\n  25  geometric-actions-svarc-milnor-and-growth-examples  12 items  <- geometric-actions-svarc-milnor-and-growth, metric-spaces, cayley-graphs-word-metrics-and-quasi-isometry\n  25  goursat-and-cauchys-theorem-in-a-convex-domain-examples   8 items  <- goursat-and-cauchys-theorem-in-a-convex-domain, contour-integration, complex-differentiability-and-cauchy-riemann, complex-power-series-and-analytic-functions, field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, connectedness, the-topology-of-euclidean-space, line-integrals-and-the-gradient-theorem, the-total-derivative\n  25  hyperbolic-spaces-and-hyperbolic-groups-examples   7 items  <- hyperbolic-spaces-and-hyperbolic-groups, geometric-actions-svarc-milnor-and-growth\n  25  iterative-sparsification-and-the-five-vertex-path-examples   4 items  <- induced-subgraphs-and-hereditary-graph-classes, blockades-combs-and-pattern-graphs, graphs-walks-and-connectivity, modules-substitution-and-prime-graphs\n  25  localisation-of-modules-and-support             35 items  <- modules-and-module-homomorphisms, the-field-of-fractions-and-localisation, tensor-products-of-modules, free-modules-and-exact-sequences, noetherian-rings-and-hilbert-basis, ideals-and-quotient-rings, the-determinant-of-a-linear-operator\n  25  maschkes-theorem-and-complete-reducibility      19 items  <- the-group-algebra-and-representations, chain-conditions-and-semisimple-modules, group-actions-and-cayleys-theorem, foundations-of-the-real-numbers, determinants-of-matrices-over-a-commutative-ring\n  25  matrix-norms-condition-numbers-and-numerical-stability  23 items  <- rn-as-a-normed-space, matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, foundations-of-the-real-numbers, field-extensions-and-the-complex-numbers, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition, gaussian-elimination-and-row-reduction, series-and-nonnegative-tests, finite-counting-and-binomial-coefficients\n  25  measurable-functions-and-simple-approximation-examples  12 items  <- measurable-functions-and-simple-approximation, topology-of-r, countability-and-uncountability, monotone-functions-and-discontinuities, sigma-algebras-and-borel-sets, non-measurable-sets-and-the-cost-of-choice, lebesgue-measure-on-euclidean-space\n  25  modes-of-convergence-egorov-and-lusin           33 items  <- measures-and-their-basic-properties, uniform-convergence-of-functions, the-lebesgue-integral-and-the-convergence-theorems, measurable-functions-and-simple-approximation, lebesgue-measure-on-euclidean-space, function-space-topologies, urysohn-lemma-and-tietze, metric-spaces, separation-axioms, compactness-in-metric-spaces, topology-of-r\n  25  noetherian-rings-and-hilbert-basis-examples     12 items  <- noetherian-rings-and-hilbert-basis, foundations-of-the-real-numbers, divisibility-gcd-and-bezout, ideals-and-quotient-rings, polynomial-rings-and-roots, rings-subrings-and-integral-domains, the-field-of-fractions-and-localisation, vector-spaces-and-subspaces, linear-independence-bases-and-dimension, tensor-products-of-modules, symmetric-polynomials, monoids-groups-and-subgroups, group-actions-and-cayleys-theorem, modules-and-module-homomorphisms, free-modules-and-exact-sequences, congruences-and-the-chinese-remainder-theorem, modules-over-a-pid-and-canonical-forms\n  25  polynomial-rodl-and-viral-equivalence-examples   4 items  <- polynomial-rodl-and-viral-equivalence, erdos-hajnal-property-and-homogeneous-sets, graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, the-logarithm-and-general-powers, the-exponential-function, sparse-restricted-subgraphs-and-rodl-nikiforov\n  25  preadditive-and-additive-categories-and-biproducts  60 items  <- categories-functors-and-natural-transformations, rings-subrings-and-integral-domains, modules-and-module-homomorphisms, limits-and-colimits, free-modules-and-exact-sequences, adjunctions-units-and-counits, universal-properties-and-the-yoneda-lemma\n  25  presheaves-sheaves-stalks-and-sheafification-examples   9 items  <- presheaves-sheaves-stalks-and-sheafification, topological-spaces-and-continuity\n  25  prime-spectra-and-radicals                      44 items  <- rings-subrings-and-integral-domains, ideals-and-quotient-rings, algebraic-extensions-degree-and-finite-fields, the-field-of-fractions-and-localisation, order-zorn-and-the-axiom-of-choice, noetherian-rings-and-hilbert-basis\n  25  product-measures-and-the-fubini-tonelli-theorems  39 items  <- sigma-algebras-and-borel-sets, the-zfc-axioms-and-basic-set-constructions, outer-measure-and-the-caratheodory-extension-theorem, countability-and-uncountability, measurable-functions-and-simple-approximation, measures-and-their-basic-properties, the-lebesgue-integral-and-the-convergence-theorems, countability-axioms-and-cardinal-functions, lebesgue-measure-on-euclidean-space, the-logarithm-and-general-powers, properties-of-the-integral-and-the-working-ftc, the-real-gamma-and-beta-functions, improper-and-parameter-dependent-multiple-integrals, inverse-and-implicit-function-theorems, the-riemann-integral-in-rn-and-jordan-content, fubini-and-change-of-variables\n  25  pure-pairs-forests-and-path-antipath-classes-examples   2 items  <- pure-pairs-forests-and-path-antipath-classes, graphs-walks-and-connectivity\n  25  quotient-blockades-and-mixing-relations          7 items  <- blockades-combs-and-pattern-graphs, induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity\n  25  rank-theorems-and-embedded-submanifolds-examples   8 items  <- rank-theorems-and-embedded-submanifolds, the-total-derivative, determinants-of-matrices-over-a-commutative-ring, the-determinant-of-a-linear-operator, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, the-exponential-function, smooth-manifolds-and-smooth-maps\n  25  reflective-subcategories-and-the-adjoint-functor-theorems  44 items  <- categories-functors-and-natural-transformations, adjunctions-units-and-counits, universal-properties-and-the-yoneda-lemma, limits-and-colimits, relations-functions-and-quotients, urysohn-lemma-and-tietze, hausdorff-via-the-diagonal, nets-and-filters, compactness, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, ideals-and-quotient-rings, rings-subrings-and-integral-domains, modules-and-module-homomorphisms, ordinals-and-transfinite-recursion\n  25  signed-and-complex-measures-hahn-and-jordan     28 items  <- sigma-algebras-and-borel-sets, limsup-and-subsequential-limits, absolute-convergence-and-rearrangement, field-extensions-and-the-complex-numbers, measures-and-their-basic-properties, the-lebesgue-integral-and-the-convergence-theorems, measurable-functions-and-simple-approximation, vector-spaces-and-subspaces, rn-as-a-normed-space\n  25  smooth-vector-bundles-and-sections              51 items  <- smooth-manifolds-and-smooth-maps, vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, rank-theorems-and-embedded-submanifolds, tangent-cotangent-and-the-differential, subspaces-products-and-quotients, linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, the-total-derivative, smooth-partitions-of-unity-and-exhaustions, determinants-of-matrices-over-a-commutative-ring, the-inverse-function-theorem-completed, dual-spaces-bilinear-forms-and-inertia, inner-product-spaces-and-orthogonality, rn-as-a-normed-space\n  25  solvability-by-radicals-and-kummer-theory-examples  14 items  <- solvability-by-radicals-and-kummer-theory, finite-fields-and-cyclotomic-extensions, the-field-of-fractions-and-localisation, algebraic-closure-embeddings-and-separability, field-extensions-and-the-complex-numbers, the-galois-correspondence, splitting-fields, polynomial-rings-and-roots, algebraic-extensions-degree-and-finite-fields\n  25  the-divergence-theorem-and-classical-stokes-examples  16 items  <- the-divergence-theorem-and-classical-stokes, regular-surfaces-and-surface-integrals, the-riemann-integral-in-rn-and-jordan-content, linear-independence-bases-and-dimension, rn-as-a-normed-space, metric-spaces, fubini-and-change-of-variables, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, the-inverse-function-theorem-completed, sine-cosine-and-the-definition-of-pi, fundamental-trigonometric-identities, areas-of-elementary-plane-figures, volumes-of-elementary-solids-and-solids-of-revolution, the-total-derivative, the-logarithm-and-general-powers, partitions-of-unity-and-paracompactness, topological-spaces-and-continuity, completeness-and-uniform-continuity, line-integrals-and-the-gradient-theorem, connectedness, the-complex-exponential-and-eulers-formula\n  25  the-fundamental-theorem-of-algebra-examples     10 items  <- the-fundamental-theorem-of-algebra, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, field-extensions-and-the-complex-numbers, continuity-ivt-evt-and-uniform-continuity, polynomial-rings-and-roots, solvability-by-radicals-and-kummer-theory, composition-series-and-solvable-groups, the-galois-correspondence, roots-and-rational-powers, splitting-fields, algebraic-closure-embeddings-and-separability, eigenvalues-eigenvectors-and-the-characteristic-polynomial\n  25  the-group-algebra-and-representations-examples  11 items  <- the-group-algebra-and-representations, the-fundamental-theorem-of-algebra, monoids-groups-and-subgroups, finite-fields-and-cyclotomic-extensions, cosets-and-lagranges-theorem, semidirect-products-and-automorphism-groups, rings-subrings-and-integral-domains, field-extensions-and-the-complex-numbers, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences\n  25  the-lebesgue-and-riemann-integrals-compared      6 items  <- the-riemann-integral, sigma-algebras-and-borel-sets, the-lebesgue-integral-and-the-convergence-theorems, lebesgue-measure-on-euclidean-space, foundations-of-the-real-numbers, measurable-functions-and-simple-approximation, improper-integrals, bounded-variation-and-riemann-stieltjes, lebesgue-stieltjes-measures-and-distribution-functions\n  25  the-spectral-theorem-and-singular-value-decomposition-examples  19 items  <- the-spectral-theorem-and-singular-value-decomposition, inner-product-spaces-and-orthogonality\n  26  abelian-categories                              55 items  <- categories-functors-and-natural-transformations, limits-and-colimits, preadditive-and-additive-categories-and-biproducts, reflective-subcategories-and-the-adjoint-functor-theorems, adjunctions-units-and-counits, modules-over-a-pid-and-canonical-forms, modules-and-module-homomorphisms, subspaces-products-and-quotients, topological-spaces-and-continuity, hausdorff-via-the-diagonal, topology-of-r\n  26  algebraic-and-spectral-graph-theory-examples     8 items  <- algebraic-and-spectral-graph-theory, graphs-walks-and-connectivity\n  26  amenable-groups-and-folner-criteria-examples     7 items  <- amenable-groups-and-folner-criteria, semidirect-products-and-automorphism-groups, geometric-actions-svarc-milnor-and-growth\n  26  analyticity-liouville-and-morera-examples        8 items  <- analyticity-liouville-and-morera, complex-power-series-and-analytic-functions, the-complex-exponential-and-eulers-formula, complex-differentiability-and-cauchy-riemann, the-logarithm-and-general-powers, the-exponential-function, field-extensions-and-the-complex-numbers, series-and-nonnegative-tests, compactness-in-metric-spaces, goursat-and-cauchys-theorem-in-a-convex-domain, monotone-sequences-and-cauchy-completeness, properties-of-the-integral-and-the-working-ftc, mixed-partials-taylor-and-extrema, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi\n  26  artinian-rings-and-length                       12 items  <- chain-conditions-and-semisimple-modules, ideals-and-quotient-rings, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, prime-spectra-and-radicals, noetherian-rings-and-hilbert-basis, the-field-of-fractions-and-localisation\n  26  associated-primes-and-primary-decomposition     39 items  <- modules-and-module-homomorphisms, ideals-and-quotient-rings, compactness-in-metric-spaces, chain-conditions-and-semisimple-modules, noetherian-rings-and-hilbert-basis, free-modules-and-exact-sequences, localisation-of-modules-and-support, prime-spectra-and-radicals, the-field-of-fractions-and-localisation, relations-functions-and-quotients\n  26  characters-and-the-orthogonality-relations      30 items  <- the-group-algebra-and-representations, matrices-and-the-matrix-of-a-linear-map, group-actions-and-cayleys-theorem, vector-spaces-and-subspaces, field-extensions-and-the-complex-numbers, inner-product-spaces-and-orthogonality, finite-counting-and-binomial-coefficients, tensor-products-of-modules, dual-spaces-bilinear-forms-and-inertia, maschkes-theorem-and-complete-reducibility, cosets-and-lagranges-theorem, eigenvalues-eigenvectors-and-the-characteristic-polynomial, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups\n  26  cographs-perfect-patterns-and-pure-pairs-examples   5 items  <- cographs-perfect-patterns-and-pure-pairs, graphs-walks-and-connectivity, blockades-combs-and-pattern-graphs, induced-subgraphs-and-hereditary-graph-classes\n  26  direct-matrix-factorisations-lu-cholesky-and-qr  24 items  <- determinants-of-matrices-over-a-commutative-ring, matrices-and-the-matrix-of-a-linear-map, foundations-of-the-real-numbers, matrix-norms-condition-numbers-and-numerical-stability, dual-spaces-bilinear-forms-and-inertia, inner-product-spaces-and-orthogonality, field-extensions-and-the-complex-numbers, linear-maps-rank-nullity-and-quotient-spaces\n  26  dirichlet-series-and-euler-products             15 items  <- the-complex-exponential-and-eulers-formula, the-logarithm-and-general-powers, limsup-and-subsequential-limits, complex-power-series-and-analytic-functions, analyticity-liouville-and-morera, arithmetic-functions-and-dirichlet-convolution, primes-and-the-fundamental-theorem-of-arithmetic, incidence-algebras-and-mobius-inversion, series-and-nonnegative-tests, congruences-and-the-chinese-remainder-theorem\n  26  ends-coends-and-weighted-limits-examples         9 items  <- ends-coends-and-weighted-limits, categories-functors-and-natural-transformations, adjunctions-units-and-counits, relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, limits-and-colimits, monoids-groups-and-subgroups, universal-properties-and-the-yoneda-lemma, finite-counting-and-binomial-coefficients, free-modules-and-exact-sequences, modules-and-module-homomorphisms\n  26  flatness-and-faithful-flatness                  22 items  <- tensor-products-of-modules, the-field-of-fractions-and-localisation, localisation-of-modules-and-support, noetherian-rings-and-hilbert-basis, free-modules-and-exact-sequences\n  26  integral-extensions-and-going-up                17 items  <- chain-conditions-and-semisimple-modules, the-field-of-fractions-and-localisation, rings-subrings-and-integral-domains, noetherian-rings-and-hilbert-basis, foundations-of-the-real-numbers, ideals-and-quotient-rings, prime-spectra-and-radicals, field-extensions-and-the-complex-numbers, splitting-fields, localisation-of-modules-and-support, the-determinant-of-a-linear-operator\n  26  localisation-of-modules-and-support-examples    10 items  <- the-field-of-fractions-and-localisation, localisation-of-modules-and-support, tensor-products-of-modules, congruences-and-the-chinese-remainder-theorem, modules-and-module-homomorphisms, free-modules-and-exact-sequences\n  26  maschkes-theorem-and-complete-reducibility-examples  10 items  <- maschkes-theorem-and-complete-reducibility, semidirect-products-and-automorphism-groups, rings-subrings-and-integral-domains, the-group-algebra-and-representations, congruences-and-the-chinese-remainder-theorem\n  26  matrix-differentiation-and-first-order-spectral-perturbation  23 items  <- matrix-norms-condition-numbers-and-numerical-stability, matrices-and-the-matrix-of-a-linear-map, inner-product-spaces-and-orthogonality, eigenvalues-eigenvectors-and-the-characteristic-polynomial, the-inverse-function-theorem-completed, the-spectral-theorem-and-singular-value-decomposition\n  26  matrix-norms-condition-numbers-and-numerical-stability-examples  11 items  <- matrix-norms-condition-numbers-and-numerical-stability, inner-product-spaces-and-orthogonality\n  26  modes-of-convergence-egorov-and-lusin-examples   8 items  <- modes-of-convergence-egorov-and-lusin, countability-and-uncountability, measures-and-their-basic-properties, topology-of-r\n  26  monads-comonads-and-their-algebras              59 items  <- categories-functors-and-natural-transformations, adjunctions-units-and-counits, limits-and-colimits, reflective-subcategories-and-the-adjoint-functor-theorems, relations-functions-and-quotients, monoids-groups-and-subgroups, modules-and-module-homomorphisms, the-zfc-axioms-and-basic-set-constructions, filters-and-ultrafilters, topological-spaces-and-continuity\n  26  morse-critical-points-hessians-and-indices      18 items  <- rank-theorems-and-embedded-submanifolds, tangent-cotangent-and-the-differential, smooth-vector-bundles-and-sections, dual-spaces-bilinear-forms-and-inertia, inverse-and-implicit-function-theorems, compactness\n  26  preadditive-and-additive-categories-and-biproducts-examples   8 items  <- preadditive-and-additive-categories-and-biproducts, categories-functors-and-natural-transformations, free-modules-and-exact-sequences\n  26  prime-spectra-and-radicals-examples             12 items  <- construction-of-the-natural-numbers, monoids-groups-and-subgroups, ideals-and-quotient-rings, congruences-and-the-chinese-remainder-theorem, rings-subrings-and-integral-domains, prime-spectra-and-radicals\n  26  product-measures-and-the-fubini-tonelli-theorems-examples  11 items  <- product-measures-and-the-fubini-tonelli-theorems, improper-and-parameter-dependent-multiple-integrals, series-and-nonnegative-tests, measures-and-their-basic-properties, properties-of-the-integral-and-the-working-ftc, the-logarithm-and-general-powers, the-real-gamma-and-beta-functions, sigma-algebras-and-borel-sets, countability-and-uncountability, further-trigonometric-identities-and-inverses, lebesgue-measure-on-euclidean-space\n  26  quotient-blockades-and-mixing-relations-examples   4 items  <- induced-subgraphs-and-hereditary-graph-classes, quotient-blockades-and-mixing-relations\n  26  reflective-subcategories-and-the-adjoint-functor-theorems-examples   9 items  <- reflective-subcategories-and-the-adjoint-functor-theorems, limits-and-colimits, adjunctions-units-and-counits, divisibility-gcd-and-bezout, categories-functors-and-natural-transformations, group-homomorphisms-and-the-isomorphism-theorems, ordinals-and-transfinite-recursion, cyclic-groups-and-direct-products\n  26  sard-theorem-and-transversality                 44 items  <- smooth-manifolds-and-smooth-maps, the-riemann-integral-in-rn-and-jordan-content, compactness-in-metric-spaces, the-total-derivative, smooth-partitions-of-unity-and-exhaustions, countability-and-uncountability, series-and-nonnegative-tests, rank-theorems-and-embedded-submanifolds, inverse-and-implicit-function-theorems, mixed-partials-taylor-and-extrema, vector-spaces-and-subspaces, linear-independence-bases-and-dimension, tangent-cotangent-and-the-differential, smooth-vector-bundles-and-sections\n  26  signed-and-complex-measures-hahn-and-jordan-examples  15 items  <- measures-and-their-basic-properties, signed-and-complex-measures-hahn-and-jordan, lebesgue-stieltjes-measures-and-distribution-functions, sigma-algebras-and-borel-sets\n  26  smooth-vector-bundles-and-sections-examples     10 items  <- smooth-vector-bundles-and-sections, tangent-cotangent-and-the-differential, rank-theorems-and-embedded-submanifolds\n  26  tensor-fields-exterior-algebra-and-differential-forms  50 items  <- vector-spaces-and-subspaces, dual-spaces-bilinear-forms-and-inertia, symmetric-groups-and-the-sign-homomorphism, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, finite-counting-and-binomial-coefficients, determinants-of-matrices-over-a-commutative-ring, tangent-cotangent-and-the-differential, smooth-vector-bundles-and-sections, smooth-manifolds-and-smooth-maps\n  26  the-five-cycle-and-erdos-hajnal                  9 items  <- blockades-combs-and-pattern-graphs, series-and-nonnegative-tests, induced-subgraphs-and-hereditary-graph-classes, cographs-perfect-patterns-and-pure-pairs, graphs-walks-and-connectivity, sparse-restricted-subgraphs-and-rodl-nikiforov, regular-pairs-and-induced-counting, the-logarithm-and-general-powers\n  26  the-identity-theorem-and-the-open-mapping-theorem  25 items  <- complex-differentiability-and-cauchy-riemann, topological-spaces-and-continuity, relations-functions-and-quotients, analyticity-liouville-and-morera, metric-spaces, connectedness, rings-subrings-and-integral-domains, field-extensions-and-the-complex-numbers, goursat-and-cauchys-theorem-in-a-convex-domain, line-integrals-and-the-gradient-theorem, the-complex-exponential-and-eulers-formula, the-topology-of-euclidean-space, inverse-and-implicit-function-theorems, compactness-in-metric-spaces, the-exponential-function, the-logarithm-and-general-powers, construction-of-r-via-dedekind-cuts\n  26  the-lebesgue-and-riemann-integrals-compared-examples   6 items  <- monotone-functions-and-discontinuities, cantor-set-baire-and-measure-zero, lebesgue-measure-on-euclidean-space, the-lebesgue-integral-and-the-convergence-theorems, non-measurable-sets-and-the-cost-of-choice, measures-and-their-basic-properties, sigma-algebras-and-borel-sets, countability-and-uncountability, topology-of-r, series-and-nonnegative-tests, the-riemann-integral, improper-integrals, properties-of-the-integral-and-the-working-ftc, the-lebesgue-and-riemann-integrals-compared, separation-axioms\n  26  the-lp-spaces-holder-minkowski-and-riesz-fischer  33 items  <- measures-and-their-basic-properties, the-logarithm-and-general-powers, the-lebesgue-integral-and-the-convergence-theorems, triangularisation-and-jordan-canonical-form, roots-and-rational-powers, rn-as-a-normed-space, vector-spaces-and-subspaces, measurable-functions-and-simple-approximation, completeness-and-uniform-continuity, modes-of-convergence-egorov-and-lusin, the-exponential-function, the-real-gamma-and-beta-functions, metric-spaces\n  26  the-radon-nikodym-theorem-and-lebesgue-decomposition  20 items  <- measures-and-their-basic-properties, signed-and-complex-measures-hahn-and-jordan, the-lebesgue-integral-and-the-convergence-theorems, lebesgue-stieltjes-measures-and-distribution-functions\n  27  abelian-categories-examples                      9 items  <- abelian-categories, modules-and-module-homomorphisms, categories-functors-and-natural-transformations, uniform-spaces, preadditive-and-additive-categories-and-biproducts, chain-conditions-and-semisimple-modules, localisation-of-modules-and-support\n  27  artinian-rings-and-length-examples               6 items  <- polynomial-rings-and-roots, ideals-and-quotient-rings, chain-conditions-and-semisimple-modules, artinian-rings-and-length, foundations-of-the-real-numbers, divisibility-gcd-and-bezout, noetherian-rings-and-hilbert-basis, prime-spectra-and-radicals\n  27  associated-primes-and-primary-decomposition-examples   6 items  <- associated-primes-and-primary-decomposition, relations-functions-and-quotients, noetherian-rings-and-hilbert-basis, polynomial-rings-and-roots, ideals-and-quotient-rings, localisation-of-modules-and-support\n  27  characters-and-the-orthogonality-relations-examples  17 items  <- the-group-algebra-and-representations, cyclic-groups-and-direct-products, the-fundamental-theorem-of-algebra, finite-fields-and-cyclotomic-extensions, symmetric-polynomials, characters-and-the-orthogonality-relations, conjugacy-and-simplicity-in-the-symmetric-groups, normal-subgroups-and-quotient-groups, semidirect-products-and-automorphism-groups, composition-series-and-solvable-groups\n  27  density-separability-and-convolution-in-lp      35 items  <- fubini-and-change-of-variables, rn-as-a-normed-space, mixed-partials-taylor-and-extrema, compactness-in-metric-spaces, the-lebesgue-integral-and-the-convergence-theorems, the-lp-spaces-holder-minkowski-and-riesz-fischer, measurable-functions-and-simple-approximation, lebesgue-measure-on-euclidean-space, measures-and-their-basic-properties, metric-spaces, the-topology-of-euclidean-space, countability-axioms-and-cardinal-functions, countability-and-uncountability, sigma-algebras-and-borel-sets, product-measures-and-the-fubini-tonelli-theorems\n  27  direct-matrix-factorisations-lu-cholesky-and-qr-examples  10 items  <- direct-matrix-factorisations-lu-cholesky-and-qr\n  27  dirichlet-series-and-euler-products-examples     7 items  <- dirichlet-series-and-euler-products, complex-power-series-and-analytic-functions, series-and-nonnegative-tests, congruences-and-the-chinese-remainder-theorem, arithmetic-functions-and-dirichlet-convolution, absolute-convergence-and-rearrangement\n  27  eigenvalue-iterations-and-the-qr-algorithm      20 items  <- inner-product-spaces-and-orthogonality, matrices-and-the-matrix-of-a-linear-map, the-spectral-theorem-and-singular-value-decomposition, diagonalisation-and-the-minimal-polynomial, direct-matrix-factorisations-lu-cholesky-and-qr, triangularisation-and-jordan-canonical-form, determinants-of-matrices-over-a-commutative-ring\n  27  flatness-and-faithful-flatness-examples          7 items  <- tensor-products-of-modules, flatness-and-faithful-flatness, free-modules-and-exact-sequences\n  27  induced-representations-and-frobenius-reciprocity  27 items  <- the-group-algebra-and-representations, monoids-groups-and-subgroups, relations-functions-and-quotients, cosets-and-lagranges-theorem, free-modules-and-exact-sequences, linear-independence-bases-and-dimension, tensor-products-of-modules, characters-and-the-orthogonality-relations, finite-counting-and-binomial-coefficients, maschkes-theorem-and-complete-reducibility, chain-conditions-and-semisimple-modules, normal-subgroups-and-quotient-groups, field-extensions-and-the-complex-numbers, composition-series-and-solvable-groups, group-actions-and-cayleys-theorem, sylow-theorems-and-nilpotent-groups\n  27  integral-extensions-and-going-up-examples        6 items  <- chain-conditions-and-semisimple-modules, noetherian-rings-and-hilbert-basis, integral-extensions-and-going-up\n  27  iterative-sparsification-and-the-five-vertex-path  22 items  <- blockades-combs-and-pattern-graphs, sparse-restricted-subgraphs-and-rodl-nikiforov, graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, the-five-cycle-and-erdos-hajnal, modules-substitution-and-prime-graphs, polynomial-rodl-and-viral-equivalence\n  27  kan-extensions-density-and-the-free-cocompletion  29 items  <- categories-functors-and-natural-transformations, adjunctions-units-and-counits, limits-and-colimits, universal-properties-and-the-yoneda-lemma, ends-coends-and-weighted-limits, monads-comonads-and-their-algebras, filters-and-ultrafilters\n  27  matrix-differentiation-and-first-order-spectral-perturbation-examples   9 items  <- matrix-differentiation-and-first-order-spectral-perturbation\n  27  monadicity-and-becks-theorem                    44 items  <- limits-and-colimits, monads-comonads-and-their-algebras, adjunctions-units-and-counits, free-modules-and-exact-sequences, construction-of-r-via-cauchy-sequences, rings-subrings-and-integral-domains, monoids-groups-and-subgroups, categories-functors-and-natural-transformations, group-actions-and-cayleys-theorem, the-zfc-axioms-and-basic-set-constructions, relations-functions-and-quotients, compactness-in-metric-spaces, reflective-subcategories-and-the-adjoint-functor-theorems, filters-and-ultrafilters, compactness, subspaces-products-and-quotients, nets-and-filters, topological-spaces-and-continuity, modules-and-module-homomorphisms, normal-subgroups-and-quotient-groups\n  27  monads-comonads-and-their-algebras-examples     14 items  <- monads-comonads-and-their-algebras, monoids-groups-and-subgroups, group-actions-and-cayleys-theorem, categories-functors-and-natural-transformations, adjunctions-units-and-counits, topological-spaces-and-continuity, the-zfc-axioms-and-basic-set-constructions, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, modules-and-module-homomorphisms, free-modules-and-exact-sequences, free-groups-and-presentations, filters-and-ultrafilters, finite-counting-and-binomial-coefficients, limits-and-colimits, normal-subgroups-and-quotient-groups\n  27  monoidal-categories-and-monoidal-functors       38 items  <- categories-functors-and-natural-transformations, limits-and-colimits, monoids-groups-and-subgroups, monads-comonads-and-their-algebras, modules-over-a-pid-and-canonical-forms, abelian-categories, tensor-products-of-modules, rings-subrings-and-integral-domains, chains-antichains-sperner-and-dilworth, the-zfc-axioms-and-basic-set-constructions\n  27  morse-critical-points-hessians-and-indices-examples   6 items  <- morse-critical-points-hessians-and-indices\n  27  noether-normalisation-and-nullstellensatz       28 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, algebraic-extensions-degree-and-finite-fields, finite-fields-and-cyclotomic-extensions, noetherian-rings-and-hilbert-basis, chain-conditions-and-semisimple-modules, integral-extensions-and-going-up, prime-spectra-and-radicals, the-field-of-fractions-and-localisation, ideals-and-quotient-rings, eigenvalues-eigenvectors-and-the-characteristic-polynomial\n  27  normed-and-banach-spaces                        20 items  <- rn-as-a-normed-space, field-extensions-and-the-complex-numbers, completeness-and-uniform-continuity, linear-maps-rank-nullity-and-quotient-spaces, metric-spaces, relations-functions-and-quotients, vector-spaces-and-subspaces, roots-and-rational-powers, foundations-of-the-real-numbers, topological-spaces-and-continuity, subspaces-products-and-quotients, construction-of-the-natural-numbers, series-and-nonnegative-tests, sequences-and-limits, construction-of-r-via-cauchy-sequences, the-lp-spaces-holder-minkowski-and-riesz-fischer\n  27  probability-spaces-random-variables-and-expectation  30 items  <- measures-and-their-basic-properties, finite-probability-spaces-and-random-variables, measurable-functions-and-simple-approximation, sigma-algebras-and-borel-sets, lebesgue-stieltjes-measures-and-distribution-functions, the-lebesgue-integral-and-the-convergence-theorems, product-measures-and-the-fubini-tonelli-theorems, the-lp-spaces-holder-minkowski-and-riesz-fischer, vector-spaces-and-subspaces, inner-product-spaces-and-orthogonality\n  27  sard-theorem-and-transversality-examples        10 items  <- sard-theorem-and-transversality\n  27  star-expansions-and-erdos-hajnal                16 items  <- graphs-walks-and-connectivity, cographs-perfect-patterns-and-pure-pairs, blockades-combs-and-pattern-graphs, trees-forests-and-spanning-trees, sparse-restricted-subgraphs-and-rodl-nikiforov, the-five-cycle-and-erdos-hajnal, induced-subgraphs-and-hereditary-graph-classes, regular-pairs-and-induced-counting, erdos-hajnal-property-and-homogeneous-sets\n  27  subobject-lattices-generators-and-the-grothendieck-axioms  54 items  <- chains-antichains-sperner-and-dilworth, reflective-subcategories-and-the-adjoint-functor-theorems, abelian-categories, limits-and-colimits, composition-series-and-solvable-groups, adjunctions-units-and-counits, preadditive-and-additive-categories-and-biproducts, relations-functions-and-quotients, free-modules-and-exact-sequences\n  27  tensor-fields-exterior-algebra-and-differential-forms-examples  12 items  <- tensor-fields-exterior-algebra-and-differential-forms, matrices-and-the-matrix-of-a-linear-map, tangent-cotangent-and-the-differential\n  27  the-duality-of-lp-and-lq                        15 items  <- the-lp-spaces-holder-minkowski-and-riesz-fischer, the-lebesgue-integral-and-the-convergence-theorems, measures-and-their-basic-properties, signed-and-complex-measures-hahn-and-jordan, the-radon-nikodym-theorem-and-lebesgue-decomposition, measurable-functions-and-simple-approximation, countability-and-uncountability\n  27  the-five-cycle-and-erdos-hajnal-examples         4 items  <- the-five-cycle-and-erdos-hajnal, graphs-walks-and-connectivity, blockades-combs-and-pattern-graphs\n  27  the-identity-theorem-and-the-open-mapping-theorem-examples  10 items  <- the-identity-theorem-and-the-open-mapping-theorem, complex-power-series-and-analytic-functions, complex-differentiability-and-cauchy-riemann, sine-cosine-and-the-definition-of-pi, the-complex-exponential-and-eulers-formula, field-extensions-and-the-complex-numbers, the-topology-of-euclidean-space, the-exponential-function, the-derivative-and-mean-value-theorems, darboux-lhopital-and-taylor, analyticity-liouville-and-morera, metric-spaces, the-total-derivative, relations-functions-and-quotients\n  27  the-lp-spaces-holder-minkowski-and-riesz-fischer-examples  19 items  <- the-lp-spaces-holder-minkowski-and-riesz-fischer, the-logarithm-and-general-powers, improper-integrals, rn-as-a-normed-space, measures-and-their-basic-properties, the-lebesgue-integral-and-the-convergence-theorems, countability-and-uncountability, cantor-set-baire-and-measure-zero, modes-of-convergence-egorov-and-lusin\n  27  the-moore-penrose-pseudoinverse-and-regularised-least-squares  17 items  <- matrices-and-the-matrix-of-a-linear-map, inner-product-spaces-and-orthogonality, the-spectral-theorem-and-singular-value-decomposition, direct-matrix-factorisations-lu-cholesky-and-qr, matrix-norms-condition-numbers-and-numerical-stability, compactness-in-metric-spaces\n  27  the-radon-nikodym-theorem-and-lebesgue-decomposition-examples  15 items  <- the-radon-nikodym-theorem-and-lebesgue-decomposition, the-lebesgue-integral-and-the-convergence-theorems, lebesgue-stieltjes-measures-and-distribution-functions, measures-and-their-basic-properties, lebesgue-measure-on-euclidean-space, countability-and-uncountability\n  27  the-winding-number-and-the-global-cauchy-theorem  42 items  <- contour-integration, line-integrals-and-the-gradient-theorem, arc-length-and-rectifiable-curves, the-riemann-integral, field-extensions-and-the-complex-numbers, roots-and-rational-powers, construction-of-the-natural-numbers, compactness-in-metric-spaces, goursat-and-cauchys-theorem-in-a-convex-domain, analyticity-liouville-and-morera, complex-differentiability-and-cauchy-riemann, foundations-of-the-real-numbers, metric-spaces, the-complex-exponential-and-eulers-formula, the-identity-theorem-and-the-open-mapping-theorem, connectedness, the-total-derivative, construction-of-r-via-cauchy-sequences, limits-of-real-functions, suprema-and-infima, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, the-logarithm-and-general-powers, the-topology-of-euclidean-space, fundamental-trigonometric-identities, sine-cosine-and-the-definition-of-pi, rings-subrings-and-integral-domains, finite-counting-and-binomial-coefficients, order-zorn-and-the-axiom-of-choice, compactness, rn-as-a-normed-space, properties-of-the-integral-and-the-working-ftc, partitions-of-unity-and-paracompactness, continuity-ivt-evt-and-uniform-continuity\n  27  valuation-rings-and-discrete-valuation-rings    19 items  <- integral-extensions-and-going-up, prime-spectra-and-radicals, the-field-of-fractions-and-localisation, chain-conditions-and-semisimple-modules, euclidean-domains-pids-and-unique-factorisation, noetherian-rings-and-hilbert-basis, the-determinant-of-a-linear-operator\n  27  whitney-embedding-tubular-neighbourhoods-and-approximation  44 items  <- smooth-partitions-of-unity-and-exhaustions, rank-theorems-and-embedded-submanifolds, smooth-manifolds-and-smooth-maps, compactness, tangent-cotangent-and-the-differential, rn-as-a-normed-space, sard-theorem-and-transversality, smooth-vector-bundles-and-sections, homotopy-and-homotopy-equivalence\n  28  bounded-linear-operators-and-quotient-spaces    26 items  <- linear-maps-rank-nullity-and-quotient-spaces, rn-as-a-normed-space, normed-and-banach-spaces, completeness-and-uniform-continuity, metric-spaces, matrices-and-the-matrix-of-a-linear-map, countability-and-uncountability, relations-functions-and-quotients, vector-spaces-and-subspaces, triangularisation-and-jordan-canonical-form, compactness-in-metric-spaces, approximation-and-compactness-in-ck\n  28  closed-monoidal-categories-and-the-internal-hom  33 items  <- monoidal-categories-and-monoidal-functors, adjunctions-units-and-counits, categories-functors-and-natural-transformations, limits-and-colimits, universal-properties-and-the-yoneda-lemma, reflective-subcategories-and-the-adjoint-functor-theorems, chains-antichains-sperner-and-dilworth, tensor-products-of-modules\n  28  dedekind-domains-and-ideal-classes              33 items  <- chain-conditions-and-semisimple-modules, integral-extensions-and-going-up, prime-spectra-and-radicals, valuation-rings-and-discrete-valuation-rings, the-field-of-fractions-and-localisation, ideals-and-quotient-rings, noetherian-rings-and-hilbert-basis, solvability-by-radicals-and-kummer-theory, localisation-of-modules-and-support, free-modules-and-exact-sequences, artinian-rings-and-length, euclidean-domains-pids-and-unique-factorisation, tensor-products-of-modules, modules-over-a-pid-and-canonical-forms\n  28  density-separability-and-convolution-in-lp-examples  12 items  <- density-separability-and-convolution-in-lp, measures-and-their-basic-properties, countability-axioms-and-cardinal-functions, measurable-functions-and-simple-approximation\n  28  dirichlet-kernel-localisation-and-pointwise-fourier-convergence  14 items  <- density-separability-and-convolution-in-lp, sine-cosine-and-the-definition-of-pi, bounded-variation-and-riemann-stieltjes, properties-of-the-integral-and-the-working-ftc\n  28  eigenvalue-iterations-and-the-qr-algorithm-examples   9 items  <- eigenvalue-iterations-and-the-qr-algorithm\n  28  exactness-and-the-member-calculus               49 items  <- abelian-categories, reflective-subcategories-and-the-adjoint-functor-theorems, limits-and-colimits, preadditive-and-additive-categories-and-biproducts, categories-functors-and-natural-transformations, universal-properties-and-the-yoneda-lemma, subobject-lattices-generators-and-the-grothendieck-axioms\n  28  holomorphic-functions-of-several-variables      32 items  <- complex-differentiability-and-cauchy-riemann, rn-as-a-normed-space, compactness-in-metric-spaces, linear-independence-bases-and-dimension, field-extensions-and-the-complex-numbers, vector-spaces-and-subspaces, metric-spaces, the-topology-of-euclidean-space, the-total-derivative, line-integrals-and-the-gradient-theorem, rings-subrings-and-integral-domains, roots-and-rational-powers, mixed-partials-taylor-and-extrema, the-complex-exponential-and-eulers-formula, relations-functions-and-quotients, complex-power-series-and-analytic-functions, countability-and-uncountability, monoids-groups-and-subgroups, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness, goursat-and-cauchys-theorem-in-a-convex-domain, contour-integration, construction-of-the-natural-numbers, the-winding-number-and-the-global-cauchy-theorem, topological-spaces-and-continuity, pi-the-equivalent-characterizations, limsup-and-subsequential-limits, finite-counting-and-binomial-coefficients, properties-of-the-integral-and-the-working-ftc, analyticity-liouville-and-morera, suprema-and-infima, the-identity-theorem-and-the-open-mapping-theorem, matrices-and-the-matrix-of-a-linear-map, determinants-of-matrices-over-a-commutative-ring, connectedness\n  28  induced-representations-and-frobenius-reciprocity-examples   9 items  <- characters-and-the-orthogonality-relations, induced-representations-and-frobenius-reciprocity, cyclic-groups-and-direct-products, the-group-algebra-and-representations\n  28  isolated-singularities-and-laurent-series       21 items  <- the-winding-number-and-the-global-cauchy-theorem, contour-integration, complex-differentiability-and-cauchy-riemann, analyticity-liouville-and-morera, countability-and-uncountability, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers\n  28  iterative-restriction-and-comb-extraction-lemmas   5 items  <- erdos-hajnal-property-and-homogeneous-sets, trees-forests-and-spanning-trees, induced-subgraphs-and-hereditary-graph-classes, sparse-restricted-subgraphs-and-rodl-nikiforov, graphs-walks-and-connectivity, polynomial-rodl-and-viral-equivalence, iterative-sparsification-and-the-five-vertex-path, the-five-cycle-and-erdos-hajnal, blockades-combs-and-pattern-graphs\n  28  kan-extensions-density-and-the-free-cocompletion-examples   7 items  <- kan-extensions-density-and-the-free-cocompletion, categories-functors-and-natural-transformations, adjunctions-units-and-counits, limits-and-colimits, universal-properties-and-the-yoneda-lemma, group-actions-and-cayleys-theorem, construction-of-r-via-cauchy-sequences\n  28  krull-dimension-and-height-theorems             37 items  <- prime-spectra-and-radicals, rings-subrings-and-integral-domains, ideals-and-quotient-rings, noetherian-rings-and-hilbert-basis, the-field-of-fractions-and-localisation, localisation-of-modules-and-support, associated-primes-and-primary-decomposition, polynomial-rings-and-roots, integral-extensions-and-going-up, noether-normalisation-and-nullstellensatz, algebraic-extensions-degree-and-finite-fields\n  28  krylov-subspaces-arnoldi-and-gmres              20 items  <- matrices-and-the-matrix-of-a-linear-map, inner-product-spaces-and-orthogonality, eigenvalue-iterations-and-the-qr-algorithm, eigenvalues-eigenvectors-and-the-characteristic-polynomial\n  28  monadicity-and-becks-theorem-examples            7 items  <- monadicity-and-becks-theorem, categories-functors-and-natural-transformations, monads-comonads-and-their-algebras, monoids-groups-and-subgroups, adjunctions-units-and-counits, normal-subgroups-and-quotient-groups, limits-and-colimits, construction-of-the-natural-numbers, relations-functions-and-quotients, filters-and-ultrafilters, topological-spaces-and-continuity, compactness, subspaces-products-and-quotients\n  28  monoidal-categories-and-monoidal-functors-examples   8 items  <- monoidal-categories-and-monoidal-functors, categories-functors-and-natural-transformations, monads-comonads-and-their-algebras, the-zfc-axioms-and-basic-set-constructions\n  28  noether-normalisation-and-nullstellensatz-examples   7 items  <- noether-normalisation-and-nullstellensatz\n  28  normed-and-banach-spaces-examples                9 items  <- normed-and-banach-spaces, function-space-topologies, compactness-in-metric-spaces, approximation-and-compactness-in-ck, metric-spaces, rn-as-a-normed-space\n  28  probability-spaces-random-variables-and-expectation-examples  11 items  <- measures-and-their-basic-properties, probability-spaces-random-variables-and-expectation, countability-and-uncountability, the-lebesgue-integral-and-the-convergence-theorems\n  28  small-graph-erdos-hajnal-consequences           13 items  <- pure-pairs-forests-and-path-antipath-classes, erdos-hajnal-property-and-homogeneous-sets, graphs-walks-and-connectivity, cographs-perfect-patterns-and-pure-pairs, modules-substitution-and-prime-graphs, bull-free-graphs-and-the-erdos-hajnal-property, the-five-cycle-and-erdos-hajnal, iterative-sparsification-and-the-five-vertex-path, polynomial-rodl-and-viral-equivalence\n  28  star-expansions-and-erdos-hajnal-examples        5 items  <- star-expansions-and-erdos-hajnal, graphs-walks-and-connectivity\n  28  strictification-and-mac-lanes-coherence-theorem  22 items  <- monoidal-categories-and-monoidal-functors, categories-functors-and-natural-transformations\n  28  subobject-lattices-generators-and-the-grothendieck-axioms-examples   8 items  <- subobject-lattices-generators-and-the-grothendieck-axioms\n  28  the-duality-of-lp-and-lq-examples                6 items  <- the-duality-of-lp-and-lq, countability-and-uncountability, lebesgue-measure-on-euclidean-space, the-lp-spaces-holder-minkowski-and-riesz-fischer, sigma-algebras-and-borel-sets, measures-and-their-basic-properties, the-lebesgue-integral-and-the-convergence-theorems\n  28  the-maximal-function-and-lebesgue-differentiation  25 items  <- measurable-functions-and-simple-approximation, the-lebesgue-integral-and-the-convergence-theorems, metric-spaces, countability-and-uncountability, lebesgue-measure-on-euclidean-space, product-measures-and-the-fubini-tonelli-theorems, the-lp-spaces-holder-minkowski-and-riesz-fischer, the-duality-of-lp-and-lq, density-separability-and-convolution-in-lp, cantor-set-baire-and-measure-zero, measures-and-their-basic-properties, construction-of-r-via-cauchy-sequences, the-radon-nikodym-theorem-and-lebesgue-decomposition\n  28  the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples   9 items  <- the-moore-penrose-pseudoinverse-and-regularised-least-squares\n  28  the-winding-number-and-the-global-cauchy-theorem-examples  12 items  <- the-winding-number-and-the-global-cauchy-theorem, the-complex-exponential-and-eulers-formula, field-extensions-and-the-complex-numbers, contour-integration, arc-length-and-rectifiable-curves, the-logarithm-and-general-powers, sine-cosine-and-the-definition-of-pi, analyticity-liouville-and-morera, complex-differentiability-and-cauchy-riemann, connectedness, the-total-derivative, metric-spaces, line-integrals-and-the-gradient-theorem, the-topology-of-euclidean-space, topological-spaces-and-continuity\n  28  valuation-rings-and-discrete-valuation-rings-examples   8 items  <- valuation-rings-and-discrete-valuation-rings, euclidean-domains-pids-and-unique-factorisation, ideals-and-quotient-rings, the-field-of-fractions-and-localisation, modules-over-a-pid-and-canonical-forms\n  28  vector-fields-flows-and-lie-derivatives         50 items  <- tangent-cotangent-and-the-differential, smooth-vector-bundles-and-sections, smooth-partitions-of-unity-and-exhaustions, smooth-manifolds-and-smooth-maps, rank-theorems-and-embedded-submanifolds, whitney-embedding-tubular-neighbourhoods-and-approximation, euclidean-ordinary-differential-equations-with-smooth-dependence, compactness\n  28  whitney-embedding-tubular-neighbourhoods-and-approximation-examples  10 items  <- whitney-embedding-tubular-neighbourhoods-and-approximation\n  29  bounded-linear-operators-and-quotient-spaces-examples   8 items  <- bounded-linear-operators-and-quotient-spaces, normed-and-banach-spaces, linear-maps-rank-nullity-and-quotient-spaces, triangularisation-and-jordan-canonical-form, compactness-in-metric-spaces\n  29  braided-and-symmetric-monoidal-categories       29 items  <- monoidal-categories-and-monoidal-functors, categories-functors-and-natural-transformations, strictification-and-mac-lanes-coherence-theorem, free-groups-and-presentations, symmetric-groups-and-the-sign-homomorphism, monoids-groups-and-subgroups, conjugacy-and-simplicity-in-the-symmetric-groups\n  29  chain-complexes-and-homology                    47 items  <- abelian-categories, categories-functors-and-natural-transformations, limits-and-colimits, exactness-and-the-member-calculus, preadditive-and-additive-categories-and-biproducts, reflective-subcategories-and-the-adjoint-functor-theorems, monads-comonads-and-their-algebras, free-modules-and-exact-sequences, modules-over-a-pid-and-canonical-forms, euclidean-domains-pids-and-unique-factorisation, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout, tensor-products-of-modules, subobject-lattices-generators-and-the-grothendieck-axioms\n  29  closed-monoidal-categories-and-the-internal-hom-examples   6 items  <- closed-monoidal-categories-and-the-internal-hom, tensor-products-of-modules, universal-properties-and-the-yoneda-lemma\n  29  conjugate-gradients-minres-and-preconditioning  21 items  <- direct-matrix-factorisations-lu-cholesky-and-qr, inner-product-spaces-and-orthogonality, krylov-subspaces-arnoldi-and-gmres, matrices-and-the-matrix-of-a-linear-map, the-spectral-theorem-and-singular-value-decomposition, eigenvalue-iterations-and-the-qr-algorithm, the-fundamental-theorem-of-algebra, triangularisation-and-jordan-canonical-form, eigenvalues-eigenvectors-and-the-characteristic-polynomial\n  29  dedekind-domains-and-ideal-classes-examples      9 items  <- euclidean-domains-pids-and-unique-factorisation, modules-over-a-pid-and-canonical-forms, dedekind-domains-and-ideal-classes, artinian-rings-and-length, integral-extensions-and-going-up\n  29  dirichlet-kernel-localisation-and-pointwise-fourier-convergence-examples   5 items  <- dirichlet-kernel-localisation-and-pointwise-fourier-convergence, sine-cosine-and-the-definition-of-pi\n  29  exactness-and-the-member-calculus-examples       9 items  <- exactness-and-the-member-calculus, abelian-categories, free-modules-and-exact-sequences\n  29  finite-dimensional-normed-spaces-and-riesz-lemma  16 items  <- linear-independence-bases-and-dimension, bounded-linear-operators-and-quotient-spaces, rn-as-a-normed-space, field-extensions-and-the-complex-numbers, normed-and-banach-spaces, linear-maps-rank-nullity-and-quotient-spaces, compactness, metric-spaces, compactness-in-metric-spaces, the-topology-of-euclidean-space, vector-spaces-and-subspaces, countability-and-uncountability, deferred-set-theory-beyond-choice, construction-of-the-natural-numbers, function-space-topologies, topological-spaces-and-continuity\n  29  harmonic-functions-and-the-poisson-integral     26 items  <- complex-differentiability-and-cauchy-riemann, mixed-partials-taylor-and-extrema, the-winding-number-and-the-global-cauchy-theorem, analyticity-liouville-and-morera, the-identity-theorem-and-the-open-mapping-theorem, compactness-in-metric-spaces, compactness, the-complex-exponential-and-eulers-formula, isolated-singularities-and-laurent-series, properties-of-the-integral-and-the-working-ftc, the-topology-of-euclidean-space, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences\n  29  holomorphic-functions-of-several-variables-examples  12 items  <- holomorphic-functions-of-several-variables, the-complex-exponential-and-eulers-formula, absolute-convergence-and-rearrangement, field-extensions-and-the-complex-numbers, finite-counting-and-binomial-coefficients, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness, goursat-and-cauchys-theorem-in-a-convex-domain, contour-integration, complex-differentiability-and-cauchy-riemann, matrices-and-the-matrix-of-a-linear-map, determinants-of-matrices-over-a-commutative-ring, the-identity-theorem-and-the-open-mapping-theorem, power-series-and-real-analytic-functions, metric-spaces, rn-as-a-normed-space\n  29  infinite-products-and-weierstrass-factorisation  20 items  <- absolute-convergence-and-rearrangement, analyticity-liouville-and-morera, complex-differentiability-and-cauchy-riemann, the-winding-number-and-the-global-cauchy-theorem, isolated-singularities-and-laurent-series, complex-power-series-and-analytic-functions, the-complex-exponential-and-eulers-formula, goursat-and-cauchys-theorem-in-a-convex-domain, the-identity-theorem-and-the-open-mapping-theorem\n  29  isolated-singularities-and-laurent-series-examples   9 items  <- isolated-singularities-and-laurent-series, complex-differentiability-and-cauchy-riemann, the-complex-exponential-and-eulers-formula, sine-cosine-and-the-definition-of-pi\n  29  iterative-restriction-and-comb-extraction-lemmas-examples   4 items  <- iterative-restriction-and-comb-extraction-lemmas, pure-pairs-forests-and-path-antipath-classes, erdos-hajnal-property-and-homogeneous-sets, graphs-walks-and-connectivity, blockades-combs-and-pattern-graphs\n  29  krull-dimension-and-height-theorems-examples     7 items  <- krull-dimension-and-height-theorems, prime-spectra-and-radicals\n  29  krylov-subspaces-arnoldi-and-gmres-examples      8 items  <- krylov-subspaces-arnoldi-and-gmres\n  29  leaf-reducibility-and-wonderful-families         7 items  <- induced-subgraphs-and-hereditary-graph-classes, blockades-combs-and-pattern-graphs, sparse-restricted-subgraphs-and-rodl-nikiforov, graphs-walks-and-connectivity, small-graph-erdos-hajnal-consequences, erdos-hajnal-property-and-homogeneous-sets, modules-substitution-and-prime-graphs\n  29  leaf-reducibility-and-wonderful-families-examples   2 items  <- small-graph-erdos-hajnal-consequences, graphs-walks-and-connectivity, modules-substitution-and-prime-graphs\n  29  rees-modules-artin-rees-and-hilbert-samuel-theory  24 items  <- chain-conditions-and-semisimple-modules, noetherian-rings-and-hilbert-basis, localisation-of-modules-and-support, the-field-of-fractions-and-localisation, krull-dimension-and-height-theorems, valuation-rings-and-discrete-valuation-rings\n  29  small-graph-erdos-hajnal-consequences-examples   6 items  <- small-graph-erdos-hajnal-consequences, modules-substitution-and-prime-graphs, bull-free-graphs-and-the-erdos-hajnal-property, graphs-walks-and-connectivity\n  29  strictification-and-mac-lanes-coherence-theorem-examples   6 items  <- strictification-and-mac-lanes-coherence-theorem, monoidal-categories-and-monoidal-functors\n  29  the-diagram-lemmas-in-an-abelian-category       35 items  <- exactness-and-the-member-calculus, abelian-categories, limits-and-colimits, categories-functors-and-natural-transformations\n  29  the-maximal-function-and-lebesgue-differentiation-examples   9 items  <- countability-and-uncountability, the-maximal-function-and-lebesgue-differentiation, lebesgue-measure-on-euclidean-space, series-and-nonnegative-tests, measures-and-their-basic-properties, topology-of-r\n  29  the-residue-theorem                             22 items  <- improper-integrals, the-complex-exponential-and-eulers-formula, the-winding-number-and-the-global-cauchy-theorem, isolated-singularities-and-laurent-series, convexity, complex-power-series-and-analytic-functions\n  29  vector-fields-flows-and-lie-derivatives-examples  10 items  <- vector-fields-flows-and-lie-derivatives, smooth-partitions-of-unity-and-exhaustions\n  30  average-orders-divisor-sums-and-representation-counts  17 items  <- arithmetic-functions-and-dirichlet-convolution, the-logarithm-and-general-powers, properties-of-the-integral-and-the-working-ftc, monotone-sequences-and-cauchy-completeness, rings-subrings-and-integral-domains, the-derivative-and-mean-value-theorems, the-residue-theorem, incidence-algebras-and-mobius-inversion, congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, sums-of-two-squares, pi-the-equivalent-characterizations\n  30  braided-and-symmetric-monoidal-categories-examples   7 items  <- braided-and-symmetric-monoidal-categories, monoidal-categories-and-monoidal-functors\n  30  chain-complexes-and-homology-examples           10 items  <- chain-complexes-and-homology, abelian-categories, exactness-and-the-member-calculus\n  30  chain-homotopy-and-the-homotopy-category        40 items  <- chain-complexes-and-homology, preadditive-and-additive-categories-and-biproducts, abelian-categories, subobject-lattices-generators-and-the-grothendieck-axioms\n  30  conjugate-gradients-minres-and-preconditioning-examples   9 items  <- conjugate-gradients-minres-and-preconditioning, krylov-subspaces-arnoldi-and-gmres\n  30  crossed-homomorphisms-complements-and-first-cohomology  22 items  <- group-actions-and-cayleys-theorem, chain-complexes-and-homology, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, semidirect-products-and-automorphism-groups\n  30  duality-and-rigidity-in-monoidal-categories     37 items  <- monoidal-categories-and-monoidal-functors, adjunctions-units-and-counits, dual-spaces-bilinear-forms-and-inertia, linear-independence-bases-and-dimension, braided-and-symmetric-monoidal-categories, preadditive-and-additive-categories-and-biproducts\n  30  finite-dimensional-normed-spaces-and-riesz-lemma-examples   7 items  <- rn-as-a-normed-space, finite-dimensional-normed-spaces-and-riesz-lemma, normed-and-banach-spaces, linear-independence-bases-and-dimension, polynomial-rings-and-roots, linear-maps-rank-nullity-and-quotient-spaces\n  30  generalized-niceness-and-reduction-outcomes     10 items  <- blockades-combs-and-pattern-graphs, sparse-restricted-subgraphs-and-rodl-nikiforov, induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity, finite-probability-spaces-and-random-variables, leaf-reducibility-and-wonderful-families, iterative-restriction-and-comb-extraction-lemmas\n  30  harmonic-functions-and-the-poisson-integral-examples   9 items  <- harmonic-functions-and-the-poisson-integral, the-logarithm-and-general-powers, complex-differentiability-and-cauchy-riemann, the-complex-exponential-and-eulers-formula, the-identity-theorem-and-the-open-mapping-theorem\n  30  infinite-products-and-weierstrass-factorisation-examples   8 items  <- infinite-products-and-weierstrass-factorisation, complex-power-series-and-analytic-functions, absolute-convergence-and-rearrangement, series-and-nonnegative-tests\n  30  inverse-limits-and-noetherian-completion        21 items  <- tensor-products-of-modules, modules-and-module-homomorphisms, chain-conditions-and-semisimple-modules, rees-modules-artin-rees-and-hilbert-samuel-theory, noetherian-rings-and-hilbert-basis, flatness-and-faithful-flatness, the-field-of-fractions-and-localisation, compactness-in-metric-spaces, localisation-of-modules-and-support, krull-dimension-and-height-theorems\n  30  mittag-leffler-and-runges-theorem               18 items  <- isolated-singularities-and-laurent-series, fubini-and-change-of-variables, the-winding-number-and-the-global-cauchy-theorem, compactness-in-metric-spaces, the-complex-exponential-and-eulers-formula, sine-cosine-and-the-definition-of-pi, complex-power-series-and-analytic-functions, the-residue-theorem, analyticity-liouville-and-morera, infinite-products-and-weierstrass-factorisation\n  30  rees-modules-artin-rees-and-hilbert-samuel-theory-examples   7 items  <- rees-modules-artin-rees-and-hilbert-samuel-theory, valuation-rings-and-discrete-valuation-rings, chain-conditions-and-semisimple-modules\n  30  subharmonic-functions-and-the-dirichlet-problem  31 items  <- harmonic-functions-and-the-poisson-integral, the-lebesgue-integral-and-the-convergence-theorems, the-topology-of-euclidean-space, analyticity-liouville-and-morera, the-identity-theorem-and-the-open-mapping-theorem, the-winding-number-and-the-global-cauchy-theorem\n  30  the-argument-principle-and-rouche               16 items  <- isolated-singularities-and-laurent-series, the-residue-theorem, analyticity-liouville-and-morera, the-winding-number-and-the-global-cauchy-theorem, complex-differentiability-and-cauchy-riemann, the-identity-theorem-and-the-open-mapping-theorem, contour-integration, the-fundamental-theorem-of-algebra\n  30  the-diagram-lemmas-in-an-abelian-category-examples   8 items  <- the-diagram-lemmas-in-an-abelian-category, free-modules-and-exact-sequences, abelian-categories, exactness-and-the-member-calculus\n  30  the-gamma-function                              20 items  <- the-real-gamma-and-beta-functions, analyticity-liouville-and-morera, properties-of-the-integral-and-the-working-ftc, the-logarithm-and-general-powers, the-identity-theorem-and-the-open-mapping-theorem, infinite-products-and-weierstrass-factorisation\n  30  the-residue-theorem-examples                    11 items  <- the-residue-theorem, improper-integrals, convexity, the-complex-exponential-and-eulers-formula, improper-and-parameter-dependent-multiple-integrals, isolated-singularities-and-laurent-series\n  31  absolute-values-completions-and-p-adic-numbers  22 items  <- the-logarithm-and-general-powers, primes-and-the-fundamental-theorem-of-arithmetic, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, countability-and-uncountability, topology-of-r, completeness-and-uniform-continuity, inverse-limits-and-noetherian-completion, compactness-in-metric-spaces\n  31  average-orders-divisor-sums-and-representation-counts-examples   2 items  <- average-orders-divisor-sums-and-representation-counts, arithmetic-functions-and-dirichlet-convolution\n  31  chain-homotopy-and-the-homotopy-category-examples   8 items  <- chain-homotopy-and-the-homotopy-category, abelian-categories, chain-complexes-and-homology\n  31  chebyshev-bounds-and-mertens-theorems           18 items  <- primes-and-the-fundamental-theorem-of-arithmetic, the-logarithm-and-general-powers, arithmetic-functions-and-dirichlet-convolution, absolute-convergence-and-rearrangement, finite-counting-and-binomial-coefficients, chains-antichains-sperner-and-dilworth, construction-of-the-natural-numbers, average-orders-divisor-sums-and-representation-counts, series-and-nonnegative-tests, the-gamma-function\n  31  crossed-homomorphisms-complements-and-first-cohomology-examples   6 items  <- crossed-homomorphisms-complements-and-first-cohomology, cyclic-groups-and-direct-products, congruences-and-the-chinese-remainder-theorem, algebraic-extensions-degree-and-finite-fields, semidirect-products-and-automorphism-groups, monoids-groups-and-subgroups\n  31  duality-and-rigidity-in-monoidal-categories-examples   7 items  <- duality-and-rigidity-in-monoidal-categories, matrices-and-the-matrix-of-a-linear-map, dual-spaces-bilinear-forms-and-inertia, linear-independence-bases-and-dimension, adjunctions-units-and-counits\n  31  generalized-niceness-and-reduction-outcomes-examples   3 items  <- generalized-niceness-and-reduction-outcomes, blockades-combs-and-pattern-graphs, sparse-restricted-subgraphs-and-rodl-nikiforov, induced-subgraphs-and-hereditary-graph-classes\n  31  henselian-rings-and-equicharacteristic-cohen-structure  39 items  <- the-field-of-fractions-and-localisation, polynomial-rings-and-roots, ideals-and-quotient-rings, inverse-limits-and-noetherian-completion, congruences-and-the-chinese-remainder-theorem, artinian-rings-and-length, foundations-of-the-real-numbers, algebraic-extensions-degree-and-finite-fields, order-zorn-and-the-axiom-of-choice, localisation-of-modules-and-support, noetherian-rings-and-hilbert-basis, krull-dimension-and-height-theorems, compactness-in-metric-spaces, integral-extensions-and-going-up\n  31  holomorphic-inverse-and-weierstrass-preparation  27 items  <- holomorphic-functions-of-several-variables, relations-functions-and-quotients, matrices-and-the-matrix-of-a-linear-map, determinants-of-matrices-over-a-commutative-ring, field-extensions-and-the-complex-numbers, inverse-and-implicit-function-theorems, constant-rank-submersions-and-regular-level-sets, complex-differentiability-and-cauchy-riemann, the-field-of-fractions-and-localisation, the-argument-principle-and-rouche, the-winding-number-and-the-global-cauchy-theorem, analyticity-liouville-and-morera, rings-subrings-and-integral-domains, modules-and-module-homomorphisms, euclidean-domains-pids-and-unique-factorisation, polynomial-rings-and-roots, isolated-singularities-and-laurent-series\n  31  inverse-limits-and-noetherian-completion-examples   7 items  <- inverse-limits-and-noetherian-completion, noetherian-rings-and-hilbert-basis, artinian-rings-and-length\n  31  mapping-cones-cylinders-and-chain-triangles     34 items  <- chain-complexes-and-homology, chain-homotopy-and-the-homotopy-category, exactness-and-the-member-calculus, abelian-categories\n  31  mittag-leffler-and-runges-theorem-examples       7 items  <- mittag-leffler-and-runges-theorem, contour-integration, the-complex-exponential-and-eulers-formula\n  31  modular-representations-and-projective-covers   33 items  <- valuation-rings-and-discrete-valuation-rings, inverse-limits-and-noetherian-completion, the-group-algebra-and-representations, maschkes-theorem-and-complete-reducibility, chain-conditions-and-semisimple-modules, modules-and-module-homomorphisms, group-actions-and-cayleys-theorem, free-modules-and-exact-sequences, induced-representations-and-frobenius-reciprocity, modular-representations-and-projective-covers-examples\n  31  simplicial-complexes-and-simplicial-homology    30 items  <- subspaces-products-and-quotients, topological-spaces-and-continuity, compactness-in-metric-spaces, metric-spaces, chain-complexes-and-homology, homotopy-and-homotopy-equivalence, chain-homotopy-and-the-homotopy-category, connectedness\n  31  subharmonic-functions-and-the-dirichlet-problem-examples   9 items  <- subharmonic-functions-and-the-dirichlet-problem, harmonic-functions-and-the-poisson-integral\n  31  the-argument-principle-and-rouche-examples      11 items  <- the-argument-principle-and-rouche\n  31  the-gamma-function-examples                      7 items  <- the-gamma-function\n  31  the-hartogs-phenomena                           19 items  <- holomorphic-functions-of-several-variables, the-winding-number-and-the-global-cauchy-theorem, isolated-singularities-and-laurent-series, goursat-and-cauchys-theorem-in-a-convex-domain, monotone-functions-and-discontinuities, subharmonic-functions-and-the-dirichlet-problem, harmonic-functions-and-the-poisson-integral, the-lebesgue-integral-and-the-convergence-theorems\n  31  the-riemann-sphere-and-mobius-transformations   22 items  <- compactness, complex-differentiability-and-cauchy-riemann, the-topology-of-euclidean-space, isolated-singularities-and-laurent-series, matrices-and-the-matrix-of-a-linear-map, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, analyticity-liouville-and-morera, the-argument-principle-and-rouche, the-fundamental-theorem-of-algebra\n  31  the-riemann-zeta-function                       22 items  <- the-complex-exponential-and-eulers-formula, the-logarithm-and-general-powers, complex-power-series-and-analytic-functions, series-and-nonnegative-tests, infinite-products-and-weierstrass-factorisation, primes-and-the-fundamental-theorem-of-arithmetic, improper-and-parameter-dependent-multiple-integrals, the-gamma-function, product-measures-and-the-fubini-tonelli-theorems, mittag-leffler-and-runges-theorem\n  32  absolute-values-completions-and-p-adic-numbers-examples   8 items  <- absolute-values-completions-and-p-adic-numbers, chain-conditions-and-semisimple-modules\n  32  chebyshev-bounds-and-mertens-theorems-examples   7 items  <- chebyshev-bounds-and-mertens-theorems, average-orders-divisor-sums-and-representation-counts\n  32  conformal-mapping-branches-and-the-schwarz-lemma  23 items  <- the-complex-exponential-and-eulers-formula, the-winding-number-and-the-global-cauchy-theorem, the-logarithm-and-general-powers, connectedness, complex-differentiability-and-cauchy-riemann, the-identity-theorem-and-the-open-mapping-theorem, field-extensions-and-the-complex-numbers, isolated-singularities-and-laurent-series, the-riemann-sphere-and-mobius-transformations, compactness-in-metric-spaces, analyticity-liouville-and-morera\n  32  domains-of-holomorphy-and-pseudoconvexity       27 items  <- holomorphic-functions-of-several-variables, limsup-and-subsequential-limits, the-hartogs-phenomena, the-topology-of-euclidean-space, convex-and-semicontinuous-functions-on-rn, the-total-derivative, subharmonic-functions-and-the-dirichlet-problem, the-identity-theorem-and-the-open-mapping-theorem, stone-weierstrass-general\n  32  henselian-rings-and-equicharacteristic-cohen-structure-examples   9 items  <- henselian-rings-and-equicharacteristic-cohen-structure, formal-power-series, valuation-rings-and-discrete-valuation-rings, polynomial-rings-and-roots, ideals-and-quotient-rings, the-field-of-fractions-and-localisation, congruences-and-the-chinese-remainder-theorem\n  32  holomorphic-inverse-and-weierstrass-preparation-examples  11 items  <- holomorphic-inverse-and-weierstrass-preparation, holomorphic-functions-of-several-variables, the-complex-exponential-and-eulers-formula, sine-cosine-and-the-definition-of-pi\n  32  long-exact-sequences-in-homology                35 items  <- chain-complexes-and-homology, exactness-and-the-member-calculus, the-diagram-lemmas-in-an-abelian-category, abelian-categories, mapping-cones-cylinders-and-chain-triangles, chain-homotopy-and-the-homotopy-category\n  32  mapping-cones-cylinders-and-chain-triangles-examples   8 items  <- mapping-cones-cylinders-and-chain-triangles, abelian-categories, chain-homotopy-and-the-homotopy-category, chain-complexes-and-homology\n  32  modular-representations-and-projective-covers-examples   6 items  <- modular-representations-and-projective-covers\n  32  normal-families-and-montels-theorem             18 items  <- complex-differentiability-and-cauchy-riemann, compactness-in-metric-spaces, analyticity-liouville-and-morera, function-space-topologies, complex-power-series-and-analytic-functions, goursat-and-cauchys-theorem-in-a-convex-domain, ascoli-arzela, the-identity-theorem-and-the-open-mapping-theorem, the-riemann-sphere-and-mobius-transformations, the-argument-principle-and-rouche\n  32  simplicial-complexes-and-simplicial-homology-examples   9 items  <- simplicial-complexes-and-simplicial-homology, chain-homotopy-and-the-homotopy-category\n  32  the-hartogs-phenomena-examples                   6 items  <- the-hartogs-phenomena, isolated-singularities-and-laurent-series\n  32  the-riemann-sphere-and-mobius-transformations-examples  12 items  <- the-riemann-sphere-and-mobius-transformations, the-complex-exponential-and-eulers-formula, the-exponential-function, compactness\n  32  the-riemann-zeta-function-examples              12 items  <- the-riemann-zeta-function, series-and-nonnegative-tests\n  33  conformal-mapping-branches-and-the-schwarz-lemma-examples  10 items  <- conformal-mapping-branches-and-the-schwarz-lemma, the-identity-theorem-and-the-open-mapping-theorem\n  33  domains-of-holomorphy-and-pseudoconvexity-examples  10 items  <- holomorphic-functions-of-several-variables, domains-of-holomorphy-and-pseudoconvexity, the-identity-theorem-and-the-open-mapping-theorem, the-hartogs-phenomena\n  33  long-exact-sequences-in-homology-examples        8 items  <- long-exact-sequences-in-homology, mapping-cones-cylinders-and-chain-triangles\n  33  normal-families-and-montels-theorem-examples     9 items  <- normal-families-and-montels-theorem, the-complex-exponential-and-eulers-formula, ascoli-arzela\n  33  projective-and-injective-resolutions            51 items  <- chain-complexes-and-homology, subobject-lattices-generators-and-the-grothendieck-axioms, free-modules-and-exact-sequences, compactness-in-metric-spaces, chain-homotopy-and-the-homotopy-category, abelian-categories, the-diagram-lemmas-in-an-abelian-category, long-exact-sequences-in-homology, exactness-and-the-member-calculus, limits-and-colimits, order-zorn-and-the-axiom-of-choice\n  33  the-riemann-mapping-theorem                     18 items  <- conformal-mapping-branches-and-the-schwarz-lemma, the-winding-number-and-the-global-cauchy-theorem, the-identity-theorem-and-the-open-mapping-theorem, analyticity-liouville-and-morera, relations-functions-and-quotients, normal-families-and-montels-theorem, the-argument-principle-and-rouche, complex-differentiability-and-cauchy-riemann, power-series-and-real-analytic-functions, line-integrals-and-the-gradient-theorem\n  34  bloch-schottky-and-picard                       16 items  <- the-riemann-mapping-theorem, compactness-in-metric-spaces, conformal-mapping-branches-and-the-schwarz-lemma, the-argument-principle-and-rouche, the-winding-number-and-the-global-cauchy-theorem, complex-differentiability-and-cauchy-riemann, the-complex-exponential-and-eulers-formula, relations-functions-and-quotients, normal-families-and-montels-theorem, analyticity-liouville-and-morera, the-identity-theorem-and-the-open-mapping-theorem, isolated-singularities-and-laurent-series, the-riemann-sphere-and-mobius-transformations\n  34  projective-and-injective-resolutions-examples    9 items  <- free-modules-and-exact-sequences, projective-and-injective-resolutions, subobject-lattices-generators-and-the-grothendieck-axioms, abelian-categories\n  34  simply-connected-plane-domains                  16 items  <- homotopy-and-homotopy-equivalence, compactness-in-metric-spaces, goursat-and-cauchys-theorem-in-a-convex-domain, contour-integration, the-winding-number-and-the-global-cauchy-theorem, the-fundamental-group-of-the-circle, the-fundamental-group, complex-differentiability-and-cauchy-riemann, the-topology-of-euclidean-space, arc-length-and-rectifiable-curves, fubini-and-change-of-variables, harmonic-functions-and-the-poisson-integral, the-complex-exponential-and-eulers-formula, the-identity-theorem-and-the-open-mapping-theorem, the-riemann-mapping-theorem, applications-of-the-fundamental-group\n  34  the-riemann-mapping-theorem-examples             9 items  <- the-riemann-mapping-theorem, conformal-mapping-branches-and-the-schwarz-lemma, isolated-singularities-and-laurent-series, the-identity-theorem-and-the-open-mapping-theorem\n  35  analytic-continuation-and-monodromy             22 items  <- complex-differentiability-and-cauchy-riemann, the-field-of-fractions-and-localisation, homotopy-and-homotopy-equivalence, compactness-in-metric-spaces, the-identity-theorem-and-the-open-mapping-theorem, the-fundamental-group, the-winding-number-and-the-global-cauchy-theorem, simply-connected-plane-domains, topological-spaces-and-continuity, subspaces-products-and-quotients, countability-axioms-and-cardinal-functions, the-topology-of-euclidean-space, covering-spaces-and-lifting, conformal-mapping-branches-and-the-schwarz-lemma, the-complex-exponential-and-eulers-formula, harmonic-functions-and-the-poisson-integral, analyticity-liouville-and-morera, complex-power-series-and-analytic-functions, finite-counting-and-binomial-coefficients\n  35  bloch-schottky-and-picard-examples               7 items  <- bloch-schottky-and-picard, complex-differentiability-and-cauchy-riemann, the-complex-exponential-and-eulers-formula, isolated-singularities-and-laurent-series\n  35  simply-connected-plane-domains-examples         12 items  <- simply-connected-plane-domains, the-fundamental-group, the-winding-number-and-the-global-cauchy-theorem\n  36  analytic-continuation-and-monodromy-examples    11 items  <- analytic-continuation-and-monodromy, the-winding-number-and-the-global-cauchy-theorem, the-complex-exponential-and-eulers-formula, conformal-mapping-branches-and-the-schwarz-lemma, series-and-nonnegative-tests, field-extensions-and-the-complex-numbers, monotone-sequences-and-cauchy-completeness, complex-power-series-and-analytic-functions\n\n375 warning(s):\n  [multi-home] \"ex-the-galois-group-of-f-eight-over-f-two\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-monic-irreducible-cubics-over-f-two-and-the-divisor-sum-identity\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-frobenius-conjugates-of-a-generator-of-f-sixteen\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-a-normal-basis-of-f-eight-over-f-two\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-a-normal-basis-of-the-complex-numbers-over-the-reals\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"fs-every-basis-of-a-finite-field-over-a-subfield-is-a-normal-basis\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-first-twelve-cyclotomic-polynomials\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-fifth-cyclotomic-polynomial-splits-into-linear-factors-over-f-eleven\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-roots-of-unity-in-characteristic-three\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"fs-the-cyclotomic-polynomial-is-irreducible-over-every-field\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"fs-the-group-of-n-th-roots-of-unity-has-n-elements-in-every-field\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field\" appears on both finite-fields-and-cyclotomic-extensions-examples and finite-fields-and-cyclotomic-extensions\n  [multi-home] \"ex-binary-words-as-sequences-of-two-atoms\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"ex-compositions-of-four-from-sequences\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"ex-partitions-with-parts-at-most-three\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"ex-plane-trees-with-at-most-four-vertices\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"ex-binary-necklaces-of-length-six-in-two-colours\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"ex-truncation-iteration-for-a-recursive-specification\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"cex-an-infinite-level-is-not-a-combinatorial-class\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"fs-sequence-construction-with-a-size-zero-object\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"fs-multiset-product-exists-for-every-coefficient-sequence\" appears on both combinatorial-classes-and-the-symbolic-method-examples and combinatorial-classes-and-the-symbolic-method\n  [multi-home] \"ex-monotone-lattice-paths-from-the-origin-to-three-two\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-five-dyck-paths-of-semilength-three\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-three-catalan-families-matched-at-semilength-three\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-reflection-bijection-on-a-concrete-path\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-ballot-problem-with-three-and-two-votes\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-cycle-lemma-on-a-word-of-length-seven\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-catalan-numbers-to-six-computed-two-ways\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-fourteen-triangulations-of-a-convex-hexagon\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-first-coefficients-of-the-catalan-generating-function\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-non-intersecting-path-pairs-by-a-two-by-two-determinant\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-the-tail-swap-involution-on-an-intersecting-pair\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"fs-the-central-binomial-quotient-is-an-integer-only-for-small-n\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"cex-a-map-between-two-catalan-families-that-is-not-injective\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"cex-a-step-set-for-which-the-reflection-argument-fails\" appears on both lattice-paths-and-catalan-numbers-examples and lattice-paths-and-catalan-numbers\n  [multi-home] \"ex-an-oddtown-family-on-four-points\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-an-eventown-family-of-maximum-size\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-graham-pollak-for-the-complete-graph-on-four-vertices\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-the-inclusion-matrix-of-points-against-pairs-on-four-points\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-cauchy-davenport-in-the-integers-modulo-seven\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-covering-the-cube-minus-the-origin-with-n-hyperplanes\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"fs-the-oddtown-bound-can-be-improved-to-n-minus-one\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"fs-fisher-inequality-holds-over-the-two-element-field\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"cex-cauchy-davenport-fails-for-a-composite-modulus\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree\" appears on both linear-algebra-methods-in-combinatorics-examples and linear-algebra-methods-in-combinatorics\n  [multi-home] \"ex-s-four-statistics-table\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"ex-lehmer-code-and-q-factorial-for-s-four\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"ex-foata-transformation-on-three-one-four-two\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"ex-a-four-two-computed-three-ways\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"ex-weak-and-bruhat-orders-in-s-three\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"cex-same-descent-set-different-inversion-number\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"cex-eulerian-statistic-need-not-be-mahonian\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"fs-major-index-equals-inversion-number-pointwise\" appears on both permutation-statistics-inversions-and-eulerian-numbers-examples and permutation-statistics-inversions-and-eulerian-numbers\n  [multi-home] \"ex-the-singleton-family-p-three-is-viral\" appears on both polynomial-rodl-and-viral-equivalence-examples and polynomial-rodl-and-viral-equivalence\n  [multi-home] \"ex-a-family-containing-k-one-is-vacuously-viral\" appears on both polynomial-rodl-and-viral-equivalence-examples and polynomial-rodl-and-viral-equivalence\n  [multi-home] \"cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted\" appears on both polynomial-rodl-and-viral-equivalence-examples and polynomial-rodl-and-viral-equivalence\n  [multi-home] \"cex-the-empty-family-is-not-erdos-hajnal\" appears on both polynomial-rodl-and-viral-equivalence-examples and polynomial-rodl-and-viral-equivalence\n  [multi-home] \"ex-polynomial-algebras-are-faithfully-flat\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-localisations-not-faithfully-flat\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-fraction-field-flat-not-projective\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-flat-idempotent-quotient\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-nonflat-quotient-module\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-faithfully-flat-principal-open-cover\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-finite-flat-module-over-a-local-ring\" appears on both flatness-and-faithful-flatness-examples and flatness-and-faithful-flatness\n  [multi-home] \"ex-hilbert-series-of-a-polynomial-ring\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-associated-graded-of-a-local-ring\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-artin-rees-intersection\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-krull-intersection-in-a-local-domain\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-hilbert-samuel-polynomial-of-a-dvr\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-hilbert-samuel-multiplicity-of-a-plane-curve\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-hilbert-samuel-finite-length-case\" appears on both rees-modules-artin-rees-and-hilbert-samuel-theory-examples and rees-modules-artin-rees-and-hilbert-samuel-theory\n  [multi-home] \"ex-cosets-of-q-in-r-and-the-vitali-translates-on-unit-interval\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"cex-a-vitali-set\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"cex-a-bernstein-set\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"cex-a-proper-subgroup-of-r-can-be-nonmeasurable\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"fs-every-subset-of-r-is-lebesgue-measurable\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice\" appears on both non-measurable-sets-and-the-cost-of-choice-examples and non-measurable-sets-and-the-cost-of-choice\n  [multi-home] \"cex-rudin-bounded-spikes-are-not-equicontinuous\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"cex-constant-functions-are-equicontinuous-not-pointwise-bounded\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"cex-noncompact-domain-breaks-arzela-ascoli\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"ex-bernstein-polynomials-of-the-square-function\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"ex-distance-functions-form-a-compact-family-in-c01\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"cex-even-polynomial-algebra-is-not-dense\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"cex-separating-algebra-without-constants-is-not-dense\" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck\n  [multi-home] \"def-integers\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-int-equivalence\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"def-int-operations\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-int-add-well-defined\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-int-mul-well-defined\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"thm-int-comm-ring\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"def-int-order\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"thm-int-ordered-ring\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-int-cancellation\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-nat-embeds-int\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"def-rationals\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-rat-equivalence\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"def-rat-operations\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-rat-ops-well-defined\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-rat-inverse-well-defined\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"thm-rat-field\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"def-rat-order\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-rat-positive-denominator\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"thm-rat-ordered-field\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-int-embeds-rat\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"lem-rat-archimedean\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"fs-sqrt2-rational\" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts\n  [multi-home] \"cex-peano-unequal-mixed-partials\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"cex-peano-surface-linewise-minimum-without-an-extremum\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"cex-smooth-linewise-minimum-without-an-extremum\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"cex-unique-critical-point-is-a-nonglobal-strict-local-minimum\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"ex-monkey-saddle\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"cex-zero-hessian-does-not-classify-a-critical-point\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"ex-second-order-multivariable-taylor-polynomial-computed\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"ex-lagrange-multiplier-on-an-affine-graph\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"cex-lagrange-multiplier-rule-needs-a-regular-constraint\" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema\n  [multi-home] \"ex-ascoli-on-a-finite-discrete-domain\" appears on both ascoli-arzela-examples and ascoli-arzela\n  [multi-home] \"ex-compact-families-of-constant-maps\" appears on both ascoli-arzela-examples and ascoli-arzela\n  [multi-home] \"cex-boundedness-does-not-replace-pointwise-relative-compactness\" appears on both ascoli-arzela-examples and ascoli-arzela\n  [multi-home] \"ex-translated-tent-functions-converge-in-the-compact-open-topology\" appears on both ascoli-arzela-examples and ascoli-arzela\n  [multi-home] \"ex-compact-affine-interpolation-family\" appears on both ascoli-arzela-examples and ascoli-arzela\n  [orphan] cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cex-np-means-not-polynomial is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cex-undecidable-means-no-instance-can-be-answered is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cor-busy-beaver-is-not-computable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cor-dfas-and-nfas-recognize-the-same-languages is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cor-effective-enumeration-of-turing-machines is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cor-nonhalting-is-not-recognizable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] cor-regular-languages-are-closed-under-boolean-operations is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-alphabet-homomorphism-and-induced-word-map is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-ambiguity-and-inherent-ambiguity is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-busy-beaver-function is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-chomsky-normal-form is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-computable-and-partial-computable-function is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-computation-alphabet-and-word-convention is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-conp is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-context-free-grammar is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-decidable-and-recognizable-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-deterministic-finite-automaton is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-deterministic-one-tape-turing-machine is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-dfa-acceptance-and-recognized-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-dtime-ntime-dspace-and-nspace is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-effective-binary-encoding-and-decoder is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-effective-encoding-of-turing-machines is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-exp-and-nexp is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-extended-dfa-transition-function is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-greibach-normal-form is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-halting-computation-and-divergence is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-halting-problem is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-instance-size-under-an-encoding is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-language-boolean-operations is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-language-concatenation-powers-and-kleene-star is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-language-generated-by-a-cfg is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-language-over-an-alphabet is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-language-recognized-and-decided is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-leftmost-and-rightmost-derivation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-multitape-and-nondeterministic-machines is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-nfa-acceptance-and-recognized-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-nfa-with-epsilon-moves is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-nondeterministic-accepting-computation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-np-by-verifiers is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-np-hard-and-np-complete is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-nullable-generating-and-reachable-variable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-one-step-and-reflexive-transitive-derivation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-one-step-configuration-relation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-p is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-parse-tree-and-yield is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-partial-function-computed-by-a-machine is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-polynomial-time-many-one-reduction is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-polynomially-balanced-verifier is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-reachable-dfa-state is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-regular-language-by-dfa-recognition is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-search-version-of-an-np-relation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-tape-finite-support-convention is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-turing-machine-acceptance-problem is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-turing-machine-configuration is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-universal-turing-machine is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-word-and-language-reversal is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] def-worst-case-time-and-space-complexity is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-cfl-closure-under-union-concatenation-star-and-homomorphism is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-diagonal-self-application-machine is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-elimination-of-useless-symbols is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-extended-dfa-transition-respects-concatenation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-machine-equivalence-is-undecidable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-np-is-contained-in-pspace-and-pspace-in-exp is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] ex-p-is-contained-in-np-intersection-conp is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-cnf-preserves-epsilon-without-an-exception is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-complementing-a-dfa-complements-its-transition-graph is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-diagonalization-needs-literal-source-self-reading is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-np-complete-means-known-not-in-p is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-np-means-not-polynomial is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] fs-undecidable-means-no-instance-can-be-answered is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-diagonal-self-application-machine is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-extended-dfa-transition-respects-concatenation is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-finite-tuples-admit-effective-prefix-free-encodings is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-gnf-left-recursion-elimination-preserves-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-gnf-substitution-step-preserves-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-machine-encoding-is-injective-and-decodable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-multitape-simulation-has-quadratic-time-overhead is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-polynomial-reductions-compose is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-removing-unreachable-states-preserves-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-step-by-step-interpreter-for-machine-codes is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] lem-time-at-least-input-length-permits-complete-input-reading is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-an-np-complete-language-in-p-implies-p-equals-np is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-every-finite-language-is-regular is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-machine-descriptions-form-a-decidable-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-np-is-contained-in-pspace-and-pspace-in-exp is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-p-is-contained-in-np-intersection-conp is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-polynomially-related-encodings-preserve-polynomial-size is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] prop-published-prefix-automata-extend-to-factor-avoidance-dfas is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-an-unrecognizable-language-exists is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-busy-beaver-dominates-every-total-computable-function is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-cfl-closure-under-union-concatenation-star-and-homomorphism is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-chomsky-normal-form is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-complementing-accept-states-complements-the-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-decidable-iff-language-and-complement-are-recognizable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-derivation-parse-tree-correspondence is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-dfa-for-language-difference is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-elimination-of-epsilon-productions is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-elimination-of-unit-productions is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-elimination-of-useless-symbols is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-existence-and-uniqueness-of-extended-dfa-transition is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-existence-of-a-universal-turing-machine is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-greibach-normal-form is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-halting-is-recognizable-and-undecidable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-leaf-deletion-preserves-virality-of-a-finite-family is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-machine-acceptance-is-recognizable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-machine-acceptance-is-undecidable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-machine-equivalence-is-undecidable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-multitape-machines-have-one-tape-simulations is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-polynomial-reductions-transfer-p-np-and-conp-membership is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-product-dfa-for-union-and-intersection is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-sat-search-reduces-to-sat-decision is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-subset-construction-preserves-language is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-totality-is-not-recognizable is published but appears on no page (dropped from page-level Prerequisites)\n  [orphan] thm-verifier-and-nondeterministic-definitions-of-np-agree is published but appears on no page (dropped from page-level Prerequisites)\n  [b-leaf-legacy] items/ex-cardinal-functions-of-the-lower-limit-line.md: grandfathered B-page dependency \"ex-the-cardinality-of-the-continuum\" — Published legacy example dependency. It remains visible as a warning until its continuum-cardinality argument is moved to an A-page result or written inline under a separately audited content change.\n  [cited-not-in-deps] items/cex-dirichlet-is-nowhere-continuous.md: cites \"lem-sequential-characterisation-of-closure-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-dirichlet-is-nowhere-continuous.md: cites \"thm-sequential-criterion-for-continuity\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-indicator-of-a-fat-cantor-set-is-not-integrable.md: cites \"ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-limit-differs-from-the-value.md: cites \"cex-composition-of-limits-fails\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-nested-open-intervals-empty.md: cites \"ex-nested-intervals-single-point\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-ordered-field-not-archimedean.md: cites \"cor-rational-function-field-as-a-fraction-field\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-psi-of-one-over-x-has-no-limit-at-zero.md: cites \"lem-limit-implies-local-boundedness\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cex-the-one-norm-comes-from-no-inner-product.md: cites \"rem-rn-conventions-and-scope\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-bolzano-weierstrass-in-rn.md: cites \"rem-compactness-choice-ledger-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-boundedness-theorem-r.md: cites \"thm-compactness-is-necessary-for-evt-and-uniform-continuity\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-cauchy-product-absolute.md: cites \"thm-dirichlet-rearrangement\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-cesaro-matrix-is-regular.md: cites \"thm-cesaro-mean-theorem\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-continuous-extension-from-a-dense-subset-r.md: cites \"cor-boundedness-theorem-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-countably-many-discontinuities-integrable.md: cites \"thm-cantor-set-properties\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-expectation-agrees-with-the-finite-weighted-sum.md: cites \"def-expectation-of-a-nonnegative-or-integrable-random-variable\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-no-function-is-continuous-exactly-on-q.md: cites \"thm-dirichlet-and-thomae-continuity-sets\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings.md: cites \"def-axiom-of-choice\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-stolz-cesaro-zero-over-zero.md: cites \"thm-stolz-cesaro\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/cor-unconditional-iff-absolute-in-r.md: cites \"rem-rearrangement-in-higher-dimensions\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/ex-cauchy-complete-not-complete-field.md: cites \"fs-nested-intervals-implies-lub\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix.md: cites \"def-rayleigh-quotient-iteration\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/fs-continuity-implies-uniform-continuity.md: cites \"thm-heine-cantor-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/fs-continuity-implies-uniform-continuity.md: cites \"thm-compactness-is-necessary-for-evt-and-uniform-continuity\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/fs-equivalent-metrics-share-cauchy-sequences.md: cites \"def-metric-convergence\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/fs-heine-borel-holds-in-every-normed-space.md: cites \"thm-all-norms-on-rn-are-equivalent\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set.md: cites \"thm-lebesgue-criterion\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/fs-limit-equals-value.md: cites \"thm-composition-of-function-limits\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-additive-is-q-linear.md: cites \"fs-additive-implies-linear\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-bw-implies-archimedean.md: cites \"fs-nested-intervals-implies-lub\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-bw-implies-archimedean.md: cites \"fs-cauchy-complete-implies-lub\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-bw-implies-cauchy-complete.md: cites \"lem-bw-implies-archimedean\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-cauchy-complete-and-archimedean-imply-mct.md: cites \"thm-laurent-cauchy-complete\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-cauchy-complete-and-archimedean-imply-mct.md: cites \"lem-mct-implies-archimedean\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-cauchy-complete-and-archimedean-imply-mct.md: cites \"lem-laurent-non-archimedean\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-content-zero-implies-null.md: cites \"thm-compact-null-is-content-zero\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-elementary-sets-admit-compact-inner-and-open-outer-approximations.md: cites \"def-metric-compactness\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-finite-circle-wedge-open-cover.md: cites \"cor-seifert-van-kampen-simply-connected-overlap\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites \"lem-nondegenerate-interval-is-not-null\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites \"thm-cantor-set-properties\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites \"thm-fat-cantor-set-has-positive-measure\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites \"fs-null-implies-content-zero\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-function-limit-preserves-order.md: cites \"fs-function-limit-preserves-strict-inequality\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-function-limit-preserves-order.md: cites \"lem-limit-is-local\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-function-limit-unique.md: cites \"fs-limit-unique-at-every-point-of-the-domain\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-limit-implies-local-boundedness.md: cites \"fs-limit-exists-implies-bounded-on-the-domain\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-mct-implies-archimedean.md: cites \"lem-cauchy-complete-and-archimedean-imply-mct\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-mct-implies-archimedean.md: cites \"rem-where-the-archimedean-hypothesis-is-needed\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-mct-implies-lub.md: cites \"lem-mct-implies-archimedean\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-metric-convergent-implies-cauchy.md: cites \"fs-cauchy-implies-convergent-in-every-metric-space\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-nth-term-test.md: cites \"fs-nth-term-test-converse\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-continuous-image-of-a-compact-set-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-extreme-value-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-heine-cantor-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-continuous-image-of-a-compact-space-is-compact\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-extreme-value-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-heine-cantor-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-heine-borel-characterisation-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites \"thm-compact-iff-sequentially-compact-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-sign-preservation-near-a-limit.md: cites \"thm-algebra-of-function-limits\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/lem-simple-continued-fraction-convergents-and-cylinders.md: cites \"thm-simple-continued-fractions-parametrise-the-irrationals\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/rem-riemann-stieltjes-conventions-and-scope.md: cites \"def-real-power\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-abel-dini.md: cites \"fs-universal-comparison-series\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-algebra-of-function-limits.md: cites \"thm-sequential-criterion-for-function-limits\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-algebra-of-function-limits.md: cites \"rem-heine-criterion-choice-cost\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-algebra-of-function-limits.md: cites \"thm-algebra-of-limits\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-arzela-ascoli-for-real-ck.md: cites \"def-countable-choice\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-arzela-ascoli-for-real-ck.md: cites \"def-dependent-choice\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-banach-fixed-point.md: cites \"cor-banach-error-estimates\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-cantor-function-properties.md: cites \"def-monotone-sequence\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-cesaro-mean-theorem.md: cites \"fs-cesaro-converse\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-compact-null-is-content-zero.md: cites \"lem-nondegenerate-interval-is-not-null\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-compact-subset-is-closed-and-bounded.md: cites \"fs-closed-and-bounded-implies-compact-in-every-metric-space\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-compact-subset-is-closed-and-bounded.md: cites \"thm-heine-borel-rn\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-complete-and-totally-bounded-implies-compact.md: cites \"def-dependent-choice\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-completeness-equivalences.md: cites \"fs-nested-intervals-implies-lub\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-completeness-equivalences.md: cites \"fs-cauchy-complete-implies-lub\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-composition-of-function-limits.md: cites \"fs-naive-composition-of-limits\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuity-iff-oscillation-zero.md: cites \"lem-oscillation-superlevel-sets-are-closed\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuity-iff-oscillation-zero.md: cites \"thm-discontinuity-set-is-f-sigma\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuity-preimage-characterisation.md: cites \"def-isometry-and-metric-embedding\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuity-preimage-characterisation.md: cites \"lem-real-and-metric-notions-agree\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuous-image-of-a-compact-set-r.md: cites \"thm-continuous-image-of-a-compact-space-is-compact\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuous-image-of-a-compact-set-r.md: cites \"lem-real-and-metric-notions-agree\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-continuous-inverse.md: cites \"thm-connected-subsets-of-r-are-intervals\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-diagram-area-agrees-with-algebraic-relator-area.md: cites \"lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-dirichlet-test.md: cites \"thm-alternating-series-test\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-double-series-fubini.md: cites \"fs-iterated-double-sums-always-agree\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-extreme-value-r.md: cites \"thm-extreme-value-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-extreme-value-r.md: cites \"lem-real-and-metric-notions-agree\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-fermat-interior-extremum.md: cites \"fs-vanishing-derivative-forbids-strict-increase\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-grouping-of-series.md: cites \"fs-grouping-can-be-undone\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-heine-borel-rn.md: cites \"thm-complete-and-totally-bounded-implies-compact\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-heine-cantor-r.md: cites \"thm-heine-cantor-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-infinite-product-criterion.md: cites \"rem-sums-proved-to-exist-but-not-evaluated\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-intermediate-value.md: cites \"cex-evt-and-ivt-fail-over-a-non-complete-field\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-mean-value-inequality.md: cites \"thm-norm-inequality-for-the-vector-valued-integral\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-mean-value-inequality.md: cites \"cor-vector-valued-ftc-and-lipschitz-bound\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-mertens.md: cites \"cor-cauchy-product-absolute\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-mertens.md: cites \"fs-cauchy-product-of-convergent-series-converges\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-metric-compactness-equivalences.md: cites \"rem-compactness-choice-ledger-metric\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-monotone-implies-integrable.md: cites \"thm-monotone-with-prescribed-discontinuity-set\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-monotonicity-of-the-integral.md: cites \"fs-nonnegative-integrable-with-zero-integral-vanishes\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-monotonicity-of-the-integral.md: cites \"thm-nonnegative-continuous-with-zero-integral-vanishes\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-nonnegative-continuous-with-zero-integral-vanishes.md: cites \"fs-nonnegative-integrable-with-zero-integral-vanishes\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-perfect-set-uncountable-r.md: cites \"def-dependent-choice\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-plane-dual-exists-and-double-dual-recovers-primal.md: cites \"def-plane-graph-face-and-boundary\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-riemann-series-theorem.md: cites \"thm-dirichlet-rearrangement\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-sequential-criterion-for-function-limits.md: cites \"rem-heine-criterion-choice-cost\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-sequential-criterion-for-function-limits.md: cites \"lem-sequential-characterisation-of-closure-r\" in Statement/Facts but it is not in deps\n  [cited-not-in-deps] items/thm-sequential-criterion-for-function-limits.md: cites \"cor-sequential-criterion-for-nonexistence\" in Statement/Facts but it is not in deps\n\n2 ERROR(s):\n  [b-leaf-content] items/fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible.md: depends on \"ex-reducing-an-integral-lattice-for-s-three\", which lives only on B/examples page(s) modular-representations-and-projective-covers-examples\n  [page-cycle] CIRCULAR PAGES: modular-representations-and-projective-covers-examples -> modular-representations-and-projective-covers -> modular-representations-and-projective-covers-examples\n\nFAIL\n",
      "named_ids": [
        "b-leaf-legacy",
        "cited-not-in-deps",
        "b-leaf-content",
        "ex-cardinal-functions-of-the-lower-limit-line",
        "cex-dirichlet-is-nowhere-continuous",
        "cex-indicator-of-a-fat-cantor-set-is-not-integrable",
        "cex-limit-differs-from-the-value",
        "cex-nested-open-intervals-empty",
        "cex-ordered-field-not-archimedean",
        "cex-psi-of-one-over-x-has-no-limit-at-zero",
        "cex-the-one-norm-comes-from-no-inner-product",
        "cor-bolzano-weierstrass-in-rn",
        "cor-boundedness-theorem-r",
        "cor-cauchy-product-absolute",
        "cor-cesaro-matrix-is-regular",
        "cor-continuous-extension-from-a-dense-subset-r",
        "cor-countably-many-discontinuities-integrable",
        "cor-expectation-agrees-with-the-finite-weighted-sum",
        "cor-no-function-is-continuous-exactly-on-q",
        "cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings",
        "cor-stolz-cesaro-zero-over-zero",
        "cor-unconditional-iff-absolute-in-r",
        "ex-cauchy-complete-not-complete-field",
        "ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix",
        "fs-continuity-implies-uniform-continuity",
        "fs-equivalent-metrics-share-cauchy-sequences",
        "fs-heine-borel-holds-in-every-normed-space",
        "fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set",
        "fs-limit-equals-value",
        "lem-additive-is-q-linear",
        "lem-bw-implies-archimedean",
        "lem-bw-implies-cauchy-complete",
        "lem-cauchy-complete-and-archimedean-imply-mct",
        "lem-content-zero-implies-null",
        "lem-elementary-sets-admit-compact-inner-and-open-outer-approximations",
        "lem-finite-circle-wedge-open-cover",
        "lem-finite-interval-cover-total-length",
        "lem-function-limit-preserves-order",
        "lem-function-limit-unique",
        "lem-limit-implies-local-boundedness",
        "lem-mct-implies-archimedean",
        "lem-mct-implies-lub",
        "lem-metric-convergent-implies-cauchy",
        "lem-nth-term-test",
        "lem-real-and-metric-notions-agree",
        "lem-sign-preservation-near-a-limit",
        "lem-simple-continued-fraction-convergents-and-cylinders",
        "rem-riemann-stieltjes-conventions-and-scope",
        "thm-abel-dini",
        "thm-algebra-of-function-limits",
        "thm-arzela-ascoli-for-real-ck",
        "thm-banach-fixed-point",
        "thm-cantor-function-properties",
        "thm-cesaro-mean-theorem",
        "thm-compact-null-is-content-zero",
        "thm-compact-subset-is-closed-and-bounded",
        "thm-complete-and-totally-bounded-implies-compact",
        "thm-completeness-equivalences",
        "thm-composition-of-function-limits",
        "thm-continuity-iff-oscillation-zero",
        "thm-continuity-preimage-characterisation",
        "thm-continuous-image-of-a-compact-set-r",
        "thm-continuous-inverse",
        "thm-diagram-area-agrees-with-algebraic-relator-area",
        "thm-dirichlet-test",
        "thm-double-series-fubini",
        "thm-extreme-value-r",
        "thm-fermat-interior-extremum",
        "thm-grouping-of-series",
        "thm-heine-borel-rn",
        "thm-heine-cantor-r",
        "thm-infinite-product-criterion",
        "thm-intermediate-value",
        "thm-mean-value-inequality",
        "thm-metric-compactness-equivalences",
        "thm-monotone-implies-integrable",
        "thm-monotonicity-of-the-integral",
        "thm-nonnegative-continuous-with-zero-integral-vanishes",
        "thm-perfect-set-uncountable-r",
        "thm-plane-dual-exists-and-double-dual-recovers-primal",
        "thm-riemann-series-theorem",
        "thm-sequential-criterion-for-function-limits",
        "fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible"
      ]
    },
    {
      "id": "fwdcheck",
      "stage": "8-preflight",
      "why": "FAIL",
      "output": "fwdcheck: 12217 items, 0 open forward reference(s), 412 closed, 37 load bearing\n\n3747 item(s) rest on later material and carry the forward marker:\n  cex-a-bernstein-set                      inherited\n  cex-a-biholomorphism-between-the-disc-and-the-punctured-disc-cannot-exist inherited\n  cex-a-bijective-smooth-map-with-nonsmooth-inverse inherited\n  cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism inherited\n  cex-a-c1-map-whose-critical-values-have-positive-measure inherited\n  cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions inherited\n  cex-a-chart-dependent-coordinate-vector-is-not-an-intrinsic-tangent-vector inherited\n  cex-a-closed-graph-without-continuity    inherited\n  cex-a-complete-graph-has-no-large-sparse-set inherited\n  cex-a-composition-of-integrable-functions-that-is-not-integrable inherited\n  cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension inherited\n  cex-a-continuous-image-of-a-locally-compact-space inherited\n  cex-a-continuous-preimage-can-break-lebesgue-measurability inherited\n  cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative inherited\n  cex-a-degenerate-isolated-critical-point inherited\n  cex-a-degenerate-nonisolated-critical-set inherited\n  cex-a-domain-of-holomorphy-need-not-be-convex inherited\n  cex-a-function-can-have-measurable-level-sets-without-being-measurable inherited\n  cex-a-laurent-series-on-a-punctured-disc-can-have-infinitely-many-negative-terms inherited\n  cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values inherited\n  cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length inherited\n  cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius inherited\n  cex-a-non-locally-finite-sum-can-be-discontinuous inherited\n  cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm inherited\n  cex-a-null-set-that-is-no-functions-discontinuity-set inherited\n  cex-a-path-connected-space-that-is-not-locally-connected inherited\n  cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous inherited\n  cex-a-proper-subgroup-of-r-can-be-nonmeasurable inherited\n  cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective inherited\n  cex-a-rank-drop-at-a-point-need-not-persist-locally inherited\n  cex-a-rank-jumping-kernel-is-not-a-vector-subbundle inherited\n  cex-a-round-annulus-is-connected-but-not-simply-connected inherited\n  cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values inherited\n  cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension inherited\n  cex-a-tiny-residual-does-not-force-a-small-forward-error inherited\n  cex-a-vector-field-with-no-pullback-under-a-noninjective-map inherited\n  cex-a-vitali-set                         inherited\n  cex-a-wild-arc-drawing-is-not-a-plane-graph inherited\n  cex-absolute-value-integrable-without-the-function inherited\n  cex-ae-equality-can-fail-on-an-incomplete-space inherited\n  cex-an-abscissa-need-not-be-a-line-of-convergence inherited\n  cex-an-abstractly-dense-proper-subgroup-of-zp inherited\n  cex-an-algebraic-complement-need-not-be-topological inherited\n  cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing inherited\n  cex-an-incomplete-subspace-need-not-be-closed inherited\n  cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics inherited\n  cex-an-integrable-function-with-no-primitive inherited\n  cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing inherited\n  cex-an-unbounded-harmonic-function-need-not-extend-across-a-puncture inherited\n  cex-an-uncountable-disjoint-union-of-points-is-not-second-countable inherited\n  cex-an-uncountable-supremum-of-indicators-need-not-be-measurable inherited\n  cex-annulus-is-connected-but-not-homologically-simply-connected inherited\n  cex-annulus-needs-a-pole-in-each-bounded-complementary-component inherited\n  cex-antidiagonal-of-the-sorgenfrey-plane inherited\n  cex-arc-length-is-not-continuous-under-uniform-convergence inherited\n  cex-arcsine-not-differentiable-at-endpoints inherited\n  cex-arcsine-of-sine-is-not-the-identity  inherited\n  cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic inherited\n  cex-boundary-accumulation-does-not-force-holomorphic-identity inherited\n  cex-boundary-convergent-power-series-no-larger-holomorphic-disc inherited\n  cex-bounded-not-totally-bounded          inherited\n  cex-bounded-open-set-with-nonnull-boundary inherited\n  cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz inherited\n  cex-boundedness-does-not-replace-pointwise-relative-compactness inherited\n  cex-boundedness-is-not-topological       inherited\n  cex-box-topology-diagonal-not-continuous inherited\n  cex-c-two-minus-a-complex-line-is-a-domain-of-holomorphy inherited\n  cex-cantor-intersection-needs-vanishing-diameters inherited\n  cex-cantor-measure-is-atomless-but-not-absolutely-continuous inherited\n  cex-chebyshev-bounds-do-not-give-the-prime-number-theorem inherited\n  cex-circular-curve-defeats-vector-valued-mean-value-equality inherited\n  cex-closed-and-bounded-not-compact-in-the-sup-metric inherited\n  cex-closed-unbounded-euclidean-subset-not-compact inherited\n  cex-closure-of-ball-smaller-than-closed-ball inherited\n  cex-compact-convergence-without-uniform-convergence inherited\n  cex-compact-set-without-jordan-content   inherited\n  cex-compact-solid-without-jordan-volume  inherited\n  cex-completed-product-sections-need-not-be-pointwise-measurable inherited\n  cex-completeness-is-not-topological      inherited\n  cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic inherited\n  cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal inherited\n  cex-complex-continuous-multiplicative-map-not-the-standard-exponential inherited\n  cex-complex-power-series-not-uniform-on-its-open-disc inherited\n  cex-complex-squaring-is-not-globally-invertible inherited\n  cex-components-differ-from-quasicomponents inherited\n  cex-condition-number-depends-on-the-chosen-norm-and-scaling inherited\n  cex-conditionally-convergent-euler-product-rearrangement inherited\n  cex-cone-level-set-has-a-rank-drop-at-the-apex inherited\n  cex-connected-domain-need-not-be-star-shaped inherited\n  cex-constant-functions-are-equicontinuous-not-pointwise-bounded inherited\n  cex-continuity-alone-does-not-satisfy-a-dini-modulus inherited\n  cex-continuous-bijection-not-a-homeomorphism inherited\n  cex-continuous-function-of-unbounded-variation inherited\n  cex-continuous-map-destroying-cauchyness inherited\n  cex-continuous-ode-with-nonunique-delayed-solutions inherited\n  cex-contraction-on-an-incomplete-space   inherited\n  cex-convex-function-on-closed-convex-set-discontinuous-at-the-boundary inherited\n  cex-convex-function-with-empty-subdifferential-at-a-boundary-point inherited\n  cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding inherited\n  cex-critical-value-can-have-a-smooth-level-set inherited\n  cex-cusp-level-set-has-a-rank-drop-at-the-origin inherited\n  cex-degenerate-surface-parametrization-collapses-to-a-curve inherited\n  cex-differentiable-with-unbounded-derivative-is-not-lipschitz inherited\n  cex-differentiation-under-an-improper-integral-without-domination inherited\n  cex-directional-derivatives-without-total-differentiability inherited\n  cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral inherited\n  cex-disc-algebra-is-not-dense-without-self-adjointness inherited\n  cex-discontinuous-logarithmic-functional-equation inherited\n  cex-discontinuous-midpoint-convex-hamel-function inherited\n  cex-discontinuous-multiplicative-cauchy-solution inherited\n  cex-discontinuous-right-hand-side-with-no-local-solution inherited\n  cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane inherited\n  cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle inherited\n  cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere inherited\n  cex-equal-iterated-integrals-do-not-imply-l-one-integrability inherited\n  cex-equivalent-metrics-need-not-come-from-equivalent-norms inherited\n  cex-even-polynomial-algebra-is-not-dense inherited\n  cex-evt-fails-on-the-open-interval-and-on-the-half-line inherited\n  cex-evt-fails-without-compactness        inherited\n  cex-exp-one-over-z-is-essential-and-omits-zero inherited\n  cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective inherited\n  cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism inherited\n  cex-exponential-not-uniformly-continuous-on-r inherited\n  cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth inherited\n  cex-flat-smooth-function-has-no-holomorphic-extension inherited\n  cex-four-closed-sets-can-cover-s2-without-antipodal-pairs inherited\n  cex-fubini-fails-without-l-one-integrability inherited\n  cex-graph-of-x-sin-one-over-x-is-not-rectifiable inherited\n  cex-half-norm-fails-the-triangle-inequality-on-two-indicators inherited\n  cex-heine-borel-fails-in-ell-two         inherited\n  cex-heine-cantor-fails-without-compactness inherited\n  cex-henstock-kurzweil-integrability-is-not-absolute inherited\n  cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral inherited\n  cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded inherited\n  cex-interior-of-a-union-is-larger        inherited\n  cex-invertible-derivative-without-c-one-local-inverse inherited\n  cex-k-four-is-planar-but-not-three-colourable inherited\n  cex-k-three-three-satisfies-the-planar-edge-bound inherited\n  cex-k-topology-is-not-uniformizable      inherited\n  cex-l-one-not-subset-l-two-on-the-line   inherited\n  cex-l-two-not-subset-l-one-on-the-line   inherited\n  cex-lagrange-multiplier-rule-needs-a-regular-constraint inherited\n  cex-lebesgue-null-sets-need-not-have-zero-jordan-outer-content inherited\n  cex-limit-point-compact-without-countable-compactness inherited\n  cex-lindelofness-is-not-productive-worked inherited\n  cex-line-with-two-origins                inherited\n  cex-linear-bijection-need-not-preserve-jordan-content inherited\n  cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane inherited\n  cex-log-one-plus-x-series-at-minus-one   inherited\n  cex-logarithm-not-uniformly-continuous-on-positive-reals inherited\n  cex-lower-semicontinuous-compact-function-without-a-maximum inherited\n  cex-mean-value-equality-fails-for-a-vector-valued-function inherited\n  cex-mercator-series-does-not-define-logarithm-globally inherited\n  cex-misidentifying-a-double-pole-gives-the-wrong-residue inherited\n  cex-modulus-is-nowhere-complex-differentiable inherited\n  cex-modulus-squared-is-complex-differentiable-only-at-zero inherited\n  cex-morera-without-continuity            inherited\n  cex-n-times-z-is-not-normal-near-zero    inherited\n  cex-non-metrizable-topology              inherited\n  cex-nonconstant-blaschke-factor-has-constant-boundary-modulus inherited\n  cex-noninjective-change-of-variables-double-counts inherited\n  cex-nonsigma-finite-premeasure-has-distinct-extensions inherited\n  cex-nonvanishing-holomorphic-function-with-no-holomorphic-logarithm inherited\n  cex-normality-is-not-finitely-productive inherited\n  cex-normality-is-not-open-hereditary     inherited\n  cex-numerical-rank-depends-on-the-declared-tolerance inherited\n  cex-omega-one-has-no-at-most-countable-cofinal-subset inherited\n  cex-omitting-the-absolute-jacobian-reverses-sign inherited\n  cex-one-existing-iterated-integral-does-not-give-riemann-integrability inherited\n  cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable inherited\n  cex-one-over-sine-one-over-z-has-a-nonisolate-singularity-at-zero inherited\n  cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval inherited\n  cex-one-over-z-defeats-the-large-semicircle-estimate inherited\n  cex-one-over-z-has-a-nonremovable-puncture-in-one-variable inherited\n  cex-one-point-compactification-of-n-is-not-beta-n inherited\n  cex-open-bounded-euclidean-subset-not-compact inherited\n  cex-open-cover-with-no-lebesgue-number   inherited\n  cex-ordered-field-not-archimedean        direct\n  cex-paracompactness-is-not-open-hereditary inherited\n  cex-paracompactness-is-not-productive    inherited\n  cex-partial-derivatives-without-continuity inherited\n  cex-pasting-fails-for-an-infinite-closed-cover inherited\n  cex-peano-surface-linewise-minimum-without-an-extremum inherited\n  cex-peano-unequal-mixed-partials         inherited\n  cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values inherited\n  cex-point-evaluation-at-zero-is-not-well-defined-on-l-p-of-unit-interval inherited\n  cex-pointwise-bounded-but-not-equicontinuous inherited\n  cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point inherited\n  cex-polar-coordinates-are-not-globally-injective inherited\n  cex-polar-coordinates-do-not-give-a-chart-at-the-origin inherited\n  cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted inherited\n  cex-polynomial-space-admits-no-complete-norm inherited\n  cex-positive-semidefinite-hessian-without-strict-convexity inherited\n  cex-powers-locally-uniform-not-uniform-on-closed-disc inherited\n  cex-principal-complex-powers-exponent-law inherited\n  cex-principal-value-one-over-x-squared-diverges inherited\n  cex-product-of-complete-measures-need-not-be-complete inherited\n  cex-product-of-two-infinite-groups-need-not-be-hyperbolic inherited\n  cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous inherited\n  cex-projection-is-not-closed             inherited\n  cex-pseudocompact-noncompact-particular-point-space inherited\n  cex-q-not-dense-in-an-ordered-field      inherited\n  cex-quasi-isometric-spaces-without-bounded-geometry-need-not-have-comparable-ball-counts inherited\n  cex-quotient-map-neither-open-nor-closed inherited\n  cex-r-mod-q-is-indiscrete-like           inherited\n  cex-radius-does-not-determine-boundary-convergence-of-a-complex-power-series inherited\n  cex-rational-points-in-unit-square-have-no-jordan-content inherited\n  cex-real-part-is-nowhere-complex-differentiable inherited\n  cex-reversing-orientation-preserves-a-contour-integral inherited\n  cex-rudin-bounded-spikes-are-not-equicontinuous inherited\n  cex-same-finite-quotients-do-not-trivially-identify-abstract-groups inherited\n  cex-same-topology-different-cauchy-sequences inherited\n  cex-schwarz-lantern-polyhedral-areas-diverge inherited\n  cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function inherited\n  cex-separability-is-not-hereditary-worked inherited\n  cex-separately-continuous-not-jointly-continuous inherited\n  cex-separating-algebra-without-constants-is-not-dense inherited\n  cex-sequentially-continuous-not-continuous inherited\n  cex-set-distance-is-not-a-metric         inherited\n  cex-shoups-product-bound-does-not-determine-mertens-constant inherited\n  cex-shrinking-rectangles-have-integral-one inherited\n  cex-sine-of-one-over-x-has-no-limit-at-zero inherited\n  cex-sine-one-over-z-is-essential         inherited\n  cex-sine-over-x-is-only-conditionally-convergent inherited\n  cex-smooth-function-not-equal-to-its-maclaurin-series inherited\n  cex-smooth-linewise-minimum-without-an-extremum inherited\n  cex-sphere-is-not-the-boundary-of-the-ball inherited\n  cex-spikes-with-integral-one-converging-pointwise-to-zero inherited\n  cex-straight-line-continuity-tests-do-not-imply-continuity inherited\n  cex-strict-contraction-without-a-fixed-point inherited\n  cex-strictly-convex-function-with-a-singular-hessian inherited\n  cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one inherited\n  cex-t1-free-regular-and-normal-conventions inherited\n  cex-tangent-addition-formula-without-domain inherited\n  cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex inherited\n  cex-the-box-topology-disconnects-a-product-of-connected-spaces inherited\n  cex-the-deleted-tychonoff-plank-is-not-normal inherited\n  cex-the-empty-family-is-not-erdos-hajnal inherited\n  cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges inherited\n  cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary inherited\n  cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold inherited\n  cex-the-first-mean-value-theorem-needs-a-one-signed-weight inherited\n  cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one inherited\n  cex-the-harmonic-series-shows-the-defining-series-diverges-at-one inherited\n  cex-the-koch-curve-is-not-rectifiable    inherited\n  cex-the-logarithmic-ramsey-bound-is-not-an-erdos-hajnal-bound inherited\n  cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention inherited\n  cex-the-mean-value-inequality-is-attained inherited\n  cex-the-one-form-y-dx-is-path-dependent  inherited\n  cex-the-one-norm-comes-from-no-inner-product inherited\n  cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous inherited\n  cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum inherited\n  cex-the-punctured-disc-is-connected-but-not-simply-connected inherited\n  cex-the-punctured-plane-separates-c-complement-from-spherical-complement inherited\n  cex-the-same-trace-can-have-different-path-lengths inherited\n  cex-the-samuel-map-need-not-preserve-the-original-uniformity inherited\n  cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable inherited\n  cex-the-unit-interval-indicator-has-nonintegrable-maximal-function inherited\n  cex-the-volume-coordinate-expression-changes-sign-under-a-reflection inherited\n  cex-the-zero-countable-infinity-cocountable-measure-space-breaks-p-equals-one-duality inherited\n  cex-tietze-fails-in-a-t1-space-that-is-not-normal inherited\n  cex-topologically-not-uniformly-equivalent inherited\n  cex-topologists-sine-curve-connected-not-path-connected inherited\n  cex-totally-bounded-not-compact          inherited\n  cex-two-disjoint-nonmeasurable-sets-can-have-a-measurable-union inherited\n  cex-two-l-two-functions-can-have-convolution-outside-l-two inherited\n  cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set inherited\n  cex-two-noncompatible-atlases-on-the-real-line inherited\n  cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set inherited\n  cex-uniform-bijection-with-non-uniform-inverse inherited\n  cex-uniformly-not-lipschitz-equivalent   inherited\n  cex-unique-critical-point-is-a-nonglobal-strict-local-minimum inherited\n  cex-uniqueness-does-not-require-local-lipschitz-continuity inherited\n  cex-unsigned-half-angle-formula          inherited\n  cex-volterra-bounded-derivative-not-riemann-integrable inherited\n  cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane inherited\n  cex-weak-boundary-inequality-does-not-suffice-for-rouche inherited\n  cex-x-squared-is-not-uniformly-continuous-on-r inherited\n  cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin inherited\n  cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause inherited\n  cex-z-squared-is-not-hyperbolic          inherited\n  cex-zero-derivative-on-a-disconnected-open-set-without-constancy inherited\n  cex-zero-directional-derivatives-without-continuity inherited\n  cex-zero-hessian-does-not-classify-a-critical-point inherited\n  cex-zero-iterated-integrals-without-a-double-integral inherited\n  cex-zero-residue-does-not-force-a-removable-singularity inherited\n  cex-zp-is-not-the-integral-closure-of-z-in-qp inherited\n  cor-a-bernstein-set-is-not-lebesgue-measurable inherited\n  cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence inherited\n  cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete inherited\n  cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero inherited\n  cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction inherited\n  cor-a-compact-hausdorff-space-is-tychonoff inherited\n  cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete inherited\n  cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity inherited\n  cor-a-continuous-image-of-a-lebesgue-measurable-set-can-be-nonmeasurable inherited\n  cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset inherited\n  cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable inherited\n  cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative inherited\n  cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable inherited\n  cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid inherited\n  cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence inherited\n  cor-a-measurable-function-on-a-finite-measure-subset-of-rn-agrees-off-a-small-set-with-a-continuous-function inherited\n  cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn inherited\n  cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points inherited\n  cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves inherited\n  cor-a-retract-of-a-contractible-space-is-contractible inherited\n  cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective inherited\n  cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section inherited\n  cor-a-submersion-is-transverse-to-every-embedded-submanifold inherited\n  cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame inherited\n  cor-abel-test-for-improper-integrals     inherited\n  cor-absolute-integral-of-one-is-path-length inherited\n  cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets inherited\n  cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree inherited\n  cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding inherited\n  cor-arc-length-accumulation-derivative-is-speed inherited\n  cor-area-as-a-line-integral-for-elementary-regions inherited\n  cor-argument-principle-counts-preimages  inherited\n  cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets inherited\n  cor-ascoli-arzela-for-compact-hausdorff-domains inherited\n  cor-ascoli-arzela-for-compact-metric-domains inherited\n  cor-asymptotic-density-of-coprime-pairs  inherited\n  cor-average-order-of-divisor-counting-function inherited\n  cor-average-order-of-divisor-sum-function inherited\n  cor-average-order-of-euler-totient       inherited\n  cor-average-order-of-two-square-representations inherited\n  cor-baire-sequence-space-is-homeomorphic-to-the-irrationals inherited\n  cor-banach-error-estimates               inherited\n  cor-based-connected-coverings-isomorphic-iff-equal-subgroups inherited\n  cor-basel-sum-by-residues                inherited\n  cor-best-affine-predictor-from-one-random-variable inherited\n  cor-bieberbach-second-coefficient-bound  inherited\n  cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property inherited\n  cor-bolzano-weierstrass-in-rn            inherited\n  cor-bounded-derivative-implies-lipschitz inherited\n  cor-bounded-domain-lusin-core-can-be-chosen-compact inherited\n  cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction inherited\n  cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter inherited\n  cor-c-one-change-of-variables-for-l-one-functions inherited\n  cor-c-one-local-diffeomorphisms-are-open-maps inherited\n  cor-c2-holomorphic-components-have-nonpositive-hessian-determinant inherited\n  cor-cantor-set-is-an-uncountable-lebesgue-null-set inherited\n  cor-cardinal-functions-detect-countability-axioms inherited\n  cor-cartesian-and-polar-cauchy-riemann-equations inherited\n  cor-cauchy-estimates-taylor-coefficients inherited\n  cor-cauchy-inequalities                  inherited\n  cor-cauchy-schwarz-for-random-variables  inherited\n  cor-cauchy-schwarz-inequality-for-l-two  inherited\n  cor-cauchy-theorem-convex-domain         inherited\n  cor-cauchy-theorem-for-null-homotopic-loops inherited\n  cor-cauchy-theorem-star-shaped-domain    inherited\n  cor-cavalieri-principle-for-jordan-content inherited\n  cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded inherited\n  cor-central-binomial-coefficient-asymptotic-from-wallis inherited\n  cor-change-of-variables-for-compactly-supported-functions inherited\n  cor-change-of-variables-on-bounded-open-jordan-sets inherited\n  cor-chord-length-is-at-most-arc-length   inherited\n  cor-closed-contour-integral-of-a-derivative-is-zero inherited\n  cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains inherited\n  cor-compact-domain-maps-are-uniformly-continuous inherited\n  cor-compact-hausdorff-partitions-of-unity inherited\n  cor-compact-open-topology-is-independent-of-exhaustion inherited\n  cor-compact-regular-level-surfaces-have-finite-patch-covers inherited\n  cor-compact-subsets-of-cx-for-a-proper-metric-target inherited\n  cor-complete-normality-is-hereditary     inherited\n  cor-completely-metrizable-spaces-are-baire inherited\n  cor-completely-multiplicative-dirichlet-series-euler-product inherited\n  cor-complex-analytic-functions-have-local-primitives inherited\n  cor-complex-de-moivre-formula            inherited\n  cor-complex-differentiability-implies-continuity inherited\n  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity inherited\n  cor-complex-jacobian-determinant-is-multiplicative inherited\n  cor-complex-power-series-coefficient-formula inherited\n  cor-complex-power-series-sums-are-analytic inherited\n  cor-complex-power-series-sums-have-derivatives-of-all-orders inherited\n  cor-complex-trigonometric-and-hyperbolic-addition-formulas inherited\n  cor-complex-trigonometric-and-hyperbolic-derivatives inherited\n  cor-components-of-open-subsets-of-rn-are-polygonally-connected inherited\n  cor-connected-cover-of-a-simply-connected-space-is-trivial inherited\n  cor-connected-coverings-of-circle-classified-by-nonnegative-integers inherited\n  cor-connected-subsets-of-the-line        inherited\n  cor-conservative-fields-are-path-independent-and-have-zero-circulation inherited\n  cor-constant-boundary-modulus-forces-zero-or-constancy inherited\n  cor-constant-modulus-holomorphic-function-is-constant inherited\n  cor-continuous-complex-derivative-gives-c1-components inherited\n  cor-continuous-extension-from-a-dense-subset-r inherited\n  cor-continuous-functions-are-borel-measurable inherited\n  cor-continuous-logarithmic-functions-form-a-one-parameter-family inherited\n  cor-contour-integral-of-a-constant-is-an-endpoint-increment inherited\n  cor-contour-integrals-homologous-cycles  inherited\n  cor-contractible-iff-identity-nullhomotopic inherited\n  cor-contractible-spaces-are-path-connected inherited\n  cor-convex-domains-are-domains-of-holomorphy inherited\n  cor-convex-functions-on-open-convex-sets-are-continuous inherited\n  cor-convex-subsets-of-rn-are-contractible inherited\n  cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity inherited\n  cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish inherited\n  cor-curl-vanishes-exactly-when-a-field-is-closed inherited\n  cor-cycle-integral-of-a-derivative-vanishes inherited\n  cor-deck-group-of-a-regular-covering     inherited\n  cor-degree-descends-to-circle-loop-classes inherited\n  cor-derivative-operators-are-continuous-for-local-uniform-convergence inherited\n  cor-diffeomorphism-pushforward-preserves-lie-brackets inherited\n  cor-differentiable-approximants-with-a-vanishing-derivative-at-a-point inherited\n  cor-disc-jordan-content-is-pi-r-squared  inherited\n  cor-divisor-dirichlet-series-zeta-square inherited\n  cor-e-is-the-unique-unit-hyperbolic-area inherited\n  cor-elementary-almost-everywhere-is-lebesgue-almost-everywhere inherited\n  cor-ell-p-duality-by-counting-measure    inherited\n  cor-entire-biholomorphisms-are-affine    inherited\n  cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence inherited\n  cor-equicontinuous-families-into-a-compact-metric-target inherited\n  cor-euclidean-closed-balls-and-spheres-are-compact inherited\n  cor-euclidean-compactness-equivalence-chart inherited\n  cor-euclidean-immersion-normal-form-and-local-embedding inherited\n  cor-euclidean-spheres-are-path-connected inherited\n  cor-euclidean-submersion-normal-form     inherited\n  cor-euclidean-submersions-are-open-maps  inherited\n  cor-euler-formula-for-disconnected-plane-graphs inherited\n  cor-euler-prime-product-tends-to-zero    inherited\n  cor-euler-totient-dirichlet-series       inherited\n  cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction inherited\n  cor-every-closed-subset-of-a-manifold-is-the-zero-set-of-a-smooth-nonnegative-function inherited\n  cor-every-connected-covering-of-circle-is-regular inherited\n  cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map inherited\n  cor-every-face-of-an-elementary-solid-region-is-outward-oriented inherited\n  cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property inherited\n  cor-every-immersion-is-locally-an-embedding inherited\n  cor-every-open-subset-of-a-manifold-is-the-cozero-set-of-a-smooth-function inherited\n  cor-every-short-exact-sequence-of-smooth-vector-bundles-splits inherited\n  cor-every-smooth-manifold-admits-a-riemannian-metric inherited\n  cor-every-smooth-vector-field-on-a-compact-manifold-is-complete inherited\n  cor-every-submersion-is-an-open-map      inherited\n  cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset inherited\n  cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve inherited\n  cor-every-vector-subbundle-has-a-smooth-complement inherited\n  cor-exponential-is-a-bijection-onto-positive-reals inherited\n  cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree inherited\n  cor-finite-dimensional-normed-spaces-are-banach inherited\n  cor-finite-dimensional-subspaces-are-closed inherited\n  cor-finite-maximal-time-forces-escape-from-every-compact-set inherited\n  cor-finite-section-support-forces-zero-integral inherited\n  cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini inherited\n  cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property inherited\n  cor-ftc-integral-function-differentiable-almost-everywhere inherited\n  cor-fundamental-group-of-two-circle-wedge inherited\n  cor-fundamental-group-of-two-dimensional-torus inherited\n  cor-gamma-factorial-values               inherited\n  cor-gamma-function-has-no-zeros          inherited\n  cor-gamma-one-half-value                 inherited\n  cor-gautschi-inequality-for-the-real-gamma-function inherited\n  cor-generic-translations-of-a-map-to-euclidean-space-are-transverse inherited\n  cor-geometric-unit-circle-has-fundamental-group-z inherited\n  cor-global-cauchy-formula-higher-derivatives inherited\n  cor-global-cauchy-theorem-homology       inherited\n  cor-globally-lipschitz-odes-have-global-solutions inherited\n  cor-goursat-rectangle-theorem            inherited\n  cor-graph-of-a-measurable-function-is-lebesgue-null inherited\n  cor-greens-first-identity-for-glued-elementary-solid-regions inherited\n  cor-greens-second-identity-for-glued-elementary-solid-regions inherited\n  cor-greens-theorem-in-circulation-form   inherited\n  cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric inherited\n  cor-harmonic-addition-formula            inherited\n  cor-harmonic-conjugates-differ-by-a-real-constant inherited\n  cor-hartogs-figure-obstruction-to-domain-of-holomorphy inherited\n  cor-heine-borel-in-the-product-topology  inherited\n  cor-hermitian-simple-eigenpair-derivative-simplifications inherited\n  cor-hessian-is-symmetric                 inherited\n  cor-holder-inequality-for-random-variables inherited\n  cor-holomorphic-function-ring-integral-domain inherited\n  cor-holomorphic-function-with-holomorphic-conjugate-is-constant inherited\n  cor-holomorphic-functions-are-closed-for-local-uniform-convergence inherited\n  cor-holomorphic-functions-are-real-analytic-and-smooth inherited\n  cor-holomorphic-functions-in-several-variables-are-smooth inherited\n  cor-holomorphic-functions-on-a-domain-form-an-integral-domain inherited\n  cor-holomorphic-logarithm-has-the-logarithmic-derivative inherited\n  cor-holomorphic-mean-value-property      inherited\n  cor-holomorphic-roots-homologically-simply-connected-domains inherited\n  cor-homotopy-equivalence-bijection-on-path-components inherited\n  cor-homotopy-relative-and-path-homotopy-are-equivalence-relations inherited\n  cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact inherited\n  cor-index-and-coindex-swap-under-negation inherited\n  cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace inherited\n  cor-infinite-dimensional-closed-unit-ball-is-not-compact inherited\n  cor-injective-holomorphic-derivative-nonzero inherited\n  cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image inherited\n  cor-integrability-of-absolute-values-products-and-lattice-operations inherited\n  cor-integral-exponential-addition-law    inherited\n  cor-integral-logarithm-agrees-with-natural-logarithm inherited\n  cor-integral-logarithm-is-strictly-increasing inherited\n  cor-integral-logarithm-reciprocals-and-integer-powers inherited\n  cor-intermediate-value-theorem-topological inherited\n  cor-jacobian-determinant-of-a-holomorphic-map inherited\n  cor-jensen-zero-counting-bound           inherited\n  cor-jordan-content-finite-additivity     inherited\n  cor-jordan-content-under-a-c-one-diffeomorphism inherited\n  cor-k-five-and-k-three-three-are-nonplanar inherited\n  cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions inherited\n  cor-l-p-convergence-implies-convergence-in-measure inherited\n  cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences inherited\n  cor-l-p-norm-recovery-by-unit-l-q-pairings inherited\n  cor-lagrange-multiplier-rule-for-graph-constraints inherited\n  cor-lagrange-multiplier-rule-for-one-regular-constraint inherited\n  cor-laurent-coefficients-independent-of-radius inherited\n  cor-layer-cake-formulas-for-random-variables inherited\n  cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property inherited\n  cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps inherited\n  cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity inherited\n  cor-lebesgue-outer-measure-is-regular-with-borel-measurable-hulls inherited\n  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure inherited\n  cor-length-of-the-graph-of-a-c1-function inherited\n  cor-lifted-path-endpoints-depend-only-on-path-homotopy inherited\n  cor-limit-comparison-test-for-improper-integrals inherited\n  cor-linear-maps-with-finite-dimensional-domain-are-bounded inherited\n  cor-liouville-theorem-for-plane-harmonic-functions inherited\n  cor-liouville-theorem-in-several-complex-variables inherited\n  cor-lipschitz-ode-uniqueness-and-stability-estimate inherited\n  cor-local-extrema-and-saddles-from-the-morse-index inherited\n  cor-local-holder-regularity-implies-fourier-convergence-at-a-point inherited\n  cor-local-holomorphic-roots-nonvanishing-function inherited\n  cor-local-level-set-cone-at-a-morse-critical-point inherited\n  cor-local-minima-of-convex-functions-on-rn-are-global inherited\n  cor-local-multiplicity-count-holomorphic-map inherited\n  cor-local-normal-form-for-immersions     inherited\n  cor-local-normal-form-for-submersions    inherited\n  cor-local-zero-count-via-rouche          inherited\n  cor-locally-bounded-meromorphic-poles-are-removable inherited\n  cor-locally-compact-hausdorff-spaces-are-cech-complete inherited\n  cor-locally-uniformly-convergent-holomorphic-series inherited\n  cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic inherited\n  cor-logarithmic-derivative-of-a-normally-convergent-product inherited\n  cor-lower-limit-line-is-normal           inherited\n  cor-lyapunov-moment-inequality-on-a-probability-space inherited\n  cor-maximal-ideal-and-residue-field-of-zp inherited\n  cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc inherited\n  cor-maximum-principle-real-part-holomorphic-function inherited\n  cor-meromorphic-functions-on-a-domain-form-a-field inherited\n  cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients inherited\n  cor-meromorphic-functions-on-the-plane-are-entire-quotients inherited\n  cor-meromorphic-great-picard-theorem     inherited\n  cor-meromorphic-little-picard-theorem    inherited\n  cor-metric-spaces-admit-subordinate-partitions-of-unity inherited\n  cor-metrizability-and-first-countability-are-hereditary inherited\n  cor-metrizable-cech-complete-iff-completely-metrizable inherited\n  cor-ml-estimate-for-complex-line-integrals inherited\n  cor-mobius-dirichlet-series-reciprocal-zeta inherited\n  cor-modulus-powers-of-holomorphic-functions-are-subharmonic inherited\n  cor-multivariable-taylor-formula-with-peano-remainder inherited\n  cor-nikiforov-applies-to-every-linearly-large-induced-subgraph inherited\n  cor-no-continuous-injection-from-s2-to-r2 inherited\n  cor-no-isolated-holomorphic-singularities-in-several-complex-variables inherited\n  cor-nonconstant-entire-function-has-dense-image inherited\n  cor-nonintegral-entire-order-bounds-canonical-genus inherited\n  cor-normalized-circle-integral-about-its-centre-is-one inherited\n  cor-normed-space-completions-are-uniquely-linearly-isometric inherited\n  cor-nowhere-differentiable-functions-are-residual-in-c01 inherited\n  cor-one-dimensional-and-multidimensional-riemann-agree inherited\n  cor-one-dimensional-change-of-variables-with-absolute-derivative inherited\n  cor-one-dimensional-null-and-content-zero-agree inherited\n  cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces inherited\n  cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation inherited\n  cor-p-adic-field-is-locally-compact-and-totally-disconnected inherited\n  cor-p-adic-simple-root-lifting           inherited\n  cor-parallelepiped-content-is-the-absolute-determinant inherited\n  cor-partial-fraction-expansion-of-pi-squared-cosecant-squared inherited\n  cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property inherited\n  cor-perfect-normality-is-hereditary      inherited\n  cor-pi-is-the-first-positive-sine-zero   inherited\n  cor-piecewise-c-one-fourier-series-converges-to-midpoint-values inherited\n  cor-piecewise-c1-paths-have-additive-speed-integral-length inherited\n  cor-planar-graph-has-low-degree-vertex   inherited\n  cor-planar-graphs-have-no-kuratowski-subdivision inherited\n  cor-planar-simple-graph-edge-bound       inherited\n  cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family inherited\n  cor-positive-codimension-immersed-submanifolds-are-null inherited\n  cor-positive-definite-hessian-implies-strict-convexity inherited\n  cor-potentials-differ-by-a-componentwise-constant inherited\n  cor-power-series-sums-are-continuous     inherited\n  cor-power-series-sums-are-smooth-with-coefficient-formula inherited\n  cor-primitives-of-a-continuous-function  inherited\n  cor-principal-logarithm-is-holomorphic-on-the-slit-plane inherited\n  cor-proper-local-diffeomorphisms-have-constant-finite-fibres inherited\n  cor-punctured-rn-homotopy-equivalent-to-the-sphere inherited\n  cor-quarter-disc-inclusion-for-univalent-functions inherited\n  cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings inherited\n  cor-real-analytic-functions-are-smooth   inherited\n  cor-real-and-euclidean-vector-valued-ascoli-arzela inherited\n  cor-real-beta-recurrences                inherited\n  cor-real-gamma-one-half-is-root-pi       inherited\n  cor-real-gamma-positive-integer-values   inherited\n  cor-real-line-is-universal-cover-of-circle inherited\n  cor-real-line-mod-integers-is-not-simply-connected inherited\n  cor-real-power-as-rational-limit         inherited\n  cor-real-stone-weierstrass-nowhere-vanishing-form inherited\n  cor-real-valued-holomorphic-function-is-constant inherited\n  cor-regular-c1-paths-have-c1-unit-speed-parametrizations inherited\n  cor-regular-level-set-local-graph-theorem inherited\n  cor-regular-surface-reparametrization-has-constant-orientation-sign inherited\n  cor-regular-values-form-a-dense-g-delta-set inherited\n  cor-regular-values-have-null-complement-and-are-dense inherited\n  cor-repeated-riemann-integrals-on-rectangles inherited\n  cor-residue-contour-integral-formula     inherited\n  cor-residue-quotient-simple-zero         inherited\n  cor-residue-theorem-circle               inherited\n  cor-riemann-integrability-and-lebesgue-null-discontinuity-sets inherited\n  cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function inherited\n  cor-riemann-integral-of-a-product-function inherited\n  cor-riemann-stieltjes-existence-bv-continuous inherited\n  cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one inherited\n  cor-rn-is-locally-compact-and-sigma-compact inherited\n  cor-rn-is-polygonally-connected-and-locally-path-connected inherited\n  cor-rodl-every-h-free-graph-has-a-linear-restricted-set inherited\n  cor-rodl-for-a-nonempty-family-of-forbidden-graphs inherited\n  cor-rodl-in-the-edge-density-form        inherited\n  cor-runge-polynomial-approximation       inherited\n  cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces inherited\n  cor-samuel-compactification-is-unique    inherited\n  cor-scalar-line-integral-of-one-is-arc-length inherited\n  cor-second-moment-positive-probability-bound inherited\n  cor-second-order-taylor-expansion-with-the-hessian inherited\n  cor-seifert-van-kampen-simply-connected-overlap inherited\n  cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense inherited\n  cor-separated-uniformizable-iff-tychonoff inherited\n  cor-simply-connected-proper-plane-domains-are-regular inherited\n  cor-sin-x-over-x-limit                   inherited\n  cor-sine-and-cosine-are-one-lipschitz    inherited\n  cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence inherited\n  cor-single-valued-continuation-on-simply-connected-domains inherited\n  cor-smooth-functions-separate-points-from-closed-sets inherited\n  cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover inherited\n  cor-spherical-complement-characterization-of-plane-simple-connectivity inherited\n  cor-stokes-gives-zero-circulation-for-a-curl-free-field inherited\n  cor-stone-cech-compactification-is-unique-over-x inherited\n  cor-stone-cech-compactification-maps-onto-samuel-compactification inherited\n  cor-stone-cech-of-compact-hausdorff-space-is-itself inherited\n  cor-strictly-convex-functions-on-rn-have-at-most-one-minimizer inherited\n  cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient inherited\n  cor-subgradient-zero-characterises-global-minima inherited\n  cor-sum-of-reciprocals-of-primes-diverges inherited\n  cor-sum-of-roots-of-unity                inherited\n  cor-surface-area-of-revolution-formula   inherited\n  cor-symmetric-lovasz-local-lemma         inherited\n  cor-termwise-integration-of-a-real-power-series inherited\n  cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed inherited\n  cor-the-bull-graph-has-the-erdos-hajnal-property inherited\n  cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite inherited\n  cor-the-class-of-all-graphs-is-not-erdos-hajnal inherited\n  cor-the-curl-of-a-curl-of-a-c2-field     inherited\n  cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable inherited\n  cor-the-differential-of-a-diffeomorphism-is-an-isomorphism inherited\n  cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume inherited\n  cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs inherited\n  cor-the-five-cycle-has-the-erdos-hajnal-property inherited\n  cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property inherited\n  cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes inherited\n  cor-the-four-vertex-path-has-the-erdos-hajnal-property inherited\n  cor-the-h-zero-graph-has-the-erdos-hajnal-property inherited\n  cor-the-immersion-and-submersion-loci-are-open inherited\n  cor-the-loglog-bound-eventually-dominates-the-classical-bound inherited\n  cor-the-normal-curl-is-the-limiting-circulation-per-unit-area inherited\n  cor-the-planar-divergence-theorem-flux-form-of-greens-theorem inherited\n  cor-the-seven-cycle-and-its-complement-have-the-erdos-hajnal-property inherited\n  cor-the-six-cycle-and-its-complement-have-the-erdos-hajnal-property inherited\n  cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property inherited\n  cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets inherited\n  cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property inherited\n  cor-the-tangent-space-of-an-n-manifold-has-dimension-n inherited\n  cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux inherited\n  cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel inherited\n  cor-three-closed-sets-covering-s2-contain-an-antipodal-pair inherited\n  cor-tietze-for-unbounded-and-open-interval-valued-maps inherited\n  cor-topological-groups-are-completely-regular inherited\n  cor-transverse-intersection-theorem      inherited\n  cor-triangle-content-zero-iff-collinear  inherited\n  cor-triangle-free-planar-edge-bound      inherited\n  cor-trigonometric-parity-and-pythagorean-identity inherited\n  cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal inherited\n  cor-two-variable-hessian-determinant-test inherited\n  cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma inherited\n  cor-uniform-limit-of-smooth-functions-need-not-be-differentiable inherited\n  cor-uniform-limit-uniformly-continuous   inherited\n  cor-uniform-picard-lindelof-for-nearby-initial-values inherited\n  cor-uniqueness-for-the-bounded-plane-dirichlet-problem inherited\n  cor-uniqueness-of-complex-power-series-coefficients inherited\n  cor-uniqueness-of-multivariable-power-series-coefficients inherited\n  cor-uniqueness-of-the-normalized-riemann-map inherited\n  cor-unit-n-ball-volume-is-maximal-in-dimension-five inherited\n  cor-unit-n-ball-volume-tends-to-zero     inherited\n  cor-urysohn-metrization                  inherited\n  cor-urysohns-lemma-closes-the-separation-chain inherited\n  cor-van-kampen-one-simply-connected-set  inherited\n  cor-vanishing-moments-force-a-continuous-function-to-vanish inherited\n  cor-vector-forms-of-the-divergence-theorem inherited\n  cor-vector-valued-ftc-and-lipschitz-bound inherited\n  cor-viral-implies-polynomial-rodl-for-a-finite-family inherited\n  cor-volume-of-a-closed-three-ball        inherited\n  cor-volume-of-a-radius-r-n-ball          inherited\n  cor-volume-of-a-right-circular-cone      inherited\n  cor-volume-of-a-right-circular-cylinder  inherited\n  cor-volume-of-the-unit-n-ball            inherited\n  cor-volume-under-a-continuous-graph-over-a-jordan-base inherited\n  cor-von-mangoldt-mobius-inversion-formula inherited\n  cor-washer-method-for-solids-of-revolution inherited\n  cor-weierstrass-approximation-on-a-closed-interval inherited\n  cor-weierstrass-approximation-on-the-unit-interval inherited\n  cor-winding-number-classifies-loops-in-the-punctured-plane inherited\n  cor-winding-number-is-the-normalized-argument-increment inherited\n  cor-x-sine-of-one-over-x-is-not-differentiable-at-zero inherited\n  cor-zero-total-derivative-on-a-convex-open-set-is-constant inherited\n  cor-zp-is-the-valuation-ring-of-qp       inherited\n  def-a-smooth-map-transverse-to-an-embedded-submanifold inherited\n  def-abscissae-dirichlet-series           inherited\n  def-absolute-and-conditional-improper-convergence inherited\n  def-absolute-and-relative-forward-error-for-a-problem-map inherited\n  def-absolute-and-relative-local-condition-numbers-of-a-problem-map inherited\n  def-absolute-line-integral-over-a-rectifiable-path inherited\n  def-action-of-a-vector-field-on-smooth-functions inherited\n  def-adapted-outward-boundary-presentation-of-a-simple-solid-region inherited\n  def-adjunction-cone-suspension           inherited\n  def-admissible-cycle-for-residue-theorem inherited\n  def-admissible-regular-parametrized-surface-patch inherited\n  def-alpha-narrow-graph                   inherited\n  def-analytic-continuation-along-a-path   inherited\n  def-arc-length-function                  inherited\n  def-autonomous-ordinary-differential-equation inherited\n  def-ball-average-operator-on-r-n         inherited\n  def-balls-and-polydiscs-in-complex-euclidean-space inherited\n  def-banach-space                         inherited\n  def-base-and-height-for-plane-figures    inherited\n  def-based-loops-and-fundamental-group    inherited\n  def-bernoulli-numbers-by-their-generating-function inherited\n  def-biholomorphic-map                    inherited\n  def-biholomorphic-map-several-complex-variables inherited\n  def-borel-and-lebesgue-measurable-function-on-rn inherited\n  def-bounded-below-operator               inherited\n  def-bounded-bilinear-map                 inherited\n  def-bounded-left-and-right-inverses      inherited\n  def-bounded-linear-functional-on-l-p-and-its-operator-norm inherited\n  def-bounded-linear-operator              inherited\n  def-c-c-and-c-c-infinity-on-rn           inherited\n  def-c-one-map-and-local-inverse          inherited\n  def-c-r-and-smooth-maps-between-smooth-manifolds inherited\n  def-c-zero-on-rn                         inherited\n  def-calligraphic-l-p-on-a-measure-space  inherited\n  def-canonical-map-from-the-integers-to-zp inherited\n  def-canonical-map-to-the-profinite-completion inherited\n  def-cantor-measure                       inherited\n  def-cauchy-in-metric                     inherited\n  def-cech-complete-space                  inherited\n  def-centered-and-uncentered-hardy-littlewood-maximal-functions inherited\n  def-chebyshev-psi-function               inherited\n  def-chebyshev-theta-function             inherited\n  def-chordal-local-uniform-convergence-and-meromorphic-normality inherited\n  def-chordal-metric-riemann-sphere        inherited\n  def-circline-and-reflection              inherited\n  def-circular-arcs-circumference-and-diameter inherited\n  def-ck-and-multi-index-notation-in-several-variables inherited\n  def-ck-euclidean-maps-and-diffeomorphisms inherited\n  def-classical-weierstrass-function       inherited\n  def-closed-and-exact-c1-vector-fields    inherited\n  def-coarsely-dense-subset-and-quasi-isometry inherited\n  def-codimension-and-hypersurface         inherited\n  def-compact-exhaustion-metric-on-function-space inherited\n  def-compact-open-topology                inherited\n  def-compactification-of-a-tychonoff-space inherited\n  def-compactness-variants                 inherited\n  def-complemented-subspace                inherited\n  def-complete-analytic-function           inherited\n  def-complete-metric-space                inherited\n  def-complete-vector-field                inherited\n  def-completed-riemann-zeta-function      inherited\n  def-completely-normal-and-perfectly-normal-spaces inherited\n  def-completely-regular-and-tychonoff-spaces inherited\n  def-completion-of-a-normed-space         inherited\n  def-complex-analytic-function            inherited\n  def-complex-chain-and-cycle              inherited\n  def-complex-contours-reversal-concatenation-and-closedness inherited\n  def-complex-differentiability-holomorphic-and-entire inherited\n  def-complex-domain                       inherited\n  def-complex-exponential                  inherited\n  def-complex-line-integral-over-a-rectifiable-path inherited\n  def-complex-logarithms-principal-logarithm-and-complex-powers inherited\n  def-complex-metric-convergence-and-continuity inherited\n  def-complex-polynomial-degree-and-monic  inherited\n  def-complex-power-from-holomorphic-logarithm-branch inherited\n  def-complex-primitive                    inherited\n  def-complex-series-power-series-and-absolute-convergence inherited\n  def-complex-trigonometric-and-hyperbolic-functions inherited\n  def-condition-number-of-a-nonsingular-linear-system inherited\n  def-conformal-equivalence-and-automorphism-group inherited\n  def-contact-equivalence-of-smooth-curves-at-a-point inherited\n  def-continuous-argument-and-holomorphic-logarithm-branches inherited\n  def-continuous-real-functions-on-a-compact-metric-space inherited\n  def-convex-and-strictly-convex-functions-on-euclidean-sets inherited\n  def-convex-subset-of-euclidean-space     inherited\n  def-coordinate-derivations-at-a-point    inherited\n  def-coordinate-representation-of-a-map   inherited\n  def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union inherited\n  def-critical-locus-and-critical-value-set inherited\n  def-critical-point-and-critical-value-of-a-smooth-function inherited\n  def-cross-product-in-r3                  inherited\n  def-cross-ratio-riemann-sphere           inherited\n  def-definite-and-indefinite-hessian-quadratic-forms inherited\n  def-degree-of-a-circle-loop              inherited\n  def-degree-rational-map-riemann-sphere   inherited\n  def-density-of-a-measurable-set-at-a-point inherited\n  def-derivation-at-a-point-and-tangent-space inherited\n  def-diffeomorphism-and-local-diffeomorphism-of-manifolds inherited\n  def-differential-of-a-smooth-map         inherited\n  def-differential-of-a-smooth-real-valued-function inherited\n  def-differential-rank-and-constant-rank  inherited\n  def-directional-and-partial-derivatives  inherited\n  def-dirichlet-series                     inherited\n  def-divergence-and-curl-of-a-c1-vector-field inherited\n  def-dual-and-hom-vector-bundles          inherited\n  def-dyadic-cube-in-rn                    inherited\n  def-edgewise-riemann-integral-around-complex-triangle inherited\n  def-elementary-set-in-rn                 inherited\n  def-elementary-solid-region              inherited\n  def-embedded-submanifold-and-slice-chart inherited\n  def-equicontinuity                       inherited\n  def-equicontinuity-and-boundedness-in-ck inherited\n  def-equivalent-norms                     inherited\n  def-erdos-hajnal-property-and-constant   inherited\n  def-euclidean-inner-product              inherited\n  def-euclidean-linear-map                 inherited\n  def-euclidean-local-extrema-and-critical-points inherited\n  def-euclidean-spheres-and-closed-balls   inherited\n  def-euclidean-submersions-and-immersions inherited\n  def-euler-mascheroni-constant            inherited\n  def-evaluation-map                       inherited\n  def-exterior-power-bundle-of-the-cotangent-bundle inherited\n  def-f-related-vector-fields              inherited\n  def-family-shrinking-nicely-to-a-point   inherited\n  def-field-of-p-adic-numbers              inherited\n  def-finite-gluing-of-elementary-solid-regions inherited\n  def-finitely-patched-regular-surface-and-integrals inherited\n  def-first-fundamental-form-and-surface-area-density inherited\n  def-first-order-ode-initial-value-problem-and-solution inherited\n  def-flowout-of-an-embedded-submanifold   inherited\n  def-forward-and-backward-stability-for-a-problem-family inherited\n  def-function-algebra-indistinguishability-quotient inherited\n  def-function-element-and-direct-analytic-continuation inherited\n  def-g-delta-and-f-sigma-in-a-topological-space inherited\n  def-germ-of-a-smooth-function-at-a-point inherited\n  def-global-differential-or-tangent-map   inherited\n  def-half-open-box                        inherited\n  def-hartogs-figure-and-polydisc-hull     inherited\n  def-hausdorff-space                      inherited\n  def-hessian-and-euclidean-critical-point inherited\n  def-hessian-of-a-function-at-a-critical-point inherited\n  def-holomorphic-extension-and-domain-of-holomorphy inherited\n  def-holomorphic-function-in-several-complex-variables inherited\n  def-holomorphic-germ                     inherited\n  def-holomorphic-germ-ring-and-its-maximal-ideal inherited\n  def-holomorphic-map-and-complex-jacobian inherited\n  def-holomorphically-convex-hull-and-domain inherited\n  def-homologically-simply-connected-complex-domain inherited\n  def-homotopy-equivalence                 inherited\n  def-homotopy-relative-and-path-homotopy  inherited\n  def-hyperbolic-functions                 inherited\n  def-immersed-submanifold                 inherited\n  def-immersion-submersion-and-constant-rank-map inherited\n  def-improper-multiple-integral-and-absolute-convergence inherited\n  def-induced-homomorphism-on-fundamental-groups inherited\n  def-induced-matrix-p-norm                inherited\n  def-induced-tangent-bundle-chart         inherited\n  def-integral-curve-of-a-vector-field     inherited\n  def-integral-exponential                 inherited\n  def-integral-logarithm                   inherited\n  def-integration-and-index-of-complex-chain inherited\n  def-interior-product-of-a-form-by-a-vector-field inherited\n  def-invertible-euclidean-linear-map      inherited\n  def-jacobi-theta-function                inherited\n  def-jacobian-determinant-of-a-c-one-map  inherited\n  def-jacobian-matrix-and-gradient         inherited\n  def-jordan-exhaustion-of-an-open-set     inherited\n  def-jordan-inner-and-outer-content       inherited\n  def-l-p-space-as-a-quotient-by-null-functions inherited\n  def-laplacian-of-a-c2-function           inherited\n  def-leaf-reducible-finite-family         inherited\n  def-lebesgue-inner-measure-on-r          inherited\n  def-lebesgue-measure-and-the-lebesgue-sigma-algebra inherited\n  def-lebesgue-outer-measure               inherited\n  def-lebesgue-point-and-lebesgue-set      inherited\n  def-lie-bracket-of-smooth-vector-fields  inherited\n  def-lie-derivative-of-a-function         inherited\n  def-lie-derivative-of-a-vector-field     inherited\n  def-lift-of-a-map-path-and-homotopy      inherited\n  def-linear-isometry-and-isometric-isomorphism inherited\n  def-local-and-global-flow                inherited\n  def-local-defining-map-for-an-embedded-submanifold inherited\n  def-local-degree-holomorphic-map         inherited\n  def-local-frame-and-global-frame-of-a-vector-bundle inherited\n  def-local-orientation-of-a-regular-c-one-map inherited\n  def-locally-compact-metric-space         inherited\n  def-locally-compact-space                inherited\n  def-locally-connected                    inherited\n  def-locally-injective-holomorphic-map    inherited\n  def-locally-integrable-function-on-r-n   inherited\n  def-locally-lipschitz-in-the-state-variable inherited\n  def-locally-metrizable-space             inherited\n  def-log-convex-positive-function         inherited\n  def-logarithm-to-a-base                  inherited\n  def-manifold-chart-coordinate-domain-and-coordinate-functions inherited\n  def-maximal-ode-solution                 inherited\n  def-maximal-plane-and-maximally-planar-graph inherited\n  def-meissel-mertens-constant             inherited\n  def-meromorphic-function-riemann-sphere  inherited\n  def-metric-bounded-diameter              inherited\n  def-metric-completion                    inherited\n  def-metric-outer-measure                 inherited\n  def-metrizable-space                     inherited\n  def-mobius-transformation                inherited\n  def-mollifier-family-generated-by-a-unit-mass-smooth-bump inherited\n  def-monodromy-action-on-a-covering-fibre inherited\n  def-morse-function-and-excellent-morse-function inherited\n  def-multidimensional-darboux-integral    inherited\n  def-multidimensional-darboux-sums        inherited\n  def-multidimensional-grid-partition      inherited\n  def-multidimensional-rectangle-and-volume inherited\n  def-multidimensional-tagged-partition-and-riemann-sum inherited\n  def-multivariable-power-series           inherited\n  def-multivariable-taylor-polynomial      inherited\n  def-natural-logarithm                    inherited\n  def-nondegenerate-critical-point-nullity-index-and-coindex inherited\n  def-norm-and-normed-space                inherited\n  def-normal-addition-map-for-a-euclidean-submanifold inherited\n  def-normal-and-conormal-bundles-of-an-embedded-submanifold inherited\n  def-normal-family-of-holomorphic-functions inherited\n  def-normed-subspace                      inherited\n  def-normwise-and-componentwise-backward-error-for-linear-systems inherited\n  def-null-and-content-zero-in-rn          inherited\n  def-null-homologous-and-homologous-complex-cycles inherited\n  def-null-subset-of-a-smooth-manifold     inherited\n  def-nullhomotopic-map-and-contractible-space inherited\n  def-numerical-rank-relative-to-a-norm-scale-and-tolerance inherited\n  def-operator-norm                        inherited\n  def-order-of-zero-holomorphic-function   inherited\n  def-order-topology-on-a-linearly-ordered-set inherited\n  def-order-topology-on-an-ordinal         inherited\n  def-oriented-complex-triangle-and-boundary inherited\n  def-oriented-conformal-map-at-a-point    inherited\n  def-oriented-unit-normal-and-flux-of-a-surface-patch inherited\n  def-oscillation-in-rn                    inherited\n  def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid inherited\n  def-p-adic-integers-as-compatible-residue-classes inherited\n  def-p-adic-metric-on-zp                  inherited\n  def-p-norms-on-rn                        inherited\n  def-parallelogram-and-triangle-in-r2     inherited\n  def-parameter-dependent-improper-multiple-integral inherited\n  def-partition-of-unity-subordinate-to-a-cover inherited\n  def-path-class-model-for-a-universal-cover inherited\n  def-path-connected                       inherited\n  def-path-polygonal-length-and-rectifiability-in-rn inherited\n  def-pi-via-first-positive-cosine-zero    inherited\n  def-picard-operator-and-picard-iterates  inherited\n  def-piecewise-c1-path-connected-conservative-and-path-independent inherited\n  def-piecewise-c1-path-operations-and-oriented-reparametrizations inherited\n  def-place-of-the-rationals               inherited\n  def-plane-dual-multigraph                inherited\n  def-plane-graph-face-and-boundary        inherited\n  def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity inherited\n  def-poisson-modification-of-a-subharmonic-function inherited\n  def-polar-surface-measure-on-the-unit-sphere inherited\n  def-polish-space                         inherited\n  def-polydisc-boundary-radius             inherited\n  def-polygonal-arc-and-polygon            inherited\n  def-polygonal-path-and-polygonal-connectedness inherited\n  def-polynomial-rodl-property-for-a-finite-family inherited\n  def-positive-continuous-error-function-for-strong-approximation inherited\n  def-positive-orientation-for-elementary-region-boundaries inherited\n  def-principal-inverse-sine-and-cosine    inherited\n  def-principal-inverse-tangent            inherited\n  def-principal-part-at-an-isolated-point  inherited\n  def-pro-p-completion-of-an-abstract-group inherited\n  def-pro-p-group                          inherited\n  def-product-norms-on-finitely-many-normed-spaces inherited\n  def-profinite-completion-of-an-abstract-group inherited\n  def-profinite-group-by-inverse-limit     inherited\n  def-pullback-of-a-cotangent-vector       inherited\n  def-pullback-of-a-covariant-tensor-field inherited\n  def-pullback-of-a-differential-form      inherited\n  def-pullback-vector-bundle-as-a-fibre-product inherited\n  def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism inherited\n  def-quasi-isometry-group-of-a-metric-space inherited\n  def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group inherited\n  def-quasi-isometry-type-of-a-finitely-generated-group inherited\n  def-quotient-seminorm                    inherited\n  def-quotient-vector-bundle-by-a-subbundle inherited\n  def-radian-angle-by-unit-circle-arc-length inherited\n  def-rank-of-a-smooth-map-at-a-point      inherited\n  def-real-analytic-map-on-the-plane       inherited\n  def-real-beta-integral                   inherited\n  def-real-gamma-function-by-the-euler-integral inherited\n  def-real-power                           inherited\n  def-regular-and-critical-points-and-values inherited\n  def-regular-and-t3-spaces                inherited\n  def-regular-covering                     inherited\n  def-regular-critical-points-values-and-level-sets inherited\n  def-regular-holomorphic-germ             inherited\n  def-regular-locus-of-a-c-one-map         inherited\n  def-residue-isolated-singularity         inherited\n  def-restriction-of-a-vector-bundle       inherited\n  def-retraction-and-deformation-retract   inherited\n  def-riemann-area-between-continuous-graphs inherited\n  def-riemann-integral-over-a-jordan-set   inherited\n  def-riemann-sphere-holomorphic-charts    inherited\n  def-riemann-surface-of-a-complete-analytic-function inherited\n  def-riemann-xi-function                  inherited\n  def-riemann-zeta-function                inherited\n  def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian inherited\n  def-runge-approximation-on-a-plane-domain inherited\n  def-samuel-compactification              inherited\n  def-samuel-uniformity                    inherited\n  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths inherited\n  def-secant-and-tangent-direction-maps-of-an-euclidean-embedding inherited\n  def-sections-and-iterated-riemann-integrals inherited\n  def-self-adjoint-complex-function-algebra inherited\n  def-semilocally-simply-connected-space   inherited\n  def-separated-net-in-a-metric-space      inherited\n  def-separately-holomorphic-function      inherited\n  def-separating-real-function-lattice     inherited\n  def-series-and-absolute-convergence-in-a-normed-space inherited\n  def-series-of-vectors-and-rearrangement  inherited\n  def-simple-polygonal-region-and-triangulation inherited\n  def-simple-solid-region-in-a-coordinate-direction inherited\n  def-simply-connected                     inherited\n  def-singular-boundary-point-and-natural-boundary inherited\n  def-smooth-atlas                         inherited\n  def-smooth-bundle-metric                 inherited\n  def-smooth-differential-k-form           inherited\n  def-smooth-embedding                     inherited\n  def-smooth-family-of-maps-and-evaluation-map inherited\n  def-smooth-fibre-bundle-and-local-trivialization inherited\n  def-smooth-manifold                      inherited\n  def-smooth-partition-of-unity-subordinate-to-an-open-cover inherited\n  def-smooth-section-local-section-and-support inherited\n  def-smooth-structure-generated-by-an-atlas inherited\n  def-smooth-tensor-field                  inherited\n  def-smooth-vector-bundle-rank-fibre-and-trivial-bundle inherited\n  def-smooth-vector-field-as-a-tangent-bundle-section inherited\n  def-smoothly-compatible-charts           inherited\n  def-solid-between-continuous-graphs-over-a-jordan-base inherited\n  def-solid-of-revolution-about-a-coordinate-axis inherited\n  def-space-of-bounded-linear-operators    inherited\n  def-standard-integer-loops-in-the-circle inherited\n  def-standard-residue-contours            inherited\n  def-star-shaped-open-subset-of-rn        inherited\n  def-stone-cech-compactification          inherited\n  def-subgradient-and-subdifferential      inherited\n  def-sublinear-operator-weak-and-strong-type-p-q inherited\n  def-support-and-compactly-supported-riemann-integral-in-rn inherited\n  def-supporting-hyperplane-to-a-convex-set inherited\n  def-surface-area-and-scalar-surface-integral-of-a-patch inherited\n  def-surface-reparametrization-and-orientation inherited\n  def-symmetric-and-alternating-covariant-tensor-subbundles inherited\n  def-tangent-bundle-as-a-disjoint-union   inherited\n  def-tangent-cotangent-secant-cosecant    inherited\n  def-tangent-plane-of-a-regular-surface-patch inherited\n  def-tangent-space-to-a-regular-level-set inherited\n  def-tau-critical-graph                   inherited\n  def-taylor-series-holomorphic-function   inherited\n  def-the-induced-boundary-chain-of-a-c2-surface-patch inherited\n  def-the-local-algebra-of-smooth-function-germs inherited\n  def-the-long-line                        inherited\n  def-the-space-of-summing-directions      inherited\n  def-the-standard-smooth-step-function    inherited\n  def-time-dependent-vector-field-and-evolution-operator inherited\n  def-topological-isomorphism-of-normed-spaces inherited\n  def-topological-manifold-without-boundary inherited\n  def-topology-of-compact-convergence      inherited\n  def-topology-of-uniform-convergence      inherited\n  def-total-derivative-in-euclidean-space  inherited\n  def-totally-bounded                      inherited\n  def-translation-of-a-set-in-rn           inherited\n  def-transverse-embedded-submanifolds     inherited\n  def-transverse-smooth-maps               inherited\n  def-truncated-singular-value-pseudoinverse-at-a-declared-threshold inherited\n  def-tubular-neighbourhood-of-an-embedded-submanifold inherited\n  def-type-i-type-ii-and-elementary-green-regions inherited\n  def-type-r-s-tensor-bundle               inherited\n  def-uniform-convergence-of-complex-valued-functions inherited\n  def-unital-separating-real-function-algebra inherited\n  def-unital-separating-real-function-algebra-general inherited\n  def-universal-covering-space             inherited\n  def-urysohn-space                        inherited\n  def-variational-equation-along-an-ode-solution inherited\n  def-vector-bundle-chart-and-transition-function inherited\n  def-vector-bundle-map-over-a-smooth-base-map inherited\n  def-vector-potential-of-a-c1-vector-field inherited\n  def-vector-subbundle                     inherited\n  def-vector-valued-derivative-and-integral inherited\n  def-vector-valued-functions-limits-and-continuity inherited\n  def-velocity-derivation-of-a-smooth-curve inherited\n  def-viral-property-for-a-finite-family   inherited\n  def-von-mangoldt-function                inherited\n  def-wedge-of-pointed-spaces              inherited\n  def-wedge-product-of-differential-forms  inherited\n  def-weierstrass-polynomial               inherited\n  def-weighted-zero-and-pole-counts-on-cycle inherited\n  def-whitney-sum-of-vector-bundles        inherited\n  def-winding-number-closed-complex-contour inherited\n  def-wirtinger-derivatives                inherited\n  def-wirtinger-operators-in-several-complex-variables inherited\n  def-zero-sets-and-cozero-sets            inherited\n  ex-a-backward-stable-solution-of-an-ill-conditioned-system inherited\n  ex-a-cauchy-sequence-in-the-additive-p-adic-metric inherited\n  ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete inherited\n  ex-a-compactly-supported-vector-field-with-global-solutions inherited\n  ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value inherited\n  ex-a-constant-vector-field-and-translation-solutions inherited\n  ex-a-convex-domain-is-a-domain-of-holomorphy inherited\n  ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space inherited\n  ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold inherited\n  ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected inherited\n  ex-a-cubic-image-curve-has-winding-number-three-about-the-origin inherited\n  ex-a-cylinder-as-the-preimage-of-a-circle-under-projection inherited\n  ex-a-cylinder-deformation-retracts-onto-an-end inherited\n  ex-a-dense-nonclosed-copy-of-a-group-in-its-completion inherited\n  ex-a-dense-null-g-delta-set-containing-the-rationals inherited\n  ex-a-dense-open-subset-of-the-unit-interval-of-small-measure inherited\n  ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped inherited\n  ex-a-family-containing-k-one-is-vacuously-viral inherited\n  ex-a-fibre-product-of-submersions        inherited\n  ex-a-finite-hausdorff-space-is-discrete  inherited\n  ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it inherited\n  ex-a-floating-point-dot-product-error-bound inherited\n  ex-a-forbidden-pattern-and-its-complement-share-eh-status inherited\n  ex-a-four-vertex-graph-with-the-erdos-hajnal-property-by-substitution inherited\n  ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set inherited\n  ex-a-harmonic-conjugate-of-x-squared-minus-y-squared inherited\n  ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction inherited\n  ex-a-lebesgue-measurable-function-that-is-not-borel inherited\n  ex-a-linear-system-and-its-fundamental-matrix inherited\n  ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set inherited\n  ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids inherited\n  ex-a-non-residually-finite-baumslag-solitar-group inherited\n  ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time inherited\n  ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius inherited\n  ex-a-numeric-run-of-the-lemma-three-three-exponent-choice inherited\n  ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop inherited\n  ex-a-piecewise-quadratic-distribution-function-recovers-its-density inherited\n  ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic inherited\n  ex-a-positive-measure-compact-set-can-miss-part-of-every-interval inherited\n  ex-a-power-function-realises-the-duality-norm-on-unit-interval inherited\n  ex-a-proper-smooth-exhaustion-of-euclidean-space inherited\n  ex-a-proper-smooth-exhaustion-of-the-open-unit-ball inherited\n  ex-a-radial-bump-on-euclidean-space      inherited\n  ex-a-rational-function-is-real-analytic-via-a-geometric-series inherited\n  ex-a-regular-value-with-empty-fibre      inherited\n  ex-a-shear-makes-z-one-z-two-regular-in-z-two inherited\n  ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit inherited\n  ex-a-smooth-function-with-a-prescribed-closed-zero-set inherited\n  ex-a-smooth-map-with-a-nonclosed-critical-value-set inherited\n  ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces inherited\n  ex-a-square-corner-has-an-explicit-barrier inherited\n  ex-a-step-function-generates-a-finite-atomic-measure inherited\n  ex-a-surjective-circle-loop-of-degree-zero inherited\n  ex-a-time-dependent-translation-field-and-its-evolution-operator inherited\n  ex-a-two-function-smooth-partition-on-the-circle inherited\n  ex-a-two-point-retract-that-is-not-a-deformation-retract inherited\n  ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum inherited\n  ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes inherited\n  ex-a-uniformly-equicontinuous-family-of-lipschitz-functions inherited\n  ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set inherited\n  ex-a-urysohn-function-on-the-real-line   inherited\n  ex-a-vector-field-with-finite-time-escape inherited\n  ex-a-vector-line-integral-counts-multiple-traversals inherited\n  ex-abel-limit-along-a-nonradial-stolz-approach inherited\n  ex-absolute-value-lipschitz-not-c1       inherited\n  ex-absolutely-convergent-rational-integral-on-the-line inherited\n  ex-ahlfors-proof-yields-the-explicit-bloch-bound-sqrt-three-over-four inherited\n  ex-all-complex-logarithms-of-minus-one   inherited\n  ex-all-values-of-i-to-the-i              inherited\n  ex-alternating-harmonic-power-series-at-the-boundary inherited\n  ex-alternating-harmonic-series-sums-to-log-two inherited\n  ex-an-infinite-separated-subset-of-the-unit-sphere inherited\n  ex-an-interval-endpoint-is-not-a-density-point inherited\n  ex-arctangent-generates-a-borel-probability-measure inherited\n  ex-ascoli-on-a-finite-discrete-domain    inherited\n  ex-baire-sequence-space-and-the-irrationals inherited\n  ex-banach-fixed-point-for-square-roots   inherited\n  ex-bartle-sherbert-bounds-for-pi         inherited\n  ex-basic-plane-subharmonic-functions     inherited\n  ex-bertrand-finite-range-verification    inherited\n  ex-beta-kernel-convergence-rational      inherited\n  ex-beta-one-half-one-half-equals-pi      inherited\n  ex-bidisc-minus-the-origin-is-not-a-domain-of-holomorphy inherited\n  ex-bounded-discontinuous-derivative-that-is-riemann-integrable inherited\n  ex-bounded-functions-on-n-extend-to-beta-n inherited\n  ex-bounded-functions-with-sup-metric-are-complete inherited\n  ex-bounded-order-graph-classes-are-erdos-hajnal inherited\n  ex-bounded-remetrisation-of-r            inherited\n  ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous inherited\n  ex-c-mod-constants-and-oscillation-norm  inherited\n  ex-c-of-a-compact-space-is-banach        inherited\n  ex-c0-is-a-banach-space                  inherited\n  ex-canonical-product-for-zeros-at-the-squares inherited\n  ex-cantor-function-as-riemann-stieltjes-integrator inherited\n  ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous inherited\n  ex-cantor-measure-is-concentrated-on-the-cantor-set inherited\n  ex-cantor-measure-minus-lebesgue-on-zero-one-is-already-in-jordan-form inherited\n  ex-cantor-set-as-a-product               inherited\n  ex-cantor-set-measure-from-the-removed-intervals inherited\n  ex-cantor-slab-has-content-zero          inherited\n  ex-cardinal-functions-of-a-one-point-compactification inherited\n  ex-cardinal-functions-of-the-lower-limit-line inherited\n  ex-cardinal-functions-of-the-real-line   inherited\n  ex-catastrophic-cancellation-and-a-stable-reformulation inherited\n  ex-cauchy-estimates-computed-on-a-bidisc inherited\n  ex-cauchy-integral-formula-computed-on-a-bidisc inherited\n  ex-cauchy-integral-formula-cosine-third-order-pole inherited\n  ex-cauchy-integral-formula-exponential-over-z-minus-one inherited\n  ex-cavalieri-computes-the-area-of-the-unit-disc inherited\n  ex-cavalieri-shear-preserves-jordan-content inherited\n  ex-cayley-transform-biholomorphism-upper-half-plane-to-disc inherited\n  ex-cb-of-a-space-is-banach               inherited\n  ex-change-of-basepoint-isomorphism-for-fundamental-groups inherited\n  ex-choice-free-discontinuous-functional-on-c00 inherited\n  ex-choosing-x-for-the-classical-erdos-hajnal-bound inherited\n  ex-choosing-x-for-the-loglog-erdos-hajnal-bound inherited\n  ex-chordal-distance-formula-from-complex-coordinates inherited\n  ex-circle-as-r-mod-z                     inherited\n  ex-circle-covering-towers-follow-divisibility inherited\n  ex-circle-integral-of-one-over-z-minus-a inherited\n  ex-classification-of-z-plus-one-two-z-and-one-over-z inherited\n  ex-closed-cube-is-totally-bounded        inherited\n  ex-closed-cylinder-as-a-finitely-patched-oriented-surface inherited\n  ex-closed-rays-form-a-borel-generating-pi-system inherited\n  ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets inherited\n  ex-closed-subspaces-of-normal-spaces     inherited\n  ex-closed-unit-interval-has-one-compatible-uniformity inherited\n  ex-collinear-triangle-has-zero-content   inherited\n  ex-commuting-coordinate-fields-and-their-commuting-flows inherited\n  ex-compact-affine-interpolation-family   inherited\n  ex-compact-families-of-constant-maps     inherited\n  ex-compactness-in-the-standard-topologies inherited\n  ex-compatible-p-adic-digit-sequences     inherited\n  ex-complete-and-empty-hereditary-classes-have-constant-one inherited\n  ex-completion-of-borel-dirac-measure     inherited\n  ex-completion-of-q-is-r                  inherited\n  ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere inherited\n  ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form inherited\n  ex-complex-geometric-power-series        inherited\n  ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc inherited\n  ex-complex-sine-is-unbounded-on-the-imaginary-axis inherited\n  ex-componentwise-convergence-and-a-vector-valued-integral-computed inherited\n  ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space inherited\n  ex-conditionally-convergent-step-function-integral inherited\n  ex-connectedness-of-the-standard-topologies inherited\n  ex-constant-vector-fields-and-translation-flows inherited\n  ex-constructing-a-potential-on-an-open-rectangle inherited\n  ex-continuous-argument-along-a-spiralling-contour inherited\n  ex-continuous-functions-on-the-unit-interval-with-the-sup-metric inherited\n  ex-contour-integral-of-conjugation-depends-on-the-path inherited\n  ex-convergence-of-partial-p-adic-expansions inherited\n  ex-convergent-positive-continuous-unbounded-integrand inherited\n  ex-convergent-sequence-with-its-limit-is-compact inherited\n  ex-convex-subsets-of-rn-are-path-connected inherited\n  ex-coordinate-formula-for-a-nonzero-lie-bracket inherited\n  ex-coordinate-inclusions-and-projections-as-immersion-and-submersion inherited\n  ex-coordinate-projections-and-inclusions-on-product-banach-spaces inherited\n  ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence inherited\n  ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared inherited\n  ex-countability-profile-of-omega-one     inherited\n  ex-countability-profile-of-the-lower-limit-plane inherited\n  ex-counting-outer-measure-is-metric-on-the-real-line inherited\n  ex-critical-points-and-values-of-a-height-function-on-a-sphere inherited\n  ex-cubic-polynomial-large-circle-loop-has-degree-three inherited\n  ex-cylinder-and-cone-volume-computations inherited\n  ex-cylinder-and-mobius-band-as-quotients inherited\n  ex-cylindrical-coordinate-jacobian       inherited\n  ex-deck-groups-of-connected-circle-coverings inherited\n  ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts inherited\n  ex-dense-jump-integrand-with-dense-nondifferentiability inherited\n  ex-diagonal-extraction-on-a-disc-for-montels-theorem inherited\n  ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm inherited\n  ex-dini-on-the-unit-interval             inherited\n  ex-dirichlet-series-abscissa-boundaries  inherited\n  ex-disc-automorphism-swapping-two-points inherited\n  ex-discrete-continuous-and-mixed-distribution-functions inherited\n  ex-discrete-metric-compact-iff-finite    inherited\n  ex-distance-function-lattice-is-dense-on-a-compact-metric-space inherited\n  ex-distance-functions-form-a-compact-family-in-c01 inherited\n  ex-distance-to-a-set-is-attained-on-a-compact-set inherited\n  ex-distance-to-the-integers-is-1-lipschitz inherited\n  ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge inherited\n  ex-divisor-function-from-zeta-square     inherited\n  ex-divisor-summatory-error-table         inherited\n  ex-dixon-gluing-traced-on-an-annulus-cycle inherited\n  ex-downward-flux-on-the-graph-z-equals-xy inherited\n  ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc inherited\n  ex-ell-infinity-is-a-banach-space        inherited\n  ex-ellipsoid-as-a-regular-level-set      inherited\n  ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart inherited\n  ex-euclidean-norm-and-squared-norm-are-convex inherited\n  ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds inherited\n  ex-euler-formula-on-a-tree-cycle-and-k-four inherited\n  ex-euler-product-numerically-approximates-zeta-at-two inherited\n  ex-euler-totient-dirichlet-series        inherited\n  ex-evaluation-functional-on-c-of-k       inherited\n  ex-every-closed-subset-of-the-line-is-a-zero-set inherited\n  ex-every-convex-plane-domain-is-simply-connected inherited\n  ex-every-star-shaped-plane-domain-is-simply-connected inherited\n  ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees inherited\n  ex-exp-one-over-z-shows-great-picard-is-sharp inherited\n  ex-explicit-equivalence-constants-for-standard-norms-on-kn inherited\n  ex-exponential-contour-integral-by-riemann-sum-and-parametrization inherited\n  ex-exponential-integral-by-monotone-truncation inherited\n  ex-exponential-over-z-unit-circle-integral-by-series inherited\n  ex-exponential-random-variable-from-its-tail inherited\n  ex-fifth-roots-of-unity                  inherited\n  ex-finite-counting-measure-on-n-points-recovers-rn-p-norms inherited\n  ex-finite-maximum-of-affine-functions-and-its-subdifferential inherited\n  ex-finite-partition-of-unity-on-a-compact-space inherited\n  ex-finite-sequences-c00-with-standard-norms inherited\n  ex-finite-space-function-algebras-interpolate-exactly inherited\n  ex-finite-step-integrator-weighted-jump-sum inherited\n  ex-first-and-second-mertens-numerics     inherited\n  ex-five-colouring-by-a-kempe-swap        inherited\n  ex-flat-exponential-function             inherited\n  ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin inherited\n  ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin inherited\n  ex-fourier-partial-sums-of-the-sawtooth  inherited\n  ex-frattini-quotient-of-zp               inherited\n  ex-free-groups-acting-geometrically-on-regular-trees inherited\n  ex-free-groups-and-their-cantor-boundaries inherited\n  ex-frullani-rational-kernel              inherited\n  ex-fubini-computes-the-integral-of-x-exp-xy inherited\n  ex-fundamental-group-of-the-punctured-plane inherited\n  ex-fundamental-group-of-the-unit-interval inherited\n  ex-fundamental-groupoid                  inherited\n  ex-fundamental-groups-of-once-and-twice-punctured-two-sphere inherited\n  ex-gabriels-horn-has-finite-volume       inherited\n  ex-gabriels-horn-has-unbounded-truncated-lateral-area inherited\n  ex-gamma-and-its-complement-computed-for-a-plane-series inherited\n  ex-gamma-values-at-half-integers-and-negative-half-integers inherited\n  ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely inherited\n  ex-geometric-power-series-and-an-interior-reexpansion inherited\n  ex-geometric-series-reexpanded-about-an-arbitrary-complex-point inherited\n  ex-goursat-four-triangle-boundary-cancellation inherited\n  ex-goursat-triangle-integral-of-z-squared inherited\n  ex-gradient-theorem-for-a-polynomial-potential inherited\n  ex-graph-as-a-regular-level-set          inherited\n  ex-gregory-leibniz-partial-sums-with-certified-error inherited\n  ex-hamel-basis-additive-function         inherited\n  ex-harmonic-complex-power-series-on-the-unit-circle inherited\n  ex-harnack-inequality-for-a-poisson-kernel inherited\n  ex-hartogs-figure-in-modulus-coordinates inherited\n  ex-hat-partition-of-unity-on-the-real-line inherited\n  ex-hawaiian-earring-retracts-onto-each-circle inherited\n  ex-height-on-a-torus-with-four-critical-points inherited\n  ex-height-on-the-sphere-is-a-perfect-morse-function inherited\n  ex-helicoid-model-of-the-logarithm-surface inherited\n  ex-high-girth-high-chromatic-parameter-ledger inherited\n  ex-hilbert-cube                          inherited\n  ex-hilbert-cube-as-a-compact-polish-universal-space inherited\n  ex-holomorphy-of-integral-of-t-to-z      inherited\n  ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence inherited\n  ex-hyperspherical-coordinate-jacobian    inherited\n  ex-improper-substitution-reciprocal      inherited\n  ex-index-of-the-boundary-cycle-of-a-round-annulus inherited\n  ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable inherited\n  ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function inherited\n  ex-initial-interval-indicators-are-one-separated-in-l-infinity inherited\n  ex-integers-acting-geometrically-on-the-line inherited\n  ex-integral-of-x-squared-from-the-definition inherited\n  ex-integral-test-applied-to-the-p-series inherited\n  ex-interior-square-root-singularity      inherited\n  ex-interval-formulas-for-a-function-with-one-jump inherited\n  ex-intervals-and-euclidean-spaces-are-contractible inherited\n  ex-irregular-pentagon-area-by-triangulation-and-shoelace inherited\n  ex-jensen-formula-for-a-polynomial       inherited\n  ex-joukowski-sends-circles-to-ellipses   inherited\n  ex-k-to-the-minus-a-membership-in-ell-p  inherited\n  ex-keyhole-contour-assembly-without-cauchys-theorem inherited\n  ex-keyhole-evaluates-x-alpha-minus-one-over-one-plus-x inherited\n  ex-koebe-function-realizes-the-quarter-disc-bound inherited\n  ex-kuratowski-fourteen-sets              inherited\n  ex-lacunary-factorial-exponent-power-series inherited\n  ex-lagrange-multiplier-on-an-affine-graph inherited\n  ex-lagrange-multipliers-on-the-sphere    inherited\n  ex-lagrange-multipliers-with-two-constraints inherited\n  ex-lateral-area-of-a-right-circular-cone inherited\n  ex-lebesgue-measure-of-a-linear-image-of-the-unit-cube inherited\n  ex-lebesgue-measure-of-intervals-boxes-and-the-rationals inherited\n  ex-lebesgue-number-of-a-two-set-cover    inherited\n  ex-line-segment-and-polygonal-path-length inherited\n  ex-line-segment-scalar-and-vector-line-integrals inherited\n  ex-liouville-dirichlet-series            inherited\n  ex-lipschitz-extension-from-the-rationals inherited\n  ex-local-lemma-hypergraph-parameter-check inherited\n  ex-local-mapping-of-complex-squaring-at-zero-and-one inherited\n  ex-localisation-for-functions-equal-on-an-arc inherited\n  ex-log-modulus-is-harmonic-on-the-punctured-plane inherited\n  ex-log-two-from-four-characterisations   inherited\n  ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i inherited\n  ex-logarithmic-and-exponential-growth-comparisons inherited\n  ex-logarithmic-functions-without-normalisation inherited\n  ex-low-order-hilbert-matrices-have-large-condition-numbers inherited\n  ex-lower-limit-line-is-regular-and-not-metrizable inherited\n  ex-lp-banach-space-dictionary            inherited\n  ex-machin-formula                        inherited\n  ex-maximum-modulus-bound-for-a-polynomial-on-the-unit-disc inherited\n  ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc inherited\n  ex-mean-value-theorem-bounds-the-square-root-increment inherited\n  ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space inherited\n  ex-mittag-leffler-function-with-double-poles-at-the-integers inherited\n  ex-ml-estimate-on-a-semicircle           inherited\n  ex-mobius-map-is-conformal-off-its-pole  inherited\n  ex-mobius-reciprocal-zeta-coefficients   inherited\n  ex-mobius-transformation-from-three-point-correspondence inherited\n  ex-mollifying-the-unit-interval-indicator-at-two-scales inherited\n  ex-monkey-saddle                         inherited\n  ex-morries-law                           inherited\n  ex-niemytzki-plane-metrization-profile   inherited\n  ex-no-square-root-of-p-in-qp             inherited\n  ex-normal-equations-versus-qr-conditioning inherited\n  ex-normalized-riemann-map-for-a-horizontal-strip inherited\n  ex-normalized-riemann-map-for-a-sector-with-branch-choice inherited\n  ex-normalized-riemann-map-for-the-slit-plane inherited\n  ex-normalized-riemann-map-for-the-upper-half-plane-at-i inherited\n  ex-omega-one-is-not-paracompact          inherited\n  ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates inherited\n  ex-one-equals-exp-two-pi-i-logarithm-paradox inherited\n  ex-one-jump-function-generates-a-dirac-mass-at-zero inherited\n  ex-one-over-one-minus-z-one-z-two-extends-from-a-hartogs-figure inherited\n  ex-one-over-square-root-improper-integral inherited\n  ex-one-over-z-not-polynomially-approximable-on-unit-circle inherited\n  ex-one-planar-graph-two-nonisomorphic-duals inherited\n  ex-one-point-compactifications-of-the-line-and-of-the-naturals inherited\n  ex-one-sheeted-hyperboloid-as-a-regular-surface-of-revolution inherited\n  ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable inherited\n  ex-open-euclidean-ball-is-polygonally-connected inherited\n  ex-order-topology                        inherited\n  ex-orientation-reversal-preserves-area-and-negates-flux inherited\n  ex-orthogonal-group-is-a-regular-level-set inherited\n  ex-orthogonal-projection-has-one-borsuk-ulam-pair inherited\n  ex-p-adic-expansion-of-minus-one         inherited\n  ex-p-adic-geometric-series               inherited\n  ex-p-adic-hensel-lifting-a-simple-root   inherited\n  ex-p-metrics-on-rn                       inherited\n  ex-p-norm-comparison-constants-on-r2     inherited\n  ex-p-three-free-graphs-have-much-larger-homogeneous-sets inherited\n  ex-parabola-graph-has-content-zero       inherited\n  ex-parallelepiped-content-from-a-matrix  inherited\n  ex-parallelogram-content-from-a-two-by-two-matrix inherited\n  ex-path-homotopy-through-straight-segments-in-a-convex-set inherited\n  ex-periods-of-a-holomorphic-function-on-an-annulus inherited\n  ex-perron-solution-on-an-annulus-with-radial-data inherited\n  ex-petersen-graph-nonplanar-by-kuratowski inherited\n  ex-picard-iteration-for-y-prime-equals-y inherited\n  ex-poisson-integral-of-cos-theta         inherited\n  ex-poisson-modification-of-a-radial-quadratic-on-a-disc inherited\n  ex-polar-change-of-variables-on-an-annular-sector inherited\n  ex-polar-coordinates-as-a-local-diffeomorphism inherited\n  ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval inherited\n  ex-polynomial-contour-integral-along-a-line-segment inherited\n  ex-polynomial-integrals-by-the-ftc       inherited\n  ex-polynomial-map-total-derivative-and-jacobian inherited\n  ex-polynomials-are-not-complete-in-the-supremum-norm inherited\n  ex-positive-convex-function-that-is-not-log-convex inherited\n  ex-positive-non-log-convex-solution-of-gamma-functional-equation inherited\n  ex-power-map-sends-a-sector-to-a-half-plane inherited\n  ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings inherited\n  ex-power-series-expansion-of-a-geometric-quotient-in-two-variables inherited\n  ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum inherited\n  ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc inherited\n  ex-prime-counting-theta-and-psi-table    inherited\n  ex-principal-logarithm-breaks-additivity-at-minus-one inherited\n  ex-principal-square-root-breaks-multiplicativity-at-minus-one inherited\n  ex-principal-value-of-one-over-x         inherited\n  ex-pro-p-completion-of-a-finite-p-group  inherited\n  ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free inherited\n  ex-projecting-a-space-curve-can-create-a-double-point inherited\n  ex-proper-measurable-subgroups-of-the-line-are-lebesgue-null inherited\n  ex-proportional-functions-realise-the-equality-case-of-holder inherited\n  ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve inherited\n  ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover inherited\n  ex-punctured-line-versus-punctured-plane inherited\n  ex-quadratic-ode-finite-time-blowup      inherited\n  ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm inherited\n  ex-radial-deformation-retraction-of-punctured-rn inherited\n  ex-radial-normalization-retracts-the-punctured-disk-but-not-the-disk inherited\n  ex-radial-r-squared-sine-one-over-r-is-differentiable-with-discontinuous-gradient inherited\n  ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval inherited\n  ex-rational-function-field-order         inherited\n  ex-rational-p-integrals-at-both-endpoints inherited\n  ex-real-gamma-and-beta-special-values    inherited\n  ex-real-line-mod-integer-translations-is-a-covering inherited\n  ex-real-parts-of-z-powers-are-harmonic   inherited\n  ex-real-projective-space-from-affine-charts inherited\n  ex-real-rational-function-with-finite-taylor-radius inherited\n  ex-reciprocal-function-from-the-complex-difference-quotient inherited\n  ex-reduced-qr-least-squares-versus-normal-equations inherited\n  ex-reflection-formula-at-one-half        inherited\n  ex-region-under-x-squared-has-measure-one-third inherited\n  ex-regular-and-nonregular-three-sheeted-wedge-coverings inherited\n  ex-residue-evaluates-cos-over-one-plus-x-squared inherited\n  ex-residue-evaluates-int-one-over-one-plus-x-fourth inherited\n  ex-residue-evaluates-int-one-over-one-plus-x-squared inherited\n  ex-residue-evaluates-sine-over-x-principal-value inherited\n  ex-residue-evaluates-the-basel-sum       inherited\n  ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle inherited\n  ex-residue-of-exp-over-z-cubed-by-derivative-formula inherited\n  ex-residue-of-gamma-at-minus-two         inherited\n  ex-residue-of-p-over-q-at-a-simple-zero  inherited\n  ex-riemann-integrable-function-with-a-nonintegrable-section inherited\n  ex-riemann-integrable-function-with-dense-nonintegrable-sections inherited\n  ex-riemann-stieltjes-integral-on-a-polygonal-contour inherited\n  ex-riemann-stieltjes-polynomial-computation inherited\n  ex-riemann-stieltjes-substitution        inherited\n  ex-rn-as-a-product                       inherited\n  ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs inherited\n  ex-samuel-compactification-of-a-compact-hausdorff-space inherited\n  ex-samuel-compactification-of-discrete-naturals-is-beta-n inherited\n  ex-samuel-compactification-of-the-open-unit-interval inherited\n  ex-samuel-reflection-of-a-nonempty-indiscrete-uniform-space inherited\n  ex-scalar-line-integral-over-a-unit-semicircle inherited\n  ex-scaled-gaussian-parameter-integral    inherited\n  ex-schottky-bound-for-a-map-with-center-value-one-half inherited\n  ex-second-order-multivariable-taylor-polynomial-computed inherited\n  ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space inherited\n  ex-separation-preservation-table         inherited\n  ex-shift-operators-on-classical-sequence-spaces inherited\n  ex-sierpinski-space-is-normal-and-not-completely-regular inherited\n  ex-sierpinski-space-is-t0-normal-and-not-regular inherited\n  ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals inherited\n  ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors inherited\n  ex-sine-harmonic-series-pointwise-not-uniform inherited\n  ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence inherited\n  ex-sine-minus-z-zero-of-order-three      inherited\n  ex-sine-of-xy-and-its-mixed-partials     inherited\n  ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral inherited\n  ex-sine-period-arc-length-as-a-complete-elliptic-integral inherited\n  ex-sine-product-family-is-not-equicontinuous inherited\n  ex-sine-product-recovers-the-basel-sum   inherited\n  ex-sine-sends-a-half-strip-to-the-upper-half-plane inherited\n  ex-singularities-at-infinity-for-polynomials-and-reciprocals inherited\n  ex-smith-volterra-cantor-set-has-lebesgue-measure-one-half inherited\n  ex-smooth-compactly-supported-bump       inherited\n  ex-smooth-dependence-in-an-ode-with-a-parameter inherited\n  ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction inherited\n  ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set inherited\n  ex-sorgenfrey-line                       direct\n  ex-sorgenfrey-plane                      inherited\n  ex-sphere-and-hemisphere-surface-integrals inherited\n  ex-sphere-as-a-regular-level-set         inherited\n  ex-spherical-coordinate-jacobian         inherited\n  ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms inherited\n  ex-square-function-from-the-complex-difference-quotient inherited\n  ex-square-map-sends-a-grid-to-orthogonal-parabolas inherited\n  ex-square-root-continuation-around-the-origin-changes-sign inherited\n  ex-square-root-is-half-holder            inherited\n  ex-square-root-of-minus-one-in-q5        inherited\n  ex-square-summable-coefficient-power-series-on-the-closed-disc inherited\n  ex-standard-quadratic-form-of-each-morse-index inherited\n  ex-steinhaus-follows-from-the-density-theorem inherited\n  ex-steinitz-confinement-worked-in-the-plane inherited\n  ex-step-integrator-evaluates-at-the-jump inherited\n  ex-stereographic-projection-formulas-on-the-unit-sphere inherited\n  ex-stirling-approximation-to-ten-factorial inherited\n  ex-stokes-on-two-patches-spanning-the-same-circle inherited\n  ex-stone-cech-of-a-finite-discrete-space inherited\n  ex-straight-line-homotopy-between-maps-into-rn inherited\n  ex-strip-to-disc-biholomorphism-by-exponential-and-cayley inherited\n  ex-sup-metric-on-bounded-functions       inherited\n  ex-surface-area-of-the-sine-solid-of-revolution inherited\n  ex-surface-groups-as-hyperbolic-groups   inherited\n  ex-symmetric-finite-zero-products-model-the-xi-hadamard-product inherited\n  ex-tangent-basis-change-between-cartesian-and-polar-coordinates inherited\n  ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces inherited\n  ex-the-alexander-subbase-lemma-applied-to-a-closed-interval inherited\n  ex-the-area-form-in-polar-coordinates    inherited\n  ex-the-bidisc-is-holomorphically-convex  inherited\n  ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes inherited\n  ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor inherited\n  ex-the-cayley-graph-and-word-metric-of-the-integers inherited\n  ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r inherited\n  ex-the-circle-from-two-stereographic-charts inherited\n  ex-the-classical-bound-is-subpolynomial  inherited\n  ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation inherited\n  ex-the-closed-unit-box-is-an-elementary-solid-region inherited\n  ex-the-cocountable-topology-in-the-separation-hierarchy inherited\n  ex-the-cofinite-topology-in-the-separation-hierarchy inherited\n  ex-the-compact-open-topology-on-the-continuous-functions-of-the-line inherited\n  ex-the-complex-plane-satisfies-all-grand-equivalence-clauses inherited\n  ex-the-cotangent-pullback-of-a-coordinate-one-form inherited\n  ex-the-deleted-tychonoff-plank-separation-profile inherited\n  ex-the-diagonal-in-the-cofinite-and-cocountable-topologies inherited\n  ex-the-diagonal-of-the-real-line-is-closed inherited\n  ex-the-differential-of-a-constant-map-is-zero inherited\n  ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates inherited\n  ex-the-directional-derivative-of-a-simple-singular-value inherited\n  ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy inherited\n  ex-the-divergence-theorem-on-the-closed-unit-box inherited\n  ex-the-dual-of-ell-two-is-ell-two-by-the-counting-measure-pairing inherited\n  ex-the-empty-and-zero-dimensional-morse-cases inherited\n  ex-the-euclidean-metric-as-a-symmetric-two-tensor inherited\n  ex-the-exhaustion-metric-on-the-unit-disc inherited\n  ex-the-exponential-function-omits-exactly-zero-and-shows-little-picard-is-sharp inherited\n  ex-the-exponential-law-worked-on-the-line inherited\n  ex-the-first-dyadic-levels-of-the-urysohn-construction inherited\n  ex-the-five-cycle-is-not-one-narrow      inherited\n  ex-the-five-vertex-path-is-leaf-reducible inherited\n  ex-the-flow-box-coordinates-for-a-nonconstant-planar-field inherited\n  ex-the-geometric-series-has-only-one-singular-boundary-point inherited\n  ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum inherited\n  ex-the-graph-of-a-continuous-real-function-is-closed inherited\n  ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane inherited\n  ex-the-graph-of-the-sine-function-as-an-embedded-submanifold inherited\n  ex-the-half-interval-integral-functional-has-norm-two-to-the-minus-one-over-q inherited\n  ex-the-harmonic-oscillator-as-a-first-order-system inherited\n  ex-the-hawaiian-earring-has-no-universal-cover inherited\n  ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc inherited\n  ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc inherited\n  ex-the-homeomorphism-x-plus-cx-carries-the-cantor-set-to-a-measure-one-compact-set inherited\n  ex-the-identity-function-generates-lebesgue-measure inherited\n  ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers inherited\n  ex-the-integers-are-quasi-isometric-to-the-real-line inherited\n  ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set inherited\n  ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact inherited\n  ex-the-inverse-contour-formula-recovers-a-local-inverse-value inherited\n  ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case inherited\n  ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure inherited\n  ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r inherited\n  ex-the-loglog-bound-is-still-subpolynomial inherited\n  ex-the-long-line-in-the-connectedness-hierarchy inherited\n  ex-the-lower-limit-line-and-plane-separation-profile inherited\n  ex-the-metric-urysohn-function-costs-no-choice inherited\n  ex-the-mobius-band-presented-by-two-regular-patches inherited\n  ex-the-mobius-line-bundle-from-a-transition-function inherited\n  ex-the-moving-spike-family-in-the-three-topologies inherited\n  ex-the-n-sphere-with-its-standard-smooth-atlas inherited\n  ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial inherited\n  ex-the-ordinal-spaces-omega-plus-one-and-omega-one inherited\n  ex-the-oscillating-zigzag-curve-computed inherited\n  ex-the-parallelogram-law-on-two-indicator-functions-in-l-two inherited\n  ex-the-particular-point-topology-in-the-separation-hierarchy inherited\n  ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path inherited\n  ex-the-planar-divergence-theorem-on-a-rectangle inherited\n  ex-the-profinite-completion-of-a-finite-group inherited\n  ex-the-profinite-completion-of-the-integers inherited\n  ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial inherited\n  ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals inherited\n  ex-the-radial-vector-field-and-dilation-flow inherited\n  ex-the-rationals-are-totally-disconnected-and-not-discrete inherited\n  ex-the-right-circular-cylinder-is-an-elementary-solid-region inherited\n  ex-the-rotation-vector-field-and-circle-flow inherited\n  ex-the-same-sequence-in-real-and-p-adic-metrics inherited\n  ex-the-singleton-family-p-three-is-viral inherited\n  ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm inherited\n  ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not inherited\n  ex-the-special-linear-group-as-a-regular-level-set inherited\n  ex-the-sphere-and-its-two-sided-normal-tube inherited\n  ex-the-standard-circle-and-its-annular-tubular-neighbourhood inherited\n  ex-the-standard-compactly-supported-bump-on-the-line inherited\n  ex-the-tangent-and-cotangent-bundles-as-vector-bundles inherited\n  ex-the-tangent-bundle-of-euclidean-space-is-trivial inherited\n  ex-the-tangent-bundle-of-the-circle-is-a-cylinder inherited\n  ex-the-tangent-bundle-of-the-circle-is-trivial inherited\n  ex-the-tangent-space-of-euclidean-space  inherited\n  ex-the-tangent-space-of-the-sphere-from-curve-velocities inherited\n  ex-the-tautological-line-bundle-over-real-projective-space inherited\n  ex-the-torus-as-a-product-smooth-manifold inherited\n  ex-the-trivial-line-bundle-and-its-sections-as-functions inherited\n  ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space inherited\n  ex-the-unit-ball-family-is-normal-on-any-domain inherited\n  ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one inherited\n  ex-the-unit-disc-extremal-problem-is-solved-by-the-identity inherited\n  ex-the-unit-disc-satisfies-all-grand-equivalence-clauses inherited\n  ex-the-unit-loop-in-real-line-mod-integers-is-essential inherited\n  ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field inherited\n  ex-third-mertens-product-numerics        inherited\n  ex-tietze-extension-from-a-closed-interval-of-the-line inherited\n  ex-topological-generation-in-zp-squared  inherited\n  ex-torus-as-a-quotient-of-the-square     inherited\n  ex-torus-surface-area                    inherited\n  ex-torus-volume-by-washers               inherited\n  ex-translated-tent-functions-converge-in-the-compact-open-topology inherited\n  ex-transverse-and-tangent-intersections-of-plane-curves inherited\n  ex-triangle-area-by-determinant-and-base-height inherited\n  ex-triangle-has-jordan-content-one-half  inherited\n  ex-trigonometric-circle-loops-have-their-integer-degrees inherited\n  ex-trigonometric-identities-worked-at-pi-over-twelve inherited\n  ex-trigonometric-integral-one-over-a-plus-cos-theta inherited\n  ex-trigonometric-polynomials-are-dense-on-the-circle inherited\n  ex-truncated-svd-denoising-on-a-diagonal-problem inherited\n  ex-two-adic-square-test                  inherited\n  ex-two-by-two-systems-with-contrasting-condition-numbers inherited\n  ex-two-contiguous-maps-of-a-subdivided-interval inherited\n  ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal inherited\n  ex-two-equation-implicit-system          inherited\n  ex-two-gauge-choices-give-different-eigenvector-derivatives inherited\n  ex-two-normalizations-give-the-same-lebesgue-stieltjes-measure inherited\n  ex-two-point-duplication-algebra-and-its-quotient inherited\n  ex-two-root-x-and-its-unbounded-derivative inherited\n  ex-two-sheeted-model-of-the-square-root-surface inherited\n  ex-two-to-sqrt-two-by-two-real-power-constructions inherited\n  ex-unbounded-derivative-evaluated-by-henstock-kurzweil inherited\n  ex-unbounded-integrand-stieltjes-integrable inherited\n  ex-uncountable-cantor-cube-uniformizable-not-first-countable inherited\n  ex-uncountable-discrete-space-meets-bing-not-urysohn inherited\n  ex-unequal-iterated-improper-integrals-on-the-unit-square inherited\n  ex-uniform-random-variable-on-zero-one   inherited\n  ex-unit-ball-volumes-through-five-from-slicing inherited\n  ex-unit-box-volume-and-integral          inherited\n  ex-unit-circle-arc-has-length-theta      inherited\n  ex-unit-circle-implicit-function-theorem inherited\n  ex-unit-circle-pi-calibration-table      inherited\n  ex-unit-disc-has-jordan-content-pi       inherited\n  ex-unit-hyperbolic-area-brackets-e       inherited\n  ex-unit-n-ball-volumes-through-eight-from-gamma inherited\n  ex-usual-metric-uniformity-on-r          inherited\n  ex-v-shaped-path-is-rectifiable-but-not-c1 inherited\n  ex-vandermonde-conditioning-improves-after-centering-and-scaling inherited\n  ex-viete-first-nested-radical-approximants inherited\n  ex-volume-of-a-solid-of-revolution-by-cylindrical-shells inherited\n  ex-volume-of-the-sine-solid-of-revolution inherited\n  ex-von-mangoldt-divisor-sum              inherited\n  ex-wallis-partial-products-and-integral-bounds inherited\n  ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one inherited\n  ex-weierstrass-function-with-one-half-and-fifteen inherited\n  ex-winding-number-of-a-figure-eight-cycle inherited\n  ex-winding-number-of-the-unit-circle-traversed-three-times inherited\n  ex-winding-numbers-of-a-keyhole-contour  inherited\n  ex-x-sine-of-one-over-x-tends-to-zero    inherited\n  ex-x-squared-sine-of-one-over-x-is-differentiable inherited\n  ex-x-squared-sine-of-one-over-x-squared  inherited\n  ex-x-to-the-beta-separates-the-holder-classes direct\n  ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership inherited\n  ex-x-to-the-minus-one-half-is-unbounded-but-integrable inherited\n  ex-x-to-x-tends-to-one                   inherited\n  ex-x-xy-has-nonconstant-rank-on-every-neighborhood-of-origin inherited\n  ex-x-xy-is-a-diffeomorphism-off-the-axis inherited\n  ex-xy-sine-one-over-radius-squared-has-unbounded-partial-derivatives inherited\n  ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function inherited\n  ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two inherited\n  ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc inherited\n  ex-z-n-acting-geometrically-on-euclidean-n-space inherited\n  ex-z-one-over-one-minus-z-one-z-two-extends-across-the-punctured-bidisc inherited\n  ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared inherited\n  ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane inherited\n  ex-zeta-four-equals-pi-to-the-four-over-ninety inherited\n  ex-zeta-minus-two-vanishes-by-the-sine-factor inherited\n  ex-zeta-zero-equals-minus-one-half       inherited\n  fs-a-bijective-smooth-map-is-a-diffeomorphism inherited\n  fs-a-bounded-plane-set-has-an-area       inherited\n  fs-a-c-one-bijection-has-a-c-one-inverse inherited\n  fs-a-chart-domain-is-an-open-subset-of-euclidean-space inherited\n  fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity inherited\n  fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness inherited\n  fs-a-compact-subset-is-closed-in-every-space inherited\n  fs-a-connected-space-is-locally-connected inherited\n  fs-a-connected-space-is-path-connected   inherited\n  fs-a-continuous-function-is-differentiable-somewhere inherited\n  fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph inherited\n  fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends inherited\n  fs-a-convex-function-is-differentiable   inherited\n  fs-a-convex-function-on-a-convex-set-is-continuous inherited\n  fs-a-critical-value-has-a-singular-level-set inherited\n  fs-a-dense-set-of-outer-measure-zero-and-a-dense-set-of-full-inner-measure-cannot-coexist inherited\n  fs-a-differentiable-function-has-a-continuous-derivative inherited\n  fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface inherited\n  fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth inherited\n  fs-a-finite-patch-presentation-can-always-be-oriented-compatibly inherited\n  fs-a-function-with-closed-graph-is-continuous inherited\n  fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map inherited\n  fs-a-lebesgue-measurable-set-with-empty-interior-is-lebesgue-null inherited\n  fs-a-local-ode-solution-exists-on-the-whole-domain-of-the-vector-field inherited\n  fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective inherited\n  fs-a-maximal-ode-solution-has-a-closed-interval-domain inherited\n  fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity inherited\n  fs-a-nonconstant-meromorphic-function-on-the-plane-omits-at-most-one-sphere-value inherited\n  fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero inherited\n  fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums inherited\n  fs-a-pointwise-bounded-sequence-of-continuous-functions-has-a-uniformly-convergent-subsequence inherited\n  fs-a-pointwise-limit-of-continuous-functions-need-not-be-continuous-ae inherited\n  fs-a-positive-semidefinite-hessian-gives-strict-convexity inherited\n  fs-a-quasi-isometry-is-continuous-or-bijective inherited\n  fs-a-regular-value-must-belong-to-the-image inherited\n  fs-a-retract-must-be-a-deformation-retract inherited\n  fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting inherited\n  fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p inherited\n  fs-a-totally-disconnected-space-is-discrete inherited\n  fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure inherited\n  fs-absolute-value-measurable-does-not-imply-measurability inherited\n  fs-absolute-value-passes-through-a-contour-integral inherited\n  fs-additive-implies-linear               inherited\n  fs-ae-equality-with-a-measurable-function-does-not-imply-measurability inherited\n  fs-all-infinite-finitely-generated-groups-are-quasi-isometric inherited\n  fs-all-norms-on-any-real-vector-space-are-equivalent inherited\n  fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable inherited\n  fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding inherited\n  fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth inherited\n  fs-an-arbitrary-supremum-of-measurable-functions-need-not-be-measurable inherited\n  fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity inherited\n  fs-an-intersection-of-connected-sets-is-connected inherited\n  fs-an-open-c-one-map-has-invertible-derivative inherited\n  fs-any-positive-zero-of-sine-characterizes-pi inherited\n  fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas inherited\n  fs-arbitrary-intersection-of-opens-is-open-top inherited\n  fs-arbitrary-product-of-open-sets-is-open inherited\n  fs-arzela-ascoli-alone-proves-montel     inherited\n  fs-boundary-maximum-modulus-principle-on-unbounded-domains inherited\n  fs-bounded-implies-totally-bounded       inherited\n  fs-boundedness-is-a-topological-property inherited\n  fs-c-c-of-rn-is-dense-in-l-infinity-of-rn inherited\n  fs-cauchy-implies-convergent-in-every-metric-space inherited\n  fs-cauchy-riemann-at-a-point-implies-complex-differentiability inherited\n  fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy inherited\n  fs-chart-compatibility-needs-only-one-smooth-transition-direction inherited\n  fs-circumference-to-radius-ratio-is-pi   inherited\n  fs-closed-and-bounded-implies-compact-in-every-metric-space inherited\n  fs-closed-ball-is-the-closure-of-the-open-ball inherited\n  fs-cobounded-and-cocompact-are-unconditionally-identical inherited\n  fs-compact-implies-sequentially-compact  inherited\n  fs-completeness-is-a-topological-property inherited\n  fs-complex-sine-and-cosine-are-bounded   inherited\n  fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension inherited\n  fs-composing-a-lebesgue-measurable-function-with-a-continuous-map-need-not-preserve-measurability inherited\n  fs-conformal-equivalence-preserves-euclidean-area inherited\n  fs-conformal-maps-preserve-euclidean-lengths inherited\n  fs-connected-complement-in-c-implies-simple-connectivity inherited\n  fs-connected-subsets-of-rn-are-polygonally-connected inherited\n  fs-constant-rank-at-one-point-implies-constant-rank-nearby inherited\n  fs-continuation-along-same-endpoint-paths-always-agrees inherited\n  fs-continuity-alone-suffices-for-the-regular-surface-area-formula inherited\n  fs-continuity-implies-uniform-continuity inherited\n  fs-continuity-of-the-derivative-implies-constant-rank inherited\n  fs-continuity-of-the-right-hand-side-guarantees-unique-ode-solutions inherited\n  fs-continuous-dependence-alone-implies-differentiable-dependence inherited\n  fs-continuous-images-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable inherited\n  fs-continuous-preimages-of-lebesgue-measurable-subsets-of-r-are-lebesgue-measurable inherited\n  fs-contour-length-is-the-length-of-its-trace inherited\n  fs-convergence-at-one-noncentral-point-forces-entire-convergence inherited\n  fs-convolution-is-measurable-for-every-lebesgue-representative inherited\n  fs-countably-compact-implies-compact     inherited\n  fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple inherited\n  fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence inherited\n  fs-entire-bounded-on-real-axis-is-constant inherited\n  fs-entire-order-equals-canonical-genus   inherited\n  fs-equal-cross-sections-force-congruence inherited\n  fs-equivalent-metrics-share-cauchy-sequences inherited\n  fs-every-abelian-group-is-hyperbolic     inherited\n  fs-every-atomless-borel-measure-on-r-has-a-density inherited\n  fs-every-baire-space-is-completely-metrizable inherited\n  fs-every-boundary-point-of-a-radius-one-power-series-is-singular inherited\n  fs-every-bounded-plane-domain-has-a-dirichlet-solution inherited\n  fs-every-closed-c1-field-on-a-connected-open-set-is-exact inherited\n  fs-every-compact-path-connected-planar-set-has-a-universal-cover inherited\n  fs-every-compact-solid-has-a-volume      inherited\n  fs-every-continuous-complex-function-on-a-domain-has-a-primitive inherited\n  fs-every-continuous-function-on-a-convex-domain-has-a-primitive inherited\n  fs-every-continuous-partition-of-unity-on-a-smooth-manifold-is-smooth inherited\n  fs-every-continuous-self-map-of-the-circle-is-nullhomotopic inherited\n  fs-every-critical-point-is-an-isolated-point inherited\n  fs-every-cycle-in-a-connected-plane-domain-is-null-homologous inherited\n  fs-every-derivative-is-riemann-integrable inherited\n  fs-every-domain-in-c-n-is-a-domain-of-holomorphy inherited\n  fs-every-domain-in-c-two-is-a-domain-of-holomorphy inherited\n  fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold inherited\n  fs-every-entire-function-with-antiderivative-is-polynomial inherited\n  fs-every-fundamental-group-is-abelian    inherited\n  fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change inherited\n  fs-every-hausdorff-compactification-is-stone-cech inherited\n  fs-every-hausdorff-locally-euclidean-space-is-a-manifold inherited\n  fs-every-hausdorff-space-is-regular      inherited\n  fs-every-hereditary-class-is-erdos-hajnal inherited\n  fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary inherited\n  fs-every-injective-immersion-is-a-proper-embedding inherited\n  fs-every-injective-immersion-is-an-embedding inherited\n  fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n inherited\n  fs-every-lebesgue-measurable-set-is-a-borel-set inherited\n  fs-every-level-set-of-a-smooth-map-is-a-graph inherited\n  fs-every-linear-functional-on-smooth-germs-is-a-tangent-vector inherited\n  fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure inherited\n  fs-every-metrizable-space-is-cech-complete inherited\n  fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism inherited\n  fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood inherited\n  fs-every-normal-space-is-completely-regular inherited\n  fs-every-normal-space-is-hausdorff       inherited\n  fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field inherited\n  fs-every-profinite-group-is-pro-p-for-some-prime inherited\n  fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n inherited\n  fs-every-regular-space-is-metrizable     inherited\n  fs-every-regular-space-is-normal         inherited\n  fs-every-riemann-integrable-function-is-borel-measurable inherited\n  fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff inherited\n  fs-every-smooth-manifold-is-compact      inherited\n  fs-every-smooth-map-of-the-plane-is-real-analytic inherited\n  fs-every-smooth-vector-field-is-complete inherited\n  fs-every-smooth-vector-field-on-euclidean-space-is-complete inherited\n  fs-every-subset-of-r-is-borel            inherited\n  fs-every-subset-of-r-is-lebesgue-measurable inherited\n  fs-every-t1-space-is-hausdorff           inherited\n  fs-every-topology-is-metrizable          inherited\n  fs-every-vector-bundle-is-globally-trivial inherited\n  fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map inherited\n  fs-evt-holds-on-every-bounded-domain     inherited\n  fs-finite-volume-implies-finite-lateral-surface-area inherited\n  fs-flux-is-independent-of-the-parametrization inherited\n  fs-gamma-extends-to-the-nonpositive-integers inherited\n  fs-gamma-is-entire                       inherited\n  fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma inherited\n  fs-goursats-theorem-requires-continuity-of-the-derivative inherited\n  fs-heine-borel-holds-in-every-normed-space inherited\n  fs-henstock-kurzweil-integrable-functions-are-bounded inherited\n  fs-holder-equality-forces-the-functions-themselves-to-be-proportional inherited\n  fs-homotopy-equivalent-spaces-are-homeomorphic inherited\n  fs-injective-real-differentiable-map-has-nonzero-jacobian inherited\n  fs-integration-by-parts-needs-no-integrability-hypothesis inherited\n  fs-invertible-derivative-at-a-point-gives-a-local-inverse inherited\n  fs-invertible-derivative-everywhere-gives-a-global-inverse inherited\n  fs-l-one-convolution-is-defined-at-every-point inherited\n  fs-l-one-half-with-its-p-functional-is-a-normed-space inherited\n  fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r inherited\n  fs-l-p-of-every-measure-space-is-separable-for-finite-p inherited\n  fs-large-arc-vanishing-follows-from-pointwise-decay-alone inherited\n  fs-lebesgue-outer-measure-equals-jordan-outer-content-for-bounded-sets inherited\n  fs-lebesgue-stieltjes-measures-determine-the-distribution-function-without-normalization inherited\n  fs-lebesgue-stieltjes-measures-have-zero-point-masses inherited\n  fs-lindelofness-is-hereditary            inherited\n  fs-lindelofness-is-productive            inherited\n  fs-little-picard-needs-a-boundedness-hypothesis inherited\n  fs-local-compactness-is-hereditary       inherited\n  fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points inherited\n  fs-local-lipschitz-continuity-is-necessary-for-ode-uniqueness inherited\n  fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set inherited\n  fs-maximum-modulus-principle-without-connectedness inherited\n  fs-measurable-level-sets-do-not-imply-measurability inherited\n  fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts inherited\n  fs-minimum-modulus-principle-without-nonvanishing inherited\n  fs-normality-means-sequential-limits-stay-inside-the-family inherited\n  fs-one-existing-iterated-integral-guarantees-multiple-riemann-integrability inherited\n  fs-one-variable-isolated-singularity-theory-has-a-several-variable-analogue inherited\n  fs-paracompactness-is-hereditary         inherited\n  fs-paracompactness-is-productive         inherited\n  fs-parametrization-independence-includes-orientation-reversal inherited\n  fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets inherited\n  fs-pointwise-limit-of-riemann-integrable-is-integrable inherited\n  fs-premeasure-extensions-are-always-unique inherited\n  fs-principal-value-convergence-implies-improper-convergence inherited\n  fs-product-of-complete-measure-spaces-is-complete inherited\n  fs-product-topology-equals-box-topology  inherited\n  fs-projections-are-closed-maps           inherited\n  fs-proper-action-means-every-orbit-is-bounded inherited\n  fs-punctured-domain-functions-must-be-unbounded inherited\n  fs-quotient-map-is-open                  inherited\n  fs-quotient-of-a-hausdorff-space-is-hausdorff inherited\n  fs-real-differentiability-implies-complex-differentiability inherited\n  fs-residue-theorem-applies-to-any-cycle-in-the-domain inherited\n  fs-riemann-map-is-unique-without-normalization inherited\n  fs-riemann-zeta-is-entire                inherited\n  fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one inherited\n  fs-runge-gives-polynomial-approximation-on-any-compact-set inherited\n  fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions inherited\n  fs-schwarz-lemma-holds-without-a-fixed-point-at-zero inherited\n  fs-separate-holomorphy-can-fail-to-imply-local-boundedness inherited\n  fs-separately-real-analytic-functions-are-jointly-continuous inherited\n  fs-sequentially-compact-implies-compact  inherited\n  fs-sequentially-continuous-implies-continuous inherited\n  fs-several-variable-identity-theorem-from-an-accumulation-point inherited\n  fs-simply-connected-plane-domains-are-convex inherited\n  fs-simply-connected-plane-domains-are-star-shaped inherited\n  fs-sin-x-over-x-by-sector-areas          inherited\n  fs-spherical-coordinates-are-globally-injective inherited\n  fs-stokes-needs-the-surface-to-be-a-graph inherited\n  fs-strict-contraction-has-a-fixed-point  inherited\n  fs-strict-convexity-gives-a-positive-definite-hessian inherited\n  fs-substitution-holds-for-every-integrable-integrand inherited\n  fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas inherited\n  fs-the-argument-principle-counts-zeros-without-multiplicity inherited\n  fs-the-canonical-map-to-profinite-completion-is-always-injective inherited\n  fs-the-closure-of-a-path-connected-set-is-path-connected inherited\n  fs-the-compact-open-topology-is-always-metrizable inherited\n  fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions inherited\n  fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle inherited\n  fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism inherited\n  fs-the-differential-of-a-smooth-map-is-its-jacobian-matrix inherited\n  fs-the-evaluation-map-is-always-continuous inherited\n  fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle inherited\n  fs-the-functional-equation-alone-characterizes-zeta inherited\n  fs-the-functional-equation-determines-gamma inherited\n  fs-the-holomorphic-inverse-function-theorem-is-global inherited\n  fs-the-image-of-every-immersion-is-an-embedded-submanifold inherited\n  fs-the-integral-function-is-always-a-primitive inherited\n  fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology inherited\n  fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field inherited\n  fs-the-mean-value-equality-holds-for-vector-valued-maps inherited\n  fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric inherited\n  fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm inherited\n  fs-the-perron-envelope-always-attains-the-boundary-data inherited\n  fs-the-piecewise-function-exp-minus-one-over-t-is-analytic-at-zero inherited\n  fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic inherited\n  fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p inherited\n  fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold inherited\n  fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra inherited\n  fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space inherited\n  fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks inherited\n  fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function inherited\n  fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness inherited\n  fs-the-rational-numbers-form-a-baire-space inherited\n  fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space inherited\n  fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane inherited\n  fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared inherited\n  fs-the-same-delta-works-after-every-change-of-generating-set inherited\n  fs-the-set-of-critical-values-is-always-closed inherited\n  fs-the-tangent-space-is-defined-only-after-embedding-the-manifold-in-euclidean-space inherited\n  fs-the-tubular-neighbourhood-retraction-is-canonical inherited\n  fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy inherited\n  fs-the-unit-n-ball-volume-increases-with-dimension inherited\n  fs-the-wedge-product-is-commutative      inherited\n  fs-there-is-a-measurable-set-with-density-one-half-in-every-interval inherited\n  fs-totally-bounded-implies-compact       inherited\n  fs-translation-is-continuous-in-l-infinity inherited\n  fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology inherited\n  fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal inherited\n  fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic inherited\n  fs-two-narrow-implies-one-narrow         inherited\n  fs-two-submanifolds-with-nonempty-intersection-are-transverse inherited\n  fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold inherited\n  fs-unique-sequential-limits-imply-hausdorff inherited\n  fs-van-kampen-with-disconnected-intersection inherited\n  fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent inherited\n  fs-vector-line-integrals-are-invariant-under-reversal inherited\n  fs-weierstrass-factorization-is-unique   inherited\n  fs-weierstrass-preparation-is-unique-without-the-unit-condition inherited\n  fs-winding-number-depends-only-on-the-trace inherited\n  fs-zero-complex-derivative-on-an-open-set-implies-constant inherited\n  fs-zero-derivative-on-an-open-set-forces-constancy inherited\n  fs-zero-integral-forces-everywhere-zero  inherited\n  fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on inherited\n  fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite inherited\n  fs-zp-is-cyclic-as-an-abstract-group     inherited\n  fs-zp-is-the-profinite-completion-of-z   inherited\n  lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets inherited\n  lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff inherited\n  lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism inherited\n  lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking inherited\n  lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data inherited\n  lem-a-derivation-annihilates-constant-germs inherited\n  lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function inherited\n  lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood inherited\n  lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space inherited\n  lem-a-generic-linear-projection-preserves-injectivity-and-immersion inherited\n  lem-a-generic-projection-can-preserve-properness inherited\n  lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit inherited\n  lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph inherited\n  lem-a-large-set-contains-a-pattern-when-the-homogeneous-number-is-small inherited\n  lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure inherited\n  lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit inherited\n  lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube inherited\n  lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands inherited\n  lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family inherited\n  lem-a-uniformly-approximable-real-valued-map-is-continuous inherited\n  lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed inherited\n  lem-a-vector-line-integral-pulls-back-to-the-parameter-region inherited\n  lem-abel-summation-for-complex-series    inherited\n  lem-absolutely-convergent-series-is-cauchy inherited\n  lem-alexandroff-urysohn-metrization-lemma inherited\n  lem-algebra-of-continuous-real-maps-on-a-space inherited\n  lem-algebra-operations-on-smooth-germs-are-representative-independent inherited\n  lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas inherited\n  lem-alternating-kempe-paths-cannot-both-occur inherited\n  lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs inherited\n  lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology inherited\n  lem-antipodal-circle-map-has-odd-lift-increment inherited\n  lem-antipodal-sphere-cover               inherited\n  lem-arc-length-function-is-continuous-and-nondecreasing inherited\n  lem-basic-properties-of-the-holomorphic-hull inherited\n  lem-bloch-rescaling-at-an-almost-maximal-derivative inherited\n  lem-bohr-mollerup-factorial-squeeze      inherited\n  lem-borel-representatives-make-the-convolution-integrand-borel-measurable inherited\n  lem-boundary-of-a-solid-between-continuous-graphs-has-content-zero inherited\n  lem-boundary-point-whose-complementary-component-contains-another-point-is-regular inherited\n  lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures inherited\n  lem-bounded-open-jordan-sets-have-compact-grid-exhaustions inherited\n  lem-bounded-punctured-slice-has-holomorphic-parameter-extension inherited\n  lem-bounded-remetrisation                inherited\n  lem-bounded-strip-maximum-principle      inherited\n  lem-bounded-variation-gives-one-sided-dirichlet-integrability inherited\n  lem-box-volume-is-additive-over-grid-subdivisions inherited\n  lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands inherited\n  lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets inherited\n  lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets inherited\n  lem-c-one-images-of-content-zero-compact-sets-have-content-zero inherited\n  lem-c1-local-diffeomorphisms-preserve-null-sets-locally inherited\n  lem-canonical-compact-exhaustion-of-a-plane-domain inherited\n  lem-cauchy-difference-quotient-exceptional-extension inherited\n  lem-cauchy-estimates-on-concentric-subdiscs inherited\n  lem-cauchy-estimates-propagate-to-holomorphic-hulls inherited\n  lem-cauchy-product-of-absolutely-convergent-complex-series inherited\n  lem-cauchy-riemann-sums-give-rational-approximation inherited\n  lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace inherited\n  lem-change-of-variables-with-a-degenerate-parameter-boundary inherited\n  lem-chart-bump-at-a-point-with-prescribed-support inherited\n  lem-chart-independence-of-c-r-smoothness inherited\n  lem-chebyshev-functions-prime-power-comparison inherited\n  lem-chebyshev-psi-prime-power-expansion  inherited\n  lem-circle-loops-of-equal-degree-are-path-homotopic inherited\n  lem-clairaut-for-c2-potentials-by-rectangular-differences inherited\n  lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure inherited\n  lem-closed-subspace-of-a-banach-space-is-banach inherited\n  lem-compact-closed-balls-in-a-locally-compact-metric-space inherited\n  lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice inherited\n  lem-compact-local-homeomorphism-surjective-with-finite-fibres inherited\n  lem-compact-metric-space-has-a-countable-dense-subset inherited\n  lem-compact-null-iff-content-zero-in-rn  inherited\n  lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set inherited\n  lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p inherited\n  lem-compactly-supported-riemann-integral-is-well-defined inherited\n  lem-complete-regularity-is-hereditary    inherited\n  lem-complete-remetrisation               inherited\n  lem-complete-subspace-is-closed          inherited\n  lem-completely-regular-topologies-come-from-continuous-pseudometrics inherited\n  lem-completion-operations-are-well-defined inherited\n  lem-complex-exponential-series-converges-everywhere inherited\n  lem-complex-linear-real-differential-criterion inherited\n  lem-complex-polynomial-growth-and-minimum-modulus inherited\n  lem-complex-power-series-reexpansion-double-series inherited\n  lem-composition-operator-norm-inequality inherited\n  lem-connected-spherical-complement-implies-null-homology inherited\n  lem-constant-rank-source-coordinate-map-is-locally-invertible inherited\n  lem-constant-rank-tail-components-ignore-kernel-coordinates inherited\n  lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade inherited\n  lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation inherited\n  lem-contiguous-simplicial-maps-have-homotopic-realizations inherited\n  lem-continuous-compactly-supported-functions-differentiate-by-ball-averages inherited\n  lem-continuous-function-holomorphic-off-a-point-is-holomorphic inherited\n  lem-contour-subdivision-into-discs-missing-a-point inherited\n  lem-contractibility-implies-trivial-fundamental-group inherited\n  lem-convex-function-bound-on-an-interior-cube inherited\n  lem-convex-set-and-closure-have-same-interior-and-boundary inherited\n  lem-convolution-is-independent-of-the-chosen-borel-representatives inherited\n  lem-coordinate-balls-form-a-basis-of-a-topological-manifold inherited\n  lem-coordinate-change-congruence-for-the-critical-hessian inherited\n  lem-coordinate-derivations-are-well-defined-derivations inherited\n  lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant inherited\n  lem-coordinate-telescoping-on-a-euclidean-ball inherited\n  lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group inherited\n  lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian inherited\n  lem-countable-intersection-of-completely-metrizable-subspaces inherited\n  lem-countably-compact-paracompact-hausdorff-is-compact inherited\n  lem-covering-basepoint-change-conjugates-subgroup inherited\n  lem-critical-hessian-agrees-with-the-levi-civita-hessian inherited\n  lem-cross-product-is-bilinear-alternating-and-orthogonal inherited\n  lem-curl-is-the-antisymmetric-part-of-the-total-derivative inherited\n  lem-curve-velocity-depends-only-on-the-contact-class inherited\n  lem-cy-restricted-generalized-niceness-yields-three-outcomes inherited\n  lem-cyclic-coordinate-permutations-preserve-integrals-in-r3 inherited\n  lem-dalembert-minimum-modulus-descent    inherited\n  lem-deck-transformations-correspond-to-normalizer-cosets inherited\n  lem-definite-quadratic-forms-have-a-uniform-sphere-bound inherited\n  lem-deleted-tychonoff-plank-is-regular-and-nonnormal inherited\n  lem-dependent-choice-riesz-separated-unit-sequence inherited\n  lem-derivatives-along-a-line-have-the-multinomial-expansion inherited\n  lem-derived-complex-power-series-has-the-same-radius inherited\n  lem-determinant-base-height-identity-in-r2 inherited\n  lem-differentiating-cauchy-integrals     inherited\n  lem-distance-to-set-is-lipschitz         inherited\n  lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules inherited\n  lem-dixon-entire-gluing                  inherited\n  lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation inherited\n  lem-dyadic-cubes-of-one-generation-partition-rn inherited\n  lem-edge-maximal-kuratowski-free-is-three-connected inherited\n  lem-elementary-duality-formula-for-nonnegative-l-p-functions inherited\n  lem-elementary-sets-admit-compact-inner-and-open-outer-approximations inherited\n  lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes inherited\n  lem-equal-plane-face-boundaries-force-a-cycle inherited\n  lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions inherited\n  lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness inherited\n  lem-equicontinuity-on-a-compact-domain-is-uniform inherited\n  lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence inherited\n  lem-equicontinuous-families-have-finite-sup-nets inherited\n  lem-erdos-hajnal-constants-are-downward-closed inherited\n  lem-euclidean-balls-have-positive-finite-lebesgue-measure inherited\n  lem-euclidean-bump-for-a-compact-set-inside-an-open-set inherited\n  lem-euclidean-linear-maps-have-matrices-and-are-bounded inherited\n  lem-euclidean-polygonal-paths-are-continuous inherited\n  lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous inherited\n  lem-every-manifold-has-a-compact-exhaustion inherited\n  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric inherited\n  lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it inherited\n  lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section inherited\n  lem-exponential-dominates-one-plus-x     inherited\n  lem-face-containment-under-plane-subgraphs inherited\n  lem-few-induced-copies-is-inherited-by-large-induced-subgraphs inherited\n  lem-finite-binary-digit-changes-do-not-alter-zero-one-measure inherited\n  lem-finite-circle-wedge-open-cover       inherited\n  lem-finite-cube-covers-admit-grid-control inherited\n  lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point inherited\n  lem-finite-jordan-cover-sum-bounds       inherited\n  lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities inherited\n  lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess inherited\n  lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes inherited\n  lem-finite-minima-of-continuous-unit-interval-maps inherited\n  lem-finite-product-norms-are-equivalent  inherited\n  lem-finite-refining-small-diameter-covers-of-compact-metric-spaces inherited\n  lem-finite-sine-harmonic-sums            inherited\n  lem-finite-star-refinement-for-compact-hausdorff-spaces inherited\n  lem-finiteness-support-residue-sum       inherited\n  lem-first-order-hadamard-factorization-near-a-point inherited\n  lem-fixed-point-free-disk-map-produces-a-retraction inherited\n  lem-flux-of-a-single-component-field-through-an-oriented-graph-face inherited\n  lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu inherited\n  lem-gamma-integral-converges-locally-uniformly inherited\n  lem-gaussian-integral-is-finite-and-positive inherited\n  lem-gaussian-square-is-the-plane-gaussian-integral inherited\n  lem-generalized-niceness-yields-four-reduction-outcomes inherited\n  lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular inherited\n  lem-germ-neighborhoods-form-a-riemann-surface-basis inherited\n  lem-gluing-lemma-for-plane-subharmonic-functions inherited\n  lem-goursat-four-triangle-boundary-cancellation inherited\n  lem-goursat-nested-triangle-selection    inherited\n  lem-green-boundary-cancellation-under-finite-gluing inherited\n  lem-green-type-i-boundary-identity       inherited\n  lem-green-type-ii-boundary-identity      inherited\n  lem-grid-cycle-for-runge-approximation   inherited\n  lem-half-open-boxes-form-an-elementary-family inherited\n  lem-half-open-boxes-generate-the-borel-sigma-algebra-on-rn inherited\n  lem-harmonic-sum-asymptotic              inherited\n  lem-holomorphic-dependence-of-slice-laurent-coefficients inherited\n  lem-holomorphic-difference-quotient-is-holomorphic-in-each-variable inherited\n  lem-holomorphic-difference-quotient-is-jointly-continuous inherited\n  lem-holomorphic-difference-quotient-segment-formula inherited\n  lem-holomorphic-logarithms-for-two-omitted-values inherited\n  lem-holomorphic-power-sums-of-slice-zeros inherited\n  lem-homotopy-reflexive-and-symmetric     inherited\n  lem-homotopy-transitivity-by-reparametrisation inherited\n  lem-indented-arc-residue-limit           inherited\n  lem-integral-additivity-over-a-content-zero-almost-partition inherited\n  lem-internal-faces-cancel-when-elementary-solid-regions-are-glued inherited\n  lem-isometry-is-an-embedding             inherited\n  lem-jordan-set-integral-well-defined     inherited\n  lem-jordans-lemma-rational-functions     inherited\n  lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis inherited\n  lem-keyhole-branch-boundary-values       inherited\n  lem-l-p-functions-have-sigma-finite-essential-support-for-finite-p inherited\n  lem-large-radius-polynomial-circle-loop-has-degree inherited\n  lem-large-semicircle-vanishing           inherited\n  lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph inherited\n  lem-lebesgue-measurable-sets-have-small-open-excess inherited\n  lem-lifts-of-circle-loop-concatenation-and-reversal inherited\n  lem-line-integrals-are-independent-of-the-piecewise-c1-partition inherited\n  lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple inherited\n  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval inherited\n  lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null inherited\n  lem-local-boundedness-of-separately-holomorphic-functions inherited\n  lem-local-c-one-volume-distortion        inherited\n  lem-local-composition-of-complex-power-series inherited\n  lem-local-hartogs-extension-across-polydisc-shells inherited\n  lem-local-holomorphic-logarithm-nonvanishing-function-on-disc inherited\n  lem-local-reciprocal-of-a-real-power-series inherited\n  lem-local-reciprocal-of-complex-power-series inherited\n  lem-local-subharmonic-peak-function-globalizes inherited\n  lem-locally-bounded-holomorphic-families-are-locally-equicontinuous inherited\n  lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz inherited\n  lem-locally-finite-linear-combinations-of-sections-are-smooth inherited\n  lem-locally-finite-sums-are-continuous   inherited\n  lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps inherited\n  lem-locally-zero-locus-clopen-holomorphic-function inherited\n  lem-log-series-extends-by-the-product-law inherited\n  lem-logarithm-branch-for-a-linear-factor-on-a-disc inherited\n  lem-logarithmic-derivative-order-residue inherited\n  lem-loop-products-in-a-topological-group-agree-up-to-homotopy inherited\n  lem-lower-limit-line-is-regular-and-lindelof inherited\n  lem-manifold-bump-for-a-compact-set-inside-an-open-set inherited\n  lem-maps-of-compactifications-preserve-remainders inherited\n  lem-matrix-inversion-preserves-ck-regularity inherited\n  lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open inherited\n  lem-metric-cauchy-bounded                inherited\n  lem-metric-cauchy-with-convergent-subsequence inherited\n  lem-metric-convergent-implies-cauchy     inherited\n  lem-metric-outer-measure-boundary-layer-continuity inherited\n  lem-morse-splitting-induction-preserves-the-residual-hessian inherited\n  lem-multidimensional-refinement-inequalities inherited\n  lem-multivariable-geometric-series-on-a-distinguished-boundary inherited\n  lem-near-identity-c-one-maps-sandwich-cubes inherited\n  lem-newton-contraction-near-an-invertible-derivative inherited\n  lem-newton-identities-for-slice-roots    inherited\n  lem-nonconstant-local-uniform-limits-of-univalent-functions-are-univalent inherited\n  lem-nondegenerate-critical-points-are-isolated inherited\n  lem-nonzero-derivative-gives-local-biholomorphism inherited\n  lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section inherited\n  lem-normalizing-a-locally-finite-positive-family inherited\n  lem-normalizing-a-locally-finite-positive-smooth-family inherited\n  lem-nowhere-vanishing-algebras-approximate-the-constant-one inherited\n  lem-null-homology-gives-the-plane-or-disc-alternative inherited\n  lem-null-homology-implies-connected-spherical-complement inherited\n  lem-null-sets-in-rn-closed-under-subsets-and-countable-unions inherited\n  lem-ode-extension-from-a-compact-interior-region inherited\n  lem-one-variable-completion-of-the-square-with-a-smooth-parameter inherited\n  lem-open-cover-loop-generation           inherited\n  lem-open-subsets-of-r-are-countable-unions-of-rational-intervals inherited\n  lem-open-subspace-complete-remetrisation inherited\n  lem-operator-norm-is-a-norm              inherited\n  lem-ordinal-order-topology-is-t3         inherited\n  lem-oriented-area-vector-under-surface-reparametrization inherited\n  lem-oriented-similarities-are-nonzero-complex-multiplications inherited\n  lem-oscillation-characterisation-in-rn   inherited\n  lem-p-adic-balls-are-clopen              inherited\n  lem-p-norms-are-norms-and-induce-the-published-metrics inherited\n  lem-paracompact-hausdorff-cover-shrinking inherited\n  lem-paracompact-hausdorff-is-regular     inherited\n  lem-parameter-boundary-exceptions-do-not-affect-surface-integrals inherited\n  lem-path-class-projection-is-a-covering-map inherited\n  lem-picard-operator-is-a-short-time-contraction inherited\n  lem-picard-operator-preserves-a-closed-curve-ball inherited\n  lem-plane-edge-face-incidence            inherited\n  lem-plane-exterior-of-a-closed-disc-is-path-connected inherited\n  lem-plane-face-handshake-by-girth        inherited\n  lem-plane-gaussian-integral-in-polar-coordinates inherited\n  lem-plane-graph-faces-are-finite-with-one-unbounded-face inherited\n  lem-plane-triangulation-is-connected     inherited\n  lem-pointwise-lipschitz-sets-in-c01-are-closed inherited\n  lem-poisson-integrals-are-harmonic       inherited\n  lem-poisson-kernel-is-a-boundary-approximate-identity inherited\n  lem-poisson-kernel-properties-on-the-disc inherited\n  lem-polygonal-arc-does-not-separate-the-plane inherited\n  lem-polygonal-crossing-parity-is-locally-constant inherited\n  lem-polygonal-length-is-monotone-under-refinement inherited\n  lem-polygonal-ray-general-position       inherited\n  lem-polygonally-reachable-set-is-clopen  inherited\n  lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity inherited\n  lem-potentials-glue-over-a-path-connected-overlap inherited\n  lem-prepared-factorizations-and-irreducibility inherited\n  lem-prime-counting-chebyshev-partial-summation inherited\n  lem-product-grid-bounds-for-section-integrals inherited\n  lem-product-lower-bound-for-jordan-content inherited\n  lem-product-of-content-zero-set-and-interval-has-content-zero inherited\n  lem-product-topology-on-rn               inherited\n  lem-products-preserve-complete-regularity inherited\n  lem-products-preserve-regularity         inherited\n  lem-products-preserve-t0-t1-and-hausdorff inherited\n  lem-projection-onto-a-closed-convex-set-has-the-variational-inequality inherited\n  lem-propagation-and-gluing-of-hartogs-extensions inherited\n  lem-pseudocompact-euclidean-subset-is-bounded inherited\n  lem-pseudocompact-euclidean-subset-is-closed inherited\n  lem-pullback-of-a-target-germ-by-a-smooth-map-is-a-well-defined-source-germ inherited\n  lem-punctured-rn-is-polygonally-connected inherited\n  lem-quantitative-univalence-from-controlled-derivative inherited\n  lem-quotient-seminorm-is-representative-independent inherited\n  lem-quotient-seminorm-triangle-inequality inherited\n  lem-radial-normalisation-is-continuous   inherited\n  lem-random-graph-independence-number-bound inherited\n  lem-real-and-metric-notions-agree        inherited\n  lem-real-line-is-a-metric-space          inherited\n  lem-real-part-of-a-self-adjoint-complex-function-algebra inherited\n  lem-rectangle-second-difference-mean-value-formula inherited\n  lem-refinement-of-analytic-continuation-chains inherited\n  lem-regular-lindelof-spaces-are-normal   inherited\n  lem-regular-lindelof-spaces-are-paracompact inherited\n  lem-regularity-is-hereditary             inherited\n  lem-regularity-via-closed-neighbourhoods inherited\n  lem-residue-simple-pole                  inherited\n  lem-reverse-triangle-inequality-in-a-normed-space inherited\n  lem-riemann-integrable-function-has-borel-darboux-envelopes inherited\n  lem-riemann-integral-unchanged-by-content-zero-modification inherited\n  lem-riemann-map-extremal-derivative-is-attained inherited\n  lem-riemann-map-extremal-derivatives-are-positive-and-bounded inherited\n  lem-riemann-map-extremal-family-is-nonempty inherited\n  lem-riemann-map-extremizer-is-surjective inherited\n  lem-riemann-map-extremizer-is-univalent  inherited\n  lem-riemann-zeta-dirichlet-series-converges-locally-uniformly inherited\n  lem-riesz-lemma                          inherited\n  lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q inherited\n  lem-root-free-polynomial-circle-loops-are-nullhomotopic inherited\n  lem-samuel-function-pseudometrics-and-coarsening inherited\n  lem-samuel-uniformity-is-totally-bounded inherited\n  lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice inherited\n  lem-sard-on-the-infinitely-flat-critical-stratum inherited\n  lem-sard-on-the-nonflat-critical-strata  inherited\n  lem-sard-slicing-for-compact-null-sections inherited\n  lem-sequentially-compact-implies-complete inherited\n  lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one inherited\n  lem-simple-approximants-converge-uniformly-on-a-large-closed-set inherited\n  lem-simple-functions-satisfy-lusins-theorem-on-a-finite-measure-set inherited\n  lem-sine-positive-and-cosine-decreasing-on-zero-two inherited\n  lem-slice-chart-restrictions-form-a-smooth-atlas inherited\n  lem-small-open-excess-implies-lebesgue-measurable inherited\n  lem-smooth-bump-between-concentric-euclidean-balls inherited\n  lem-smooth-chart-compatibility-is-symmetric-and-reflexive inherited\n  lem-smooth-extension-from-a-closed-neighbourhood inherited\n  lem-smooth-maps-paste-over-an-open-cover inherited\n  lem-stability-of-slice-zero-count-under-holomorphic-parameters inherited\n  lem-standard-complete-metric-on-a-countable-product inherited\n  lem-star-or-special-vertex-obstructions-force-wonderfulness inherited\n  lem-steep-polygonal-functions-are-dense-in-c01 inherited\n  lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus inherited\n  lem-stirling-constant-from-wallis        inherited\n  lem-stirling-formula-up-to-a-positive-constant inherited\n  lem-straight-line-homotopies-are-continuous inherited\n  lem-subgroup-quotient-of-universal-cover inherited\n  lem-summatory-logarithm-asymptotic       inherited\n  lem-sup-metric-is-a-metric               inherited\n  lem-sylvester-inertia-makes-morse-index-intrinsic inherited\n  lem-t0-t1-and-hausdorff-are-hereditary   inherited\n  lem-tagged-sums-approximate-a-contour-integral inherited\n  lem-tangent-bundle-chart-transitions-are-smooth-with-smooth-inverses inherited\n  lem-tangent-principal-branch-is-bijective inherited\n  lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses inherited\n  lem-the-commutator-of-vector-field-derivations-is-a-derivation inherited\n  lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians inherited\n  lem-the-coordinate-flux-identity-for-a-simple-solid-region inherited\n  lem-the-differential-sends-derivations-to-derivations-and-is-linear inherited\n  lem-the-divergence-and-curl-of-a-cross-product inherited\n  lem-the-e-graph-and-the-bird-graph-are-wonderful inherited\n  lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed inherited\n  lem-the-k-topology-is-hausdorff-and-not-regular inherited\n  lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra inherited\n  lem-the-order-topology-on-an-ordinal     inherited\n  lem-the-oscillating-zigzag-curve         inherited\n  lem-the-plane-or-disc-alternative-gives-contractibility inherited\n  lem-the-stokes-integrand-identity-on-a-c2-patch inherited\n  lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas inherited\n  lem-this-homeomorphism-sends-the-cantor-set-onto-a-set-of-lebesgue-measure-one inherited\n  lem-three-connected-kuratowski-free-is-planar inherited\n  lem-topologists-sine-curve-is-connected  inherited\n  lem-totally-bounded-basic                inherited\n  lem-totally-bounded-uniformities-equal-their-samuel-uniformity inherited\n  lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient inherited\n  lem-trivial-fundamental-group-implies-null-homology-for-plane-domains inherited\n  lem-truncated-integrals-of-rational-powers inherited\n  lem-tube-lemma-for-a-compact-metric-factor inherited\n  lem-two-dyadic-cubes-are-nested-or-disjoint inherited\n  lem-two-omitted-values-rule-out-an-essential-singularity inherited\n  lem-two-point-interpolation-for-a-separating-real-function-lattice inherited\n  lem-two-point-interpolation-in-a-separating-real-function-algebra inherited\n  lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice inherited\n  lem-uniform-closure-of-a-real-function-algebra-is-a-lattice inherited\n  lem-uniform-convergence-in-the-uniform-metric inherited\n  lem-uniform-metric-on-a-function-space   inherited\n  lem-uniform-tail-control-for-dominated-improper-multiple-integrals inherited\n  lem-uniformizable-spaces-are-completely-regular inherited\n  lem-uniformizable-spaces-are-regular     inherited\n  lem-uniformly-convergent-sequences-form-equicontinuous-families inherited\n  lem-uniqueness-of-the-complex-derivative inherited\n  lem-uniqueness-of-the-total-derivative   inherited\n  lem-unit-disc-estimate-for-weierstrass-elementary-factors inherited\n  lem-unit-interval-functions-extend-over-evaluation-closure inherited\n  lem-urysohn-sits-between-hausdorff-and-regular-plus-t1 inherited\n  lem-van-kampen-factorization-invariance  inherited\n  lem-van-kampen-homotopy-grid             inherited\n  lem-vanishing-of-negative-laurent-coefficients-on-a-hartogs-figure inherited\n  lem-variable-radius-injectivity-for-normal-addition inherited\n  lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities inherited\n  lem-vector-operations-are-continuous-in-a-normed-space inherited\n  lem-vector-valued-continuous-curve-space-is-complete inherited\n  lem-viete-finite-cosine-product-and-nested-radicals inherited\n  lem-wallis-integrals-recurrence-and-squeeze inherited\n  lem-weak-local-subharmonic-peak-function-implies-regularity inherited\n  lem-weierstrass-low-frequency-difference-quotient-bound inherited\n  lem-weierstrass-probe-points             inherited\n  lem-weierstrass-quotient-is-a-finite-module inherited\n  lem-weierstrass-tail-difference-quotient-bound inherited\n  lem-weighted-von-mangoldt-harmonic-estimate inherited\n  lem-weissinger-fixed-point-criterion     inherited\n  lem-x-plus-the-cantor-function-is-a-homeomorphism-from-zero-one-onto-zero-two inherited\n  lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical inherited\n  prop-a-countable-chart-cover-detects-manifold-null-sets inherited\n  prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically inherited\n  prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism inherited\n  prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included inherited\n  prop-a-finite-simplicial-complex-has-compact-hausdorff-realization inherited\n  prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space inherited\n  prop-a-fundamental-matrix-is-invertible  inherited\n  prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth inherited\n  prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth inherited\n  prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter inherited\n  prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical inherited\n  prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold inherited\n  prop-a-proper-injective-immersion-is-a-smooth-embedding inherited\n  prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component inherited\n  prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank inherited\n  prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism inherited\n  prop-a-vector-bundle-projection-is-a-surjective-submersion inherited\n  prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set inherited\n  prop-a-vector-field-acts-as-a-derivation-of-smooth-functions inherited\n  prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global inherited\n  prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes inherited\n  prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field inherited\n  prop-additive-group-of-zp-is-torsion-free inherited\n  prop-algebra-of-holomorphic-functions-in-several-variables inherited\n  prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle inherited\n  prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets inherited\n  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure inherited\n  prop-arc-length-under-lipschitz-maps-and-euclidean-similarities inherited\n  prop-ball-average-is-continuous-in-centre-and-radius inherited\n  prop-basic-operations-preserving-convexity inherited\n  prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle inherited\n  prop-cantor-measure-is-a-singular-atomless-probability-measure inherited\n  prop-cauchy-products-of-complex-power-series inherited\n  prop-centered-and-uncentered-maximal-functions-are-comparable inherited\n  prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets inherited\n  prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures inherited\n  prop-closed-subspaces-of-cech-complete-spaces inherited\n  prop-compact-function-families-are-pointwise-relatively-compact inherited\n  prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses inherited\n  prop-compact-local-homeomorphism-is-finite-covering inherited\n  prop-compact-open-is-uniform-on-a-compact-metric-domain inherited\n  prop-compatibility-of-smooth-atlases-is-an-equivalence-relation inherited\n  prop-components-of-a-topological-manifold-are-open-and-at-most-countable inherited\n  prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles inherited\n  prop-convex-functions-have-convex-sublevel-sets inherited\n  prop-coordinate-formula-for-the-lie-bracket inherited\n  prop-coordinate-vector-fields-commute    inherited\n  prop-cotangent-pullback-is-contravariantly-functorial inherited\n  prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds inherited\n  prop-countable-subsets-of-rn-are-lebesgue-null inherited\n  prop-countable-unions-and-subsets-of-manifold-null-sets-are-null inherited\n  prop-covering-morphism-subgroup-criterion inherited\n  prop-deck-transformations-are-determined-by-one-point-and-act-freely inherited\n  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null inherited\n  prop-degree-laws-for-circle-loops        inherited\n  prop-differential-forms-form-a-graded-commutative-algebra inherited\n  prop-elementary-sets-form-an-algebra     inherited\n  prop-elementary-volume-is-finitely-additive-and-monotone inherited\n  prop-erdos-hajnal-property-is-complement-invariant inherited\n  prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment inherited\n  prop-erdos-hajnal-property-passes-to-hereditary-subclasses inherited\n  prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains inherited\n  prop-explicit-formulas-for-normwise-and-componentwise-backward-error inherited\n  prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law inherited\n  prop-face-boundaries-in-three-connected-plane-graphs inherited\n  prop-face-boundaries-in-two-connected-plane-graphs inherited\n  prop-finiteness-is-a-geometric-property-of-finitely-generated-groups inherited\n  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation inherited\n  prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic inherited\n  prop-fundamental-group-is-a-functor-on-pointed-spaces inherited\n  prop-fundamental-groups-of-punctured-euclidean-spaces inherited\n  prop-general-compact-open-topology-agrees-with-the-metric-definition inherited\n  prop-general-real-function-algebra-agrees-with-the-metric-definition inherited\n  prop-global-graph-characterization-by-one-point-transverse-fibres inherited\n  prop-hardy-littlewood-maximal-function-is-l-infinity-bounded inherited\n  prop-hawaiian-earring-is-compact-and-path-connected inherited\n  prop-holomorphic-functions-are-continuous-and-separately-holomorphic inherited\n  prop-identity-maps-and-composites-of-smooth-maps-are-smooth inherited\n  prop-interior-product-on-forms-is-a-graded-antiderivation inherited\n  prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy inherited\n  prop-isomorphic-cocycles-define-isomorphic-vector-bundles inherited\n  prop-l-one-convolution-is-bilinear-commutative-and-associative inherited\n  prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm inherited\n  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets inherited\n  prop-leibniz-rules-for-the-lie-bracket-with-function-multiples inherited\n  prop-linearity-of-complex-line-integrals inherited\n  prop-local-coordinate-expression-for-a-differential-form inherited\n  prop-local-frames-and-local-trivializations-are-equivalent-data inherited\n  prop-local-graph-characterization-by-transversality-to-vertical-fibres inherited\n  prop-local-path-connectedness-lifts-and-descends-along-coverings inherited\n  prop-maximal-plane-triangulation-characterisation inherited\n  prop-maximally-planar-edge-characterisation inherited\n  prop-mollifier-families-are-l-one-approximate-identities inherited\n  prop-monodromy-acts-by-bijections-and-detects-components inherited\n  prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking inherited\n  prop-normal-and-conormal-bundles-are-smooth-vector-bundles inherited\n  prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class inherited\n  prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure inherited\n  prop-orthogonal-complements-of-subbundles-are-smooth-subbundles inherited\n  prop-perfect-graphs-are-one-narrow       inherited\n  prop-picard-iteration-converges-with-explicit-error-bounds inherited\n  prop-plane-forest-has-one-face           inherited\n  prop-pointwise-supremum-preserves-convexity inherited\n  prop-polish-space-countability-conventions-agree inherited\n  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure inherited\n  prop-profinite-completion-of-z-is-the-product-of-all-zp inherited\n  prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism inherited\n  prop-pullback-of-covariant-tensors-is-smooth-and-functorial inherited\n  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges inherited\n  prop-real-beta-symmetry-and-trigonometric-form inherited\n  prop-real-line-mod-integers-is-compact-and-path-connected inherited\n  prop-real-line-mod-integers-is-hausdorff inherited\n  prop-related-complete-vector-fields-have-intertwined-flows inherited\n  prop-related-vector-fields-have-related-lie-brackets inherited\n  prop-relative-transversality-preserves-a-map-on-a-closed-good-region inherited\n  prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth inherited\n  prop-retracts-inject-fundamental-groups  inherited\n  prop-reversal-and-concatenation-of-complex-line-integrals inherited\n  prop-riemann-graph-area-equals-jordan-content inherited\n  prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps inherited\n  prop-semicontinuity-agrees-on-the-real-line inherited\n  prop-semifinite-measures-make-l-q-representatives-unique inherited\n  prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x inherited\n  prop-smooth-maps-are-continuous          inherited\n  prop-smooth-sections-form-a-module-over-smooth-functions inherited\n  prop-smoothness-into-an-embedded-submanifold-is-an-initial-property inherited\n  prop-smoothness-is-local-on-the-source   inherited\n  prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices inherited\n  prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space inherited\n  prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components inherited\n  prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components inherited\n  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components inherited\n  prop-solutions-compose-under-a-change-of-initial-time inherited\n  prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold inherited\n  prop-standard-circle-loops-have-their-integer-degrees inherited\n  prop-star-shaped-plane-domains-are-homologically-simply-connected inherited\n  prop-sums-and-scalar-multiples-of-complex-power-series inherited\n  prop-tangent-plane-is-invariant-under-regular-reparametrization inherited\n  prop-tangent-space-of-a-regular-level-set-is-the-kernel inherited\n  prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth inherited\n  prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map inherited\n  prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact inherited\n  prop-the-diagonal-is-an-embedded-submanifold inherited\n  prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it inherited\n  prop-the-generating-vector-field-is-invariant-under-its-flow inherited\n  prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal inherited\n  prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold inherited\n  prop-the-image-of-a-lower-dimensional-c1-manifold-is-null inherited\n  prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold inherited\n  prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding inherited\n  prop-the-maximal-solution-domain-is-open inherited\n  prop-the-null-set-definition-is-independent-of-the-smooth-atlas inherited\n  prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one inherited\n  prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups inherited\n  prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry inherited\n  prop-the-smooth-structure-of-an-embedded-submanifold-is-unique inherited\n  prop-the-tangent-bundle-construction-is-functorial inherited\n  prop-the-tangent-bundle-projection-and-zero-section-are-smooth inherited\n  prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r inherited\n  prop-the-zero-section-is-a-smooth-embedding inherited\n  prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law inherited\n  prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains inherited\n  prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity inherited\n  prop-topological-manifolds-are-locally-compact-and-locally-path-connected inherited\n  prop-topological-sums-of-cech-complete-spaces inherited\n  prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target inherited\n  prop-transversality-is-stable-on-a-compact-source inherited\n  prop-transversality-to-a-point-is-the-regular-value-condition inherited\n  prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form inherited\n  prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain inherited\n  prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters inherited\n  prop-two-classical-counterexamples-in-polar-coordinates inherited\n  prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section inherited\n  prop-units-in-the-holomorphic-germ-ring  inherited\n  prop-winding-number-under-reversal-and-concatenation inherited\n  prop-zp-is-topologically-generated-by-one inherited\n  rem-agreement-between-classical-and-nevanlinna-picard-theorems inherited\n  rem-agreement-with-c2-holomorphic-components-are-harmonic inherited\n  rem-agreement-with-the-existing-infinitude-of-primes inherited\n  rem-analytic-equivalences-from-global-cauchy-theory inherited\n  rem-biholomorphisms-are-conformal-with-holomorphic-inverse inherited\n  rem-borel-product-equality-needs-second-countability inherited\n  rem-cardinal-arithmetic-choice-ledger    inherited\n  rem-cauchy-principal-value-dictionary    inherited\n  rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters inherited\n  rem-choice-ledger                        direct\n  rem-choice-strength-of-runge-and-mittag-leffler inherited\n  rem-choice-strength-of-the-grand-equivalence inherited\n  rem-choice-strength-of-the-riemann-mapping-proof inherited\n  rem-classical-counterparts-for-trigonometry-free-oscillators direct\n  rem-classical-oscillator-is-sine-of-one-over-x direct\n  rem-compactness-choice-ledger-metric     inherited\n  rem-compactness-conventions-and-choice-ledger inherited\n  rem-complete-metrizability-is-the-topological-shadow inherited\n  rem-complex-contours-as-planar-rectifiable-paths inherited\n  rem-complex-euclidean-space-dictionary   inherited\n  rem-complex-plane-euclidean-dictionary   inherited\n  rem-complex-versus-banach-open-mapping-theorems inherited\n  rem-connectedness-conventions            inherited\n  rem-constructions-this-page-stops-short-of inherited\n  rem-countability-axiom-implication-and-choice-ledger inherited\n  rem-counting-conventions-and-scope       direct\n  rem-covering-maps-among-complete-analytic-functions inherited\n  rem-derivative-conventions               inherited\n  rem-dirichlet-series-continuation-and-regularized-sums inherited\n  rem-domain-hypotheses-for-closed-versus-exact inherited\n  rem-duality-as-a-dual-space-statement    inherited\n  rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative inherited\n  rem-ell-p-is-l-p-of-counting-measure     inherited\n  rem-euclidean-topology-dictionary        inherited\n  rem-exponential-roadmap-and-circularity  inherited\n  rem-extended-real-conventions            direct\n  rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities inherited\n  rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem inherited\n  rem-ftc-roadmap                          inherited\n  rem-function-space-conventions           inherited\n  rem-fundamental-theorem-of-algebra-proof-routes inherited\n  rem-fundamental-theorem-of-algebra-via-liouville inherited\n  rem-fundamental-theorem-of-algebra-via-rouche inherited\n  rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost inherited\n  rem-general-inequalities-restrict-to-the-published-finite-ones inherited\n  rem-greens-theorem-jordan-domain-limitation inherited\n  rem-hereditary-and-productive-separation-ledger inherited\n  rem-holomorphic-logarithm-and-principal-power-dictionary inherited\n  rem-homological-simple-connectivity-conventions inherited\n  rem-improper-integral-conventions-and-scope inherited\n  rem-integral-conventions-and-scope       direct\n  rem-jordan-rectifiable-terminology       inherited\n  rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure inherited\n  rem-local-degree-argument-principle-agreement inherited\n  rem-local-uniform-convergence-dictionary-on-plane-domains inherited\n  rem-locally-uniform-convergence-dictionary inherited\n  rem-logarithm-roadmap-and-circularity    inherited\n  rem-lp-completeness-and-the-banach-property inherited\n  rem-lp-spaces-are-banach-spaces          inherited\n  rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm inherited\n  rem-manifold-conventions-and-the-role-of-second-countability inherited\n  rem-metric-axiom-conventions             inherited\n  rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems inherited\n  rem-multidimensional-riemann-conventions-and-scope inherited\n  rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure inherited\n  rem-omega-one-and-the-cost-of-choice     inherited\n  rem-open-mapping-theorem-via-argument-principle inherited\n  rem-paracompactness-choice-and-convention-ledger inherited\n  rem-plane-star-shaped-and-convex-dictionary inherited\n  rem-polar-coordinates-recover-the-published-ball-volume-and-gaussian-formulas inherited\n  rem-r-native-topology-scope              direct\n  rem-real-and-complex-normed-space-convention inherited\n  rem-real-exponents-deferred              direct\n  rem-rearrangement-in-higher-dimensions   direct\n  rem-riemann-integral-choice-ledger       inherited\n  rem-riemann-sphere-one-point-compactification inherited\n  rem-riemann-stieltjes-conventions-and-scope direct\n  rem-rn-conventions-and-scope             inherited\n  rem-schwarz-reflection-as-analytic-continuation inherited\n  rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases inherited\n  rem-separation-axiom-conventions         inherited\n  rem-several-variable-conventions-and-the-identity-theorem-gap direct\n  rem-simply-connected-convention-for-plane-domains inherited\n  rem-sine-period-arc-length-integrand-is-nonelementary inherited\n  rem-smooth-and-topological-partition-theorems-have-different-proof-costs inherited\n  rem-strong-whitney-embedding-theorem     inherited\n  rem-sums-proved-to-exist-but-not-evaluated inherited\n  rem-sup-conventions                      direct\n  rem-taylor-coefficient-formula-agreement inherited\n  rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem inherited\n  rem-the-erdos-hajnal-conjecture          inherited\n  rem-the-hairy-ball-theorem-for-even-dimensional-spheres inherited\n  rem-the-perfect-induced-subgraph-formulation-of-the-erdos-hajnal-conjecture inherited\n  rem-the-published-typewriter-sequence-shows-why-riesz-fischer-only-promises-a-subsequence inherited\n  rem-the-reach-of-the-classical-divergence-and-stokes-theorems inherited\n  rem-the-size-of-the-constant-in-rodls-theorem inherited\n  rem-the-two-forms-of-rodls-theorem       inherited\n  rem-the-winding-number-and-the-planar-vortex-field inherited\n  rem-three-lines-and-complex-interpolation inherited\n  rem-total-derivative-conventions-and-linear-map-seam inherited\n  rem-two-senses-of-regularity-for-lebesgue-measure inherited\n  rem-tychonoff-choice-strengths           inherited\n  rem-uniform-convergence-agrees-with-the-later-uniform-topology direct\n  rem-what-the-diagonal-criterion-gives-and-what-it-costs inherited\n  rem-where-a-choice-principle-would-be-needed direct\n  rem-which-axiom-each-construction-uses   direct\n  rem-zero-dimensional-morse-convention    inherited\n  thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval inherited\n  thm-a-bounded-partition-into-weakly-restricted-sets inherited\n  thm-a-compact-hausdorff-space-is-regular-and-normal inherited\n  thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property inherited\n  thm-a-deformation-retract-is-a-homotopy-equivalence inherited\n  thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential inherited\n  thm-a-finite-family-with-the-erdos-hajnal-property-is-viral inherited\n  thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property inherited\n  thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable inherited\n  thm-a-linear-continuum-is-connected      inherited\n  thm-a-locally-compact-hausdorff-space-is-completely-regular inherited\n  thm-a-locally-finite-sum-of-smooth-functions-is-smooth inherited\n  thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement inherited\n  thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest inherited\n  thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse inherited\n  thm-a-regular-level-set-is-an-embedded-submanifold inherited\n  thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle inherited\n  thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set inherited\n  thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb inherited\n  thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle inherited\n  thm-a-vitali-set-is-not-lebesgue-measurable inherited\n  thm-abel-limit-theorem-for-complex-series-in-stolz-regions inherited\n  thm-absolute-convergence-in-rn           inherited\n  thm-absolute-convergence-of-complex-series inherited\n  thm-absolute-divergence-from-uniform-tail-mass inherited\n  thm-absolute-improper-convergence-implies-convergence inherited\n  thm-absolute-improper-multiple-integral-by-exhaustion inherited\n  thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant inherited\n  thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null inherited\n  thm-alexandrov-complete-metrizability-characterisation inherited\n  thm-algebra-of-complex-derivatives       inherited\n  thm-algebra-of-total-derivatives         inherited\n  thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent inherited\n  thm-all-norms-on-rn-are-equivalent       inherited\n  thm-almost-every-point-is-a-lebesgue-point inherited\n  thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs inherited\n  thm-alpha-narrowness-is-preserved-under-substitution inherited\n  thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups inherited\n  thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p inherited\n  thm-analytic-sine-cosine-agree-with-right-triangle-ratios inherited\n  thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity inherited\n  thm-arc-length-is-additive-over-subintervals inherited\n  thm-arc-length-is-invariant-under-monotone-reparametrization inherited\n  thm-arc-length-is-lower-semicontinuous-under-uniform-convergence inherited\n  thm-archimedean-polygon-perimeter-characterization-of-pi inherited\n  thm-area-theorem-for-exterior-univalent-functions inherited\n  thm-argument-principle-as-image-winding-number inherited\n  thm-argument-principle-null-homologous-cycle inherited\n  thm-arzela-ascoli-for-real-ck            inherited\n  thm-arzela-bounded-convergence-for-riemann-integrals inherited\n  thm-ascoli-arzela-general                inherited\n  thm-ascoli-arzela-sufficiency            inherited\n  thm-automorphisms-punctured-plane        inherited\n  thm-baire-category-for-complete-metric-spaces inherited\n  thm-baire-category-locally-compact-hausdorff inherited\n  thm-baire-sequence-space-is-polish       inherited\n  thm-banach-fixed-point                   inherited\n  thm-banach-series-criterion              inherited\n  thm-banach-space-no-countably-infinite-hamel-basis inherited\n  thm-barrier-characterization-of-regular-boundary-points inherited\n  thm-basic-bull-free-graphs-are-two-narrow inherited\n  thm-bernstein-polynomials-converge-uniformly inherited\n  thm-bertrands-postulate                  inherited\n  thm-beta-gamma-identity                  inherited\n  thm-biholomorphic-self-maps-riemann-sphere-are-mobius inherited\n  thm-bing-metrization                     inherited\n  thm-blaschke-factor-is-a-disc-automorphism inherited\n  thm-bloch-theorem                        inherited\n  thm-bohr-mollerup-characterisation-of-the-real-gamma-function inherited\n  thm-borel-products-of-euclidean-spaces-are-euclidean-borel inherited\n  thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures inherited\n  thm-borel-sets-are-lebesgue-measurable   inherited\n  thm-borsuk-ulam-in-dimension-two         inherited\n  thm-boundary-maximum-modulus-principle   inherited\n  thm-boundary-topology-is-well-defined-and-quasi-isometry-invariant inherited\n  thm-bounded-below-iff-injective-with-closed-range inherited\n  thm-bounded-bilinear-map-equivalences    inherited\n  thm-bounded-left-inverse-iff-range-is-complemented inherited\n  thm-bounded-linear-operator-equivalences inherited\n  thm-bounded-operator-space-is-banach     inherited\n  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral inherited\n  thm-bounded-right-inverse-iff-kernel-is-complemented inherited\n  thm-bounded-subsets-of-r-are-lebesgue-measurable-exactly-when-inner-and-outer-measures-agree inherited\n  thm-box-step-functions-are-dense-in-l-p-of-rn inherited\n  thm-box-volume-is-a-premeasure-on-the-elementary-algebra inherited\n  thm-branch-discrepancies-for-logarithm-and-complex-powers inherited\n  thm-branch-power-agrees-with-integer-powers inherited\n  thm-brouwer-fixed-point-theorem-for-the-disk inherited\n  thm-bull-free-graphs-are-two-narrow      inherited\n  thm-c-c-infinity-rn-is-dense-in-l-p-of-rn inherited\n  thm-c-c-rn-is-dense-in-l-p-of-rn         inherited\n  thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound inherited\n  thm-c-k-complete-in-the-sup-metric       inherited\n  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions inherited\n  thm-c-two-characterization-of-plane-subharmonicity inherited\n  thm-c-two-levi-criterion-for-plurisubharmonicity inherited\n  thm-c1-dependence-of-solutions-on-initial-data inherited\n  thm-c1-lipschitz-ac-bv-hierarchy         inherited\n  thm-c1-paths-have-length-equal-to-the-integral-of-speed inherited\n  thm-c2-holomorphic-components-are-harmonic inherited\n  thm-c2-holomorphic-function-has-holomorphic-derivative inherited\n  thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one inherited\n  thm-canonical-product-convergence-from-exponent-sum inherited\n  thm-canonical-tangent-and-cotangent-splittings-for-products inherited\n  thm-cantor-intersection-metric           inherited\n  thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space inherited\n  thm-cardinality-of-the-borel-sigma-algebra-on-rn inherited\n  thm-cartan-thullen-boundary-radius-theorem inherited\n  thm-cartan-thullen-theorem               inherited\n  thm-casorati-weierstrass                 inherited\n  thm-cauchy-estimates-on-a-polydisc       inherited\n  thm-cauchy-functional-equation-regularity inherited\n  thm-cauchy-hadamard-for-complex-power-series inherited\n  thm-cauchy-integral-formula-circle       inherited\n  thm-cauchy-integral-formula-higher-derivatives inherited\n  thm-cauchy-integral-formula-on-a-polydisc inherited\n  thm-cauchy-riemann-characterization-in-several-complex-variables inherited\n  thm-cauchy-schwarz-and-the-euclidean-norm inherited\n  thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain inherited\n  thm-cech-complete-spaces-are-baire       inherited\n  thm-cech-completeness-is-independent-of-compactification inherited\n  thm-centered-hardy-littlewood-maximal-function-is-borel-measurable inherited\n  thm-chain-rule-for-complex-derivatives   inherited\n  thm-chain-rule-for-differentials-of-smooth-maps inherited\n  thm-chain-rule-for-holomorphic-maps-in-several-variables inherited\n  thm-chain-rule-for-total-derivatives     inherited\n  thm-change-of-coordinate-formula-for-tangent-bases inherited\n  thm-change-of-variables-for-compact-jordan-sets inherited\n  thm-chebyshev-minimax-monic-polynomial   inherited\n  thm-chebyshev-multiple-angle-identities  inherited\n  thm-chebyshev-prime-counting-bounds      inherited\n  thm-chebyshev-theta-linear-bounds        inherited\n  thm-chernoff-bound-for-independent-random-signs inherited\n  thm-chordal-arzela-ascoli-criterion-for-meromorphic-families inherited\n  thm-chordal-limit-theorem-for-meromorphic-functions inherited\n  thm-chordal-metric-induces-sphere-topology inherited\n  thm-circle-circumference-diameter-ratio-is-pi inherited\n  thm-circle-integrals-of-integer-monomials inherited\n  thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree inherited\n  thm-circle-of-convergence-contains-a-singular-point inherited\n  thm-ck-euclidean-maps-closed-under-algebra-and-composition inherited\n  thm-clairaut-schwarz-mixed-partials      inherited\n  thm-classical-erdos-hajnal-bound         inherited\n  thm-classical-weierstrass-function-nowhere-differentiable inherited\n  thm-classical-weierstrass-series-converges-uniformly inherited\n  thm-classification-mobius-transformations inherited\n  thm-classification-of-complex-logarithms inherited\n  thm-classification-of-connected-covering-spaces inherited\n  thm-closed-real-function-algebras-are-function-spaces-on-their-quotients inherited\n  thm-closed-unit-ball-compact-iff-finite-dimensional inherited\n  thm-cofunction-supplementary-and-reflection-identities inherited\n  thm-compact-exhaustion-metric-characterizes-local-uniform-convergence inherited\n  thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain inherited\n  thm-compact-hausdorff-open-cover-uniformity inherited\n  thm-compact-hausdorff-space-has-a-unique-compatible-uniformity inherited\n  thm-compact-hausdorff-spaces-are-monadic-over-sets inherited\n  thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces inherited\n  thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree inherited\n  thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma inherited\n  thm-compact-implies-complete-and-totally-bounded inherited\n  thm-compact-implies-the-other-compactness-forms inherited\n  thm-compact-open-equals-compact-convergence inherited\n  thm-compact-subset-is-closed-and-bounded inherited\n  thm-compact-subset-of-a-hausdorff-space-is-closed inherited\n  thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval inherited\n  thm-compactly-supported-vector-fields-are-complete inherited\n  thm-compactness-agrees-with-metric-compactness inherited\n  thm-compactness-is-invariant-under-finite-sheeted-coverings inherited\n  thm-compactness-is-necessary-for-evt-and-uniform-continuity inherited\n  thm-compactness-under-continuous-maps    inherited\n  thm-compactness-variants-hierarchy       inherited\n  thm-comparison-of-the-three-function-space-topologies inherited\n  thm-comparison-test-for-improper-integrals inherited\n  thm-comparison-test-for-improper-multiple-integrals inherited\n  thm-complement-of-a-compact-plane-set-has-one-unbounded-component inherited\n  thm-complemented-subspace-iff-range-of-a-bounded-projection inherited\n  thm-complete-and-totally-bounded-implies-compact inherited\n  thm-complete-graph-free-classes-are-erdos-hajnal inherited\n  thm-complete-subspace-iff-closed         inherited\n  thm-completed-riemann-zeta-functional-equation inherited\n  thm-completely-metrizable-spaces-are-cech-complete inherited\n  thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta inherited\n  thm-completely-normal-iff-hereditarily-normal inherited\n  thm-completely-normal-implies-normal     inherited\n  thm-completely-regular-implies-regular   inherited\n  thm-completeness-of-continuous-functions-for-local-uniform-convergence inherited\n  thm-completion-universal-property-for-bounded-linear-maps inherited\n  thm-complex-analytic-functions-are-holomorphic inherited\n  thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition inherited\n  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann inherited\n  thm-complex-exponential-addition-and-real-extension inherited\n  thm-complex-exponential-is-entire-with-derivative-itself inherited\n  thm-complex-exponential-surjects-onto-the-punctured-plane inherited\n  thm-complex-gamma-restricts-to-the-real-gamma-function inherited\n  thm-complex-nth-roots-and-roots-of-unity inherited\n  thm-complex-plane-is-complete            inherited\n  thm-complex-polynomials-and-rational-functions-are-holomorphic inherited\n  thm-complex-power-series-converge-locally-uniformly inherited\n  thm-complex-power-series-reexpansion-at-an-interior-point inherited\n  thm-complex-pythagorean-identity-by-identity-theorem inherited\n  thm-complex-sine-and-cosine-are-unbounded inherited\n  thm-complex-sine-and-cosine-zero-sets    inherited\n  thm-complex-stone-weierstrass-self-adjoint inherited\n  thm-complex-trigonometric-and-hyperbolic-power-series inherited\n  thm-complex-trigonometric-hyperbolic-dictionary inherited\n  thm-componentwise-convergence-and-completeness inherited\n  thm-componentwise-holomorphy-in-several-complex-variables inherited\n  thm-componentwise-limits-and-continuity  inherited\n  thm-composition-respects-homotopy        inherited\n  thm-composition-with-a-continuous-function inherited\n  thm-conformal-equivalence-is-an-equivalence-relation inherited\n  thm-conformal-invariance-of-plane-harmonicity inherited\n  thm-conformal-transport-of-plane-dirichlet-solutions inherited\n  thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps inherited\n  thm-connected-and-locally-path-connected-implies-path-connected inherited\n  thm-conservative-path-independent-and-zero-loop-equivalence inherited\n  thm-constant-rank-level-set-local-normal-form inherited\n  thm-constant-rank-theorem-for-manifolds  inherited\n  thm-continuity-of-dominated-parameter-dependent-improper-integrals inherited\n  thm-continuity-of-zeros-locally-uniform-convergence inherited\n  thm-continuity-principle-for-domains-of-holomorphy inherited\n  thm-continuous-bijection-from-a-compact-space-has-continuous-inverse inherited\n  thm-continuous-dependence-of-odes-on-initial-data-and-parameters inherited\n  thm-continuous-functions-on-compact-jordan-sets-are-integrable inherited\n  thm-continuous-image-of-a-compact-space-is-compact inherited\n  thm-continuous-implies-integrable        inherited\n  thm-continuous-logarithms-exist-along-a-contour inherited\n  thm-continuous-on-a-rectangle-is-riemann-integrable inherited\n  thm-continuous-partial-derivatives-imply-total-differentiability inherited\n  thm-continuous-partials-and-cauchy-riemann-imply-holomorphic inherited\n  thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic inherited\n  thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment inherited\n  thm-contour-parameter-integrals-are-holomorphic inherited\n  thm-converse-mean-value-property-for-plane-functions inherited\n  thm-convex-domains-are-holomorphically-convex inherited\n  thm-convex-function-iff-convex-epigraph  inherited\n  thm-convex-functions-have-subgradients-at-interior-points inherited\n  thm-convex-functions-on-open-convex-sets-are-locally-lipschitz inherited\n  thm-convex-subsets-have-trivial-fundamental-group inherited\n  thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign inherited\n  thm-coordinate-derivations-form-a-basis-of-the-tangent-space inherited\n  thm-coordinate-differentials-form-the-dual-cotangent-basis inherited\n  thm-coordinate-formula-for-the-differential inherited\n  thm-coordinate-formula-for-the-differential-of-a-function inherited\n  thm-coordinate-map-for-a-finite-dimensional-normed-space inherited\n  thm-coordinatewise-measurability-into-r-n inherited\n  thm-coprime-pair-counting-asymptotic     inherited\n  thm-cosecant-residue-alternating-summation-rational-functions inherited\n  thm-cosine-has-a-smallest-positive-zero  inherited\n  thm-cotangent-residue-summation-rational-functions inherited\n  thm-countable-products-of-cech-complete-spaces inherited\n  thm-countable-products-of-completely-metrizable-spaces inherited\n  thm-covering-maps-inject-fundamental-groups inherited\n  thm-covering-space-lifting-criterion     inherited\n  thm-cross-product-norm-is-the-two-vector-gram-determinant inherited\n  thm-cross-ratio-mobius-invariant         inherited\n  thm-curve-contact-classes-are-canonically-isomorphic-to-derivation-tangent-vectors inherited\n  thm-curve-velocities-in-a-regular-level-set-equal-its-tangent-space inherited\n  thm-cylindrical-shell-formula-for-solids-of-revolution inherited\n  thm-deck-group-as-normalizer-quotient    inherited\n  thm-deck-group-of-a-universal-cover-is-the-fundamental-group inherited\n  thm-degree-is-invariant-under-path-homotopy inherited\n  thm-degree-map-on-the-circle-is-a-homomorphism inherited\n  thm-derivations-of-smooth-functions-are-smooth-vector-fields inherited\n  thm-derivative-of-a-continuous-complex-local-inverse inherited\n  thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x inherited\n  thm-derivative-of-exponential            inherited\n  thm-derivative-of-the-simple-spectral-projector inherited\n  thm-differentiable-convex-functions-and-gradient-inequality inherited\n  thm-differential-rank-is-lower-semicontinuous inherited\n  thm-differentiation-along-families-shrinking-nicely inherited\n  thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n inherited\n  thm-differentiation-under-dominated-improper-multiple-integrals inherited\n  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle inherited\n  thm-dini                                 inherited\n  thm-dini-pointwise-convergence-criterion-for-fourier-series inherited\n  thm-directional-derivative-of-a-simple-positive-singular-value inherited\n  thm-dirichlet-divergence-transfer        inherited\n  thm-dirichlet-eta-representation         inherited\n  thm-dirichlet-jordan-pointwise-convergence inherited\n  thm-dirichlet-series-abscissa-gap        inherited\n  thm-dirichlet-series-absolute-half-plane-holomorphy inherited\n  thm-dirichlet-series-half-plane-convergence inherited\n  thm-dirichlet-series-multiplication-convolution inherited\n  thm-dirichlet-series-summatory-integral  inherited\n  thm-dirichlet-test-for-improper-integrals inherited\n  thm-disc-area-is-pi-r-squared            inherited\n  thm-disc-automorphisms-are-rotated-blaschke-factors inherited\n  thm-divisor-counting-summatory-estimate  inherited\n  thm-divisor-sum-summatory-estimate       inherited\n  thm-domains-of-holomorphy-are-hartogs-pseudoconvex inherited\n  thm-double-angle-and-power-reduction-identities inherited\n  thm-dual-and-hom-transition-functions-define-smooth-bundles inherited\n  thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas inherited\n  thm-elementary-volume-is-well-defined    inherited\n  thm-ell-p-includes-into-ell-r-for-p-less-r inherited\n  thm-embedded-submanifolds-admit-local-defining-submersions inherited\n  thm-end-germ-of-path-continuation-is-independent-of-the-chain inherited\n  thm-entire-polynomial-growth-is-polynomial inherited\n  thm-equality-case-in-holder-inequality   inherited\n  thm-equality-case-in-minkowski-inequality inherited\n  thm-equivalent-field-absolute-values-characterisation inherited\n  thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity inherited\n  thm-erdos-high-girth-and-high-chromatic-number inherited\n  thm-euclidean-constant-rank-normal-form  inherited\n  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values inherited\n  thm-euclidean-implicit-function-theorem  inherited\n  thm-euclidean-inverse-function-theorem   inherited\n  thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures inherited\n  thm-euclidean-semicontinuity-epigraph-characterisations inherited\n  thm-euclidean-space-complete             inherited\n  thm-euclidean-tubular-neighbourhood-theorem inherited\n  thm-euler-formula-for-connected-plane-graphs inherited\n  thm-euler-gamma-function-is-holomorphic  inherited\n  thm-euler-limit-formula-for-gamma        inherited\n  thm-euler-mascheroni-constant-and-harmonic-asymptotic inherited\n  thm-euler-product-for-riemann-zeta       inherited\n  thm-euler-reflection-formula             inherited\n  thm-euler-totient-summatory-estimate     inherited\n  thm-eulers-formula                       inherited\n  thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain inherited\n  thm-evaluation-is-continuous-on-a-locally-compact-metric-domain inherited\n  thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property inherited\n  thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property inherited\n  thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space inherited\n  thm-every-rectifiable-path-has-an-arc-length-parametrization inherited\n  thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function inherited\n  thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space inherited\n  thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric inherited\n  thm-exact-c1-vector-fields-are-closed    inherited\n  thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices inherited\n  thm-existence-and-uniqueness-of-a-maximal-ode-solution inherited\n  thm-existence-of-complex-line-integrals-on-rectifiable-paths inherited\n  thm-existence-of-the-lebesgue-stieltjes-measure inherited\n  thm-exponential-correspondence-is-continuous inherited\n  thm-exponential-definition-equivalence   inherited\n  thm-exponential-is-strictly-increasing   inherited\n  thm-exponential-ivp-uniqueness           inherited\n  thm-exponential-two-point-convexity      inherited\n  thm-extension-of-a-bounded-map-from-a-dense-subspace inherited\n  thm-exterior-disc-and-exterior-cone-points-are-regular inherited\n  thm-exterior-power-transition-laws-define-a-smooth-vector-bundle inherited\n  thm-extreme-value-metric                 inherited\n  thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary inherited\n  thm-fermat-for-euclidean-local-extrema   inherited\n  thm-finite-borel-measure-on-r-is-atomic-plus-atomless inherited\n  thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition inherited\n  thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence inherited\n  thm-finite-jensen-inequality-in-euclidean-space inherited\n  thm-finite-measure-l-r-includes-into-l-p-for-p-less-r inherited\n  thm-finite-products-of-banach-spaces-are-banach inherited\n  thm-finite-products-of-compact-spaces    inherited\n  thm-finite-total-variation-signed-measures-are-complete inherited\n  thm-finite-total-variation-signed-measures-form-a-real-normed-space inherited\n  thm-finitely-many-discontinuities-integrable inherited\n  thm-first-fundamental-theorem-of-calculus-for-l-one inherited\n  thm-first-mean-value-theorem-for-integrals inherited\n  thm-first-mertens-theorem-for-primes     inherited\n  thm-first-order-linear-ode-integrating-factor inherited\n  thm-five-colour-theorem                  inherited\n  thm-floating-point-dot-product-componentwise-and-normwise-error-bounds inherited\n  thm-flow-box-theorem                     inherited\n  thm-flowout-theorem                      inherited\n  thm-flux-under-surface-reparametrization inherited\n  thm-frattini-formula-for-finitely-generated-pro-p-groups inherited\n  thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups inherited\n  thm-frattini-subgroup-commutes-with-surjective-inverse-limits inherited\n  thm-frolik-internal-characterisation-of-cech-completeness inherited\n  thm-frullani-integral-proper-factor      inherited\n  thm-ftc-first-part                       inherited\n  thm-fubini-over-a-region-between-continuous-graphs inherited\n  thm-function-space-is-complete-for-a-complete-target inherited\n  thm-fundamental-group-laws               inherited\n  thm-fundamental-group-of-a-product       inherited\n  thm-fundamental-group-of-a-topological-group-is-abelian inherited\n  thm-fundamental-group-of-finite-wedge-of-circles inherited\n  thm-fundamental-group-of-the-circle      inherited\n  thm-fundamental-inequality-for-complex-line-integrals inherited\n  thm-fundamental-theorem-for-autonomous-smooth-odes inherited\n  thm-fundamental-theorem-for-complex-line-integrals inherited\n  thm-fundamental-theorem-for-nonautonomous-smooth-odes inherited\n  thm-fundamental-theorem-of-algebra-liouville-proof inherited\n  thm-fundamental-theorem-of-algebra-minimum-modulus-proof inherited\n  thm-fundamental-theorem-of-algebra-via-the-fundamental-group inherited\n  thm-fundamental-theorem-on-flows         inherited\n  thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable inherited\n  thm-gamma-functional-equation            inherited\n  thm-gamma-meromorphic-continuation       inherited\n  thm-gamma-weierstrass-product            inherited\n  thm-gauge-fixed-simple-eigenvector-derivative-formula inherited\n  thm-gauss-multiplication-formula         inherited\n  thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound inherited\n  thm-gaussian-integral                    inherited\n  thm-generalized-holder-inequality-for-products inherited\n  thm-germ-projection-is-a-local-biholomorphism inherited\n  thm-global-cauchy-integral-formula-homology inherited\n  thm-goursat-theorem-one-exceptional-point inherited\n  thm-goursat-triangle-theorem             inherited\n  thm-gradient-represents-directional-derivatives-and-steepest-ascent inherited\n  thm-gradient-theorem-for-line-integrals  inherited\n  thm-grand-equivalence-for-simply-connected-plane-domains inherited\n  thm-graph-of-continuous-function-on-a-compact-set-has-content-zero inherited\n  thm-graphs-of-continuous-functions-have-content-zero inherited\n  thm-great-picard-theorem                 inherited\n  thm-greens-theorem-for-finite-unions-of-elementary-regions inherited\n  thm-gregory-leibniz-series-for-pi-from-a-finite-remainder inherited\n  thm-gronwall-integral-inequality         inherited\n  thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups inherited\n  thm-hadamard-factorization-for-finite-order-entire-functions inherited\n  thm-hadamard-product-for-riemann-xi      inherited\n  thm-hadamard-three-lines                 inherited\n  thm-half-angle-identities-with-sign-conditions inherited\n  thm-hankel-representation-for-reciprocal-gamma inherited\n  thm-hardy-littlewood-maximal-inequality-for-balls inherited\n  thm-harmonic-and-holomorphic-schwarz-reflection-principles inherited\n  thm-harmonic-conjugate-on-homologically-simply-connected-domains inherited\n  thm-harmonic-majorant-characterization-of-plane-subharmonicity inherited\n  thm-harmonic-oscillator-initial-value-characterization inherited\n  thm-harnack-convergence-principle-for-plane-harmonic-functions inherited\n  thm-harnack-inequality-on-a-disc         inherited\n  thm-hartogs-extension-across-compact-holes inherited\n  thm-hartogs-figure-extension             inherited\n  thm-hartogs-separate-holomorphy          inherited\n  thm-hausdorff-completion-of-a-uniform-space inherited\n  thm-hausdorff-iff-net-limits-are-unique  inherited\n  thm-hausdorff-iff-the-diagonal-is-closed inherited\n  thm-heine-borel-rn                       inherited\n  thm-heine-cantor-metric                  inherited\n  thm-heine-cantor-r                       inherited\n  thm-hessian-characterises-convexity      inherited\n  thm-higher-dimensional-spheres-are-simply-connected inherited\n  thm-higher-regularity-of-local-inverses  inherited\n  thm-hilbert-cube-universal-for-separable-metrizable-spaces inherited\n  thm-holder-exponent-above-one-forces-constancy inherited\n  thm-holder-finite-real-exponents         inherited\n  thm-holder-inequality-for-integrals      inherited\n  thm-holomorphic-constant-rank-theorem    inherited\n  thm-holomorphic-germ-ring-is-a-ufd       inherited\n  thm-holomorphic-germ-ring-is-noetherian  inherited\n  thm-holomorphic-germs-at-a-point-form-a-local-ring inherited\n  thm-holomorphic-if-and-only-if-analytic  inherited\n  thm-holomorphic-implicit-function-theorem inherited\n  thm-holomorphic-inverse-contour-formula  inherited\n  thm-holomorphic-inverse-function-theorem inherited\n  thm-holomorphic-inverse-function-theorem-several-variables inherited\n  thm-holomorphic-logarithms-homologically-simply-connected-domains inherited\n  thm-holomorphic-parameter-riemann-integral inherited\n  thm-holomorphic-primitive-on-star-shaped-domain inherited\n  thm-holomorphic-pullback-of-plurisubharmonic-functions inherited\n  thm-homological-simple-connectivity-equivalences inherited\n  thm-homotopy-equivalence-is-an-equivalence-relation inherited\n  thm-homotopy-invariance-of-holomorphic-line-integrals inherited\n  thm-homotopy-lifting-for-covering-maps   inherited\n  thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model inherited\n  thm-hurwitz-injective-limit              inherited\n  thm-hurwitz-zero-free-limit              inherited\n  thm-hyperbolic-group-definition-is-independent-of-finite-generating-set inherited\n  thm-hyperbolic-identities-and-derivatives inherited\n  thm-hyperbolicity-is-invariant-under-quasi-isometry-for-geodesic-spaces inherited\n  thm-hypergraph-two-colouring-by-local-lemma inherited\n  thm-identity-principle-for-plane-harmonic-functions inherited\n  thm-identity-theorem-for-real-analytic-functions-on-an-interval inherited\n  thm-identity-theorem-holomorphic-functions inherited\n  thm-identity-theorem-in-several-complex-variables inherited\n  thm-improper-convergence-implies-principal-value inherited\n  thm-improper-p-test-rational             inherited\n  thm-induced-fundamental-group-map-functoriality inherited\n  thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized inherited\n  thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums inherited\n  thm-injective-c-one-images-of-compact-jordan-sets-are-jordan inherited\n  thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image inherited\n  thm-integral-exponential-agrees-with-exponential inherited\n  thm-integral-exponential-solves-the-normalised-ivp inherited\n  thm-integral-logarithm-derivative-and-normalisation inherited\n  thm-integral-logarithm-is-a-bijection    inherited\n  thm-integral-logarithm-is-unbounded      inherited\n  thm-integral-logarithm-product-law       inherited\n  thm-integration-by-parts                 inherited\n  thm-integration-by-parts-with-interior-derivatives inherited\n  thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures inherited\n  thm-invariance-of-complex-line-integrals-under-increasing-reparametrization inherited\n  thm-inverse-hyperbolic-logarithm-formulas inherited\n  thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected inherited\n  thm-inverse-limit-topology-equals-the-p-adic-metric-topology inherited\n  thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant inherited\n  thm-isolated-singularity-trichotomy      inherited\n  thm-isolated-zeros-holomorphic-function  inherited\n  thm-jacobi-theta-transformation          inherited\n  thm-jacobian-sign-is-constant-on-a-connected-regular-domain inherited\n  thm-jensen-formula-on-a-disc             inherited\n  thm-jordan-boundary-criterion            inherited\n  thm-jordan-content-and-indicator-integrability inherited\n  thm-jordan-content-is-translation-invariant inherited\n  thm-jordan-fubini-by-sections            inherited\n  thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content inherited\n  thm-joukowski-biholomorphism-outside-unit-disc inherited\n  thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion inherited\n  thm-kernel-and-fibres-of-complex-exponential inherited\n  thm-keyhole-residue-formula-mellin-rational-integrals inherited\n  thm-koebe-distortion-theorem             inherited\n  thm-koebe-growth-theorem                 inherited\n  thm-koebe-one-quarter-theorem            inherited\n  thm-kuratowski-wagner-planarity-characterisation inherited\n  thm-kuratowski-wojdyslawski-embedding    inherited\n  thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn inherited\n  thm-l-infinity-of-unit-interval-is-not-separable inherited\n  thm-l-one-approximate-identities-converge-in-l-p inherited\n  thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound inherited\n  thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions inherited\n  thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable inherited\n  thm-lagrange-multipliers-for-regular-level-set-constraints inherited\n  thm-landau-dirichlet-series              inherited\n  thm-landau-logarithm-limit               inherited\n  thm-landau-theorem                       inherited\n  thm-lattice-stone-weierstrass            inherited\n  thm-laurent-coefficient-formula-and-uniqueness inherited\n  thm-laurent-expansion-annulus            inherited\n  thm-laurent-regular-principal-decomposition inherited\n  thm-layer-cake-formula-for-l-p-powers    inherited\n  thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family inherited\n  thm-leaf-deletion-preserves-virality-of-a-finite-family inherited\n  thm-lebesgue-constants-grow-logarithmically inherited\n  thm-lebesgue-criterion-in-rn             inherited\n  thm-lebesgue-density-theorem             inherited\n  thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n inherited\n  thm-lebesgue-inner-regularity-by-closed-and-compact-sets inherited\n  thm-lebesgue-measure-is-a-complete-measure inherited\n  thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure inherited\n  thm-lebesgue-measure-of-a-box-of-every-kind inherited\n  thm-lebesgue-measure-under-dilations-and-reflections inherited\n  thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line inherited\n  thm-lebesgue-null-agrees-with-elementary-nullity-in-rn inherited\n  thm-lebesgue-number-lemma                inherited\n  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant inherited\n  thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume inherited\n  thm-lebesgue-outer-regularity-for-arbitrary-subsets inherited\n  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets inherited\n  thm-lebesgue-stieltjes-correspondence-with-distribution-functions inherited\n  thm-lebesgue-stieltjes-measures-are-regular-on-r inherited\n  thm-legendre-duplication-formula         inherited\n  thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains inherited\n  thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket inherited\n  thm-line-integrals-under-oriented-reparametrization inherited\n  thm-line-integrals-under-reversal-and-concatenation inherited\n  thm-linear-change-of-variables-for-lebesgue-measure inherited\n  thm-linear-images-scale-jordan-content-by-absolute-determinant inherited\n  thm-liouville-bounded-entire-function    inherited\n  thm-lipschitz-images-of-null-sets-in-rn-are-null inherited\n  thm-little-picard-theorem                inherited\n  thm-littlewood-characterisations-of-lebesgue-measurability inherited\n  thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order inherited\n  thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves inherited\n  thm-local-holomorphic-potential-for-harmonic-functions inherited\n  thm-local-maximum-modulus-principle      inherited\n  thm-local-normal-form-holomorphic-map    inherited\n  thm-locally-bounded-separate-holomorphy  inherited\n  thm-locally-compact-hausdorff-basics     inherited\n  thm-locally-compact-normed-space-iff-finite-dimensional inherited\n  thm-locally-connected-iff-components-of-open-sets-are-open inherited\n  thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables inherited\n  thm-log-modulus-of-a-holomorphic-function-is-subharmonic inherited\n  thm-log-one-plus-x-power-series          inherited\n  thm-logarithm-change-of-base             inherited\n  thm-logarithm-continuous-functional-equation-characterisation inherited\n  thm-logarithm-definition-equivalence     inherited\n  thm-logarithm-derivative-and-integral    inherited\n  thm-logarithm-differentiable-functional-equation-characterisation inherited\n  thm-logarithm-slower-than-every-positive-power inherited\n  thm-loglog-erdos-hajnal-bound            inherited\n  thm-lusins-theorem                       inherited\n  thm-lyapunov-interpolation-inequality-for-l-p-norms inherited\n  thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity inherited\n  thm-matrix-perturbation-bound-for-ax-equals-b inherited\n  thm-maximum-and-minimum-principles-for-plane-harmonic-functions inherited\n  thm-maximum-modulus-principle-in-several-complex-variables inherited\n  thm-maximum-modulus-principle-with-boundary-and-infinity-control inherited\n  thm-mean-value-inequality                inherited\n  thm-mean-value-inequality-for-total-derivatives inherited\n  thm-mean-value-property-for-plane-harmonic-functions inherited\n  thm-meromorphic-functions-riemann-sphere-are-rational inherited\n  thm-metric-closure-characterisation      inherited\n  thm-metric-compactness-equivalences      inherited\n  thm-metric-completion-carries-a-unique-banach-space-structure inherited\n  thm-metric-completion-exists             inherited\n  thm-metric-completion-unique             inherited\n  thm-metric-continuity-characterisations  inherited\n  thm-metric-countability-equivalences     inherited\n  thm-metric-equivalence-hierarchy         inherited\n  thm-metric-regularity-hierarchy          inherited\n  thm-metric-sequential-closure            inherited\n  thm-metric-spaces-are-completely-normal  inherited\n  thm-metric-spaces-are-tychonoff-and-perfectly-normal inherited\n  thm-metric-weight-equals-density         inherited\n  thm-metrizable-cech-complete-spaces-are-completely-metrizable inherited\n  thm-minimum-modulus-principle            inherited\n  thm-minkowski-finite-real-exponents      inherited\n  thm-minkowski-inequality-for-integrals   inherited\n  thm-minkowski-integral-inequality        inherited\n  thm-mittag-leffler-expansion-of-pi-cotangent inherited\n  thm-mittag-leffler-theorem-on-plane-domains inherited\n  thm-mittag-leffler-theorem-on-the-plane  inherited\n  thm-mobius-group-and-projective-linear-identification inherited\n  thm-mobius-preserves-circlines-and-reflections inherited\n  thm-mobius-transformations-biholomorphic-sphere inherited\n  thm-monodromy-theorem                    inherited\n  thm-monotone-change-of-variable-for-riemann-integrals inherited\n  thm-montel-caratheodory-theorem          inherited\n  thm-montel-theorem-for-holomorphic-functions inherited\n  thm-morera-triangle-theorem              inherited\n  thm-morse-lemma                          inherited\n  thm-morse-sard-for-euclidean-maps        inherited\n  thm-morse-sard-for-smooth-manifolds      inherited\n  thm-multidimensional-darboux-equals-riemann inherited\n  thm-multidimensional-integral-properties inherited\n  thm-multidimensional-riemann-criterion   inherited\n  thm-multiplicative-dirichlet-series-euler-product inherited\n  thm-multivariable-second-derivative-test inherited\n  thm-multivariable-taylor-formula-with-lagrange-remainder inherited\n  thm-nagata-smirnov-metrization           inherited\n  thm-natural-logarithm-laws               inherited\n  thm-nearest-point-in-a-nonempty-closed-convex-set inherited\n  thm-nikiforov-few-induced-copies-force-a-linear-restricted-set inherited\n  thm-no-continuous-logarithm-on-the-punctured-complex-plane inherited\n  thm-no-retraction-of-the-closed-disk-onto-the-circle inherited\n  thm-nonnegative-continuous-with-zero-integral-vanishes inherited\n  thm-nonnegative-improper-multiple-integral-by-exhaustion inherited\n  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line inherited\n  thm-nonsingleton-boundary-component-is-regular inherited\n  thm-nonzero-complex-derivative-iff-oriented-conformal inherited\n  thm-norm-inequality-for-the-vector-valued-integral inherited\n  thm-normal-convergence-of-holomorphic-products inherited\n  thm-normal-equations-for-best-affine-l2-prediction inherited\n  thm-normal-equations-square-the-spectral-condition-number inherited\n  thm-normal-holomorphic-families-are-locally-bounded inherited\n  thm-normality-is-not-hereditary          inherited\n  thm-normality-is-not-productive          inherited\n  thm-normalized-exponential-functional-equation inherited\n  thm-nowhere-differentiable-functions-are-dense-in-c01 inherited\n  thm-null-homology-is-equivalent-to-global-harmonic-conjugates inherited\n  thm-one-point-compactification-properties inherited\n  thm-open-connected-subsets-of-rn-are-polygonally-connected inherited\n  thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables inherited\n  thm-open-mapping-theorem-holomorphic-functions inherited\n  thm-open-subsets-of-rn-admit-jordan-exhaustions inherited\n  thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes inherited\n  thm-orbit-map-of-a-covering-space-action-is-a-covering inherited\n  thm-ordinal-spaces-and-compactness       inherited\n  thm-osgood-lemma-in-several-complex-variables inherited\n  thm-osgood-uniqueness-criterion-for-first-order-odes inherited\n  thm-ostrowskis-theorem-for-the-rationals inherited\n  thm-p-adic-completion-agrees-with-the-fraction-field-of-zp inherited\n  thm-p-adic-completion-is-a-field         inherited\n  thm-p-adic-digit-expansion               inherited\n  thm-p-adic-newton-criterion              inherited\n  thm-p-series-real-exponents              inherited\n  thm-p3-free-graphs-have-square-root-homogeneous-sets inherited\n  thm-paracompact-hausdorff-implies-normal inherited\n  thm-parallelogram-content-and-base-height-formula inherited\n  thm-parallelogram-law-in-l-two           inherited\n  thm-parametric-transversality            inherited\n  thm-parametrized-constraint-necessary-condition inherited\n  thm-parametrized-implicit-function-theorem-with-higher-regularity inherited\n  thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces inherited\n  thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property inherited\n  thm-path-connected-implies-connected     inherited\n  thm-path-independence-and-complex-primitive-criterion inherited\n  thm-path-independence-iff-zero-closed-loop-integrals inherited\n  thm-path-independent-field-has-a-potential-by-line-integrals inherited\n  thm-path-lifting-for-covering-maps       inherited\n  thm-peano-local-existence-for-continuous-odes inherited\n  thm-peano-mixed-partial-theorem          inherited\n  thm-perfectly-normal-implies-completely-normal inherited\n  thm-perron-envelope-is-harmonic          inherited\n  thm-perron-solves-dirichlet-on-regular-plane-domains inherited\n  thm-pi-equivalent-characterizations-ledger inherited\n  thm-pi-zero-and-period-characterizations inherited\n  thm-picard-iterates-for-exponential      inherited\n  thm-picard-lindelof-local-existence-and-uniqueness inherited\n  thm-plane-dual-exists-and-double-dual-recovers-primal inherited\n  thm-plane-harmonic-functions-are-smooth-and-real-analytic inherited\n  thm-plane-not-homeomorphic-to-other-euclidean-spaces inherited\n  thm-plane-subharmonic-functions-are-locally-integrable inherited\n  thm-poincare-distance-formula-and-disc-automorphism-invariance inherited\n  thm-poincare-lemma-for-star-shaped-domains inherited\n  thm-pointwise-compactness-criterion-for-function-families inherited\n  thm-poisson-integral-solves-the-disc-dirichlet-problem inherited\n  thm-poisson-modification-preserves-subharmonicity-and-majorizes inherited\n  thm-poisson-representation-for-disc-harmonic-functions inherited\n  thm-polar-coordinates-formula-for-lebesgue-measure inherited\n  thm-polar-form-with-unique-principal-argument inherited\n  thm-pole-characterizations               inherited\n  thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube inherited\n  thm-polish-subspaces-are-exactly-g-delta-subspaces inherited\n  thm-polygonal-jordan-curve               inherited\n  thm-positive-heredity-of-separation-axioms inherited\n  thm-positive-productivity-of-separation-axioms inherited\n  thm-power-series-define-holomorphic-functions-in-several-variables inherited\n  thm-power-series-expansion-in-several-complex-variables inherited\n  thm-power-series-reexpansion-at-an-interior-point inherited\n  thm-power-series-sums-are-real-analytic  inherited\n  thm-preimage-theorem-for-submanifolds-under-submersions inherited\n  thm-primitives-homologically-simply-connected-domains inherited\n  thm-principal-branch-power-agrees-with-positive-real-power inherited\n  thm-principal-exponential-biholomorphism-from-principal-strip inherited\n  thm-principal-inverse-sine-and-cosine-derivatives inherited\n  thm-principal-inverse-tangent-calculus   inherited\n  thm-principal-logarithm-biholomorphism-to-the-principal-strip inherited\n  thm-pringsheim-theorem                   inherited\n  thm-probability-law-and-distribution-function-correspondence inherited\n  thm-product-formula-for-the-rationals    inherited\n  thm-product-to-sum-and-sum-to-product-identities inherited\n  thm-profinite-completion-is-functorial   inherited\n  thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets inherited\n  thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss inherited\n  thm-punctured-rn-deformation-retracts-onto-the-sphere inherited\n  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions inherited\n  thm-quarter-turn-values-and-shift-formulas inherited\n  thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces inherited\n  thm-quasicomponents-equal-components-in-a-compact-hausdorff-space inherited\n  thm-quotient-map-is-open                 inherited\n  thm-quotient-of-banach-by-closed-subspace-is-banach inherited\n  thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed inherited\n  thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space inherited\n  thm-radial-straight-line-map-on-punctured-rn inherited\n  thm-ramsey-logarithmic-homogeneous-set-bound inherited\n  thm-random-graph-logarithmic-homogeneous-set-upper-bound inherited\n  thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn inherited\n  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn inherited\n  thm-rational-map-fibre-count-degree      inherited\n  thm-rational-points-and-boxes-in-rn      inherited\n  thm-rational-supremum-power-agrees-with-exp inherited\n  thm-real-analytic-functions-closed-under-algebra-quotients-and-composition inherited\n  thm-real-beta-gamma-identity             inherited\n  thm-real-beta-integral-convergence       inherited\n  thm-real-cross-ratio-circline-characterization inherited\n  thm-real-de-moivre-binomial-multiple-angle-formulas inherited\n  thm-real-gamma-endpoint-behaviour-and-unique-minimum inherited\n  thm-real-gamma-euler-integral-convergence inherited\n  thm-real-gamma-functional-equation       inherited\n  thm-real-gamma-is-log-convex             inherited\n  thm-real-gamma-is-smooth                 inherited\n  thm-real-gamma-one-half-wallis-proof     inherited\n  thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle inherited\n  thm-real-power-agrees-with-rational-exponent inherited\n  thm-real-power-continuity-and-derivatives inherited\n  thm-real-power-laws                      inherited\n  thm-real-stirling-formula                inherited\n  thm-real-stone-weierstrass-dichotomy-for-separating-algebras inherited\n  thm-real-stone-weierstrass-for-compact-metric-spaces inherited\n  thm-real-stone-weierstrass-general       inherited\n  thm-rearrangement-sums-lie-in-an-affine-subspace inherited\n  thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity inherited\n  thm-rectifiable-iff-coordinate-functions-have-bounded-variation inherited\n  thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number inherited\n  thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral inherited\n  thm-regular-covering-characterizations   inherited\n  thm-regular-level-surfaces-have-local-regular-parametrizations inherited\n  thm-regular-locus-is-open                inherited\n  thm-relative-whitney-approximation-for-euclidean-valued-maps inherited\n  thm-relative-whitney-approximation-for-manifold-valued-maps inherited\n  thm-removability-of-a-puncture-in-several-complex-variables inherited\n  thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions inherited\n  thm-removable-singularity-characterizations inherited\n  thm-residual-to-forward-error-bounds-for-linear-systems inherited\n  thm-residue-evaluation-principal-value-real-poles inherited\n  thm-residue-evaluation-rational-fourier-integrals inherited\n  thm-residue-evaluation-rational-real-integrals inherited\n  thm-residue-pole-derivative-formula      inherited\n  thm-residue-theorem-null-homologous-cycle inherited\n  thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one inherited\n  thm-riemann-extension-across-a-coordinate-hyperplane inherited\n  thm-riemann-extension-across-hypersurface-zero-sets inherited\n  thm-riemann-fubini-on-product-rectangles inherited\n  thm-riemann-lebesgue-lemma-for-continuous-functions inherited\n  thm-riemann-lebesgue-lemma-for-fourier-coefficients inherited\n  thm-riemann-localisation-principle-for-fourier-series inherited\n  thm-riemann-mapping-theorem              inherited\n  thm-riemann-stieltjes-and-parametric-contour-integrals-agree inherited\n  thm-riemann-stieltjes-c1-integrator-reduction inherited\n  thm-riemann-stieltjes-change-of-variable inherited\n  thm-riemann-stieltjes-continuous-composition inherited\n  thm-riemann-stieltjes-countable-step-integrator inherited\n  thm-riemann-stieltjes-existence-continuous-bv inherited\n  thm-riemann-stieltjes-existence-finitely-discontinuous inherited\n  thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators inherited\n  thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral inherited\n  thm-riemann-surface-of-an-nth-root       inherited\n  thm-riemann-surface-of-the-logarithm     inherited\n  thm-riemann-xi-is-entire-of-order-one    inherited\n  thm-riemann-zeta-continuation-to-the-right-half-plane inherited\n  thm-riemann-zeta-functional-equation     inherited\n  thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane inherited\n  thm-riemann-zeta-meromorphic-continuation inherited\n  thm-riesz-fischer-completeness-of-l-p    inherited\n  thm-riesz-thorin-interpolation           inherited\n  thm-right-hand-side-perturbation-bound-for-ax-equals-b inherited\n  thm-rouche-theorem                       inherited\n  thm-runge-approximation-on-plane-domains inherited\n  thm-runge-approximation-with-prescribed-poles inherited\n  thm-saft-yields-the-stone-cech-adjunction inherited\n  thm-samuel-compactification-universal-property inherited\n  thm-samuel-completion-is-a-compactification inherited\n  thm-scalar-and-vector-line-integral-estimates inherited\n  thm-scalar-surface-integrals-on-a-surface-of-revolution inherited\n  thm-schottky-theorem                     inherited\n  thm-schwarz-pick-lemma-on-the-unit-disc  inherited\n  thm-second-countable-implies-lindelof    inherited\n  thm-second-mean-value-theorem-for-integrals inherited\n  thm-second-mertens-theorem-for-primes    inherited\n  thm-sector-power-map-is-biholomorphic-on-narrow-sectors inherited\n  thm-seifert-van-kampen                   inherited\n  thm-separated-uniformity-iff-induced-topology-is-hausdorff inherited\n  thm-separating-hyperplane-theorem-for-disjoint-convex-sets inherited\n  thm-sequentially-compact-implies-totally-bounded inherited\n  thm-seven-generators-of-the-borel-sigma-algebra-on-r inherited\n  thm-sheets-equal-fundamental-group-index inherited\n  thm-shoelace-formula-for-simple-polygons inherited\n  thm-sigma-finite-duality-for-bounded-functionals-on-l-p inherited\n  thm-signed-infinite-product-square-summability-criterion inherited\n  thm-simple-continued-fractions-parametrise-the-irrationals inherited\n  thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing inherited\n  thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum inherited\n  thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p inherited\n  thm-simple-polygon-admits-a-triangulation inherited\n  thm-simple-polygon-content-is-the-sum-of-triangle-contents inherited\n  thm-sine-and-cosine-addition-formulas    inherited\n  thm-sine-and-cosine-derivatives          inherited\n  thm-sine-and-cosine-parametrize-the-unit-circle inherited\n  thm-sine-and-cosine-subtraction-formulas inherited\n  thm-sine-biholomorphism-from-upper-half-strip inherited\n  thm-sine-cosine-signs-monotonicity-and-ranges inherited\n  thm-sine-cosine-zero-sets-and-fundamental-period inherited\n  thm-sine-has-its-weierstrass-product     inherited\n  thm-single-pattern-and-finite-family-erdos-hajnal-formulations inherited\n  thm-six-colour-theorem-for-planar-graphs inherited\n  thm-slit-plane-root-branch-biholomorphism-to-a-sector inherited\n  thm-small-dominating-set-from-minimum-degree inherited\n  thm-smirnov-local-metrization            inherited\n  thm-smooth-dependence-of-ode-solutions-on-parameters inherited\n  thm-smooth-dependence-of-solutions-on-initial-data inherited\n  thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity inherited\n  thm-smooth-inverse-function-theorem-on-manifolds inherited\n  thm-smooth-partitions-of-unity-exist-on-manifolds inherited\n  thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set inherited\n  thm-solid-between-continuous-graphs-fubini-formula inherited\n  thm-special-values-of-riemann-zeta-at-integers inherited\n  thm-square-criterion-in-q2               inherited\n  thm-square-criterion-in-qp-for-odd-p     inherited\n  thm-stability-operations-for-plurisubharmonic-functions inherited\n  thm-standard-maclaurin-expansions        inherited\n  thm-steinhaus-difference-set-contains-a-ball inherited\n  thm-steinitz-polygonal-confinement       inherited\n  thm-stereographic-projection-riemann-sphere-homeomorphism inherited\n  thm-stirling-formula-gamma               inherited\n  thm-stone-cech-evaluation-closure-universal-property inherited\n  thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces inherited\n  thm-strict-separation-of-a-point-from-a-closed-convex-set inherited\n  thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property inherited\n  thm-subordinate-partitions-of-unity-exist inherited\n  thm-substitution                         inherited\n  thm-substitution-for-improper-integrals  inherited\n  thm-substitution-preserves-the-erdos-hajnal-property inherited\n  thm-substitution-with-riemann-integrable-inner-derivative inherited\n  thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset inherited\n  thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set inherited\n  thm-surface-area-and-scalar-integrals-are-reparametrization-invariant inherited\n  thm-surface-area-density-is-cross-product-norm inherited\n  thm-surface-integrals-over-c-one-graphs  inherited\n  thm-svarc-milnor-lemma                   inherited\n  thm-symmetric-and-alternating-images-are-smooth-subbundles inherited\n  thm-symmetry-of-higher-mixed-partials    inherited\n  thm-t4-implies-t3                        inherited\n  thm-takagi-function-is-continuous-and-nowhere-differentiable inherited\n  thm-tangent-cotangent-secant-cosecant-derivatives-and-periods inherited\n  thm-tangent-half-angle-rational-parametrization inherited\n  thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades inherited\n  thm-taylor-expansion-holomorphic-function inherited\n  thm-tensor-transition-laws-define-a-smooth-vector-bundle inherited\n  thm-termwise-differentiation-of-a-real-power-series inherited\n  thm-termwise-differentiation-of-complex-power-series inherited\n  thm-the-classical-stokes-theorem-for-a-c2-surface-patch inherited\n  thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain inherited\n  thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse inherited\n  thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure inherited\n  thm-the-curl-of-a-gradient-vanishes      inherited\n  thm-the-differential-sends-curve-velocities-to-composite-curve-velocities inherited\n  thm-the-divergence-of-a-curl-vanishes    inherited\n  thm-the-divergence-theorem-for-an-elementary-solid-region inherited\n  thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions inherited\n  thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations inherited\n  thm-the-exponential-law                  inherited\n  thm-the-global-differential-of-a-smooth-map-is-smooth inherited\n  thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property inherited\n  thm-the-integers-map-injectively-and-densely-into-zp inherited\n  thm-the-integral-function-is-lipschitz   inherited\n  thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric inherited\n  thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space inherited\n  thm-the-long-line-is-a-connected-linear-continuum inherited\n  thm-the-long-line-is-countably-compact-and-not-compact inherited\n  thm-the-pullback-fibre-product-is-a-smooth-vector-bundle inherited\n  thm-the-separation-implication-chain     inherited\n  thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic inherited\n  thm-the-standard-flat-function-is-smooth-and-flat-at-zero inherited\n  thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property inherited\n  thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure inherited\n  thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces inherited\n  thm-theta-mellin-representation-of-completed-zeta inherited\n  thm-third-mertens-theorem-for-primes     inherited\n  thm-three-point-transitivity-mobius-transformations inherited\n  thm-tietze-extension-theorem             inherited\n  thm-time-dependent-vector-fields-have-local-smooth-evolution-operators inherited\n  thm-topological-burnside-basis-theorem   inherited\n  thm-topological-characterisation-of-pro-p-groups inherited\n  thm-topological-characterisation-of-profinite-groups inherited\n  thm-topological-manifolds-are-metrizable-and-paracompact inherited\n  thm-topological-manifolds-are-sigma-compact inherited\n  thm-total-derivative-computes-directional-and-partial-derivatives inherited\n  thm-total-differentiability-gives-a-local-linear-bound-and-continuity inherited\n  thm-tournament-property-s-k-existence    inherited\n  thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity inherited\n  thm-transversality-homotopy-theorem      inherited\n  thm-transverse-fibre-product-theorem     inherited\n  thm-transverse-preimage-theorem          inherited\n  thm-triangle-content-and-base-height-formula inherited\n  thm-trigonometric-integral-unit-circle-substitution inherited\n  thm-triple-angle-identities              inherited\n  thm-trivial-zeros-and-critical-strip     inherited\n  thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold inherited\n  thm-two-maps-into-a-convex-set-are-homotopic inherited\n  thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets inherited\n  thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute inherited\n  thm-tychonoff-embedding-theorem          inherited\n  thm-uniform-cauchy-criterion-complex-functions inherited\n  thm-uniform-completion-universal-property-and-uniqueness inherited\n  thm-uniform-continuity-preserves-cauchy  inherited\n  thm-uniform-derivative-limit-on-a-closed-interval inherited\n  thm-uniform-limit-continuous-complex-functions inherited\n  thm-uniform-limit-continuous-real-functions inherited\n  thm-uniform-limit-interchanges-complex-line-integrals inherited\n  thm-uniform-limit-theorem                inherited\n  thm-uniformizable-iff-completely-regular inherited\n  thm-uniformly-continuous-extension-from-dense inherited\n  thm-unique-maximal-integral-curve-through-each-point inherited\n  thm-uniqueness-in-weierstrass-preparation inherited\n  thm-uniqueness-of-analytic-continuation  inherited\n  thm-uniqueness-of-dirichlet-series-coefficients inherited\n  thm-uniqueness-of-lifts-from-a-connected-space inherited\n  thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r inherited\n  thm-unit-disc-schwarz-lemma-with-rigidity inherited\n  thm-unit-semicircle-arc-length-is-pi     inherited\n  thm-universal-cover-existence            inherited\n  thm-universal-cover-uniqueness-and-dominating-property inherited\n  thm-universal-covering-spaces-force-semilocal-simple-connectedness inherited\n  thm-universal-property-of-profinite-completion inherited\n  thm-universal-property-of-the-normed-quotient inherited\n  thm-upper-envelope-theorem-for-plane-subharmonic-functions inherited\n  thm-upper-envelope-theorem-for-plurisubharmonic-functions inherited\n  thm-upper-half-plane-automorphisms-are-real-mobius-maps inherited\n  thm-urysohn-lemma                        inherited\n  thm-vector-bundle-construction-from-a-smooth-cocycle inherited\n  thm-vector-fields-form-a-lie-algebra     inherited\n  thm-viete-product-for-pi                 inherited\n  thm-vitali-covering-lemma-for-balls-with-fivefold-dilates inherited\n  thm-vitali-porter-convergence-theorem    inherited\n  thm-volume-of-a-closed-three-ball-cavalieri-proof inherited\n  thm-volume-of-a-solid-of-revolution-by-discs inherited\n  thm-volume-recursion-for-closed-euclidean-balls inherited\n  thm-von-mangoldt-divisor-sum-identity    inherited\n  thm-von-mangoldt-logarithmic-derivative-zeta inherited\n  thm-wallis-product-for-pi                inherited\n  thm-weak-approximation-for-rational-places inherited\n  thm-weak-whitney-proper-embedding-theorem inherited\n  thm-weierstrass-convergence-holomorphic-functions inherited\n  thm-weierstrass-division-theorem         inherited\n  thm-weierstrass-factorization-for-entire-functions inherited\n  thm-weierstrass-m-test-for-complex-function-series inherited\n  thm-weierstrass-preparation-theorem      inherited\n  thm-weierstrass-product-theorem-on-the-complex-plane inherited\n  thm-weighted-am-gm-real                  inherited\n  thm-weighted-argument-principle          inherited\n  thm-whitney-approximation-for-euclidean-valued-maps inherited\n  thm-whitney-approximation-for-manifold-valued-maps inherited\n  thm-whitney-sums-are-smooth-vector-bundles inherited\n  thm-winding-number-chain-laws            inherited\n  thm-winding-number-circle-traversed-k-times inherited\n  thm-winding-number-equals-circle-degree  inherited\n  thm-winding-number-is-integer            inherited\n  thm-winding-number-locally-constant      inherited\n  thm-winding-number-of-a-cycle-is-integer inherited\n  thm-winding-number-zero-unbounded-component inherited\n  thm-wirtinger-chain-rule-for-real-differentiable-maps inherited\n  thm-young-convolution-inequality         inherited\n  thm-young-inequality-real-exponents      inherited\n  thm-young-mixed-partial-theorem          inherited\n  thm-zero-complex-derivative-on-a-domain-implies-constant inherited\n  thm-zero-derivative-on-connected-open-euclidean-set-iff-constant inherited\n  thm-zero-divisor-theorem-on-plane-domains inherited\n  thm-zero-exponent-is-bounded-by-entire-order inherited\n  thm-zero-order-factorization-holomorphic-function inherited\n  thm-zero-set-has-no-isolated-points-in-several-complex-variables inherited\n  thm-zp-is-compact-hausdorff-totally-disconnected-and-complete inherited\n  thm-zp-is-the-pro-p-completion-of-the-integers inherited\n\n2 ERROR(s):\n  [forward-undeclared] items/fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible.md: wikilink [[ex-reducing-an-integral-lattice-for-s-three]] points forward to modular-representations-and-projective-covers-examples (#150.002); declare it in forward_refs so it is marked as a forward reference\n  [stack-cycle] CIRCULAR PAGES: modular-representations-and-projective-covers -> modular-representations-and-projective-covers-examples -> modular-representations-and-projective-covers\n\nFAIL\n",
      "named_ids": [
        "ex-reducing-an-integral-lattice-for-s-three",
        "fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible"
      ]
    },
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel]: L1 quote does not occur in lem-a-complement-induces-the-conjugation-action-on-the-kernel's Statement",
      "output": "proof-contract: 165 error(s), 2 warning(s), 575/575 item(s) checked\nERROR citation-quote-mismatch [prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel]: L1 quote does not occur in lem-a-complement-induces-the-conjugation-action-on-the-kernel's Statement\nERROR citation-fact-uncontracted [thm-schur-zassenhaus-existence]: L4 -> thm-sylow-second-theorem needs an exact citation contract\nERROR step-entry-input-omitted [thm-schur-zassenhaus-existence]: step-3-1 omits L4, cited by 3.1\nERROR citation-use-not-supported [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: F1 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: F1 is cited by 4.1 but the contract omits it\nERROR citation-use-unmapped [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: L1 is cited by 2.1 but the contract omits it\nERROR citation-fact-missing [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: L3 is not a fact in thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras\nERROR step-entry-input-fact-missing [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: step-1-1 names missing fact L3\nERROR step-entry-input-omitted [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-fact-missing [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: step-2-1 names missing fact L3\nERROR step-entry-input-omitted [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: step-3-1 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: step-4-1 omits F1, cited by 4.1\nERROR step-unmapped [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]: 5.1 has no derivation or routine-step contract\nERROR citation-fact-uncontracted [thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules]: L2 -> lem-radical-of-a-finite-length-module-is-superfluous needs an exact citation contract\nERROR step-entry-input-omitted [thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules]: step-2-1 omits L2, cited by 2.1\nERROR citation-quote-mismatch [cor-the-regular-module-decomposes-into-projective-indecomposables]: L2 quote does not occur in thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules's Statement\nERROR citation-use-not-supported [thm-kg-is-local-iff-g-is-a-p-group]: F1 is not cited by declared use 1.2\nERROR citation-use-not-supported [thm-kg-is-local-iff-g-is-a-p-group]: L2 is not cited by declared use 1.2\nERROR citation-source-not-in-fact [thm-kg-is-local-iff-g-is-a-p-group]: L3 does not link [[prop-induced-module-decomposes-over-a-left-transversal]]\nERROR citation-undeclared-dependency [thm-kg-is-local-iff-g-is-a-p-group]: L3 cites prop-induced-module-decomposes-over-a-left-transversal, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-kg-is-local-iff-g-is-a-p-group]: L3 -> thm-cauchys-theorem-for-finite-groups needs an exact citation contract\nERROR citation-fact-uncontracted [thm-kg-is-local-iff-g-is-a-p-group]: L4 -> thm-group-ring-is-a-unital-algebra-with-basis-g needs an exact citation contract\nERROR step-entry-input-omitted [thm-kg-is-local-iff-g-is-a-p-group]: step-1-2 omits L4, cited by 1.2\nERROR step-unmapped [thm-kg-is-local-iff-g-is-a-p-group]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p]: L1 quote does not occur in thm-kg-is-local-iff-g-is-a-p-group's Statement\nERROR citation-source-not-in-fact [prop-normal-p-subgroups-act-trivially-on-simple-modules]: L1 does not link [[cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p]]\nERROR citation-undeclared-dependency [prop-normal-p-subgroups-act-trivially-on-simple-modules]: L1 cites cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [prop-normal-p-subgroups-act-trivially-on-simple-modules]: L1 -> thm-kg-is-local-iff-g-is-a-p-group needs an exact citation contract\nERROR citation-quote-mismatch [thm-higman-criterion-for-relative-projectivity]: F1 quote does not occur in def-relative-projectivity's Definition\nERROR citation-quote-mismatch [thm-green-vertex-source-existence-and-conjugacy]: F1 quote does not occur in def-vertex-and-source-of-an-indecomposable-module's Definition\nERROR citation-use-unmapped [thm-green-vertex-source-existence-and-conjugacy]: F1 is cited by 2.2 but the contract omits it\nERROR citation-use-unmapped [thm-green-vertex-source-existence-and-conjugacy]: L1 is cited by 1.2 but the contract omits it\nERROR citation-use-unmapped [thm-green-vertex-source-existence-and-conjugacy]: L2 is cited by 2.2 but the contract omits it\nERROR step-entry-input-omitted [thm-green-vertex-source-existence-and-conjugacy]: step-2-1 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [thm-green-vertex-source-existence-and-conjugacy]: step-3-1 omits 2.2, cited by 3.1\nERROR step-entry-input-omitted [thm-green-vertex-source-existence-and-conjugacy]: step-4-1 omits 1.2, cited by 4.1\nERROR step-entry-input-omitted [thm-green-vertex-source-existence-and-conjugacy]: step-4-1 omits 2.2, cited by 4.1\nERROR step-unmapped [thm-green-vertex-source-existence-and-conjugacy]: 1.2 has no derivation or routine-step contract\nERROR step-unmapped [thm-green-vertex-source-existence-and-conjugacy]: 2.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [cor-projective-indecomposable-modules-have-trivial-vertex]: F1 quote does not occur in def-vertex-and-source-of-an-indecomposable-module's Definition\nERROR citation-use-not-supported [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: F1 is not cited by declared use 1.1\nERROR citation-use-unmapped [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: F1 is cited by 2.1 but the contract omits it\nERROR citation-fact-uncontracted [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: L1 -> ex-reducing-an-integral-lattice-for-s-three needs an exact citation contract\nERROR step-entry-input-omitted [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: step-2-1 omits F1, cited by 2.1\nERROR step-entry-input-omitted [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: step-2-1 omits L1, cited by 2.1\nERROR citation-quote-mismatch [fs-a-vertex-is-a-vertex-of-the-cayley-graph]: F1 quote does not occur in def-vertex-and-source-of-an-indecomposable-module's Definition\nERROR citation-quote-mismatch [ex-the-regular-module-of-cp-in-characteristic-p]: L1 quote does not occur in thm-kg-is-local-iff-g-is-a-p-group's Statement\nERROR citation-quote-mismatch [ex-the-augmentation-ideal-and-loewy-series-for-kcp]: L1 quote does not occur in thm-kg-is-local-iff-g-is-a-p-group's Statement\nERROR citation-fact-missing [ex-projective-cover-of-the-trivial-module-for-a-p-group]: L1 is not a fact in ex-projective-cover-of-the-trivial-module-for-a-p-group\nERROR citation-quote-mismatch [ex-projective-cover-of-the-trivial-module-for-a-p-group]: L2 quote does not occur in thm-kg-is-local-iff-g-is-a-p-group's Statement\nERROR step-entry-input-fact-missing [ex-projective-cover-of-the-trivial-module-for-a-p-group]: step-2-1 names missing fact L1\nERROR step-unmapped [ex-reducing-an-integral-lattice-for-s-three]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [cex-an-ordinary-irreducible-with-reducible-mod-p-reduction]: L2 quote does not occur in ex-reducing-an-integral-lattice-for-s-three's Example\nERROR citation-quote-mismatch [thm-zp-is-the-pro-p-completion-of-the-integers]: F1 quote does not occur in def-pro-p-completion-of-an-abstract-group's Definition\nERROR citation-fact-uncontracted [thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups]: L1 -> thm-frattini-formula-for-finitely-generated-pro-p-groups needs an exact citation contract\nERROR step-entry-input-omitted [thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups]: step-1-1 omits L1, cited by 1.1\nERROR step-entry-input-fact-missing [thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups]: step-1-1 names missing fact F1\nERROR step-entry-input-omitted [thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-fact-missing [thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups]: step-2-1 names missing fact F1\nERROR citation-quote-mismatch [ex-pro-p-completion-of-a-finite-p-group]: F1 quote does not occur in def-pro-p-completion-of-an-abstract-group's Definition\nERROR citation-quote-mismatch [lem-hensel-factor-corrections-form-cauchy-sequences]: L1 quote does not occur in lem-hensel-factor-correction-one-stage's Statement\nERROR citation-fact-missing [lem-hensel-factor-lift-uniqueness-induction]: L2 is not a fact in lem-hensel-factor-lift-uniqueness-induction\nERROR step-entry-input-fact-missing [lem-hensel-factor-lift-uniqueness-induction]: step-2-1 names missing fact L2\nERROR citation-quote-mismatch [prop-uniqueness-of-hensel-factor-lifting]: L2 quote does not occur in lem-hensel-factor-lift-uniqueness-induction's Statement\nERROR citation-quote-mismatch [cor-henselian-local-simple-root-criterion]: L2 quote does not occur in lem-simple-root-form-recovers-factor-lifting's Statement\nERROR citation-quote-mismatch [cor-complete-separated-adic-pair-henselian]: L3 quote does not occur in lem-hensel-factor-correction-one-stage's Statement\nERROR citation-quote-mismatch [cor-complete-separated-adic-pair-henselian]: L5 quote does not occur in lem-hensel-factor-lift-uniqueness-induction's Statement\nERROR citation-source-not-in-fact [lem-parameter-power-series-map-injective-by-dimension]: L3 does not link [[thm-krull-principal-ideal-theorem]]\nERROR citation-undeclared-dependency [lem-parameter-power-series-map-injective-by-dimension]: L3 cites thm-krull-principal-ideal-theorem, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [lem-parameter-power-series-map-injective-by-dimension]: L4 -> lem-integral-extension-chain-contraction-is-strict needs an exact citation contract\nERROR step-entry-input-omitted [lem-parameter-power-series-map-injective-by-dimension]: step-3-1 omits L4, cited by 3.1\nERROR citation-quote-mismatch [ex-hensel-factor-correction-mod-three-powers]: L2 quote does not occur in lem-hensel-factor-correction-one-stage's Statement\nERROR citation-quote-mismatch [thm-hardy-littlewood-maximal-inequality-for-balls]: L4 quote does not occur in thm-vitali-covering-lemma-for-balls-with-fivefold-dilates's Statement\nERROR citation-quote-mismatch [thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]: L3 quote does not occur in thm-vitali-covering-lemma-for-balls-with-fivefold-dilates's Statement\nERROR citation-quote-mismatch [ex-jensen-for-logarithm-and-exponential]: L1 quote does not occur in thm-jensen-inequality-for-expectation's Statement\nERROR citation-use-step-missing [cex-a-random-variable-need-not-have-a-finite-expectation]: L1 names missing step 1.2\nERROR citation-use-unmapped [cex-a-random-variable-need-not-have-a-finite-expectation]: L1 is cited by 2.1 but the contract omits it\nERROR citation-fact-uncontracted [cex-a-random-variable-need-not-have-a-finite-expectation]: L2 -> def-integral-of-a-nonnegative-simple-function needs an exact citation contract\nERROR citation-fact-uncontracted [cex-a-random-variable-need-not-have-a-finite-expectation]: L2 -> prop-the-nonnegative-integral-agrees-with-the-simple-integral needs an exact citation contract\nERROR citation-fact-uncontracted [cex-a-random-variable-need-not-have-a-finite-expectation]: L2 -> thm-monotone-convergence-for-the-integral needs an exact citation contract\nERROR step-entry-step-missing [cex-a-random-variable-need-not-have-a-finite-expectation]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-omitted [cex-a-random-variable-need-not-have-a-finite-expectation]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [cex-a-random-variable-need-not-have-a-finite-expectation]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-step-missing [cex-a-random-variable-need-not-have-a-finite-expectation]: step-2-1 names missing step 1.2\nERROR step-unmapped [cex-a-random-variable-need-not-have-a-finite-expectation]: 3.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [lem-fourier-partial-sums-are-dirichlet-convolutions]: L1 quote does not occur in def-period-one-fourier-coefficients-partial-sums-and-convolution's Definition\nERROR citation-quote-mismatch [lem-step-functions-have-vanishing-torus-fourier-coefficients]: L1 quote does not occur in def-period-one-fourier-coefficients-partial-sums-and-convolution's Definition\nERROR citation-quote-mismatch [lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus]: L1 quote does not occur in def-period-one-fourier-coefficients-partial-sums-and-convolution's Definition\nERROR citation-quote-mismatch [thm-riemann-lebesgue-lemma-for-fourier-coefficients]: L1 quote does not occur in def-period-one-fourier-coefficients-partial-sums-and-convolution's Definition\nERROR citation-quote-mismatch [ex-fourier-partial-sums-of-the-sawtooth]: L1 quote does not occur in def-period-one-fourier-coefficients-partial-sums-and-convolution's Definition\nERROR citation-use-unmapped [thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism]: L2 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism]: L3 is not cited by declared use 2.1\nERROR step-entry-input-omitted [thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism]: step-3-1 omits L2, cited by 3.1\nERROR step-entry-input-omitted [thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism]: step-3-1 omits 1.1, cited by 3.1\nERROR citation-quote-mismatch [thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type]: L3 quote does not occur in def-twist-and-ribbon-structure's Definition\nERROR citation-quote-mismatch [fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category]: L1 quote does not occur in rem-what-is-needed-before-a-trace-can-be-written's Remark\nERROR citation-quote-mismatch [fs-a-braiding-suffices-to-define-a-trace]: L1 quote does not occur in rem-what-is-needed-before-a-trace-can-be-written's Remark\nERROR citation-use-not-supported [fs-a-braiding-suffices-to-define-a-trace]: L1 is not cited by declared use 1.1\nERROR citation-use-unmapped [fs-a-braiding-suffices-to-define-a-trace]: L1 is cited by 2.1 but the contract omits it\nERROR citation-source-not-in-fact [fs-a-braiding-suffices-to-define-a-trace]: L2 does not link [[thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type]]\nERROR citation-undeclared-dependency [fs-a-braiding-suffices-to-define-a-trace]: L2 cites thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type, which is absent from deps/justified_by/forward_refs\nERROR citation-use-not-supported [fs-a-braiding-suffices-to-define-a-trace]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [fs-a-braiding-suffices-to-define-a-trace]: L2 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [fs-a-braiding-suffices-to-define-a-trace]: L2 -> cex-not-every-monoidal-category-is-rigid needs an exact citation contract\nERROR step-entry-input-omitted [fs-a-braiding-suffices-to-define-a-trace]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [fs-a-braiding-suffices-to-define-a-trace]: step-2-1 omits L1, cited by 2.1\nERROR citation-quote-mismatch [fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure]: L1 quote does not occur in rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity's Remark\nERROR citation-fact-uncontracted [fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure]: L3 -> fs-the-left-and-right-traces-always-agree needs an exact citation contract\nERROR step-entry-input-omitted [fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-input-omitted [fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure]: step-2-1 omits L3, cited by 2.1\nERROR citation-quote-mismatch [prop-left-derived-maps-preserve-identities]: L1 quote does not occur in def-left-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [prop-left-derived-maps-preserve-composition]: L1 quote does not occur in def-left-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]: L1 quote does not occur in prop-left-derived-maps-preserve-identities's Statement\nERROR citation-quote-mismatch [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors]: L2 quote does not occur in prop-left-derived-maps-preserve-composition's Statement\nERROR citation-quote-mismatch [thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]: L1 quote does not occur in def-right-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors]: L4 quote does not occur in def-left-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors]: L4 quote does not occur in def-right-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [lem-the-change-of-projective-resolution-isomorphisms-are-natural]: L2 quote does not occur in lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects's Statement\nERROR citation-quote-mismatch [thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]: L2 quote does not occur in lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects's Statement\nERROR citation-quote-mismatch [thm-acyclic-resolution-theorem-for-right-derived-functors]: L1 quote does not occur in def-acyclic-object-for-a-left-exact-functor's Definition\nERROR citation-source-not-in-fact [thm-acyclic-resolution-theorem-for-right-derived-functors]: L4 does not link [[thm-horseshoe-lemma-for-injective-resolutions]]\nERROR citation-undeclared-dependency [thm-acyclic-resolution-theorem-for-right-derived-functors]: L4 cites thm-horseshoe-lemma-for-injective-resolutions, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-acyclic-resolution-theorem-for-right-derived-functors]: L4 -> thm-the-opposite-of-an-abelian-category-is-abelian needs an exact citation contract\nERROR citation-fact-uncontracted [thm-acyclic-resolution-theorem-for-right-derived-functors]: L4 -> thm-horseshoe-lemma-for-projective-resolutions needs an exact citation contract\nERROR citation-fact-uncontracted [thm-acyclic-resolution-theorem-for-right-derived-functors]: L6 -> thm-an-additive-functor-preserves-finite-biproducts needs an exact citation contract\nERROR step-entry-input-omitted [thm-acyclic-resolution-theorem-for-right-derived-functors]: step-2-1 omits L6, cited by 2.1\nERROR citation-quote-mismatch [thm-acyclic-resolution-theorem-for-left-derived-functors]: L1 quote does not occur in def-acyclic-object-for-a-right-exact-functor's Definition\nERROR citation-quote-mismatch [prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied]: L3 quote does not occur in prop-contravariant-derived-functors-are-derived-on-the-opposite-category's Statement\nERROR citation-use-not-supported [fs-enough-projectives-implies-a-canonical-resolution-for-every-object]: L2 is not cited by declared use 1.1\nERROR citation-use-unmapped [fs-enough-projectives-implies-a-canonical-resolution-for-every-object]: L2 is cited by 2.1 but the contract omits it\nERROR step-entry-input-omitted [fs-enough-projectives-implies-a-canonical-resolution-for-every-object]: step-2-1 omits L2, cited by 2.1\nERROR citation-quote-mismatch [fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift]: L1 quote does not occur in def-left-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift]: L2 quote does not occur in def-right-derived-map-relative-to-resolution-data's Definition\nERROR citation-quote-mismatch [fs-derived-functors-in-two-variables-are-automatically-balanced]: L1 quote does not occur in prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied's Statement\nERROR citation-quote-mismatch [fs-derived-functors-in-two-variables-are-automatically-balanced]: L2 quote does not occur in def-balanced-derived-bifunctor's Definition\nERROR step-entry-input-omitted [fs-derived-functors-in-two-variables-are-automatically-balanced]: step-2-1 omits 1.2, cited by 2.1\nERROR step-unmapped [fs-derived-functors-in-two-variables-are-automatically-balanced]: 1.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [ex-the-right-derived-functors-of-hom-from-a-fixed-object]: L3 quote does not occur in prop-positive-right-derived-functors-vanish-on-injective-objects's Statement\nERROR citation-quote-mismatch [ex-an-acyclic-resolution-that-is-not-an-injective-resolution]: L1 quote does not occur in prop-positive-left-derived-functors-vanish-on-projective-objects's Statement\nERROR citation-quote-mismatch [ex-a-contravariant-functor-derived-via-the-opposite-category]: L2 quote does not occur in prop-contravariant-derived-functors-are-derived-on-the-opposite-category's Statement\nERROR step-entry-input-omitted [thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology]: step-3-1 omits 1.1, cited by 3.1\nERROR citation-quote-mismatch [prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum]: L1 quote does not occur in def-simplicial-chain-groups-and-boundary's Definition\nERROR citation-quote-mismatch [lem-germ-equivalence-relation]: F1 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-quote-mismatch [lem-section-zero-if-all-germs-zero]: F2 quote does not occur in def-germ-of-section's Definition\nERROR citation-quote-mismatch [lem-morphisms-of-sheaves-determined-by-stalks]: F2 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-quote-mismatch [lem-morphisms-of-sheaves-determined-by-stalks]: F2 quote does not occur in def-germ-of-section's Definition\nERROR citation-quote-mismatch [lem-morphisms-of-sheaves-determined-by-stalks]: F3 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-quote-mismatch [thm-sheaf-morphism-isomorphism-stalkwise]: F2 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-quote-mismatch [thm-sheaf-morphism-isomorphism-stalkwise]: F2 quote does not occur in def-germ-of-section's Definition\nERROR citation-quote-mismatch [thm-sheaf-morphism-isomorphism-stalkwise]: F3 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-use-unmapped [thm-sheaves-as-local-homeomorphisms]: F1 is cited by 1.3 but the contract omits it\nERROR citation-use-not-supported [thm-sheaves-as-local-homeomorphisms]: F2 is not cited by declared use 3.1\nERROR citation-use-unmapped [thm-sheaves-as-local-homeomorphisms]: F2 is cited by 1.3 but the contract omits it\nERROR citation-use-not-supported [thm-sheaves-as-local-homeomorphisms]: L2 is not cited by declared use 3.1\nERROR step-entry-input-omitted [thm-sheaves-as-local-homeomorphisms]: step-3-1 omits 1.3, cited by 3.1\nERROR step-entry-input-omitted [thm-sheaves-as-local-homeomorphisms]: step-3-1 omits 1.1, cited by 3.1\nERROR step-unmapped [thm-sheaves-as-local-homeomorphisms]: 1.3 has no derivation or routine-step contract\nERROR citation-quote-mismatch [ex-sheaf-locally-constant-functions]: F1 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-quote-mismatch [ex-sheaf-locally-constant-functions]: F2 quote does not occur in def-germ-of-section's Definition\nERROR citation-quote-mismatch [ex-skyscraper-set-sheaf-stalks]: F1 quote does not occur in def-stalk-of-presheaf's Definition\nERROR citation-quote-mismatch [ex-skyscraper-set-sheaf-stalks]: F1 quote does not occur in def-germ-of-section's Definition\nERROR citation-quote-mismatch [ex-germs-of-continuous-functions]: F1 quote does not occur in def-germ-of-section's Definition\nERROR citation-quote-mismatch [prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]: L1 quote does not occur in thm-time-dependent-vector-fields-have-local-smooth-evolution-operators's Statement\nERROR citation-quote-mismatch [thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]: L1 quote does not occur in thm-time-dependent-vector-fields-have-local-smooth-evolution-operators's Statement\nERROR citation-quote-mismatch [ex-a-time-dependent-translation-field-and-its-evolution-operator]: L1 quote does not occur in thm-time-dependent-vector-fields-have-local-smooth-evolution-operators's Statement\nWARN shotgun-bracket [thm-acyclic-resolution-theorem-for-right-derived-functors]: 2.1 cites 5 of 6 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\nWARN shotgun-bracket [thm-acyclic-resolution-theorem-for-left-derived-functors]: 2.1 cites 4 of 5 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel",
        "thm-schur-zassenhaus-existence",
        "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
        "thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules",
        "cor-the-regular-module-decomposes-into-projective-indecomposables",
        "thm-kg-is-local-iff-g-is-a-p-group",
        "prop-induced-module-decomposes-over-a-left-transversal",
        "cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p",
        "prop-normal-p-subgroups-act-trivially-on-simple-modules",
        "thm-higman-criterion-for-relative-projectivity",
        "thm-green-vertex-source-existence-and-conjugacy",
        "cor-projective-indecomposable-modules-have-trivial-vertex",
        "fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible",
        "fs-a-vertex-is-a-vertex-of-the-cayley-graph",
        "ex-the-regular-module-of-cp-in-characteristic-p",
        "ex-the-augmentation-ideal-and-loewy-series-for-kcp",
        "ex-projective-cover-of-the-trivial-module-for-a-p-group",
        "ex-reducing-an-integral-lattice-for-s-three",
        "cex-an-ordinary-irreducible-with-reducible-mod-p-reduction",
        "thm-zp-is-the-pro-p-completion-of-the-integers",
        "thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups",
        "ex-pro-p-completion-of-a-finite-p-group",
        "lem-hensel-factor-corrections-form-cauchy-sequences",
        "lem-hensel-factor-lift-uniqueness-induction",
        "prop-uniqueness-of-hensel-factor-lifting",
        "cor-henselian-local-simple-root-criterion",
        "cor-complete-separated-adic-pair-henselian",
        "lem-parameter-power-series-map-injective-by-dimension",
        "thm-krull-principal-ideal-theorem",
        "ex-hensel-factor-correction-mod-three-powers",
        "thm-hardy-littlewood-maximal-inequality-for-balls",
        "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
        "ex-jensen-for-logarithm-and-exponential",
        "cex-a-random-variable-need-not-have-a-finite-expectation",
        "lem-fourier-partial-sums-are-dirichlet-convolutions",
        "lem-step-functions-have-vanishing-torus-fourier-coefficients",
        "lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus",
        "thm-riemann-lebesgue-lemma-for-fourier-coefficients",
        "ex-fourier-partial-sums-of-the-sawtooth",
        "thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism",
        "thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type",
        "fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category",
        "fs-a-braiding-suffices-to-define-a-trace",
        "fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure",
        "prop-left-derived-maps-preserve-identities",
        "prop-left-derived-maps-preserve-composition",
        "thm-left-derived-functors-relative-to-supplied-data-are-additive-functors",
        "thm-right-derived-functors-relative-to-supplied-data-are-additive-functors",
        "prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors",
        "prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors",
        "lem-the-change-of-projective-resolution-isomorphisms-are-natural",
        "thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic",
        "thm-acyclic-resolution-theorem-for-right-derived-functors",
        "thm-horseshoe-lemma-for-injective-resolutions",
        "thm-acyclic-resolution-theorem-for-left-derived-functors",
        "prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied",
        "fs-enough-projectives-implies-a-canonical-resolution-for-every-object",
        "fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift",
        "fs-derived-functors-in-two-variables-are-automatically-balanced",
        "ex-the-right-derived-functors-of-hom-from-a-fixed-object",
        "ex-an-acyclic-resolution-that-is-not-an-injective-resolution",
        "ex-a-contravariant-functor-derived-via-the-opposite-category",
        "thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology",
        "prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum",
        "lem-germ-equivalence-relation",
        "lem-section-zero-if-all-germs-zero",
        "lem-morphisms-of-sheaves-determined-by-stalks",
        "thm-sheaf-morphism-isomorphism-stalkwise",
        "thm-sheaves-as-local-homeomorphisms",
        "ex-sheaf-locally-constant-functions",
        "ex-skyscraper-set-sheaf-stalks",
        "ex-germs-of-continuous-functions",
        "prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law",
        "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval",
        "ex-a-time-dependent-translation-field-and-its-evolution-operator"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 3 [lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base] 1:3 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 5 [lem-a-complement-induces-the-conjugation-action-on-the-kernel] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 4 [prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel] 1:2 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-normal-hall-subgroup-gives-a-coprime-extension] 1:3 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-schur-zassenhaus-existence] 3:8 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable] 2:6 declared dependencies; 2:6 cited facts; 1:8 numbered proof steps; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-extensions-with-coprime-kernel-and-quotient-split] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [prop-extensions-with-complete-kernel-split-over-the-centralizer] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-isomorphic-middle-groups-force-equivalent-group-extensions] 2:quotient or equivalence-class construction\nMODERATE 4 [fs-every-split-group-extension-is-a-direct-product] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [fs-schur-zassenhaus-says-every-hall-subgroup-is-normal] 1:2 cited facts\nHIGH 5 [fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two] 1:2 cited facts\nHIGH 6 [ex-the-klein-four-extension-of-c-two-by-c-two-is-direct] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 5 [ex-a-four-has-four-complements-to-its-normal-klein-four-subgroup] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group] 2:boundary-sensitive language\nORDINARY 1 [lem-principal-crossed-homomorphisms-form-a-subgroup] 1:2 cited facts\nHIGH 5 [thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-first-cohomology-for-a-trivial-action-is-hom] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism] 1:3 cited facts\nHIGH 5 [thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set] 1:2 cited facts\nHIGH 6 [thm-inflation-restriction-exact-sequence-in-degree-one] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-every-crossed-homomorphism-is-an-ordinary-homomorphism] no signals\nORDINARY 1 [fs-first-cohomology-with-nonabelian-coefficients-is-a-group] 1:2 cited facts\nORDINARY 0 [fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product] no signals\nORDINARY 2 [fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology] 2:quotient or equivalence-class construction\nMODERATE 3 [fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator] no signals\nCRITICAL 8 [ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism] 1:2 cited facts\nORDINARY 2 [lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module] 2:quotient or equivalence-class construction\nCRITICAL 14 [thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple] 3:7 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-module-radical-is-jacobson-radical-times-the-module] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [thm-nakayama-lemma-for-finite-dimensional-algebras] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nMODERATE 3 [prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-finitely-generated-projective-kg-modules-are-injective-and-conversely] 2:5 declared dependencies; 2:5 cited facts\nHIGH 5 [lem-radical-of-a-finite-length-module-is-superfluous] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-krull-schmidt-for-finite-dimensional-kg-modules] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-the-regular-module-decomposes-into-projective-indecomposables] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-kg-is-local-iff-g-is-a-p-group] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nHIGH 5 [cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 12 [prop-normal-p-subgroups-act-trivially-on-simple-modules] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [prop-restriction-and-induction-preserve-projectives] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-higman-criterion-for-relative-projectivity] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-green-vertex-source-existence-and-conjugacy] 1:3 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 8 [cor-projective-indecomposable-modules-have-trivial-vertex] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order] no signals\nHIGH 7 [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [fs-a-vertex-is-a-vertex-of-the-cayley-graph] 2:induction, recursion, or minimality\nORDINARY 0 [fs-projective-and-injective-modules-coincide-over-every-ring] no signals\nCRITICAL 10 [ex-the-regular-module-of-cp-in-characteristic-p] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [ex-the-augmentation-ideal-and-loewy-series-for-kcp] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [ex-projective-cover-of-the-trivial-module-for-a-p-group] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [ex-reducing-an-integral-lattice-for-s-three] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [ex-relative-projectivity-detected-by-higmans-criterion] no signals\nHIGH 5 [cex-an-ordinary-irreducible-with-reducible-mod-p-reduction] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-topological-characterisation-of-pro-p-groups] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-inverse-limit-topology-equals-the-p-adic-metric-topology] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-zp-is-compact-hausdorff-totally-disconnected-and-complete] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 5 [thm-the-integers-map-injectively-and-densely-into-zp] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-additive-group-of-zp-is-torsion-free] 2:quotient or equivalence-class construction\nORDINARY 2 [prop-zp-is-topologically-generated-by-one] 2:boundary-sensitive language\nHIGH 5 [thm-zp-is-the-pro-p-completion-of-the-integers] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [prop-profinite-completion-of-z-is-the-product-of-all-zp] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [thm-frattini-subgroup-commutes-with-surjective-inverse-limits] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-frattini-formula-for-finitely-generated-pro-p-groups] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-topological-burnside-basis-theorem] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-zp-is-the-profinite-completion-of-z] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite] 2:analytic limiting/completeness language\nMODERATE 3 [fs-zp-is-cyclic-as-an-abstract-group] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-every-profinite-group-is-pro-p-for-some-prime] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [ex-compatible-p-adic-digit-sequences] 2:quotient or equivalence-class construction\nMODERATE 4 [ex-convergence-of-partial-p-adic-expansions] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [ex-a-cauchy-sequence-in-the-additive-p-adic-metric] 1:2 cited facts\nHIGH 7 [ex-pro-p-completion-of-a-finite-p-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [ex-frattini-quotient-of-zp] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [ex-topological-generation-in-zp-squared] 1:2 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-an-abstractly-dense-proper-subgroup-of-zp] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-henselian-pair-ideal-in-jacobson-radical] 2:boundary-sensitive language\nHIGH 7 [lem-coprime-factor-bezout-lift] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-hensel-factor-lift-leading-coefficient-normalisation] 2:boundary-sensitive language\nHIGH 7 [lem-hensel-factor-correction-one-stage] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-hensel-factor-corrections-form-cauchy-sequences] 2:boundary-sensitive language\nHIGH 7 [lem-hensel-factor-limit-multiplies-to-original] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [lem-hensel-factor-lift-uniqueness-induction] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [prop-uniqueness-of-hensel-factor-lifting] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-simple-root-to-coprime-factorisation] 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [cor-factor-hensel-implies-simple-root-hensel] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [cor-idempotents-lift-uniquely-in-a-henselian-pair] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-simple-root-hensel-lifts-idempotents] no signals\nORDINARY 0 [lem-simple-root-form-recovers-factor-lifting] no signals\nHIGH 6 [cor-henselian-local-simple-root-criterion] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-equivalent-elementary-forms-of-hensels-property] 1:2 cited facts; 3:biconditional / both-direction claim\nCRITICAL 13 [cor-complete-separated-adic-pair-henselian] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [cor-complete-local-rings-are-henselian] no signals\nORDINARY 2 [cor-nilpotent-ideal-pair-is-henselian] 2:quotient or equivalence-class construction\nMODERATE 3 [cor-artinian-local-henselian-via-nilpotent-maximal-ideal] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [lem-henselian-quotient-factor-lift] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 2 [cor-quotient-of-a-henselian-local-ring-is-henselian] 2:quotient or equivalence-class construction\nORDINARY 0 [lem-coefficient-field-maps-isomorphically-to-residue-field] no signals\nMODERATE 3 [lem-equicharacteristic-prime-field-lifts] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [lem-maximal-residue-injective-subfield] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 9 [lem-coefficient-field-separable-adjunction-step] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [lem-coefficient-field-transcendental-adjunction-step] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [lem-coefficient-field-purely-inseparable-complete-step] 1:2 cited facts\nORDINARY 2 [cor-equicharacteristic-complete-local-ring-has-coefficient-field] 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [lem-formal-power-series-evaluation-converges] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-formal-power-series-evaluation-unique-continuous-map] 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 5 [lem-cohen-presentation-surjective-mod-maximal-square] 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [lem-cohen-presentation-surjective-by-completeness] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [cor-equicharacteristic-complete-local-power-series-quotient] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-parameter-power-series-subring-makes-ring-finite] 2:6 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-parameter-power-series-map-injective-by-dimension] 2:5 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [cor-complete-local-domain-finite-over-a-regular-power-series-ring] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 5 [ex-hensel-factor-correction-mod-three-powers] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-simple-root-and-factor-hensel-same-lift] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-multiple-residue-root-does-not-lift-uniquely] 2:quotient or equivalence-class construction\nHIGH 7 [ex-idempotent-lifting-and-product-decomposition] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [ex-complete-discrete-valuation-ring-henselian] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-artinian-local-ring-henselian] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-localised-integers-not-henselian] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 4 [ex-cohen-presentation-singular-hypersurface] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [ex-coefficient-field-noncanonical-choice] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [lem-euclidean-balls-have-positive-finite-lebesgue-measure] 1:2 cited facts\nMODERATE 4 [thm-vitali-covering-lemma-for-balls-with-fivefold-dilates] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 9 [prop-ball-average-is-continuous-in-centre-and-radius] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [thm-centered-hardy-littlewood-maximal-function-is-borel-measurable] 1:2 cited facts\nHIGH 5 [prop-centered-and-uncentered-maximal-functions-are-comparable] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-hardy-littlewood-maximal-inequality-for-balls] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [prop-hardy-littlewood-maximal-function-is-l-infinity-bounded] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-riesz-thorin-interpolation] 1:3 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-continuous-compactly-supported-functions-differentiate-by-ball-averages] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n] 3:8 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-almost-every-point-is-a-lebesgue-point] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-lebesgue-density-theorem] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-differentiation-along-families-shrinking-nicely] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-first-fundamental-theorem-of-calculus-for-l-one] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [cex-the-unit-interval-indicator-has-nonintegrable-maximal-function] no signals\nORDINARY 2 [ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set] 2:boundary-sensitive language\nMODERATE 3 [ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-an-interval-endpoint-is-not-a-density-point] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [ex-a-positive-measure-compact-set-can-miss-part-of-every-interval] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 5 [ex-steinhaus-follows-from-the-density-theorem] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-there-is-a-measurable-set-with-density-one-half-in-every-interval] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-coordinate-map-for-a-finite-dimensional-normed-space] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-finite-dimensional-normed-spaces-are-banach] 2:5 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cor-finite-dimensional-subspaces-are-closed] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [cor-linear-maps-with-finite-dimensional-domain-are-bounded] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-riesz-lemma] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 13 [thm-locally-compact-normed-space-iff-finite-dimensional] 3:8 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [lem-dependent-choice-riesz-separated-unit-sequence] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 11 [thm-closed-unit-ball-compact-iff-finite-dimensional] 3:7 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [cor-infinite-dimensional-closed-unit-ball-is-not-compact] 3:biconditional / both-direction claim\nMODERATE 3 [cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 15 [thm-banach-space-no-countably-infinite-hamel-basis] 3:9 declared dependencies; 2:7 cited facts; 1:9 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nMODERATE 3 [thm-kuratowski-distance-map-is-an-isometry] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-kuratowski-wojdyslawski-embedding] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-explicit-equivalence-constants-for-standard-norms-on-kn] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-an-infinite-separated-subset-of-the-unit-sphere] no signals\nMODERATE 3 [cex-heine-borel-fails-in-ell-two] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-polynomial-space-admits-no-complete-norm] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-kuratowski-embedding-of-a-finite-metric-space] no signals\nMODERATE 3 [ex-choice-free-discontinuous-functional-on-c00] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [lem-probability-measure-basic-identities] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-finite-random-variables-are-measurable] 1:3 cited facts\nORDINARY 1 [lem-law-of-a-random-element-is-a-probability-measure] 1:3 cited facts\nORDINARY 1 [lem-laws-commute-with-measurable-maps] 1:3 cited facts\nCRITICAL 9 [thm-probability-law-and-distribution-function-correspondence] 3:8 declared dependencies; 2:7 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 7 [lem-expectation-is-independent-of-the-ae-representative] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-change-of-variables-for-expectation] 3:11 declared dependencies; 2:11 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cor-expectation-agrees-with-the-finite-weighted-sum] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [cor-expectation-of-an-indicator-is-probability] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-layer-cake-formulas-for-random-variables] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-expectation-linearity-monotonicity-and-modulus-bound] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [lem-variance-and-covariance-identities-for-random-variables] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-jensen-inequality-for-expectation] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cor-markov-inequality-for-random-variables] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [cor-chebyshev-inequality-for-random-variables] 1:2 cited facts\nHIGH 5 [cor-holder-inequality-for-random-variables] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cor-cauchy-schwarz-for-random-variables] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [cor-lyapunov-moment-inequality-on-a-probability-space] 1:2 cited facts\nMODERATE 3 [cor-second-moment-positive-probability-bound] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 17 [thm-normal-equations-for-best-affine-l2-prediction] 3:8 declared dependencies; 2:8 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [cor-best-affine-predictor-from-one-random-variable] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [ex-countable-probability-space-with-geometric-weights] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-uniform-random-variable-on-zero-one] 2:4 declared dependencies; 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 7 [ex-exponential-random-variable-from-its-tail] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-discrete-continuous-and-mixed-distribution-functions] 2:4 declared dependencies; 1:2 cited facts\nORDINARY 0 [ex-expectation-under-a-measurable-transformation] no signals\nORDINARY 0 [ex-jensen-for-logarithm-and-exponential] no signals\nMODERATE 3 [ex-markov-and-chebyshev-sharpness] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [cex-a-random-variable-need-not-have-a-finite-expectation] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [cex-a-distribution-function-need-not-have-a-density] 1:2 cited facts\nMODERATE 3 [cex-equality-almost-surely-is-not-pointwise-equality] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-bertrand-chord-paradox-is-a-model-specification-problem] no signals\nHIGH 5 [lem-fourier-partial-sums-are-dirichlet-convolutions] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [lem-closed-form-and-size-bounds-for-the-dirichlet-kernel] no signals\nORDINARY 2 [lem-step-functions-have-vanishing-torus-fourier-coefficients] 2:boundary-sensitive language\nMODERATE 3 [lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-riemann-lebesgue-lemma-for-fourier-coefficients] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-symmetric-difference-formula-for-fourier-partial-sums] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-riemann-localisation-principle-for-fourier-series] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-dini-pointwise-convergence-criterion-for-fourier-series] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [cor-local-holder-regularity-implies-fourier-convergence-at-a-point] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-bounded-variation-gives-one-sided-dirichlet-integrability] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-dirichlet-jordan-pointwise-convergence] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-piecewise-c-one-fourier-series-converges-to-midpoint-values] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-dirichlet-kernel-at-zero-and-away-from-zero] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-lebesgue-constants-grow-logarithmically] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-fourier-partial-sums-of-the-sawtooth] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [ex-localisation-for-functions-equal-on-an-arc] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [cex-continuity-alone-does-not-satisfy-a-dini-modulus] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [lem-nonarchimedean-absolute-value-criterion] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-equivalent-field-absolute-values-characterisation] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-p-adic-absolute-value-is-nonarchimedean] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-ostrowskis-theorem-for-the-rationals] 3:9 declared dependencies; 2:7 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [thm-product-formula-for-the-rationals] 1:3 cited facts\nCRITICAL 11 [thm-weak-approximation-for-rational-places] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [thm-p-adic-completion-is-a-field] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [lem-p-adic-balls-are-clopen] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-p-adic-completion-agrees-with-the-fraction-field-of-zp] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 0 [cor-zp-is-the-valuation-ring-of-qp] no signals\nHIGH 7 [cor-maximal-ideal-and-residue-field-of-zp] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-p-adic-digit-expansion] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [cor-p-adic-field-is-locally-compact-and-totally-disconnected] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [cor-p-adic-simple-root-lifting] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-p-adic-newton-criterion] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 6 [thm-square-criterion-in-qp-for-odd-p] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [thm-square-criterion-in-q2] 1:2 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-p-adic-geometric-series] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 4 [ex-p-adic-expansion-of-minus-one] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-square-root-of-minus-one-in-q5] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-no-square-root-of-p-in-qp] 1:2 cited facts\nMODERATE 3 [ex-p-adic-hensel-lifting-a-simple-root] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-two-adic-square-test] 2:boundary-sensitive language\nORDINARY 1 [ex-the-same-sequence-in-real-and-p-adic-metrics] 1:2 cited facts\nHIGH 6 [cex-zp-is-not-the-integral-closure-of-z-in-qp] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-dirichlet-series-half-plane-convergence] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-dirichlet-series-absolute-half-plane-holomorphy] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-dirichlet-series-abscissa-gap] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-uniqueness-of-dirichlet-series-coefficients] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [thm-dirichlet-series-summatory-integral] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-dirichlet-series-multiplication-convolution] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-multiplicative-dirichlet-series-euler-product] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cor-completely-multiplicative-dirichlet-series-euler-product] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-landau-dirichlet-series] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-von-mangoldt-logarithmic-derivative-zeta] 2:4 declared dependencies; 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-mobius-dirichlet-series-reciprocal-zeta] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-divisor-dirichlet-series-zeta-square] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [cor-euler-totient-dirichlet-series] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [ex-dirichlet-series-abscissa-boundaries] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-mobius-reciprocal-zeta-coefficients] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [ex-divisor-function-from-zeta-square] 2:analytic limiting/completeness language\nMODERATE 3 [ex-euler-totient-dirichlet-series] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-liouville-dirichlet-series] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [cex-conditionally-convergent-euler-product-rearrangement] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cex-an-abscissa-need-not-be-a-line-of-convergence] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [lem-riemann-zeta-dirichlet-series-converges-locally-uniformly] 2:5 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-euler-product-for-riemann-zeta] 2:5 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-riemann-zeta-continuation-to-the-right-half-plane] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-dirichlet-eta-representation] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-jacobi-theta-transformation] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-theta-mellin-representation-of-completed-zeta] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-riemann-zeta-meromorphic-continuation] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-completed-riemann-zeta-functional-equation] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nORDINARY 1 [thm-riemann-zeta-functional-equation] 1:3 cited facts\nCRITICAL 8 [thm-riemann-xi-is-entire-of-order-one] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-trivial-zeros-and-critical-strip] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-hadamard-product-for-riemann-xi] 3:7 declared dependencies; 2:7 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-special-values-of-riemann-zeta-at-integers] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-euler-product-numerically-approximates-zeta-at-two] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-zeta-four-equals-pi-to-the-four-over-ninety] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-zeta-zero-equals-minus-one-half] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [ex-zeta-minus-two-vanishes-by-the-sine-factor] 2:boundary-sensitive language\nORDINARY 2 [ex-symmetric-finite-zero-products-model-the-xi-hadamard-product] 2:boundary-sensitive language\nMODERATE 3 [cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cex-the-harmonic-series-shows-the-defining-series-diverges-at-one] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 0 [fs-riemann-zeta-is-entire] no signals\nORDINARY 0 [fs-the-functional-equation-alone-characterizes-zeta] no signals\nORDINARY 1 [thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual] 1:2 cited facts\nORDINARY 1 [thm-the-unit-is-self-dual] 1:2 cited facts\nORDINARY 1 [thm-reversing-the-tensor-product-exchanges-left-and-right-duals] 1:2 cited facts\nHIGH 5 [thm-duals-are-unique-up-to-a-unique-compatible-isomorphism] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [thm-duality-yields-adjunctions-of-tensoring-functors] 1:2 cited facts\nORDINARY 1 [thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor] 1:2 cited facts\nMODERATE 3 [cor-a-second-proof-that-adjoints-are-unique] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [cex-not-every-monoidal-category-is-rigid] no signals\nMODERATE 3 [thm-finite-dimensional-vector-spaces-are-rigid] 2:5 declared dependencies; 1:3 cited facts\nHIGH 5 [thm-left-duality-is-a-contravariant-antimonoidal-functor] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [thm-the-double-dual-is-a-monoidal-functor] no signals\nMODERATE 3 [cex-left-and-right-duals-and-double-duals-need-not-collapse] 3:biconditional / both-direction claim\nMODERATE 4 [thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 2 [thm-a-braided-rigid-category-has-a-drinfeld-morphism] 2:boundary-sensitive language\nMODERATE 3 [thm-in-a-spherical-category-the-left-and-right-traces-agree] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-basic-properties-of-the-categorical-trace] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-a-braiding-suffices-to-define-a-trace] 1:2 cited facts\nORDINARY 0 [fs-left-and-right-duals-of-an-object-are-isomorphic] no signals\nORDINARY 0 [fs-every-monoidal-category-is-rigid] no signals\nORDINARY 2 [fs-the-left-and-right-traces-always-agree] 2:boundary-sensitive language\nMODERATE 3 [fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual] no signals\nORDINARY 0 [ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces] no signals\nMODERATE 3 [ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 1 [ex-the-dimension-of-a-vector-space-is-its-linear-dimension] 1:2 cited facts\nORDINARY 0 [cex-an-infinite-dimensional-vector-space-has-no-dual-object] no signals\nORDINARY 1 [ex-an-adjunction-read-as-a-duality-of-endofunctors] 1:2 cited facts\nMODERATE 4 [ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [prop-negative-derived-degrees-vanish-for-one-sided-resolutions] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [lem-the-induced-homology-map-is-independent-of-the-comparison-lift] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [prop-left-derived-maps-preserve-identities] 1:3 cited facts\nMODERATE 4 [prop-left-derived-maps-preserve-composition] 2:4 declared dependencies; 2:4 cited facts\nHIGH 5 [thm-left-derived-functors-relative-to-supplied-data-are-additive-functors] 3:9 declared dependencies; 2:8 cited facts\nMODERATE 3 [lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-right-derived-functors-relative-to-supplied-data-are-additive-functors] 3:9 declared dependencies; 2:9 cited facts\nMODERATE 4 [prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 4 [prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors] 2:6 declared dependencies; 2:6 cited facts\nMODERATE 4 [lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 4 [lem-the-change-of-projective-resolution-isomorphisms-are-natural] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic] 1:3 cited facts\nHIGH 6 [prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic] 3:7 declared dependencies; 2:7 cited facts\nMODERATE 4 [prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws] 2:5 declared dependencies; 2:5 cited facts\nHIGH 6 [thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [prop-positive-left-derived-functors-vanish-on-projective-objects] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-positive-right-derived-functors-vanish-on-injective-objects] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-acyclic-resolution-theorem-for-right-derived-functors] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-acyclic-resolution-theorem-for-left-derived-functors] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-adapted-classes-compute-derived-functors] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-an-exact-functor-has-vanishing-positive-derived-functors] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-derived-functors-commute-with-finite-biproducts] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [prop-contravariant-derived-functors-are-derived-on-the-opposite-category] 2:6 declared dependencies; 2:6 cited facts\nMODERATE 3 [prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-enough-projectives-implies-a-canonical-resolution-for-every-object] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-derived-functors-in-two-variables-are-automatically-balanced] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution] 1:3 cited facts\nMODERATE 3 [ex-the-left-derived-functors-of-an-exact-functor] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-right-derived-functors-of-hom-from-a-fixed-object] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-two-resolution-data-and-their-change-isomorphism] 1:2 cited facts\nMODERATE 3 [ex-independence-of-two-comparison-lifts-on-homology] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [ex-an-acyclic-resolution-that-is-not-an-injective-resolution] 2:4 declared dependencies; 2:4 cited facts\nHIGH 6 [cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-a-contravariant-functor-derived-via-the-opposite-category] 1:2 cited facts\nORDINARY 0 [lem-barycentric-coordinates-are-unique] no signals\nORDINARY 0 [lem-geometric-simplices-intersect-in-the-realization-of-their-common-face] no signals\nMODERATE 4 [prop-a-finite-simplicial-complex-has-compact-hausdorff-realization] 2:5 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial] no signals\nORDINARY 2 [lem-an-odd-permutation-reverses-oriented-simplex-sign] 2:boundary-sensitive language\nORDINARY 2 [lem-simplicial-boundary-is-independent-of-oriented-representative] 2:boundary-sensitive language\nORDINARY 2 [thm-the-simplicial-boundary-squares-to-zero] 2:boundary-sensitive language\nORDINARY 2 [lem-the-simplicial-augmentation-is-a-chain-map] 2:boundary-sensitive language\nORDINARY 2 [lem-induced-simplicial-chain-maps-commute-with-boundaries] 2:boundary-sensitive language\nORDINARY 0 [prop-simplicial-homology-is-functorial] no signals\nORDINARY 0 [lem-contiguous-simplicial-maps-have-homotopic-realizations] no signals\nMODERATE 4 [thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology] 2:5 declared dependencies; 2:boundary-sensitive language\nMODERATE 4 [lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [cor-the-simplex-has-zero-reduced-simplicial-homology] 2:boundary-sensitive language\nMODERATE 3 [prop-zero-th-simplicial-homology-is-free-on-connected-components] 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [thm-euler-poincare-formula-for-a-finite-simplicial-complex] no signals\nORDINARY 2 [lem-zero-locus-ideal-closure] 2:boundary-sensitive language\nMODERATE 3 [thm-zariski-closed-sets-affine-space] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-variety-ideal-galois-connection] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 10 [thm-affine-nullstellensatz-correspondence] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [lem-irreducible-space-open-intersections] no signals\nCRITICAL 10 [thm-affine-variety-prime-coordinate-ring] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-regular-functions-on-affine-algebraic-set] 1:2 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-principal-opens-form-affine-basis] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-coordinate-ring-principal-open] 3:8 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-algebraic-set-finite-irreducible-components] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [thm-affine-algebraic-sets-coordinate-duality] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-maximal-ideals-are-points-over-algebraically-closed-field] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 8 [cor-zariski-topology-cofinite-on-affine-line] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-density-nonempty-open-affine-variety] 2:boundary-sensitive language\nORDINARY 2 [lem-sheaf-section-over-empty-set-terminal] 2:boundary-sensitive language\nMODERATE 4 [thm-sheaf-equalizer-condition] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [lem-sheaf-condition-check-on-basis] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [lem-forgetful-sheaf-compatibility] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [lem-germ-equivalence-relation] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-section-zero-if-all-germs-zero] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [lem-morphisms-of-sheaves-determined-by-stalks] 2:4 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-sheaf-morphism-isomorphism-stalkwise] 2:4 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-sheaves-as-local-homeomorphisms] 2:4 declared dependencies; 2:4 cited facts\nHIGH 7 [lem-first-plus-construction-is-separated] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [lem-second-plus-construction-is-sheaf] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-sheafification-universal-property] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [thm-sheafification-preserves-stalks] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [cor-sheafification-idempotent] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-image-sheaf-is-sheafification-presheaf-image] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [ex-sheaf-continuous-real-functions] no signals\nHIGH 5 [ex-sheaf-locally-constant-functions] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [cex-presheaf-bounded-continuous-functions-not-sheaf] 1:2 cited facts\nORDINARY 1 [cex-constant-presheaf-not-sheaf-disconnected-open] 1:3 cited facts\nHIGH 7 [ex-skyscraper-set-sheaf-stalks] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-extension-by-empty-outside-open] 2:boundary-sensitive language\nORDINARY 1 [cex-objectwise-image-not-sheaf] 1:2 cited facts\nMODERATE 3 [ex-germs-of-continuous-functions] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-empty-space-unique-sheaf-sections] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 7 [lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair] 2:6 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 10 [lem-generalized-niceness-yields-four-reduction-outcomes] 3:9 declared dependencies; 2:7 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-cy-restricted-generalized-niceness-yields-three-outcomes] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [lem-iterated-restricted-sparsification-reaches-the-target-scale] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade] 2:4 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-a-numeric-run-of-the-lemma-three-three-exponent-choice] 1:3 cited facts\nCRITICAL 8 [prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components] 1:2 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [prop-a-vector-field-acts-as-a-derivation-of-smooth-functions] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-derivations-of-smooth-functions-are-smooth-vector-fields] 3:7 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps\nMODERATE 3 [prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 4 [lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed] 2:5 declared dependencies; 2:4 cited facts\nMODERATE 3 [prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 0 [lem-the-commutator-of-vector-field-derivations-is-a-derivation] no signals\nHIGH 6 [prop-coordinate-formula-for-the-lie-bracket] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-vector-fields-form-a-lie-algebra] 1:2 cited facts\nORDINARY 2 [prop-leibniz-rules-for-the-lie-bracket-with-function-multiples] 2:boundary-sensitive language\nORDINARY 1 [prop-related-vector-fields-have-related-lie-brackets] 1:3 cited facts\nORDINARY 1 [cor-diffeomorphism-pushforward-preserves-lie-brackets] 1:2 cited facts\nORDINARY 2 [prop-coordinate-vector-fields-commute] 2:boundary-sensitive language\nHIGH 7 [thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves] 2:4 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nHIGH 6 [thm-unique-maximal-integral-curve-through-each-point] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-fundamental-theorem-on-flows] 1:2 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 0 [prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains] no signals\nMODERATE 3 [prop-the-generating-vector-field-is-invariant-under-its-flow] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global] 1:2 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-compactly-supported-vector-fields-are-complete] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [cor-every-smooth-vector-field-on-a-compact-manifold-is-complete] 2:4 declared dependencies; 1:3 cited facts\nHIGH 5 [prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-flow-box-theorem] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves] 2:analytic limiting/completeness language\nCRITICAL 11 [thm-flowout-theorem] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket] 2:5 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute] 2:4 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 5 [prop-related-complete-vector-fields-have-intertwined-flows] 2:4 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-time-dependent-vector-fields-have-local-smooth-evolution-operators] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law] no signals\nHIGH 5 [thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field] no signals\nORDINARY 0 [fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map] no signals\nHIGH 5 [fs-every-smooth-vector-field-is-complete] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nORDINARY 2 [fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field] 2:boundary-sensitive language\nORDINARY 0 [fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p] no signals\nORDINARY 2 [fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent] 2:boundary-sensitive language\nORDINARY 2 [ex-constant-vector-fields-and-translation-flows] 2:analytic limiting/completeness language\nHIGH 5 [ex-the-radial-vector-field-and-dilation-flow] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 5 [ex-the-rotation-vector-field-and-circle-flow] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nORDINARY 2 [ex-a-vector-field-with-finite-time-escape] 2:analytic limiting/completeness language\nMODERATE 3 [ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [ex-coordinate-formula-for-a-nonzero-lie-bracket] no signals\nMODERATE 3 [ex-commuting-coordinate-fields-and-their-commuting-flows] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point] 2:boundary-sensitive language\nHIGH 5 [ex-a-time-dependent-translation-field-and-its-evolution-operator] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [ex-the-flow-box-coordinates-for-a-nonconstant-planar-field] no signals\nORDINARY 2 [lem-coordinate-change-congruence-for-the-critical-hessian] 2:boundary-sensitive language\nMODERATE 3 [thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle] 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [lem-critical-hessian-agrees-with-the-levi-civita-hessian] 2:4 declared dependencies; 1:3 cited facts\nHIGH 6 [lem-sylvester-inertia-makes-morse-index-intrinsic] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-nondegenerate-critical-points-are-isolated] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-one-variable-completion-of-the-square-with-a-smooth-parameter] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-morse-splitting-induction-preserves-the-residual-hessian] 2:boundary-sensitive language\nCRITICAL 9 [thm-morse-lemma] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [cor-local-extrema-and-saddles-from-the-morse-index] 2:boundary-sensitive language\nORDINARY 2 [cor-index-and-coindex-swap-under-negation] 2:boundary-sensitive language\nMODERATE 4 [cor-local-level-set-cone-at-a-morse-critical-point] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-height-on-the-sphere-is-a-perfect-morse-function] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-standard-quadratic-form-of-each-morse-index] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-height-on-a-torus-with-four-critical-points] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-a-degenerate-isolated-critical-point] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-a-degenerate-nonisolated-critical-set] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-the-empty-and-zero-dimensional-morse-cases] 2:boundary-sensitive language\nHIGH 5 [lem-many-one-reducibility-is-a-preorder] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [thm-many-one-reductions-transfer-decidability-and-recognizability] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [thm-machine-acceptance-is-ce-complete] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [lem-many-one-implies-turing-reduction] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 10 [prop-the-converse-fails] 2:6 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 7 [lem-rice-witness-machine-construction] 2:4 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-rices-theorem] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-standard-semantic-machine-properties-are-undecidable] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-rice-shapiro-positive-information-direction] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [prop-syntactic-properties-lie-outside-rices-theorem] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-reductions-may-reverse-yes-and-no] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [fs-rices-theorem-applies-to-state-count] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-many-one-reductions-transfer-decidability-and-recognizability] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-syntactic-properties-lie-outside-rices-theorem] 2:boundary-sensitive language\nHIGH 6 [cex-reductions-may-reverse-yes-and-no] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [prop-sat-is-in-np] 1:3 cited facts\nORDINARY 2 [lem-tableau-cell-alphabet-is-constant] 2:boundary-sensitive language\nMODERATE 3 [lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-exactly-one-symbol-constraints-have-polynomial-size] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-start-accept-and-transition-constraints-have-polynomial-size] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [lem-cook-levin-map-is-polynomial-time] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-cook-levin-sat-is-np-complete] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [lem-tseitin-transformation-is-linear-size-and-equisatisfiable] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-three-sat-is-np-complete] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 6 [fs-cook-levin-enumerates-all-branches] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [fs-naive-distribution-to-cnf-is-always-polynomial] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-tableau-cell-alphabet-is-constant] 2:boundary-sensitive language\nORDINARY 1 [ex-three-sat-is-np-complete] 1:2 cited facts\nHIGH 6 [cex-cook-levin-enumerates-all-branches] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-space-bounded-machines-have-exponentially-many-configurations] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-bounded-reachability-recursion-is-correct] 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nHIGH 7 [lem-bounded-reachability-uses-logarithmic-recursion-depth] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 11 [thm-savitchs-theorem] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [cor-pspace-equals-npspace-and-is-closed-under-complement] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-tqbf-is-in-pspace] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [lem-quantifier-reuse-keeps-reachability-formulas-polynomial] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 13 [thm-tqbf-is-pspace-complete] 3:7 declared dependencies; 2:7 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [thm-tqbf-truth-iff-existential-player-has-a-winning-strategy] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 10 [thm-ap-equals-pspace] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [fs-savitch-stores-the-whole-configuration-graph] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [ex-bounded-reachability-recursion-is-correct] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [ex-ap-equals-pspace] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [cex-savitch-stores-the-whole-configuration-graph] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-zpp-equals-rp-intersection-corp] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [lem-majority-error-bound-from-chebyshev] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [thm-bpp-amplification-to-inverse-polynomial-error] 1:2 cited facts\nMODERATE 3 [lem-chernoff-bound-for-bernoulli-trials] 2:4 declared dependencies; 1:3 cited facts\nORDINARY 1 [thm-bpp-amplification-to-exponentially-small-error] 1:2 cited facts\nHIGH 5 [thm-rp-one-sided-amplification] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [thm-adleman-bpp-is-contained-in-p-poly] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [lem-affine-finite-field-hashes-are-pairwise-independent] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-freivalds-matrix-product-verification] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nHIGH 7 [thm-schwartz-zippel-lemma] 2:6 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 3 [cor-pit-is-in-corp] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-reusing-random-bits-amplifies-success] 2:boundary-sensitive language\nORDINARY 2 [fs-pp-has-bounded-error-away-from-one-half] 2:boundary-sensitive language\nORDINARY 0 [ex-majority-error-bound-from-chebyshev] no signals\nMODERATE 3 [ex-pit-is-in-corp] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-reusing-random-bits-amplifies-success] 2:boundary-sensitive language\nrisk-report: 7 error(s), 575 item(s) routed\nERROR risk-review-missing [fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible]: fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [ex-projective-cover-of-the-trivial-module-for-a-p-group]: ex-projective-cover-of-the-trivial-module-for-a-p-group is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cex-a-random-variable-need-not-have-a-finite-expectation]: cex-a-random-variable-need-not-have-a-finite-expectation is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]: thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [ex-a-time-dependent-translation-field-and-its-evolution-operator]: ex-a-time-dependent-translation-field-and-its-evolution-operator is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-rice-shapiro-positive-information-direction]: thm-rice-shapiro-positive-information-direction is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cex-cook-levin-enumerates-all-branches]: cex-cook-levin-enumerates-all-branches is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base",
        "thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products",
        "lem-a-complement-induces-the-conjugation-action-on-the-kernel",
        "prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel",
        "lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel",
        "lem-normal-hall-subgroup-gives-a-coprime-extension",
        "thm-schur-zassenhaus-existence",
        "thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable",
        "cor-extensions-with-coprime-kernel-and-quotient-split",
        "prop-extensions-with-complete-kernel-split-over-the-centralizer",
        "fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism",
        "fs-isomorphic-middle-groups-force-equivalent-group-extensions",
        "fs-every-split-group-extension-is-a-direct-product",
        "fs-schur-zassenhaus-says-every-hall-subgroup-is-normal",
        "fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input",
        "cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic",
        "ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two",
        "ex-the-klein-four-extension-of-c-two-by-c-two-is-direct",
        "ex-a-four-has-four-complements-to-its-normal-klein-four-subgroup",
        "ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate",
        "cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions",
        "lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group",
        "lem-principal-crossed-homomorphisms-form-a-subgroup",
        "thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one",
        "cor-first-cohomology-for-a-trivial-action-is-hom",
        "cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes",
        "lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism",
        "lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism",
        "thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy",
        "thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set",
        "thm-inflation-restriction-exact-sequence-in-degree-one",
        "fs-every-crossed-homomorphism-is-an-ordinary-homomorphism",
        "fs-first-cohomology-with-nonabelian-coefficients-is-a-group",
        "fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product",
        "fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology",
        "fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically",
        "ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero",
        "ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator",
        "ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements",
        "ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism",
        "ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three",
        "cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism",
        "lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module",
        "thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple",
        "thm-module-radical-is-jacobson-radical-times-the-module",
        "thm-nakayama-lemma-for-finite-dimensional-algebras",
        "lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent",
        "prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra",
        "cor-finitely-generated-projective-kg-modules-are-injective-and-conversely",
        "lem-radical-of-a-finite-length-module-is-superfluous",
        "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
        "thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules",
        "thm-krull-schmidt-for-finite-dimensional-kg-modules",
        "cor-the-regular-module-decomposes-into-projective-indecomposables",
        "thm-kg-is-local-iff-g-is-a-p-group",
        "cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p",
        "prop-normal-p-subgroups-act-trivially-on-simple-modules",
        "prop-restriction-and-induction-preserve-projectives",
        "thm-higman-criterion-for-relative-projectivity",
        "thm-green-vertex-source-existence-and-conjugacy",
        "cor-projective-indecomposable-modules-have-trivial-vertex",
        "fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order",
        "fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible",
        "fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes",
        "fs-a-vertex-is-a-vertex-of-the-cayley-graph",
        "fs-projective-and-injective-modules-coincide-over-every-ring",
        "ex-the-regular-module-of-cp-in-characteristic-p",
        "ex-the-augmentation-ideal-and-loewy-series-for-kcp",
        "ex-projective-cover-of-the-trivial-module-for-a-p-group",
        "ex-reducing-an-integral-lattice-for-s-three",
        "ex-relative-projectivity-detected-by-higmans-criterion",
        "cex-an-ordinary-irreducible-with-reducible-mod-p-reduction",
        "thm-topological-characterisation-of-pro-p-groups",
        "lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group",
        "thm-inverse-limit-topology-equals-the-p-adic-metric-topology",
        "thm-zp-is-compact-hausdorff-totally-disconnected-and-complete",
        "thm-the-integers-map-injectively-and-densely-into-zp",
        "prop-additive-group-of-zp-is-torsion-free",
        "prop-zp-is-topologically-generated-by-one",
        "thm-zp-is-the-pro-p-completion-of-the-integers",
        "prop-profinite-completion-of-z-is-the-product-of-all-zp",
        "lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open",
        "thm-frattini-subgroup-commutes-with-surjective-inverse-limits",
        "thm-frattini-formula-for-finitely-generated-pro-p-groups",
        "thm-topological-burnside-basis-theorem",
        "cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini",
        "fs-zp-is-the-profinite-completion-of-z",
        "fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite",
        "fs-zp-is-cyclic-as-an-abstract-group",
        "thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups",
        "fs-every-profinite-group-is-pro-p-for-some-prime",
        "ex-compatible-p-adic-digit-sequences",
        "ex-convergence-of-partial-p-adic-expansions",
        "ex-a-cauchy-sequence-in-the-additive-p-adic-metric",
        "ex-pro-p-completion-of-a-finite-p-group",
        "ex-frattini-quotient-of-zp",
        "ex-topological-generation-in-zp-squared",
        "cex-an-abstractly-dense-proper-subgroup-of-zp",
        "lem-henselian-pair-ideal-in-jacobson-radical",
        "lem-coprime-factor-bezout-lift",
        "lem-hensel-factor-lift-leading-coefficient-normalisation",
        "lem-hensel-factor-correction-one-stage",
        "lem-hensel-factor-corrections-form-cauchy-sequences",
        "lem-hensel-factor-limit-multiplies-to-original",
        "lem-hensel-factor-lift-uniqueness-induction",
        "prop-uniqueness-of-hensel-factor-lifting",
        "lem-simple-root-to-coprime-factorisation",
        "cor-factor-hensel-implies-simple-root-hensel",
        "cor-idempotents-lift-uniquely-in-a-henselian-pair",
        "lem-simple-root-hensel-lifts-idempotents",
        "lem-simple-root-form-recovers-factor-lifting",
        "cor-henselian-local-simple-root-criterion",
        "thm-equivalent-elementary-forms-of-hensels-property",
        "cor-complete-separated-adic-pair-henselian",
        "cor-complete-local-rings-are-henselian",
        "cor-nilpotent-ideal-pair-is-henselian",
        "cor-artinian-local-henselian-via-nilpotent-maximal-ideal",
        "lem-henselian-quotient-factor-lift",
        "cor-quotient-of-a-henselian-local-ring-is-henselian",
        "lem-coefficient-field-maps-isomorphically-to-residue-field",
        "lem-equicharacteristic-prime-field-lifts",
        "lem-maximal-residue-injective-subfield",
        "lem-coefficient-field-separable-adjunction-step",
        "lem-coefficient-field-transcendental-adjunction-step",
        "lem-coefficient-field-purely-inseparable-complete-step",
        "cor-equicharacteristic-complete-local-ring-has-coefficient-field",
        "lem-formal-power-series-evaluation-converges",
        "lem-formal-power-series-evaluation-unique-continuous-map",
        "lem-cohen-presentation-surjective-mod-maximal-square",
        "lem-cohen-presentation-surjective-by-completeness",
        "cor-equicharacteristic-complete-local-power-series-quotient",
        "lem-parameter-power-series-subring-makes-ring-finite",
        "lem-parameter-power-series-map-injective-by-dimension",
        "cor-complete-local-domain-finite-over-a-regular-power-series-ring",
        "ex-hensel-factor-correction-mod-three-powers",
        "ex-simple-root-and-factor-hensel-same-lift",
        "ex-multiple-residue-root-does-not-lift-uniquely",
        "ex-idempotent-lifting-and-product-decomposition",
        "ex-complete-discrete-valuation-ring-henselian",
        "ex-artinian-local-ring-henselian",
        "ex-localised-integers-not-henselian",
        "ex-cohen-presentation-singular-hypersurface",
        "ex-coefficient-field-noncanonical-choice",
        "lem-euclidean-balls-have-positive-finite-lebesgue-measure",
        "thm-vitali-covering-lemma-for-balls-with-fivefold-dilates",
        "prop-ball-average-is-continuous-in-centre-and-radius",
        "thm-centered-hardy-littlewood-maximal-function-is-borel-measurable",
        "prop-centered-and-uncentered-maximal-functions-are-comparable",
        "thm-hardy-littlewood-maximal-inequality-for-balls",
        "prop-hardy-littlewood-maximal-function-is-l-infinity-bounded",
        "thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity",
        "cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded",
        "thm-riesz-thorin-interpolation",
        "lem-continuous-compactly-supported-functions-differentiate-by-ball-averages",
        "thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n",
        "thm-almost-every-point-is-a-lebesgue-point",
        "thm-lebesgue-density-theorem",
        "thm-differentiation-along-families-shrinking-nicely",
        "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
        "thm-first-fundamental-theorem-of-calculus-for-l-one",
        "cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one",
        "ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r",
        "cex-the-unit-interval-indicator-has-nonintegrable-maximal-function",
        "ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set",
        "ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r",
        "ex-an-interval-endpoint-is-not-a-density-point",
        "ex-a-positive-measure-compact-set-can-miss-part-of-every-interval",
        "ex-steinhaus-follows-from-the-density-theorem",
        "fs-there-is-a-measurable-set-with-density-one-half-in-every-interval",
        "ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set",
        "thm-coordinate-map-for-a-finite-dimensional-normed-space",
        "thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent",
        "cor-finite-dimensional-normed-spaces-are-banach",
        "cor-finite-dimensional-subspaces-are-closed",
        "cor-linear-maps-with-finite-dimensional-domain-are-bounded",
        "lem-riesz-lemma",
        "thm-locally-compact-normed-space-iff-finite-dimensional",
        "lem-dependent-choice-riesz-separated-unit-sequence",
        "thm-closed-unit-ball-compact-iff-finite-dimensional",
        "cor-infinite-dimensional-closed-unit-ball-is-not-compact",
        "cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact",
        "thm-banach-space-no-countably-infinite-hamel-basis",
        "thm-kuratowski-distance-map-is-an-isometry",
        "thm-kuratowski-wojdyslawski-embedding",
        "ex-explicit-equivalence-constants-for-standard-norms-on-kn",
        "ex-an-infinite-separated-subset-of-the-unit-sphere",
        "cex-heine-borel-fails-in-ell-two",
        "cex-polynomial-space-admits-no-complete-norm",
        "ex-kuratowski-embedding-of-a-finite-metric-space",
        "ex-choice-free-discontinuous-functional-on-c00",
        "lem-probability-measure-basic-identities",
        "thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces",
        "lem-finite-random-variables-are-measurable",
        "lem-law-of-a-random-element-is-a-probability-measure",
        "lem-laws-commute-with-measurable-maps",
        "thm-probability-law-and-distribution-function-correspondence",
        "lem-expectation-is-independent-of-the-ae-representative",
        "thm-change-of-variables-for-expectation",
        "cor-expectation-agrees-with-the-finite-weighted-sum",
        "cor-expectation-of-an-indicator-is-probability",
        "cor-layer-cake-formulas-for-random-variables",
        "cor-expectation-linearity-monotonicity-and-modulus-bound",
        "lem-variance-and-covariance-identities-for-random-variables",
        "thm-jensen-inequality-for-expectation",
        "cor-markov-inequality-for-random-variables",
        "cor-chebyshev-inequality-for-random-variables",
        "cor-holder-inequality-for-random-variables",
        "cor-cauchy-schwarz-for-random-variables",
        "cor-lyapunov-moment-inequality-on-a-probability-space",
        "cor-second-moment-positive-probability-bound",
        "thm-normal-equations-for-best-affine-l2-prediction",
        "cor-best-affine-predictor-from-one-random-variable",
        "ex-countable-probability-space-with-geometric-weights",
        "ex-uniform-random-variable-on-zero-one",
        "ex-exponential-random-variable-from-its-tail",
        "ex-discrete-continuous-and-mixed-distribution-functions",
        "ex-expectation-under-a-measurable-transformation",
        "ex-jensen-for-logarithm-and-exponential",
        "ex-markov-and-chebyshev-sharpness",
        "cex-a-random-variable-need-not-have-a-finite-expectation",
        "cex-a-distribution-function-need-not-have-a-density",
        "cex-equality-almost-surely-is-not-pointwise-equality",
        "ex-bertrand-chord-paradox-is-a-model-specification-problem",
        "lem-fourier-partial-sums-are-dirichlet-convolutions",
        "lem-closed-form-and-size-bounds-for-the-dirichlet-kernel",
        "lem-step-functions-have-vanishing-torus-fourier-coefficients",
        "lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus",
        "thm-riemann-lebesgue-lemma-for-fourier-coefficients",
        "lem-symmetric-difference-formula-for-fourier-partial-sums",
        "thm-riemann-localisation-principle-for-fourier-series",
        "thm-dini-pointwise-convergence-criterion-for-fourier-series",
        "cor-local-holder-regularity-implies-fourier-convergence-at-a-point",
        "lem-bounded-variation-gives-one-sided-dirichlet-integrability",
        "thm-dirichlet-jordan-pointwise-convergence",
        "cor-piecewise-c-one-fourier-series-converges-to-midpoint-values",
        "ex-dirichlet-kernel-at-zero-and-away-from-zero",
        "thm-lebesgue-constants-grow-logarithmically",
        "ex-fourier-partial-sums-of-the-sawtooth",
        "ex-localisation-for-functions-equal-on-an-arc",
        "cex-continuity-alone-does-not-satisfy-a-dini-modulus",
        "lem-nonarchimedean-absolute-value-criterion",
        "thm-equivalent-field-absolute-values-characterisation",
        "thm-p-adic-absolute-value-is-nonarchimedean",
        "thm-ostrowskis-theorem-for-the-rationals",
        "thm-product-formula-for-the-rationals",
        "thm-weak-approximation-for-rational-places",
        "thm-p-adic-completion-is-a-field",
        "lem-p-adic-balls-are-clopen",
        "thm-p-adic-completion-agrees-with-the-fraction-field-of-zp",
        "cor-zp-is-the-valuation-ring-of-qp",
        "cor-maximal-ideal-and-residue-field-of-zp",
        "thm-p-adic-digit-expansion",
        "cor-p-adic-field-is-locally-compact-and-totally-disconnected",
        "cor-p-adic-simple-root-lifting",
        "thm-p-adic-newton-criterion",
        "thm-square-criterion-in-qp-for-odd-p",
        "thm-square-criterion-in-q2",
        "ex-p-adic-geometric-series",
        "ex-p-adic-expansion-of-minus-one",
        "ex-square-root-of-minus-one-in-q5",
        "ex-no-square-root-of-p-in-qp",
        "ex-p-adic-hensel-lifting-a-simple-root",
        "ex-two-adic-square-test",
        "ex-the-same-sequence-in-real-and-p-adic-metrics",
        "cex-zp-is-not-the-integral-closure-of-z-in-qp",
        "thm-dirichlet-series-half-plane-convergence",
        "thm-dirichlet-series-absolute-half-plane-holomorphy",
        "thm-dirichlet-series-abscissa-gap",
        "thm-uniqueness-of-dirichlet-series-coefficients",
        "thm-dirichlet-series-summatory-integral",
        "thm-dirichlet-series-multiplication-convolution",
        "thm-multiplicative-dirichlet-series-euler-product",
        "cor-completely-multiplicative-dirichlet-series-euler-product",
        "thm-landau-dirichlet-series",
        "thm-von-mangoldt-logarithmic-derivative-zeta",
        "cor-mobius-dirichlet-series-reciprocal-zeta",
        "cor-divisor-dirichlet-series-zeta-square",
        "cor-euler-totient-dirichlet-series",
        "ex-dirichlet-series-abscissa-boundaries",
        "ex-mobius-reciprocal-zeta-coefficients",
        "ex-divisor-function-from-zeta-square",
        "ex-euler-totient-dirichlet-series",
        "ex-liouville-dirichlet-series",
        "cex-conditionally-convergent-euler-product-rearrangement",
        "cex-an-abscissa-need-not-be-a-line-of-convergence",
        "lem-riemann-zeta-dirichlet-series-converges-locally-uniformly",
        "thm-euler-product-for-riemann-zeta",
        "cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one",
        "thm-riemann-zeta-continuation-to-the-right-half-plane",
        "thm-dirichlet-eta-representation",
        "thm-jacobi-theta-transformation",
        "thm-theta-mellin-representation-of-completed-zeta",
        "thm-riemann-zeta-meromorphic-continuation",
        "thm-completed-riemann-zeta-functional-equation",
        "thm-riemann-zeta-functional-equation",
        "thm-riemann-xi-is-entire-of-order-one",
        "thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane",
        "thm-trivial-zeros-and-critical-strip",
        "thm-hadamard-product-for-riemann-xi",
        "thm-special-values-of-riemann-zeta-at-integers",
        "ex-euler-product-numerically-approximates-zeta-at-two",
        "ex-zeta-four-equals-pi-to-the-four-over-ninety",
        "ex-zeta-zero-equals-minus-one-half",
        "ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms",
        "ex-zeta-minus-two-vanishes-by-the-sine-factor",
        "ex-symmetric-finite-zero-products-model-the-xi-hadamard-product",
        "cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges",
        "cex-the-harmonic-series-shows-the-defining-series-diverges-at-one",
        "fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one",
        "fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on",
        "fs-riemann-zeta-is-entire",
        "fs-the-functional-equation-alone-characterizes-zeta",
        "thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual",
        "thm-the-unit-is-self-dual",
        "thm-reversing-the-tensor-product-exchanges-left-and-right-duals",
        "thm-duals-are-unique-up-to-a-unique-compatible-isomorphism",
        "thm-duality-yields-adjunctions-of-tensoring-functors",
        "thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor",
        "cor-a-second-proof-that-adjoints-are-unique",
        "cex-not-every-monoidal-category-is-rigid",
        "thm-finite-dimensional-vector-spaces-are-rigid",
        "thm-left-duality-is-a-contravariant-antimonoidal-functor",
        "thm-the-double-dual-is-a-monoidal-functor",
        "cex-left-and-right-duals-and-double-duals-need-not-collapse",
        "thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism",
        "thm-a-braided-rigid-category-has-a-drinfeld-morphism",
        "thm-in-a-spherical-category-the-left-and-right-traces-agree",
        "thm-basic-properties-of-the-categorical-trace",
        "thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type",
        "fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category",
        "fs-a-braiding-suffices-to-define-a-trace",
        "fs-left-and-right-duals-of-an-object-are-isomorphic",
        "fs-every-monoidal-category-is-rigid",
        "fs-the-left-and-right-traces-always-agree",
        "fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure",
        "ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual",
        "ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces",
        "ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace",
        "ex-the-dimension-of-a-vector-space-is-its-linear-dimension",
        "cex-an-infinite-dimensional-vector-space-has-no-dual-object",
        "ex-an-adjunction-read-as-a-duality-of-endofunctors",
        "ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual",
        "prop-negative-derived-degrees-vanish-for-one-sided-resolutions",
        "lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions",
        "lem-the-induced-homology-map-is-independent-of-the-comparison-lift",
        "prop-left-derived-maps-preserve-identities",
        "prop-left-derived-maps-preserve-composition",
        "thm-left-derived-functors-relative-to-supplied-data-are-additive-functors",
        "lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions",
        "lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension",
        "thm-right-derived-functors-relative-to-supplied-data-are-additive-functors",
        "prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors",
        "prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors",
        "lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects",
        "lem-the-change-of-projective-resolution-isomorphisms-are-natural",
        "thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic",
        "prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
        "thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic",
        "prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
        "thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor",
        "thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor",
        "prop-positive-left-derived-functors-vanish-on-projective-objects",
        "prop-positive-right-derived-functors-vanish-on-injective-objects",
        "thm-acyclic-resolution-theorem-for-right-derived-functors",
        "thm-acyclic-resolution-theorem-for-left-derived-functors",
        "cor-adapted-classes-compute-derived-functors",
        "prop-an-exact-functor-has-vanishing-positive-derived-functors",
        "prop-derived-functors-commute-with-finite-biproducts",
        "prop-contravariant-derived-functors-are-derived-on-the-opposite-category",
        "prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied",
        "fs-enough-projectives-implies-a-canonical-resolution-for-every-object",
        "fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift",
        "fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself",
        "fs-derived-functors-in-two-variables-are-automatically-balanced",
        "fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution",
        "ex-the-left-derived-functors-of-an-exact-functor",
        "ex-the-right-derived-functors-of-hom-from-a-fixed-object",
        "ex-two-resolution-data-and-their-change-isomorphism",
        "ex-independence-of-two-comparison-lifts-on-homology",
        "ex-an-acyclic-resolution-that-is-not-an-injective-resolution",
        "cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor",
        "ex-a-contravariant-functor-derived-via-the-opposite-category",
        "lem-barycentric-coordinates-are-unique",
        "lem-geometric-simplices-intersect-in-the-realization-of-their-common-face",
        "prop-a-finite-simplicial-complex-has-compact-hausdorff-realization",
        "lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial",
        "lem-an-odd-permutation-reverses-oriented-simplex-sign",
        "lem-simplicial-boundary-is-independent-of-oriented-representative",
        "thm-the-simplicial-boundary-squares-to-zero",
        "lem-the-simplicial-augmentation-is-a-chain-map",
        "lem-induced-simplicial-chain-maps-commute-with-boundaries",
        "prop-simplicial-homology-is-functorial",
        "lem-contiguous-simplicial-maps-have-homotopic-realizations",
        "thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology",
        "lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible",
        "cor-the-simplex-has-zero-reduced-simplicial-homology",
        "prop-zero-th-simplicial-homology-is-free-on-connected-components",
        "prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum",
        "thm-euler-poincare-formula-for-a-finite-simplicial-complex",
        "lem-zero-locus-ideal-closure",
        "thm-zariski-closed-sets-affine-space",
        "lem-variety-ideal-galois-connection",
        "thm-affine-nullstellensatz-correspondence",
        "lem-irreducible-space-open-intersections",
        "thm-affine-variety-prime-coordinate-ring",
        "thm-regular-functions-on-affine-algebraic-set",
        "lem-principal-opens-form-affine-basis",
        "thm-coordinate-ring-principal-open",
        "lem-algebraic-set-finite-irreducible-components",
        "thm-affine-algebraic-sets-coordinate-duality",
        "lem-maximal-ideals-are-points-over-algebraically-closed-field",
        "cor-zariski-topology-cofinite-on-affine-line",
        "lem-density-nonempty-open-affine-variety",
        "lem-sheaf-section-over-empty-set-terminal",
        "thm-sheaf-equalizer-condition",
        "lem-sheaf-condition-check-on-basis",
        "lem-forgetful-sheaf-compatibility",
        "lem-germ-equivalence-relation",
        "lem-section-zero-if-all-germs-zero",
        "lem-morphisms-of-sheaves-determined-by-stalks",
        "thm-sheaf-morphism-isomorphism-stalkwise",
        "thm-sheaves-as-local-homeomorphisms",
        "lem-first-plus-construction-is-separated",
        "lem-second-plus-construction-is-sheaf",
        "thm-sheafification-universal-property",
        "thm-sheafification-preserves-stalks",
        "cor-sheafification-idempotent",
        "lem-image-sheaf-is-sheafification-presheaf-image",
        "ex-sheaf-continuous-real-functions",
        "ex-sheaf-locally-constant-functions",
        "cex-presheaf-bounded-continuous-functions-not-sheaf",
        "cex-constant-presheaf-not-sheaf-disconnected-open",
        "ex-skyscraper-set-sheaf-stalks",
        "ex-extension-by-empty-outside-open",
        "cex-objectwise-image-not-sheaf",
        "ex-germs-of-continuous-functions",
        "ex-empty-space-unique-sheaf-sections",
        "lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity",
        "lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning",
        "lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair",
        "lem-generalized-niceness-yields-four-reduction-outcomes",
        "cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade",
        "lem-cy-restricted-generalized-niceness-yields-three-outcomes",
        "lem-iterated-restricted-sparsification-reaches-the-target-scale",
        "lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph",
        "lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade",
        "ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks",
        "ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade",
        "ex-a-numeric-run-of-the-lemma-three-three-exponent-choice",
        "prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components",
        "prop-a-vector-field-acts-as-a-derivation-of-smooth-functions",
        "thm-derivations-of-smooth-functions-are-smooth-vector-fields",
        "prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law",
        "lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed",
        "prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field",
        "lem-the-commutator-of-vector-field-derivations-is-a-derivation",
        "prop-coordinate-formula-for-the-lie-bracket",
        "thm-vector-fields-form-a-lie-algebra",
        "prop-leibniz-rules-for-the-lie-bracket-with-function-multiples",
        "prop-related-vector-fields-have-related-lie-brackets",
        "cor-diffeomorphism-pushforward-preserves-lie-brackets",
        "prop-coordinate-vector-fields-commute",
        "thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves",
        "thm-unique-maximal-integral-curve-through-each-point",
        "thm-fundamental-theorem-on-flows",
        "prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains",
        "prop-the-generating-vector-field-is-invariant-under-its-flow",
        "prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global",
        "thm-compactly-supported-vector-fields-are-complete",
        "cor-every-smooth-vector-field-on-a-compact-manifold-is-complete",
        "prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it",
        "thm-flow-box-theorem",
        "cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves",
        "thm-flowout-theorem",
        "thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket",
        "prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes",
        "thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute",
        "prop-related-complete-vector-fields-have-intertwined-flows",
        "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
        "prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law",
        "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval",
        "fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field",
        "fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map",
        "fs-every-smooth-vector-field-is-complete",
        "fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field",
        "fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p",
        "fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent",
        "ex-constant-vector-fields-and-translation-flows",
        "ex-the-radial-vector-field-and-dilation-flow",
        "ex-the-rotation-vector-field-and-circle-flow",
        "ex-a-vector-field-with-finite-time-escape",
        "ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete",
        "ex-coordinate-formula-for-a-nonzero-lie-bracket",
        "ex-commuting-coordinate-fields-and-their-commuting-flows",
        "cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point",
        "ex-a-time-dependent-translation-field-and-its-evolution-operator",
        "ex-the-flow-box-coordinates-for-a-nonconstant-planar-field",
        "lem-coordinate-change-congruence-for-the-critical-hessian",
        "thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle",
        "lem-critical-hessian-agrees-with-the-levi-civita-hessian",
        "lem-sylvester-inertia-makes-morse-index-intrinsic",
        "lem-nondegenerate-critical-points-are-isolated",
        "cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points",
        "lem-one-variable-completion-of-the-square-with-a-smooth-parameter",
        "lem-morse-splitting-induction-preserves-the-residual-hessian",
        "thm-morse-lemma",
        "cor-local-extrema-and-saddles-from-the-morse-index",
        "cor-index-and-coindex-swap-under-negation",
        "cor-local-level-set-cone-at-a-morse-critical-point",
        "ex-height-on-the-sphere-is-a-perfect-morse-function",
        "ex-standard-quadratic-form-of-each-morse-index",
        "ex-height-on-a-torus-with-four-critical-points",
        "cex-a-degenerate-isolated-critical-point",
        "cex-a-degenerate-nonisolated-critical-set",
        "ex-the-empty-and-zero-dimensional-morse-cases",
        "lem-many-one-reducibility-is-a-preorder",
        "thm-many-one-reductions-transfer-decidability-and-recognizability",
        "thm-machine-acceptance-is-ce-complete",
        "lem-many-one-implies-turing-reduction",
        "prop-the-converse-fails",
        "lem-rice-witness-machine-construction",
        "thm-rices-theorem",
        "cor-standard-semantic-machine-properties-are-undecidable",
        "thm-rice-shapiro-positive-information-direction",
        "prop-syntactic-properties-lie-outside-rices-theorem",
        "fs-reductions-may-reverse-yes-and-no",
        "fs-rices-theorem-applies-to-state-count",
        "ex-many-one-reductions-transfer-decidability-and-recognizability",
        "ex-syntactic-properties-lie-outside-rices-theorem",
        "cex-reductions-may-reverse-yes-and-no",
        "prop-sat-is-in-np",
        "lem-tableau-cell-alphabet-is-constant",
        "lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal",
        "lem-exactly-one-symbol-constraints-have-polynomial-size",
        "lem-start-accept-and-transition-constraints-have-polynomial-size",
        "lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs",
        "lem-cook-levin-map-is-polynomial-time",
        "thm-cook-levin-sat-is-np-complete",
        "lem-tseitin-transformation-is-linear-size-and-equisatisfiable",
        "thm-three-sat-is-np-complete",
        "fs-cook-levin-enumerates-all-branches",
        "fs-naive-distribution-to-cnf-is-always-polynomial",
        "ex-tableau-cell-alphabet-is-constant",
        "ex-three-sat-is-np-complete",
        "cex-cook-levin-enumerates-all-branches",
        "lem-space-bounded-machines-have-exponentially-many-configurations",
        "lem-bounded-reachability-recursion-is-correct",
        "lem-bounded-reachability-uses-logarithmic-recursion-depth",
        "thm-savitchs-theorem",
        "cor-pspace-equals-npspace-and-is-closed-under-complement",
        "prop-tqbf-is-in-pspace",
        "lem-quantifier-reuse-keeps-reachability-formulas-polynomial",
        "thm-tqbf-is-pspace-complete",
        "thm-tqbf-truth-iff-existential-player-has-a-winning-strategy",
        "thm-ap-equals-pspace",
        "fs-savitch-stores-the-whole-configuration-graph",
        "ex-bounded-reachability-recursion-is-correct",
        "ex-ap-equals-pspace",
        "cex-savitch-stores-the-whole-configuration-graph",
        "thm-zpp-equals-rp-intersection-corp",
        "lem-majority-error-bound-from-chebyshev",
        "thm-bpp-amplification-to-inverse-polynomial-error",
        "lem-chernoff-bound-for-bernoulli-trials",
        "thm-bpp-amplification-to-exponentially-small-error",
        "thm-rp-one-sided-amplification",
        "thm-adleman-bpp-is-contained-in-p-poly",
        "lem-affine-finite-field-hashes-are-pairwise-independent",
        "thm-freivalds-matrix-product-verification",
        "thm-schwartz-zippel-lemma",
        "cor-pit-is-in-corp",
        "fs-reusing-random-bits-amplifies-success",
        "fs-pp-has-bounded-error-away-from-one-half",
        "ex-majority-error-bound-from-chebyshev",
        "ex-pit-is-in-corp",
        "cex-reusing-random-bits-amplifies-success"
      ]
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 1432 citation(s) over 575 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 21.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  cor-the-regular-module-decomposes-into-projective-indecomposables  [L2] -> thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules (searched: Statement)\n    quote: \"For a finite-dimensional algebra $A$, sending an indecomposable projective module $P$ to its head $P/\\operatorname{rad}(P)$ induces a bijection between isomorphism classes of indec…\"\n\n  cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p  [L1] -> thm-kg-is-local-iff-g-is-a-p-group (searched: Statement)\n    quote: \"Let $G$ be a finite group and $k$ a splitting field of characteristic $p$ for $G$. Then the group algebra $k[G]$ is local if and only if $G$ is a $p$-group.\"\n\n  thm-green-vertex-source-existence-and-conjugacy  [F1] -> def-vertex-and-source-of-an-indecomposable-module (searched: Definition)\n    quote: \"Let $M$ be an indecomposable $kG$-module. - A vertex of $M$ is a $p$-subgroup $Q\\le G$ that is minimal, under inclusion, among the subgroups for which $M$ is relatively $Q$-project…\"\n\n  cor-projective-indecomposable-modules-have-trivial-vertex  [F1] -> def-vertex-and-source-of-an-indecomposable-module (searched: Definition)\n    quote: \"Let $M$ be an indecomposable $kG$-module. - A vertex of $M$ is a $p$-subgroup $Q\\le G$ that is minimal, under inclusion, among the subgroups for which $M$ is relatively $Q$-project…\"\n\n  fs-a-vertex-is-a-vertex-of-the-cayley-graph  [F1] -> def-vertex-and-source-of-an-indecomposable-module (searched: Definition)\n    quote: \"Let $M$ be an indecomposable $kG$-module. - A vertex of $M$ is a $p$-subgroup $Q\\le G$ that is minimal, under inclusion, among the subgroups for which $M$ is relatively $Q$-project…\"\n\n  ex-the-regular-module-of-cp-in-characteristic-p  [L1] -> thm-kg-is-local-iff-g-is-a-p-group (searched: Statement)\n    quote: \"Let $G$ be a finite group and $k$ a splitting field of characteristic $p$ for $G$. Then the group algebra $k[G]$ is local if and only if $G$ is a $p$-group.\"\n\n  ex-the-augmentation-ideal-and-loewy-series-for-kcp  [L1] -> thm-kg-is-local-iff-g-is-a-p-group (searched: Statement)\n    quote: \"Let $G$ be a finite group and $k$ a splitting field of characteristic $p$ for $G$. Then the group algebra $k[G]$ is local if and only if $G$ is a $p$-group.\"\n\n  ex-projective-cover-of-the-trivial-module-for-a-p-group  [L2] -> thm-kg-is-local-iff-g-is-a-p-group (searched: Statement)\n    quote: \"Let $G$ be a finite group and $k$ a splitting field of characteristic $p$ for $G$. Then the group algebra $k[G]$ is local if and only if $G$ is a $p$-group.\"\n\n  cex-an-ordinary-irreducible-with-reducible-mod-p-reduction  [L2] -> ex-reducing-an-integral-lattice-for-s-three (searched: Example)\n    quote: \"Let $\\mathcal O=\\mathbb Z_{(3)}$ and let $$ L:=\\{(a,b,c)\\in\\mathcal O^3:a+b+c=0\\}, $$ with the natural permutation action of $S_3$. Then $L$ is an $\\mathcal O S_3$-lattice, but its…\"\n\n  prop-uniqueness-of-hensel-factor-lifting  [L2] -> lem-hensel-factor-lift-uniqueness-induction (searched: Statement)\n    quote: \"Let $A$ be a commutative ring, let $I \\subseteq A$ be an ideal, let $f \\in A[T]$, and let $$f=gh=g'h'$$ with $g,h,g',h'$ monic, $\\overline g=\\overline{g'}$, $\\overline h=\\overline{…\"\n\n  cor-complete-separated-adic-pair-henselian  [L5] -> lem-hensel-factor-lift-uniqueness-induction (searched: Statement)\n    quote: \"Let $A$ be a commutative ring, let $I \\subseteq A$ be an ideal, let $f \\in A[T]$, and let $$f=gh=g'h'$$ with $g,h,g',h'$ monic, $\\overline g=\\overline{g'}$, $\\overline h=\\overline{…\"\n\n  thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type  [L3] -> def-twist-and-ribbon-structure (searched: Definition)\n    quote: \"Let $\\mathcal C$ be a braided rigid monoidal category with braiding $c$. A twist on $\\mathcal C$ is a natural automorphism $\\theta\\in\\operatorname{Aut}(\\operatorname{id}_{\\mathcal …\"\n\n  thm-acyclic-resolution-theorem-for-right-derived-functors  [L1] -> def-acyclic-object-for-a-left-exact-functor (searched: Definition)\n    quote: \"Let $I$ be a supplied injective resolution datum on a class $\\mathcal D$, and let $F:\\mathcal A\\to\\mathcal B$ be an additive left exact functor. An object $A\\in\\mathcal D$ is $F$-a…\"\n\n  thm-acyclic-resolution-theorem-for-left-derived-functors  [L1] -> def-acyclic-object-for-a-right-exact-functor (searched: Definition)\n    quote: \"Let $P$ be a supplied projective resolution datum on a class $\\mathcal D$, and let $F:\\mathcal A\\to\\mathcal B$ be an additive right exact functor. An object $A\\in\\mathcal D$ is $F$…\"\n\n  prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied  [L3] -> prop-contravariant-derived-functors-are-derived-on-the-opposite-category (searched: Statement)\n    quote: \"Let $G:\\mathcal A\\to\\mathcal B$ be a contravariant additive functor on an abelian category $\\mathcal A$, regarded as a covariant functor $G:\\mathcal A^{\\mathrm{op}}\\to\\mathcal B$. …\"\n\n  fs-derived-functors-in-two-variables-are-automatically-balanced  [L1] -> prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied (searched: Statement)\n    quote: \"Let $B:\\mathcal A^{\\mathrm{op}}\\times\\mathcal C\\to\\mathcal D$ be additive in each variable. If projective resolution data on $\\mathcal A$ and injective resolution data on $\\mathcal…\"\n\n  fs-derived-functors-in-two-variables-are-automatically-balanced  [L2] -> def-balanced-derived-bifunctor (searched: Definition)\n    quote: \"Let $B:\\mathcal A^{\\mathrm{op}}\\times\\mathcal C\\to\\mathcal D$ be additive in each variable, with supplied projective data on $\\mathcal A$ and supplied injective data on $\\mathcal C…\"\n\n  ex-a-contravariant-functor-derived-via-the-opposite-category  [L2] -> prop-contravariant-derived-functors-are-derived-on-the-opposite-category (searched: Statement)\n    quote: \"Let $G:\\mathcal A\\to\\mathcal B$ be a contravariant additive functor on an abelian category $\\mathcal A$, regarded as a covariant functor $G:\\mathcal A^{\\mathrm{op}}\\to\\mathcal B$. …\"\n\n  prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law  [L1] -> thm-time-dependent-vector-fields-have-local-smooth-evolution-operators (searched: Statement)\n    quote: \"Let $X_t$ be a smooth time-dependent vector field on $M$. For every $(s,p)\\in I\\times M$ there exist an interval $J$ containing $s$, open neighbourhoods $U_r$ of the evolving point…\"\n\n  thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval  [L1] -> thm-time-dependent-vector-fields-have-local-smooth-evolution-operators (searched: Statement)\n    quote: \"Let $X_t$ be a smooth time-dependent vector field on $M$. For every $(s,p)\\in I\\times M$ there exist an interval $J$ containing $s$, open neighbourhoods $U_r$ of the evolving point…\"\n\n  ex-a-time-dependent-translation-field-and-its-evolution-operator  [L1] -> thm-time-dependent-vector-fields-have-local-smooth-evolution-operators (searched: Statement)\n    quote: \"Let $X_t$ be a smooth time-dependent vector field on $M$. For every $(s,p)\\in I\\times M$ there exist an interval $J$ containing $s$, open neighbourhoods $U_r$ of the evolving point…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "b-leaf-legacy",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cited-not-in-deps",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "b-leaf-content",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-reducing-an-integral-lattice-for-s-three",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schur-zassenhaus-existence",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-regular-module-decomposes-into-projective-indecomposables",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kg-is-local-iff-g-is-a-p-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-induced-module-decomposes-over-a-left-transversal",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-normal-p-subgroups-act-trivially-on-simple-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-higman-criterion-for-relative-projectivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-green-vertex-source-existence-and-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-projective-indecomposable-modules-have-trivial-vertex",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-reduction-of-an-ordinary-irreducible-remains-irreducible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-vertex-is-a-vertex-of-the-cayley-graph",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-regular-module-of-cp-in-characteristic-p",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-augmentation-ideal-and-loewy-series-for-kcp",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-projective-cover-of-the-trivial-module-for-a-p-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-ordinary-irreducible-with-reducible-mod-p-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-zp-is-the-pro-p-completion-of-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-frattini-formula-without-an-extra-closure-for-finitely-generated-pro-p-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-pro-p-completion-of-a-finite-p-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-hensel-factor-corrections-form-cauchy-sequences",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hensel-factor-lift-uniqueness-induction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-uniqueness-of-hensel-factor-lifting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-henselian-local-simple-root-criterion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-complete-separated-adic-pair-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-parameter-power-series-map-injective-by-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-krull-principal-ideal-theorem",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-hensel-factor-correction-mod-three-powers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hardy-littlewood-maximal-inequality-for-balls",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-jensen-for-logarithm-and-exponential",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-random-variable-need-not-have-a-finite-expectation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-fourier-partial-sums-are-dirichlet-convolutions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-step-functions-have-vanishing-torus-fourier-coefficients",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-lebesgue-lemma-for-fourier-coefficients",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-fourier-partial-sums-of-the-sawtooth",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-braiding-suffices-to-define-a-trace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-left-derived-maps-preserve-identities",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-left-derived-maps-preserve-composition",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-left-derived-functors-relative-to-supplied-data-are-additive-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-right-derived-functors-relative-to-supplied-data-are-additive-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-change-of-projective-resolution-isomorphisms-are-natural",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-acyclic-resolution-theorem-for-right-derived-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-horseshoe-lemma-for-injective-resolutions",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-acyclic-resolution-theorem-for-left-derived-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-enough-projectives-implies-a-canonical-resolution-for-every-object",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-derived-functors-in-two-variables-are-automatically-balanced",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-right-derived-functors-of-hom-from-a-fixed-object",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-an-acyclic-resolution-that-is-not-an-injective-resolution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-contravariant-functor-derived-via-the-opposite-category",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-germ-equivalence-relation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-section-zero-if-all-germs-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-morphisms-of-sheaves-determined-by-stalks",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-sheaf-morphism-isomorphism-stalkwise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-sheaves-as-local-homeomorphisms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-sheaf-locally-constant-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-skyscraper-set-sheaf-stalks",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-germs-of-continuous-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-time-dependent-translation-field-and-its-evolution-operator",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-complement-induces-the-conjugation-action-on-the-kernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-normal-hall-subgroup-gives-a-coprime-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-extensions-with-coprime-kernel-and-quotient-split",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-extensions-with-complete-kernel-split-over-the-centralizer",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-isomorphic-middle-groups-force-equivalent-group-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-split-group-extension-is-a-direct-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schur-zassenhaus-says-every-hall-subgroup-is-normal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-klein-four-extension-of-c-two-by-c-two-is-direct",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-four-has-four-complements-to-its-normal-klein-four-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-principal-crossed-homomorphisms-form-a-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-first-cohomology-for-a-trivial-action-is-hom",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-inflation-restriction-exact-sequence-in-degree-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-crossed-homomorphism-is-an-ordinary-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-first-cohomology-with-nonabelian-coefficients-is-a-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-module-radical-is-jacobson-radical-times-the-module",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nakayama-lemma-for-finite-dimensional-algebras",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finitely-generated-projective-kg-modules-are-injective-and-conversely",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-radical-of-a-finite-length-module-is-superfluous",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-krull-schmidt-for-finite-dimensional-kg-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-restriction-and-induction-preserve-projectives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-maschkes-theorem-still-gives-semisimplicity-when-p-divides-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-projective-covers-are-canonical-equalities-rather-than-unique-isomorphism-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-projective-and-injective-modules-coincide-over-every-ring",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-relative-projectivity-detected-by-higmans-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-topological-characterisation-of-pro-p-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-inverse-limit-topology-equals-the-p-adic-metric-topology",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-zp-is-compact-hausdorff-totally-disconnected-and-complete",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-integers-map-injectively-and-densely-into-zp",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-additive-group-of-zp-is-torsion-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-zp-is-topologically-generated-by-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-profinite-completion-of-z-is-the-product-of-all-zp",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-frattini-subgroup-commutes-with-surjective-inverse-limits",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-frattini-formula-for-finitely-generated-pro-p-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-topological-burnside-basis-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finitely-generated-pro-p-homomorphisms-are-surjective-iff-surjective-mod-frattini",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-zp-is-the-profinite-completion-of-z",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-zp-is-cyclic-as-an-abstract-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-profinite-group-is-pro-p-for-some-prime",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-compatible-p-adic-digit-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-convergence-of-partial-p-adic-expansions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-cauchy-sequence-in-the-additive-p-adic-metric",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-frattini-quotient-of-zp",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-topological-generation-in-zp-squared",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-abstractly-dense-proper-subgroup-of-zp",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-henselian-pair-ideal-in-jacobson-radical",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coprime-factor-bezout-lift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hensel-factor-lift-leading-coefficient-normalisation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hensel-factor-correction-one-stage",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hensel-factor-limit-multiplies-to-original",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-simple-root-to-coprime-factorisation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-factor-hensel-implies-simple-root-hensel",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-idempotents-lift-uniquely-in-a-henselian-pair",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-simple-root-hensel-lifts-idempotents",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-simple-root-form-recovers-factor-lifting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-equivalent-elementary-forms-of-hensels-property",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-complete-local-rings-are-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-nilpotent-ideal-pair-is-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-artinian-local-henselian-via-nilpotent-maximal-ideal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-henselian-quotient-factor-lift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-quotient-of-a-henselian-local-ring-is-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coefficient-field-maps-isomorphically-to-residue-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-equicharacteristic-prime-field-lifts",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-maximal-residue-injective-subfield",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coefficient-field-separable-adjunction-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coefficient-field-transcendental-adjunction-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coefficient-field-purely-inseparable-complete-step",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-equicharacteristic-complete-local-ring-has-coefficient-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-formal-power-series-evaluation-converges",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-formal-power-series-evaluation-unique-continuous-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-cohen-presentation-surjective-mod-maximal-square",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-cohen-presentation-surjective-by-completeness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-equicharacteristic-complete-local-power-series-quotient",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-parameter-power-series-subring-makes-ring-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-complete-local-domain-finite-over-a-regular-power-series-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-simple-root-and-factor-hensel-same-lift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-multiple-residue-root-does-not-lift-uniquely",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-idempotent-lifting-and-product-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-complete-discrete-valuation-ring-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-artinian-local-ring-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-localised-integers-not-henselian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cohen-presentation-singular-hypersurface",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-coefficient-field-noncanonical-choice",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-euclidean-balls-have-positive-finite-lebesgue-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-vitali-covering-lemma-for-balls-with-fivefold-dilates",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-ball-average-is-continuous-in-centre-and-radius",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-centered-hardy-littlewood-maximal-function-is-borel-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-centered-and-uncentered-maximal-functions-are-comparable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-hardy-littlewood-maximal-function-is-l-infinity-bounded",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-centered-hardy-littlewood-maximal-operator-is-l-p-bounded",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riesz-thorin-interpolation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-continuous-compactly-supported-functions-differentiate-by-ball-averages",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-almost-every-point-is-a-lebesgue-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-lebesgue-density-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-differentiation-along-families-shrinking-nicely",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-first-fundamental-theorem-of-calculus-for-l-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-hardy-littlewood-maximal-operator-is-not-strong-type-one-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-centered-maximal-function-of-the-unit-interval-indicator-on-r",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-unit-interval-indicator-has-nonintegrable-maximal-function",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-unit-mass-spike-has-a-large-maximal-superlevel-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-lebesgue-set-of-the-rationals-indicator-is-all-of-r",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-an-interval-endpoint-is-not-a-density-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-positive-measure-compact-set-can-miss-part-of-every-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-steinhaus-follows-from-the-density-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-there-is-a-measurable-set-with-density-one-half-in-every-interval",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-coordinate-map-for-a-finite-dimensional-normed-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-finite-dimensional-normed-spaces-are-banach",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-finite-dimensional-subspaces-are-closed",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-linear-maps-with-finite-dimensional-domain-are-bounded",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-riesz-lemma",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-locally-compact-normed-space-iff-finite-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-dependent-choice-riesz-separated-unit-sequence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-closed-unit-ball-compact-iff-finite-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-infinite-dimensional-closed-unit-ball-is-not-compact",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-banach-space-no-countably-infinite-hamel-basis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-kuratowski-distance-map-is-an-isometry",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-kuratowski-wojdyslawski-embedding",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-explicit-equivalence-constants-for-standard-norms-on-kn",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-an-infinite-separated-subset-of-the-unit-sphere",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-heine-borel-fails-in-ell-two",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-polynomial-space-admits-no-complete-norm",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-kuratowski-embedding-of-a-finite-metric-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-choice-free-discontinuous-functional-on-c00",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-probability-measure-basic-identities",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-finite-random-variables-are-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-law-of-a-random-element-is-a-probability-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-laws-commute-with-measurable-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-probability-law-and-distribution-function-correspondence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-expectation-is-independent-of-the-ae-representative",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-change-of-variables-for-expectation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-expectation-agrees-with-the-finite-weighted-sum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-expectation-of-an-indicator-is-probability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-layer-cake-formulas-for-random-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-expectation-linearity-monotonicity-and-modulus-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-variance-and-covariance-identities-for-random-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-jensen-inequality-for-expectation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-markov-inequality-for-random-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-chebyshev-inequality-for-random-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-holder-inequality-for-random-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-cauchy-schwarz-for-random-variables",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-lyapunov-moment-inequality-on-a-probability-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-second-moment-positive-probability-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-normal-equations-for-best-affine-l2-prediction",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-best-affine-predictor-from-one-random-variable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-countable-probability-space-with-geometric-weights",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-uniform-random-variable-on-zero-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-exponential-random-variable-from-its-tail",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-discrete-continuous-and-mixed-distribution-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-expectation-under-a-measurable-transformation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-markov-and-chebyshev-sharpness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-distribution-function-need-not-have-a-density",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-equality-almost-surely-is-not-pointwise-equality",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-bertrand-chord-paradox-is-a-model-specification-problem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-closed-form-and-size-bounds-for-the-dirichlet-kernel",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-symmetric-difference-formula-for-fourier-partial-sums",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-localisation-principle-for-fourier-series",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-dini-pointwise-convergence-criterion-for-fourier-series",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-local-holder-regularity-implies-fourier-convergence-at-a-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-bounded-variation-gives-one-sided-dirichlet-integrability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-dirichlet-jordan-pointwise-convergence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-piecewise-c-one-fourier-series-converges-to-midpoint-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-dirichlet-kernel-at-zero-and-away-from-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-lebesgue-constants-grow-logarithmically",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-localisation-for-functions-equal-on-an-arc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-continuity-alone-does-not-satisfy-a-dini-modulus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-nonarchimedean-absolute-value-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-equivalent-field-absolute-values-characterisation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-p-adic-absolute-value-is-nonarchimedean",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-ostrowskis-theorem-for-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-product-formula-for-the-rationals",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-weak-approximation-for-rational-places",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-p-adic-completion-is-a-field",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-p-adic-balls-are-clopen",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-p-adic-completion-agrees-with-the-fraction-field-of-zp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-zp-is-the-valuation-ring-of-qp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-maximal-ideal-and-residue-field-of-zp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-p-adic-digit-expansion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-p-adic-field-is-locally-compact-and-totally-disconnected",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-p-adic-simple-root-lifting",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-p-adic-newton-criterion",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-square-criterion-in-qp-for-odd-p",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-square-criterion-in-q2",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-p-adic-geometric-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-p-adic-expansion-of-minus-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-square-root-of-minus-one-in-q5",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-no-square-root-of-p-in-qp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-p-adic-hensel-lifting-a-simple-root",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-two-adic-square-test",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-the-same-sequence-in-real-and-p-adic-metrics",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-zp-is-not-the-integral-closure-of-z-in-qp",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-series-half-plane-convergence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-series-absolute-half-plane-holomorphy",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-series-abscissa-gap",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-uniqueness-of-dirichlet-series-coefficients",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-series-summatory-integral",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-series-multiplication-convolution",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-multiplicative-dirichlet-series-euler-product",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-completely-multiplicative-dirichlet-series-euler-product",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-landau-dirichlet-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-von-mangoldt-logarithmic-derivative-zeta",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-mobius-dirichlet-series-reciprocal-zeta",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-divisor-dirichlet-series-zeta-square",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-euler-totient-dirichlet-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-dirichlet-series-abscissa-boundaries",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-mobius-reciprocal-zeta-coefficients",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-divisor-function-from-zeta-square",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-euler-totient-dirichlet-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-liouville-dirichlet-series",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-conditionally-convergent-euler-product-rearrangement",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-an-abscissa-need-not-be-a-line-of-convergence",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-riemann-zeta-dirichlet-series-converges-locally-uniformly",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-euler-product-for-riemann-zeta",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-riemann-zeta-continuation-to-the-right-half-plane",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-dirichlet-eta-representation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-jacobi-theta-transformation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-theta-mellin-representation-of-completed-zeta",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-riemann-zeta-meromorphic-continuation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-completed-riemann-zeta-functional-equation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-riemann-zeta-functional-equation",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-riemann-xi-is-entire-of-order-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-trivial-zeros-and-critical-strip",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-hadamard-product-for-riemann-xi",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-special-values-of-riemann-zeta-at-integers",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-euler-product-numerically-approximates-zeta-at-two",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-zeta-four-equals-pi-to-the-four-over-ninety",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-zeta-zero-equals-minus-one-half",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-splitting-the-theta-mellin-integral-isolates-the-two-polar-terms",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-zeta-minus-two-vanishes-by-the-sine-factor",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-symmetric-finite-zero-products-model-the-xi-hadamard-product",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cex-the-harmonic-series-shows-the-defining-series-diverges-at-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-riemann-zeta-is-entire",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "fs-the-functional-equation-alone-characterizes-zeta",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-unit-is-self-dual",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-reversing-the-tensor-product-exchanges-left-and-right-duals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-duals-are-unique-up-to-a-unique-compatible-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-duality-yields-adjunctions-of-tensoring-functors",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-second-proof-that-adjoints-are-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-not-every-monoidal-category-is-rigid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-finite-dimensional-vector-spaces-are-rigid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-left-duality-is-a-contravariant-antimonoidal-functor",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-double-dual-is-a-monoidal-functor",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-left-and-right-duals-and-double-duals-need-not-collapse",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-braided-rigid-category-has-a-drinfeld-morphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-in-a-spherical-category-the-left-and-right-traces-agree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-basic-properties-of-the-categorical-trace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-left-and-right-duals-of-an-object-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-monoidal-category-is-rigid",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-left-and-right-traces-always-agree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-dimension-of-a-vector-space-is-its-linear-dimension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-infinite-dimensional-vector-space-has-no-dual-object",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-adjunction-read-as-a-duality-of-endofunctors",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-negative-derived-degrees-vanish-for-one-sided-resolutions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-induced-homology-map-is-independent-of-the-comparison-lift",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-positive-left-derived-functors-vanish-on-projective-objects",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-positive-right-derived-functors-vanish-on-injective-objects",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-adapted-classes-compute-derived-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-an-exact-functor-has-vanishing-positive-derived-functors",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-derived-functors-commute-with-finite-biproducts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-contravariant-derived-functors-are-derived-on-the-opposite-category",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-left-derived-functors-of-an-exact-functor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-two-resolution-data-and-their-change-isomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-independence-of-two-comparison-lifts-on-homology",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-barycentric-coordinates-are-unique",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-geometric-simplices-intersect-in-the-realization-of-their-common-face",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-finite-simplicial-complex-has-compact-hausdorff-realization",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-an-odd-permutation-reverses-oriented-simplex-sign",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-simplicial-boundary-is-independent-of-oriented-representative",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-simplicial-boundary-squares-to-zero",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-simplicial-augmentation-is-a-chain-map",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-induced-simplicial-chain-maps-commute-with-boundaries",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-simplicial-homology-is-functorial",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-contiguous-simplicial-maps-have-homotopic-realizations",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-the-simplex-has-zero-reduced-simplicial-homology",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-zero-th-simplicial-homology-is-free-on-connected-components",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-euler-poincare-formula-for-a-finite-simplicial-complex",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-zero-locus-ideal-closure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-zariski-closed-sets-affine-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-variety-ideal-galois-connection",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-affine-nullstellensatz-correspondence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-irreducible-space-open-intersections",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-affine-variety-prime-coordinate-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-regular-functions-on-affine-algebraic-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-principal-opens-form-affine-basis",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-coordinate-ring-principal-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-algebraic-set-finite-irreducible-components",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-affine-algebraic-sets-coordinate-duality",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-maximal-ideals-are-points-over-algebraically-closed-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-zariski-topology-cofinite-on-affine-line",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-density-nonempty-open-affine-variety",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-sheaf-section-over-empty-set-terminal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-sheaf-equalizer-condition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-sheaf-condition-check-on-basis",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-forgetful-sheaf-compatibility",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-first-plus-construction-is-separated",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-second-plus-construction-is-sheaf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-sheafification-universal-property",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-sheafification-preserves-stalks",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-sheafification-idempotent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-image-sheaf-is-sheafification-presheaf-image",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-sheaf-continuous-real-functions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-presheaf-bounded-continuous-functions-not-sheaf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-constant-presheaf-not-sheaf-disconnected-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-extension-by-empty-outside-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-objectwise-image-not-sheaf",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-empty-space-unique-sheaf-sections",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-generalized-niceness-yields-four-reduction-outcomes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-cy-restricted-generalized-niceness-yields-three-outcomes",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-iterated-restricted-sparsification-reaches-the-target-scale",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-thinning-a-four-block-weakly-sparse-blockade-to-directional-sparse-subblocks",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-large-almost-pure-pair-extends-an-anticomplete-blockade",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "ex-a-numeric-run-of-the-lemma-three-three-exponent-choice",
      "scope": "run",
      "owner": "f"
    },
    {
      "id": "prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-acts-as-a-derivation-of-smooth-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-derivations-of-smooth-functions-are-smooth-vector-fields",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-commutator-of-vector-field-derivations-is-a-derivation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-coordinate-formula-for-the-lie-bracket",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-vector-fields-form-a-lie-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-leibniz-rules-for-the-lie-bracket-with-function-multiples",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-related-vector-fields-have-related-lie-brackets",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-diffeomorphism-pushforward-preserves-lie-brackets",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-coordinate-vector-fields-commute",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-unique-maximal-integral-curve-through-each-point",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-fundamental-theorem-on-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-generating-vector-field-is-invariant-under-its-flow",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-compactly-supported-vector-fields-are-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-every-smooth-vector-field-on-a-compact-manifold-is-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-flow-box-theorem",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-flowout-theorem",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-related-complete-vector-fields-have-intertwined-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-smooth-vector-field-is-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-constant-vector-fields-and-translation-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-radial-vector-field-and-dilation-flow",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-rotation-vector-field-and-circle-flow",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-vector-field-with-finite-time-escape",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-coordinate-formula-for-a-nonzero-lie-bracket",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-commuting-coordinate-fields-and-their-commuting-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-flow-box-coordinates-for-a-nonconstant-planar-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-coordinate-change-congruence-for-the-critical-hessian",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-critical-hessian-agrees-with-the-levi-civita-hessian",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-sylvester-inertia-makes-morse-index-intrinsic",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-nondegenerate-critical-points-are-isolated",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-one-variable-completion-of-the-square-with-a-smooth-parameter",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-morse-splitting-induction-preserves-the-residual-hessian",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-morse-lemma",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-local-extrema-and-saddles-from-the-morse-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-index-and-coindex-swap-under-negation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-local-level-set-cone-at-a-morse-critical-point",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-height-on-the-sphere-is-a-perfect-morse-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-standard-quadratic-form-of-each-morse-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-height-on-a-torus-with-four-critical-points",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-degenerate-isolated-critical-point",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-degenerate-nonisolated-critical-set",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-empty-and-zero-dimensional-morse-cases",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-many-one-reducibility-is-a-preorder",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-many-one-reductions-transfer-decidability-and-recognizability",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-machine-acceptance-is-ce-complete",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-many-one-implies-turing-reduction",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-the-converse-fails",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-rice-witness-machine-construction",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-rices-theorem",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-standard-semantic-machine-properties-are-undecidable",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-rice-shapiro-positive-information-direction",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-syntactic-properties-lie-outside-rices-theorem",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-reductions-may-reverse-yes-and-no",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-rices-theorem-applies-to-state-count",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-many-one-reductions-transfer-decidability-and-recognizability",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-syntactic-properties-lie-outside-rices-theorem",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-reductions-may-reverse-yes-and-no",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-sat-is-in-np",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-tableau-cell-alphabet-is-constant",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-exactly-one-symbol-constraints-have-polynomial-size",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-start-accept-and-transition-constraints-have-polynomial-size",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-cook-levin-map-is-polynomial-time",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-cook-levin-sat-is-np-complete",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-tseitin-transformation-is-linear-size-and-equisatisfiable",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-three-sat-is-np-complete",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-cook-levin-enumerates-all-branches",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-naive-distribution-to-cnf-is-always-polynomial",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-tableau-cell-alphabet-is-constant",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-three-sat-is-np-complete",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-cook-levin-enumerates-all-branches",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-space-bounded-machines-have-exponentially-many-configurations",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-bounded-reachability-recursion-is-correct",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-bounded-reachability-uses-logarithmic-recursion-depth",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-savitchs-theorem",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-pspace-equals-npspace-and-is-closed-under-complement",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "prop-tqbf-is-in-pspace",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-quantifier-reuse-keeps-reachability-formulas-polynomial",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-tqbf-is-pspace-complete",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-tqbf-truth-iff-existential-player-has-a-winning-strategy",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-ap-equals-pspace",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-savitch-stores-the-whole-configuration-graph",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-bounded-reachability-recursion-is-correct",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-ap-equals-pspace",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-savitch-stores-the-whole-configuration-graph",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-zpp-equals-rp-intersection-corp",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-majority-error-bound-from-chebyshev",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-bpp-amplification-to-inverse-polynomial-error",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-chernoff-bound-for-bernoulli-trials",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-bpp-amplification-to-exponentially-small-error",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-rp-one-sided-amplification",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-adleman-bpp-is-contained-in-p-poly",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "lem-affine-finite-field-hashes-are-pairwise-independent",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-freivalds-matrix-product-verification",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "thm-schwartz-zippel-lemma",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cor-pit-is-in-corp",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-reusing-random-bits-amplifies-success",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "fs-pp-has-bounded-error-away-from-one-half",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-majority-error-bound-from-chebyshev",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-pit-is-in-corp",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "cex-reusing-random-bits-amplifies-success",
      "scope": "run",
      "owner": "g"
    },
    {
      "id": "ex-cardinal-functions-of-the-lower-limit-line",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-dirichlet-is-nowhere-continuous",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-indicator-of-a-fat-cantor-set-is-not-integrable",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-limit-differs-from-the-value",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-nested-open-intervals-empty",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-ordered-field-not-archimedean",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-the-one-norm-comes-from-no-inner-product",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-bolzano-weierstrass-in-rn",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-boundedness-theorem-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-cauchy-product-absolute",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-cesaro-matrix-is-regular",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-continuous-extension-from-a-dense-subset-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-countably-many-discontinuities-integrable",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-no-function-is-continuous-exactly-on-q",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-stolz-cesaro-zero-over-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-unconditional-iff-absolute-in-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-cauchy-complete-not-complete-field",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-continuity-implies-uniform-continuity",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-equivalent-metrics-share-cauchy-sequences",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-heine-borel-holds-in-every-normed-space",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-limit-equals-value",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-additive-is-q-linear",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-bw-implies-archimedean",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-bw-implies-cauchy-complete",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-cauchy-complete-and-archimedean-imply-mct",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-content-zero-implies-null",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-elementary-sets-admit-compact-inner-and-open-outer-approximations",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-finite-circle-wedge-open-cover",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-finite-interval-cover-total-length",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-function-limit-preserves-order",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-function-limit-unique",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-limit-implies-local-boundedness",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-mct-implies-archimedean",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-mct-implies-lub",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-metric-convergent-implies-cauchy",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-nth-term-test",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-real-and-metric-notions-agree",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-sign-preservation-near-a-limit",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-simple-continued-fraction-convergents-and-cylinders",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "rem-riemann-stieltjes-conventions-and-scope",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-abel-dini",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-algebra-of-function-limits",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-arzela-ascoli-for-real-ck",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-banach-fixed-point",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-cantor-function-properties",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-cesaro-mean-theorem",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-compact-null-is-content-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-compact-subset-is-closed-and-bounded",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-complete-and-totally-bounded-implies-compact",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-completeness-equivalences",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-composition-of-function-limits",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuity-iff-oscillation-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuity-preimage-characterisation",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuous-image-of-a-compact-set-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuous-inverse",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-diagram-area-agrees-with-algebraic-relator-area",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-dirichlet-test",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-double-series-fubini",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-extreme-value-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-fermat-interior-extremum",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-grouping-of-series",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-heine-borel-rn",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-heine-cantor-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-infinite-product-criterion",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-intermediate-value",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-mean-value-inequality",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-metric-compactness-equivalences",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-monotone-implies-integrable",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-monotonicity-of-the-integral",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-perfect-set-uncountable-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-plane-dual-exists-and-double-dual-recovers-primal",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-riemann-series-theorem",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-sequential-criterion-for-function-limits",
      "scope": "unknown",
      "owner": null
    }
  ],
  "assigned_items": [
    {
      "id": "b-leaf-legacy",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cited-not-in-deps",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "b-leaf-content",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "prop-induced-module-decomposes-over-a-left-transversal",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-krull-principal-ideal-theorem",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-horseshoe-lemma-for-injective-resolutions",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-time-dependent-translation-field-and-its-evolution-operator",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-coordinate-map-for-a-finite-dimensional-normed-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-finite-dimensional-normed-spaces-are-banach",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-finite-dimensional-subspaces-are-closed",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-linear-maps-with-finite-dimensional-domain-are-bounded",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-riesz-lemma",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-locally-compact-normed-space-iff-finite-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-dependent-choice-riesz-separated-unit-sequence",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-closed-unit-ball-compact-iff-finite-dimensional",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-infinite-dimensional-closed-unit-ball-is-not-compact",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-banach-space-no-countably-infinite-hamel-basis",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-kuratowski-distance-map-is-an-isometry",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-kuratowski-wojdyslawski-embedding",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-explicit-equivalence-constants-for-standard-norms-on-kn",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-an-infinite-separated-subset-of-the-unit-sphere",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-heine-borel-fails-in-ell-two",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-polynomial-space-admits-no-complete-norm",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-kuratowski-embedding-of-a-finite-metric-space",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-choice-free-discontinuous-functional-on-c00",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-acts-as-a-derivation-of-smooth-functions",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-derivations-of-smooth-functions-are-smooth-vector-fields",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "lem-the-commutator-of-vector-field-derivations-is-a-derivation",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-coordinate-formula-for-the-lie-bracket",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-vector-fields-form-a-lie-algebra",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-leibniz-rules-for-the-lie-bracket-with-function-multiples",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-related-vector-fields-have-related-lie-brackets",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-diffeomorphism-pushforward-preserves-lie-brackets",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-coordinate-vector-fields-commute",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-unique-maximal-integral-curve-through-each-point",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-fundamental-theorem-on-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-generating-vector-field-is-invariant-under-its-flow",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-compactly-supported-vector-fields-are-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-every-smooth-vector-field-on-a-compact-manifold-is-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-flow-box-theorem",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-flowout-theorem",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "prop-related-complete-vector-fields-have-intertwined-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "thm-time-dependent-vector-fields-have-local-smooth-evolution-operators",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-every-smooth-vector-field-is-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-constant-vector-fields-and-translation-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-radial-vector-field-and-dilation-flow",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-rotation-vector-field-and-circle-flow",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-vector-field-with-finite-time-escape",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-coordinate-formula-for-a-nonzero-lie-bracket",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-commuting-coordinate-fields-and-their-commuting-flows",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-the-flow-box-coordinates-for-a-nonconstant-planar-field",
      "scope": "run",
      "owner": "e"
    },
    {
      "id": "ex-cardinal-functions-of-the-lower-limit-line",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-dirichlet-is-nowhere-continuous",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-indicator-of-a-fat-cantor-set-is-not-integrable",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-limit-differs-from-the-value",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-nested-open-intervals-empty",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-ordered-field-not-archimedean",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-psi-of-one-over-x-has-no-limit-at-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cex-the-one-norm-comes-from-no-inner-product",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-bolzano-weierstrass-in-rn",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-boundedness-theorem-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-cauchy-product-absolute",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-cesaro-matrix-is-regular",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-continuous-extension-from-a-dense-subset-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-countably-many-discontinuities-integrable",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-no-function-is-continuous-exactly-on-q",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-stolz-cesaro-zero-over-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "cor-unconditional-iff-absolute-in-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-cauchy-complete-not-complete-field",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-continuity-implies-uniform-continuity",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-equivalent-metrics-share-cauchy-sequences",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-heine-borel-holds-in-every-normed-space",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "fs-limit-equals-value",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-additive-is-q-linear",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-bw-implies-archimedean",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-bw-implies-cauchy-complete",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-cauchy-complete-and-archimedean-imply-mct",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-content-zero-implies-null",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-elementary-sets-admit-compact-inner-and-open-outer-approximations",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-finite-circle-wedge-open-cover",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-finite-interval-cover-total-length",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-function-limit-preserves-order",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-function-limit-unique",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-limit-implies-local-boundedness",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-mct-implies-archimedean",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-mct-implies-lub",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-metric-convergent-implies-cauchy",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-nth-term-test",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-real-and-metric-notions-agree",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-sign-preservation-near-a-limit",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-simple-continued-fraction-convergents-and-cylinders",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "rem-riemann-stieltjes-conventions-and-scope",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-abel-dini",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-algebra-of-function-limits",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-arzela-ascoli-for-real-ck",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-banach-fixed-point",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-cantor-function-properties",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-cesaro-mean-theorem",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-compact-null-is-content-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-compact-subset-is-closed-and-bounded",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-complete-and-totally-bounded-implies-compact",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-completeness-equivalences",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-composition-of-function-limits",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuity-iff-oscillation-zero",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuity-preimage-characterisation",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuous-image-of-a-compact-set-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-continuous-inverse",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-diagram-area-agrees-with-algebraic-relator-area",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-dirichlet-test",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-double-series-fubini",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-extreme-value-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-fermat-interior-extremum",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-grouping-of-series",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-heine-borel-rn",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-heine-cantor-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-infinite-product-criterion",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-intermediate-value",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-mean-value-inequality",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-metric-compactness-equivalences",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-monotone-implies-integrable",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-monotonicity-of-the-integral",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-nonnegative-continuous-with-zero-integral-vanishes",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-perfect-set-uncountable-r",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-plane-dual-exists-and-double-dual-recovers-primal",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-riemann-series-theorem",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-sequential-criterion-for-function-limits",
      "scope": "unknown",
      "owner": null
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **e**, run `frontier-29`

You are the group Alpha for batches **5**, **16**: 2 A/B pair(s), 4 page(s), 83 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `finite-dimensional-normed-spaces-and-riesz-lemma` | A | functional-analysis | 288.051 | `bounded-linear-operators-and-quotient-spaces-examples` |
| 5 | `finite-dimensional-normed-spaces-and-riesz-lemma-examples` | B | functional-analysis | 288.052 | `finite-dimensional-normed-spaces-and-riesz-lemma` |
| 16 | `vector-fields-flows-and-lie-derivatives` | A | differential-geometry | 459 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `euclidean-ordinary-differential-equations-with-smooth-dependence` |
| 16 | `vector-fields-flows-and-lie-derivatives-examples` | B | differential-geometry | 460 | `vector-fields-flows-and-lie-derivatives` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-dimensional-normed-spaces-and-riesz-lemma` — Finite Dimensional Normed Spaces and Riesz Lemma (16 item(s))

- `thm-coordinate-map-for-a-finite-dimensional-normed-space` · theorem — A chosen algebraic basis identifies a finite-dimensional normed space with a coordinate space
- `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent` · theorem — All norms on a finite-dimensional complex normed space are equivalent
- `cor-finite-dimensional-normed-spaces-are-banach` · corollary — Every finite-dimensional normed space is Banach
- `cor-finite-dimensional-subspaces-are-closed` · corollary — A finite-dimensional normed subspace is closed
- `cor-linear-maps-with-finite-dimensional-domain-are-bounded` · corollary — A linear map from a finite-dimensional normed space is bounded
- `lem-riesz-lemma` · lemma — Riesz lemma
- `thm-locally-compact-normed-space-iff-finite-dimensional` · theorem — A normed space is locally compact if and only if it is finite-dimensional
- `lem-dependent-choice-riesz-separated-unit-sequence` · lemma — Under dependent choice, Riesz lemma builds an infinite separated sequence in the unit sphere
- `thm-closed-unit-ball-compact-iff-finite-dimensional` · theorem — The closed unit ball is compact if and only if the normed space is finite-dimensional
- `cor-infinite-dimensional-closed-unit-ball-is-not-compact` · corollary — In an infinite-dimensional normed space the closed unit ball is not compact
- `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact` · corollary — On an infinite-dimensional normed space, the identity operator is not compact
- `thm-banach-space-no-countably-infinite-hamel-basis` · theorem — A Banach space has no countably infinite Hamel basis
- `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` · remark — Why the unrestricted complete-metric Baire theorem would overstate the choice cost here
- `def-kuratowski-distance-map` · definition — The based Kuratowski distance map into bounded continuous functions
- `thm-kuratowski-distance-map-is-an-isometry` · theorem — The based Kuratowski distance map is an isometric embedding
- `thm-kuratowski-wojdyslawski-embedding` · theorem — Kuratowski-Wojdyslawski embedding theorem

### `finite-dimensional-normed-spaces-and-riesz-lemma-examples` — Finite Dimensional Normed Spaces and Riesz Lemma — Examples (7 item(s))

- `ex-explicit-equivalence-constants-for-standard-norms-on-kn` · example — Explicit comparison constants for the standard norms on K^n
- `ex-an-infinite-separated-subset-of-the-unit-sphere` · example — An infinite separated subset of the unit sphere
- `cex-heine-borel-fails-in-ell-two` · counterexample — Heine-Borel fails in ell^2
- `cex-polynomial-space-admits-no-complete-norm` · counterexample — The polynomial space admits no complete norm
- `ex-kuratowski-embedding-of-a-finite-metric-space` · example — The Kuratowski embedding of a finite metric space
- `rem-discontinuous-functionals-on-banach-spaces-and-choice` · remark — Discontinuous linear functionals on Banach spaces are not available in ZF + DC
- `ex-choice-free-discontinuous-functional-on-c00` · example — A choice-free discontinuous linear functional on c_00

### `vector-fields-flows-and-lie-derivatives` — Vector Fields Flows and Lie Derivatives (50 item(s))

- `def-smooth-vector-field-as-a-tangent-bundle-section` · definition — A smooth vector field is a smooth section of the tangent bundle
- `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components` · proposition — Smoothness of a vector field is equivalent to smooth coordinate components
- `def-action-of-a-vector-field-on-smooth-functions` · definition — The action of a vector field on smooth functions
- `prop-a-vector-field-acts-as-a-derivation-of-smooth-functions` · proposition — A vector field acts as a derivation of smooth functions
- `thm-derivations-of-smooth-functions-are-smooth-vector-fields` · theorem — Derivations of smooth functions are exactly smooth vector fields
- `def-f-related-vector-fields` · definition — F-related vector fields
- `prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law` · proposition — F-relatedness is equivalent to the derivation intertwining law
- `def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism` · definition — Pushforwards and pullbacks of vector fields by a diffeomorphism
- `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed` · lemma — A vector field along an embedded submanifold extends to a neighbourhood and globally when the submanifold is closed
- `prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field` · proposition — A vector field tangent to an embedded submanifold restricts to a vector field on it
- `def-lie-bracket-of-smooth-vector-fields` · definition — The Lie bracket of smooth vector fields
- `lem-the-commutator-of-vector-field-derivations-is-a-derivation` · lemma — The commutator of vector-field derivations is again a derivation
- `prop-coordinate-formula-for-the-lie-bracket` · proposition — Coordinate formula for the Lie bracket
- `thm-vector-fields-form-a-lie-algebra` · theorem — Smooth vector fields form a Lie algebra under the Lie bracket
- `prop-leibniz-rules-for-the-lie-bracket-with-function-multiples` · proposition — Leibniz rules for the Lie bracket with function multiples
- `prop-related-vector-fields-have-related-lie-brackets` · proposition — Related vector fields have related Lie brackets
- `cor-diffeomorphism-pushforward-preserves-lie-brackets` · corollary — Diffeomorphism pushforward preserves Lie brackets
- `prop-coordinate-vector-fields-commute` · proposition — Coordinate vector fields commute
- `def-integral-curve-of-a-vector-field` · definition — Integral curves of a vector field
- `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` · theorem — Local existence, uniqueness, and smooth dependence for manifold integral curves
- `thm-unique-maximal-integral-curve-through-each-point` · theorem — Through each point there is a unique maximal integral curve
- `def-complete-vector-field` · definition — Complete vector fields
- `def-local-and-global-flow` · definition — Local and global flows generated by a vector field
- `thm-fundamental-theorem-on-flows` · theorem — The fundamental theorem on flows
- `prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains` · proposition — Time-t flow maps are diffeomorphisms between open domains
- `prop-the-generating-vector-field-is-invariant-under-its-flow` · proposition — The generating vector field is invariant under its own flow
- `prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global` · proposition — A vector field is complete if and only if its flow is global
- `thm-compactly-supported-vector-fields-are-complete` · theorem — Compactly supported smooth vector fields are complete
- `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` · corollary — Every smooth vector field on a compact manifold is complete
- `prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it` · proposition — The flow of a vector field tangent to a closed embedded submanifold preserves it
- `thm-flow-box-theorem` · theorem — The flow-box theorem
- `cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves` · corollary — A nonvanishing vector field has locally parallel integral curves
- `def-flowout-of-an-embedded-submanifold` · definition — The flowout of an embedded submanifold by a vector field
- `thm-flowout-theorem` · theorem — The flowout theorem
- `def-lie-derivative-of-a-function` · definition — The Lie derivative of a function
- `def-lie-derivative-of-a-vector-field` · definition — The Lie derivative of a vector field
- `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket` · theorem — The Lie derivative of a vector field equals the Lie bracket
- `prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes` · proposition — A vector field is flow-invariant if and only if its Lie derivative vanishes
- `thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute` · theorem — Two vector fields commute if and only if their local flows commute
- `prop-related-complete-vector-fields-have-intertwined-flows` · proposition — Related complete vector fields have intertwined flows
- `def-time-dependent-vector-field-and-evolution-operator` · definition — Time-dependent vector fields and their evolution operators
- `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` · theorem — Time-dependent vector fields have local smooth evolution operators
- `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law` · proposition — Time-dependent evolution satisfies the two-time cocycle law
- `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval` · theorem — Compactly supported time-dependent vector fields have global evolution on a compact time interval
- `fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field` · false-statement — FALSE: every pointwise assignment of a tangent vector is a smooth vector field
- `fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map` · false-statement — FALSE: every smooth vector field can be pushed forward by every smooth map
- `fs-every-smooth-vector-field-is-complete` · false-statement — FALSE: every smooth vector field is complete
- `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field` · false-statement — FALSE: the Lie bracket is C^infty-linear in each vector-field entry
- `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p` · false-statement — FALSE: the point values X_p and Y_p determine the bracket value [X,Y]_p
- `fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent` · false-statement — FALSE: a vanishing Lie bracket forces the vector fields to be pointwise linearly dependent

### `vector-fields-flows-and-lie-derivatives-examples` — Vector Fields Flows and Lie Derivatives — Examples (10 item(s))

- `ex-constant-vector-fields-and-translation-flows` · example — Constant vector fields have translation flows
- `ex-the-radial-vector-field-and-dilation-flow` · example — The radial vector field has the dilation flow
- `ex-the-rotation-vector-field-and-circle-flow` · example — The planar rotation field has the circle rotation flow
- `ex-a-vector-field-with-finite-time-escape` · example — The vector field x^2 d/dx has finite-time escape
- `ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete` · example — A compactly supported cutoff of an incomplete vector field is complete
- `ex-coordinate-formula-for-a-nonzero-lie-bracket` · example — A coordinate computation of a nonzero Lie bracket
- `ex-commuting-coordinate-fields-and-their-commuting-flows` · example — Commuting coordinate fields have commuting flows
- `cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point` · counterexample — Two pairs of vector fields can agree at a point and still have different bracket values there
- `ex-a-time-dependent-translation-field-and-its-evolution-operator` · example — A time-dependent translation field and its evolution operator
- `ex-the-flow-box-coordinates-for-a-nonconstant-planar-field` · example — Flow-box coordinates for a nonconstant planar field

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-29`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
