---
id: fs-intermediate-value-property-implies-continuity
kind: false-statement
title: "FALSE: a function with the intermediate value property on an interval is continuous"
status: published
origin: session
deps: [def-intermediate-value-property, def-continuity-real, thm-intermediate-value, cor-continuous-image-of-an-interval-is-an-interval, def-interval, lem-integer-part, def-max-min, lem-finite-set-has-max, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-abs-value, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "IVP does not imply continuity"
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
    - title: "Darboux's theorem (analysis) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux%27s_theorem_(analysis)"
pipeline_run: null
---

## Statement

**FALSE.** If $I \subseteq \mathbb{R}$ is an interval and $f : I \to \mathbb{R}$
has the intermediate value property ([[def-intermediate-value-property]]), then
$f$ is continuous on $I$ ([[def-continuity-real]]).

The converse implication is true and is
[[cor-continuous-image-of-an-interval-is-an-interval]]: every continuous
function on an interval has the intermediate value property. The claim above
asserts that the implication reverses, and it does not.

## Facts & Assumptions

**Given:** The interval $I := [-1,1]$ ([[def-interval]]).

[L1] For every real $u$ there is exactly one integer $m$ with $m \le u < m+1$, written $\lfloor u \rfloor$ ([[lem-integer-part]]); in particular no integer lies strictly between $m$ and $m+1$.

[L2] $\min\{a,b\}$ and $\max\{a,b\}$ exist for reals $a, b$, and a nonempty finite set of reals has a minimum and a maximum ([[def-max-min]], [[lem-finite-set-has-max]]).

[L3] Sums, scalar multiples, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants and the identity; composites of continuous functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L4] Intermediate value theorem: a continuous function on $[a,b]$ takes every value between its values at the endpoints ([[thm-intermediate-value]]).

[L5] For every real $\eta > 0$ there is a natural $k \ge 1$ with $1/\iota(k) < \eta$, and the canonical naturals are cofinal in $\mathbb{R}$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L6] $|u| \ge 0$, $|u| = 0$ only for $u = 0$, and $|u - w| \le |u - v| + |v - w|$ ([[lem-of-abs-value]]).

[L7] $f$ has the intermediate value property on an order-convex $I$ exactly when for all $a < b$ in $I$ and every $y$ between $f(a)$ and $f(b)$ in either order there is $c \in [a,b]$ with $f(c) = y$ ([[def-intermediate-value-property]]).

## Refutation

**Proof technique:** direct.

1.1 Define $\psi : \mathbb{R} \to \mathbb{R}$ by $\psi(u) := \min\{\, u - \lfloor u \rfloor,\ \lfloor u \rfloor + 1 - u \,\}$, the distance from $u$ to the nearest integer, and define $g : [-1,1] \to \mathbb{R}$ by $g(x) := \psi(1/x)$ for $x \ne 0$ and $g(0) := 0$. [L1, L2, construct]

2.1 $0 \le \psi(u) \le 1/2$ for every real $u$: writing $\theta := u - \lfloor u \rfloor \in [0,1)$, the two entries are $\theta \ge 0$ and $1 - \theta > 0$, and their minimum is at most their average $1/2$. Consequently $0 \le g(x) \le 1/2$ for every $x \in [-1,1]$. [step 1.1, L1, L2]

2.2 $\psi(u) = \min\{\, |u - m| : m \in \mathbb{Z} \,\}$ in the sense that $|u - m| \ge \psi(u)$ for every integer $m$, with equality for $m = \lfloor u \rfloor$ or $m = \lfloor u \rfloor + 1$. Indeed, with $n := \lfloor u \rfloor$: for $m \le n$ one has $|u - m| = u - m \ge u - n$, and for $m \ge n+1$ one has $|u - m| = m - u \ge n + 1 - u$. [step 1.1, L1]

2.3 For every real $\eta > 0$ and every $y \in [0,1/2]$ there is $x$ with $0 < x < \eta$ and $g(x) = y$: take a natural $k \ge 1$ with $1/\iota(k) < \eta$ and put $x := 1/(\iota(k) + y)$. Then $0 < x \le 1/\iota(k) < \eta$ and $1/x = \iota(k) + y$ with $0 \le y \le 1/2 < 1$, so $\lfloor 1/x \rfloor = \iota(k)$ and $\psi(1/x) = \min\{y, 1-y\} = y$. [step 1.1, L1, L5]

