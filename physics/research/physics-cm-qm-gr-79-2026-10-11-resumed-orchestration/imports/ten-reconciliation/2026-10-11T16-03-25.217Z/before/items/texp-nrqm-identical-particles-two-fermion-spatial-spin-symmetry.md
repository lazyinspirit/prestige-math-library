---
id: texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry
aliases: [nrqm-identical-particles-two-fermion-spatial-spin-symmetry]
kind: thought-experiment
domain: physics
title: "The two spin-half fermion sector: the spin-singlet and spin-triplet parts and their orbital symmetry"
status: draft
origin: pipeline
dependency_level: 12
deps: [def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-identical-particles-framework-orbital-occupation-model, thm-nrqm-identical-particles-two-factor-symmetry-decomposition, lem-nrqm-identical-particles-two-particle-exchange-operator, thm-nrqm-identical-particles-occupation-number-basis, pthm-nrqm-angular-momentum-two-spin-composition, post-nrqm-framework-state-and-composition, post-nrqm-framework-identical-particles-and-spin, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-hilbert-space, def-countable-choice]
dependency_roles:
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-identical-particles-framework-orbital-occupation-model: formulation-prerequisite
  thm-nrqm-identical-particles-two-factor-symmetry-decomposition: mathematical-premise
  lem-nrqm-identical-particles-two-particle-exchange-operator: mathematical-premise
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  pthm-nrqm-angular-momentum-two-spin-composition: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional model computation for two declared spin-half fermions with a finite orbital factor: the decomposition of the antisymmetric sector into spin-singlet and spin-triplet parts, the opposite orbital symmetry in each part, and the explicit components of an antisymmetrised product of two declared one-particle states. The computation is conditional on the adopted antisymmetric sector of P6 and on the declared finite orbital factor; it asserts no spin-statistics theorem, no interaction, no dynamics, no measurement and no empirical claim."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1.2 printed pages 229-230 (PDF pages 237-238): for a pair of spin-half particles, the spin-triplet states have antisymmetric spatial wavefunctions and the spin-singlet state a symmetric one"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 4-10: exchange symmetry, spin, and the symmetric and antisymmetric decomposition of a two-particle state; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1
([[post-nrqm-framework-state-and-composition]]) and the identical-particle and
spin postulate P6 ([[post-nrqm-framework-identical-particles-and-spin]]) in the
readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
and assume the Axiom of Countable Choice ([[def-countable-choice]]). Declare a
**spin-half fermionic species** whose one-particle space is the completed
product $K\widehat\otimes V$ of a nonzero finite-dimensional complex Hilbert
space $K$ (the orbital factor) with $V=\mathbb C^{2}$ (the internal factor of
P6 clause (ii) for $s=\tfrac12$), with $V$ carrying the orthonormal basis
$(e_{+},e_{-})$ of [[pthm-nrqm-angular-momentum-two-spin-composition]], and
declare $n=2$ particles in the adopted antisymmetric sector
$$\mathfrak H_2^-=\operatorname{ran}P_-^{(K\otimes V)}\subseteq (K\otimes V)\widehat\otimes(K\otimes V)$$
of the declared species, with the regrouping unitary $\Theta$ of
[[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]]. Write
$u\wedge v:=\sqrt2\,P_-^{(K)}(u\otimes v)$ and
$u\odot v:=\sqrt2\,P_+^{(K)}(u\otimes v)$ for $u,v\in K$, and
$\sigma_\pm:=(e_+\otimes e_-\pm e_-\otimes e_+)/\sqrt2$ for the spin
combinations. Then, as conditional statements of the declared model:

