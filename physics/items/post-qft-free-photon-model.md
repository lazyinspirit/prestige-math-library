---
id: post-qft-free-photon-model
kind: postulate
domain: physics
library: physics
title: "Positive transverse free photon model"
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 7
deps:
  - def-qft-framework-units
  - def-qft-photon-transverse-space
  - def-qft-fock-and-test-spaces
  - post-qft-constructed-model-and-measurement
  - lem-qft-photon-null-quotient
  - lem-qft-photon-covariance-spectrum
  - lem-qft-photon-local-weyl-observables
  - post-em-vacuum-maxwell
  - def-em-electromagnetic-tensor
  - def-em-gauge-transformation
  - def-countable-choice
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-photon-transverse-space: formulation-prerequisite
  def-qft-fock-and-test-spaces: formulation-prerequisite
  post-qft-constructed-model-and-measurement: formulation-prerequisite
  lem-qft-photon-null-quotient: mathematical-premise
  lem-qft-photon-covariance-spectrum: mathematical-premise
  lem-qft-photon-local-weyl-observables: mathematical-premise
  post-em-vacuum-maxwell: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-gauge-transformation: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: "The selected source-free, flat Minkowski Maxwell photon model with a positive transverse one-particle Hilbert space, its constructed bosonic Fock representation and free dynamics, and actual smeared field-strength and bounded Weyl observables; no interacting continuum QED or empirical outcome is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§6.1 for the source-free Maxwell field; §6.2, especially §6.2.1, for Coulomb-gauge transverse modes, the two physical polarizations, and the auxiliary Lorenz-gauge construction."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§§54–55, printed pp. 332–338, for the Maxwell potential, Coulomb-gauge transverse projector, free modes, two helicities, and Hamiltonian. The source uses Heaviside–Lorentz units and c=1; the adopted model retains the explicit SI conversion."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Adopt the following specified free-photon model in the oriented,
time-oriented affine Minkowski spacetime and length coordinates of
[[def-qft-framework-units]], with metric $(-,+,+,+)$ and $x^0=ct$. The
classical electromagnetic input is the smooth source-free branch of
[[post-em-vacuum-maxwell]]; the electromagnetic two-form and its potential
components are those of [[def-em-electromagnetic-tensor]], and a supplied
potential is subject to [[def-em-gauge-transformation]]. These EM suppliers
are physical input and conventions: they do not by themselves construct a
quantum representation.

For almost every $\mathbf k\in\mathbb R^3\setminus\{0\}$, set
$\mathbf n=\mathbf k/|\mathbf k|$ and
$P_T(\mathbf k)=I_3-\mathbf n\mathbf n^{\mathsf T}$. The mathematical
definition [[def-qft-photon-transverse-space]] specifies the positive
one-photon Hilbert space

$$\mathcal H_T= \{u\in L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3): \mathbf k\cdot u(\mathbf k)=0\text{ for almost every }\mathbf k\},$$

with the inherited pairing
$\langle u,v\rangle_2=\int\overline{u(\mathbf k)}\cdot v(\mathbf k)\,d^3\mathbf k$,
linear in the second variable as in [[def-qft-fock-and-test-spaces]]. The
value assigned to $P_T$ at
$\mathbf k=0$ is immaterial because that point has Lebesgue measure zero; no
continuous polarization frame over all momentum directions is chosen. Adopt
the bosonic Fock representation $\mathcal F_s(\mathcal H_T)$ and the free
Hamiltonian

$$H_\gamma=\hbar c\,d\Gamma(|\mathbf k|),$$

where on the $n$-photon sector $d\Gamma(|\mathbf k|)$ is multiplication by
$\sum_{r=1}^n|\mathbf k_r|$ and is zero on the vacuum sector. Its exact
self-adjoint domain and the unitary mass-cone action are those in the
mathematical supplier [[lem-qft-photon-covariance-spectrum]]. The actual
smeared field-strength distributions and bounded Weyl operators are those
constructed in [[lem-qft-photon-local-weyl-observables]]; a pointwise
potential or field-strength operator is not asserted to exist. These
mathematical suppliers are draft carriers with mixed current Step 1 status: the
transverse-space, null-quotient, covariance-spectrum, framework-units, and
C01 measurement carriers have current ready records; the local-Weyl carrier is
escalated through its field-strength prerequisite. Readiness records are not
independent approval, and every use remains conditional on the exact statement
and proof supplied.

For the physical interpretation of an actually constructed state and a
supplied normalized measurement instrument, use
[[post-qft-constructed-model-and-measurement]]: Born probabilities are
assigned only to that specified model and instrument. This postulate records
the model's free Maxwell quanta as photons. It does not assert that the
model has been empirically confirmed, and it introduces no interacting
four-dimensional QED Hilbert space, scattering operator, LSZ limit,
asymptotic completeness, or nonperturbative continuum limit. In calculations
using an indefinite four-polarization auxiliary space, only the positive
transverse model or its separately constructed null quotient is physical;
four auxiliary components are not four positive photon states.
