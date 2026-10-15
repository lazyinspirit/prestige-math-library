---
id: pthm-qft-qed-coulomb-constraints
kind: physics-theorem
domain: physics
library: physics
title: "Periodic neutral classical Coulomb constraint model"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 10
deps:
  - post-qft-qed-local-coupling
  - pthm-qft-qed-classical-coupling
  - def-qft-qed-physical-gauge-quantities
  - def-qft-framework-units
  - def-qft-qed-gauge-data
  - def-qft-dirac-projections
  - lem-qft-qed-coulomb-constraint
  - lem-qft-qed-dirac-first-order-constraints
  - def-countable-choice
  - def-em-si-conventions
  - def-em-electromagnetic-tensor
  - post-em-vacuum-maxwell
dependency_roles:
  post-qft-qed-local-coupling: physical-assumption
  pthm-qft-qed-classical-coupling: physical-result
  def-qft-qed-physical-gauge-quantities: formulation-prerequisite
  def-qft-framework-units: formulation-prerequisite
  def-qft-qed-gauge-data: formulation-prerequisite
  def-qft-dirac-projections: mathematical-premise
  lem-qft-qed-coulomb-constraint: mathematical-premise
  lem-qft-qed-dirac-first-order-constraints: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
proof_strategy: direct
physical_scope: "The explicit smooth, periodic, neutral Gauss branch on a flat three-torus, with a zero-mean Coulomb potential, plus the separate finite-mode classical commuting-spinor primary-constraint calculation; no nonneutral periodic solution, continuum quantum density product, or CAR derivation is asserted."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6, §§6.2–6.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§6.2 for the Maxwell multiplier and Gauss constraint; §6.3.1 for the Dirac–Maxwell coupling. The source uses natural units and nonperiodic spatial boundary conditions, so the torus solver is proved conditionally by the local mathematical supplier."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§54, printed pp. 332–334, for Maxwell's equations and potential convention; §55, printed pp. 335–338, for the scalar-potential constraint, Coulomb Hamiltonian, and transverse field. Its spatial-infinity boundary condition is not substituted for the periodic neutral hypothesis here."
---

## Statement

Assume Countable Choice [[def-countable-choice]] for the torus Fourier
construction. Let $L>0$, let $I\subseteq\mathbb R$ be an open time
interval, and let the spatial domain be the flat torus
$\mathbb T_L^3=(\mathbb R/L\mathbb Z)^3$, where $L$ is a positive length
in metres. Coordinates use $x^0=ct$ with $t$ in seconds under
[[def-qft-framework-units]]. Use the smooth classical branch of
[[post-qft-qed-local-coupling]] with smooth periodic electromagnetic
potentials and spinor. Here $\psi$ has the canonical length dimension
$\mathrm m^{-3/2}$ of [[def-qft-framework-units]], so the scalar-potential
source $\rho_q:=q_{\rm SI}\psi^\dagger\psi$ has unit $\mathrm{C,m^{-3}}$.
On stationary solutions it agrees
with the current density in [[pthm-qft-qed-classical-coupling]]. Use the
gamma-matrix and
$\alpha,\beta$ conventions of [[def-qft-qed-gauge-data]]. In Coulomb gauge
$\operatorname{div}\mathbf A=0$, the multiplier equation for any smooth
periodic configuration is
$\operatorname{div}\boldsymbol\pi_A+\rho_q=0$. On the explicitly neutral
branch
$\int_{\mathbb T_L^3}\rho_q(\mathbf x,t)\,d^3\mathbf x=0$ for every $t\in I$,
the zero-mean scalar potential is the unique smooth periodic solution of
$-\Delta\varphi=\rho_q/\varepsilon_0$. With
$\widehat\rho_q(\mathbf n,t)=L^{-3}\int_{\mathbb T_L^3}
\rho_q(\mathbf x,t)e^{-2\pi i\mathbf n\cdot\mathbf x/L}\,d^3\mathbf x$ and
$\boldsymbol\kappa_{\mathbf n}=2\pi\mathbf n/L$, the longitudinal energy is

