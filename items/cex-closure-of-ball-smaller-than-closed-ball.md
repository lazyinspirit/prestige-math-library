---
id: cex-closure-of-ball-smaller-than-closed-ball
kind: counterexample
title: "In $\\{0\\} \\cup [1,2]$ with the metric of $\\mathbb{R}$, the closure of $B(0,1) = \\{0\\}$ is $\\{0\\}$ while the closed ball is $\\{0,1\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-closed-ball-is-the-closure-of-the-open-ball, def-metric-ball,
       thm-metric-closure-characterisation, def-interval, def-isometry-and-metric-embedding,
       lem-real-line-is-a-metric-space, def-metric-topology,
       def-metric-interior-closure-boundary, def-abs-value, lem-of-abs-value,
       cor-of-one-positive, def-metric-space, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$\\overline{B(0,1)} \\subsetneq \\bar B(0,1)$"
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
    - title: "Ball (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ball_(mathematics)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** in every metric space, the closure of the open ball
$B(x,r)$ is the closed ball $\bar B(x,r)$
([[fs-closed-ball-is-the-closure-of-the-open-ball]]).

The witness is the metric subspace

$$X := \{0\} \cup [1,2] \subseteq \mathbb{R}$$

of the real line with its usual metric ([[lem-real-line-is-a-metric-space]],
[[def-isometry-and-metric-embedding]], [[def-interval]]), with $x = 0$ and
$r = 1$. In it

$$B_X(0,1) = \{0\}, \qquad \overline{B_X(0,1)} = \{0\}, \qquad \bar B_X(0,1) = \{0,1\},$$

so the closure of the open ball is a proper subset of the closed ball of the same
centre and radius. The inclusion $\overline{B(x,r)} \subseteq \bar B(x,r)$ that
does hold in general is proved in
[[fs-closed-ball-is-the-closure-of-the-open-ball]] and is not repeated.

## Facts & Assumptions

**Given:** The real line with $d_{\mathbb{R}}(u,v) = |u-v|$, and $X := \{0\} \cup [1,2]$ with the subspace metric $d := d_{\mathbb{R}} \restriction (X \times X)$.

[L1] The subspace metric makes $X$ a metric space, and its balls are traces of the balls of $\mathbb{R}$ ([[def-isometry-and-metric-embedding]], [[def-metric-space]], [[def-metric-ball]]).

[L2] Balls: $B_X(a,s) = \{y \in X : d(a,y) < s\}$ and $\bar B_X(a,s) = \{y \in X : d(a,y) \le s\}$ ([[def-metric-ball]]).

[L3] Open and closed sets of a metric space, and the closure as the set of adherent points ([[def-metric-topology]], [[def-metric-interior-closure-boundary]]).

[L4] A closed set equals its own closure, the closure being the smallest closed superset ([[thm-metric-closure-characterisation]]).

[L5] Absolute value and order: $|t| = t$ for $t \ge 0$, $|-t| = |t|$, and $0 < 1$; by trichotomy $t \ge 1$ excludes $t < 1$ ([[def-abs-value]], [[lem-of-abs-value]], [[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Intervals: $[1,2] = \{t \in \mathbb{R} : 1 \le t \le 2\}$ ([[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 Every $y \in [1,2]$ has $y \ge 1$, so $d(0,y) = |0-y| = |-y| = y \ge 1$; and $d(0,0) = 0 < 1$. [L1, L5, L6]

2.1 Hence $B_X(0,1) = \{\, y \in X : d(0,y) < 1 \,\} = \{0\}$, since no $y \in [1,2]$ satisfies $d(0,y) < 1$; and $\bar B_X(0,1) = \{\, y \in X : d(0,y) \le 1 \,\} = \{0, 1\}$, since among the points of $[1,2]$ exactly $y = 1$ satisfies $y \le 1$. [step 1.1, L2, L5, L6]

2.2 The set $[1,2] = X \setminus \{0\}$ is open in $X$: for $y \in [1,2]$ the ball $B_X(y,1)$ cannot contain $0$, because $d(0,y) \ge 1$ by step 1.1, so $B_X(y,1) \subseteq [1,2]$. Therefore $\{0\}$ is closed in $X$. [step 1.1, L2, L3]

3.1 Since $\{0\}$ is closed it equals its own closure, so $\overline{B_X(0,1)} = \overline{\{0\}} = \{0\}$, whereas $\bar B_X(0,1) = \{0,1\}$ contains the point $1 \ne 0$. [step 2.1, step 2.2, L4, L5]

4.1 The two sets are therefore different, and $(X,d)$ with $x = 0$, $r = 1$ refutes the claim: the closure of an open ball can be a proper subset of the closed ball of the same centre and radius. [step 3.1] ∎

## Remarks

- **Nothing pathological is used.** $X$ is an unremarkable bounded subset of the
  real line and the metric is the one inherited from $\mathbb{R}$; the only
  feature exploited is that $X$ has a gap, so that the point $1$ of the closed
  ball cannot be approached from inside $B_X(0,1)$.
- **A starker version lives in the discrete metric** ([[ex-discrete-metric]]) on
  a set with at least two points, where $\overline{B(p,1)} = \{p\}$ while
  $\bar B(p,1)$ is the entire space; the two witnesses refute the claim in the
  same way, at different scales.
- **The equality does hold in $\mathbb{R}^n$ with any of $d_1$, $d_2$,
  $d_\infty$**, which is where the false intuition comes from. This library does
  not prove it, and neither [[lem-metrics-on-rn]] nor [[ex-p-metrics-on-rn]]
  contains it; the usual argument runs along the segment from the centre to the
  point in question, and no such segment need exist in a general metric space.
