---
id: ex-qftmath-x01
kind: example
domain: mathematics
title: Worked example B01 — exact finite dynamics and its first coefficient
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-example-data
  - thm-qft-example-finite-dyson-unitarity
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  thm-qft-example-finite-dyson-unitarity: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: David Tong, Quantum Field Theory, §3.1.1 “Dyson’s Formula”
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: R. Fitzpatrick, Quantum Mechanics, Chapter 13, two-state system
      url: https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf
---

## Example

Use the two-level matrix model of [[thm-qft-example-finite-dyson-unitarity]] with $H=g_E\sigma_x$, where $g_E>0$ is in joules. At
$$t_1=\frac{\pi\hbar}{2g_E}>0,$$
the exact off-diagonal matrix-element square is $1$, while its first-order squared coefficient is $\pi^2/4>1$. At $t_2=\pi\hbar/g_E$, the exact survival matrix-element square is $1$, whereas $e^{-\Gamma t_2}<1$ for every positive rate $\Gamma$ in $\mathrm{s}^{-1}$. These are finite-matrix identities. This mathematical example assigns no probabilistic interpretation to the amplitudes or their matrix-element squares.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the two-level Hamiltonian $H=g_E\sigma_x$ with $g_E>0$ in joules, the positive $\hbar$ convention, and the times $t_1,t_2$ above.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed by the finite-dynamics supplier.

[F1] [[def-qft-example-data]]: $\hbar$ is in joule-seconds and matrix-element modulus squares are unchanged between the first-linear Hilbert pairing and coordinate convention.

[F2] [[thm-qft-example-finite-dyson-unitarity]]: $e^{-itH/\hbar}=\cos(g_Et/\hbar)I-i\sin(g_Et/\hbar)\sigma_x$; the exact transition square is $\sin^2(g_Et/\hbar)$, the first-order squared coefficient is $(g_Et/\hbar)^2$, and the survival square is not $e^{-\Gamma t}$ for $\Gamma>0$.

## Verification

1.1 At $t_1$, the dimensionless argument is $g_Et_1/\hbar=\pi/2$. Applying [F2], the exact off-diagonal entry is $-i$ and its modulus square is $1$. The first-order term is $-i\pi/2$, whose modulus square is $\pi^2/4>1$. [given, A1, F1, F2, algebra]

2.1 At $t_2$, the argument is $\pi$, so the diagonal entry of the exact evolution is $-1$ and its modulus square is $1$. Since $t_2>0$ and $\Gamma>0$ in $\mathrm{s}^{-1}$, $0<e^{-\Gamma t_2}<1$. Hence these exact finite-model survival values cannot equal one positive-rate exponential for all times. This is a matrix calculation, not a continuum decay conclusion. [given, F1, F2, step 1.1, algebra]

3.1 At $t_1$, the first-order coefficient square is $\pi^2/4>1$, while the corresponding exact matrix-element square is $1$. They are distinct mathematical quantities in this finite-matrix example; no probabilistic interpretation is made. [given, F2, step 1.1, step 2.1] ∎
