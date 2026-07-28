---
id: ex-componentwise-convergence-and-a-vector-valued-integral-computed
kind: example
title: "A convergent sequence in $\\mathbb{R}^{3}$ and the integral $\\int_0^1 (1, t, t^{2})$, computed componentwise"
status: published
origin: session
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, thm-componentwise-convergence-and-completeness, thm-componentwise-limits-and-continuity, thm-norm-inequality-for-the-vector-valued-integral, cor-primitives-of-a-continuous-function, thm-continuous-implies-integrable, thm-monotonicity-of-the-integral, thm-linearity-of-the-integral, lem-derivative-of-a-power, thm-algebra-of-continuous-functions, def-p-norms-on-rn, def-euclidean-inner-product, def-norm-and-normed-space, def-oriented-integral, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, thm-of-square-roots, lem-of-square-monotone, def-integer-power, def-metric-convergence, def-sequence, lem-standard-basis-of-f-n, def-interval, lem-finite-sum-laws, def-finite-sum]
justified_by: []
aliases: []
landmark: false
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
    - title: "Vector-valued function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector-valued_function"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Example

Both halves of [[def-vector-valued-derivative-and-integral]] are exercised here,
in $\mathbb{R}^{3}$.

**A convergent sequence.** For $k \in \mathbb{N}$ put

$$x^{(k)} \;:=\; \Bigl(\tfrac{1}{\iota(k+1)},\ 1 - \tfrac{1}{\iota(k+1)},\ 2\Bigr) \;\in\; \mathbb{R}^{3},$$

with $\iota$ the canonical natural ([[def-canonical-natural]]); the shift by one
is there because $\mathbb{N}$ contains $0$ and $\iota(0) = 0$. Then
$x^{(k)} \to (0,1,2)$ in $(\mathbb{R}^{3}, d_2)$.

**An integral.** Let $f : [0,1] \to \mathbb{R}^{3}$ be $f(t) := (1,\ t,\ t^{2})$.
Then $f$ is integrable and

$$\int_0^1 f \;=\; \Bigl(1,\ \tfrac{1}{\iota(2)},\ \tfrac{1}{\iota(3)}\Bigr).$$

**The norm inequality is strict here.**
$\bigl\lVert\int_0^1 f\bigr\rVert_2 = \iota(7)/\iota(6)$, while
$\int_0^1\lVert f\rVert_2 \ge \iota(53)/\iota(45) > \iota(7)/\iota(6)$. The exact
value of $\int_0^1\sqrt{1+t^{2}+t^{4}}\,dt$ is not computed: it needs machinery
this page does not have, and a crude lower bound is enough to separate the two
sides of [[thm-norm-inequality-for-the-vector-valued-integral]].

## Facts & Assumptions

**Given:** The sequence $\bigl(x^{(k)}\bigr)$ and the function $f$ above; the abbreviation $g(t) := \lVert f(t)\rVert_2 = \sqrt{1+t^{2}+t^{4}}$ ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]]).

[L1] Convergence in $\mathbb{R}^{n}$ for $n \ge 1$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-metric-convergence]], [[def-sequence]], [[lem-standard-basis-of-f-n]]).

[L2] For every real $\varepsilon>0$ there is $K$ with $1/\iota(K+1) < \varepsilon$; $\iota(k+1)>0$; and $0<u\le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

[L3] The vector-valued integral is componentwise, and $f$ is integrable exactly when each $f_i$ is ([[def-vector-valued-derivative-and-integral]], [[def-oriented-integral]], [[def-interval]]).

[L4] A continuous function on $[a,b]$ is integrable, and $\int_a^b h = G(b)-G(a)$ for any primitive $G$ of a continuous $h$ ([[thm-continuous-implies-integrable]], [[cor-primitives-of-a-continuous-function]]); polynomial functions are continuous ([[thm-algebra-of-continuous-functions]]) and $x \mapsto x^{p}$ has derivative $\iota(p)x^{\,p-1}$ for $p \ge 1$ ([[lem-derivative-of-a-power]], [[def-integer-power]]).

[L5] Monotonicity and linearity of the integral ([[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]], [[lem-finite-sum-laws]], [[def-finite-sum]]).

[L6] $\lVert f(t)\rVert_2$ is integrable on $[0,1]$ and $\bigl\lVert\int_0^1 f\bigr\rVert_2 \le \int_0^1\lVert f\rVert_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[def-norm-and-normed-space]]).

[L7] Square roots and squaring: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$, and for $a,b \ge 0$, $a \le b$ exactly when $a^{2} \le b^{2}$ ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

[L8] Canonical naturals carry sums to sums and products to products and are strictly increasing and positive ([[lem-of-naturals-positive]], [[def-canonical-natural]]).

[L9] Continuity of a vector-valued function is componentwise ([[thm-componentwise-limits-and-continuity]] clause 1, [[def-vector-valued-functions-limits-and-continuity]]).

## Verification

**Proof technique:** direct.

