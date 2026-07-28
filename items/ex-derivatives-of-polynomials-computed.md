---
id: ex-derivatives-of-polynomials-computed
kind: example
title: "Worked derivatives from the algebra of derivatives and the power rule: $(3x^{4} - 5x + 2)' = 12x^{3} - 5$, and the quotient rule applied to $(x^{2}+1)/(x-1)$ on $\\mathbb{R} \\setminus \\{1\\}$"
status: draft
origin: session
deps: [def-derivative, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-limit-point-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: false
short: "worked polynomial and rational derivatives"
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
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
    - title: "Quotient rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_rule"
pipeline_run: null
---

## Example

Numerals below denote canonical naturals of $\mathbb{R}$: $3$ is $\iota(3)$, $12$
is $\iota(12)$, and so on ([[def-canonical-natural]]). Powers are those of
[[def-integer-power]].

**Claim 1.** Let $p : \mathbb{R} \to \mathbb{R}$ be given by

$$p(x) \;=\; \iota(3)\,x^{4} \;-\; \iota(5)\,x \;+\; \iota(2) .$$

Then $p$ is differentiable at every $c \in \mathbb{R}$ ([[def-derivative]]) and

$$p'(c) \;=\; \iota(12)\,c^{3} - \iota(5) .$$

**Claim 2.** Put $A_0 := \{\, x \in \mathbb{R} : x - 1 \ne 0 \,\} = \mathbb{R}
\setminus \{1\}$ and let $r : A_0 \to \mathbb{R}$ be given by
$r(x) = (x^{2}+1)/(x-1)$. Then every $c \in A_0$ is a limit point of $A_0$,
$r$ is differentiable at $c$ as a function on $A_0$, and

$$r'(c) \;=\; \frac{c^{2} - \iota(2)c - 1}{(c-1)^{2}} .$$

Nothing here is new: both computations are readings of
[[thm-algebra-of-derivatives]] on top of [[lem-derivative-of-a-power]]. They are
written out because the two places a computation of this kind goes wrong are
the constant term, whose derivative is $0$ and not $\iota(0)c^{-1}$, and the
domain of the quotient, which is not $\mathbb{R}$.

## Facts & Assumptions

**Given:** The functions $p$ and $r$ of the statement, and an arbitrary real $c$; for claim 2 also $c \ne 1$.

[L1] Power rule ([[lem-derivative-of-a-power]]): for a natural $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$; and $x \mapsto x^{0}$ is the constant $1$, with derivative $0$ (claims 1 and 2).

[L2] Algebra of derivatives ([[thm-algebra-of-derivatives]]): at a limit point $c$ of the common domain, sums, scalar multiples and products of functions differentiable at $c$ are differentiable at $c$ with the stated formulas; and if the denominator $v$ is nonzero at $c$ then, on $D_0 := \{x : v(x) \ne 0\}$, the point $c$ lies in $D_0$ and is a limit point of $D_0$, and $(u/v)|_{D_0}$ is differentiable at $c$ with derivative $\bigl(u'(c)v(c) - u(c)v'(c)\bigr)/v(c)^{2}$.

[L3] Canonical naturals ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(1) = 1$, $\iota(m+n) = \iota(m)+\iota(n)$ and $\iota(mn) = \iota(m)\iota(n)$ for naturals $m, n \ge 1$; in particular $\iota(3)\iota(4) = \iota(12)$ and $\iota(2) - 1 = 1$, the latter from $\iota(2) = \iota(1) + 1 = 1 + 1$.

[L4] Powers ([[def-integer-power]]): $x^{0} = 1$, $x^{1} = x$ and $x^{2} = x \cdot x$.

[L5] Every real is a limit point of $\mathbb{R}$, punctured neighbourhoods being never empty ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Verification

**Proof technique:** direct.

1.1 Let $c \in \mathbb{R}$, a limit point of $\mathbb{R}$ by [L5]. By [L1] the functions $x \mapsto x^{4}$, $x \mapsto x^{1}$ and $x \mapsto x^{0}$ are differentiable at $c$ with derivatives $\iota(4)c^{3}$, $\iota(1)c^{0} = 1$ and $0$ respectively, using [L4]. [L1, L4, L5]

1.2 Put $u(x) := x^{2} + 1$ and $v(x) := x - 1$, both functions on $\mathbb{R}$, and let $c \in \mathbb{R}$ with $c \ne 1$. [construct]

2.1 **Claim 1.** The function $p$ is the sum of the scalar multiples $\iota(3)\cdot(x \mapsto x^{4})$, $(-\iota(5))\cdot(x \mapsto x^{1})$ and $\iota(2)\cdot(x \mapsto x^{0})$, so by the sum and scalar-multiple rules of [L2] it is differentiable at $c$ with $p'(c) = \iota(3)\iota(4)c^{3} + (-\iota(5)) \cdot 1 + \iota(2) \cdot 0 = \iota(12)c^{3} - \iota(5)$, the last step by [L3]. [step 1.1, L2, L3]

2.2 The functions $u$ and $v$ are differentiable at every real $c$ with $u'(c) = \iota(2)c$ and $v'(c) = 1$: $u$ is the sum of $x \mapsto x^{2}$ and the constant $1$, whose derivatives at $c$ are $\iota(2)c^{1} = \iota(2)c$ and $0$ by [L1] and [L4]; and $v$ is the sum of $x \mapsto x^{1}$ and the constant $-1$. [step 1.1, L1, L2, L4]

3.1 **Claim 2.** By step 1.2 one has $v(c) = c - 1 \ne 0$, and $\{x \in \mathbb{R} : v(x) \ne 0\}$ is exactly $A_0$. So the quotient rule of [L2] applies: $c \in A_0$, the point $c$ is a limit point of $A_0$, and $r = (u/v)|_{A_0}$ is differentiable at $c$ with $r'(c) = \bigl(u'(c)v(c) - u(c)v'(c)\bigr)/v(c)^{2} = \bigl(\iota(2)c\,(c-1) - (c^{2}+1)\bigr)/(c-1)^{2}$. [step 1.2, step 2.2, L2]

4.1 Expanding the numerator: $\iota(2)c(c-1) - (c^{2}+1) = \iota(2)c^{2} - \iota(2)c - c^{2} - 1 = \bigl(\iota(2)-1\bigr)c^{2} - \iota(2)c - 1 = c^{2} - \iota(2)c - 1$, the last equality because $\iota(2) - 1 = 1$ by [L3]. So $r'(c) = \bigl(c^{2} - \iota(2)c - 1\bigr)/(c-1)^{2}$. [step 3.1, L3, L4]

5.1 Both claims are verified: claim 1 by step 2.1 and claim 2 by steps 3.1 and 4.1. [step 2.1, step 4.1] ∎

## Remarks

- **The constant term is where the index trap sits.** Written informally, the derivative of $\iota(2)x^{0}$ "is" $\iota(2)\iota(0)x^{-1}$, and $x^{-1}$ is undefined at $0$. Claim 1 of [[lem-derivative-of-a-power]] exists precisely so that the constant case is handled by its own statement, and the answer there is $0$ on the whole line.

- **The quotient lives on $\mathbb{R} \setminus \{1\}$, not on $\mathbb{R}$.** The function $r$ is not defined at $1$, and no derivative of it there is asserted or could be. [[thm-algebra-of-derivatives]] states its quotient case on the set where the denominator does not vanish for exactly this reason, and it also supplies the fact that the smaller set still has $c$ as a limit point, without which the derivative there would not be a defined symbol.

- **Reading the numerals.** $\iota(12)$ is what "$12$" means as an element of $\mathbb{R}$; the equality $\iota(3)\iota(4) = \iota(12)$ is a lemma ([[lem-of-naturals-positive]]) and not an act of arithmetic on the page. Every numeral in this library is such an image, and where a computation multiplies two of them the lemma is what licenses collapsing the product.
