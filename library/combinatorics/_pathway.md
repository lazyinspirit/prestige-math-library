---
category: combinatorics
status: published
parts:
  - part: counting
    title: "Counting"
    pages:
      - finite-counting-and-binomial-coefficients
      - inclusion-exclusion-and-the-pigeonhole-principle
  - part: generating-functions
    title: "Generating functions"
    pages:
      - formal-power-series
      - linear-recurrences-and-rational-generating-functions
      - permutation-statistics-inversions-and-eulerian-numbers
      - combinatorial-classes-and-the-symbolic-method
      - lattice-paths-and-catalan-numbers
  - part: order-and-inversion
    title: "Order, chains and Mobius inversion"
    pages:
      - chains-antichains-sperner-and-dilworth
      - incidence-algebras-and-mobius-inversion
  - part: graphs
    title: "Graphs"
    pages:
      - graphs-walks-and-connectivity
      - trees-forests-and-spanning-trees
      - eulerian-and-hamiltonian-graphs
      - induced-subgraphs-and-hereditary-graph-classes
      - graph-colouring
      - linear-algebra-methods-in-combinatorics
      - block-designs-and-finite-projective-planes
  - part: ramsey-and-extremal
    title: "Ramsey and extremal graph theory"
    pages:
      - ramsey-theory
      - extremal-graph-theory
  - part: flows-and-planarity
    title: "Flows, matchings and planarity"
    pages:
      - matchings-covers-menger-and-network-flows
      - plane-graphs-euler-and-the-five-colour-theorem
  - part: probability
    title: "Probability and the probabilistic method"
    pages:
      - finite-probability-spaces-and-random-variables
      - finite-probability-and-the-probabilistic-method
      - erdos-hajnal-property-and-homogeneous-sets
      - regular-pairs-and-induced-counting
      - sparse-restricted-subgraphs-and-rodl-nikiforov
      - modules-substitution-and-prime-graphs
      - polynomial-rodl-and-viral-equivalence
      - classical-and-loglog-erdos-hajnal-bounds
---

## counting

Every count in this category is assembled from two rules, the sum rule and the product
rule, applied to finite sets whose cardinality is a natural number rather than a symbol.
Factorials and binomial coefficients follow, and then the two principles that do the work
when a direct count is unavailable: inclusion-exclusion, which corrects an overcount, and
the pigeonhole principle, which produces an object without exhibiting it.

## generating-functions

A formal power series is a sequence written so that algebra acts on coefficients, with no
question of convergence anywhere. Coefficient extraction, inversion and formal
differentiation turn recurrence relations into rational functions and closed forms, while
permutations add a second generating-function language: Lehmer codes count inversions by
$q$-factorials, Foata's transformations compare inversion number, major index, descents
and excedances, and Eulerian polynomials package descent statistics. Symbolic
combinatorics then turns disjoint unions, products, sequences, multisets, powersets,
cycles, substitution and pointing into formulas for compositions, partitions, necklaces,
and recursive families such as plane and binary trees. Lattice paths convert the same
series into geometry, where reflection, first-return decomposition, the cycle lemma, and
Lindstrom-Gessel-Viennot yield ballot, Catalan, Motzkin and determinant formulas.

## order-and-inversion

A finite partial order splits into chains and antichains, and each is bounded by the
other: Sperner's theorem for the Boolean lattice, Dilworth's for any finite order.
The incidence algebra turns the same order into a ring of functions on its intervals, in
which the zeta function is invertible, and its inverse is the Mobius function that
generalises inclusion-exclusion.

## graphs

A graph begins as adjacency, degree, walks, components and trees, and those notions already
control spanning trees, Eulerian and Hamiltonian circuits, hereditary classes and proper
colourings. Incidence vectors and incidence matrices then move finite set systems into
linear algebra: independence arguments prove Oddtown, Eventown, Fisher's inequality and
Graham-Pollak, while design identities force the parameter equations of $2$-designs and
symmetric designs. Steiner triple systems, finite projective planes and orthogonal Latin
squares give structured examples in which the same counting becomes explicit, with
projective planes realising symmetric $2$-designs and finite fields producing complete
orthogonal families at prime-power orders. Shattering, VC dimension and the combinatorial
Nullstellensatz close the part with order, geometry and polynomial methods.

## ramsey-and-extremal

Ramsey's theorem says a large enough complete graph, however its edges are coloured,
contains a monochromatic clique, so total disorder is impossible. Extremal graph theory
asks the quantitative form of the same question: how many edges force a given subgraph, with
Turan's theorem and the Erdos-Stone bound answering it in terms of the chromatic number.

## flows-and-planarity

Matchings, vertex covers and cuts are the same problem seen from two sides, and the
min-max theorems say so: Konig and Hall for bipartite matching, Menger for disjoint paths,
max-flow min-cut for networks. Planarity then constrains a graph by geometry rather than by
counting, and Euler's formula bounds the edges, which is what forces a vertex of small
degree and gives the five colour theorem.

## probability

A finite probability space turns expectation into a weighted count, so linearity, Markov's
inequality and second moments produce combinatorial objects by proving positive
probability. In hereditary graph theory that method yields homogeneous sets and
induced-copy estimates, while regularity and the sparse-subgraph theory of Nikiforov and
Rodl force linearly large restricted sets in $H$-free graphs. Modules and substitution
give the complementary decomposition theory: Gallai's theorem splits connected
anticonnected graphs into prime quotients and modular parts, and substitution preserves the
Erdos-Hajnal property. The finite-family variants then show that the Erdos-Hajnal
property, the polynomial Rodl property and virality are equivalent. Quantitative density
theorems then give classical and log-log lower bounds for homogeneous sets in $H$-free
graphs.
