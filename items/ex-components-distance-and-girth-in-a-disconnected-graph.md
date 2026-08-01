---
id: ex-components-distance-and-girth-in-a-disconnected-graph
kind: example
title: "Connected components, finite within-component distances, undefined cross-component distance and girth are computed in a disconnected graph"
status: published
origin: session
deps: [def-connected-graph-and-connected-component, def-graph-distance-and-girth, cor-connected-components-partition-the-vertex-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Example

Let $G$ have vertices $a,b,c,p,q,r$ and edges
$ab,bc,ca,pq,qr$. Its components are the triangle on $\{a,b,c\}$ and the path
on $\{p,q,r\}$. Within them,

$$d(a,b)=1,\qquad d(p,q)=1,\qquad d(p,r)=2.$$

The distance $d(a,p)$ is undefined. The graph has girth $3$; its path component
is acyclic and has girth $\infty$.

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\small},
  triangle/.style={draw=blue!75!black,line width=1.4pt},
  path/.style={draw=orange!85!black,line width=1.4pt},
  label/.style={font=\scriptsize,align=center}
]
\node[vertex] (a) at (0,0) {$a$};
\node[vertex] (b) at (1.3,1.45) {$b$};
\node[vertex] (c) at (2.6,0) {$c$};
\draw[triangle] (a)--(b)--(c)--cycle;
\node[label,blue!75!black] at (1.3,-.55) {$\{a,b,c\}$};
\node[label,blue!75!black] at (1.3,-.9) {girth $3$};

\node[vertex] (p) at (4.6,.55) {$p$};
\node[vertex] (q) at (6.1,.55) {$q$};
\node[vertex] (r) at (7.6,.55) {$r$};
\draw[path] (p)--node[above,font=\scriptsize] {$1$} (q)
                  --node[above,font=\scriptsize] {$1$} (r);
\node[label,orange!85!black] at (6.1,-.55) {$\{p,q,r\}$};
\node[label,orange!85!black] at (6.1,-.9) {$d(p,r)=2$, girth $\infty$};

\draw[gray!60,dashed,line width=.8pt] (3.6,-.8)--(3.6,1.8);
\node[label] at (3.6,2.08) {no edge crosses};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The graph $G$ described in the Example.

[F1] Components are induced by path-reachability, and the component vertex sets partition the graph ([[def-connected-graph-and-connected-component]], [[cor-connected-components-partition-the-vertex-set]]).

[F2] Distance is the minimum path length within one component and is not assigned across components; girth is the least cycle length, with value $\infty$ for an acyclic graph ([[def-graph-distance-and-girth]]).

## Verification

**Proof technique:** direct.

1.1 The vertices $a,b,c$ reach one another along triangle edges, and $p,q,r$ reach one another along $pq,qr$. No edge joins these two sets, so [F1] gives exactly the two stated components. [given, F1]

1.2 The edges $ab$ and $pq$ give the two distances $1$. The path $(p,q,r)$ has length $2$, while $p$ and $r$ are not adjacent, so $d(p,r)=2$. [given, F2]

2.1 Since $a$ and $p$ lie in different components, $d(a,p)$ is undefined by [F2]. The triangle is a cycle of length $3$, no cycle can have smaller length, and the path component has no cycle; the girth assertions follow. [step 1.1, F2] ∎
