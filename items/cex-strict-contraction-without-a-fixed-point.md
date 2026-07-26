---
id: cex-strict-contraction-without-a-fixed-point
kind: counterexample
title: "$x \\mapsto x + 1/x$ on $[1,\\infty)$ strictly decreases every distance and has no fixed point"
status: published
origin: session
deps: [fs-strict-contraction-has-a-fixed-point, thm-banach-fixed-point,
       def-lipschitz-holder-contraction, def-complete-metric-space, thm-of-archimedean,
       lem-of-inverse-positive, thm-complete-subspace-iff-closed,
       lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       thm-euclidean-space-complete, def-interval, thm-metric-sequential-closure,
       lem-limit-preserves-order, def-metric-space, lem-of-abs-value, lem-of-sign-rules,
       def-metric-topology, def-metric-convergence, cor-archimedean-reciprocal,
       lem-of-naturals-positive, def-metric-uniform-continuity]
justified_by: []
aliases: []
landmark: true
short: "strict contraction, no fixed point"
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
    - title: "Banach fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_fixed-point_theorem"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a self-map $f$ of a nonempty complete metric space with
$d(f(x),f(y)) < d(x,y)$ for all $x \ne y$ has a fixed point; equivalently, the
contraction hypothesis of [[thm-banach-fixed-point]] may be weakened to that
pointwise strict inequality ([[fs-strict-contraction-has-a-fixed-point]]).

Let $X := [1,\infty) \subseteq \mathbb{R}$ ([[def-interval]]) carry the metric
$d(x,y) := |x-y|$ inherited from the real line
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]) and
let

$$f(x) := x + \frac{1}{x} \qquad (x \in X).$$

Then $(X,d)$ is nonempty and complete, $f$ maps $X$ into $X$,
$d(f(x),f(y)) < d(x,y)$ whenever $x \ne y$, and $f$ has no fixed point.
Moreover $f$ is **not** a contraction
([[def-lipschitz-holder-contraction]]): no real $q < 1$ satisfies
$d(f(x),f(y)) \le q\,d(x,y)$ for all $x,y \in X$.

## Facts & Assumptions

**Given:** The interval $X = [1,\infty)$ with the metric $d$ inherited from $\mathbb{R}$; the map $f(x) = x + 1/x$; a natural $n \ge 1$; a real $q$ with $0 \le q < 1$.

[L1] The absolute value makes $\mathbb{R}$ a metric space, a restriction of a metric is a metric, and $|uv| = |u||v|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] $\mathbb{R}$ is complete; a closed subset of a complete metric space is complete; a subset is closed exactly when it is sequentially closed; and limits preserve non-strict inequalities ([[thm-euclidean-space-complete]], [[thm-complete-subspace-iff-closed]], [[thm-metric-sequential-closure]], [[lem-limit-preserves-order]], [[def-metric-topology]], [[def-metric-convergence]], [[def-complete-metric-space]]).

[L3] Positivity of inverses, reversal of order under reciprocation, and multiplication of inequalities by positives ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L4] Archimedean property and its reciprocal form: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; and positive naturals sit in $\mathbb{R}$ in their own order ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]]).

[L5] Contraction: Lipschitz with a single constant $q$ satisfying $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

## Counterexample

**Proof technique:** direct.

1.1 $X$ is nonempty ($1 \in X$) and sequentially closed in $\mathbb{R}$, since a sequence in $X$ converging to a real $p$ has $x_k \ge 1$ for every $k$ and hence $p \ge 1$; so $X$ is closed in $\mathbb{R}$, and $\mathbb{R}$ being complete, $(X,d)$ is a nonempty complete metric space. [L1, L2]

1.2 $f$ maps $X$ into $X$: $x \ge 1$ gives $1/x > 0$, so $f(x) = x + 1/x > x \ge 1$. [L3]

1.3 For $x,y \in X$: $f(x) - f(y) = (x-y) + \big(1/x - 1/y\big) = (x-y) - \dfrac{x-y}{xy} = (x-y)\Big(1 - \dfrac{1}{xy}\Big)$. [L3]

2.1 Let $x,y \in X$ with $x \ne y$. Then $x,y \ge 1$ and they are not both $1$, so $xy > 1$, hence $0 < 1/(xy) < 1$ and $0 < 1 - 1/(xy) < 1$; therefore $d(f(x),f(y)) = |x-y| \cdot \big(1 - 1/(xy)\big) < |x-y| = d(x,y)$. [step 1.2, step 1.3, L1, L3]

2.2 $f$ has no fixed point: $f(x) - x = 1/x > 0$ for every $x \in X$, so $f(x) \ne x$. [step 1.2, L3]

3.1 $f$ is not a contraction. Suppose $0 \le q < 1$ satisfied $d(f(x),f(y)) \le q\,d(x,y)$ for all $x,y \in X$. Taking $x := n+1$ and $y := n$ for a natural $n \ge 1$ gives $|x - y| = 1$ and, by step 1.3, $d(f(x),f(y)) = 1 - \dfrac{1}{n(n+1)}$, so $1 - \dfrac{1}{n(n+1)} \le q$, that is $1 - q \le \dfrac{1}{n(n+1)} \le \dfrac{1}{n}$. [step 1.3, step 2.1, L1, L3, L4]

4.1 But $1 - q > 0$, so [L4] supplies a natural $n \ge 1$ with $1/n < 1-q$, contradicting step 3.1. Hence no such $q$ exists. [step 3.1, L4]

5.1 So $(X,d)$ is nonempty and complete, $f : X \to X$ strictly decreases every distance between distinct points, $f$ has no fixed point, and $f$ is not a contraction; this refutes the claim above and shows that the gap between the two hypotheses is real. [step 1.1, step 1.2, step 2.1, step 2.2, step 4.1] ∎

## Remarks

- **The two hypotheses differ by a quantifier, and step 3.1 measures the gap.** The shrinking factor at the pair $(n+1, n)$ is $1 - 1/(n(n+1))$, which is below $1$ for every $n$ and approaches $1$ as $n$ grows; the contraction condition asks for a single bound below $1$ covering all pairs at once, and that is exactly what fails. The same quantifier move separates continuity from uniform continuity ([[def-metric-uniform-continuity]]).
- **Why the iterates do not help.** Starting anywhere in $[1,\infty)$, the iterates increase, since $f(x) > x$, and they run off to the right; there is no Cauchy sequence to complete, so completeness of $X$ is no help at all. This is the opposite failure mode to [[cex-contraction-on-an-incomplete-space]], where the iterates *are* Cauchy and the space is missing their limit.
- **Unboundedness is essential to the example, not to the phenomenon as stated here.** What this item establishes is only that completeness plus the strict inequality is not enough. It makes no claim about what additional hypothesis would suffice; the classical repair uses compactness, which is a later page of this library.
