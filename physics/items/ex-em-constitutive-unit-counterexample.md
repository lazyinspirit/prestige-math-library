---
id: ex-em-constitutive-unit-counterexample
kind: example
title: "Matching units does not determine the permittivity or the response law"
status: published
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, post-em-material-closure, pthm-em-causal-dispersive-response, thm-ftc-second-part]
dependency_roles:
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  post-em-material-closure: physical-assumption
  pthm-em-causal-dispersive-response: physical-result
  thm-ftc-second-part: mathematical-premise
physical_scope: "A worked dimensional and model-identification example for the framework's SI conventions: the proposed law E=eps0 D is excluded by dimensional analysis, dimensionally admissible laws do not determine the permittivity or the response law, and a frequency-domain symbol epsilon(omega) is not an instantaneous time-domain coefficient. No measurement, no material data and no empirical claim."
sources:
  references:
    - title: "BIPM, The International System of Units (SI), 9th edition, official current PDF version 4.01 (214 pages), retrieved 9 October 2026"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "sec. 2.3.4, Table 4, English printed p. 133 (PDF p. 135): the coulomb, volt and farad and their base-unit expressions. Independently checked during the batch-29 reader review."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.3.1-4.3.2 printed pp. 175-181: D=eps0 E+P, the susceptibility and the warning that the response is model-dependent. Read in the stamped 596-page scan."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.1.2 printed pp. 176-178 (D=eps0 E+P) and sec. 7.5.4 printed pp. 199-205 (frequency-dependent response and the distinction between the time-domain convolution and a harmonic symbol). Read in the retained 236-page full text."
---

## Example

**(a) [Dimensional exclusion of $E=\varepsilon_0D$]** In the SI conventions of [[def-em-si-conventions]]: the electric constant $\varepsilon_0=(\mu_0c^2)^{-1}$ carries $\mathrm F\,\mathrm m^{-1}=\mathrm C^2\mathrm s^2\,\mathrm{kg}^{-1}\mathrm m^{-3}$, the displacement $D$ of [[def-em-polarization-magnetization]] carries $\mathrm C\,\mathrm m^{-2}$, and the electric field $E$ of [[def-em-fields]] carries $\mathrm V\,\mathrm m^{-1}=\mathrm{kg}\,\mathrm m\,\mathrm s^{-2}\mathrm C^{-1}$. The product $\varepsilon_0D$ therefore carries $\mathrm F\,\mathrm C\,\mathrm m^{-3}=\mathrm C^3\mathrm s^2\,\mathrm{kg}^{-1}\mathrm m^{-5}$, which is not the dimension of $E$: the proposed identification $E=\varepsilon_0D$ fails dimensionally in SI and cannot be a field relation of the framework.

**(b) [Units do not determine the law]** Solving the definition $D=\varepsilon_0E+P$ of [[def-em-polarization-magnetization]] gives $E=(D-P)/\varepsilon_0$, which in vacuum ($P=0$) reads $E=\varepsilon_0^{-1}D$. Any proposed law $E=\eta D$ with a constant $\eta>0$ of dimension $\mathrm V\,\mathrm m\,\mathrm C^{-1}$ is dimensionally admissible; dimensional consistency therefore does not identify $\eta$, and it does not determine whether the response is local, linear or instantaneous. In the model of [[post-em-material-closure]] the scalar relation is $D=\varepsilon E$, i.e. $\eta=\varepsilon^{-1}$, and $\varepsilon$ (or $\chi_e=\varepsilon/\varepsilon_0-1$) is fixed by the declared material model, not by units.

**(c) [Frequency-domain symbols are not instantaneous coefficients]** In the memory branch of [[post-em-material-closure]](c) the response is a causal convolution in time; a scalar $\varepsilon(\omega)$ introduced in the harmonic description is defined for a single harmonic history $E(t)=\operatorname{Re}(e e^{-i\omega t})$ by the response $D(t)=\operatorname{Re}(\varepsilon(\omega)e e^{-i\omega t})$; for a scalar kernel this means $\varepsilon(\omega)=\varepsilon_0(1+\int_0^\infty K(s)e^{i\omega s}ds)$. This is the harmonic convention of [[pthm-em-causal-dispersive-response]], not an assumption that an arbitrary bounded continuous history has a Fourier transform. The framework therefore does not read $\varepsilon(\omega)$ as an instantaneous multiplicative coefficient in the time domain: doing so silently replaces the convolution by an instantaneous law and is a model-identification error of the same kind as (a).

**(d) [Scope]** A dimensional and model-identification statement about the framework's own conventions; it asserts no measurement, no material property and no empirical claim.

## Verification

