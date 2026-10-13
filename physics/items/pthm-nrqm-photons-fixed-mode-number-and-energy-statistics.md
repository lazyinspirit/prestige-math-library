---
id: pthm-nrqm-photons-fixed-mode-number-and-energy-statistics
kind: physics-theorem
title: "Number and energy statistics of a declared mode: number states, coherent
  states and the continuum thermal limitation"
status: published
origin: pipeline
domain: physics
dependency_level: 13
deps:
  [
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-photons-framework-radiation-sector-and-quantum-assignments,
    def-nrqm-photons-framework-ideal-counting-and-detection-model,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-photons-fixed-mode-number-isometry,
    lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers,
    thm-nrqm-fock-and-equilibrium-fixed-mode-number-law,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian,
    lem-nrqm-fock-and-equilibrium-fock-sector-projections,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    def-complex-exponential,
    lem-complex-exponential-series-converges-everywhere,
    def-countable-choice, def-dependent-choice,
    def-axiom-of-choice
  ]
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
  lem-nrqm-photons-fixed-mode-number-isometry: mathematical-premise
  lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
forward_refs: [ ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal ]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional number and energy statistics of a declared
  normalisable mode of the adopted radiation sector: the n-quanta mode state has
  sharp count n; the mode-coherent state has the Poisson count law of
  dimensionless parameter |z|^2 with mean and variance |z|^2; the energy means
  and variances of these preparations are computed from the mode profile, are
  strictly positive in variance for n>=1 and z!=0 (the vacuum cases have zero
  variance), and the full-sector Gibbs operator e^(-beta H_f) is not trace class
  for beta>0 in J^-1. This excludes only its trace-normalized Gibbs density
  form; other preparations are outside the theorem. The result is conditional on
  P1, P2 and the adopted radiation model, uses the ideal counting model only,
  reports no measured count and asserts no thermalisation or temperature
  identification."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50 and Section 4 printed pages
        26-41: number states with energy increment hbar*omega, coherent states
        with mean photon number |alpha|^2, and the Poisson number distribution
        of a coherent state"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University,
        PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21),
        Chapter 14 Section 14.2 printed pages 220-222: coherent states as
        preparations without definite particle number, their normalization and
        their number expectation and variance"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/p\
        ratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Adopt the state and composition postulate P1 and the observable and
probability postulate P2 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]), the radiation extension
postulate
([[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]),
the radiation sector definition
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] and
the declared ideal counting model
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]]. Assume the
Axioms of Countable Choice, Dependent Choice and Choice ([[def-countable-choice]],
[[def-dependent-choice]], [[def-axiom-of-choice]]). Fix a unit mode vector $\varphi\in\mathfrak h$, a
dimensionless label $z\in\mathbb C$, and write $U:=U_\varphi$ for the fixed-mode isometry of
[[lem-nrqm-photons-fixed-mode-number-isometry]]. Then:

(a) for every $n\in\mathbb N$ the $n$-quanta mode vector $Ue_{n}=\varphi^{\otimes n}$
is a unit vector of the $n$-photon sector; the count law of the declared ideal
total-number detector in the preparation of its ray is
$p_{m}=\delta_{mn}$, and the number readout is $n$ with probability one;

(b) the count law of the mode-coherent preparation $U\psi_{z}$ of label $z$ is
the Poisson law
$$p_{n}=e^{-|z|^{2}}\frac{|z|^{2n}}{n!}\qquad(n\in\mathbb N),$$
with mean and variance
$$\sum_{n\in\mathbb N}n\,p_{n}=|z|^{2},\qquad \sum_{n\in\mathbb N}n^{2}p_{n}-\Bigl(\sum_{n\in\mathbb N}n\,p_{n}\Bigr)^{2}=|z|^{2};$$
in particular the mode-coherent preparation is not a number state unless
$z=0$;

