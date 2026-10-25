---
id: thm-feller-converse-to-lindeberg-feller
kind: theorem
title: Feller converse to Lindeberg-Feller
deps: ["lem-second-order-characteristic-function-expansion", "lem-product-of-near-one-characteristic-factors", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "thm-levy-continuity-theorem-forward-direction", "lem-characteristic-function-of-a-normal-law", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-addition-and-real-extension", "def-complex-exponential", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "def-total-row-variance-and-lindeberg-condition", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Billingsley, Probability and Measure, Theorems 28.1-28.4 and Example 28.4
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Let a centered row-wise independent triangular array satisfy $\sum_k\mathbb EX_{n,k}^2=1$ and $\max_k\operatorname{Var}(X_{n,k})\to0$. If $\sum_kX_{n,k}\Rightarrow N(0,1)$, then it satisfies the Lindeberg condition.

## Facts & Assumptions

[F1] The scalar centered exponential increment has modulus at most u^2; its proof also gives 1-cos(u)<=u^2/2. [[lem-second-order-characteristic-function-expansion]].

[F2] Near-one products differ from the exponential of their summed increments by o(1). [[lem-product-of-near-one-characteristic-factors]].

[F3] The independent row sum has product characteristic function. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F4] The assumed weak convergence gives pointwise characteristic-function convergence. [[thm-levy-continuity-theorem-forward-direction]].

[F5] Under AC N(0,1) has transform exp(-t^2/2). [[lem-characteristic-function-of-a-normal-law]].

[F6] Euler form gives unit modulus and -1<=cos<=1. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F7] Exponential addition and real extension identify the modulus as exp(real part). [[thm-complex-exponential-addition-and-real-extension]].

[F8] The real nonnegative exponential series gives exp(d)>=1+d for d>=0. [[def-complex-exponential]].

[F9] Centering, real parts and finite sums commute with integration. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F10] Complex expectation is bounded by the expectation of its absolute value. [[thm-integral-triangle-inequality]].

[F11] For total row variance one, Lindeberg is exactly convergence of the summed tail second moments. [[def-total-row-variance-and-lindeberg-condition]].

## Proof

**Given:** Assume AC. Let a centered row-wise independent triangular array satisfy $\sum_k\mathbb EX_{n,k}^2=1$ and $\max_k\operatorname{Var}(X_{n,k})\to0$. If $\sum_kX_{n,k}\Rightarrow N(0,1)$, then it satisfies the Lindeberg condition.

1.1 Fix real t and put $v_{n,k}=\mathbb EX_{n,k}^2$ and $w_{n,k}=\mathbb E(e^{itX_{n,k}}-1)$. Centering, [F1], [F9] and [F10] give $|w_{n,k}|\le t^2v_{n,k}$. Thus $\sum_k|w_{n,k}|\le t^2$, $\max_k|w_{n,k}|\to0$, and $\sum_k|w_{n,k}|^2\le t^4\max_kv_{n,k}\to0$. By [F2]–[F5] and the assumed normal limit, $\exp(\sum_k w_{n,k})\to e^{-t^2/2}$. This inference uses the forward continuity theorem only, not Lindeberg sufficiency. [F1, F2, F3, F4, F5, F9, F10]

2.1 Define the nonnegative function $d_t(x)=t^2x^2/2-(1-\cos(tx))$. Nonnegativity follows from the cosine Taylor bound in [F1]; also $d_t(x)\le t^2x^2/2$ because $\cos(tx)\le1$. Hence $D_n(t):=\sum_k\mathbb E d_t(X_{n,k})$ is finite and nonnegative. Total variance one and [F9] give $\operatorname{Re}\sum_k w_{n,k}=-t^2/2+D_n(t)$. Exponential addition and Euler modulus show $|\exp(\sum_k w_{n,k})|=e^{-t^2/2+D_n(t)}$. Step 1.1 therefore implies $e^{D_n(t)}\to1$. Since the nonnegative series gives $0\le D_n(t)\le e^{D_n(t)}-1$, we obtain $D_n(t)\to0$. No complex logarithm or subsequence of measures is needed. [step 1.1, F1, F6, F7, F8, F9]

3.1 Now fix any $\varepsilon>0$ and take the single frequency $t=4/\varepsilon$. On $|x|>\varepsilon$ we have $t^2x^2>16$, and $1-\cos(tx)\le2$ yields $d_t(x)\ge t^2x^2/2-2\ge t^2x^2/4$. On the complementary set d_t is nonnegative. Integrating and summing gives $\sum_k\mathbb E[X_{n,k}^2\mathbf1_{\{|X_{n,k}|>\varepsilon\}}]\le4D_n(t)/t^2\to0$. This is precisely [F11], for every positive epsilon. AC is inherited from the target normal-law construction; the proof uses no Helly selection, uniqueness inversion or backward application of sufficiency. Zero entries and t=0 in the earlier steps are harmless, but the final chosen t is nonzero. [step 2.1, F6, F11] ∎

