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
---

## counting

Every count in this category is assembled from two rules, the sum rule and the product
rule, applied to finite sets whose cardinality is a natural number rather than a symbol.
Factorials and binomial coefficients follow, and then the two principles that do the work
when a direct count is unavailable: inclusion-exclusion, which corrects an overcount, and
the pigeonhole principle, which produces an object without exhibiting it.

## generating-functions

A formal power series is a sequence written so that addition and multiplication of series
are operations on sequences, with no question of convergence anywhere. Coefficient
extraction, the unit criterion and the formal derivative make the ring usable, and a linear
recurrence with constant coefficients becomes a rational generating function whose partial
fractions return a closed form for the sequence.

## order-and-inversion

A finite partial order splits into chains and antichains, and each is bounded by the
other: Sperner's theorem for the Boolean lattice, Dilworth's for any finite order.
The incidence algebra turns the same order into a ring of functions on its intervals, in
which the zeta function is invertible, and its inverse is the Mobius function that
generalises inclusion-exclusion.

## graphs

A graph is a finite vertex set with a symmetric adjacency relation, and the first facts are
the ones every later argument quotes: degrees sum to twice the edge count, walks give
connectivity and components, trees are the connected graphs with no cycle, and every
connected graph has a spanning tree. Eulerian and Hamiltonian circuits, induced subgraphs
and hereditary classes, and proper colourings with the greedy bound complete the language.

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

A finite probability space is a finite set with weights, so expectation is a finite sum and
every inequality here is a statement about counting. Linearity of expectation, Markov's
inequality and the second moment method turn that into existence proofs: a graph with a
property is exhibited by showing a random one has it with positive probability. The same
machinery bounds induced copies of a fixed graph, gives regular pairs, and supports the
Erdos-Hajnal property for hereditary classes.
