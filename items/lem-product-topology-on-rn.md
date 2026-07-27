---
id: lem-product-topology-on-rn
kind: lemma
title: "For $n \\ge 1$ the product topology on $n$ copies of the usual topology of $\\mathbb{R}$ is the metric topology of $d_\\infty$ on $\\mathbb{R}^n$, and hence also of $d_1$ and $d_2$, so $\\mathbb{R}^n$ as a product and $\\mathbb{R}^n$ as a metric space are one space"
status: published
origin: session
deps: [def-product-topology, lem-metrics-on-rn, def-metric-topology, def-metric-ball,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-equivalent-metrics,
       thm-metric-equivalence-hierarchy, thm-of-square-roots, lem-finite-sum-laws,
       def-interval, def-max-min, lem-finite-set-has-max, lem-finite-choice, lem-of-square-monotone,
       lem-of-square-positive, lem-of-abs-value, lem-of-naturals-positive,
       lem-of-sign-rules, lem-metric-nonnegativity, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{R}^n$ as a product is $\\mathbb{R}^n$ as a metric space"
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
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, and give $\mathbb{R}$ its usual topology,
the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let

$$\mathbb{R}^n \;=\; \prod_{k < n} \mathbb{R}$$

be the product of $n$ copies of $\mathbb{R}$ ([[def-product-topology]]). As a
**set** this is literally the $\mathbb{R}^n$ of [[lem-metrics-on-rn]], both being
the set of functions $n \to \mathbb{R}$; and $d_1$, $d_2$, $d_\infty$ are the
three metrics defined there. Then:

1. The product topology on $\mathbb{R}^n$ is the metric topology of $d_\infty$
   ([[def-metric-topology]]). The key computation is that a $d_\infty$-ball is a
   box:
   $$B_{d_\infty}(x, r) \;=\; \prod_{k<n} (x_k - r,\ x_k + r) \qquad (r > 0),$$
   a product of bounded open intervals ([[def-interval]]).
2. $d_\infty \le d_1 \le n\, d_\infty$ and $d_\infty \le d_2 \le n\, d_\infty$
   pointwise, so $d_1$ and $d_2$ are each Lipschitz equivalent to $d_\infty$
   ([[def-equivalent-metrics]]); here $n$ denotes the canonical natural
   $n \cdot 1_{\mathbb{R}}$.
3. Consequently all three metrics induce the product topology
   ([[thm-metric-equivalence-hierarchy]]). So $\mathbb{R}^n$ carrying the product
   topology and $\mathbb{R}^n$ carrying the topology of any one of $d_1$, $d_2$,
   $d_\infty$ are **one topological space**, and it is metrizable
   ([[def-metrizable-space]]).

**Why $n \ge 1$.** The metric $d_\infty$ is a maximum over $n$ terms, which does
not exist for $n = 0$; [[lem-metrics-on-rn]] carries the same hypothesis, and it
is carried here for the same reason. For $n = 0$ the product is a one-point space
and there is nothing to compare.

## Facts & Assumptions

**Given:** A natural $n \ge 1$; the set $\mathbb{R}^n$ of functions $n \to \mathbb{R}$; the three metrics $d_1(x,y) = \sum_{k<n}|x_k - y_k|$, $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$ and $d_\infty(x,y) = \max\{|x_k-y_k| : k < n\}$; points $x, y \in \mathbb{R}^n$ and a real $r > 0$. Throughout, $n$ inside a real inequality denotes the canonical natural $n \cdot 1_{\mathbb{R}}$.

[A1] $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$ for $n \ge 1$, and $\mathbb{R}^n$ is the set of functions $n \to \mathbb{R}$ ([[lem-metrics-on-rn]]).

[A2] For $I = n$ a natural number, a basis for the product topology on $\prod_{k<n}\mathbb{R}$ is the family of all boxes $\prod_{k<n} U_k$ with every $U_k$ open in $\mathbb{R}$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[L1] $B_{\mathbb{R}}(t, r) = (t-r,\ t+r)$, and $U \subseteq \mathbb{R}$ is open in the usual topology exactly when every $t \in U$ has some $r > 0$ with $(t-r,t+r) \subseteq U$ ([[lem-real-line-is-a-metric-space]], claims 2 and 3; [[def-metric-ball]], [[def-metric-topology]], [[def-interval]]).

[L2] $U$ is open in a metric space $(X,d)$ exactly when every $u \in U$ has some $\rho > 0$ with $B_d(u,\rho) \subseteq U$ ([[def-metric-topology]], [[def-metric-ball]]); metric values are nonnegative ([[lem-metric-nonnegativity]]).

[L3] $\max S$ belongs to $S$ and is an upper bound for $S$, and likewise $\min S$ ([[def-max-min]]); a nonempty finite set of reals has a maximum, and by reflection a minimum ([[lem-finite-set-has-max]]).

[L4] For finite sums: if $a_k \le b_k$ for all $k<n$ then $\sum_{k<n} a_k \le \sum_{k<n} b_k$; if every $a_k \ge 0$ then every single term satisfies $a_j \le \sum_{k<n} a_k$; and $\sum_{k<n}\lambda = n\lambda$ ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] $\sqrt{a}$ is the unique nonnegative real with $(\sqrt a)^2 = a$, for $a \ge 0$ ([[thm-of-square-roots]]); $t^2 \ge 0$ ([[lem-of-square-positive]]); $|t|^2 = t^2$ and $|t| \ge 0$ ([[lem-of-abs-value]]); and for $a, b \ge 0$ one has $a \le b$ if and only if $a^2 \le b^2$ ([[lem-of-square-monotone]]).

