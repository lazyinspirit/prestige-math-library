---
id: pthm-nrqm-many-body-noninteracting-sector-diagonalization
aliases: [nrqm-many-body-noninteracting-sector-diagonalization]
kind: physics-theorem
domain: physics
title: "Diagonalisation of the non-interacting finite-mode sector: occupation eigenvalues, partition sum and ground energy"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-identical-particles-framework-orbital-occupation-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation, thm-nrqm-identical-particles-occupation-number-basis, thm-nrqm-identical-particles-finite-mode-occupation-counts, thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-trace-is-absolutely-convergent-and-basis-independent, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  thm-nrqm-identical-particles-finite-mode-occupation-counts: mathematical-premise
  thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional diagonalisation of the non-interacting finite-mode many-body model: the labelled energy sum is diagonal on the product basis of one-particle eigenmodes, the sector energy operator has the occupation-number eigenvalues on the Slater and symmetric sector bases, the finite partition sum and the ground-state occupation energies are computed, and the sector basis vectors are stationary states of the model evolution. The theorem is conditional on P1, P2, P4 and P6, on the adopted finite-mode idealization and on the declared one-particle Hamiltonian; it asserts no interaction, no spatial or infinite-mode result, no thermal state, no thermodynamic limit and no laboratory identification."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.1 and 10.1 printed pages 104-111 and 226-230 (PDF pages 112-119 and 234-238): non-interacting composite Hamiltonians, antisymmetric two-fermion states and Pauli exclusion"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Sections 1.2-1.3 pp. 5-9: the occupation-number basis and the diagonal form of a non-interacting many-body Hamiltonian in second quantisation"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1
([[post-nrqm-framework-state-and-composition]]), the observable and
probability postulate P2 ([[post-nrqm-framework-observable-and-probability]]),
the autonomous-dynamics postulate P4
([[post-nrqm-framework-autonomous-dynamics]]) and the identical-particle and
spin postulate P6 ([[post-nrqm-framework-identical-particles-and-spin]]) in
the readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
and [[def-nrqm-observables-framework-observable-and-outcome-law]], and assume
the Axiom of Countable Choice ([[def-countable-choice]]). Work in the
finite-mode realization of the declared fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]]: one-particle space
$K$ of finite dimension $d\ge1$ with declared modes $(f_1,\dots,f_d)$,
particle number $N\ge1$, sector space
$\mathfrak H_N^\sigma=\operatorname{ran}P_\sigma^{(N)}$, one-particle
self-adjoint operator $h\in\mathcal B(K)$, and **non-interacting** interaction
$W=0$, so that $H_{\mathrm{lab}}=\sum_{i=1}^Nh^{(i)}$ and
$H_N^\sigma=H_{\mathrm{lab}}|_{\mathfrak H_N^\sigma}$ in the notation of that
definition. Let $e_1,\dots,e_d$ be an orthonormal basis of eigenvectors of
$h$ with real eigenvalues $\varepsilon_1,\dots,\varepsilon_d$ and let
$\varepsilon_{(1)}\le\cdots\le\varepsilon_{(d)}$ be the nondecreasing
rearrangement of the list. Then:

(a) *the labelled operator is diagonal*: $H_{\mathrm{lab}}$ is bounded and
self-adjoint with $\|H_{\mathrm{lab}}\|\le N\|h\|$, it commutes with every
permutation unitary $U_\pi$, and for every multi-index
$i=(i_1,\dots,i_N)\in\{1,\dots,d\}^N$,
$$H_{\mathrm{lab}}\,(e_{i_1}\otimes\cdots\otimes e_{i_N})=\Bigl(\sum_{k=1}^N\varepsilon_{i_k}\Bigr)e_{i_1}\otimes\cdots\otimes e_{i_N};$$

