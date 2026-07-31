---
id: lem-symmetric-chain-decomposition-induction-step
kind: lemma
title: "A symmetric chain decomposition of one Boolean lattice lifts to the next Boolean lattice"
status: published
origin: session
deps: [def-boolean-lattice-and-levels]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Symmetric chain decomposition background, Electronic Journal of Combinatorics"
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/view/v23i2p53"
pipeline_run: null
---

## Statement

A saturated chain in $B(A)$ is **symmetric** if its least and greatest ranks
sum to $|A|$. If $B(A)$ has a partition into symmetric saturated chains and
$x\notin A$, then $B(A\cup\{x\})$ also has such a partition.

## Facts & Assumptions

**Given:** A finite set $A$ with $|A|=n$, an element $x\notin A$, and a symmetric chain decomposition of $B(A)$.

[F1] The rank of a subset in $B(A)$ is its cardinality, and adjoining $x$ raises rank by one ([[def-boolean-lattice-and-levels]]).

## Proof

**Proof technique:** constructive.

1.1 Take one chain $C:S_r\subset S_{r+1}\subset\cdots\subset S_{n-r}$ of the given decomposition, where the subscripts are ranks and $r+(n-r)=n$. [given, F1]

2.1 Construct the chain $C_0:S_r\subset S_{r+1}\subset\cdots\subset S_{n-r}\subset S_{n-r}\cup\{x\}$ in $B(A\cup\{x\})$. Its endpoint ranks are $r$ and $n-r+1$, whose sum is $n+1$. [step 1.1, F1, construct]

2.2 If $r<n-r$, also construct $C_1:S_r\cup\{x\}\subset S_{r+1}\cup\{x\}\subset\cdots\subset S_{n-r-1}\cup\{x\}$. Its endpoint ranks are $r+1$ and $n-r$, whose sum is $n+1$; when $r=n-r$, this second chain is empty and is omitted. [step 1.1, F1, construct]

3.1 The chains $C_0$ and $C_1$ partition the two copies $\{T:T\in C\}$ and $\{T\cup\{x\}:T\in C\}$: the top set with $x$ goes to $C_0$, and every other set with $x$ goes to $C_1$. [step 2.1, step 2.2]

4.1 Applying this construction independently to every chain of the original partition covers each subset of $A\cup\{x\}$ exactly once and produces only symmetric chains. Hence it is a symmetric chain decomposition of $B(A\cup\{x\})$. [step 3.1, F1, discharge-construct] ∎
