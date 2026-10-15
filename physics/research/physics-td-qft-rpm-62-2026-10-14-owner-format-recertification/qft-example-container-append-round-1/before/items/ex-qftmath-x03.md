---
id: ex-qftmath-x03
kind: example
domain: mathematics
title: Worked example B03 — nonretarded one-mode correlator
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-example-data
  - lem-qft-example-oscillator-feynman-prescription
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  lem-qft-example-oscillator-feynman-prescription: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§2.1.1 and 2.7.1–2.7.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
    - title: M. Srednicki, Quantum Field Theory, author-hosted prepublication draft, §7
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Example

For the one-mode oscillator in [[lem-qft-example-oscillator-feynman-prescription]], choose $t_*=-\pi/(2\omega)$, where $\omega>0$ is in $\mathrm{s}^{-1}$. Then the normalized Feynman correlator is $-i/(2\omega)$, while the retarded response kernel is zero. The nonzero negative-time correlation is not a response to a future source.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\omega>0$ in $\mathrm{s}^{-1}$, $t_*=-\pi/(2\omega)<0$, and the fixed-mode definitions of the Feynman correlator and retarded kernel.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed by the oscillator supplier.

[F1] [[def-qft-example-data]]: $\omega t$ is dimensionless, and these formulas carry no spatial-locality claim.

[F2] [[lem-qft-example-oscillator-feynman-prescription]]: $C_F(t)=e^{-i\omega|t|}/(2\omega)$ and $G_R(t)=1_{[0,\infty)}(t)\sin(\omega t)/\omega$.

## Proof

1.1 Since $\omega|t_*|=\pi/2$, the oscillator formula gives $C_F(t_*)=e^{-i\pi/2}/(2\omega)=-i/(2\omega)$. The units are seconds on both sides. [given, A1, F1, F2, algebra]

2.1 Since $t_*<0$, the support indicator in $G_R$ is zero, so $G_R(t_*)=0$. Thus the correlator is nonzero at negative time while the retarded response vanishes there. [given, F2, step 1.1, algebra]

3.1 This distinguishes the two kernels in this single oscillator mode only; it proves no spatial signal property or interacting-field statement. [given, F1, F2, step 2.1] ∎
