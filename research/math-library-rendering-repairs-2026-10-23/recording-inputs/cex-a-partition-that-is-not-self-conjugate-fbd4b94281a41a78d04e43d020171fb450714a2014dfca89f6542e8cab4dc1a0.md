---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-a-partition-that-is-not-self-conjugate.json
  precheck: pass
id: cex-a-partition-that-is-not-self-conjugate
kind: counterexample
title: "The partition (4,2,1) is not self-conjugate"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

The partition

$$(4,2,1)$$

is self-conjugate.

## Facts & Assumptions

**Given:** the partition $\lambda=(4,2,1)$.

[F1] Conjugation transposes the Ferrers diagram, so the conjugate partition has column lengths equal to the row lengths of the transposed diagram ([[def-ferrers-young-diagram-conjugate-partition-and-durfee-square]]).

## Counterexample

**Proof technique:** direct.

1.1 The Ferrers diagram of $\lambda$ has column lengths $3,2,1,1$, so [F1] gives $\lambda'=(3,2,1,1)$. [F1]

2.1 Since $(3,2,1,1)\ne(4,2,1)$, the partition $\lambda$ is not self-conjugate. Therefore the displayed claim is false. [step 1.1] ∎

## Remarks

The two Ferrers diagrams below use left-justified rows numbered from top to bottom. Transposition sends cell $(i,j)$ of $\lambda$ to cell $(j,i)$ of $\lambda'$. Both diagrams have seven cells, but their row lengths differ, as computed in step 1.1. The proof above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=0.6]
\foreach \x/\y in {0/0,1/0,2/0,3/0,0/1,1/1,0/2}
  \draw[fill=blue!12] (\x,-\y) rectangle +(1,-1);
\node at (2,0.65) {$\lambda=(4,2,1)$};
\draw[->] (4.6,-1.5) -- (6.2,-1.5);
\node at (5.4,-0.85) {transpose};
\begin{scope}[xshift=7cm]
\foreach \x/\y in {0/0,1/0,2/0,0/1,1/1,0/2,0/3}
  \draw[fill=blue!12] (\x,-\y) rectangle +(1,-1);
\node at (1.5,0.65) {$\lambda'=(3,2,1,1)$};
\end{scope}
\end{tikzpicture}
```
