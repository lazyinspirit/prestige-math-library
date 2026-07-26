---
id: ex-bounded-remetrisation-of-r
kind: example
title: "$\\min(|x-y|, 1)$ on $\\mathbb{R}$ has the usual topology and diameter at most $1$"
status: draft
origin: session
deps: [lem-bounded-remetrisation, def-equivalent-metrics, def-metric-bounded-diameter,
       def-max-min, lem-real-line-is-a-metric-space, thm-metric-equivalence-hierarchy,
       lem-finite-set-has-max, lem-of-abs-value, def-abs-value, cor-of-one-positive,
       lem-sup-unique, def-complete-ordered-field, def-metric-space, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$\\min(|x-y|,1)$ on $\\mathbb{R}$"
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
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

On $\mathbb{R}$, let $d_{\mathbb{R}}(x,y) = |x-y|$ be the usual metric
([[lem-real-line-is-a-metric-space]]) and put

$$\rho(x,y) := \min\{\, |x - y|,\ 1 \,\} \qquad (x, y \in \mathbb{R}).$$

Then:

1. $\rho$ is a metric on $\mathbb{R}$, uniformly equivalent and therefore
   topologically equivalent to $d_{\mathbb{R}}$
   ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]); so
   $(\mathbb{R},\rho)$ has exactly the usual topology of the real line.
2. $(\mathbb{R},\rho)$ is a bounded metric space and
   $\operatorname{diam}(\mathbb{R}) = 1$ in the metric $\rho$
   ([[def-metric-bounded-diameter]]), whereas $(\mathbb{R}, d_{\mathbb{R}})$ is
   not bounded at all and has no diameter.

This is the concrete instance of [[lem-bounded-remetrisation]] on the real line,
and it is the witness used for the failure of two plausible-sounding claims: that
boundedness is topological, and that topologically equivalent metrics are
Lipschitz equivalent.

## Facts & Assumptions

**Given:** The real line with $d_{\mathbb{R}}(x,y) = |x-y|$ and the function $\rho = \min\{d_{\mathbb{R}}, 1\}$; the set $D := \{\, \rho(x,y) : x, y \in \mathbb{R} \,\}$.

[L1] $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ and $(\mathbb{R}, d_{\mathbb{R}})$ is not bounded, so it has no diameter ([[lem-real-line-is-a-metric-space]], [[def-metric-space]], [[def-metric-bounded-diameter]]).

[L2] For any metric $d$, the function $\min\{d,1\}$ is a metric, is bounded with diameter at most $1$ on a nonempty space, and is uniformly equivalent to $d$ ([[lem-bounded-remetrisation]]).

[L3] Uniform equivalence implies topological equivalence ([[thm-metric-equivalence-hierarchy]], [[def-equivalent-metrics]]).

[L4] The minimum of a two-element set of reals exists and is one of them ([[lem-finite-set-has-max]], [[def-max-min]]); $|1 - 0| = 1$ and $0 < 1$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

[L5] The diameter is the least upper bound of the set of distances, so it is $\ge$ every distance and $\le$ every upper bound of them; and it is unique ([[def-metric-bounded-diameter]], [[lem-sup-unique]], [[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] the function $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ and $\mathbb{R}$ is not bounded in it. [L1]

1.2 $\rho(0,1) = \min\{|0-1|,\ 1\} = \min\{1,1\} = 1$, so $1 \in D$. [L4]

2.1 By [L2] applied to $d = d_{\mathbb{R}}$: $\rho$ is a metric on $\mathbb{R}$, the space $(\mathbb{R},\rho)$ is bounded, $\operatorname{diam}(\mathbb{R}) \le 1$ in $\rho$, and $\rho$ is uniformly equivalent to $d_{\mathbb{R}}$. [step 1.1, L2]

3.1 Claim 2: the diameter of $\mathbb{R}$ in $\rho$ is an upper bound of $D$ and $1 \in D$ by step 1.2, so it is $\ge 1$; combined with $\le 1$ from step 2.1 this gives $\operatorname{diam}(\mathbb{R}) = 1$ in the metric $\rho$, while by step 1.1 the space has no diameter at all in $d_{\mathbb{R}}$. [step 1.1, step 1.2, step 2.1, L5]

3.2 Claim 1: $\rho$ is a metric uniformly equivalent to $d_{\mathbb{R}}$ by step 2.1, hence topologically equivalent to it, so the metric topology of $\rho$ is the usual topology of $\mathbb{R}$. [step 2.1, L3]

4.1 Claims 1 and 2 hold by steps 3.2 and 3.1. [step 3.1, step 3.2] ∎

## Remarks

- **Nothing about $\mathbb{R}$ is special here except unboundedness.** The same
  computation on any unbounded metric space gives a bounded metric with the same
  topology ([[lem-bounded-remetrisation]]); the real line is chosen because it is
  the space every reader already has.
- **The diameter is exactly $1$ and not less**, which is what step 1.2
  contributes: for the construction $\min\{d,1\}$ the bound of
  [[lem-bounded-remetrisation]] is attained as soon as $d$ takes some value
  $\ge 1$, because the new metric then takes the value $1$ itself.
- **The two metrics are not Lipschitz equivalent**, so this pair also witnesses
  the strictness of the first implication of
  [[thm-metric-equivalence-hierarchy]]; that computation is
  [[cex-uniformly-not-lipschitz-equivalent]].
