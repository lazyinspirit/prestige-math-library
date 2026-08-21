---
id: lem-finite-sine-harmonic-sums
kind: lemma
title: "Finite sums of the sine harmonics"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
       thm-complex-exponential-addition-and-real-extension,
       def-finite-sum,
       thm-sine-and-cosine-addition-formulas,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       lem-complex-conjugation-and-modulus-laws,
       cor-trigonometric-parity-and-pythagorean-identity]
justified_by: []
aliases: []
landmark: true
short: "$\\sum_{n=1}^N\\sin(nx)$"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Basic Analysis II, §11.8.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $N$ be a positive integer. If $x\notin2\pi\mathbb Z$, then

$$\sum_{n=1}^{N}\sin(nx)=\frac{\cos(x/2)-\cos((N+1/2)x)}{2\sin(x/2)}.$$

If $x\notin2\pi\mathbb Z$, then for every positive integer $N$, $|\sum_{n=1}^N\sin(nx)|\le1/|\sin(x/2)|$.

If $x\in2\pi\mathbb Z$, every summand is zero and the sum is zero.

## Facts & Assumptions

**Given:** A real $x$ and a positive integer $N$.

[L1] For real $t$, $e^{it}=\cos t+i\sin t$ and $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L2] The sine and cosine addition formulas hold for all real arguments ([[thm-sine-and-cosine-addition-formulas]]).

[L3] $\sin t=0$ exactly at the integer multiples of $\pi$, and sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L4] Complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

[L5] Finite sums start with the empty sum and satisfy the recursive addition law ([[def-finite-sum]]).

[L6] For every real $t$, $|\cos t|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L7] For all complex $z,w$, $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Proof

**Proof technique:** cases.

1.1 For the nonperiodic case, assume $x\notin2\pi\mathbb Z$ and define the auxiliary complex sums recursively by $S_0=0$ and $S_{j+1}=S_j+e^{i(j+1)x}$. Multiplication by $1-e^{ix}$ and the exponential addition law [L7] telescope directly to $(1-e^{ix})S_N=e^{ix}-e^{i(N+1)x}$. The half-angle identity $1-e^{ix}=-2ie^{ix/2}\sin(x/2)$ and [L3] show that the multiplier is nonzero. [assume-case nonperiodic, L1, L2, L3, L7, algebra]

1.2 For the periodic case, assume $x\in2\pi\mathbb Z$. Then every $nx$ is a multiple of $2\pi$, so $\sin(nx)=0$ by [L3] and the finite sine sum is zero. [assume-case periodic, L3, L5]

2.1 For the nonperiodic case, divide the identity in step 1.1 by its nonzero multiplier and use [L1] and [L2] to obtain $$S_N=e^{i(N+1)x/2}\frac{\sin(Nx/2)}{\sin(x/2)}.$$ [step 1.1, L1, L2, algebra]

3.1 For the nonperiodic case, take imaginary parts in step 2.1 and apply the product-to-sum consequence of [L2] to get $$\sum_{n=1}^{N}\sin(nx)=\frac{\cos(x/2)-\cos((N+1/2)x)}{2\sin(x/2)}.$$ [step 2.1, L1, L2, algebra]

4.1 For the nonperiodic case, [L6] bounds the numerator in step 3.1 by $2$, so the absolute value of the sum is at most $1/|\sin(x/2)|$. [step 3.1, L4, L6, algebra]

5.1 The nonperiodic branch gives the displayed formula and bound by steps 3.1 and 4.1, while the periodic branch gives the separate zero value by step 1.2; the two cases exhaust all real $x$. [step 1.2, step 3.1, step 4.1, cases-exhaustive] ∎
