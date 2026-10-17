---
id: pthm-qsm-commuting-grand-response
kind: physics-theorem
title: Commuting quantum grand responses
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Conditional grand-canonical model for self-adjoint energy and number operators with a common eigenbasis and
  local joint-moment envelope; noncommuting energy-number ensembles and experimental claims are excluded.
deps:
- def-axiom-of-choice
- post-qsm-band-and-grand-preparation
- thm-qsm-trace-gibbs-variational
- thm-tdmath-grand-response-covariance
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qsm-band-and-grand-preparation: physical-assumption
  thm-qsm-trace-gibbs-variational: mathematical-premise
  thm-tdmath-grand-response-covariance: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 23, Canonical and Grand Canonical Formulations
    url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf
  - title: J. W. Gibbs, Elementary Principles in Statistical Mechanics, Chapter IV, The Canonical Distribution
    url: https://archive.org/download/elementaryprinci00gibbuoft/elementaryprinci00gibbuoft.pdf
---

## Statement

Assume the Axiom of Choice. Let $H$ and $N$ be self-adjoint energy and dimensionless number operators with a specified common orthonormal eigenbasis $u_j$, $Hu_j=E_ju_j$, $Nu_j=n_ju_j$. Let $\beta>0$ have units J$^{-1}$, let $\mu$ have units J, and let $(\beta,\mu)$ vary in an open parameter set $U$ where
$
\Xi(\beta,\mu)=\sum_j e^{-\beta(E_j-\mu n_j)}<\infty.
$
On every compact subset of $U$, assume a summable envelope dominates
$
e^{-\beta(E_j-\mu n_j)}(1+|E_j|^2+|n_j|^2)
$
uniformly in $j,\beta,\mu$. Under the commuting grand preparation of [[post-qsm-band-and-grand-preparation]], set $p_j=e^{-\beta(E_j-\mu n_j)}/\Xi$ and write $\langle X\rangle=\sum_jp_jX_j$. Then
$
\partial_\mu\log\Xi=\beta\langle N\rangle,\qquad
\partial_\mu\langle N\rangle=\beta\operatorname{Var}(N)\geq0,
\qquad
-\partial_\beta\log\Xi\big|_\mu=\langle H-\mu N\rangle.
$
In the natural parameters $(\theta_E,\theta_N)=(-\beta,\beta\mu)$, the Hessian of $\log\Xi$ is the covariance matrix of $(H,N)$, hence positive semidefinite. This result is conditional on the common eigenbasis and envelope; it does not cover noncommuting $H,N$, assert thermalization, or report measurements.

## Facts & Assumptions

**Given:** The Axiom of Choice; a common eigenbasis and self-adjoint domains for $H,N$; the adopted grand preparation; an open finite-normalization parameter set and the stated compact joint-moment envelopes.

[A1] [[def-axiom-of-choice]]: full Choice is retained by the unbounded spectral-calculus closure; no weaker axiom strength is claimed.

[F1] [[post-qsm-band-and-grand-preparation]]: the adopted grand state is diagonal with weights proportional to $e^{-\beta(E_j-\mu n_j)}$, and response calculations require the joint-moment envelope.

[F2] [[thm-qsm-trace-gibbs-variational]]: for a bounded-below self-adjoint operator whose Gibbs exponential is trace class on an open positive-$\beta$ interval, the normalized exponential is a faithful normal density state.

[L1] [[thm-tdmath-grand-response-covariance]]: for the counting-measure model with weight one, $X_j=(E_j,n_j)$ and natural parameter $\theta=(-\beta,\beta\mu)$, positive finite partition function and compact-parameter summable exponential second-moment envelopes give gradient of $\log\Xi$ equal to the mean and Hessian equal to covariance. The parameter change is a diffeomorphism for $\beta>0$, so the assumed envelopes transfer locally to these natural parameters.

## Proof

1.1 At each parameter pair, the postulate gives $p_j>0$ and $\sum_jp_j=1$; the open compact-envelope hypothesis makes $e^{-\beta(H-\mu N)}$ trace class locally, so [F2] supplies the corresponding normal density interpretation. Its spectral expectation of each moment-controlled diagonal observable is the displayed absolutely convergent weighted sum. [given, A1, F1, F2, algebra]

1.2 To differentiate the countable partition function in either natural parameter, apply the scalar mean-value theorem to each exponential difference quotient. Its absolute value is bounded by the corresponding $|E_j|$ or $|n_j|$ factor times the exponential at an intermediate parameter; the assumed envelope dominates these terms and all second derivative terms. Since that envelope is summable, dominated convergence for series permits termwise first and second differentiation. The quotient rule then gives $\nabla_{(\theta_E,\theta_N)}\log\Xi=(\langle H\rangle,\langle N\rangle)$ and Hessian entries $\langle X_aX_b\rangle-\langle X_a\rangle\langle X_b\rangle$, for $X=(H,N)$, exactly the canonical response interface [L1]. [given, F1, L1, algebra]

2.1 Since $\theta_E=-\beta$ and $\theta_N=\beta\mu$, at fixed $\beta$, $\partial_\mu=\beta\partial_{\theta_N}$, so $\partial_\mu\log\Xi=\beta\langle N\rangle$ and $\partial_\mu\langle N\rangle=\beta\operatorname{Var}(N)$. At fixed $\mu$, $\partial_\beta\log\Xi=-\langle H\rangle+\mu\langle N\rangle$, giving the stated grand-energy identity. A covariance matrix is positive semidefinite because $c^T\operatorname{Cov}(X)c=\langle(c\cdot(X-\langle X\rangle))^2\rangle\geq0$. These are predictions conditional on the adopted preparation and the stated common-basis and moment-envelope hypotheses. [step 1.2, F1, L1, algebra] ∎
