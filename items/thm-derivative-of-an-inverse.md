---
id: thm-derivative-of-an-inverse
kind: theorem
title: "Derivative of an inverse: if $f$ is continuous and injective on a nondegenerate interval $I$ and differentiable at $c \\in I$ with $f'(c) \\ne 0$, then the inverse $g$ is differentiable at $f(c)$ with $g'(f(c)) = 1/f'(c)$; and if $f'(c) = 0$ then $g$ is not differentiable at $f(c)$"
status: draft
origin: session
deps: [def-derivative, thm-caratheodory-characterisation, thm-chain-rule, thm-continuous-inverse, def-continuity-real, def-injection-surjection-bijection, def-interval, thm-algebra-of-continuous-functions, thm-composition-of-continuous-functions, def-function-limit, def-limit-point-r, cor-of-one-positive]
justified_by: []
aliases: [thm-inverse-function-rule]
landmark: true
short: "derivative of an inverse"
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
    - title: "Inverse function rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_rule"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex with at least two elements
([[def-interval]]), let $f : I \to \mathbb{R}$ be continuous on $I$
([[def-continuity-real]]) and injective
([[def-injection-surjection-bijection]]), and let $g : f[I] \to I$ be the
inverse of $f : I \to f[I]$ supplied by [[thm-continuous-inverse]]. Let
$c \in I$ and put $b := f(c)$.

Then $c$ is a limit point of $I$ and $b$ is a limit point of $f[I]$, so that
$f'(c)$ and $g'(b)$ are meaningful symbols ([[def-derivative]]), and, assuming
$f$ is differentiable at $c$:

1. if $f'(c) \ne 0$, then $g$ is differentiable at $b$ and
   $$g'(b) \;=\; \frac{1}{f'(c)} ;$$
2. if $f'(c) = 0$, then $g$ is **not** differentiable at $b$.

**The two claims together say that the inverse inherits differentiability
exactly where the derivative does not vanish.** Nothing is asserted at a point
of $f[I]$ that is not of the form $f(c)$ with $f$ differentiable at $c$, and
nothing is asserted about $g$ being differentiable *on* a set.

**No compactness and no boundedness is assumed.** $I$ may be open, half-open or
unbounded; all that is used of it is order-convexity and the presence of two
distinct points, the latter being exactly what makes every point of $I$ a limit
point of $I$ ([[def-derivative]]).

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ with at least two elements, a continuous injective $f : I \to \mathbb{R}$, a point $c \in I$, and $b := f(c)$; from step 1.3 onwards also the hypothesis that $f$ is differentiable at $c$ ([[def-interval]], [[def-continuity-real]], [[def-injection-surjection-bijection]], [[def-derivative]]).

[L1] Continuous inverse theorem ([[thm-continuous-inverse]], claims 2, 3 and 5): $f[I]$ is order-convex; $f : I \to f[I]$ is a bijection, so there is exactly one $g : f[I] \to I$ with $g(f(x)) = x$ for every $x \in I$ and $f(g(u)) = u$ for every $u \in f[I]$; and $g$ is continuous on $f[I]$.

[L2] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]), used in both directions: for $D \subseteq \mathbb{R}$, a point $p \in D$ that is a limit point of $D$ and $h : D \to \mathbb{R}$, the function $h$ is differentiable at $p$ if and only if there is $\eta : D \to \mathbb{R}$, continuous at $p$, with $h(y) - h(p) = \eta(y)(y-p)$ for every $y \in D$, and then $\eta(p) = h'(p)$.

[L3] Every point of an order-convex subset of $\mathbb{R}$ with at least two elements is a limit point of that set ([[def-derivative]], [[def-interval]], [[def-limit-point-r]]).

