---
id: thm-smirnov-local-metrization
kind: theorem
title: "Under choice, a space is metrizable if and only if it is paracompact, Hausdorff, and locally metrizable"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, def-locally-metrizable-space, lem-paracompact-hausdorff-cover-shrinking, lem-metric-spaces-have-sigma-locally-finite-bases, thm-nagata-smirnov-metrization, thm-stone-metric-spaces-are-paracompact, lem-paracompact-hausdorff-is-regular, def-paracompact-space, def-hausdorff-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "UCR, Partitions of Unity and a Metrization Theorem of Smirnov"
      url: "https://math.ucr.edu/~res/math205A/smirnov.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. A space is metrizable if and only if it is paracompact, Hausdorff, and locally metrizable.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and a topological space $X$.

[L1] Under choice, every metric space is paracompact and has a $\sigma$-locally-finite basis ([[thm-stone-metric-spaces-are-paracompact]], [[lem-metric-spaces-have-sigma-locally-finite-bases]]).

[L2] A paracompact Hausdorff space is regular, and Nagata–Smirnov applies to a regular $T_1$ space with a $\sigma$-locally-finite basis ([[lem-paracompact-hausdorff-is-regular]], [[thm-nagata-smirnov-metrization]]).

[L3] Under choice, an open cover of a paracompact Hausdorff space has a locally finite open shrinking $\{W_s\}$ with $\overline{W_s}\subseteq U_s$ for assigned members $U_s$ of the original cover ([[lem-paracompact-hausdorff-cover-shrinking]]).

## Proof

**Proof technique:** cases.

1.1 If $X$ is metrizable, it is Hausdorff and locally metrizable by taking $X$ itself as the open neighbourhood, and it is paracompact by [L1]. [assume-case forward, L1]

1.2 Conversely, local metrizability gives an open cover $\mathcal U$ by metrizable subspaces. Apply [L3] to obtain a locally finite open cover $\{W_s:s\in S\}$ and assigned $U_s\in\mathcal U$ with $\overline{W_s}\subseteq U_s$. Under choice, fix for each $U_s$ a $\sigma$-locally-finite relative open basis $\bigcup_{n<\omega}\mathcal B_{s,n}$ by [L1]. [assume-case reverse, L1, L3, choose]

2.1 For each $n$, put $\mathcal C_n=\{B\cap W_s:s\in S,\ B\in\mathcal B_{s,n}\}$. Each member is open in $X$, because $U_s$ and $W_s$ are open. The family $\mathcal C_n$ is locally finite at every $x\in X$: first choose a neighborhood meeting only finitely many $W_s$; for each such $s$, if $x\in U_s$, relative local finiteness of $\mathcal B_{s,n}$ supplies an ambient neighborhood meeting only finitely many of its members. If $x\notin U_s$, then $x\notin\overline{W_s}$, so an ambient neighborhood of $x$ misses $W_s$ entirely. Intersect the finitely many chosen neighborhoods. [step 1.2, algebra]

3.1 The union $\bigcup_n\mathcal C_n$ is a basis of $X$: if $x\in O$ with $O$ open, choose $s$ with $x\in W_s$, then choose a relative basis member $B\in\mathcal B_{s,n}$ with $x\in B\subseteq O\cap U_s$. The open set $B\cap W_s$ contains $x$ and lies in $O$. Thus $X$ has a $\sigma$-locally-finite basis. [step 1.2, step 2.1]

4.1 Hausdorffness implies $T_1$, and [L2] makes $X$ regular; applying Nagata–Smirnov in [L2] to the basis from step 3.1 yields a metric. Together with step 1.1 this proves the equivalence. [L2, step 1.1, step 3.1, cases-exhaustive] ∎
