---
id: thm-monotone-one-sided-limits-exist
kind: theorem
title: "One-sided limits of a monotone function always exist: for $f$ nondecreasing on an interval $I$ and $c \\in I$, $\\lim_{x \\to c^{-}} f(x) = \\sup\\{f(x) : x \\in I,\\ x < c\\}$ whenever $I$ has points below $c$, $\\lim_{x \\to c^{+}} f(x) = \\inf\\{f(x) : x \\in I,\\ x > c\\}$ whenever it has points above $c$, and these satisfy $\\lim_{x \\to c^{-}} f(x) \\le f(c) \\le \\lim_{x \\to c^{+}} f(x)$"
status: draft
origin: session
deps: [def-monotone-function, def-one-sided-limits, def-function-limit, lem-function-limit-unique, def-limit-point-r, def-interval, lem-sup-epsilon, lem-inf-epsilon, def-bounded-set, def-infimum, thm-infimum-property, def-complete-ordered-field, def-neighbourhood-r]
justified_by: []
aliases: [thm-monotone-one-sided-limits]
landmark: true
short: "monotone: one-sided limits exist"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]), let
$f : I \to \mathbb{R}$ be nondecreasing ([[def-monotone-function]]) and let
$c \in I$. Write

$$I^{-} := I \cap (-\infty, c), \qquad I^{+} := I \cap (c, \infty)$$

([[def-one-sided-limits]]).

1. **Left.** If $I^{-} \ne \varnothing$ then $c$ is a limit point of $I^{-}$
   ([[def-limit-point-r]]), the set $\{\, f(x) : x \in I^{-} \,\}$ is nonempty
   and bounded above by $f(c)$, and
   $$\lim_{x \to c^{-}} f(x) \;=\; \sup\{\, f(x) : x \in I,\ x < c \,\} \;\le\; f(c) .$$
2. **Right.** If $I^{+} \ne \varnothing$ then $c$ is a limit point of $I^{+}$,
   the set $\{\, f(x) : x \in I^{+} \,\}$ is nonempty and bounded below by
   $f(c)$, and
   $$\lim_{x \to c^{+}} f(x) \;=\; \inf\{\, f(x) : x \in I,\ x > c \,\} \;\ge\; f(c) .$$
3. **Together.** If both $I^{-}$ and $I^{+}$ are nonempty then
   $$\lim_{x \to c^{-}} f(x) \;\le\; f(c) \;\le\; \lim_{x \to c^{+}} f(x) .$$

In particular a nondecreasing function on an interval has, at every point of
that interval, every one-sided limit that is well posed at all: no hypothesis of
continuity, of boundedness, or of any other kind is needed.

**The nonincreasing case is not a separate theorem.** If $g : I \to \mathbb{R}$
is nonincreasing then $-g$ is nondecreasing ([[def-monotone-function]]), and a
real $L$ is the left limit of $-g$ at $c$ exactly when $-L$ is the left limit of
$g$ at $c$, since $|(-g)(x) - L| = |g(x) - (-L)|$; so claims 1 to 3 hold for $g$
with the suprema and infima exchanged and the inequalities reversed.

**Order-convexity of $I$ is what makes the limits well posed.** Without it the
symbol $\lim_{x \to c^{-}} f(x)$ need not be defined even though $I^{-}$ is
nonempty: for $I = \{0\} \cup [1,2]$ and $c = 1$ the set $I^{-} = \{0\}$ is
nonempty but $1$ is not a limit point of it, and [[def-one-sided-limits]] leaves
the symbol undefined there for exactly that reason.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a nondecreasing $f : I \to \mathbb{R}$, and $c \in I$.

[A1] $f(x) \le f(y)$ for all $x, y \in I$ with $x \le y$ ([[def-monotone-function]]).

[A2] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[L1] Every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound, and every nonempty subset bounded below has a greatest lower bound ([[def-complete-ordered-field]], [[def-bounded-set]], [[def-infimum]], [[thm-infimum-property]]).

[L2] For $S$ nonempty and bounded above with upper bound $u$: $u = \sup S$ if and only if for every real $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]). Dually, for $S$ nonempty and bounded below with lower bound $\ell$: $\ell = \inf S$ if and only if for every real $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$ ([[lem-inf-epsilon]]).

[L3] $\lim_{x \to c^{-}} f(x) = L$ means: $c$ is a limit point of $I^{-}$, and for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - L| < \varepsilon$ for every $x \in I$ with $c - \delta < x < c$; dually on the right ([[def-one-sided-limits]], [[def-function-limit]], [[def-neighbourhood-r]]).

