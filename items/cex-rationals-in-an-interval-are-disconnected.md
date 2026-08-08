---
id: cex-rationals-in-an-interval-are-disconnected
kind: counterexample
title: "$\\mathbb{Q} \\cap [0,2]$ is bounded and disconnected, so being an interval of $\\mathbb{Q}$ is not enough"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-connected-subsets-of-r-are-intervals, def-connected-r, fs-sqrt2-rational, thm-of-square-roots, def-rationals, lem-rat-embeds-dense, def-interval, def-interior-closure-boundary-r, def-open-and-closed-in-r, thm-closure-characterisations-r, lem-of-square-monotone, def-bounded-set, def-ordered-field, def-complete-ordered-field, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
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
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Square root of 2 (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the set $E := \mathbb{Q}_{\mathbb{R}} \cap [0,2]$ of rationals
between $0$ and $2$ is connected ([[def-connected-r]]), where
$\mathbb{Q}_{\mathbb{R}}$ is the copy of $\mathbb{Q}$ inside $\mathbb{R}$
([[lem-rat-embeds-dense]]).

$E$ is bounded, and it contains **every rational** lying between its two
endpoints, so it is order-convex as a subset of the ordered field $\mathbb{Q}$:
it is an interval of that field. As a subset of $\mathbb{R}$ it is nevertheless
disconnected, split at the irrational point $\sqrt 2$. So the equivalence of
[[thm-connected-subsets-of-r-are-intervals]] genuinely uses the completeness of
$\mathbb{R}$, and "is an interval of the order it carries from $\mathbb{Q}$" is
not enough to make a set connected.

## Facts & Assumptions

**Given:** The copy $\mathbb{Q}_{\mathbb{R}}$ of $\mathbb{Q}$ in $\mathbb{R}$, the set $E := \mathbb{Q}_{\mathbb{R}} \cap [0,2]$, and the real $r$ with $r \ge 0$ and $r^2 = 2$.

[A1] The refuted claim: $E$ is connected.

[L1] Separated sets, disconnection and connectedness ([[def-connected-r]]).

[L2] $\overline{A}$ is the smallest closed superset of $A$, so $\overline{A} \subseteq F$ for every closed $F \supseteq A$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]]).

[L3] Each of $(-\infty, c]$ and $[c,\infty)$ is a closed set and each of $(-\infty,c)$ and $(c,\infty)$ is an open set ([[def-open-and-closed-in-r]], [[def-interval]]).

[L4] In a complete ordered field every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$ ([[thm-of-square-roots]]).

[L5] No rational squares to $2$ ([[fs-sqrt2-rational]]); the map $q \mapsto \hat q$ is an injective embedding of ordered fields, so it preserves sums, products and the order ([[lem-rat-embeds-dense]], [[def-rationals]]).

[L6] Squaring is strictly monotone on the nonnegatives: $0 \le a < b$ gives $a^2 < b^2$ ([[lem-of-square-monotone]]); $0 < 1$ and the order is total and transitive ([[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] A set is bounded when it has an upper and a lower bound ([[def-bounded-set]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L4] there is a unique real $r \ge 0$ with $r^2 = 2$, and $0 < r < 2$: indeed $r \ne 0$ since $0^2 = 0 \ne 2$, while $r \ge 2$ would give $r^2 \ge 4 > 2$ by [L6]. [L4, L6]

1.2 $r \notin \mathbb{Q}_{\mathbb{R}}$: if $r = \hat q$ for a rational $q$, then $\widehat{q^2} = \hat q \cdot \hat q = r^2 = 2 = \hat 2$ by [L5], and injectivity of the embedding gives $q^2 = 2$ in $\mathbb{Q}$, contradicting [L5]. [L5]

1.3 $E$ is bounded, since $0 \le y \le 2$ for every $y \in E$ by the definition of $E$. [given, L7]

2.1 Put $A := E \cap (-\infty, r)$ and $B := E \cap (r, \infty)$. Then $A \cup B = E$, because every $y \in E$ satisfies $y \ne r$ by step 1.2 and hence $y < r$ or $y > r$; and both are nonempty, since $0 \in A$ and $2 \in B$ by step 1.1, both being rationals in $[0,2]$. [step 1.1, step 1.2, L3, L5, L6]

3.1 $A$ and $B$ are separated: $(-\infty, r]$ is closed and contains $A$, so $\overline{A} \subseteq (-\infty,r]$ by [L2] and hence $\overline{A} \cap B \subseteq (-\infty,r] \cap (r,\infty) = \varnothing$; symmetrically $\overline{B} \subseteq [r,\infty)$ and $A \cap \overline{B} = \varnothing$. Hence $(A,B)$ is a disconnection of $E$ and $E$ is disconnected, so the claim [A1] is refuted. [step 2.1, A1, L1, L2, L3] ∎

## Remarks

- **What the witness shows about
  [[thm-connected-subsets-of-r-are-intervals]].** That theorem says a subset of
  $\mathbb{R}$ is connected exactly when it is order-convex **in $\mathbb{R}$**.
  $E$ is not order-convex in $\mathbb{R}$: the point $r$ lies between $0$ and
  $2$ and is not in $E$. So no contradiction arises, and the example locates
  precisely what "interval" has to mean in the theorem: order-convex with
  respect to the complete order, not with respect to the order of a dense
  subfield.

- **Where completeness is spent in the theorem, and why it is absent here.** The
  proof of [[thm-connected-subsets-of-r-are-intervals]] produces a supremum, and
  that supremum is the point at which the two pieces of a would-be disconnection
  must meet. For $E$ the corresponding supremum is $r$, which exists in
  $\mathbb{R}$ and not in $\mathbb{Q}$; inside $\mathbb{Q}$ there is no point at
  which to detect the split, which is exactly why $E$ looks like an interval
  there.

- **The same phenomenon in a different guise** is
  [[cex-closed-bounded-in-q-not-compact]]: a set that behaves well inside
  $\mathbb{Q}$ because the real number that would spoil it is missing from
  $\mathbb{Q}$. In both cases the missing number is $\sqrt 2$.
