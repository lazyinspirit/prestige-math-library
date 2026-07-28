---
id: ex-integral-test-applied-to-the-p-series
kind: example
title: "The integral test applied to $\\sum 1/\\iota(k+1)^{p}$ for rational $p>0$, cross-checked against the published $p$-series theorem"
status: published
origin: session
deps: [thm-integral-test-for-series, thm-algebra-of-continuous-functions, thm-cauchy-condensation, rem-real-exponents-deferred, thm-p-series-rational, cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-chain-rule, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-continuous-implies-integrable, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, thm-nth-roots-exist, def-series, def-canonical-natural, lem-of-naturals-positive, def-monotone-function, def-integer-power, def-bounded-set, def-derivative, def-continuity-real, def-oriented-integral, def-interval, def-rat-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "integral test on the $p$-series"
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
    - title: "Integral test for convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_test_for_convergence"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
pipeline_run: null
---

## Example

Let $p \in \mathbb{Q}$ with $p > 0$ ([[def-rat-order]]) and define

$$f_p : [0,\infty) \to \mathbb{R}, \qquad f_p(t) \;:=\; (t+1)^{-p} ,$$

the rational power of the positive base $t+1 \ge 1$ ([[def-rational-power]]).
Then $f_p$ is nonnegative and nonincreasing, so
[[thm-integral-test-for-series]] applies, and its terms are

$$f_p(k) \;=\; \frac{1}{\iota(k+1)^{p}} \qquad (k \in \mathbb{N}) .$$

The series $\sum_k f_p(k)$ is exactly the $p$-series
$\sum_{k \ge 1} 1/\iota(k)^{p}$ in the sense of [[def-series]], which converges
if and only if $p > 1$ ([[thm-p-series-rational]]). The integral test therefore
delivers, **with no primitive computed anywhere**:

$$\Bigl(\textstyle\int_0^N f_p\Bigr)_{N \in \mathbb{N}} \ \text{ is bounded above} \qquad \Longleftrightarrow \qquad p > 1 .$$

**The cross-check.** At $p = 2$ the integral can also be computed directly: the
primitive $G(t) = -(t+1)^{-1}$ gives

$$\int_0^N (t+1)^{-2}\,\mathrm{d}t \;=\; 1 - \frac{1}{\iota(N+1)} \;<\; 1 ,$$

so the sequence is bounded by $1$, in agreement with the verdict above at
$p = 2 > 1$. At $p = 1$ the verdict is that $\bigl(\int_0^N (t+1)^{-1}\bigr)_N$ is
**unbounded**, since the harmonic series diverges; no primitive is exhibited
there, and none can be, because the primitive is the logarithm and this library
has not built it.

**The exponent must be rational.** Real exponents do not exist in this library at
this point in the reading order ([[rem-real-exponents-deferred]]), so "for
$p \in [1,\infty)$" is not a statement that can be made here.

## Facts & Assumptions

**Given:** A rational $p>0$, the function $f_p(t) = (t+1)^{-p}$ on $[0,\infty)$, and a natural number $N$.

[L1] For $a>0$ and rationals $r,s$: $a^{r}>0$, $a^{r+s} = a^{r}a^{s}$, $a^{-r} = 1/a^{r}$, and $a^{0}=1$ ([[lem-rational-power-laws]], [[def-rational-power]]).

[L2] For rational $r>0$ and $0<a<b$: $a^{r}<b^{r}$ ([[lem-rational-power-monotone]], claim 2); the nonstrict form follows by adjoining equality.

[L3] $\iota(k+1) \ge 1 > 0$ for $k \in \mathbb{N}$, $\iota(k+1) = \iota(k)+1$, and $\iota$ is nondecreasing ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] Integral test: for $f \ge 0$ nonincreasing on $[0,\infty)$, $\sum_k f(k)$ converges if and only if $\bigl(\int_0^N f\bigr)_N$ is bounded above ([[thm-integral-test-for-series]], [[def-monotone-function]], [[def-bounded-set]]).

[L5] $\sum_{k\ge1}1/\iota(k)^{p}$ converges if and only if $p>1$, and by [[def-series]] that series is by definition the series of the sequence $j \mapsto 1/\iota(j+1)^{p}$ on $\mathbb{N}$ ([[thm-p-series-rational]]).

[L6] $a^{1/1} = a$, so for a negative integer exponent the rational power of [[def-rational-power]] is the integer power of [[def-integer-power]] ([[thm-nth-roots-exist]]).

[L7] For $n \ge 1$ the map $y \mapsto y^{-n}$ has derivative $-\iota(n)y^{-n-1}$ at every $y \ne 0$; sums, scalar multiples and composites of differentiable functions differentiate by the usual rules ([[lem-derivative-of-a-power]], claim 3, [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-derivative]]).

