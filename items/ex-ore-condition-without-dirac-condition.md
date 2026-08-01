---
id: ex-ore-condition-without-dirac-condition
kind: example
title: "$K_4$ with one new vertex adjacent to two clique vertices satisfies Ore's condition but not Dirac's condition"
status: draft
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-ores-hamiltonicity-theorem, cor-diracs-hamiltonicity-theorem, def-graph-adjacency-incidence-neighbourhood-and-degree, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Example

Start with the clique on $a,b,c,d$ and add a vertex $x$ adjacent exactly to
$a$ and $b$. The resulting five-vertex graph satisfies Ore's condition but not
Dirac's minimum-degree condition, and it has the Hamilton cycle
$x,a,c,d,b,x$.

```tikz
\begin{tikzpicture}[scale=1.0]
  \node[circle,draw,inner sep=2.5pt] (x) at (-1.6,0.9) {$x$};
  \node[circle,draw,inner sep=2.5pt] (a) at (0,1.8) {$a$};
  \node[circle,draw,inner sep=2.5pt] (b) at (0,0) {$b$};
  \node[circle,draw,inner sep=2.5pt] (c) at (2,1.8) {$c$};
  \node[circle,draw,inner sep=2.5pt] (d) at (2,0) {$d$};
  \draw (a)--(b)--(c)--(a);
  \draw (a)--(d)--(b);
  \draw (c)--(d);
  \draw (x)--(a);
  \draw (x)--(b);
  \draw[very thick] (x)--(a)--(c)--(d)--(b)--(x);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The explicitly described five-vertex graph $G$.

[F1] A complete graph contains every edge between its distinct vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] Degree counts neighbours, and minimum degree is the least vertex degree ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[L1] Ore's condition implies Hamiltonicity for graphs of order at least three ([[thm-ores-hamiltonicity-theorem]]).

[L2] Dirac's sufficient condition is $\delta(G)\ge n/2$ ([[cor-diracs-hamiltonicity-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The degree multiset is $\{2,3,3,4,4\}$: $x$ has degree two, $a,b$ have degree four, and $c,d$ have degree three. Thus $\delta(G)=2<5/2$, so Dirac's hypothesis [L2] fails. [given, F1, F2, L2, algebra]

1.2 Directly, every consecutive pair in $x,a,c,d,b,x$ is an edge, and the list visits all five vertices once before returning. [given, F1]

2.1 The only nonedges are $xc$ and $xd$. Each has endpoint-degree sum $2+3=5$, so Ore's condition holds; [L1] therefore confirms Hamiltonicity. [step 1.1, L1, algebra]

3.1 Hence Ore's condition can hold when Dirac's condition does not, and the displayed Hamilton cycle verifies the conclusion. [step 1.1, step 2.1, step 1.2] ∎
