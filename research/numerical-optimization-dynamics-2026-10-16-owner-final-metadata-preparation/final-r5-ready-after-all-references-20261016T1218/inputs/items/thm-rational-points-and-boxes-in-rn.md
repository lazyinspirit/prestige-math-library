---
id: thm-rational-points-and-boxes-in-rn
kind: theorem
title: "$\\mathbb{Q}^n$ is a countable dense subset of $\\mathbb{R}^n$, and rational open boxes form a countable basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-q-and-irrationals-dense-r, thm-rationals-countable, def-product-topology, def-topology-basis-subbasis, lem-finite-powers-of-countable-sets-are-countable, lem-finite-choice, lem-subset-of-countable, lem-real-and-metric-notions-agree]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Euclidean space"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Separable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separable_space"
pipeline_run: null
---

## Statement

Let $n\ge1$. The set $\mathbb Q^n$ is countable and dense in $\mathbb R^n$. Moreover the rational open boxes

$$\prod_{i<n}(a_i,b_i),\qquad a_i,b_i\in\mathbb Q,\quad a_i<b_i,$$

form a countable basis for the product topology on $\mathbb R^n$.

## Facts & Assumptions

**Given:** $n\ge1$, the product $\mathbb R^n=\prod_{i<n}\mathbb R$, and the rationals embedded in $\mathbb R$.

[L1] $\mathbb Q$ is countably infinite, and every finite power of an at most countable set is at most countable ([[thm-rationals-countable]], [[lem-finite-powers-of-countable-sets-are-countable]]).

[L2] Every nonempty open subset of $\mathbb R$ contains a rational point ([[lem-q-and-irrationals-dense-r]]).

[L3] The product topology has a basis of finite-coordinate boxes, which for the finite index set $n$ are products of open subsets of $\mathbb R$ ([[def-product-topology]]).

[L4] A family is a basis when each point of each open set lies in one of its members contained in that open set ([[def-topology-basis-subbasis]]).

[L5] Finite choices may be assembled into a tuple, and a subset of an at most countable set is at most countable ([[lem-finite-choice]], [[lem-subset-of-countable]]).

[L6] If $U\subseteq\mathbb R$ is open and $x\in U$, then some open interval about $x$ is contained in $U$ ([[lem-real-and-metric-notions-agree]]).
## Proof

**Proof technique:** constructive.

1.1 By [L1], $\mathbb Q^n$ is at most countable. It is infinite because the injection $q\mapsto(q,0,\ldots,0)$ embeds $\mathbb Q$ in it, hence it is countable. [L1]

1.2 Let $U=\prod_{i<n}U_i$ be a nonempty basic product-open set. Every $U_i$ is nonempty and open, so [L2] gives a rational $q_i\in U_i$; finite choice supplies the tuple $q=(q_i)_{i<n}\in\mathbb Q^n\cap U$. [L2, L5, choose]

1.3 Let $x\in U=\prod_{i<n}U_i$ be a basic product-open neighbourhood. For each $i<n$, use [L6] to choose $r_i>0$ with $(x_i-r_i,x_i+r_i)\subseteq U_i$, then use [L2] to choose rationals $$ x_i-r_i<a_i<x_i<b_i<x_i+r_i. $$ Finite choice assembles these choices, and then $x\in\prod_{i<n}(a_i,b_i)\subseteq U$. [L2, L5, L6, choose]

2.1 Every nonempty open subset contains a nonempty basic product-open set about each of its points by [L3], so step 1.2 shows that every nonempty open subset meets $\mathbb Q^n$. Thus $\mathbb Q^n$ is dense. [L3, step 1.2]

3.1 Step 1.3 and [L4] show that rational open boxes form a basis. They are indexed by a subset of $\mathbb Q^{2n}$, which is at most countable by [L1], so the basis is at most countable by [L5]. [L1, L4, L5, step 1.3] ∎
