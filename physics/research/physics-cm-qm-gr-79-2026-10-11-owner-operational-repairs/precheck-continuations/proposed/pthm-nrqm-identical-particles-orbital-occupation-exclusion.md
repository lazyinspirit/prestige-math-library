---
id: pthm-nrqm-identical-particles-orbital-occupation-exclusion
aliases: [ nrqm-identical-particles-orbital-occupation-exclusion ]
kind: physics-theorem
domain: physics
title: "Pauli exclusion in the declared finite-mode occupation readout, with the
  bosonic contrast"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    def-nrqm-identical-particles-framework-orbital-occupation-model,
    def-nrqm-identical-particles-framework-species-sectors-and-preparations,
    def-nrqm-observables-framework-observable-and-outcome-law,
    thm-nrqm-identical-particles-occupation-number-basis,
    thm-nrqm-identical-particles-finite-mode-occupation-counts,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-identical-particles-and-spin,
    def-hilbert-orthogonal-projection,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  thm-nrqm-identical-particles-finite-mode-occupation-counts: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-hilbert-orthogonal-projection: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional exclusion statement of the declared finite-mode
  occupation model: in the adopted antisymmetric sector of P6 the joint
  occupation law is supported on configurations of occupations at most one, so
  the probability of reading two particles in one declared mode is zero in every
  declared sector preparation, while in the symmetric sector every occupation
  configuration of total n occurs. The statement is conditional on the declared
  sector and the finite-mode idealization; it asserts no measured occupancy, no
  apparatus claim and no derivation of a species' statistics."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        10.1.1 printed pages 227-228 (PDF pages 235-236): antisymmetry of the
        fermion pair wavefunction and the Pauli exclusion principle, with the
        vanishing amplitude for a repeated single-particle state"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Sections 1.2-1.3 pp. 5-9: occupation-number states
        with fermionic occupations in {0,1} and no such restriction for bosons"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the observable and probability postulate P2
([[post-nrqm-framework-observable-and-probability]]) and the
identical-particle and spin postulate P6
([[post-nrqm-framework-identical-particles-and-spin]]) in the readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
and [[def-nrqm-identical-particles-framework-orbital-occupation-model]], and
assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Declare a finite-mode
model as in
[[def-nrqm-identical-particles-framework-orbital-occupation-model]] with $d$
declared modes $f_1,\dots,f_d$, $n\ge1$ particles and statistics choice
$\sigma$, with sector space $\mathfrak H_n^\sigma$,
occupation readouts $N_1^\sigma,\dots,N_d^\sigma$, joint projections
$(P_\lambda)_{\lambda\in\Lambda_n}$ and joint law
$\mu^{N}_\rho(\lambda)=\operatorname{tr}(\rho P_\lambda)$. Then for every
declared sector preparation $\rho$:

(a) *fermionic exclusion*: if $\sigma=-$, then
$$\mu^{N_j^-}_\rho\bigl([2,\infty)\bigr)=0\quad(j=1,\dots,d), \qquad \operatorname{tr}\bigl(\rho\,N_j^-(N_j^--I)\bigr)=0,$$
and the joint law is supported on the occupation configurations with entries in
$\{0,1\}$:
$$\mu^{N}_\rho\bigl(\{\lambda\in\Lambda_n:\lambda_j\ge2\ \text{for some }j\}\bigr)=0;$$

(b) *no restriction in the symmetric sector*: if $\sigma=+$, then for every
$\lambda\in W(n,d)$ the projection $P_\lambda$ is nonzero, and for the pure
declared sector preparation of the ray of $m_\lambda$ the joint law gives
weight one to $\lambda$; in particular for $n\ge2$ and any $j$ the
configuration with $\lambda_j=n$ occurs;

(c) *total occupation*: in either sector $\sum_{j=1}^{d}N_j^\sigma
=n\,\mathrm{id}_{\mathfrak H_n^\sigma}$, so the total occupation has the
degenerate law $\delta_n$ and every outcome of the joint readout satisfies
$\sum_j\lambda_j=n$.

The exclusion in (a) is a conditional consequence of the adopted antisymmetric
sector and of the declared finite-mode readout; the theorem asserts no measured
occupancy, no detector behaviour and no derivation of the statistics of any
species.

## Facts & Assumptions

**Given:** A declared finite-mode model with $d$ modes, $n\ge1$ particles, statistics choice $\sigma$, sector space, occupation readouts, joint projections and a declared sector preparation $\rho$.

