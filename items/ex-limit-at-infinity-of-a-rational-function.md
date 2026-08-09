---
id: ex-limit-at-infinity-of-a-rational-function
kind: example
title: "$(3x^2 - 1)/(x^2 + x) \\to 3$ as $x \\to +\\infty$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-limits-at-infinity, def-bounded-set, def-interval, def-integer-power, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, def-field, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "limit at $+\\infty$"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "J. Lebl, Basic Analysis I, §3.5"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Example

Let $A := (0, \infty)$ ([[def-interval]]) and let

$$f : A \to \mathbb{R}, \qquad f(x) := \frac{3x^2 - 1}{x^2 + x}$$

([[def-integer-power]]). Then $A$ is not bounded above
([[def-bounded-set]]), so the limit at $+\infty$ is well posed
([[def-limits-at-infinity]]); it exists, and

$$\lim_{x \to +\infty} f(x) \;=\; 3 .$$

**This is proved by a direct estimate, not by an algebra of limits.**
[[thm-algebra-of-function-limits]] is stated at a *finite* limit point of the
domain, and this library proves no algebra of limits at $\pm\infty$; the familiar
manipulation "divide numerator and denominator by $x^2$ and take limits termwise"
is therefore not available here. Instead the whole computation is packed into one
inequality, valid for $x \ge 1$:

$$|f(x) - 3| \;=\; \frac{1 + 3x}{x^2 + x} \;\le\; \frac{4}{x} ,$$

after which the Archimedean property finishes the argument.

## Facts & Assumptions

**Given:** The set $A = (0,\infty)$ and the function $f(x) = (3x^2 - 1)/(x^2 + x)$ on $A$.

[L1] Limits at $+\infty$: for $A$ not bounded above, $\lim_{x \to +\infty} f(x) = L$ means that for every real $\varepsilon > 0$ there is a real $M$ with $|f(x) - L| < \varepsilon$ for every $x \in A$ with $x > M$ ([[def-limits-at-infinity]]).

[L2] Archimedean property: for every real $t$ there is a natural $n \ge 1$ with $t < n \cdot 1_{\mathbb{R}}$; and for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-complete-ordered-field]]). The canonical naturals satisfy $n \cdot 1_{\mathbb{R}} > 0$ and $1 \le n \cdot 1_{\mathbb{R}}$ for $n \ge 1$, and are increasing in $n$ ([[lem-of-naturals-positive]]).

[L3] Bounded set: $S$ is bounded above when some real is an upper bound of it ([[def-bounded-set]]); and $(0,\infty) = \{\, x : x > 0 \,\}$ ([[def-interval]]).

[L4] Order and field arithmetic: products of positives are positive and for $t > 0$, $u < v$ is equivalent to $ut < vt$ ([[lem-of-sign-rules]]); $a > 0$ gives $a^{-1} > 0$ and $0 < a < b$ gives $0 < 1/b < 1/a$, with the non-strict forms following by adjoining equality ([[lem-of-inverse-positive]]); adding inequalities and translation invariance ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]); the field identities ([[def-field]]); transitivity and totality ([[def-ordered-field]]).

[L5] Absolute value: $|u| \ge 0$, $|u| = u$ for $u \ge 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L6] Powers: $x^2 = x \cdot x$ ([[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 $f$ is defined on all of $A$: every $x \in A$ has $x > 0$, hence $x^2 = x \cdot x > 0$ and $x^2 + x > 0$, so $x^2 + x \ne 0$ and the quotient exists. [L3, L4, L6]

1.2 $A$ is not bounded above: given a real $M$, [L2] supplies a natural $n \ge 1$ with $M < n \cdot 1_{\mathbb{R}}$, and $n \cdot 1_{\mathbb{R}} > 0$ puts it in $A$; so no real is an upper bound of $A$, and the limit at $+\infty$ is well posed. [L2, L3]

2.1 For every $x \in A$, $f(x) - 3 = \dfrac{(3x^2 - 1) - 3(x^2 + x)}{x^2 + x} = \dfrac{-1 - 3x}{x^2 + x}$, hence, both $1 + 3x$ and $x^2 + x$ being positive, $|f(x) - 3| = \dfrac{1 + 3x}{x^2 + x}$. [step 1.1, L4, L5, L6]

3.1 For every $x \in A$ with $x \ge 1$: from $1 \le x$ we get $1 + 3x \le x + 3x = 4x$, and from $x > 0$ we get $x^2 + x > x^2 > 0$; therefore $\dfrac{1 + 3x}{x^2 + x} \le \dfrac{4x}{x^2 + x} \le \dfrac{4x}{x^2} = \dfrac{4}{x}$, so $|f(x) - 3| \le 4/x$. [step 2.1, L4, L6]

4.1 Let $\varepsilon > 0$ be an arbitrary real. By [L2] fix a natural $n \ge 1$ with $1/n < \varepsilon$, and put $M := 4n$, where $n$ denotes the canonical natural $n \cdot 1_{\mathbb{R}}$. Since $n \ge 1$ we have $M = 4n \ge 4 > 1$. For every $x \in A$ with $x > M$: first $x > 1$, so step 3.1 applies and $|f(x) - 3| \le 4/x$; and $0 < M < x$ gives $0 < 1/x < 1/M$ by [L4], whence $4/x < 4/M = 4/(4n) = 1/n < \varepsilon$. So $|f(x) - 3| < \varepsilon$ for every $x \in A$ with $x > M$. [step 3.1, L2, L4, L5]

5.1 Since $A$ is not bounded above and for every real $\varepsilon > 0$ such an $M$ has been produced, the limit of $f$ at $+\infty$ exists and equals $3$. [step 1.2, step 4.1, L1] ∎

## Remarks

- **Where the estimate comes from.** The exact identity of step 2.1 replaces the informal "the leading terms dominate": it makes $|f(x) - 3|$ a quotient of two explicit positive quantities, and step 3.1 then bounds numerator above and denominator below by the crudest possible expressions, $4x$ and $x^2$. The constant $4$ is not optimal and does not need to be: the Archimedean property absorbs any constant.

- **Why the domain is $(0,\infty)$ and not $\mathbb{R}$.** The denominator $x^2 + x$ vanishes at $0$ and at $-1$, so $f$ is not defined there; restricting to $(0,\infty)$ both makes $f$ a function and makes the denominator positive, which is what lets the absolute values be dropped in step 2.1. Any domain unbounded above and avoiding the two zeros would give the same limit by the same estimate.

- **The corresponding statement at $-\infty$** would be the limit $3$ on a domain unbounded below and avoiding the two zeros of the denominator, proved from the same identity of step 2.1 with the inequalities on $x$ reversed. It is not asserted here and is not proved here, because nothing on these pages uses it.
