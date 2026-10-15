---
id: thm-ula-gaussian-target-invariant-law-and-stationary-variance
kind: theorem
title: The Gaussian ULA invariant law has variance $2/(2-\gamma)$
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-jacobian-matrix-and-gradient
  - def-moments-variance-and-covariance
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - thm-factorization-of-expectations-for-independent-variables
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-cauchy-schwarz-for-random-variables
proof_strategy: direct
axiom_use: "AC is inherited through the standard-normal law and characteristic-function uniqueness; no other choice is used."
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
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §3.3, Gaussian-target calculation"
      url: "https://arxiv.org/pdf/1507.05021v3"
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §3.1"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
---

## Statement

Assume AC, let $U(x)=x^2/2$ on $\mathbb R$, and let $\pi=N(0,1)$. For every
$0<\gamma<2$, the one-dimensional ULA kernel of
[[alg-unadjusted-langevin-algorithm]] has the invariant probability
$$\pi_\gamma=N\!\left(0,\frac{2}{2-\gamma}\right).$$
Every invariant probability with finite second moment has variance
$2/(2-\gamma)$. Thus its invariant variance is not the target variance $1$.
No uniqueness claim is made for invariant laws without a finite second moment.

## Facts & Assumptions

**Given:** AC, the standard Gaussian target, and the ULA update with $U(x)=x^2/2$.

[A1] AC is assumed in the standard-normal construction and characteristic-function uniqueness. [[def-axiom-of-choice]]

[F1] For this potential, $\nabla U(x)=x$ and the ULA update is $X'=(1-\gamma)X+\sqrt{2\gamma}Z$, where $Z\sim N(0,1)$ is independent of the current state. [[alg-unadjusted-langevin-algorithm]] [[def-jacobian-matrix-and-gradient]]

[F2] The normal-law convention is [[def-standard-normal-and-normal-laws]]; the characteristic function of $N(m,v)$ is $\exp(imt-vt^2/2)$, and its mean and variance are $m$ and $v$. [[lem-characteristic-function-of-a-normal-law]] [[def-moments-variance-and-covariance]]

[F3] Affine transforms and finite independent sums multiply the corresponding characteristic functions. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]

[F4] Equal characteristic functions determine equal Borel probability laws. [[thm-uniqueness-of-a-law-from-its-characteristic-function]]

[F5] For independent square-integrable variables, expectations factor and finite linear combinations commute with expectation. [[thm-factorization-of-expectations-for-independent-variables]] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F6] A square-integrable variable is integrable by Cauchy–Schwarz on a probability space. [[cor-cauchy-schwarz-for-random-variables]]

## Proof

**Given:** AC, $0<\gamma<2$, and the ULA transition in [F1].

1.1 Set $v_\gamma=2/(2-\gamma)>0$ and let $X\sim N(0,v_\gamma)$ be independent of $Z\sim N(0,1)$. By [F2]–[F3], the updated state has characteristic function $$\varphi_{X'}(t)=\exp\!\left(-\frac{(1-\gamma)^2v_\gamma t^2}{2}\right)\exp(-\gamma t^2) =\exp\!\left(-\frac{((1-\gamma)^2v_\gamma+2\gamma)t^2}{2}\right).$$ Direct algebra gives $(1-\gamma)^2v_\gamma+2\gamma=v_\gamma$, so [F2] and [F4] imply $X'\sim N(0,v_\gamma)$. This proves that $\pi_\gamma$ is invariant. [A1, F1, F2, F3, F4, algebra]

2.1 Let $X$ have any invariant law with finite second moment, independently of the fresh standard normal $Z$. By [F6], $X$ is integrable, and [F5] gives $$\operatorname{Var}(X')=(1-\gamma)^2\operatorname{Var}(X)+2\gamma,$$ because $\operatorname{Var}(Z)=1$ and the cross-covariance of the independent variables is zero. Invariance gives $\operatorname{Var}(X')=\operatorname{Var}(X)$, so $$\operatorname{Var}(X)=\frac{2\gamma}{1-(1-\gamma)^2}=\frac{2}{2-\gamma}.$$ Since $\gamma>0$, this exceeds $1$. [F1, F2, F5, F6, algebra] ∎