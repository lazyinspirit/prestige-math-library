---
id: prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution
kind: proposition
title: "Every connected tangent map meeting a leaf factors uniquely through that leaf"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds,
       thm-frobenius-local-coordinate-theorem,
       def-plaque-of-a-flat-chart,
       prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component,
       def-connected-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $\mathcal D$ be an integrable distribution on $M$, let $L$ be one of its
maximal leaves, and let $F:P \to M$ be a smooth map from a connected manifold
$P$ such that $dF(TP) \subseteq \mathcal D$ and $F(P)$ meets $L$. Then:

1. $F(P) \subseteq L$, and
2. there is a unique smooth map $\widetilde F:P \to L$ with
   $j \circ \widetilde F = F$, where $j:L \hookrightarrow M$ is the inclusion.

## Facts & Assumptions

**Given:** A connected manifold $P$, a smooth map $F:P \to M$ tangent to an integrable distribution $\mathcal D$, and a maximal leaf $L$ meeting $F(P)$.

[A1] Let $U := F^{-1}(L)$.

[L1] An integrable distribution has a flat coordinate chart around every
point ([[thm-frobenius-local-coordinate-theorem]]).

[L2] A smooth real-valued function with zero differential is constant on each
connected component
([[prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component]]).

[L3] A maximal leaf has the unique smooth structure constructed from its local
plaque charts, and its inclusion in $M$ is an injective integral immersion
([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[L4] A nonempty clopen subset of a connected space is the whole space
([[def-connected-space]]).

[L5] The connected components of a flat-coordinate slice are its plaques
([[def-plaque-of-a-flat-chart]]).

## Proof

**Proof technique:** direct.

1.1 The set $U$ is nonempty by hypothesis. If $x\in U$, use [L1] to choose a flat chart $\varphi=(u,v):W\to\mathbb R^k\times\mathbb R^{n-k}$ around $F(x)$, and choose a connected coordinate neighborhood $C$ of $x$ contained in the open set $F^{-1}(W)$. On $C$, each component of $v\circ F$ has zero differential because $dF(TP)\subseteq\mathcal D=\ker dv$, so [L2] makes $v\circ F$ constant. Thus [L5] puts $F(C)$ in the plaque through $F(x)$, which lies in $L$. Hence $C\subseteq U$, and $U$ is open. [A1, L1, L2, L5, given]

2.1 If $x\in P\setminus U$, the same [L1]–[L2] argument gives a connected open neighborhood $C$ of $x$ whose image lies in one plaque and hence one leaf. That leaf is not $L$, because it contains $F(x)\notin L$, so $C\subseteq P\setminus U$. Thus $P\setminus U$ is open. Now $U$ is a nonempty clopen subset of the connected space $P$, so [L4] gives $U=P$ and therefore $F(P)\subseteq L$. [A1, L1, L2, L4, L5, step 1.1]

3.1 The inclusion $j$ is injective by [L3], so step 2.1 forces a unique set map $\widetilde F:P\to L$ with $j\circ\widetilde F=F$. Around each $x\in P$, repeat the flat-chart argument of step 1.1 to obtain a connected neighborhood whose image lies in one plaque. That plaque is a smooth coordinate patch of $L$ by [L3], and in its plaque coordinates $\widetilde F$ has the same smooth coordinate expression as $F$. Hence $\widetilde F$ is smooth, and injectivity of $j$ gives uniqueness. [L1, L2, L3, L5, step 1.1, step 2.1]

4.1 Therefore every connected tangent map that meets a leaf factors uniquely through that leaf. [step 2.1, step 3.1] ∎
