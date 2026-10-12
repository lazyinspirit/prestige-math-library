---
id: pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws
kind: physics-theorem
title: "Number, energy and momentum laws of a one-photon preparation"
status: draft
origin: pipeline
domain: physics
dependency_level: 12
deps:
  [
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-photons-framework-radiation-sector-and-quantum-assignments,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian,
    lem-nrqm-fock-and-equilibrium-fock-sector-projections,
    thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators,
    thm-monotone-convergence-for-the-integral,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The outcome laws of the assigned radiation observables in a
  declared one-photon preparation of the model: the number observable has the
  sharp value one; the frequency and free-field energy laws are the
  push-forwards of the transverse momentum density under k -> c*|k| and k ->
  hbar*c*|k|, with means whenever the first moment is finite; and the one-photon
  momentum-component readouts are the push-forwards under k -> hbar*k_j, with
  means whenever the corresponding absolute first moment is finite. The
  frequency, energy and momentum-component variances are finite and strictly
  positive on their multiplier domains. The result is conditional on P1, P2 and
  the adopted radiation model, records no detector, no sampling model and no
  measured number, and shows that no normalisable one-photon vector has sharp
  frequency, energy or momentum."
sources:
  references:
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University,
        PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21),
        Chapter 9 Section 9.2 printed pages 135-138: mode expansions of the free
        field and the energy carried by a mode"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/p\
        ratts/phy851/lectures/lectures_full.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: photon number, the energy
        increment hbar*omega of a number state, and the coherent-state energy
        expectation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Adopt the state and composition postulate P1 and the observable and
probability postulate P2 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]), the radiation extension
postulate
([[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]) and
the radiation sector definition
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]], in
the state vocabulary of [[def-nrqm-state-geometry-framework-state-space]] and
the observable vocabulary of
[[def-nrqm-observables-framework-observable-and-outcome-law]]. Assume the
Axioms of Countable Choice and of Choice, the choice hypotheses of the cited
operator and spectral items ([[def-countable-choice]], [[def-axiom-of-choice]]).
Let $f\in\mathfrak h$ be a unit one-photon wave-packet vector. Under the
$d^{3}k$ normalization of clause (b) of
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]], its
coordinate representatives $f(k)$ have units $\mathrm m^{3/2}$. Put
$\varepsilon(k)=\hbar c|k|$, and let
$\rho_{f}$ be the one-photon preparation of the ray of $\iota_{1}(f)$. Then:

(a) *number law*: the outcome law of the assigned total-number observable
$(N,1)$ in $\rho_{f}$ is $\mu^{N}_{\rho_{f}}(B)=\mathbf 1_{B}(1)$ for every
Borel set $B\subseteq\mathbb R$: the number readout of the one-photon
preparation is one with probability one;

(b) *frequency and energy laws*: the assigned frequency law
$\mu^{\omega}_{\rho_f}$ and the outcome law of the assigned free-field energy observable
$(H_f,\mathrm J)$ in $\rho_{f}$ are the push-forwards of
$\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k$ under $k\mapsto c|k|$ and
$k\mapsto\hbar c|k|$, respectively:
$$\mu^{\omega}_{\rho_f}(B)=\int_{\{k:c|k|\in B\}}\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k,\qquad \mu^{H_f}_{\rho_f}(B)=\int_{\varepsilon^{-1}(B)}\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
and if $\int_{\mathbb R^{3}}|k|\,\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k<\infty$, their spectral-law means are
$$\int_{\mathbb R}\omega\,d\mu^{\omega}_{\rho_f}(\omega)=c\int_{\mathbb R^{3}}|k|\,\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k,\qquad \int_{\mathbb R}E\,d\mu^{H_f}_{\rho_f}(E)=\hbar c\int_{\mathbb R^{3}}|k|\,\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k;$$

