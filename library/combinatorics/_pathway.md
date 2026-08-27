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
      - set-partitions-stirling-numbers-and-exponential-generating-functions
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
      - blockades-combs-and-pattern-graphs
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
differentiation solve recurrences, permutations contribute $q$-factorials and Eulerian
polynomials, symbolic combinatorics turns labelled constructions into EGF identities, and
lattice paths convert the same series into Catalan-type counts. The added page completes
this route for set partitions: Stirling numbers encode basis changes between powers and
factorials, Bell numbers satisfy their standard recurrences and exponential formula,
labelled constructions explain partition and ordered-partition counts, and Dobinski's
formula is kept separate as the one analytic argument.

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
probability. In hereditary graph theory this yields homogeneous sets, induced-copy
estimates, regularity-driven restricted subgraphs, modular decomposition, and the density
bounds behind Erdos-Hajnal, polynomial Rodl and virality formulations. The added blockade
page supplies one local engine for those results: ordered blockades, combs and pure pattern
graphs encode sparse or complete behaviour, $P_4$-free patterns force large homogeneous
subblockades, and maximal sparse-pair extraction turns repeated local sparsity into a long
structured blockade for later iterative arguments.
