---
id: ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal
kind: example
title: "Number statistics of a single declared mode: sharp, Poisson and
  geometric preparations"
status: draft
origin: pipeline
domain: physics
dependency_level: 14
deps:
  [
    lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus,
    lem-nrqm-observables-l2-multiplication-spectral-measure,
    lem-nrqm-photons-transverse-fock-total-momentum,
    thm-exponential-is-strictly-increasing,
    lem-nrqm-composites-euclidean-l2-product-unitary,
    def-natural-logarithm,
    thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian,
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-photons-framework-radiation-sector-and-quantum-assignments,
    def-nrqm-photons-framework-ideal-counting-and-detection-model,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    pthm-nrqm-photons-fixed-mode-number-and-energy-statistics,
    lem-nrqm-photons-fixed-mode-number-isometry,
    thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace,
    thm-nrqm-fock-and-equilibrium-fixed-mode-number-law,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    thm-geometric-series,
    thm-tonelli-for-nonnegative-double-series,
    def-complex-exponential,
    def-countable-choice, def-dependent-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  lem-nrqm-photons-transverse-fock-total-momentum: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  pthm-nrqm-photons-fixed-mode-number-and-energy-statistics: physical-result
  lem-nrqm-photons-fixed-mode-number-isometry: mathematical-premise
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-tonelli-for-nonnegative-double-series: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional computation of the count statistics of three
  declared preparations of one normalisable mode: the sharp count of an n-quanta
  mode state, the Poisson count law of the mode-coherent preparation, and the
  geometric count law of a declared effective-mode-energy Gibbs-type
  preparation. The example is conditional on P1, P2 and the adopted radiation
  model, declares its mode-energy parameter explicitly, records no measurement,
  no sampling model and no temperature identification, and asserts no
  thermalisation."
sources:
  references:
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University,
        PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21),
        Chapter 14 Section 14.2 printed pages 220-222: coherent states as
        eigenstates of the destruction operator, their normalization, and the
        mean and variance of the number operator in a coherent state"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/p\
        ratts/phy851/lectures/lectures_full.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: number states with energy
        increment hbar*omega and coherent states with mean number |alpha|^2"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Section 1.2 printed pages 3-6 (PDF pages 4-7):
        occupation-number states, the number operator and single-mode oscillator
        algebra"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
---

## Example

Adopt the state and composition postulate P1, the observable and probability
postulate P2 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]), the radiation extension
postulate
([[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]),
the radiation sector definition
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] and
the declared ideal counting model
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]]. Assume the
Axioms of Countable Choice, Dependent Choice and Choice ([[def-countable-choice]],
[[def-dependent-choice]], [[def-axiom-of-choice]]). Fix a unit mode vector $\varphi\in\mathfrak h$ with
coordinate representatives in $\mathrm m^{3/2}$ under $d^{3}k$ by clause (b)
of [[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]];
write $U=U_\varphi$ for the fixed-mode isometry of
[[lem-nrqm-photons-fixed-mode-number-isometry]] and let the dimensionless label
$z\in\mathbb C$ and a
**declared effective mode energy** $E_{0}>0$ in joules (equivalently a
declared effective frequency $\omega_{0}=E_{0}/\hbar>0$ in
$\mathrm s^{-1}$) be given parameters of this example. The example compares the
count statistics of the following three **declared preparations** of the mode
subspace, all read with the declared ideal total-number detector:

**(a) The $n$-quanta mode state.** For $n\in\mathbb N$, the pure preparation of
the ray of $Ue_{n}=\varphi^{\otimes n}$.

**(b) The mode-coherent state.** The pure preparation of the ray of
$U\psi_{z}$, with dimensionless coherent-state label $z$ and
$\psi_{z}=e^{-|z|^{2}/2}\sum_{m}\frac{z^{m}}{\sqrt{m!}}e_{m}$.

