---
id: cex-qsm-invariant-not-kms
kind: counterexample
title: Stationarity alone does not give quantum thermal equilibrium
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-kms-state
  - def-qsm-local-spin-algebras
  - def-qsm-vacuum-spin-representation
  - lem-qsm-kms-strip-uniqueness
  - thm-qsm-onsite-product-kms
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-vacuum-spin-representation: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  thm-qsm-onsite-product-kms: mathematical-premise
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, printed pp. 74–77 (KMS strip and finite Gibbs states)
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, printed pp. 13–14 (KMS strip condition)
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement refuted

For every $\beta>0$, every stationary state of an infinite quantum spin system is a $\beta$-KMS state for its dynamics. Stationary means $\omega\circ\alpha_t=\omega$ for every real $t$; KMS means the bounded-strip condition of [[def-qsm-kms-state]].

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\Gamma=\mathbb Z^d$ with $d\ge1$, $q\ge2$, the finite-excitation representation, and $\beta>0$.

[A1] Countable Choice is the exact assumption used by the local norm completion and vacuum representation ([[def-countable-choice]], [[def-qsm-vacuum-spin-representation]]).

[F1] [[def-qsm-vacuum-spin-representation]]: $\Omega=e_{s^0}$ is the all-zero configuration vector, and local matrices act on the indicated finite tensor factors in $\pi$.

[F2] [[def-qsm-local-spin-algebras]]: each site algebra contains matrix units $E_x^{ab}$ and projections $E_x^{aa}$.

[F3] [[def-qsm-kms-state]]: a $\beta$-KMS state has a bounded function on the closed physical-time strip with lower edge $\omega(A\alpha_t(B))$ and upper edge $\omega(\alpha_t(B)A)$.

[F4] [[lem-qsm-kms-strip-uniqueness]]: two bounded continuous functions holomorphic inside the strip and equal on the lower edge agree throughout the strip.

[F5] [[thm-qsm-onsite-product-kms]]: its onsite-only interaction sets $\Phi(\{x\})=h_x$ and $\Phi(Z)=0$ for every other finite nonempty $Z$; when $h=0$, the thermodynamic dynamics is the identity and the unique $\beta$-KMS state has one-site density $q^{-1}I$, so it is not the pure all-zero product state.

## Counterexample
Take the onsite model of [[thm-qsm-onsite-product-kms]] with $h=0$ and no other interaction terms: $\Phi(Z)=0$ for every finite nonempty $Z\subseteq\Gamma$. Thus each finite-volume Hamiltonian vanishes and its thermodynamic dynamics is $\alpha_t=\mathrm{id}$ on $\mathcal A$. Define the vector state
$$\omega_0(A):=\langle\pi(A)\Omega,\Omega\rangle.$$
On each finite region its density is the pure product $|0^{\otimes\Lambda}\rangle\langle0^{\otimes\Lambda}|$.

1.1 By the specified interaction, $H_\Lambda=0$ for every finite $\Lambda$, so each finite-volume dynamics is the identity and its thermodynamic limit is $\alpha_t=\mathrm{id}$. Hence $\omega_0(\alpha_t(A))=\omega_0(A)$ for every $A$ and $t$, so $\omega_0$ is stationary. The vector formula is a normalized positive state because $\pi$ is a unital $*$-representation and $\|\Omega\|=1$. [A1, F1, F5, construct]

2.1 At any site $x$, set $A=E_x^{01}$ and $B=E_x^{10}$. Then $AB=E_x^{00}$ and $BA=E_x^{11}$, so $\omega_0(AB)=1$ and $\omega_0(BA)=0$. Therefore $\omega_0$ is not tracial. [F1, F2, step 1.1, algebra]

3.1 If $\omega_0$ were $\beta$-KMS, its correlation function for this pair would have the constant lower boundary $F(t)=1$. The constant function $G(z)=1$ is bounded, continuous and holomorphic on the strip with the same lower edge; [F4] forces $F=G$ throughout, so its upper edge at $t=0$ would also be $1$. But the KMS upper edge equals $\omega_0(BA)=0$, a contradiction. Hence this stationary state is not $\beta$-KMS for any $\beta>0$. [F3, F4, step 2.1]

4.1 By [F5], the unique $\beta$-KMS state of this zero-Hamiltonian model is the tracial product state with one-site density $q^{-1}I$, which differs from $\omega_0$. The counterexample distinguishes stationarity from thermal equilibrium without asserting that every stationary state fails KMS. [F5, step 2.1] ∎

