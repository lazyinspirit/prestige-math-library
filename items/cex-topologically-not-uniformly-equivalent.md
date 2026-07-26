---
id: cex-topologically-not-uniformly-equivalent
kind: counterexample
title: "On $(0,\\infty)$ the metrics $|x-y|$ and $|1/x - 1/y|$ have the same topology and are not uniformly equivalent"
status: draft
origin: session
deps: [thm-metric-equivalence-hierarchy, def-equivalent-metrics, def-metric-space,
       thm-of-archimedean, lem-of-inverse-positive, cor-archimedean-reciprocal,
       def-isometry-and-metric-embedding, lem-real-line-is-a-metric-space,
       def-metric-topology, def-metric-ball, def-interval, lem-of-abs-value,
       def-abs-value, lem-of-sign-rules, lem-of-add-order, def-max-min,
       lem-finite-set-has-max, lem-of-naturals-positive, cor-of-one-positive,
       def-injection-surjection-bijection, def-natural-numbers, def-field,
       def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "topological but not uniform"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** topologically equivalent metrics are uniformly equivalent;
equivalently, the implication "uniformly equivalent implies topologically
equivalent" of [[thm-metric-equivalence-hierarchy]] reverses.

Let $X := (0,\infty) = \{t \in \mathbb{R} : t > 0\}$ ([[def-interval]]) carry the
metric $d(x,y) := |x-y|$ inherited from the real line
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]),
and put

$$\rho(x,y) := \Big|\tfrac{1}{x} - \tfrac{1}{y}\Big| \qquad (x, y \in X).$$

Then $\rho$ is a metric on $X$, the two metrics are topologically equivalent, and
they are **not** uniformly equivalent ([[def-equivalent-metrics]]). So the second
implication of the hierarchy is strict.

## Facts & Assumptions

**Given:** The set $X = (0,\infty)$, the metrics $d$ and $\rho$ above, the map $\iota : X \to X$ with $\iota(x) := x^{-1}$, a point $a \in X$, a real $\varepsilon > 0$, and a real $\delta > 0$.

[L1] $d_{\mathbb{R}}(u,v) = |u-v|$ is a metric on $\mathbb{R}$ and restricts to a metric on any subset ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-metric-space]]).

[L2] Inverses: $u > 0$ gives $u^{-1} > 0$ and $(u^{-1})^{-1} = u$; and $0 < u < v$ gives $0 < v^{-1} < u^{-1}$ ([[lem-of-inverse-positive]], [[def-field]]).

[L3] Absolute value: $|uv| = |u||v|$, $|u| \ge 0$, $|u| = 0$ exactly when $u = 0$, $|-u| = |u|$, and $|u| < c$ is equivalent to $-c < u < c$ for $c > 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L4] Order arithmetic: scaling a strict inequality by a positive element ([[lem-of-sign-rules]]), adding a constant to an inequality ([[lem-of-add-order]]), transitivity and trichotomy ([[def-ordered-field]], [[def-complete-ordered-field]]); $0 < 1$ ([[cor-of-one-positive]]); halving a positive real; and the minimum of a two-element set of reals, which is one of the two ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] Reciprocal Archimedean property: for every real $t > 0$ there is a natural $n \ge 1$ with $1/n < t$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); and $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]], [[def-natural-numbers]]).

