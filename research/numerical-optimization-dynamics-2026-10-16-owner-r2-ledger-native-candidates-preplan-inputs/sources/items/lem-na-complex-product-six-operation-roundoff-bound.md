---
id: lem-na-complex-product-six-operation-roundoff-bound
kind: lemma
title: "Six-operation complex multiplication has a normwise roundoff bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 1
deps: [def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, def-standard-relative-floating-point-model-and-unit-roundoff, def-abs-value, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, pp. 452–454"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.7"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $u\le1/16$. For $z,w\in\mathbb C$, compute $\operatorname{fl}_{\mathbb C}(zw)$ from the four real products, one real subtraction, and one real addition specified in [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. If every nonzero intermediate is normal and no operation overflows, then

$$
|\operatorname{fl}_{\mathbb C}(zw)-zw|\le3u|z||w|.
$$

## Facts & Assumptions

**Given:** $z=z_r+iz_i$, $w=w_r+iw_i$, the operationwise model, $u\le1/16$, and success of all six real operations.

[F1] A complex product computes four separately rounded real products and then rounded real/imaginary sums, for six real operations; successful operations have exact-zero behavior or relative error at most $u$ ([[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], [[def-standard-relative-floating-point-model-and-unit-roundoff]]).

[F2] $|z|=(z_r^2+z_i^2)^{1/2}$ and likewise for $w$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]); Cauchy–Schwarz in $\mathbb R^2$ gives $|z_rw_r|+|z_iw_i|\le|z||w|$ and $|z_rw_i|+|z_iw_r|\le|z||w|$ ([[def-abs-value]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 Write $p_1=\operatorname{fl}(z_rw_r)$ and $p_2=\operatorname{fl}(z_iw_i)$. By [F1], $|p_1-z_rw_r|\le u|z_rw_r|$ and $|p_2-z_iw_i|\le u|z_iw_i|$. Rounding their difference adds error at most $u|p_1-p_2|\le u(1+u)(|z_rw_r|+|z_iw_i|)$. Therefore the real-part error is at most $(2u+u^2)(|z_rw_r|+|z_iw_i|)$. The same calculation for the imaginary part gives $(2u+u^2)(|z_rw_i|+|z_iw_r|)$. [given, F1, algebra]

2.1 Applying [F2] to both component sums shows that each component error is at most $(2u+u^2)|z||w|$. The complex modulus of the two-component error is consequently at most $\sqrt2(2u+u^2)|z||w|$. Since $u\le1/16$, $\sqrt2(2+u)u\le\sqrt2(33/16)u<3u$, proving the stated bound. [step 1.1, F2, algebra] ∎
