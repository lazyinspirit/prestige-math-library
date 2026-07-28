---
id: ex-gamma-and-its-complement-computed-for-a-plane-series
kind: example
title: "A convergent series in $\\mathbb{R}^{2}$ with $\\Gamma$ a line and $\\Gamma^{\\perp}$ a line, computed from the definition"
status: published
origin: session
deps: [def-the-space-of-summing-directions, def-series-of-vectors-and-rearrangement, thm-rearrangement-sums-lie-in-an-affine-subspace, thm-componentwise-convergence-and-completeness, thm-alternating-series-test, thm-p-series-rational, thm-riemann-series-theorem, lem-series-linearity, lem-alternating-sequence, def-monotone-sequence, def-euclidean-inner-product, def-p-norms-on-rn, def-norm-and-normed-space, def-series, def-absolute-and-conditional-convergence, def-linear-subspace, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive, cor-archimedean-reciprocal, def-integer-power, def-real-limit, lem-of-abs-value, lem-standard-basis-of-f-n, def-injection-surjection-bijection, thm-of-square-roots, def-rational-power]
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
    - title: "Riemann series theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_series_theorem"
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
pipeline_run: null
---

## Example

Let $(\varepsilon_k)$ be the alternating sequence, the unique sequence of reals
with $\varepsilon_0 = 1$ and $\varepsilon_{k+1} = -\varepsilon_k$, so
$|\varepsilon_k| = 1$ for every $k$ ([[lem-alternating-sequence]]). In
$\mathbb{R}^{2}$ put

$$x_k \;:=\; \Bigl(\frac{\varepsilon_k}{\iota(k+1)},\ 0\Bigr) \qquad (k \in \mathbb{N}),$$

with $\iota$ the canonical natural ([[def-canonical-natural]]). Call a **line
through the origin** the set of scalar multiples of a fixed nonzero vector; each
such set is a linear subspace ([[def-linear-subspace]]). Then:

1. $\sum x_k$ converges, to $s = (S, 0)$ where $S$ is the sum of the alternating
   harmonic series; **the value of $S$ is not computed here**, being a logarithm
   and outside this page's reach.
2. $\sum x_k$ does **not** converge absolutely
   ([[def-series-of-vectors-and-rearrangement]]).
3. $\Gamma = \{\, (0,t) : t \in \mathbb{R} \,\}$, the line of multiples of $e_1$,
   and $\Gamma^{\perp} = \{\, (t,0) : t \in \mathbb{R} \,\}$, the line of
   multiples of $e_0$ ([[def-the-space-of-summing-directions]]).
4. Consequently [[thm-rearrangement-sums-lie-in-an-affine-subspace]] confines
   every rearrangement sum to the horizontal line
   $s + \Gamma^{\perp} = \{(t,0) : t \in \mathbb{R}\}$; and for **this** series
   the confinement is exact, $\mathcal{S}(x) = s + \Gamma^{\perp}$, by the
   published [[thm-riemann-series-theorem]] applied to the first coordinate.

**Clause 4 decides nothing about the general question.** This series is
degenerate: it lies inside a line, so its rearrangement behaviour is the
one-dimensional behaviour of its first coordinate and nothing more. It is
therefore **not** evidence about whether $\mathcal{S}(x) = s + \Gamma^{\perp}$
for a series genuinely spread over $\mathbb{R}^{n}$ with $n \ge 2$, a question
this library does not settle ([[rem-rn-conventions-and-scope]]).

## Facts & Assumptions

**Given:** The sequence $(x_k)$ above, its first coordinate sequence $c_k := \varepsilon_k/\iota(k+1)$ and the sequence $b_k := 1/\iota(k+1)$.

[L1] The alternating sequence: $\varepsilon_0 = 1$, $\varepsilon_{k+1} = -\varepsilon_k$, and $|\varepsilon_k| = 1$ ([[lem-alternating-sequence]], [[lem-of-abs-value]]).

[L2] $\iota(k+1) > 0$ and $\iota$ is strictly increasing; $0 < u \le v$ gives $0 < 1/v \le 1/u$; and for every real $\varepsilon>0$ there is $K$ with $1/\iota(K+1) < \varepsilon$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L3] The alternating series test: a nonincreasing null sequence $(b_k)$ makes $\sum\varepsilon_k b_k$ converge ([[thm-alternating-series-test]], [[def-monotone-sequence]], [[def-real-limit]], [[def-series]]).

[L4] The $p$-series theorem: $\sum_{k\ge1}1/k^{p}$ converges if and only if $p>1$; at $p=1$ the harmonic series diverges ([[thm-p-series-rational]], [[def-rational-power]], [[def-series]]).

[L5] Convergence in $\mathbb{R}^{2}$ is componentwise ([[thm-componentwise-convergence-and-completeness]] clause 1, [[def-series-of-vectors-and-rearrangement]], [[lem-standard-basis-of-f-n]]).

