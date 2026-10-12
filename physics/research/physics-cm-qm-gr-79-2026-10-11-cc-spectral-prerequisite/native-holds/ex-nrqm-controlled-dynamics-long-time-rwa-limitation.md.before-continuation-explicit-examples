---
id: ex-nrqm-controlled-dynamics-long-time-rwa-limitation
aliases: [nrqm-controlled-dynamics-example-long-time-rwa-limitation]
kind: example
domain: mathematics
title: "Long-time RWA limitation"
status: draft
origin: pipeline
dependency_level: 3
deps: [thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, prop-nrqm-orbital-and-spin-finite-spin-matrices, def-bounded-linear-operator, def-operator-norm, def-hilbert-space]
dependency_roles:
  thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Spin Magnetic Resonance pp. 178-180 (rotating-wave approximation and its long-time limitations)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 pp. 123-131 (exponential of a bounded self-adjoint generator)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Take $H=\mathbb C^2$, $A=B=\sigma_z$, $\omega=1$ (units $\hbar=1$), so that
$$H(t)=\sigma_z+e^{it}\sigma_z+e^{-it}\sigma_z=(1+2\cos t)\sigma_z,\qquad H_{\mathrm{avg}}=\sigma_z .$$
Let $U$ and $U_{\mathrm{avg}}$ be the exact and rotating-wave propagators of
[[thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error]]. This example
verifies concretely that:

(a) $U(t)=e^{-i(t+2\sin t)\sigma_z}$ and $U_{\mathrm{avg}}(t)=e^{-it\sigma_z}$,
so that $\|U(t)-U_{\mathrm{avg}}(t)\|=2|\sin(\sin t)|$;

(b) at $t_n=\frac\pi2+2\pi n$ one has
$\|U(t_n)-U_{\mathrm{avg}}(t_n)\|=2|\sin 1|>0$ for every $n$, so the
rotating-wave error does not decay in time and the finite-time bound of
[[thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error]], linear in
$t$, cannot be replaced by uniform-in-time smallness in this class;

(c) the deviation is an oscillation of order $\|B\|/|\omega|$ without average
cancelation, illustrating the finite-time character of the rotating-wave
approximation.

## Verification

**Given:** the matrices $A=B=\sigma_z$, $\omega=1$, the exact and averaged propagators, and $t\in\mathbb R$.

[F1] For a norm-continuous bounded self-adjoint family the propagator solving $iU'=HU$, $U(0)=I$, exists, is unitary and is unique ([[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]).

[F2] $\sigma_z$ is diagonal in the orthonormal basis $(e_\uparrow,e_\downarrow)$ with eigenvalues $\pm1$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] (e)).



1.1 [Exact propagators] Since all generators $H(s)=(1+2\cos s)\sigma_z$ commute, [F1] gives $U(t)=\exp(-i\sigma_z\int_0^t(1+2\cos s)ds)=e^{-i(t+2\sin t)\sigma_z}$, and $U_{\mathrm{avg}}(t)=e^{-it\sigma_z}$ because $H_{\mathrm{avg}}=\sigma_z$; both are unitary. [F1, algebra]

2.1 [Norm of the difference] Multiplying on the left by the unitary $e^{it\sigma_z}$ does not change the operator norm, so $\|U(t)-U_{\mathrm{avg}}(t)\|=\|e^{-2i\sin t\,\sigma_z}-I\|$. By [F2] this operator is diagonal with entries $e^{\mp2i\sin t}-1$, of modulus $|e^{-2i\sin t}-1|=2|\sin(\sin t)|$; the operator norm equals this modulus. At $t_n=\pi/2+2\pi n$ one has $\sin t_n=1$, giving the value $2|\sin1|>0$ for every $n$. [step 1.1, F2, def. operator norm, algebra] ∎
