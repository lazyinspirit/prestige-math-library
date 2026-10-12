---
id: pthm-nrqm-many-body-thermal-occupation-predictions
aliases: [nrqm-many-body-thermal-occupation-predictions]
kind: physics-theorem
domain: physics
title: "Thermal occupation means of the declared free-mode models: Bose and Fermi factors, product convergence and dilute remainders"
status: draft
origin: pipeline
dependency_level: 12
deps: [post-nrqm-many-body-canonical-equilibrium-ensemble, def-nrqm-many-body-framework-entropy-and-free-energy, def-nrqm-observables-framework-observable-and-outcome-law, pthm-nrqm-observables-preparation-moments, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace, thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas, thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion, thm-nrqm-fock-and-equilibrium-number-operator-domain, thm-nrqm-fock-and-equilibrium-fixed-mode-number-law, lem-nrqm-composites-density-and-scalar-spectral-probability, def-natural-logarithm, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas: mathematical-premise
  thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-mode-number-law: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared free-mode thermal models of the pair: a single bosonic mode with energy operator epsilon N on the one-mode Fock space, a single fermionic orbital with two-dimensional occupation space and grand-canonical shift, and countably many independent modes with positive energies, each equipped with the adopted canonical preparation at assigned temperature. The theorem records the model's thermal occupation means, the partition-product convergence criterion and the dilute remainders; it asserts no thermodynamic limit, no continuum density of states, no Bose-Einstein condensation, no measured occupation and no thermalisation of any sample."
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Section 1.3.1 printed pages 24-27: the single-level and many-level grand-canonical partition functions for fermions and the Fermi-Dirac distribution; Section 1.4.1 printed pages 33-34: the geometric sums for one bosonic level and the Bose-Einstein distribution; Section 1.4.2 printed page 34: the canonical partition function for N bosons"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-230 (PDF pages 234-238): single-particle states of a species and the counting of antisymmetric and symmetric configurations underlying the mode occupations"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the canonical equilibrium-ensemble postulate
[[post-nrqm-many-body-canonical-equilibrium-ensemble]] for the mode models
declared below, the state and probability postulates P1, P2
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]]) in the readings of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[pthm-nrqm-observables-preparation-moments]], and the
identical-particle and spin postulate P6
([[post-nrqm-framework-identical-particles-and-spin]]); assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Temperatures are assigned as in
[[def-nrqm-many-body-framework-entropy-and-free-energy]], so that
$\beta=1/(k_BT)$ in $\mathrm J^{-1}$. Then:

(a) *single bosonic mode*: let $F(\mathbb C)$ be the one-mode Fock space with
number operator $N$ and orthonormal number basis $(e_n)$
([[thm-nrqm-fock-and-equilibrium-fixed-mode-number-law]],
[[thm-nrqm-fock-and-equilibrium-number-operator-domain]]), let
$\varepsilon>0$ and let the model declare the energy operator $H:=\varepsilon N$
on $F(\mathbb C)$; the model's canonical preparation at temperature $T$ is
$\rho_\beta=e^{-\beta H}/Z$ with $Z=(1-e^{-\beta\varepsilon})^{-1}$, the
number readout $N$ is an assigned sharp observable with finite thermal mean
$$\langle N\rangle_\beta=\frac1{e^{\beta\varepsilon}-1}=\frac1{e^{\varepsilon/(k_BT)}-1},$$
and all moments $\langle N^k\rangle_\beta$, $k\ge1$, are finite;

(b) *single fermionic orbital and grand-canonical shift*: on
$\mathfrak h=\mathbb C^2$ with occupation operator $N_-$ and
$\varepsilon_1,\mu\in\mathbb R$, the model's canonical (grand-canonical)
preparation $F=Z^{-1}\sum_{k=0}^1e^{-\beta(\varepsilon_1-\mu)k}T_{u_k,u_k}$
has $\operatorname{tr}F=1+e^{-\beta(\varepsilon_1-\mu)}$ and occupation mean
$$\langle N_-\rangle=\frac1{e^{\beta(\varepsilon_1-\mu)}+1};$$
the same formula is the model's thermal mean when $\mu=0$ and
$\varepsilon_1>0$;

(c) *countably many independent modes*: let $(\varepsilon_j)_{j\ge1}\subseteq(0,\infty)$
and $\mu\in\mathbb R$, and let the model declare the free-mode energies
$\varepsilon_j$ (one mode case of clause (a)) with the product reading of
[[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]]; then the
bosonic product partition is finite exactly when
$\sum_je^{-\beta\varepsilon_j}<\infty$ and $\mu<\inf_j\varepsilon_j$, and
the fermionic product partition is finite exactly when
$\sum_je^{-\beta\varepsilon_j}<\infty$; in the finite cases the products
equal $\prod_j(1-e^{-\beta(\varepsilon_j-\mu)})^{-1}$ and
$\prod_j(1+e^{-\beta(\varepsilon_j-\mu)})$ respectively;

(d) *dilute remainders*: for $q=e^{-\beta(\varepsilon-\mu)}$ the model's
occupation means satisfy the exact identities
$$\frac q{1-q}=q+\frac{q^2}{1-q}\quad(\text{bosonic},\ 0<q<1),\qquad \frac q{1+q}=q-\frac{q^2}{1+q}\quad(\text{fermionic},\ q>0),$$
so both differ from $q$ by at most $q^2/(1-q)$ and $q^2/(1+q)$
respectively;

(e) *scope*: clauses (a)-(d) are conditional statements about the declared
mode models together with the adopted ensemble assignment; they assert no
thermodynamic limit, no continuum of radiation modes, no Bose-Einstein
condensation, no measured occupation number, and no thermalisation of a
sample. All numerical equalities are exact identities of the declared
finite-mode (or product) models at the assigned temperature.

