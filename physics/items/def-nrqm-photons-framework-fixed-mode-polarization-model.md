---
id: def-nrqm-photons-framework-fixed-mode-polarization-model
kind: definition
title: "The fixed-mode polarisation model of the framework"
status: published
origin: pipeline
domain: physics
dependency_level: 11
deps:
  [
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-state-vectors-and-rays,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-photons-analyzer-projections-and-overlaps,
    def-hilbert-orthogonal-projection,
    def-countable-choice, def-dependent-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-state-vectors-and-rays: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-photons-analyzer-projections-and-overlaps: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared fixed propagation-mode polarisation model of the
  framework: a nonzero wavevector label, a declared real orthonormal pair spanning
  the real transverse plane with an optional common phase, the two-dimensional
  complex polarisation space with its
  unit rays as idealised one-photon polarisation preparations, and the
  two-outcome polarisation analyser family with the Born outcome law of P2 and
  the Lueders reading of P3 where used. The model is an adopted idealisation of
  a transverse mode with a definite propagation label; it is not a spatial wave
  function, has no position or momentum observable, is not the massless limit of
  the massive model, and asserts no localisation, no detector response, no loss,
  no efficiency and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6 printed pages 14-15 (PDF pages 22-23): the transmitting and
        blocking states of a photon, the amplitudes cos(theta) and sin(theta),
        the transmitted probability cos^2(theta), and the circular-polarisation
        alternative basis of the same two-dimensional space"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: the single electromagnetic
        field mode and its quantum oscillator description"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the ideal conditional-measurement
postulate P3, the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]],
[[post-nrqm-framework-preparation-and-apparatus]]) and the radiation
extension postulate
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]] in
its clause (i). Read the state vocabulary in
[[def-nrqm-state-geometry-framework-state-space]], the observable vocabulary
in [[def-nrqm-observables-framework-observable-and-outcome-law]], the
measurement vocabulary in
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]], and
the units of angles in [[def-nrqm-framework-quantities-and-units]]: angles and
phases are dimensionless under the radian convention. Assume Countable Choice,
Dependent Choice and Choice ([[def-countable-choice]], [[def-dependent-choice]],
[[def-axiom-of-choice]]), including the hypotheses inherited from the adopted
radiation postulate and its Fock-space suppliers.

**(b) Declared fixed-mode data.** A **declared fixed-mode polarisation model**
consists of:

1. a nonzero **propagation label** $k_{0}\in\mathbb R^{3}\setminus\{0\}$, read
   in $\mathrm m^{-1}$ in a declared inertial chart, which is a parameter of the
   model and not a state;
2. a declared **transverse frame**, that is a pair $v_j=\zeta u_j$ for
   $j\in\{1,2\}$, where $(u_1,u_2)$ is a real orthonormal basis of
   $k_0^\perp:=\{u\in\mathbb R^3:k_0\cdot u=0\}$ and $\zeta\in\mathbb C$
   is one common phase factor, $|\zeta|=1$. Here $k_0\cdot u$ is the real
   Euclidean dot product, and the Hermitian form on $\mathbb C^3$ is
   $\langle x,y\rangle=\sum_{\ell=1}^3 x_\ell\overline{y_\ell}$, linear
   in its first argument; thus $\langle v_i,v_j\rangle=\delta_{ij}$ and
   $k_0\cdot v_j:=\sum_{\ell=1}^3(k_0)_\ell(v_j)_\ell=0$;
3. the **polarisation space** $V:=\mathbb Cv_{1}\oplus\mathbb Cv_{2}$ with the
   restricted Hermitian inner product and the orthonormal basis
   $(e_{1},e_{2}):=(v_{1},v_{2})$.

The model's **state space** is $D(V)$, the set of density operators of $V$; the
**pure preparations** of the model are the unit rays $[\psi]$ of $V$, that is
the preparations assigned the pure state $\widehat\rho(\psi)$ of
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]], and a **mixed
preparation** is a statistical mixture of preparations in the sense of P1.
A pure ray is **linearly polarised** when it has a nonzero real representative
in $k_0^\perp$. The map
$\theta\mapsto\psi_{\theta}:=\cos\theta\,e_{1}+\sin\theta\,e_{2}$ assigns
to each angle $\theta\in\mathbb R$ a distinguished pure preparation, the
**linear polarisation preparation at angle $\theta$** in the declared
transverse frame. In particular,
$\psi_\theta=\zeta(\cos\theta\,u_1+\sin\theta\,u_2)$ has that ray, whose
real direction is the unoriented line
$\mathbb R(\cos\theta\,u_1+\sin\theta\,u_2)$; hence the physical angle
label is modulo $\pi$. General complex unit vectors of $V$ remain allowed as
pure preparations and need not be linearly polarised.

