---
id: ex-fixed-point-from-the-ivt
kind: example
title: "A worked fixed point on $[1,2]$ for the map $x \\mapsto (x + 2/x)/2$, from the one-dimensional fixed point theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-one-dimensional-fixed-point, thm-intermediate-value, thm-algebra-of-continuous-functions, thm-nth-roots-exist, def-continuity-real, def-interval, def-integer-power, lem-power-monotone, lem-of-inverse-positive, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "fixed point of $(x+2/x)/2$ on $[1,2]$"
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
    - title: "Fixed point (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fixed_point_(mathematics)"
    - title: "Methods of computing square roots (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Methods_of_computing_square_roots"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
pipeline_run: null
---

## Example

Let

$$\varphi : [1,2] \to \mathbb{R}, \qquad \varphi(x) := \frac{1}{2}\Bigl(x + \frac{2}{x}\Bigr)$$

([[def-interval]]). Then:

1. $\varphi$ is continuous on $[1,2]$ ([[def-continuity-real]]);
2. $\varphi(x) \in [1,2]$ for every $x \in [1,2]$;
3. by [[thm-one-dimensional-fixed-point]], $\varphi$ has a fixed point in
   $[1,2]$; and
4. that fixed point is **unique** and equals $\sqrt{2} = 2^{1/2}$
   ([[thm-nth-roots-exist]]).

**What the example is for.** It is the smallest nontrivial instance of the
one-dimensional fixed point theorem in which the fixed point can be *named*, and
it shows that the theorem, which asserts existence only, may be combined with an
algebraic identity to pin the point down. The identity is elementary:
$\varphi(c) = c$ says $c + 2/c = 2c$, that is $c^{2} = 2$.

**No derivative is used, and none is available at this point in the reading
order.** The usual argument that $\varphi$ maps $[1,2]$ into itself computes the
minimum of $\varphi$ by differentiation; the two-line order estimate of step 1.2
below replaces it. The same map is treated as a contraction of $[1,2]$ in
[[ex-banach-fixed-point-for-square-roots]], where the Banach fixed point theorem
gives the same point together with an error bound after $n$ iterations; that
route needs completeness of the metric subspace, this one needs only the
intermediate value theorem.

## Facts & Assumptions

**Given:** The interval $[1,2]$ and the function $\varphi(x) = \tfrac{1}{2}(x + 2/x)$ on it.

[L1] Algebra of continuous functions: the identity and constants are continuous, sums and scalar multiples of continuous functions are continuous, and the reciprocal of a continuous nowhere-vanishing function is continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] One-dimensional fixed point theorem: a continuous $\varphi : [a,b] \to \mathbb{R}$ with $a \le b$ and $\varphi(x) \in [a,b]$ for all $x \in [a,b]$ has a fixed point in $[a,b]$ ([[thm-one-dimensional-fixed-point]], [[thm-intermediate-value]]).

[L3] Reciprocals and order: for $1 \le x \le 2$ one has $0 < x$, hence $1/2 \le 1/x \le 1$ and so $1 \le 2/x \le 2$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L4] Square roots: for $a \ge 0$ there is a unique $s \ge 0$ with $s^{2} = a$, written $a^{1/2} = \sqrt{a}$; and $t \mapsto t^{2}$ is strictly increasing on the nonnegative reals ([[thm-nth-roots-exist]], [[lem-power-monotone]], [[def-integer-power]]).

[L5] Ordered-field arithmetic: $1 \le 2$; halving preserves order; and $1^{2} = 1 \le 2 \le 4 = 2^{2}$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 **Claim 1.** On $[1,2]$ the identity is continuous and does not vanish, since $x \ge 1 > 0$; so $x \mapsto 2/x$ is continuous there by [L1], and $\varphi = \tfrac{1}{2}\bigl(\mathrm{id} + 2/\mathrm{id}\bigr)$ is continuous on $[1,2]$ as a scalar multiple of a sum of continuous functions. [L1, L3]

1.2 **Claim 2.** Let $x \in [1,2]$. By [L3] we have $1 \le 2/x \le 2$, and by hypothesis $1 \le x \le 2$; adding, $2 \le x + 2/x \le 4$, and halving gives $1 \le \varphi(x) \le 2$ by [L5]. So $\varphi(x) \in [1,2]$. [L3, L5]

2.1 **Claim 3.** By [L2], applied with $a := 1$, $b := 2$ and the map $\varphi$, which is continuous by step 1.1 and maps $[1,2]$ into itself by step 1.2, there is $c \in [1,2]$ with $\varphi(c) = c$. [step 1.1, step 1.2, L2, choose]

3.1 **Every fixed point squares to $2$.** Let $c \in [1,2]$ satisfy $\varphi(c) = c$. Then $c \ge 1 > 0$, so multiplying $\tfrac{1}{2}(c + 2/c) = c$ by $2c$ gives $c^{2} + 2 = 2c^{2}$, that is $c^{2} = 2$. [step 2.1, L3, L5]

4.1 **Claim 4.** By [L4] there is exactly one nonnegative real whose square is $2$, namely $\sqrt{2}$; since every fixed point $c$ is $\ge 1 > 0$ and satisfies $c^{2} = 2$ by step 3.1, the fixed point is unique and equals $\sqrt{2}$. And $\sqrt{2}$ does lie in $[1,2]$: from $1^{2} = 1 \le 2 \le 4 = 2^{2}$ and the strict monotonicity of $t \mapsto t^{2}$ on the nonnegative reals ([L4], [L5]) one gets $1 \le \sqrt{2} \le 2$. [step 3.1, L4, L5] ∎

## Remarks

- **A sharper bound, from a square.** For $x > 0$ one has $\bigl(\sqrt{x} - \sqrt{2/x}\bigr)^{2} \ge 0$, and expanding gives $x + 2/x \ge 2\sqrt{2}$, so $\varphi(x) \ge \sqrt{2}$ for every $x > 0$. That is the same identity [[ex-banach-fixed-point-for-square-roots]] uses, and it shows that $\varphi$ maps $(0,\infty)$ into $[\sqrt{2}, \infty)$; the crude estimate of step 1.2 is all that claim 2 needs, and it avoids square roots entirely.

- **Existence and identification are separate steps.** [[thm-one-dimensional-fixed-point]] gives claim 3 with no information about where the point is; claim 4 is pure algebra and would be equally valid if no fixed point existed, since it only says *which* number a fixed point must be. It is the combination that names $\sqrt{2}$.

- **The interval matters.** On $[-2,-1]$ the same formula has the fixed point $-\sqrt{2}$, and on an interval straddling $0$ the map is not even defined. Choosing $[1,2]$ is what makes claim 2 true and isolates the positive root.