$$\frac{\varepsilon_0}{2}\int_{\mathbb T_L^3}|\nabla\varphi|^2\,d^3\mathbf x =\frac12\int_{\mathbb T_L^3}\rho_q\varphi\,d^3\mathbf x =\frac{L^3}{2\varepsilon_0} \sum_{\mathbf n\in\mathbb Z^3\setminus\{0\}} \frac{|\widehat\rho_q(\mathbf n,t)|^2}{|\boldsymbol\kappa_{\mathbf n}|^2} \ge0.$$

The corresponding classical Hamiltonian, before imposing the Gauss
constraint, contains

$$H=\int_{\mathbb T_L^3}\left[ \frac{|\boldsymbol\pi_A|^2}{2\varepsilon_0} +\frac{|\mathbf B|^2}{2\mu_0} +\psi^\dagger\!\left(c\boldsymbol\alpha\cdot (-i\hbar\nabla-q_{\rm SI}\mathbf A)+\beta m_{\rm SI}c^2\right)\!\psi +\varphi(\operatorname{div}\boldsymbol\pi_A+\rho_q) \right]d^3\mathbf x,$$

with $\pi_\varphi=0$ the primary multiplier momentum. In a separate
truncation to $N\ge1$ orthonormal spatial spinor modes, let $z_j,\bar z_j$
be dimensionless commuting complex-coordinate notation with canonical
brackets $\{z_j,p_k\}=\delta_{jk}$,
$\{\bar z_j,\bar p_k\}=\delta_{jk}$ and all other elementary brackets zero.
For $\hbar>0$, the symmetrized first-order Dirac kinetic term gives the
primary constraints
$C_j=p_j-i\hbar\bar z_j/2$ and
$\bar C_j=\bar p_j+i\hbar z_j/2$ with invertible mixed bracket matrix
$-i\hbar I_N$. This finite-dimensional classical calculation does not
derive fermionic CAR. The neutral torus branch is an explicit hypothesis.
For the selected electron, $q_{\rm SI}=-e_{\rm SI}\ne0$, so a neutral
single-species commuting-spinor configuration has $\psi=0$; no nontrivial
neutral charged classical Dirac configuration is asserted. The finite-mode
constraint calculation is separate and does not claim to be a solution in
that branch.

## Facts & Assumptions

**Given:** The adopted local Maxwell–Dirac action; Countable Choice for the
torus Fourier supplier; the current Coulomb and finite-mode mathematical
carriers at their inspected conditional interfaces; and the SI and Clifford
conventions stated below.

[A1] [[post-qft-qed-local-coupling]]: the model adopts the smooth local
Maxwell–Dirac action with physical source function from the scalar-potential
coupling; it is a physical formulation, not a global solution theorem.

[A2] [[def-countable-choice]]: Countable Choice, written
$\mathrm{AC}_\omega$, is assumed by the torus Fourier supplier.

[A3] On the explicitly selected electron neutral branch,
$\int_{\mathbb T_L^3}\rho_q(\mathbf x,t)\,d^3\mathbf x=0$ for every
$t\in I$. The separate finite-mode calculation does not assume this branch
solves the classical field equations.

[F1] [[def-qft-qed-physical-gauge-quantities]]: $q_{\rm SI}$ is in
coulombs, the selected electron has $q_{\rm SI}=-e_{\rm SI}$, and
$\varepsilon_0=(\mu_0c^2)^{-1}$; the metric-lowered potential is
$A_{{\rm SI},0}=-\varphi/c$.

[F2] [[def-em-electromagnetic-tensor]]: $F_{0i}=-E_i/c$ and
$F_{ij}=\epsilon_{ijk}B_k$; a supplied smooth potential gives $F=dA$.

[F3] [[post-em-vacuum-maxwell]]: the smooth SI branch has
$\operatorname{div}E=\rho/\varepsilon_0$ and
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$.

[F4] [[pthm-qft-qed-classical-coupling]]: on stationary smooth fields in
the adopted model, the current density is $q_{\rm SI}\psi^\dagger\psi$;
this agrees with the scalar-potential source function defined here.

[F5] [[def-qft-dirac-projections]]: $\gamma^0=\beta$,
$\gamma^i=\beta\alpha_i$, $\bar\psi=\psi^\dagger\beta$,
$\beta^\dagger=\beta$, $\beta^2=I_4$, and $\boldsymbol\alpha,\beta$
are Hermitian.

