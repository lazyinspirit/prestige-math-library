---
id: "thm-bayes-formula-for-dominated-kernels"
kind: "theorem"
title: "Bayes formula for dominated kernels"
deps: ["thm-conditional-density-formula", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "def-measure-kernel-and-probability-kernel", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

Let $\pi$ be a prior probability on $(E,\mathcal S)$ and let $Q:E\to T$ be a probability kernel dominated by a sigma-finite measure $\nu$ on $(T,\mathcal T)$, with specified nonnegative jointly measurable density $\ell:E\times T\to[0,\infty]$:
$$Q(\theta,B)=\int_B\ell(\theta,y)\,\nu(dy)\quad\text{for every }\theta\in E,\ B\in\mathcal T.$$

Define $m(y)=\int_E\ell(\theta,y)\,\pi(d\theta)$. Under the joint law with density $\ell$ relative to $\pi\times\nu$, a conditional law of the parameter given the observation is
$$K(y,A)=\begin{cases}\displaystyle\frac{\int_A\ell(\theta,y)\,\pi(d\theta)}{m(y)},&0<m(y)<\infty,\\ \pi(A),&m(y)=0\text{ or }m(y)=\infty.\end{cases}$$

The observation marginal is $m\,d\nu$, and the filled fibres have marginal mass zero. This is a choice-free assertion about the explicit kernel and event identities.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] A jointly measurable joint density gives a conditional kernel with fixed probability filling on both zero and infinite normalizers. [[thm-conditional-density-formula]].

[F2] Tonelli evaluates the total joint mass and its rectangles on the sigma-finite product. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F3] Every likelihood section has probability mass one. [[def-measure-kernel-and-probability-kernel]].

[F4] The nonnegative joint density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

## Proof

**Proof technique:** direct.

1.1 The measure $\pi$ is finite and therefore sigma-finite; $\nu$ is sigma-finite by hypothesis. For each $\theta$, [F3] and the specified density identity give $\int_T\ell(\theta,y)\,\nu(dy)=Q(\theta,T)=1$. By [F4] the formula $\lambda(C)=\int_C\ell\,d(\pi\times\nu)$ defines a measure. Tonelli [F2] gives $$\lambda(E\times T)=\int_E\left(\int_T\ell(\theta,y)\,\nu(dy)\right)\pi(d\theta)=\int_E1\,d\pi=1.$$ Thus it is a joint probability. For a rectangle $A\times B$, the same theorem gives $\lambda(A\times B)=\int_A Q(\theta,B)\,\pi(d\theta)$, so its first marginal is exactly the prior. [F2, F3, F4]

2.1 Apply [F1] with $\mu=\pi$, density $p=\ell$, and supplied filler $\rho=\pi$. All hypotheses were checked in step 1.1: the product is sigma-finite, the density is jointly measurable and nonnegative, and its total mass is one. The resulting normalizer is exactly m and the resulting kernel is the displayed K. The theorem gives its measurable evaluations, pointwise probability sections, marginal $\beta=m\,d\nu$, and $\beta(\{m=0\}\cup\{m=\infty\})=0$. It also gives $\lambda(A\times B)=\int_BK(y,A)\,\beta(dy)$ and hence the conditional law on the coordinate probability space. In particular $K(y,\varnothing)=0$ and $K(y,E)=1$ both on good fibres and on filled fibres. No quotient at either excluded endpoint is used. [step 1.1, F1] ∎
