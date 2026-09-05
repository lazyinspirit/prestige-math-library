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
      - integer-partitions-and-the-twelvefold-way
      - counting-up-to-symmetry-burnside-and-polya
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
      - algebraic-and-spectral-graph-theory
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
      - bull-free-graphs-and-the-erdos-hajnal-property
      - quotient-blockades-and-mixing-relations
      - pure-pairs-forests-and-path-antipath-classes
      - cographs-perfect-patterns-and-pure-pairs
      - the-five-cycle-and-erdos-hajnal
      - star-expansions-and-erdos-hajnal
      - iterative-sparsification-and-the-five-vertex-path
      - small-graph-erdos-hajnal-consequences
      - iterative-restriction-and-comb-extraction-lemmas
      - leaf-reducibility-and-wonderful-families
      - generalized-niceness-and-reduction-outcomes
      - property-star-and-comb-outcomes
      - from-generalized-niceness-to-erdos-hajnal
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
differentiation solve recurrences, permutation statistics contribute $q$-factorials and
Eulerian polynomials, symbolic combinatorics turns labelled constructions into EGF
identities, and lattice paths convert the same series into Catalan-type counts. The same
formal language governs set and integer partitions: Stirling and Bell numbers encode
labelled decompositions, Ferrers conjugation identifies parts with largest parts, Euler's
distinct-equals-odd identity and the Durfee-square decomposition turn product formulas into
structure, Franklin's involution yields the pentagonal recurrence for $p(n)$, and
Burnside-Pólya cycle indices convert necklace, bracelet and weighted colouring orbits into
explicit substitutions.

## order-and-inversion

A finite partial order splits into chains and antichains, and each is bounded by the
other: Sperner's theorem for the Boolean lattice, Dilworth's for any finite order.
The incidence algebra turns the same order into a ring of functions on its intervals, in
which the zeta function is invertible, and its inverse is the Mobius function that
generalises inclusion-exclusion.

## graphs

A graph begins with connectivity, trees, Eulerian and Hamiltonian circuits, hereditary
classes, and colouring. Linear-algebra methods then encode incidences and set systems in
matrices, proving results such as Fisher and Graham-Pollak, while block designs and finite
projective planes show the same counting identities in structured examples. The new
spectral page adds the adjacency and Laplacian dictionaries: powers count walks, the
Laplacian detects components and algebraic connectivity, Kirchhoff's matrix-tree theorem
turns spanning-tree counts into determinants and eigenvalue products, and canonical spectra
for $K_n$, $C_n$, $K_{m,n}$, and the Petersen graph lead to basic expander estimates.

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

A finite probability space makes expectation a counting tool, and the probabilistic method
turns that into homogeneous sets, induced-copy estimates, sparse-pair decompositions, and
the structural alternatives that drive the Erdos-Hajnal program. Modules, substitutions,
quotient blockades, pure pairs, stars, combs, iterative restrictions, and sparsification
then convert those witnesses into explicit clique-or-stable-set structure for classes from
the bull and $C_5$ through the small-graph and six-vertex prime cases. The closing
reduction layer packages generalized niceness, blockade thinning, and anticonnected
thinnings into four-outcome, three-outcome, and iterated restricted-sparsification lemmas
that force either the target restricted subgraph or a polynomial-sized homogeneous set.
Property (*) makes the relevant comb trigger explicit; together with leaf reducibility it
produces the constant-scale alternatives and then generalized niceness. Rödl initialization
removes the initial restriction, while the final page upgrades the resulting restricted or
blockade outcomes to the Erdos-Hajnal property, using complement invariance to return from
the complement-free formulation to the original forbidden family.
