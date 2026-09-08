---
id: "ex-binary-tree-and-konig-branch"
kind: "example"
title: "The binary tree and a cofinal branch"
status: "draft"
origin: "pipeline"
deps: ["thm-konig-finite-level-tree"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.32, printed p86; explicit binary-tree instance"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Example

The full binary tree $2^{<\omega}$ has $2^n$ nodes at level $n$. Its all-zero strings form an infinite branch. Every infinite prefix-closed subtree of it also has an infinite branch in ZFC.

## Facts & Assumptions

**Given:** Finite strings are functions $s:n\to\{0,1\}$, ordered by proper restriction.

[F1] A height-$\omega$ tree with finite levels has an infinite branch in ZFC. [[thm-konig-finite-level-tree]]

## Verification

1.1 The predecessors of $s:n\to2$ are exactly $s\restriction k$ for $k<n$, ordered like $n$. Thus its height is $n$. There is one empty string at level zero; appending either $0$ or $1$ to each length-$n$ string gives all length-$(n+1)$ strings without repetition. Induction gives $|T_n|=2^n$, including $2^0=1$. [given, algebra]

2.1 Put $z_n(k)=0$ for $k<n$. Then $z_n=z_{n+1}\restriction n$, so $B=\{z_n:n<\omega\}$ is an infinite chain. A string $s$ of length $n$ comparable with every $z_k$ must equal $z_n$, since comparable strings of equal length coincide. Thus $B$ is maximal and is a cofinal branch. [given, step 1.1]

3.1 If $S\subseteq2^{<\omega}$ is infinite and prefix closed, it has finite levels, each of size at most $2^n$. Its lengths cannot be bounded by $N$, since then $|S|\le\sum_{n=0}^N2^n=2^{N+1}-1$. Its height is therefore $\omega$, and F1 supplies an infinite branch. This last appeal inherits the ZFC assumption; the explicit branch in step 2.1 needs no choice. [F1, step 1.1] ∎
