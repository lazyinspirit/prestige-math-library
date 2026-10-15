---
id: pthm-qft-classical-quantum-free-correspondence
kind: physics-theorem
title: "Classical equations and adopted exact free quantum representation"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 7
deps:
  - def-qft-framework-units
  - def-countable-choice
  - post-qft-free-field-model
  - lem-qft-free-action-equations
  - lem-qft-mass-shell-test-restriction-continuity
  - lem-qft-smeared-free-scalar
  - lem-qft-free-dirac-car-locality
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
  post-qft-free-field-model: physical-assumption
  lem-qft-free-action-equations: mathematical-premise
  lem-qft-mass-shell-test-restriction-continuity: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-free-dirac-car-locality: mathematical-premise
physical_scope: "The selected flat four-dimensional free real scalar and Dirac models, with the stated (-+++) signature, inverse-length mass parameter and chosen Fock representations. The result matches compact-variation classical equations with weak test equations of the adopted representations. It does not derive quantization, a general spin-statistics rule, interacting dynamics, empirical validity, or a measurement outcome."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 1, §1.1.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S1.html"
      locator: "Complete HTML Chapter 1; §1.1.1, the real scalar action and Klein–Gordon Euler–Lagrange equation."
    - title: "David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 4, §§4.2–4.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html"
      locator: "Complete HTML Chapter 4; Dirac action, independent variation of ψ and ψ-bar, and the Dirac equation. Tong uses the opposite metric signature to the fixed local convention."
    - title: "David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 5, §5.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S5.html"
      locator: "Complete HTML Chapter 5; §5.2, the adopted fermionic quantization convention and free Dirac mode construction."
    - title: "Mark Srednicki, Quantum Field Theory, Part I: Spin Zero, author prepublication textbook draft, arXiv:hep-th/0409035v1"
      url: "https://arxiv.org/html/hep-th/0409035"
      locator: "Complete full-text Part I; §3, relativistic scalar-field action, on-shell modes and canonical quantization."
    - title: "Mark Srednicki, Quantum Field Theory, Part II: Spin One Half, author prepublication textbook draft, arXiv:hep-th/0409036v1"
      url: "https://arxiv.org/html/hep-th/0409036"
      locator: "Complete full-text Part II; §§36–37 and 39, spinor-field actions, Dirac equation, canonical anticommutators and particle/antiparticle modes."
---

## Statement

Assume Countable Choice and the selected free-field model of
[[post-qft-free-field-model]], using the metric, length coordinates, inverse-
length parameter $\mu\ge0$, field dimensions and Clifford convention fixed by
[[def-qft-framework-units]]. The classical scalar field
$\phi_{\mathrm n}:\mathbb R^4\to\mathbb R$ is smooth and real; the classical
Dirac field $\psi_{\mathrm n}:\mathbb R^4\to\mathbb C^4$ is smooth with
commuting components. Their adopted free actions are the scalar and Dirac
functionals stated in [[post-qft-free-field-model]]. Action symbols are used
only through compactly supported smooth variations, so no global
integrability of the classical background fields is assumed.

The compact-variation stationarity equations are
$$(\Box-\mu^2)\phi_{\mathrm n}=0,\qquad (i\gamma^a\partial_a-\mu)\psi_{\mathrm n}=0,$$
with $\Box=-\partial_0^2+\Delta_{\mathbf x}$. In the separately adopted
scalar and Dirac Fock representations, the corresponding weak test equations
are, for $f\in\mathscr S(\mathbb R^4)$ and
$F\in\mathscr S(\mathbb R^4;\mathbb C^4)$,
$$\Phi_\mu((\Box-\mu^2)f)=0,\qquad \Psi\!\left((i\partial_0-h_D(-i\nabla))F\right)=0.$$
Here “weak test equation” means precisely that smearing the constructed field
with the displayed differential operator gives the zero operator on its
stated common domain. With $h_D(\mathbf k)=\boldsymbol\alpha\cdot\mathbf k+\beta\mu$,
$\gamma^0=\beta$, and $\gamma^j=\beta\alpha^j$ as adopted in
[[post-qft-free-field-model]], the Dirac test operator is equivalent to
$i\gamma^a\partial_a-\mu$.

Thus the classical action equations and the tested equations of the selected
free representations have the same differential expressions at these
normalizations. The Fock representation, species/statistics assignments and
vacua are additional physical model assumptions; they are not deductions from
the classical actions. No empirical outcome or measurement is asserted.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the fixed QFT unit and Clifford conventions,
the adopted classical actions and free representations, and the current draft
mathematical carriers for the variation and test-restriction arguments.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, means every sequence of
nonempty sets has a choice function. [[def-countable-choice]]

