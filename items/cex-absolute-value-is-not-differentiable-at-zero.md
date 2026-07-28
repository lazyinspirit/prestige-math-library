---
id: cex-absolute-value-is-not-differentiable-at-zero
kind: counterexample
title: "$x \\mapsto |x|$ is continuous everywhere and not differentiable at $0$: the difference quotient equals $1$ on the right and $-1$ on the left, so the two one-sided limits differ"
status: draft
origin: session
deps: [def-derivative, cor-differentiable-implies-continuous, def-one-sided-limits, thm-two-sided-limit-iff-both-one-sided, lem-of-abs-value, thm-algebra-of-continuous-functions, def-continuity-real, def-function-limit, def-limit-point-r, def-interval, lem-function-limit-unique, cor-of-one-positive, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
short: "$|x|$ is not differentiable at $0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Absolute value (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_value"
    - title: "Differentiable function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Differentiable_function"
    - title: "J. Lebl, Basic Analysis I, §4.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if $A \subseteq \mathbb{R}$, if $f : A \to \mathbb{R}$ is
continuous at a point $c \in A$ ([[def-continuity-real]]) and if $c$ is a limit
point of $A$ ([[def-limit-point-r]]), then $f$ is differentiable at $c$
([[def-derivative]]).

This is the converse of [[cor-differentiable-implies-continuous]], and it is
false. The witness is $f(x) = |x|$ on $A = \mathbb{R}$ at $c = 0$: a single
corner is enough, and the failure is visible in one line, the difference
quotient taking the value $1$ to the right of $0$ and $-1$ to the left.

## Facts & Assumptions

**Given:** The set $A := \mathbb{R}$, the function $f : \mathbb{R} \to \mathbb{R}$, $f(x) := |x|$ ([[lem-of-abs-value]]), and the point $c := 0$.

[L1] Continuity of the absolute value ([[thm-algebra-of-continuous-functions]]): the identity is continuous at every point of its domain (claim 5), and $|h|$ is continuous wherever $h$ is (claim 2); so $f$ is continuous at every point of $\mathbb{R}$ ([[def-continuity-real]]).

[L2] Derivative ([[def-derivative]]): $0$ is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]); the difference quotient of $f$ at $0$ is $q(x) = (|x| - |0|)/(x - 0)$ on $\mathbb{R} \setminus \{0\}$; and $f$ is differentiable at $0$ exactly when $\lim_{x \to 0} q(x)$ exists ([[def-function-limit]]).

[L3] Absolute value ([[lem-of-abs-value]]): $|0| = 0$; $|u| = u$ for $u \ge 0$; and $|u| = -u$ for $u \le 0$.

[L4] One-sided limits ([[def-one-sided-limits]], [[def-interval]]): for $D \subseteq \mathbb{R}$ and $p \in \mathbb{R}$, the right limit of $h : D \to \mathbb{R}$ at $p$ is the limit at $p$ of $h$ restricted to $D \cap (p, \infty)$, defined when $p$ is a limit point of that set, and the left limit is the same with $D \cap (-\infty, p)$.

[L5] Two-sided against one-sided ([[thm-two-sided-limit-iff-both-one-sided]]): if $p$ is a limit point of both $D \cap (-\infty,p)$ and $D \cap (p,\infty)$, then for every real $L$ the equality $\lim_{x \to p} h(x) = L$ holds if and only if both one-sided limits at $p$ exist and equal $L$.

[L6] At a limit point of its domain a function has at most one limit ([[lem-function-limit-unique]]); and the limit of a constant function $K$ at a limit point of its domain is $K$, any $\delta$ serving ([[def-function-limit]]).

[L7] $1 \ne -1$: $0 < 1$ ([[cor-of-one-positive]]) gives $-1 < 0 < 1$, and trichotomy forbids equality.

## Counterexample

**Proof technique:** direct.

1.1 $f$ is continuous at every point of $\mathbb{R}$, in particular at $0$. [L1]

1.2 $f(0) = |0| = 0$, so the difference quotient of $f$ at $0$ is $q(x) = |x|/x$ on $D := \mathbb{R} \setminus \{0\}$. [L2, L3]

1.3 $D \cap (0,\infty) = (0,\infty)$ and $D \cap (-\infty,0) = (-\infty,0)$, and $0$ is a limit point of each: for every real $\varepsilon > 0$ the point $\varepsilon/2$ lies in $(0,\infty)$ with $0 < |\varepsilon/2 - 0| < \varepsilon$, and $-\varepsilon/2$ lies in $(-\infty,0)$ with $0 < |-\varepsilon/2 - 0| < \varepsilon$. [L3, L4]

2.1 For $x > 0$ one has $|x| = x$, so $q(x) = x/x = 1$; for $x < 0$ one has $|x| = -x$, so $q(x) = (-x)/x = -1$. Thus $q$ restricted to $(0,\infty)$ is the constant $1$ and $q$ restricted to $(-\infty,0)$ is the constant $-1$. [step 1.2, L3]

3.1 By [L6] and step 1.3 the two restrictions have limits at $0$, namely $1$ and $-1$; so by [L4] the right limit of $q$ at $0$ is $1$ and the left limit is $-1$. [step 1.3, step 2.1, L4, L6]

4.1 Suppose $\lim_{x \to 0} q(x) = L$ for some real $L$. By step 1.3 the point $0$ is a limit point of both one-sided sets, so [L5] forces both one-sided limits to equal $L$; with step 3.1 and [L6] that gives $L = 1$ and $L = -1$, hence $1 = -1$, which [L7] forbids. So $q$ has no limit at $0$, and by [L2] the function $f$ is not differentiable at $0$. [step 3.1, L2, L5, L6, L7]

5.1 The refuted claim therefore fails at $A := \mathbb{R}$, $f := |\cdot|$ and $c := 0$: the point $0$ is a limit point of $\mathbb{R}$, $f$ is continuous at $0$ by step 1.1, and $f$ is not differentiable at $0$ by step 4.1. [step 1.1, step 4.1] ∎

## Remarks

- **The failure is one-sided in a precise sense.** Both one-sided limits of the difference quotient exist; they simply disagree. So this is not a function whose difference quotients oscillate or blow up, and the restriction of $f$ to $[0,\infty)$ is differentiable at $0$ with derivative $1$, as [[def-derivative]] records when it observes that differentiability is a property of the pair (function, domain).

- **What this says about [[cor-differentiable-implies-continuous]].** That implication is strict: continuity is genuinely weaker than differentiability, and this witness shows the gap opens at a single point of an otherwise unremarkable function. Nothing here suggests the gap is small in any other sense; how large the set of non-differentiability of a continuous function can be is not a question this page can pose.

- **Why the argument needs [[thm-two-sided-limit-iff-both-one-sided]] and not merely two computations.** Two different one-sided values do not by themselves contradict anything until one knows that a two-sided limit would have to agree with both, and that is exactly what the cited theorem supplies, under the hypothesis that $0$ is approached from both sides inside the domain.
