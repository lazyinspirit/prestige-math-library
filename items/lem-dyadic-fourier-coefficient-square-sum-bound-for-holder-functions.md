---
id: lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions
kind: lemma
title: "A dyadic Fourier-coefficient square-sum bound for Hölder functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, proof of Theorem 3.3.16"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $0<\alpha\le1$ and let $f\in C^\alpha(\mathbb T)$: $|f(x)-f(y)|\le C d_{\mathbb T}(x,y)^\alpha$. Then there is $C_\alpha$ such that, for every integer $N\ge1$,
$$\sum_{N\le |k|<2N}|\widehat f(k)|^2\le C_\alpha C^2N^{-2\alpha}.$$

## Facts & Assumptions

**Given:** $f,C,\alpha,N$ as in the statement and the Fourier convention of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]. Since $f$ is continuous, all coefficient and norm integrals in this proof are ordinary Riemann integrals; this argument is choice-free and agrees with the torus Lebesgue convention under Countable Choice.

## Proof

**Proof technique:** direct.

1.1 Put $h=(4N)^{-1}$. For $N\le|k|<2N$, $|e^{-2\pi ikh}-1|\ge\sqrt2$, since $2\pi|k|h\in[\pi/2,\pi)$. [given, algebra]

1.2 For $u_h(x)=f(x-h)-f(x)$, translation in the coefficient integral gives $\widehat u_h(k)=(e^{-2\pi ikh}-1)\widehat f(k)$. [given, algebra]

2.1 Let $B=\{k:N\le|k|<2N\}$ and $p=\sum_{k\in B}\widehat u_h(k)e_k$. Finite character orthogonality and expansion of the nonnegative Riemann integral give $$0\le\int_0^1|u_h-p|^2=\int_0^1|u_h|^2-\sum_{k\in B}|\widehat u_h(k)|^2.$$ By steps 1.1--1.2, each summand on the right is at least $2|\widehat f(k)|^2$. Hence $$2\sum_{N\le|k|<2N}|\widehat f(k)|^2\le\int_0^1|u_h(x)|^2dx.$$ [step 1.1, step 1.2, algebra]

3.1 The Hölder bound gives $|u_h(x)|\le C(4N)^{-\alpha}$, so step 2.1 proves the assertion. [step 2.1, given, algebra] ∎
