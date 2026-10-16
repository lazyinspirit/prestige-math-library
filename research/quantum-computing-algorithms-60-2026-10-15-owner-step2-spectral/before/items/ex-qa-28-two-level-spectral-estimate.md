---
id: ex-qa-28-two-level-spectral-estimate
kind: example
title: Spectral distribution and phase resolution for a two-level matrix
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-28-state-spectral-distribution
  - def-qa-28-spectral-estimation-access
  - thm-qa-28-spectral-law-measurement
  - thm-qa-28-spectral-estimation-guarantee
  - thm-qa-phase-estimation-success-and-tail
  - thm-complex-trigonometric-and-hyperbolic-power-series
  - thm-alternating-series-test
  - lem-sine-positive-and-cosine-decreasing-on-zero-two
  - cor-pi-is-the-first-positive-sine-zero
  - def-complex-exponential
justified_by: []
axiom_use: "None; all calculations are finite-dimensional and use a convergent scalar power series."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Example

Take $H=\operatorname{diag}(-1/2,1/3)$ on $\mathbb C^2$ and $\psi=\sqrt{3/5}|0\rangle+\sqrt{2/5}|1\rangle$. The state-dependent spectral distribution has masses $3/5$ at $-1/2$ and $2/5$ at $1/3$. With $U=e^{iH}$ and $Q=128$, the measured phase law is the mixture of the two exact QPE kernels with those weights. For additive eigenvalue accuracy $\epsilon=1/4$, the total probability of an estimate within $1/4$ of its eigenvalue is at least $3/4$; the two success intervals are disjoint. With only controlled-$U$ access, the phase register uses $127$ controlled-$U$ calls per run.

## Facts & Assumptions

**Given:** The diagonal matrix, normalized input, exact QPE access to $U=e^{iH}$, and phase-register size $m=7$ ($Q=2^7=128$).

[F1] [[def-qa-28-state-spectral-distribution]] and [[thm-qa-28-spectral-law-measurement]]: each eigenspace has weight $\|P_\lambda\psi\|^2$ and the sampler law is the corresponding mixture of phase kernels.

[F2] [[thm-qa-phase-estimation-success-and-tail]]: if $K=\lfloor Q\eta\rfloor\ge2$, QPE has circular phase-error tail at most $1/(2(K-1))$.

[F3] [[cor-pi-is-the-first-positive-sine-zero]], [[lem-sine-positive-and-cosine-decreasing-on-zero-two]], and [[thm-complex-trigonometric-and-hyperbolic-power-series]]: $\pi>2$ because sine has no zero on $(0,2]$, and sine has its stated Taylor series.

[F4] [[thm-alternating-series-test]]: for an alternating series with decreasing nonnegative term magnitudes, the remainder after a partial sum is bounded by the first omitted term.

[F5] [[def-qa-28-spectral-estimation-access]]: with only controlled-$U$ access, implementing powers $U^{2^j}$ by repeated calls costs $\sum_{j=0}^{m-1}2^j=2^m-1$ controlled-$U$ calls.

## Verification

1.1 The two diagonal entries are distinct, so their spectral projections are $|0\rangle\langle0|$ and $|1\rangle\langle1|$. Their action on $\psi$ gives squared norms $3/5$ and $2/5$, respectively; the squares sum to one. By [F1], these are exactly the masses and the measured phase law is $\frac35P_{-1/(4\pi)}+\frac25P_{1/(6\pi)}$. [F1, given, algebra]

1.2 We certify $\pi<4$. The sine Taylor partial sum through $-4^7/7!$ is $S_3=4-4^3/3!+4^5/5!-4^7/7!=-6976/5040=-502272/362880$. Starting with $4^9/9!$, the absolute Taylor terms decrease because the next-to-current ratio is $16/((n+1)(n+2))<1$ for odd $n\ge7$; [F4] therefore bounds the alternating remainder by $4^9/9!=262144/362880$. Hence $\sin4\le-240128/362880<0$. By [F3], sine is positive on $(0,2]$, while continuity and the negative value at $4$ give a zero in $(2,4)$ by the intermediate value theorem. Its first positive zero is $\pi$, so $\pi<4$. [F3, F4, given, algebra]

2.1 For either phase, put $\eta=\epsilon/(2\pi)=1/(8\pi)$. Then $Q\eta=16/\pi>4$ by $\pi<4$, so $K=\lfloor Q\eta\rfloor\ge4$; [F2] bounds the circular tail by at most $1/6<1/4$. On this success event the phase estimate has a lift within $\eta$ of $\theta=\lambda/(2\pi)$; since $|\theta|\le1/(2\pi)$ and $\eta=1/(8\pi)$, the lift has magnitude at most $5/(8\pi)<1/2$ by $\pi>2$, so it is the principal representative and the decoded eigenvalue error is at most $\epsilon$. Thus each eigenstate has success at least $3/4$. By [F1], the total success probability is at least $(3/5)(3/4)+(2/5)(3/4)=3/4$. The eigenvalue gap is $1/3-(-1/2)=5/6>1/2=2\epsilon$, so the two intervals are disjoint. [F1, F2, F3, step 1.2, given, algebra]

3.1 The seven phase bits require the controlled powers with exponents $1,2,4,8,16,32,64$. Repeating controlled-$U$ for each power uses $1+2+4+8+16+32+64=127$ calls. [F5, given, algebra] ∎
