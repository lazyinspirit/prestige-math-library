---
id: ex-qsm-nonnormal-tracial-spin-state
kind: example
title: Unique tracial KMS state is not vacuum normal
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - thm-qsm-onsite-product-kms
  - thm-qsm-product-thermal-state-nonnormal
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  thm-qsm-onsite-product-kms: mathematical-premise
  thm-qsm-product-thermal-state-nonnormal: mathematical-premise
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, printed pp. 74–77 (KMS strip and finite Gibbs states)
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §5, printed p. 10 (normal states); Chapter 2 §1, pp. 17–18 (quasi-local spin algebras)
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Example

Let $q\ge2$, $\Gamma=\mathbb Z^d$ with $d\ge1$, and take the zero onsite Hamiltonian $h=0$. For every $\beta>0$, the unique quasi-local KMS state has local densities
$$\rho_\Lambda=q^{-|\Lambda|}I_\Lambda.$$
It is tracial on the full quasi-local algebra, but has no normal extension to the finite-excitation vacuum representation.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the local spin algebra, and the zero onsite model.

[A1] Countable Choice is the completion assumption carried by [[def-qsm-local-spin-algebras]] and [[thm-qsm-onsite-product-kms]] ([[def-countable-choice]]).

[F1] [[thm-qsm-onsite-product-kms]]: for $h=0$, $r=q^{-1}I$ and the unique KMS state has local density $q^{-|\Lambda|}I_\Lambda$.

[F2] [[thm-qsm-product-thermal-state-nonnormal]]: if $q\ge2$ and the onsite density is full rank, this KMS state has no normal extension to $\mathcal B(\mathcal H_{\mathrm{vac}})$.

[F3] [[def-qsm-local-spin-algebras]]: every pair of local observables embeds into a common finite-region matrix algebra, where the finite trace is cyclic.

[F4] [[def-qsm-quasilocal-spin-algebra]]: the strictly local algebra is $\mathcal A_{\mathrm{loc}}=\bigcup_{\Lambda\subseteq\Gamma,\,|\Lambda|<\infty}\mathcal A_\Lambda$, and the quasi-local algebra is its norm completion $\mathcal A=\overline{\mathcal A_{\mathrm{loc}}}^{\,\|\cdot\|}$; therefore strictly local observables are norm dense in $\mathcal A$.

## Verification
**Proof technique:** direct.

**Given:** [A1], [F1]–[F4], and arbitrary local observables.

1.1 For $h=0$, the density is $r=q^{-1}I$, so $r^{\otimes\Lambda}=q^{-|\Lambda|}I_\Lambda$ and [F1] identifies this state as the unique $\beta$-KMS state under the Countable Choice hypothesis [A1]. [A1, F1, given, algebra]

2.1 If $A,B$ are local, embed them into a common finite region $\Lambda$ using [F3]. Then $$\omega(AB)=q^{-|\Lambda|}\operatorname{Tr}_\Lambda(AB)=q^{-|\Lambda|}\operatorname{Tr}_\Lambda(BA)=\omega(BA),$$ by finite-matrix trace cyclicity. [F1, F3, step 1.1, algebra]

3.1 For arbitrary $A,B\in\mathcal A$, norm density from [F4] and Countable Choice [A1] give local sequences $A_n\to A$ and $B_n\to B$. Their norms are bounded, and
$$\|A_nB_n-AB\|\le\|A_n-A\|\,\|B_n\|+\|A\|\,\|B_n-B\|\longrightarrow0,$$
with the same estimate after exchanging $A_n,B_n$ and $A,B$. Boundedness of the state then gives $\omega(A_nB_n)\to\omega(AB)$ and $\omega(B_nA_n)\to\omega(BA)$. Step 2.1 gives equality at each $n$, so $\omega(AB)=\omega(BA)$; the state is tracial on the full algebra. [A1, F1, F4, step 2.1, algebra]

4.1 Here $p_0=\langle0,r0\rangle=1/q$, which satisfies $0<p_0<1$. Thus [F2] applies and the unique tracial KMS state is not normal in the finite-excitation vacuum representation. [F1, F2, step 1.1] ∎

