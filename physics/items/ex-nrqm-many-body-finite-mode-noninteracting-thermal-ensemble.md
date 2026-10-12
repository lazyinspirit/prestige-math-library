---
id: ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble
aliases: [ nrqm-many-body-finite-mode-noninteracting-thermal-ensemble ]
kind: example
domain: physics
title: "Finite-mode non-interacting thermal ensembles: two fermions in three
  modes and two bosons in two modes"
status: draft
origin: pipeline
dependency_level: 13
deps:
  [
    def-nrqm-many-body-framework-declared-fixed-n-model,
    def-nrqm-many-body-framework-entropy-and-free-energy,
    post-nrqm-many-body-canonical-equilibrium-ensemble,
    pthm-nrqm-many-body-noninteracting-sector-diagonalization,
    def-nrqm-identical-particles-framework-orbital-occupation-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-observables-preparation-moments,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-identical-particles-and-spin,
    thm-nrqm-identical-particles-occupation-number-basis,
    thm-nrqm-identical-particles-finite-mode-occupation-counts,
    def-hilbert-space,
    def-countable-choice
  ]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  pthm-nrqm-many-body-noninteracting-sector-diagonalization: physical-result
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  thm-nrqm-identical-particles-finite-mode-occupation-counts: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Two exact finite-mode thermal computations in the declared
  non-interacting model: the canonical partition sums, ground energies and
  occupation means of two spinless fermions in three modes with energies 0,
  epsilon, 2 epsilon, and of two spinless bosons in two modes with energies 0
  and epsilon, at assigned temperature. The examples are model computations in
  declared finite-dimensional idealizations; they assert no physical particle
  species, no measured occupation and no thermodynamic limit."
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Sections 1.1-1.2 and 1.4 pp. 3-13: independent-particle
        eigenstates as tensor products, occupation-number configurations,
        Fock-space sectors and the second-quantised form of one-body operators"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1
        printed pages 226-230 (PDF pages 234-238): counting of antisymmetric
        two-particle configurations and the exclusion rule"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P6 in the readings of
[[def-nrqm-identical-particles-framework-orbital-occupation-model]] and
[[def-nrqm-observables-framework-observable-and-outcome-law]], work in the
finite-mode realization of the declared fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]], and adopt the
canonical equilibrium postulate
[[post-nrqm-many-body-canonical-equilibrium-ensemble]] at assigned
temperature $T>0$ with $\beta=1/(k_BT)$. Fix $\varepsilon>0$ in joules.

**Fermionic model.** One-particle space $K=\mathbb C^3$ with modes
$f_1,f_2,f_3$, fermionic statistics $\sigma=-$, $N=2$, and the declared
one-particle operator $h:=\varepsilon\,(0\cdot T_{f_1,f_1}+1\cdot T_{f_2,f_2}+2\cdot T_{f_3,f_3})$.

**Bosonic model.** One-particle space $K=\mathbb C^2$ with modes $g_1,g_2$,
bosonic statistics $\sigma=+$, $N=2$, and $h':=\varepsilon(0\cdot T_{g_1,g_1}+1\cdot T_{g_2,g_2})$.

Then:

(a) in the fermionic model the antisymmetric sector has orthonormal
eigenbasis $e_{\{1,2\}}^\wedge,e_{\{1,3\}}^\wedge,e_{\{2,3\}}^\wedge$ with
energies $\varepsilon,2\varepsilon,3\varepsilon$; the partition sum and the
exact occupation means are
$$Z_{\mathrm F}=e^{-\beta\varepsilon}+e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon},$$
$$\langle N_1\rangle_\beta=\frac{e^{-\beta\varepsilon}+e^{-2\beta\varepsilon}}{Z_{\mathrm F}},\quad \langle N_2\rangle_\beta=\frac{e^{-\beta\varepsilon}+e^{-3\beta\varepsilon}}{Z_{\mathrm F}},\quad \langle N_3\rangle_\beta=\frac{e^{-2\beta\varepsilon}+e^{-3\beta\varepsilon}}{Z_{\mathrm F}},$$
with $\langle N_1+N_2+N_3\rangle_\beta=2$ and ground energy
$\varepsilon$ (configuration $\{1,2\}$);

(b) in the bosonic model the symmetric sector has orthogonal eigenbasis
$m_{(2,0)},m_{(1,1)},m_{(0,2)}$ with energies $0,\varepsilon,2\varepsilon$;
the partition sum and the exact occupation means are
$$Z_{\mathrm B}=1+e^{-\beta\varepsilon}+e^{-2\beta\varepsilon},\qquad \langle N_1\rangle_\beta=\frac{2+e^{-\beta\varepsilon}}{Z_{\mathrm B}},\qquad \langle N_2\rangle_\beta=\frac{e^{-\beta\varepsilon}+2e^{-2\beta\varepsilon}}{Z_{\mathrm B}},$$
with $\langle N_1+N_2\rangle_\beta=2$ and ground energy $0=N\varepsilon_1$;

