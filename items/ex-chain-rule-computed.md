---
id: ex-chain-rule-computed
kind: example
title: "The chain rule applied to $x \\mapsto (x^{2}+1)^{5}$ and to $x \\mapsto ((3x-1)^{2}+2)^{3}$, with the Carathéodory factor written out in closed form in the first case"
status: published
origin: session
deps: [thm-chain-rule, thm-caratheodory-characterisation, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-derivative, def-integer-power, lem-power-difference-factorisation, lem-power-laws, def-finite-sum, lem-finite-sum-laws, thm-algebra-of-continuous-functions, def-canonical-natural, lem-of-naturals-positive, def-limit-point-r, def-continuity-real, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: false
short: "worked chain-rule computations"
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
    - title: "Chain rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Chain_rule"
    - title: "Power rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_rule"
pipeline_run: null
---

## Example

Numerals denote canonical naturals of $\mathbb{R}$ ([[def-canonical-natural]])
and powers are those of [[def-integer-power]].

**Claim 1.** Let $F : \mathbb{R} \to \mathbb{R}$ be $F(x) = (x^{2}+1)^{5}$. Then
$F$ is differentiable at every $c \in \mathbb{R}$ ([[def-derivative]]) and

$$F'(c) \;=\; \iota(10)\,c\,(c^{2}+1)^{4} .$$

**Claim 2.** For $b \in \mathbb{R}$ the Carathéodory factor
([[thm-caratheodory-characterisation]]) of $y \mapsto y^{5}$ at $b$ is the
polynomial function

$$\varphi(y) \;=\; \sum_{k<5} b^{k}\,y^{\,4-k} ,$$

which satisfies $y^{5} - b^{5} = \varphi(y)(y-b)$ for every $y \in \mathbb{R}$,
is continuous at $b$, and has $\varphi(b) = \iota(5)b^{4}$.

**Claim 3.** Let $G : \mathbb{R} \to \mathbb{R}$ be
$G(x) = \bigl((\iota(3)x-1)^{2}+2\bigr)^{3}$. Then $G$ is differentiable at
every $c \in \mathbb{R}$ and

$$G'(c) \;=\; \iota(18)\,(\iota(3)c-1)\,\bigl((\iota(3)c-1)^{2}+2\bigr)^{2} .$$

Claim 2 is included because it makes the mechanism of the chain rule visible:
the factor that the proof of [[thm-chain-rule]] takes from
[[thm-caratheodory-characterisation]] is, for a power, an explicit polynomial,
and no auxiliary case distinction is hidden inside it.

## Facts & Assumptions

**Given:** The functions $F$, $\varphi$ and $G$ of the statement, and an arbitrary real $c$.

[L1] Chain rule ([[thm-chain-rule]]): with $g : A \to \mathbb{R}$, $g[A] \subseteq B$, $f : B \to \mathbb{R}$, $c \in A$ a limit point of $A$ at which $g$ is differentiable, and $b := g(c) \in B$ a limit point of $B$ at which $f$ is differentiable, the composite $f \circ g$ is differentiable at $c$ with $(f \circ g)'(c) = f'(g(c))g'(c)$.

[L2] Power rule ([[lem-derivative-of-a-power]], claims 1 and 2): for a natural $n \ge 1$, $x \mapsto x^{n}$ is differentiable at every real with derivative $\iota(n)x^{\,n-1}$; and $x \mapsto x^{0}$ is the constant $1$, of derivative $0$.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]], claims 1 and 2): sums and scalar multiples of functions differentiable at a limit point of the common domain are differentiable there, with the corresponding derivatives.

[L4] Carathéodory's characterisation ([[thm-caratheodory-characterisation]]): $f$ is differentiable at a limit point $p$ of its domain if and only if some $\eta$ continuous at $p$ satisfies $f(y)-f(p) = \eta(y)(y-p)$ throughout, and then $\eta(p) = f'(p)$; the factor is unique.

[L5] Factorisation of a difference of powers ([[lem-power-difference-factorisation]]): for reals $s, t$ and a natural $n \ge 1$, $t^{n} - s^{n} = (t-s)\sum_{k<n} s^{k} t^{\,n-1-k}$ ([[def-finite-sum]]).

[L6] Finite sums ([[lem-finite-sum-laws]], claim 2): $\sum_{k<n} \lambda = \iota(n)\lambda$ for a constant $\lambda$; and powers combine as $b^{k}b^{\,n-1-k} = b^{\,n-1}$ for $k \le n-1$ ([[lem-power-laws]]).

[L7] Polynomial functions are continuous at every point of their domain ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]).