(c) if $\varphi\in D(\varepsilon_{\mathfrak h})$, with unit-mode coordinates
$\varphi(k)$ in $\mathrm m^{3/2}$ under $d^{3}k$ as in clause (b) of
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]], and writing
$\bar\varepsilon:=\langle\varepsilon_{\mathfrak h}\varphi,\varphi\rangle=\hbar c\int|k|\,\|\varphi(k)\|^{2}\,d^{3}k$,
the energy means of the assigned free-field energy observable are
$$\langle H_f\rangle_{Ue_{n}}=n\,\bar\varepsilon,\qquad \langle H_f\rangle_{U\psi_{z}}=|z|^{2}\,\bar\varepsilon ;$$

(d) under the same condition $\varphi\in D(\varepsilon_{\mathfrak h})$, writing
$\overline{\varepsilon^{2}}:=\|\varepsilon_{\mathfrak h}\varphi\|^2$,
the energy variances are
$$\operatorname{Var}_{Ue_{n}}(H_f)=n\bigl(\overline{\varepsilon^{2}}-\bar\varepsilon^{2}\bigr),\qquad \operatorname{Var}_{U\psi_{z}}(H_f)=|z|^{2}\,\overline{\varepsilon^{2}} ;$$
the first is strictly positive for every $n\ge1$ and the second is strictly
positive for every $z\ne0$. Thus $Ue_n$ has non-sharp energy for $n\ge1$
and $U\psi_z$ has non-sharp energy for $z\ne0$. At $n=0$ or $z=0$ the
corresponding preparation is the vacuum $\Omega$, with $H_f\Omega=0$ and
energy law $\delta_0$;

(e) *full-sector Gibbs limitation*: let $\beta>0$ have SI unit
$\mathrm J^{-1}$, so that $\beta H_f$ is dimensionless. The bounded operator
$e^{-\beta H_f}$ is not compact and hence not trace class; therefore it does
not define a density operator by trace normalization on the full transverse
continuum sector. This conclusion rules out only that trace-normalized
full-sector Gibbs form. Other mode-selected, regularized or otherwise
separately defined preparations are outside this theorem; no identification of
$\beta$ with an inverse thermodynamic temperature and no thermal interpretation
of any state is asserted here;

(f) all assertions are conditional on P1, P2 and the adopted radiation model
and use only the declared ideal counting model. No measured count, frequency,
efficiency or temperature is asserted, and no sampling model is introduced.

## Facts & Assumptions

**Given:** the postulates P1, P2 and the adopted radiation model with transverse space $\mathfrak h$, Fock space $F(\mathfrak h)$, sectors $\mathfrak H_{n}^{+}$, projections $\Pi_{n}$, number operator $N$, energy $H_f$ with $\varepsilon(k)=\hbar c|k|$, a unit mode vector $\varphi$ with coordinate units $\mathrm m^{3/2}$ under $d^{3}k$, a dimensionless label $z\in\mathbb C$ and the isometry $U=U_\varphi$.

[F1] **Fixed-mode isometry.** $Ue_{n}=\varphi^{\otimes n}\in\operatorname{ran}P_{+}^{(n)}$, $(Ue_{m},Ue_{n})$ is orthonormal, $\|U\psi\|=\|\psi\|$, $NU\psi=UN'\psi$ for $\psi\in D(N')$, $A_-(\varphi)U\psi=UA_-(1)\psi$ for $\psi\in D(A_-(1))$, and for the transverse case with $\varphi\in D(\varepsilon_{\mathfrak h})$, $\langle H_fUe_{n},Ue_{n}\rangle=n\langle\varepsilon_{\mathfrak h}\varphi,\varphi\rangle$ and $\langle H_fU\psi,U\psi\rangle=\bigl(\sum_nn|\psi_n|^{2}\bigr)\langle\varepsilon_{\mathfrak h}\varphi,\varphi\rangle$ for $\sum_nn^{2}|\psi_n|^{2}<\infty$ ([[lem-nrqm-photons-fixed-mode-number-isometry]] clauses (a),(b),(d)).

[F2] **Fock sectors and number atoms.** $\Pi_{n}$ is the orthogonal projection onto the coordinate-$n$ subspace, the ranges are pairwise orthogonal with strong sum $I$, and for the number operator $N$ one has $N\iota_{n}(u)=n\iota_{n}(u)$ for every $u\in\mathfrak H_{n}^{+}$; the count law of the declared ideal total-number detector is $p_{n}(\rho)=\operatorname{tr}(\rho\Pi_{n})$ ([[lem-nrqm-fock-and-equilibrium-fock-sector-projections]], [[thm-nrqm-fock-and-equilibrium-number-operator-domain]] clause (b), [[def-nrqm-photons-framework-ideal-counting-and-detection-model]] clause (b)).

