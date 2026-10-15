---
id: ex-boundary-normal-mean-truncated-posterior
kind: example
title: At a boundary, the normal posterior limit is truncated
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-standard-normal-and-normal-laws
  - def-total-variation-distance-for-probability-laws
  - lem-normal-density-has-total-mass-one
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-portmanteau-theorem
justified_by: []
proof_strategy: direct
axiom_use: "AC is used for the standard-normal law and the iid CLT. The exact posterior calculation and total-variation witness are choice-free."
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
    - title: "Natalia Bochkina, Bernstein-von Mises theorem and misspecified models: a review, §1.4.1"
      url: "https://www.maths.ed.ac.uk/~nbochkin/ReviewBvMmisspecifiedBochkinaRevision.pdf"
---

## Example

Let $X_i$ be IID $N(0,1)$, let the working model be $N(\theta,1)$ with
$\Theta=[0,\infty)$, and put an exponential prior with density
$\pi(\theta)=e^{-\theta}\mathbf1_{[0,\infty)}(\theta)$. The truth
$\theta^*=0$ is on the boundary. The exact posterior of
$H_n=\sqrt n\theta$ is a normal law truncated to $[0,\infty)$, so it cannot
approach the untruncated Gaussian LAN approximation in total variation.

## Facts & Assumptions

**Given:** AC; IID standard-normal data; the normal-mean likelihood on $[0,\infty)$; and the exponential prior in the Example.

[A1] [[def-axiom-of-choice]]: AC is used for the standard-normal law and the iid central limit theorem.

[F1] [[def-standard-normal-and-normal-laws]], [[lem-normal-density-has-total-mass-one]]: $\phi(x)=e^{-x^2/2}/\sqrt{2\pi}$ is a probability density, and its translates are the normal location laws used here.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The observations are mutually independent and share the standard-normal law.

[F3] [[thm-lindeberg-levy-iid-central-limit-theorem]]: IID, mean-zero, variance-one observations have $\sqrt n\bar X\Rightarrow N(0,1)$.

[F4] [[thm-portmanteau-theorem]]: Under weak convergence, probabilities converge on Borel sets whose boundary has zero probability under the limit law.

[F5] [[def-total-variation-distance-for-probability-laws]]: The distance is the supremum of event-probability differences.

## Verification

**Given:** The model and prior in the Example. Write $\Delta_n=\sqrt n\bar X$.

1.1 The prior is proper because $\int_0^\infty e^{-\theta}d\theta=1$. The local log-likelihood ratio is exactly $\ell_n(h/\sqrt n)-\ell_n(0)=h\Delta_n-h^2/2$ for $h\ge0$, so the local Gaussian candidate is the untruncated $N(\Delta_n,1)$. The center $\theta^*=0$ is a boundary point of $\Theta=[0,\infty)$, not an interior point. [F1, F2, given, algebra]

1.2 Transform the posterior variable by $h=\sqrt n\theta$. Its unnormalized density on $h\ge0$ is proportional to $\exp(h\Delta_n-h^2/2-h/\sqrt n)$. Completing the square gives $\exp[-\tfrac12(h-(\Delta_n-n^{-1/2}))^2]$. Thus the posterior is $N(\Delta_n-n^{-1/2},1)$ conditioned on $[0,\infty)$, and assigns probability zero to $(-\infty,0)$. [F1, given, algebra]

2.1 By [F5], the total-variation distance from $N(\Delta_n,1)$ is at least its mass on $(-\infty,0)$, namely $\Phi(-\Delta_n)$. On $\{\Delta_n\le0\}$ this bound is at least $1/2$. The event $(-\infty,0]$ is a continuity set for $N(0,1)$, so [F3] and [F4] give $P_0(\Delta_n\le0)\to1/2$. Therefore the total-variation error is at least $1/2$ with limiting probability at least $1/2$, and it does not converge to zero in probability. [A1, F2, F3, F4, F5, step 1.2, given, algebra] ∎