(c) *momentum readouts*: for $j\in\{1,2,3\}$ the one-photon momentum-component
readout of clause (d)(3) of
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] has,
in the identification of the one-photon sector with $\mathfrak h$ by
$\iota_{1}$, the outcome law
$$\mu^{P_{j}}_{\rho_{f}}(B)=\int_{\{k:\hbar k_{j}\in B\}}\|f(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
the push-forward of $\|f\|^{2}\,d^{3}k$ under $k\mapsto\hbar k_{j}$, with mean
$\hbar\int k_{j}\|f(k)\|^{2}\,d^{3}k$ whenever
$\int |k_{j}|\,\|f(k)\|^{2}\,d^{3}k<\infty$;

(d) *no sharp frequency, energy or momentum*: for every unit vector
$f\in D(\varepsilon_{\mathfrak h})$, the variances of the frequency and energy
laws of (b) are strictly positive, and for every unit vector in
$D(M_{\hbar k_j}^{\mathfrak h})$ the momentum-component variance of (c) is
strictly positive; consequently the mode assignment "photon energy $E=\hbar\omega$,
$\omega=c|k|$" is a spectral assignment of the model and never an exact value
of a normalisable one-photon state;

(e) all assertions are conditional on P1, P2 and the adopted radiation model;
they record no detector model, no sampling model, no measured count and no
empirical claim.

## Facts & Assumptions

**Given:** the postulates P1, P2 and the adopted radiation model with transverse space $\mathfrak h$, sectors $\mathfrak H_{n}^{+}$, number operator $N$, free-field energy $H_f$ with $\varepsilon(k)=\hbar c|k|$, one-photon momentum readouts $M_{\hbar k_{j}}^{\mathfrak h}$, and a unit $f\in\mathfrak h$.

[F1] **Sector structure.** $\Pi_{n}$ is the orthogonal projection of $F(\mathfrak h)$ onto the closed subspace $\iota_{n}(\mathfrak H_{n}^{+})$, the ranges are pairwise orthogonal, $\sum_{n}\Pi_{n}=I$ in the strong operator topology, and $\|\psi\|^{2}=\sum_{n}\|\Pi_{n}\psi\|^{2}$ ([[lem-nrqm-fock-and-equilibrium-fock-sector-projections]] clauses (a)-(c)).

[F2] **Number operator.** $N$ is self-adjoint with $D(N)=\{\psi:\sum_{n}n^{2}\|\psi_{n}\|^{2}<\infty\}$, $N\iota_{n}(u)=n\,\iota_{n}(u)$ for every $u\in\mathfrak H_{n}^{+}$, and $\sigma(N)=\mathbb N$ ([[thm-nrqm-fock-and-equilibrium-number-operator-domain]] clauses (a),(b)).

[F3] **Spectral atoms.** For a self-adjoint operator $A$ with spectral measure $E_A$, $E_A(\{\lambda\})$ is the orthogonal projection onto the eigenspace $\ker(A-\lambda)$; for a unit eigenvector $u$ at $\lambda$ and a pure state $\rho=T_{u,u}$ one has $\mu^{A}_{\rho}(\{\lambda\})=1$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a),(b)).

[F4] **Free-field energy.** $H_f=\bigoplus_{n\ge0}T_{n}$ with $T_{n}$ self-adjoint on $\operatorname{ran}P_{+}^{(n)}$, $T_{n}\psi=\varepsilon_{n}\psi$, is self-adjoint and positive with $D(H_f)=\{\psi:\psi_n\in D(T_n)\ \forall n,\ \sum_{n}\|T_{n}\psi_{n}\|^{2}<\infty\}$; its one-particle restriction is $\varepsilon_{\mathfrak h}$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]] clauses (a)-(c)).

