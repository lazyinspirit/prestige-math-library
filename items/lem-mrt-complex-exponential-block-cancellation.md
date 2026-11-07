---
id: lem-mrt-complex-exponential-block-cancellation
kind: lemma
title: "Complex exponential block cancellation in the corrected MRT argument"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
sources:
  references:
    - title: "Matomäki–Radziwiłł–Tao, An averaged form of Chowla's conjecture, v3, Appendix A, (A.12) and Lemma A.8, pp. 26–27"
      url: https://arxiv.org/pdf/1503.05121v3
---

## Statement

For every complex number $z$, with $r=|z|$,
$$|e^{z/2}-e^{-z/2}|\le e^{r/2}-e^{-r/2}\le e^{r/2}.$$
Consequently, for all real $\alpha,\theta$,
$$e^\alpha+e^{-\alpha}-2\cos\theta\le e^{\sqrt{\alpha^2+\theta^2}}.$$
If $B_1,\ldots,B_J$ are disjoint finite sets, $w_p\in\mathbb C$, and $r_p\ge|w_p|$, put $z_j=\sum_{p\in B_j}w_p$ and $R_j=\sum_{p\in B_j}r_p$. Then
$$\prod_{j=1}^J |e^{z_j/2}-e^{-z_j/2}|e^{-R_j/2}\le1.$$
For $J=0$ the product is $1$. This is an inequality for exponential blocks; it asserts no approximation of Euler products by these blocks.

## Statement references

[Corrected MRT Appendix A, (A.12) and Lemma A.8](https://arxiv.org/pdf/1503.05121v3)

## Facts & Assumptions

**Given:** The complex numbers and finite sets in the Statement.

[F1] [[def-complex-exponential]] and [[lem-complex-exponential-series-converges-everywhere]] define the absolutely convergent exponential series at every complex argument.

[F2] [[lem-complex-conjugation-and-modulus-laws]] gives the triangle inequality and multiplicativity of modulus.

[F3] [[thm-complex-exponential-addition-and-real-extension]] identifies the exponential series on real inputs with the real exponential and gives its addition law.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $e^{x+iy}=e^x(\cos y+i\sin y)$ and $|e^{x+iy}|=e^x$.

## Proof

1.1 Subtract the two absolutely convergent series term by term. The even terms cancel, so $e^{z/2}-e^{-z/2}=2\sum_{k\ge0}(z/2)^{2k+1}/(2k+1)!$. Apply the triangle inequality to its finite partial sums and pass to their limits, using $|z^{2k+1}|=r^{2k+1}$. This gives $|e^{z/2}-e^{-z/2}|\le2\sum_{k\ge0}(r/2)^{2k+1}/(2k+1)!=e^{r/2}-e^{-r/2}$. The latter is at most $e^{r/2}$ since $e^{-r/2}>0$; positivity also follows directly from $e^{-r/2}=1/e^{r/2}$ and the positive real series at $r/2\ge0$. [F1, F2, F3, given, algebra]

2.1 Take $z=\alpha+i\theta$ and square step 1.1. Expanding the modulus squared by conjugation and [F4] gives $|e^{z/2}-e^{-z/2}|^2=e^\alpha+e^{-\alpha}-2\cos\theta$, while $r=\sqrt{\alpha^2+\theta^2}$. This proves the stated real inequality, including zero coordinates. [step 1.1, F2, F3, F4, algebra]

3.1 Finite triangle inequalities give $|z_j|\le R_j$. The real exponential is increasing on nonnegative inputs directly by comparison of its positive-term series. Therefore step 1.1 gives $|e^{z_j/2}-e^{-z_j/2}|e^{-R_j/2}\le e^{(|z_j|-R_j)/2}\le1$. Multiplying these finitely many nonnegative inequalities proves the product assertion, with the stated empty-product convention. [step 1.1, F1, F2, F3, given, algebra] ∎
