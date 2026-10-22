---
id: ex-emx-reciprocity-not-time-reversal
kind: example
title: "Loss and reciprocity coexist"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
proof_strategy: direct
deps:
  - pthm-emx-lorentz-reciprocity
  - pthm-emx-lorentz-susceptibility
  - def-emx-reciprocal-phasor-medium
  - def-countable-choice
dependency_roles:
  pthm-emx-lorentz-reciprocity: physical-result
  pthm-emx-lorentz-susceptibility: physical-result
  def-emx-reciprocal-phasor-medium: formulation-prerequisite
  def-countable-choice: mathematical-premise
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional single-oscillator Lorentz phasor response with strictly positive damping and a nonzero local electric amplitude, together with a real positive scalar permeability. It shows positive cycle-averaged work on the polarization current under the stated response model while the coefficient tensors satisfy the local reciprocity condition. It asserts no measured material response, global field existence, or time-reversal statement."
sources:
  references:
    - title: "Jin Au Kong, Electromagnetic Wave Theory, last edition 2008, PIERS free release 2021"
      url: "https://piers.org/piers/files/BOOK_ElectromagneticWaveTheory_by_JINAUKONG_FreeRelease2021.pdf"
      locator: "Chapter 3, §3.2.E, printed pp. 299–300: reciprocity is derived from transpose-symmetric constitutive tensors without complex conjugation."
    - title: "Weng Cho Chew, Electromagnetic Field Theory, Purdue ECE 604 lecture notes, 2023–2024 revision"
      url: "https://engineering.purdue.edu/wcchew/ece604f23/EMFTEDX032124R.pdf"
      locator: "Chapter 12, §12.1, printed pp. 146–148: reciprocity for complex anisotropic tensors; the introductory phrase that a lossless reciprocal system is 'often' time-reversible is not used as a theorem."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS complete lecture script"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§12.1, printed pp. 12.1–12.2 (PDF pp. 142–143), equations (12.1)–(12.10): macroscopic Maxwell conventions and frequency-dependent material response. These pages do not establish this anisotropic reciprocity example; the response sign and absorption are derived from the current Lorentz-susceptibility supplier."
---

## Example

Assume $\mathrm{AC}_\omega$. Choose a one-oscillator Lorentz response with $\varepsilon_\infty>0$ in $\mathrm{F\,m^{-1}}$, $a>0$ in $\mathrm{F\,m^{-1}\,s^{-2}}$, $\omega_0>0$ and $\gamma>0$ in $\mathrm{s^{-1}}$, and fix $\omega>0$ in $\mathrm{s^{-1}}$. In the $e^{-i\omega t}$ convention its scalar absolute permittivity is $\varepsilon(\omega)=\varepsilon_\infty+a/(\omega_0^2-\omega^2-i\gamma\omega)$. Let the tensor coefficients be $\boldsymbol\varepsilon(\omega)=\varepsilon(\omega)I_3$ and $\boldsymbol\mu=\mu I_3$ with real $\mu>0$ in $\mathrm{H\,m^{-1}}$. These coefficients satisfy the transpose-symmetry condition of the reciprocal phasor model, while $\operatorname{Im}\varepsilon(\omega)>0$. For any nonzero local electric amplitude $e\in\mathbb C^3$ in $\mathrm{V\,m^{-1}}$, the polarization current has amplitude $j=-i\omega(\varepsilon(\omega)-\varepsilon_\infty)e$ in $\mathrm{A\,m^{-2}}$. Its cycle-averaged work density on the electric field is

$$\overline q:=\frac1T\int_0^T J_{\mathrm{pol}}(t)\cdot E(t)\,dt=\frac{\omega}{2}\operatorname{Im}\varepsilon(\omega)|e|^2>0,\qquad T=\frac{2\pi}{\omega},\qquad |e|^2:=e^*\cdot e=\sum_{r=1}^3|e_r|^2.$$

Here $e^*$ is componentwise complex conjugation. The conjugate used in this cycle average is distinct from the bilinear, unconjugated product in the reciprocity identity.

Thus the coefficient condition that supplies the Lorentz reciprocity identity is compatible with positive absorption in this adopted model.

## Statement references

[[pthm-emx-lorentz-reciprocity]]

[[pthm-emx-lorentz-susceptibility]]

[[def-emx-reciprocal-phasor-medium]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a single Lorentz oscillator with the strictly positive coefficients and damping specified above, a fixed real $\omega>0$, real scalar $\mu>0$, and a nonzero local harmonic electric amplitude $e$.

[A1] $\mathrm{AC}_\omega$ is explicitly assumed by the supplier statement used for the oscillator response ([[def-countable-choice]]).

[F1] For the $e^{-i\omega t}$ convention and one Lorentz oscillator, $\varepsilon(\omega)=\varepsilon_\infty+a/(\omega_0^2-\omega^2-i\gamma\omega)$ and $\operatorname{Im}\varepsilon(\omega)=a\gamma\omega/((\omega_0^2-\omega^2)^2+\gamma^2\omega^2)\ge0$ ([[pthm-emx-lorentz-susceptibility]], pointwise-loss clause).

[F2] The phasor medium is reciprocal exactly when $\boldsymbol\varepsilon^T=\boldsymbol\varepsilon$ and $\boldsymbol\mu^T=\boldsymbol\mu$; its products in the Lorentz identity are bilinear without conjugation ([[def-emx-reciprocal-phasor-medium]]).

[L1] Two C1 phasor solutions of the reciprocal model obey the bounded-domain Lorentz bilinear identity; the theorem does not require the coefficients to be Hermitian or lossless ([[pthm-emx-lorentz-reciprocity]]).

## Verification

1.1 The denominator $(\omega_0^2-\omega^2)^2+\gamma^2\omega^2$ is strictly positive because $\gamma\omega>0$. Therefore [F1] gives $\operatorname{Im}\varepsilon(\omega)=a\gamma\omega/((\omega_0^2-\omega^2)^2+\gamma^2\omega^2)>0$. A scalar multiple of $I_3$ equals its ordinary transpose even when the scalar is complex, and the real scalar $\mu$ also equals its transpose; hence [F2] places these coefficients in the reciprocal class. The reciprocity identity [L1] is consequently applicable whenever the corresponding C1 phasor solutions exist. [given, A1, F1, F2, L1, algebra]

2.1 The polarization amplitude is $p=(\varepsilon-\varepsilon_\infty)e$, so differentiating $\operatorname{Re}(p e^{-i\omega t})$ gives current amplitude $j=-i\omega p$. For any complex scalar amplitudes $u,v$, write the product as $\frac14(uv e^{-2i\omega t}+uv^*+u^*v+u^*v^*e^{2i\omega t})$. The period integrals of $e^{\pm2i\omega t}$ are zero because $\omega>0$, so the average is $\frac12\operatorname{Re}(uv^*)$. Applying this componentwise gives $\overline q=\frac12\operatorname{Re}(j\cdot e^*)=\frac{\omega}{2}\operatorname{Im}(\varepsilon-\varepsilon_\infty)|e|^2=\frac{\omega}{2}\operatorname{Im}\varepsilon|e|^2>0$, since $\varepsilon_\infty$ is real and $e\ne0$. Positive $\overline q$ is work transferred from the field to the polarization current in the adopted Maxwell sign convention. This is a model deduction, not an observation. [given, A1, F1, step 1.1, algebra] ∎

## Remarks

This calculation establishes coexistence of transpose-symmetric reciprocal coefficients and positive absorption in the stated oscillator model. It makes no claim about a time-reversal transformation.
