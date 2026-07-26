---
id: cex-boundedness-is-not-topological
kind: counterexample
title: "$\\mathbb{R}$ carries both an unbounded and a bounded metric inducing the same topology"
status: published
origin: session
deps: [fs-boundedness-is-a-topological-property, lem-bounded-remetrisation,
       def-metric-bounded-diameter, ex-bounded-remetrisation-of-r,
       lem-real-line-is-a-metric-space, thm-metric-equivalence-hierarchy,
       def-equivalent-metrics, def-metric-space, def-metric-topology]
justified_by: []
aliases: []
landmark: false
short: "one topology, two boundedness verdicts"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
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

## Statement refuted

**Refuted claim:** boundedness of a metric space is determined by its topology
([[fs-boundedness-is-a-topological-property]]).

The witness is the real line carrying two metrics at once:

$$d(x,y) = |x - y| \qquad \text{and} \qquad \rho(x,y) = \min\{\, |x-y|,\ 1 \,\}.$$

They induce the same topology, $(\mathbb{R}, d)$ is unbounded and has no
diameter, and $(\mathbb{R},\rho)$ is bounded with diameter exactly $1$
([[ex-bounded-remetrisation-of-r]], [[lem-real-line-is-a-metric-space]],
[[def-metric-bounded-diameter]]).

## Facts & Assumptions

**Given:** The real line with the two metrics $d$ and $\rho$ above.

[L1] $d$ is a metric on $\mathbb{R}$ and $(\mathbb{R},d)$ is not bounded, so it has no diameter ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-bounded-diameter]]).

[L2] $\rho$ is a metric on $\mathbb{R}$, uniformly equivalent to $d$, and $(\mathbb{R},\rho)$ is bounded with $\operatorname{diam}(\mathbb{R}) = 1$ ([[ex-bounded-remetrisation-of-r]], [[lem-bounded-remetrisation]]).

[L3] Uniform equivalence implies topological equivalence, that is equality of the metric topologies ([[thm-metric-equivalence-hierarchy]], [[def-equivalent-metrics]], [[def-metric-topology]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the space $(\mathbb{R},d)$ is a metric space that is not bounded. [L1]

1.2 By [L2] the space $(\mathbb{R},\rho)$ is a metric space that is bounded, with diameter $1$, and $\rho$ is uniformly equivalent to $d$. [L2]

2.1 By [L3] the two metrics are topologically equivalent, so $\mathcal{T}_d = \mathcal{T}_\rho$: the two metric spaces have exactly the same open sets, the same closed sets, the same convergent sequences and the same continuous maps. [step 1.2, L3]

3.1 So one and the same set with one and the same topology carries a bounded metric and an unbounded metric; boundedness is therefore not determined by the topology, and the claim is refuted. [step 1.1, step 2.1] ∎

## Remarks

- **Which level of the hierarchy does preserve boundedness.** Lipschitz
  equivalence does, since $\rho \le \beta d$ turns a $d$-ball into a $\rho$-ball
  of radius $\beta$ times as large ([[def-equivalent-metrics]]). The present pair
  is uniformly but not Lipschitz equivalent
  ([[cex-uniformly-not-lipschitz-equivalent]]), which is exactly the room in
  which boundedness is lost.
- **Nor is the diameter a topological invariant**, even up to a constant: on
  $\mathbb{R}$ the same construction with $\min\{d, c\}$ in place of
  $\min\{d, 1\}$, for any real $c > 0$, gives diameter $c$ while leaving the
  topology alone.
- **The general statement behind this witness** is that every metric space is
  boundedly remetrisable ([[lem-bounded-remetrisation]]), so the failure is not
  a peculiarity of the real line but the normal state of affairs.