[L4] $x$ is a limit point of a set $S$ when every punctured neighbourhood of $x$ meets $S$ ([[def-limit-point-r]], [[def-neighbourhood-r]]); a one-sided limit, being the limit of a restriction, is unique when it exists ([[lem-function-limit-unique]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $I^{-} \ne \varnothing$ and fix $a \in I$ with $a < c$; then $[a,c] \subseteq I$, since any $z$ with $a \le z \le c$ lies in $I$. [A2]

1.2 Claim 2 is the same argument on the other side, and is written out here rather than deduced. Suppose $I^{+} \ne \varnothing$ and fix $b \in I$ with $c < b$; then $[c,b] \subseteq I$, and for real $\delta > 0$ the point $\min\{b, c + \delta/2\}$ lies in $I^{+}$ within $\delta$ of $c$, so $c$ is a limit point of $I^{+}$. [A2, L4]

2.1 Every real $\delta > 0$ gives a point of $I^{-}$ within $\delta$ of $c$ and different from $c$: put $z := \max\{a, c - \delta/2\}$, so that $a \le z < c$ and $c - z \le \delta/2 < \delta$, and $z \in I$ by step 1.1. Hence $c$ is a limit point of $I^{-}$ and the symbol on the left of claim 1 is well posed. [step 1.1, L4]

2.2 The set $S^{-} := \{\, f(x) : x \in I,\ x < c \,\}$ is nonempty, since $f(a) \in S^{-}$, and $f(c)$ is an upper bound of it, since $x < c$ gives $f(x) \le f(c)$. So $L := \sup S^{-}$ exists and $L \le f(c)$, the latter because $f(c)$ is an upper bound and $L$ is the least one. [step 1.1, A1, L1]

2.3 The set $S^{+} := \{\, f(x) : x \in I,\ x > c \,\}$ is nonempty and bounded below by $f(c)$, so $M := \inf S^{+}$ exists and $M \ge f(c)$. [step 1.2, A1, L1]

3.1 Let $\varepsilon > 0$ be real. By the epsilon characterisation of the supremum there is $x_0 \in I$ with $x_0 < c$ and $L - \varepsilon < f(x_0)$. [step 2.2, L2]

3.2 Given real $\varepsilon > 0$, the epsilon characterisation of the infimum gives $x_1 \in I$ with $x_1 > c$ and $f(x_1) < M + \varepsilon$; put $\delta := x_1 - c > 0$. For $x \in I$ with $c < x < c + \delta$ we have $c < x < x_1$, so $M \le f(x) \le f(x_1) < M + \varepsilon$ and hence $|f(x) - M| < \varepsilon$. [step 2.3, A1, L2]

4.1 Put $\delta := c - x_0 > 0$ and let $x \in I$ satisfy $c - \delta < x < c$. Then $x_0 < x < c$, so $f(x_0) \le f(x)$ by monotonicity and $f(x) \le L$ because $f(x) \in S^{-}$ and $L$ is an upper bound of $S^{-}$; hence $L - \varepsilon < f(x_0) \le f(x) \le L$ and therefore $|f(x) - L| < \varepsilon$. [step 2.2, step 3.1, A1]

4.2 Claim 2 is proved: $\lim_{x \to c^{+}} f(x) = M = \inf S^{+} \ge f(c)$. [step 1.2, step 2.3, step 3.2, L3, L4]

5.1 Claim 1 is proved: $\varepsilon > 0$ was arbitrary in step 3.1, so $\lim_{x \to c^{-}} f(x) = L = \sup S^{-} \le f(c)$, and this value is the only one the symbol can denote. [step 2.1, step 2.2, step 4.1, L3, L4]

6.1 Claim 3 follows by combining the two inequalities of claims 1 and 2, both of which are then available. [step 5.1, step 4.2] ∎

## Remarks

- **Where completeness is spent.** Exactly once on each side, in the existence of $\sup S^{-}$ and of $\inf S^{+}$; the rest of the proof is the definition of a one-sided limit and the monotonicity hypothesis. Over an ordered field that is not complete the statement fails, because the supremum need not exist.

- **The two one-sided limits need not agree, and that is the point.** When both are defined they satisfy $\lim_{x \to c^{-}} f(x) \le f(c) \le \lim_{x \to c^{+}} f(x)$, and a strict inequality between the outer two is exactly a jump discontinuity; [[thm-monotone-discontinuities-are-jumps]] turns that observation into the classification of the discontinuities of a monotone function, and [[thm-froda]] counts them.
