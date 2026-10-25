---
id: ex-ordinal-subtraction-and-division-computed
kind: example
title: "Solving $\\omega + \\gamma = \\omega\\cdot 2$ and dividing $\\omega^{2} + \\omega + 3$ by $\\omega$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ordinal-subtraction, thm-ordinal-division-with-remainder, thm-ordinal-multiplication-associative-and-left-distributive, thm-ordinal-arithmetic-monotonicity, thm-ordinal-exponent-laws, def-ordinal-addition, def-ordinal-multiplication, def-ordinal-exponentiation, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$\\gamma = \\omega$; quotient $\\omega+1$, remainder $3$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Example

Two computations with the two "inverse" operations of this page.

**Left subtraction.** The equation $\omega + \gamma = \omega \cdot 2$ has exactly
one solution, and it is $\gamma = \omega$. Existence and uniqueness are
[[thm-ordinal-subtraction]], applicable because $\omega \le \omega \cdot 2$;
finding the solution is the computation $\omega \cdot 2 = \omega + \omega$.

**Division with remainder.** Dividing $\omega^{2} + \omega + 3$ by $\omega$
gives

$$\omega^{2} + \omega + 3 \;=\; \omega \cdot (\omega + 1) + 3, \qquad 3 < \omega,$$

so the quotient is $\omega + 1$ and the remainder is $3$, and by the uniqueness
in [[thm-ordinal-division-with-remainder]] there is no other answer. The step
that does the work is $\omega^{2} + \omega = \omega \cdot (\omega + 1)$, which is
left distributivity.

## Facts & Assumptions

**Given:** The ordinals with the operations of [[def-ordinal-addition]], [[def-ordinal-multiplication]] and [[def-ordinal-exponentiation]]; $\omega$ is the least limit ordinal and $3 \in \omega$ ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

[L1] $\mu \cdot \delta^{+} = \mu \cdot \delta + \mu$ and $\mu \cdot 0 = 0$ ([[def-ordinal-multiplication]]); $\mu + 1 = \mu^{+}$ and $\mu + 0 = \mu$ ([[def-ordinal-addition]]); $\mu^{\delta^{+}} = \mu^{\delta} \cdot \mu$ and $\mu^{0} = 1$ ([[def-ordinal-exponentiation]]).

[L2] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu \cdot 1 = \mu$ (claim (a)); $\nu < \theta$ implies $\mu + \nu < \mu + \theta$, and $\mu \le \mu + \nu$ (claim (b)).

[L3] $\mu(\nu + \theta) = \mu\nu + \mu\theta$ ([[thm-ordinal-multiplication-associative-and-left-distributive]]).

[L4] $\mu^{1} = \mu$ ([[thm-ordinal-exponent-laws]]).

[L5] For $\mu \le \nu$ there is exactly one $\gamma$ with $\mu + \gamma = \nu$ ([[thm-ordinal-subtraction]]).

[L6] For $\mu > 0$ every $\nu$ is $\mu \cdot \xi + \rho$ with $\rho < \mu$, in exactly one way ([[thm-ordinal-division-with-remainder]]).

[L7] $\omega$ is a limit ordinal, so $\omega \ne 0$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); trichotomy and the elementary ordinal facts ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

## Verification

**Proof technique:** direct.

1.1 $\omega \cdot 2 = \omega \cdot 1^{+} = \omega \cdot 1 + \omega = \omega + \omega$ by [L1] and [L2], and $\omega \le \omega + \omega$ by [L2]. [L1, L2]

1.2 $\omega^{2} = \omega^{1^{+}} = \omega^{1} \cdot \omega = \omega \cdot \omega$ by [L1] and [L4]. [L1, L4]

2.1 Left subtraction: $\omega \le \omega \cdot 2$ by step 1.1, so [L5] gives exactly one $\gamma$ with $\omega + \gamma = \omega \cdot 2$; and $\gamma = \omega$ works, since $\omega + \omega = \omega \cdot 2$ by step 1.1, so $\gamma = \omega$ is the solution. [step 1.1, L5]

2.2 $\omega^{2} + \omega = \omega \cdot \omega + \omega \cdot 1 = \omega \cdot (\omega + 1)$ by step 1.2, [L2] and left distributivity [L3]. [step 1.2, L2, L3]

3.1 Division: $\omega > 0$ by [L7], and $\omega^{2} + \omega + 3 = \omega \cdot (\omega + 1) + 3$ by step 2.2, with $3 < \omega$; so by the uniqueness in [L6] the quotient of $\omega^{2} + \omega + 3$ by $\omega$ is $\omega + 1$ and the remainder is $3$. [step 2.2, L6, L7]

4.1 The unique solution of $\omega + \gamma = \omega \cdot 2$ is $\gamma = \omega$, and dividing $\omega^{2} + \omega + 3$ by $\omega$ gives quotient $\omega + 1$ and remainder $3$. [step 3.1, step 2.1] ∎

## Remarks

**Uniqueness is what makes "the answer" meaningful.** Both computations exhibit a solution and then quote a uniqueness theorem. Without [[thm-ordinal-subtraction]] the equation $\omega + \gamma = \omega \cdot 2$ would only be known to have *a* solution; without [[thm-ordinal-division-with-remainder]] the pair $(\omega + 1, 3)$ would be *an* answer among possibly many. Both theorems are proved from left cancellation, which is the one cancellation law ordinal addition has.

**The equation on the other side has no solution at all.** There is no $\gamma$ with $\gamma + \omega = \omega + 1$, because $\gamma + \omega$ is a limit ordinal for every $\gamma$ (claim (g) of [[thm-ordinal-arithmetic-monotonicity]]) while $\omega + 1 = \omega^{+}$ is a successor. So ordinal subtraction genuinely exists only on the left, and the same asymmetry is what forces the quotient in [[thm-ordinal-division-with-remainder]] to be written on the right of $\alpha$.

**Reading the division off the Cantor normal form.** $\omega^{2} + \omega + 3$ has normal form with exponents $2 > 1 > 0$ and coefficients $1, 1, 3$ ([[thm-cantor-normal-form]]). In this instance, dividing by $\omega = \omega^{1}$ has put the term of exponent $0$ into the remainder and lowered each of the two remaining exponents by one: $\omega^{2}$ became $\omega$ and $\omega$ became $1$, which is exactly the quotient $\omega + 1$, while $3$ is the constant term. That pattern is what the general division algorithm is doing, but no general statement of it is claimed here.
