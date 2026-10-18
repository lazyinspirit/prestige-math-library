---
id: lem-it-flat-spectral-type-information-approximation
kind: lemma
title: Exact flat spectral-type reduction of channel information
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - lem-it-finite-mixture-entropy-bounds
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-quantum-coherent-information-complement-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-natural-logarithm-laws
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-it-finite-classical-kl-nonnegative-equality
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: ai-altered
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

Let $\mathcal N:\mathcal L(A)\to\mathcal L(B)$ be a finite-dimensional channel, let $d=\dim A$, and let $\rho$ be a state on $A$. Fix a finite Stinespring dilation of $\mathcal N$ and its complementary channel. For each integer $n\ge1$ there is an exact decomposition $\rho^{\otimes n}=\sum_t p_t\tau_t$ into mutually orthogonal flat spectral-type states, with at most $(n+1)^d$ positive-weight types and $H(T):=-\sum_{t:p_t>0}p_t\ln p_t\le d\ln(n+1)$. For the fixed complement and its tensor powers, $$\sum_t p_t I_c(\tau_t,\mathcal N^{\otimes n})\ge nI_c(\rho,\mathcal N)-H(T),$$ $$\sum_t p_t[S(\tau_t)+I_c(\tau_t,\mathcal N^{\otimes n})]\ge n[S(\rho)+I_c(\rho,\mathcal N)]-2H(T).$$ Thus in each inequality some flat type state attains at least the displayed lower bound.

## Facts & Assumptions

**Given:** The channel $\mathcal N:\mathcal L(A)\to\mathcal L(B)$, its fixed finite Stinespring dilation and complementary channel, and the state $\rho$ on its input space $A$. The finite type variable $T$ has probabilities $p_t$ and natural-log Shannon entropy $H(T)=-\sum_{p_t>0}p_t\ln p_t$.

[F1] [[lem-it-finite-mixture-entropy-bounds]]: Entropy bounds for a finite mixture of states.

[F2] [[def-it-quantum-channel-complement-and-coherent-information]]: Complementary channels and coherent information.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely.

[F4] [[lem-it-quantum-coherent-information-complement-identity]]: $I_c(\sigma,\mathcal M)=S(\mathcal M(\sigma))-S(\mathcal M^c(\sigma))$ for the fixed dilation.

[F5] [[thm-natural-logarithm-laws]]: $\ln(xy)=\ln x+\ln y$ for positive $x,y$.

[F6] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] and [[lem-it-finite-classical-kl-nonnegative-equality]]: $H(p)=-\sum_{p_i>0}p_i\ln p_i$, and $D(p\|q)\ge0$ for finite probability vectors.

## Proof

1.1 Write $\rho=\sum_{j=1}^d\lambda_j|j\rangle\langle j|$, including zero eigenvalues. For each count vector $t=(n_1,\ldots,n_d)$ with $\sum_j n_j=n$, let $m_t$ be the number of product basis words of that type, $p_t=m_t\prod_{j:n_j>0}\lambda_j^{n_j}$ (zero if any such $\lambda_j=0$), and omit types with $p_t=0$. Let $P_t$ project onto the span of the words of type $t$ and set $\tau_t=P_t/m_t$. These states are flat, their supports are mutually orthogonal, and $$\rho^{\otimes n}=\sum_{t:p_t>0}p_t\tau_t.$$ There are at most $(n+1)^d$ types. If $N_T$ is their number and $u$ is the uniform law on them, [F6] gives $0\le D(p\|u)=\ln N_T-H(T)$, so $H(T)\le d\ln(n+1)$. Since $S(\tau_t)=\ln m_t$, the logarithm product law [F5] and $\sum_t p_t n_j=n\lambda_j$ yield $$\sum_t p_tS(\tau_t)=\sum_t p_t\ln m_t=nS(\rho)-H(T).$$ [F1, F2, F3, F5, F6, given, algebra, construct]

2.1 Let $B_t=\mathcal N^{\otimes n}(\tau_t)$ and $E_t=(\mathcal N^c)^{\otimes n}(\tau_t)$, with averages $\bar B=\sum_tp_tB_t=\mathcal N(\rho)^{\otimes n}$ and $\bar E=\sum_tp_tE_t=\mathcal N^c(\rho)^{\otimes n}$. By [F4], the receiver-minus-environment entropy identity applies to each type. The lower mixture bound [F1] gives $\sum_tp_tS(B_t)\ge S(\bar B)-H(T)$, while its upper bound gives $\sum_tp_tS(E_t)\le S(\bar E)$. Product spectral decompositions and [F5] give $S(\bar B)-S(\bar E)=n[S(\mathcal N(\rho))-S(\mathcal N^c(\rho))]=nI_c(\rho,\mathcal N)$. Hence $$\sum_tp_t I_c(\tau_t,\mathcal N^{\otimes n})\ge nI_c(\rho,\mathcal N)-H(T).$$ Adding $\sum_tp_tS(\tau_t)=nS(\rho)-H(T)$ from step 1.1 gives the second inequality. [F1, F2, F3, F4, F5, given, algebra, construct, step 1.1]

3.1 Each displayed left side in step 2.1 is an average over the finite positive-probability types, so at least one type attains at least the corresponding average lower bound. These are exact finite-$n$ estimates; no replacement of fixed-dimensional continuity by a uniform bound is involved. [step 2.1, given, algebra] ∎
