---
id: lem-it-dimension-dependent-quantum-entropy-continuity
kind: lemma
title: Dimension-dependent quantum entropy continuity and Holevo control
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
- lem-it-finite-mixture-entropy-bounds
- lem-it-quantum-entropy-maximized-at-maximally-mixed-state
- def-qc-trace-distance
- thm-qc-trace-norm-unitary-invariance-and-positive-formula
- thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Write $h(t)=-t\ln t-(1-t)\ln(1-t)$ with continuous endpoints. Let $g(t)=(1+t)\ln(1+t)-t\ln t$ for $t\in[0,1]$, with $g(0)=0$. For states $\rho,\sigma$ on dimension $d\ge1$ and $t=\frac12\|\rho-\sigma\|_1$, $$|S(\rho)-S(\sigma)|\le t\ln d+g(t).$$ Moreover, if $\sigma_1,\ldots,\sigma_M$ are states on that space and $a=M^{-1}\sum_m\frac12\|\sigma_m-\sigma\|_1$, their uniform Holevo information is at most $2a\ln d+2g(a)$. In particular on dimension $d_E^n$, exponential decay of $a$ makes unnormalized Holevo information tend to zero.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[lem-it-finite-mixture-entropy-bounds]]: Entropy bounds for a finite mixture of states.

[F2] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]]: The maximally mixed state maximizes finite quantum entropy.

[F3] [[def-qc-trace-distance]]: Trace Distance.

[F4] [[thm-qc-trace-norm-unitary-invariance-and-positive-formula]]: Trace Norm Unitary Invariance And Positive Formula.

[F5] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely.

## Proof

1.1 If $t=0$, equality of the states settles the claim. Otherwise the positive and negative parts of $\rho-\sigma$ have trace $t$, because that difference has trace zero. Normalize them to states $\omega_+,\omega_-$. Then $$\theta=\frac{\rho+t\omega_-}{1+t}=\frac{\sigma+t\omega_+}{1+t}.$$ Apply the lower mixture-entropy bound to the first representation and upper bound to the second. After multiplication by $1+t$ this gives $$S(\rho)-S(\sigma)\le t\bigl[S(\omega_+)-S(\omega_-)\bigr]+(1+t)h(t/(1+t))\le t\ln d+g(t).$$ Interchanging the states gives the absolute-value bound. Dimension one causes no exception. The function $g$ is increasing and concave: for $t>0$, $g'(t)=\ln(1+1/t)>0$ and $g''(t)=-1/[t(1+t)]<0$; continuity extends Jensen to $t=0$. [F1, F2, F3, F4, F5, given, algebra, construct]

2.1 Consequently, if states $\sigma_m$ on dimension $d$ have average half-distance $a=M^{-1}\sum_m T(\sigma_m,\sigma)$ from one target state $\sigma$, then their uniform Holevo information satisfies $$\chi(\{M^{-1},\sigma_m\})\le2a\ln d+2g(a).$$ Indeed the average state is within $a$ by the triangle inequality; apply the entropy-continuity estimate to its entropy and to the average of the individual entropies, and use Jensen for $g$. This is a proved quantitative implication for this particular finite ensemble, not an identification of secrecy metrics. When $d=d_E^n$ and $a$ decays exponentially, the unnormalized Holevo information tends to zero. [F1, F2, F3, F4, F5, step 1.1, given, algebra, construct] ∎
