---
id: ex-post-office-metric
kind: example
title: "The post-office metric $d(x,y) = \\|x\\| + \\|y\\|$ for $x \\ne y$ on $\\mathbb{R}^n$, and its isolated points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-metric-interior-closure-boundary, def-metric-ball,
       lem-metrics-on-rn, lem-metric-nonnegativity, lem-finite-sum-laws,
       def-finite-sum, thm-of-square-roots, lem-of-add-order, cor-of-one-positive,
       lem-of-inverse-positive, lem-of-sign-rules, def-field, def-natural-numbers,
       def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [ex-sncf-metric]
landmark: false
short: "post-office metric"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "SNCF metric (PlanetMath)"
      url: "https://planetmath.org/sncfmetric"
pipeline_run: null
---

## Example

Let $n \ge 1$ and let $\mathbb{R}^n$ carry the Euclidean metric $d_2$ of
[[lem-metrics-on-rn]]. Write $\mathbf{0}$ for the element of $\mathbb{R}^n$ with
all coordinates $0$ and

$$\|x\| := d_2(x, \mathbf{0}) = \sqrt{\textstyle\sum_{k<n} x_k^2} .$$

Define the **post-office metric** (also called the SNCF metric) by

$$\rho(x,y) := \begin{cases} 0 & x = y, \\ \|x\| + \|y\| & x \ne y. \end{cases}$$

The name is the picture: to travel between two places you must first go to the
central post office at $\mathbf{0}$. Then:

1. $\rho$ is a metric on $\mathbb{R}^n$ ([[def-metric-space]]).
2. Every $x \ne \mathbf{0}$ is an **isolated point** of $(\mathbb{R}^n, \rho)$
   ([[def-metric-interior-closure-boundary]]), because
   $B_\rho\big(x, \|x\|\big) = \{x\}$.
3. $\mathbf{0}$ is not an isolated point: every ball $B_\rho(\mathbf{0}, r)$
   contains points other than $\mathbf{0}$.

So $(\mathbb{R}^n,\rho)$ has exactly one non-isolated point, which no metric
equivalent to $d_2$ could achieve: in the Euclidean topology no point of
$\mathbb{R}^n$ is isolated.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; elements $x, y, z \in \mathbb{R}^n$; a real $r > 0$; and the element $w \in \mathbb{R}^n$ with $w_0 := r/2$ and $w_k := 0$ for $1 \le k < n$.

[L1] $d_2$ is a metric on $\mathbb{R}^n$ ([[lem-metrics-on-rn]], [[def-metric-space]]), so $\|x\| = d_2(x,\mathbf{0}) \ge 0$ ([[lem-metric-nonnegativity]]) and $\|x\| = 0$ exactly when $x = \mathbf{0}$.

[L2] Finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): splitting a sum at an index $m \le n$, and $\sum_{k<p}\lambda = p\lambda$, so a sum all of whose terms are $0$ is $0$; and $\mathbb{N}$ contains $0$, so the index $0$ exists as soon as $n \ge 1$ ([[def-natural-numbers]]).

[L3] Square roots: $\sqrt{t^2} = t$ for $t \ge 0$ ([[thm-of-square-roots]]).

[L4] Halving: for a real $r > 0$ the element $r/2 := r(1+1)^{-1}$ is positive with $r/2 + r/2 = r$, hence $r/2 < r$; this uses $0 < 1$, positivity of inverses of positives, and positivity of products of positives ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]], [[def-field]], [[def-ordered-field]]).

