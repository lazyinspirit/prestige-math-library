---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-cyk-table-and-span-variable.json
  precheck: n/a
id: def-cyk-table-and-span-variable
kind: definition
title: "The CYK parsing table and span variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-context-free-grammar, def-chomsky-normal-form, def-computation-alphabet-and-word-convention]
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Definition

Let $G=(V,\Sigma,P,S)$ be a grammar in Chomsky normal form, and let
$w=a_1\cdots a_n$ be a nonempty word over $\Sigma$.

The **CYK table** of $G$ on $w$ is the triangular array of sets
$T[i,\ell]\subseteq V$ defined for $1\le i\le n$ and
$1\le \ell\le n-i+1$ by:

$$ T[i,1]:=\{A\in V:A\to a_i\text{ is a production of }G\}, $$

and, for $\ell\ge 2$,

$$ T[i,\ell]:=\{A\in V:\exists k\ (1\le k<\ell)\text{ and }A\to BC\in P\text{ with }B\in T[i,k],\ C\in T[i+k,\ell-k]\}. $$

When $A\in T[i,\ell]$, we say that **$A$ is a span variable for the substring**
$a_i\cdots a_{i+\ell-1}$.

## Remarks

- The definition uses only the CNF production types $A\to a$ and $A\to BC$.

- The top cell $T[1,n]$ corresponds to the whole input word.

For a word of length $4$, the following triangle displays every valid cell.
The outlined cells pick out the split $i=1$, $\ell=4$, $k=2$; they do not
assert that the corresponding sets are nonempty.

```tikz
\begin{tikzpicture}[x=1.7cm,y=1.1cm]
\node[draw,very thick,minimum width=1.35cm] at (1.5,3) {$T[1,4]$};
\node at (1,2) {$T[1,3]$};
\node at (2,2) {$T[2,3]$};
\node[draw,very thick,minimum width=1.35cm] at (.5,1) {$T[1,2]$};
\node at (1.5,1) {$T[2,2]$};
\node[draw,very thick,minimum width=1.35cm] at (2.5,1) {$T[3,2]$};
\node at (0,0) {$T[1,1]$};
\node at (1,0) {$T[2,1]$};
\node at (2,0) {$T[3,1]$};
\node at (3,0) {$T[4,1]$};
\node at (0,-.6) {$a_1$};
\node at (1,-.6) {$a_2$};
\node at (2,-.6) {$a_3$};
\node at (3,-.6) {$a_4$};
\end{tikzpicture}
```

In this split, $T[1,2]$ covers $a_1a_2$ and $T[3,2]$ covers $a_3a_4$.
If $A\to BC\in P$, $B\in T[1,2]$, and $C\in T[3,2]$, the defining
recurrence places $A$ in $T[1,4]$. In general, the two child intervals end
at $i+k-1$ and begin at $i+k$, respectively, so they are adjacent and
partition the parent interval from $i$ to $i+\ell-1$. This illustration
only explains the indexing; the definition does not depend on it.
