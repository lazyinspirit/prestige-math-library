---
id: def-nrqm-central-framework-coulomb-and-hydrogen-model
aliases: [nrqm-central-framework-coulomb-and-hydrogen-model]
kind: definition
domain: physics
title: "The declared Coulomb and two-body hydrogen model: one-centre operator, relative problem, reduced mass and scope exclusions"
status: published
origin: session
dependency_level: 12
deps: [def-nrqm-central-framework-central-potential-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, lem-nrqm-central-free-operator-differential-identification, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-transported-radial-endpoint-realization, thm-nrqm-coulomb-kummer-recurrence-and-termination, thm-nrqm-coulomb-two-body-reduced-mass, lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-euclidean-l2-product-unitary, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-central-potential-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  thm-nrqm-coulomb-two-body-reduced-mass: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The pair's declared Coulomb model, in a one-centre form for a spinless particle of declared mass and coupling in a fixed centre, and in a two-body form for two distinguishable spinless massive particles with charges -q_- and +q_+ and pair potential -kappa/|x1-x2|, where kappa is determined by the product q_-q_+; the equal-magnitude branch -q,+q is retained for the dipole consumers. It includes the declared centre-of-mass/relative decomposition with reduced mass mu, the hydrogen-like-ion identification for nuclear charge +Ze, and the model's scope exclusions. The item fixes model assumptions and readings of P1, P2, P4, P5, P6 and P7 together with cited mathematics; it asserts no empirical identification, no measured constant, no transition, photon or line-intensity claim, and no spectral or scattering consequence, which are supplied by the theorems of the page or by later radiation and scattering items. Spin, relativistic and QED corrections, finite nuclear size, external fields, many-body and shielding effects and radiation reaction are excluded."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3, printed pages 111-117 (the hydrogen atom: the Coulomb potential -e^2/(4 pi eps_0 r), the radial equation and energy spectrum, the Bohr radius and the fine-structure exclusion) and Section 4.2.3, printed pages 110-111 (the boundary condition at the origin and self-adjointness)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 182-185 (equation (8.1) gives the pair potential -Ze^2/(4 pi epsilon_0 r) for charges -e,+Ze, and equations (8.3)-(8.10) give the centre-of-mass and relative coordinates, reduced mass and radial Hamiltonian)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.1 printed pages 221-222 (the Coulomb Hamiltonian -Delta - gamma/|x| as a self-adjoint operator on H^2) and Section 10.2 printed pages 222-225 (the one-particle reduction and separation)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the framework data of clause (a) of the declared
central-potential model [[def-nrqm-central-framework-central-potential-model]]
with a declared mass parameter $m>0$, spin label $s=0$, the state space
$H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$, the componentwise position and momentum
families and the action constant $\hbar>0$ of
[[def-nrqm-kinematics-framework-massive-spin-s-model]]; units are those of
[[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice as the choice hypotheses of the cited
mathematical suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) The declared one-centre Coulomb model.** As an additional model
assumption of the pair, fix a real **coupling** $\kappa>0$ with the declared
unit $\mathrm{J\,m}$ and put
$$\gamma:=\frac{2m\kappa}{\hbar^{2}}\qquad(\text{unit }\mathrm{m^{-1}}),\qquad C_{\gamma}:=-\Delta-\frac{\gamma}{|\cdot|}\ \text{ on }\ D(C_{\gamma})=H^{2}(\mathbb R^{3};\mathbb C),$$
the self-adjoint operator of
[[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] clause (c). The **assigned
energy operator** of the one-centre Coulomb model is
$$H_{\kappa}:=\frac{\hbar^{2}}{2m}\,C_{\gamma},$$
with domain $D(H_{\kappa}):=D(C_{\gamma})$; by
[[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a)
and (b) it is self-adjoint with the same domain, and by
[[lem-nrqm-central-free-operator-differential-identification]] together with
the action formula of the cited theorem it acts by
$$H_{\kappa}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f-\kappa\frac{f}{|\cdot|}\qquad(f\in D(H_{\kappa})),$$
where $\Delta_{w}$ is the weak Laplacian. The model declares the **length
scale** $a_{\kappa}:=\hbar^{2}/(m\kappa)$, read in metres, and the **energy
scale** $\mathcal E_{\kappa}:=m\kappa^{2}/(2\hbar^{2})=\hbar^{2}/(2ma_{\kappa}^{2})$,
read in joules. The model adopts $(H_{\kappa},\mathrm J)$ as its declared
energy observable for the one-centre problem; the self-adjointness is the
cited theorem's and no spectral property is presupposed here.

**(c) The declared radial reading of the one-centre model.** Let $U$ and
$(A_{l})_{l\ge0}$ be the unitary and the radial operators of
[[thm-nrqm-coulomb-transported-radial-endpoint-realization]] clauses (a)-(d):
$U$ maps $H_{0}$ onto $K=\bigoplus_{(l,m)}L^{2}((0,\infty),dr;\mathbb C)$ with
$UH_{\kappa}U^{*}=\bigoplus_{(l,m)}(\hbar^{2}/2m)A_{l}$, and each $A_{l}$ is self-adjoint
with form domain $V_{l}$ and domain $D(A_{l})$. The model declares the
**sector $(l,m)$ radial energy operator** $A_{l}^{(\kappa)}:=(\hbar^{2}/2m)A_{l}$,
read in joules, and, for a class $u\in D(A_{l})$, the **declared radial
equation** is the distributional identity
$$-u''(r)+\Bigl(\frac{l(l+1)}{r^{2}}-\frac{\gamma}{r}\Bigr)u(r)=A_{l}u(r)\qquad\text{on }(0,\infty),$$
which by clause (c) of the cited theorem is an ordinary differential equation
with $C^{2}$ representative whenever $A_{l}u=\lambda u$ for a constant
$\lambda$ (unit $\mathrm{m^{-2}}$); its physical energy is
$E=(\hbar^{2}/2m)\lambda$ in joules. For an **inverse-length parameter**
$k>0$ (unit $\mathrm{m^{-1}}$), put $\lambda=-k^{2}$ and
$E(k):=-\hbar^{2}k^{2}/(2m)$ (unit $\mathrm J$). The
**regular reduced solution** at this parameter is the function
$u_{\mathrm{reg}}(r)=r^{l+1}e^{-kr}v(2kr)$ of clause (c) of
[[thm-nrqm-coulomb-kummer-recurrence-and-termination]], with $v$ the regular
power series of clause (b) and dimensionless argument $2kr$; the pair uses it as the declared radial template
of the model, not as a physical state, until the normalisation and spectral
theorems of the page identify it.

**(d) The declared two-body Coulomb model.** As a further model assumption,
take two **distinguishable** spinless massive particles with declared mass
parameters $m_{1},m_{2}>0$ (unit kg) and opposite declared charges: particle 1
carries charge $-q_{-}$ and particle 2 carries charge $+q_{+}$, where the
charge magnitudes $q_{-},q_{+}>0$ are read in coulombs. Declare the **pair
coupling**
$$\kappa:=\frac{q_{-}q_{+}}{4\pi\varepsilon_{0}},\qquad \varepsilon_{0}:=(\mu_{0}c^{2})^{-1},$$
where $\mu_{0}$ is the declared magnetic constant of the SI conventions and
$c$ the speed of light, both as in clause (c) of
[[def-nrqm-framework-quantities-and-units]]; the identification
$\kappa=q_{-}q_{+}/(4\pi\varepsilon_{0})$ is a constitutive assumption of the
model, and $\kappa$ is read in $\mathrm{J\,m}$. Its equal-magnitude,
net-neutral submodel is $q_{-}=q_{+}=q>0$, with charges $-q,+q$ and
$\kappa=q^{2}/(4\pi\varepsilon_{0})$; this is the branch used by the later
relative-dipole consumers. The two-particle state space is the Hilbert tensor product of
two copies of the one-particle space of clause (a) as in
[[lem-nrqm-composites-hilbert-tensor-construction]], identified with
$L^{2}(\mathbb R^{6};\mathbb C)$ through
[[lem-nrqm-composites-euclidean-l2-product-unitary]]; the spin-zero internal
factor is trivial, and because the two particles are of different species no
symmetrisation is imposed (the case of identical species belongs to the
identical-particle sector of P6 and is not used here). The **assigned energy
operator** is
$$H_{2}:=-\frac{\hbar^{2}}{2m_{1}}\Delta_{x_{1}}-\frac{\hbar^{2}}{2m_{2}}\Delta_{x_{2}}-\frac{\kappa}{|x_{1}-x_{2}|},\qquad D(H_{2}):=H^{2}(\mathbb R^{6};\mathbb C),$$
which is self-adjoint by clause (c) of
[[thm-nrqm-coulomb-two-body-reduced-mass]]. Let
$$\Phi(x_{1},x_{2}):=(R,r),\qquad R:=\frac{m_{1}x_{1}+m_{2}x_{2}}{M},\quad r:=x_{1}-x_{2},\quad M:=m_{1}+m_{2},$$
be the centre-of-mass/relative coordinate map of that theorem, with its
unitary $U_{\Phi}$. The model declares the **centre-of-mass/relative reading**
$U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$ of clause (c) of
that theorem, with the **reduced mass**
$$\mu:=\frac{m_{1}m_{2}}{m_{1}+m_{2}}\qquad(\text{unit }\mathrm{kg}),$$
the centre-of-mass kinetic operator $T_{R}:=-\frac{\hbar^{2}}{2M}\Delta_{R}$
and the **relative operator** $C_{\mu}:=-\frac{\hbar^{2}}{2\mu}\Delta_{r}-\frac{\kappa}{|r|}$;
the relative operator is exactly the one-centre Coulomb operator of clause
(b) with mass parameter $\mu$. The energy operators $H_{2}$, $T_{R}$ and
$C_{\mu}$ are each read in joules. The model further declares the **fixed-nucleus
reading**: the one-centre model of clauses (b), (c) with mass parameter $m_{1}$
is read as the limiting description in which the second particle is
infinitely heavy, $\mu\to m_{1}$ as $m_{2}\to\infty$ at fixed $m_{1},\kappa$;
this is a declared limiting reading, and no convergence theorem for operators
or states is asserted by it.

**(e) The hydrogen-like identification.** A **hydrogen-like ion** assignment of
the two-body model is the choice $m_{1}=m_{\mathrm e}$ (electron mass
parameter), $m_{2}=m_{\mathrm n}$ (nuclear mass parameter), $q_{-}=e$ (the
elementary charge of clause (c) of
[[def-nrqm-framework-quantities-and-units]]) and $q_{+}=Ze$ (nuclear charge
magnitude), so that $\kappa=Ze^{2}/(4\pi\varepsilon_{0})$ for a declared
positive integer $Z$. The **hydrogen assignment** is the specialization
$Z=1$, $m_{2}=m_{\mathrm p}$, for which $q_{-}=q_{+}=e$ and the pair is
net-neutral. These assignments use empirical mass and charge parameters; any
comparison of the model's consequences with a laboratory hydrogen atom is a
tested identification in the sense of clause (iii) of P7
([[post-nrqm-framework-preparation-and-apparatus]]) and carries the
uncertainty of that identification. The model declares no numerical value of
$m_{\mathrm e},m_{\mathrm n},e,\mu_{0}$ or $\hbar$; numerical evaluations, when
made, use their declared or measured values as explicitly qualified empirical
inputs.

**(f) Scope exclusions.** Until their own items introduce them, the Coulomb
and hydrogen models exclude: spin, magnetic moment couplings and
spin–statistics assignments beyond the trivial spin-zero factor; relativistic
corrections, in particular any fine-structure splitting of the degeneracy of
the gross-structure levels; finite nuclear size, nuclear recoil beyond the
two-body reduction of clause (d), and nuclear structure; QED corrections such
as vacuum polarisation and the Lamb shift, and hyperfine structure; shielding
and many-body modification of the $1/r$ potential; the radiation extension,
spontaneous emission, radiation reaction and any photon, transition-frequency
or line-intensity statement; external electromagnetic fields; and any
scattering, ionisation or continuum process, which belongs to the scattering
items of the quantum-mechanics track. The model asserts no empirical result
and fixes no measured quantity.
