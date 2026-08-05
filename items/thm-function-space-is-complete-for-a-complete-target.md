---
id: thm-function-space-is-complete-for-a-complete-target
kind: theorem
title: "If $(Y,d)$ is complete then $Y^{X}$ is complete in the uniform metric, and so is $C(X,Y)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-uniform-limit-theorem, def-topology-of-uniform-convergence,
       lem-uniform-metric-on-a-function-space, lem-bounded-remetrisation,
       def-complete-metric-space, def-cauchy-in-metric, def-metric-convergence,
       thm-complete-subspace-iff-closed, def-isometry-and-metric-embedding,
       lem-metric-limits-unique, def-metric-space, def-max-min, lem-finite-set-has-max,
       def-topology-of-pointwise-convergence, lem-rat-embeds-dense, def-metric-ball,
       def-complete-ordered-field, lem-sup-unique, def-topological-space,
       lem-sup-metric-is-a-metric]
justified_by: []
aliases: []
landmark: true
short: "completeness of the uniform function space"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "J. Munkres, Topology, 2nd ed., §43"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ be a **nonempty** set, let $(Y,d)$ be a **complete** metric space
([[def-complete-metric-space]]) and let $\bar\rho$ be the uniform metric on
$Y^{X}$ ([[lem-uniform-metric-on-a-function-space]]). Then:

1. $(Y^{X}, \bar\rho)$ is a complete metric space.
2. If in addition $X$ carries a topology, then $C(X,Y)$ with the restriction of
   $\bar\rho$ ([[def-topology-of-uniform-convergence]]) is a complete metric
   space.

**No choice principle is used.** The limit function is defined by a formula, not
chosen: a Cauchy sequence in a complete metric space has exactly one limit
([[lem-metric-limits-unique]]), so $x \mapsto \lim_k f_k(x)$ is a function, and
nothing is selected.

## Facts & Assumptions

**Given:** A nonempty set $X$, a complete metric space $(Y,d)$, the truncated metric $\bar d = \min\{d,1\}$ on $Y$, the uniform metric $\bar\rho$ on $Y^{X}$, and a $\bar\rho$-Cauchy sequence $(f_k)$ in $Y^{X}$.

[L1] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$, while any real bounding all the values $\bar d(u(x),v(x))$ above bounds $\bar\rho(u,v)$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

[L2] $(x_k)$ is Cauchy in a metric space when for every real $\varepsilon > 0$ there is $K$ with the distance between $x_m$ and $x_n$ below $\varepsilon$ for all $m, n \ge K$; the rational and real tests agree ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L3] Completeness of $(Y,d)$: every $d$-Cauchy sequence in $Y$ converges in $(Y,d)$, and its limit is unique ([[def-complete-metric-space]], [[lem-metric-limits-unique]], [[def-metric-convergence]]).

[L4] $x_k \to p$ in a metric space means: for every real $\varepsilon > 0$ there is $K$ with the distance from $x_k$ to $p$ below $\varepsilon$ for every $k \ge K$ ([[def-metric-convergence]], [[def-metric-ball]], [[lem-rat-embeds-dense]]).

[L5] The triangle inequality (M3) for $\bar d$ ([[lem-bounded-remetrisation]], [[def-metric-space]]).

[L6] $C(X,Y)$ is a closed subset of $(Y^{X},\bar\rho)$ when $X$ is a nonempty topological space ([[thm-uniform-limit-theorem]], claim 3).

[L7] A closed subset of a complete metric space is complete in the subspace metric ([[thm-complete-subspace-iff-closed]], claim 2, [[def-isometry-and-metric-embedding]]).

