---
id: cex-pointwise-bounded-but-not-equicontinuous
kind: counterexample
title: "Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$"
status: published
origin: session
deps: [def-equicontinuity, def-metric-continuity, lem-continuity-is-local-and-pastes,
       fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets,
       def-interval, lem-real-line-is-a-metric-space, def-metrizable-space,
       def-metric-bounded-diameter, def-canonical-natural, cor-archimedean-reciprocal,
       def-max-min, lem-finite-set-has-max, def-metric-ball, def-metric-space,
       def-abs-value, lem-of-naturals-positive, lem-of-inverse-positive,
       def-isometry-and-metric-embedding]
justified_by: []
aliases: []
landmark: false
short: "pointwise bounded, not equicontinuous"
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
    - title: "Equicontinuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equicontinuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a pointwise bounded family of continuous maps between metric
spaces is equicontinuous ([[def-equicontinuity]]).

The witness is the family of moving spikes on $I := [0,1]$ already built in
[[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]]: with
$a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]),

$$f_k(t) = \frac{t}{a_k} \ \ (0 \le t \le a_k), \qquad f_k(t) = 2 - \frac{t}{a_k} \ \ (a_k \le t \le 2a_k), \qquad f_k(t) = 0 \ \ (2a_k \le t \le 1) .$$

Every $f_k$ is continuous and takes values in $[0,1]$, so
$\mathcal{F} := \{\, f_k : k \in \mathbb{N} \,\}$ is pointwise bounded; but
$\mathcal{F}$ is not equicontinuous at $0$, because $f_k$ climbs from $0$ to $1$
over an interval of length $a_k$, and $a_k$ can be made smaller than any
prescribed $\delta$.

## Facts & Assumptions

**Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the spikes $f_k$ displayed above and the family $\mathcal{F} = \{\, f_k : k \in \mathbb{N} \,\}$.

[L1] Each $f_k$ is a well-defined continuous function $I \to \mathbb{R}$, $f_k(0) = 0$, $f_k(a_k) = 1$, and $0 < a_k \le 1/2$, so $a_k \in I$ ([[fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets]], [[lem-continuity-is-local-and-pastes]], [[def-canonical-natural]], [[def-metrizable-space]], [[def-metric-space]]).

[L2] $0 \le f_k(t) \le 1$ for every $t \in I$ and every $k$: the three formulas take values $t/a_k \in [0,1]$, $2 - t/a_k \in [0,1]$ and $0$ respectively on their pieces ([[def-max-min]], [[lem-finite-set-has-max]], [[def-abs-value]]).

[L3] A family $\mathcal{F}$ is pointwise bounded when for each $t$ the set $\{\, f(t) : f \in \mathcal{F} \,\}$ lies in some ball of the target, and equicontinuous at $a$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(t)-f(a)| < \varepsilon$ for every $f \in \mathcal{F}$ and every $t$ with $|t-a| < \delta$ ([[def-equicontinuity]], [[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-continuity]]).

[L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$; $\iota$ is strictly increasing with $\iota(n) > 0$ for $n \ge 1$; and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $t \in I$ the set $\{\, f_k(t) : k \in \mathbb{N} \,\}$ is contained in $[0,1]$ and hence in the ball $B(0,2)$ of $\mathbb{R}$, so $\mathcal{F}$ is pointwise bounded. [L2, L3]

1.2 Every member of $\mathcal{F}$ is continuous. [L1]

1.3 Take $\varepsilon := 1/2$ and let $\delta > 0$ be any real; by [L4] there is a natural $m \ge 1$ with $1/\iota(m) < \delta$, and setting $k := m$ gives $a_k = 1/\iota(m+2) \le 1/\iota(m) < \delta$, since $m + 2 > m$ and $\iota$ is increasing. [L4, choose]

2.1 For that $k$ the point $a_k$ lies in $I$ and satisfies $|a_k - 0| = a_k < \delta$, while $|f_k(a_k) - f_k(0)| = |1 - 0| = 1$, which is not below $\varepsilon = 1/2$. [step 1.3, L1]

3.1 So no $\delta > 0$ serves the whole family at $\varepsilon = 1/2$ and the point $0$: the family $\mathcal{F}$ is not equicontinuous at $0$, hence not equicontinuous. [step 1.3, step 2.1, L3]

4.1 By steps 1.1, 1.2 and 3.1 the family $\mathcal{F}$ is a pointwise bounded family of continuous functions that is not equicontinuous, so the claim is false. [step 1.1, step 1.2, step 3.1] ∎

## Remarks

- **The values stay in $[0,1]$ and the *slopes* do not.** $f_k$ is Lipschitz with constant $1/a_k = \iota(k+2)$ and with no smaller one, so the family has no common Lipschitz constant. That is the contrast with the previous example on this page, where fixing the constant at $1$ is exactly what produced uniform equicontinuity.

- **The failure is at one point only, and that is enough.** The family *is* equicontinuous at every $t > 0$: for $0 < \delta < t/2$ and $k$ large the spike is identically $0$ on the interval around $t$, and the finitely many remaining members are individually continuous. Equicontinuity is required at every point, so failure at $0$ refutes the claim.

- **Both hypotheses of an Ascoli-type theorem are therefore needed**, and neither implies the other: this family is pointwise bounded and not equicontinuous, and the $1$-Lipschitz maps of the previous example are equicontinuous and not pointwise bounded.
