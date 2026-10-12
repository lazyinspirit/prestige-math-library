---
id: pthm-nrqm-many-body-exchange-energy-splitting
aliases: [nrqm-many-body-exchange-energy-splitting]
kind: physics-theorem
domain: physics
title: "Direct and exchange contributions to a two-fermion mean energy and the repulsive-Coulomb ordering"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-nrqm-many-body-framework-declared-fixed-n-model, def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-observables-framework-observable-and-outcome-law, pthm-nrqm-observables-preparation-moments, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-composites-euclidean-l2-product-unitary, thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation, thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator, thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness, thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, thm-plancherel, def-sobolev-space-wkp-and-its-norm, def-hilbert-space, def-bounded-linear-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation: mathematical-premise
  thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness: mathematical-premise
  thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-plancherel: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional two-fermion exchange computation of the declared N=2 bounded or Coulomb model: for a declared pair of orthonormal spatial orbitals and the two declared antisymmetric sector preparations obtained by combining them with the spin singlet and triplet, the mean pair energies are the sum of the one-body means plus the direct integral and minus or plus the exchange integral, and for a repulsive Coulomb pair interaction the spatially antisymmetric (spin-triplet) preparation has the lower mean energy. The comparison is a statement about the declared model's means; it derives no spin-statistics assignment, reports no measured level splitting and makes no claim about a real atom."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 10.1-10.2 printed pages 229-235 (PDF pages 237-243): the symmetric and antisymmetric electron-pair spatial functions, the direct and exchange integrals D and E of the pair interaction, the singlet-triplet ordering and the perturbative helium estimates"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 6 'Multi-Particle Systems', Sections 6.4-6.5 printed pages 88-92 (PDF pages 87-91): two-particle systems with the centre-of-mass and reduced-mass separation, the symmetry requirement on identical-particle wavefunctions and the overlap-dependent exchange correction to the pair probability"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1
([[post-nrqm-framework-state-and-composition]]), the observable and
probability postulate P2 ([[post-nrqm-framework-observable-and-probability]]),
the non-relativistic kinematics postulate P5
([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]) and
the identical-particle and spin postulate P6
([[post-nrqm-framework-identical-particles-and-spin]]) in the readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[pthm-nrqm-observables-preparation-moments]], and assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Take a declared spin-$\tfrac12$ fermionic species
with mass $m>0$, the spatial realization of the declared fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]] with $N=2$, a
bounded real external potential $V_{\mathrm{ext}}$ and one of the following
two pair interactions: (bounded case) a bounded real even
$W:\mathbb R^3\to\mathbb R$; (Coulomb case) $W(z)=\kappa/|z|$ with
$\kappa>0$ and $V_{\mathrm{ext}}$ bounded. Let $u,v\in W^{2,2}(\mathbb R^3;\mathbb C)$
be pairwise orthonormal spatial orbitals, put
$$\varepsilon_u:=\langle u,h_1u\rangle_\star,\qquad \varepsilon_v:=\langle v,h_1v\rangle_\star$$
with $h_1$ the declared one-particle operator and $\langle\cdot,\cdot\rangle_\star$
the $L^2(\mathbb R^3)$ pairing, and let $D$ and $X$ be the direct and
exchange integrals
$$D=\int_{\mathbb R^6}|u(x)|^2|v(y)|^2W(x-y)\,dx\,dy,\qquad X=\int_{\mathbb R^6}\overline{u(x)}v(x)u(y)\overline{v(y)}\,W(x-y)\,dx\,dy$$
of [[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]]
clause (c). Let $\chi_-$ be the spin singlet, $\chi_+$ the symmetric
$S_z=0$ triplet vector of the spin-$\tfrac12$ factor, and let
$$\Phi_-:=(\varphi_-\otimes\chi_+),\qquad \varphi_-:=(u\otimes v-v\otimes u)/\sqrt2,$$
$$\Phi_+:=(\varphi_+\otimes\chi_-),\qquad \varphi_+:=(u\otimes v+v\otimes u)/\sqrt2,$$
be the two declared antisymmetric sector vectors, with $\rho_\pm:=T_{\Phi_\pm,\Phi_\pm}$
the corresponding declared sector preparations. Then:

(a) *declared preparations*: $\Phi_\pm$ are unit vectors of the antisymmetric
sector $\mathfrak H_2^-$ of the model, and $\rho_\pm$ are declared sector
preparations;

