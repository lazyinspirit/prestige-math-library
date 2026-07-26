---
id: fs-cauchy-implies-convergent-in-every-metric-space
kind: false-statement
title: "FALSE: every Cauchy sequence in a metric space converges"
status: published
origin: session
deps: [def-cauchy-in-metric, def-complete-metric-space, lem-metric-convergent-implies-cauchy,
       lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding,
       cor-archimedean-reciprocal, def-metric-convergence, lem-metric-limits-unique,
       def-interval, lem-of-inverse-positive, def-metric-space, thm-of-archimedean,
       lem-rat-embeds-dense, def-sequence, thm-cauchy-criterion-via-lub,
       thm-metric-completion-exists, thm-complete-subspace-iff-closed,
       thm-euclidean-space-complete]
justified_by: []
aliases: []
landmark: true
short: "FALSE: every Cauchy sequence converges"
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
pipeline_run: null
---

## Statement

**The following statement is FALSE.**

> Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $(x_k)$ be a Cauchy
> sequence in it ([[def-cauchy-in-metric]]). Then $(x_k)$ converges to a point of
> $X$ ([[def-metric-convergence]]).

Equivalently: every metric space is complete
([[def-complete-metric-space]]), so that the word *complete* is redundant.

This is the error that the whole page exists to guard against. It is encouraged
by the Cauchy criterion on the real line ([[thm-cauchy-criterion-via-lub]]),
which is a theorem about $\mathbb{R}$ and not about metric spaces.

## Facts & Assumptions

**Given:** The open interval $X := (0,1) \subseteq \mathbb{R}$ ([[def-interval]]) with the metric $d(x,y) := |x-y|$ inherited from $\mathbb{R}$; the sequence $x_k := 1/(k+2)$ for $k \in \mathbb{N}$; a real $\varepsilon > 0$.

[A1] The false claim: every Cauchy sequence in every metric space converges in that space.

[L1] The absolute value makes $\mathbb{R}$ a metric space, and the restriction of a metric to a subset is a metric on that subset, with the same distances ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]]).

[L2] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$; and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L3] A convergent sequence in a metric space is Cauchy ([[lem-metric-convergent-implies-cauchy]]), and Cauchyness and convergence may be tested with real $\varepsilon > 0$ ([[def-cauchy-in-metric]], [[def-metric-convergence]], [[lem-rat-embeds-dense]]).

[L4] Limits in a metric space are unique ([[lem-metric-limits-unique]]).

## Refutation

**Proof technique:** direct.

1.1 Every term lies in $X$: $k + 2 \ge 2 > 0$ gives $x_k = 1/(k+2) > 0$, and $k+2 \ge 2$ gives $x_k \le 1/2 < 1$. So $(x_k)$ is a sequence in $X$, and $d$ is a metric on $X$. [L1, L2]

1.2 $x_k \to 0$ in $(\mathbb{R}, |\cdot|)$: given a real $\varepsilon > 0$, [L2] supplies $N \ge 1$ with $1/N < \varepsilon$, and for $k \ge N$ we have $k + 2 > N$, hence $|x_k - 0| = 1/(k+2) < 1/N < \varepsilon$. [L1, L2, L3]

2.1 Hence $(x_k)$ is Cauchy in $(\mathbb{R}, |\cdot|)$, and since $d$ is the restriction of the metric of $\mathbb{R}$ and all terms lie in $X$, the same indices witness that $(x_k)$ is Cauchy in $(X,d)$. [step 1.1, step 1.2, L1, L3]

2.2 Suppose $(x_k)$ converged in $(X,d)$ to some $p \in X$. Distances in $(X,d)$ are distances in $\mathbb{R}$, so $x_k \to p$ in $(\mathbb{R},|\cdot|)$ as well; with step 1.2 and uniqueness of limits in $\mathbb{R}$ this forces $p = 0$. [step 1.2, L1, L4]

3.1 But $0 \notin X$, since $X = (0,1)$ contains only reals $> 0$. So $(x_k)$ has no limit in $(X,d)$. [step 1.1, step 2.2]

4.1 Therefore $(X,d)$ is a metric space carrying a Cauchy sequence that does not converge in it, which refutes [A1]; the displayed statement is false, and $(0,1)$ is not complete. [step 2.1, step 3.1, A1] ∎

## Remarks

- **The sequence starts at $k = 0$ and the index is $k+2$, not $k$.** In this library $\mathbb{N}$ contains $0$ ([[def-sequence]]), so $1/k$ is undefined at $k = 0$ and $1/(k+1)$ equals $1$ at $k = 0$, which is not in $(0,1)$. The shift to $k+2$ is what puts every term inside the interval, and a version of this example copied from a text that indexes from $1$ has to be reindexed.
- **Nothing is wrong with the sequence; the space is missing a point.** The same sequence converges perfectly well in $\mathbb{R}$, and in $[0,1)$, and in $[0,1]$. Cauchyness is a property of the sequence alone ([[def-cauchy-in-metric]]); whether the destination exists is a property of the space, and that is exactly the asymmetry that [[def-complete-metric-space]] names.
- **The witness is not exotic.** $(0,1)$ is an open interval of the real line with its ordinary metric, and what it lacks is not structure but the endpoint $0$ that its own Cauchy sequence was heading for. The systematic version of this observation is [[thm-complete-subspace-iff-closed]]: $(0,1)$ is not closed in $\mathbb{R}$, so it cannot be complete.
- **The remedy is the completion.** Every metric space, this one included, sits densely and isometrically inside a complete one ([[thm-metric-completion-exists]]); for $(0,1)$ that completion is $[0,1]$, which is complete as a closed subset of the complete space $\mathbb{R}$ ([[thm-complete-subspace-iff-closed]], [[thm-euclidean-space-complete]]) and contains $(0,1)$ densely, since every point of $[0,1]$ is at distance less than any given positive real from a point of $(0,1)$.
