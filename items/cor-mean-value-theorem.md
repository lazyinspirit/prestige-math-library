---
id: cor-mean-value-theorem
kind: corollary
title: "The mean value theorem, as the case $g(x) = x$ of Cauchy's: for $f$ continuous on $[a,b]$ with $a < b$ and differentiable on $(a,b)$ there is $c \\in (a,b)$ with $f(b) - f(a) = f'(c)(b-a)$"
status: published
origin: session
deps: [thm-cauchy-mean-value, def-derivative, def-continuity-real, thm-algebra-of-continuous-functions, def-interval, def-function-limit]
justified_by: []
forward_refs: [cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]
aliases: [thm-mean-value-theorem, thm-lagrange-mean-value]
landmark: true
short: "the mean value theorem"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.10)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as a function on $[a,b]$
([[def-derivative]]). Then there is $c \in (a,b)$ with

$$f(b) - f(a) \;=\; f'(c)\,(b - a) .$$

Equivalently, since $b - a \ne 0$, there is $c \in (a,b)$ at which
$f'(c) = \bigl(f(b)-f(a)\bigr)/(b-a)$: the derivative somewhere inside equals
the average rate of change across the whole interval.

**Continuity on the closed interval cannot be dropped.** Differentiability at
every point of $(a,b)$ alone does not suffice: a function on $[0,1]$,
differentiable at every point of $(0,1)$ with derivative constantly $1$, for
which no $c$ works, is exhibited later on this page as a false statement, and
the companion page works the same witness out in full.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$.

[L1] Cauchy's mean value theorem ([[thm-cauchy-mean-value]]): for $f, g$ continuous on $[a,b]$ and differentiable at every point of $(a,b)$ there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$.

[L2] The identity $x \mapsto x$ is continuous at every point of any $A \subseteq \mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claim 5).

[L3] The identity $g$ on $[a,b]$ is differentiable at every $c \in [a,b]$ with $g'(c) = 1$: with $a < b$ the set $[a,b]$ is order-convex with at least two elements, so every one of its points is a limit point of it ([[def-derivative]], [[def-interval]]); and the difference quotient of $g$ at $c$ is $(x - c)/(x - c) = 1$ for every $x \in [a,b]$ with $x \ne c$, a constant function, whose limit at $c$ is $1$ ([[def-function-limit]], [[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Define $g : [a,b] \to \mathbb{R}$ by $g(x) := x$. [construct]

2.1 $g$ is continuous on $[a,b]$ by [L2]; it is differentiable at every $c \in (a,b)$ with $g'(c) = 1$ by [L3]; and $g(b) - g(a) = b - a$. [step 1.1, L2, L3]

3.1 By step 2.1 the pair $f, g$ satisfies every hypothesis of [L1], so there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$. Substituting $g'(c) = 1$ and $g(b)-g(a) = b-a$ gives $f(b) - f(a) = f'(c)(b-a)$. [step 2.1, L1] ∎

## Remarks

- **The geometric reading, and what it is not.** The conclusion says that some tangent line is parallel to the chord from $(a, f(a))$ to $(b, f(b))$. It does not say which one, it does not say there is only one, and it says nothing at all about $f$ between the endpoints beyond the hypotheses. Every use of the theorem on this page is a use of the equation, never of the picture.

- **Why this is a corollary and not the primitive statement.** [[thm-cauchy-mean-value]] is proved from [[thm-rolle]] with one auxiliary function, and this statement is that theorem at $g(x) = x$; deriving it the other way round, from this statement to Cauchy's, is also possible but needs an auxiliary function of its own, so nothing is saved. What matters is that both rest on Rolle, and Rolle on the extreme value theorem.

- **The two hypotheses are on different sets on purpose.** Continuity is asked for on the closed interval and differentiability only on the open one, so nothing at all is required of the difference quotients at $a$ and at $b$. Weakening the continuity in step with the differentiability, so that both are asked for on $(a,b)$ only, destroys the theorem, which is exactly what [[cex-mean-value-theorem-fails-without-continuity-at-the-endpoints]] shows on the companion page.
