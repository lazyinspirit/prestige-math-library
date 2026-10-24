---
id: cex-uniform-bijection-with-non-uniform-inverse
kind: counterexample
title: "$x \\mapsto \\sqrt{x}$ is a uniformly continuous bijection of $[0,\\infty)$ onto itself whose inverse $x \\mapsto x^2$ is not uniformly continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-uniform-continuity, thm-metric-regularity-hierarchy, thm-of-square-roots,
       lem-power-difference-factorisation, lem-of-abs-value, cor-archimedean-reciprocal,
       thm-of-archimedean, lem-of-inverse-positive, lem-real-line-is-a-metric-space,
       def-isometry-and-metric-embedding, def-injection-surjection-bijection, def-interval,
       ex-square-root-is-half-holder, lem-of-square-monotone, def-integer-power,
       def-metric-space, lem-of-naturals-positive, def-lipschitz-holder-contraction,
       def-equivalent-metrics]
justified_by: []
aliases: []
landmark: true
short: "uniform bijection, non-uniform inverse"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the inverse of a uniformly continuous bijection of metric
spaces is uniformly continuous ([[def-metric-uniform-continuity]],
[[def-injection-surjection-bijection]]).

Let $X := [0,\infty) \subseteq \mathbb{R}$ ([[def-interval]]) with the metric
inherited from the real line
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]), and
let

$$g : X \to X, \quad g(x) := \sqrt{x}, \qquad h : X \to X, \quad h(x) := x^{2}.$$

Then $g$ is a bijection of $X$ onto itself with inverse $h$; $g$ is uniformly
continuous; and $h$ is **not** uniformly continuous, the pairs $n + 1/n$ and $n$
defeating every candidate $\delta$ at $\varepsilon = 2$.

## Facts & Assumptions

**Given:** $X = [0,\infty)$ with the metric inherited from $\mathbb{R}$; the maps $g(x) = \sqrt x$ and $h(x) = x^2$; a natural $n \ge 1$; reals $\varepsilon, \delta > 0$.

[L1] Every $a \ge 0$ has a unique $\sqrt a \ge 0$ with $(\sqrt a)^2 = a$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L2] For $a,b \ge 0$: $a \le b$ if and only if $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L3] $\sqrt{\cdot}$ on $[0,\infty)$ is $1/2$-Hölder with constant $1$ and is uniformly continuous ([[ex-square-root-is-half-holder]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]]).

[L4] Factorisation of a difference of squares: $x^2 - y^2 = (x-y)(x+y)$ ([[lem-power-difference-factorisation]]).

[L5] For every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; positive naturals are positive reals; and $a > 0$ gives $1/a > 0$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L6] The absolute value and the usual metric of $\mathbb{R}$ ([[lem-of-abs-value]], [[lem-real-line-is-a-metric-space]], [[def-metric-space]]).

[L7] Uniform continuity: one $\delta > 0$ per $\varepsilon > 0$ serving every pair ([[def-metric-uniform-continuity]]).

## Counterexample

**Proof technique:** direct.

1.1 $g$ and $h$ map $X$ into $X$: $\sqrt x \ge 0$ for $x \ge 0$ by [L1], and $x^2 \ge 0$ for every real $x$. [L1, L2]

1.2 $g$ is uniformly continuous on $X$. [L3, L7]

1.3 For every real $t > 0$ and every $x,y \ge 0$: $h(x) - h(y) = x^2 - y^2 = (x-y)(x+y)$. [L4]

2.1 $h(g(x)) = (\sqrt x)^2 = x$ for every $x \ge 0$, and $g(h(x)) = \sqrt{x^2} = x$ for every $x \ge 0$, the latter because $x \ge 0$ and $x^2 = x^2$ make $x$ the unique nonnegative square root of $x^2$. So $g$ and $h$ are mutually inverse bijections of $X$ onto itself. [step 1.1, L1, L2]

2.2 Fix a real $\delta > 0$ and take a natural $n \ge 1$ with $1/n < \delta$; put $x := n + 1/n$ and $y := n$, both in $X$. Then $|x - y| = 1/n < \delta$. [step 1.3, L5, L6]

3.1 But $h(x) - h(y) = (x-y)(x+y) = \dfrac{1}{n}\Big(2n + \dfrac1n\Big) = 2 + \dfrac{1}{n^2} > 2$. So the pair $(x,y)$ satisfies $|x-y| < \delta$ and $|h(x)-h(y)| > 2$. [step 1.3, step 2.2, L5, L6]

4.1 Since $\delta > 0$ was arbitrary, no $\delta$ witnesses the uniform continuity condition for $h$ at $\varepsilon = 2$, so $h$ is not uniformly continuous. [step 2.2, step 3.1, L7]

5.1 Therefore $g$ is a uniformly continuous bijection of $X$ onto itself whose inverse $h$ is not uniformly continuous, which refutes the claim above. [step 2.1, step 1.2, step 4.1] ∎

## Remarks

- **Both maps are continuous, and one direction of the pair is even Hölder.** What fails is only the uniformity of the inverse: $h$ stretches distances by the factor $x + y$, which is unbounded on $[0,\infty)$, so no single $\delta$ can serve every pair. On any bounded piece $[0,M]$ the same factor is at most $2M$, so $h$ is Lipschitz there and the phenomenon disappears ([[def-lipschitz-holder-contraction]]).
- **The witnesses shrink and their images do not.** The pairs $n + 1/n$ and $n$ are at distance $1/n$, which tends to $0$, while their images stay more than $2$ apart. That is the shape of every failure of uniform continuity: a family of pairs whose separation vanishes and whose image separation does not.
- **Indexing.** The witnesses are indexed by naturals $n \ge 1$, because $1/n$ appears; $\mathbb{N}$ contains $0$ in this library and $1/0$ does not exist.
- **A homeomorphism can be uniformly continuous in one direction only.** So "uniformly homeomorphic" is a genuinely stronger relation than "homeomorphic", and this pair shows the two differ; the metric-level version of the same point is the gap between topological and uniform equivalence ([[def-equivalent-metrics]], [[cex-same-topology-different-cauchy-sequences]]).
