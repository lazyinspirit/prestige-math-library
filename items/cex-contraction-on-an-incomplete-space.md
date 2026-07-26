---
id: cex-contraction-on-an-incomplete-space
kind: counterexample
title: "$x \\mapsto x/2$ maps $(0,1]$ into itself, is a $1/2$-contraction, and has no fixed point"
status: draft
origin: session
deps: [thm-banach-fixed-point, def-complete-metric-space, def-lipschitz-holder-contraction,
       def-interval, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       def-cauchy-in-metric, lem-metric-convergent-implies-cauchy,
       lem-metric-limits-unique, cor-archimedean-reciprocal, lem-of-inverse-positive,
       def-metric-space, def-metric-convergence, thm-of-archimedean, lem-of-abs-value,
       lem-rat-embeds-dense, thm-complete-subspace-iff-closed, thm-euclidean-space-complete]
justified_by: []
aliases: []
landmark: true
short: "contraction with no fixed point"
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
    - title: "Banach fixed-point theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach_fixed-point_theorem"
    - title: "Contraction mapping (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Contraction_mapping"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the completeness hypothesis in Banach's fixed point theorem
([[thm-banach-fixed-point]]) may be dropped; a contraction of a nonempty metric
space into itself always has a fixed point.

Let $X := (0,1] \subseteq \mathbb{R}$ ([[def-interval]]) carry the metric
$d(x,y) := |x-y|$ inherited from the real line
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and
let $f : X \to X$ be $f(x) := x/2$. Then $X$ is nonempty, $f$ maps $X$ into
itself and is a contraction with constant $1/2$
([[def-lipschitz-holder-contraction]]), and $f$ has **no** fixed point in $X$.
The single hypothesis of [[thm-banach-fixed-point]] that fails is completeness
([[def-complete-metric-space]]), and it does fail.

## Facts & Assumptions

**Given:** The interval $X = (0,1]$ with the metric $d$ inherited from $\mathbb{R}$; the map $f(x) = x/2$; the sequence $x_k := 1/(k+2)$; a real $\varepsilon > 0$.

[L1] The absolute value makes $\mathbb{R}$ a metric space, and a restriction of a metric to a subset is a metric with the same distances ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$; and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L3] A convergent sequence in a metric space is Cauchy, limits are unique, and both notions may be tested with real $\varepsilon > 0$ ([[lem-metric-convergent-implies-cauchy]], [[lem-metric-limits-unique]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L4] Contraction: Lipschitz with a constant $q$ satisfying $0 \le q < 1$ ([[def-lipschitz-holder-contraction]]).

## Counterexample

**Proof technique:** direct.

1.1 $X$ is nonempty, since $1 \in X$. [L1]

1.2 $f$ maps $X$ into $X$: for $0 < x \le 1$ one has $0 < x/2 \le 1/2 \le 1$. [L1, L2]

1.3 $f$ is a contraction with constant $1/2$: $d(f(x),f(y)) = |x/2 - y/2| = \tfrac12|x-y| = \tfrac12 d(x,y)$ for all $x,y \in X$, and $0 \le 1/2 < 1$. [L1, L4]

1.4 Every term of $(x_k)$ lies in $X$, since $k+2 \ge 2$ gives $0 < 1/(k+2) \le 1/2 \le 1$; and $x_k \to 0$ in $\mathbb{R}$, because for a real $\varepsilon > 0$ and $N \ge 1$ with $1/N < \varepsilon$ every $k \ge N$ has $k+2 > N$ and hence $|x_k - 0| = 1/(k+2) < 1/N < \varepsilon$. [L1, L2, L3]

2.1 $f$ has no fixed point in $X$: $f(x) = x$ means $x/2 = x$, hence $x = 0$, and $0 \notin X$. [step 1.2, L1]

2.2 So $(x_k)$ is Cauchy in $\mathbb{R}$, hence Cauchy in $(X,d)$, the distances being the same; and it has no limit in $X$, since a limit $p \in X$ would also be a limit in $\mathbb{R}$ and uniqueness of limits there would force $p = 0 \notin X$. Hence $(X,d)$ is not complete. [step 1.4, L1, L3]

3.1 Therefore $X$ is a nonempty metric space and $f$ a contraction of it into itself with no fixed point, so the completeness hypothesis of [[thm-banach-fixed-point]] cannot be dropped. [step 1.1, step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **The missing point is exactly the fixed point.** In $\mathbb{R}$ the map $x \mapsto x/2$ has the fixed point $0$, and the iterates $x_n = x_0/2^{\,n}$ from any starting point in $(0,1]$ converge to $0$. They are Cauchy in $(0,1]$, as Banach's proof guarantees, and the space simply has nowhere to put their limit. So the theorem's proof runs correctly up to the last step, and completeness is precisely what that last step needs.
- **Closedness would fix it.** $[0,1]$ is closed in $\mathbb{R}$, hence complete ([[thm-complete-subspace-iff-closed]], [[thm-euclidean-space-complete]]), and the same map on it has the fixed point $0$. This is the usual way the hypothesis is met in practice.
- **Every other hypothesis is present**, which is what makes this a clean counterexample rather than a curiosity: $X$ is nonempty, $f$ maps $X$ into $X$, and the contraction constant $1/2$ is explicit and uniform.