[L8] If $H$ is differentiable at every point of $[p',q']$ with $H'$ integrable there, then $\int_{p'}^{q'} H' = H(q')-H(p')$; a continuous function on a closed bounded interval is integrable; a continuous function on an interval has a primitive ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[cor-primitives-of-a-continuous-function]], [[def-continuity-real]], [[def-oriented-integral]]).

[L10] A quotient of continuous functions is continuous where the denominator does not vanish, and every polynomial function is continuous ([[thm-algebra-of-continuous-functions]], claims 4 and 5).

[L9] Ordered-field arithmetic: a positive real has a positive inverse, $0<s\le t$ gives $1/t \le 1/s$, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 For $t \ge 0$ the base $t+1$ is $\ge 1 > 0$, so $f_p(t) = (t+1)^{-p}$ is defined and positive by [L1]. [given, L1]

1.2 **The cross-check at $p = 2$.** By [L6], $f_2(t) = (t+1)^{-2}$ is the integer power, and by [L7] the function $G(t) := -(t+1)^{-1}$ is differentiable at every $t \ge 0$ with $G'(t) = -\bigl(-(t+1)^{-2}\bigr)\cdot 1 = (t+1)^{-2} = f_2(t)$. [given, L6, L7]

2.1 $f_p$ is nonincreasing: for $0 \le t \le u$ one has $0 < t+1 \le u+1$, so $(t+1)^{p} \le (u+1)^{p}$ by [L2], and taking reciprocals reverses the inequality by [L9], giving $f_p(u) \le f_p(t)$ by [L1]. [step 1.1, L1, L2, L9]

2.2 $f_p(k) = (\iota(k)+1)^{-p} = 1/\iota(k+1)^{p}$ by [L1] and [L3], so the sequence $k \mapsto f_p(k)$ is the one named in [L5]. [step 1.1, L1, L3]

2.3 $f_2(t) = 1/(t+1)^{2}$ is a quotient of polynomial functions whose denominator does not vanish on $[0,N]$, hence continuous there by [L10], hence integrable there by [L8]; so [L8] applied to $G$ gives $\int_0^N f_2 = G(N)-G(0) = -1/\iota(N+1) + 1$. [step 1.2, L3, L8]

3.1 By [L4], $\sum_k f_p(k)$ converges if and only if $\bigl(\int_0^N f_p\bigr)_N$ is bounded above. [step 1.1, step 2.1, L4]

4.1 Hence, by [L5] and step 3.1, $\bigl(\int_0^N f_p\bigr)_N$ is bounded above if and only if $p > 1$. [step 3.1, step 2.2, L5]

5.1 Since $\iota(N+1) \ge 1 > 0$, $0 < 1/\iota(N+1) \le 1$, so $0 \le \int_0^N f_2 < 1$ for every $N$: the sequence is bounded above by $1$, which agrees with step 4.1 at $p = 2 > 1$. [step 2.3, L3, L9]

6.1 **The verdict at $p = 1$.** By [L5] the series $\sum_{k\ge1}1/\iota(k)$ diverges, so by step 4.1 the sequence $\bigl(\int_0^N (t+1)^{-1}\,\mathrm{d}t\bigr)_N$ is not bounded above. No primitive of $(t+1)^{-1}$ is exhibited, and none is needed for this conclusion. [step 4.1, L5] ∎

## Remarks

- **The test is run backwards here, and that is the point.** The usual textbook order computes $\int_1^N t^{-p}\,\mathrm{d}t$ with a primitive and reads off the convergence of the series. That route is unavailable at $p = 1$ in this library, because the primitive is the logarithm and the logarithm is built on a later page. Running the equivalence in the other direction costs nothing: the published [[thm-p-series-rational]] settles the series for every rational $p>0$, and [[thm-integral-test-for-series]] transfers the verdict to the integrals.

- **The index shift is real and is checked in step 2.2.** The $p$-series starts at $k = 1$ because $0^{p} = 0$ has no reciprocal, while a sequence in this library is a function on $\mathbb{N}$, which contains $0$; the integrand $(t+1)^{-p}$ is shifted by exactly one for that reason, and $f_p(k) = 1/\iota(k+1)^{p}$. Substituting $t^{-p}$ for $(t+1)^{-p}$ would put an undefined value at $t = 0$ and make $\int_0^N$ improper.

- **An independent elementary route to the series verdict.** [[thm-cauchy-condensation]] applies to the nonnegative nonincreasing family $(1/\iota(k)^{p})_{k\ge1}$ and turns it into $\sum_{j\ge0}\iota(2)^{j}/\iota(2^{j})^{p}$, a geometric series; that is the standard elementary route to the same verdict, and it is noted here for orientation only. No claim is made about how [[thm-p-series-rational]] is itself proved, and nothing above depends on this remark.
