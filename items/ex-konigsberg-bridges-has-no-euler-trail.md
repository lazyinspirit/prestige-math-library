---
id: ex-konigsberg-bridges-has-no-euler-trail
kind: example
title: "The Konigsberg bridges multigraph has four odd-degree vertices and no Euler trail"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-euler-trail-characterisation, def-multigraph-and-digraph-degrees-and-connectivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Euler Tours and Trails"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-ToursTrails.html"
pipeline_run: null
---

## Example

Model the four land regions in the Konigsberg bridges problem by four vertices,
with one multigraph edge for each of the seven bridges. The four vertex degrees
are $5,3,3,3$. Consequently no walk can cross every bridge exactly once.

```tikz
\begin{tikzpicture}[scale=1.0]
  \node[circle,draw,inner sep=2.5pt] (A) at (0,1.6) {$A$};
  \node[circle,draw,inner sep=2.5pt] (B) at (0,-1.6) {$B$};
  \node[circle,draw,inner sep=2.5pt] (C) at (2.4,0) {$C$};
  \node[circle,draw,inner sep=2.5pt] (D) at (4.7,0) {$D$};
  \draw (A) to[bend left=15] (C);
  \draw (A) to[bend right=15] (C);
  \draw (B) to[bend right=15] (C);
  \draw (B) to[bend left=15] (C);
  \draw (C)--(D);
  \draw (A) to[bend left=12] (D);
  \draw (B) to[bend right=12] (D);
  \node[above] at (A.north) {$3$};
  \node[below] at (B.south) {$3$};
  \node[above] at (C.north) {$5$};
  \node[above] at (D.north) {$3$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The connected four-vertex, seven-edge Konigsberg multigraph with degrees $5,3,3,3$.

[F1] Parallel bridges are distinct multigraph edges, and degree counts their incident ends ([[def-multigraph-and-digraph-degrees-and-connectivity]]).

[L1] A connected finite multigraph has an Euler trail exactly when it has zero or two odd-degree vertices ([[cor-euler-trail-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Counting the bridge ends incident with the four land regions gives degrees $5,3,3,3$, so all four vertices have odd degree. [given, F1, algebra]

2.1 Since four is neither zero nor two, [L1] rules out an Euler trail. Such a trail would be exactly a crossing of every bridge once. [step 1.1, L1] ∎
