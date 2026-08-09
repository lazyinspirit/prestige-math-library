---
id: ex-stolz-cesaro-applied
kind: example
title: "Stolz-Cesaro gives $(1 + 2 + \\dots + n)/n^2 \\to 1/2$ and $(1^p + \\dots + n^p)/n^{p+1} \\to 1/(p+1)$ for natural $p$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-stolz-cesaro, def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-power-laws, lem-power-monotone, lem-power-difference-factorisation, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, def-real-limit, def-sequence, def-monotone-sequence, def-bounded-set, lem-limit-of-tail, lem-limit-unique, thm-induction-principle, lem-of-inverse-positive, lem-of-add-order, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
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
    - title: "Stolz-Cesàro theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stolz%E2%80%93Ces%C3%A0ro_theorem"
    - title: "Faulhaber's formula (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Faulhaber%27s_formula"
pipeline_run: null
---

## Example

Fix a natural number $p \ge 1$ and put

$$a_n \;:=\; \sum_{k=0}^{n} k^p \;=\; 1^p + 2^p + \dots + n^p, \qquad b_n \;:=\; n^{p+1},$$

the first equality because $0^p = 0$ for $p \ge 1$ ([[def-integer-power]]). Then
$(b_n)$ is strictly increasing and unbounded with $b_0 = 0$ and $b_n > 0$ for
$n \ge 1$, so [[thm-stolz-cesaro]] applies with $K_0 = 1$, and

$$\lim_{n} \frac{1^p + 2^p + \dots + n^p}{n^{p+1}} \;=\; \frac{1}{p+1},$$

the limit being taken over the indices $n \ge 1$, where the quotient is defined.
For $p = 1$ this is

$$\lim_{n} \frac{1 + 2 + \dots + n}{n^2} \;=\; \frac12 .$$

No closed form for $a_n$ is used. That is the point of the example: the
difference quotient of Stolz-Cesaro replaces a summation formula by a single
algebraic identity, the factorisation of $(n+1)^{p+1} - n^{p+1}$.

## Facts & Assumptions

**Given:** A natural $p \ge 1$, the sequences $a_n = \sum_{k=0}^{n} k^p$ and $b_n = n^{p+1}$, and their difference quotients $d_n = (a_{n+1}-a_n)/(b_{n+1}-b_n)$.

[L1] Stolz-Cesaro in the $\infty/\infty$ form: for $(b_n)$ strictly increasing with range not bounded above and $(d_n)$ convergent, the tail of $(a_n/b_n)$ beyond an index where $b$ becomes positive converges to $\lim_n d_n$ ([[thm-stolz-cesaro]]); convergence depends only on a tail ([[lem-limit-of-tail]]); limits are unique ([[lem-limit-unique]]).

[L2] Powers: $a^0 = 1$, $a^{n+1} = a^n a$, so $0^p = 0$ for $p \ge 1$ ([[def-integer-power]]); $a^{m+n} = a^m a^n$ and $a^{-m} = (a^m)^{-1}$ for $a \ne 0$ ([[lem-power-laws]]); for $0 \le a < b$ and $n \ge 1$, $a^n < b^n$, and $a \ge 1$ with $n \ge 1$ gives $a^n \ge a$ ([[lem-power-monotone]]).

[L3] Factorisation: $b^m - a^m = (b-a)\sum_{k=0}^{m-1}a^k b^{\,m-1-k}$ for $m \ge 1$ ([[lem-power-difference-factorisation]]).

[L4] Finite sums and their laws ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Algebra of limits for sums, products, scalar multiples and quotients with nonvanishing denominators ([[thm-algebra-of-limits]]); convergence of real sequences ([[def-real-limit]], [[def-sequence]]).

[L6] The Archimedean property of $\mathbb{R}$ and its reciprocal form ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]); strict monotonicity and boundedness of real sequences ([[def-monotone-sequence]], [[def-bounded-set]]).

[L7] Induction principle ([[thm-induction-principle]]).

