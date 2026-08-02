---
id: lem-bounded-remetrisation
kind: lemma
title: "$\\min(d,1)$ and $d/(1+d)$ are metrics uniformly equivalent to $d$, so every metric space carries a bounded metric with the same topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-space, def-equivalent-metrics, thm-metric-equivalence-hierarchy,
       def-metric-bounded-diameter, lem-of-add-order, lem-of-inverse-positive,
       def-max-min, lem-finite-set-has-max, lem-of-sign-rules, cor-of-one-positive,
       lem-metric-nonnegativity, def-metric-ball, def-field, def-ordered-field,
       def-complete-ordered-field, lem-sup-unique]
justified_by: []
forward_refs: [cex-uniformly-not-lipschitz-equivalent]
aliases: []
landmark: false
short: "every metric space is boundedly remetrisable"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
    - title: "J. Munkres, Topology, 2nd ed., §20"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and define, for
$x, y \in X$,

$$d'(x,y) := \min\{\, d(x,y),\ 1 \,\}, \qquad d''(x,y) := \frac{d(x,y)}{1 + d(x,y)} .$$

Both are well defined: $d(x,y) \ge 0$ ([[lem-metric-nonnegativity]]), so
$1 + d(x,y) > 0$ and is invertible, and the minimum of a two-element set of
reals exists ([[lem-finite-set-has-max]], [[def-max-min]]). Then:

1. $d'$ and $d''$ are metrics on $X$.
2. $d'(x,y) \le 1$ and $d''(x,y) < 1$ for all $x,y$; hence $(X,d')$ and
   $(X,d'')$ are bounded metric spaces
   ([[def-metric-bounded-diameter]]), and if $X \ne \emptyset$ then
   $\operatorname{diam}(X) \le 1$ for both.
3. $d'$ and $d''$ are each uniformly equivalent to $d$, hence topologically
   equivalent to it ([[def-equivalent-metrics]],
   [[thm-metric-equivalence-hierarchy]]).

**Consequently every metric space carries a bounded metric with exactly the same
topology**, so boundedness cannot be read off the topology alone.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, points $x, y, z \in X$, a real $\varepsilon > 0$, and the two functions $\varphi_1(t) := \min\{t, 1\}$ and $\varphi_2(t) := t(1+t)^{-1}$, defined for reals $t \ge 0$, so that $d' = \varphi_1 \circ d$ and $d'' = \varphi_2 \circ d$.

[L1] A metric is nonnegative and satisfies (M1), (M2), (M3) ([[lem-metric-nonnegativity]], [[def-metric-space]]).

[L2] The minimum of a two-element set of reals exists, is one of the two elements, and is a lower bound of both ([[lem-finite-set-has-max]], [[def-max-min]]).

[L3] $0 < 1$ ([[cor-of-one-positive]]); a sum of positives is positive and inequalities may be added, in the strict form of [[lem-of-add-order]] and, with the case of equality settled by totality, in the nonstrict form ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Inverses and order: $u > 0$ gives $u^{-1} > 0$, and $0 < u < v$ gives $0 < v^{-1} < u^{-1}$ ([[lem-of-inverse-positive]]); [[lem-of-inverse-positive]] states only those strict forms, so the nonstrict version used below, that $0 < u \le v$ gives $0 < v^{-1} \le u^{-1}$, is that statement together with the case $u = v$, in which the two inverses are equal, the order being total ([[def-ordered-field]], [[def-complete-ordered-field]]). Multiplying an inequality by a positive preserves it, in the strict form of [[lem-of-sign-rules]] and, with the same equality case, in the nonstrict form; and $u u^{-1} = 1$ ([[def-field]]).

[L5] Bounded subset and diameter: $A$ is bounded when it lies in some ball, and for nonempty bounded $A$ the diameter is the least upper bound of the distances, so any upper bound of those distances bounds the diameter ([[def-metric-bounded-diameter]], [[def-metric-ball]], [[lem-sup-unique]]).

[L6] Uniform and topological equivalence, and the implication between them ([[def-equivalent-metrics]], [[thm-metric-equivalence-hierarchy]]).

## Proof

**Proof technique:** direct.

1.1 Properties of $\varphi_1$ on $t \ge 0$: it is one of $t$ and $1$, so $0 \le \varphi_1(t) \le t$ and $\varphi_1(t) \le 1$; $\varphi_1(t) = 0$ exactly when $t = 0$, since $1 \ne 0$; it is nondecreasing, because for $0 \le s \le t$ the value $\varphi_1(s)$ is $s \le t$ or $1$, and in both cases it is a lower bound of $\{t,1\}$, hence at most $\varphi_1(t)$; and it is subadditive, since for $s, t \ge 0$ either one of $s, t$ is $\ge 1$, and then $\varphi_1(s) + \varphi_1(t) \ge 1 \ge \varphi_1(s+t)$, or both are $< 1$, and then $\varphi_1(s) + \varphi_1(t) = s + t \ge \varphi_1(s+t)$. [L2, L3]

