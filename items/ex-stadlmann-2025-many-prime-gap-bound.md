---
id: ex-stadlmann-2025-many-prime-gap-bound
kind: example
title: "From the 0.5253 minorant exponent to H_m≪exp(3.8075m)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps: [thm-stadlmann-harman-prime-minorant, thm-harman-minorant-prime-gap-growth-criterion, def-smooth-modulus-exponent-of-distribution]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Proposition 2, Lemma 2 and Theorem 2, printed pp. 9–10"
---

## Example

Let $\rho(n;x)$ be Stadlmann's explicit real-valued function satisfying $\rho(n;x)\le1_{\mathbb P}(n)$ for every positive integer, with every prime factor of $n$ at least $x^{0.19038}$ whenever $x\le n\le2x$ and $\rho(n;x)\ne0$. Suppose its exponent of distribution to squarefree smooth moduli is $\theta=0.5253$ and its interval mass is at least $(1-2\cdot10^{-5}+o(1))x/\log x$. For sufficiently large $x$, multiplying its restriction to $[x,2x]$ by a scalar in $(0,1)$ normalizes its mass to $(1-3\cdot10^{-5})x/\log x$ without losing the pointwise minorant, prime-factor cutoff, or exponent-of-distribution properties. With $c_1=3\cdot10^{-5}$, the exact rational value $c_0=3.8075$ satisfies $c_0\theta(1-c_1)>2$, so the Baker–Irving growth criterion permits the bound $H_m\ll\exp(3.8075m)$ for every integer $m\ge1$.

## Example references

[[thm-stadlmann-bounded-many-prime-gap-growth|Stadlmann's bound H_m ≪ exp(3.8075m)]]

[[thm-stadlmann-harman-prime-minorant|Stadlmann's explicit Harman prime minorant]]

[[thm-harman-minorant-prime-gap-growth-criterion|Harman–Maynard growth criterion from a prime minorant]]

[[def-smooth-modulus-exponent-of-distribution|Exponent of distribution to squarefree smooth moduli]]

[Stadlmann, Theorem 2](https://arxiv.org/pdf/2309.00425v3)

## Facts & Assumptions

**Given:** Stadlmann's minorant, its lower mass bound and exponent $\theta=0.5253$, and the Baker–Irving criterion with $0<c_1<1$ and threshold $c_0>2/(\theta(1-c_1))$.

[F1] [[thm-stadlmann-harman-prime-minorant]]: $\rho(n;x)\le1_{\mathbb P}(n)$, nonzero values on $[x,2x]$ have all prime factors at least $x^{0.19038}$, the exponent is $0.5253$, and the mass is at least $(1-2\cdot10^{-5}+o(1))x/\log x$.

[F2] [[thm-harman-minorant-prime-gap-growth-criterion]]: a minorant supported on $[x,2x]$ with prime-factor cutoff $x^\xi$, exponent $\theta$, and mass $(1-c_1+o(1))x/\log x$ yields $H_m\ll_{c_0}\exp(c_0m)$ for every $c_0>2/(\theta(1-c_1))$.

[F3] [[def-smooth-modulus-exponent-of-distribution]]: exponent $\theta$ is defined by the averaged progression-discrepancy bounds over squarefree smooth moduli; multiplication by a scalar depending only on $x$ multiplies each such discrepancy by that scalar.

## Verification

1.1 Let $X=x/\log x$ and $S(x)=\sum_{x\le n\le2x}\rho(n;x)$. Since the error in [F1]'s lower bound tends to zero, for all sufficiently large $x$ we have $S(x)\ge(1-2.5\cdot10^{-5})X>(1-3\cdot10^{-5})X>0$. Put $c_1=3\cdot10^{-5}$ and $t_x=(1-c_1)X/S(x)\in(0,1)$. Define $\widetilde\rho(n;x)=t_x\rho(n;x)1_{[x,2x]}(n)$. Its support is contained in $[x,2x]$ and its mass is exactly $(1-c_1)X$. [given, F1, choose, algebra]

1.2 Write $3.8075=1523/400$, $0.5253=5253/10000$, and $1-c_1=99997/100000$. Then
$$3.8075\cdot0.5253\cdot(1-c_1)=\frac{800007899043}{400000000000}>2,$$
so $3.8075>2/(0.5253(1-c_1))$. [given, algebra]

2.1 If $n\notin[x,2x]$, then $\widetilde\rho(n;x)=0\le1_{\mathbb P}(n)$. If $n$ lies in the interval and $\rho(n;x)\le0$, then $\widetilde\rho(n;x)\le0\le1_{\mathbb P}(n)$. If $n$ lies in the interval and $\rho(n;x)>0$, the pointwise minorant property in [F1] forces $n$ to be prime and $\rho(n;x)\le1$, so $\widetilde\rho(n;x)=t_x\rho(n;x)\le1_{\mathbb P}(n)$. Because $t_x>0$, a value of $\widetilde\rho$ in the interval is nonzero exactly where $\rho$ is nonzero; the prime-factor cutoff from [F1] is preserved. Each interval discrepancy is multiplied by $t_x\le1$, so its exponent of distribution remains $0.5253$. Since $x^{0.19038}>x^{0.19}$ for $x>1$, $\widetilde\rho$ satisfies all hypotheses of [F2] with $\xi=0.19$, $\theta=0.5253$, and $c_1=3\cdot10^{-5}$. [F1, F2, F3, step 1.1, algebra]

3.1 Applying [F2] with $c_0=3.8075$ gives $H_m\ll\exp(3.8075m)$ for every integer $m\ge1$. [F2, step 1.1, step 2.1, step 1.2, algebra] ∎

## Proof status

The scalar normalization and exact rational check are complete. Readiness remains escalated because the minorant and generic minorant-criterion suppliers still require local proof reconstruction.