(a) *sector decomposition*: $\Theta$ carries $\mathfrak H_2^-$ onto the
orthogonal direct sum $\bigl(\operatorname{ran}P_-^{(K)}\otimes\operatorname{ran}P_+^{(V)}\bigr)+\bigl(\operatorname{ran}P_+^{(K)}\otimes\operatorname{ran}P_-^{(V)}\bigr)$,
where $\operatorname{ran}P_-^{(V)}=\mathbb C\Psi$ is the one-dimensional
spin-singlet line spanned by the singlet $\Psi$ of
[[pthm-nrqm-angular-momentum-two-spin-composition]] clause (d) and
$\operatorname{ran}P_+^{(V)}=W_{1}$ is the three-dimensional spin-triplet
space of that theorem; consequently the antisymmetric two-particle sector is
the sum of a **spin-singlet part** $\operatorname{ran}P_+^{(K)}\otimes\mathbb C\Psi$,
of dimension $\binom{m+1}2$ for $m=\dim K$, with symmetric orbital factor,
and a **spin-triplet part** $\operatorname{ran}P_-^{(K)}\otimes W_1$, of
dimension $3\binom m2$, with antisymmetric orbital factor;

(b) *opposite orbital symmetry*: for all $u,v\in K$ and $\chi,\chi'\in V$,
$$\Theta\Bigl(P_-^{(K\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)\Bigr) =P_+^{(K)}(u\otimes v)\otimes P_-^{(V)}(\chi\otimes\chi') +P_-^{(K)}(u\otimes v)\otimes P_+^{(V)}(\chi\otimes\chi');$$
the spin-singlet component therefore multiplies the symmetric orbital
component and the spin-triplet component multiplies the antisymmetric orbital
component, so within each component the orbital exchange symmetry is opposite
to the spin exchange symmetry;

(c) *parallel spins*: if $u,v\in K$ are orthonormal and $\chi\in V$ is a unit
vector, then $\Theta$ carries the ray of
$P_-^{(K\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi)\bigr)$ to the ray
of $P_-^{(K)}(u\otimes v)\otimes(\chi\otimes\chi)$, whose unit representative
is $(u\wedge v)\otimes(\chi\otimes\chi)$; for $\chi=e_+$ this is the
$S^{\mathrm{tot}}_z=\hbar$ triplet component with an antisymmetric orbital
factor;

(d) *antiparallel spins*: if $u,v\in K$ are orthonormal, then $\Theta$ carries
the ray of $P_-^{(K\otimes V)}\bigl((u\otimes e_+)\otimes(v\otimes e_-)\bigr)$
to the ray of $\tfrac1{\sqrt2}\bigl((u\odot v)\otimes\sigma_-
+(u\wedge v)\otimes\sigma_+\bigr)$, an equal-amplitude superposition of the
singlet component with symmetric orbital factor and the $S^{\mathrm{tot}}_z=0$
triplet component with antisymmetric orbital factor; in particular such an
antisymmetrised product of two orthonormal one-particle states has no definite
orbital exchange symmetry.

The model assignment of the antisymmetric sector is that of P6; the statements
above are conditional on it and assert no spin-statistics theorem, no
interaction, no dynamics and no measurement.

## Facts & Assumptions

**Given:** The declared spin-half fermionic species with orbital factor $K$ of dimension $m$, internal factor $V=\mathbb C^2$ with basis $(e_+,e_-)$, the two-particle antisymmetric sector, the regrouping unitary $\Theta$, and vectors $u,v\in K$, $\chi,\chi'\in V$.

[F1] **Sector vocabulary.** The sector space is $\operatorname{ran}P_-^{(K\otimes V)}$ with the inner product of the completed tensor square, its vectors are the declared pure preparations of the two particles, and the exchange operator and projections act as in the cited lemmas ([[def-nrqm-identical-particles-framework-species-sectors-and-preparations]] clauses (c)-(d), [[lem-nrqm-identical-particles-two-particle-exchange-operator]] clauses (a),(b)).

[F2] **Regrouping and its identities.** The regrouping unitary $\Theta$ is unitary with $\Theta\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)=(u\otimes v)\otimes(\chi\otimes\chi')$, maps $\operatorname{ran}P_-^{(K\otimes V)}$ onto $\bigl(\operatorname{ran}P_-^{(K)}\otimes\operatorname{ran}P_+^{(V)}\bigr)+\bigl(\operatorname{ran}P_+^{(K)}\otimes\operatorname{ran}P_-^{(V)}\bigr)$, and satisfies the vector identity $\Theta P_-^{(K\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)=P_+^{(K)}(u\otimes v)\otimes P_-^{(V)}(\chi\otimes\chi')+P_-^{(K)}(u\otimes v)\otimes P_+^{(V)}(\chi\otimes\chi')$ ([[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]] clauses (b),(d),(e)).

[F3] **Spin-half internal factor.** For $V=\mathbb C^2$ the total spin operators of [[pthm-nrqm-angular-momentum-two-spin-composition]] decompose $V\otimes V=W_0\oplus W_1$ with $\dim W_0=1$, $\dim W_1=3$; the vector $\Psi=(e_+\otimes e_--e_-\otimes e_+)/\sqrt2$ is a unit vector with $S^{\mathrm{tot}}_i\Psi=0$ for all $i$ and is, up to a phase, the unique element of the kernel of $S^{\mathrm{tot}\,2}$; the products $e_m\otimes e_n$ are $S^{\mathrm{tot}}_z$-eigenvectors with weight $\hbar(m+n)$, so $e_+\otimes e_+$ has weight $\hbar$ and the combinations $\sigma_+=(e_+\otimes e_-+e_-\otimes e_+)/\sqrt2$ and $\sigma_-=(e_+\otimes e_--e_-\otimes e_+)/\sqrt2$ are unit vectors in $W_1$ and $W_0$ with $S^{\mathrm{tot}}_z$-weight $0$ ([[pthm-nrqm-angular-momentum-two-spin-composition]] clauses (b),(c),(d)).

[F4] **Orbital symmetric and antisymmetric combinations.** For a Hilbert space $K$ and orthonormal $u,v\in K$ the vectors $u\odot v=\sqrt2P_+^{(K)}(u\otimes v)$ and $u\wedge v=\sqrt2P_-^{(K)}(u\otimes v)$ are orthonormal, and $P_-^{(K)}(u\otimes v)$ and $P_+^{(K)}(u\otimes v)$ are orthogonal eigenvectors of the exchange operator; moreover $P_-^{(V)}(\chi\otimes\chi)=0$ for every $\chi\in V$ ([[lem-nrqm-identical-particles-two-particle-exchange-operator]] clauses (b),(c),(d)).

[F5] **Dimensions.** For a $d$-dimensional space, $\dim\operatorname{ran}P_+^{(2)}=\binom{d+1}2$ and $\dim\operatorname{ran}P_-^{(2)}=\binom d2$ ([[thm-nrqm-identical-particles-occupation-number-basis]] clauses (b),(c)); the dimensions of the two orthogonal summands add ([[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]] clause (f)).

## Proof

**Proof technique:** direct; identify the two spin combinations of the internal factor with the antisymmetric and symmetric summands, transfer the regrouping vector identity to rays and read the compositions off the identity of the symmetry-decomposition theorem.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Decomposition of the internal factor] By [F3] the antisymmetric combination $\sigma_-$ spans $W_0$ and $\sigma_+,\ e_+\otimes e_+,\ e_-\otimes e_-$ span the three-dimensional space $W_1$; since $e_+\otimes e_--e_-\otimes e_+$ is antisymmetric under the exchange and $e_+\otimes e_+,e_-\otimes e_-,e_+\otimes e_-+e_-\otimes e_+$ are symmetric, $\operatorname{ran}P_-^{(V)}=\mathbb C(e_+\otimes e_--e_-\otimes e_+)=\mathbb C\Psi=W_0$ and $\operatorname{ran}P_+^{(V)}=\operatorname{Sym}^2V=W_1$; the two subspaces are orthogonal complements of each other because $V\otimes V=W_0\oplus W_1$. [F3, F4, algebra]