[L8] Order arithmetic: canonical naturals are positive and strictly increasing ([[lem-of-naturals-positive]]); a positive element has a positive inverse and reciprocation reverses the order ([[lem-of-inverse-positive]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $(b_n)$ is strictly increasing: for naturals $m < n$ one has $0 \le m < n$ and $p + 1 \ge 1$, so $m^{p+1} < n^{p+1}$. [L2, L6, L8]

1.2 The range of $(b_n)$ is not bounded above: $n \ge 1$ gives $n^{p+1} \ge n$, and no real bounds every canonical natural. [L2, L6, L8]

1.3 $b_0 = 0^{p+1} = 0$ and $b_n > 0$ for $n \ge 1$, so $K_0 = 1$ is an index beyond which $b$ is positive. [L2, L8]

1.4 $a_{n+1} - a_n = (n+1)^p$ and $b_{n+1} - b_n = (n+1)^{p+1} - n^{p+1}$, so $d_n = (n+1)^p\big((n+1)^{p+1} - n^{p+1}\big)^{-1}$. [L2, L4]

1.5 Put $\tau_n := n\,(n+1)^{-1}$; then $1 - \tau_n = (n+1)^{-1}$, so given a real $\varepsilon > 0$ and a natural $m \ge 1$ with $1/m < \varepsilon$ one has $|\tau_n - 1| = (n+1)^{-1} < \varepsilon$ for all $n \ge m$, that is $\lim_n \tau_n = 1$. [L5, L6, L8]

2.1 By the factorisation at $m = p+1$, $b = n+1$ and $a = n$: $(n+1)^{p+1} - n^{p+1} = \big((n+1) - n\big)\sum_{k=0}^{p} n^k (n+1)^{p-k} = \sum_{k=0}^{p} n^k (n+1)^{p-k}$. [step 1.4, L3, L4]

2.2 By induction on $k$, using the product rule for limits, $\lim_n \tau_n^{\,k} = 1$ for every $k$; by induction on $p$, using the sum rule, $\lim_n \sum_{k=0}^{p}\tau_n^{\,k} = p+1$. [step 1.5, L5, L7]

3.1 Dividing numerator and denominator of $d_n$ by $(n+1)^p > 0$ and using $n^k(n+1)^{p-k}(n+1)^{-p} = \tau_n^{\,k}$ gives $d_n = \big(\sum_{k=0}^{p}\tau_n^{\,k}\big)^{-1}$, and $\sum_{k=0}^{p}\tau_n^{\,k} \ge 1 > 0$ for every $n$, the term at $k = 0$ being $1$ and all terms being $\ge 0$. [step 1.4, step 1.5, step 2.1, L2, L4, L8]

4.1 Since the denominators are nonzero and their limit $p+1$ is nonzero, the quotient rule gives $\lim_n d_n = (p+1)^{-1}$. [step 2.2, step 3.1, L5, L8]

5.1 Steps 1.1, 1.2 and 4.1 are the hypotheses of Stolz-Cesaro, so the tail $j \mapsto a_{j+1}/b_{j+1}$ converges to $(p+1)^{-1}$; that is, $\lim_{n}\big(1^p + \dots + n^p\big)n^{-(p+1)} = (p+1)^{-1}$ over the indices $n \ge 1$. [step 1.1, step 1.2, step 1.3, step 4.1, L1]

6.1 At $p = 1$ this reads $\lim_n (1 + 2 + \dots + n)n^{-2} = 1/2$. [step 5.1] ∎

## Remarks

- **Why the limit is taken from $n = 1$.** $b_0 = 0$, so $a_0/b_0$ does not
  denote anything, and [[thm-stolz-cesaro]] is stated for the tail exactly for
  this reason. Nothing is lost: convergence is a property of a tail
  ([[lem-limit-of-tail]]).

- **The closed form is available and is not needed.** For $p = 1$ one has
  $a_n = n(n+1)/2$, and dividing by $n^2$ gives the limit $1/2$ directly. For
  general $p$ the closed form is Faulhaber's formula, which this library does
  not prove; the difference quotient sidesteps it entirely, and that is the
  practical content of Stolz-Cesaro.

- **A sanity check on the answer.** The quotient compares a sum of $n$ terms,
  the largest of which is $n^p$, with $n^{p+1} = n \cdot n^p$, so the limit must
  lie in $[0,1]$; and the terms $k^p$ grow, so the sum should be a definite
  fraction of the largest term times $n$. The fraction is $1/(p+1)$, which is
  what an integral comparison would also predict. No such comparison is used
  above.
