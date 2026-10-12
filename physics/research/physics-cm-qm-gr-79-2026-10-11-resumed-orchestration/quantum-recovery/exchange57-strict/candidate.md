---
id: ex-nrqm-identical-particles-exchange-versus-coulomb-terms
aliases: [nrqm-identical-particles-exchange-versus-coulomb-terms]
kind: example
domain: physics
title: "Exchange versus direct Coulomb terms: the pair-energy split of the two-orbital spin-half model"
status: draft
origin: pipeline
dependency_level: 13
deps: [lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-coulomb-three-dimensional-hardy-bound, cor-cauchy-schwarz-inequality-for-l-two, thm-gaussian-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-complex-translation-and-approximate-identity-interfaces, texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry, def-nrqm-identical-particles-framework-species-sectors-and-preparations, thm-nrqm-identical-particles-two-factor-symmetry-decomposition, lem-nrqm-identical-particles-two-particle-exchange-operator, thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-nrqm-composites-hilbert-tensor-construction, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-state-geometry-framework-state-space, def-hilbert-space, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
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
physical_scope: "A conditional computation in the declared two-orbital model of two spin-half fermions with a declared Coulomb-form pair interaction: the spatial pair expectations D+X and D-X of the singlet and parallel-spin triplet preparations and the strict positivity of the exchange integral X for nonzero orbital products. The example asserts no atomic physics, no measured energy, no apparatus and no empirical result; the two orbitals and the interaction form are declared idealizations of the model."
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
[[def-l-p-space-as-a-quotient-by-null-functions]]), with $uv\ne0$ in $L^{1}$; the internal factor is $V=\mathbb C^{2}$ with basis
$(e_{+},e_{-})$; the one-particle space is $K\widehat\otimes V$ and $n=2$
particles are declared in the antisymmetric sector
$\mathfrak H_2^-=\operatorname{ran}P_-^{(K\otimes V)}$
([[texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry]]);

(b) write $E:=K\widehat\otimes K$ and let $J:E\to L^2(\mathbb R^6)$ be the restriction of the Euclidean product unitary $\Theta_6$ ([[lem-nrqm-composites-euclidean-l2-product-unitary]]), so $J(a\otimes b)(x,y)=a(x)b(y)$. The declared pair interaction is the compression of the Coulomb form to $E$: with $W(x-y)=\kappa/|x-y|$, $\kappa>0$, set
$$q(z,z'):=\int_{\mathbb R^6}W(x-y)(Jz)(x,y)\overline{(Jz')(x,y)}\,dx\,dy.$$
All $Jz$ lie in $D(M_W)$, as verified below. For the orthonormal basis $(b_1,b_2,b_3,b_4):=(u\otimes u,u\otimes v,v\otimes u,v\otimes v)$ of $E$, define
$$Az:=\sum_{j=1}^4q(z,b_j)b_j.$$
Thus $\langle Az,z'\rangle=q(z,z')$; $A$ is a bounded self-adjoint operator on $E$ with real matrix entries in this basis. It commutes with spatial exchange. The model's sector interaction is the restriction to $\mathfrak H_2^-$ of $\Theta^{-1}(A\otimes I_{V\otimes V})\Theta$, with $\Theta$ the finite-dimensional regrouping unitary of the symmetry-decomposition theorem. This restriction is well defined because the conjugated operator commutes with total exchange. On a factored preparation with unit $\chi$ its expectation is $q(\varphi,\varphi)=\langle M_WJ\varphi,J\varphi\rangle$;

(c) the declared pair preparations are the images under the inverse regrouping
map of the symmetry-decomposition theorem
([[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]]) of the
factored vectors
$$\Psi_{T}:=\Theta^{-1}\bigl(\varphi_-\otimes(e_+\otimes e_+)\bigr),\qquad \Psi_{S}:=\Theta^{-1}\bigl(\varphi_+\otimes\sigma_-\bigr),\qquad \varphi_\pm:=\frac{u\otimes v\pm v\otimes u}{\sqrt2},\quad \sigma_-:=\frac{e_+\otimes e_--e_-\otimes e_+}{\sqrt2},$$
which are unit vectors of $\mathfrak H_2^-$ by the cited thought experiment.
$\Psi_{T}$ is the parallel-spin (spin-triplet) preparation and $\Psi_{S}$ the
spin-singlet preparation of the declared two-orbital model.

The example computes the declared pair-interaction expectations
$q(\varphi_\pm,\varphi_\pm)$ of the two preparations and shows
that the exchange integral $X$ separates them strictly.

## Verification

