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

Let $q\ge2$, $\Gamma=\mathbb Z^d$ with $d\ge1$, and take the zero Hermitian onsite Hamiltonian $h=0\in M_q(\mathbb C)$ in joules. Fix any $\hbar>0$ in joule-seconds and let $\beta>0$ have units inverse joules. The onsite dynamics is $\alpha_t(A)=A$ for $t\in\mathbb R$ in seconds, and the KMS strip has width $\beta\hbar$ seconds, with the convention of [[thm-qsm-onsite-product-kms]]. For every such $\beta$, the unique quasi-local KMS state has local densities
$$\rho_\Lambda=q^{-|\Lambda|}I_\Lambda.$$
It is tracial on the full quasi-local algebra, but has no normal extension to the finite-excitation vacuum representation.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the local spin algebra, and the zero onsite model with the energy, time, positive hbar and inverse-energy beta conventions just specified.

[A1] Countable Choice is the completion assumption carried by [[def-qsm-local-spin-algebras]] and [[thm-qsm-onsite-product-kms]] ([[def-countable-choice]]).

[F1] [[thm-qsm-onsite-product-kms]]: under $\mathrm{AC}_\omega$ and its finite-matrix hypotheses [A2], for $h=0$, $r=q^{-1}I$ and the unique KMS state has local density $q^{-|\Lambda|}I_\Lambda$. Those finite-matrix hypotheses are the clauses in [F3] below.

[F2] [[thm-qsm-product-thermal-state-nonnormal]]: under $\mathrm{AC}_\omega$ and the same finite-matrix hypotheses retained from [F1], if $q\ge2$ and the onsite Gibbs density is full rank, this KMS state has no normal extension to $\mathcal B(\mathcal H_{\mathrm{vac}})$.

[F3] [[def-qsm-local-spin-algebras]], Definition: every finite region $\Lambda$ has a nonzero complex Hilbert space $\mathcal H_\Lambda$ of dimension $q^{|\Lambda|}$, with inner product linear in the first argument, and $\mathcal A_\Lambda=\mathcal B(\mathcal H_\Lambda)$ with the induced operator norm. Its finite-matrix clauses give $\|T^*T\|=\|T\|^2$; positive complex-linear functionals are exactly $T\mapsto\operatorname{Tr}_\Lambda(\rho T)$ for unique $\rho\ge0$, with functional norm $\operatorname{Tr}_\Lambda\rho$, so normalization is equivalent to trace one. These clauses are supplied by the proved finite-matrix lemma cited in that Definition, including the empty region of dimension one. Every pair of local observables embeds into a common finite-region matrix algebra, where the finite trace is cyclic.

[F4] [[def-qsm-quasilocal-spin-algebra]]: the strictly local algebra is $\mathcal A_{\mathrm{loc}}=\bigcup_{\Lambda\subseteq\Gamma,\,|\Lambda|<\infty}\mathcal A_\Lambda$, and the quasi-local algebra is its norm completion $\mathcal A=\overline{\mathcal A_{\mathrm{loc}}}^{\,\|\cdot\|}$; therefore strictly local observables are norm dense in $\mathcal A$.

## Verification
**Proof technique:** direct.

**Given:** [A1], [F1]–[F4], and arbitrary local observables.

1.1 For every finite region, $q^{|\Lambda|}\ge1$, so the finite-matrix clauses in [F3] apply and discharge exactly the C*-identity and positive-functional/density hypotheses of [F1]. Together with Countable Choice [A1], $h=0=h^*$, $\beta>0$ and $\hbar>0$, these meet its hypotheses. Since $e^{-\beta h}=I$ and $\operatorname{Tr}I=q$, the density is $r=q^{-1}I$, so $r^{\otimes\Lambda}=q^{-|\Lambda|}I_\Lambda$, and [F1] identifies its extension as the unique $\beta$-KMS state. [A1, F1, F3, given, algebra]

2.1 If $A,B$ are local, embed them into a common finite region $\Lambda$ using [F3]. Then $$\omega(AB)=q^{-|\Lambda|}\operatorname{Tr}_\Lambda(AB)=q^{-|\Lambda|}\operatorname{Tr}_\Lambda(BA)=\omega(BA),$$ by finite-matrix trace cyclicity. [F1, F3, step 1.1, algebra]

3.1 For arbitrary $A,B\in\mathcal A$, norm density from [F4] and Countable Choice [A1] give local sequences $A_n\to A$ and $B_n\to B$. Their norms are bounded, and
$$\|A_nB_n-AB\|\le\|A_n-A\|\,\|B_n\|+\|A\|\,\|B_n-B\|\longrightarrow0,$$
with the same estimate after exchanging $A_n,B_n$ and $A,B$. Boundedness of the state then gives $\omega(A_nB_n)\to\omega(AB)$ and $\omega(B_nA_n)\to\omega(BA)$. Step 2.1 gives equality at each $n$, so $\omega(AB)=\omega(BA)$; the state is tracial on the full algebra. [A1, F1, F4, step 2.1, algebra]

4.1 The density $r=q^{-1}I$ has all eigenvalues $1/q>0$, hence is full rank, and its reference diagonal entry is $p_0=1/q\in(0,1)$ because $q\ge2$. Countable Choice [A1] and the finite-matrix clauses [F3] were discharged in step 1.1 for this same onsite model. Thus every hypothesis retained in [F2] holds, and the unique tracial KMS state has no normal extension in the finite-excitation vacuum representation. [A1, F2, F3, step 1.1, step 3.1, given, algebra] ∎

