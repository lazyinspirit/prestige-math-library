---
id: ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal
kind: example
title: "Number statistics of a single declared mode: sharp, Poisson and geometric preparations"
status: draft
origin: pipeline
domain: physics
dependency_level: 13
deps: [post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-photons-framework-radiation-sector-and-quantum-assignments, def-nrqm-photons-framework-ideal-counting-and-detection-model, def-nrqm-state-geometry-framework-state-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-pure-mixed-states-and-purity, pthm-nrqm-photons-fixed-mode-number-and-energy-statistics, lem-nrqm-photons-fixed-mode-number-isometry, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, thm-nrqm-fock-and-equilibrium-fixed-mode-number-law, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-geometric-series, thm-tonelli-for-nonnegative-double-series, def-complex-exponential, def-countable-choice, def-axiom-of-choice]
dependency_roles:
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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional computation of the count statistics of three declared preparations of one normalisable mode: the sharp count of an n-quanta mode state, the Poisson count law of the mode-coherent preparation, and the geometric count law of a declared effective-mode-energy Gibbs-type preparation. The example is conditional on P1, P2 and the adopted radiation model, declares its mode-energy parameter explicitly, records no measurement, no sampling model and no temperature identification, and asserts no thermalisation."
sources:
  references:
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Chapter 14 Section 14.2 printed pages 220-222: coherent states as eigenstates of the destruction operator, their normalization, and the mean and variance of the number operator in a coherent state"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 5.3 printed pages 48-50: number states with energy increment hbar*omega and coherent states with mean number |alpha|^2"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Section 1.2 printed pages 3-6 (PDF pages 4-7): occupation-number states, the number operator and single-mode oscillator algebra"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
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
Axioms of Countable Choice and of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Fix a unit mode vector $\varphi\in\mathfrak h$, write
$U=U_\varphi$ for the fixed-mode isometry of
[[lem-nrqm-photons-fixed-mode-number-isometry]] and let $z\in\mathbb C$ and a
**declared effective mode energy** $\varepsilon_{0}>0$ in joules (equivalently a
declared effective frequency $\omega_{0}=\varepsilon_{0}/\hbar>0$ in
$\mathrm s^{-1}$) be given parameters of this example. The example compares the
count statistics of the following three **declared preparations** of the mode
subspace, all read with the declared ideal total-number detector:

**(a) The $n$-quanta mode state.** For $n\in\mathbb N$, the pure preparation of
the ray of $Ue_{n}=\varphi^{\otimes n}$.

**(b) The mode-coherent state.** The pure preparation of the ray of
$U\psi_{z}$, with $\psi_{z}=e^{-|z|^{2}/2}\sum_{m}\frac{z^{m}}{\sqrt{m!}}e_{m}$.

