---
id: cor-nontrivial-finite-p-group-is-cyclic-iff-generator-rank-one
kind: corollary
title: "A nontrivial finite $p$-group is cyclic exactly when $d(P)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-burnside-basis-theorem, def-generator-rank-of-a-finite-p-group, def-generated-subgroup]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Statement

A nontrivial finite $p$-group $P$ is cyclic if and only if $d(P)=1$, while $d(1)=0$.

## Facts & Assumptions

**Given:** A finite $p$-group $P$.

[L1] A subset $X\subseteq P$ is minimally generating exactly when the quotient map restricts to a bijection from $X$ onto a basis of $P/\Phi(P)$ ([[thm-burnside-basis-theorem]]).

[F1] The generator rank $d(P)$ is the common size of a basis of $P/\Phi(P)$ ([[def-generator-rank-of-a-finite-p-group]]).

[F2] A group $G$ is cyclic when $G=\langle g\rangle$ for some $g\in G$ ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For the reverse direction, if $d(P)=1$, choose a one-element quotient basis and lift it. By [L1] the lift is a one-element generating set, so $P$ is cyclic by [F2]. [given, L1, F1, F2]

1.2 For the forward direction, if nontrivial $P$ is cyclic with generator $g$, then $\{g\}$ is minimally generating because the empty set generates only the trivial subgroup. By [L1], its quotient image is a one-element basis, so $d(P)=1$ by [F1]. [given, L1, F1, algebra]

2.1 If $P=1$, its Frattini quotient has the empty basis, hence $d(P)=0$ by [F1]; this is why nontriviality is needed in the biconditional. [step 1.1, step 1.2, F1] ∎