2.1 [Sector decomposition] By [F2] the unitary image of the sector is $\bigl(\operatorname{ran}P_-^{(K)}\otimes\operatorname{ran}P_+^{(V)}\bigr)+\bigl(\operatorname{ran}P_+^{(K)}\otimes\operatorname{ran}P_-^{(V)}\bigr)$, an orthogonal direct sum, and step 1.1 identifies its summands as the spin-triplet part $\operatorname{ran}P_-^{(K)}\otimes W_1$ and the spin-singlet part $\operatorname{ran}P_+^{(K)}\otimes W_0$; by [F5] the singlet part has dimension $\dim\operatorname{ran}P_+^{(K)}=\binom{m+1}2$, and the triplet part has dimension $3\dim\operatorname{ran}P_-^{(K)}=3\binom m2$; this is (a) up to the assignment of the names singlet and triplet, which is the naming of $W_0$ and $W_1$ in [F3]. [F2, F3, F5, step 1.1, algebra]

3.1 [Opposite symmetry] The identity of (b) is the vector identity of [F2] under the identifications of steps 1.1 and 2.1: the first summand carries the internal factor in $\operatorname{ran}P_-^{(V)}=W_0$, the singlet, and the orbital factor in $\operatorname{ran}P_+^{(K)}$, the symmetric orbital component, while the second summand carries the internal factor in $\operatorname{ran}P_+^{(V)}=W_1$, the triplet, and the orbital factor in $\operatorname{ran}P_-^{(K)}$, the antisymmetric orbital component. This proves (b). [F2, step 1.1, step 2.1, algebra]

