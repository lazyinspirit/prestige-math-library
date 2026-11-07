---
dependency_level: 23
id: lem-divisor-weighted-bombieri-vinogradov-for-prime-counts-on-intervals
kind: lemma
title: Divisor-weighted Bombieri–Vinogradov estimates for prime counts on intervals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-bombieri-vinogradov-prime-distribution
- def-prime-progression-discrepancy
- thm-fundamental-theorem-of-arithmetic
- thm-euler-totient-product-formula
- thm-logarithm-derivative-and-integral
- thm-cauchy-schwarz-finite
- lem-abel-summation-by-parts
- def-von-mangoldt-function
- def-prime-counting-function
- def-unit-group-modulo-n-and-euler-totient
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- thm-logarithm-slower-than-every-positive-power
justified_by: []
proof_strategy: direct
axiom_use: Literal AC, Countable Choice and DC inherited from endpoint Bombieri–Vinogradov.
  All additional moment and interval manipulations are finite or proper Riemann-integral
  calculations.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: James Maynard, Large gaps between primes (2016), §6; local adaptation from
      the accepted endpoint BV theorem
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf
    locator: Printed pp.928–929, equation(6.28); the divisor-weighted endpoint and
      prime-power bridges are proved explicitly here.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Fix real numbers $0<\eta<1/2$ and $A>0$, and an integer $J\ge1$. Define
$$\tau_J(n)=\#\{(n_1,\ldots,n_J)\in\mathbb N_{\ge1}^J:n_1\cdots n_J=n\},\qquad \operatorname{li}(t)=\int_2^t\frac{ds}{\log s}\quad(t\ge2).$$
Let $\pi(t;q,a)$ count primes $p\le t$ with $p\equiv a\pmod q$. There are constants $C_{\eta,J,A}>0$ and $x_{\eta,J,A}\ge6$ such that, for every $x\ge x_{\eta,J,A}$ and all real $x/2\le u\le v\le x$,
$$\sum_{1\le q\le x^\eta}\tau_J(q) \max_{a\in(\mathbb Z/q\mathbb Z)^\times} \left|\pi(v;q,a)-\pi(u;q,a) -\frac{\operatorname{li}(v)-\operatorname{li}(u)}{\varphi(q)}\right| \le C_{\eta,J,A}\frac{x}{(\log x)^A}.$$
The sum includes $q=1$ with its unique reduced class. The interval is $(u,v]$; no maximum over endpoints is placed inside the modulus sum. The constants need not be effective.

## Statement references

[[thm-bombieri-vinogradov-prime-distribution]]

[[def-prime-progression-discrepancy]]

[[thm-fundamental-theorem-of-arithmetic]]

[[thm-euler-totient-product-formula]]

[[thm-logarithm-derivative-and-integral]]

[[thm-cauchy-schwarz-finite]]

[[lem-abel-summation-by-parts]]

[[def-von-mangoldt-function]]

[[def-prime-counting-function]]

[[def-unit-group-modulo-n-and-euler-totient]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[thm-logarithm-slower-than-every-positive-power]]

## Facts & Assumptions

**Given:** Exactly the fixed parameters and choice assumptions in the Statement.

[F1] Under literal AC/CC/DC, for every fixed $M>0$ the endpoint Bombieri–Vinogradov sum of $\max_a|E_\psi(t;q,a)|$ is $O_M(t(\log t)^{-M})$ up to $q\le t^{1/2}(\log t)^{-2M-6}$. The discrepancy is $\psi(t;q,a)-t/\varphi(q)$, with full von Mangoldt weights on positive integers $n\le t$, reduced classes, and $q=1$. There is no maximum over endpoints. [[thm-bombieri-vinogradov-prime-distribution]] [[def-prime-progression-discrepancy]]

[F2] Unique prime factorization holds and $\varphi(q)=q\prod_{p\mid q}(1-1/p)$; the totient counts the reduced classes, including the one-element convention at $q=1$. [[thm-fundamental-theorem-of-arithmetic]] [[thm-euler-totient-product-formula]] [[def-unit-group-modulo-n-and-euler-totient]]

[F3] Finite Cauchy–Schwarz and finite Abel summation hold. The logarithm derivative and integral laws give the derivative of $1/\log t$; every fixed logarithmic power is smaller than every fixed positive power at infinity. [[thm-cauchy-schwarz-finite]] [[lem-abel-summation-by-parts]] [[thm-logarithm-derivative-and-integral]] [[thm-logarithm-slower-than-every-positive-power]]

[F4] The von Mangoldt function is $\log p$ on prime powers $p^h$ and zero otherwise. The prime-counting convention counts positive primes at the full endpoint. [[def-von-mangoldt-function]] [[def-prime-counting-function]]

[A1] AC, Countable Choice and DC are retained exactly for [F1]. No choice-free distribution estimate is asserted. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The fixed parameters above. All implied constants below may depend on $\eta,J,A$.

1.1 For positive integers $a,b$ one has $\tau_a(n)\tau_b(n)\le\tau_{ab}(n)$. At a prime power $p^e$, a pair of nonnegative row and column vectors of lengths $a,b$ and common sum $e$ determines a canonical matrix: put the smaller of the first remaining row and column masses in that entry, subtract it and advance past every exhausted row or column, setting other skipped entries to zero. At least one is exhausted at each step, so this finite rule terminates and gives those margins. Different pairs give different matrices because margins recover the pair. The number of nonnegative $a$ by $b$ matrices of sum $e$ is $\tau_{ab}(p^e)$ by [F2]. Applying the rule independently at each of the finitely many prime factors proves the inequality. It includes $n=1$ and $a=1$ or $b=1$. In particular $\tau_J^2\le\tau_{J^2}$ and $\tau_J^2\tau_2\le\tau_{2J^2}$. [F2, given, construct, algebra]

