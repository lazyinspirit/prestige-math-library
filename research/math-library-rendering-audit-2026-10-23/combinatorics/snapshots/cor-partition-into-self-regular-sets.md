---
id: cor-partition-into-self-regular-sets
kind: corollary
title: "Every finite graph has a bounded partition into self-regular vertex sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-large-self-regular-subset, lem-regularity-is-robust-under-small-edits]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Exercise 2.1.28"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

For every $0<\epsilon<1$ there is $K=K(\epsilon)$ such that the vertex set of every finite graph can be partitioned into at most $K$ sets, each of which is $\epsilon$-self-regular.

## Facts & Assumptions

**Given:** $0<\epsilon<1$ and a finite graph $G$.

[L1] At every smaller regularity parameter, every finite graph with at least one vertex has a nonempty self-regular set containing a fixed positive fraction of its vertices ([[thm-large-self-regular-subset]]).

[L2] Given $\epsilon'<\epsilon$, sufficiently small vertex and edge changes preserve regularity with parameter $\epsilon$ ([[lem-regularity-is-robust-under-small-edits]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] with old parameter $\epsilon/2$ and new parameter $\epsilon$, and let $\tau>0$ be a permitted relative vertex-change fraction. Let $\delta>0$ be supplied by [L1] at parameter $\epsilon/2$. [given, L1, L2, choose]

2.1 Repeatedly apply [L1] to the graph induced by the vertices not yet chosen, stopping if that remainder is empty and otherwise removing an $(\epsilon/2)$-self-regular set of at least a $\delta$ fraction of it. Choose a fixed $r$ with $(1-\delta)^r\le\tau/(1+\tau)$. After at most $r$ rounds, the unassigned remainder has size at most $\tau$ times the size of the union of the extracted sets. [step 1.1, L1, induction, algebra]

3.1 Distribute every remaining vertex among the at most $r$ extracted sets proportionally to their sizes. For all sufficiently large graph orders, rounding can be absorbed by replacing $\tau$ in step 1.1 with a smaller constant, so no set grows by more than the vertex-change fraction allowed by [L2]. No old incidence among vertices of an extracted set is changed. [step 2.1, L2, choose, algebra]

4.1 By [L2], every enlarged set is $\epsilon$-self-regular. Empty and bounded exceptional graphs may instead be partitioned into singletons, increasing the uniform bound only by a constant; hence some $K(\epsilon)$ works for all finite graphs. [step 3.1, L2, induction] ∎
