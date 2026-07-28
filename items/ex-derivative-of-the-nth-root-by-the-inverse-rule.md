---
id: ex-derivative-of-the-nth-root-by-the-inverse-rule
kind: example
title: "For a natural $n \\ge 1$, the derivative of $x \\mapsto x^{1/n}$ on $(0,\\infty)$ is $\\frac{1}{\\iota(n)}x^{1/n - 1}$, obtained from the inverse rule applied to $x \\mapsto x^{n}$; in particular $(\\sqrt{x})' = 1/(\\iota(2)\\sqrt{x})$"
status: published
origin: session
deps: [thm-derivative-of-an-inverse, lem-derivative-of-a-power, thm-nth-roots-exist, def-rational-power, lem-rational-power-laws, def-integer-power, def-derivative, thm-continuous-inverse, def-interval, def-canonical-natural, lem-of-naturals-positive, lem-power-monotone, thm-algebra-of-continuous-functions, def-continuity-real, def-injection-surjection-bijection, def-limit-point-r]
justified_by: []
aliases: []
landmark: true
short: "derivative of the $n$-th root"
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
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "Inverse function rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_rule"
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
pipeline_run: null
---

## Example

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\iota$ be the canonical natural of
[[def-canonical-natural]], and let rational powers be those of
[[def-rational-power]], so that $u^{1/n}$ is the unique nonnegative $n$-th root
of $u$ ([[thm-nth-roots-exist]]).

**Claim.** The function

$$g : (0,\infty) \to \mathbb{R}, \qquad g(u) := u^{1/n},$$

is differentiable at every $b \in (0,\infty)$ ([[def-derivative]]), and

$$g'(b) \;=\; \frac{1}{\iota(n)}\; b^{\,1/n - 1} .$$

In particular at $n = 2$, writing $\sqrt{u} = u^{1/2}$,

$$g'(b) \;=\; \frac{1}{\iota(2)}\,b^{-1/2} \;=\; \frac{1}{\iota(2)\sqrt{b}} .$$

**The domain is $(0,\infty)$ and not $[0,\infty)$, and the reason depends on
$n$.** For $n \ge 2$ the exponent $1/n - 1$ is a **negative** rational, and
[[def-rational-power]] leaves $0^{r}$ undefined for rational $r < 0$, so at
$b = 0$ the displayed formula is not a statement at all; and the root really is
not differentiable there, by claim 2 of [[thm-derivative-of-an-inverse]] applied
on $[0,\infty)$, since $x \mapsto x^{n}$ has derivative $\iota(n)\,0^{\,n-1} = 0$
at $0$ for $n \ge 2$ ([[lem-derivative-of-a-power]], [[def-integer-power]]). At
$n = 1$ neither obstruction arises: the exponent $1/n - 1$ is $0$, not negative;
$u^{1/1} = u$ is the identity ([[thm-nth-roots-exist]]); and the formula reads
$g'(b) = b^{0} = 1$, which is correct at every real. So for $n = 1$ the
restriction to $(0,\infty)$ is a convenience of the uniform statement rather
than a necessity. Nothing below asserts anything about the root at $0$ in either
case.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the set $I := (0,\infty)$, the function $f : I \to \mathbb{R}$, $f(x) := x^{n}$, and the function $g : I \to \mathbb{R}$, $g(u) := u^{1/n}$.

[L1] Roots ([[thm-nth-roots-exist]]): for every real $a \ge 0$ and every natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^{n} = a$, written $a^{1/n}$; and $a^{1/n} > 0$ when $a > 0$. By [[def-rational-power]] the rational power $a^{1/n}$ is that same number.

[L2] Rational power laws ([[lem-rational-power-laws]]): for $a > 0$ and rationals $r, s$ one has $a^{r} > 0$, $(a^{r})^{s} = a^{rs}$, $a^{r+s} = a^{r}a^{s}$ and $a^{-r} = 1/a^{r}$; and rational powers extend integer powers on positive bases ([[def-rational-power]], [[def-integer-power]]).

[L3] Monotonicity of integer powers ([[lem-power-monotone]]): for a natural $n \ge 1$ the map $x \mapsto x^{n}$ is strictly increasing on $\{x \ge 0\}$, hence injective there (claim 2); and $x > 0$ implies $x^{n} > 0$ (claim 1).

[L4] Continuity ([[thm-algebra-of-continuous-functions]], claim 5, and [[def-continuity-real]]): $x \mapsto x^{n}$ is continuous at every point of its domain, and continuity passes to a subset of the domain.

[L5] Power rule and restriction ([[lem-derivative-of-a-power]], claim 2, with the restriction clause of [[def-derivative]]): $x \mapsto x^{n}$ on $\mathbb{R}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$, and if $c$ lies in a subset of $\mathbb{R}$ having $c$ as a limit point then the restriction is differentiable there with the same derivative.

[L6] Derivative of an inverse ([[thm-derivative-of-an-inverse]], claim 1): for $I$ order-convex with at least two elements and $f : I \to \mathbb{R}$ continuous and injective with inverse $g : f[I] \to I$, if $f$ is differentiable at $c \in I$ with $f'(c) \ne 0$ then $g$ is differentiable at $f(c)$ with $g'(f(c)) = 1/f'(c)$.