[L6] A function on a natural number $n$ whose values are nonempty sets has a choice function for its family of values ([[lem-finite-choice]]).

[L7] The canonical natural $n \cdot 1_{\mathbb{R}}$ is positive and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing for $n \ge 1$ ([[lem-of-naturals-positive]]); multiplying an inequality by a positive element preserves it ([[lem-of-sign-rules]], claim 4).

[L8] Lipschitz equivalent metrics are topologically equivalent, that is they have the same metric topology ([[thm-metric-equivalence-hierarchy]], claims 1 and 2; [[def-equivalent-metrics]]).

## Proof

**Proof technique:** direct.

1.1 For $y \in \mathbb{R}^n$: $d_\infty(x,y) < r$ if and only if $|x_k - y_k| < r$ for every $k < n$, since by [L3] the maximum is one of the values $|x_k-y_k|$ and is an upper bound for all of them. [A1, L3]

1.2 For $t \in \mathbb{R}$ and $r > 0$: $|t - y_k| < r$ if and only if $y_k \in (t-r, t+r)$, by [L1]. [L1]

1.3 Write $t_k := |x_k - y_k|$ and $M := d_\infty(x,y) = \max\{t_k : k<n\}$. Then $t_j \le M$ for every $j < n$ and $M = t_{j_0}$ for some $j_0 < n$, by [L3]. [A1, L3]

1.4 $d_2(x,y)^2 = \sum_{k<n}(x_k-y_k)^2$ by [L5], and $(x_k-y_k)^2 = t_k^2 \ge 0$ by [L5]. [L5]

1.5 $n \le n^2$ as reals: for $n \ge 1$ the canonical natural satisfies $\iota(1) = 1 \le \iota(n)$ by [L7], so either $\iota(n) = 1$, in which case $\iota(n) = \iota(n)^2 = 1$, or $1 < \iota(n)$, in which case multiplying that strict inequality by $\iota(n) > 0$ gives $\iota(n) < \iota(n)^2$ by [L7]. [L7]

1.6 Conversely let $B = \prod_{k<n} U_k$ be a box with every $U_k$ open in $\mathbb{R}$ and let $x \in B$. For each $k<n$ the set $\{\, \rho \in \mathbb{R} : \rho > 0,\ (x_k-\rho,\ x_k+\rho) \subseteq U_k \,\}$ is nonempty by [L1], so [L6] supplies $\rho_k$ in it for every $k<n$; put $r := \min\{\rho_k : k<n\}$, which exists and is positive by [L3]. [A2, L1, L3, L6, choose]

2.1 $d_1(x,y) = \sum_{k<n} t_k \le \sum_{k<n} M = n M$, using $t_k \le M$ from step 1.3 and [L4]. [step 1.3, L4]

