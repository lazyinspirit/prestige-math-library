---
id: cex-set-distance-is-not-a-metric
kind: counterexample
title: "$\\mathbb{Z}$ and $\\{n + 1/n : n \\ge 2\\}$ are disjoint closed subsets of $\\mathbb{R}$ at distance $0$, so the set-to-set distance is not a metric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-bounded-diameter, def-metric-space, thm-metric-closure-characterisation,
       def-integers, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive,
       def-isometry-and-metric-embedding, lem-real-line-is-a-metric-space,
       lem-of-q-embeds, lem-int-embeds-rat, lem-nat-embeds-int, thm-int-ordered-ring,
       lem-nat-discrete, lem-inf-epsilon, def-infimum, thm-infimum-property,
       def-metric-topology, def-metric-ball, lem-of-abs-value, def-abs-value,
       prop-of-reciprocal-order, lem-finite-set-has-max, def-max-min,
       lem-of-naturals-positive, def-natural-numbers, lem-of-add-order,
       lem-of-sign-rules, cor-of-one-positive, lem-metric-nonnegativity,
       def-ordered-field, def-complete-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
short: "$d(A,B) = 0$ with $A \\cap B = \\emptyset$"
proof_strategy: direct
cx_machine_verified: false
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
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "Hausdorff distance (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_distance"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the set-to-set distance
$d(A,B) = \inf\{d(a,b) : a \in A,\ b \in B\}$ of
[[def-metric-bounded-diameter]] is a metric on the nonempty subsets of a metric
space; specifically, that it satisfies the separation axiom (M1) of
[[def-metric-space]], so that $d(A,B) = 0$ forces $A = B$.

Work in $\mathbb{R}$ with its usual metric ([[lem-real-line-is-a-metric-space]])
and write $m$ for the canonical copy of an integer $m$ inside $\mathbb{R}$
([[def-integers]], [[lem-int-embeds-rat]], [[lem-of-q-embeds]]). Put

$$A := \{\, m : m \in \mathbb{Z} \,\}, \qquad B := \Big\{\, n + \tfrac{1}{n} \;:\; n \in \mathbb{N},\ n \ge 2 \,\Big\}.$$

Then $A$ and $B$ are nonempty, **disjoint**, **closed** in $\mathbb{R}$, and

$$d(A,B) = 0 \qquad \text{while} \qquad A \ne B .$$

So (M1) fails for the set-to-set distance, and it fails on a pair of closed sets:
closedness is not the missing hypothesis. Moreover $d(b, A) > 0$ for **every**
individual $b \in B$, so the infimum over pairs is not attained anywhere.

## Facts & Assumptions

**Given:** The real line with $d_{\mathbb{R}}(u,v) = |u-v|$; the sets $A$ and $B$ above; and, for a subset $E \subseteq \mathbb{R}$, the property of being $c$-separated for a real $c > 0$, meaning $|e - e'| \ge c$ whenever $e, e' \in E$ with $e \ne e'$.

[L1] The embeddings $\mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ are injective and order preserving ([[lem-int-embeds-rat]], [[lem-of-q-embeds]], [[def-integers]]), and $\mathbb{Z}$ is totally ordered ([[thm-int-ordered-ring]]); every integer $\ge 0$ is the image of a unique natural under $\mathbb{N} \to \mathbb{Z}$, which is injective and order preserving ([[lem-nat-embeds-int]]); and a natural $n \ne 0$ satisfies $n \ge 1$ ([[lem-nat-discrete]], [[def-natural-numbers]]).

[L2] Canonical naturals in $\mathbb{R}$: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reverse the order ([[lem-of-inverse-positive]]); and $r > 1$ gives $0 < 1/r < 1$ ([[prop-of-reciprocal-order]]).

[L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Absolute value: $|t| \ge 0$, $|t| = t$ for $t \ge 0$, $|-t| = |t|$, and $|t| < c$ is equivalent to $-c < t < c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] Infima: $d(x,E)$ and $d(E,F)$ exist for nonempty sets, being infima of nonempty sets bounded below by $0$ ([[def-metric-bounded-diameter]], [[lem-metric-nonnegativity]], [[thm-infimum-property]], [[def-infimum]]); and $\ell = \inf S$ for a lower bound $\ell$ of a nonempty $S$ bounded below exactly when for every real $\varepsilon > 0$ some $s \in S$ has $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L6] The closure of a nonempty $E$ is $\{x : d(x,E) = 0\}$, and $E$ is closed exactly when $E = \overline{E}$ ([[thm-metric-closure-characterisation]], [[def-metric-topology]], [[def-metric-ball]], [[def-isometry-and-metric-embedding]]).

