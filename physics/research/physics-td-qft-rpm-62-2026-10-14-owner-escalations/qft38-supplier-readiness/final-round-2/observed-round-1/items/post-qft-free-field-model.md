---
id: post-qft-free-field-model
kind: postulate
title: "Specified bosonic scalar and CAR Dirac model adoption"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 6
deps:
  - def-qft-framework-units
  - def-qft-dirac-projections
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - lem-qft-free-action-equations
  - lem-qft-smeared-free-scalar
  - lem-qft-free-dirac-car-locality
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-dirac-projections: formulation-prerequisite
  def-qft-scalar-mass-shell: formulation-prerequisite
  def-countable-choice: mathematical-premise
  lem-qft-free-action-equations: formulation-prerequisite
  lem-qft-smeared-free-scalar: formulation-prerequisite
  lem-qft-free-dirac-car-locality: formulation-prerequisite
physical_scope: "A selected, noninteracting real scalar and Dirac field model on four-dimensional affine Minkowski spacetime, with a chosen vacuum and bosonic symmetric-Fock and fermionic CAR-Fock representations. The assignments are model assumptions; no interacting continuum theory, empirical result, or general spin-statistics theorem is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 2, §§2.2–2.4, Free Fields, Vacuum, and Particles"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"
      locator: "Complete Chapter 2 HTML; §§2.2–2.4, free scalar modes, vacuum, and multiparticle Fock states."
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 4, §§4.2–4.3 and §4.7, Dirac Action and Equation"
      url: "https://davidtong.org/teaching/quantum-field-theory/qfthtml/S4"
      locator: "Complete Chapter 4 HTML; Dirac Lagrangian, independent variations, Dirac equation, and plane-wave solutions."
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 5, §§5.2–5.4, Quantizing the Dirac Field"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S5.html"
      locator: "Complete Chapter 5 HTML; fermionic quantization, vacuum, particle and antiparticle modes, and propagators."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page draft; §3, Canonical Quantization of Scalar Fields, and §§37–39, Canonical Quantization of Spinor Fields."
---

## Postulate

Fix four-dimensional affine Minkowski spacetime with metric
$\eta=\operatorname{diag}(-1,1,1,1)$, an inertial length-coordinate chart
$x=(x^0,\mathbf x)$, $x^0=ct$, and coordinates measured in metres, as specified
by [[def-qft-framework-units]]. Write
$\Box=\eta^{ab}\partial_a\partial_b$. The mass-shell parameter $\mu\ge0$ has
unit $\mathrm m^{-1}$ and
$\omega_\mu(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2}$ has the same unit. For a
massive species, $\mu=m_{\mathrm{rest,SI}}c/\hbar$; $\mu=0$ is the separately
admitted massless branch of the mathematical free-field construction. Thus
$\hbar c\omega_\mu$ is physical energy and $\hbar\mathbf k$ is physical
momentum. The natural-unit action is written $S/\hbar$.

The scalar one-particle space is
$\mathcal H_\mu=L^2(H_\mu^+,d\nu_\mu;\mathbb C)$, where
$H_\mu^+=\{(\omega_\mu(\mathbf k),\mathbf k):\mathbf k\in\mathbb R^3,\ \omega_\mu(\mathbf k)>0\}$ and
$d\nu_\mu=d^3\mathbf k/((2\pi)^3\,2\omega_\mu(\mathbf k))$; at $\mu=0$ the
measure-zero apex $\mathbf k=0$ is omitted. These are the shell conventions
of [[lem-qft-smeared-free-scalar]].

For a smooth real classical scalar $\phi_{\mathrm n}:\mathbb R^4\to\mathbb R$
with the canonical free-field length degree $-1$, adopt
$$\frac{S_\phi}{\hbar}=-\frac12\int_{\mathbb R^4}\left(\eta^{ab}\partial_a\phi_{\mathrm n}\partial_b\phi_{\mathrm n}+\mu^2\phi_{\mathrm n}^2\right)\,d^4x.$$
For a smooth commuting classical Dirac spinor
$\psi_{\mathrm n}:\mathbb R^4\to\mathbb C^4$ with canonical free-field length
degree $-3/2$, put $\bar\psi_{\mathrm n}=\psi_{\mathrm n}^\dagger\beta$ and
use the Clifford convention
$\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$ from
[[def-qft-framework-units]]. Adopt
$$\frac{S_D}{\hbar}=\int_{\mathbb R^4}\bar\psi_{\mathrm n}(i\gamma^a\partial_a-\mu)\psi_{\mathrm n}\,d^4x.$$
The smooth classical variables in these functionals commute; no Grassmann
algebra or path-integral construction is being adopted. With compactly
supported variations on the fixed background, the intended Euler–Lagrange
equations are $(\Box-\mu^2)\phi_{\mathrm n}=0$ and
$(i\gamma^a\partial_a-\mu)\psi_{\mathrm n}=0$, conditional on the exact
mathematical supplier recorded as [L1] below.

