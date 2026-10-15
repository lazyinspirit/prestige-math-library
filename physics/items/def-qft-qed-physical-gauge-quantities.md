---
id: def-qft-qed-physical-gauge-quantities
kind: definition
domain: physics
library: physics
title: "Charge, canonical photon field and observer units"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 3
deps:
  - def-qft-framework-units
  - def-qft-qed-gauge-data
  - def-countable-choice
  - def-em-si-conventions
  - def-em-electromagnetic-tensor
  - def-em-gauge-transformation
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-qed-gauge-data: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-gauge-transformation: formulation-prerequisite
physical_scope: "Charge and gauge-field conversions for the selected flat-space QED model, in the stated SI and natural normalizations; no charge value, running law, regulator, boundary charge sector, or interacting continuum construction is inferred."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§§6.1–6.3.1 for the Maxwell field, covariant potential, local Dirac coupling, and charge current; the source uses natural units and the opposite metric signature, translated explicitly here."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§12, printed pp. 104–105, for natural-unit dimensional bookkeeping; §§54 and 58, printed pp. 332–347, for Maxwell and spinor-electrodynamics conventions."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Use the oriented, time-oriented Minkowski model, length coordinates, metric,
and SI/natural dictionary of [[def-qft-framework-units]], with
$\eta=\operatorname{diag}(-1,1,1,1)$ and $x^0=ct$. Use the gamma matrices,
Dirac adjoint, and effective Clifford metric of
[[def-qft-qed-gauge-data]]: $\gamma^0=\beta$, $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$,
and $\bar\psi=\psi^\dagger\beta$. Assume Countable Choice
[[def-countable-choice]] for the mathematical QFT gauge-data supplier; the
unit conversions below do not themselves spend a choice principle.

Identify the SI charge and mass symbols $q,m$ in
[[def-qft-qed-gauge-data]] with $q_{\rm SI},m_{\rm SI}$ here. Its natural
coupling $g$ is $q_{\rm n}$ below, and its inverse-length mass $\mu$ is the
same $m_{\rm SI}c/\hbar$.

Let $q_{\rm SI}\in\mathbb R$ be a selected charge parameter in coulombs and
$m_{\rm SI}>0$ a selected rest-mass parameter in kilograms. They are inputs
of the chosen model; neither is derived from Maxwell's equations. Set
$\mu=m_{\rm SI}c/\hbar$ in $\mathrm m^{-1}$ and
$q_{\rm n}=q_{\rm SI}\sqrt{\mu_0c/\hbar}$, which is dimensionless under the
framework units of [[def-qft-framework-units]]. For an electron use
$q_{\rm SI}=-e_{\rm SI}$ and
$e_{\rm n}=e_{\rm SI}\sqrt{\mu_0c/\hbar}>0$, so $q_{\rm n}=-e_{\rm n}$.
Use $\varepsilon_0=(\mu_0c^2)^{-1}$ with the measured current-SI
$\mu_0$ of [[def-qft-framework-units]]. These definitions therefore do not
assign an exact numerical value to $q_{\rm n}$, $e_{\rm n}$, or
$\varepsilon_0$.

In a named inertial chart, let $A^\mu_{\rm SI}=(\varphi/c,\mathbf A)$ be the
electromagnetic potential when one is supplied, with components in
$\mathrm{T\,m}$ under [[def-em-si-conventions]] and
[[def-em-electromagnetic-tensor]]. Define the canonical potential and
field-strength components by

$$a^\mu:=\frac{A^\mu_{\rm SI}}{\sqrt{\mu_0\hbar c}},\qquad f^{\mu\nu}:=\frac{F^{\mu\nu}_{\rm SI}}{\sqrt{\mu_0\hbar c}}.$$

They have engineering dimensions $\mathrm m^{-1}$ and $\mathrm m^{-2}$,
respectively. With the metric-lowered potential
$A_{{\rm SI},a}=\eta_{ab}A^b_{\rm SI}$, the potential component convention is
$A_{{\rm SI},0}=-\varphi/c$ and $A_{{\rm SI},i}=A_i$. The covariant derivative
in the selected QED model is

$$D_a:=\partial_a-iq_{\rm n}a_a =\partial_a-\frac{iq_{\rm SI}}{\hbar}A_{{\rm SI},a},$$

since $q_{\rm n}a_a=q_{\rm SI}A_{{\rm SI},a}/\hbar$. Both terms in $D_a$
have unit $\mathrm m^{-1}$. If the SI gauge function $\chi$ has unit
$\mathrm{Wb}=\mathrm{T\,m^2}$, then $q_{\rm SI}\chi/\hbar$ is dimensionless;
the corresponding natural gauge function
$\lambda=\chi/\sqrt{\mu_0\hbar c}$ is dimensionless and
$q_{\rm n}\lambda=q_{\rm SI}\chi/\hbar$. These conversions apply to smooth
local gauge transformations; they assert no boundary condition, asymptotic
charge sector, or global gauge-fixing result.

If a separately specified finite regulator introduces Hamiltonian
eigenvalues, they have unit joule; this definition introduces no regulator.
The field components and units refer to the selected inertial chart, not to a
new observer congruence or a cross-framework identification.
