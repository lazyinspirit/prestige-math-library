---
id: fs-a-function-with-closed-graph-is-continuous
kind: false-statement
title: "FALSE: every function between topological spaces whose graph is closed in the product is continuous"
status: published
origin: session
deps: [thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain,
       def-product-topology, def-topology-basis-subbasis, def-metrizable-space,
       lem-real-line-is-a-metric-space, def-continuity-real,
       thm-algebra-of-continuous-functions, def-continuous-map-top,
       thm-closure-characterisation-top, def-interval, cor-archimedean-reciprocal,
       def-compact-space]
justified_by: []
aliases: []
landmark: false
short: "a closed graph does not imply continuity"
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Closed graph theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_graph_theorem"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Statement

**False claim:** if $X$ and $Y$ are topological spaces and $f : X \to Y$ is a
function whose graph $G_f$ is closed in $X \times Y$ with the product topology
([[def-product-topology]]), then $f$ is continuous
([[def-continuous-map-top]]).

The refutation is the function $f : \mathbb{R} \to \mathbb{R}$, with $\mathbb{R}$
carrying its usual topology ([[lem-real-line-is-a-metric-space]],
[[def-metrizable-space]]), given by

$$f(x) := \frac{1}{x} \ \ (x \ne 0), \qquad f(0) := 0 .$$

Its graph is closed in $\mathbb{R} \times \mathbb{R}$ and it is not continuous at
$0$. Since a map into a **compact** space with closed graph *is* continuous
([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1),
the same witness shows as a by-product that $\mathbb{R}$ with its usual topology
is not compact ([[def-compact-space]]): the compactness hypothesis in that
theorem is what the claim above drops, and it is not redundant.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, the product $\mathbb{R} \times \mathbb{R}$ with the product topology, the function $f$ above, and its graph $G_f = \{\, z \in \mathbb{R} \times \mathbb{R} : z_1 = f(z_0) \,\}$.

[A1] A set $U \subseteq \mathbb{R}$ is open in the usual topology exactly when for every $x \in U$ there is a real $r > 0$ with $(x - r, x + r) \subseteq U$; in particular every bounded open interval is open ([[lem-real-line-is-a-metric-space]], claims 2 and 3, [[def-metrizable-space]], [[def-interval]]).

[A2] The boxes $U \times W$ with $U$ and $W$ open in $\mathbb{R}$ form a basis for the product topology on $\mathbb{R} \times \mathbb{R}$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[A3] $f$ is continuous at $x_0$ exactly when for every open $V$ with $f(x_0) \in V$ there is an open $U \ni x_0$ with $f[U] \subseteq V$, and continuous when this holds everywhere ([[def-continuous-map-top]]).

[L1] A point lies in $\overline{A}$ exactly when every basic open set containing it meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisation-top]], claims 1(d) and 2).

[L2] The reciprocal $x \mapsto 1/x$ is continuous at every $c \ne 0$ as a function on $\{\, x \in \mathbb{R} : x \ne 0 \,\}$, being the quotient of the constant function $1$ by the identity ([[thm-algebra-of-continuous-functions]], claims 4 and 5); continuity at $c$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that $x \ne 0$ and $|x - c| < \delta$ imply $|1/x - 1/c| < \varepsilon$ ([[def-continuity-real]]).

[L3] For every real $\varepsilon > 0$ there is a natural number $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L4] If the codomain is compact and the graph is closed then the map is continuous ([[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]], claim 1, [[def-compact-space]]).

## Refutation

**Proof technique:** constructive.

1.1 Define $f : \mathbb{R} \to \mathbb{R}$ by $f(x) := 1/x$ for $x \ne 0$ and $f(0) := 0$; this is a function on all of $\mathbb{R}$, every nonzero real having a multiplicative inverse. [construct]

1.2 Let $z = (a,b) \in \mathbb{R} \times \mathbb{R}$ with $z \notin G_f$, so that $b \ne f(a)$. [given]

1.3 $f$ is not continuous at $0$: put $V := (-1,1)$, an open set containing $f(0) = 0$, and let $U$ be any open set with $0 \in U$; by [A1] there is a real $r > 0$ with $(-r, r) \subseteq U$, by [L3] there is a natural $n \ge 1$ with $1/n < \min\{r, 1\}$, and then $1/n \in U$ while $f(1/n) = n > 1$, so $f(1/n) \notin V$ and $f[U] \not\subseteq V$. [A1, A3, L3]

