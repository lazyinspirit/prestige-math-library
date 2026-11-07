---
id: lem-integer-vmvt-large-moments-from-finite-congruences
kind: lemma
title: Choice-free integer Vinogradov large moments from finite congruences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: ["def-vinogradov-mean-value-Jsk", "thm-vinogradov-mean-value-is-solution-count", "lem-nonsingular-polynomial-congruence-short-scale-bound", "thm-euclid-infinitude-of-primes", "def-prime", "thm-bezout-identity", "lem-divisor-bound", "thm-multidimensional-integral-properties", "lem-geometric-progression-exponential-sum", "thm-real-power-laws", "thm-exponential-is-strictly-increasing", "thm-natural-logarithm-laws", "lem-integer-part"]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used. Only one prime is fixed for each degree; all character averages and equation counts are finite, and all continuous integrals are Riemann integrals.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: T. D. Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem
      url: https://arxiv.org/pdf/1708.01220v2
      locator: Integer specialization of the local finite nonsingular bound corresponding to Theorem11.1; monomial and Riemann transfer proved here
---

## Statement

Let $d\ge1$ and $s\ge d(d+1)/2$ be integers. For every $\eta>0$ there is a constant $C_{d,s,\eta}>0$ such that, for every integer $M\ge1$,
$$J_{s,d}(M)\le C_{d,s,\eta}M^{2s-d(d+1)/2+\eta},$$
where $J_{s,d}$ is the ordinary multiple Riemann mean value of the positive-interval degree-$d$ exponential sum. No Countable Choice assumption is made. In particular, at $s=d(d+1)$ this gives $J_{s,d}(2N)\ll_{d,\eta}N^{3s/2+\eta}$ for all integers $N\ge1$.

## Facts & Assumptions

**Given:** The integers $d,s,M$ and real $\eta>0$ in the Statement. Put $T=d(d+1)/2$.

[F1] [[def-vinogradov-mean-value-Jsk]] and [[thm-vinogradov-mean-value-is-solution-count]] identify $J_{v,d}(M)$, for each positive integer $v$, with the finite number of ordered pairs of $v$-tuples in $\{1,\ldots,M\}$ whose power sums agree in degrees $1,\ldots,d$. Their integral convention is the ordinary multiple Riemann integral.

[F2] The integer branch of [[lem-nonsingular-polynomial-congruence-short-scale-bound]] states: for rank $d$, prime $p>d$, polynomial family with Wronskian a unit modulo $p$ on the support, residue occupancy at most $A$ modulo $p^{\lceil B/d\rceil}$, and every $\delta>0$, its finite critical $2T$-moment modulo $p^B$ is at most $C_{d,T,\delta}p^{\delta B}A^T$ times its squared coefficient mass to the power $T$, whenever $B\ge B_0(d,T,\delta)$. This is a finite probability sum; the function-field character and measure branch is not used.

[F3] [[thm-euclid-infinitude-of-primes]] supplies a prime outside any given finite prime list; [[def-prime]] characterizes its positive divisors. Coprime integers admit a Bézout identity by [[thm-bezout-identity]], and a positive divisor of a nonzero integer does not exceed its absolute value by [[lem-divisor-bound]].

[F4] [[thm-multidimensional-integral-properties]] gives monotonicity and linearity for the ordinary Riemann integrals. [[lem-geometric-progression-exponential-sum]] supplies the geometric-series identity for the exponential character and its unit modulus.

[F5] [[thm-real-power-laws]] gives the product and iterated-power laws on positive bases.

[F6] [[thm-exponential-is-strictly-increasing]] and [[thm-natural-logarithm-laws]] make $p^u=\exp(u\log p)$ increasing in $u$ for $p>1$, with $\log p>0$. [[lem-integer-part]] supplies the ceiling integer, satisfying $t\le\lceil t\rceil<t+1$.

## Proof

1.1 Fix a prime $p>d$ using [F3] on the finite list of primes at most $d$; this is one fixed witness depending only on $d$. For $\phi_r(t)=t^r$, the derivative matrix with rows $1,\ldots,d$ is upper triangular with diagonal entries $r!$, so its Wronskian is the constant $W=\prod_{r=1}^dr!$. For each $1\le r\le d$, a positive common divisor of $r$ and $p$ must be $1$ or $p$; the latter is impossible since $p>r$, by [F3]. Bézout therefore gives an inverse of $r$ modulo $p$. Multiplying these finitely many inverses makes every factorial and then $W$ a unit modulo $p$. [given, F3, algebra, choose]

2.1 Put $\delta=\eta/d$ and let $B_0\ge1$ be an integer threshold for [F2]. For each $M\ge1$ choose the explicit integer $B=\max(B_0,\lceil d\log M/\log p\rceil)$. Then $p^{\lceil B/d\rceil}\ge M$. No two distinct elements of $S=\{1,\ldots,M\}$ are congruent modulo this number: their nonzero difference has absolute value at most $M-1$, smaller than the modulus. Thus the residue occupancy in [F2] is at most one, including $M=1$. With all coefficients equal to one, its squared coefficient mass is $M$. Applying [F2] to the family in step 1.1 bounds the finite critical moment by $C_{d,T,\delta}p^{\delta B}M^T$. [given, F2, F5, F6, step 1.1, algebra, construct]

3.1 Expand that finite $2T$-moment. For each power-sum difference $h\in\mathbb Z$, the finite average $p^{-B}\sum_{u=0}^{p^B-1}e(uh/p^B)$ equals one if $p^B\mid h$ and zero otherwise, by [F4]. Taking the product over the $d$ coordinates shows that the finite moment is exactly the number of pairs of $T$-tuples whose power-sum differences are all divisible by $p^B$. Every exact-equation solution counted by [F1] is among these congruence solutions. All coefficients here are one, so this inclusion is an inequality of nonnegative integer counts. Hence $J_{T,d}(M)\le C_{d,T,\delta}p^{\delta B}M^T$. No signed-weight comparison or continuous-to-Lebesgue conversion occurs. [F1, F4, step 2.1, algebra]

4.1 The explicit choice of $B$ gives $B\le B_0+d\log M/\log p+1$. Since $p$ and $B_0$ are fixed in terms of $d,\eta$, [F5] gives $p^{\delta B}\le p^{\delta(B_0+1)}M^{d\delta}=C_{d,\eta}M^\eta$. Combining with step 3.1 proves $J_{T,d}(M)\le C_{d,\eta}M^{T+\eta}$ uniformly for all integers $M\ge1$, without a separate small-$M$ exceptional range. [F5, F6, step 2.1, step 3.1, algebra]

5.1 Write $F(\boldsymbol\alpha)=\sum_{n=1}^Me(\sum_{r=1}^d\alpha_rn^r)$. Its modulus is at most $M$ by the finite triangle inequality and [F4]. Since $s\ge T$, the pointwise inequality $|F|^{2s}\le M^{2s-2T}|F|^{2T}$ has a nonnegative integer power of $M$. These integer moments are finite trigonometric polynomials by the expansion in [F1], so the indicated Riemann integrals exist. Monotonicity [F4] and step 4.1 give $J_{s,d}(M)\le M^{2s-2T}J_{T,d}(M)\le C_{d,s,\eta}M^{2s-T+\eta}$. At $s=2T=d(d+1)$ and $M=2N$, absorb the fixed power of two into the constant; $2s-T=3s/2$. [F1, F4, F5, step 4.1, algebra] ∎