[L7] The continuous inverse theorem ([[thm-continuous-inverse]]): $f : I \to f[I]$ is a bijection with a unique two-sided inverse; and a right inverse of a bijection is that unique inverse ([[def-injection-surjection-bijection]]).

[L8] $I = (0,\infty)$ is order-convex with at least two elements ([[def-interval]]), and every point of it is a limit point of it ([[def-derivative]], [[def-limit-point-r]]); and $\iota(n) > 0$, hence $\iota(n) \ne 0$, for $n \ge 1$ ([[lem-of-naturals-positive]]).

## Verification

**Proof technique:** direct.

1.1 $I = (0,\infty)$ is order-convex with at least two elements, and every point of $I$ is a limit point of $I$. [L8]

1.2 $f$ is injective on $I$ by [L3], continuous on $I$ by [L4], and takes only positive values by [L3]. [L3, L4]

1.3 $f[I] = I$. For $x \in I$ one has $f(x) = x^{n} > 0$ by [L3], so $f[I] \subseteq I$; and for $u \in I$ the number $u^{1/n}$ is positive by [L1], hence lies in $I$, and $f(u^{1/n}) = (u^{1/n})^{n} = u$ by [L1], so $u \in f[I]$. [L1, L3]

2.1 The map $g : I \to I$, $u \mapsto u^{1/n}$, is the inverse of $f : I \to f[I] = I$. By [L7] and step 1.2 that bijection has a unique two-sided inverse; by step 1.3 the map $g$ takes values in $I$ and satisfies $f(g(u)) = u$ for every $u \in I$, so it is a right inverse of the bijection and therefore is that unique inverse. [step 1.2, step 1.3, L1, L7]

2.2 $f$ is differentiable at every $c \in I$ with $f'(c) = \iota(n)c^{\,n-1}$, by [L5] together with step 1.1; and $f'(c) \ne 0$, since $\iota(n) > 0$ by [L8] and $c^{\,n-1} > 0$ by [L3] as $c > 0$. [step 1.1, L3, L5, L8]

3.1 Let $b \in I$ and put $c := b^{1/n}$, an element of $I$ by [L1], with $f(c) = b$ by [L1]. By step 1.2, step 2.2 and [L6], applied on $I$ at $c$, the inverse $g$ is differentiable at $b = f(c)$ with $g'(b) = 1/f'(c) = 1/\bigl(\iota(n)\,c^{\,n-1}\bigr)$. [step 2.1, step 2.2, L1, L6]

4.1 Rewriting in terms of $b$: since $c = b^{1/n}$ and $n - 1$ is a natural, [L2] gives $c^{\,n-1} = \bigl(b^{1/n}\bigr)^{\,n-1} = b^{\,(n-1)/n} = b^{\,1 - 1/n}$, a positive real. Hence $g'(b) = 1/\bigl(\iota(n)\,b^{\,1-1/n}\bigr) = \frac{1}{\iota(n)}\,b^{-(1-1/n)} = \frac{1}{\iota(n)}\,b^{\,1/n - 1}$, using $a^{-r} = 1/a^{r}$ from [L2] and $\iota(n) \ne 0$ from [L8]. [step 3.1, L2, L8]

5.1 At $n = 2$ the map $g$ is $u \mapsto u^{1/2} = \sqrt{u}$, and step 4.1 reads $g'(b) = \frac{1}{\iota(2)}b^{\,1/2 - 1} = \frac{1}{\iota(2)}b^{-1/2} = \frac{1}{\iota(2)\sqrt{b}}$, again by [L2]. [step 4.1, L2] ∎

## Remarks

- **Why the inverse rule and not a direct estimate.** A direct computation of $\lim_{u \to b}(u^{1/n} - b^{1/n})/(u - b)$ has to rationalise the numerator using the factorisation of a difference of $n$-th powers, and then has to know that $u^{1/n} \to b^{1/n}$ to evaluate the limit, which is the continuity of the root. [[thm-derivative-of-an-inverse]] packages both, and its own proof gets the continuity from [[thm-continuous-inverse]] rather than proving it again.

- **Where the hypothesis $f'(c) \ne 0$ is spent.** At $c > 0$ the derivative $\iota(n)c^{\,n-1}$ is positive, so the hypothesis costs nothing on $(0,\infty)$. It is exactly the hypothesis that fails at $c = 0$ when the domain is enlarged to $[0,\infty)$ and $n \ge 2$, and there the inverse rule says the root is **not** differentiable at $0$, which is claim 2 of that theorem.

- **The exponent arithmetic is rational arithmetic, not real arithmetic.** The identity $(n-1)/n = 1 - 1/n$ is an identity of rationals, and $\bigl(b^{1/n}\bigr)^{\,n-1} = b^{\,(n-1)/n}$ is claim 5 of [[lem-rational-power-laws]]. This library has no real exponents, so every step above stays inside $\mathbb{Q}$ in the exponent, as [[def-rational-power]] requires.
