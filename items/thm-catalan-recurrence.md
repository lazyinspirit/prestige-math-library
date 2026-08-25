---
id: thm-catalan-recurrence
kind: theorem
title: "$C_{n+1}=\\sum_{i=0}^{n}C_i\\,C_{n-i}$, with $C_0=1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-first-return-decomposition-of-a-nonempty-dyck-path, def-catalan-number, lem-dyck-paths-of-a-given-semilength-form-a-finite-set, thm-sum-rule, thm-product-rule, def-sum-over-a-finite-index-set, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019, Proposition 5"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

$C_0=1$, and for every $n\in\mathbb{N}$, in $\mathbb{N}$,

$$C_{n+1}=\sum_{i=0}^{n}C_i\,C_{n-i},$$

the sum being over the finite index set $\{0,1,\dots,n\}$
([[def-sum-over-a-finite-index-set]]) and $C_m=\lvert\mathcal{D}_m\rvert$ the
Catalan number ([[def-catalan-number]]).

## Facts & Assumptions

**Given:** a natural number $n$, and the set $Z_n$ of triples $(i,P,Q)$ with $i\le n$, $P\in\mathcal{D}_i$ and $Q\in\mathcal{D}_{n-i}$.

[F1] $C_m=\lvert\mathcal{D}_m\rvert$, and $C_0=1$ ([[def-catalan-number]]).

[L1] The map $\Theta$ sending $(i,P,Q)\in Z_n$ to the diagonal path whose step word is $U$, the step word of $P$, $D$, the step word of $Q$, is a bijection $Z_n\to\mathcal{D}_{n+1}$ ([[lem-first-return-decomposition-of-a-nonempty-dyck-path]]).

[L2] $\mathcal{D}_m$ is finite and nonempty for every $m\in\mathbb{N}$ ([[lem-dyck-paths-of-a-given-semilength-form-a-finite-set]]).

[L3] If $I$ is finite and $(A_i)_{i\in I}$ are pairwise disjoint finite sets, then $\bigcup_{i\in I}A_i$ is finite with $\lvert\bigcup_{i\in I}A_i\rvert=\sum_{i\in I}\lvert A_i\rvert$ ([[thm-sum-rule]], clause 2).

[L4] If $A$ and $B$ are finite then $A\times B$ is finite and $\lvert A\times B\rvert=\lvert A\rvert\cdot\lvert B\rvert$ ([[thm-product-rule]], clause 1).

[L5] For a finite index set $S$ and $a:S\to\mathbb{N}$, $\sum_{i\in S}a_i$ is defined and equals $\sum_{k<n'}a_{\varphi(k)}$ for any bijection $\varphi:n'\to S$ with $n'=\lvert S\rvert$; taking $S=n'$ and the identity gives $\sum_{i\in n'}a_i=\sum_{k<n'}a_k$ ([[def-sum-over-a-finite-index-set]], clause (a)).

[L6] If $A$ is finite and $f:A\to B$ is a bijection then $B$ is finite and $\lvert B\rvert=\lvert A\rvert$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 For each $i$ with $0\le i\le n$ put $Z_n^{(i)}:=\{i\}\times\mathcal{D}_i\times\mathcal{D}_{n-i}$. These sets are pairwise disjoint, since their members differ in the first coordinate, and their union is $Z_n$. Each is finite with $\lvert Z_n^{(i)}\rvert=C_iC_{n-i}$: the sets $\mathcal{D}_i$ and $\mathcal{D}_{n-i}$ are finite by [L2], so [L4] makes the product finite of cardinality $C_iC_{n-i}$ by [F1], and pairing with the single element $i$ is a bijection onto $Z_n^{(i)}$, which [L6] makes cardinality preserving. [F1, L2, L4, L6]

2.1 The index set $\{0,\dots,n\}$ is finite, so [L3] applies and gives that $Z_n$ is finite with $\lvert Z_n\rvert=\sum_{i=0}^{n}C_iC_{n-i}$, the sum being the natural-number sum of [L5] over that index set. [L3, L5, step 1.1]

3.1 By [L1] and [L6], $C_{n+1}=\lvert\mathcal{D}_{n+1}\rvert=\lvert Z_n\rvert$, which with step 2.1 is the stated identity; and $C_0=1$ by [F1]. At $n=0$ the identity reads $C_1=C_0C_0=1$, and at $n=1$ it reads $C_2=C_0C_1+C_1C_0=2$. [F1, L1, L6, step 2.1] ∎

## Remarks

- **The recurrence determines the sequence, and the definition does not need
  it.** Every value is computable from $C_0=1$ by the displayed convolution, but
  $C_n$ was defined as a count, so the recurrence is a theorem about that count
  rather than the object's definition. That is what makes the three closed forms
  on this page statements rather than restatements.

- **Where the first-return decomposition is spent.** Only in the bijection: the
  sum has one summand for each possible length of the inner block, and the
  disjointness of the summands is the uniqueness half of that decomposition.
