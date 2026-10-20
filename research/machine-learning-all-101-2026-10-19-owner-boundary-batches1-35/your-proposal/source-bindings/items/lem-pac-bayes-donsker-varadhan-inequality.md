---
id: lem-pac-bayes-donsker-varadhan-inequality
kind: lemma
title: "The PAC-Bayes change-of-measure inequality"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-pac-bayes-prior-and-posterior
  - lem-it-finite-log-sum-inequality
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-addition-formula
  - thm-natural-logarithm-laws
  - thm-exponential-is-strictly-increasing
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses finite measurable partitions and bounded simple approximations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2, Lemma 2.2"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Statement

Let $(\Theta,\mathcal A)$ be a measurable space, let $\pi$ be a probability measure, and let $\rho$ be a probability measure absolutely continuous with respect to $\pi$, meaning that $\pi(A)=0$ implies $\rho(A)=0$ for all $A\in\mathcal A$. Define
$$\mathrm{KL}(\rho\|\pi):=\sup_{\mathcal P}\sum_{A\in\mathcal P}\rho(A)\log\frac{\rho(A)}{\pi(A)},$$
where $\mathcal P$ ranges over finite measurable partitions of $\Theta$, a zero-numerator term is $0$, and a positive numerator over a zero denominator is $+\infty$. For every bounded measurable $f:\Theta\to\mathbb R$,
$$\mathbb E_{\theta\sim\rho}f(\theta)\le \mathrm{KL}(\rho\|\pi)+\log\mathbb E_{\theta\sim\pi}\exp(f(\theta)),$$
with the inequality interpreted as vacuous when $\mathrm{KL}(\rho\|\pi)=+\infty$.

## Statement references

[[def-pac-bayes-prior-and-posterior]]: a posterior is absolutely continuous with respect to the prior, and $\mathrm{KL}$ is the supremum over finite measurable partitions.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on the positive reals.

[[lem-it-finite-log-sum-inequality]]: for finite nonnegative vectors, the sum of coordinatewise relative-entropy terms is at least the corresponding aggregate term.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2, Lemma 2.2](https://arxiv.org/pdf/2110.11216v4): states the Donsker–Varadhan variational formula for bounded measurable functions.

## Facts & Assumptions

**Given:** A measurable space $(\Theta,\mathcal A)$, probability measures $\pi,\rho$ with $\rho\ll\pi$, and a bounded measurable $f:\Theta\to\mathbb R$.

[F1] $\mathrm{KL}(\rho\|\pi)$ is the supremum over finite measurable partitions $\mathcal P$ of $\sum_{A\in\mathcal P}\rho(A)\log(\rho(A)/\pi(A))$, with zero-numerator terms set to $0$. [[def-pac-bayes-prior-and-posterior]]

[F2] If $a_i,b_i\ge0$, $A=\sum_i a_i$, and $B=\sum_i b_i$, then $\sum_{a_i>0}a_i\log(a_i/b_i)\ge A\log(A/B)$, with the stated support conventions. [[lem-it-finite-log-sum-inequality]]

[F3] The real exponential and natural logarithm are defined on the stated domains; the exponential is positive and increasing and satisfies $\exp(u+v)=\exp(u)\exp(v)$, while the natural logarithm is increasing and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$. [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], [[thm-exponential-addition-formula]], [[thm-natural-logarithm-laws]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 First suppose $f$ is finite-valued, with level sets $A_1,\ldots,A_N$ forming a finite measurable partition and values $f_1,\ldots,f_N$. Put $p_j=\pi(A_j)$ and $r_j=\rho(A_j)$. Since $\rho\ll\pi$, $p_j=0$ implies $r_j=0$. Applying [F2] to $a_j=r_j$ and $b_j=p_j\exp(f_j)$, whose sums are $1$ and $\mathbb E_{\pi}\exp(f)$, gives $\sum_{r_j>0}r_j\log\frac{r_j}{p_j\exp(f_j)}\ge -\log\mathbb E_{\pi}\exp(f)$. Expanding the logarithm, the left side is the partition divergence $\sum_j r_j\log(r_j/p_j)-\mathbb E_{\rho}f$. By [F1] it is at most $\mathrm{KL}(\rho\|\pi)-\mathbb E_{\rho}f$; since [F2] bounds it below by $-\log\mathbb E_{\pi}e^f$, we obtain $\mathbb E_{\rho}f\le\mathrm{KL}(\rho\|\pi)+\log\mathbb E_{\pi}e^f$. This proves the claim for finite-valued $f$. [F1, F2, F3, given, algebra]

2.1 For bounded measurable $f$, partition its bounded range into finitely many half-open intervals of width at most $1/n$ (including the last endpoint) and let $f_n$ equal the left endpoint on each preimage; then $f_n$ is finite-valued measurable and $\lVert f_n-f\rVert_\infty\le1/n$. Hence $|\mathbb E_\rho f_n-\mathbb E_\rho f|\le1/n$, and [F3] gives $e^{-1/n}\mathbb E_\pi e^f\le\mathbb E_\pi e^{f_n}\le e^{1/n}\mathbb E_\pi e^f$, so their logarithms differ by at most $1/n$. Apply step 1.1 to each $f_n$ and let $n\to\infty$ to obtain the stated inequality. If $\mathrm{KL}(\rho\|\pi)=+\infty$, it is vacuous. [F1, F3, step 1.1, construct, algebra] ∎
