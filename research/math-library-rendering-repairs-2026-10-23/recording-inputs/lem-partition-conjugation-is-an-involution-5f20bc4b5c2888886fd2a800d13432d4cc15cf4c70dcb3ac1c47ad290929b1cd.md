---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-partition-conjugation-is-an-involution.json
  precheck: pass
id: lem-partition-conjugation-is-an-involution
kind: lemma
title: "Conjugating a partition twice returns the original partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

For every partition $\lambda$, one has

$$(\lambda')'=\lambda.$$

## Facts & Assumptions

**Given:** a partition $\lambda$ and its Ferrers diagram.

[F1] The part $\lambda'_j$ is the number of rows of $\lambda$ of length at least $j$ ([[def-ferrers-young-diagram-conjugate-partition-and-durfee-square]]).

## Proof

**Proof technique:** direct.

1.1 A cell $(i,j)$ belongs to the Ferrers diagram of $\lambda$ exactly when the $i$-th row has length at least $j$, and by [F1] this is equivalent to the $j$-th row of $\lambda'$ having length at least $i$. Therefore the cells of $\lambda'$ are exactly the transpose $(j,i)$ of the cells of $\lambda$. [F1]

2.1 Transposing the same finite set of cells a second time sends $(j,i)$ back to $(i,j)$, so the twice-conjugated diagram is the original diagram. Hence its row lengths are again $\lambda$, that is, $(\lambda')'=\lambda$. [step 1.1] ∎

## Remarks

For example, the columns of $\lambda=(4,2,1)$ have lengths $(3,2,1,1)$, and the columns of $\lambda'=(3,2,1,1)$ have lengths $(4,2,1)$. Rows are numbered downward and columns rightward from the upper-left cell. The shaded cell follows $(1,3)\mapsto(3,1)\mapsto(1,3)$; each arrow transposes every cell, as in the proof.

```tikz
\begin{tikzpicture}[x=0.46cm,y=0.46cm]
\begin{scope}
\fill[blue!25] (2,0) rectangle (3,-1);
\foreach \row/\len in {1/4,2/2,3/1}{
  \foreach \col in {1,...,\len}{
    \draw (\col-1,1-\row) rectangle (\col,-\row);
  }
}
\node[above] at (2,0.3) {$\lambda=(4,2,1)$};
\end{scope}
\draw[->] (4.6,-1.5) -- (7.4,-1.5) node[midway,above] {\scriptsize transpose};
\begin{scope}[xshift=3.68cm]
\fill[blue!25] (0,-2) rectangle (1,-3);
\foreach \row/\len in {1/3,2/2,3/1,4/1}{
  \foreach \col in {1,...,\len}{
    \draw (\col-1,1-\row) rectangle (\col,-\row);
  }
}
\node[above] at (1.5,0.3) {$\lambda'=(3,2,1,1)$};
\end{scope}
\draw[->] (11.6,-1.5) -- (14.4,-1.5) node[midway,above] {\scriptsize transpose};
\begin{scope}[xshift=6.9cm]
\fill[blue!25] (2,0) rectangle (3,-1);
\foreach \row/\len in {1/4,2/2,3/1}{
  \foreach \col in {1,...,\len}{
    \draw (\col-1,1-\row) rectangle (\col,-\row);
  }
}
\node[above] at (2,0.3) {$(\lambda')'=(4,2,1)$};
\end{scope}
\end{tikzpicture}
```
