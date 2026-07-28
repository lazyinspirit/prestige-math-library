---
id: ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact
kind: example
title: "$[0,1]$, the Cantor set and $[0,1]^{\\mathbb{N}}$ are compact, by Heine-Borel, by closedness inside $[0,1]$, and by Tychonoff"
status: published
origin: session
deps: [thm-tychonoff, thm-compactness-agrees-with-metric-compactness, def-compact-space, def-cantor-set, thm-cantor-set-properties, def-product-topology, thm-heine-borel-rn, def-interval, thm-closed-subspace-of-a-compact-space-is-compact, def-subspace-topology-top, def-metrizable-space, lem-real-line-is-a-metric-space, def-metric-topology, def-metric-bounded-diameter, def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "three compact spaces"
proof_strategy: direct
verification:
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Hilbert cube (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hilbert_cube"
pipeline_run: null
---

## Example

Let $\mathbb{R}$ carry its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]), let $[0,1]$ ([[def-interval]]) and the Cantor set $C$
([[def-cantor-set]]) carry the subspace topology
([[def-subspace-topology-top]]), and let

$$Q \;:=\; [0,1]^{\mathbb{N}} \;=\; \prod_{n \in \mathbb{N}} [0,1]$$

carry the product topology ([[def-product-topology]]). Then, with compactness as
in [[def-compact-space]]:

1. $[0,1]$ is compact.
2. $C$ is compact, being closed inside $[0,1]$.
3. $Q$ is compact, assuming the Axiom of Choice.

Each of the three uses a different tool, and that is the point of putting them
together: Heine-Borel for a closed bounded subset of the line, the closed-subspace
theorem for a closed subset of something already known to be compact, and
Tychonoff for a product over an infinite index set.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the interval $[0,1] = \{t \in \mathbb{R} : 0 \le t \le 1\}$, the Cantor set $C$, and the product $Q = \prod_{n \in \mathbb{N}} [0,1]$ with the product topology.

[L1] A subset $K \subseteq \mathbb{R}$ is a compact subset of the metric space $(\mathbb{R}, d_{\mathbb{R}})$ exactly when it is closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3; [[def-metric-bounded-diameter]]).

[L2] A subset of a metric space is a compact subset in the metric sense exactly when it is one in the topological sense of the metric topology, and a subset is a compact subset exactly when the subspace it carries is a compact space ([[thm-compactness-agrees-with-metric-compactness]], claim 2; [[def-compact-space]], [[def-subspace-topology-top]]).

[L3] $[0,1]$ is closed in $\mathbb{R}$, its complement being the union of the open sets $\{t : t < 0\}$ and $\{t : t > 1\}$, and it is bounded, lying in the ball of radius $2$ about $0$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metric-topology]], [[def-topological-space]]).

[L4] $C$ is a subset of $[0,1]$ and is closed in $\mathbb{R}$ and bounded ([[def-cantor-set]], [[thm-cantor-set-properties]], claim 1).

[L5] The closed subsets of a subspace are the traces of the closed subsets of the ambient space, and a closed subset of a compact space is a compact subset of it ([[def-subspace-topology-top]], [[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

[L6] Assuming the Axiom of Choice, a product of compact spaces is compact in the product topology ([[thm-tychonoff]], [[def-product-topology]]).

## Verification

**Proof technique:** direct.

1.1 By [L3] the set $[0,1]$ is closed in $\mathbb{R}$ and bounded, so [L1] makes it a compact subset of the metric space $\mathbb{R}$ and [L2] makes it a compact subset of the topological space $\mathbb{R}$; that is, the subspace $[0,1]$ is a compact space, which is claim 1. [L1, L2, L3]

2.1 By [L4] the set $C$ is closed in $\mathbb{R}$ and contained in $[0,1]$, so $C = C \cap [0,1]$ is the trace of a closed set and hence closed in the subspace $[0,1]$; by step 1.1 that subspace is compact, so [L5] makes $C$ a compact subset of it, and by [L2] the subspace $C$ is a compact space, which is claim 2. [L2, L4, L5, step 1.1]

3.1 Each factor of $Q$ is the compact space $[0,1]$ of step 1.1, so [L6] makes $Q$ compact, which is claim 3. [L6, step 1.1] ∎

## Remarks

**Claim 2 does not need Heine-Borel a second time.** The Cantor set is closed and bounded, so [L1] would give its compactness directly; the route through $[0,1]$ is taken because it uses only that $C$ is closed in a space already known to be compact, which is the argument that generalises to spaces with no metric.

**Claim 3 is where the cost appears.** Claims 1 and 2 are theorems of ZF, the bisection proof of Heine-Borel selecting nothing; claim 3 rests on [[thm-tychonoff]] and therefore on the Axiom of Choice. For a product over a finite index set no choice is needed ([[thm-finite-products-of-compact-spaces]]), so the cost is attached to the infinite index set and not to the factors.

**$Q$ is metrizable, and that is a separate fact.** Compactness of $Q$ is proved here from the product structure alone and uses no metric on $Q$; whether a metric inducing the product topology exists is a separate question, which nothing among this page's declared prerequisites answers and which no claim above needs.
