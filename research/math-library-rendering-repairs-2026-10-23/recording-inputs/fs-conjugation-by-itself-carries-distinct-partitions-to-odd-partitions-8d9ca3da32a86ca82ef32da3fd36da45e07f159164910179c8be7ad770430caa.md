---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions.json
  precheck: pass
id: fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions
kind: false-statement
title: "FALSE: conjugation itself is the distinct-parts to odd-parts bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-partition-conjugation-is-an-involution,
       thm-glaisher-bijection-between-odd-and-distinct-partitions]
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

**False claim:** conjugation sends every partition with distinct parts to a
partition into odd parts.

## Facts & Assumptions

**Given:** the distinct-part partition $\lambda=(4,2,1)$.

[L1] Conjugation is the transpose of the Ferrers diagram ([[lem-partition-conjugation-is-an-involution]]).

[L2] The true bijection between odd-part and distinct-part partitions is Glaisher's map ([[thm-glaisher-bijection-between-odd-and-distinct-partitions]]).

## Refutation

**Proof technique:** direct.

1.1 The Ferrers diagram of $(4,2,1)$ has column lengths $3,2,1,1$, so [L1] gives $(4,2,1)'=(3,2,1,1)$. [given, L1]

2.1 The conjugate partition $(3,2,1,1)$ has an even part, namely $2$, so it is not a partition into odd parts. [step 1.1]

3.1 Therefore conjugation does not send every distinct-part partition to an odd-part partition, and the displayed claim is false. By [L2], the correct bijection is a different map. [step 2.1, L2] ∎


## Remarks

The two Ferrers diagrams show the counterexample from step 1.1. Conjugation
transposes cells: the column lengths $3,2,1,1$ on the left become the row
lengths on the right. The shaded second row has length $2$, so the right-hand
partition is not an odd-part partition. The refutation above is independent of
the illustration.

```tikz
\begin{tikzpicture}[scale=0.65]
\foreach \x in {0,1,2,3} {\draw (\x,0) rectangle +(1,-1);}
\foreach \x in {0,1} {\draw (\x,-1) rectangle +(1,-1);}
\draw (0,-2) rectangle +(1,-1);
\node at (2,0.6) {$\lambda=(4,2,1)$};
\node at (2,-4.8) {distinct parts};
\draw[->] (4.7,-1.7) -- (6.4,-1.7);
\node at (5.55,-1.1) {transpose};
\begin{scope}[shift={(7,0)}]
\fill[gray!30] (0,-1) rectangle (2,-2);
\foreach \x in {0,1,2} {\draw (\x,0) rectangle +(1,-1);}
\foreach \x in {0,1} {\draw (\x,-1) rectangle +(1,-1);}
\draw (0,-2) rectangle +(1,-1);
\draw (0,-3) rectangle +(1,-1);
\node at (1.5,0.6) {$\lambda'=(3,2,1,1)$};
\node[right] at (2.2,-1.5) {even part $2$};
\node at (1.5,-4.8) {not all parts odd};
\end{scope}
\end{tikzpicture}
```
