---
id: thm-stadlmann-harman-prime-minorant
kind: theorem
title: "Stadlmann’s explicit prime minorant with smooth-modulus exponent 0.5253"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps: [def-smooth-modulus-exponent-of-distribution, thm-stadlmann-type-i-ii-smooth-modulus-estimate, thm-polymath-type-iii-smooth-modulus-estimate, thm-heath-brown-identity-for-von-mangoldt-sums, thm-siegel-walfisz-for-heath-brown-coefficients]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Proposition 2, printed pp. 9–10; complete proof in §4.1–4.8, printed pp. 31–42"
    - title: "R. C. Baker and A. J. Irving, Bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1505.01815v1"
      locator: "§§2–5, independent Harman-sieve minorant construction"
---

## Statement

Put $\eta=0.00481$. For $x>1$, write $p_j=x^{\alpha_j}$ for prime variables and define $\psi(n,y)=1$ if every prime divisor of $n$ is at least $y$, and $0$ otherwise; the condition is vacuous for $n=1$. Define
$$\begin{aligned} \rho(n;x):={}&1_{\mathbb P}(n) -\sum_{\substack{n=p_1p_2p_3p_4n_5\\0.19038\le\alpha_4<\alpha_3<\alpha_2<\alpha_1<0.40481\\\alpha_1+\alpha_2<0.40481\\\alpha_2+\alpha_3+\alpha_4>0.59519}}\psi(n_5,p_4)\\ &-\sum_{\substack{n=p_2p_3p_4p_5p_6\\0.19038\le\alpha_2,\alpha_3,\alpha_4,\alpha_5,\alpha_6\le0.23848\\\alpha_2,\alpha_4>\alpha_3\\\alpha_2+\alpha_4<0.40481\\\alpha_2+\alpha_3+\alpha_5>0.59519\\\alpha_6\ge\alpha_5}}1, \end{aligned}$$
where $1_{\mathbb P}$ is the indicator of the positive primes and all prime variables and integer variables in each sum satisfy the displayed factorization. Then $\rho(n;x)\le1_{\mathbb P}(n)$ for every positive integer $n$. For $n\in[x,2x]$, if $\rho(n;x)\ne0$ then every prime factor of $n$ is at least $x^{1/5-2\eta}=x^{0.19038}$. In particular, every such factor exceeds $x^\xi$ for any fixed $0<\xi<0.19038$. The function $\rho(\cdot;x)$ has exponent of distribution $0.5253$ to squarefree smooth moduli, and
$$\sum_{x\le n\le2x}\rho(n;x)\ge\left(1-2\cdot10^{-5}+o(1)\right)\frac{x}{\log x}$$
as $x\to\infty$.

## Statement references

[[def-smooth-modulus-exponent-of-distribution|Exponent of distribution to squarefree smooth moduli]]

[[thm-stadlmann-type-i-ii-smooth-modulus-estimate|Stadlmann's improved Type I/II estimate for smooth moduli]]

[[thm-polymath-type-iii-smooth-modulus-estimate|Polymath8a Type III estimate for densely divisible moduli]]

[[thm-heath-brown-identity-for-von-mangoldt-sums|Finite Heath–Brown identity for the von Mangoldt function]]

[Stadlmann, Proposition 2](https://arxiv.org/pdf/2309.00425v3)

[Baker–Irving, §§2–5](https://arxiv.org/pdf/1505.01815v1)

## Facts & Assumptions

**Given:** $x>1$, the prime indicator, the prime-factor cutoff $x^{0.19038}$, the smooth-modulus exponent convention, and the Type I/II and Type III estimates used in Harman's sieve.

[F1] [[thm-stadlmann-type-i-ii-smooth-modulus-estimate]]: the required Type I/II discrepancy estimates hold when the coefficient sequences meet their stated scale and Siegel–Walfisz hypotheses. Its discrepancy is the full coefficient-support one of the actual source Proposition1, not an automatic hard product-window estimate.

[F2] [[thm-polymath-type-iii-smooth-modulus-estimate]]: the required Type III discrepancy estimate holds under its displayed squarefree dense-divisibility and scale hypotheses.

[F3] [[thm-heath-brown-identity-for-von-mangoldt-sums]]: the von Mangoldt weight used in the decomposition is the finite identity with cutoff $V=(2x)^{1/K}$ on $[x,2x]$.

[F4] [[thm-siegel-walfisz-for-heath-brown-coefficients]]: localized grouped Heath–Brown convolutions of scale $N\ge c_*x^\epsilon$ for fixed $\epsilon,c_*>0$ satisfy the unqualified Siegel–Walfisz discrepancy bound uniformly in $q,r$, including the source smooth cutoffs and fixed polylogarithmic normalizations. No assertion is made for arbitrary bounded-scale groups; complementary factors remain separate.

## Verification

Only the pointwise minorant and prime-factor cutoff assertions are proved here; the distribution and mass assertions remain obligations.

1.1 Each subtracted summand is either zero or one, and there are finitely many factorizations of a fixed positive integer $n$. Hence both subtracted sums are finite nonnegative integers, proving $\rho(n;x)\le1_{\mathbb P}(n)$. [given, algebra]

2.1 Suppose $x\le n\le2x$ and $\rho(n;x)\ne0$. If $n$ is prime, its only prime factor is $n\ge x>x^{0.19038}$. If $n$ is composite, its prime indicator is zero, so at least one subtracted summand is nonzero. In the first sum, each of $p_1,p_2,p_3,p_4$ is at least $p_4\ge x^{0.19038}$, and every prime factor of $n_5$ is at least $p_4$ because $\psi(n_5,p_4)=1$. In the second sum, every displayed prime factor is at least $x^{0.19038}$. Thus all prime factors of $n$ are at least $x^{0.19038}$ in either case. Since $x>1$, this implies the strict bound $p>x^\xi$ whenever $0<\xi<0.19038$. [given, step 1.1, algebra] ∎

## Endpoint convention

The non-strict cutoff is necessary for this exact formula. Set $x=101^{50000/9519}$ and $(p_2,p_3,p_4,p_5,p_6)=(163,101,103,127,157)$. Their product is $n=33810342971\in[x,2x]$, and they satisfy every constraint in the second subtracted sum. Thus $\rho(n;x)\le-1$, while the prime factor $101=x^{0.19038}$ is exactly at the endpoint. The integer-power checks are recorded in `research/number-theory-all-141-2026-10-25-targeted-followup/batch-139/cutoff-witness.py`. Proposition 2's formula and distribution/mass conclusions are retained; the strict endpoint was an additional local assertion.

## Proof obligation

The full proof in Stadlmann §§4.1–4.8 uses good sifted sets, Buchstab decompositions, and separate three-, five-, and four-prime-factor estimates before combining them into the displayed minorant. Those lemmas and the exact polyhedral integrations have not been locally reconstructed. The power-scale localized Heath–Brown Siegel–Walfisz input now has a complete unqualified local proof; the separate Type I/II and Type III inputs retain their existing holds. Preserve the full claim and escalate rather than treating the cited source as a local proof.

## Localization boundary

The corrected TypeI/II supplier retains the actual source full-support discrepancy and full coefficient/parameter family. The present public windowed prime/minorant conclusion is unchanged and remains held: its finite decomposition and localization must justify using that source estimate. Uniform interval-SW is available for the specified grouped Heath–Brown factors; the separate classical product-cutoff BV lemma reaches level below1/2 only and does not prove the enhanced-level dispersion or the present theorem. No supplier-scope upgrade is inferred.