As the physical interpretation of this selected free model, assign the real
scalar species to the bosonic symmetric Fock representation and assign the
Dirac field to the particle/antiparticle CAR representation on
$\mathcal H_+\oplus\overline{\mathcal H_-}$. Choose the zero-particle Fock
vectors as the scalar and Dirac vacuum states. This is an adopted species and
statistics assignment. The CCR/CAR and operator properties of the specified
representations are mathematical model consequences; they do not prove a
general spin-statistics theorem or establish that nature realizes this model.

The scalar construction is the Schwartz-smeared field
$\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f)$ on the finite-particle
domain, with the future-shell phase
$p\circ x=\omega_\mu x^0-\mathbf k\cdot\mathbf x$, exactly as in
[[lem-qft-smeared-free-scalar]]. The Dirac construction is the bounded
spacetime-smeared CAR field of
[[lem-qft-free-dirac-car-locality]], using the positive and negative
projections of the specified free Dirac matrix. In that carrier,
$\mathcal H_D=L^2(\mathbb R^3,d^3\mathbf k/(2\pi)^3;\mathbb C^4)$,
$h_D(\mathbf k)=\boldsymbol\alpha\cdot\mathbf k+\beta\mu$, and
$P_\pm(\mathbf k)=(I_4\pm h_D(\mathbf k)/\omega_\mu(\mathbf k))/2$; the
particle and antiparticle one-particle spaces are the closed ranges
$\mathcal H_+$ and $\overline{\mathcal H_-}$. These carriers state their
mathematical hypotheses and construction domains; their draft status is not an
independent physics or proof approval.

Tong's lecture notes and Srednicki's book draft provide independent
presentations of the scalar and Dirac free-field formulations. Their formal
mode notation supplies context for this adoption, not a proof of the
operator-domain claims and not evidence that the adopted model describes
nature.

## Facts & Assumptions

**Given:** This item adopts a specified model; it does not infer the model
from empirical observations.

[A1] The scalar-to-bosonic-Fock and Dirac-to-CAR-Fock species assignments, the
chosen zero-particle vectors, and the absence of interactions are physical
model assumptions in this postulate.

[F1] [[def-qft-framework-units]] fixes the $(-+++)$ signature, $x^0=ct$ length
coordinates, inverse-length wave numbers, the $\mu=m_{\mathrm{rest,SI}}c/\hbar$
conversion when the rest mass is positive, and the canonical field dimensions.

[A2] The mathematical constructions used here assume
$\mathrm{AC}_\omega$, the Axiom of Countable Choice
[[def-countable-choice]].

[F2] [[lem-qft-smeared-free-scalar]] assumes $\mu\ge0$ and
$\mathrm{AC}_\omega$; it defines
$K_\mu f(p)=\int f(x)e^{ip\circ x}\,d^4x$ on the future shell and the scalar
field on the common finite-particle domain, with real-test symmetry and the
stated vacuum two-point function. Its current Step 1 decision is escalated
because its QFT-MF01 prerequisites remain unresolved.

[F3] [[lem-qft-free-dirac-car-locality]] assumes $\mu\ge0$,
$\mathrm{AC}_\omega$, the fixed $(-+++)$ Fourier conventions, and the
specified Dirac projections; it constructs a bounded smeared CAR field and
proves the stated tested Dirac equation and graded-locality conclusions. Its
current draft carrier has no current Step 1 readiness record, and its
QFT-MF01/QFT-MF02 supplier edges remain open.

[L1] Planned [[lem-qft-free-action-equations]] has the exact interface:
for smooth classical real scalar and commuting spinor fields on the fixed
Minkowski background, with compactly supported variations and the displayed
actions, the scalar variation yields the Klein–Gordon equation and the spinor
variation yields the Dirac equation and its conjugate. Its planned mathematical
inputs are [[def-qft-dirac-projections]] and
[[def-qft-scalar-mass-shell]]. The local research calculation is in
research/extended-frameworks-2026-10-03/quantum-field-theory/workers/free-fields/proof-modules.md#FF7,
but the named item carrier is absent from the current QFT-MF04 manifest and
there is no current Step 1 readiness receipt. This is a conditional planned
interface, not a proved supplier.