**(c) The declared effective-energy mode preparation.** For a parameter
$\beta>0$ in $\mathrm J^{-1}$, the density operator
$$\rho_{\beta,\varepsilon_{0}}:=(1-q)\sum_{n\in\mathbb N}q^{n}\,T_{Ue_{n},Ue_{n}},\qquad q:=e^{-\beta\varepsilon_{0}}\in(0,1),$$
the transfer to the mode subspace of the single-mode weights of
[[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] with its parameter
$\omega$ set equal to the declared effective energy $\varepsilon_{0}$. This is
a declared conditional preparation of the model, not a derivation from any
radiation-matter interaction and not a statement that the mode is in thermal
equilibrium.

The example computes the count law, mean and variance of the three
preparations and compares them at equal mean.

## Verification

**Given:** The declared mode data: unit $\varphi\in\mathfrak h$, the isometry $U$, parameters $z\in\mathbb C$, $\varepsilon_{0}>0$, $\beta>0$, and the three preparations (a)-(c).

[L1] **Mode transfer and number law.** $Ue_{m}=\varphi^{\otimes m}$ are orthonormal unit vectors with $NUe_{m}=m\,Ue_{m}$, the count law of a preparation of $Ue_{m}$ is $\delta_{m}$, the count law of the mode-coherent preparation is $e^{-|z|^{2}}\frac{|z|^{2n}}{n!}$ with mean and variance $|z|^{2}$, and $\|\psi_{z}\|=1$ ([[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]] clauses (a),(b), [[lem-nrqm-photons-fixed-mode-number-isometry]] clauses (a),(b), [[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]] clause (b)).

[L2] **Single-mode weights.** For the one-mode Fock space with orthonormal family $(e_{n})$, the weights $w_{n}:=e^{-\beta\omega n}$ satisfy $\sum_{n}w_{n}=(1-e^{-\beta\omega})^{-1}$ and $\sum_{n}n\,w_{n}=e^{-\beta\omega}(1-e^{-\beta\omega})^{-2}$, and $\rho_{\beta}=G_{\beta}/Z(\beta)$ is a density operator whose number expectation is $(e^{\beta\omega}-1)^{-1}$ ([[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] clauses (b),(c),(d)).

[L3] **Geometric series.** For $q\in[0,1)$ one has $\sum_{n\ge0}q^{n}=(1-q)^{-1}$; for nonnegative double series the order of summation may be interchanged ([[thm-geometric-series]], [[thm-tonelli-for-nonnegative-double-series]]).

[L4] **States.** The rank-one operators $T_{u,u}$ of unit vectors are states, and a trace-norm convergent convex combination of states with weights $(1-q)q^{n}$, $\sum_{n}(1-q)q^{n}=1$, is a state ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

**Proof technique:** direct; read the count law off the sector projections for (a) and (b), sum the geometric weights in (c), and compare the resulting means and variances.

**Given:** The data of the Example and [L1]-[L4].

1.1 [Sharp preparation] For the preparation (a) the count law is $p_{m}=\delta_{mn}$ by [L1]; its mean is $n$ and its variance $0$. [L1, algebra]

1.2 [Coherent preparation] For the preparation (b) the count law is Poisson by [L1], with mean and variance $|z|^{2}$; for $z=0$ it is the sharp law $\delta_{0}$. [L1, algebra]

1.3 [Effective-energy preparation is a state] By [L2] the weights satisfy $\sum_{n}q^{n}=(1-q)^{-1}$ with $q=e^{-\beta\varepsilon_{0}}$, so $(1-q)\sum_{n}q^{n}=1$ and the series defining $\rho_{\beta,\varepsilon_{0}}$ converges in trace norm; since each $T_{Ue_{n},Ue_{n}}$ is a state, the convex combination is a state by [L4]. Its count law is $p_{n}=\operatorname{tr}(\rho_{\beta,\varepsilon_{0}}\Pi_{n})=(1-q)q^{n}$ by the declared detector law and the orthogonality of the mode vectors. [L2, L4, algebra]

1.4 [Geometric moments] Put $p_{n}=(1-q)q^{n}$ with $0<q<1$. By [L3], $\sum_{n\ge1}n\,q^{n}=\sum_{k\ge1}\sum_{n\ge k}q^{n}=\sum_{k\ge1}\frac{q^{k}}{1-q}=\frac{q}{(1-q)^{2}}$, and likewise $\sum_{n\ge2}n(n-1)q^{n}=2\sum_{k\ge2}(k-1)\frac{q^{k}}{1-q}=\frac{2q^{2}}{(1-q)^{3}}$. Hence the mean, second moment and variance of the count law are $$\sum_{n}n\,p_{n}=\frac{q}{1-q}=\frac{1}{e^{\beta\varepsilon_{0}}-1},\qquad \sum_{n}n^{2}p_{n}=\frac{q(1+q)}{(1-q)^{2}},\qquad \operatorname{Var}=\frac{q}{(1-q)^{2}}=\frac{e^{\beta\varepsilon_{0}}}{(e^{\beta\varepsilon_{0}}-1)^{2}},$$ the variance formula from $\sum n^{2}p_{n}=2\sum_{n\ge2}\binom n2q^{n}(1-q)+\sum n p_{n}$ combined with the two sums above; in particular the variance equals $m(m+1)$ for the mean $m=(e^{\beta\varepsilon_{0}}-1)^{-1}$. [L3, algebra]

2.1 [Comparison at equal mean] By steps 1.2, 1.3 and 1.4, at the common mean $m=|z|^{2}=(e^{\beta\varepsilon_{0}}-1)^{-1}$ the coherent preparation has variance $m$ while the effective-energy preparation has variance $m(m+1)>m$, and the number-state preparation has variance $0$; the three declared preparations therefore assign different number fluctuations, and the comparison requires the same declared ideal counting model for all three. [step 1.1, step 1.2, step 1.3, step 1.4, algebra]

3.1 [Concluding comparison] The computations show: the $n$-quanta mode state has the sharp count $n$; the mode-coherent state has the Poisson count law with mean and variance $|z|^{2}$; and the declared effective-energy preparation with parameter $\varepsilon_{0}>0$ has the geometric law with mean $1/(e^{\beta\varepsilon_{0}}-1)$ and variance $m(m+1)$. The parameter $\varepsilon_{0}$ is declared; it is not derived from $\varphi$, because no normalisable mode vector has sharp energy. No measurement, sampling model or temperature identification occurs, and the comparison is a comparison of the declared conditional models, which is the announced computation. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Remarks

- **Why the parameter is declared.** A normalisable mode vector has no sharp
  frequency or energy ([[pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws]]
  clause (d)), so the geometric preparation cannot be obtained by evaluating a
  Gibbs density $e^{-\beta H_f}$ on the mode subspace; the effective energy
  $\varepsilon_{0}$ is a declared parameter of the example, and clause (e) of
  [[pthm-nrqm-photons-fixed-mode-number-and-energy-statistics]] records that
  the unregularised continuum free-field Gibbs operator is not trace class.
- **Counts are model quanta.** All three laws are laws of the declared ideal
  total-number detector; a laboratory photon-counting comparison would require
  a declared counter response, efficiency and sampling model, and reported
  data. None is supplied or assumed here.