4.1 [Parallel spins] Let $u,v$ be orthonormal and $\chi$ a unit vector. By [F4] one has $P_-^{(V)}(\chi\otimes\chi)=0$ and $P_+^{(V)}(\chi\otimes\chi)=\chi\otimes\chi$; hence the identity of (b) gives $\Theta P_-^{(K\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi)\bigr)=P_-^{(K)}(u\otimes v)\otimes(\chi\otimes\chi)$, and multiplying by $\sqrt2$ gives the unit vector $(u\wedge v)\otimes(\chi\otimes\chi)$ because $\|u\wedge v\|=1$ and $\|\chi\otimes\chi\|=1$ by [F4]; both vectors lie in the sector and both rays are declared pure sector preparations by [F1], so the images of the two rays coincide, which is (c). [F1, F4, step 3.1, algebra]

4.2 [Antiparallel spins] Let $u,v$ be orthonormal. The orbital projections are $P_+^{(K)}(u\otimes v)=(u\odot v)/\sqrt2$ and $P_-^{(K)}(u\otimes v)=(u\wedge v)/\sqrt2$ by their definitions. In the internal tensor square, $P_-^{(V)}(e_+\otimes e_-)=\sigma_-/\sqrt2$ and $P_+^{(V)}(e_+\otimes e_-)=\sigma_+/\sqrt2$ by [F2] and the exchange formulas in [F4]. Substituting these four identities into (b) gives $\Theta P_-^{(K\otimes V)}\bigl((u\otimes e_+)\otimes(v\otimes e_-)\bigr)=\tfrac12\bigl((u\odot v)\otimes\sigma_-+(u\wedge v)\otimes\sigma_+\bigr)$. The two tensor summands inside the parentheses are orthogonal unit vectors, by [F3] and [F4], so this complete projected vector has norm $1/\sqrt2$. Multiplying it by $\sqrt2$ gives the unit representative $\tfrac1{\sqrt2}\bigl((u\odot v)\otimes\sigma_-+(u\wedge v)\otimes\sigma_+\bigr)$ of the image ray, as in (d). [F2, F3, F4, step 3.1, algebra]

5.1 [Assembly and scope] Steps 1.1 and 2.1 prove (a), step 3.1 proves (b), step 4.1 proves (c) and step 4.2 proves (d). Every statement is conditional on the adopted antisymmetric sector of P6 and on the declared finite orbital factor; the internal factor is the bookkeeping factor of P6 and no spatial position, interaction, dynamics or measurement is introduced. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **The singlet and triplet names.** The names refer to the total spin of the
  pair in the sense of the internal-factor composition theorem: $W_0$ is the
  kernel of $S^{\mathrm{tot}\,2}$ and $W_1$ is the triplet block. The orbital
  factor carries no spin and the theorem attributes no spin to the orbital
  degrees of freedom.
- **A Slater determinant is a superposition.** As clause (d) shows, the
  antisymmetrised product of two orthonormal one-particle states with opposite
  spin orientations contains both the singlet and the triplet $S_z=0$
  components with equal amplitudes; a definite orbital exchange symmetry
  belongs to the components, not to every vector of the sector.