**(c) The declared effective-energy mode preparation.** For a parameter
$\beta>0$ in $\mathrm J^{-1}$, the density operator
$$\rho_{\beta,E_{0}}:=(1-q)\sum_{n\in\mathbb N}q^{n}\,T_{Ue_{n},Ue_{n}},\qquad q:=e^{-\beta E_{0}}\in(0,1),$$
the transfer to the mode subspace of the single-mode weights of
[[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] with its parameter
$\omega$ set equal to the declared effective energy $E_{0}$. This is
a declared conditional preparation of the model, not a derivation from any
radiation-matter interaction and not a statement that the mode is in thermal
equilibrium.

The example computes the count law, mean and variance of the three
preparations. It compares (b) and (c) at equal positive mean, and includes
(a) in that comparison when the common mean is a positive integer and $n$
is chosen equal to it.

## Verification

**Given:** The declared mode data: unit $\varphi\in\mathfrak h$, the isometry $U$, dimensionless label $z\in\mathbb C$, energy $E_{0}>0$ joules, inverse-energy parameter $\beta>0$ in $\mathrm J^{-1}$, and the three preparations (a)-(c).

[L1] **Mode transfer and number law.** $Ue_{m}=\varphi^{\otimes m}$ are orthonormal unit vectors with $NUe_{m}=m\,Ue_{m}$, the count law of a preparation of $Ue_{m}$ is $\delta_{m}$, the count law of the mode-coherent preparation is $e^{-|z|^{2}}\frac{|z|^{2n}}{n!}$ with mean and variance $|z|^{2}$, and $\|\psi_{z}\|=1$ ([[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]] clauses (a),(b), [[lem-nrqm-photons-fixed-mode-number-isometry]] clauses (a),(b), [[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]] clause (b)).

[L2] **Single-mode weights.** For the one-mode Fock space with orthonormal family $(e_{n})$, the weights $w_{n}:=e^{-\beta\omega n}$ satisfy $\sum_{n}w_{n}=(1-e^{-\beta\omega})^{-1}$ and $\sum_{n}n\,w_{n}=e^{-\beta\omega}(1-e^{-\beta\omega})^{-2}$, and $\rho_{\beta}=G_{\beta}/Z(\beta)$ is a density operator whose number expectation is $(e^{\beta\omega}-1)^{-1}$ ([[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] clauses (b),(c),(d)).

[L3] **Geometric series.** For $q\in[0,1)$ one has $\sum_{n\ge0}q^{n}=(1-q)^{-1}$; for nonnegative double series the order of summation may be interchanged ([[thm-geometric-series]], [[thm-tonelli-for-nonnegative-double-series]]).

[L4] **States.** The rank-one operators $T_{u,u}$ of unit vectors are states, and a trace-norm convergent convex combination of states with weights $(1-q)q^{n}$, $\sum_{n}(1-q)q^{n}=1$, is a state ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

[L5] **Free-energy multiplier calculus, products and logarithm.** The free energy is the self-adjoint direct sum of the sector multipliers $\varepsilon_n=\sum_i\varepsilon(k_i)$, with the exact multiplication domains ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], clauses (a)-(c)). The symmetric transverse sector embeddings and projections are constructed in [[lem-nrqm-photons-transverse-fock-total-momentum]], proof1.1-2.1; scalar multiplier spectral PVMs are inverse-image indicators ([[lem-nrqm-observables-l2-multiplication-spectral-measure]], clauses (b),(c)), and the regular spectral representation of a self-adjoint operator is unique ([[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]], Statement). Finite product tensor inner products are the Euclidean product integrals ([[lem-nrqm-composites-euclidean-l2-product-unitary]], Statement). The real logarithm is the inverse of the real exponential, which is strictly increasing with value one at zero ([[def-natural-logarithm]], [[thm-exponential-is-strictly-increasing]], Statement).

**Proof technique:** direct; read the count law off the sector projections for (a) and (b), sum the geometric weights in (c), and compare the resulting means and variances.

**Given:** The data of the Example and [L1]-[L4].

1.1 [Sharp preparation] For the preparation (a) the count law is $p_{m}=\delta_{mn}$ by [L1]; its mean is $n$ and its variance $0$. [L1, algebra]