[L6] The inner product, the Euclidean norm and the definition of $\Gamma$ and $\Gamma^{\perp}$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]], [[def-norm-and-normed-space]], [[def-the-space-of-summing-directions]], [[thm-of-square-roots]], [[def-integer-power]]).

[L7] For $c \ne 0$, $\sum c\,a_k$ converges if and only if $\sum a_k$ converges ([[lem-series-linearity]] clause 3).

[L8] The containment theorem ([[thm-rearrangement-sums-lie-in-an-affine-subspace]]) and the Riemann series theorem: a conditionally convergent real series has, for every real $c$, a rearrangement converging to $c$ ([[thm-riemann-series-theorem]] clause 1, [[def-absolute-and-conditional-convergence]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 $(b_k)$ is positive, nonincreasing and converges to $0$: positivity and monotonicity from $0 < \iota(k+1) < \iota(k+2)$, and convergence because for a rational $\varepsilon>0$ an index $K$ with $1/\iota(K+1)<\varepsilon$ gives $b_k \le b_K < \varepsilon$ for $k \ge K$. [L2]

1.2 The second coordinate sequence is constantly $0$, so its series converges with sum $0$. [L5]

2.1 By the alternating series test $\sum_k c_k = \sum_k \varepsilon_k b_k$ converges; write $S$ for its sum. [step 1.1, L3]

2.2 $\lVert x_k\rVert_2 = \sqrt{c_k^{2}+0} = |c_k| = |\varepsilon_k| b_k = b_k$, and $\sum_k b_k$ is the harmonic series, which diverges; so $\sum x_k$ does not converge absolutely, which is clause 2. [step 1.1, L1, L4, L6]

3.1 By componentwise convergence, $\sum x_k$ converges with sum $s = (S,0)$, which is clause 1. [step 2.1, step 1.2, L5]

3.2 For $a = (a_0,a_1) \in \mathbb{R}^{2}$: $\langle a, x_k\rangle = a_0 c_k$, so $|\langle a,x_k\rangle| = |a_0|\,b_k$. If $a_0 = 0$ every term is $0$ and the series converges; if $a_0 \ne 0$ then $|a_0| > 0$ and convergence of $\sum_k |a_0| b_k$ would give convergence of $\sum_k b_k$, which is false. [step 2.2, L1, L6, L7]

3.3 Conversely let $t \in \mathbb{R}$. The real series $\sum_k c_k$ converges by step 2.1 and does not converge absolutely by step 2.2, so it converges conditionally, and the Riemann series theorem supplies a bijection $\sigma$ of $\mathbb{N}$ with $\sum_k c_{\sigma(k)} = t$. The rearranged vector series $\sum_k x_{\sigma(k)}$ has first coordinate series $\sum_k c_{\sigma(k)}$ and second coordinate series constantly $0$, so by componentwise convergence it converges to $(t,0)$; hence $(t,0) \in \mathcal{S}(x)$. [step 2.1, step 2.2, L5, L8]

4.1 Hence $\Gamma = \{a : a_0 = 0\} = \{(0,t) : t \in \mathbb{R}\}$, the set of scalar multiples of $e_1$. [step 3.2, L6]

5.1 For $y = (y_0,y_1)$: $y \in \Gamma^{\perp}$ means $\langle (0,t), y\rangle = t\,y_1 = 0$ for every real $t$, which at $t = 1$ forces $y_1 = 0$, and conversely $y_1 = 0$ makes every such product $0$. So $\Gamma^{\perp} = \{(t,0) : t \in \mathbb{R}\}$, the set of scalar multiples of $e_0$, and clause 3 is proved. [step 4.1, L6]

6.1 By the containment theorem, $\mathcal{S}(x) \subseteq s + \Gamma^{\perp} = \{\,(S+t,\ 0) : t \in \mathbb{R}\,\} = \{\,(w,0) : w\in\mathbb{R}\,\}$. [step 3.1, step 5.1, L8]

7.1 Steps 6.1 and 3.3 give $\mathcal{S}(x) = s + \Gamma^{\perp}$, which is clause 4. [step 6.1, step 3.3] ∎

## Remarks

- **Why this example is degenerate, and why that is said out loud.** Every term $x_k$ lies in the line $\Gamma^{\perp}$, so the whole series lives there and its rearrangement theory is the theory of the real series $\sum c_k$. The equality in clause 4 is therefore the published [[thm-riemann-series-theorem]] wearing two coordinates, not a higher-dimensional phenomenon. **Nothing here supports or contradicts any statement about a series whose terms span $\mathbb{R}^{2}$.**

- **The divergence of the harmonic series may be had two ways.** Step 2.2 uses [[thm-p-series-rational]] at $p = 1$; the Cauchy condensation test gives the same conclusion, and either citation would do.

- **What the example makes concrete.** $\Gamma$ is computed from its definition, one direction at a time, and turns out to be the set of directions orthogonal to where the series actually moves: testing against $e_1$ sees only zeros, and testing against $e_0$ sees the alternating harmonic series, which is not absolutely summable. That is exactly the dichotomy [[def-the-space-of-summing-directions]] is built to record.