[F5] **The exact free-field direct-sum spectral measure.** For the actual sector operators $T_n$ of [F4], including $T_0=0$ on $\mathbb C$, write $E_n$ for their regular spectral PVMs. Then
$$E_{H_f}(B)=\bigoplus_{n\ge0}E_n(B),\qquad E_0(B)=\mathbf1_B(0)I_{\mathbb C}.$$
This is proved locally in [[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], proof 5.1: strong countable additivity follows by finite-sector truncation and a squared-norm tail bound; scalar regularity follows by finite compact/open approximations after discarding a tail of measure; nonnegative integration gives $\int t^2\,dE_\psi=\sum_n\int t^2\,d(E_n)_{\psi_n}$. Thus the identity integral has exactly the domain $\{\psi:\psi_n\in D(T_n)\ \forall n,\ \sum_n\|T_n\psi_n\|^2<\infty\}$, and bounded spectral truncations converge there to $(T_n\psi_n)_n$. Uniqueness of the regular representing PVM identifies the result with $E_{H_f}$. The same supplier proves that $E_1(B)$ is the restriction of the inverse-image indicator multiplier for $\varepsilon(k)$ to $\mathfrak h$. These exact proved energy statements, rather than an unsupported generic PVM-sum assertion, are what step 1.2 uses.

[F6] **Restricted multipliers.** For $m\in\{\hbar c|k|,\hbar k_{j}\}$ the operator $M_{m}^{\mathfrak h}$ is self-adjoint on $\mathfrak h$ with spectral measure $E_{m}(B)=M_{\mathbf 1_{m^{-1}(B)}}|_{\mathfrak h}$, the law of a unit $g\in\mathfrak h$ is the push-forward of $\|g\|^{2}\,d^{3}k$ under $k\mapsto m(k)$, and $M_{m}^{\mathfrak h}$ has no eigenvalues; for unit $g\in D(M_{m}^{\mathfrak h})$ the variance is strictly positive ([[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]] clauses (a)-(d)).

[F7] **Means and variances for pure states.** For a self-adjoint $A$ and a unit $u\in D(A)$ the mean of the outcome law in the pure state $T_{u,u}$ is $\langle Au,u\rangle$; the variance is $\|Au\|^{2}-\langle Au,u\rangle^{2}$ when $u\in D(A)$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (e)).

[F8] **Monotone convergence.** For nonnegative measurable functions $g_n\uparrow g$, their integrals against a measure increase to the integral of $g$ ([[thm-monotone-convergence-for-the-integral]]).

## Proof

1.1 [Number law] For $n\in\mathbb N$ the eigenspace of $N$ at $n$ is $\{\psi\in D(N):N\psi=n\psi\}$; comparing coordinates with the definition $(N\psi)_{m}=m\psi_{m}$, this eigenspace equals $\iota_{n}(\mathfrak H_{n}^{+})$, the closed subspace of vectors supported in coordinate $n$. Hence by [F3] the spectral projection is $E_{N}(\{n\})=\Pi_{n}$, and for the one-photon state $\rho_{f}=T_{\iota_{1}f,\iota_{1}f}$ we get $\mu^{N}_{\rho_{f}}(\{n\})=\operatorname{tr}(\rho_{f}\Pi_{n})=\langle\Pi_{n}\iota_{1}f,\iota_{1}f\rangle=\delta_{n,1}$ by [F1]; since the atoms cover $\mathbb N$ and the law is a measure, $\mu^{N}_{\rho_{f}}(B)=\mathbf 1_{B}(1)$ for every Borel set $B$. This proves (a). [F1, F2, F3, algebra]

1.2 [Frequency and energy laws] By [F5] the spectral measure of $H_f$ is $E(B)=\bigoplus_{n}E_{T_{n}}(B)$, and on the one-photon sector $\iota_{1}\mathfrak H_{1}^{+}$ it acts as $\iota_{1}E_{T_{1}}(B)\iota_{1}^{-1}$; since $T_{1}=\varepsilon_{\mathfrak h}$ by [F4], the restriction is the spectral measure $E_{\varepsilon}(B)=M_{\mathbf 1_{\varepsilon^{-1}(B)}}|_{\mathfrak h}$ of [F6]. Therefore $\mu^{H_f}_{\rho_{f}}(B)=\langle E(B)\iota_{1}f,\iota_{1}f\rangle=\langle E_{\varepsilon}(B)f,f\rangle=\int_{\varepsilon^{-1}(B)}\|f(k)\|^{2}\,d^{3}k.$ The assigned frequency law is the push-forward under $k\mapsto c|k|$ by clause (e) of [[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]]. These are the laws in (b), and they exist for every unit $f\in\mathfrak h$. [F4, F5, F6, algebra]