1.1 The three coordinate sequences of $\bigl(x^{(k)}\bigr)$ are $k \mapsto 1/\iota(k+1)$, $k \mapsto 1 - 1/\iota(k+1)$ and the constant $2$. Given a rational $\varepsilon>0$, take $K$ with $1/\iota(K+1)<\varepsilon$; then for $k \ge K$ one has $0 < 1/\iota(k+1) \le 1/\iota(K+1) < \varepsilon$, so the first converges to $0$, the second to $1$ and the third to $2$. [L2]

1.2 Each component of $f$ is a polynomial function, hence continuous on $[0,1]$ and integrable there; so $f$ is integrable, and $f$ is continuous. [L3, L4, L9]

1.3 The function $t \mapsto t^{\,p+1}/\iota(p+1)$ is a primitive of $t \mapsto t^{p}$ for $p \in \mathbb{N}$, so $\int_0^1 t^{p}\,dt = 1/\iota(p+1)$; at $p = 0,1,2$ this gives $1$, $1/\iota(2)$ and $1/\iota(3)$. [L4, L8]

1.4 For $t \in [0,1]$ put $u := t^{2}+t^{4}$, so $0 \le u \le \iota(2) \le \iota(3)$ and $g(t) = \sqrt{1+u}$. Since $(1+u/\iota(3))^{2} = 1 + \iota(2)u/\iota(3) + u^{2}/\iota(9) \le 1+u$ exactly when $u^{2}/\iota(9) \le u/\iota(3)$, that is exactly when $u \le \iota(3)$, and both $1+u/\iota(3)$ and $\sqrt{1+u}$ are nonnegative, monotonicity of squaring gives $g(t) \ge 1 + \bigl(t^{2}+t^{4}\bigr)/\iota(3)$. [L7, L8]

1.5 Finally $\iota(53)/\iota(45) > \iota(7)/\iota(6)$, since cross-multiplying by the positive $\iota(45)\iota(6)$ turns the claim into $\iota(318) > \iota(315)$, which holds because $\iota$ is strictly increasing. [L8]

2.1 Hence $x^{(k)} \to (0,1,2)$ in $(\mathbb{R}^{3},d_2)$, the $\varepsilon$ for the vector being obtained from the three coordinate tolerances exactly as in the proof of [L1]. [step 1.1, L1]

2.2 Therefore $\int_0^1 f = \bigl(1,\ 1/\iota(2),\ 1/\iota(3)\bigr)$, the coordinates of the vector integral being the integrals of the coordinates. [step 1.2, step 1.3, L3]

2.3 The right-hand side of step 1.4 is continuous, hence integrable, and by step 1.3 and linearity $\int_0^1\bigl(1+(t^{2}+t^{4})/\iota(3)\bigr)dt = 1 + \bigl(1/\iota(3)+1/\iota(5)\bigr)/\iota(3) = 1 + \iota(8)/\iota(45) = \iota(53)/\iota(45)$. [step 1.3, L4, L5, L8]

3.1 Its Euclidean norm satisfies $\bigl\lVert\int_0^1 f\bigr\rVert_2^{2} = 1 + 1/\iota(4) + 1/\iota(9) = \iota(49)/\iota(36)$, so $\bigl\lVert\int_0^1 f\bigr\rVert_2 = \iota(7)/\iota(6)$, since $\bigl(\iota(7)/\iota(6)\bigr)^{2} = \iota(49)/\iota(36)$ and both numbers are nonnegative. [step 2.2, L7, L8]

3.2 By monotonicity of the integral, using that $g$ is integrable, $\int_0^1 g \ge \iota(53)/\iota(45)$. [step 1.4, step 2.3, L5, L6]

4.1 So $\bigl\lVert\int_0^1 f\bigr\rVert_2 = \iota(7)/\iota(6) < \iota(53)/\iota(45) \le \int_0^1\lVert f\rVert_2$: the inequality of [L6] holds on this example and is **strict**. [step 3.1, step 3.2, step 1.5, L6] ∎

## Remarks

- **Why the inequality is strict here.** Equality in [[thm-norm-inequality-for-the-vector-valued-integral]] would require the integrand to point in a fixed direction, and $f(t) = (1,t,t^{2})$ changes direction as $t$ runs over $[0,1]$. That heuristic is not what is proved above: the proof separates the two sides by an explicit numerical bound, which is the only argument available at this point in the reading order.

- **The lower bound is deliberately crude.** The inequality $\sqrt{1+u} \ge 1 + u/\iota(3)$ used in step 1.4 holds for $0 \le u \le \iota(3)$ and is far from sharp; it is chosen because it is polynomial, so that step 2.3 is an application of [[cor-primitives-of-a-continuous-function]] and nothing more. The exact value of $\int_0^1\sqrt{1+t^{2}+t^{4}}\,dt$ is not a value this page can name.

- **The sequence and the integral are independent computations**, put in one item because they exercise the two halves of [[def-vector-valued-derivative-and-integral]] on the same space. Neither uses the other.
