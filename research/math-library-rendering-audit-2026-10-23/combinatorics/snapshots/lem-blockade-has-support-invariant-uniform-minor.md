---
id: lem-blockade-has-support-invariant-uniform-minor
kind: lemma
title: "A long blockade has a wide support-invariant, support-uniform minor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coherent-graph-and-support-regular-blockade, thm-finite-ramsey-for-uniform-subsets]
justified_by: []
aliases: []
landmark: false
proof_strategy: finite-descent
sources:
  scraped: []
  references:
    - title: "Chudnovsky, Scott, Seymour and Spirkl, Pure pairs I, Lemmas 4.1–4.3"
      url: "https://arxiv.org/pdf/1809.00919"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For integers $k,\tau\ge1$ and $0<\kappa\le1$, some integer $K\ge k$ has the following property. Every blockade $\mathcal B$ of length at least $K$ and width $W$ has an equicardinal minor of length $k$ and width at least $\kappa^{2^K\tau^\tau}W$ which is $\tau$-support-uniform and $(\kappa,\tau)$-support-invariant.

## Facts & Assumptions

**Given:** $k,\tau,\kappa$ and $\mathcal B$ as in the Statement. We may discard surplus blocks and take its length to be exactly $K$.

[L1] Finite uniform Ramsey guarantees, for any finite coloring of the $s$-subsets of a sufficiently large index set, a prescribed-size monochromatic subset ([[thm-finite-ramsey-for-uniform-subsets]]).

## Proof

**Proof technique:** finite trace-cost descent followed by iterated finite Ramsey.

1.1 List the finitely many ordered trees on at most $\tau$ vertices. By repeated application of [L1], one tree at a time, choose $K$ large enough that every $K$-block blockade has a $k$-block sub-blockade whose trace is monochromatic for every tree on this list. This is a backward iteration of finitely many finite Ramsey numbers; when an order has fewer than $s$ blocks, its $s$-vertex trace is empty. [L1, choose]

1.2 For this $K$, there are at most $\tau^\tau$ ordered-tree types on at most $\tau$ vertices: root each tree at its first ordered vertex; for size $s$ the parent map on the other $s-1$ ordered positions has at most $s^{s-1}$ possibilities, and $\sum_{s=1}^{\tau}s^{s-1}\le\tau^\tau$. Each trace has at most $2^K$ supports. Thus the sum $c_\tau$ of all trace cardinalities is an integer in $[0,M]$, where $M=2^K\tau^\tau$. [algebra]

2.1 Start by trimming all blocks to width $W$. Choose the largest integer $t\in[0,M]$ for which an equicardinal contraction $\mathcal C$ of the original $K$-block blockade has width at least $\kappa^tW$ and $c_\tau(\mathcal C)\le M-t$. Such a $t$ exists because $t=0$ works. If $\mathcal C$ were not $(\kappa,\tau)$-support-invariant, some contraction of it of width at least $\kappa\operatorname{width}(\mathcal C)$ would remove a support from the trace of an ordered tree of size at most $\tau$. Trim its blocks to equal size. Trimming can only remove further supports, so the new equicardinal contraction has width at least $\kappa^{t+1}W$ and cost at most $M-t-1$. This contradicts maximality of $t$. Hence $\mathcal C$ is invariant and has width at least $\kappa^MW$. [step 1.2, choose]

3.1 Apply the Ramsey choice of step 1.1 to $\mathcal C$: for each ordered tree $J$ of size $s\le\tau$, color every $s$-subset of block indices by whether it belongs to its trace, and successively retain a monochromatic sub-blockade. Keep exactly $k$ blocks. Each trace is empty or contains every $s$-subset, so this minor is $\tau$-support-uniform. [step 1.1, step 2.1]

4.1 Support-invariance survives taking a sub-blockade: extend any contraction of the sub-blockade to the discarded blocks unchanged; since all original blocks of $\mathcal C$ have the same size, the extended contraction retains at least the same $\kappa$ fraction of its width. A copy on retained indices survives in the extended contraction if and only if it survives in the restricted one. Thus the sub-blockade is also $(\kappa,\tau)$-support-invariant, equicardinal, and retains the width lower bound from step 2.1. [step 2.1, step 3.1] ∎