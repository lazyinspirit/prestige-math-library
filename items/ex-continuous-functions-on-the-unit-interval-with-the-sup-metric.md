---
id: ex-continuous-functions-on-the-unit-interval-with-the-sup-metric
kind: example
title: "$C([0,1], \\mathbb{R})$ is complete, and on it the uniform metric and the supremum metric induce the same topology"
status: published
origin: session
deps: [lem-uniform-metric-on-a-function-space, def-topology-of-uniform-convergence,
       thm-function-space-is-complete-for-a-complete-target, thm-uniform-limit-theorem,
       lem-sup-metric-is-a-metric, thm-extreme-value-metric, def-metric-compactness,
       thm-heine-borel-rn, def-interval, lem-real-line-is-a-metric-space,
       def-equivalent-metrics, thm-metric-equivalence-hierarchy,
       thm-euclidean-space-complete, def-metrizable-space, def-bounded-set,
       def-metric-topology, def-metric-ball, def-max-min, lem-finite-set-has-max,
       lem-bounded-remetrisation, def-complete-metric-space, def-metric-space,
       def-isometry-and-metric-embedding, def-complete-ordered-field, lem-sup-unique,
       def-continuous-map-top]
justified_by: []
aliases: []
landmark: false
short: "$C([0,1],\\mathbb{R})$: complete, two metrics agree"
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
    - title: "Uniform norm (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_norm"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 7"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $I := [0,1]$ carry the metric $d(s,t) = |s-t|$ inherited from $\mathbb{R}$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]) and
let $\mathbb{R}$ carry the same metric. Write $C(I,\mathbb{R})$ for the
continuous real functions on $I$, $\bar\rho$ for the uniform metric of
[[lem-uniform-metric-on-a-function-space]] and $d_\infty$ for the supremum metric
of [[lem-sup-metric-is-a-metric]]. Then:

1. every $f \in C(I,\mathbb{R})$ is bounded, so $d_\infty$ is defined on
   $C(I,\mathbb{R})$;
2. $\bar\rho$ and $d_\infty$ are **uniformly equivalent** on $C(I,\mathbb{R})$,
   hence induce the same topology there
   ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]);
3. $\big(C(I,\mathbb{R}), \bar\rho\big)$ is a complete metric space
   ([[def-complete-metric-space]]).

**Claim 2 is this page's guarantee that no second notion of convergence has been
created.** [[lem-uniform-metric-on-a-function-space]] mints a metric on
$Y^{X}$ that is *not* the published supremum metric — it truncates distances at
$1$ and needs no boundedness hypothesis — and a reader who has met $d_\infty$
first is entitled to ask whether "uniform convergence" now means two things. On
the set where both are defined it does not: the two metrics take different values
but have the same open sets, so they have the same convergent sequences, the same
continuous functions and the same closed sets.

## Facts & Assumptions

**Given:** $I = [0,1]$ with $d(s,t) = |s-t|$, the target $\mathbb{R}$ with the same metric, $C(I,\mathbb{R})$, the truncated metric $\bar d = \min\{d,1\}$ on $\mathbb{R}$, the uniform metric $\bar\rho$ and, once claim 1 is available, the supremum metric $d_\infty(f,g) = \sup_{t \in I} |f(t)-g(t)|$.

[L1] $I$ is a nonempty compact metric space: it is bounded, lying in $B(0,2)$, and closed in $\mathbb{R}$, so it is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-rn]], claim 3, [[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]], [[def-interval]]).

[L2] A continuous real function on a nonempty compact metric space is bounded and attains a greatest and a least value ([[thm-extreme-value-metric]], [[def-bounded-set]]).

[L3] $d_\infty(f,g) = \sup\{\, |f(t)-g(t)| : t \in I \,\}$ is a metric on the bounded real functions on a nonempty set, and the supremum is an upper bound of its set and the least one ([[lem-sup-metric-is-a-metric]], [[def-complete-ordered-field]], [[lem-sup-unique]]).

