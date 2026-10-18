---
id: lem-it-exponential-cq-spectral-projectors
kind: lemma
title: Exponential averaged spectral projectors for a finite cq ensemble
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
- def-it-von-neumann-entropy
- thm-complex-spectral-theorem-for-normal-endomorphisms
- def-it-classical-quantum-state-and-holevo-information
- thm-taylor-schlomilch-roche-remainder
- thm-derivative-of-exponential
- cor-markov-inequality-for-random-variables
- thm-natural-logarithm-laws
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

For every fixed finite ensemble $p_x,\rho_x$ and fixed $\eta>0$, there are constants $C,c>0$ (depending on this ensemble and $\eta$, not $n$) and projectors $P_n,Q_{x^n}$ such that, writing $\bar\rho=\sum p_x\rho_x$ and $s=\sum p_xS(\rho_x)$,
$$\operatorname{rank}P_n\le e^{n(S(\bar\rho)+\eta)},\quad P_n\bar\rho^{\otimes n}P_n\preceq e^{-n(S(\bar\rho)-\eta)}P_n,$$
$$\operatorname{rank}Q_{x^n}\le e^{n(s+\eta)},\quad Q_{x^n}\rho_{x^n}Q_{x^n}\preceq e^{-n(s-\eta)}Q_{x^n},$$
and
$$\mathbb E\operatorname{tr}(\rho_{X^n}(I-P_n))\le Ce^{-cn},\qquad\mathbb E\operatorname{tr}(\rho_{X^n}(I-Q_{X^n}))\le Ce^{-cn}.$$
The second pair of algebraic bounds holds for every word, including words with zero sampling probability; no per-word high-acceptance assertion is required.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[def-it-von-neumann-entropy]]: Finite-dimensional von Neumann entropy.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Complex spectral theorem: a normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis, and conversely.

[F3] [[def-it-classical-quantum-state-and-holevo-information]]: Finite classical-quantum states and Holevo information.

[F4] [[thm-taylor-schlomilch-roche-remainder]]: Taylor's Schlömilch–Roche remainder formula.

[F5] [[thm-derivative-of-exponential]]: The exponential function is smooth and $(\exp)'=\exp$.

[F6] [[cor-markov-inequality-for-random-variables]]: Markov's inequality for random variables.

[F7] [[thm-natural-logarithm-laws]]: the natural logarithm product law converts product eigenvalues into sums of self-information.

## Proof

1.1 For $P_n$, retain product eigenvectors of $\bar\rho^{\otimes n}$ whose positive eigenvalue has negative logarithm in $n[S(\bar\rho)-\eta,S(\bar\rho)+\eta]$. For $Q_{x^n}$, use product eigenvectors of $\rho_{x^n}=\bigotimes_i\rho_{x_i}$ whose eigenvalue has negative logarithm in $n[s-\eta,s+\eta]$. The upper eigenvalue bounds are immediate. The lower retained eigenvalue and trace at most one imply each rank bound. Under the joint law $\Pr(X=x,J=j)=p_x\lambda_{xj}$, with zero-probability eigenvalues omitted, the random variable $Z=-\ln\lambda_{XJ}$ has finite support and mean $s$. By [F7], the negative logarithm of each product eigenvalue is the sum of the coordinate self-information variables, so its IID sum controls the second failure probability exactly. The first failure is the same argument for the spectral law of $\bar\rho$; averaging inputs gives $\bar\rho^{\otimes n}$. [F1, F2, F3, F4, F5, F6, F7, given, algebra, construct]

2.1 For completeness, a finite supported centered variable $Y$ with $|Y|\le b$ obeys $\mathbb E e^{uY}\le1+u^2b^2e^{|u|b}/2$, by the Taylor remainder and $\mathbb EY=0$. For small fixed $u>0$, $\ln\mathbb E e^{uY}<u\eta/2$. Markov's inequality and independence then bound $\Pr(\sum Y_i\ge n\eta)\le e^{-nu\eta/2}$; the logarithm product law [F7] gives the factor $n$ when taking the log of the product moment generating function. Apply the same argument to $-Y$ and add. A constant spectral variable has zero failure probability and needs no division by a range. All logarithms are evaluated only on positive-probability eigenvalues. [F1, F2, F3, F4, F5, F6, F7, step 1.1, given, algebra, construct] ∎