**(c) Declared polarisation analyser.** For each angle $\theta\in\mathbb R$ the
**declared polarisation analyser at angle $\theta$** is the declared ideal
sharp measurement of clause (a) of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]] with
two outcomes labelled $+1$ and $-1$ and outcome structure
$$(P_{\theta},\,P_{\theta}^{\perp}),\qquad P_{\theta}x=\langle x,e_{\theta}\rangle e_{\theta},\quad e_{\theta}:=\cos\theta\,e_{1}+\sin\theta\,e_{2},\qquad P_{\theta}^{\perp}:=I-P_{\theta},$$
whose projections $P_{\theta},P_{\theta}^{\perp}$ are those of
[[lem-nrqm-photons-analyzer-projections-and-overlaps]]. The **outcome law** of
the analyser in a preparation $\rho$ is the reading of P2 for the projections
of the outcome structure, and the labels are dimensionless with the reading
"$+1$: transmitted", "$-1$: blocked". Where a conditional post-measurement
state is used, it is the Lueders update of clause (b) of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]; the
framework does not assert that a laboratory absorber leaves an outgoing
one-photon polarisation state, and the absorption outcome is used only through
its discarded-outcome law unless a separate instrument is declared (clause (v)
of P3).

**(d) Frame covariance and angle labels.** For another complex orthonormal transverse pair $(e_1',e_2')$ (not necessarily a transverse frame of clause (b)), let $U:V\to V$ be the unitary map with $Ue_i=e_i'$, explicitly $Ux=\sum_i\langle x,e_i\rangle e_i'$. Its transported sharp-measurement family is $P_\theta'=UP_\theta U^*$, because $Ue_\theta=\cos\theta e_1'+\sin\theta e_2'$. Under the simultaneous transport of a preparation to $\rho'=U\rho U^*$ the Born probabilities agree: $\operatorname{tr}(\rho'P_\theta')=\operatorname{tr}(U\rho P_\theta U^*)=\operatorname{tr}(\rho P_\theta)$. The last equality follows by evaluating the finite trace in a transported orthonormal basis; the same argument preserves trace one, and conjugation preserves positivity and self-adjointness of $\rho$. Thus covariance concerns the transported states and projectors together. A general complex basis change need not leave the original linear-analyser family fixed: replacing $e_2$ by $ie_2$ gives rays of $\cos\theta e_1+i\sin\theta e_2$, generally absent from the original family, and does not satisfy clause (b). For two transverse frames of clause (b), the bases differ by a common phase times a real orthogonal two-by-two matrix. Write its first column as $(\cos\chi,\sin\chi)$; its second column is $(-\sin\chi,\cos\chi)$ or $(\sin\chi,-\cos\chi)$ according to whether its determinant is $+1$ or $-1$. The families are equal with the angle reparametrisation $\theta\mapsto\chi+\theta$ or $\chi-\theta$, respectively, by the sine and cosine addition formulas. Arbitrary complex basis transport gives a valid sharp measurement but need not give a linear polariser. The value of $|k_0|$ enters no polarisation probability: it enters the separate mode frequency and energy assignments of the radiation postulate.

**(e) Scope.** The model is an idealisation of a transverse propagation mode
with a definite mode label. It is a finite-dimensional internal-factor model
in the sense of P1 and P6: its state space is $D(V)$, its pure preparations are
rays, and its analyser is a declared ideal sharp measurement. It contains no
position observable, no momentum observable, no spatial wave function and no
localisation claim, and it is not the massive one-particle model of P5 with
$m=0$ and is not obtained from that model by a mass-to-zero limit; no such
limit is used or claimed. The mode label $k_{0}$ is not a
normalisable state of any sector of the framework, and a plane wave is not
introduced as a state. Whether a laboratory polariser and source realize this
declared model, with what efficiency, loss and background, is a tested
identification with uncertainty under P7, not a consequence of this
definition.

**(f) Status.** Clauses (a)-(e) fix the model data, its outcome vocabulary and
its scope; they add no assumption beyond the cited postulates and the cited
finite-dimensional mathematics. The mathematical properties of the projections
are the content of
[[lem-nrqm-photons-analyzer-projections-and-overlaps]]; the conditional outcome law of the declared analyser is proved on this page. No empirical claim is made here.