(b) *mean energies*: the means of the declared energy observable in the two
preparations exist, are finite and equal
$$m_{\rho_+}(H_2^-)=\varepsilon_u+\varepsilon_v+D+X,\qquad m_{\rho_-}(H_2^-)=\varepsilon_u+\varepsilon_v+D-X;$$
in particular the **exchange splitting** of the two preparations is
$m_{\rho_+}-m_{\rho_-}=2X$;

(c) *repulsive-Coulomb ordering*: in the Coulomb case with $u,v\in W^{1,2}(\mathbb R^3;\mathbb C)$
one has $X\ge0$ and therefore $m_{\rho_-}(H_2^-)\le m_{\rho_+}(H_2^-)$: the
spatially antisymmetric, spin-triplet preparation has the lower mean pair
energy of the two;

(d) *scope*: clauses (a)-(c) are conditional consequences of the declared
model, the declared orbitals and the adopted spin-statistics sector of P6;
they derive no spin-statistics theorem, assert no measured energy difference,
compare no experimental spectrum, and make no claim that the declared
orbitals approximate any atomic state.

## Facts & Assumptions

**Given:** the declared spin-1/2 fermionic species, $N=2$, the external and pair data of the statement, the orthonormal orbitals $u,v\in W^{2,2}$, the spin vectors $\chi_\pm$ and the vectors $\Phi_\pm$.

[F1] **Tensor square and sectors.** The completed tensor square $K\widehat\otimes K$ of the spin-spatial one-particle space $K=L^2(\mathbb R^3;\mathbb C^2)$ has the pairing of [[lem-nrqm-composites-hilbert-tensor-construction]] clause (b), $\|x\otimes y\|=\|x\|\|y\|$; the exchange unitary $U_{(12)}$ and the projections $P_\pm^{(2)}$ satisfy $P_+^{(2)}=\frac12(I+U_{(12)})$, $P_-^{(2)}=\frac12(I-U_{(12)})$, and $U_{(12)}(x\otimes y)=y\otimes x$ ([[lem-nrqm-composites-permutation-sector-projections]] clauses (a), (b)).

[F2] **Euclidean product unitary.** The map $u\otimes v\mapsto u(x)v(y)$ extends to a surjective linear isometry $\Theta:L^2(\mathbb R^3)\widehat\otimes L^2(\mathbb R^3)\to L^2(\mathbb R^6)$ ([[lem-nrqm-composites-euclidean-l2-product-unitary]]).

