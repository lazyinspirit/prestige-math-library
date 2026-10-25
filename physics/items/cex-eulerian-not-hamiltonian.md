---
id: cex-eulerian-not-hamiltonian
kind: counterexample
title: "Two triangles sharing one vertex form an Eulerian graph with no Hamilton cycle"
status: published
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-eulers-euler-circuit-characterisation, thm-hamilton-cycle-vertex-deletion-bound, def-standard-complete-bipartite-path-and-cycle-graphs, def-multigraph-loop-and-digraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement refuted

Every finite simple graph with an Euler circuit has a Hamilton cycle.

```tikz
\begin{tikzpicture}[scale=1.0]
  \node[circle,draw,inner sep=2.5pt] (x) at (0,0) {$x$};
  \node[circle,draw,inner sep=2.5pt] (a) at (-2,1.25) {$a$};
  \node[circle,draw,inner sep=2.5pt] (b) at (-2,-1.25) {$b$};
  \node[circle,draw,inner sep=2.5pt] (c) at (2,1.25) {$c$};
  \node[circle,draw,inner sep=2.5pt] (d) at (2,-1.25) {$d$};
  \draw[very thick] (x)--(a) node[midway,above] {\scriptsize $1$};
  \draw[very thick] (a)--(b) node[midway,left] {\scriptsize $2$};
  \draw[very thick] (b)--(x) node[midway,below] {\scriptsize $3$};
  \draw[very thick] (x)--(c) node[midway,above] {\scriptsize $4$};
  \draw[very thick] (c)--(d) node[midway,right] {\scriptsize $5$};
  \draw[very thick] (d)--(x) node[midway,below] {\scriptsize $6$};
\end{tikzpicture}
```

## Counterexample

Let $G$ have vertices $x,a,b,c,d$ and edges

$$ xa,ab,bx,xc,cd,dx. $$

Thus $G$ consists of two triangles sharing only $x$. It is Eulerian but not
Hamiltonian.

## Facts & Assumptions

**Given:** The explicitly displayed finite simple graph $G$.

[L1] A connected finite multigraph has an Euler circuit exactly when every degree is even ([[thm-eulers-euler-circuit-characterisation]]).

[L2] If a graph has a Hamilton cycle, deleting a nonempty proper set $S$ leaves at most $|S|$ components ([[thm-hamilton-cycle-vertex-deletion-bound]]).

[F1] A triangle is the cycle graph $C_3$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A finite simple graph can be regarded as the multigraph with the same vertex and edge sets and with each edge assigned its two endpoints ([[def-multigraph-loop-and-digraph]]).

## Verification

**Proof technique:** direct.

1.1 Regard $G$ as the corresponding multigraph from [F2]. It is connected, $\deg(x)=4$, and each of $a,b,c,d$ has degree two. Hence every degree is even, and [L1] gives an Euler circuit; explicitly, $x,a,b,x,c,d,x$ uses every edge once. [given, F1, F2, L1, algebra]

1.2 Deleting $S=\{x\}$ leaves the two disjoint edges $ab$ and $cd$, hence two connected components. Since $2>|S|=1$, [L2] shows that $G$ cannot have a Hamilton cycle. [given, L2, algebra]

2.1 Thus $G$ is Eulerian and non-Hamiltonian, refuting the proposed implication. [step 1.1, step 1.2] ∎
