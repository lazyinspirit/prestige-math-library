---
id: cor-rayleigh-quotient-extreme-eigenvalue-characterisation
kind: corollary
title: "The smallest and largest eigenvalues of a self-adjoint endomorphism are the minimum and maximum Rayleigh quotients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rayleigh-quotient, thm-courant-fischer-min-max-principle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "MIT 18.409, Lecture 3: Courant-Fischer and Rayleigh quotients"
      url: "https://ocw.mit.edu/courses/18-409-topics-in-theoretical-computer-science-an-algorithmists-toolkit-fall-2009/535add3f6457cc13e51d9774f16bf48f_MIT18_409F09_scribe3.pdf"
---

## Statement

If $T$ is self-adjoint on a nonzero finite-dimensional real inner product space and its
eigenvalues are ordered as

$$\lambda_1\ge\cdots\ge\lambda_n,$$

then

$$\lambda_1=\max_{v\ne0} R_T(v)\qquad\text{and}\qquad \lambda_n=\min_{v\ne0} R_T(v).$$

## Facts & Assumptions

**Given:** A self-adjoint endomorphism $T$ on a nonzero finite-dimensional real inner product space.

[L1] Courant-Fischer gives $\lambda_k=\min_{\dim W=n-k+1}\max_{0\ne v\in W}R_T(v)=\max_{\dim U=k}\min_{0\ne v\in U}R_T(v)$ ([[thm-courant-fischer-min-max-principle]]).

## Proof

**Proof technique:** direct.

1.1 Taking $k=1$ in [L1] gives $\lambda_1=\max_{\dim U=1}\min_{0\ne v\in U}R_T(v)=\max_{v\ne0}R_T(v)$, because every one-dimensional subspace consists of the nonzero scalar multiples of any one of its nonzero vectors. [L1]

2.1 Taking $k=n$ in [L1] gives $\lambda_n=\min_{\dim W=1}\max_{0\ne v\in W}R_T(v)=\min_{v\ne0}R_T(v)$ for the same reason. [L1] ∎