1.2 [Coherent preparation] For the preparation (b) the count law is Poisson by [L1], with mean and variance $|z|^{2}$; for $z=0$ it is the sharp law $\delta_{0}$. [L1, algebra]

1.3 [Effective-energy preparation is a state] By [L2] the weights satisfy $\sum_{n}q^{n}=(1-q)^{-1}$ with $q=e^{-\beta E_{0}}$, so $(1-q)\sum_{n}q^{n}=1$ and the series defining $\rho_{\beta,E_{0}}$ converges in trace norm; since each $T_{Ue_{n},Ue_{n}}$ is a state, the convex combination is a state by [L4]. Its count law is $p_{n}=\operatorname{tr}(\rho_{\beta,E_{0}}\Pi_{n})=(1-q)q^{n}$ by the declared detector law and the orthogonality of the mode vectors. [L2, L4, algebra]

1.4 [Geometric moments] Put $p_{n}=(1-q)q^{n}$ with $0<q<1$. By [L3], $\sum_{n\ge1}n\,q^{n}=\sum_{k\ge1}\sum_{n\ge k}q^{n}=\sum_{k\ge1}\frac{q^{k}}{1-q}=\frac{q}{(1-q)^{2}}$, and likewise $\sum_{n\ge2}n(n-1)q^{n}=2\sum_{k\ge2}(k-1)\frac{q^{k}}{1-q}=\frac{2q^{2}}{(1-q)^{3}}$. Hence the mean, second moment and variance of the count law are $$\sum_{n}n\,p_{n}=\frac{q}{1-q}=\frac{1}{e^{\beta E_{0}}-1},\qquad \sum_{n}n^{2}p_{n}=\frac{q(1+q)}{(1-q)^{2}},\qquad \operatorname{Var}=\frac{q}{(1-q)^{2}}=\frac{e^{\beta E_{0}}}{(e^{\beta E_{0}}-1)^{2}},$$ the variance formula from $\sum n^{2}p_{n}=2\sum_{n\ge2}\binom n2q^{n}(1-q)+\sum n p_{n}$ combined with the two sums above; in particular the variance equals $m(m+1)$ for the mean $m=(e^{\beta E_{0}}-1)^{-1}$. [L3, algebra]

1.5 [Sector and Fock bounded Gibbs multipliers] For any $\beta>0$, let $G_\beta=e^{-\beta H_f}$ and $a_\beta=\langle e^{-\beta\varepsilon}\varphi,\varphi\rangle$. In the embedding and projection $I_n,R_n$ of [L5], the indicators $\mathbf1_{\varepsilon_n^{-1}(B)}$ commute with the pointwise transverse projection and all polarization-aware permutations because $\varepsilon_n$ is scalar and symmetric. They therefore restrict to a regular sector PVM: its scalar measures are the finite-component push-forwards. Its identity-function integral has exactly the maximal sector domain of $T_n$ and the same multiplication action, by bounded truncations and the integrable squared tail. Spectral uniqueness in [L5] identifies it with the spectral PVM of $T_n$. Its direct-sum PVM has the identity integral $H_f$ on the stated square-sum domain, by sector truncation and spectral truncation; uniqueness identifies the full PVM too. Bounded spectral approximation now gives $G_\beta|_n=M_{e^{-\beta\varepsilon_n}}=M_{\prod_i e^{-\beta\varepsilon(k_i)}}$, including the vacuum value one. [L5, algebra]

2.1 [Comparison at equal mean] Choose $z$ with $|z|^{2}=m:=(e^{\beta E_{0}}-1)^{-1}>0$. By steps 1.2 and 1.4, the coherent and effective-energy preparations then have the same mean $m$ and variances $m$ and $m(m+1)>m$. A number-state preparation has mean $n\in\mathbb N$ and variance $0$ by step 1.1, so it shares this positive mean exactly when $m$ is a positive integer and $n=m$; in that case all three variances differ. If $m$ is not an integer, no number state has that mean. Every comparison uses the same declared ideal counting model. [step 1.1, step 1.2, step 1.4, algebra]