[L4] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; $\bar\rho(f,g) = \sup\{\, \bar d(f(t),g(t)) : t \in I \,\}$ is an upper bound of that set and the least one ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Uniform equivalence of two metrics on one set, and the implication uniform $\Rightarrow$ topological ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]], claim 2).

[L6] $(\mathbb{R}, d)$ is complete ([[thm-euclidean-space-complete]], claim 1), and for a nonempty topological domain and a complete metric target $C(X,Y)$ is complete in the uniform metric ([[thm-function-space-is-complete-for-a-complete-target]], claim 2, [[thm-uniform-limit-theorem]], [[def-topology-of-uniform-convergence]], [[def-continuous-map-top]], [[def-metrizable-space]], [[def-metric-space]]).

## Verification

**Proof technique:** direct.

1.1 $I$ is nonempty and compact, and every $f \in C(I,\mathbb{R})$ is continuous on it, hence bounded; so $C(I,\mathbb{R})$ is a subset of the bounded real functions on $I$ and $d_\infty$ is defined on it, which is claim 1. [L1, L2, L3]

2.1 For all $f, g \in C(I,\mathbb{R})$ and every $t \in I$: $\bar d(f(t),g(t)) \le |f(t)-g(t)| \le d_\infty(f,g)$, so $d_\infty(f,g)$ bounds the set whose supremum is $\bar\rho(f,g)$ and therefore $\bar\rho(f,g) \le d_\infty(f,g)$. [step 1.1, L3, L4]

3.1 Let $\varepsilon > 0$ be real and put $\delta := \min\{\varepsilon, 1\}/2$, a real with $0 < \delta \le 1/2 < 1$ and $\delta < \varepsilon$; if $\bar\rho(f,g) < \delta$ then for every $t \in I$ we have $\bar d(f(t),g(t)) \le \bar\rho(f,g) < \delta < 1$, hence $|f(t)-g(t)| = \bar d(f(t),g(t)) < \delta$, so $\delta$ bounds the set whose supremum is $d_\infty(f,g)$ and $d_\infty(f,g) \le \delta < \varepsilon$. [step 2.1, L3, L4]

4.1 Steps 2.1 and 3.1 give uniform equivalence: for a real $\varepsilon > 0$ the choice $\delta' := \varepsilon$ makes $d_\infty(f,g) < \delta'$ imply $\bar\rho(f,g) < \varepsilon$, and the $\delta$ of step 3.1 makes $\bar\rho(f,g) < \delta$ imply $d_\infty(f,g) < \varepsilon$; hence the two metrics are uniformly equivalent on $C(I,\mathbb{R})$ and therefore topologically equivalent, which is claim 2. [step 2.1, step 3.1, L5]

5.1 $(\mathbb{R},d)$ is complete and $I$ is a nonempty topological space, so $C(I,\mathbb{R})$ with the restriction of $\bar\rho$ is a complete metric space, which is claim 3. [step 1.1, L1, L6] ∎

## Remarks

- **The two metrics really are different functions.** Take $f$ constant $0$ and $g$ constant $2$: then $d_\infty(f,g) = 2$ while $\bar\rho(f,g) = 1$. What claim 2 says is that this difference is invisible to the topology, not that it does not exist. In particular an assertion about the *value* of the distance — a diameter, a Lipschitz constant, a radius — must name which metric it means.

- **Completeness is inherited from $\mathbb{R}$ and from closedness, in that order.** $\mathbb{R}$ is complete, so all the real functions on $I$ are complete in the uniform metric; the continuous ones form a closed subset by the uniform limit theorem ([[thm-uniform-limit-theorem]]); and a closed subset of a complete space is complete. Completeness in $d_\infty$ follows as well, since uniformly equivalent metrics have the same Cauchy sequences and the same convergent sequences, both conditions being expressed with $\varepsilon$ and $\delta$ alone.

- **Compactness of $I$ is used only for claim 1.** Boundedness of every continuous function is what makes $d_\infty$ defined at all, and that is the extreme value theorem. On a non-compact domain the supremum metric is unavailable on all of $C(X,\mathbb{R})$, while the uniform metric $\bar\rho$ remains defined; that is the whole reason this page mints the truncated metric.
