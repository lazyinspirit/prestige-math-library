---
id: prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets
kind: proposition
title: "An equidimensional $C^1$ map sends null sets to null sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-a-countable-chart-cover-detects-manifold-null-sets,
       prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains,
       thm-mean-value-inequality-for-total-derivatives,
       thm-extreme-value-metric,
       thm-lipschitz-images-of-null-sets-in-rn-are-null,
       def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $F:M^m\to N^m$ be a $C^1$ map between smooth manifolds of the same
dimension. If $E\subseteq M$ is null, then $F(E)\subseteq N$ is null.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a $C^1$ map $F:M^m\to N^m$ and a null subset $E\subseteq M$.

[L0] Under Countable Choice, each smooth manifold admits a countable smooth atlas with relatively compact chart domains ([[prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains]]).

[L1] Under Countable Choice, countable chart atlases of $M$ and $N$ detect manifold nullity ([[prop-a-countable-chart-cover-detects-manifold-null-sets]], [[def-countable-choice]]).

[L2] A continuous derivative is bounded on each compact Euclidean cube, and the mean-value inequality makes its map Lipschitz there ([[thm-extreme-value-metric]], [[thm-mean-value-inequality-for-total-derivatives]]).

[L3] A Lipschitz map of all of $\mathbb R^m$ into $\mathbb R^m$ sends null sets to null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

## Proof
**Proof technique:** direct.

1.1 If $m=0$, then nullity means emptiness by [L1], so $E=\varnothing$ and the claim follows. Assume $m\ge1$. By [L0] under the stated Countable Choice, take countable chart atlases $(U_j,\varphi_j)$ of $M$ and $(V_k,\psi_k)$ of $N$. For each pair $(j,k)$, the set $D_{jk}:=\varphi_j(U_j\cap F^{-1}(V_k))$ is open in $\mathbb R^m$ and the coordinate map $f_{jk}:=\psi_k\circ F\circ\varphi_j^{-1}$ is $C^1$ on $D_{jk}$. [L0, L1, given, cases]

2.1 For every $(j,k)$, enumerate the nondegenerate closed cubes with rational endpoints whose closures lie in $D_{jk}$. Their interiors cover $D_{jk}$, and the family is countable. On each such cube $Q$, [L2] bounds $\|Df_{jk}\|$ and makes $f_{jk}|_Q$ Lipschitz, since $Q$ is convex. Define $\pi_Q:\mathbb R^m\to Q$ by clamping each coordinate to its interval; each scalar clamp is $1$-Lipschitz, so $\pi_Q$ is $1$-Lipschitz in Euclidean norm and fixes $Q$. Hence $f_{jk}\circ\pi_Q$ is Lipschitz on all of $\mathbb R^m$. The set $A_{jkQ}:=\varphi_j(E\cap U_j)\cap Q$ is null by [L1], so [L3] makes $f_{jk}(A_{jkQ})=(f_{jk}\circ\pi_Q)(A_{jkQ})$ null. [L1, L2, L3, step 1.1, construct]

3.1 Fix $k$. Every point of $\psi_k(F(E)\cap V_k)$ comes from some $p\in E\cap U_j\cap F^{-1}(V_k)$, and $\varphi_j(p)$ lies in the interior of one of the cubes from step 2.1. Thus $\psi_k(F(E)\cap V_k)$ is contained in the countable union of the null sets $f_{jk}(A_{jkQ})$ over $j,Q$. Countable subadditivity makes it null. Since this holds for each $k$, [L1] detects $F(E)$ as null in $N$. [L1, step 1.1, step 2.1, algebra] ∎
