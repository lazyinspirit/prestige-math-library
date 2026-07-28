---
id: ex-dini-on-the-unit-interval
kind: example
title: "Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous"
status: draft
origin: session
deps: [thm-dini, lem-uniform-convergence-in-the-uniform-metric,
       def-topology-of-uniform-convergence, def-metric-compactness, thm-heine-borel-rn,
       def-interval, lem-continuity-is-local-and-pastes, lem-real-line-is-a-metric-space,
       def-metrizable-space, thm-monotone-convergence, def-canonical-natural,
       cor-archimedean-reciprocal, def-max-min, lem-finite-set-has-max,
       cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous,
       def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy,
       def-metric-continuity, def-continuous-map-top, def-monotone-sequence,
       lem-of-naturals-positive, lem-of-inverse-positive, def-abs-value,
       def-isometry-and-metric-embedding, def-metric-space, def-subspace-topology-top,
       lem-uniform-metric-on-a-function-space, thm-uniform-limit-theorem]
justified_by: []
aliases: []
landmark: false
short: "Dini on $[0,1]$, and its failure"
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
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $I := [0,1]$ with the metric inherited from $\mathbb{R}$ and let
$a_k := 1/\iota(k+2)$ ([[def-canonical-natural]]), so $0 < a_k \le 1/2$ and
$1/2 \le 1 - a_k < 1$. Define the **clipped identities**

$$s_k(t) := t \ \ (0 \le t \le 1 - a_k), \qquad s_k(t) := 1 - a_k \ \ (1 - a_k \le t \le 1) .$$

Then:

1. each $s_k$ is continuous on the compact space $I$, and the sequence is
   **nondecreasing at every point**: $s_k(t) \le s_{k+1}(t)$;
2. $s_k(t) \to t$ for every $t \in I$, and the limit function
   $\mathrm{id}_I : t \mapsto t$ is continuous;
3. therefore Dini's theorem ([[thm-dini]]) applies and $(s_k)$ converges to
   $\mathrm{id}_I$ **uniformly** — which is confirmed by the direct estimate
   $|s_k(t) - t| \le a_k$ for every $t$.

**And the hypothesis that the limit is continuous cannot be dropped.** The ramps
$r_k$ of
[[cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous]] are
continuous on the same compact $I$ and pointwise *nonincreasing*, and they
converge pointwise to the indicator of $\{1\}$, which is not continuous; the
conclusion of Dini's theorem fails for them, since a uniform limit of continuous
functions would be continuous. So on a compact domain, with monotonicity and with
continuity of every term, continuity of the limit is exactly the missing
hypothesis, and it is not implied by the others.

## Facts & Assumptions

**Given:** $I = [0,1]$ with $d(s,t) = |s-t|$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]]), the reals $a_k = 1/\iota(k+2)$, the functions $s_k$ displayed above, and the identity $\mathrm{id}_I$ of $I$.

[L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_{k+1} \le a_k \le 1/2$ and $1/2 \le 1 - a_k \le 1 - a_{k+1} < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$ ([[cor-archimedean-reciprocal]]).

[L3] An affine map $t \mapsto ct + e$ of $\mathbb{R}$ is Lipschitz with constant $|c|$, hence continuous, and a restriction to a metric subspace is continuous ([[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[def-metric-continuity]], [[def-abs-value]], [[def-metrizable-space]], [[def-metric-space]]).

[L4] A function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]], claim 3, [[def-subspace-topology-top]], [[def-continuous-map-top]]).

[L5] $I$ is a compact metric space, being closed in $\mathbb{R}$ and bounded ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]]).

[L6] Dini's theorem: on a compact metric space a sequence of continuous real functions with $g_k \le g_{k+1}$ pointwise, converging pointwise to a continuous $g$, converges to $g$ uniformly ([[thm-dini]], [[def-monotone-sequence]], [[thm-monotone-convergence]]).

[L7] Uniform convergence, its identification with convergence in the uniform metric, and the uniform limit theorem: a uniform limit of continuous functions is continuous ([[def-topology-of-uniform-convergence]], [[lem-uniform-convergence-in-the-uniform-metric]], [[lem-uniform-metric-on-a-function-space]], [[thm-uniform-limit-theorem]], claim 2).

