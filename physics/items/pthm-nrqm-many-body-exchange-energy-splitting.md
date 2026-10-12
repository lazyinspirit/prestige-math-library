---
id: pthm-nrqm-many-body-exchange-energy-splitting
aliases: [ nrqm-many-body-exchange-energy-splitting ]
kind: physics-theorem
domain: physics
title: "Direct and exchange contributions to a two-fermion mean energy and the
  repulsive-Coulomb ordering"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    def-nrqm-many-body-framework-declared-fixed-n-model,
    def-nrqm-identical-particles-framework-species-sectors-and-preparations,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-observables-preparation-moments,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-permutation-sector-projections,
    lem-nrqm-composites-euclidean-l2-product-unitary,
    thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation,
    thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness,
    thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
    thm-plancherel,
    def-sobolev-space-wkp-and-its-norm,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-countable-choice,
    def-axiom-of-choice,
    lem-nrqm-many-body-finite-spin-product-identification,
    lem-nrqm-many-body-cc-bounded-spatial-realization,
    thm-kato-rellich,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  ]
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
  thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  thm-plancherel: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-nrqm-many-body-finite-spin-product-identification: mathematical-premise
  lem-nrqm-many-body-cc-bounded-spatial-realization: mathematical-premise
  thm-kato-rellich: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional two-fermion exchange computation of the
  declared N=2 bounded or Coulomb model: for a declared pair of orthonormal
  spatial orbitals and the two declared antisymmetric sector preparations
  obtained by combining them with the spin singlet and triplet, the mean pair
  energies are the sum of the one-body means plus the direct integral and minus
  or plus the exchange integral, and for a repulsive Coulomb pair interaction
  the spatially antisymmetric (spin-triplet) preparation has the lower mean
  energy. The comparison is a statement about the declared model's means; it
  derives no spin-statistics assignment, reports no measured level splitting and
  makes no claim about a real atom."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        10.1-10.2 printed pages 229-235 (PDF pages 237-243): the symmetric and
        antisymmetric electron-pair spatial functions, the direct and exchange
        integrals D and E of the pair interaction, the singlet-triplet ordering
        and the perturbative helium estimates"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Chapter 6 'Multi-Particle Systems', Sections
        6.4-6.5 printed pages 88-92 (PDF pages 87-91): two-particle systems with
        the centre-of-mass and reduced-mass separation, the symmetry requirement
        on identical-particle wavefunctions and the overlap-dependent exchange
        correction to the pair probability"
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
$$\varepsilon_u:=\langle h u,u\rangle_\star,\qquad \varepsilon_v:=\langle h v,v\rangle_\star$$
with $h=-\hbar^2\Delta/(2m)+V_{\mathrm{ext}}$ the declared one-particle operator and $\langle\cdot,\cdot\rangle_\star$
the $L^2(\mathbb R^3)$ pairing, and let $D$ and $X$ be the direct and
exchange integrals
$$D=\int_{\mathbb R^6}|u(x)|^2|v(y)|^2W(x-y)\,dx\,dy,\qquad X=\int_{\mathbb R^6}\overline{u(x)}v(x)u(y)\overline{v(y)}\,W(x-y)\,dx\,dy$$
of [[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]]
clauses (c),(d), as appropriate. Fix the standard orthonormal basis $e_\uparrow,e_\downarrow$ of the declared spin-$\tfrac12$ factor $\mathbb C^2$, and define the unit spin vectors
$$\chi_-=(e_\uparrow\otimes e_\downarrow-e_\downarrow\otimes e_\uparrow)/\sqrt2,\qquad \chi_+=(e_\uparrow\otimes e_\downarrow+e_\downarrow\otimes e_\uparrow)/\sqrt2,$$
read as the singlet and symmetric $S_z=0$ triplet of the declared basis. Let $\Theta_{\mathrm{sp}}$ be the scalar Euclidean product unitary and let
$$\Theta_2:(L^2(\mathbb R^3;\mathbb C^2))^{\otimes2}\longrightarrow L^2(\mathbb R^6;\mathbb C^2\otimes\mathbb C^2)$$
be the full spin-product unitary of [[lem-nrqm-many-body-finite-spin-product-identification]] clause (a). Put
$$\varphi_\pm=(u\otimes v\pm v\otimes u)/\sqrt2,\qquad f_\pm=\Theta_{\mathrm{sp}}\varphi_\pm,\qquad \Phi_\pm=\Theta_2^{-1}(f_\pm\chi_\mp),\qquad \rho_\pm=T_{\Phi_\pm,\Phi_\pm}.$$
Thus $\Phi_\pm$ are vectors in the declared one-particle tensor square, not untransported vectors in a regrouped spatial/spin product. They define the two declared preparations after the sector membership proved below. No reality assumption is imposed on the complex orbitals $u,v$.

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