2.1 Suppose $a \ne 0$, so $f(a) = 1/a$ and $\varepsilon := |b - 1/a|/2 > 0$; by [L2] fix a real $\delta_1 > 0$ such that $x \ne 0$ and $|x - a| < \delta_1$ imply $|1/x - 1/a| < \varepsilon$, and put $\delta := \min\{\delta_1, |a|\} > 0$. [step 1.2, L2, choose]

2.2 Suppose $a = 0$, so $f(a) = 0$ and $b \ne 0$, hence $|b| > 0$; put $\rho := 1/(2|b|) > 0$ and $\sigma := |b|/2 > 0$ and $B := (-\rho, \rho) \times (b - \sigma, b + \sigma)$, a basic open set containing $z = (0,b)$. [step 1.2, A1, A2, construct]

3.1 With $a \ne 0$ the box $B := (a - \delta, a + \delta) \times (b - \varepsilon, b + \varepsilon)$ is a basic open set containing $z$ and $B \cap G_f = \varnothing$: for $(x,y) \in B$ one has $|x - a| < \delta \le |a|$, so $x \ne 0$ and $f(x) = 1/x$ with $|1/x - 1/a| < \varepsilon$, whence $|f(x) - b| \ge |b - 1/a| - |1/x - 1/a| > 2\varepsilon - \varepsilon = \varepsilon > |y - b|$ and therefore $y \ne f(x)$. [step 2.1, A1, A2]

3.2 With $a = 0$ the box $B$ of step 2.2 satisfies $B \cap G_f = \varnothing$: let $(x,y) \in B$ with $y = f(x)$; if $x = 0$ then $y = 0$ and $|y - b| = |b| > \sigma$, contradicting $y \in (b - \sigma, b + \sigma)$; and if $x \ne 0$ then $0 < |x| < \rho$ gives $|f(x)| = 1/|x| > 1/\rho = 2|b|$, while $|y| \le |b| + |y - b| < |b| + \sigma = 3|b|/2 < 2|b|$, contradicting $y = f(x)$. [step 2.2]

4.1 Every $z \notin G_f$ has a basic open set containing it and missing $G_f$, by step 3.1 if its first coordinate is nonzero and by step 3.2 if it is zero; so no such $z$ lies in $\overline{G_f}$, whence $\overline{G_f} = G_f$ and $G_f$ is closed in $\mathbb{R} \times \mathbb{R}$. [step 1.2, step 3.1, step 3.2, L1]

5.1 By step 1.3 and [A3] the function $f$ is not continuous, while by step 4.1 its graph is closed; so the claim is false. [step 4.1, step 1.3, A3]

6.1 By [L4] a function into a compact codomain with closed graph is continuous, so steps 4.1 and 1.3 also show that $\mathbb{R}$ with its usual topology is not compact; the witness therefore refutes the claim and locates the missing hypothesis at the same time. [step 4.1, step 1.3, step 5.1, L4, discharge-construct] ∎

## Remarks

- **Which hypothesis was dropped.** The true statements in this neighbourhood are the two halves of [[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]]: a closed graph gives continuity when the codomain is **compact**, and continuity gives a closed graph when the codomain is **Hausdorff** ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]]). The claim above asks for the first conclusion with neither hypothesis, and the witness has a Hausdorff codomain, so it is compactness and not separation that is missing.

- **Where the closedness of the graph comes from, informally.** Off the vertical axis the graph is closed because the reciprocal is continuous there; on the axis it is closed because the function *escapes*: near $0$ the values are large in absolute value, so a small box around a point $(0,b)$ with $b \ne 0$ cannot meet the graph at all. That escape is exactly what a compact codomain would forbid.

- **The value chosen at $0$ is immaterial.** Replacing $f(0) = 0$ by any fixed real $c$ leaves both conclusions standing. For the graph, a point $(0,b)$ with $b \ne c$ is separated from it by the box $(-\rho, \rho) \times (b - \sigma, b + \sigma)$ with $\sigma := |b - c|/2$ and $\rho := 1/(|b| + \sigma)$: the value at $0$ is $c$, which lies outside the second factor, and for $x \ne 0$ in the first factor $|1/x| > |b| + \sigma$ forces $|1/x - b| > \sigma$. For the discontinuity, step 1.3 uses only that $f(1/n) = n$ exceeds every bound, which does not involve $f(0)$ at all. The value $0$ is chosen above only because it makes the two computations shortest.
