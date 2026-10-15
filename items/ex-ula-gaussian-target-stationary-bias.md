---
id: ex-ula-gaussian-target-stationary-bias
kind: example
title: ULA has a biased invariant variance for a standard Gaussian target
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-normal-law
  - thm-ula-gaussian-target-invariant-law-and-stationary-variance
proof_strategy: direct
axiom_use: "AC is inherited through the Gaussian target and ULA normal noise. The comparison is an explicit variance calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §3.3"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "The quadratic-target computation is checked against the source; the invariant-law and variance arguments are recorded in the local theorem."
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §3.1"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
      locator: "Complete 5-page note inspected; §3.1 discusses step-size bias for the Gaussian target."
---

## Example

Assume AC. Take the standard Gaussian target $\pi=N(0,1)$, potential $U(x)=x^2/2$,
and ULA step size $\gamma=1$. Its invariant law is $N(0,2)$, so the
unadjusted chain does not preserve the target variance.

## Facts & Assumptions

**Given:** AC, the standard Gaussian target, and ULA with $\gamma=1$.

[A1] AC is assumed in the standard-normal target and fresh ULA-noise construction. [[def-axiom-of-choice]]

[F1] Under this potential, $\nabla U(x)=x$ and the update is $X'=\sqrt2 Z$, independent of the current state, where $Z\sim N(0,1)$. [[alg-unadjusted-langevin-algorithm]] [[def-standard-normal-and-normal-laws]]

[F2] For every $0<\gamma<2$, the Gaussian ULA invariant law is $N(0,2/(2-\gamma))$, and its variance is $2/(2-\gamma)$. [[thm-ula-gaussian-target-invariant-law-and-stationary-variance]]

[F3] The target $N(0,1)$ has variance $1$. [[lem-characteristic-function-of-a-normal-law]]

## Verification

**Given:** AC; the standard Gaussian target and $\gamma=1$.

1.1 Substituting $\gamma=1$ in [F2] gives the invariant law $N(0,2)$ and variance $2$. Equivalently, [F1] shows every transition row equals $N(0,2)$, so this law is invariant directly. [A1, F1, F2, given, algebra]

2.1 By [F3], the target has variance $1$. Since the invariant law in step 1.1 has variance $2$, the two laws differ. The choice $\gamma=1$ is interior to $0<\gamma<2$, the regime of the invariant-law theorem. [A1, F3, step 1.1, algebra] ∎