[F1] **Full spin-product transport.** The unitary $\Theta_2$ maps $(f e_a)\otimes(g e_b)$ to $(x,y)\mapsto f(x)g(y)(e_a\otimes e_b)$. The transported exchange acts as $(\mathcal U\Psi)(x,y)=R\Psi(y,x)$, where $R(\zeta\otimes\eta)=\eta\otimes\zeta$ swaps the two spin factors; its antisymmetric projection is $\mathcal P_-=(I-\mathcal U)/2=\Theta_2P_-^{(2)}\Theta_2^{-1}$. Finite spin components preserve the $H^2$ domain, and a permutation-invariant scalar self-adjoint operator with that domain restricts self-adjointly to this combined sector ([[lem-nrqm-many-body-finite-spin-product-identification]] clauses (a)–(c)). Tensor pairings and norms are those of [[lem-nrqm-composites-hilbert-tensor-construction]], and the tensor exchange is that of [[lem-nrqm-composites-permutation-sector-projections]].

[F2] **Scalar spatial products.** The scalar product unitary $\Theta_{\mathrm{sp}}$ has $\Theta_{\mathrm{sp}}(u\otimes v)(x,y)=u(x)v(y)$ ([[lem-nrqm-composites-euclidean-l2-product-unitary]]). Fubini applies to integrable products and the finite component pairings ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F3] **Direct and exchange integrals, including complex orbitals.** For a real bounded even $W$, the displayed $D,X$ converge absolutely, are real and satisfy $\langle M_Wf_\pm,f_\pm\rangle=D\pm X$ for arbitrary complex orthonormal $u,v\in L^2$. For $W(z)=\kappa/|z|$, $\kappa>0$, the same assertion holds for arbitrary complex orthonormal $u,v\in H^1$, with $f_\pm\in D(M_W)$, $D\ge0$ and $X\ge0$. These are [[thm-nrqm-fock-and-equilibrium-slater-direct-and-exchange-calculation]] clauses (c),(d); its proof 2.1 proves Coulomb positivity with only the $L^1$ overlap density, without an unclaimed $L^2$ or real-orbital hypothesis.

