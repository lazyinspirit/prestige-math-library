---
id: thm-two-sided-limit-iff-both-one-sided
kind: theorem
title: "If $c$ is a limit point of the domain from both sides, the limit exists iff both one-sided limits exist and agree"
status: draft
origin: session
deps: [def-one-sided-limits, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-interval, lem-limit-is-local, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "two-sided iff both one-sided"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in
\mathbb{R}$ be a limit point of **both** $A^{-} = A \cap (-\infty, c)$ and
$A^{+} = A \cap (c, \infty)$ ([[def-limit-point-r]], [[def-interval]]), so that
both one-sided limits at $c$ are well posed ([[def-one-sided-limits]]). Then $c$
is a limit point of $A$, and for every $L \in \mathbb{R}$:

$$\lim_{x \to c} f(x) = L \quad \Longleftrightarrow \quad \lim_{x \to c^{-}} f(x) = L \ \text{ and } \ \lim_{x \to c^{+}} f(x) = L$$

([[def-function-limit]]). Consequently the limit of $f$ at $c$ **exists** if and
only if both one-sided limits exist and are equal, and in that case

$$\lim_{x \to c} f(x) \;=\; \lim_{x \to c^{-}} f(x) \;=\; \lim_{x \to c^{+}} f(x) .$$

**The hypothesis on both sides is what makes the statement an equivalence.** If
$c$ is a limit point of only one of the two sets — as $1$ is for
$\{0\} \cup [1,2]$ — then the one-sided limit on that side and the two-sided
limit are the same condition, and the symbol on the other side is not defined at
all ([[def-one-sided-limits]]).

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a real $c$ that is a limit point of both $A^{-} = A \cap (-\infty, c)$ and $A^{+} = A \cap (c, \infty)$, and a real $L$ ([[def-limit-point-r]], [[def-interval]], [[def-one-sided-limits]]).

[L1] The limit condition ([[def-function-limit]]): $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$.

[L2] Limit point: $c$ is a limit point of $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Intervals: $A^{-} = \{\, x \in A : x < c \,\}$ and $A^{+} = \{\, x \in A : x > c \,\}$ ([[def-interval]]).

[L4] Absolute value and order: $|x - c| = 0$ exactly when $x = c$; the order is total, so every $x \ne c$ satisfies $x < c$ or $x > c$; and $0 < |x - c| < \delta$ is equivalent to $c - \delta < x < c$ for $x < c$ and to $c < x < c + \delta$ for $x > c$ ([[lem-of-abs-value]], [[def-ordered-field]]). Of two positive reals the smaller is positive.

[L5] Restriction: if $B \subseteq A$ has $c$ as a limit point and $\lim_{x \to c} f(x) = L$, then $\lim_{x \to c} f|_B(x) = L$ (claim 2 of [[lem-limit-is-local]]).

[L6] One-sided limits are by definition the limits of the restrictions $f|_{A^{-}}$ and $f|_{A^{+}}$ at $c$ ([[def-one-sided-limits]]).

[L7] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); applied to $f|_{A^{-}}$ and to $f|_{A^{+}}$ it makes each one-sided limit a single real, and applied to $f$ it does the same for the two-sided limit.

## Proof

**Proof technique:** direct.

1.1 $c$ is a limit point of $A$: it is one of $A^{+}$ by hypothesis, and $A^{+} \subseteq A$, so every point of $A^{+}$ found in a punctured neighbourhood of $c$ is a point of $A$ there. [L2, L3]

1.2 For $x \in A$ the condition $0 < |x - c|$ says exactly $x \ne c$, and then $x < c$ or $x > c$, that is $x \in A^{-}$ or $x \in A^{+}$; moreover for $x \in A^{-}$ the condition $0 < |x - c| < \delta$ reads $c - \delta < x < c$ and for $x \in A^{+}$ it reads $c < x < c + \delta$. [L3, L4]

2.1 Suppose $\lim_{x \to c} f(x) = L$. Both $A^{-}$ and $A^{+}$ are subsets of $A$ having $c$ as a limit point, so [L5] gives $\lim_{x \to c} f|_{A^{-}}(x) = L$ and $\lim_{x \to c} f|_{A^{+}}(x) = L$, which by [L6] is exactly $\lim_{x \to c^{-}} f(x) = L$ and $\lim_{x \to c^{+}} f(x) = L$. [step 1.1, step 1.2, L5, L6]

2.2 Suppose conversely that both one-sided limits equal $L$, and let $\varepsilon > 0$ be an arbitrary real. By [L6] and [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A^{-}$ with $0 < |x - c| < \delta_1$ and every $x \in A^{+}$ with $0 < |x - c| < \delta_2$ satisfies $|f(x) - L| < \varepsilon$; let $\delta$ be the smaller of the two. Every $x \in A$ with $0 < |x - c| < \delta$ lies in $A^{-}$ or in $A^{+}$ by step 1.2, and in either case $|f(x) - L| < \varepsilon$. As $\varepsilon$ was arbitrary, $\lim_{x \to c} f(x) = L$. [step 1.2, L1, L4, L6, choose]

3.1 The displayed equivalence is steps 2.1 and 2.2. For the consequence: if the limit of $f$ at $c$ exists, say with value $L$, then step 2.1 gives that both one-sided limits exist with the same value $L$, so they agree; and if both one-sided limits exist and are equal, to the common value $L$, then step 2.2 gives that the limit of $f$ at $c$ exists and equals $L$. Each of the three symbols denotes a single real by [L7], so the three are equal. [step 2.1, step 2.2, L7] ∎

## Remarks

- **The two directions are not symmetric in difficulty.** From the two-sided limit to the one-sided ones is pure restriction, [[lem-limit-is-local]]; the converse has to glue two estimates, and the gluing is legitimate precisely because every point of $A$ other than $c$ lies strictly on one side of $c$, which is the totality of the order.

- **The typical failure** is a function whose two one-sided limits exist and differ: the sign function at $0$, on the companion page. Then the two-sided limit cannot exist, since by step 2.1 it would force both one-sided values to equal it.

- **A function may also have no two-sided limit for a different reason**, namely that a one-sided limit fails to exist rather than that the two disagree. The theorem covers that case too, since its right-hand side asserts the existence of both one-sided values, so its failure on one side alone already blocks the two-sided limit. The companion page exhibits both patterns.
