---
id: cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous
kind: counterexample
title: "Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit"
status: published
origin: session
deps: [def-topology-of-pointwise-convergence, lem-convergence-in-the-pointwise-topology,
       thm-uniform-limit-theorem, def-continuous-map-top, def-metric-continuity,
       lem-continuity-is-local-and-pastes, def-interval, lem-real-line-is-a-metric-space,
       def-metrizable-space, def-canonical-natural, cor-archimedean-reciprocal,
       def-max-min, lem-finite-set-has-max, def-metric-ball, def-metric-topology,
       def-isometry-and-metric-embedding, def-lipschitz-holder-contraction,
       thm-metric-regularity-hierarchy, lem-of-naturals-positive,
       lem-of-inverse-positive, def-abs-value, def-sequence-convergence-top,
       def-metric-space, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
short: "pointwise limit of continuous need not be continuous"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Pointwise convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pointwise_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for a topological space $X$ and a metric space $Y$ the set
$C(X,Y)$ is closed in $Y^{X}$ for the topology of pointwise convergence
([[def-topology-of-pointwise-convergence]]); equivalently, a pointwise limit of
continuous functions is continuous.

The witness is the sequence of **ramps** on $I := [0,1]$. With
$a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so that $0 < a_k \le 1/2$,
define $r_k : I \to \mathbb{R}$ by

$$r_k(t) := 0 \ \ (0 \le t \le 1 - a_k), \qquad r_k(t) := \frac{t - (1-a_k)}{a_k} \ \ (1 - a_k \le t \le 1) .$$

Each $r_k$ is continuous, the sequence $(r_k)$ converges pointwise to the
indicator function

$$\chi(t) := 0 \ (t < 1), \qquad \chi(1) := 1 ,$$

and $\chi$ is not continuous at $1$. So $C(I,\mathbb{R})$ is not closed in
$\mathbb{R}^{I}$ for the topology of pointwise convergence.

**The sequence is moreover pointwise nonincreasing**, $r_{k+1}(t) \le r_k(t)$ for
every $t \in I$ and every $k \in \mathbb{N}$ (step 2.2 below). That is recorded
here because it is the configuration Dini's theorem rules out on a compact domain
*when the limit is continuous*; here the limit is not continuous, and the
conclusion of Dini's theorem fails.

**This is exactly what the uniform topology repairs.** For the uniform metric
$C(X,Y)$ *is* closed ([[thm-uniform-limit-theorem]], claim 3), so the convergence
above cannot be uniform, and it is not: the ramps stay at distance $1$ from
$\chi$ in the sense that $r_k(1-a_k) = 0$ while $\chi$ jumps to $1$ arbitrarily
close by.

## Facts & Assumptions

**Given:** $I = [0,1]$ with the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the target $\mathbb{R}$ with the same metric, the reals $a_k = 1/\iota(k+2)$, the ramps $r_k$ and the indicator $\chi$ displayed above.

[L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_k \le 1/\iota(2) = 1/2$ and $1/2 \le 1 - a_k < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$ ([[cor-archimedean-reciprocal]]).

[L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and the restriction of a continuous map to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-isometry-and-metric-embedding]], [[def-metrizable-space]]).

[L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

[L5] A sequence converges in the topology of pointwise convergence exactly when it converges at every point ([[lem-convergence-in-the-pointwise-topology]], [[def-sequence-convergence-top]]).

[L6] $h : I \to \mathbb{R}$ is continuous at $a$ exactly when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|h(t)-h(a)| < \varepsilon$ whenever $t \in I$ and $|t-a| < \delta$ ([[def-metric-continuity]], [[def-metrizable-space]], [[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

[L7] A two-element set of reals has a maximum and a minimum, each of which is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

## Counterexample

**Proof technique:** direct.

1.1 The two formulas for $r_k$ agree at $t = 1 - a_k$, both giving $0$, and the closed sets $[0,1-a_k]$ and $[1-a_k,1]$ cover $I$ because $0 < 1 - a_k < 1$; each restriction is the restriction of an affine map of $\mathbb{R}$, hence continuous, so $r_k$ is a well-defined continuous function on $I$. [L1, L3, L4]

1.2 $r_k(1) = (1 - (1-a_k))/a_k = 1$ for every $k$. [L1]

1.3 Let $t \in I$ with $t < 1$; by [L2] there is a natural $m \ge 1$ with $1/\iota(m) < 1 - t$, and then every $k \ge m$ has $a_k = 1/\iota(k+2) \le 1/\iota(m) < 1 - t$, hence $t < 1 - a_k$ and $r_k(t) = 0$. [L1, L2]

1.4 $\chi$ is not continuous at $1$: take $\varepsilon := 1/2$ and let $\delta > 0$ be any real; put $s := \max\{1 - \delta/2,\ 1/2\}$, which lies in $I$ and satisfies $s < 1$, both candidates being below $1$, and satisfies $|s-1| < \delta$, since $s = 1 - \delta/2$ gives $|s-1| = \delta/2 < \delta$ while $s = 1/2$ occurs only when $1 - \delta/2 < 1/2$, that is $\delta > 1$, and then $|s-1| = 1/2 < 1 < \delta$; yet $|\chi(s) - \chi(1)| = |0 - 1| = 1$, which is not below $1/2$. [L6, L7]

2.1 $(r_k)$ is pointwise nonincreasing: for $t \le 1 - a_{k+1}$ one has $r_{k+1}(t) = 0 \le r_k(t)$, the values of $r_k$ being nonnegative; and for $t > 1 - a_{k+1}$, which forces $t > 1 - a_k$ since $a_{k+1} < a_k$, writing $u := 1 - t$ with $0 < u < a_{k+1}$ gives $r_k(t) = 1 - u/a_k$ and $r_{k+1}(t) = 1 - u/a_{k+1}$, and $a_{k+1} < a_k$ gives $u/a_k \le u/a_{k+1}$, hence $r_{k+1}(t) \le r_k(t)$. [step 1.1, L1]

2.2 By steps 1.2 and 1.3 the sequence $(r_k(t))$ is eventually equal to $\chi(t)$ for every $t \in I$, so $r_k(t) \to \chi(t)$ for every $t$, and therefore $r_k \to \chi$ in the topology of pointwise convergence on $\mathbb{R}^{I}$. [step 1.2, step 1.3, L5]

3.1 So $\chi \notin C(I,\mathbb{R})$ although $\chi$ is a limit in the topology of pointwise convergence of a sequence in $C(I,\mathbb{R})$; hence $C(I,\mathbb{R})$ is not closed in that topology, and the claim is false. [step 1.1, step 2.2, step 1.4] ∎

## Remarks

- **Monotonicity is not what fails.** Step 2.1 shows the ramps decrease pointwise to $\chi$ on the compact domain $I$, with every $r_k$ continuous; the only hypothesis of Dini's theorem that is missing is continuity of the limit, and its conclusion, uniform convergence, fails. The last example on this page uses this family for exactly that contrast.

- **Closedness in the pointwise topology is not a mild question.** The set $C(I,\mathbb{R})$ is in fact *dense* in $\mathbb{R}^{I}$ for the topology of pointwise convergence, since a basic neighbourhood constrains only finitely many values and any finite list of values is realised by a continuous function. Nothing above needs that, and it is not proved here.

- **What survives is the uniform statement.** Convergence in the uniform metric does force continuity of the limit ([[thm-uniform-limit-theorem]]), so the failure above is a failure of the *topology*, not of the limit operation: the same sequence, tested against a stronger notion of convergence, simply does not converge.