[F1] **Sector readouts.** $K$ is $d$-dimensional with orthonormal basis $(f_1,\dots,f_d)$; the operators $N_j$ of the occupation theorem are bounded self-adjoint, commute pairwise, satisfy $\sum_jN_j=nI$ and preserve both sector spaces, with $N_jf_J^\wedge=\mathbf 1_J(j)f_J^\wedge$ and $N_jm_\lambda=\lambda_jm_\lambda$, and the joint eigenspaces inside $\operatorname{ran}P_-^{(n)}$ are the lines $\mathbb Cf_J^\wedge$ (indexed by $n$-element subsets $J$, eigenvalue vector $\mathbf 1_J$) and inside $\operatorname{ran}P_+^{(n)}$ the lines $\mathbb Cm_\lambda$ (indexed by $\lambda\in W(n,d)$, eigenvalue vector $\lambda$) ([[thm-nrqm-identical-particles-occupation-number-basis]] clauses (b)-(d), [[def-nrqm-identical-particles-framework-orbital-occupation-model]] clauses (c)-(d)).

[F2] **Observable reading.** An assigned sharp observable $A$ has a unique spectral projection-valued measure $E_A$ and the outcome law $\mu^{A}_\rho(B)=\operatorname{tr}(\rho E_A(B))$; if a projection-valued measure $F$ satisfies $\int\lambda\,dF(\lambda)=A$, then $F=E_A$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a),(b), [[post-nrqm-framework-observable-and-probability]]).

[F3] **Joint projectors.** In the declared finite-mode model, the finite family $(P_\lambda)_{\lambda\in\Lambda_n}$ consists of mutually orthogonal projections, sums to the identity of the sector, and satisfies $N_j^\sigma=\sum_{\lambda\in\Lambda_n}\lambda_jP_\lambda$ ([[def-nrqm-identical-particles-framework-orbital-occupation-model]] clause (d)).

[F4] **Laws and traces.** For a preparation $\rho$ and projections $P_\lambda$ with $\sum_\lambda P_\lambda=I$ the numbers $\operatorname{tr}(\rho P_\lambda)$ are nonnegative and sum to one; a pure preparation of the unit ray of a vector $x\ne0$ gives weight $\|Qx\|^2/\|x\|^2$ to an orthogonal projection $Q$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a),(b), [[def-nrqm-state-geometry-framework-state-space]]).

[F5] **Configuration counts.** No fermionic configuration has an entry $\ge2$; for $n>d$ the antisymmetric sector is $\{0\}$; every $\lambda\in W(n,d)$ is a bosonic configuration, including the configuration with $\lambda_j=n$ for any $j$ ([[thm-nrqm-identical-particles-finite-mode-occupation-counts]] clauses (a),(c)).

## Proof

**Proof technique:** direct; diagonalise the sector restrictions of the occupation operators in the sector bases, identify their finite spectral measures, and read the support of the joint law off the eigenvalue vectors.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Sector restrictions are self-adjoint] By [F1] the operator $N_j$ preserves $\mathfrak H_n^\sigma$, and both the Slater family and the family $(m_\lambda)$ consist of eigenvectors of $N_j$ with real eigenvalues and form a basis of the respective sector; a linear endomorphism of a finite-dimensional Hilbert space that is diagonal in an orthogonal basis with real eigenvalues is self-adjoint. Hence each $N_j^\sigma=N_j|_{\mathfrak H_n^\sigma}$ is a bounded self-adjoint endomorphism of $\mathfrak H_n^\sigma$, which is the readout declared in clauses (c)-(d) of the model. [F1, algebra]

