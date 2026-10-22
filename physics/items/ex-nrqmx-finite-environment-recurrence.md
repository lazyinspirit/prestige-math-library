---
id: ex-nrqmx-finite-environment-recurrence
kind: example
title: A finite bath revives coherence
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - pthm-nrqmx-finite-reduction-channel
  - def-nrqmx-finite-channel-families
  - lem-qsm-matrix-state-calculus
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
dependency_roles:
  pthm-nrqmx-finite-reduction-channel: physical-result
  def-nrqmx-finite-channel-families: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
proof_strategy: direct
physical_scope: "A conditional two-qubit finite-environment unitary model with fixed product preparation. The coherence revival is an exact model prediction, not a reported experiment or a general claim about finite reservoirs."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.3 and 2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
      locator: "Printed pp. 67–69 and Theorem 2.22, printed pp. 82–84: finite reduced states and channels."
    - title: "Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 21, §21.1"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
      locator: "Printed pp. 307–311: finite GKSL dynamics and channel semigroups, used as comparison model context."
---

## Example

For $H_S=H_E=\mathbb C^2$, $Z=\operatorname{diag}(1,-1)$, $g>0$ in $\mathrm{s}^{-1}$, and $\hbar>0$ in joule-seconds, choose $H_{\mathrm{tot}}=\hbar g\,Z\otimes Z$, $U_t=e^{-itH_{\mathrm{tot}}/\hbar}$, and the fixed environment state $|+\rangle\langle+|$ with $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ in the displayed environment $Z$ eigenbasis. Here coherence means an off-diagonal matrix entry in the displayed system basis. The reduced map leaves the system populations unchanged and multiplies each coherence by $\cos(2gt)$. At a positive time $s$ where the multiplier is zero, it erases the distinction between the two $X$ eigenstates; at $2s$ it restores them with their signs exchanged. Thus this finite reduced family is neither a semigroup nor CP-divisible.

## Example references

[[pthm-nrqmx-finite-reduction-channel]]

[[def-nrqmx-finite-channel-families]]

## Facts & Assumptions

**Given:** The two-qubit model, $g>0$, $\hbar>0$, and the definitions of channel semigroup and CP-divisibility.

[F1] The two-qubit calculation in [[pthm-nrqmx-finite-reduction-channel]] uses this exact Hamiltonian and environment state; it defines the matrix exponential by its power series, derives $U_t=\sum_{b=\pm1}V_b(t)\otimes|b\rangle\langle b|$ with $V_b(t)=\operatorname{diag}(e^{-ibgt},e^{ibgt})$, and obtains the reduced channel's coherence multiplier $\kappa(t)=\frac12(e^{-2igt}+e^{2igt})$.

[F2] [[def-nrqmx-finite-channel-families]]: the semigroup law is $\Phi_{t+s}=\Phi_t\circ\Phi_s$ with $\Phi_0=\operatorname{id}$, and CP-divisibility requires a channel $V_{t,s}$ for every $s\leq t$ with $\Phi_t=V_{t,s}\circ\Phi_s$.

[F3] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: some $\theta\in[0,2\pi)$ satisfies $(\cos\theta,\sin\theta)=(0,1)$.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{i\theta}=\cos\theta+i\sin\theta$ for real $\theta$.

[F5] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$ for complex $z,w$.

[F6] [[def-complex-exponential]]: $e^0=1$ and $e^z$ is the scalar exponential power series.

[F7] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has an orthonormal eigenbasis with real eigenvalues; for a real-valued function on its finite spectrum, the corresponding spectral operator is basis-independent.

## Verification

**Proof technique:** compute the conditional qubit rotations and compare two exact times.

1.1 The Hermitian matrix $Z\otimes Z$ has the orthonormal eigenbasis of product $Z$ eigenvectors and eigenvalues $\pm1$ by direct multiplication, consistent with [F7]. For this exact matrix and environment preparation, [F1] defines the matrix exponential by its power series and derives $U_t=\sum_{b=\pm1}V_b(t)\otimes|b\rangle\langle b|$, where $V_b(t)=\operatorname{diag}(e^{-ibgt},e^{ibgt})$. By [F4], each diagonal phase has modulus one, so these blocks and $U_t$ are unitary. The environment state has equal weight on $b=\pm1$, so the reduced map is $\Phi_t(X)=\frac12(V_{+1}XV_{+1}^*+V_{-1}XV_{-1}^*)$; multiplying the two diagonal matrices shows that the off-diagonal entries are multiplied by $\kappa(t)=\frac12(e^{-2igt}+e^{2igt})=\cos(2gt)$, while the diagonal entries are unchanged. [given, F1, F4, F7, algebra]

1.2 By [F3] choose $\theta\in[0,2\pi)$ with $\cos\theta=0$ and $\sin\theta=1$, and put $s=\theta/(2g)>0$. Then [F4] gives $e^{i\theta}=i$, while [F5] and [F6] with $e^{i\theta}e^{-i\theta}=e^0=1$ give $e^{-i\theta}=-i$; another application of [F5] yields $\kappa(s)=0$ and $\kappa(2s)=\frac12(e^{-2i\theta}+e^{2i\theta})=-1$. [F3, F4, F5, F6, algebra]

2.1 Let $X_P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\rho_\pm=(I\pm X_P)/2$. Since $X_P=X_P^*$, $X_P^2=I$, and $\operatorname{Tr}X_P=0$, each $\rho_\pm$ is a positive trace-one matrix. Steps 1.1 and 1.2 give $\Phi_s(\rho_+)=\Phi_s(\rho_-)=I/2$, but $\Phi_{2s}(\rho_+)=\rho_-$ and $\Phi_{2s}(\rho_-)=\rho_+$. Thus $\Phi_{2s}(\rho_+)\ne\Phi_s(\Phi_s(\rho_+))$, so the semigroup law in [F2] fails. If a channel $V_{2s,s}$ satisfied $\Phi_{2s}=V_{2s,s}\circ\Phi_s$, it would map the equal intermediate states to equal outputs, contradicting their distinct final states; by [F1], every $\Phi_t$ is a channel, so the family is not CP-divisible by [F2]. [F1, F2, step 1.1, step 1.2, algebra] ∎

