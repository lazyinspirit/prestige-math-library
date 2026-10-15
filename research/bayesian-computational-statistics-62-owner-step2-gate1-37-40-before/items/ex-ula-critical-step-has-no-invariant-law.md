---
id: ex-ula-critical-step-has-no-invariant-law
kind: example
title: At the critical quadratic ULA step size, no invariant law exists
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-characteristic-function-of-a-real-random-variable
  - def-standard-normal-and-normal-laws
  - lem-basic-properties-of-characteristic-functions
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
proof_strategy: direct
axiom_use: "AC is inherited from the standard-normal law. The contradiction uses only characteristic-function identities and continuity."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §3.3"
      url: "https://arxiv.org/pdf/1507.05021v3"
      locator: "The local counterexample analyzes the scalar quadratic potential at the boundary step size directly; it is not used in the source's small-step theorem."
---

## Example

Let $U(x)=x^2/2$ on $\mathbb R$ and set $\gamma=2$ in ULA. Then the update
is $X'=-X+2Z$ for a fresh independent $Z\sim N(0,1)$. This Markov kernel has
no invariant probability law.

## Facts & Assumptions

**Given:** AC; the ULA update for $U(x)=x^2/2$ at $\gamma=2$.

[A1] AC is assumed in the standard-normal construction. [[def-axiom-of-choice]] [[def-standard-normal-and-normal-laws]]

[F1] For $U(x)=x^2/2$, $\nabla U(x)=x$, so the ULA update at $\gamma=2$ is $X'=-X+2Z$, with fresh independent $Z\sim N(0,1)$. [[alg-unadjusted-langevin-algorithm]] [[def-standard-normal-and-normal-laws]]

[F2] Affine maps and sums of independent variables transform characteristic functions by $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$ and by multiplication. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]

[F3] Every characteristic function has $\varphi(0)=1$, is continuous, and satisfies $\varphi(-t)=\overline{\varphi(t)}$. [[def-characteristic-function-of-a-real-random-variable]] [[lem-basic-properties-of-characteristic-functions]]

[F4] The standard normal characteristic function is $e^{-t^2/2}$. [[lem-characteristic-function-of-a-normal-law]]

## Verification

**Given:** The update and facts above.

1.1 Suppose for contradiction that an invariant probability $\mu$ exists and write $\varphi$ for its characteristic function. Invariance of the kernel in [F1], together with the affine characteristic-function identity [F2] and the standard-normal characteristic function [F4], gives for every real $t$, $$\varphi(t)=\varphi(-t)e^{-2t^2}.$$ [A1, F1, F2, F4, given]

2.1 By [F3], $|\varphi(-t)|=|\varphi(t)|$. For each $t\ne0$, the displayed identity implies $|\varphi(t)|=|\varphi(t)|e^{-2t^2}$, and $e^{-2t^2}<1$ forces $\varphi(t)=0$. Thus $\varphi$ vanishes at every nonzero $t$, contradicting continuity at zero and $\varphi(0)=1$ from [F3]. No invariant probability can exist. [F3, step 1.1, algebra] ∎