2.1 [Finite spectral measures and laws] Fix $\sigma\in\{-,+\}$ and $j\in\{1,\dots,d\}$. By [F3], the finite family of projections
$$F_j(B):=\sum_{\substack{\lambda\in\Lambda_n\\\lambda_j\in B}}P_\lambda\qquad(B\subseteq\mathbb R\text{ Borel})$$
is a projection-valued measure: $F_j(\varnothing)=0$ and $F_j(\mathbb R)=I$ because the $P_\lambda$ sum to $I$; each $F_j(B)$ is an orthogonal projection; intersections satisfy $F_j(B\cap C)=F_j(B)F_j(C)$ because the $P_\lambda$ are mutually orthogonal; and countable additivity is strong since only finitely many $\lambda$ occur and the Borel sets in a disjoint sequence contain each eigenvalue $\lambda_j$ at most once. Its scalar measures $\mu_x(B):=\langle F_j(B)x,x\rangle$ are finite and supported on the finite set $S_j:=\{\lambda_j:\lambda\in\Lambda_n\}$, hence regular: for every Borel $B$, the compact set $B\cap S_j$ and an open set $U$ with $U\cap S_j=B\cap S_j$ give $\mu_x(B\cap S_j)=\mu_x(B)=\mu_x(U)$. Its spectral integral is the finite sum
$$\int_{\mathbb R}r\,dF_j(r)=\sum_{\lambda\in\Lambda_n}\lambda_jP_\lambda=N_j^\sigma.$$
Thus $F_j$ is the spectral PVM of $N_j^\sigma$ by uniqueness of the spectral PVM in [F2]. The outcome law in $\rho$ is therefore $\mu^{N_j^\sigma}_\rho(B)=\operatorname{tr}(\rho F_j(B))$. In the fermionic sector [F1] restricts the joint eigenvalue vectors to $\mathbf 1_J\in\{0,1\}^d$, so this spectral measure is supported on $\{0,1\}$; in the symmetric sector it groups the lines $\mathbb Cm_\lambda$ by the value $\lambda_j$. This identifies the readout laws of clauses (c)-(d) of the model. [F1, F2, F3, step 1.1, algebra, construct]

3.1 [Exclusion] Assume $\sigma=-$. By step 2.1 the spectral measure of $N_j^-$ is supported on $\{0,1\}$, so $E_{N_j^-}([2,\infty))=0$ and $\mu^{N_j^-}_\rho([2,\infty))=\operatorname{tr}(0)=0$; moreover $N_j^-(N_j^--I)=0$ on the sector because the operator vanishes on the Slater basis by [F1], so its expectation $\operatorname{tr}(\rho N_j^-(N_j^--I))$ is zero. For the joint law, [F1] shows that the joint eigenspaces with an entry $\ge2$ do not occur among the lines $\mathbb Cf_J^\wedge$, so the sum of the corresponding projections $P_\lambda$ is zero and $\mu^{N}_\rho(\{\lambda:\lambda_j\ge2\ \text{for some }j\})=0$. This proves (a). [F1, step 1.1, step 2.1, algebra]

3.2 [Bosonic contrast] Assume $\sigma=+$. For every $\lambda\in W(n,d)$ the vector $m_\lambda$ is nonzero and spans the joint eigenspace for $\lambda$ by [F1], so $P_\lambda\ne0$; for the pure preparation of the ray of $m_\lambda$ the weight is $\mu^{N}_\rho(\lambda)=\operatorname{tr}(\rho P_\lambda)=\|P_\lambda x\|^2/\|x\|^2=1$ for any unit representative $x$ of that ray by [F4]. By [F5] the configurations $\lambda$ with $\lambda_j=n$ lie in $W(n,d)$, so they occur; this proves (b). [F1, F4, F5, step 2.1, algebra]

3.3 [Total occupation] By [F1] one has $\sum_jN_j=nI$ on the whole tensor power, hence on the sector, and therefore $\sum_jN_j^\sigma=n\,\mathrm{id}_{\mathfrak H_n^\sigma}$; since the total occupation is the constant operator $nI$, its outcome law assigns probability one to $\{n\}$ in every preparation, and applying the joint law of [F1] gives $\sum_j\lambda_j=n$ for every configuration of the support; this is (c). [F1, step 2.1, algebra]

4.1 [Assembly and scope] Step 3.1 proves (a), step 3.2 proves (b) and step 3.3 proves (c). The proof is conditional on the declared sector of P6, the declared finite-mode readout and the cited spectral mathematics; no measured occupancy, no apparatus behaviour and no derivation of a species' statistics is asserted. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **The precise content of "exclusion".** The theorem states the vanishing of the probability of reading an occupation $\ge2$ in each declared mode and the vanishing of the expectation of the double-occupation operator $N_j(N_j-1)$; it is a statement about the declared readout in every declared sector preparation, not a statement about particles avoiding each other in space.
- **Finite modes.** The statement uses the finite-dimensional mode model of the definition; the counting facts for the index sets are those of the finite-mode count theorem. No infinite mode family and no continuum occupancy is treated.
