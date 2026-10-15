---
id: ex-qft-x03
kind: example
domain: physics
library: physics
title: One-mode time-ordered correlator versus retarded response
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 3
deps:
  - post-qft-constructed-model-and-measurement
  - lem-qft-example-oscillator-feynman-prescription
  - def-qft-example-data
  - def-countable-choice
dependency_roles:
  post-qft-constructed-model-and-measurement: physical-assumption
  lem-qft-example-oscillator-feynman-prescription: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >-
  One exact oscillator mode with the stated core, vacuum, and conventions. The
  negative-time correlation differs from a retarded response; this makes no
  spatial-locality, signalling, interacting-field, or empirical claim.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§2.1.1 and 2.7.1–2.7.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
    - title: M. Srednicki, Quantum Field Theory, author-hosted prepublication draft, §7 oscillator two-point kernel and frequency prescription
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Example

For the exact single oscillator mode of
[[lem-qft-example-oscillator-feynman-prescription]], let $\omega>0$ in
$\mathrm{s^{-1}}$ and choose $t=-\pi/(2\omega)$. The normalized
time-ordered vacuum correlator is $-i/(2\omega)$, while the retarded response
kernel is $0$. The correlator at negative time is not a response to a future
source. This fixed-mode calculation does not establish a spatial-causality or
superluminal-signalling result.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $m_o>0$ in kilograms, $\omega>0$ in
$\mathrm{s^{-1}}$, $\hbar>0$ in $\mathrm{J\,s}$, and the one-mode
oscillator result of [[lem-qft-example-oscillator-feynman-prescription]].

[F1] [[lem-qft-example-oscillator-feynman-prescription]]: for real $t$,
$C_F(t)=e^{-i\omega|t|}/(2\omega)$ and
$G_R(t)=1_{[0,\infty)}(t)\sin(\omega t)/\omega$; the statement assumes
$\mathrm{AC}_\omega$ and the exact oscillator basis and domain.

[F2] [[def-qft-example-data]]: the frequency $\omega$ is in
$\mathrm{s^{-1}}$, time is in seconds, and the Hilbert pairing convention is
the stated first-variable-linear one.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed only because
the exact oscillator supplier invokes it.

[A2] [[post-qft-constructed-model-and-measurement]]: a physical reading is
limited to an actually constructed state and dynamics; the postulate supplies
no spatial-locality or interacting-field conclusion.

## Verification

1.1 The chosen time has units seconds because $[\omega]=\mathrm{s^{-1}}$, and $\omega|t|=\pi/2$ [F2]. Therefore [F1] gives $C_F(t)=e^{-i\pi/2}/(2\omega)=-i/(2\omega)$. [given, F1, F2, A1, algebra]

2.1 Since $t<0$, the indicator in [F1] is zero, so $G_R(t)=0$. Thus the two values differ, and the nonzero time-ordered correlation is not the retarded response at this negative time. The physical interpretation remains within the supplied one-mode construction described by [A2]. [F1, A2, step 1.1, algebra] ∎