[L8] The ramps $r_k$ on $I$ are continuous, are pointwise nonincreasing, and converge pointwise to the indicator $\chi$ of $\{1\}$, which is not continuous ([[cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous]]).

[L9] The maximum and the minimum of a two-element set of reals exist and are among its elements ([[lem-finite-set-has-max]], [[def-max-min]]).

## Verification

**Proof technique:** direct.

1.1 The two formulas for $s_k$ agree at $t = 1 - a_k$, both giving $1 - a_k$, and the closed sets $[0,1-a_k]$ and $[1-a_k,1]$ cover $I$ since $0 < 1 - a_k < 1$; each restriction is the restriction of an affine map of $\mathbb{R}$, so $s_k$ is a well-defined continuous function on $I$. [L1, L3, L4]

1.2 $s_k(t) = \min\{t,\ 1-a_k\}$ for every $t \in I$: for $t \le 1-a_k$ the minimum is $t$, and for $t \ge 1-a_k$ it is $1-a_k$. [L1, L9]

2.1 $s_k(t) \le s_{k+1}(t)$ for every $t$ and $k$, since $1 - a_k \le 1 - a_{k+1}$ makes $\min\{t, 1-a_k\} \le \min\{t, 1-a_{k+1}\}$; with step 1.1 this is claim 1. [step 1.1, step 1.2, L1, L9]

2.2 $0 \le t - s_k(t) \le a_k$ for every $t \in I$: for $t \le 1-a_k$ the difference is $0$, and for $t > 1-a_k$ it is $t - (1-a_k) \le 1 - (1-a_k) = a_k$. [step 1.2, L1]

3.1 Let $\varepsilon > 0$ be real; by [L2] there is a natural $m \ge 1$ with $1/\iota(m) < \varepsilon$, and every $k \ge m$ has $a_k = 1/\iota(k+2) \le 1/\iota(m) < \varepsilon$, so $|s_k(t) - t| \le a_k < \varepsilon$ for every $t \in I$. [step 2.2, L1, L2]

4.1 In particular $s_k(t) \to t$ for every $t \in I$, and $\mathrm{id}_I$ is continuous, being the restriction of an affine map; this is claim 2. [step 3.1, L3]

5.1 $I$ is a compact metric space, every $s_k$ is continuous, the sequence is pointwise nondecreasing and its pointwise limit $\mathrm{id}_I$ is continuous, so Dini's theorem applies and $(s_k)$ converges to $\mathrm{id}_I$ uniformly; step 3.1 exhibits the same conclusion directly, an index $m$ serving every point at once. [step 2.1, step 3.1, step 4.1, L5, L6, L7]

6.1 For the failure clause, the ramps $r_k$ are continuous on the same compact $I$ and pointwise nonincreasing with pointwise limit the discontinuous $\chi$; were the convergence uniform, the limit would be continuous, so it is not uniform, and the conclusion of Dini's theorem fails for a family satisfying every one of its hypotheses except continuity of the limit. [step 5.1, L5, L7, L8] ∎

## Remarks

- **Dini's theorem is not needed for the positive half, and that is the point.** Step 3.1 proves uniform convergence of $(s_k)$ by hand, because the discrepancy $t - s_k(t)$ is bounded by $a_k$ independently of $t$. The example is worth stating because the general theorem gives the same conclusion from hypotheses that never mention a uniform bound: compactness, monotonicity, and continuity of the terms and of the limit.

- **Each hypothesis of Dini's theorem is doing something.** Continuity of the limit fails for the ramps, and the conclusion fails with it. Compactness cannot be dropped either, though this page does not construct a witness for that. Monotonicity cannot be dropped: the moving spikes earlier on this page are continuous on the compact $I$, converge pointwise to the continuous $\mathbf{0}$, and do not converge uniformly, and they are not monotone at any point where the spike passes.

- **The nonincreasing form is the one the ramps illustrate**, and it is the form obtained from [[thm-dini]] by applying it to the negatives of the functions, as that item's Statement records. Nothing here needs a separate proof.
