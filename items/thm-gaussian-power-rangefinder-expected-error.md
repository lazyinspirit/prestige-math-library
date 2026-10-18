---
id: thm-gaussian-power-rangefinder-expected-error
kind: theorem
title: Expected real and normalized complex Gaussian power-rangefinder error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [thm-real-gaussian-power-rangefinder-expected-error, thm-gaussian-rangefinder-expected-spectral-error, thm-randomized-power-rangefinder-error-transfer, alg-randomized-power-subspace-iteration-with-qr, thm-singular-value-decomposition, def-standard-real-and-normalized-complex-gaussian-matrix-law, def-countable-choice, lem-power-rangefinder-projector-is-borel]
proof_strategy: direct
provenance:
  statement: ai-altered
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

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $A\in F^{m\times n}$, $F=\mathbb R$ or $\mathbb C$, with the same
$k\ge2$, $p\ge2$, $\ell=k+p\le\min(m,n)$ and field-normalized Gaussian
draws as in [[thm-gaussian-rangefinder-expected-spectral-error]]. For an
integer $q\ge0$, let $Q$ be the basis returned by
[[alg-randomized-power-subspace-iteration-with-qr]] on $A,\Omega,q$. Equivalently,
for $B=(AA^*)^qA$, $\operatorname{Ran}(Q)=\operatorname{Ran}(B\Omega)$. The corresponding
singular-value bound
$$\mathbb E\|(I-QQ^*)A\|_2\le \left[ \left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1}^{2q+1} +\frac{e\sqrt{k+p}}{p} \left(\sum_{j>k}\sigma_j^{2(2q+1)}\right)^{1/2} \right]^{1/(2q+1)}.$$

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and the fixed matrix, Gaussian field convention, $k,p,\ell$ constraints, and an integer $q\ge0$.

[F1] The real-field powered bound is proved under these hypotheses ([[thm-real-gaussian-power-rangefinder-expected-error]]).

[F2] The shared real and normalized-complex base theorem applies to every fixed matrix in the stated field and parameter range ([[thm-gaussian-rangefinder-expected-spectral-error]]).

[F3] The QR-reorthogonalized procedure returns a measurable basis whose range is $\operatorname{Ran}((AA^*)^qA\Omega)$ ([[lem-power-rangefinder-projector-is-borel]], with range equality proved in [[thm-randomized-power-rangefinder-error-transfer]]).

[F4] For a measurable orthogonal projector onto the output range of that power procedure, the expected error for $A$ is at most the $(2q+1)$th root of its finite expected powered error ([[thm-randomized-power-rangefinder-error-transfer]]).

[F5] If $A=U\Sigma V^*$ is an SVD, then $B=(AA^*)^qA=U\Sigma^{2q+1}V^*$; this includes $q=0$ and zero singular values ([[thm-singular-value-decomposition]]).

[F6] The field-normalized Gaussian draw has iid standard real entries or iid complex entries $(X+iY)/\sqrt2$ with $\mathbb E|g|^2=1$ ([[def-standard-real-and-normalized-complex-gaussian-matrix-law]]).

[A1] Countable Choice is the axiom used for the finite-dimensional Gaussian laws ([[def-countable-choice]]).

## Proof

1.1 If $F=\mathbb R$, [F1] is exactly the displayed bound under the stated hypotheses. [given, F1]

1.2 Suppose $F=\mathbb C$ and put $B=(AA^*)^qA$. By [F3], the output projector $P=QQ^*$ is measurable and projects onto $\operatorname{Ran}(B\Omega)$. By [F5], $B$ has the same dimensions as $A$ and its singular values are $\sigma_j(B)=\sigma_j(A)^{2q+1}$, including zeros. Thus [F2] applied to the fixed matrix $B$ and the same normalized-complex sketch gives $\mathbb E\|(I-P)B\|_2\le\left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1}^{2q+1}+\frac{e\sqrt{k+p}}p\left(\sum_{j>k}\sigma_j^{2(2q+1)}\right)^{1/2}.$ This is the powered-error expectation needed by [F4], and it is finite. [given, F2, F3, F4, F5, F6, A1, algebra]

2.1 Apply the transfer inequality [F4] to the finite bound in step 1.2 and take the nonnegative $1/(2q+1)$ power. This gives exactly the displayed complex-field bound. The case $q=0$ has exponent $1$. If $A=0$ or $\operatorname{rank}(A)\le k$, [F5] makes the powered matrix tails zero; the right side of the [F2] estimate in step 1.2 is then zero, and [F4] gives zero expected target error. [step 1.2, F2, F4, F5, algebra]

3.1 The real and complex field branches are steps 1.1 and 2.1, respectively, and together prove the Statement. [step 1.1, step 2.1] ∎
