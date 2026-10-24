---
id: ex-hmc-leapfrog-harmonic-resonance
kind: example
title: A Gaussian harmonic leapfrog resonance
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-leapfrog-hamiltonian-monte-carlo
  - def-axiom-of-choice
  - def-hamiltonian-monte-carlo
  - def-leapfrog-step-map
  - def-standard-normal-and-normal-laws
  - def-integral-of-a-nonnegative-simple-function
  - def-integral-over-a-measurable-set
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "AC is inherited from the HMC normal-momentum and Metropolis-Hastings interfaces."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Radford M. Neal, MCMC Using Hamiltonian Dynamics, Handbook of Markov Chain Monte Carlo, Chapter 5"
      url: "https://sites.stat.columbia.edu/gelman/bayescomputation/Neal2011.pdf"
    - title: "Michael Betancourt, A Conceptual Introduction to Hamiltonian Monte Carlo"
      url: "https://arxiv.org/pdf/1701.02434"
---

## Example

For $U(q)=q^2/2$, $M=1$, $\epsilon=\sqrt2$, and $L=4$, the leapfrog trajectory returns exactly to its initial phase point before the momentum flip. The accepted position therefore never moves; starting at $q=0$ is a trapped state although the standard-normal target assigns positive probability to $[1,2]$.

## Facts & Assumptions

**Given:** AC, the one-dimensional HMC target $N(0,1)$, unit mass, step size $\epsilon=\sqrt2$, and $L=4$ leapfrog steps.

[F1] The one-step map is the composition of a half force kick, full drift, and half force kick. [[def-leapfrog-step-map]]

[F2] The HMC proposal flips momentum and accepts according to the Hamiltonian difference. [[alg-leapfrog-hamiltonian-monte-carlo]]

[F3] Under AC, the standard-normal density is $(2\pi)^{-1/2}e^{-q^2/2}$. [[def-standard-normal-and-normal-laws]]

[F4] The HMC proposal is the momentum flip composed with the $L$-step leapfrog map, and its correction uses the Hamiltonian difference. [[alg-leapfrog-hamiltonian-monte-carlo]]

[F5] AC implies Countable Choice, the assumption needed for the Lebesgue box measure used below. [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F6] The exponential is positive and strictly increasing, and under Countable Choice $\lambda_1([1,2])=1$. [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F7] The probability of a Borel set is the integral of its density; the nonnegative integral is monotone, and a constant $c\ge0$ integrates over $E$ to $c\lambda(E)$. [[def-integral-over-a-measurable-set]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[def-integral-of-a-nonnegative-simple-function]]

## Proof
**Proof technique:** exact matrix multiplication.

1.1 For $U'(q)=q$ and $M=1$, the half kick and drift matrices are $$K_{\epsilon/2}=\begin{pmatrix}1&0\\-\epsilon/2&1\end{pmatrix},\qquad D_\epsilon=\begin{pmatrix}1&\epsilon\\0&1\end{pmatrix}.$$ Multiplication in the order from [F1] gives $$A=K_{\epsilon/2}D_\epsilon K_{\epsilon/2}=\begin{pmatrix}1-\epsilon^2/2&\epsilon\\-\epsilon(1-\epsilon^2/4)&1-\epsilon^2/2\end{pmatrix}.$$ [F1, algebra]

2.1 Substituting $\epsilon=\sqrt2$ gives $A=\begin{pmatrix}0&\sqrt2\\-\sqrt2/2&0\end{pmatrix}$ and direct multiplication yields $A^2=-I_2$, hence $A^4=I_2$. Thus after four steps $(q_4,p_4)=(q,p)$. By [F4] the flipped proposal is $(q,-p)$, whose Hamiltonian equals the initial Hamiltonian because $K$ is even. [F1, F4, step 1.1, algebra]

3.1 By [F2], acceptance is one and every returned position equals the input $q$. Starting at $q=0$ therefore gives law $\delta_0$ at every iteration. On $[1,2]$, the density [F3] is at least $(2\pi)^{-1/2}e^{-2}>0$, so [F6] and [F7] give target mass at least $(2\pi)^{-1/2}e^{-2}\lambda_1([1,2])=(2\pi)^{-1/2}e^{-2}>0$. Thus the chain remains trapped at a point while the target is not a point mass. [F2, F3, F5, F6, F7, step 2.1, algebra] ∎
