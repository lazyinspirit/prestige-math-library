---
id: pthm-nrqm-many-body-thermal-occupation-predictions
aliases: [ nrqm-many-body-thermal-occupation-predictions ]
kind: physics-theorem
domain: physics
title: "Thermal occupation means of the declared free-mode models: Bose and
  Fermi factors, product convergence and dilute remainders"
status: published
origin: pipeline
dependency_level: 13
deps:
  [
    post-nrqm-many-body-canonical-equilibrium-ensemble,
    def-nrqm-many-body-framework-entropy-and-free-energy,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-observables-preparation-moments,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    thm-nrqm-fock-and-equilibrium-single-mode-thermal-trace,
    thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas,
    thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    thm-nrqm-fock-and-equilibrium-fixed-mode-number-law,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-natural-logarithm,
    def-hilbert-space,
    def-countable-choice,
    def-axiom-of-choice,
    lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion,
    lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma,
    thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction
  ]
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
  lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared free-mode thermal models of the pair: a single
  bosonic mode with energy operator epsilon N on the one-mode Fock space, a
  single fermionic orbital with two-dimensional occupation space and
  grand-canonical shift, and countably many independent modes with positive
  energies, each equipped with the adopted canonical preparation at assigned
  temperature. The theorem records the model's thermal occupation means, the
  partition-product convergence criterion and the dilute remainders; it asserts
  no thermodynamic limit, no continuum density of states, no Bose-Einstein
  condensation, no measured occupation and no thermalisation of any sample."
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics
        (HSE, January 10, 2023), Section 1.3.1 printed pages 24-27: the
        single-level and many-level grand-canonical partition functions for
        fermions and the Fermi-Dirac distribution; Section 1.4.1 printed pages
        33-34: the geometric sums for one bosonic level and the Bose-Einstein
        distribution; Section 1.4.2 printed page 34: the canonical partition
        function for N bosons"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1
        printed pages 226-230 (PDF pages 234-238): single-particle states of a
        species and the counting of antisymmetric and symmetric configurations
        underlying the mode occupations"
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
$\beta=1/(k_BT)$ in $\mathrm J^{-1}$. Declare the occupation readouts as assigned sharp observables $(N,1)$ and $(N_-,1)$, with unit particle-count, which is dimensionless. The total particle-number operator $\mathcal N$ in the countable-mode reading has the same unit; every occupation mean and higher number moment below is read in the corresponding dimensionless count unit. Then:

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
has $Z=1+e^{-\beta(\varepsilon_1-\mu)}$, $\operatorname{tr}F=1$, and occupation mean
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

[F3] **Countable-mode product criterion.** For a separable $H$ with countable complete orthonormal family $(e_j)$ and weights $e^{-\beta\lambda_I}$ over finite multisets, the diagonal operator $D_\beta$ is trace class exactly when $\sum_je^{-\beta\varepsilon_j}<\infty$, with trace $\prod_j(1-e^{-\beta\varepsilon_j})^{-1}$ in the finite case ([[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] clauses (b), (d), (e)).

[F4] **Observable reading and moments.** An assigned sharp observable has outcome law $\mu^A_\rho(B)=\operatorname{tr}(\rho E_A(B))$, and its mean in a pure or mixed preparation is the corresponding spectral sum when finite; the number operator $N$ is self-adjoint on its domain with $Ne_n=ne_n$ ([[def-nrqm-observables-framework-observable-and-outcome-law]], [[pthm-nrqm-observables-preparation-moments]], [[thm-nrqm-fock-and-equilibrium-number-operator-domain]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]]).

[F5] The finite-particle bosonic and fermionic occupation bases for a supplied countable mode basis are constructed in [[lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion]] (a); the vacuum is the scalar degree-zero sector of [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]. On a supplied countable orthonormal basis, arbitrary real diagonal weights define a self-adjoint operator on its exact squared-weight domain, with finite coordinate sums as a graph core ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] (a)-(e)).

## Proof

**Proof technique:** direct; instantiate the supplied one-mode, fermionic and product calculations at the declared energies and read the occupation operators as assigned observables.

**Given:** the data of the statement and [F1]-[F5].

1.1 [The single bosonic mode] Apply [F1] with $\omega=\varepsilon$: $\rho_\beta$ is the canonical preparation of the declared energy operator $\varepsilon N$, the number readout $N$ is self-adjoint with $Ne_n=ne_n$ by [F4], and its thermal mean in $\rho_\beta$ equals the absolutely convergent sum $\sum_nnq^n/\sum_nq^n=1/(e^{\beta\varepsilon}-1)$ with $q=e^{-\beta\varepsilon}$; all higher moments are finite by [F1]. This proves (a). [F1, F4, algebra]

1.2 [The fermionic orbital and the shift] For the stated arbitrary real $\varepsilon_1,\mu$, direct evaluation in the two occupation vectors gives the unnormalized positive operator $G=\sum_{k=0}^1q^kT_{u_k,u_k}$ with $q=e^{-\beta(\varepsilon_1-\mu)}>0$ and $\operatorname{tr}G=Z=1+q$. Thus $F=G/Z$ has trace one and occupation mean $q/(1+q)=1/(e^{\beta(\varepsilon_1-\mu)}+1)$ with $q=e^{-\beta(\varepsilon_1-\mu)}$; for $\mu=0$, $\varepsilon_1>0$ this is the model's thermal mean at the declared energy $\varepsilon_1$. This proves (b) and the identities of (d). [F2, algebra]

