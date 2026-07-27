---
id: cex-heine-cantor-fails-without-compactness
kind: counterexample
title: "$x \\mapsto 1/x$ is continuous on $(0,1)$ and not uniformly continuous, so Heine-Cantor needs compactness of the domain"
status: published
origin: session
deps: [thm-heine-cantor-metric, cex-totally-bounded-not-compact, def-metric-uniform-continuity, def-metric-continuity, def-metric-compactness, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-canonical-natural, def-metric-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
short: "Heine-Cantor fails on $(0,1)$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a continuous map from a **bounded** metric space to a metric
space is uniformly continuous.

The true statement replaces *bounded* by *compact*
([[thm-heine-cantor-metric]]). The witness is $g(x) = 1/x$ on the interval
$(0,1)$ ([[def-interval]]), a metric subspace of $\mathbb{R}$
([[lem-real-line-is-a-metric-space]]) that is bounded and not compact
([[cex-totally-bounded-not-compact]]). The map is continuous
([[def-metric-continuity]]) and is not uniformly continuous
([[def-metric-uniform-continuity]]): the pairs

$$x_k := \frac{1}{k+2}, \qquad y_k := \frac{1}{k+3} \qquad (k \in \mathbb{N})$$

lie in $(0,1)$, satisfy $|x_k - y_k| \to 0$, and yet
$|g(x_k) - g(y_k)| = 1$ for every $k$. The indices are written $k+2$ and $k+3$
because $\mathbb{N}$ contains $0$ ([[def-sequence]]), so that both points lie in
$(0,1)$ already at $k = 0$.

## Facts & Assumptions

**Given:** The interval $(0,1)$ with the metric $|x-y|$ restricted to it, the map $g(x) = 1/x$ on it, and the points $x_k = 1/\iota(k+2)$ and $y_k = 1/\iota(k+3)$.

[A1] The refuted claim: a continuous map from a bounded metric space to a metric space is uniformly continuous.

[L1] $(0,1)$ is a bounded metric subspace of $(\mathbb{R},d_{\mathbb{R}})$ and is not compact ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]], [[cex-totally-bounded-not-compact]], [[def-metric-compactness]], [[def-metric-space]]).

[L2] $g$ is continuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|g(x)-g(c)| < \varepsilon$ whenever $|x-c| < \delta$; it is uniformly continuous when one $\delta$ works for all pairs at once ([[def-metric-continuity]], [[def-metric-uniform-continuity]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; canonical naturals are positive and increasing, and reciprocals of positives are positive and reverse the order ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

[L4] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

## Counterexample

**Proof technique:** direct.

1.1 $g$ is continuous at each $c \in (0,1)$: given a real $\varepsilon > 0$, the choice $\delta := \min\{c/2,\ \varepsilon c^2/2\}$ gives, for $|x - c| < \delta$ with $x \in (0,1)$, first $x > c/2 > 0$ and then $|1/x - 1/c| = |c-x|/(xc) < (2/c^2)|x-c| < \varepsilon$. [L2, L3]

2.1 For every $k \in \mathbb{N}$ the points $x_k = 1/\iota(k+2)$ and $y_k = 1/\iota(k+3)$ lie in $(0,1)$, since $\iota(k+2) \ge 2 > 1$ and $\iota(k+3) \ge 3 > 1$ make both reciprocals positive and below $1$. [L3, step 1.1]

3.1 $|g(x_k) - g(y_k)| = |\iota(k+2) - \iota(k+3)| = 1$ for every $k$, because $\iota(k+3) = \iota(k+2) + 1$. [L3, step 2.1]

3.2 $|x_k - y_k| = 1/\iota(k+2) - 1/\iota(k+3) < 1/\iota(k+2)$, and given a real $\delta > 0$ a natural $m \ge 1$ with $1/m < \delta$ gives $|x_m - y_m| < 1/\iota(m+2) < 1/m < \delta$. [L3, step 2.1]

4.1 So no real $\delta > 0$ witnesses uniform continuity at $\varepsilon = 1$: by step 3.2 some pair $x_m, y_m$ of points of $(0,1)$ has $|x_m - y_m| < \delta$, while step 3.1 gives $|g(x_m) - g(y_m)| = 1$, which is not less than $1$. [L2, step 3.1, step 3.2]

5.1 Hence $g$ is a continuous map on the bounded, non-compact space $(0,1)$ that is not uniformly continuous, and the claim [A1] is refuted: the compactness hypothesis of Heine-Cantor cannot be weakened to boundedness. [A1, L1, L4, step 1.1, step 4.1] ∎

## Remarks

**Where the argument would break on a compact domain.** On $[0,1]$ the same pairs converge to $0$, and any continuous function there is uniformly continuous [L4]; the map $1/x$ escapes that only because $0$ is missing from its domain, so the values are free to run away as the arguments approach the missing point.

**The failure is exactly the failure of a Lebesgue number.** The proof of [[thm-heine-cantor-metric]] turns pointwise continuity into uniform continuity by producing one radius that works everywhere, and the cover of $(0,1)$ used in [[cex-open-cover-with-no-lebesgue-number]] shows that no such radius exists here.
