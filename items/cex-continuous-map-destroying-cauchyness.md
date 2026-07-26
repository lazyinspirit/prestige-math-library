---
id: cex-continuous-map-destroying-cauchyness
kind: counterexample
title: "$x \\mapsto 1/x$ is continuous on $(0,1)$ and sends the Cauchy sequence $(1/(k+2))_{k \\ge 0}$ to an unbounded one"
status: draft
origin: session
deps: [thm-uniform-continuity-preserves-cauchy, def-metric-uniform-continuity,
       def-metric-continuity, def-cauchy-in-metric, cor-archimedean-reciprocal,
       thm-of-archimedean, lem-of-inverse-positive, def-interval,
       lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       lem-metric-convergent-implies-cauchy, def-metric-convergence,
       lem-finite-set-has-max, def-max-min, lem-of-abs-value, lem-of-sign-rules,
       def-metric-space, def-sequence, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "continuity does not preserve Cauchy"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the hypothesis of
[[thm-uniform-continuity-preserves-cauchy]] may be weakened from uniform
continuity to continuity; a continuous map of metric spaces sends Cauchy
sequences to Cauchy sequences.

Let $X := (0,1) \subseteq \mathbb{R}$ ([[def-interval]]) with the metric
inherited from the real line
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), let
$\mathbb{R}$ carry its usual metric, and let $f : X \to \mathbb{R}$ be
$f(x) := 1/x$. Then $f$ is continuous ([[def-metric-continuity]]), the sequence
$x_k := 1/(k+2)$ is Cauchy in $X$ ([[def-cauchy-in-metric]]), and the image
sequence $f(x_k) = k+2$ is unbounded and not Cauchy. Consequently $f$ is not
uniformly continuous ([[def-metric-uniform-continuity]]).

## Facts & Assumptions

**Given:** The interval $X = (0,1)$ with the metric inherited from $\mathbb{R}$; the map $f(x) = 1/x$; the sequence $x_k = 1/(k+2)$; a point $a \in X$; reals $\varepsilon, \delta > 0$.

[L1] The absolute value makes $\mathbb{R}$ a metric space, and a restriction of a metric to a subset is a metric with the same distances ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] For $x,a > 0$: $|1/x - 1/a| = |x-a|/(xa)$; reciprocation reverses order on the positives; and inequalities may be multiplied by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L3] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$, and for every real $t$ there is a natural $n \ge 1$ with $t < n$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Two reals have a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Continuity at a point, uniform continuity, Cauchyness and convergence, all testable with real $\varepsilon > 0$ ([[def-metric-continuity]], [[def-metric-uniform-continuity]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L6] A convergent sequence in a metric space is Cauchy ([[lem-metric-convergent-implies-cauchy]]); a sequence of reals is bounded when some real dominates all its absolute values ([[def-sequence]]).

[L7] Uniformly continuous maps send Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous at every $a \in X$: put $\delta := \min\{a/2,\ \varepsilon a^2/4\} > 0$. If $x \in X$ and $|x - a| < \delta$ then $|x-a| < a/2$, so $x > a/2$, and therefore $|1/x - 1/a| = |x-a|/(xa) < \delta/((a/2)a) = 2\delta/a^2 \le \varepsilon/2 < \varepsilon$. Since $a$ was arbitrary, $f$ is continuous on $X$. [L1, L2, L4, L5]

1.2 Every term of $(x_k)$ lies in $X$: $k+2 \ge 2$ gives $0 < 1/(k+2) \le 1/2 < 1$. [L1, L2]

2.1 $(x_k)$ is Cauchy in $X$: given a real $\varepsilon > 0$, take $N \ge 1$ with $1/N < \varepsilon/2$; for $k,l \ge N$ we have $k+2 > N$ and $l+2 > N$, so $|x_k - x_l| \le 1/(k+2) + 1/(l+2) < 2/N < \varepsilon$. [step 1.2, L1, L3, L5]

2.2 $f(x_k) = k+2$ for every $k$. [step 1.2, L2]

3.1 The image sequence is unbounded: for a real $M$, [L3] supplies a natural $n \ge 1$ with $M < n$, and then $f(x_n) = n + 2 > n > M$. [step 2.2, L3, L6]

3.2 The image sequence is not Cauchy: $|f(x_K) - f(x_{K+1})| = |(K+2) - (K+3)| = 1$ for every $K$, so the Cauchy condition fails at $\varepsilon = 1$. [step 2.2, L5]

4.1 So a continuous map has carried a Cauchy sequence to a non-Cauchy one, which refutes the claim above; and $f$ cannot be uniformly continuous, since a uniformly continuous map would have preserved Cauchyness. [step 1.1, step 2.1, step 3.1, step 3.2, L7] ∎

## Remarks

- **Where the $\delta$ escapes.** The $\delta$ produced in step 1.1 is proportional to $a^2$, so it shrinks to nothing as $a$ approaches $0$; there is no single $\delta$ serving every point, which is exactly the failure of uniform continuity ([[def-metric-uniform-continuity]]). The Cauchy sequence $(x_k)$ walks into the region where the $\delta$s vanish.
- **The domain, not the formula, is the problem.** On $[a,1)$ with $a > 0$ the same map is Lipschitz with constant $1/a^2$, hence uniformly continuous, and it preserves Cauchy sequences there. It is the missing endpoint $0$ of $(0,1)$ that makes the example work, and that is the same missing point as in [[fs-cauchy-implies-convergent-in-every-metric-space]].
- **Indexing.** The sequence is $1/(k+2)$ and not $1/k$, because $\mathbb{N}$ contains $0$ here ([[def-sequence]]) and $1/0$ does not exist; and not $1/(k+1)$, because that equals $1$ at $k = 0$ and $1 \notin (0,1)$.
- **This is one of the two witnesses named in [[thm-metric-regularity-hierarchy]]**, the one separating continuity from uniform continuity. The other, separating Hölder from Lipschitz, is [[ex-square-root-is-half-holder]].
