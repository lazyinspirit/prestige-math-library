---
id: ex-prufer-code-and-decoding
kind: example
title: "A labelled tree and its Prüfer code computed in both directions"
status: published
origin: session
deps: [def-prufer-code, lem-prufer-decoding-produces-a-tree, thm-prufer-code-bijection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Prüfer codes"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Statement

On labels $5=\{0,1,2,3,4\}$, the tree with edges

$$\{02,12,23,24\}$$

has Prüfer code $(2,2,2)$, and decoding this word returns the same tree.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,fill=white,inner sep=1.5pt,minimum size=5mm}}
  \node[vertex] (z) at (-2,0) {$0$};
  \node[vertex] (o) at (0,1.4) {$1$};
  \node[vertex,fill=blue!15] (t) at (0,0) {$2$};
  \node[vertex] (h) at (0,-1.4) {$3$};
  \node[vertex] (f) at (2,0) {$4$};
  \draw[blue,very thick] (z)--node[above] {\scriptsize 1:2} (t);
  \draw[blue,very thick] (o)--node[right] {\scriptsize 2:2} (t);
  \draw[blue,very thick] (h)--node[right] {\scriptsize 3:2} (t);
  \draw (t)--node[above] {\scriptsize final edge} (f);
  \node at (0,-2.05) {deletion stage : recorded neighbour};
  \node[blue] at (0,2.05) {Prufer code (2, 2, 2)};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The displayed labelled graph $T$.

[F1] Encoding deletes the least leaf and records its neighbour ([[def-prufer-code]]).

[L1] The decoding procedure produces the inverse tree ([[lem-prufer-decoding-produces-a-tree]], [[thm-prufer-code-bijection]]).

[F2] At each decoding stage, the least unused label absent from the remaining word is joined to its first symbol; the final two unused labels are then joined.

## Verification

**Proof technique:** direct computation.

1.1 Initially the leaves are $0,1,3,4$. Delete $0$ and record $2$; then delete $1$ and record $2$; then delete $3$ and record $2$. Thus the code is $(2,2,2)$. [F1]

1.2 To decode, the least label absent from $(2,2,2)$ is $0$, so add $02$; for the suffix $(2,2)$ choose $1$ and add $12$; for $(2)$ choose $3$ and add $23$. [F2]

2.1 The unused labels are then $2,4$, so add $24$. The recovered edge set is exactly $\{02,12,23,24\}$. [step 1.2, L1] ∎
