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
differentiation turn recurrence relations into rational functions and closed forms. Lattice
paths turn those coefficients into geometry: monotone and diagonal paths are counted by
binomial coefficients, the reflection principle proves the ballot theorems, and Dyck paths
give the Catalan numbers. The cycle lemma and first-return decompositions supply further
Catalan, Motzkin and Schroder formulas, while balanced bracket words, binary trees and
polygon triangulations identify the same Catalan family in different guises.
Non-intersecting path systems then bring determinants into the subject through
Lindstrom-Gessel-Viennot, so generating functions, bijections and linear algebra meet on
one class of finite models.

## order-and-inversion

A finite partial order splits into chains and antichains, and each is bounded by the
other: Sperner's theorem for the Boolean lattice, Dilworth's for any finite order.
The incidence algebra turns the same order into a ring of functions on its intervals, in
which the zeta function is invertible, and its inverse is the Mobius function that
generalises inclusion-exclusion.

## graphs

A graph begins as adjacency, degree, walks, components and trees, and those notions already
control spanning trees, Eulerian and Hamiltonian circuits, hereditary classes and proper
colourings. Incidence vectors and incidence matrices then move finite set systems and graph
decompositions into linear algebra: independence criteria yield Oddtown, Eventown, Fisher's
inequality and the Graham-Pollak theorem. Shattering and VC dimension connect the same
finite families to order and geometry, with shifting and multilinear polynomials proving
Sauer-Shelah and the inclusion matrix giving an exact rank computation. Multivariate
polynomial identities and the combinatorial Nullstellensatz close the part with
Cauchy-Davenport, cube-cover bounds and the Frankl-Wilson intersection theorem, so
combinatorial structure is measured equally by graph language, vector spaces and
polynomials.

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
inequality and second moments produce graphs and set systems by proving positive
probability. In hereditary graph theory that method yields homogeneous sets and
induced-copy estimates, while regularity replaces local irregularity by dense pseudorandom
pairs with controlled counting. Nikiforov's theorem and Rodl's theorem then force linearly
large sparse or dense restricted sets in $H$-free graphs, with bounded cover and partition
forms. Modules and substitution give the complementary decomposition theory: a module is a
vertex set indistinguishable from outside, Gallai's theorem splits every connected
anticonnected graph into a prime quotient and modular parts, and substitution preserves the
Erdos-Hajnal property, reducing the conjecture to prime graphs.
