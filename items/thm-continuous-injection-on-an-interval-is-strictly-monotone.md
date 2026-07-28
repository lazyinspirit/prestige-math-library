---
id: thm-continuous-injection-on-an-interval-is-strictly-monotone
kind: theorem
title: "A continuous injective function on an interval is strictly monotone"
status: published
origin: session
deps: [def-continuity-real, def-monotone-function, thm-intermediate-value, def-interval, def-injection-surjection-bijection, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "continuous injection on an interval is strictly monotone"
proof_strategy: contradiction
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be continuous on $I$ ([[def-continuity-real]]) and
injective ([[def-injection-surjection-bijection]]). Then $f$ is strictly
monotone ([[def-monotone-function]]): either $f(x) < f(y)$ whenever $x < y$ in
$I$, or $f(x) > f(y)$ whenever $x < y$ in $I$.

**Both hypotheses are needed and neither can be weakened to the other.**
Continuity alone does not give injectivity, and injectivity alone does not give
monotonicity: the companion page exhibits a continuous injection on
$[0,1] \cup [2,3]$, a set that is not order-convex, that is not monotone. So it
is order-convexity of the domain, and not merely continuity, that forces the
conclusion.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a continuous injective $f : I \to \mathbb{R}$.

[A1] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[A2] $f$ is injective: $f(u) = f(v)$ implies $u = v$ ([[def-injection-surjection-bijection]]).

[A3] $f$ is continuous at every point of $I$; the restriction of $f$ to a subset $S \subseteq I$ is continuous at every point of $S$, since the $\varepsilon$-$\delta$ condition of [[def-continuity-real]] quantifies over fewer points when the domain shrinks.

[L1] Intermediate value theorem: if $u \le v$, $g : [u,v] \to \mathbb{R}$ is continuous and $y$ lies between $g(u)$ and $g(v)$ in either order, then $g(p) = y$ for some $p \in [u,v]$ ([[thm-intermediate-value]]).

[L2] Strictly between any two distinct reals there lies a real ([[lem-rat-embeds-dense]]).

[L3] $f$ is increasing when $f(x) < f(y)$ for all $x < y$ in $I$, decreasing when $f(x) > f(y)$ for all $x < y$ in $I$, and strictly monotone when it is one or the other ([[def-monotone-function]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f$ is not strictly monotone: $f$ is not increasing and $f$ is not decreasing. [assume-contra]

1.2 **Three-point claim.** For all $u < v < w$ in $I$, either $f(u) < f(v) < f(w)$ or $f(u) > f(v) > f(w)$. Suppose not. By injectivity the three values are pairwise distinct, so the failure means that $f(v)$ is not between $f(u)$ and $f(w)$; hence either $f(v) > f(u)$ and $f(v) > f(w)$, or $f(v) < f(u)$ and $f(v) < f(w)$. [A2]

2.1 Being decreasing means $f(x) > f(y)$ for all $x < y$ in $I$, so its failure gives $a, b \in I$ with $a < b$ and not $f(a) > f(b)$, that is $f(a) \le f(b)$; injectivity together with $a \ne b$ gives $f(a) \ne f(b)$, so $f(a) < f(b)$. [step 1.1, A2, L3]

2.2 In the first case of step 1.2 pick a real $y$ with $\max\{f(u), f(w)\} < y < f(v)$; in the second pick $y$ with $f(v) < y < \min\{f(u), f(w)\}$. Such a $y$ exists because the two bounds are distinct reals. [step 1.2, L2]

3.1 With $y$ as in step 2.2, $[u,v] \subseteq I$ and $[v,w] \subseteq I$ by order-convexity, and $f$ restricted to each is continuous; $y$ lies strictly between $f(u)$ and $f(v)$, and strictly between $f(v)$ and $f(w)$. So there are $p \in [u,v]$ and $q \in [v,w]$ with $f(p) = y = f(q)$. [step 2.2, A1, A3, L1]

4.1 Since $f(p) = y \ne f(v)$ and $f(q) = y \ne f(v)$ we have $p \ne v \ne q$, so $u \le p < v < q \le w$ and in particular $p \ne q$; but $f(p) = f(q)$ contradicts injectivity. The three-point claim of step 1.2 is therefore established. [step 1.2, step 3.1, A2]

5.1 Let $x \in I$ with $x < a$. Applying the three-point claim to $x < a < b$ gives $f(x) < f(a) < f(b)$ or $f(x) > f(a) > f(b)$; the second is impossible because $f(a) < f(b)$. So $f(x) < f(a)$. [step 2.1, step 4.1]

6.1 Let $x \in I$ with $x > a$. If $x < b$, the three-point claim applied to $a < x < b$ gives $f(a) < f(x) < f(b)$, the alternative being impossible as in step 5.1; if $x = b$ then $f(a) < f(x)$ by step 2.1; and if $x > b$, the claim applied to $a < b < x$ gives $f(a) < f(b) < f(x)$. In every case $f(x) > f(a)$. [step 2.1, step 4.1]

6.2 Let $c, d \in I$ with $c < d \le a$; we show $f(c) < f(d)$. If $d = a$ then $c < a$ and step 5.1 gives $f(c) < f(a) = f(d)$. If $d < a$ then the three-point claim applied to $c < d < a$ gives $f(c) < f(d) < f(a)$ or $f(c) > f(d) > f(a)$, and the second contradicts $f(d) < f(a)$ from step 5.1; so $f(c) < f(d)$. [step 4.1, step 5.1]

7.1 Let $c, d \in I$ with $a \le c < d$; we show $f(c) < f(d)$. If $c = a$ then $d > a$ and step 6.1 gives $f(d) > f(a) = f(c)$. If $a < c$ then the three-point claim applied to $a < c < d$ gives $f(a) < f(c) < f(d)$ or $f(a) > f(c) > f(d)$, and the second contradicts $f(c) > f(a)$ from step 6.1; so $f(c) < f(d)$. [step 4.1, step 6.1]

7.2 The only remaining case is $c < a < d$, where steps 5.1 and 6.1 give $f(c) < f(a) < f(d)$ directly. [step 5.1, step 6.1]

8.1 Steps 7.1, 6.2 and 7.2 cover every pair $c < d$ in $I$: either $a \le c$, which is step 7.1, or $c < a$, and then $d \le a$, which is step 6.2, or $a < d$, which is step 7.2. So $f(x) < f(y)$ whenever $x < y$ in $I$, that is, $f$ is increasing. This contradicts step 1.1, which assumed that $f$ is not increasing; the assumption of step 1.1 is therefore false and $f$ is strictly monotone. [step 1.1, step 7.1, step 6.2, step 7.2, L3, discharge-contradiction] ∎

## Remarks

- **The three-point claim is the whole content.** Steps 1.2, 2.2, 3.1 and 4.1 say that a continuous injection on an interval cannot fold: the middle of three points always has the middle value. Everything after that is bookkeeping, comparing an arbitrary pair with one fixed pair $a < b$ on which the direction is known.

- **Where the intermediate value theorem enters.** Once only, in step 3.1, and it is what makes order-convexity of $I$ indispensable: the segments $[u,v]$ and $[v,w]$ must lie inside the domain for the theorem to apply. That is exactly the hypothesis the companion page's counterexample removes.