1.2 Properties of $\varphi_2$ on $t \ge 0$: here $1 + t \ge 1 > 0$, so $(1+t)^{-1} > 0$ and $(1+t)^{-1} \le 1$, whence $0 \le \varphi_2(t) \le t$; also $t < 1 + t$ gives $\varphi_2(t) < (1+t)(1+t)^{-1} = 1$; $\varphi_2(t) = 0$ exactly when $t = 0$; $\varphi_2$ is strictly increasing, because $\varphi_2(t) = 1 - (1+t)^{-1}$ and $0 \le s < t$ gives $0 < 1+s < 1+t$, hence $(1+t)^{-1} < (1+s)^{-1}$; and it is subadditive, since for $s,t \ge 0$ one has $0 < 1+s \le 1+s+t$ and $0 < 1+t \le 1+s+t$, so $\varphi_2(s+t) = s(1+s+t)^{-1} + t(1+s+t)^{-1} \le s(1+s)^{-1} + t(1+t)^{-1} = \varphi_2(s) + \varphi_2(t)$. [L3, L4]

1.3 Both $d'$ and $d''$ are symmetric, being $\varphi_i$ applied to the symmetric function $d$, and both vanish exactly on the diagonal, since $\varphi_i(t) = 0$ exactly when $t = 0$ and $d(x,y) = 0$ exactly when $x = y$. [L1]

2.1 $d'$ is a metric: (M1) and (M2) are step 1.3, and (M3) follows because $d(x,z) \le d(x,y) + d(y,z)$ with $\varphi_1$ nondecreasing and subadditive on nonnegatives gives $d'(x,z) = \varphi_1(d(x,z)) \le \varphi_1(d(x,y) + d(y,z)) \le \varphi_1(d(x,y)) + \varphi_1(d(y,z)) = d'(x,y) + d'(y,z)$. [step 1.1, step 1.3, L1]

2.2 $d''$ is a metric: identically, using that $\varphi_2$ is increasing and subadditive on nonnegatives, $d''(x,z) \le \varphi_2(d(x,y) + d(y,z)) \le d''(x,y) + d''(y,z)$. [step 1.2, step 1.3, L1]

2.3 Boundedness: $d'(x,y) \le 1 < 2$ and $d''(x,y) < 1 < 2$ for all $x,y$, so if $X \ne \emptyset$ then fixing any $x_0 \in X$ gives $X \subseteq B_{d'}(x_0,2)$ and $X \subseteq B_{d''}(x_0,2)$, while $X = \emptyset$ is bounded outright; and $1$ is an upper bound of all the distances, so $\operatorname{diam}(X) \le 1$ in both metrics when $X \ne \emptyset$. This is claim 2. [step 1.1, step 1.2, L3, L5]

3.1 $d'$ is uniformly equivalent to $d$: given $\varepsilon > 0$, take $\delta := \varepsilon$, so that $d(x,y) < \delta$ gives $d'(x,y) \le d(x,y) < \varepsilon$; and take $\delta' := \min\{\varepsilon, 1\} > 0$, so that $d'(x,y) < \delta' \le 1$ forces $\varphi_1(d(x,y)) \ne 1$, hence $d'(x,y) = d(x,y)$ by [L2], hence $d(x,y) < \delta' \le \varepsilon$. [step 1.1, step 2.1, L2, L3]

3.2 $d''$ is uniformly equivalent to $d$: given $\varepsilon > 0$, take $\delta := \varepsilon$, so that $d(x,y) < \delta$ gives $d''(x,y) \le d(x,y) < \varepsilon$; and take $\delta' := \varphi_2(\varepsilon) > 0$, so that $d''(x,y) < \delta'$ forces $d(x,y) < \varepsilon$, since $d(x,y) \ge \varepsilon$ would give $\varphi_2(d(x,y)) \ge \varphi_2(\varepsilon) = \delta'$ by monotonicity. [step 1.2, step 2.2, L4]

4.1 Uniform equivalence implies topological equivalence, so $d'$ and $d''$ have exactly the metric topology of $d$; this completes claim 3. [step 3.1, step 3.2, L6]

5.1 Claims 1, 2 and 3 hold by steps 2.1 and 2.2, step 2.3, and steps 3.1, 3.2 and 4.1; hence every metric space carries a bounded metric inducing the same topology. [step 2.1, step 2.2, step 2.3, step 4.1] ∎

## Remarks

- **Two constructions rather than one, on purpose.** $\min\{d,1\}$ is the shorter
  argument and is the one used by the counterexamples on the companion page;
  $d/(1+d)$ is strictly less than $1$ everywhere and is strictly increasing in
  $d$, which makes it the better behaved of the two when the value of the metric
  is to be compared, and it is the form that generalises to countable products.
- **Neither is Lipschitz equivalent to $d$ when $d$ is unbounded.** A Lipschitz
  bound $\alpha d \le d'$ with $\alpha > 0$ would force $d \le \alpha^{-1}$
  everywhere, which fails as soon as $d$ takes arbitrarily large values; the real
  line is the witness ([[cex-uniformly-not-lipschitz-equivalent]]).
- **Boundedness is therefore not a topological property**, which is recorded as
  [[fs-boundedness-is-a-topological-property]] with the real line as witness.
- **The bound $\operatorname{diam}(X) \le 1$ need not be an equality, and the
  two constructions differ on when it is.** For a one-point space both new
  metrics are identically $0$. For $d' = \min\{d,1\}$ the bound is attained as
  soon as $d$ takes some value $\ge 1$, since then $d'$ takes the value $1$
  itself, and the companion page computes one such case. For
  $d'' = d/(1+d)$ the value $1$ is never taken at all, by claim 2, so on a space
  where $d$ is bounded the diameter in $d''$ is strictly below $1$: for instance
  on a two-point space with $d = 1$ the new distance is $1/2$.
