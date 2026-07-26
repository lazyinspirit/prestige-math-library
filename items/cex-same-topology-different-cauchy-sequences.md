---
id: cex-same-topology-different-cauchy-sequences
kind: counterexample
title: "On $(0,\\infty)$ the metrics $|x-y|$ and $|1/x - 1/y|$ share their topology and not their Cauchy sequences"
status: published
origin: session
deps: [fs-equivalent-metrics-share-cauchy-sequences, def-cauchy-in-metric,
       def-equivalent-metrics, cor-archimedean-reciprocal, thm-of-archimedean,
       lem-of-inverse-positive, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, def-metric-topology, def-metric-ball,
       def-interval, def-metric-space, lem-of-abs-value, lem-of-sign-rules,
       lem-finite-set-has-max, def-max-min, lem-rat-embeds-dense,
       def-metric-uniform-continuity, thm-uniform-continuity-preserves-cauchy]
justified_by: []
aliases: []
landmark: true
short: "same topology, different Cauchy sequences"
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
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** topologically equivalent metrics have the same Cauchy
sequences ([[fs-equivalent-metrics-share-cauchy-sequences]],
[[def-equivalent-metrics]], [[def-cauchy-in-metric]]).

Let $X := (0,\infty) \subseteq \mathbb{R}$ ([[def-interval]]) and put

$$d(x,y) := |x-y|, \qquad d'(x,y) := \Big|\tfrac{1}{x} - \tfrac{1}{y}\Big| \qquad (x,y \in X).$$

Both are metrics on $X$ and $\mathcal{T}_d = \mathcal{T}_{d'}$. The sequence
$x_k := 1/(k+2)$ is $d$-Cauchy and not $d'$-Cauchy; the sequence $y_k := k+2$ is
$d'$-Cauchy and not $d$-Cauchy. So **neither** metric's Cauchy sequences are
contained in the other's, and topological equivalence controls neither
direction.

## Facts & Assumptions

**Given:** The set $X = (0,\infty)$ with the metrics $d$ and $d'$ above; the sequences $x_k = 1/(k+2)$ and $y_k = k+2$; a point $a \in X$; reals $r,s,\varepsilon > 0$.

[L1] The absolute value makes $\mathbb{R}$ a metric space, a restriction of a metric is a metric, and the pullback of a metric along an injection is a metric ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]], [[lem-of-abs-value]]).

[L2] For $x,a > 0$: $1/x - 1/a = (a-x)/(xa)$, so $|x-a| = |1/x - 1/a| \cdot xa$ and $|1/x - 1/a| = |x-a|/(xa)$; reciprocation is strictly decreasing on the positives, hence injective there ([[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

[L3] Open sets and balls ([[def-metric-topology]], [[def-metric-ball]]); a set is open exactly when every point of it has a ball around it inside it.

[L4] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Two reals have a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Cauchyness may be tested with real $\varepsilon > 0$ ([[def-cauchy-in-metric]], [[lem-rat-embeds-dense]]).

[L7] Uniform equivalence says both identity maps are uniformly continuous, and a uniformly continuous map sends Cauchy sequences to Cauchy sequences ([[def-equivalent-metrics]], [[def-metric-uniform-continuity]], [[thm-uniform-continuity-preserves-cauchy]]).

## Counterexample

**Proof technique:** direct.

1.1 $d$ is a metric on $X$, being the restriction of the usual metric of $\mathbb{R}$; and $d'$ is a metric on $X$, being the pullback of that metric along the injective map $x \mapsto 1/x$. [L1, L2]

2.1 Given $a \in X$ and a real $r > 0$, put $s := \min\{1/(2a),\, r/(4a^2)\} > 0$. If $d'(x,a) < s$ then $|1/x - 1/a| < 1/(2a)$, so $1/x > 1/(2a)$ and hence $x < 2a$; therefore $|x-a| = |1/x - 1/a| \cdot xa < s \cdot 2a^2 \le r/2 < r$. So $B_{d'}(a,s) \subseteq B_d(a,r)$. [step 1.1, L2, L3, L5]

2.2 Given $a \in X$ and a real $s > 0$, put $r := \min\{a/2,\, s a^2/4\} > 0$. If $d(x,a) < r$ then $|x-a| < a/2$, so $x > a/2$ and hence $|1/x - 1/a| = |x-a|/(xa) < r/((a/2)a) = 2r/a^2 \le s/2 < s$. So $B_d(a,r) \subseteq B_{d'}(a,s)$. [step 1.1, L2, L3, L5]

2.3 The sequence $x_k = 1/(k+2)$ lies in $X$; it is $d$-Cauchy, since for a real $\varepsilon > 0$ and $N \ge 1$ with $1/N < \varepsilon/2$ every $k,l \ge N$ gives $d(x_k,x_l) \le 1/(k+2) + 1/(l+2) < 2/N < \varepsilon$. [step 1.1, L4, L6]

3.1 Hence $\mathcal{T}_d = \mathcal{T}_{d'}$: a $d$-open $U$ is $d'$-open by step 2.1 applied at each of its points, and conversely by step 2.2. [step 2.1, step 2.2, L3]

3.2 It is not $d'$-Cauchy: $d'(x_k,x_l) = |(k+2) - (l+2)| = |k-l|$, so $d'(x_K, x_{K+1}) = 1$ for every $K$ and the Cauchy condition fails at $\varepsilon = 1$. [step 2.3, L1, L2, L6]

3.3 The sequence $y_k = k+2$ lies in $X$; it is $d'$-Cauchy, since $d'(y_k,y_l) = |1/(k+2) - 1/(l+2)| \le 1/(k+2) + 1/(l+2)$, which is below $\varepsilon$ for $k,l \ge N$ by the computation of step 2.3. [step 2.3, L1, L2, L4, L6]

4.1 It is not $d$-Cauchy: $d(y_K, y_{K+1}) = 1$ for every $K$, so the Cauchy condition fails at $\varepsilon = 1$. [step 3.3, L1, L6]

5.1 So $d$ and $d'$ are topologically equivalent metrics on $X$ whose classes of Cauchy sequences are incomparable, which refutes the claim above. [step 3.1, step 2.3, step 3.2, step 3.3, step 4.1]

6.1 In particular $d$ and $d'$ are not uniformly equivalent, since uniform equivalence would make both identity maps uniformly continuous and hence would preserve Cauchy sequences in both directions. [step 5.1, L7] ∎

## Remarks

- **The map $x \mapsto 1/x$ is what is being tested.** It is a bijection of $(0,\infty)$ onto itself and a homeomorphism, by steps 2.1 and 2.2, and $d'$ is the metric it pulls back from $d$. Homeomorphisms preserve open sets and convergence; they do not preserve Cauchyness, and this is that failure written out.
- **Both failures come from a missing endpoint, at opposite ends.** The sequence $(x_k)$ heads for $0$, which $(0,\infty)$ does not contain, so it is $d$-Cauchy without converging; its image under $x \mapsto 1/x$ runs off to the right and is not Cauchy at all. Reading the same picture through $d'$ exchanges the two ends, which is why the failure is symmetric.
- **Indexing.** The terms are $1/(k+2)$ and $k+2$ rather than $1/k$ and $k$ because $\mathbb{N}$ contains $0$ in this library; $1/0$ does not exist and $0 \notin (0,\infty)$, so both sequences are shifted to start safely inside the space.
- **The completeness version of the same phenomenon** is [[cex-completeness-is-not-topological]], and the general statement being refuted there is [[fs-completeness-is-a-topological-property]].
