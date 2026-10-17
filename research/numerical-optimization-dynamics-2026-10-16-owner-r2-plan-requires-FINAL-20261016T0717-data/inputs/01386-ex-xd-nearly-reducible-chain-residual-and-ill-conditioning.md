---
id: ex-xd-nearly-reducible-chain-residual-and-ill-conditioning
kind: example
title: "A small residual can hide a large stationary error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - lem-dobrushin-zero-sum-l1-coefficient
  - thm-m-step-dobrushin-stationary-residual-bound
  - alg-corrected-stationary-residual-certificate
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§§11.1–11.3, printed pp. 405–445; stationary distributions and transition matrices."
    - title: "Ilse C. F. Ipsen and Teresa M. Selee, Ergodicity Coefficients Defined by Vector Norms"
      url: "https://ipsen.math.ncsu.edu/ps/simax75294.pdf"
      locator: "§3, Theorem 3.7 and Corollary 3.9, PDF pp. 12–13; pairwise column-overlap coefficient."
verification:
  precheck: pass
---

## Example

For $0<\varepsilon\ll1$, consider the two-state column-stochastic matrix

$$P_\varepsilon=\begin{pmatrix}1-\varepsilon&\varepsilon\\\varepsilon&1-\varepsilon\end{pmatrix}.$$

It has stationary law $\pi=(1/2,1/2)^{\mathsf T}$. Take $\varepsilon=1/100$ and candidate $x=(3/4,1/4)^{\mathsf T}$. The residual is small, while the stationary error is $1/2$. The exact Dobrushin certificate is sharp and exposes the large inverse factor.

## Verification

**Given:** The displayed matrix with $\varepsilon=1/100$ and the candidate vector $x=(3/4,1/4)^{\mathsf T}$.

[F1] [[lem-dobrushin-zero-sum-l1-coefficient]]: $\delta(P)=1-\min_{j,k}\sum_i\min(P_{ij},P_{ik})$ for a column-stochastic matrix.

[F2] [[thm-m-step-dobrushin-stationary-residual-bound]]: if $q=\delta(P^m)<1$, then $\|x-\pi\|_1\le m\|Px-x\|_1/(1-q)$.

[F3] [[alg-corrected-stationary-residual-certificate]]: for a nonnegative normalized candidate, correction distance is zero and the algorithm returns the residual, overlap coefficient, and bound when that coefficient is below one.

**Proof technique:** direct exact calculation.

1.1 Direct multiplication gives $P\pi=\pi$ for $\pi=(1/2,1/2)^{\mathsf T}$. The candidate x is nonnegative and sums to one, so its correction distance is $c=0$. [given, F3, algebra]

2.1 The first coordinate of $Px$ is $(99/100)(3/4)+(1/100)(1/4)=149/200$, and the second is $51/200$. Hence $r=Px-x=(-1/200,1/200)^{\mathsf T}$ and $\|r\|_1=1/100$, while $\|x-\pi\|_1=1/2$. [given, step 1.1, algebra]

3.1 The columns are $(99/100,1/100)^{\mathsf T}$ and $(1/100,99/100)^{\mathsf T}$; their overlap is $1/50$. Thus [F1] gives $q=\delta(P)=49/50<1$. With $m=1$, [F2] gives the exact bound $(1/100)/(1/50)=1/2$, equal to the actual error. [F1, F2, step 2.1, algebra] ∎
