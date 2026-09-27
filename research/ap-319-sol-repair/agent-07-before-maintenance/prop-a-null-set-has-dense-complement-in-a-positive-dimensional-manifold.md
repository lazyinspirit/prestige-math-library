---
id: prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
kind: proposition
title: "A null set has dense complement in a positive-dimensional manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
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
---

## Statement

If $M$ is a positive-dimensional smooth manifold and $E\subseteq M$ is null,
then $M\setminus E$ is dense in $M$.

## Facts & Assumptions

**Given:** A positive-dimensional smooth manifold $M$, a null subset $E\subseteq M$, and a fixed smooth atlas $\mathcal A$ for which $E$ is $\mathcal A$-null.

[L1] For every chart $(V,\varphi)$ of $\mathcal A$, the image $\varphi(E\cap V)$ is Euclidean null ([[def-null-subset-of-a-smooth-manifold]]).

[L2] Every subset of a Euclidean null set is null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

## Proof
**Proof technique:** direct.

1.1 Suppose $M\setminus E$ were not dense. Then some nonempty open set $O\subseteq M$ would satisfy $O\subseteq E$. Choose $p\in O$ and a chart $(V,\varphi)\in\mathcal A$ containing $p$, and put $W=V\cap O$. Then $\varphi(W)$ is a nonempty open subset of $\mathbb R^m$, where $m=\dim M\ge1$. [given, assume-contra, choose]

2.1 Since $W\subseteq E\cap V$, [L1] and [L2] make $\varphi(W)$ null. But $\varphi(W)$ contains a closed cube of positive side length, which has positive $m$-dimensional volume and cannot be null. Contradiction. [L1, L2, step 1.1, contradiction]

3.1 Hence every nonempty open subset of $M$ meets $M\setminus E$, so $M\setminus E$ is dense. [discharge-contradiction: dense complement, step 2.1] ∎
