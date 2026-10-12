---
id: ex-nrqm-identical-particles-exchange-versus-coulomb-terms
aliases: [nrqm-identical-particles-exchange-versus-coulomb-terms]
kind: example
domain: physics
title: "Exchange versus direct Coulomb terms: the pair-energy split of the two-orbital spin-half model"
status: draft
origin: pipeline
dependency_level: 13
deps: [texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry, def-nrqm-identical-particles-framework-species-sectors-and-preparations, thm-nrqm-identical-particles-two-factor-symmetry-decomposition, lem-nrqm-identical-particles-two-particle-exchange-operator, thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-nrqm-composites-hilbert-tensor-construction, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-state-geometry-framework-state-space, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry: physical-result
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  thm-nrqm-identical-particles-two-factor-symmetry-decomposition: mathematical-premise
  lem-nrqm-identical-particles-two-particle-exchange-operator: mathematical-premise
  thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional computation in the declared two-orbital model of two spin-half fermions with a declared Coulomb-form pair interaction: the spatial pair expectations D+X and D-X of the singlet and parallel-spin triplet preparations and the strict positivity of the exchange integral X for sign-definite orbitals. The example asserts no atomic physics, no measured energy, no apparatus and no empirical result; the two orbitals and the interaction form are declared idealizations of the model."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 10 printed pages 227-235 (PDF pages 235-243): the symmetric and antisymmetric pair states of helium and the direct and exchange contributions to the electron-repulsion expectation"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Section 1.4.3 pp. 11-13: two-particle operators and their direct and exchange matrix elements"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: pass
---

## Example

Adopt the state and composition postulate P1 and the identical-particle and spin
postulate P6 in the readings of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
and assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Declare the following
**two-orbital spin-half model**:

(a) the species is a spin-half fermion; its orbital factor is
$K:=\operatorname{span}_{\mathbb C}\{u,v\}$ where
$u,v\in W^{1,2}(\mathbb R^{3};\mathbb C)\cap L^{2}(\mathbb R^{3};\mathbb C)$
are real-valued, normalized and orthogonal in $L^{2}(\mathbb R^{3})$
([[def-sobolev-space-wkp-and-its-norm]],
[[def-l-p-space-as-a-quotient-by-null-functions]]), with $uv\ge0$ a.e. and
$uv\ne0$ in $L^{1}$; the internal factor is $V=\mathbb C^{2}$ with basis
$(e_{+},e_{-})$; the one-particle space is $K\widehat\otimes V$ and $n=2$
particles are declared in the antisymmetric sector
$\mathfrak H_2^-=\operatorname{ran}P_-^{(K\otimes V)}$
([[texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry]]);

(b) the declared pair interaction is the Coulomb-form multiplier $M_W$ on
$L^{2}(\mathbb R^{6})$ with $W(z)=\kappa/|z|$, $\kappa>0$, in the reading of
[[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]]
clause (d): the model declares the sector interaction operator
$\Theta^{-1}(M_W\otimes I_{V\otimes V})\Theta$ with the spatial multiplier
$M_W$ of that theorem and the identity of the internal factor, so that on a
declared preparation whose image under $\Theta$ is the factored vector
$\varphi\otimes\chi$ with unit $\chi$ the interaction expectation is
$\langle(M_W\otimes I)(\varphi\otimes\chi),\varphi\otimes\chi\rangle
=\langle M_W\varphi,\varphi\rangle$;

(c) the declared pair preparations are the images under the inverse regrouping
map of the symmetry-decomposition theorem
([[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]]) of the
factored vectors
$$\Psi_{T}:=\Theta^{-1}\bigl(\varphi_-\otimes(e_+\otimes e_+)\bigr),\qquad \Psi_{S}:=\Theta^{-1}\bigl(\varphi_+\otimes\sigma_-\bigr),\qquad \varphi_\pm:=\frac{u\otimes v\pm v\otimes u}{\sqrt2},\quad \sigma_-:=\frac{e_+\otimes e_--e_-\otimes e_+}{\sqrt2},$$
which are unit vectors of $\mathfrak H_2^-$ by the cited thought experiment.
$\Psi_{T}$ is the parallel-spin (spin-triplet) preparation and $\Psi_{S}$ the
spin-singlet preparation of the declared two-orbital model.

The example computes the declared pair-interaction expectations
$\langle M_W\varphi_\pm,\varphi_\pm\rangle$ of the two preparations and shows
that the exchange integral $X$ separates them strictly.

## Verification

**Given:** The declared two-orbital model of the Example: real normalized orthogonal orbitals $u,v\in W^{1,2}\cap L^{2}$, the interaction $M_W$ with $W=\kappa/|\cdot|$, and the preparations $\Psi_{T},\Psi_{S}$.

[L1] **Sector data.** $\varphi_+$ and $\varphi_-$ are the unit spatial pair vectors of the declared orbitals, and $\Theta^{-1}(\varphi_-\otimes(e_+\otimes e_+))$ and $\Theta^{-1}(\varphi_+\otimes\sigma_-)$ are unit vectors of the antisymmetric two-particle sector, the first a spin-triplet and the second a spin-singlet preparation ([[texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry]] clauses (a),(c),(d), [[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]] clauses (b),(d)).

[L2] **Slater direct and exchange calculation.** For normalized orthogonal $u,v\in W^{1,2}(\mathbb R^{3})$ and $W=\kappa/|\cdot|$ with $\kappa>0$, the vectors $\Theta_{6}\varphi_\pm$ lie in $D(M_W)$ and with $D:=\int_{\mathbb R^{6}}|u(x)|^{2}|v(y)|^{2}W(x-y)\,dx\,dy$, $X:=\int_{\mathbb R^{6}}\overline{u(x)}v(x)u(y)\overline{v(y)}W(x-y)\,dx\,dy$ one has $D,X\in\mathbb R$, $0\le D<+\infty$, $X\ge0$ and $\langle M_W\Theta_6\varphi_\pm,\Theta_6\varphi_\pm\rangle=D\pm X$, where $\Theta_6$ is the Euclidean product identification of the spatial tensor square with $L^{2}(\mathbb R^{6})$ ([[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] clauses (c),(d)).

[L3] **Orthonormality of the spatial combinations.** For orthonormal $u,v$ in a Hilbert space, the vectors $u\otimes v\pm v\otimes u$ over $\sqrt2$ are orthonormal, and $\sigma_-$ is a unit vector ([[lem-nrqm-identical-particles-two-particle-exchange-operator]] clause (c), [[lem-nrqm-composites-hilbert-tensor-construction]] clause (c)).

[L4] **Positivity of a nonnegative integral.** If $g\ge0$ is integrable and $\int g=0$, then $g=0$ a.e.; if $g\ge0$ and $g>0$ on a set of positive measure, then $\int g>0$ ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L5] **Reading of the interaction.** For a self-adjoint spatial operator $A$ and a finite-dimensional internal factor with a unit vector $\chi$, the expectation of $A\otimes I$ in the factored vector $\varphi\otimes\chi$ with $\varphi\in D(A)$ is $\langle A\varphi,\varphi\rangle\,\|\chi\|^{2}=\langle A\varphi,\varphi\rangle$, by the inner-product formula $\langle\varphi\otimes\chi,\varphi'\otimes\chi'\rangle=\langle\varphi,\varphi'\rangle\langle\chi,\chi'\rangle$ of the tensor construction ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (b), [[def-nrqm-state-geometry-framework-state-space]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

**Proof technique:** direct; normalise the two declared preparations, evaluate the model's interaction expectation through the direct-and-exchange calculation, and prove the strict positivity of the exchange integral for sign-definite orbitals by the vanishing criterion for nonnegative integrals.

**Given:** The data of the Example and [L1]-[L5].

1.1 [The two preparations are unit vectors] By [L3] the vectors $\varphi_+$ and $\varphi_-$ are orthonormal, and $e_+\otimes e_+$ and $\sigma_-$ are unit vectors of $V\otimes V$; since $\Theta$ is unitary, the vectors $\Psi_{T}=\Theta^{-1}(\varphi_-\otimes(e_+\otimes e_+))$ and $\Psi_{S}=\Theta^{-1}(\varphi_+\otimes\sigma_-)$ are unit vectors of the sector, which is [L1] read in coordinates. [L1, L3, algebra]

1.2 [Strict positivity of the exchange integral] Because $u,v$ are real-valued, $\overline{u(x)}v(x)u(y)\overline{v(y)}=f(x)f(y)$ with $f:=uv$; by hypothesis $f\ge0$ a.e. and $f\ne0$ in $L^{1}$, so the set $F:=\{f>0\}$ has positive measure and $\{(x,y)\in F\times F:x\ne y\}$ has positive product measure because the diagonal is a null set. On that set the integrand $f(x)f(y)W(x-y)$ is strictly positive, since $W>0$ off the diagonal; the integrand is nonnegative everywhere, so if $X$ vanished then the integrand would vanish a.e. by [L4], a contradiction. Hence $X>0$, and therefore $D-X<D+X$. [L2, L4, algebra]

2.1 [Interaction expectations] By [L5] and [L2] the declared interaction expectation of a preparation of factored form $\varphi\otimes\chi$ with unit $\chi$ is $\langle M_W\varphi,\varphi\rangle$, and by the direct-and-exchange calculation $\langle M_W\varphi_+,\varphi_+\rangle=D+X$ and $\langle M_W\varphi_-,\varphi_-\rangle=D-X$; hence the singlet preparation $\Psi_{S}$ has expectation $D+X$ and the parallel-spin triplet preparation $\Psi_{T}$ has expectation $D-X$. [L2, L5, step 1.1, algebra]

3.1 [Comparison and reading] By steps 2.1 and 1.2 the declared parallel-spin (triplet) preparation has strictly smaller pair-interaction expectation than the singlet preparation in the declared model, the difference being $2X>0$; the terms $D$ and $X$ are the direct and exchange contributions of the calculation [L2], and the pairing of spatial antisymmetry with the triplet is the reading of [L1]. This is the announced computation; no claim about an actual atomic system, no measured energy and no apparatus statement is made. [L1, L2, step 1.2, step 2.1, algebra] ∎

## Remarks

- **What "exchange" names.** In this model the name refers to the difference
  $2X$ between the two pair expectations, a property of the declared
  orbitals and interaction; the calculation does not attribute a mechanical
  force to it and does not by itself identify the energy of any atom.
- **Role of the sign hypothesis.** The strict inequality $X>0$ uses
  $uv\ge0$ a.e. with $uv\not\equiv0$. For sign-changing orbital products the
  calculation of [L2] still gives $X\ge0$, but strictness is not asserted by
  this example.
