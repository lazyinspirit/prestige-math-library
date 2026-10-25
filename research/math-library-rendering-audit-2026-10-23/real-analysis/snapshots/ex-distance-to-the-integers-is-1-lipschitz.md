---
id: ex-distance-to-the-integers-is-1-lipschitz
kind: example
title: "The distance $\\psi(x) = d(x, \\mathbb{Z})$ from a real number to the integers is $1$-Lipschitz, hence uniformly continuous, takes values in $[0,1/2]$, and vanishes exactly on $\\mathbb{Z}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-bounded-diameter, lem-distance-to-set-is-lipschitz, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, thm-metric-regularity-hierarchy, def-lipschitz-holder-contraction, def-uniform-continuity-real, def-continuity-real, lem-integer-part, def-integers, lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, def-metric-space, def-infimum, def-max-min, lem-finite-set-has-max, def-interval, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [ex-psi-is-1-lipschitz]
landmark: true
short: "$\\psi = d(\\cdot,\\mathbb{Z})$ is $1$-Lipschitz"
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
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Floor and ceiling functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Floor_and_ceiling_functions"
    - title: "Triangle wave (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Triangle_wave"
    - title: "J. Heinonen, Lectures on Lipschitz Analysis"
      url: "https://www.math.uchicago.edu/~shmuel/QuantCourse%20/Metric%20Space/Heinonen%2C%20Lecs%20on%20Lip%20Analysis.pdf"
pipeline_run: null
---

## Example