## Facts & Assumptions

**Given:** the mode models of the statement with their energies, the assigned temperature $T$ and inverse temperature $\beta=1/(k_BT)$, and the adopted canonical preparations.

[F1] **One-mode bosonic calculation.** For $\omega>0$ and $\beta>0$, on the one-mode Fock space with number operator $N$ and orthonormal basis $(e_n)$, the bounded operator $G_\beta e_n=e^{-\beta\omega n}e_n$ is positive with $Z(\beta)=\operatorname{tr}G_\beta=(1-e^{-\beta\omega})^{-1}$, $\rho_\beta=G_\beta/Z(\beta)$ is a density operator, $\langle N\rangle_\beta=1/(e^{\beta\omega}-1)$, and $\sum_nn^ke^{-\beta\omega n}<\infty$ for every $k\ge1$ ([[thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace]] clauses (a)-(d)).

[F2] **Fermionic and grand-canonical formulas.** For $\beta>0$, $(\varepsilon_j)\subseteq(0,\infty)$ and $\mu\in\mathbb R$, with $q_j=e^{-\beta(\varepsilon_j-\mu)}$: the two-dimensional occupation operator $N_-$ on $\mathbb C^2$ has $Z=1+e^{-\beta(\varepsilon_1-\mu)}$ and mean occupancy $1/(e^{\beta(\varepsilon_1-\mu)}+1)$; the products $Z_{\mathrm B}=\sup_N\prod_{j\in N}(1-q_j)^{-1}$ and $Z_{\mathrm F}=\sup_N\prod_{j\in N}(1+q_j)$ are finite exactly under the stated summability and positivity conditions; and the single-mode dilute identities and remainder bounds hold, all as statements about diagonal weights ([[thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas]] clauses (a)-(c)).

[F3] **Countable-mode product criterion.** For a separable $H$ with countable orthonormal family $(e_j)$ and weights $e^{-\beta\lambda_I}$ over finite multisets, the diagonal operator $D_\beta$ is trace class exactly when $\sum_je^{-\beta\varepsilon_j}<\infty$, with trace $\prod_j(1-e^{-\beta\varepsilon_j})^{-1}$ in the finite case ([[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] clauses (b), (d), (e)).

[F4] **Observable reading and moments.** An assigned sharp observable has outcome law $\mu^A_\rho(B)=\operatorname{tr}(\rho E_A(B))$, and its mean in a pure or mixed preparation is the corresponding spectral sum when finite; the number operator $N$ is self-adjoint on its domain with $Ne_n=ne_n$ ([[def-nrqm-observables-framework-observable-and-outcome-law]], [[pthm-nrqm-observables-preparation-moments]], [[thm-nrqm-fock-and-equilibrium-number-operator-domain]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

## Proof

**Proof technique:** direct; instantiate the supplied one-mode, fermionic and product calculations at the declared energies and read the occupation operators as assigned observables.

**Given:** the data of the statement and [F1]-[F4].

1.1 [The single bosonic mode] Apply [F1] with $\omega=\varepsilon$: $\rho_\beta$ is the canonical preparation of the declared energy operator $\varepsilon N$, the number readout $N$ is self-adjoint with $Ne_n=ne_n$ by [F4], and its thermal mean in $\rho_\beta$ equals the absolutely convergent sum $\sum_nnq^n/\sum_nq^n=1/(e^{\beta\varepsilon}-1)$ with $q=e^{-\beta\varepsilon}$; all higher moments are finite by [F1]. This proves (a). [F1, F4, algebra]

1.2 [The fermionic orbital and the shift] Apply [F2] at a single mode: on $\mathbb C^2$ the weights $e^{-\beta(\varepsilon_1-\mu)k}$, $k\in\{0,1\}$, give $\operatorname{tr}F=1+e^{-\beta(\varepsilon_1-\mu)}$ and occupation mean $q/(1+q)=1/(e^{\beta(\varepsilon_1-\mu)}+1)$ with $q=e^{-\beta(\varepsilon_1-\mu)}$; for $\mu=0$, $\varepsilon_1>0$ this is the model's thermal mean at the declared energy $\varepsilon_1$. This proves (b) and the identities of (d). [F2, algebra]

1.3 [The product criterion] Applying the criterion [F3] to the free-mode energies with chemical-potential shift and combining with the finite products of [F2] gives the stated equivalences for the bosonic and fermionic products, under the stated conditions $\mu<\inf_j\varepsilon_j$ (bosons) and no further condition (fermions). This proves (c). [F2, F3, algebra]

2.1 [Readings] In each case the occupation number is an assigned sharp observable by [F4], so the mean of its outcome law in the canonical preparation is the number computed in steps 1.1-1.3; the identification of the computed parameters with a physical temperature and chemical potential is the adopted assumption of the ensemble postulate, and no convergence statement beyond the displayed criteria is asserted. This gives the readings of (a)-(d). [F4, step 1.1, step 1.2, step 1.3, algebra]

3.1 [Conclusion and scope] Steps 1.1-1.3 and 2.1 prove (a)-(d). The argument is a finite-mode or product computation at assigned temperature; no thermodynamic limit, continuum of modes, condensation or measured occupation entered, which is (e). [step 1.1, step 1.2, step 1.3, step 2.1] ∎

## Remarks

- **No continuum claim.** The product criterion covers countably many discrete modes; a continuum of radiation modes has divergent free partition function by the cited one-particle non-compactness argument, so a finite-volume or cutoff model would be required before making a continuum thermal claim.
- **The chemical potential.** $\mu$ is an assigned model parameter in joules with its uncertainty; the bosonic condition $\varepsilon_j-\mu>0$ is required for each geometric factor, while the fermionic factors are finite for every real $\mu$.