3.1 $\psi$ is continuous on $\mathbb{R}$, because $|\psi(u) - \psi(v)| \le |u - v|$ for all reals $u, v$: choose an integer $m$ with $|u - m| = \psi(u)$, which exists by step 2.2; then $\psi(v) \le |v - m| \le |v - u| + |u - m| = |u - v| + \psi(u)$, and exchanging $u$ and $v$ gives the other inequality. So $\delta := \varepsilon$ witnesses continuity at every point. [step 2.2, L6]

3.2 For every real $\eta > 0$ and every $y \in [0,1/2]$ there is $x$ with $-\eta < x < 0$ and $g(x) = y$: with $k$ as in step 2.3 put $x := -1/(\iota(k) + y)$, so $-\eta < x < 0$ and $1/x = -\iota(k) - y$. If $y = 0$ then $1/x = -\iota(k)$ is an integer and $\psi(1/x) = 0 = y$; if $0 < y \le 1/2$ then $\lfloor 1/x \rfloor = -\iota(k) - 1$ and $1/x - \lfloor 1/x \rfloor = 1 - y$, so $\psi(1/x) = \min\{1-y, y\} = y$. [step 1.1, step 2.3, L1, L5]

3.3 $g$ is **discontinuous at $0$**: $g(0) = 0$, and by step 2.3 every real $\delta > 0$ admits $x$ with $0 < x < \delta$ and $g(x) = 1/2$, so $|g(x) - g(0)| = 1/2$. Hence no $\delta$ witnesses the continuity condition at $0$ for $\varepsilon := 1/2$. [step 1.1, step 2.3, L6]

4.1 $g$ is continuous at every $x \in [-1,1]$ with $x \ne 0$: on the set $\{x \in [-1,1] : x \ne 0\}$ the map $x \mapsto 1/x$ is continuous, and $g$ is its composite with $\psi$; continuity at a point of that set is continuity of $g$ there, since the set contains a whole neighbourhood of $x$ inside $[-1,1]$ when $x \ne 0$. [step 1.1, step 3.1, L3]

4.2 If $0 \in [a,b]$ then, since $a < b$, either $b > 0$ or $a < 0$. In the first case step 2.3 with $\eta := b$ gives $c$ with $0 < c < b$ and $g(c) = y$, and $c \in [a,b]$; in the second case step 3.2 with $\eta := -a$ gives $c$ with $a < c < 0$ and $g(c) = y$. Either way $y \in g[\,[a,b]\,]$. [step 2.1, step 2.3, step 3.2, L7]

5.1 $g$ **has the intermediate value property on $[-1,1]$**. Let $a < b$ in $[-1,1]$ and let $y$ lie between $g(a)$ and $g(b)$ in either order; in particular $y \in [0,1/2]$ by step 2.1. If $0 \notin [a,b]$ then $g$ restricted to $[a,b]$ is continuous by step 4.1, and the intermediate value theorem supplies $c \in [a,b]$ with $g(c) = y$. [step 2.1, step 4.1, L4, L7]

6.1 So $g$ is a function on the interval $[-1,1]$ with the intermediate value property that is not continuous on $[-1,1]$, and the claim in the Statement is false. [step 3.3, step 5.1, step 4.2, L7, discharge-construct] ∎

## Remarks

- **What survives the refutation.** The implication *continuous $\Rightarrow$
  intermediate value property* is true and is
  [[cor-continuous-image-of-an-interval-is-an-interval]]. So is the partial
  converse for monotone functions: a function satisfying
  $f(x) \le f(y)$ whenever $x \le y$, whose image is order-convex, is continuous
  ([[lem-monotone-with-interval-image-is-continuous]]). The witness above is
  therefore necessarily non-monotone, and it is: it rises and falls infinitely
  often in every neighbourhood of $0$.

- **The witness fails continuity at exactly one point.** That is all a refutation
  needs, and it is all that is claimed: nothing above says that the failure
  cannot be worse. Functions with the intermediate value property that are
  continuous at no point at all do exist, the standard one being Conway's
  base-13 function; it is not constructed at this point in the reading order,
  and no statement here depends on it.

- **Nothing above defines the derivative, and Darboux's theorem is not used.**
  The classical source of non-continuous functions with the intermediate value
  property is the class of derivatives, which have the property by Darboux's
  theorem; no notion of derivative is available at this point in the reading
  order, and the witness here is built by hand instead.
