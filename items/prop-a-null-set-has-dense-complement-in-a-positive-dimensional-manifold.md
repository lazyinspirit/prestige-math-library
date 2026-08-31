---
id: prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold
kind: proposition
title: "A null set has dense complement in a positive-dimensional manifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-subset-of-a-smooth-manifold,
       prop-countable-unions-and-subsets-of-manifold-null-sets-are-null,
       prop-a-countable-chart-cover-detects-manifold-null-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

**Given:** A positive-dimensional smooth manifold $M$ and a null subset $E\subseteq M$.

[L1] A countable chart cover detects manifold nullity ([[prop-a-countable-chart-cover-detects-manifold-null-sets]]).

## Proof
**Proof technique:** direct.

1.1 Suppose $M\setminus E$ were not dense. Then some nonempty open set $O\subseteq M$ would satisfy $O\subseteq E$. Choose a chart $(U,\varphi)$ with $U\subseteq O$ and $\varphi(U)\subseteq\mathbb R^m$, where $m=\dim M\ge 1$. [given, assume-contra, choose]
2.1 Since $U\subseteq E$, the chart image $\varphi(U)$ would be a null subset of $\mathbb R^m$ by [L1]. But $\varphi(U)$ is a nonempty open subset of $\mathbb R^m$, so it contains a closed cube of positive side length and therefore cannot be null. Contradiction. [L1, step 1.1, contradiction]
3.1 Hence every nonempty open subset of $M$ meets $M\setminus E$, so $M\setminus E$ is dense. [discharge-contradiction: dense complement, step 2.1] ∎