---
id: cor-heine-borel-in-the-product-topology
kind: corollary
title: "A subset of $\\mathbb{R}^n$ with the product topology is compact exactly when it is closed and bounded, the product topology being the Euclidean metric topology"
status: draft
origin: session
deps: [thm-compactness-agrees-with-metric-compactness, thm-heine-borel-rn, lem-product-topology-on-rn, lem-metrics-on-rn, def-product-topology, def-metric-topology, def-metrizable-space, def-compact-space, def-metric-bounded-diameter, def-subspace-topology-top]
justified_by: []
aliases: [cor-heine-borel-top]
landmark: true
short: "Heine-Borel for the product topology"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ ([[lem-metrics-on-rn]]) carrying the product topology of $n$
copies of the usual topology of $\mathbb{R}$ ([[def-product-topology]]), and let
$d_2$ be the Euclidean metric. Then:

1. The product topology on $\mathbb{R}^n$ **is** the metric topology of $d_2$
   ([[def-metric-topology]]), so $\mathbb{R}^n$ as a product and $\mathbb{R}^n$ as
   a metric space are one topological space, and it is metrizable
   ([[def-metrizable-space]]).
2. A subset $K \subseteq \mathbb{R}^n$ is a compact subset for the product
   topology ([[def-compact-space]]) **if and only if** $K$ is closed in
   $\mathbb{R}^n$ and bounded ([[def-metric-bounded-diameter]]).

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its three metrics only there; for $n = 0$ the product is a
one-point space and is compact. **No choice principle is used**: the metric
statement it is read off from is proved by bisection
([[thm-heine-borel-rn]]).

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the set $\mathbb{R}^n$ of functions $n \to \mathbb{R}$, the product topology on it, and the Euclidean metric $d_2$.

[L1] The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$, and $d_1$, $d_2$ and $d_\infty$ all induce that one topology; so $\mathbb{R}^n$ carrying the product topology and $\mathbb{R}^n$ carrying the topology of $d_2$ are one topological space, and it is metrizable ([[lem-product-topology-on-rn]], [[lem-metrics-on-rn]], [[def-metrizable-space]], [[def-metric-topology]]).

[L2] For a metric space with its metric topology, a subset is a compact subset in the metric sense exactly when it is a compact subset in the topological sense ([[thm-compactness-agrees-with-metric-compactness]], claim 2).

[L3] A subset $K \subseteq \mathbb{R}^n$ is a compact subset of the metric space $(\mathbb{R}^n, d_2)$ exactly when $K$ is closed in $\mathbb{R}^n$ and bounded ([[thm-heine-borel-rn]], claim 2; [[def-metric-bounded-diameter]]).

[L4] A subset is a compact subset of a space when the subspace it carries is compact ([[def-compact-space]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the product topology on $\mathbb{R}^n$ and the metric topology of $d_2$ are the same family of subsets of $\mathbb{R}^n$, so a subset is open, or closed, for one exactly when it is for the other; this is claim 1. [L1]

2.1 Applying [L2] to the metric space $(\mathbb{R}^n, d_2)$, a subset $K$ is a compact subset of $\mathbb{R}^n$ for the topology of $d_2$ exactly when it is a compact subset of the metric space $(\mathbb{R}^n, d_2)$; and by step 1.1 that topology is the product topology, so the same holds for the product topology. [L2, L4, step 1.1]

3.1 Combining with [L3]: $K$ is a compact subset of $\mathbb{R}^n$ with the product topology exactly when $K$ is closed in $\mathbb{R}^n$ and bounded, which is claim 2. [L3, step 1.1, step 2.1] ∎

## Remarks

**This is a corollary in the strict sense.** Nothing is reproved: claim 1 is [[lem-product-topology-on-rn]], the passage between the two readings of "compact subset" is [[thm-compactness-agrees-with-metric-compactness]], and the mathematical content of claim 2 is [[thm-heine-borel-rn]]. What the corollary records is that the three fit together, so that a reader working in the product topology may use Heine-Borel without translating.

**A second route to the compactness of a box.** For reals $a_k \le b_k$ the box $\prod_{k<n} [a_k, b_k]$ is a product of finitely many compact spaces, each $[a_k,b_k]$ being compact by claim 2 applied with $n = 1$, so [[thm-finite-products-of-compact-spaces]] makes it compact without any appeal to bisection. The two routes agree, as claim 1 requires; the bisection proof is the one that also delivers the converse.

**Boundedness is metric and compactness is not.** "Bounded" in claim 2 is a property of the metric $d_2$, not of the topology it induces: a metrizable space carries metrics of every diameter inducing the same topology. What claim 2 says is that *for this particular metric on this particular space* the conjunction of closedness and boundedness detects compactness; the same conjunction fails to do so in a general metric space ([[fs-closed-and-bounded-implies-compact-in-every-metric-space]]).
