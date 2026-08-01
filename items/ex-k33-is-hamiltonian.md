---
id: ex-k33-is-hamiltonian
kind: example
title: "$K_{3,3}$ has a Hamilton cycle"
status: draft
origin: session
authorship: ai-generated
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-hamilton-path-cycle-and-hamilton-connected, def-standard-complete-bipartite-path-and-cycle-graphs]
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

Let the two parts of $K_{3,3}$ be
$A=\{a_1,a_2,a_3\}$ and $B=\{b_1,b_2,b_3\}$. Then

$$
a_1,b_1,a_2,b_2,a_3,b_3,a_1
$$

is a Hamilton cycle.

```tikz
\begin{tikzpicture}[scale=0.95]
  \node[circle,draw,inner sep=2pt] (a1) at (0,2.2) {$a_1$};
  \node[circle,draw,inner sep=2pt] (a2) at (0,1.1) {$a_2$};
  \node[circle,draw,inner sep=2pt] (a3) at (0,0) {$a_3$};
  \node[circle,draw,inner sep=2pt] (b1) at (3.2,2.2) {$b_1$};
  \node[circle,draw,inner sep=2pt] (b2) at (3.2,1.1) {$b_2$};
  \node[circle,draw,inner sep=2pt] (b3) at (3.2,0) {$b_3$};
  \foreach \a in {a1,a2,a3}
    \foreach \b in {b1,b2,b3}
      \draw[thin] (\a)--(\b);
  \draw[very thick] (a1)--(b1)--(a2)--(b2)--(a3)--(b3)--(a1);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The displayed bipartition of $K_{3,3}$.

[F1] Every vertex in $A$ is adjacent to every vertex in $B$, and there are no edges within a part ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] A Hamilton cycle visits every vertex exactly once before returning to its initial vertex ([[def-hamilton-path-cycle-and-hamilton-connected]]).

## Verification

**Proof technique:** direct.

1.1 Each consecutive pair in the displayed cyclic list has one endpoint in $A$ and one in $B$, so all six required edges occur by [F1]. [F1]

2.1 Before returning to $a_1$, the list contains each of the six vertices exactly once. It is therefore a Hamilton cycle by [F2]. [step 1.1, F2] ∎
