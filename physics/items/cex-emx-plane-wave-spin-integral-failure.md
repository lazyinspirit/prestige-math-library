---
id: cex-emx-plane-wave-spin-integral-failure
kind: counterexample
title: Nonzero plane waves lie outside the finite-energy angular-momentum domain
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emx-angular-momentum-split
  - def-emx-transverse-fourier-field
  - def-em-plane-wave-definition
  - pthm-em-plane-wave-maxwell
  - pthm-em-wave-energy-average
  - def-em-si-conventions
dependency_roles:
  def-emx-angular-momentum-split: formulation-prerequisite
  def-emx-transverse-fourier-field: formulation-prerequisite
  def-em-plane-wave-definition: formulation-prerequisite
  pthm-em-plane-wave-maxwell: physical-result
  pthm-em-wave-energy-average: physical-result
  def-em-si-conventions: formulation-prerequisite
proof_strategy: direct
physical_scope: >-
  Ideal nonzero monochromatic plane waves in source-free classical vacuum
  electromagnetism on all of R^3, in the SI laboratory chart. The claim concerns
  only the domain of finite-energy total angular-momentum functionals; it does
  not reinterpret a plane wave by box normalization or claim a finite-beam
  approximation.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 1, PDF pp. 3–4: beam angular-momentum descriptions are for structured/paraxial fields; this counterexample concerns the all-space domain of the stated classical functionals."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§8.2, equation (8.3), and §11.1 'Fourier-Raum', equations (11.5)–(11.10): the field energy density and ideal source-free Fourier modes. The infinite-energy conclusion is taken from the inspected local theorem."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

Every nonzero monochromatic plane wave in vacuum belongs to the Schwartz
Fourier-packet domain on which the all-space angular-momentum functionals are
defined.

## Statement references

[[def-emx-angular-momentum-split]]

[[def-em-plane-wave-definition]]

[[pthm-em-plane-wave-maxwell]]

[[pthm-em-wave-energy-average]]

## Facts & Assumptions

**Given:** The positive dimensional scales $\kappa$ and $E_0$, the coordinate unit vectors, $k=\kappa e_3$, $\omega=c\kappa$, $e=E_0e_1$, $b=(E_0/c)e_2$, and the corresponding real plane wave.

[F1] The plane-wave encoding is $E=\operatorname{Re}(e\exp(i(k\cdot x-\omega t)))$ and $B=\operatorname{Re}(b\exp(i(k\cdot x-\omega t)))$; its fields are identically zero exactly when both amplitudes vanish. ([[def-em-plane-wave-definition]])

[F2] For these transverse vacuum modes, the exact period average is $\langle u\rangle=\varepsilon_0|e|^2/2$, and every nonzero amplitude has infinite all-space box-exhaustion energy. ([[pthm-em-wave-energy-average]])

[F3] With $\omega=c|k|$, $k\cdot e=0$, and $b=k\times e/\omega$, these plane waves satisfy the smooth source-free Maxwell equations; the plane-wave amplitudes determine the fields, and the pair is nonzero when $e\ne0$. ([[pthm-em-plane-wave-maxwell]]) The SI conventions give $c>0$ and $\varepsilon_0>0$. ([[def-em-si-conventions]])

[F4] The angular-momentum functionals in question are defined on the real Schwartz vacuum packet fields of the Coulomb-gauge construction; their integrands are globally integrable on that domain, and every field in the Fourier-packet class has finite total energy. ([[def-emx-angular-momentum-split]], [[def-emx-transverse-fourier-field]])

## Counterexample

Choose $\kappa>0$ in $\mathrm{m^{-1}}$ and $E_0>0$ in $\mathrm{V\,m^{-1}}$. Set $k=\kappa e_3$, $\omega=c\kappa$, $e=E_0e_1$, and $b=(E_0/c)e_2$, where $e_1=(1,0,0)$, $e_2=(0,1,0)$ and $e_3=(0,0,1)$ are the positively oriented coordinate unit vectors. Let $E,B$ be the real monochromatic plane-wave fields with phase $k\cdot x-\omega t$.

1.1 Since $E_0>0$, $e\ne0$, and direct calculation gives $k\cdot e=0$, $k\times e/\omega=(E_0/c)e_2=b$, and $\omega=c|k|$. Therefore [F3] gives a smooth source-free Maxwell solution and [F1] makes it nonzero. By [F2], its period-averaged energy density is $\varepsilon_0E_0^2/2>0$ and its total energy over $\mathbb R^3$ is infinite. [given, F1, F2, F3, algebra]

2.1 Every member of the Fourier-packet domain in [F4] has finite energy. Thus the nonzero wave of step 1.1 does not belong to that domain, refuting the universal statement. Componentwise formal cancellations do not make these all-space functionals defined on this field. [step 1.1, F4, algebra] ∎

## Example references

[[def-emx-angular-momentum-split]]

[[def-em-plane-wave-definition]]

[[pthm-em-wave-energy-average]]
