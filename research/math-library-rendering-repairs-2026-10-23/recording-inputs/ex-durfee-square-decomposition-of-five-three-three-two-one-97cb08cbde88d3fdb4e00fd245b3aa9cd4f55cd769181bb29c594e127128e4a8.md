---
id: ex-durfee-square-decomposition-of-five-three-three-two-one
kind: example
title: "The partition (5,3,3,2,1) decomposes by its Durfee square"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-durfee-square-identity]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For

$$\lambda=(5,3,3,2,1),$$

the Durfee length is $3$, so the upper-left $3 \times 3$ square is the Durfee
square.

The cells to the right of that square form the partition

$$\alpha=(2),$$

and the cells below it form the partition

$$\beta=(2,1).$$

Thus $\lambda$ is rebuilt from the $3 \times 3$ square together with one
partition having at most $3$ parts and one partition with parts at most $3$.

## Remarks

In the English convention (rows aligned at the top left), the blue $3\times3$ Durfee square, orange right-hand partition $\alpha=(2)$, and green lower partition $\beta=(2,1)$ give the three pieces of $\lambda$.

```tikz
\begin{tikzpicture}[x=0.7cm,y=0.7cm]
  \fill[blue!20] (0,0) rectangle (3,-3);
  \fill[orange!35] (3,0) rectangle (5,-1);
  \fill[green!25] (0,-3) rectangle (2,-4);
  \fill[green!25] (0,-4) rectangle (1,-5);
  \foreach \r/\n in {0/5,1/3,2/3,3/2,4/1} {
    \foreach \c in {1,...,\n} {
      \draw (\c-1,-\r) rectangle (\c,-\r-1);
    }
  }
  \draw[very thick,blue!65!black] (0,0) rectangle (3,-3);
  \node at (1.5,-1.5) {$3\times3$};
  \node[anchor=west] at (5.5,-0.5) {$\alpha=(2)$};
  \draw[->] (5.3,-0.5) -- (4.5,-0.5);
  \node[anchor=west] at (3,-4) {$\beta=(2,1)$};
  \draw[->] (2.8,-4) -- (1.5,-3.5);
\end{tikzpicture}
```

The row lengths are $5,3,3,2,1$, and the cell counts are $14=9+2+3$. The illustration records the decomposition described above; the mathematical argument is independent of the figure.
