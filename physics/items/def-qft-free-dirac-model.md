---
id: def-qft-free-dirac-model
kind: definition
title: Exact Dirac particle/antiparticle free model
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: "One selected noninteracting Dirac species on four-dimensional affine Minkowski spacetime with signature (-+++), length coordinates x^0=ct, and mass parameter μ≥0. The CAR representation, species assignment and vacuum are adopted model data; fields are used only after spacetime smearing. No interaction, empirical claim or general spin-statistics theorem is included."
dependency_level: 7
deps:
  - post-qft-free-field-model
  - def-qft-framework-units
  - def-qft-dirac-projections
  - lem-qft-dirac-projection-matrices
  - def-qft-fock-and-test-spaces
  - lem-qft-fock-ccr-car
  - lem-qft-free-dirac-car-locality
  - def-countable-choice
dependency_roles:
  post-qft-free-field-model: physical-assumption
  def-qft-framework-units: formulation-prerequisite
  def-qft-dirac-projections: mathematical-premise
  lem-qft-dirac-projection-matrices: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-free-dirac-car-locality: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted full-text Chapter 4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete HTML chapter on the Dirac equation, Clifford algebra, spinor representation and plane-wave solutions.
    - title: David Tong, Quantum Field Theory, author-hosted full-text Chapter 5
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S5.html
      locator: Complete HTML chapter; §§5.1.1–5.3, Hamiltonian, fermionic quantization, vacuum, particles and antiparticles.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich 2025 HS complete lecture notes
      url: https://people.phys.ethz.ch/~nbeisert/lectures/QFT1-25HS-Notes.pdf
      locator: Complete 194-page notes; Chapter 5 §§5.1–5.6, Clifford projectors, spinor covariance, Hamiltonian form and fermionic quantization; pp. 82–83, Dirac-sea comparison.
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

Fix the oriented, time-oriented affine Minkowski spacetime and inertial length coordinates of [[def-qft-framework-units]], with $\eta=\operatorname{diag}(-1,1,1,1)$ and $x^0=ct$. The parameter $\mu\ge0$ and wave vector $\mathbf k$ have unit $\mathrm m^{-1}$; $\omega(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2}$ also has unit $\mathrm m^{-1}$. For $\mu>0$, $\mu=m_{\mathrm{rest,SI}}c/\hbar$; $\mu=0$ is the admitted massless branch. The corresponding SI energy and momentum are $\hbar c\omega$ joules and $\hbar\mathbf k$ in $\mathrm{kg\,m\,s^{-1}}$. The canonically normalized Dirac field has engineering length degree $-3/2$; a spacetime spinor test has degree $-5/2$, making its spacetime-smearing pairing dimensionless. These are the unit conventions of [[def-qft-framework-units]], not claims about interacting-field scaling.

Adopt the Dirac branch of [[post-qft-free-field-model]]: one free Dirac species, the selected CAR representation and zero-particle vacuum are physical model assumptions. Countable Choice is the mathematical choice strength used by the Fock construction [[def-countable-choice]].

Use $\mathbb C^4$ spinors and the matrices, mass-shell parameter, one-particle Hilbert space $\mathcal H_D$, multiplier $h_D(\mathbf k)=\boldsymbol\alpha\cdot\mathbf k+\beta\mu$, projections $P_\pm(\mathbf k)$ and propagator $W_D$ defined in [[def-qft-dirac-projections]]. The mathematical supplier [[lem-qft-dirac-projection-matrices]] establishes that $P_\pm$ are complementary orthogonal projections of rank two, that $\mathcal H_\pm=\operatorname{ran}P_\pm$ are closed, and that $h_D$ is self-adjoint on its maximal multiplication domain. The one-particle space of the adopted field is
$$\mathcal K_D=\mathcal H_+\oplus\overline{\mathcal H_-},$$
where the bar denotes the conjugate Hilbert space. Its fermionic Fock space, vacuum and creation/annihilation maps use [[def-qft-fock-and-test-spaces]] and [[lem-qft-fock-ccr-car]].

