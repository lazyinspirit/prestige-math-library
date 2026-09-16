---
id: lem-consistency-of-brownian-finite-dimensional-laws
kind: lemma
title: "Consistency of Brownian finite-dimensional laws"
status: published
origin: pipeline
deps: [lem-positive-semidefiniteness-of-the-brownian-covariance-kernel, def-multivariate-normal-law, lem-characteristic-function-of-a-multivariate-normal-law, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume the Axiom of Choice. For every finite list
$\mathbf t=(t_1,\ldots,t_n)$ of nonnegative times, there is a centered Gaussian
law $\mu_{\mathbf t}$ with covariance
$$\Sigma(\mathbf t)_{ij}=\min(t_i,t_j).$$
These laws are compatible with every coordinate selection map, hence with
permutation, deletion, and repetition of coordinates. The empty list carries
the unique probability law on the singleton empty tuple.

## Facts & Assumptions

**Given:** AC and a finite list of nonnegative times.

[F1] The matrix with entries $\min(t_i,t_j)$ is symmetric positive semidefinite, including for repeated and zero times. [[lem-positive-semidefiniteness-of-the-brownian-covariance-kernel]]

[F2] Assume AC. Every finite-dimensional symmetric positive semidefinite covariance matrix defines a centered, possibly singular multivariate normal law. [[def-multivariate-normal-law]]

[F3] Assume AC. The characteristic function of $N_n(0,\Sigma)$ is $u\mapsto\exp(-u^T\Sigma u/2)$ and uniquely determines its law, including singular $\Sigma$. [[lem-characteristic-function-of-a-multivariate-normal-law]]

## Proof

**Proof technique:** direct.

1.1 For $n=0$, set $\mu_{()}$ equal to the unique law on the singleton empty tuple. For $n\ge1$, [F1] makes $\Sigma(\mathbf t)$ an admissible covariance matrix, so [F2] supplies the centered law $$\mu_{\mathbf t}=N_n(0,\Sigma(\mathbf t)).$$ This remains well-defined when a time is zero, times repeat, or the covariance is singular. [given, F1, F2]

2.1 Let $\theta:\{1,\ldots,m\}\to\{1,\ldots,n\}$ be any map, let $R:\mathbb R^n\to\mathbb R^m$ be the coordinate map $(Rx)_j=x_{\theta(j)}$, and take $X\sim\mu_{\mathbf t}$. For $u\in\mathbb R^m$, [F3] gives $$E e^{iu\cdot RX}=E e^{i(R^Tu)\cdot X}=\exp\!\left(-\tfrac12u^TR\Sigma(\mathbf t)R^Tu\right).$$ The $(j,k)$ entry of $R\Sigma(\mathbf t)R^T$ is $\min(t_{\theta(j)},t_{\theta(k)})$, so [F3] identifies the law of $RX$ with $\mu_{(t_{\theta(1)},\ldots,t_{\theta(m)})}$. The case $m=0$ is the unique empty-tuple law. [step 1.1, F3, algebra]

3.1 A bijective $\theta$ permutes coordinates, an injective coordinate selection deletes the unselected coordinates, and a noninjective $\theta$ repeats coordinates. Thus step 2.1 proves all three promised compatibilities, with both orders of any inverse permutation covered. AC is spent only in the existence and characteristic-function uniqueness suppliers [F2]–[F3]. [step 2.1, F2, F3] ∎

## Source notes

Durrett, Section 7.1 (printed pp. 355–356), constructs the centered Gaussian finite-dimensional laws with covariance $\min(s,t)$ and invokes Kolmogorov extension. The calculation above records the full selection-map consistency needed before that invocation and does not assume nonsingularity or distinct times.