**Proof technique:** direct dimensional computation and immediate consequences of the definitions.

**Given:** The SI unit conventions of [[def-em-si-conventions]], the coefficient types of [[def-em-fields]] and [[def-em-polarization-magnetization]], and the declared material branches of [[post-em-material-closure]], on the laboratory region of [[def-em-lab-geometry]].

[L1] The electric constant is $\varepsilon_0=(\mu_0c^2)^{-1}$, carrying $\mathrm F\,\mathrm m^{-1}$; the farad is $\mathrm F=\mathrm C\,\mathrm V^{-1}$ and the volt is $\mathrm V=\mathrm{kg}\,\mathrm m^2\mathrm s^{-2}\mathrm C^{-1}$, so $\mathrm F\,\mathrm m^{-1}=\mathrm C^2\mathrm s^2\mathrm{kg}^{-1}\mathrm m^{-3}$; the electric field carries $\mathrm V\,\mathrm m^{-1}=\mathrm{kg}\,\mathrm m\,\mathrm s^{-2}\mathrm C^{-1}$ ([[def-em-si-conventions]], clauses (a)-(c); BIPM SI Brochure, Table 4, cited above).

[L2] The displacement is defined by $D=\varepsilon_0E+P$ and carries $\mathrm C\,\mathrm m^{-2}$ ([[def-em-polarization-magnetization]], clause (d)); the linear branch declares $D=\varepsilon E$ with constant positive matrix $\varepsilon$, and the memory branch declares the causal convolution $P(t)=\varepsilon_0\int_0^\infty K(s)E(t-s)\,ds$ with $K\in L^1(0,\infty)$ ([[post-em-material-closure]], clauses (b)-(c)).

[L3] For a differentiable real primitive with an integrable derivative on a compact interval, its derivative integrates to its endpoint increment ([[thm-ftc-second-part]]).

1.1 Multiplying the dimension of $\varepsilon_0$ from [L1] by the dimension $\mathrm C\,\mathrm m^{-2}$ of $D$ from [L2] gives $\mathrm C^3\mathrm s^2\mathrm{kg}^{-1}\mathrm m^{-5}$, which differs from the dimension $\mathrm{kg}\,\mathrm m\,\mathrm s^{-2}\mathrm C^{-1}$ of $E$ in the exponent of $\mathrm C$ and of $\mathrm m$; the proposed law $E=\varepsilon_0D$ is therefore excluded. [L1, L2]

1.2 Solving $D=\varepsilon_0E+P$ for $E$ gives $E=(D-P)/\varepsilon_0$, so in vacuum $E=\varepsilon_0^{-1}D$; a law $E=\eta D$ with constant $\eta>0$ of dimension $\mathrm V\,\mathrm m\,\mathrm C^{-1}$ has the correct dimension for every such $\eta$, so the unit check alone leaves $\eta$ free and says nothing about locality, linearity or instantaneity. [L2]

1.3 Give the witness physical units and the required vector type: fix $\tau>0$ in seconds and $E_*>0$ in $\mathrm V\,\mathrm m^{-1}$, let $E:\mathbb R\to\mathbb R^3$ be $E(t)=E_*\min(1,\max(0,-t/\tau))e_1$, and set $K(s)=\tau^{-1}\mathbf1_{[0,\tau]}(s)I_3$, where $I_3$ is the identity matrix. This real matrix kernel has units $\mathrm s^{-1}$ and integrable entries; the history is bounded and continuous, with $E(0)=0$ and $E(-s)=E_*(s/\tau)e_1$ for $0\le s\le\tau$. The polynomial $s^2/(2\tau^2)$ has derivative $s/\tau^2$ by expanding its difference quotient, so [L3] evaluates the integral. Therefore $P(0)=\varepsilon_0E_*e_1\int_0^\tau s/\tau^2\,ds=\varepsilon_0E_*e_1/2\ne0$, while every instantaneous law $P=CE$ with a fixed matrix $C$ gives $P(0)=0$. Thus a memory response need not be an instantaneous coefficient law; replacing its harmonic symbol by a time-domain multiplier changes this declared model. [L2, L3]

2.1 Steps 1.1-1.3 verify (a)-(c): the identification $E=\varepsilon_0D$ fails dimensionally, dimensionally admissible laws do not determine $\eta$ or the response type, and the frequency-domain symbol is defined by its action on harmonic histories rather than as an instantaneous coefficient, as the explicit history shows. The scope (d) holds: the example uses only the framework's unit and definition conventions, asserts no measurement, no material property and no empirical claim, and the material constant $\varepsilon$ or susceptibility $\chi_e$ remains fixed by the declared model. [given, step 1.1, step 1.2, step 1.3] ∎
