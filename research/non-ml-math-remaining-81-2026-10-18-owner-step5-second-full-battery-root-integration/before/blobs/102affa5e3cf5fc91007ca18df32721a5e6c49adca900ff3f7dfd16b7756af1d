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
- thm-qc-trace-norm-duality-and-norm-properties
- thm-qc-hermitian-trace-norm-positive-negative-parts
- thm-complex-spectral-theorem-for-normal-endomorphisms
- def-it-von-neumann-entropy
- def-it-classical-quantum-state-and-holevo-information
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-finite-jensen-inequality
- thm-logarithm-slower-than-every-positive-power
- thm-exponential-beats-every-polynomial
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

[F6] [[thm-qc-trace-norm-duality-and-norm-properties]] and [[thm-qc-trace-norm-unitary-invariance-and-positive-formula]]: the trace norm satisfies the triangle inequality, and for positive operators it equals the trace.

[F7] [[thm-natural-logarithm-laws]] and [[thm-logarithm-derivative-and-integral]]: the natural logarithm product law and derivative formula.

[F8] [[thm-finite-jensen-inequality]] and [[def-it-classical-quantum-state-and-holevo-information]]: finite Jensen for convex functions and the entropy formula for Holevo information.

[F9] [[thm-logarithm-slower-than-every-positive-power]]: $\ln x/x\to0$ as $x\to\infty$.

[F10] [[thm-exponential-beats-every-polynomial]]: a polynomial factor times $e^{-cn}$ tends to zero for each fixed $c>0$.

[F11] [[thm-qc-hermitian-trace-norm-positive-negative-parts]]: if a Hermitian operator has trace zero, its positive and negative parts have equal trace, each half its trace norm.

[F12] [[def-it-von-neumann-entropy]]: $S(\omega)=-\sum_{\lambda>0}\lambda\ln\lambda$, so a density operator has nonnegative entropy.

## Proof

1.1 The trace norm is nonnegative and, by [F6], $\|\rho-\sigma\|_1\le\|\rho\|_1+\|\sigma\|_1=2$; hence $t\in[0,1]$. If $t=0$, equality of the states settles the claim. Otherwise [F11] says the positive and negative parts of $\rho-\sigma$ have trace $t$. Normalize them to states $\omega_+,\omega_-$. Then $$\theta=\frac{\rho+t\omega_-}{1+t}=\frac{\sigma+t\omega_+}{1+t}.$$ Apply the lower mixture-entropy bound to the first representation and upper bound to the second. After multiplication by $1+t$ this gives $$S(\rho)-S(\sigma)\le t\bigl[S(\omega_+)-S(\omega_-)\bigr]+(1+t)h(t/(1+t))\le t\ln d+g(t).$$ Here $S(\omega_+)\le\ln d$ by [F2], while $S(\omega_-)\ge0$ by [F12]. Interchanging the states gives the absolute-value bound. Dimension one causes no exception. For $t>0$, [F7] gives $g'(t)=\ln(1+1/t)>0$ and $g''(t)=-1/[t(1+t)]<0$. Moreover $t\ln t\to0$ as $t\downarrow0$ by [F9], so $g$ is continuous on $[0,1]$ with the stated endpoint value. Jensen for $g$ follows from [F8] applied to the convex function $-g$, including the endpoint. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F11, F12, given, algebra, construct]

2.1 For each $m$, let $t_m=T(\sigma_m,\sigma)$. By step 1.1, $0\le t_m\le1$, so $a=M^{-1}\sum_m t_m\in[0,1]$. The average state $\bar\sigma=M^{-1}\sum_m\sigma_m$ satisfies $T(\bar\sigma,\sigma)\le a$ by the trace-norm triangle inequality [F6]. Applying step 1.1 to $\bar\sigma$ gives a bound with its actual distance $t'\le a$; since $g$ is increasing and $\ln d\ge0$, its right side is at most $a\ln d+g(a)$. Applying step 1.1 to each $\sigma_m$, averaging, and using finite Jensen [F8] for concave $g$ gives the other $a\ln d+g(a)$. The Holevo formula [F8] therefore yields $$\chi(\{M^{-1},\sigma_m\})=S(\bar\sigma)-\frac1M\sum_mS(\sigma_m)\le2a\ln d+2g(a).$$ When $d=d_E^n$ and $a\le Ce^{-cn}$, the first term tends to zero by [F10], and the second tends to zero by continuity of $g$ at zero from step 1.1. [F1, F2, F3, F4, F5, F6, F8, F10, step 1.1, given, algebra, construct] ∎