[F4] **The exact labelled realization with bounded external addition.** Put $a=\hbar^2/(2m)$ and $V_b(x,y)=V_{\mathrm{ext}}(x)+V_{\mathrm{ext}}(y)$. In the bounded case the scalar labelled operator $T=-a\Delta_{(x,y)}+V_b+W(x-y)$ is self-adjoint on $H^2(\mathbb R^6;\mathbb C)$ by [[lem-nrqm-many-body-cc-bounded-spatial-realization]], with the same finite-component realization on $H^2(\mathbb R^6;\mathbb C^4)$. In the Coulomb case apply [[thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]] clauses (b),(c) with mathematical masses $\widetilde m_1=\widetilde m_2=m/(4\pi^2)$, its parameter $\hbar$ unchanged, zero external singular coefficients and pair coefficient $\kappa$. Its kinetic Fourier symbol is then $4\pi^2a(|\xi|^2+|\eta|^2)$, exactly the physical $-a\Delta_{(x,y)}$, so $T_C=-a\Delta_{(x,y)}+\kappa/|x-y|$ is self-adjoint on $H^2$. The multiplier $M_{V_b}$ is bounded self-adjoint, with norm at most $2\|V_{\mathrm{ext}}\|_\infty$ and relative bound zero with respect to $T_C$; [[thm-kato-rellich]] therefore makes $T=T_C+M_{V_b}$ self-adjoint on the same exact domain and bounded below. In either case, $T$ preserves the spatial exchange symmetry because its Laplacian and real even pair kernel and identical external slots are exchange invariant. The full labelled operator $T_4$ acts componentwise on spin and its combined antisymmetric restriction, transported by $\Theta_2^{-1}$, is the declared $H_2^-$ with exact domain $\Theta_2^{-1}(H^2\cap\operatorname{ran}\mathcal P_-)$ by [F1]. No scalar-only application of a permutation theorem is used for the spin-four space. The one-particle $h=-a\Delta+V_{\mathrm{ext}}$ is likewise self-adjoint on scalar $H^2$ by the CC bounded realization.

[F5] **Weak derivatives of spatial products.** For $u,v\in H^2(\mathbb R^3;\mathbb C)$ the product $u(x)v(y)$ has weak derivatives $D_x^\alpha D_y^\beta(u(x)v(y))=(D^\alpha u)(x)(D^\beta v)(y)$ for $|\alpha|+|\beta|\le2$, obtained by iterated weak-derivative testing and Fubini. Their squared $L^2(\mathbb R^6)$ norms are $\|D^\alpha u\|_2^2\|D^\beta v\|_2^2<\infty$, including mixed first derivatives. Thus the spatial products and $f_\pm$ lie in $H^2(\mathbb R^6)$, without claiming an exact unproved Sobolev norm constant ([[def-sobolev-space-wkp-and-its-norm]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]). On these products the unbounded differential slot action is $(-a\Delta_x-a\Delta_y+V_b)(u(x)v(y))=(hu)(x)v(y)+u(x)(hv)(y)$; every term lies in $L^2$ by its factor norms. This is an exact-domain calculation, not an application of bounded tensor-map rules to an unbounded $h$.

[F6] **Finite means of domain preparations.** For a unit vector $\psi$ in the domain of a self-adjoint assigned $A$, the absolute first spectral moment is finite and its mean is $\langle A\psi,\psi\rangle$ ([[pthm-nrqm-observables-preparation-moments]] clause (a), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (e)).

## Proof

**Proof technique:** direct; transport the spatial/spin products into the actual declared tensor square, verify their full-domain slot actions, and evaluate the real direct/exchange means.

**Given:** The data of the statement and [F1]–[F6].

1.1 [Unit preparations in the actual combined sector] Orthonormality of $u,v$ makes $u\otimes v$ and $v\otimes u$ orthogonal unit vectors, so $\varphi_\pm$ and $f_\pm$ are unit and satisfy $f_\pm(y,x)=\pm f_\pm(x,y)$. The displayed spin definitions give $\|\chi_\pm\|=1$ and $R\chi_\pm=\pm\chi_\pm$. Hence $\mathcal U(f_\pm\chi_\mp)(x,y)=R f_\pm(y,x)\chi_\mp=-f_\pm(x,y)\chi_\mp$. Their $L^2(\mathbb R^6;\mathbb C^4)$ norm is one. By [F1], $\Phi_\pm=\Theta_2^{-1}(f_\pm\chi_\mp)$ are unit vectors in the declared $\mathfrak H_2^-$, so their pure projectors define the declared preparations. This proves (a). [given, F1, F2, algebra]

