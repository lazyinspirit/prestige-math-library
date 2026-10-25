---
id: def-cpdag-markov-equivalence-class
kind: definition
title: "DAG Markov equivalence, patterns, and CPDAGs"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-d-separation-in-a-dag
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §1.1"
      url: "https://arxiv.org/pdf/1302.4972"
    - title: "Lauritzen, Graphical Models lecture notes, §2.6"
      url: "https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Fix a finite vertex set $V$. For a DAG $G$ on $V$, its **skeleton** is the
undirected graph with edge $\{i,j\}$ exactly when $G$ contains $i\to j$ or
$j\to i$. An **unshielded triple** is a triple of distinct vertices $i,k,j$
with edges $i-k$ and $k-j$ in the skeleton and no edge between $i$ and $j$.
It is an **unshielded collider** (also called a v-structure) when its arrows are
$i\to k\leftarrow j$. Two DAGs on $V$ are **Markov equivalent** when they
induce the same d-separation relations: for every pairwise disjoint
$A,B,S\subseteq V$, $A$ and $B$ are d-separated by $S$ in one DAG exactly
when they are d-separated by $S$ in the other. The equivalence class of $G$ is
denoted $[G]$.

A **partially directed acyclic graph** (PDAG) on $V$ is a simple mixed graph
whose directed edges contain no directed cycle. A **consistent DAG extension**
of a PDAG preserves every directed edge, orients every undirected edge, is
acyclic, and creates no unshielded collider absent from the PDAG. For an
equivalence class with a common skeleton, its **completed pattern** directs an
edge exactly when that orientation occurs in every DAG of the class and leaves
the edge undirected when both orientations occur. A **completed partially
directed acyclic graph** (CPDAG) for $[G]$ is this unique completed pattern
when its consistent DAG extensions are exactly $[G]$. Thus its directed edges
are compelled, while each undirected edge occurs in both directions among its
consistent extensions.

## Definition references

[[def-d-separation-in-a-dag]]

## Remarks

For the path skeleton on $V=\{A,B,C\}$, the following CPDAG has exactly
the three consistent DAG extensions shown. In each extension, the only
internal vertex on the path from $A$ to $C$ is the noncollider $B$: the path
is active given the empty set and blocked given $\{B\}$. Adjacent vertices
are always joined by an active one-edge path. Thus the three extensions have
the same d-separation relations, and each edge occurs in both orientations
within this class.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node[anchor=east] at (-0.7,0) {CPDAG};
\node (pa) at (0,0) {$A$};
\node (pb) at (1.5,0) {$B$};
\node (pc) at (3,0) {$C$};
\draw (pa) -- (pb);
\draw (pb) -- (pc);
\node[anchor=east] at (-0.7,-1) {Extension 1};
\node (a1) at (0,-1) {$A$};
\node (b1) at (1.5,-1) {$B$};
\node (c1) at (3,-1) {$C$};
\draw[->] (a1) -- (b1);
\draw[->] (b1) -- (c1);
\node[anchor=east] at (-0.7,-2) {Extension 2};
\node (a2) at (0,-2) {$A$};
\node (b2) at (1.5,-2) {$B$};
\node (c2) at (3,-2) {$C$};
\draw[->] (c2) -- (b2);
\draw[->] (b2) -- (a2);
\node[anchor=east] at (-0.7,-3) {Extension 3};
\node (a3) at (0,-3) {$A$};
\node (b3) at (1.5,-3) {$B$};
\node (c3) at (3,-3) {$C$};
\draw[->] (b3) -- (a3);
\draw[->] (b3) -- (c3);
\end{tikzpicture}
```

The remaining orientation $A\to B\leftarrow C$ is excluded: it creates an
unshielded collider absent from the CPDAG. Its $A$--$C$ path is blocked given
the empty set and active given $\{B\}$, so it is not Markov equivalent to
the displayed extensions. The illustration is explanatory; the definitions
and the d-separation checks do not depend on the picture.
