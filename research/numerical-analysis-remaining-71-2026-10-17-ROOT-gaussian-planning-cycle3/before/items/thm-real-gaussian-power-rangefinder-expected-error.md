---
id: thm-real-gaussian-power-rangefinder-expected-error
kind: theorem
title: Expected real Gaussian power-rangefinder error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [thm-real-gaussian-rangefinder-expected-spectral-error, thm-randomized-power-rangefinder-error-transfer, alg-randomized-power-subspace-iteration-with-qr, thm-singular-value-decomposition]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Corollary 10.10"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Corollary 11.9"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Under the real-field hypotheses of
[[thm-real-gaussian-rangefinder-expected-spectral-error]], let $q\ge0$ be an
integer, draw the same Gaussian sketch $\Omega$, and let $Q$ be the basis
returned by [[alg-randomized-power-subspace-iteration-with-qr]] on $A,\Omega,q$.
Equivalently, if $B=(AA^*)^qA$, then $\operatorname{Ran}(Q)=\operatorname{Ran}(B\Omega)$. Then
$$
\mathbb E\|(I-QQ^*)A\|_2\le
\left[
\left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1}^{2q+1}
+\frac{e\sqrt{k+p}}{p}
\left(\sum_{j>k}\sigma_j^{2(2q+1)}\right)^{1/2}
\right]^{1/(2q+1)}.
$$

## Facts & Assumptions

**Given:** A fixed real matrix, the Gaussian range-finder hypotheses, and an integer power count $q\ge0$.

[F1] The base real Gaussian range finder satisfies the expected spectral-error bound under $k\ge2$, $p\ge2$, $k+p\le\min(m,n)$ ([[thm-real-gaussian-rangefinder-expected-spectral-error]]).

[F2] The QR-reorthogonalized procedure spans $\operatorname{Ran}((AA^*)^qA\Omega)$ and its original-matrix error transfers from the powered error ([[thm-randomized-power-rangefinder-error-transfer]]).

[F3] If $A=U\Sigma V^*$, then $B=(AA^*)^qA=U\Sigma^{2q+1}V^*$ ([[thm-singular-value-decomposition]]).

## Proof

1.1 Apply [F1] to the fixed matrix $B=(AA^*)^qA$, which has the same dimensions as $A$ and uses the same Gaussian sketch dimensions. By [F3], its singular values are $\sigma_j(B)=\sigma_j(A)^{2q+1}$, including zero singular values. [given, F1, F3]

2.1 Substitute the resulting bound for $\mathbb E\|(I-QQ^*)B\|_2$ into the transfer inequality [F2]. Taking the nonnegative $1/(2q+1)$ power gives exactly the displayed expression. [step 1.1, F2, algebra] ∎
