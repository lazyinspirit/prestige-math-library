---
id: ex-mobius-on-the-boolean-lattice-b3
kind: example
title: "The full Möbius table of the Boolean lattice $2^{[3]}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [thm-mobius-function-of-a-boolean-lattice, def-boolean-lattice-and-levels, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
landmark: false
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

## Example

Let $[3]=\{1,2,3\}$ and order $2^{[3]}$ by inclusion ([[def-boolean-lattice-and-levels]]). The complete table is determined by

$$\mu(A,B)=(-1)^{|B\setminus A|}\qquad(A\subseteq B)$$

([[thm-mobius-function-of-a-boolean-lattice]]). Thus the value is $1$ on the diagonal, $-1$ when $B$ adds one element, $1$ when it adds two elements, and $-1$ from $\varnothing$ to $[3]$.

Equivalently, the comparable pairs split as follows:

| $|B\setminus A|$ | number of pairs | $\mu(A,B)$ |
|---:|---:|---:|
| $0$ | $8$ | $1$ |
| $1$ | $12$ | $-1$ |
| $2$ | $6$ | $1$ |
| $3$ | $1$ | $-1$ |

For a cover $A\subset A\cup\{i\}$ the recurrence reads $1+(-1)=0$. For the top interval it reads $1+3(-1)+3(1)+(-1)=0$, in agreement with [[lem-poset-mobius-recurrence]].

```tikz
\begin{tikzpicture}[
  every node/.style={font=\scriptsize},
  elt/.style={draw,rounded corners=2pt,minimum width=10mm,minimum height=6.5mm,inner sep=1pt,fill=white},
  positive/.style={elt,draw=blue!75!black,fill=blue!12,line width=.8pt},
  negative/.style={elt,draw=orange!85!black,fill=orange!16,line width=.8pt}
]
\node[positive] (e) at (0,0) {$\emptyset$};

\node[negative] (s1) at (-2.4,1.1) {$\{1\}$};
\node[negative] (s2) at (0,1.1) {$\{2\}$};
\node[negative] (s3) at (2.4,1.1) {$\{3\}$};

\node[positive] (p12) at (-1.35,2.25) {$\{1,2\}$};
\node[positive] (p23) at (1.35,2.25) {$\{2,3\}$};
\node[positive] (p13) at (0,3.2) {$\{1,3\}$};

\node[negative] (top) at (0,4.35) {$\{1,2,3\}$};

\draw[gray!65]
  (e)--(s1) (e)--(s2) (e)--(s3)
  (s1)--(p12) (s2)--(p12)
  (s2)--(p23) (s3)--(p23)
  (s1)--(p13) (s3)--(p13)
  (p12)--(top) (p13)--(top) (p23)--(top);

\node[positive,minimum width=5mm,minimum height=4.5mm] at (-1.8,-.75) {};
\node[anchor=west] at (-1.45,-.75) {$\mu(\emptyset,B)=1$};
\node[negative,minimum width=5mm,minimum height=4.5mm] at (1,-.75) {};
\node[anchor=west] at (1.35,-.75) {$\mu(\emptyset,B)=-1$};
\end{tikzpicture}
```
