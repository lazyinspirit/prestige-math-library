---
id: thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted
kind: theorem
title: "Infinite-order elements of hyperbolic groups are undistorted"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hyperbolic-group, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, lem-infinite-order-elements-have-positive-stable-translation-length]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $G$ be a hyperbolic group and let $g \in G$ have infinite order. Then the
cyclic subgroup $\langle g \rangle$ is undistorted in $G$: for some constants
$A,B>0$,

$$ |n| \le A\,|g^n|_S + B $$

for all $n \in \mathbb Z$, where $|\cdot|_S$ is word length with respect to a
finite generating set $S$ of $G$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$, a finite generating set $S$, and an infinite-order element $g \in G$.

[L1] For an infinite-order element of a finitely generated hyperbolic group, there is a positive integer $C$ such that $|g^n|_S\ge |n|/C$ for all integers $n$ ([[lem-infinite-order-elements-have-positive-stable-translation-length]]).

[L2] Word metrics from two finite generating sets are bilipschitz equivalent ([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

## Proof

**Proof technique:** direct.

1.1 By the definition of a hyperbolic group, some finite generating set $T$ has a hyperbolic geometric Cayley graph. Apply [L1] with $T$: for some $C_T>0$, $|n|\le C_T|g^n|_T$ for every integer $n$. The proof of [L1] is choice-free. [given, L1]

2.1 By [L2] there is a finite $K>0$ with $|h|_T\le K|h|_S$ for all $h\in G$. Thus $|n|\le C_TK|g^n|_S$. Take $A=C_TK$ and any $B>0$. This proves undistortion for the stated arbitrary finite $S$ without importing a choice-dependent hyperbolicity transfer theorem. [L2, step 1.1] ∎
