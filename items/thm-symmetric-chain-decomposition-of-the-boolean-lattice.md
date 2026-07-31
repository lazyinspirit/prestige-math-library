---
id: thm-symmetric-chain-decomposition-of-the-boolean-lattice
kind: theorem
title: "Every finite Boolean lattice has a symmetric chain decomposition"
status: published
origin: session
deps: [lem-symmetric-chain-decomposition-induction-step, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

For every finite set $A$, the Boolean lattice $B(A)$ can be partitioned into
saturated chains whose least and greatest ranks sum to $|A|$.

## Facts & Assumptions

**Given:** A finite set $A$.

[L1] A symmetric chain decomposition of $B(X)$ lifts to one of $B(X\cup\{x\})$ whenever $x\notin X$ ([[lem-symmetric-chain-decomposition-induction-step]]).

[L2] The principle of induction on $\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $|A|=0$, the Boolean lattice consists only of $\varnothing$; the one-term chain has endpoint ranks $0$ and $0$, so it is symmetric. [base]

1.2 Assume every Boolean lattice on an $n$-element set has a symmetric chain decomposition, and let $A$ have $n+1$ elements. Choose $x\in A$ and put $X=A\setminus\{x\}$, so $|X|=n$. [ih, L2, choose]

2.1 The induction hypothesis gives a symmetric chain decomposition of $B(X)$, and [L1] lifts it to a symmetric chain decomposition of $B(X\cup\{x\})=B(A)$. [step 1.2, L1]

3.1 The base case and induction step prove the assertion for every finite cardinality, hence for every finite set $A$. [step 1.1, step 2.1, discharge-induction] ∎
