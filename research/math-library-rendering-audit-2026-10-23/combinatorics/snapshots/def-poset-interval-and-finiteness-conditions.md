---
id: def-poset-interval-and-finiteness-conditions
kind: definition
title: "Intervals in a poset; locally finite, lower-finite and upper-finite posets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order, def-countable, def-finite-cardinality, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.6–3.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Definition

Let $(P,\le)$ be a poset ([[def-partial-order]]). For comparable elements $x\le y$, the **closed interval** from $x$ to $y$ is

$$[x,y]:=\{z\in P:x\le z\le y\}.$$

The **principal ideal** below $y$ and the **principal filter** above $x$ are

$$P_{\le y}:=\{z\in P:z\le y\},\qquad P_{\ge x}:=\{z\in P:x\le z\}.$$

```tikz
\begin{tikzpicture}[
  every node/.style={font=\scriptsize},
  elt/.style={draw,circle,minimum size=7mm,inner sep=1pt,fill=white},
  interval/.style={elt,draw=blue!75!black,fill=blue!12,line width=.9pt},
  ideal/.style={elt,draw=green!55!black,fill=green!13,line width=.8pt},
  filter/.style={elt,draw=orange!85!black,fill=orange!16,line width=.8pt}
]
\node[ideal]    (b) at (0,0) {$b$};
\node[ideal]    (w) at (-1,1.2) {$w$};
\node[interval] (x) at (1,1.2) {$x$};
\node[interval] (u) at (0,2.4) {$u$};
\node[interval] (v) at (2,2.4) {$v$};
\node[interval] (y) at (1,3.6) {$y$};
\node[filter]   (t) at (1,4.8) {$t$};
\node[elt]      (r) at (3.5,1.2) {$r$};

\draw[gray!70]
  (b)--(w) (b)--(x)
  (w)--(u) (x)--(u) (x)--(v)
  (u)--(y) (v)--(y) (y)--(t);

\node[interval,minimum size=4.5mm] at (-1.1,-.8) {};
\node[anchor=west] at (-.8,-.8) {$[x,y]$};
\node[ideal,minimum size=4.5mm] at (.7,-.8) {};
\node[anchor=west] at (1,-.8) {$P_{\le y}\setminus[x,y]$};
\node[filter,minimum size=4.5mm] at (3.65,-.8) {};
\node[anchor=west] at (3.95,-.8) {$P_{\ge x}\setminus[x,y]$};
\end{tikzpicture}
```

The poset $P$ is

- **locally finite** when $[x,y]$ is finite for every $x\le y$;
- **lower-finite** when $P_{\le y}$ is finite for every $y\in P$;
- **upper-finite** when $P_{\ge x}$ is finite for every $x\in P$.

Here finite has the meaning of [[def-countable]], and finite cardinalities are those of [[def-finite-cardinality]]. Every lower-finite poset is locally finite because $[x,y]\subseteq P_{\le y}$, and every upper-finite poset is locally finite because $[x,y]\subseteq P_{\ge x}$; both conclusions use that a subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

## Remarks

Local finiteness controls sums over one interval $[x,y]$. It does not imply that a whole principal ideal or principal filter is finite. The one-sided hypotheses are therefore stated separately because global inversion sums range over those larger sets.
