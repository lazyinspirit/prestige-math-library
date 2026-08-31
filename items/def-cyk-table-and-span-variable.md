---
id: def-cyk-table-and-span-variable
kind: definition
title: "The CYK parsing table and span variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-context-free-grammar, def-chomsky-normal-form, def-computation-alphabet-and-word-convention]
verification:
  precheck: n/a
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
