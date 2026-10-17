---
id: lem-na-computed-unitary-butterfly-error-bound
kind: lemma
title: "A computed unitary radix-two butterfly has error at most (10u + εtw) times its input norm"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 13
deps: [alg-na-computed-unitary-radix-two-fft, thm-na-certified-unit-circle-phase-enclosure, lem-na-complex-product-six-operation-roundoff-bound, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, def-standard-relative-floating-point-model-and-unit-roundoff, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, lem-complex-conjugation-and-modulus-laws, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-counting-inner-product-on-complex-functions-on-z-mod-n]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, Theorem 24.2, pp. 453–454"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.7"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $u\le1/16$, let $|w|=1$, and let $|\widehat w-w|\le\epsilon\le1/4$. For $a,b\in\mathbb C$, perform the successful butterfly of [[alg-na-computed-unitary-radix-two-fft]] using $\widehat w$. If each exact nonzero real intermediate is normal and every operation succeeds under the operationwise model, then its computed pair $(\widehat y_+,\widehat y_-)$ satisfies

$$
\left\|(\widehat y_+,\widehat y_-)-2^{-1/2}(a+wb,a-wb)\right\|_2\le(10u+\epsilon)\left\|(a,b)\right\|_2.
$$

## Facts & Assumptions

**Given:** $a,b,w,\widehat w,u,\epsilon$ with the stated bounds, and a successful rounded butterfly.

[F5] For a pair $(z_1,z_2)\in\mathbb C^2$, $\|(z_1,z_2)\|_2=(|z_1|^2+|z_2|^2)^{1/2}$ ([[def-counting-inner-product-on-complex-functions-on-z-mod-n]]).

[F1] Six-operation complex multiplication obeys $|\operatorname{fl}_{\mathbb C}(zw)-zw|\le3u|z||w|$ when its six operations succeed ([[lem-na-complex-product-six-operation-roundoff-bound]]).

[F2] $|w|=1$ and $|\widehat w-w|\le\epsilon$; hence $|\widehat w|\le1+\epsilon$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-na-certified-unit-circle-phase-enclosure]], [[lem-complex-conjugation-and-modulus-laws]]).

[F3] Each real rounded addition, multiplication, or positive in-range square root has relative error at most $u$; complex addition and real scaling round their two components separately ([[def-standard-relative-floating-point-model-and-unit-roundoff]], [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]).

[F4] The complex modulus is subadditive; Cauchy–Schwarz bounds the Euclidean norm of two coordinatewise error bounds ([[lem-complex-conjugation-and-modulus-laws]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 Let $t=\operatorname{fl}_{\mathbb C}(\widehat wb)$. By [F1] and [F2], $|t-wb|\le3u|\widehat w||b|+\epsilon|b|\le(15u/4+\epsilon)|b|$. Thus $|t|\le(1+15u/4+\epsilon)|b|\le95|b|/64$. [given, F1, F2, algebra]

1.2 For $q_\pm=\operatorname{fl}_{\mathbb C}(a\pm t)$, [F3] gives $|q_\pm-(a\pm t)|\le u(|a|+|t|)$ by [F4]. If $c=1/\sqrt2$ and $\widehat c=\operatorname{fl}(\sqrt{1/2})$, then correct rounding gives $|\widehat c-c|\le uc$. The componentwise rounded scaling therefore satisfies $|\operatorname{fl}_{\mathbb C}(\widehat c q_\pm)-cq_\pm|\le(2u+u^2)c|q_\pm|$, and $|q_\pm|\le(1+u)(|a|+|t|)$. [given, F3, F4, algebra]

2.1 Combining steps 1.1–1.2 and using $\sqrt2c=1$, the two-output error norm is at most $(15u/4+\epsilon)|b|+\alpha(|a|+95|b|/64)$, where $\alpha=u+(2u+u^2)(1+u)=3u+3u^2+u^3\le817u/256$. Since $15/4+(817/256)(95/64)<9$, this is at most $(817u/256)|a|+(9u+\epsilon)|b|$. [step 1.1, step 1.2, algebra]

3.1 By [F4], $\sqrt{(817/256)^2+9^2}<10$, so $(817u/256)|a|+9u|b|\le10u\sqrt{|a|^2+|b|^2}$; [F5] identifies the square-root factor as $\|(a,b)\|_2$. Also $\epsilon|b|\le\epsilon\sqrt{|a|^2+|b|^2}$. Adding the bounds proves the claim. [step 2.1, F4, F5, algebra] ∎
