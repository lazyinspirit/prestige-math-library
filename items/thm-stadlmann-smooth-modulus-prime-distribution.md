---
id: thm-stadlmann-smooth-modulus-prime-distribution
kind: theorem
title: "Stadlmann’s exponent 1/2+1/40−ε for prime distribution to smooth moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps: [def-smooth-moduli-and-progression-discrepancy, def-smooth-modulus-exponent-of-distribution, thm-stadlmann-smooth-modulus-mpz-criterion, cor-von-mangoldt-mobius-inversion-formula, thm-heath-brown-identity-for-von-mangoldt-sums, thm-siegel-walfisz-for-heath-brown-coefficients, def-prime, def-prime-counting-function, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Theorem 1, printed p. 2; complete reduction in §2.1.2, printed pp. 7–9"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§3 Heath–Brown reduction and MPZ definition"
---

## Statement

Let $\pi(x;q,a)$ be the number of positive primes $p\le x$ with $p\equiv a\pmod q$, and let $\pi(x;q)$ be the number of positive primes $p\le x$ with $(p,q)=1$. For every $\varepsilon>0$ there exists $\delta>0$ such that, for every real $x>1$, integer $a$, and real $A>0$,
$$\sum_{\substack{q\le x^{1/2+1/40-\varepsilon}\\q\mid P(x^\delta)\\(q,a)=1}}\left|\pi(x;q,a)-\frac{\pi(x;q)}{\varphi(q)}\right|\ll_{A,\varepsilon}\frac{x}{(\log x)^A}.$$
The sum includes $q=1$. It is an average over squarefree $x^\delta$-smooth moduli; it does not assert the estimate for all moduli up to $x^{1/2+1/40-\varepsilon}$.

## Statement references

[[def-smooth-moduli-and-progression-discrepancy|Squarefree smooth moduli and progression discrepancy]]

[[def-smooth-modulus-exponent-of-distribution|Exponent of distribution to squarefree smooth moduli]]

[[thm-stadlmann-smooth-modulus-mpz-criterion|MPZ criterion from Type I/II and Type III estimates]]

[[thm-heath-brown-identity-for-von-mangoldt-sums|Finite Heath–Brown identity for the von Mangoldt function]]

[[thm-siegel-walfisz-for-heath-brown-coefficients|Siegel–Walfisz property for Heath–Brown coefficient factors]]

