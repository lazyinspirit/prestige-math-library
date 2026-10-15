---
id: texp-qft-qed-neutral-cell
kind: thought-experiment
domain: physics
library: physics
title: "Hypothetical charged periodic cell violates smooth Gauss"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 11
deps:
  - pthm-qft-qed-coulomb-constraints
  - post-qft-qed-local-coupling
  - def-qft-framework-units
  - lem-qft-qed-coulomb-constraint
  - def-countable-choice
dependency_roles:
  pthm-qft-qed-coulomb-constraints: physical-result
  post-qft-qed-local-coupling: physical-assumption
  def-qft-framework-units: formulation-prerequisite
  lem-qft-qed-coulomb-constraint: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "A hypothetical smooth periodic Gauss-law branch on a flat three-torus with no boundary, puncture, or charge-compensating exterior; nonzero total charge is inconsistent with the stated periodic constraint. No real apparatus or observed charged cell is asserted."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6, §§6.2–6.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§6.2 for Gauss' law as a scalar-potential constraint and §6.3 for the charged Dirac source; the local argument here uses periodic rather than spatial-infinity boundary conditions."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§55, printed pp. 335–338, for the Coulomb constraint and its spatial-infinity solution; the hypothetical periodic-cell conclusion is separately proved under its torus hypotheses."
---

## Statement

Assume Countable Choice [[def-countable-choice]] and the smooth Maxwell
branch of [[post-qft-qed-local-coupling]]. On
$\mathbb T_L^3$ with side length $L>0$ in metres, choose the electron charge
$q_{\rm SI}=-e_{\rm SI}<0$ and a constant nonzero smooth commuting spinor
$\psi(\mathbf x)=\psi_0\in\mathbb C^4$ in the canonical length normalization
of [[def-qft-framework-units]]. Its source
$\rho_q=q_{\rm SI}\psi_0^\dagger\psi_0$ is smooth and periodic, with SI
charge-density unit $\mathrm{C\,m^{-3}}$ under the stated field normalization,
and its total charge is
$Q=q_{\rm SI}\psi_0^\dagger\psi_0L^3\ne0$. In a hypothetical periodic
configuration with no boundary, puncture, or exterior compensating flux,
no smooth periodic electric momentum can satisfy the adopted Gauss
constraint
$\operatorname{div}\boldsymbol\pi_A+\rho_q=0$. The neutral case
$Q=0$ is the separate branch supplied by
[[pthm-qft-qed-coulomb-constraints]] and
[[lem-qft-qed-coulomb-constraint]]. The setup is a thought experiment,
not a report of a physical measurement. The constant spinor is a
hypothetical field configuration; no Dirac stationarity or observed
charged cell is asserted.

## Facts & Assumptions

**Given:** The adopted QED Maxwell constraint, a smooth periodic field on
$\mathbb T_L^3$, and the conditional mathematical neutrality result.

[A1] [[post-qft-qed-local-coupling]]: in the selected classical model the
scalar potential imposes Gauss' constraint through its multiplier term.

[A2] Countable Choice is carried from the torus Fourier supplier used for
the neutral existence branch. [[def-countable-choice]]

[F1] [[pthm-qft-qed-coulomb-constraints]]: for every smooth periodic field
configuration the scalar-potential multiplier imposes
$\operatorname{div}\boldsymbol\pi_A+\rho_q=0$; the zero-mean Coulomb
solution is a separate neutral branch.

[F2] [[def-qft-framework-units]]: $\psi$ has canonical length dimension
$\mathrm m^{-3/2}$, and the spatial coordinates have units metre.

[L1] [[lem-qft-qed-coulomb-constraint]] (draft carrier with a current escalated Step 1
decision through its QFT QED-gauge-data prerequisite): for smooth real periodic source density on the flat torus,
a smooth periodic solution of $-\Delta\varphi=\rho/\varepsilon_0$ requires
zero spatial mean; when that condition holds, the unique zero-mean smooth
solution has the stated Fourier coefficients and nonnegative energy identity.
This is a conditional solver for smooth periodic data, not a quantum density
product construction.

[A3] Hypothetically, $L>0$, $q_{\rm SI}=-e_{\rm SI}<0$,
$\psi(\mathbf x)=\psi_0\ne0$ is constant, and the model has no boundary,
puncture, or compensating exterior flux.

## Proof
**Given:** [A1]–[A2], [F1], [L1], and the hypothetical condition [A3].

1.1 By [A3], $\rho_q=q_{\rm SI}\psi_0^\dagger\psi_0$ is constant; its
SI density unit is $\mathrm{C\,m^{-3}}$ by [F2] and the stated charge
convention. Thus $Q=q_{\rm SI}\psi_0^\dagger\psi_0L^3<0$ because
$q_{\rm SI}<0$, $\psi_0^\dagger\psi_0>0$, and $L>0$. A smooth periodic
solution of [F1] would satisfy
$\operatorname{div}\boldsymbol\pi_A=-\rho_q$. Integrate this equality over
the fundamental cube $[0,L]^3$. For each coordinate $i$, the integral of
$\partial_i(\pi_A)_i$ in that coordinate is the value on the face
$x_i=L$ minus the value on $x_i=0$; these are equal by periodicity, so
each face difference is zero. Fubini for the smooth functions on the
compact cube then gives
$\int_{\mathbb T_L^3}\operatorname{div}\boldsymbol\pi_A\,d^3\mathbf x=0$.
It follows that $Q=\int_{\mathbb T_L^3}\rho_q\,d^3\mathbf x=0$, contradicting
the strict inequality in this step. [A1, F1, F2, A3, algebra]

2.1 Independently, [L1] records the same compatibility requirement for
the Coulomb equation: a smooth periodic potential can exist only for
zero-mean charge density. Thus the contradiction is a consequence of the
specified periodic model and boundary conditions; adding a boundary,
puncture, or compensating source changes the hypotheses and is not
covered. [A2, L1, step 1.1, given] ∎
