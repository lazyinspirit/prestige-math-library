---
id: ex-reciprocals-with-zero-are-compact
kind: example
title: "$\\{1/k : k \\ge 1\\} \\cup \\{0\\}$ is compact while $\\{1/k : k \\ge 1\\}$ is not closed"
status: published
origin: session
deps: [thm-heine-borel-characterisation-r, def-limit-point-r, thm-closure-characterisations-r, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(e))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Put

$$B \;:=\; \{\, 1/k : k \in \mathbb{N},\ k \ge 1 \,\} \qquad \text{and} \qquad A \;:=\; B \cup \{0\} .$$

The index runs over $k \ge 1$ because $1/0$ is undefined. Then $A$ is compact
([[thm-heine-borel-characterisation-r]]) and $B$ is not closed
([[def-open-and-closed-in-r]]). The single point $0$ is the whole difference:
it is a limit point of $B$ ([[def-limit-point-r]]) that $B$ omits, and adjoining
it turns a non-closed bounded set into a compact one.

## Facts & Assumptions

**Given:** The sets $B := \{\, 1/k : k \ge 1 \,\}$ and $A := B \cup \{0\}$, where $1/k$ denotes the inverse of the canonical natural $k \cdot 1_{\mathbb{R}}$, defined and positive for $k \ge 1$.

[L1] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-bounded-set]]).

[L2] A set is closed exactly when it contains all its limit points; a point is a limit point of $S$ when every punctured neighbourhood of it meets $S$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L3] $U$ is open when each of its points has a neighbourhood inside it, and $S$ is closed when $\mathbb{R} \setminus S$ is open; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L5] Canonical naturals are positive and increasing for $k \ge 1$, with $1 \cdot 1_{\mathbb{R}} = 1$; reciprocation of positives is positive and reverses the order, so $1 \le m \le n$ gives $0 < 1/n \le 1/m \le 1$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Absolute value: $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$; the order is total and transitive ([[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $A$ lies in $[0,1]$, and $0$ and $1$ belong to $A$: indeed $1 = 1/1 \in B$, and $0 < 1/k \le 1$ for every $k \ge 1$ by [L5]. In particular $A$ is bounded. [L1, L5]

1.2 $0$ is a limit point of $B$ and $0 \notin B$: given a real $\varepsilon > 0$, [L4] supplies $n \ge 1$ with $1/n < \varepsilon$, and $1/n \in B$ with $1/n \ne 0$, so $1/n$ lies in the punctured neighbourhood of $0$ of radius $\varepsilon$ and meets $B$; and $0 \notin B$ because every $1/k$ is positive by [L5]. [L2, L4, L5]

2.1 Let $x \in \mathbb{R} \setminus A$ with $x < 0$ or $x > 1$. Put $\varepsilon := -x$ in the first case and $\varepsilon := x - 1$ in the second; then $\varepsilon > 0$, and $y \in N_\varepsilon(x)$ gives $y < x + \varepsilon = 0$ in the first case and $y > x - \varepsilon = 1$ in the second, so $y \notin A$ by step 1.1. Hence $N_\varepsilon(x) \cap A = \varnothing$. [step 1.1, L3, L8]

2.2 Let $x \in \mathbb{R} \setminus A$ with $0 \le x \le 1$. Then $x \ne 0$ and $x \ne 1$ by step 1.1, so $0 < x < 1$. The set $\{\, k \in \mathbb{N} : k \ge 1 \text{ and } 1/k < x \,\}$ is nonempty by [L4], so it has a least element $k_0$ by [L6], and $k_0 \ne 1$ since $1/1 = 1 > x$; hence $k_0 \ge 2$ and $k_0 - 1 \ge 1$. By minimality $1/(k_0-1) < x$ fails, so $x \le 1/(k_0-1)$, and $x \ne 1/(k_0-1)$ because $x \notin A$, so $x < 1/(k_0-1)$. Put $\varepsilon := \min\{\, x - 1/k_0,\ 1/(k_0-1) - x \,\} > 0$ by [L7]. Then $N_\varepsilon(x) \cap A = \varnothing$: an element of $A$ is $0$ or $1/m$ with $m \ge 1$; for $0$ one has $|0 - x| = x > \varepsilon$ since $\varepsilon \le x - 1/k_0 < x$; for $m \ge k_0$ one has $1/m \le 1/k_0 \le x - \varepsilon$ by [L5]; and for $1 \le m \le k_0 - 1$ one has $1/m \ge 1/(k_0-1) \ge x + \varepsilon$ by [L5]. In each case the element is at distance at least $\varepsilon$ from $x$. [step 1.1, L3, L4, L5, L6, L7, L8]

2.3 $B$ is not closed: by step 1.2 the point $0$ is a limit point of $B$ that does not lie in $B$, so $B$ does not contain all its limit points and [L2] denies that it is closed. [step 1.2, L2]

3.1 $A$ is closed: every $x \in \mathbb{R} \setminus A$ falls under step 2.1 or step 2.2 by totality of the order, and in either case some $N_\varepsilon(x)$ misses $A$, so $\mathbb{R} \setminus A$ is open. With the boundedness of step 1.1 and [L1], $A$ is compact. [step 1.1, step 2.1, step 2.2, L1, L3, L8]

4.1 So $A = \{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is compact by step 3.1 while $B = \{\, 1/k : k \ge 1 \,\}$ is not closed by step 2.3, hence not compact by [L1]. [step 2.3, step 3.1, L1] ∎

## Remarks

- **$B$ is bounded and not compact, and it fails to be closed by a single
  point.** Adjoining $0$ is what the verification above shows to be enough:
  $A = B \cup \{0\}$ is closed. The same computation, run at a point $x \notin A$
  lying between two consecutive reciprocals, is the one that isolates each
  $1/k$ from the rest of $B$.

- **$A$ is compact and has an isolated point.** Every $1/k$ is isolated in $A$,
  so $A$ is not perfect ([[def-perfect-set-r]]); compactness and perfectness are
  independent properties, and this is a compact set that is countable, which is
  possible exactly because it is not perfect
  ([[thm-perfect-set-uncountable-r]]).

- **The index range matters.** The set is indexed from $k = 1$; $1/0$ does not
  exist. Since $\mathbb{N}$ contains $0$ ([[def-sequence]]), a set written
  $\{1/k : k \in \mathbb{N}\}$ without a restriction would be ill formed, and the
  same care is needed at the threshold $K = n-1$ used in the convergence
  arguments on the parent page.