For a Schwartz spinor test $F\in\mathscr S(\mathbb R^4;\mathbb C^4)$, set
$$\widehat F(t,\mathbf k)=\int_{\mathbb R^3}e^{-i\mathbf k\cdot\mathbf x}F(t,\mathbf x)\,d^3\mathbf x,\qquad u_F(\mathbf k)=\int_{\mathbb R}W_D(t,\mathbf k)\widehat F(t,\mathbf k)\,dt.$$
The physical field is the bounded smeared map
$$\Psi(F)=c(P_+u_F)+c^\dagger(\overline{P_-u_F}),$$
with the exact test-map and CAR construction of [[lem-qft-free-dirac-car-locality]]. It is antilinear in $F$. Its positive-energy branch is the particle annihilation term; the conjugate negative-energy branch occurs as antiparticle creation. This is a model assignment: it does not identify negative-energy Fock excitations with physical states, invoke a filled Dirac sea, or prove the general spin-statistics theorem. No pointwise field operator is defined here.

## Facts & Assumptions

**Given:** The QFT-F01 adoption is a physical postulate; all mathematical fields below are spacetime-smeared.

[A1] [[post-qft-free-field-model]] adopts the selected flat free scalar and Dirac representations, the Dirac CAR/statistics assignment, a zero-particle vacuum and the SI/natural-unit map. The item is a model postulate, not a theorem or empirical report.

[A2] [[def-countable-choice]] states the Countable Choice axiom used by the separable Fock and Dirac field suppliers; no stronger choice principle is assumed.

[F1] [[def-qft-framework-units]] fixes $\eta=\operatorname{diag}(-1,1,1,1)$, $x^0=ct$, $\mu=m_{\mathrm{rest,SI}}c/\hbar$ for positive rest mass, $\omega=\sqrt{|\mathbf k|^2+\mu^2}$, $E=\hbar c\omega$, $\mathbf p=\hbar\mathbf k$, and the canonical Dirac-field degree $-3/2$.

[F2] [[def-qft-dirac-projections]] fixes the Pauli-block matrices, $h_D$, $P_\pm$, the second-variable-linear pairing and the massless-apex convention; [[lem-qft-dirac-projection-matrices]] proves the rank-two projection, closed-range and self-adjointness claims under Countable Choice.

[F3] [[def-qft-fock-and-test-spaces]] defines the scalar Schwartz spaces, conjugate Hilbert space and antisymmetric Fock sectors; [[lem-qft-free-dirac-car-locality]] defines spacetime Schwartz spinor tests as the finite product of four scalar Schwartz spaces with the componentwise Schwartz topology; [[lem-qft-fock-ccr-car]] proves the bounded CAR creation and annihilation maps on the full Fock space.

[F4] [[lem-qft-free-dirac-car-locality]] defines $u_F$ and $\Psi(F)$ as displayed, and contains a complete conditional local proof of test-map continuity, boundedness, the Dirac equation and graded locality. Its carrier is draft, so these mathematical properties are used only under the supplier's displayed Countable-Choice, Fourier, projection and causal-kernel hypotheses.

## Verification

1.1 The adopted model supplies the physical species, CAR representation and vacuum by [A1]; [F1] fixes the length-coordinate mass and energy conventions and SI conversions. These choices define the model's physical interpretation; they are not conclusions about nature. [A1, F1, given]

1.2 By [F2] under [A2], the positive and negative branch matrices are complementary rank-two orthogonal projections with closed ranges. Therefore their direct sum $\mathcal K_D=\mathcal H_+\oplus\overline{\mathcal H_-}$ is a well-defined Hilbert space; [F3] supplies its antisymmetric Fock space, vacuum and bounded CAR creation/annihilation maps. [A2, F2, F3, given]

2.1 For a Schwartz test $F$, [F4] under [A2] gives the continuous vector $u_F$ and proves the displayed smeared field is bounded and antilinear, using the projection and CAR hypotheses stated there. Thus the formula defines a spacetime-smeared field on the selected Fock space; its particle/antiparticle interpretation is the adopted assignment in [A1], while no pointwise field is defined. [A1, A2, F2, F3, F4, step 1.2, given] ∎
