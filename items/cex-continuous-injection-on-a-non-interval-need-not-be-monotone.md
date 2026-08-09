---
id: cex-continuous-injection-on-a-non-interval-need-not-be-monotone
kind: counterexample
title: "A continuous injection on $[0,1] \\cup [2,3]$ that is not monotone, so the interval hypothesis cannot be dropped from the strict-monotonicity theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [thm-continuous-injection-on-an-interval-is-strictly-monotone, thm-continuous-inverse, def-monotone-function, def-continuity-real, thm-algebra-of-continuous-functions, def-interval, def-injection-surjection-bijection, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: false
short: "continuous injection, not monotone"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Chapter 4: Continuous Functions (Trinity College Dublin)"
      url: "https://www.maths.tcd.ie/~richardt/121/121-ch4.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every continuous injective function $f : A \to \mathbb{R}$
on a subset $A \subseteq \mathbb{R}$ is strictly monotone
([[def-continuity-real]], [[def-injection-surjection-bijection]],
[[def-monotone-function]]).

[[thm-continuous-injection-on-an-interval-is-strictly-monotone]] proves this
under the hypothesis that $A$ is order-convex ([[def-interval]]). The refuted
claim drops that hypothesis, and it is false.

## Counterexample

Let $A := [0,1] \cup [2,3]$ and define $f : A \to \mathbb{R}$ by

$$f(x) := x \quad \text{for } x \in [0,1], \qquad f(x) := 5 - x \quad \text{for } x \in [2,3].$$

Then $f$ is continuous on $A$ and injective, and it is not monotone: $f(0) = 0 <
1 = f(1)$ while $f(2) = 3 > 2 = f(3)$. The set $A$ is not order-convex, since
$0, 3 \in A$ and $3/2 \notin A$.

## Facts & Assumptions

**Given:** The set $A = [0,1] \cup [2,3]$ and the function $f$ above.

[L1] $f$ is continuous at $c \in A$ when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A \cap N_\delta(c)$ ([[def-continuity-real]], [[def-neighbourhood-r]]).

[L2] Constants, the identity and their sums and scalar multiples are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claims 1 and 5).

[L3] $f$ is increasing when $f(x) < f(y)$ for all $x < y$ in $A$, decreasing when $f(x) > f(y)$ for all $x < y$ in $A$, and monotone when nondecreasing or nonincreasing ([[def-monotone-function]]).

[L4] $A$ is order-convex when $x, y \in A$ and $x \le z \le y$ imply $z \in A$ ([[def-interval]]).

[L5] A continuous injective function on an order-convex subset of $\mathbb{R}$ is strictly monotone, and its inverse on the image is continuous ([[thm-continuous-injection-on-an-interval-is-strictly-monotone]], [[thm-continuous-inverse]]).

## Verification

**Proof technique:** direct.

1.1 $f[\,[0,1]\,] = [0,1]$ and $f[\,[2,3]\,] = [2,3]$: on $[0,1]$ the map is the identity, and on $[2,3]$ the map $x \mapsto 5-x$ sends $2$ to $3$ and $3$ to $2$ and is order-reversing, so its image is $[2,3]$. [L2]

1.2 $f$ is continuous on $A$. Let $c \in [0,1]$ and let $\varepsilon > 0$ be real; take $\delta := \min\{1, \varepsilon\}$. Every $x \in A$ with $|x - c| < \delta$ satisfies $x < c + 1 \le 2$, so $x \in [0,1]$ and $|f(x) - f(c)| = |x - c| < \varepsilon$. [L1, L2]

1.3 Let $c \in [2,3]$ and let $\varepsilon > 0$ be real; take $\delta := \min\{1, \varepsilon\}$. Every $x \in A$ with $|x - c| < \delta$ satisfies $x > c - 1 \ge 1$, so $x \in [2,3]$ and $|f(x) - f(c)| = |(5-x)-(5-c)| = |x - c| < \varepsilon$. [L1, L2]

1.4 $f$ is not monotone: $0 < 1$ with $f(0) = 0 < 1 = f(1)$ rules out nonincreasing, and $2 < 3$ with $f(2) = 3 > 2 = f(3)$ rules out nondecreasing. [L3]

1.5 $A$ is not order-convex: $0 \in A$, $3 \in A$ and $0 \le 3/2 \le 3$, but $3/2 \notin [0,1] \cup [2,3]$. [L4]

2.1 $f$ is injective: it is injective on $[0,1]$, being the identity there; it is injective on $[2,3]$, since $5 - x = 5 - y$ gives $x = y$; and the two images $[0,1]$ and $[2,3]$ are disjoint, so no point of one piece has the same value as a point of the other. [step 1.1]

3.1 So $f$ is a continuous injection on $A$ that is not monotone, refuting the claim; and the hypothesis that fails is exactly order-convexity of the domain, which is what the theorem assumes. [step 2.1, step 1.2, step 1.3, step 1.4, step 1.5, L5] ∎

## Remarks

- **The inverse is still continuous here, and that is a coincidence of this
  example.** $f$ is a bijection onto $[0,1] \cup [2,3]$ and its inverse is the
  same kind of piecewise map, continuous by the same argument. So this example
  does not refute the continuity of the inverse; what it refutes is monotonicity,
  and [[thm-continuous-inverse]] derives continuity of the inverse **from**
  monotonicity, so on a domain that is not order-convex that route is
  unavailable even when the conclusion happens to hold.

- **Two pieces are enough, and the gap does the work.** The values on $[0,1]$ and
  on $[2,3]$ never interfere, because the two images are disjoint; injectivity is
  therefore free and the two pieces may be oriented oppositely. On an
  order-convex domain the intermediate value theorem forbids exactly that, which
  is the content of steps 1.2 to 4.1 of
  [[thm-continuous-injection-on-an-interval-is-strictly-monotone]].