[L6] Open sets, balls, and the two notions of equivalence ([[def-metric-topology]], [[def-metric-ball]], [[def-equivalent-metrics]], [[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** direct.

1.1 The map $\iota$ is a well defined bijection of $X$ onto itself with $\iota \circ \iota = \mathrm{id}_X$, since $x > 0$ gives $x^{-1} > 0$ and $(x^{-1})^{-1} = x$; and for $x, y \in X$ one has $\rho(x,y) = d(\iota x, \iota y)$ together with the identity $\rho(x,y) = |x - y| \,(xy)^{-1}$, because $x^{-1} - y^{-1} = (y - x)(xy)^{-1}$ and $|y-x| = |x-y|$. [L2, L3, L4]

2.1 $\rho$ is a metric on $X$: it inherits symmetry and the triangle inequality from $d$ through $\iota$, and $\rho(x,y) = 0$ gives $d(\iota x, \iota y) = 0$, hence $\iota x = \iota y$ and, $\iota$ being injective, $x = y$; conversely $\rho(x,x) = 0$. [step 1.1, L1, L2, L3]

2.2 Estimate A: put $\delta_A := \min\{\, a/2,\ \varepsilon a^2/2 \,\} > 0$. If $x \in X$ and $|x - a| < \delta_A$ then $x > a - \delta_A \ge a - a/2 = a/2 > 0$, so $xa > a^2/2 > 0$ and $(xa)^{-1} < 2a^{-2}$; hence $\rho(x,a) = |x-a|(xa)^{-1} < \delta_A (xa)^{-1} < 2\delta_A a^{-2} \le \varepsilon$ when $x \ne a$, and $\rho(a,a) = 0 < \varepsilon$ otherwise. So $B_d(a,\delta_A) \subseteq B_\rho(a,\varepsilon)$. [step 1.1, L2, L3, L4]

2.3 Uniform equivalence fails: suppose some $\delta > 0$ satisfied $d(x,y) < \delta \Rightarrow \rho(x,y) < 1$ for all $x, y \in X$. Choose a natural $n \ge 1$ with $1/n < \delta$ and put $x := 1/n$, $y := 1/(n+1)$, both in $X$. Then $d(x,y) = |1/n - 1/(n+1)| < 1/n < \delta$, because $0 < 1/(n+1) < 1/n$; but $\rho(x,y) = |n - (n+1)| = |-1| = 1$, so $\rho(x,y) < 1$ fails. Hence no such $\delta$ exists, and the pair $d, \rho$ is not uniformly equivalent. [step 1.1, L2, L3, L4, L5, L6]

3.1 Estimate B: apply estimate A at the point $\iota(a) = a^{-1} \in X$ to get $\delta_B > 0$ with $|u - a^{-1}| < \delta_B \Rightarrow \rho(u, a^{-1}) < \varepsilon$ for $u \in X$; substituting $u := \iota(x) = x^{-1}$, which runs over $X$ as $x$ does, and using $\iota \circ \iota = \mathrm{id}_X$, this reads $\rho(x,a) < \delta_B \Rightarrow d(x,a) < \varepsilon$, that is $B_\rho(a,\delta_B) \subseteq B_d(a,\varepsilon)$. [step 1.1, step 2.2, L2, L3]

4.1 Topological equivalence: if $U$ is $\rho$-open and $a \in U$, take $\varepsilon > 0$ with $B_\rho(a,\varepsilon) \subseteq U$ and then $\delta_A$ from step 2.2, so $B_d(a,\delta_A) \subseteq U$ and $U$ is $d$-open; if $U$ is $d$-open and $a \in U$, take $\varepsilon > 0$ with $B_d(a,\varepsilon) \subseteq U$ and then $\delta_B$ from step 3.1, so $B_\rho(a,\delta_B) \subseteq U$ and $U$ is $\rho$-open. Hence the two metric topologies coincide. [step 2.2, step 3.1, L6]

5.1 So $d$ and $\rho$ are topologically equivalent metrics on $X$ that are not uniformly equivalent, which refutes the claim and shows that the implication from uniform to topological equivalence in [[thm-metric-equivalence-hierarchy]] does not reverse. [step 2.1, step 2.3, step 4.1] ∎

## Remarks

- **Why the failure is at the origin end.** The pairs $1/n$ and $1/(n+1)$ get
  arbitrarily close in $d$ while their images $n$ and $n+1$ under $\iota$ stay a
  fixed distance apart. Uniform equivalence would have to control this with a
  single $\delta$, and no single $\delta$ can, because $\iota$ stretches by the
  unbounded factor $(xy)^{-1}$ near $0$.
- **The two metrics are isometric copies of each other**, via $\iota$: the map
  $\iota : (X,\rho) \to (X,d)$ satisfies $d(\iota x, \iota y) = \rho(x,y)$ by
  step 1.1, so the two spaces are isometric ([[def-isometry-and-metric-embedding]]).
  Being isometric as spaces says nothing about the identity map being uniformly
  bicontinuous, and that is exactly the distinction this example draws.
- **Completeness is the usual casualty.** Uniform equivalence preserves Cauchy
  sequences and topological equivalence does not; here the sequence $1/n$ is
  Cauchy for $d$ and not for $\rho$, since $\rho(1/n, 1/m) = |n - m|$. Cauchy
  sequences in a metric space are not defined in this library yet, so that
  comparison is orientation only and belongs to the completeness page.
