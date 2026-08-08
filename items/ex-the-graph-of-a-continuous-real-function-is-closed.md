---
id: ex-the-graph-of-a-continuous-real-function-is-closed
kind: example
title: "The graph of a continuous $f : \\mathbb{R} \\to \\mathbb{R}$ is closed in $\\mathbb{R}^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed,
       def-continuity-real, lem-real-and-metric-notions-agree, def-continuous-map-top,
       def-product-topology, lem-product-topology-on-rn, def-hausdorff-space,
       def-metrizable-space, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: false
short: "a continuous real function has closed graph"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-08
    scope: published-audit-targeted
    context_sha256: 02e525d38b9ee579680c19ea4f99fff73e7dc39cd685b1169addf313cdf14019
    item_sha256: d2da91a29b180c7020a661782298f3de0bbb5c31a4730b7221363e02c1545796
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "Stacks Project, Topology, Lemma 5.3 (Tag 08ZD)"
      url: "https://stacks.math.columbia.edu/tag/08ZD"
pipeline_run: null
---

## Example

Let $f : \mathbb{R} \to \mathbb{R}$ be continuous in the $\varepsilon$-$\delta$
sense of [[def-continuity-real]], give $\mathbb{R}$ its usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]) and give
$\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ the product topology
([[def-product-topology]], [[lem-product-topology-on-rn]]). Then the graph

$$G_f \;=\; \{\, (x, f(x)) : x \in \mathbb{R} \,\}$$

is closed in $\mathbb{R}^2$.

Every polynomial function is such an $f$, and so is every function built from
continuous ones by the operations that preserve continuity; no further hypothesis
on $f$ is needed, and in particular $f$ need not be bounded, monotone, or
differentiable.

## Facts & Assumptions

**Given:** A function $f : \mathbb{R} \to \mathbb{R}$ continuous in the sense of [[def-continuity-real]], with $\mathbb{R}$ carrying its usual topology and $\mathbb{R}^2$ the product topology.

[A1] The usual topology of $\mathbb{R}$ is the metric topology of $d_{\mathbb{R}}(x,y) = |x-y|$ ([[lem-real-line-is-a-metric-space]], claim 3, [[def-metrizable-space]]).

[L1] $\mathbb{R}$ with its usual topology is Hausdorff, being metrizable ([[def-metrizable-space]], [[def-hausdorff-space]]).

[L2] For $f : \mathbb{R} \to \mathbb{R}$, continuity in the sense of [[def-continuity-real]] is continuity as a map of metric spaces ([[lem-real-and-metric-notions-agree]], claim 1), and continuity as a map of metric spaces is continuity as a map of topological spaces for the metric topologies ([[def-metrizable-space]], [[def-continuous-map-top]]).

[L3] The graph of a continuous map into a Hausdorff space is closed in the product ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{R}$ with its usual topology is Hausdorff. [A1, L1]

1.2 $f$ is continuous as a map of topological spaces from $\mathbb{R}$ to $\mathbb{R}$. [A1, L2]

2.1 By [L3] applied with $X = Y = \mathbb{R}$, the graph $G_f$ is closed in $\mathbb{R} \times \mathbb{R}$. [step 1.1, step 1.2, L3] ∎

## Remarks

- **What the $\varepsilon$-$\delta$ hypothesis becomes.** The dictionary of [[lem-real-and-metric-notions-agree]] and [[def-metrizable-space]] is what lets a hypothesis stated with $\varepsilon$ and $\delta$ be fed to a theorem stated about topological spaces; there is one notion of continuity for a real function here, not two, and step 1.2 is where that is used.

- **The converse fails.** A discontinuous $\mathbb{R} \to \mathbb{R}$ may still have closed graph — the function equal to $1/x$ off $0$ does ([[fs-a-function-with-closed-graph-is-continuous]]) — so "closed graph" is strictly weaker than "continuous" for real functions. What restores the equivalence is a compact Hausdorff codomain ([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]]).

- **Nothing about $\mathbb{R}$ as a domain is used.** The domain enters the argument only as an arbitrary topological space; the same proof gives a closed graph for a continuous map from any space into $\mathbb{R}$.
