---
id: prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
kind: proposition
title: "A null set has dense complement in a positive-dimensional manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold, def-countable-choice,
       lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $M$ be a positive-dimensional smooth manifold, let $\mathcal A$ be a smooth
atlas on $M$, and let $E\subseteq M$ be $\mathcal A$-null in the sense of
[[def-null-subset-of-a-smooth-manifold]]. Then $M\setminus E$ is dense in $M$.
In particular, under Countable Choice the conclusion holds for any manifold-null
set $E$.

## Facts & Assumptions

**Given:** A positive-dimensional smooth manifold $M$, a smooth atlas $\mathcal A$, and an $\mathcal A$-null set $E\subseteq M$.

[L1] For every chart $(V,\varphi)$ of $\mathcal A$, the image $\varphi(E\cap V)$ is Euclidean null ([[def-null-subset-of-a-smooth-manifold]]).

[L2] Every subset of a Euclidean null set is null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

## Proof
**Proof technique:** direct.

1.1 Suppose $M\setminus E$ were not dense. Then some nonempty open set $O\subseteq M$ would satisfy $O\subseteq E$. Choose $p\in O$ and a chart $(V,\varphi)\in\mathcal A$ containing $p$, and put $W=V\cap O$. Then $\varphi(W)$ is a nonempty open subset of $\mathbb R^m$, where $m=\dim M\ge1$. [given, assume-contra, choose]

2.1 Since $W\subseteq E\cap V$, [L1] and [L2] make $\varphi(W)$ null. But $\varphi(W)$ contains a closed cube of positive side length, which has positive $m$-dimensional volume and cannot be null. Contradiction. [L1, L2, step 1.1, contradiction]

3.1 Hence every nonempty open subset of $M$ meets $M\setminus E$, so $M\setminus E$ is dense. Under Countable Choice, a manifold-null set has a fixed atlas for which it is $\mathcal A$-null by [[def-null-subset-of-a-smooth-manifold]], so the same conclusion applies. [discharge-contradiction: dense complement, step 2.1] ∎