[F1] [[def-qft-framework-units]] fixes $\eta=\operatorname{diag}(-1,1,1,1)$,
$x^0=ct$, $\Box=\eta^{ab}\partial_a\partial_b$, inverse-length $\mu$,
$\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$, and the length dimensions of the
scalar and Dirac fields.

[F2] [[post-qft-free-field-model]] adopts the displayed scalar and commuting
Dirac actions, the selected scalar bosonic and Dirac particle/antiparticle CAR
Fock representations, their vacua, and the explicit $h_D,\beta,\gamma^a$
conventions. These are physical model assumptions, not mathematical
consequences of the actions.

[F3] [[lem-qft-free-action-equations]] assumes smooth real scalar and smooth
commuting complex spinor fields, with compactly supported smooth variations.
It states the exact first-variation identities, that no global action
integrability is assumed, and that stationarity under all such variations is
equivalent to the pointwise Klein–Gordon and Dirac equations. Its current
Step 1 receipt is ready for this draft mathematical carrier; independent
review is still pending.

[F4] [[lem-qft-mass-shell-test-restriction-continuity]] states, for every
$\mu\ge0$ and Schwartz test $f$,
$K_\mu((\partial_0^2-\Delta+\mu^2)f)=0$. Its current Step 1 receipt is ready
for this draft mathematical carrier; the containing QFT-MF02 page remains a
draft prerequisite.

[F5] [[lem-qft-smeared-free-scalar]] defines
$\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f)$ on the finite-particle
domain and its test-function convention. The field carrier remains draft and
its upstream QFT-MF01 dependencies are unresolved, so this representation is
used conditionally.

[F6] [[lem-qft-free-dirac-car-locality]] defines the bounded CAR field
$\Psi(F)=c(P_+u_F)+c^\dagger(\overline{P_-u_F})$ on its stated Fock space.
Its current Step 1 decision is escalated through QFT-MF01/MF02 dependencies,
so this field map is used conditionally.

[F7] [[lem-qft-free-dirac-car-locality]] proves
$u_{(i\partial_0-h_D(-i\nabla))F}=0$ for Schwartz spinor tests. This tested
equation is conditional on the escalated field and upstream carriers.

## Proof

**Given:** [A1] and [F1]–[F7].

1.1 By [F3], for each compactly supported smooth real variation $h$ and
compactly supported smooth spinor variation $\chi$, the first variations of
the displayed actions are the stated integrals against
$(\Box-\mu^2)\phi_{\mathrm n}$ and
$(i\gamma^a\partial_a-\mu)\psi_{\mathrm n}$. The lemma proves both
necessity and sufficiency of the displayed pointwise equations for
stationarity under all such variations; this step uses the commuting
classical spinor convention of [F2]. [A1, F2, F3, given]

1.2 Since $\Box-\mu^2=-(\partial_0^2-\Delta+\mu^2)$, [F4] and linearity
give $K_\mu((\Box-\mu^2)f)=0$ for every Schwartz $f$. The differential
operator has real coefficients, so the same identity holds for $\overline f$.
The scalar field formula in [F5] applies $a$ and $a^\dagger$ only to
$K_\mu\overline f$ and $K_\mu f$; both vanish for $f$ replaced by
$(\Box-\mu^2)f$. Hence the constructed scalar field satisfies the stated
weak test equation. [F1, F4, F5, algebra]

1.3 By [F7], the one-particle vector of
$(i\partial_0-h_D(-i\nabla))F$ is zero. Substitution in the bounded CAR
field formula in [F6] makes both its creation and annihilation terms zero,
so the corresponding smeared field is zero. From [F2],
$$\beta(i\partial_0-h_D(-i\nabla))=i\beta\partial_0+i\beta\alpha^j\partial_j-\mu=i\gamma^a\partial_a-\mu,$$
using $\beta^2=I_4$. Thus this is exactly the tested Dirac differential
expression in the classical equation of [F3]. [F1, F2, F3, F6, F7, algebra]

2.1 The quantum representations used in steps 1.2 and 1.3 enter only through
the physical adoption [F2]; steps 1.1–1.3 establish equation agreement under
that adoption and do not construct or derive the representation from the
classical action. The conclusion is therefore conditional on the selected
free model and carries no empirical or general quantization claim. [F2,
step 1.1, step 1.2, step 1.3, given] ∎
