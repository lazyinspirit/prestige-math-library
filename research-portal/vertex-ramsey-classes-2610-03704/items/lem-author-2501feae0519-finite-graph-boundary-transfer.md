---
id: lem-author-2501feae0519-finite-graph-boundary-transfer
kind: lemma
title: The finite graph boundary gives two-uniform witnesses
status: published
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - def-berge-cycles-and-incidence-graph
  - def-weak-hypergraph-colouring-palette
  - math:def-uniform-hypergraph-and-complete-partite-hypergraph
  - math:def-proper-vertex-colouring-and-chromatic-number
  - math:def-graph-walk-trail-path-and-cycle
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  def-berge-cycles-and-incidence-graph: mathematical-premise
  def-weak-hypergraph-colouring-palette: mathematical-premise
  math:def-uniform-hypergraph-and-complete-partite-hypergraph: mathematical-premise
  math:def-proper-vertex-colouring-and-chromatic-number: mathematical-premise
  math:def-graph-walk-trail-path-and-cycle: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: P. Erdős, Graph theory and probability, Canadian Journal of Mathematics
        11 (1959), 34–38
      url: https://users.renyi.hu/~p_erdos/1959-06.pdf
      locator: Printed p.35 (PDF p.2), paragraph following equation (5), beginning
        “Now (4) clearly shows”; p.36, paragraph displaying a given closed
        circuit and counting its distinct ordered vertices; definition of h(k,l)
        and equation (4) on p.34; proof of (4), pp.35–37
      statement: For each prescribed integer q≥3 there exist finite graphs with
        arbitrarily large chromatic number and no closed circuit with fewer than
        q edges. More precisely, the p.35 paragraph asserts an n-vertex graph of
        chromatic number greater than n^c for a positive constant c (with q
        fixed) and with no closed circuit of fewer than q edges.
      hypotheses: Fixed finite circuit threshold q≥3; n sufficiently large. Graphs are
        finite simple graphs; chromatic number refers to proper vertex
        colouring.
      reading_limits: "Read the full five-page original PDF text and inspected
        rendered printed pp.35–36: p.35 gives the finite n-vertex high-chromatic
        assertion and its strict circuit threshold; p.36 writes a circuit as
        cyclic edges on distinct ordered vertices. The definition of h(k,l),
        equation (4) and its proof were read in the PDF text. Only the finite
        high-girth/high-chromatic existence consequence and this circuit
        convention are used; the probabilistic estimates were not independently
        audited."
dependency_level: 2
---

## Statement

For integers $q\geq3$ and $k\geq1$ there is a finite $2$-uniform hypergraph of Berge girth at least $q$ with no weak $k$-colouring.

## Statement references

[[math:def-finite-simple-graph]]

[[def-berge-cycles-and-incidence-graph]]

[[def-weak-hypergraph-colouring-palette]]

[[math:def-uniform-hypergraph-and-complete-partite-hypergraph]]

## Facts & Assumptions

[F1] [[math:def-finite-simple-graph]] defines finite simple graphs, [[math:def-uniform-hypergraph-and-complete-partite-hypergraph]] defines $2$-uniform hypergraphs, and [[def-berge-cycles-and-incidence-graph]] and [[def-weak-hypergraph-colouring-palette]] define Berge cycles and weak colourings.

[F2] Erdős, Graph theory and probability, p.35, supplies a finite simple graph with no circuit shorter than $q$ and chromatic number greater than $k$; see External input.

[F3] [[math:def-proper-vertex-colouring-and-chromatic-number]] defines proper graph colourings and $\chi(G)$ using the natural-number palette $k=\{0,\ldots,k-1\}$. Relabelling colours by a bijection preserves properness.

[F4] [[math:def-graph-walk-trail-path-and-cycle]] defines an ordinary graph cycle as a closed walk of length at least three with distinct vertices apart from its coinciding endpoints. These are the closed circuits in the imported result: Erdős, p.36, displays the cyclic edge sequence and counts ordered choices of distinct circuit vertices.

## Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 Apply F2 to obtain a finite graph $G$ and regard its edge set as a set of two-element hyperedges on $V(G)$. On such an edge the weak-colouring condition is exactly that its two endpoints have different colours. The bijection $j\mapsto j-1$ from $[k]=\{1,\ldots,k\}$ to $\{0,\ldots,k-1\}$ converts a weak $k$-colouring into a proper graph $k$-colouring in F3; its inverse $j\mapsto j+1$ gives the converse. Thus such a weak colouring would imply $\chi(G)\leq k$, contrary to F2. [F1, F2, F3, construct]

2.1 A Berge cycle of length two would require two distinct two-element edges containing the same two distinct vertices, impossible in a simple graph. In a Berge cycle of length $t\geq3$, edge $e_i$ contains the two distinct vertices $x_{i-1},x_i$ and therefore equals their pair, with indices modulo $t$. Hence $(x_0,x_1,\ldots,x_{t-1},x_0)$ is an ordinary graph cycle of length $t$ in F4: its consecutive edges are $e_1,\ldots,e_{t-1},e_0$, and the Berge vertices are distinct. F2 excludes every such cycle with $t<q$, proving the Berge girth assertion for the hypergraph in step 1.1. [F1, F2, F4, step 1.1] ∎

## External input

The following established result is used as an external premise, rather than claimed as a locally reconstructed proof: For each prescribed integer $q\geq3$ there exist finite graphs with arbitrarily large chromatic number and no closed circuit with fewer than $q$ edges. More precisely, the p.35 paragraph asserts an $n$-vertex graph of chromatic number greater than $n^c$ for a positive constant $c$ (with $q$ fixed) and with no closed circuit of fewer than $q$ edges.

## Source notes

Read the full five-page original PDF text and inspected rendered printed pp.35–36: p.35 gives the finite n-vertex high-chromatic assertion and its strict circuit threshold; p.36 writes a circuit as cyclic edges on distinct ordered vertices. The definition of h(k,l), equation (4) and its proof were read in the PDF text. Only the finite high-girth/high-chromatic existence consequence and this circuit convention are used; the probabilistic estimates were not independently audited.