2.1 [H² domain and exact one-body expectation] By [F5], each spatial product is in $H^2(\mathbb R^6)$, hence so is $f_\pm$. Multiplication by the fixed finite spin vector means a finite tuple of constant scalar multiples of $f_\pm$, so $f_\pm\chi_\mp\in H^2(\mathbb R^6;\mathbb C^4)$. Step 1.1 and [F4] then place $\Phi_\pm$ in the exact domain of $H_2^-$. Write $q(x,y)=u(x)v(y)$, $r(x,y)=v(x)u(y)$ and $L=-a\Delta_x-a\Delta_y+V_b$. By [F5], $Lq=(hu)(x)v(y)+u(x)(hv)(y)$ and $Lr=(hv)(x)u(y)+v(x)(hu)(y)$. Fubini gives $\langle Lq,q\rangle=\langle Lr,r\rangle=\varepsilon_u+\varepsilon_v$, and $\langle Lq,r\rangle=\langle hu,v\rangle\langle v,u\rangle+\langle u,v\rangle\langle hv,u\rangle=0$; the reversed cross pairing vanishes in the same way. Thus $\langle Lf_\pm,f_\pm\rangle=\varepsilon_u+\varepsilon_v$. Spin independence and $\|\chi_\mp\|=1$ give the same pairing in the full spin representation. The unbounded slot terms all had their stated domain inputs. [step 1.1, F1, F2, F4, F5, algebra]

3.1 [Pair expectation and reality] In the bounded case, absolute values of $D$ and $X$ are bounded by $\|W\|_\infty\|u\|_2^2\|v\|_2^2$; the crossed term uses $\int|uv|\le\|u\|_2\|v\|_2$. In the Coulomb case $H^2\subset H^1$, so [F3] gives absolute convergence and $f_\pm\in D(M_W)$. For either real even kernel, exchanging $x,y$ in the absolutely convergent $X$ integral gives $X=\overline X$; the two direct diagonal terms are equal to $D$. Expanding $|f_\pm|^2$ therefore gives $\langle M_Wf_\pm,f_\pm\rangle=D\pm X$, as in [F3]. The full spin-independent pair multiplier has exactly this expectation in $f_\pm\chi_\mp$. No orbitals were required to be real. [step 2.1, F1, F2, F3, algebra]

4.1 [Finite energy means and splitting] By step 2.1 the vectors lie in the self-adjoint sector energy domain of [F4], so [F6] guarantees finite energy means. The unitary $\Theta_2$ preserves the energy pairings. Combining the one-body result of step 2.1 and pair result of step 3.1 gives $m_{\rho_\pm}(H_2^-)=\varepsilon_u+\varepsilon_v+D\pm X$. Subtracting proves $m_{\rho_+}-m_{\rho_-}=2X$. This proves (b) on the full stated bounded or Coulomb model, including the original bounded external potential. [step 2.1, step 3.1, F1, F4, F6, algebra]

5.1 [Repulsive ordering and scope] In the repulsive Coulomb case [F3] gives $X\ge0$ under the original complex $H^1$ hypothesis, which is already satisfied by the stated $H^2$ orbitals. Step 4.1 therefore gives $m_{\rho_-}(H_2^-)\le m_{\rho_+}(H_2^-)$, proving (c). The $H^1$ interaction inequality does not alone assert an energy mean for vectors outside the energy domain. Step 1.1 supplies the actual adopted fermion sector, and every energy compared in step 4.1 is a finite mean of the declared preparation; no atomic-state approximation, measured splitting or derived spin-statistics rule was used. This proves (d) and completes the statement. [step 1.1, step 4.1, F3, F4, F6, algebra] ∎

## Remarks

- **What the exchange term is.** $X$ is the integral of the overlap density $\overline uv$ against its translate; it is not an interaction between distinguishable particles, and its sign in the repulsive-Coulomb case is the content of clause (c). The theorem compares two declared preparations of the same model; it does not claim that a many-electron ground state is either of them.
- **Bounded versus Coulomb.** The bounded case relies on the elementary expectation identity of the math supplier and requires only $u,v\in W^{2,2}$; the Coulomb case additionally uses the Hardy-type bound of that supplier to make $D$ and $X$ finite and to obtain $X\ge0$.
