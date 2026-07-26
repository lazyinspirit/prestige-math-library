---
id: cex-uniformly-not-lipschitz-equivalent
kind: counterexample
title: "On $\\mathbb{R}$ the metrics $|x-y|$ and $\\min(|x-y|,1)$ are uniformly but not Lipschitz equivalent"
status: published
origin: session
deps: [lem-bounded-remetrisation, thm-metric-equivalence-hierarchy, def-equivalent-metrics,
       thm-of-archimedean, def-max-min, lem-real-line-is-a-metric-space,
       lem-of-inverse-positive, lem-of-sign-rules, lem-of-naturals-positive,
       lem-finite-set-has-max, lem-of-abs-value, def-abs-value, cor-of-one-positive,
       def-metric-space, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "uniform but not Lipschitz"
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
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** uniformly equivalent metrics are Lipschitz equivalent;
equivalently, the implication "Lipschitz equivalent implies uniformly
equivalent" of [[thm-metric-equivalence-hierarchy]] reverses.

On $\mathbb{R}$ take the usual metric $d(x,y) := |x-y|$
([[lem-real-line-is-a-metric-space]]) and

$$\rho(x,y) := \min\{\, |x-y|,\ 1 \,\},$$

the minimum being that of a two-element set of reals ([[def-max-min]]).

These are uniformly equivalent ([[lem-bounded-remetrisation]]) and are **not**
Lipschitz equivalent ([[def-equivalent-metrics]]), because a Lipschitz bound
$\alpha\, d \le \rho$ with $\alpha > 0$ would force $d$ to be bounded by
$1/\alpha$, and $d$ is unbounded on the real line.

## Facts & Assumptions

**Given:** The real line with $d(x,y) = |x-y|$ and $\rho = \min\{d, 1\}$.

[L1] $d$ is a metric on $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-metric-space]]).

[L2] For any metric $d$, the function $\min\{d,1\}$ is a metric, satisfies $\min\{d,1\} \le 1$ everywhere, and is uniformly equivalent to $d$ ([[lem-bounded-remetrisation]], [[def-equivalent-metrics]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L3] Lipschitz equivalence of $d$ and $\rho$ means there are reals $\alpha, \beta > 0$ with $\alpha\, d(x,y) \le \rho(x,y) \le \beta\, d(x,y)$ for all $x,y$ ([[def-equivalent-metrics]]).

[L4] Archimedean property: for every real $w$ there is a natural $n \ge 1$ with $w < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]).

[L5] Inverses and scaling: $\alpha > 0$ gives $\alpha^{-1} > 0$ ([[lem-of-inverse-positive]]), and multiplying an inequality by a positive preserves it ([[lem-of-sign-rules]]); $0 < 1$ ([[cor-of-one-positive]]); trichotomy and transitivity ([[def-ordered-field]], [[def-complete-ordered-field]]); $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

## Counterexample

**Proof technique:** direct.

1.1 $\rho$ is a metric on $\mathbb{R}$ and is uniformly equivalent to $d$. [L1, L2]

1.2 $\rho(x,y) \le 1$ for all $x, y \in \mathbb{R}$. [L2]

2.1 Suppose $d$ and $\rho$ were Lipschitz equivalent, with constants $\alpha, \beta > 0$ as in [L3]. Then for all $x, y$ we would have $\alpha\, |x - y| \le \rho(x,y) \le 1$. [step 1.2, L3, L5]

3.1 Apply the Archimedean property to $w := \alpha^{-1}$, which is a positive real: there is a natural $n \ge 1$ with $\alpha^{-1} < n \cdot 1_{\mathbb{R}}$, and multiplying by $\alpha > 0$ gives $1 < \alpha\, (n \cdot 1_{\mathbb{R}})$. Taking $x := n \cdot 1_{\mathbb{R}}$ and $y := 0$, so that $|x - y| = n \cdot 1_{\mathbb{R}}$ since $n \cdot 1_{\mathbb{R}} > 0$, step 2.1 gives $\alpha\,(n \cdot 1_{\mathbb{R}}) \le 1$, contradicting $1 < \alpha\,(n \cdot 1_{\mathbb{R}})$ by trichotomy. [step 2.1, L4, L5]

4.1 No such constants exist, so $d$ and $\rho$ are uniformly equivalent metrics on $\mathbb{R}$ that are not Lipschitz equivalent; the implication from Lipschitz to uniform equivalence in [[thm-metric-equivalence-hierarchy]] therefore does not reverse. [step 1.1, step 3.1] ∎

## Remarks

- **Only the lower Lipschitz bound fails.** The upper one holds with $\beta = 1$,
  since $\rho \le d$ always; it is the requirement that $\rho$ dominate a
  positive multiple of $d$ that a bounded metric can never meet against an
  unbounded one.
- **The same pair also shows boundedness is not topological**
  ([[fs-boundedness-is-a-topological-property]],
  [[cex-boundedness-is-not-topological]]), which is no accident: Lipschitz
  equivalence is exactly the level of the hierarchy that preserves boundedness,
  and this is the pair that sits just below it.
- **Every metric space furnishes such a pair unless it is already bounded**, by
  [[lem-bounded-remetrisation]]; the real line is chosen only because its
  unboundedness is already recorded ([[lem-real-line-is-a-metric-space]]).
