---
id: thm-general-state-reversibility-implies-invariance
kind: theorem
title: General-state reversibility implies invariance
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, Probability Surveys 1 (2004)"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
      locator: "Section 2, Definition and Proposition 1, PDF pp. 4–5."
    - title: "Sean P. Meyn and Richard L. Tweedie, Markov Chains and Stochastic Stability (1993), Chapter 10"
      url: "https://probability.ca/MT/Chap10.pdf"
      locator: "§10.1.1, Invariant measures, printed pp. 235–237."
---

## Statement

Let $(\mathsf X,\mathcal X)$ be a measurable space, $P$ a probability kernel
([[def-measure-kernel-and-probability-kernel]]) on it, and $\pi$ a probability
measure ([[def-probability-measure]]) on it. If $P$ is reversible with
respect to $\pi$ in the sense of
[[def-general-state-reversibility-by-symmetric-flow-measure]], then $\pi$ is
invariant for $P$: for every $A\in\mathcal X$,

$$\int_{\mathsf X}P(x,A)\,\pi(dx)=\pi(A).$$

## Facts & Assumptions

**Given:** A measurable space $(\mathsf X,\mathcal X)$, a pointwise probability
kernel $P$, and a probability measure $\pi$ for which the joint flow measure
$\Lambda_{\pi,P}$ is symmetric.

[F1] The joint flow measure is the probability measure on the product
sigma-algebra defined by $\Lambda_{\pi,P}(C)=\int P(x,C_x)\,\pi(dx)$, and
reversibility means $\Lambda_{\pi,P}=\Lambda_{\pi,P}^{\top}$ under coordinate
swap. ([[def-general-state-reversibility-by-symmetric-flow-measure]])

[F2] The joint-law construction also gives, for every nonnegative product-
measurable $h$, $\int h\,d\Lambda_{\pi,P}=\int[\int h(x,y)P(x,dy)]\pi(dx)$;
in particular its rectangle formula holds. ([[lem-prior-and-model-kernel-define-joint-law]])

[F3] A probability $\pi$ is invariant for $P$ exactly when
$\int P(x,A)\,\pi(dx)=\pi(A)$ for every measurable $A$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F4] A probability kernel has probability-measure rows and measurable event
evaluations, and a probability measure has total mass one.
([[def-measure-kernel-and-probability-kernel]], [[def-probability-measure]])

## Proof

**Given:** The hypotheses in the statement.

**Proof technique:** Apply the nonnegative kernel-Tonelli identity to the two
marginals of the symmetric joint flow measure.

1.1 Fix $A\in\mathcal X$. By [F2] on $1_{\mathsf X\times A}$, whose section at each $x$ is $A$, $\Lambda_{\pi,P}(\mathsf X\times A)=\int_{\mathsf X}P(x,A)\,\pi(dx)$, a nonnegative integral bounded by one. [F2, F4, given]

1.2 Symmetry [F1] and $\tau^{-1}(\mathsf X\times A)=A\times\mathsf X$ give $\Lambda_{\pi,P}(\mathsf X\times A)=\Lambda_{\pi,P}^{\top}(\mathsf X\times A)=\Lambda_{\pi,P}(A\times\mathsf X)$. [F1, given]

1.3 The rectangle formula [F2] gives $\Lambda_{\pi,P}(A\times\mathsf X)=\int_A P(x,\mathsf X)\,\pi(dx)=\int_A1\,\pi(dx)=\pi(A)$, since each kernel row has mass one by [F4]. [F2, F4, given]

2.1 Steps 1.1, 1.2, and 1.3 give $\int_{\mathsf X}P(x,A)\,\pi(dx)=\pi(A)$ for arbitrary $A$, which is invariance by [F3]. The proof uses only nonnegative indicators, with no density, countability, or standard-Borel hypothesis. [F3, step 1.1, step 1.2, step 1.3, given] ∎
