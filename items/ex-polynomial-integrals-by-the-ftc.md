---
id: ex-polynomial-integrals-by-the-ftc
kind: example
title: "$\\int_0^1 x^{m} = 1/\\iota(m+1)$, computed by the fundamental theorem and checked against the definition"
status: published
origin: session
deps: [cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-monotonicity-of-the-integral, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable, lem-integral-elementary-bounds, def-integer-power, lem-power-monotone, def-canonical-natural, lem-of-naturals-positive, def-darboux-integral, def-oriented-integral, def-derivative, def-continuity-real, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^1 x^m = 1/\\iota(m+1)$"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $m \in \mathbb{N}$ and let $p_m : [0,1] \to \mathbb{R}$ be $p_m(x) = x^{m}$
([[def-integer-power]]). Then $p_m$ is integrable on $[0,1]$ and

$$\int_0^1 x^{m}\,\mathrm{d}x \;=\; \frac{1}{\iota(m+1)} ,$$

where $\iota(m+1)$ is the canonical natural of $m+1$ in $\mathbb{R}$
([[def-canonical-natural]]) and is positive because $m+1 \ge 1$
([[lem-of-naturals-positive]]).

**The $\iota$ is not decoration.** A natural number is a von Neumann natural,
that is a set, so $m+1$ is not an element of $\mathbb{R}$ and $1/(m+1)$ is not an
expression of the field; what the display says is $1/\iota(m+1)$, and that is why
the reader meets $\iota$ here at all.

Two independent checks are carried out below: the value at $m = 0$ against the
published formula for the integral of a constant
([[lem-integral-elementary-bounds]]), and the monotonicity of the answer in $m$
against the pointwise inequality $x^{m+1} \le x^{m}$ on $[0,1]$.

## Facts & Assumptions

**Given:** A natural number $m$ and the function $p_m(x) = x^{m}$ on $[0,1]$.

[L1] For $n \ge 1$ the function $x \mapsto x^{n}$ is differentiable at every real $c$ with derivative $\iota(n)\,c^{\,n-1}$ ([[lem-derivative-of-a-power]], claim 2); the constant $x \mapsto x^{0} = 1$ has derivative $0$ (claim 1).

[L2] A scalar multiple of a differentiable function is differentiable with the scaled derivative ([[thm-algebra-of-derivatives]], claim 2).

[L3] Every polynomial function is continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]), and a continuous function on $[0,1]$ is integrable there ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L4] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$ ([[thm-ftc-second-part]]); a continuous function on an interval has a primitive ([[cor-primitives-of-a-continuous-function]]).

[L5] Powers: $1^{n} = 1$ for every $n$, $0^{n} = 0$ for $n \ge 1$, $0^{0} = 1$, and $0 \le x \le 1$ gives $0 \le x^{n+1} \le x^{n} \le 1$ ([[def-integer-power]], [[lem-power-monotone]], claims 1 and 3).

[L6] $\iota(0) = 0$, $\iota(n+1) = \iota(n)+1$, $\iota(n) > 0$ for $n \ge 1$, and $\iota$ is increasing on the naturals $\ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] $\int_p^q c = c(q-p)$ for a constant $c$, and if $u \le w$ pointwise with both integrable then $\int_p^q u \le \int_p^q w$ ([[lem-integral-elementary-bounds]], [[thm-monotonicity-of-the-integral]]).

[L8] Ordered-field arithmetic: a positive real has a positive inverse, and $s \le t$ with $s,t>0$ gives $1/t \le 1/s$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]], [[def-oriented-integral]], [[def-derivative]]).

## Verification

**Proof technique:** direct.

1.1 $p_m$ is continuous on $[0,1]$, hence integrable there, by [L3]. [L3]

1.2 Define $H : [0,1] \to \mathbb{R}$ by $H(x) := x^{m+1}/\iota(m+1)$; this is legitimate because $\iota(m+1) > 0$ by [L6]. [L6, L8, construct]

2.1 By [L1] with $n := m+1 \ge 1$ and [L2], $H$ is differentiable at every point of $[0,1]$ with $H'(x) = \iota(m+1)\,x^{m}/\iota(m+1) = x^{m} = p_m(x)$. [step 1.2, L1, L2, L6]

3.1 By [L4] applied to $H$ on $[0,1]$, whose derivative $p_m$ is integrable by step 1.1, $\int_0^1 x^{m} = H(1)-H(0)$. [step 1.1, step 2.1, L4]

4.1 By [L5], $H(1) = 1^{m+1}/\iota(m+1) = 1/\iota(m+1)$ and $H(0) = 0^{m+1}/\iota(m+1) = 0$, since $m+1 \ge 1$; so $\int_0^1 x^{m} = 1/\iota(m+1)$. [step 1.2, step 3.1, L5, L6]

5.1 **First check, at $m = 0$.** There $p_0$ is the constant function $1$ by [L5], so $\int_0^1 p_0 = 1\cdot(1-0) = 1$ by [L7], while the formula gives $1/\iota(1) = 1/1 = 1$. The two agree. [step 4.1, L5, L6, L7]

6.1 **Second check, monotonicity in $m$.** By [L5], $x^{m+1} \le x^{m}$ for every $x \in [0,1]$, so $\int_0^1 x^{m+1} \le \int_0^1 x^{m}$ by [L7]; the formula gives $1/\iota(m+2) \le 1/\iota(m+1)$, which holds by [L6] and [L8]. The two agree. [step 4.1, L5, L6, L7, L8] ∎

## Remarks

- **The primitive is the only input, and the index range inside it is the trap.** [[lem-derivative-of-a-power]] states its power rule for $n \ge 1$ only, because at $n = 0$ the formula $\iota(0)c^{-1}$ mentions $c^{-1}$, which is undefined at $c = 0$. The exponent used above is $m+1$, which is $\ge 1$ for every $m \in \mathbb{N}$ including $m = 0$, so claim 2 of that lemma applies with no case split and the example is correct at $m = 0$ as well.

- **The same computation from the definition is a different exercise.** The previous page's companion evaluates $\int_0^1 x^{2}$ from Darboux sums on uniform partitions and a closed form for $\sum_{k<n}\iota(k)^{2}$; that is the value $1/3$, which is $1/\iota(3)$ and agrees with the formula above at $m = 2$. The point of computing by the fundamental theorem is that no closed form for a power sum is needed at any $m$.

- **Linearity extends this to every polynomial.** For $P(x) = \sum_{j<n}a_jx^{j}$ one gets $\int_0^1 P = \sum_{j<n}a_j/\iota(j+1)$ from [[thm-linearity-of-the-integral]]; that is a routine consequence and is not stated as a separate claim.