2.1 [Push-forward integration and frequency and energy first moments] Let $\nu_f(A):=\int_A\|f(k)\|^2\,d^3k$, a probability measure, and, for any real measurable $m$, let $\mu_m(B):=\nu_f(m^{-1}(B))$. For an indicator $g=\mathbf 1_C$, the defining identity gives $\int g\,d\mu_m=\int g(m(k))\,d\nu_f(k)$; linearity gives it for nonnegative simple $g$, and increasing simple approximation with [F8] gives it for every nonnegative Borel $g$. Applying this identity to $g(t)=t$ for the nonnegative frequency and energy maps gives the means in (b), finite under the stated first-moment condition. If also $f\in D(\varepsilon_{\mathfrak h})$, the energy mean agrees with $\langle\varepsilon_{\mathfrak h}f,f\rangle$ by [F7]; the first-moment condition alone need not put $f$ in that operator domain. [F6, F7, F8, step 1.2, algebra]

3.1 [Momentum readouts and means] The same sector restriction gives $\mu^{P_{j}}_{\rho_{f}}(B)=\langle E_{m}(B)f,f\rangle=\int_{\{m\in B\}}\|f\|^{2}\,d^{3}k$ for $m(k)=\hbar k_j$, the push-forward under $k\mapsto\hbar k_j$. For the signed identity function, apply the push-forward integral identity proved in step 2.1 separately to its positive and negative parts; the assumed finite absolute first moment makes both integrals finite, so their difference is the mean stated in (c). If also $f\in D(M_m^{\mathfrak h})$, this mean agrees with $\langle M_m^{\mathfrak h}f,f\rangle$ by [F7] and the isometry of $\iota_1$. This proves (c). [F6, F7, step 2.1, algebra]

4.1 [Strict positivity of the variances] By [F6] the multiplier $M_{\hbar c|k|}^{\mathfrak h}$ has no eigenvalues and every unit $f\in D(\varepsilon_{\mathfrak h})$ has strictly positive finite energy variance; together with step 1.2 this gives the energy variance claim. The frequency law is the positive constant rescaling $\omega=E/\hbar$, so on the same domain its variance is $\hbar^{-2}$ times the energy variance and is strictly positive. The same clause of [F6] applied to $m=\hbar k_j$ gives strictly positive finite momentum-component variance whenever $f\in D(M_{\hbar k_j}^{\mathfrak h})$. Hence no unit vector of $\mathfrak h$ has a sharp value of frequency, energy or any momentum component, and the assignments of the radiation postulate are spectral assignments. This proves (d). [F6, step 1.2, step 3.1, algebra]

5.1 [Assembly and scope] Step 1.1 proves (a), steps 1.2 and 2.1 prove the frequency and energy claims in (b), step 3.1 proves (c), and step 4.1 proves (d). No step introduces a detector, a sampling model, a measured count or an empirical premise, which is (e). [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Reading the mean.** The energy mean $\hbar c\int|k|\|f\|^{2}$ is the
  first moment of the transverse momentum density weighted by $\hbar c$; it is
  a preparation mean of the model, not a measured energy. It exists whenever
  $\int|k|\|f\|^{2}d^{3}k<\infty$, which is weaker than
  $f\in D(\varepsilon_{\mathfrak h})$; on that operator domain it also equals
  $\langle\varepsilon_{\mathfrak h}f,f\rangle$.
- **Why "photon energy $\hbar\omega$" remains meaningful.** For a model
  preparation concentrated near a wavevector $k_{0}$, the energy law is
  concentrated near $\hbar c|k_{0}|$ in the sense of the push-forward measure;
  the item claims no limit statement and no localisation, and the exact value
  is never attained by a normalisable vector.