2.2 [Compression matrix coefficients] Since $\varepsilon(k)>0$ off the null point zero, $0<a_\beta<1$. The finite-product integral of [L5] gives $\langle G_\beta Ue_n,Ue_n\rangle=a_\beta^n$, including the vacuum value one, and different sectors have zero matrix coefficients. Because $(e_n)$ is complete and the compression is bounded, $U^*G_\beta U=\operatorname{diag}(a_\beta^n)$. [step 1.5, L1, L5, algebra]

3.1 [Concluding comparison] The computations show: the $n$-quanta mode state has the sharp count $n$; the mode-coherent state has the Poisson count law with mean and variance $|z|^{2}$; and the declared effective-energy preparation with parameter $E_{0}>0$ has the geometric law with mean $1/(e^{\beta E_{0}}-1)$ and variance $m(m+1)$. The parameter $E_{0}$ is declared; it is not derived from $\varphi$, because no normalisable mode vector has sharp energy. No measurement, sampling model or temperature identification occurs, and the comparison is a comparison of the declared conditional models, which is the announced computation. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1]

4.1 [Normalization and effective scale] By [L2] and [L3], it is positive trace class with trace $(1-a_\beta)^{-1}$ and normalized geometric weights $(1-a_\beta)a_\beta^n$. Put $\varepsilon_{\rm eff}(\beta)=-\beta^{-1}\log a_\beta$; [L5] gives $\varepsilon_{\rm eff}(\beta)>0$ and $e^{-\beta\varepsilon_{\rm eff}(\beta)}=a_\beta$. This proves the fixed-$\beta$ compression formula, without identifying the independently declared $E_0$ with this generally $\beta$-dependent value or claiming an invariant mode or a full continuum Gibbs state. [step 2.2, L2, L3, L5, algebra] ∎

## Remarks

- **Independent effective-energy assignment and Gibbs compression.** The
  example independently declares $E_0$; a normalisable mode is not
  an eigenmode of the free energy, so the free Hamiltonian does not restrict
  to $E_0N'$ on this mode subspace. Nevertheless a compression of
  its bounded Gibbs operator is possible. Put
  $a_\beta:=\langle e^{-\beta\varepsilon}\varphi,\varphi\rangle$.
  Since $0<e^{-\beta\varepsilon(k)}<1$ off the null set $\{k=0\}$ and
  $\|\varphi\|=1$, $0<a_\beta<1$. The sector multiplier representation of
  [[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]
  gives $e^{-\beta T_n}=M_{\prod_i e^{-\beta\varepsilon(k_i)}}$ on the
  symmetric transverse sector. Its pairing on $\varphi^{\otimes n}$ is
  $a_\beta^n$ by the finite-product inner-product integral of [[lem-nrqm-composites-euclidean-l2-product-unitary]], and different sectors have zero cross
  pairing. Hence $U^*e^{-\beta H_f}U$ is the diagonal operator with entries
  $a_\beta^n$; its trace is $(1-a_\beta)^{-1}$ and its normalization gives
  the geometric weights $(1-a_\beta)a_\beta^n$. At each fixed $\beta$ these
  correspond to the effective scale
  $\varepsilon_{\rm eff}(\beta)=-\beta^{-1}\log a_\beta>0$, with
  the real logarithm of [[def-natural-logarithm]]; positivity follows because the exponential is strictly increasing with $\exp(0)=1$ ([[thm-exponential-is-strictly-increasing]]). The scale is generally
  dependent on $\beta$. This is compression and normalization of a positive
  operator, not a normalized Gibbs state of the full continuum or an
  invariant free-energy mode. The full Gibbs operator remains non-trace-class
  by clause (e) of
  [[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]]; no
  thermalisation or temperature identification follows.
- **Counts are model quanta.** All three laws are laws of the declared ideal
  total-number detector; a laboratory photon-counting comparison would require
  a declared counter response, efficiency and sampling model, and reported
  data. None is supplied or assumed here.
