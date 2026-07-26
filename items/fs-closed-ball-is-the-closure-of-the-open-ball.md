---
id: fs-closed-ball-is-the-closure-of-the-open-ball
kind: false-statement
title: "FALSE: in every metric space the closure of $B(x,r)$ is the closed ball of radius $r$"
status: published
origin: session
deps: [thm-metric-closure-characterisation, def-metric-ball, thm-metric-open-set-algebra,
       def-metric-space, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       def-interval, def-metric-topology, def-metric-interior-closure-boundary,
       def-abs-value, lem-of-abs-value, cor-of-one-positive, def-ordered-field,
       def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "closure of a ball is not the closed ball"
proof_strategy: direct
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
pipeline_run: null
---

## Statement

**False claim:** for every metric space $(X,d)$, every $x \in X$ and every real
$r > 0$,

$$\overline{B(x,r)} = \bar B(x,r),$$

that is, the closure of the open ball ([[def-metric-interior-closure-boundary]])
is the closed ball of the same centre and radius ([[def-metric-ball]]).

One inclusion is a theorem and the other is false. The names *open ball* and
*closed ball* do not by themselves license the equality, and the intuition
behind it comes from $\mathbb{R}^n$ with a Euclidean metric, where it happens to
be true; it fails already in a two-point subspace of the real line.

## Facts & Assumptions

**Given:** The real line with its usual metric $d_{\mathbb{R}}(u,v) = |u-v|$ ([[lem-real-line-is-a-metric-space]]); the subset $X := \{0\} \cup [1,2] \subseteq \mathbb{R}$ with the subspace metric $d := d_{\mathbb{R}} \restriction (X \times X)$ ([[def-isometry-and-metric-embedding]], [[def-interval]]); an arbitrary metric space $(X_0, d_0)$ with $x \in X_0$ and a real $r > 0$.

[L1] The closed ball $\bar B(x,r)$ is a closed set, and it contains $B(x,r)$ ([[thm-metric-open-set-algebra]], [[def-metric-ball]]).

[L2] The closure of a set is the smallest closed superset of it, and a closed set equals its own closure ([[thm-metric-closure-characterisation]]).

[L3] The subspace metric makes $X$ a metric space and its balls are traces: $B_X(a,s) = B_{\mathbb{R}}(a,s) \cap X$ ([[def-isometry-and-metric-embedding]], [[def-metric-space]], [[def-metric-ball]]).

[L4] Absolute value and order: $|u| = u$ when $u \ge 0$, $|-u| = |u|$, and $0 < 1$; and by trichotomy $u \ge 1$ rules out $u < 1$ ([[def-abs-value]], [[lem-of-abs-value]], [[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L5] Open sets of a metric space: $U$ is open when every point of $U$ has a ball around it inside $U$; a set is closed when its complement is open ([[def-metric-topology]]).

## Refutation

**Proof technique:** direct.

1.1 The inclusion that does hold, in every metric space: $\bar B(x,r)$ is closed and contains $B(x,r)$, so the smallest closed superset of $B(x,r)$ satisfies $\overline{B(x,r)} \subseteq \bar B(x,r)$. [L1, L2]

1.2 In the witness $X = \{0\} \cup [1,2]$, every $y \in [1,2]$ satisfies $y \ge 1$, hence $d(0,y) = |0 - y| = |{-y}| = y \ge 1$; and $d(0,0) = 0 < 1$. [given, L3, L4]

2.1 Therefore $B_X(0,1) = \{\, y \in X : d(0,y) < 1 \,\} = \{0\}$ and $\bar B_X(0,1) = \{\, y \in X : d(0,y) \le 1 \,\} = \{0, 1\}$, since $1 \in [1,2] \subseteq X$ has $d(0,1) = 1$ while every other $y \in [1,2]$ has $d(0,y) = y > 1$ or $y = 1$. [step 1.2, L3, L4]

2.2 The set $[1,2] = X \setminus \{0\}$ is open in $X$: for $y \in [1,2]$ the ball $B_X(y,1)$ omits $0$, because $d(0,y) \ge 1$ by step 1.2, so $B_X(y,1) \subseteq X \setminus \{0\} = [1,2]$. Hence $\{0\}$ is closed in $X$. [step 1.2, L3, L5]

3.1 Since $\{0\}$ is closed it equals its own closure, so $\overline{B_X(0,1)} = \overline{\{0\}} = \{0\}$ by step 2.1, while $\bar B_X(0,1) = \{0,1\}$; and $\{0\} \ne \{0,1\}$ because $1 \ne 0$. [step 2.1, step 2.2, L2, L4]

4.1 The witness $(X, d)$ with $x = 0$ and $r = 1$ therefore refutes the claim; all that survives in general is the inclusion of step 1.1, and it can be strict. [step 1.1, step 3.1] ∎

## Remarks

- **Where the intuition comes from and why it does not transfer.** In
  $\mathbb{R}^n$ with the Euclidean metric ([[lem-metrics-on-rn]]) the segment
  from the centre to a point of the closed ball lies in the space, and running
  along it approaches that point from inside the open ball; that is the usual
  route to the equality there, and this library does not prove it. A metric space
  need not contain
  any such segment: in the witness above, nothing of $X$ lies strictly between
  $0$ and $1$, so the point $1$ of the closed ball is not approached from inside
  $B(0,1) = \{0\}$ at all.
- **The failure is not exotic.** A discrete metric on a set with at least two
  points produces the same phenomenon in a starker form, with
  $\overline{B(p,1)} = \{p\}$ and $\bar B(p,1)$ the whole space; the companion
  page carries both witnesses.
- **The sphere is not the boundary of the ball either**, and that failure is
  recorded separately on the companion page.