[L8] Canonical naturals ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(mn) = \iota(m)\iota(n)$ for naturals $m, n \ge 1$, so $\iota(5)\iota(2) = \iota(10)$, $\iota(2)\iota(3) = \iota(6)$ and $\iota(3)\iota(6) = \iota(18)$; and $\iota(1) = 1$.

[L9] Every real is a limit point of $\mathbb{R}$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

## Verification

**Proof technique:** direct.

1.1 Put $g(x) := x^{2} + 1$ and $f(y) := y^{5}$, both on $\mathbb{R}$. By [L2] and [L3] the function $g$ is differentiable at every real $c$ with $g'(c) = \iota(2)c$, and $f$ is differentiable at every real $b$ with $f'(b) = \iota(5)b^{4}$. [L2, L3]

1.2 Put $u(x) := \iota(3)x - 1$, $v(y) := y^{2} + 2$ and $w(z) := z^{3}$, all on $\mathbb{R}$. By [L2] and [L3], $u'(c) = \iota(3)$, $v'(b) = \iota(2)b$ and $w'(a) = \iota(3)a^{2}$ at every real argument. [L2, L3]

2.1 **Claim 2.** Fix $b \in \mathbb{R}$ and put $\varphi(y) := \sum_{k<5} b^{k}y^{\,4-k}$ for $y \in \mathbb{R}$. Applying [L5] with $n := 5$, $s := b$ and $t := y$ gives $y^{5} - b^{5} = (y - b)\sum_{k<5} b^{k} y^{\,4-k} = \varphi(y)(y-b)$ for every real $y$. As a finite sum of scalar multiples of powers of $y$, the function $\varphi$ is a polynomial function and so is continuous at $b$ by [L7]. Finally $\varphi(b) = \sum_{k<5} b^{k}b^{\,4-k} = \sum_{k<5} b^{4} = \iota(5)b^{4}$ by [L6]. So $\varphi$ is the factor of [L4] for $f$ at $b$, and [L4] returns $f'(b) = \varphi(b) = \iota(5)b^{4}$, in agreement with step 1.1. [L4, L5, L6, L7]

2.2 **Claim 1.** By [L9] every real is a limit point of $\mathbb{R}$, and $g$ maps $\mathbb{R}$ into $\mathbb{R}$, so [L1] applies to $F = f \circ g$ at any $c$: $F$ is differentiable at $c$ with $F'(c) = f'(g(c))\,g'(c) = \iota(5)(c^{2}+1)^{4}\cdot \iota(2)c = \iota(10)\,c\,(c^{2}+1)^{4}$, the last step by [L8]. [step 1.1, L1, L8, L9]

2.3 **Claim 3.** By [L1] and [L9], applied first to $v \circ u$ and then to $w \circ (v \circ u)$, the function $G = w \circ (v \circ u)$ is differentiable at every real $c$, with $(v \circ u)'(c) = v'(u(c))u'(c) = \iota(2)(\iota(3)c-1)\cdot\iota(3) = \iota(6)(\iota(3)c-1)$ and then $G'(c) = w'\bigl((v \circ u)(c)\bigr)\,(v \circ u)'(c) = \iota(3)\bigl((\iota(3)c-1)^{2}+2\bigr)^{2}\cdot\iota(6)(\iota(3)c-1) = \iota(18)(\iota(3)c-1)\bigl((\iota(3)c-1)^{2}+2\bigr)^{2}$, the collapsing of the numerals by [L8]. [step 1.2, L1, L8, L9]

3.1 The three claims are verified: claim 1 by step 2.2, claim 2 by step 2.1 and claim 3 by step 2.3. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The closed form of the factor is what makes claim 2 worth stating.** For a general $f$ the Carathéodory factor is produced by [[thm-caratheodory-characterisation]] out of the difference quotient itself, and its value at the base point is filled in by hand; for a power it is a polynomial written down in advance, by [[lem-power-difference-factorisation]], and its continuity is then a reading of [[thm-algebra-of-continuous-functions]] rather than an appeal to the derivative. The two routes agree, which is step 2.1.

- **Nested composites cost nothing extra.** Claim 3 applies [[thm-chain-rule]] twice, and at each application the inner function maps $\mathbb{R}$ into $\mathbb{R}$, so the hypothesis that the image point is a limit point of the outer domain is automatic. On a smaller domain it would not be, and that is the hypothesis a careless nesting would drop.

- **What the numerals hide.** $\iota(18) = \iota(3)\iota(6) = \iota(3)\iota(2)\iota(3)$ is an identity of canonical naturals ([[lem-of-naturals-positive]]), not an arithmetic fact about the symbol $18$; every collapse of a product of numerals above is that lemma.
