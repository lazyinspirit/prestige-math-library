---
id: cex-upper-semicontinuous-need-not-attain-its-infimum
kind: counterexample
title: "An upper semicontinuous function on $[0,1]$ that is bounded below and attains no minimum, so the semicontinuous extreme value theorem is genuinely one-sided"
status: draft
origin: session
deps: [def-semicontinuity, thm-semicontinuous-evt, thm-semicontinuity-level-set-characterisation, def-max-min, def-infimum, thm-infimum-property, def-bounded-set, def-interval, def-continuity-real, cor-archimedean-reciprocal, def-neighbourhood-r, thm-algebra-of-continuous-functions]
justified_by: []
aliases: []
landmark: false
short: "usc but no minimum"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Semi-continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Semi-continuity"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** an upper semicontinuous function on a nonempty compact
subset of $\mathbb{R}$ that is bounded below attains a minimum
([[def-semicontinuity]], [[def-max-min]]).

What [[thm-semicontinuous-evt]] proves is the one-sided statement: an **upper**
semicontinuous function on a nonempty compact set attains a **maximum**, and a
**lower** semicontinuous one attains a **minimum**. The refuted claim mixes the
two, and it is false.

## Counterexample

Define $f : [0,1] \to \mathbb{R}$ ([[def-interval]]) by

$$f(0) := 1, \qquad f(x) := x \quad \text{for } 0 < x \le 1 .$$

Then $f$ is upper semicontinuous on $[0,1]$, bounded below by $0$, with
$\inf f[\,[0,1]\,] = 0$ ([[def-infimum]]), and $f(x) > 0$ for every
$x \in [0,1]$: the infimum is not attained, so $f$ has no minimum. It does
attain a maximum, namely $1$ at $x = 0$, as [[thm-semicontinuous-evt]] requires.

## Facts & Assumptions

**Given:** The function $f : [0,1] \to \mathbb{R}$ with $f(0) = 1$ and $f(x) = x$ for $0 < x \le 1$.

[L1] $f$ is upper semicontinuous at $c$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $f(x) < f(c) + \varepsilon$ for every $x \in [0,1] \cap N_\delta(c)$ ([[def-semicontinuity]], [[def-neighbourhood-r]]).

[L2] The identity is continuous, so for $c \ne 0$ the $\varepsilon$-$\delta$ condition for $f$ on a neighbourhood of $c$ avoiding $0$ is that of the identity ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] A nonempty set of reals bounded below has a greatest lower bound ([[thm-infimum-property]], [[def-infimum]], [[def-bounded-set]]); $m$ is a minimum of $S$ when $m \in S$ and $m \le s$ for every $s \in S$ ([[def-max-min]]).

[L4] For every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$ ([[cor-archimedean-reciprocal]]).

[L5] An upper semicontinuous function on a nonempty compact set attains a maximum ([[thm-semicontinuous-evt]]); upper semicontinuity is equivalent to the strict sublevel sets being relatively open ([[thm-semicontinuity-level-set-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 $f$ is upper semicontinuous at $0$: $f(0) = 1$ and $f(x) \le 1$ for every $x \in [0,1]$, so $f(x) < f(0) + \varepsilon = 1 + \varepsilon$ for every $x \in [0,1]$ and every real $\varepsilon > 0$; any $\delta$ works. [L1]

1.2 $f$ is upper semicontinuous at every $c \in (0,1]$: taking $\delta := \min\{c, \varepsilon\} > 0$, every $x \in [0,1]$ with $|x - c| < \delta$ satisfies $x > c - \delta \ge 0$, hence $x \ne 0$ and $f(x) = x < c + \varepsilon = f(c) + \varepsilon$. [L1, L2]

1.3 $f$ is bounded below by $0$ and $f(x) > 0$ for every $x \in [0,1]$: for $x = 0$ the value is $1 > 0$, and for $0 < x \le 1$ the value is $x > 0$. [L3]

2.1 $\inf f[\,[0,1]\,] = 0$: the set $f[\,[0,1]\,]$ is nonempty and bounded below by $0$ by step 1.3, so its infimum $\ell$ exists and $\ell \ge 0$; and for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$, and then $f(1/n) = 1/n < \eta$, so no positive real is a lower bound and $\ell = 0$. [step 1.3, L3, L4]

3.1 $f$ has no minimum: a minimum would be a value $f(x_{0})$ that is a lower bound of $f[\,[0,1]\,]$, hence at most the infimum $0$; but every value of $f$ is strictly positive. [step 1.3, step 2.1, L3]

4.1 So $f$ is upper semicontinuous on the nonempty compact set $[0,1]$, is bounded below, and attains no minimum, which refutes the claim. It does attain a maximum, $f(0) = 1 \ge f(x)$ for every $x \in [0,1]$, in agreement with the semicontinuous extreme value theorem. [step 1.1, step 1.2, step 3.1, L5] ∎

## Remarks

- **The failing hypothesis, named exactly.** $f$ is not lower semicontinuous at
  $0$: taking $\varepsilon := 1/2$, every neighbourhood of $0$ contains points
  $x$ with $f(x) = x < 1/2 = f(0) - \varepsilon$. Lower semicontinuity is
  precisely what [[thm-semicontinuous-evt]] requires for a minimum, and it is
  precisely what is missing.

- **Reflecting the example gives the dual failure.** The function $-f$ is lower
  semicontinuous on $[0,1]$, bounded above, and attains no maximum, by
  [[def-semicontinuity]]; so neither half of the theorem can be strengthened to
  the other extremum.