1.3 [The number-variable space and complete basis] Let $H_0$ be the one-particle Hilbert space with supplied countable orthonormal basis $(e_j)_{j\ge1}$ of [F3]. For either sign define $\mathfrak H_0^\sigma=\mathbb C$ and $\mathcal F_\sigma:=\{(\psi_N)_{N\ge0}:\psi_N\in\mathfrak H_N^\sigma,\ \sum_N\|\psi_N\|^2<\infty\}$ with inner product $\sum_N\langle\psi_N,\varphi_N\rangle$, whose absolute convergence follows from Cauchy-Schwarz applied to the two square-summable sector norm sequences as in the direct-sum construction of [F5], where the positive-degree sectors are those of [F5]. The plus space is the supplied bosonic direct sum. For the minus space, each coordinate of a Cauchy sequence converges in its closed Hilbert sector; bounded finite partial sums of squared norms put the coordinate limit in $\mathcal F_-$, and taking coordinate limits in the Cauchy bound, then the supremum over finite partial sums, proves convergence in the full norm. Thus it too is Hilbert; this is a local argument, not a fermionic clause attributed to the bosonic supplier. Embed each fixed-$N$ basis of [F5] in coordinate $N$ and add the unit vacuum in coordinate zero. Orthogonality holds between different degrees, and truncating degree tails then approximating in each of finitely many complete sector bases proves completeness of their union. Label this countable basis $(b_n^\sigma)$ by $\mathcal C^\sigma:=\{n\in\mathbb N^{\mathbb N_{>0}}:n\text{ has finite support},\ n_j\le1\text{ if }\sigma=-\}$, with $|n|=\sum_jn_j$; for minus use the Slater vector of the occupied subset. Enumerate these labels by finite integer sequences and apply the diagonal lemma of [F5]. [F3, F5, construct, algebra]

2.1 [Exact generator and trace] On this basis define the self-adjoint diagonal $H$, $\mathcal N$ and $G$ with respective eigenvalues $E_n=\sum_j\varepsilon_jn_j$, $|n|$ and $g_n=\sum_j(\varepsilon_j-\mu)n_j$, each on its exact domain $\{\sum_na_nb_n^\sigma:\sum_n|w_n|^2|a_n|^2<\infty\}$ for the corresponding weight $w_n$, by [F5]. The self-adjoint $G$ is the closure of the common finite-occupation action $H-\mu\mathcal N$, since finite sums are its graph core; it is not an assertion about the domain of a formal unbounded subtraction. In the finite bosonic-product case $g_n\ge0$. In the finite fermionic-product case summability gives $\varepsilon_j\to\infty$, so $g_n\ge\sum_{j:\varepsilon_j<\mu}(\varepsilon_j-\mu)>-\infty$, the sum having finitely many terms. The coordinate spectral PVM is $E_G(B)\sum_na_nb_n^\sigma=\sum_n\mathbf1_B(g_n)a_nb_n^\sigma$, and spectral integration gives the bounded positive $e^{-\beta G}$ with weights $\prod_jq_j^{n_j}$, where $q_j=e^{-\beta(\varepsilon_j-\mu)}$. Its extended positive trace is the nonnegative sum of these weights by the ensemble postulate. Restricting support to $\{1,\ldots,M\}$ gives $\prod_{j=1}^M(1-q_j)^{-1}$ for bosons with all $q_j<1$, and $\prod_{j=1}^M(1+q_j)$ for fermions, by geometric summation or expansion of the finite binary product. These support sets exhaust $\mathcal C^\sigma$, so the full sum is the increasing limit of those products; if a bosonic $q_j\ge1$, its one-mode subseries already diverges. [F2] now proves precisely the finiteness criteria in (c), including the bosonic strict chemical-potential condition. In each finite case the ensemble postulate identifies this sum with the ordinary trace of a trace-class operator and licenses normalization to a density. For each $j$, the same diagonal lemma defines the mode readout $N_j$ with weights $n_j$ on its exact squared-weight domain. The normalized marginal of each mode is proportional to $q_j^k$, $k\ge0$ for bosons and $k\in\{0,1\}$ for fermions, by separating that mode in the same nonnegative sums; its mean is therefore the corresponding factor of [F2]. This proves (c) on the explicitly realized number-variable spaces. [F2, F4, F5, step 1.3, algebra]

3.1 [Readings] In each case the occupation number is an assigned sharp observable by [F4], so the mean of its outcome law in the canonical preparation is the number computed in steps 1.1-1.3 and 2.1; the identification of the computed parameters with a physical temperature and chemical potential is the adopted assumption of the ensemble postulate, and no convergence statement beyond the displayed criteria is asserted. This gives the readings of (a)-(d). [F4, step 1.1, step 1.2, step 1.3, step 2.1, algebra]

4.1 [Conclusion and scope] Steps 1.1-1.3, 2.1 and 3.1 prove (a)-(d). The argument is a finite-mode or product computation at assigned temperature; no thermodynamic limit, continuum of modes, condensation or measured occupation entered, which is (e). [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎

## Remarks

- **No continuum claim.** The product criterion covers the declared countable discrete occupation bases only. These suppliers establish no continuum partition-trace result; such a model requires its own one-particle space, measure, self-adjoint energy realization and trace analysis.
- **The chemical potential.** $\mu$ is an assigned model parameter in joules with its uncertainty; the bosonic condition $\varepsilon_j-\mu>0$ is required for each geometric factor, while the fermionic factors are finite for every real $\mu$.