**Given:** The declared two-orbital model of the Example: real normalized orthogonal orbitals $u,v\in W^{1,2}\cap L^{2}$, the compressed interaction $A$ defined from $M_W$ with $W=\kappa/|\cdot|$, and the preparations $\Psi_{T},\Psi_{S}$.

[L1] **Sector data.** $\varphi_+$ and $\varphi_-$ are the unit spatial pair vectors of the declared orbitals, and $\Theta^{-1}(\varphi_-\otimes(e_+\otimes e_+))$ and $\Theta^{-1}(\varphi_+\otimes\sigma_-)$ are unit vectors of the antisymmetric two-particle sector, the first a spin-triplet and the second a spin-singlet preparation ([[texp-nrqm-identical-particles-two-fermion-spatial-spin-symmetry]] clauses (a),(c),(d), [[thm-nrqm-identical-particles-two-factor-symmetry-decomposition]] clauses (b),(d)).

[L2] **Slater direct and exchange calculation.** For normalized orthogonal $u,v\in W^{1,2}(\mathbb R^{3})$ and $W=\kappa/|\cdot|$ with $\kappa>0$, the vectors $\Theta_{6}\varphi_\pm$ lie in $D(M_W)$ and with $D:=\int_{\mathbb R^{6}}|u(x)|^{2}|v(y)|^{2}W(x-y)\,dx\,dy$, $X:=\int_{\mathbb R^{6}}\overline{u(x)}v(x)u(y)\overline{v(y)}W(x-y)\,dx\,dy$ one has $D,X\in\mathbb R$, $0\le D<+\infty$, $X\ge0$ and $\langle M_W\Theta_6\varphi_\pm,\Theta_6\varphi_\pm\rangle=D\pm X$, where $\Theta_6$ is the Euclidean product identification of the spatial tensor square with $L^{2}(\mathbb R^{6})$ ([[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] clauses (c),(d)).

[L3] **Orthonormality of the spatial combinations.** For orthonormal $u,v$ in a Hilbert space, the vectors $u\otimes v\pm v\otimes u$ over $\sqrt2$ are orthonormal, and $\sigma_-$ is a unit vector ([[lem-nrqm-identical-particles-two-particle-exchange-operator]] clause (c), [[lem-nrqm-composites-hilbert-tensor-construction]] clause (c)).

[L4] **Gaussian-square representation and approximate identity.** The proof of [[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]], step 2.1, gives for $f=uv\in L^1$ and every $s>0$
$$I_s:=\iint f(x)f(y)e^{-s|x-y|^2}\,dx\,dy=(4s/\pi)^{3/2}\|G_{2s}*f\|_2^2\ge0,\qquad X=\kappa\pi^{-1/2}\int_0^\infty s^{-1/2}I_s\,ds,$$
where $G_{2s}(x)=e^{-2s|x|^2}$. In particular the convolution lies in $L^2$ even though no $L^2$ hypothesis on $f$ is used: completing the square makes the absolute triple integral at most $(\pi/(4s))^{3/2}\|f\|_1^2$, and Fubini gives the displayed norm identity ([[thm-gaussian-integral]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]). For a nonnegative integrable function, zero integral implies vanishing a.e. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]). Normalized dilates of an integrable mass-one kernel converge by convolution to $f$ in $L^1$ ([[lem-complex-translation-and-approximate-identity-interfaces]], Statement and proof steps 1.3, 3.2, 4.1).