(b) *occupation eigenvalues and spectrum*: for every $N$-element subset
$J\subseteq\{1,\dots,d\}$ the Slater vector $e_J^\wedge$ of
[[thm-nrqm-identical-particles-occupation-number-basis]] clause (b) is an
eigenvector of $H_N^-$ with eigenvalue $\lambda_J:=\sum_{j\in J}\varepsilon_j$,
and for every occupation vector $\lambda\in W(N,d)=\{\lambda\in\mathbb N^d:\sum_j\lambda_j=N\}$
the symmetric vector $m_\lambda$ of clause (c) is an eigenvector of
$H_N^+$ with eigenvalue $\lambda_\lambda:=\sum_{j=1}^d\lambda_j\varepsilon_j$;
the families $(e_J^\wedge)$ and $(m_\lambda)$ are orthogonal bases of
$\mathfrak H_N^-$ and $\mathfrak H_N^+$ respectively, so the spectrum of
$H_N^\sigma$ is the finite set of these eigenvalues (with multiplicities
given by the number of configurations producing them); for $\sigma=-$ and
$N>d$ the sector space is $\{0\}$ and the model has no sector states;

(c) *partition sum and ground energy*: for every $\beta>0$ the number
$$Z_N(\beta):=\operatorname{tr}e^{-\beta H_N^\sigma}=\sum_{\substack{\lambda\in W(N,d)\\ \lambda_j\le1\ \text{if }\sigma=-}}e^{-\beta\lambda_\lambda}$$
is a finite sum with $0<Z_N(\beta)<\infty$, bounded by the number of
occupation configurations; if $\sigma=-$ and $N\le d$ the ground eigenvalue
is $E_0=\sum_{k=1}^N\varepsilon_{(k)}$ and if $\sigma=+$ it is
$E_0=N\varepsilon_{(1)}$, and for every unit vector $\psi\in\mathfrak H_N^\sigma$
one has $\langle H_N^\sigma\psi,\psi\rangle\ge E_0$, with equality exactly on
the eigenspace of $E_0$;

(d) *reading and stationarity*: the pair $(H_N^\sigma,\mathrm J)$ is the
model's assigned energy observable; in a declared sector preparation $\rho$
its outcome law is $\mu_\rho(B)=\operatorname{tr}(\rho E_{H_N^\sigma}(B))$,
and in the pure preparation of each sector basis vector of clause (b) this
law is the point mass at the displayed eigenvalue; each such vector is a
stationary state of the model evolution $U(t)=\exp(-itH_N^\sigma/\hbar)$, and
the energy law of every declared sector preparation is the law of the finite
spectral sum in the sector basis;

(e) *scope*: the theorem is conditional on the finite-mode idealization, on
the declared $h$ and on $W=0$; it asserts nothing for interacting models, for
spatial realizations, for infinite mode families, about thermal states or
equilibration, and about any laboratory system.

## Facts & Assumptions

**Given:** the finite-mode non-interacting model data of the statement with its eigenbasis $(e_1,\dots,e_d)$, eigenvalues $\varepsilon_j$, sector projections $P_\sigma^{(N)}$ and sector space $\mathfrak H_N^\sigma$.

[F1] **Finite spectral theorem.** A self-adjoint endomorphism $h$ of the finite-dimensional complex inner product space $K$ is normal, so $K$ has an orthonormal basis of eigenvectors of $h$ with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-hilbert-space]]).

