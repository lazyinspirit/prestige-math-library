---
id: ex-emx-lossless-dispersive-energy
kind: example
title: "Matter energy survives zero instantaneous polarization"
status: draft
origin: pipeline
domain: physics
dependency_level: 3
proof_strategy: direct
deps:
  - post-emx-lorentz-medium
  - pthm-emx-oscillator-energy
  - def-countable-choice
  - def-euclidean-inner-product
dependency_roles:
  post-emx-lorentz-medium: physical-assumption
  pthm-emx-oscillator-energy: physical-result
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A single allowed oscillator state in the undamped Lorentz model. It illustrates the model's positive kinetic material-energy term when the instantaneous polarization vanishes; it reports no experiment and makes no claim beyond the stated constitutive model."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (236-page complete text)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§7.5.1, printed pp. 193–194: the atom's polarization is the state of a forced oscillator; the positive stored-energy comparison here is derived from the local model theorem."
    - title: "MIT OpenCourseWare 6.007, Electromagnetic Energy: From Motors to Lasers, Lecture 22: Interaction of atoms and EM waves (Lorentz oscillator)"
      url: "https://ocw.mit.edu/courses/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011/6434fa7aae0266ed6d40109d70c724f9_MIT6_007S11_lec22.pdf"
      locator: "Slides 8–13 (PDF pp. 8–13): oscillator state, damping and polarization response. The example's equal-(E,D), unequal-energy comparison is derived from the local augmented-energy theorem; the source is contextual only."
---

## Statement

In the one-oscillator Lorentz model, take an undamped oscillator $\gamma=0$ with $a>0$ in F m$^{-1}$ s$^{-2}$ and $\omega_0>0$ in s$^{-1}$. At a time $t_0$, compare two allowed states with the same instantaneous fields $E=0$, $B=0$, $H=0$, polarization $P=0$, and therefore displacement $D=\varepsilon_\infty E+P=0$: in the first state set $P_t=0$, and in the second set $P_t=v$ for any fixed nonzero real vector $v\in\mathbb R^3$ in A m$^{-2}$. The second state has oscillator energy density $|v|^2/(2a)>0$ in J m$^{-3}$, while the first has zero oscillator energy. Thus the instantaneous pair $(E,D)$ alone does not determine the full stored energy in this dispersive model.

## Statement references

[[post-emx-lorentz-medium]]

[[pthm-emx-oscillator-energy]]

## Facts & Assumptions

**Given:** Countable Choice, one undamped Lorentz oscillator with $a>0$, $\omega_0>0$; its state at $t_0$ consists of $P(t_0)$ and $P_t(t_0)$; take $E=B=H=0$ and $P=0$ at that instant.

[A1] The adopted oscillator model permits the initial polarization and polarization-velocity state $(P(t_0),P_t(t_0))$ and uses $D=\varepsilon_\infty E+P$ ([[post-emx-lorentz-medium]]).

[F1] For this undamped Lorentz state, the material energy density is $|P_t|^2/(2a)$, added to the positive electromagnetic field energy ([[pthm-emx-oscillator-energy]], Lorentz branch).

[F2] The Euclidean squared norm is positive for every nonzero vector: $|v|^2=\langle v,v\rangle>0$ when $v\ne0$ ([[def-euclidean-inner-product]]).

[F3] Countable Choice is an explicit hypothesis of the finite-energy oscillator theorem used here ([[def-countable-choice]], [[pthm-emx-oscillator-energy]]).

## Verification

**Proof technique:** compare two allowed oscillator states with equal instantaneous field and displacement data.

1.1 In the first state $P_t=0$, so [F1] gives zero oscillator energy. In the second state $P_t=v\ne0$, so [F1] gives $|v|^2/(2a)>0$ by [F2] and $a>0$. Both states have $E=0$ and $P=0$, hence the same $D=\varepsilon_\infty E+P=0$, and both have $B=H=0$; they therefore have identical instantaneous $(E,D)$ data but different total stored energies. [given, A1, F1, F2, F3, algebra]

2.1 The comparison is between allowed model states at one time; it is not an observed outcome or a claim about microscopic material energy. Hence the full oscillator energy is not a function of the instantaneous pair $(E,D)$ alone. [step 1.1, A1, algebra] ∎