[Stadlmann, Theorem 1](https://arxiv.org/pdf/2309.00425v3)

## Facts & Assumptions

**Given:** The prime-counting conventions in the statement, the MPZ estimate, the finite Heath–Brown identity, and the Siegel–Walfisz estimates for its coefficient factors.

[F1] [[thm-stadlmann-smooth-modulus-mpz-criterion]]: for admissible $\omega,\delta$, the averaged discrepancy of $\Lambda$ on $[x,2x]$ has every fixed logarithmic saving over $q\le x^{1/2+2\omega}$, $q\mid P(x^\delta)$.

[F2] [[thm-heath-brown-identity-for-von-mangoldt-sums]]: the von Mangoldt weight on $[x,2x]$ decomposes into the finite truncated coefficient convolutions.

[F3] [[thm-siegel-walfisz-for-heath-brown-coefficients]]: localized grouped Heath–Brown convolutions of scale $N\ge c_*x^\epsilon$ for fixed $\epsilon,c_*>0$ satisfy the unqualified Siegel–Walfisz discrepancy bound uniformly in $q,r$, including the source smooth cutoffs and fixed polylogarithmic normalizations. No assertion is made for arbitrary bounded-scale groups; complementary factors remain separate.

## Proof

**Proof technique:** use a slightly larger admissible exponent, dyadic summation, and uniform prime-power bounds.

1.1 Put $e=\min(\varepsilon,1/80)$ and $\theta=1/2+1/40-e$. Choose $\theta'$ with $\theta<\theta'<1/2+1/40$, put $\omega=(\theta'-1/2)/2$, and choose $\delta'>0$ such that $80\omega+80\delta'/3<1$. Choose $\eta>0$ so that $\theta<(1-\eta)\theta'$, and put $\delta=(1-\eta)\delta'/2$. These are fixed positive constants depending only on $\varepsilon$. Since $e\le\varepsilon$, the original modulus cutoff is at most $X^\theta$. For $X$ sufficiently large, if $u\ge X^{1-\eta}/2$, then $X^\theta\le u^{\theta'}$ and $X^\delta\le u^{\delta'}$ because both exponent inequalities are strict. Thus every modulus in the original sum is a squarefree modulus allowed by [F1] at scale $u$. The finitely bounded range of $X$ is absorbed by the implied constant. [F1, given, algebra]

2.1 Write $Q=X^\theta$ and let $\mathcal Q$ be the original set of moduli, enlarged to all squarefree $q\le Q$ coprime to $a$ and dividing $P(X^\delta)$. For $t\le X$ put [F1, step 1.1, algebra]
$$E_\Lambda(t;q,a)=\sum_{n\le t\atop n\equiv a\ (q)}\Lambda(n)-\frac1{\varphi(q)}\sum_{n\le t\atop(n,q)=1}\Lambda(n).$$
For $t>X^{1-\eta}$, partition $(0,t]$ into intervals $(t/2^{j+1},t/2^j]$, stopping when the lower endpoint first falls below $X^{1-\eta}$. Every retained scale is at least $X^{1-\eta}/2$; the remaining initial interval has length at most $2X^{1-\eta}$. By step 1.1 and [F1], for every fixed $B>0$ the sum over $\mathcal Q$ of the absolute discrepancy on each such interval is $\ll u/(\log u)^B$. Summing the geometric scales gives $\ll X/(\log X)^B$, uniformly in $t$ and $a$. The harmless convention at endpoints changes the aggregate by at most a logarithmic factor times $Q$ per endpoint: each endpoint contributes at most $\log(2X)$ to each modulus. [F1, step 1.1, algebra]

3.1 For the remaining initial interval put $Y=2X^{1-\eta}$. The first discrepancy term is at most [step 2.1, algebra]
$$\log(2Y)\sum_{q\le Q}\bigl(Y/q+1\bigr)\ll (Y\log(2Q)+Q)\log(2Y).$$
For the second, the elementary identity $q/\varphi(q)=\sum_{d\mid q}\mu^2(d)/\varphi(d)$ implies
$$\sum_{q\le Q}\frac1{\varphi(q)}\le (1+\log Q)\sum_{d\ge1}\frac{\mu^2(d)}{d\varphi(d)}\ll1+\log Q.$$
The last series converges because its Euler product is $\prod_p(1+1/(p(p-1)))$. Hence that term is $\ll Y\log(2Y)\log(2Q)$. Both bounds are $o(X/(\log X)^B)$ for every fixed $B$, since $\theta<1$ and $\eta>0$. Combining with step 2.1 yields, uniformly for $2\le t\le X$,
$$\sum_{q\in\mathcal Q}|E_\Lambda(t;q,a)|\ll_{B,\varepsilon}X/(\log X)^B.$$
The bounds depend on $a$ only through the coprimality restriction. [step 2.1, algebra]

4.1 Let $R(t;q,a)$ be the difference between $E_\Lambda(t;q,a)$ and the analogous discrepancy weighted by $\log p$ over primes $p\le t$. For squares, $(a,q)=1$ and squarefree $q$ imply that $z^2\equiv a\pmod q$ has at most $2^{\omega(q)}$ roots (including the prime $2$), by the Chinese remainder theorem. Therefore the total number of square contributions to the first term, over $q\in\mathcal Q$, is at most [step 3.1, algebra]
$$\sum_{q\le Q}2^{\omega(q)}(\sqrt X/q+1)\ll \sqrt X(1+\log Q)^2+Q(1+\log Q),$$
since $2^{\omega(q)}\le\tau(q)$ and $\sum_{q\le Q}\tau(q)\ll Q(1+\log Q)$, $\sum_{q\le Q}\tau(q)/q\ll(1+\log Q)^2$. For powers $p^k\le X$ with $k\ge3$, the trivial count gives at most $Q\,X^{1/3}\log_2 X$ contributions. For the averaged term, the total number of prime powers with exponent at least two is $O(\sqrt X\log X)$, and step 3.1 bounds the sum of $1/\varphi(q)$. Multiplying these counts by $\log X$, and using $\theta<1/2+1/40<2/3$, gives
$$\sup_{t\le X}\sum_{q\in\mathcal Q}|R(t;q,a)|\ll X^{1-\kappa}(\log(2X))^C$$
for fixed $\kappa>0$ and $C$, uniformly in $a$. [step 3.1, algebra]

5.1 Let $E_\pi(t;q,a)$ be the desired unweighted prime discrepancy. Partial summation of its logarithmically weighted counterpart gives [step 3.1, step 4.1, algebra]
$$E_\pi(X;q,a)=\frac{E_p(X;q,a)}{\log X}+\int_2^X\frac{E_p(t;q,a)}{t(\log t)^2}\,dt,$$
where $E_p$ is the prime-only logarithmically weighted discrepancy. Take absolute values, sum over the finite set $\mathcal Q$, and use steps 3.1 and 4.1 uniformly in $t$. The integral of $1/(t\log^2t)$ over $[2,X]$ is bounded, so choosing $B>A$ proves the stated $X/(\log X)^A$ estimate. The original modulus set is a subset of $\mathcal Q$, and dropping nonnegative summands preserves the bound. This includes $q=1$, whose discrepancy is zero. [step 3.1, step 4.1, algebra] ∎

## Proof status

The reduction above is complete conditional on [F1]. The MPZ supplier remains escalated; no readiness or supplier acceptance is claimed.