Take $\mathbb{R}$ with its usual metric $d(x,y) = |x-y|$
([[lem-real-line-is-a-metric-space]]), identify $\mathbb{Z}$ with its canonical
copy inside $\mathbb{R}$ ([[def-integers]], [[lem-nat-embeds-int]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and let

$$\psi(x) \;:=\; d(x, \mathbb{Z}) \;=\; \inf\{\, |x - n| \ : \ n \in \mathbb{Z} \,\}$$

be the distance from $x$ to the nonempty set $\mathbb{Z}$
([[def-metric-bounded-diameter]]). Then:

1. **$\psi$ is $1$-Lipschitz on $\mathbb{R}$**: $|\psi(x) - \psi(y)| \le |x-y|$
   for all real $x, y$. Consequently $\psi$ is uniformly continuous on
   $\mathbb{R}$ ([[def-uniform-continuity-real]]) and continuous on $\mathbb{R}$
   ([[def-continuity-real]]).
2. **The infimum is attained, and computed.** Writing $m := \lfloor x \rfloor$
   for the integer part of $x$ ([[lem-integer-part]]) and $t := x - m$, so that
   $0 \le t < 1$,
   $$\psi(x) \;=\; \min\{\, t,\ 1-t \,\} \;=\; \min\bigl\{\, |x-m|,\ |x-(m+1)| \,\bigr\} ,$$
   so $\psi(x) = |x - n|$ for $n = m$ or $n = m+1$.
3. **Range.** $0 \le \psi(x) \le 1/2$ for every real $x$
   ([[def-interval]]).
4. **Zero set.** $\psi(x) = 0$ if and only if $x \in \mathbb{Z}$.

**Why this example is here.** It is the standard uniformly continuous function
of this track that is not defined by a formula in the field operations, and it
is obtained from the metric machinery rather than rebuilt: claim 1 is
[[lem-distance-to-set-is-lipschitz]] applied to $A := \mathbb{Z}$ in the metric
space $\mathbb{R}$, transported to a statement about a real function by
[[lem-real-and-metric-notions-agree]], clause 3. Only claims 2 to 4, which
compute the value, need an argument of their own.

**The same function is computed elsewhere, and nothing here depends on that.**
[[ex-distance-to-the-integers]] introduces $\psi$ on the companion page of
[[def-function-limit]] and proves the same computation together with
$1$-periodicity and the value at half-integers. That item lives on an examples
page, which is a leaf of the dependency graph, so no item may rest on it; the
verification below is therefore self-contained, and the duplication is
deliberate rather than an oversight.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the metric $d(x,y) = |x-y|$; the canonical copy of $\mathbb{Z}$ inside $\mathbb{R}$; a real $x$, the integer $m := \lfloor x \rfloor$ and the real $t := x - m$; and $\psi(x) := d(x,\mathbb{Z})$.

[L1] Distance to a nonempty set: for nonempty $A \subseteq X$ in a metric space, $d(x,A) := \inf\{\, d(x,a) : a \in A \,\}$, the infimum existing because the set of distances is nonempty and bounded below by $0$ ([[def-metric-bounded-diameter]], [[def-infimum]], [[def-metric-space]]).

[L2] $|d(x,A) - d(y,A)| \le d(x,y)$: the distance to a fixed nonempty set is $1$-Lipschitz as a map of metric spaces ([[lem-distance-to-set-is-lipschitz]]).

[L3] Dictionary: for $A \subseteq \mathbb{R}$ with $d(x,y) = |x-y|$, a map is Lipschitz with constant $L$ as a map of metric spaces exactly when $|f(x)-f(y)| \le L|x-y|$ for all $x,y$; and a Lipschitz real function is uniformly continuous, hence continuous ([[lem-real-and-metric-notions-agree]], clauses 1, 3 and 6, [[thm-metric-regularity-hierarchy]], [[def-lipschitz-holder-contraction]], [[def-uniform-continuity-real]], [[def-continuity-real]]).

[L4] $\mathbb{R}$ with $d(x,y) = |x-y|$ is a metric space ([[lem-real-line-is-a-metric-space]]), and $\mathbb{Z}$ sits inside $\mathbb{R}$ as a totally ordered subring containing $0$ and $1$ and closed under $n \mapsto n \pm 1$, with no integer strictly between $n$ and $n+1$ ([[def-integers]], [[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]).

[L5] Integer part: for every real $x$ there is exactly one integer $m$ with $m \le x < m+1$ ([[lem-integer-part]]).

[L6] Infimum and minimum: a lower bound of a set that belongs to the set is its infimum and its minimum ([[def-infimum]], [[def-max-min]]); and the minimum of a two-element set of reals exists and is one of the two ([[lem-finite-set-has-max]]).

[L7] Absolute value and order: $|u| \ge 0$; $|u| = 0$ exactly when $u = 0$; $|u| = u$ for $u \ge 0$ and $|u| = -u$ for $u \le 0$; the order is total; $1/2 > 0$ and $1 - 1/2 = 1/2$ ([[lem-of-abs-value]], [[def-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Z}$ is a nonempty subset of the metric space $\mathbb{R}$, since $0 \in \mathbb{Z}$, so $\psi(x) = d(x,\mathbb{Z})$ is defined for every real $x$ by [L1], and $\psi(x) \ge 0$. [L1, L4, L7]

1.2 By [L5] the integer $m = \lfloor x \rfloor$ satisfies $m \le x < m+1$, so $t = x - m$ satisfies $0 \le t < 1$, and $(m+1) - x = 1 - t$ satisfies $0 < 1 - t \le 1$. [L5, L7]

2.1 **Claim 1.** By [L2], $|\psi(x) - \psi(y)| = |d(x,\mathbb{Z}) - d(y,\mathbb{Z})| \le d(x,y) = |x-y|$ for all real $x,y$; by [L3] this says exactly that $\psi$ is Lipschitz with constant $1$ as a real function on $\mathbb{R}$, hence uniformly continuous on $\mathbb{R}$ and continuous on $\mathbb{R}$. [step 1.1, L2, L3]

2.2 **Every distance from $x$ to an integer is at least $\min\{t, 1-t\}$.** Let $n \in \mathbb{Z}$. By [L4] and totality either $n \le m$ or $m < n$, and in the second case $m+1 \le n$. If $n \le m$ then $x - n \ge x - m = t \ge 0$, so $|x-n| = x-n \ge t$. If $m+1 \le n$ then $n - x \ge (m+1) - x = 1-t > 0$, so $|x-n| = n-x \ge 1-t$. Either way $|x-n| \ge \min\{t, 1-t\}$. [step 1.2, L4, L6, L7]

2.3 **Both candidate values occur.** Since $t \ge 0$ we have $t = |x-m|$, and since $1-t > 0$ we have $1-t = |x-(m+1)|$, with $m$ and $m+1$ in $\mathbb{Z}$. [step 1.2, L4, L7]

3.1 **Claim 2.** By steps 2.2 and 2.3 the real $\min\{t,1-t\}$ is a lower bound of $\{\, |x-n| : n \in \mathbb{Z} \,\}$ belonging to that set, so by [L6] it is the infimum and the minimum: $\psi(x) = \min\{t,1-t\} = \min\{|x-m|, |x-(m+1)|\}$, attained at $n = m$ or $n = m+1$. [step 2.2, step 2.3, L1, L6]

4.1 **Claim 3.** $\psi(x) \ge 0$ since $t \ge 0$ and $1-t > 0$. And $\psi(x) \le 1/2$: if $t \le 1/2$ then $\psi(x) \le t \le 1/2$, while if $t > 1/2$ then $1-t < 1-1/2 = 1/2$ and $\psi(x) \le 1-t < 1/2$. So $0 \le \psi(x) \le 1/2$. [step 1.2, step 3.1, L7]

4.2 **Claim 4.** If $\psi(x) = 0$ then $\min\{t,1-t\} = 0$ by step 3.1; since $1-t > 0$ this forces $t = 0$, that is $x = m \in \mathbb{Z}$. Conversely if $x \in \mathbb{Z}$ then $|x-x| = 0$ is a member of the set of distances and $0$ is a lower bound of it by step 1.1, so $\psi(x) = 0$ by [L6]. [step 1.1, step 1.2, step 3.1, L6, L7]

5.1 Claims 1 to 4 are verified: $\psi$ is $1$-Lipschitz and therefore uniformly continuous and continuous on $\mathbb{R}$, its value at $x$ is $\min\{t, 1-t\}$ and is attained at a nearest integer, its values lie in $[0,1/2]$, and it vanishes exactly on $\mathbb{Z}$. [step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **No completeness of $\mathbb{R}$ is spent on the infimum here.** [[def-metric-bounded-diameter]] produces $d(x,\mathbb{Z})$ from the greatest-lower-bound property, but step 3.1 does not need that route: it exhibits an element of the set of distances that is also a lower bound, which is the definition of the infimum read directly ([[def-infimum]]). Completeness does enter once, through [[lem-integer-part]], whose existence half is the Archimedean property.

- **Why "nearest integer" is a theorem and not a phrase.** The words presuppose that a nearest integer exists, and that is exactly what steps 2.2 and 2.3 establish. When $t = 1/2$ there are two nearest integers, $m$ and $m+1$, and the formula $\min\{t,1-t\}$ is indifferent to which is taken, so nothing is selected.

- **What this contributes to the hierarchy.** $\psi$ is Lipschitz, hence uniformly continuous ([[lem-real-and-metric-notions-agree]], clause 6), and it is bounded and not monotone; so it is a uniformly continuous function that is neither a polynomial nor eventually constant, and it is the natural domain-wide example to set beside [[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]], where uniform continuity fails.