[L7] Order and field arithmetic in $\mathbb{R}$: halving a positive real, adding inequalities, scaling by a positive, the minimum of a two-element set, and trichotomy ([[lem-of-add-order]], [[lem-of-sign-rules]], [[cor-of-one-positive]], [[lem-finite-set-has-max]], [[def-max-min]], [[def-field]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 No canonical integer lies strictly between $0$ and $1$: if $0 < k < 1$ in $\mathbb{R}$ for an integer $k$, then $0 < k < 1$ already in $\mathbb{Z}$, because the embedding is order preserving and injective and the order of $\mathbb{Z}$ is total; then $k > 0$ makes $k$ the image of a natural $n \ne 0$, so $n \ge 1$ and hence $k \ge 1$, contradicting $k < 1$. [L1, L7]

1.2 $B$ is $\tfrac{1}{2}$-separated: for naturals $p > q \ge 2$ one has $p - q \ge 1$ and $0 < 1/p < 1/q \le 1/2$, so $(p + 1/p) - (q + 1/q) = (p - q) - (1/q - 1/p) \ge 1 - 1/q \ge 1 - 1/2 = 1/2$; hence distinct elements of $B$ differ by at least $1/2$ in absolute value. [L2, L4, L7]

1.3 A $c$-separated set $E \subseteq \mathbb{R}$ is closed: let $x \notin E$. The ball $B(x, c/2)$ contains at most one point of $E$, since two distinct points of it would be within $c/2 + c/2 = c$ of each other, contradicting $c$-separation with a strict inequality. If it contains none, then $B(x,c/2) \cap E = \emptyset$. If it contains exactly one point $e$, then $x \ne e$ gives $t := |x - e| > 0$, and the radius $r := \min\{c/2,\ t\} > 0$ has $B(x,r) \cap E = \emptyset$, because any point of $E$ in $B(x,r) \subseteq B(x,c/2)$ would have to be $e$, while $|x - e| = t \ge r$ puts $e$ outside $B(x,r)$. So the complement of $E$ is open and $E$ is closed. [L4, L6, L7]

2.1 $A$ is $1$-separated: for integers $m \ne m'$ the difference $k := m - m'$ is a nonzero integer, so by step 1.1 and trichotomy either $k \ge 1$ or $-k \ge 1$, and in both cases $|m - m'| = |k| \ge 1$. [step 1.1, L1, L4, L7]

2.2 $A$ and $B$ are disjoint and both nonempty: $0 \in A$ and $2 + 1/2 \in B$; and if $n + 1/n = m$ for a natural $n \ge 2$ and an integer $m$, then the integer $m - n$ satisfies $m - n = 1/n$ with $0 < 1/n < 1$ by [L2], contradicting step 1.1. [step 1.1, L1, L2, L7]

3.1 $A$ and $B$ are closed subsets of $\mathbb{R}$, by steps 2.1, 1.2 and 1.3 with $c = 1$ and $c = 1/2$ respectively. [step 1.2, step 1.3, step 2.1]

3.2 $d(A,B) = 0$: the set $\{|a - b| : a \in A, b \in B\}$ is nonempty and bounded below by $0$, and for each natural $n \ge 2$ it contains $|n - (n + 1/n)| = 1/n$; given a real $\varepsilon > 0$, [L3] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and then $n + 1 \ge 2$ with $1/(n+1) < 1/n < \varepsilon = 0 + \varepsilon$, so the infimum is $0$ by the epsilon characterisation. [step 2.2, L2, L3, L4, L5]

4.1 Yet every single point of $B$ is at positive distance from $A$: for $b \in B$ we have $b \notin A = \overline{A}$ by steps 2.2 and 3.1, so $d(b,A) \ne 0$ by the description of the closure, and $d(b,A) \ge 0$, hence $d(b,A) > 0$. [step 2.2, step 3.1, L5, L6, L7]

5.1 So $A$ and $B$ are nonempty disjoint closed subsets of $\mathbb{R}$ with $d(A,B) = 0$ and $A \ne B$: the separation axiom (M1) fails for the set-to-set distance, and it fails even on closed sets and even though each individual point-to-set distance is strictly positive. [step 2.2, step 3.2, step 4.1] ∎

## Remarks

- **What survives.** The set-to-set distance is symmetric and vanishes on
  $A = A$, and on singletons it reduces to the metric. It satisfies no useful
  triangle inequality either: in $\mathbb{R}$ the sets $A = \{0\}$,
  $B = \{0, 10\}$, $C = \{10\}$ have $d(A,B) = d(B,C) = 0$ while
  $d(A,C) = 10$, so $d(A,C) \le d(A,B) + d(B,C)$ fails. The construction that
  does give a metric on a family of sets is the Hausdorff distance, which is
  taken up on a later page and not defined here.
- **Where the intuition breaks.** For a nonempty $A$, the function
  $x \mapsto d(x,A)$ vanishes exactly on $\overline{A}$
  ([[thm-metric-closure-characterisation]]), so a point at distance $0$ from a
  closed set does lie in it. The set-to-set distance takes an infimum over a
  second variable as well, and an infimum of a family of positive numbers can be
  $0$; step 4.1 is exactly the record of that.
- **The two sets approach each other only along their tails.** The point
  $n + 1/n$ of $B$ sits at distance exactly $1/n$ from the integer $n$; those
  distances are all positive, and by step 3.2 their infimum is $0$. That is the
  whole mechanism: the distance is driven to $0$ by pairs with $n$ arbitrarily
  large, never by any single pair.
