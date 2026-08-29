---
id: cor-c-one-change-of-variables-for-l-one-functions
kind: corollary
title: "A C^1 diffeomorphism satisfies the change-of-variables formula for L^1 functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $U,V \subseteq \mathbb R^n$ be open and let $T : U \to V$ be a
$C^1$ diffeomorphism. If $f : V \to \mathbb C$ belongs to $L^1(\lambda_n)$,
then
$$
\int_V f(y)\,d\lambda_n(y) = \int_U f(T(x))\,|\det DT(x)|\,d\lambda_n(x).
$$

## Facts & Assumptions

**Given:** Open sets $U,V \subseteq \mathbb R^n$, a $C^1$ diffeomorphism $T : U \to V$, and a function $f \in L^1(\lambda_n)$.

[L1] The change-of-variables formula holds for nonnegative measurable functions. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[L2] The Lebesgue integral is linear on $L^1$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 Write $f=u-v+i(p-q)$, where $u,v,p,q \ge 0$ are the positive and negative parts of the real and imaginary parts of $f$. Since $f \in L^1$, all four functions are integrable and nonnegative. [L1, L2]

2.1 Apply [L1] to $u,v,p,q$ and recombine the four resulting equalities by [L2]. This yields the stated formula for $f$. [step 1.1, L1, L2] ∎
