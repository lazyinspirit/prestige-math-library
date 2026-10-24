---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-partitions-with-k-parts-equal-largest-part-k.json
  precheck: pass
id: thm-partitions-with-k-parts-equal-largest-part-k
kind: theorem
title: "Partitions with k parts are equinumerous with partitions whose largest part is k"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square,
       lem-partition-conjugation-is-an-involution,
       def-partition-counting-functions-and-restricted-families]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

For every $n \ge 0$ and $k \ge 0$, conjugation is a bijection between:

- partitions of $n$ with exactly $k$ parts, and
- partitions of $n$ whose largest part is $k$.

In particular, these two sets have the same cardinality.

## Facts & Assumptions

**Given:** integers $n \ge 0$ and $k \ge 0$.

[F1] In a Ferrers diagram, the number of rows is the number of parts and the number of cells in the top row is the largest part ([[def-ferrers-young-diagram-conjugate-partition-and-durfee-square]], [[def-partition-counting-functions-and-restricted-families]]).

[L1] Partition conjugation is an involution ([[lem-partition-conjugation-is-an-involution]]).

## Proof

**Proof technique:** bijection.

1.1 If $k=0$ and $n>0$, then there is no partition of $n$ with exactly $0$ parts and no partition of $n$ whose largest part is $0$, so both displayed sets are empty. If $k=0$ and $n=0$, then both displayed sets consist only of the empty partition; by the partition convention recalled in [F1], its largest part is $0$. Thus the claim holds when $k=0$. Assume now $k \ge 1$. Let $\lambda$ be a partition of $n$ with exactly $k$ parts. Then its Ferrers diagram has exactly $k$ rows by [F1]. After transposition, the conjugate diagram has top row length $k$, because the first column of the original diagram had one cell in each of the $k$ rows. Thus $\lambda'$ has largest part $k$. The same argument in reverse shows that any partition with largest part $k$ conjugates to one with exactly $k$ parts. [F1]

2.1 Step 1.1 shows that conjugation maps each of the two displayed sets into the other, and [L1] shows that this map has its own inverse. Therefore it is a bijection between them, so the two sets have equal cardinality. [step 1.1, L1] ∎


## Remarks

For $n=7$ and $k=3$, transposition sends $\lambda=(4,2,1)$, which has exactly three parts, to $\lambda'=(3,2,1,1)$, whose largest part is three. The highlighted first column becomes the highlighted top row; all seven cells are preserved.

```tikz
\begin{tikzpicture}[x=0.58cm,y=0.58cm]
  \node at (2,1) {$\lambda=(4,2,1)$};
  \foreach \r/\len in {0/4,1/2,2/1} {
    \foreach \c in {1,...,\len} {
      \draw (\c-1,-\r) rectangle (\c,-\r-1);
    }
  }
  \foreach \r in {0,1,2} {
    \filldraw[fill=blue!20] (0,-\r) rectangle (1,-\r-1);
  }
  \node at (2,-4.6) {three rows};
  \node at (5.5,-1.5) {$\longleftrightarrow$};
  \node at (5.5,-0.7) {transpose};
  \begin{scope}[xshift=4.06cm]
    \node at (1.5,1) {$\lambda'=(3,2,1,1)$};
    \foreach \r/\len in {0/3,1/2,2/1,3/1} {
      \foreach \c in {1,...,\len} {
        \draw (\c-1,-\r) rectangle (\c,-\r-1);
      }
    }
    \foreach \c in {0,1,2} {
      \filldraw[fill=blue!20] (\c,0) rectangle (\c+1,-1);
    }
    \node at (1.5,-4.6) {top row: three cells};
  \end{scope}
\end{tikzpicture}
```

This illustrates the cell map $(i,j)\mapsto(j,i)$ used in the proof, rather than an additional restriction on the bijection. For $k=0$, both families are empty if $n>0$ and both contain only the empty partition if $n=0$; for $n=0$ and $k>0$, both families are empty. The proof above covers all cases independently of the illustration.