[L8] Two elements of $Y^{X}$ are equal exactly when they agree at every point ([[def-topology-of-pointwise-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Let $x \in X$ and let $\varepsilon > 0$ be real; put $\eta := \min\{\varepsilon, 1\}/2$, a real with $0 < \eta \le 1/2 < 1$ and $\eta < \varepsilon$, and take $K$ with $\bar\rho(f_m,f_n) < \eta$ for all $m,n \ge K$. [given, L1, L2, choose]

1.2 Let $\varepsilon > 0$ be real; put $\eta := \min\{\varepsilon,1\}/4$, a real with $0 < \eta \le 1/4 < 1$ and $4\eta \le \varepsilon$, and take $K$ with $\bar\rho(f_m,f_n) < \eta$ for all $m,n \ge K$. [given, L1, L2, choose]

2.1 For $m, n \ge K$: $\bar d(f_m(x),f_n(x)) \le \bar\rho(f_m,f_n) < \eta < 1$, hence $d(f_m(x),f_n(x)) = \bar d(f_m(x),f_n(x)) < \eta < \varepsilon$. [step 1.1, L1]

3.1 As $\varepsilon$ was an arbitrary positive real, step 2.1 makes $(f_k(x))$ a $d$-Cauchy sequence in $Y$ for every $x \in X$; by completeness it converges, and its limit is unique, so $f(x) := \lim_k f_k(x)$ defines a function $f \in Y^{X}$ with no selection made. [step 2.1, L2, L3, L8]

4.1 Fix $n \ge K$ and $x \in X$; since $f_m(x) \to f(x)$ in $(Y,d)$ and $\bar d \le d$, there is $m \ge K$ with $\bar d(f_m(x), f(x)) < \eta$, and then $\bar d(f_n(x), f(x)) \le \bar d(f_n(x), f_m(x)) + \bar d(f_m(x), f(x)) < \eta + \eta = 2\eta$. [step 3.1, step 1.2, L1, L4, L5]

5.1 Step 4.1 holds for every $x \in X$, so $2\eta$ bounds the values $\bar d(f_n(x),f(x))$ above and hence $\bar\rho(f_n,f) \le 2\eta \le \varepsilon/2 < \varepsilon$, for every $n \ge K$. [step 1.2, step 4.1, L1]

6.1 As $\varepsilon$ was an arbitrary positive real, step 5.1 says $f_n \to f$ in $(Y^{X},\bar\rho)$; so every $\bar\rho$-Cauchy sequence converges in $Y^{X}$, which is claim 1. [step 5.1, L4]

7.1 For claim 2, $C(X,Y)$ is closed in the complete space $(Y^{X},\bar\rho)$, so the metric subspace $C(X,Y)$ with the restriction of $\bar\rho$ is complete. [step 6.1, L6, L7] ∎

## Remarks

- **What completeness of the target buys, pointwise and then uniformly.** Step 3.1 produces the limit function pointwise, and that step alone would hold for a merely pointwise Cauchy condition. What the uniform Cauchy condition adds is step 5.1: the same $\eta$ works at every $x$, so the bound on $\bar d(f_n(x),f(x))$ is uniform in $x$ and therefore bounds the supremum.

- **Step 4.1 chooses nothing.** For each fixed $x$ an index $m$ is instantiated and used inside the same sentence; the conclusion $\bar d(f_n(x),f(x)) < 2\eta$ does not mention $m$, so no function $x \mapsto m$ is ever formed. That is the standard way this library avoids a spurious countable choice.

- **Completeness is a property of the metric, not of the topology** ([[def-complete-metric-space]]), and the metric here is $\bar\rho$, built from the truncation $\bar d = \min\{d,1\}$. A different metric inducing the same topology on $Y$ need not make $Y$ complete, and then nothing above applies; the hypothesis is that $(Y,d)$ itself is complete.

- **The classical special case.** With $Y = \mathbb{R}$ this says that the bounded-or-not real functions on a nonempty set are complete in the uniform metric, and that the continuous ones form a closed, hence complete, subspace. The companion page works $C([0,1],\mathbb{R})$ explicitly and compares the uniform metric there with the supremum metric of [[lem-sup-metric-is-a-metric]].
