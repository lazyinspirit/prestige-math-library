---
id: thm-monotone-discontinuities-are-jumps
kind: theorem
title: "A monotone function on an interval has no discontinuity of the second kind: at every point both relevant one-sided limits exist, and an interior point $c$ is a discontinuity exactly when $\\lim_{x \\to c^{-}} f(x) < \\lim_{x \\to c^{+}} f(x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-monotone-function, thm-monotone-one-sided-limits-exist, def-classification-of-discontinuities, thm-two-sided-limit-iff-both-one-sided, def-continuity-real, def-one-sided-limits, def-interval, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
short: "monotone discontinuities are jumps"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be nondecreasing ([[def-monotone-function]]). Write
$I^{-} = I \cap (-\infty,c)$ and $I^{+} = I \cap (c,\infty)$ for $c \in I$.

1. At every $c \in I$, each of the two one-sided limits that is well posed
   exists ([[def-one-sided-limits]]). Consequently $f$ has **no discontinuity of
   the second kind** ([[def-classification-of-discontinuities]]): every
   discontinuity of $f$ is of the first kind.
2. Call $c \in I$ an **interior point of $I$** when both $I^{-}$ and $I^{+}$ are
   nonempty. At such a point
   $$\lim_{x \to c^{-}} f(x) \;\le\; f(c) \;\le\; \lim_{x \to c^{+}} f(x),$$
   and $f$ is continuous at $c$ ([[def-continuity-real]]) **if and only if**
   $\lim_{x \to c^{-}} f(x) = \lim_{x \to c^{+}} f(x)$.
3. Hence an interior point $c$ is a discontinuity of $f$ exactly when
   $$\lim_{x \to c^{-}} f(x) \;<\; \lim_{x \to c^{+}} f(x),$$
   and every such discontinuity is a **jump**, of jump
   $\lim_{x \to c^{+}} f(x) - \lim_{x \to c^{-}} f(x) > 0$.

The same three claims hold for a nonincreasing $f$, with the two one-sided
limits exchanged and all inequalities reversed, by applying the above to $-f$,
which is nondecreasing ([[def-monotone-function]]) and has exactly the same
points of continuity, since $|(-f)(x) - (-f)(c)| = |f(x) - f(c)|$.

**A point of $I$ that is not interior is an endpoint, and there are at most
two.** $I^{-} = \varnothing$ says that $c$ is a least element of $I$ and
$I^{+} = \varnothing$ that it is a greatest one, and a set has at most one of
each. Those two points are excluded from claims 2 and 3 only because a
comparison of two one-sided limits is not available there; claim 1 covers them.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$, a nondecreasing $f : I \to \mathbb{R}$, and $c \in I$.

[L1] If $I^{-} \ne \varnothing$ then $c$ is a limit point of $I^{-}$ and $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I, x < c\} \le f(c)$; if $I^{+} \ne \varnothing$ then $c$ is a limit point of $I^{+}$ and $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I, x > c\} \ge f(c)$ ([[thm-monotone-one-sided-limits-exist]]).

[L2] If $c$ is a limit point of both $I^{-}$ and $I^{+}$, then $\lim_{x \to c} f(x) = L$ holds if and only if both one-sided limits at $c$ exist and equal $L$; in particular the two-sided limit exists exactly when the two one-sided limits exist and agree ([[thm-two-sided-limit-iff-both-one-sided]]).

[L3] At a limit point $c \in I$ of $I$, $f$ is continuous at $c$ if and only if $\lim_{x \to c} f(x)$ exists and equals $f(c)$; at an isolated point of $I$ every function is continuous ([[def-continuity-real]], [[def-limit-point-r]], [[def-classification-of-discontinuities]]).

[L4] A discontinuity at a two-sided point is of the second kind when at least one one-sided limit fails to exist, of the first kind otherwise, and is a jump when the two one-sided limits exist and differ; at a one-sided point it is of the first kind when the one available one-sided limit exists ([[def-classification-of-discontinuities]]).

## Proof

**Proof technique:** direct.

1.1 Let $c \in I$. If $I^{-} \ne \varnothing$ then $\lim_{x \to c^{-}} f(x)$ exists, and if $I^{+} \ne \varnothing$ then $\lim_{x \to c^{+}} f(x)$ exists; if one of the two sets is empty the corresponding symbol is not defined and there is nothing to prove for it. [L1]

2.1 Claim 1 follows: at every point of $I$ every well-posed one-sided limit of $f$ exists, so no discontinuity of $f$ can be of the second kind, and every discontinuity is therefore of the first kind. [step 1.1, L4]

2.2 Now let $c$ be an interior point of $I$, and write $L^{-} := \lim_{x \to c^{-}} f(x)$ and $L^{+} := \lim_{x \to c^{+}} f(x)$, both of which exist by step 1.1. Then $L^{-} \le f(c) \le L^{+}$, which is the displayed inequality of claim 2. [step 1.1, L1]

3.1 Suppose $L^{-} = L^{+}$. Then $L^{-} \le f(c) \le L^{+} = L^{-}$ forces $L^{-} = f(c) = L^{+}$, so both one-sided limits equal $f(c)$; hence $\lim_{x \to c} f(x)$ exists and equals $f(c)$, and $f$ is continuous at $c$. [step 2.2, L2, L3]

3.2 Suppose conversely that $f$ is continuous at $c$. Since $c$ is a limit point of $I^{-}$ and hence of $I$, continuity gives $\lim_{x \to c} f(x) = f(c)$, and then both one-sided limits exist and equal $f(c)$; in particular $L^{-} = L^{+}$. [step 2.2, L1, L2, L3]

4.1 Claim 2 is proved by steps 3.1 and 3.2 together with step 2.2. [step 2.2, step 3.1, step 3.2]

5.1 Claim 3: at an interior point $c$, $f$ is discontinuous exactly when $L^{-} \ne L^{+}$, and since $L^{-} \le f(c) \le L^{+}$ the only way for them to differ is $L^{-} < L^{+}$. Both one-sided limits exist and differ, so the discontinuity is a jump, of jump $L^{+} - L^{-} > 0$. [step 2.2, step 4.1, L4] ∎

## Remarks

- **Nothing here counts the discontinuities.** Claim 3 says only what a discontinuity of a monotone function looks like at an interior point. That the set of them is at most countable is a further theorem, [[thm-froda]], and its proof is exactly the observation that the open intervals $(\lim_{x \to c^{-}} f(x), \lim_{x \to c^{+}} f(x))$ attached to distinct discontinuities are disjoint.

- **Why no interior discontinuity of a monotone function is removable.** Claim 2 rules them out at interior points: there $L^{-} = L^{+}$ already forces continuity, because the inequality $L^{-} \le f(c) \le L^{+}$ pins $f(c)$ between the two one-sided values. That inequality is special to monotone functions, and it is what makes *jump* the only kind of interior discontinuity available. At a point of $I$ that is not interior the inequality is one-sided too and the argument does not apply, so a monotone function may fail to be continuous at an endpoint of $I$ while having its one one-sided limit; that failure is a discontinuity of the first kind and it is not a jump, there being only one side to compare.
