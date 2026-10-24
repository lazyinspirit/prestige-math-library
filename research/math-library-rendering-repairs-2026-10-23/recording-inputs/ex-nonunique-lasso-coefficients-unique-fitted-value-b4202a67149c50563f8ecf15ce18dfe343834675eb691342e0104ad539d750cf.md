---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-nonunique-lasso-coefficients-unique-fitted-value.json
  precheck: pass
id: ex-nonunique-lasso-coefficients-unique-fitted-value
kind: example
title: "Nonunique Lasso coefficients with a unique fitted value"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-lasso-estimator
  - def-soft-thresholding-function
  - lem-lasso-objective-has-minimizer
  - lem-na-coordinate-soft-threshold-minimizer
  - lem-of-triangle-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §2"
      url: "https://arxiv.org/html/1502.04759v1"
    - title: "Clément Royer, Regularized, Large-Scale and Distributed Optimization, Lecture 3, §3.3"
      url: "https://www.lamsade.dauphine.fr/~croyer/ensdocs/RLD/LectureNotesOML-RLD.pdf"
---

## Example

Take one observation, two identical columns $X=[1\;1]$, response $y=1$, and Lasso penalty $\tau=1/4$ in [[def-lasso-estimator]]. The minimizing coefficient set is exactly
$$\{(\theta_1,\theta_2):\theta_1,\theta_2\ge0,\ \theta_1+\theta_2=3/4\},$$
so the coefficients are not unique while the fitted value is always $X\theta=3/4$.

## Facts & Assumptions

**Given:** $n=1$, $d=2$, $X=[1\;1]$, $y=1$, and $\tau=1/4$.

[F1] [[def-lasso-estimator]]: $Q_y(\theta)=(1-\theta_1-\theta_2)^2+2\tau(|\theta_1|+|\theta_2|)$.

[F2] [[lem-lasso-objective-has-minimizer]]: for this positive-penalty fixed-design Lasso, the global minimizer set is nonempty.

[F3] [[lem-na-coordinate-soft-threshold-minimizer]]: $\tfrac12s^2-bs+\lambda|s|$ has unique minimizer $S_\lambda(b)$ when $\lambda>0$.

[F4] [[def-soft-thresholding-function]]: $S_\lambda(b)=b-\lambda$ for $b>\lambda$.

[F5] [[lem-of-triangle-inequality]]: $|u+v|\le|u|+|v|$ for real $u,v$.

## Proof

1.1 Put $s=\theta_1+\theta_2$. [F5] gives $|\theta_1|+|\theta_2|\ge|s|$, hence by [F1], $Q_y(\theta)\ge(1-s)^2+\tfrac12|s|=2(\tfrac12s^2-s+\tfrac14|s|)+1$. By [F3]--[F4], the scalar bracket is uniquely minimized at $s=S_{1/4}(1)=3/4$. [F1, F3, F4, F5, given, algebra]

2.1 Equality in $|\theta_1|+|\theta_2|\ge|\theta_1+\theta_2|$ holds when the two coefficients have the same sign or one is zero. Since the minimizing sum is positive, every nonnegative pair summing to $3/4$ attains the lower bound from step 1.1; every minimizer must have that sum and equality, so the displayed set is exact. It contains distinct points $(3/4,0)$ and $(0,3/4)$, and both fit to $3/4$. [F1, F2, step 1.1, algebra] ∎

## Remarks

Finite check assertion: for the one-row design with columns 1 and 1 and coefficient direction `[1,-1]`, the fitted direction is zero, so moving along this null direction preserves the fitted value while the Gram matrix is rank deficient.

The closed segment below is the entire minimizing coefficient set from step 2.1. Under $X:\mathbb R^2\to\mathbb R$, $X\theta=\theta_1+\theta_2$, every point of this segment has the same image. The proof above is independent of the illustration.

```tikz
\begin{tikzpicture}[scale=1.15]
\draw[->] (0,0) -- (3.6,0) node[right] {$\theta_1$};
\draw[->] (0,0) -- (0,3.6) node[above] {$\theta_2$};
\node[below left] at (0,0) {$0$};
\draw[very thick] (0,3) -- (3,0);
\fill (0,3) circle (2pt);
\fill (3,0) circle (2pt);
\node[left] at (0,3) {$3/4$};
\node[below] at (3,0) {$3/4$};
\node[above right] at (1.45,1.55) {$\theta_1+\theta_2=3/4$};
\draw[->,thick] (3.4,1.45) -- (5.3,1.45) node[midway,above] {$X=[1\;1]$};
\fill (5.65,1.45) circle (2pt);
\node[right] at (5.65,1.45) {$3/4\in\mathbb R$};
\end{tikzpicture}
```