[F6] [[def-qft-qed-gauge-data]]: the SI charge and mass inputs convert to
$g=q_{\rm SI}\sqrt{\mu_0c/\hbar}$ and
$\mu=m_{\rm SI}c/\hbar$ in the natural action, with
$a_a=A_{{\rm SI},a}/\sqrt{\mu_0\hbar c}$.

[F7] [[def-qft-framework-units]]: coordinates have units metre with
$x^0=ct$, and $c,\hbar>0$ have their exact SI defining values.

[L1] [[lem-qft-qed-coulomb-constraint]] (draft carrier; current Step 1 decision
escalated because its QFT QED-gauge-data prerequisite is escalated:
for smooth real periodic $\rho$ and $\mathbf J$ on
$T_L^3$, with smooth periodic potentials and positive $L,\varepsilon_0,\mu_0$,
the canonical Hamiltonian has multiplier term
$\phi(\nabla\cdot\boldsymbol\pi_A+\rho)$; Coulomb gauge reduces the
constraint to $-\Delta\phi=\rho/\varepsilon_0$. Neutrality is necessary;
for zero-mean data the unique zero-mean smooth solution has the stated Fourier
coefficients and nonnegative energy identity. This is a conditional solver
for smooth periodic data, not a quantum density-product construction.

[L2] [[lem-qft-qed-dirac-first-order-constraints]] (draft carrier; current Step 1
decision escalated because its QFT QED-gauge-data prerequisite is escalated: for finite $N\ge1$ commuting spinor-mode
coordinates with the displayed complex canonical brackets and $\hbar>0$,
the first-order kinetic term gives
$C_j=p_j-i\hbar\bar z_j/2$ and
$\bar C_j=\bar p_j+i\hbar z_j/2$ with invertible constraint matrix
$M=\begin{pmatrix}0&-i\hbar I_N\\i\hbar I_N&0\end{pmatrix}$.
The reduced bracket is $\{z_j,\bar z_k\}_D=-i\delta_{jk}/\hbar$ and the
result is a finite classical commuting-coordinate calculation; it does not
derive CAR.

## Proof
**Given:** [A1]–[A3], [F1]–[F7], and the current conditional interfaces
[L1]–[L2].

1.1 In the adopted action, $\rho_q:=q_{\rm SI}\psi^\dagger\psi$ is the
coefficient of the scalar-potential coupling. For the Dirac part, $x^0=ct$
and $A_0=-\varphi/c$ give
$D_0\psi=c^{-1}(\dot\psi+iq_{\rm SI}\varphi\psi/\hbar)$ and
$D_0\bar\psi=c^{-1}(\dot{\bar\psi}-iq_{\rm SI}\varphi\bar\psi/\hbar)$.
Using [F5], the time part of $\hbar c\mathcal L_{\rm nat}$ is the canonical
term $i\hbar(\psi^\dagger\dot\psi-\dot\psi^\dagger\psi)/2$ minus
$q_{\rm SI}\varphi\psi^\dagger\psi$. The symmetric spatial derivative,
integrated by parts on the periodic torus, is
$i\hbar c\psi^\dagger\boldsymbol\alpha\cdot\nabla\psi$: the integral
of $\nabla\cdot(\psi^\dagger\boldsymbol\alpha\psi)$ vanishes because
opposite periodic faces cancel. The spatial vector-coupling term in the
Lagrangian is $q_{\rm SI}c\psi^\dagger\boldsymbol\alpha\cdot\mathbf A\psi$,
and the mass term is $-m_{\rm SI}c^2\psi^\dagger\beta\psi$. The
first-order canonical momenta are $i\hbar\psi^\dagger/2$ and
$-i\hbar\psi/2$, so their pairing with the time derivatives cancels the
canonical term. Negating the remaining Dirac Lagrangian terms in the Legendre
transform gives the matter Hamiltonian density
$\psi^\dagger[c\boldsymbol\alpha\cdot(-i\hbar\nabla-q_{\rm SI}\mathbf A)
+\beta m_{\rm SI}c^2+q_{\rm SI}\varphi]\psi$, whose scalar term is
$\varphi\rho_q$. On stationary fields this source agrees with [F4].
[A1, F1, F4, F5, F6, F7, given, algebra]

1.2 The finite-mode calculation is separate from the field branch. For
$N\ge1$ and $\hbar>0$, [L2] gives the displayed constraint matrix
$M=\begin{pmatrix}0&-i\hbar I_N\\i\hbar I_N&0\end{pmatrix}$.
Its determinant is $(-i\hbar)^{2N}\ne0$, so the primary constraints are
second class. The reduced bracket from [L2] is
$\{z_j,\bar z_k\}_D=-i\delta_{jk}/\hbar$; the calculation uses
commuting classical coordinates only and does not derive fermionic CAR.
[A1, F7, L2, algebra]

2.1 From [F1]–[F3], $S_0^2=\mu_0\hbar c$ and
$F_{\rm SI}=S_0f$, so the physical Maxwell Lagrangian density is
$-F_{ab}^{\rm SI}F_{\rm SI}^{ab}/(4\mu_0)$. The tensor conventions [F2]
give
$F_{ab}^{\rm SI}F_{\rm SI}^{ab}=2(|\mathbf B|^2-|\mathbf E|^2/c^2)$;
using $\varepsilon_0=(\mu_0c^2)^{-1}$ from [F1], this becomes
$\mathcal L_M=\varepsilon_0|\dot{\mathbf A}+\nabla\varphi|^2/2
-|\mathbf B|^2/(2\mu_0)$. Differentiating with respect to
$\dot{\mathbf A}$ gives
$\boldsymbol\pi_A=\varepsilon_0(\dot{\mathbf A}+\nabla\varphi)
=-\varepsilon_0\mathbf E$; there is no $\dot\varphi$ term, so
$\pi_\varphi=0$. Since
$\dot{\mathbf A}=\boldsymbol\pi_A/\varepsilon_0-\nabla\varphi$,
the Maxwell Legendre transform is
$|\boldsymbol\pi_A|^2/(2\varepsilon_0)+|\mathbf B|^2/(2\mu_0)
-\boldsymbol\pi_A\cdot\nabla\varphi$. Integrating the last term by
parts on the torus gives $+\varphi\nabla\cdot\boldsymbol\pi_A$;
opposite periodic faces cancel. Adding the matter Hamiltonian from step 1.1
gives exactly the Hamiltonian in the Statement, including
$\varphi(\nabla\cdot\boldsymbol\pi_A+\rho_q)$.
[A1, F1, F2, step 1.1, given, algebra]

3.1 Varying the unrestricted multiplier $\varphi$ in step 2.1 imposes
$\nabla\cdot\boldsymbol\pi_A+\rho_q=0$. Substituting
$\boldsymbol\pi_A=-\varepsilon_0\mathbf E$ gives
$\varepsilon_0\nabla\cdot\mathbf E=\rho_q$. In Coulomb gauge,
$\nabla\cdot\mathbf E=-\Delta\varphi$ because
$\nabla\cdot\dot{\mathbf A}=0$, so the constraint becomes
$-\Delta\varphi=\rho_q/\varepsilon_0$. This is the Gauss sign in [F3].
The multiplier equation holds for every smooth periodic source; neutrality
is needed only for a periodic solution. [A1, F1, F3, step 2.1, algebra]

4.1 Under the neutral-branch hypothesis in the Statement, the smoothness,
periodicity, and zero-mean hypotheses of [L1] hold at each $t\in I$.
It supplies the unique zero-mean Fourier solution and energy identity. Each
summand is nonnegative because $\varepsilon_0>0$ by [F1] and
$|2\pi\mathbf n/L|^2>0$ for $\mathbf n\ne0$; hence the longitudinal
energy is nonnegative. This remains conditional on the current draft solver
and Countable Choice and asserts no solution for nonneutral data.
[A2, F1, L1, step 3.1, algebra]

5.1 On the neutral branch [A3], [F1] and step 1.1 give
$\rho_q=-e_{\rm SI}\psi^\dagger\psi$ and
$\int_{\mathbb T_L^3}\psi^\dagger\psi\,d^3\mathbf x=0$ because
$e_{\rm SI}>0$. The integrand is continuous and nonnegative. If it were
positive at any point, continuity would make it positive on a ball of
positive volume, forcing a positive integral. Thus it vanishes everywhere
and $\psi=0$. The finite-mode calculation of step 1.2 is logically
separate and does not assert a solution in this neutral branch.
[A3, F1, step 1.1, algebra] ∎
