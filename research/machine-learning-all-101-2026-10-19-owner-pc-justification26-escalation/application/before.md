---
id: alg-pc-causal-discovery
kind: algorithm
title: "Population PC causal-discovery algorithm"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-causal-discovery-oracle-regime
  - def-cpdag-markov-equivalence-class
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §§2.2.1 and 2.3"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §2.1"
      url: "https://arxiv.org/pdf/1302.4972"
verification:
  precheck: n/a
---

## Definition

**Input:** A finite vertex set $V$, a perfect conditional-independence oracle
for a law in the causally sufficient discovery regime, and a fixed total order
of $V$. For every adjacent pair and conditioning set $S$ tested below, the
oracle returns whether $X_i$ and $X_j$ are conditionally independent given
$X_S$.

**Output:** An undirected skeleton $C$, a separator record $\operatorname{Sep}(i,j)$
for each deleted edge, and a partially directed graph.

1. Initialize $C$ to the complete undirected graph on $V$ and set the level
$\ell=0$.

2. In the fixed lexicographic order of unordered vertex pairs, process each
pair $i-j$ that is still an edge of $C$. First test every $\ell$-element
subset of $\operatorname{Adj}_C(i)\setminus\{j\}$ in lexicographic order;
then test every $\ell$-element subset of
$\operatorname{Adj}_C(j)\setminus\{i\}$ in lexicographic order. On the first
oracle result of conditional independence given a tested set $S$, delete
$i-j$, record $\operatorname{Sep}(i,j)=\operatorname{Sep}(j,i)=S$, and do
not test that pair again. If no set separates the pair, leave it adjacent.
Adjacency sets are read from the current graph, including deletions already
made at level $\ell$.

3. If at least one remaining edge has an endpoint with at least $\ell+1$
neighbors other than the other endpoint, increment $\ell$ and repeat step 2.
Otherwise stop the skeleton search.

4. For each unshielded triple $i-k-j$ in $C$, replace $i-k-j$ by
$i\to k\leftarrow j$ exactly when $k\notin\operatorname{Sep}(i,j)$.

5. Repeatedly orient edges to closure under the following background-free rules,
using fixed lexicographic order on rule instances:

   - **R1:** If $i\to j-k$ and $i,k$ are nonadjacent, orient $j-k$ as $j\to k$.
   - **R2:** If $i-j$ is undirected and $i\to k\to j$, orient $i-j$ as $i\to j$.
   - **R3:** If $i-j$, $i-k$, and $i-\ell$ are undirected, $k\to j$,
     $\ell\to j$, and $k,\ell$ are nonadjacent, orient $i-j$ as $i\to j$.

Do not apply a background-knowledge rule.

## Definition references

[[def-causal-discovery-oracle-regime]]

[[def-cpdag-markov-equivalence-class]]
