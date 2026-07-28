---
id: ex-integral-of-x-squared-from-the-definition
kind: example
title: "$\\int_0^1 x^{2} = 1/3$, computed from the Darboux definition with uniform partitions and the closed form $\\sum_{k<n} k^{2} = n(n-1)(2n-1)/6$"
status: published
origin: session
deps: [def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-integer-power, lem-power-monotone, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^1 x^2 = 1/3$"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Square pyramidal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_pyramidal_number"
pipeline_run: null
---

## Example

Let $f : [0,1] \to \mathbb{R}$ be $f(x) = x^{2}$ ([[def-integer-power]]). Then
$f$ is Riemann integrable on $[0,1]$ and

$$\int_0^1 x^{2}\,\mathrm{d}x \;=\; \frac{1}{3} .$$

**Everything is computed from the definition.** For the uniform partition $U_N$
of $[0,1]$ into $N \ge 1$ parts ([[def-partition-and-refinement]]) the two
Darboux sums ([[def-darboux-sums]]) are

$$L(f,U_N) \;=\; \frac{(N-1)(2N-1)}{6N^{2}}, \qquad U(f,U_N) \;=\; \frac{(N+1)(2N+1)}{6N^{2}}, \qquad U(f,U_N) - L(f,U_N) \;=\; \frac{1}{N},$$

where a natural $N$ multiplying or dividing a real stands for its canonical
natural $\iota(N)$ ([[def-canonical-natural]]), as in clause 2 of
[[lem-finite-sum-laws]]. Both expressions converge to $1/3$ as $N$ grows, the
lower sums from below and the upper sums from above, and the gap $1/N$ is what
Archimedes' property drives to $0$.

The arithmetic rests on one closed form, valid for every $n \in \mathbb{N}$:

$$6\sum_{k<n} \iota(k)^{2} \;=\; \iota(n)\bigl(\iota(n)-1\bigr)\bigl(2\iota(n)-1\bigr) ,$$

which at $n = 0$ reads $0 = 0$ and is the familiar $n(n-1)(2n-1)/6$ written so
that the empty sum is the case $n = 0$ rather than an exception. Note the
indexing: the sum runs over $k < n$, so its last term is $\iota(n-1)^{2}$ and
**not** $\iota(n)^2$.

## Facts & Assumptions

**Given:** $f : [0,1] \to \mathbb{R}$ with $f(x) = x^{2}$, and for $N \ge 1$ the uniform partition $U_N = (N,t)$ of $[0,1]$ with $t_i = \iota(i)/\iota(N)$ for $i \le N$ and lengths $\Delta_i = 1/\iota(N)$.

[L1] For $U_N$: $t_0 = 0$, $t_N = 1$, $t_i < t_{i+1}$, $\Delta_i = 1/\iota(N)$ for $i < N$, $\sum_{i<N}\Delta_i = 1$, and $I_i = [t_i,t_{i+1}]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $m_i = \inf f[I_i]$, $M_i = \sup f[I_i]$, $L(f,P) = \sum_{i<N}m_i\Delta_i$, $U(f,P) = \sum_{i<N}M_i\Delta_i$, and $L(f,P) \le \underline{\int_0^1} f \le \overline{\int_0^1} f \le U(f,P)$ for every partition $P$; when $f$ is integrable, $\int_0^1 f$ is the common value of the two integrals ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] For $0 \le a < b$ one has $a^{2} < b^{2}$; a set with a least element has it as its infimum and one with a greatest element has it as its supremum ([[lem-power-monotone]], [[def-integer-power]], [[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L4] **The closed form.** For every $n \in \mathbb{N}$, $6\sum_{k<n}\iota(k)^{2} = \iota(n)(\iota(n)-1)(2\iota(n)-1)$. This is an induction on $n$ ([[thm-induction-principle]]) from the recursion clause $\sum_{k<n+1} = \sum_{k<n} + \iota(n)^2$ of [[def-finite-sum]] and the identity $x(x-1)(2x-1) + 6x^{2} = x(x+1)(2x+1)$, valid in any commutative ring and in particular for $x = \iota(n)$ ([[def-ordered-field]], [[lem-of-naturals-positive]]).

[L5] Finite sums: scaling, additivity, telescoping $\sum_{i<N}(c_{i+1}-c_i) = c_N - c_0$, and $\iota(i+1) = \iota(i)+1$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L6] $x \mapsto x^{2}$ is continuous on $[0,1]$, being a polynomial function, and a continuous function on a closed bounded interval with distinct endpoints is Riemann integrable ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[thm-continuous-implies-integrable]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $|u - v| \le w$ whenever $c \le u \le d$, $c \le v \le d$ and $d - c \le w$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $f$ is continuous on $[0,1]$ and $0 < 1$, so $f$ is Riemann integrable on $[0,1]$ by [L6]; write $J := \int_0^1 f$. [given, L6]

1.2 On $I_i = [t_i,t_{i+1}]$ with $0 \le t_i < t_{i+1}$ the function $f$ takes its least value at $t_i$ and its greatest at $t_{i+1}$, by [L3]; both values are attained, so $m_i = t_i^{2} = \iota(i)^{2}/\iota(N)^{2}$ and $M_i = t_{i+1}^{2} = \iota(i+1)^{2}/\iota(N)^{2}$ by [L3] and [L1]. [given, L1, L3]

2.1 By [L2], [L5] and [L1], $L(f,U_N) = \sum_{i<N}\frac{\iota(i)^{2}}{\iota(N)^{2}}\cdot\frac{1}{\iota(N)} = \frac{1}{\iota(N)^{3}}\sum_{i<N}\iota(i)^{2}$, and by [L4] this equals $\frac{\iota(N)(\iota(N)-1)(2\iota(N)-1)}{6\,\iota(N)^{3}} = \frac{(\iota(N)-1)(2\iota(N)-1)}{6\,\iota(N)^{2}}$. [step 1.2, L1, L2, L4, L5]

2.2 Likewise $U(f,U_N) = \frac{1}{\iota(N)^{3}}\sum_{i<N}\iota(i+1)^{2}$. Since $\sum_{i<N}\iota(i+1)^{2} = \sum_{k<N+1}\iota(k)^{2} - \iota(0)^{2} = \sum_{k<N+1}\iota(k)^{2}$ by [L5] and $\iota(0) = 0$, [L4] applied at $N+1$ gives $U(f,U_N) = \frac{(\iota(N)+1)(2\iota(N)+1)}{6\,\iota(N)^{2}}$. [step 1.2, L1, L2, L4, L5]

2.3 Directly, $U(f,U_N) - L(f,U_N) = \frac{1}{\iota(N)^{3}}\sum_{i<N}\bigl(\iota(i+1)^{2} - \iota(i)^{2}\bigr) = \frac{\iota(N)^{2} - \iota(0)^{2}}{\iota(N)^{3}} = \frac{1}{\iota(N)}$, by telescoping in [L5]. [step 1.2, L1, L2, L5]

3.1 Expanding by [L8], $\frac{1}{3} - L(f,U_N) = \frac{3\iota(N)-1}{6\,\iota(N)^{2}} > 0$ and $U(f,U_N) - \frac{1}{3} = \frac{3\iota(N)+1}{6\,\iota(N)^{2}} > 0$ for $N \ge 1$, so $L(f,U_N) < \frac{1}{3} < U(f,U_N)$. [step 2.1, step 2.2, L7, L8]

3.2 By [L2], $L(f,U_N) \le J \le U(f,U_N)$ as well. [step 1.1, step 2.1, step 2.2, L2]

4.1 Both $J$ and $1/3$ lie in the interval with endpoints $L(f,U_N)$ and $U(f,U_N)$, whose length is $1/\iota(N)$ by step 2.3, so $|J - 1/3| \le 1/\iota(N)$ for every natural $N \ge 1$, by [L8]. [step 2.3, step 3.1, step 3.2, L8]

5.1 If $J \ne 1/3$ then $|J - 1/3| > 0$, and [L7] supplies $N \ge 1$ with $1/\iota(N) < |J - 1/3|$, contradicting step 4.1. Hence $J = 1/3$, that is $\int_0^1 x^{2}\,\mathrm{d}x = 1/3$. [step 4.1, L7, L8] ∎

## Remarks

- **The first index is $0$ and the last term of the lower sum is not $1$.** The lower sum uses $m_i = t_i^{2}$ with $i$ running from $0$, so its first term is $0$ and its last is $\bigl((N-1)/N\bigr)^{2}\cdot(1/N)$; the upper sum uses $M_i = t_{i+1}^{2}$ and so ends at $1 \cdot (1/N)$. Reading the closed form with the other convention, $\sum_{k=1}^{n}k^{2} = n(n+1)(2n+1)/6$, and attaching it to the wrong sum is the standard way to lose the factor and land on $1/2$ or $1/6$ instead of $1/3$.

- **The gap is exactly $1/N$, not merely $O(1/N)$.** Step 2.3 computes it by telescoping without evaluating either sum, which is also the cheapest route to integrability through [[thm-riemann-criterion]]: the continuity of $x^2$ is not needed for that, only for the shortcut taken in step 1.1.

- **What this example does not do.** No antiderivative and no fundamental theorem of calculus is used or available at this point in the reading order; the value $1/3$ is extracted from the two sums and the Archimedean property alone. The same computation with $x^{3}$ needs $\sum_{k<n}k^{3}$ and is no harder, but it is not carried out here.
