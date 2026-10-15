---
id: post-qft-qed-local-coupling
kind: postulate
domain: physics
library: physics
title: "Explicit charged Dirac/Maxwell local coupling model"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 8
deps:
  - def-qft-framework-units
  - def-qft-qed-gauge-data
  - post-qft-free-field-model
  - def-qft-qed-physical-gauge-quantities
  - post-qft-free-photon-model
  - def-em-gauge-transformation
  - def-countable-choice
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-qed-gauge-data: mathematical-premise
  post-qft-free-field-model: formulation-prerequisite
  def-qft-qed-physical-gauge-quantities: formulation-prerequisite
  post-qft-free-photon-model: formulation-prerequisite
  def-em-gauge-transformation: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: "A smooth local classical Maxwell–Dirac coupling in the stated SI/natural conventions, with electron charge q=-e as the selected QED species and the separately adopted free photon and Dirac representations; it asserts no interacting continuum Hilbert space, global PDE solution, pointwise quantum current, scattering operator, or nonperturbative QED construction."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§6.3.1 for the Dirac current, minimal coupling and local U(1) covariance; §§6.2–6.3 for the free photon and coupled Maxwell–Dirac model."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§58, printed pp. 345–347, for the spinor-electrodynamics current, local U(1) transformation, and covariant derivative; §§54–55 for the Maxwell action and photon conventions. The source uses Heaviside–Lorentz units and c=ℏ=1, translated to the selected SI/natural map."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Adopt a smooth local classical Maxwell–Dirac model on an open region of the
flat spacetime specified by [[def-qft-framework-units]]. Let $A_{{\rm SI},a}$
be a supplied real $C^\infty$ electromagnetic covector potential and let
$\psi:\!U\to\mathbb C^4$ be a $C^\infty$ commuting spinor field. The charge
$q_{\rm SI}$ and rest mass $m_{\rm SI}>0$ are model inputs; for the electron
take $q_{\rm SI}=-e_{\rm SI}$. Use the component, metric, Clifford, charge,
field-normalization, and unit conventions of
[[def-qft-qed-gauge-data]], [[def-qft-qed-physical-gauge-quantities]],
[[def-qft-framework-units]], and the electromagnetic suppliers of
[[post-qft-free-photon-model]]. In particular,
$D_a=\partial_a-iq_{\rm SI}A_{{\rm SI},a}/\hbar
=\partial_a-iq_{\rm n}a_a$ and $\mu=m_{\rm SI}c/\hbar$.

Adopt the local action density in natural normalization

$$\mathcal L_{\rm nat} =-\frac14 f_{ab}f^{ab} +\frac{i}{2}\bigl(\bar\psi\gamma^aD_a\psi -(D_a\bar\psi)\gamma^a\psi\bigr)-\mu\bar\psi\psi,$$

where $f_{ab}=\partial_a a_b-\partial_ba_a$ on the region where the
potential is supplied, $\bar\psi=\psi^\dagger\beta$, and
$D_a\bar\psi=\partial_a\bar\psi+iq_{\rm n}a_a\bar\psi$. The physical action
is $S_{\rm cl}=\hbar\int_U\mathcal L_{\rm nat}\,d^4x$ with $x^0=ct$. For
compactly supported local variations this is the adopted classical
Maxwell–Dirac formulation; its Euler–Lagrange consequences are not postulated
as a proof in this item.

For a smooth gauge function $\chi$ in webers, the adopted local
transformation is
$A_{{\rm SI},a}\mapsto A_{{\rm SI},a}+\partial_a\chi$ and
$\psi\mapsto e^{iq_{\rm SI}\chi/\hbar}\psi$. It leaves $F=dA$ invariant and
makes $D_a\psi$ transform by the same phase. This is the covector form of the
SI potential rule in [[def-em-gauge-transformation]]. Gauge functions in the
local variation argument are compactly supported; no assertion is made about
large gauge transformations, nontrivial bundles, boundary charges, or
asymptotic sectors.

The model adopts the separately specified free Dirac representation of
[[post-qft-free-field-model]] and the positive free photon representation of
[[post-qft-free-photon-model]] as the free-field correspondence used to
describe the selected species. This extra correspondence does not quantize
the interacting classical action. In particular, this postulate supplies no
interacting continuum four-dimensional QED Hilbert space, no globally
well-posed coupled PDE, no pointwise operator-valued composite current, no
scattering or LSZ construction, and no regulator-removal or
nonperturbative-existence result.