[F3] **Coherent vector coefficients.** $\psi_{z}=e^{-|z|^{2}/2}\sum_{n}\frac{z^{n}}{\sqrt{n!}}e_{n}$ is unit with $\langle e_{n},\psi_{z}\rangle=e^{-|z|^{2}/2}\frac{\bar z^{n}}{\sqrt{n!}}$ and $|\langle e_{n},\psi_{z}\rangle|^{2}=e^{-|z|^{2}}\frac{|z|^{2n}}{n!}$ ([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]] clauses (b),(c)).

[F4] **Energy moments on mode sectors.** For a unit $\varphi\in D(\varepsilon_{\mathfrak h})$, put $\bar\varepsilon=\langle\varepsilon\varphi,\varphi\rangle$ and $\overline{\varepsilon^2}=\|\varepsilon\varphi\|^2$. Then $\Phi_n=\varphi^{\otimes n}\in D(T_n)$, $\langle T_n\Phi_n,\Phi_n\rangle=n\bar\varepsilon$ and $\|T_n\Phi_n\|^2=n\overline{\varepsilon^2}+n(n-1)\bar\varepsilon^2$. The last is the spectral second moment, not an assertion of membership in $D(T_n^2)$ ([[lem-nrqm-photons-fixed-mode-number-isometry]] clause (d)).

[F5] **Exponential series.** For every $x\ge0$, $\sum_{n}\frac{x^{n}}{n!}=e^{x}<\infty$, and the series converges absolutely ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]).

[F6] **Non-compactness of the free Gibbs operator.** For every $\beta>0$ read with SI unit $\mathrm J^{-1}$, the operator $e^{-\beta H_f}$ is not compact and in particular not trace class ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]] clause (d)).

## Proof

1.1 [Number states] By [F1] each $Ue_{n}=\varphi^{\otimes n}$ is a unit vector of the sector $\operatorname{ran}P_{+}^{(n)}$; by [F2] $N$ acts on it as $n$ times itself, so the number readout is $n$ with probability one by the atom law of P2 ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]]), and the count law of the declared detector is $p_{m}=\operatorname{tr}(T_{Ue_{n},Ue_{n}}\Pi_{m})=\langle\Pi_{m}Ue_{n},Ue_{n}\rangle=\delta_{mn}$. This proves (a). [F1, F2, algebra]

1.2 [Poisson law] For the mode-coherent preparation $U\psi_{z}$ the count law is $$p_{n}=\langle\Pi_{n}U\psi_{z},U\psi_{z}\rangle=\langle U\Pi_{n}'\psi_{z},U\psi_{z}\rangle=\langle\Pi_{n}'\psi_{z},\psi_{z}\rangle=|\langle e_{n},\psi_{z}\rangle|^{2}=e^{-|z|^{2}}\frac{|z|^{2n}}{n!},$$ using [F1] for the sector transfer and the isometry, and [F3] for the coefficient. [F1, F2, F3, algebra]

2.1 [Poisson moments] Put $x:=|z|^{2}\ge0$. By [F5], $\sum_{n\ge1}n\frac{x^{n}}{n!}=x\sum_{m\ge0}\frac{x^{m}}{m!}=xe^{x}$ and $\sum_{n\ge2}n(n-1)\frac{x^{n}}{n!}=x^{2}e^{x}$, so the mean is $e^{-x}xe^{x}=x$ and the second moment is $e^{-x}(x^{2}+x)e^{x}=x^{2}+x$; hence the variance is $x$. For $z\ne0$ the law is supported on more than one value, so the preparation is not a number state. This proves (b). [F3, F5, step 1.2, algebra]