[F3] **Slot operators and the pair interaction.** For bounded $S,T\in\mathcal B(L^2(\mathbb R^3))$ the operators $S\otimes I$ and $I\otimes T$ are bounded with the elementary-tensor action of [[lem-nrqm-composites-bounded-tensor-maps]] clause (a); the pair multiplier $M_W$ of the math supplier acts on the spatial factors and as the identity on spin, and for orthonormal spatial $u,v$ the spatial expectations of $M_W$ in $\varphi_\pm$ are $D\pm X$ with $D,X$ as displayed ([[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] clause (c)); in the Coulomb case $D,X$ are finite, $D\ge0$, $X\ge0$, and the vectors lie in $D(M_W)$ ([[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] clause (d)).

[F4] **Sector self-adjointness and domain.** In the bounded case the operator $H_{\mathrm{lab}}=K+M_W$ on $L^2(\mathbb R^6;\mathbb C^4)$ is self-adjoint with domain $W^{2,2}(\mathbb R^6;\mathbb C^4)$ ([[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]] clauses (b), (c)); in the Coulomb case with bounded $V_{\mathrm{ext}}$ it is self-adjoint with the same domain ([[thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]] clauses (b), (c)); the transported antisymmetric projection reduces it, and the restriction $H_2^-$ is self-adjoint on the sector ([[thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]] clause (e)).

[F5] **Sobolev tensor bound.** If $u,v\in W^{2,2}(\mathbb R^3;\mathbb C)$ then $u\otimes v\in W^{2,2}(\mathbb R^6;\mathbb C)$: with the $L^1$ Fourier transform and Plancherel ([[thm-plancherel]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[def-sobolev-space-wkp-and-its-norm]]), $(1+|\xi|^2+|\eta|^2)\le(1+|\xi|^2)+(1+|\eta|^2)$ and Fubini give $\|u\otimes v\|_{W^{2,2}}\le2\|u\|_{W^{2,2}}\|v\|_{L^2}+2\|u\|_{L^2}\|v\|_{W^{2,2}}$.

[F6] **Moments.** For a unit vector $\psi$ in the domain of a self-adjoint $A$, the mean of the outcome law in the pure preparation of $\psi$ equals $\langle A\psi,\psi\rangle$ ([[pthm-nrqm-observables-preparation-moments]] clause (a), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (e)).

## Proof

**Proof technique:** direct; exhibit the two sector vectors, split the energy expectation into its one-body and pair parts using spin independence, and insert the supplied direct and exchange integrals.

**Given:** the data of the statement and [F1]-[F6].

1.1 [The declared preparations are unit sector vectors] The spin vectors $\chi_\pm$ are unit vectors of $\mathbb C^2\otimes\mathbb C^2$ with $U_{(12)}\chi_+=\chi_+$ and $U_{(12)}\chi_-=-\chi_-$, and $\varphi_\pm\in L^2(\mathbb R^3)\widehat\otimes L^2(\mathbb R^3)$ are unit vectors with $U_{(12)}\varphi_+=\varphi_+$, $U_{(12)}\varphi_-=-\varphi_-$ by [F1] and the symmetry relations $u\otimes v\pm v\otimes u$; hence $U_{(12)}(\varphi_\pm\otimes\chi_\mp)=-(\varphi_\pm\otimes\chi_\mp)$, so $\Phi_\pm$ lie in the antisymmetric sector and are unit vectors by [F1], [F2]. This proves (a). [F1, F2, algebra]

1.2 [Domain membership and the one-body expectation] Both $u$ and $v$ lie in $W^{2,2}(\mathbb R^3;\mathbb C)$, so $u\otimes v$ and $v\otimes u$ lie in $W^{2,2}(\mathbb R^6;\mathbb C)$ by [F5]; tensoring with the smooth spin vectors and transporting by $\Theta$ and the spin identification places $\Phi_\pm$ in the domain $W^{2,2}(\mathbb R^6;\mathbb C^4)$ of $H_{\mathrm{lab}}$ of [F4]. The one-body operator $h_1+h_2$ with the declared $h$ acts as the identity on the spin factor, so by [F1] the pairing of $h_1+h_2$ with $\varphi_\pm\otimes\chi_\mp$ equals the spatial pairing with $\varphi_\pm$; expanding the two terms of $\varphi_\pm$ and using orthonormality gives $\langle(h_1+h_2)\varphi_\pm,\varphi_\pm\rangle=\varepsilon_u+\varepsilon_v$ for both signs. [F1, F3, F4, F5, algebra]

2.1 [The pair expectation and the mean energies] The pair multiplier $M_W$ is the identity on spin and symmetric in the two spatial slots, so its pairing with $\Phi_\pm$ equals its spatial pairing with $\varphi_\pm$, which is $D\pm X$ by [F3]; combined with [F1] and step 1.2 the mean energies are $m_{\rho_\pm}(H_2^-)=\varepsilon_u+\varepsilon_v+D\pm X$, the means being finite and given by [F6] because $\Phi_\pm$ lie in the domain of $H_2^-$ by step 1.2 and [F4]. This proves (b). [F1, F3, F4, F6, step 1.2, algebra]

3.1 [The repulsive ordering] In the Coulomb case $u,v\in W^{1,2}$ and [F3] clause (d) gives $D\ge0$ and $X\ge0$; therefore $m_{\rho_+}-m_{\rho_-}=2X\ge0$ by step 2.1, so the spatially antisymmetric spin-triplet preparation has the lower mean pair energy. This proves (c). [F3, step 2.1, algebra]

4.1 [Conclusion and scope] Step 1.1 proves (a), step 2.1 proves (b) and step 3.1 proves (c). Every quantity is a mean in the declared model and the declared orbitals; the spin-statistics association is the adopted sector of P6 and no measured or atomic energy entered, which is (d). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **What the exchange term is.** $X$ is the integral of the overlap density $\overline uv$ against its translate; it is not an interaction between distinguishable particles, and its sign in the repulsive-Coulomb case is the content of clause (c). The theorem compares two declared preparations of the same model; it does not claim that a many-electron ground state is either of them.
- **Bounded versus Coulomb.** The bounded case relies on the elementary expectation identity of the math supplier and requires only $u,v\in W^{2,2}$; the Coulomb case additionally uses the Hardy-type bound of that supplier to make $D$ and $X$ finite and to obtain $X\ge0$.