[L5] **Compression and tensor expectation.** Translated Hardy gives $\iint|a(x)b(y)|^2/|x-y|^2\,dx\,dy\le4\|a\|_2^2\|\nabla b\|_2^2$ for $a,b\in K$ ([[lem-nrqm-coulomb-three-dimensional-hardy-bound]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); hence $J(E)\subset D(M_W)$. Cauchy-Schwarz makes $q(z,z')=\langle M_WJz,Jz'\rangle$ finite ([[cor-cauchy-schwarz-inequality-for-l-two]]). The displayed finite matrix defines $A$ on all of $E$; reality of $W$ gives $q(z,z')=\overline{q(z',z)}$, so $A=A^*$, and real orbitals give real entries. Swapping $x,y$ gives $q(\tau_Kz,\tau_Kz')=q(z,z')$, since $W(x-y)=W(y-x)$; thus $A$ commutes with $\tau_K$. The regrouping identity in [L1] now shows that $\Theta^{-1}(A\otimes I)\Theta$ commutes with total exchange and preserves the antisymmetric sector. The bounded tensor construction and its inner-product formula give $\langle(A\otimes I)(\varphi\otimes\chi),\varphi\otimes\chi\rangle=\langle A\varphi,\varphi\rangle\|\chi\|^2=q(\varphi,\varphi)$ for unit $\chi$ ([[lem-nrqm-composites-bounded-tensor-maps]], [[lem-nrqm-composites-hilbert-tensor-construction]]).

**Proof technique:** direct; normalise the two declared preparations, evaluate the model's interaction expectation through the direct-and-exchange calculation, and prove strict positivity using the Gaussian-square representation and convergence of normalized Gaussian convolutions in $L^1$.

**Given:** The data of the Example and [L1]-[L5].

1.1 [The two preparations are unit vectors] By [L3] the vectors $\varphi_+$ and $\varphi_-$ are orthonormal, and $e_+\otimes e_+$ and $\sigma_-$ are unit vectors of $V\otimes V$; since $\Theta$ is unitary, the vectors $\Psi_{T}=\Theta^{-1}(\varphi_-\otimes(e_+\otimes e_+))$ and $\Psi_{S}=\Theta^{-1}(\varphi_+\otimes\sigma_-)$ are unit vectors of the sector, which is [L1] read in coordinates. [L1, L3, algebra]

1.2 [Strict positivity of the exchange integral] Since the real orbitals belong to $L^2$, Cauchy-Schwarz gives $f:=uv\in L^1$, and $f\ne0$ by hypothesis. If $X=0$, [L4] and the zero-integral criterion imply $I_s=0$ for a.e. $s>0$, because the weight $s^{-1/2}$ is strictly positive. Using the already assumed Countable Choice, choose $s_n\in(n,n+1)$ outside the null exceptional set for each integer $n\ge1$; then $s_n\to\infty$ and the Gaussian-square identity gives $G_{2s_n}*f=0$ in $L^2$, hence a.e. Put $H_s(x):=(2s/\pi)^{3/2}e^{-2s|x|^2}$, a mass-one Gaussian by the Gaussian integral. With $K_0(x):=\pi^{-3/2}e^{-|x|^2}$ and $\varepsilon_s=(2s)^{-1/2}$, one has $H_s(x)=\varepsilon_s^{-3}K_0(x/\varepsilon_s)$; [L4] therefore gives $H_{s_n}*f\to f$ in $L^1$. These convolutions are zero a.e., so $\|f\|_1=0$, a contradiction. Thus $X>0$ and $D-X<D+X$. This uses only $f\in L^1$; the $L^2$ functions are the Gaussian convolutions. [L2, L4, given, choose, algebra]

2.1 [Interaction expectations] By [L5] the declared interaction expectation of a factored preparation $\varphi\otimes\chi$ with unit $\chi$ is $q(\varphi,\varphi)=\langle M_WJ\varphi,J\varphi\rangle$. On the spatial pair vectors $J\varphi_\pm=\Theta_6\varphi_\pm$, so [L2] gives $q(\varphi_+,\varphi_+)=D+X$ and $q(\varphi_-,\varphi_-)=D-X$. Hence the singlet preparation $\Psi_S$ has expectation $D+X$ and the parallel-spin triplet preparation $\Psi_T$ has expectation $D-X$. [L2, L5, step 1.1, algebra]

3.1 [Comparison and reading] By steps 2.1 and 1.2 the declared parallel-spin (triplet) preparation has strictly smaller pair-interaction expectation than the singlet preparation in the declared model, the difference being $2X>0$; the terms $D$ and $X$ are the direct and exchange contributions of the calculation [L2], and the pairing of spatial antisymmetry with the triplet is the reading of [L1]. This is the announced computation; no claim about an actual atomic system, no measured energy and no apparatus statement is made. [L1, L2, step 1.2, step 2.1, algebra] ∎

## Remarks

- **What "exchange" names.** In this model the name refers to the difference
  $2X$ between the two pair expectations, a property of the declared
  orbitals and interaction; the calculation does not attribute a mechanical
  force to it and does not by itself identify the energy of any atom.
- **Nonzero orbital overlap.** Orthogonality of the real orbitals gives $\int uv=0$; a nonzero product consequently changes sign on sets of positive measure. The Gaussian-square argument proves $X>0$ for every nonzero product, without a sign assumption. If $uv=0$ a.e., then $X=0$ and the pair expectations coincide.
- **Finite orbital model.** The interaction is the compression of the Coulomb form to $K\widehat\otimes K$. The full multiplier need not preserve this finite spatial subspace. The separate maps $\Theta$ and $\Theta_6$ respectively regroup orbital and spin factors and identify spatial tensors with Euclidean wavefunctions.
