---
id: ex-nested-intervals-single-point
kind: example
title: "The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nested-interval-property, def-interval, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-sequence, def-real-limit, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
---

## Example

For $k \ge 1$ let $I_k := [0, 1/k]$, a nonempty closed bounded interval
([[def-interval]]). The family is nested, its lengths tend to $0$, and

$$\bigcap_{k \ge 1} \Big[0, \frac{1}{k}\Big] = \{0\}.$$

This is the standard instance of the single-point case of
[[thm-nested-interval-property]], and the intersection is computed twice over:
once by the theorem, which says the intersection *is* a single point, and once by
inspection, which says that point is $0$.

**Indexing.** Written on $\mathbb{N}$, the family is $J_j := [0, 1/(j+1)]$ for
$j \in \mathbb{N}$, which is the same family under the substitution $k = j+1$
([[def-sequence]]). The verification uses $(J_j)$.

## Facts & Assumptions

**Given:** For $j \in \mathbb{N}$ the closed bounded interval $J_j := [0, 1/(j+1)]$, where $j+1$ denotes the canonical natural $(j+1)\cdot 1_{\mathbb{R}}$, which is positive and hence invertible; and the lengths $\ell_j := 1/(j+1) - 0 = 1/(j+1)$.

[L1] Intervals: $[a,b] = \{x : a \le x \le b\}$ is a closed bounded interval, nonempty exactly when $a \le b$, of length $b - a$; and $[a,a] = \{a\}$ ([[def-interval]]).

[L2] Nested interval property: a nested sequence of nonempty closed bounded intervals has nonempty intersection, and that intersection is a single point exactly when the lengths tend to $0$ ([[thm-nested-interval-property]]).

[L3] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L4] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L6] Absolute value: $|t| = t$ when $t \ge 0$ ([[lem-of-abs-value]]).

[L7] Convergence of a sequence of reals to $0$; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L8] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Each $J_j$ is a nonempty closed bounded interval: $j+1 \ge 1$ gives $1/(j+1) > 0$, so $0 \le 1/(j+1)$ and [L1] applies; its length is $\ell_j = 1/(j+1)$. [given, L1, L3, L4]

2.1 The family is nested: $0 < (j+1) < (j+2)$ gives $0 < 1/(j+2) < 1/(j+1)$, so $0 \le x \le 1/(j+2)$ implies $0 \le x \le 1/(j+1)$, that is $J_{j+1} \subseteq J_j$. [step 1.1, L3, L4]

2.2 The lengths tend to $0$. Let $\varepsilon > 0$ be real and use [L5] to fix a natural $n \ge 1$ with $1/n < \varepsilon$. For every $j \ge n$ we have $0 < n \le j+1$, hence $0 < 1/(j+1) \le 1/n < \varepsilon$, and $|\ell_j - 0| = \ell_j < \varepsilon$ since $\ell_j > 0$. [step 1.1, L3, L4, L5, L6, L7, L8]

3.1 By [L2] applied to steps 1.1, 2.1 and 2.2, the intersection $\bigcap_j J_j$ is nonempty and is a single point. [step 1.1, step 2.1, step 2.2, L2]

4.1 That point is $0$: indeed $0 \in J_j$ for every $j$, since $0 \le 0 \le 1/(j+1)$, so $0$ lies in the intersection, and a set that is a single point and contains $0$ is $\{0\}$. [step 3.1, step 1.1, L1]

5.1 Hence $\bigcap_{j} J_j = \{0\}$, which in the notation of the statement is $\bigcap_{k \ge 1}[0,1/k] = \{0\}$. [step 3.1, step 4.1, L1] ∎

## Remarks

- **The two computations are independent and both are needed.** That the
  intersection is *a* single point comes from [[thm-nested-interval-property]] and
  uses that the lengths are null; that the point is $0$ comes from inspection.
  Without the theorem one would still have to rule out the intersection being
  larger than $\{0\}$, which is exactly the content of the length condition.

- **The Archimedean property is the whole of step 2.2.** In a non-Archimedean
  ordered field the same family has lengths that do not tend to $0$, and the
  intersection contains every positive infinitesimal, so it is not a single
  point. What makes the example come out as stated is
  [[cor-archimedean-reciprocal]].

- **Compare the open version.** Removing the left endpoint gives $(0, 1/k)$,
  whose intersection is *empty* ([[cex-nested-open-intervals-empty]]). The two
  computations differ in exactly one respect, whether the common point $0$
  belongs to the sets, and that is the hypothesis of closedness in the theorem.