(c) *scope*: the computations are exact statements about the declared
finite-mode models at the assigned temperature; they assert no physical
species, no measured occupation, no thermalisation and no thermodynamic
limit.

## Verification

[L1] **Diagonalisation theorem.** In the non-interacting finite-mode model
the labelled operator $\sum_ih^{(i)}$ is diagonal on the product basis with
eigenvalue $\sum_k\varepsilon_{i_k}$, the Slater vectors $e_J^\wedge$ and the
symmetric vectors $m_\lambda$ are eigenvectors of the sector operator with
eigenvalues $\sum_{j\in J}\varepsilon_j$ and $\sum_j\lambda_j\varepsilon_j$,
and the partition sum is the corresponding finite sum
([[pthm-nrqm-many-body-noninteracting-sector-diagonalization]] clauses (a)-(c)).

[L2] **Occupation operators.** The occupation operators $N_j$ act on the
sector basis by $N_je_J^\wedge=\mathbf 1_J(j)e_J^\wedge$ and
$N_jm_\lambda=\lambda_jm_\lambda$, and the sector dimensions are three in both the
bosonic and fermionic cases; the occupations are assigned sharp
observables with finite means in every preparation
([[thm-nrqm-identical-particles-occupation-number-basis]] clauses (c), (d),
[[thm-nrqm-identical-particles-finite-mode-occupation-counts]] clauses (a),
(b), [[pthm-nrqm-observables-preparation-moments]]).

**Proof technique:** direct; list the occupation configurations, read their
energies from the diagonalisation theorem, and compute the weighted means in
the canonical weights.

**Given:** the declared fermionic and bosonic finite-mode models, the energies $0,\varepsilon,2\varepsilon$, the assigned temperature data $\beta>0$, and [L1], [L2].

1.1 [Fermionic configuration sum] The two-element subsets of $\{1,2,3\}$ are $\{1,2\},\{1,3\},\{2,3\}$ with energies $0+\varepsilon=\varepsilon$, $0+2\varepsilon=2\varepsilon$, $\varepsilon+2\varepsilon=3\varepsilon$ by [L1]; the canonical weights are $q_J=e^{-\beta\lambda_J}/Z_{\mathrm F}$, and the occupation means are $\sum_Jq_J\mathbf 1_J(j)$ by [L2], giving the three displayed formulas. The total occupation is $\sum_Jq_J\cdot2=2$ because every configuration has two occupied modes, and the smallest energy is that of $\{1,2\}$, namely $\varepsilon$, by [L1] clause (c). This proves (a). [L1, L2, algebra]

1.2 [Bosonic configuration sum] The occupation vectors of total two in two modes are $(2,0),(1,1),(0,2)$ with energies $0,\varepsilon,2\varepsilon$ by [L1]; the canonical weights are $q_\lambda=e^{-\beta\lambda_\lambda}/Z_{\mathrm B}$ and the occupation means are $\sum_\lambda q_\lambda\lambda_j$ by [L2], giving $\langle N_1\rangle=(2\cdot1+1\cdot e^{-\beta\varepsilon}+0)/Z_{\mathrm B}$ and $\langle N_2\rangle=(0+1\cdot e^{-\beta\varepsilon}+2\cdot e^{-2\beta\varepsilon})/Z_{\mathrm B}$, and the total occupation is $2$ because every configuration has $\sum_j\lambda_j=2$; the ground energy is $0=N\varepsilon_1$ by [L1] clause (c). This proves (b). [L1, L2, algebra]

2.1 [Checks and scope] In both models $Z$ is a finite sum of positive terms, hence $0<Z<\infty$; the displayed occupation sums equal the particle number $N=2$ identically in $\beta$ by steps 1.1-1.2, and the ground energies agree with the general formulas of [L1] clause (c) for the sorted energy lists $(0,\varepsilon,2\varepsilon)$ and $(0,\varepsilon)$. Every quantity is a spectral datum of the declared finite-dimensional model; no physical species, measured occupation, thermalisation or thermodynamic limit entered, which is (c). [L1, L2, step 1.1, step 1.2, algebra] ∎

## Remarks

- **Dimension counts.** The fermionic sector is three-dimensional by exclusion and the bosonic sector is three-dimensional by the configuration count; the two examples are therefore directly comparable finite checks of the diagonalisation theorem at different statistics.
- **Exactness.** The formulas are exact rational functions of $e^{-\beta\varepsilon}$; no expansion in $\varepsilon/(k_BT)$ is used, and the dilute-limit approximations are treated separately on this page.