[L5] Order arithmetic: inequalities may be added, a nonnegative term may be dropped from the larger side, and by trichotomy $a \ge b$ rules out $a < b$ ([[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Balls, isolated points: $B_\rho(u,t) = \{v : \rho(u,v) < t\}$, and $u$ is isolated in a set $A \ni u$ when some ball meets $A$ only in $u$ ([[def-metric-ball]], [[def-metric-interior-closure-boundary]]).

## Verification

**Proof technique:** direct.

1.1 Basic values: $\rho(u,v) \ge 0$ for all $u,v$, being $0$ or a sum of two nonnegative numbers; $\rho$ is symmetric, since both defining clauses are; and $\rho(u,v) = 0$ exactly when $u = v$, because for $u \ne v$ the value $\|u\| + \|v\|$ vanishes only if $\|u\| = \|v\| = 0$, that is only if $u = v = \mathbf{0}$, contradicting $u \ne v$. [L1, L5]

1.2 Triangle inequality: if $x = z$ then $\rho(x,z) = 0 \le \rho(x,y) + \rho(y,z)$; if $x \ne z$ and $y = x$, then $y \ne z$ and $\rho(x,y) + \rho(y,z) = 0 + \|x\| + \|z\| = \rho(x,z)$; if $x \ne z$ and $y = z$, the same computation applies with the roles exchanged; and if $x \ne z$ with $y \ne x$ and $y \ne z$, then $\rho(x,y) + \rho(y,z) = \|x\| + \|y\| + \|y\| + \|z\| \ge \|x\| + \|z\| = \rho(x,z)$, since $\|y\| \ge 0$. [L1, L5]

1.3 The element $w$ satisfies $\sum_{k<n} w_k^2 = w_0^2 + 0 = (r/2)^2$, splitting the sum at index $1 \le n$ and using that all remaining terms are $0$; hence $\|w\| = \sqrt{(r/2)^2} = r/2 < r$, and $w \ne \mathbf{0}$ because $w_0 = r/2 \ne 0$. [L2, L3, L4]

2.1 Claim 1: $\rho$ satisfies (M1) and (M2) by step 1.1 and (M3) by step 1.2, so it is a metric on $\mathbb{R}^n$. [step 1.1, step 1.2]

3.1 Claim 2: let $x \ne \mathbf{0}$, so $\|x\| > 0$ by [L1] and trichotomy. For $y \ne x$ we get $\rho(x,y) = \|x\| + \|y\| \ge \|x\|$, so $y \notin B_\rho(x,\|x\|)$; and $x \in B_\rho(x,\|x\|)$ since $\rho(x,x) = 0 < \|x\|$. Hence $B_\rho(x,\|x\|) = \{x\}$ and $x$ is isolated in $\mathbb{R}^n$. [step 1.1, step 2.1, L1, L5, L6]

3.2 Claim 3: let $r > 0$. For $y \ne \mathbf{0}$ one has $\rho(\mathbf{0},y) = \|\mathbf{0}\| + \|y\| = \|y\|$, so the element $w$ of step 1.3 satisfies $\rho(\mathbf{0},w) = \|w\| < r$ and $w \ne \mathbf{0}$; thus $B_\rho(\mathbf{0},r)$ contains a point other than $\mathbf{0}$, for every $r > 0$, and $\mathbf{0}$ is not isolated. [step 1.3, step 2.1, L1, L6]

4.1 Claims 1, 2 and 3 hold by steps 2.1, 3.1 and 3.2. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **The topology is almost discrete.** Every singleton $\{x\}$ with $x \ne \mathbf{0}$ is open by claim 2, so every subset of $\mathbb{R}^n \setminus \{\mathbf{0}\}$ is open ([[thm-metric-open-set-algebra]]); the only points a set has to be careful about are those near $\mathbf{0}$.
- **This is not equivalent to any of $d_1$, $d_2$, $d_\infty$**, not even topologically. Those three share a topology ([[ex-p-metrics-on-rn]]) in which no point is isolated: for $x \in \mathbb{R}^n$ and $r > 0$ the element $y$ with $y_0 := x_0 + r/2$ and $y_k := x_k$ for $1 \le k < n$ satisfies $d_2(x, y) = r/2 < r$, by the computation of step 1.3, and differs from $x$. In $\rho$, by claim 2, every point but $\mathbf{0}$ is isolated.
- **The same construction works over any metric space with a distinguished point**, replacing $\|x\|$ by the distance to that point; nothing above uses more about $\|\cdot\|$ than nonnegativity and vanishing exactly at $\mathbf{0}$.
