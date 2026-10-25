---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-conjugation-does-not-send-distinct-parts-to-odd-parts.json
  precheck: pass
id: cex-conjugation-does-not-send-distinct-parts-to-odd-parts
kind: counterexample
title: "Conjugating (4,2,1) does not produce an odd-part partition"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions,
       lem-partition-conjugation-is-an-involution]
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

Conjugating the distinct-part partition

$$(4,2,1)$$

produces a partition into odd parts.

## Facts & Assumptions

**Given:** the distinct-part partition $\lambda=(4,2,1)$.

[L1] Conjugation of partitions is the transpose of the Ferrers diagram ([[lem-partition-conjugation-is-an-involution]]).

## Counterexample

**Proof technique:** direct.

1.1 The columns of the Ferrers diagram of $\lambda$ have lengths $3,2,1,1$, so [L1] gives $\lambda'=(3,2,1,1)$. [L1]

2.1 The conjugate partition has an even part, namely $2$, so it is not a partition into odd parts. Therefore the displayed claim is false. [step 1.1] ∎

## Remarks

The diagrams show the same seven cells before and after transposition, with rows read from top to bottom. The highlighted second column becomes the highlighted second row of length $2$; this even part prevents the conjugate from being an odd-part partition. The counterexample above does not depend on the illustration.

```tikz
\begin{tikzpicture}[x=0.55cm,y=0.55cm]
\fill[blue!20] (1,0) rectangle (2,-2);
\foreach \x/\y in {0/0,1/0,2/0,3/0,0/1,1/1,0/2} {
  \draw (\x,-\y) rectangle +(1,-1);
}
\node at (2,0.7) {$\lambda=(4,2,1)$};
\draw[->] (4.7,-1.5) -- (6.7,-1.5);
\node at (5.7,-0.9) {transpose};
\begin{scope}[xshift=4.2cm]
\fill[blue!20] (0,-1) rectangle (2,-2);
\foreach \x/\y in {0/0,1/0,2/0,0/1,1/1,0/2,0/3} {
  \draw (\x,-\y) rectangle +(1,-1);
}
\node at (1.5,0.7) {$\lambda'=(3,2,1,1)$};
\node[right] at (3.3,-1.5) {$2$ is even};
\end{scope}
\end{tikzpicture}
```
