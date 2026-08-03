---
id: cex-evt-fails-without-compactness
kind: counterexample
title: "On $(0,1)$ the identity is bounded with no greatest value and $x \\mapsto 1/x$ is continuous and unbounded, so the extreme value theorem needs compactness and not merely boundedness of the domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-extreme-value-metric, cex-totally-bounded-not-compact, def-metric-compactness, def-metric-continuity, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-max-min, lem-sup-epsilon, def-bounded-set, def-metric-bounded-diameter, def-complete-ordered-field, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-metric-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
short: "EVT fails on $(0,1)$"
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a continuous real-valued function on a nonempty **bounded**
metric space is bounded and attains a greatest value.

The true statement replaces *bounded* by *compact*
([[thm-extreme-value-metric]]), and the difference is not cosmetic. The witness
is the interval $(0,1)$ ([[def-interval]]) as a metric subspace of $\mathbb{R}$
([[lem-real-line-is-a-metric-space]]), which is bounded
([[def-metric-bounded-diameter]]) and not compact
([[cex-totally-bounded-not-compact]]), together with two continuous functions on
it ([[def-metric-continuity]]):

- the identity $f(x) = x$, which is bounded, has supremum $1$, and attains no
  greatest value;
- the map $g(x) = 1/x$, which is continuous and unbounded.

So on a merely bounded domain a continuous function may fail to attain its
supremum, and may fail to be bounded at all.

## Facts & Assumptions

**Given:** The interval $(0,1)$ with the metric $|x-y|$ restricted to it, and the functions $f(x) = x$ and $g(x) = 1/x$ on it.

[A1] The refuted claim: a continuous real-valued function on a nonempty bounded metric space is bounded and attains a greatest value.

[L1] $(0,1)$ is a nonempty bounded metric subspace of $(\mathbb{R},d_{\mathbb{R}})$, $d_{\mathbb{R}}(x,y) = |x-y|$, and it is not compact ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]], [[def-metric-bounded-diameter]], [[cex-totally-bounded-not-compact]], [[def-metric-compactness]], [[def-metric-space]]).

[L2] $h$ is continuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(x) - h(c)| < \varepsilon$ whenever $|x - c| < \delta$ ([[def-metric-continuity]]).

[L3] $u = \sup S$ for a nonempty $S$ bounded above exactly when $u$ is an upper bound and for every real $\varepsilon > 0$ some $s \in S$ has $u - \varepsilon < s$; a maximum is a member of the set that bounds it above ([[lem-sup-epsilon]], [[def-max-min]], [[def-bounded-set]], [[def-complete-ordered-field]]).

[L4] For every real $M$ there is a natural $N \ge 1$ with $M < \iota(N)$, for every real $\eta > 0$ a natural $N \ge 1$ with $1/N < \eta$, and reciprocals of positives are positive and reverse the order ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-of-inverse-positive]]).

[L5] A continuous real-valued function on a nonempty compact metric space is bounded and attains a greatest and a least value ([[thm-extreme-value-metric]]).

## Counterexample

**Proof technique:** direct.

1.1 The identity $f$ is continuous on $(0,1)$, $\delta := \varepsilon$ serving at every point, and its image is $(0,1)$, which is bounded above by $1$ and below by $0$. [L1, L2]

2.1 $\sup f[(0,1)] = 1$: the value $1$ is an upper bound, and for a real $\varepsilon > 0$ the point $x := \max\{1-\varepsilon/2,\ 1/2\}$ lies in $(0,1)$ and satisfies $x > 1 - \varepsilon$. [L3, step 1.1]

3.1 $f$ attains no greatest value: for $x \in (0,1)$ the point $(x+1)/2$ lies in $(0,1)$ and satisfies $(x+1)/2 > x$, so no member of the image bounds the image above. [L3, step 2.1]

4.1 $g(x) = 1/x$ is defined on $(0,1)$, every $x$ there being positive, and it is continuous at each $c \in (0,1)$: given a real $\varepsilon > 0$, the choice $\delta := \min\{c/2,\ \varepsilon c^2/2\}$ gives, for $|x-c| < \delta$, first $x > c/2 > 0$ and then $|1/x - 1/c| = |c-x|/(xc) < (2/c^2)|x - c| < \varepsilon$. [L2, L4, step 3.1]

5.1 $g$ is unbounded on $(0,1)$: given a real $M$, take a natural $N \ge 1$ with $M < \iota(N)$; the point $x := 1/\iota(N+1)$ lies in $(0,1)$ and $g(x) = \iota(N+1) > \iota(N) > M$. [L4, step 4.1]

6.1 So on the nonempty bounded non-compact space $(0,1)$ the continuous function $f$ is bounded and attains no greatest value, and the continuous function $g$ is not even bounded; the claim [A1] is refuted, and the compactness hypothesis of the extreme value theorem cannot be weakened to boundedness. [A1, L1, L5, step 1.1, step 3.1, step 5.1] ∎

## Remarks

**Which hypothesis each failure isolates.** The identity shows that the *attainment* half of [[thm-extreme-value-metric]] fails on a bounded non-compact domain even for a bounded function; the map $1/x$ shows that the *boundedness* half fails too. Compactness is what supplies both, through the image being closed and bounded ([[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]]).

**Closing the interval repairs the first example and rules out the second.** On $[0,1]$, which is compact ([[thm-heine-borel-rn]]), the identity attains the value $1$. The map $1/x$ has no continuous extension to $[0,1]$ at all: such an extension would be bounded by [L5], whereas its restriction to $(0,1)$ is unbounded by step 5.1. So the failure of the second example is a failure of the domain, not of the theorem.