[L4] Injectivity ([[def-injection-surjection-bijection]]): $f(x) = f(x')$ implies $x = x'$, so $x \ne c$ gives $f(x) \ne f(c)$; and the image $f[I] = \{ f(x) : x \in I \}$.

[L5] Algebra and composition of continuous functions: a composite of functions continuous at the relevant points is continuous ([[thm-composition-of-continuous-functions]]); every constant function is continuous ([[thm-algebra-of-continuous-functions]], claim 5); and if $u, v : D \to \mathbb{R}$ are continuous at $p \in D$ with $v(p) \ne 0$, then $(u/v)$ restricted to $\{ y \in D : v(y) \ne 0 \}$ is continuous at $p$ ([[thm-algebra-of-continuous-functions]], claim 4).

[L6] Chain rule ([[thm-chain-rule]]): with $g$ differentiable at the limit point $b = f(c)$ of $f[I]$ and $f$ differentiable at the limit point $c$ of $I$, the composite $g \circ f$ is differentiable at $c$ with $(g \circ f)'(c) = g'(b)\,f'(c)$.

[L7] The identity on a set $D$ is differentiable at every limit point $p$ of $D$ with derivative $1$: its difference quotient is $(y - p)/(y - p) = 1$ for every $y \in D \setminus \{p\}$, a constant function, whose limit at $p$ is $1$ ([[def-derivative]], [[def-function-limit]]). The derivative at a point is a single real ([[def-derivative]]), and $0 \ne 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** direct.

1.1 $I$ has at least two elements, so by [L4] its image $f[I]$ has at least two elements; and $f[I]$ is order-convex by [L1]. So [L3] applies to both sets: every point of $I$ is a limit point of $I$, and every point of $f[I]$ is a limit point of $f[I]$. In particular $c$ is a limit point of $I$ and $b = f(c) \in f[I]$ is a limit point of $f[I]$. [L1, L3, L4]

1.2 Fix the inverse $g : f[I] \to I$ of $f : I \to f[I]$, continuous on $f[I]$; it satisfies $g(f(x)) = x$ for every $x \in I$, so in particular $g(b) = c$. [L1, choose]

1.3 Assume $f$ is differentiable at $c$. By [L2], applied to $f$ on $I$ at the limit point $c$, fix $\varphi : I \to \mathbb{R}$, continuous at $c$, with $f(x) - f(c) = \varphi(x)(x - c)$ for every $x \in I$ and $\varphi(c) = f'(c)$. [L2, choose]

2.1 $\varphi(x) \ne 0$ for every $x \in I$ with $x \ne c$: injectivity gives $f(x) \ne f(c)$, so $\varphi(x)(x-c) \ne 0$ and hence $\varphi(x) \ne 0$. If moreover $f'(c) \ne 0$ then $\varphi(c) = f'(c) \ne 0$ as well, so $\varphi$ vanishes at no point of $I$. [step 1.3, L4]

2.2 **The increment of $g$, rewritten.** Let $u \in f[I]$ and put $x := g(u) \in I$, so $f(x) = u$ by [L1]. Then $u - b = f(x) - f(c) = \varphi(x)(x - c) = \varphi(g(u))\,\bigl(g(u) - g(b)\bigr)$, using $g(b) = c$ from step 1.2. [step 1.2, step 1.3, L1]

2.3 **Claim 2.** Assume $f'(c) = 0$, and suppose $g$ were differentiable at $b$. Since $f[I] \subseteq f[I]$, since $f$ is differentiable at the limit point $c$ of $I$ and since $b = f(c)$ is a limit point of $f[I]$ by step 1.1, the chain rule [L6] gives that $g \circ f : I \to \mathbb{R}$ is differentiable at $c$ with $(g \circ f)'(c) = g'(b)\,f'(c) = g'(b) \cdot 0 = 0$. But $g \circ f$ is the identity on $I$ by step 1.2, and by [L7] the identity on $I$ is differentiable at the limit point $c$ with derivative $1$; the derivative at $c$ being a single real, this forces $0 = 1$, which [L7] excludes. So $g$ is not differentiable at $b$. [step 1.1, step 1.2, L6, L7]

3.1 **The reciprocal factor.** Assume $f'(c) \ne 0$. The map $g$ is continuous at $b$ by step 1.2 and sends $f[I]$ into $I$, and $\varphi$ is continuous at $c = g(b)$ by step 1.3, so $\varphi \circ g : f[I] \to \mathbb{R}$ is continuous at $b$ by [L5]; by step 2.1 it vanishes at no point of $f[I]$, since $g$ takes values in $I$, and $(\varphi \circ g)(b) = \varphi(c) = f'(c) \ne 0$. Hence, by [L5] applied with the constant numerator $1$ and denominator $\varphi \circ g$ on the domain $f[I]$, where the set on which the denominator does not vanish is the whole of $f[I]$, the function $\Phi := 1/(\varphi \circ g) : f[I] \to \mathbb{R}$ is continuous at $b$ and $\Phi(b) = 1/f'(c)$. [step 1.2, step 1.3, step 2.1, L5]

4.1 **The factorisation for $g$.** Assume $f'(c) \ne 0$ and let $u \in f[I]$. Dividing the identity of step 2.2 by the nonzero number $(\varphi \circ g)(u)$ gives $g(u) - g(b) = \Phi(u)\,(u - b)$, and this holds for every $u \in f[I]$. [step 2.2, step 3.1]

5.1 **Claim 1.** Assume $f'(c) \ne 0$. By step 1.1 the point $b$ is a limit point of $f[I]$; by step 4.1 the function $\Phi : f[I] \to \mathbb{R}$ factors the increment of $g$ at $b$; and by step 3.1 it is continuous at $b$. So [L2], applied to $g$ on $f[I]$ at $b$, gives that $g$ is differentiable at $b$ with $g'(b) = \Phi(b) = 1/f'(c)$. [step 1.1, step 3.1, step 4.1, L2]

6.1 Claim 1 is step 5.1 and claim 2 is step 2.3, and the two limit-point assertions are step 1.1. [step 2.3, step 5.1] ∎

## Remarks

- **Why claim 2 is not a defect of the method.** It is a theorem: at a point where $f' = 0$ no inverse can be differentiable, because the chain rule would then make the derivative of the identity equal to $0$. The geometry is the familiar one, a horizontal tangent reflecting into a vertical one, and the argument above is that picture with no picture in it.

- **What is used of [[thm-continuous-inverse]], and what is not.** Only that $f[I]$ is order-convex, that the two-sided inverse exists and is unique, and that it is continuous. The strict monotonicity that theorem also proves is not needed here, though it is what makes the situation intelligible.

- **The formula is often written $g'(b) = 1/f'(g(b))$**, which is the same statement since $g(b) = c$. Written that way it is a formula for $g'$ at every point of $f[I]$ at which the hypothesis holds, and that is how the companion page uses it to differentiate $x \mapsto x^{1/n}$.
