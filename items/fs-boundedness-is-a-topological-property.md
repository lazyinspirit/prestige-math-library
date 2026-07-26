---
id: fs-boundedness-is-a-topological-property
kind: false-statement
title: "FALSE: boundedness of a metric space is determined by its topology"
status: draft
origin: session
deps: [lem-bounded-remetrisation, def-metric-bounded-diameter, def-equivalent-metrics,
       def-metric-topology, lem-real-line-is-a-metric-space,
       thm-metric-equivalence-hierarchy, def-metric-space, def-max-min]
justified_by: []
aliases: []
landmark: false
short: "boundedness is not topological"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bounded set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bounded_set"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**False claim:** boundedness is a topological property of a metric space; that
is, if $d$ and $d'$ are topologically equivalent metrics on a set $X$
([[def-equivalent-metrics]]) and $(X,d)$ is a bounded metric space
([[def-metric-bounded-diameter]]), then $(X,d')$ is bounded as well.

Equivalently, the false claim says that the metric topology
([[def-metric-topology]]) determines whether the space is bounded. It does not:
every metric space carries a bounded metric with exactly the same topology, so
as soon as one unbounded metric space exists the claim collapses.

## Facts & Assumptions

**Given:** The real line $\mathbb{R}$ with its usual metric $d_{\mathbb{R}}(u,v) = |u-v|$, and the metric $\rho(u,v) := \min\{\, d_{\mathbb{R}}(u,v),\ 1 \,\}$ ([[def-max-min]]).

[L1] $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ and $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space: no ball contains $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-metric-space]]).

[L2] For any metric $d$ the function $\min\{d,1\}$ is a metric, is bounded with diameter at most $1$ on a nonempty space, and is uniformly equivalent to $d$ ([[lem-bounded-remetrisation]], [[def-metric-bounded-diameter]]).

[L3] Uniform equivalence implies topological equivalence ([[thm-metric-equivalence-hierarchy]], [[def-equivalent-metrics]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1] the metric $d_{\mathbb{R}}$ makes $\mathbb{R}$ a metric space that is not bounded. [L1]

1.2 By [L2] the function $\rho = \min\{d_{\mathbb{R}}, 1\}$ is a metric on $\mathbb{R}$, the space $(\mathbb{R}, \rho)$ is bounded with $\operatorname{diam}(\mathbb{R}) \le 1$, and $\rho$ is uniformly equivalent to $d_{\mathbb{R}}$. [L2]

2.1 By [L3] the two metrics are therefore topologically equivalent: $\mathcal{T}_\rho = \mathcal{T}_{d_{\mathbb{R}}}$. [step 1.2, L3]

3.1 So $d_{\mathbb{R}}$ and $\rho$ are topologically equivalent metrics on the same set, $(\mathbb{R},\rho)$ is bounded and $(\mathbb{R},d_{\mathbb{R}})$ is not; the claim fails, and boundedness is a property of the metric and not of the topology. [step 1.1, step 2.1] ∎

## Remarks

- **What is true instead.** Boundedness is preserved by Lipschitz equivalence,
  since $d' \le \beta d$ turns a ball for $d$ into a ball for $d'$
  ([[def-equivalent-metrics]]). It is the two weaker equivalences that lose it,
  and the witness above sits precisely in the gap between Lipschitz equivalence
  and uniform equivalence ([[thm-metric-equivalence-hierarchy]]).
- **The diameter is even less topological than boundedness.** Rescaling a metric
  by a positive constant is a Lipschitz equivalence and multiplies every
  diameter by that constant, so no numerical value of the diameter is determined
  even by the Lipschitz class.
- **This is why "bounded" is never used as a topological adjective in this
  library.** The bounded subsets of $(X,d)$ are defined from $d$
  ([[def-metric-bounded-diameter]]), and every statement about them names the
  metric.
