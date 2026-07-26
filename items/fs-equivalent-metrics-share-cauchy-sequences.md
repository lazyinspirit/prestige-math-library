---
id: fs-equivalent-metrics-share-cauchy-sequences
kind: false-statement
title: "FALSE: two metrics inducing the same topology have the same Cauchy sequences"
status: draft
origin: session
deps: [def-equivalent-metrics, def-cauchy-in-metric, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, cor-archimedean-reciprocal,
       lem-of-inverse-positive, def-metric-topology, def-metric-ball, def-interval,
       thm-of-archimedean, def-metric-space, lem-of-abs-value, lem-finite-set-has-max,
       def-max-min, lem-of-sign-rules, lem-rat-embeds-dense,
       def-metric-uniform-continuity, thm-uniform-continuity-preserves-cauchy]
justified_by: []
forward_refs: [cex-same-topology-different-cauchy-sequences]
aliases: []
landmark: true
short: "FALSE: same topology, same Cauchy sequences"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Statement

**The following statement is FALSE.**

> Let $d$ and $d'$ be topologically equivalent metrics on a set $X$, that is
> $\mathcal{T}_d = \mathcal{T}_{d'}$ ([[def-equivalent-metrics]],
> [[def-metric-topology]]). Then a sequence in $X$ is Cauchy for $d$ if and only
> if it is Cauchy for $d'$ ([[def-cauchy-in-metric]]).

The claim is plausible because *convergence* really is determined by the topology
([[def-metric-convergence]]); the mistake is to extend that to Cauchyness, which
is not a topological notion.

## Facts & Assumptions

**Given:** The set $X := (0,\infty) \subseteq \mathbb{R}$ ([[def-interval]]), the metrics $d(x,y) := |x - y|$ and $d'(x,y) := |1/x - 1/y|$ on it, a point $a \in X$, and reals $r, s > 0$.

[A1] The false claim: topologically equivalent metrics have the same Cauchy sequences.

[L1] The absolute value makes $\mathbb{R}$ a metric space; a restriction of a metric to a subset is a metric; and $|uv| = |u|\,|v|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] For $x, a > 0$: $1/x - 1/a = (a-x)/(xa)$, so $|x - a| = |1/x - 1/a| \cdot x a$ and $|1/x - 1/a| = |x-a|/(xa)$; reciprocation is strictly decreasing on the positives, hence injective there ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L3] Open sets are those in which every point has a ball inside the set; a set is open exactly when it is a union of balls around its points ([[def-metric-topology]], [[def-metric-ball]]).

[L4] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Two reals have a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Cauchyness may be tested with real $\varepsilon > 0$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

## Refutation

**Proof technique:** direct.

1.1 $d$ is a metric on $X$, being the restriction of the usual metric of $\mathbb{R}$; and $d'$ is a metric on $X$, since symmetry and the triangle inequality are inherited from the absolute value applied to the reals $1/x$, while $d'(x,y) = 0$ forces $1/x = 1/y$ and hence $x = y$ by injectivity of reciprocation on the positives. [L1, L2]

1.2 Given $a \in X$ and a real $r > 0$, put $s := \min\{1/(2a),\, r/(4a^2)\} > 0$. If $d'(x,a) < s$ then $|1/x - 1/a| < 1/(2a)$, so $1/x > 1/a - 1/(2a) = 1/(2a)$ and hence $x < 2a$; therefore $|x - a| = |1/x - 1/a| \cdot xa < s \cdot 2a \cdot a = 2a^2 s \le r/2 < r$. So $B_{d'}(a,s) \subseteq B_d(a,r)$. [L1, L2, L5]

1.3 Given $a \in X$ and a real $s > 0$, put $r := \min\{a/2,\, s a^2/4\} > 0$. If $d(x,a) < r$ then $|x-a| < a/2$, so $x > a/2$ and hence $|1/x - 1/a| = |x-a|/(xa) < r/((a/2)\,a) = 2r/a^2 \le s/2 < s$. So $B_d(a,r) \subseteq B_{d'}(a,s)$. [L1, L2, L5]

1.4 Put $x_k := 1/(k+2)$, a sequence in $X$ since $k+2 \ge 2 > 0$. Given a real $\varepsilon > 0$, [L4] gives $N \ge 1$ with $1/N < \varepsilon/2$, and for $k,l \ge N$ we have $1/(k+2) < 1/N$ and $1/(l+2) < 1/N$, so $d(x_k,x_l) \le 1/(k+2) + 1/(l+2) < 2/N < \varepsilon$. Hence $(x_k)$ is $d$-Cauchy. [L1, L4, L6]

2.1 Hence $\mathcal{T}_d = \mathcal{T}_{d'}$: if $U$ is $d$-open and $a \in U$, take $r$ with $B_d(a,r) \subseteq U$ and then $s$ as in step 1.2, so $B_{d'}(a,s) \subseteq U$ and $U$ is $d'$-open; the converse uses step 1.3 in the same way. So $d$ and $d'$ are topologically equivalent. [step 1.2, step 1.3, L3]

2.2 But $(x_k)$ is not $d'$-Cauchy: $d'(x_k,x_l) = |(k+2) - (l+2)| = |k - l|$, so for every $K$ the indices $k = K$ and $l = K+1$ give $d'(x_k,x_l) = 1$, and the Cauchy condition fails at $\varepsilon = 1$. [step 1.4, L1, L2, L6]

3.1 So $d$ and $d'$ are topologically equivalent metrics on $X$ with a sequence that is $d$-Cauchy and not $d'$-Cauchy, which refutes [A1]. The displayed statement is false. [step 2.1, step 1.4, step 2.2, A1] ∎

## Remarks

- **What is true instead.** Uniformly equivalent metrics do share their Cauchy sequences, and the reason is one line: uniform equivalence says both identity maps are uniformly continuous ([[def-equivalent-metrics]], [[def-metric-uniform-continuity]]), and a uniformly continuous map sends Cauchy sequences to Cauchy sequences ([[thm-uniform-continuity-preserves-cauchy]]). So the pair above is also a witness that topological equivalence does not imply uniform equivalence.
- **The failure is symmetric.** The sequence $y_k := k+2$ is $d'$-Cauchy, because $d'(y_k,y_l) = |1/(k+2) - 1/(l+2)|$ is small for large indices by the same computation as step 1.4, and it is not $d$-Cauchy, because $d(y_K,y_{K+1}) = 1$ for every $K$. So neither metric's Cauchy sequences contain the other's.
- **Consequences for completeness.** Since Cauchyness is not shared, completeness is not shared either ([[fs-completeness-is-a-topological-property]]). The two failures are the same failure seen twice.
- **The worked witness**, with both directions of the Cauchy comparison, is [[cex-same-topology-different-cauchy-sequences]] on the companion page.