2.2 $M = t_{j_0} \le \sum_{k<n} t_k = d_1(x,y)$, since every $t_k \ge 0$ by [L5] and a single nonnegative term is at most the sum, by [L4]. [step 1.3, L4, L5]

2.3 $B_{d_\infty}(x,r) = \prod_{k<n}(x_k - r,\ x_k + r)$: by step 1.1 a point $y$ lies in the ball exactly when $|x_k-y_k| < r$ for every $k<n$, and by step 1.2 that says exactly $y_k \in (x_k-r, x_k+r)$ for every $k < n$. [step 1.1, step 1.2]

2.4 $M^2 = t_{j_0}^2 \le \sum_{k<n} t_k^2 = d_2(x,y)^2$ by steps 1.3 and 1.4 with [L4], and both $M$ and $d_2(x,y)$ are nonnegative by [L2] and [L5], so $M \le d_2(x,y)$ by [L5]. [step 1.3, step 1.4, L2, L4, L5]

2.5 $d_2(x,y)^2 = \sum_{k<n} t_k^2 \le \sum_{k<n} M^2 = n M^2 \le n^2 M^2 = (nM)^2$, using $t_k \le M$ with [L5] and [L4], then step 1.5 with $M^2 \ge 0$; since $d_2(x,y) \ge 0$ and $nM \ge 0$, [L5] gives $d_2(x,y) \le n M$. [step 1.3, step 1.4, step 1.5, L4, L5]

3.1 Every $d_\infty$-ball is a box with open factors, by step 2.3 and [L1], hence a basic open set of the product topology by [A2]; so every $d_\infty$-open set is product-open, by [L2] and [A2]. [step 2.3, A2, L1, L2]

3.2 With $r$ as in step 1.6: $B_{d_\infty}(x,r) = \prod_{k<n}(x_k-r, x_k+r) \subseteq \prod_{k<n}(x_k-\rho_k, x_k+\rho_k) \subseteq B$, since $r \le \rho_k$ for every $k$ by [L3]. [step 2.3, step 1.6, L3]

3.3 Steps 2.1, 2.2, 2.4 and 2.5 give $d_\infty \le d_1 \le n\,d_\infty$ and $d_\infty \le d_2 \le n\,d_\infty$ at every pair of points, which is claim 2, the constants $1$ and $n$ being positive by [L7]. [step 2.1, step 2.2, step 2.4, step 2.5, L7]

4.1 By steps 1.6 and 3.2 every basic open set of the product topology is $d_\infty$-open by [L2], hence every product-open set is $d_\infty$-open; with step 3.1 this gives claim 1. [step 3.1, step 1.6, step 3.2, A2, L2]

5.1 By step 3.3 and [L8] the metrics $d_1$, $d_2$ and $d_\infty$ have the same metric topology, which by step 4.1 is the product topology; so all three induce it and $\mathbb{R}^n$ with the product topology is metrizable. This is claim 3, and with steps 4.1 and 3.3 all three claims are proved. [step 3.3, step 4.1, L8] ∎

## Remarks

- **This item exists to stop one symbol meaning two things.** Before it,
  "$\mathbb{R}^2$" could denote the product of two copies of the real line or the
  metric space of [[lem-metrics-on-rn]], and "open in $\mathbb{R}^2$" would have
  had two readings. Claim 3 says they are one space, so every statement about
  open sets, closures, convergence and continuity in $\mathbb{R}^n$ proved on
  either side transfers verbatim to the other.

- **The $d_\infty$-ball is the natural object here and the $d_2$-ball is not.**
  The proof works with $d_\infty$ because its balls *are* the basic boxes; for
  $d_2$ the corresponding computation would need a round ball inscribed in a box
  and a box inscribed in a round ball, which is the content of the inequalities
  of claim 2 read geometrically.

- **Choice is spent only on finitely many radii.** Step 1.6 selects one radius per
  coordinate, and there are $n$ of them, so [[lem-finite-choice]] suffices and no
  form of the Axiom of Choice is used anywhere in this item; step 3.2 only uses the
  radius already built there.
