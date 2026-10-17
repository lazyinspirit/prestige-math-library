---
id: ex-xd-birth-death-uniformization-detailed-balance
kind: example
title: "A three-state birth–death generator and detailed balance"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-xd-finite-column-generator
  - alg-corrected-stationary-residual-certificate
  - cor-uniformized-generator-stationary-residual-certificate
  - lem-detailed-balance-implies-invariance
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
      locator: "§11.3, invariant laws and finite birth–death examples, printed pp. 432–445."
    - title: "Yuanyuan Liu, Perturbation Bounds for the Stationary Distributions of Markov Chains"
      url: "https://arxiv.org/pdf/1208.4974"
      locator: "§1, stationary vectors and finite transition matrices, PDF pp. 1–2."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

On states $\{0,1,2\}$, let the birth rates be $2$ from 0 to 1 and $2$ from 1 to 2, and the death rates be $1$ from 1 to 0 and $1$ from 2 to 1. The column generator, uniformization matrix at $\nu=3$, and stationary probability are

$$Q=\begin{pmatrix}-2&1&0\\2&-3&1\\0&2&-1\end{pmatrix},\qquad P=I+Q/3=\begin{pmatrix}1/3&1/3&0\\2/3&0&1/3\\0&2/3&2/3\end{pmatrix},\qquad \pi=(1,2,4)^{\mathsf T}/7.$$

Detailed balance verifies the law. Moreover, $\delta(P^2)=2/9$, so the stationary residual certificate is available, and at $x=\pi$ its bound is zero.

## Verification

**Given:** The displayed column generator Q, rate $\nu=3$, matrix P, probability vector $\pi$, and raw candidate $y=\pi$.

[F1] [[def-xd-finite-column-generator]]: off-diagonal generator entries are nonnegative, columns sum to zero, and the source column's exit rate is $r_j=-Q_{jj}$.

[F2] [[alg-corrected-stationary-residual-certificate]]: a nonnegative normalized input is unchanged by correction, so the output candidate is $x=y$ with correction distance $c=0$.

[F3] [[cor-uniformized-generator-stationary-residual-certificate]]: for an admissible uniformization with $q=\delta(P^m)<1$, the corrected raw candidate y satisfies $\|y-\pi\|_1\le c+m\|Qx\|_1/(\nu(1-q))$.

[F4] [[lem-detailed-balance-implies-invariance]]: for a row transition matrix K and finite state measure $\mu$ satisfying $\mu_iK_{ij}=\mu_jK_{ji}$, one has $\mu K=\mu$; if its mass is one, it is an invariant probability.

**Proof technique:** direct exact calculation; set $K=P^{\mathsf T}$.

1.1 The off-diagonal entries of Q are nonnegative and its columns sum to zero; the exit rates are $2,3,1$. Thus $\nu=3$ is admissible in [F1]. Directly, $P=I+Q/3$ is the displayed nonnegative matrix and its columns each sum to one. [given, F1, algebra]

2.1 The coordinates of $\pi$ are nonnegative and sum to one. In the row kernel K, $\pi_0K_{01}=(1/7)(2/3)=2/21=\pi_1K_{10}$ and $\pi_1K_{12}=(2/7)(2/3)=4/21=\pi_2K_{21}$; the reverse equalities hold, all non-neighbor flows are zero in both directions, and diagonal balance is automatic. Therefore [F4] gives the row law $\pi^{\mathsf T}K=\pi^{\mathsf T}$, equivalently $P\pi=\pi$. Direct multiplication also gives $Q\pi=0$. [F1, F4, step 1.1, algebra]

3.1 Multiplication gives $P^2=\begin{pmatrix}1/3&1/9&1/9\\2/9&4/9&2/9\\4/9&4/9&2/3\end{pmatrix}$. Each pair of distinct columns has overlap $7/9$, and each self-pair has overlap $1$; hence the minimum overlap is $7/9$ and the coefficient is $q=1-7/9=2/9<1$ for $m=2$. With raw candidate $y=\pi$, [F2] gives $x=\pi$ and $c=0$; also $Qx=0$. Applying [F3] certifies the exact stationary law with error bound zero. [F2, F3, step 2.1, algebra] ∎