2.1 For each fixed integer $K\ge1$ and real $Q\ge1$, expanding the ordered factorizations and dropping the product cutoff gives $\sum_{n\le Q}\tau_K(n)/n\le(\sum_{m\le Q}1/m)^K\le(1+\log Q)^K$. Also $\sum_{n\le Q}\tau_K(n)\le Q(1+\log Q)^{K-1}$: fix the first $K-1$ factors, bound the number of last factors by $Q/(n_1\cdots n_{K-1})$, and drop the remaining product cutoff. For $K=1$ this is the usual $\lfloor Q\rfloor\le Q$ and an empty factor product. The harmonic bound follows by integrating $1/t$. [F2, F3, step 1.1, algebra]

3.1 To offset the divisor moments in step 2.1, put $Q=x^\eta$ and choose $M=2A+2J^2+5$. For every $t\in[x/2,x]$ and sufficiently large $x$, one has $Q\le t^{1/2}(\log t)^{-2M-6}$, since $\eta<1/2$ and [F3] makes the fixed logarithm dominated by the positive power $x^{1/2-\eta}$. Also $t$ exceeds [F1]'s fixed threshold. Thus, writing $E_q(t)=\max_a|E_\psi(t;q,a)|$, [F1] gives $\sum_{q\le Q}E_q(t)\ll_M x(\log x)^{-M}$ with the SAME constants for every such $t$. This is pointwise uniformity in the endpoint, not a bound for the sum of endpoint maxima. [A1, F1, F3, step 2.1, choose, algebra]

4.1 A residue class modulo $q\le Q\le x$ contains at most $x/q+1\le2x/q$ positive integers up to $t\le x$, each of von Mangoldt weight at most $\log x$. Also $q/\varphi(q)\le2^{\omega(q)}\le\tau_2(q)$ by [F2], with both sides one for $q=1$. Hence $E_q(t)\le Cx(\log x+\tau_2(q))/q$. Steps 1.1–2.1 imply $\sum_{q\le Q}\tau_J(q)^2E_q(t)\ll_J x(\log x)^{2J^2+1}$. Finite Cauchy–Schwarz applied to $\tau_J(q)\sqrt{E_q(t)}$ and $\sqrt{E_q(t)}$, with zeros allowed, now gives $\sum_{q\le Q}\tau_J(q)E_q(t)\ll x(\log x)^{-A-2}$ by the chosen $M$. [F2, F3, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 Put $\theta(t;q,a)=\sum_{p\le t,\ p\equiv a\ (q)}\log p$. The difference from $\psi$ consists of prime powers of exponent at least two. For each exponent $h\le\log x/\log2$ there are at most $\sqrt x$ possible bases, each of weight at most $\log x$, so its total at every modulus and class is at most $C\sqrt x(\log x)^2$. After multiplication by $\tau_J(q)$ and summing $q\le Q$, step 2.1 bounds the cost by $C_Jx^{1/2+\eta}(\log x)^{J+1}$. Since $\eta<1/2$, [F3] absorbs it in $x(\log x)^{-A-2}$ by enlarging the threshold. Consequently, uniformly for every $t\in[x/2,x]$, $\sum_{q\le Q}\tau_J(q)\max_a|\theta(t;q,a)-t/\varphi(q)|\ll x(\log x)^{-A-2}$. Prime powers and $q=1$ have not been dropped without an error estimate. [F3, F4, step 2.1, step 4.1, algebra]

6.1 For fixed $q,a$, finite Abel summation and integration of the derivative of $1/\log t$ give the exact identity $\pi(v;q,a)-\pi(u;q,a)=\theta(v;q,a)/\log v-\theta(u;q,a)/\log u+\int_u^v\theta(t;q,a)/(t\log^2t)\,dt$. One can verify it directly by interchanging a finite prime sum and the integral: a prime in $(u,v]$ contributes $\log p(1/\log v+\int_p^vdt/(t\log^2t))=1$, and a prime at or below $u$ contributes zero. Thus primes at $u$ are excluded and those at $v$ included. Replacing $\theta$ by $t/\varphi(q)$ gives $(\operatorname{li}(v)-\operatorname{li}(u))/\varphi(q)$ by the logarithmic derivative laws. [F3, F4, step 5.1, algebra]

7.1 Subtract those identities and take the maximum over the FINITE reduced classes. Its error is at most the two endpoint errors divided by their logarithms plus the integral of their pointwise maximum against $1/(t\log^2t)$. Multiply by $\tau_J(q)$ and sum over the FINITELY many $q\le Q$ before using step 5.1. Every integrand is Riemann integrable on the proper interval: it is a maximum of finitely many piecewise-continuous functions with only finitely many jumps, times a continuous bounded function. Thus no measurable selection, improper integral or exchange with an infinite sum is involved. Since $\log t\asymp\log x$ and $\int_u^vdt/(t\log^2t)\ll(\log x)^{-2}$, step 5.1 proves the displayed bound, in fact with room in the saving. If $u=v$ all terms are zero. The argument preserves the original [F1] cutoff, choice assumptions and full-weight conventions and never inserts $\max_t$ inside its modulus sum. [A1, F1, F3, step 3.1, step 5.1, step 6.1, algebra] ∎