[F2] **Slot operators.** For $h\in\mathcal B(K)$ the slot operator $h^{(i)}$ acts on elementary tensors by $h^{(i)}(v_1\otimes\cdots\otimes v_N)=v_1\otimes\cdots\otimes hv_i\otimes\cdots\otimes v_N$, is bounded with $\|h^{(i)}\|\le\|h\|$, and $(h^{(i)})^*=(h^*)^{(i)}$ ([[lem-nrqm-composites-bounded-tensor-maps]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[F3] **Product basis and occupation bases.** The elementary tensors $e_i=e_{i_1}\otimes\cdots\otimes e_{i_N}$ over all multi-indices form an orthonormal basis of $K^{\otimes N}$; the Slater vectors $e_J^\wedge=\sqrt{N!}P_-^{(N)}(e_{j_1}\otimes\cdots\otimes e_{j_N})$ over $N$-element subsets $J=\{j_1<\cdots<j_N\}$ form an orthonormal basis of $\operatorname{ran}P_-^{(N)}$ with $e_J^\wedge$ zero-free for distinct indices and vanishing on repeated indices; the vectors $m_\lambda=\sum_{c\in\operatorname{orb}(\lambda)}e_c$ over $\lambda\in W(N,d)$ form an orthogonal basis of $\operatorname{ran}P_+^{(N)}$, and $N_je_J^\wedge=\mathbf 1_J(j)e_J^\wedge$, $N_jm_\lambda=\lambda_jm_\lambda$ ([[thm-nrqm-identical-particles-occupation-number-basis]] clauses (a), (b), (c), (d), [[lem-nrqm-composites-permutation-sector-projections]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

[F4] **Configuration counts.** The map $J\mapsto\mathbf 1_J$ is a bijection from $N$-element subsets onto $\{\lambda\in\{0,1\}^d:\sum_j\lambda_j=N\}$, the sector dimensions are $\binom dN$ and $\binom{N+d-1}{N}$, and for $N>d$ the antisymmetric sector is $\{0\}$ ([[thm-nrqm-identical-particles-finite-mode-occupation-counts]] clauses (a), (b), (c), [[thm-nrqm-identical-particles-occupation-number-basis]] clause (b)).

[F5] **Stationary states.** For the assigned energy observable $(H_{\mathrm{op}},u_H)$ with flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$, a nonzero $\psi$ is an eigenvector of $H_{\mathrm{op}}$ if and only if its pure preparation is stationary, and then $\psi(t)=e^{-it\lambda/\hbar}\psi$ ([[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] clause (c)); the outcome law of an assigned observable in a preparation is the trace law of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), and the trace is basis independent ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

## Proof

**Proof technique:** direct; expand in the product basis of one-particle eigenmodes, transport the diagonal action to the two sector bases, and read the finite spectrum and trace.

**Given:** the data of the statement and [F1]-[F5].

1.1 [The labelled operator on the product basis] By [F2] each $h^{(i)}$ is bounded and self-adjoint, so $H_{\mathrm{lab}}=\sum_ih^{(i)}$ is bounded and self-adjoint with $\|H_{\mathrm{lab}}\|\le N\|h\|$. On the product basis vector $e_i=e_{i_1}\otimes\cdots\otimes e_{i_N}$ the $i$-th slot operator acts as $h$ on the factor $e_{i_k}$, giving $h^{(k)}e_i=\varepsilon_{i_k}e_i$; hence $H_{\mathrm{lab}}e_i=(\sum_k\varepsilon_{i_k})e_i$. Since every $U_\pi$ permutes the slots and $H_{\mathrm{lab}}$ is the sum over all slots, $U_\pi H_{\mathrm{lab}}U_\pi^*=H_{\mathrm{lab}}$. This proves (a). [F1, F2, F3, algebra]

2.1 [Sector eigenvectors] Let $J=\{j_1<\cdots<j_N\}$ and $i=(j_1,\dots,j_N)$. By [F3], $e_J^\wedge=\sqrt{N!}P_-^{(N)}e_i$; since $H_{\mathrm{lab}}$ commutes with $P_-^{(N)}$ by step 1.1 and [F3], $H_{\mathrm{lab}}e_J^\wedge=\sqrt{N!}P_-^{(N)}H_{\mathrm{lab}}e_i=(\sum_{j\in J}\varepsilon_j)\sqrt{N!}P_-^{(N)}e_i=\lambda_Je_J^\wedge$. Likewise, for $\lambda\in W(N,d)$ and any multi-index $c$ with $|c|=\lambda$ one has $P_+^{(N)}e_c=\gamma_cm_\lambda$ with $\gamma_c>0$ by [F3], so $H_{\mathrm{lab}}m_\lambda=(\sum_j\lambda_j\varepsilon_j)m_\lambda$; because the $e_J^\wedge$ and the $m_\lambda$ are orthogonal bases of the respective sectors by [F3], [F4], the spectrum of $H_N^\sigma$ is the finite set of the displayed eigenvalues with the configurations as multiplicities, and for $\sigma=-$, $N>d$ the sector is $\{0\}$. This proves (b). [F3, F4, step 1.1, algebra]

3.1 [Partition sum and ground energy] The trace of $e^{-\beta H_N^\sigma}$ is the sum of $e^{-\beta\lambda}$ over the eigenvalues with multiplicity, read on the orthogonal sector bases of step 2.1: $Z_N(\beta)=\sum_{\lambda}e^{-\beta\lambda_\lambda}$ over the occupation configurations of clause (c), a finite nonempty sum of positive numbers for $\sigma=+$ and for $\sigma=-$ with $N\le d$, and empty (no sector states) for $\sigma=-$, $N>d$. If $\sigma=-$, then for every configuration $\lambda\in\{0,1\}^d$ with $\sum\lambda_j=N$ the support $J=\operatorname{supp}\lambda$ has $N$ elements and $\sum_j\lambda_j\varepsilon_j=\sum_{j\in J}\varepsilon_j\ge\sum_{k=1}^N\varepsilon_{(k)}$ because the latter is the sum of the $N$ smallest eigenvalues; equality holds exactly for $J$ the set of indices of the $N$ smallest eigenvalues. If $\sigma=+$, then $\sum_j\lambda_j\varepsilon_j\ge\varepsilon_{(1)}\sum_j\lambda_j=N\varepsilon_{(1)}$, with equality exactly when every occupied mode has eigenvalue $\varepsilon_{(1)}$. Finally, expanding a unit $\psi\in\mathfrak H_N^\sigma$ in the orthogonal sector basis of step 2.1 gives $\langle H_N^\sigma\psi,\psi\rangle=\sum_\lambda|c_\lambda|^2\lambda_\lambda\ge E_0$ with the stated equality case, where the coefficients are normalized. This proves (c). [F3, F4, step 2.1, algebra]

3.2 [Reading and stationarity] The pair $(H_N^\sigma,\mathrm J)$ is the model's assigned energy observable of clause (e) of the declared-model definition, so by [F5] its outcome law in a declared sector preparation $\rho$ is $\mu_\rho(B)=\operatorname{tr}(\rho E_{H_N^\sigma}(B))$; for the pure preparation of a sector basis vector $\Psi$ of step 2.1, $E(\{\lambda\})\Psi=\Psi$ and hence $\mu_\Psi$ is the point mass at $\lambda$. By [F5] and step 2.1 each such $\Psi$ is an eigenvector of the generator, so its pure preparation is stationary under the flow $U(t)=\exp(-itH_N^\sigma/\hbar)$ with $\Psi(t)=e^{-it\lambda/\hbar}\Psi$, and the energy law of any preparation is the finite spectral law in the sector basis. This proves (d). [F5, step 2.1, algebra]

4.1 [Conclusion and scope] Steps 1.1 and 2.1 prove (a) and (b), step 3.1 proves (c) and step 3.2 proves (d). The argument used the finite-mode idealization, the declared non-interacting $h$ and the finite-dimensional spectral and tensor calculus; no interaction, spatial realization, infinite mode family, thermal state, equilibration or laboratory identification entered, which is (e). [step 1.1, step 3.1, step 3.2] ∎

## Remarks

- **Basis independence.** The eigenvalues $\lambda_J$ and $\lambda_\lambda$ depend on the eigenvalue list of $h$, not on the choice of eigenbasis; a degenerate one-particle eigenvalue contributes with its multiplicity through the distinct configurations.
- **Fermionic emptiness.** For $\sigma=-$ and $N>d$ the antisymmetric sector is zero, so the model as declared has no states and no energy observable; the theorem excludes that case in clauses (c), (d) rather than assigning it an energy.
