---
id: cor-ip-gaussian-map-equals-tikhonov-minimizer
kind: corollary
title: "Finite Gaussian MAP, posterior mean, and support-restricted Tikhonov minimizer coincide"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - thm-ip-finite-linear-gaussian-posterior
  - lem-ip-singular-gaussian-support-and-pseudoinverse
  - def-moore-penrose-pseudoinverse
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
proof_strategy: direct
axiom_use: "AC is inherited from the finite Gaussian posterior theorem and the library's Gaussian-law construction. The support-restricted quadratic minimization and square-completion argument use no stronger choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, printed pp. 127–131 (PDF pp. 129–133), especially equations (13.2)–(13.4): the source proves the full-rank isotropic Gaussian special case; the weighted, singular-support extension is proved locally."
    - title: "M. Dashti and A. M. Stuart, The Bayesian Approach to Inverse Problems (full lecture notes, arXiv:1302.6989)"
      url: "https://arxiv.org/pdf/1302.6989"
      locator: "§§3.1–3.2 for the posterior density convention. The MAP/Tikhonov minimizer identity is derived locally for positive-definite noise covariance and singular finite prior covariance."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC and let $n,m\ge1$, $m_0\in\mathbb R^n$,
$C_0\in\mathbb R^{n\times n}$ symmetric with $v^TC_0v\ge0$ for all
$v\in\mathbb R^n$,
$A\in\mathbb R^{m\times n}$, and
$\Gamma\in\mathbb R^{m\times m}$ symmetric with $u^T\Gamma u>0$ for all
nonzero $u\in\mathbb R^m$. Let
$X\sim N_n(m_0,C_0)$ and $\eta\sim N_m(0,\Gamma)$ be independent, and
observe $Y=AX+\eta$. Put
$S_0=m_0+\operatorname{Ran}(C_0)$ and
$r=\dim\operatorname{Ran}(C_0)$. The $r$-dimensional Euclidean Lebesgue
measure on $S_0$ is the pushforward of Lebesgue measure on $\mathbb R^r$
under any affine isometry onto $S_0$; this measure is independent of the
chosen orthonormal coordinates. A MAP point means a maximizer of the
posterior density with respect to this measure; for $r=0$, the unique point
of $S_0$ is the MAP point. The Moore–Penrose pseudoinverse $C_0^\dagger$
satisfies
$$ C_0C_0^\dagger C_0=C_0,\qquad C_0^\dagger C_0C_0^\dagger=C_0^\dagger, $$
and $C_0C_0^\dagger$ and $C_0^\dagger C_0$ are symmetric. The optimization
below is restricted to $S_0$. Then for every $y\in\mathbb R^m$, the unique
MAP point equals the posterior mean and the unique minimizer over $x\in S_0$ of
$$ J_y(x)=(Ax-y)^T\Gamma^{-1}(Ax-y) +(x-m_0)^TC_0^\dagger(x-m_0). $$
All objects are finite-dimensional; no minimization over points outside the
prior support is asserted when $C_0$ is singular.

## Statement references

[[thm-ip-finite-linear-gaussian-posterior|The finite Gaussian posterior mean and covariance are given by the displayed conditioning formulas.]]

[[lem-ip-singular-gaussian-support-and-pseudoinverse|A singular Gaussian prior is supported on the mean plus the covariance range, and its pseudoinverse has range coordinates.]]

[[def-moore-penrose-pseudoinverse|The pseudoinverse is characterized by the four Penrose equations.]]

## Facts & Assumptions

**Given:** AC; the finite linear Gaussian inverse model with $C_0\succeq0$, $\Gamma\succ0$, and the support and MAP conventions in the Statement.

[A1] AC is inherited from the finite Gaussian posterior and multivariate-normal interfaces. [[def-axiom-of-choice]]

[F1] The posterior update is the finite Gaussian law with the stated mean and covariance, defined for every datum. [[thm-ip-finite-linear-gaussian-posterior]]

[F2] There are orthonormal range coordinates $C_0=U\Lambda U^T$, $C_0^\dagger=U\Lambda^{-1}U^T$, and the prior support is $m_0+\operatorname{Ran}(U)$. [[lem-ip-singular-gaussian-support-and-pseudoinverse]]

[F3] The Moore–Penrose pseudoinverse is characterized by the four Penrose equations. [[def-moore-penrose-pseudoinverse]]

[F4] A finite-dimensional non-negative matrix has a unique non-negative square root, and a non-negative self-adjoint matrix has an orthonormal eigenbasis. [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]

[F5] The Tikhonov objective is $\|Dz-b\|_2^2+\lambda\|z\|_2^2$ for $\lambda>0$. [[def-tikhonov-regularised-least-squares]]

[F6] For this objective the unique minimizer is $(D^TD+\lambda I)^{-1}D^Tb$. [[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]

[F7] A positive-definite Gaussian law has a density proportional to its positive quadratic exponential. [[thm-nondegenerate-multivariate-normal-law-has-density]]

## Proof
**Given:** The hypotheses in the Statement.

1.1 If $r=0$, [F2] gives $C_0=0$ and $S_0=\{m_0\}$. The posterior is the point mass at $m_0$ by [F1], so its mean and unique MAP point are $m_0$. The objective $J_y$ has only this admissible point, hence it has the same unique minimizer on $S_0$. [F1, F2, given, algebra]

1.2 Suppose $r>0$. By [F2], choose $U,\Lambda$ with $C_0=U\Lambda U^T$, $C_0^\dagger=U\Lambda^{-1}U^T$, and write $L=U\Lambda^{1/2}$. The map $z\mapsto m_0+Lz$ is a bijection from $\mathbb R^r$ onto $S_0$. For $x=m_0+Lz$, $(x-m_0)^TC_0^\dagger(x-m_0)=z^Tz$. [F2, F3, given, algebra, construct]

2.1 Let $W$ be the non-negative square root of $\Gamma^{-1}$. Since $\Gamma\succ0$, $W$ is symmetric positive definite and $W^TW=\Gamma^{-1}$ by [F4]. Set $D=WAL$ and $b=W(y-Am_0)$. Substituting $x=m_0+Lz$ into the objective in the Statement gives $J_y(m_0+Lz)=\|Dz-b\|_2^2+\|z\|_2^2$. This is the Tikhonov objective in [F5] with $\lambda=1$, so [F6] gives the unique minimizer $\widehat z=(D^TD+I_r)^{-1}D^Tb$. [F4, F5, F6, step 1.2, algebra]

3.1 By the Gaussian representation in [F2], the prior coordinate $z$ has standard Gaussian density. The likelihood is proportional to $\exp(-\tfrac12\|Dz-b\|_2^2)$ by [F7]. Thus the posterior density in $z$ is proportional to $\exp[-\tfrac12(\|Dz-b\|_2^2+\|z\|_2^2)]$. Its precision matrix $H=I_r+D^TD$ is positive definite, and completing the square gives a Gaussian density with mean $H^{-1}D^Tb=\widehat z$ and covariance $H^{-1}$. This density has its unique maximum at its mean. The affine bijection in step 1.2 has constant positive Jacobian in orthonormal coordinates on $S_0$, so its image has the unique MAP point $\widehat x=m_0+L\widehat z$. Its posterior mean is also $m_0+L\widehat z$, and step 2.1 makes this point the unique minimizer of $J_y$ on $S_0$. [A1, F1, F2, F7, step 1.2, step 2.1, algebra] ∎
