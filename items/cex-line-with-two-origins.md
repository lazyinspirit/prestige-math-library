---
id: cex-line-with-two-origins
kind: counterexample
title: "Two copies of $\\mathbb{R}$ glued along $\\mathbb{R} \\setminus \\{0\\}$ give a non-Hausdorff quotient of a metrizable space, by an open quotient map"
status: published
origin: session
deps: [fs-quotient-of-a-hausdorff-space-is-hausdorff, def-hausdorff-space,
       def-quotient-topology, def-disjoint-union-topology, thm-coproduct-universal-property,
       lem-open-or-closed-surjection-is-quotient, def-metrizable-space, def-metric-space,
       def-metric-ball, def-metric-topology, lem-real-line-is-a-metric-space,
       def-interval, def-max-min, lem-of-abs-value, lem-of-triangle-inequality,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [cex-line-with-two-origins-top]
landmark: true
short: "the line with two origins"
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
    - title: "Line with two origins (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Line_with_two_origins"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a quotient of a Hausdorff space is Hausdorff
([[fs-quotient-of-a-hausdorff-space-is-hausdorff]], [[def-hausdorff-space]]).

**Witness.** Let $S := \mathbb{R} \sqcup \mathbb{R} = \bigsqcup_{i<2}\mathbb{R}$
be the disjoint union of two copies of the real line with its usual topology
([[def-disjoint-union-topology]], [[lem-real-line-is-a-metric-space]]), so the
points of $S$ are the pairs $(x,i)$ with $x \in \mathbb{R}$ and $i < 2$. Let
$\sim$ have as classes $\{(x,0),(x,1)\}$ for $x \ne 0$ together with the two
singletons $\{(0,0)\}$ and $\{(0,1)\}$, let $L := S/\!\sim$ carry the quotient
topology and let $q$ be the canonical projection ([[def-quotient-topology]]).
Then:

1. **$S$ is metrizable**, by the explicit metric
   $$d\big((x,i),(y,j)\big) \;:=\; \begin{cases} \min\{|x-y|,\ 1\} & i = j, \\ 2 & i \ne j,\end{cases}$$
   which induces the disjoint union topology ([[def-metrizable-space]],
   [[def-metric-space]]). In particular $S$ is Hausdorff
   ([[def-hausdorff-space]]).
2. **$q$ is an open map**, hence an open quotient map
   ([[lem-open-or-closed-surjection-is-quotient]]): the saturation of an open set
   is open, being the set together with the image of its part off the two origins
   under the homeomorphism of $S$ that swaps the two copies.
3. **$L$ is not Hausdorff**: the two origins $a := q(0,0)$ and $b := q(0,1)$ are
   distinct and every pair of open sets containing them respectively meets.

## Facts & Assumptions

**Given:** $S = \bigsqcup_{i<2}\mathbb{R}$ with the disjoint union topology; the function $d$ above; the relation $\sim$, the quotient $L = S/\!\sim$ and its projection $q$; the points $a = q(0,0)$ and $b = q(0,1)$; the set $N := \{\, (x,i) \in S : x \ne 0 \,\}$ and the swap $\sigma(x,i) := (x, 1-i)$.

[A1] $U \subseteq S$ is open exactly when both traces $U_i = \{\, x : (x,i) \in U \,\}$ are open in $\mathbb{R}$ ([[def-disjoint-union-topology]], [[thm-coproduct-universal-property]]).

[A2] $q$ is a surjection and $V \subseteq L$ is open exactly when $q^{-1}[V]$ is open in $S$; the saturation of $A \subseteq S$ is $q^{-1}[q[A]]$ ([[def-quotient-topology]]).

[A3] A space is Hausdorff when distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff ([[def-hausdorff-space]], [[def-metrizable-space]]).

[L1] A metric satisfies (M1) $d(u,v) = 0$ iff $u = v$, (M2) symmetry and (M3) the triangle inequality; the metric topology has the balls as a basis ([[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]]).

[L2] $|s| \ge 0$ with $|s| = 0$ iff $s = 0$, $|s| = |-s|$ ([[lem-of-abs-value]]), and $|s-u| \le |s-t| + |t-u|$ ([[lem-of-triangle-inequality]]); the order of $\mathbb{R}$ is total, so two reals have a minimum, which lies in the pair and is a lower bound for it ([[def-max-min]]).

[L3] $(a,b)$ is open in $\mathbb{R}$, a subset of $\mathbb{R}$ is open exactly when each of its points has a bounded open interval around it inside it, and $a < (a+b)/2 < b$ for $a < b$ ([[def-interval]], [[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

[L4] A continuous open surjection is a quotient map ([[lem-open-or-closed-surjection-is-quotient]], clause 1); a homeomorphism carries open sets to open sets ([[def-homeomorphism-and-open-maps]]).

## Counterexample

**Proof technique:** direct.

1.1 $d$ satisfies (M1) and (M2): for $i = j$ one has $\min\{|x-y|,1\} = 0$ exactly when $|x-y| = 0$, that is $x = y$, by [L2]; for $i \ne j$ the value is $2 \ne 0$ and the two points differ; and both clauses are symmetric in the two arguments. [L1, L2]

1.2 $d$ satisfies (M3). If the two outer points share a tag, the left side is at most $1$; a middle point with the same tag gives $\min\{|x-z|,1\} \le |x-z| \le |x-y|+|y-z|$ when both right-hand terms are below $1$, and a right-hand side of at least $1$ otherwise, while a middle point with the other tag gives a right-hand side of $4$. If the two outer points have different tags, the left side is $2$ and the middle point shares a tag with at most one of them, so at least one right-hand term is $2$. [L1, L2]

1.3 $\sigma$ is a homeomorphism of $S$: it is its own inverse, and it carries a set $U$ with traces $U_0, U_1$ to the set with traces $U_1, U_0$, so it preserves openness by [A1]. [A1, L4]

1.4 $a \ne b$, the classes $\{(0,0)\}$ and $\{(0,1)\}$ being distinct; and $q(t,0) = q(t,1)$ for every $t \ne 0$. [A2]

1.5 $N$ is open in $S$, both of its traces being $\mathbb{R}\setminus\{0\}$, which is open by [L3]. [A1, L3]

2.1 For $0 < r \le 1$: $B_d((x,i), r) = (x-r,\ x+r) \times \{i\}$, since a point with the other tag is at distance $2 \ge r$, and for the same tag $\min\{|x-y|,1\} < r$ holds exactly when $|x-y| < r$. [step 1.1, L1, L2, L3]

2.2 The saturation of $U \subseteq S$ is $U \cup \sigma[U \cap N]$: the class of $(x,i)$ is $\{(x,0),(x,1)\}$ for $x \ne 0$ and $\{(x,i)\}$ for $x = 0$, so saturating adds exactly the swapped copies of the points of $U$ off the two origins. [step 1.4, step 1.5, A2]

2.3 Suppose $V, W$ are open in $L$ with $a \in V$, $b \in W$. Then $q^{-1}[V]$ and $q^{-1}[W]$ are open in $S$ by [A2], containing $(0,0)$ and $(0,1)$ respectively, so by [A1] and [L3] there are $\varepsilon, \delta > 0$ with $(-\varepsilon,\varepsilon)\times\{0\} \subseteq q^{-1}[V]$ and $(-\delta,\delta)\times\{1\} \subseteq q^{-1}[W]$. [step 1.4, A1, A2, L3]

3.1 $\mathcal{T}_d$ is the disjoint union topology. If $W$ is $d$-open and $(x,i) \in W$, a ball of radius $r \le 1$ inside $W$ is $(x-r,x+r)\times\{i\}$ by step 2.1, so each trace $W_i$ is open by [L3], whence $W$ is open in $S$ by [A1]; conversely if $U$ is open in $S$ and $(x,i) \in U$, then $U_i$ is open, so [L3] gives $\rho > 0$ with $(x-\rho,x+\rho) \subseteq U_i$, and the ball of radius $\min\{\rho,1\}$ lies in $U$ by step 2.1 and [L2]. [step 2.1, A1, L1, L2, L3]

3.2 By steps 1.3, 1.5 and 2.2 the saturation of an open $U$ is the union of the open sets $U$ and $\sigma[U \cap N]$, hence open; so $q[U]$ is open in $L$ by [A2], and $q$ is an open quotient map by [L4]. This is claim 2. [step 1.3, step 1.5, step 2.2, A2, L4]

3.3 With $t := \min\{\varepsilon,\delta\}/2$ one has $0 < t < \varepsilon$ and $t < \delta$ by [L2] and [L3], so $t \ne 0$, and $q(t,0) = q(t,1)$ by step 1.4 lies in $V \cap W$; hence $V \cap W \ne \varnothing$. As $V$ and $W$ were arbitrary, $a$ and $b$ have no disjoint open neighbourhoods, and $L$ is not Hausdorff by [A3]. This is claim 3. [step 1.4, step 2.3, A3, L2, L3]

4.1 By steps 1.1, 1.2 and 3.1 the function $d$ is a metric inducing the topology of $S$, so $S$ is metrizable and hence Hausdorff by [A3]. This is claim 1. [step 1.1, step 1.2, step 3.1, A3, L1]

5.1 By step 4.1 the space $S$ is Hausdorff, by step 3.2 the map $q$ is a quotient map, and by step 3.3 the quotient $L$ is not Hausdorff; so a quotient of a Hausdorff space need not be Hausdorff, which refutes the claim. [step 4.1, step 3.2, step 3.3] ∎

## Remarks

- **The name.** As a set, $L$ is $\mathbb{R}$ with the point $0$ doubled: every
  class other than the two origins has a unique representative $(x,i)$ with
  $x \ne 0$ and is determined by $x$ alone. Each origin has neighbourhoods that
  look like intervals around $0$, and any two such intervals overlap away from
  $0$, which is exactly step 3.3.

- **The metric of claim 1 is the standard truncation trick.** Truncating at $1$
  keeps the two copies at distance $2$ from each other while leaving the topology
  of each copy untouched, since only balls of radius at most $1$ matter for the
  topology (step 2.1). Any bounded metric equivalent to the usual one on each
  copy would do.

- **Every hypothesis one might add to the source fails to help.** $S$ is
  metrizable, hence Hausdorff and first countable, and $q$ is an *open* quotient
  map; none of that is enough. What would be needed is a condition on the
  relation itself, and no such condition is stated at this point in the reading
  order ([[rem-constructions-this-page-stops-short-of]]).
