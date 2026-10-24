---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-conjugation-of-the-partitions-of-six.json
  precheck: n/a
id: ex-conjugation-of-the-partitions-of-six
kind: example
title: "Conjugation pairs the partitions of 6 by swapping length and largest part"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [ex-partitions-of-six-listed,
       lem-partition-conjugation-is-an-involution]
justified_by: []
aliases: []
landmark: false
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For the partitions of $6$, conjugation gives the pairings

$$6 \leftrightarrow 1+1+1+1+1+1,$$

$$5+1 \leftrightarrow 2+1+1+1+1,$$

$$4+2 \leftrightarrow 2+2+1+1,$$

$$4+1+1 \leftrightarrow 3+1+1+1,$$

$$3+3 \leftrightarrow 2+2+2,$$

and

$$3+2+1 \leftrightarrow 3+2+1.$$

The fixed partition $3+2+1$ is self-conjugate.


## Remarks

In these Young diagrams, rows run from top to bottom and columns from left to right. Conjugation transposes the cell coordinates $(i,j)\mapsto(j,i)$: the column lengths of the left diagram become the row lengths of the middle one. Both have six cells. The right diagram has row and column lengths $(3,2,1)$, so transposition fixes it.

```tikz
\begin{tikzpicture}[x=0.48cm,y=0.48cm]
  \begin{scope}[yshift=0cm]
    \foreach \x/\y in {0/0,1/0,2/0,3/0,4/0,0/1}
      \draw (\x,-\y) rectangle ++(1,-1);
    \node[above] at (2.5,0.35) {$5+1$};
  \end{scope}
  \node at (6.2,-1) {$\longleftrightarrow$};
  \begin{scope}[xshift=3.6cm]
    \foreach \x/\y in {0/0,1/0,0/1,0/2,0/3,0/4}
      \draw (\x,-\y) rectangle ++(1,-1);
    \node[above] at (1,0.35) {$2+1+1+1+1$};
  \end{scope}
  \begin{scope}[xshift=6.5cm]
    \foreach \x/\y in {0/0,1/0,2/0,0/1,1/1,0/2}
      \draw (\x,-\y) rectangle ++(1,-1);
    \node[above] at (1.5,0.35) {$3+2+1$};
    \node[below] at (1.5,-3.35) {self-conjugate};
  \end{scope}
\end{tikzpicture}
```
