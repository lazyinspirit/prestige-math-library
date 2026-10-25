---
id: ex-correlated-gaussian-noise-orthogonal-reduction
kind: example
title: Orthogonal reduction of a correlated two-dimensional Gaussian channel
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [ def-axiom-of-choice, def-parallel-gaussian-channel-with-power-constraint, def-standard-normal-and-normal-laws, lem-gaussian-noise-orthogonalization, thm-orthogonal-transform-preserves-standard-normal-product-law, thm-parallel-awgn-feedback-capacity-water-filling ]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is used for the normal law and the published orthogonal-normal invariance theorem.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.4"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Lecture 4"
      url: https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf
---

## Example

Assume AC. Let
$$U=\frac1{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix},\qquad K=U^T\begin{pmatrix}1&0\\0&4\end{pmatrix}U=\begin{pmatrix}5/2&3/2\\3/2&5/2\end{pmatrix}.$$
For the channel $Y=X+Z$ with $Z\sim N_2(0,K)$ and total power budget $P=2$, the transformed noise $UZ$ has independent variances $1$ and $4$, the input energy is preserved, and both feedback and no-feedback capacities equal $\frac12\ln3$ nats per vector use.

## Facts & Assumptions

**Given:** The matrix $U$, covariance $K$, AC, the Gaussian channel, and power budget $P=2$.

[A1] [[def-axiom-of-choice]] and [[def-standard-normal-and-normal-laws]]: the scalar standard-normal law is used under AC and has density $(2\pi)^{-1/2}e^{-x^2/2}$.

[A2] [[def-parallel-gaussian-channel-with-power-constraint]]: the noise is additive with covariance $K$ and the power cost is $\|X\|_2^2$.

[F1] [[lem-gaussian-noise-orthogonalization]]: an orthogonal matrix diagonalizes the Gaussian covariance, the transformed components are independent, and squared norm is preserved.

[F2] [[thm-orthogonal-transform-preserves-standard-normal-product-law]]: under AC, an orthogonal transformation preserves the independent standard-normal product law.

[F3] [[thm-parallel-awgn-feedback-capacity-water-filling]]: a parallel Gaussian channel has feedback and no-feedback capacity equal to the water-filled allocation value.

## Verification

1.1 Direct multiplication gives $U^TU=I_2$ and $U^T\operatorname{diag}(1,4)U=\frac12\begin{pmatrix}5&3\\3&5\end{pmatrix}=K$, hence $UKU^T=\operatorname{diag}(1,4)$, so $K$ is positive definite with eigenvalues $1,4$. The diagonalization argument of [F1], applying [F2] to the underlying independent standard-normal vector, gives that $UZ$ has independent coordinates with variances $1,4$. For every input, $\|UX\|_2^2=X^TU^TUX=\|X\|_2^2$ and $U(X+Z)=UX+UZ$. [A1, A2, F1, F2, given, algebra]

2.1 Since $P=2<4-1=3$, the water level is $T=1+P=3$: the first branch receives $p_1=T-1=2$ and the second receives $p_2=0$. Substitution in [F3] gives capacity $\frac12\ln(1+2/1)+\frac12\ln(1+0/4)=\frac12\ln3$. The orthogonal code correspondence from step 1.1 transfers this value to the original correlated channel. [F1, F3, step 1.1, given, algebra] ∎