3.1 [Energy means] The sector diagonality of $H_f$ and orthogonality of the sectors give, for the coherent preparation, $$\langle H_fU\psi_{z},U\psi_{z}\rangle=\sum_{n\in\mathbb N}|\langle e_{n},\psi_{z}\rangle|^{2}\,\langle T_{n}\varphi^{\otimes n},\varphi^{\otimes n}\rangle=\Bigl(\sum_{n}|\langle e_{n},\psi_{z}\rangle|^{2}n\Bigr)\bar\varepsilon=|z|^{2}\bar\varepsilon,$$ where the middle identity is [F1] and [F4] and the last is the Poisson mean of step 2.1; the number-state value is the $n$-th instance of [F1]. The Poisson second number moment is finite by step 2.1, so [F1] places $U\psi_z$ in the actual domain of $H_f$ and justifies the graph-truncation passage. The mean exists because both sides are finite: $\bar\varepsilon<\infty$ by $\varphi\in D(\varepsilon_{\mathfrak h})$ and Cauchy-Schwarz, and $\sum_{n}n|\langle e_{n},\psi_{z}\rangle|^{2}=x<\infty$. This proves (c). [F1, F2, F4, step 2.1, algebra]

4.1 [Energy variances] For the number state, $\|H_fUe_n\|^2=\|T_n\varphi^{\otimes n}\|^2=n\overline{\varepsilon^{2}}+n(n-1)\bar\varepsilon^{2}$ by [F4], so the variance is $n(\overline{\varepsilon^{2}}-\bar\varepsilon^{2})$, which is strictly positive for $n\ge1$ by clause (d) of [[lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers]] (the energy multiplier has no eigenvalues, so $\overline{\varepsilon^{2}}-\bar\varepsilon^{2}=\operatorname{Var}_\varphi(\varepsilon)>0$). For the coherent preparation, its Poisson second moment and [F1] give $U\psi_z\in D(H_f)$; the orthogonal-sector norm expansion therefore gives $$\|H_fU\psi_z\|^2=\sum_{n}|\langle e_{n},\psi_{z}\rangle|^{2}\bigl(n\overline{\varepsilon^{2}}+n(n-1)\bar\varepsilon^{2}\bigr)=x\,\overline{\varepsilon^{2}}+x^{2}\bar\varepsilon^{2},$$ using the Poisson first and second factorial moments of step 2.1; subtracting the square of the mean $x\bar\varepsilon$ from step 3.1 gives $x\overline{\varepsilon^{2}}$, which is strictly positive for $x=|z|^{2}>0$ because $\overline{\varepsilon^{2}}=\|\varepsilon_{\mathfrak h}\varphi\|^{2}>0$: $\varepsilon_{\mathfrak h}\varphi$ vanishes only where $\varphi$ vanishes off the null set $\{k=0\}$, so a unit $\varphi$ cannot satisfy $\varepsilon_{\mathfrak h}\varphi=0$ in $\mathfrak h$. For $n=0$ and $z=0$, respectively, $Ue_0=U\psi_0=\Omega$; the vacuum sector has $T_0=0$, hence $H_f\Omega=0$, and the atom/eigenvalue law of P2 gives the sharp energy law $\delta_0$. This proves (d), including its vacuum exceptions. [F1, F4, step 2.1, step 3.1, algebra]

5.1 [Full-sector Gibbs limitation and assembly] A trace-normalized density operator proportional to $e^{-\beta H_f}$ would require that operator to be trace class, which [F6] excludes for every stated $\beta$. This proves only the full-sector Gibbs limitation in (e). Steps 1.1 and 1.2 prove (a) and (b), steps 3.1 and 4.1 prove (c) and (d), and no step introduces a detector response, a sampling model or an empirical premise, which is (f). [F6, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Poisson versus geometric.** The mode-coherent count law is Poisson, with variance equal to its mean; the declared single-mode Gibbs-type preparation of [[ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal]] has a geometric count law with larger variance at the same mean. Both are conditional model computations; distinguishing them in a laboratory requires a declared detector, preparation and sampling model and reported data.
- **No temperature identification.** The parameter $\beta$ in (e) has unit $\mathrm J^{-1}$ so that $\beta H_f$ is dimensionless. Identifying it with $(k_{\mathrm B}T)^{-1}$ is an additional physical assumption not made here.
