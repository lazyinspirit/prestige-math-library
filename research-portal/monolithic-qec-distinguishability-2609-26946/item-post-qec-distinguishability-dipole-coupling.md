---
title: Dimensionless dipole and ULE coupling identification
status: draft
research_item: post-qec-distinguishability-dipole-coupling
dependency_level: 6
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 11, section S3, equations (S3.2)–(S3.3) and the two subsequent
        operator-identification bullets
      statement: The article writes the dipole as a constant times a dimensionless
        rank-one vector operator, gives the mode-expanded dipole interaction,
        and identifies the three system and bath operators for the ULE.
      hypotheses: The article's electric-dipole and box-normalized photon model, with
        its stated coupling convention.
      reading_limits: The supplied extracted text and PDF page 11 at the cited
        location were read. This citation attributes the article's model; it
        does not establish the Fock-space domain contract, an observation, a
        regulator-free field, or the validity of a ULE approximation.
---

PDF p. 11: ` Eq. (S3.3) and final bullets `

## Prerequisites

- [post-qec-distinguishability-photon-field](item-post-qec-distinguishability-photon-field)
- [post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-qft-fock-and-test-spaces](https://alphabetamath.cc/item/def-qft-fock-and-test-spaces)
- [math:lem-qft-fock-ccr-car](https://alphabetamath.cc/item/lem-qft-fock-ccr-car)
- [math:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/item/lem-nrqm-composites-hilbert-tensor-construction)
- [math:def-unbounded-linear-operator-domain-and-graph](https://alphabetamath.cc/item/def-unbounded-linear-operator-domain-and-graph)
- [math:def-adjoint-of-a-densely-defined-unbounded-operator](https://alphabetamath.cc/item/def-adjoint-of-a-densely-defined-unbounded-operator)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)


## Postulate

Work in units with $\hbar=1$ and use the finite-mode photon field at the fixed emitter position. Take real transverse polarization vectors $\boldsymbol\epsilon_\lambda(\mathbf k)$ and a nonzero real dipole scale $d_0$. Postulate Hermitian dimensionless system operators $X_x,X_y,X_z$ with $\mathbf d=d_0\mathbf X$. The system space is a finite direct sum of spin blocks, and the spherical components $T_0=X_z$ and $T_{\pm1}=\mp(X_x\pm iX_y)/\sqrt2$ form a rank-one spherical tensor: $[J_z,T_q]=qT_q$ and $[J_\pm,T_q]=\sqrt{(1\mp q)(2\pm q)}T_{q\pm1}$, with $T_{\pm2}=0$. These are model assumptions; they do not specify nonzero matrix elements.

For the regulated realization let $M$ be the finite nonempty set of retained mode labels $j=(\mathbf k,\lambda)$ and use the bosonic Fock space $\mathcal H_B=\mathcal F_s(\mathbb C^M)$. Use the second-variable-linear inner product convention and Fock sector maps. For the standard orthonormal mode vectors $e_j$, let $a_j=a(e_j)$ and $a_j^\dagger=a^\dagger(e_j)$ be the maximal mutually adjoint operators. Let $\mathcal D_{\rm fin}$ consist of Fock vectors with only finitely many nonzero particle-sector components. It is dense and invariant under these operators. Write $\mathcal H_S$ for the emitter space and take the total Hilbert space $\mathcal H_S\widehat\otimes\mathcal H_B$, with common dense invariant domain $\mathcal D=\mathcal H_S\otimes_{\rm alg}\mathcal D_{\rm fin}$. Each field component $E_\alpha(\mathbf r_0)$ is initially the finite field sum on $\mathcal D_{\rm fin}$; all interaction sums and tensor products below have domain exactly $\mathcal D$.

Let $\hat e_\alpha$ be the Cartesian unit vector in direction $\alpha\in\{x,y,z\}$ and put $\kappa(\omega)=d_0\mathcal E_\omega$, allowing the chosen field-normalization convention to be included in $\kappa$. The interaction is $H_{\rm int}=-\mathbf d\cdot\mathbf E(\mathbf r_0)$ and, in this real-polarization convention, $H_{\rm int}=-\sum_{(\mathbf k,\lambda)\in M,\alpha}[X_\alpha(\hat e_\alpha\cdot\boldsymbol\epsilon_\lambda(\mathbf k))\kappa(\omega_{\mathbf k})^*\otimes a_{\mathbf k\lambda}^\dagger+\mathrm{h.c.}]$. Here $-\mathbf d\cdot\mathbf E(\mathbf r_0)$ means $-d_0\sum_\alpha X_\alpha\otimes E_\alpha(\mathbf r_0)$. Here $\mathrm{h.c.}$ means the formal conjugate term $X_\alpha(\hat e_\alpha\cdot\boldsymbol\epsilon_\lambda(\mathbf k))\kappa(\omega_{\mathbf k})\otimes a_{\mathbf k\lambda}$ on $\mathcal D$. It is the restriction to $\mathcal D$ of the preceding term's Hilbert-space adjoint, rather than an assertion that the unrestricted adjoint has domain $\mathcal D$. For complex polarization vectors the creation coefficient instead contains $\boldsymbol\epsilon_\lambda(\mathbf k)^*$ and the annihilation coefficient its conjugate.

For the ULE interface choose $\gamma>0$, use the three system operators $X_\alpha$, and set $B_\alpha=-d_0E_\alpha(\mathbf r_0)/\sqrt\gamma$. Initially $B_\alpha$ has domain $\mathcal D_{\rm fin}$. Then the interaction has the interface form $\sqrt\gamma\sum_\alpha X_\alpha\otimes B_\alpha$ as an equality on $\mathcal D$. The field, bath and interaction expressions are symmetric on their respective stated domains. No equality of closed-operator realizations is asserted by this domain-level identification; a concrete Hamiltonian application must also specify appropriate self-adjoint realizations. Applying the normalized ULE contract additionally requires $\|X_\alpha\|\leq1$, a centered stationary Gaussian bath with the specified preparation, and the contract's spectral and kernel regularity and short-memory assumptions. These conditions are additional assumptions, not consequences of the operator identification.

## Postulate references

[post-qec-distinguishability-photon-field](item-post-qec-distinguishability-photon-field)

[post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[math:def-qft-fock-and-test-spaces](https://alphabetamath.cc/item/def-qft-fock-and-test-spaces)

[math:lem-qft-fock-ccr-car](https://alphabetamath.cc/item/lem-qft-fock-ccr-car)

[math:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/item/lem-nrqm-composites-hilbert-tensor-construction)

[math:def-unbounded-linear-operator-domain-and-graph](https://alphabetamath.cc/item/def-unbounded-linear-operator-domain-and-graph)

[math:def-adjoint-of-a-densely-defined-unbounded-operator](https://alphabetamath.cc/item/def-adjoint-of-a-densely-defined-unbounded-operator)

[math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)

## Facts & Assumptions

[F1] The photon-field model supplies the finite-mode expansion, its complex conjugation convention, and the electric-dipole interaction at the fixed emitter position. [post-qec-distinguishability-photon-field](item-post-qec-distinguishability-photon-field)

[F2] The ULE interface uses Hermitian coupling operators, normalized system operators, a centered stationary Gaussian bath, remote-past factorized preparation, and the stated spectral and kernel conditions. Its short-memory condition is an additional approximation assumption. [post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)

[F3] A rank-one spherical tensor on finite spin blocks is characterized by the displayed commutator and ladder relations. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F4] For a complex one-particle Hilbert space, the bosonic Fock construction supplies the sectors, finite-particle subspace and creation and annihilation sector maps. The finite-particle subspace is dense and invariant, and the maximal bosonic creation and annihilation operators are mutually adjoint under Countable Choice. [math:def-qft-fock-and-test-spaces](https://alphabetamath.cc/item/def-qft-fock-and-test-spaces) [math:lem-qft-fock-ccr-car](https://alphabetamath.cc/item/lem-qft-fock-ccr-car)

[F5] An unbounded operator includes its domain as data; its Hilbert-space adjoint has its own domain. Symmetry means equality of the two inner-product pairings on the specified dense domain, whereas self-adjointness also requires equality of adjoint domains. In the second-variable-linear convention the adjoint identity is $\langle Tu,v\rangle=\langle u,T^*v\rangle$, obtained by conjugating the suppliers' first-variable-linear identity. [math:def-unbounded-linear-operator-domain-and-graph](https://alphabetamath.cc/item/def-unbounded-linear-operator-domain-and-graph) [math:def-adjoint-of-a-densely-defined-unbounded-operator](https://alphabetamath.cc/item/def-adjoint-of-a-densely-defined-unbounded-operator) [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)

[F6] The Hilbert tensor completion has dense elementary-tensor span and product inner product. Conjugating both factor pairings gives the second-variable-linear convention with the same norm and completion. [math:lem-nrqm-composites-hilbert-tensor-construction](https://alphabetamath.cc/item/lem-nrqm-composites-hilbert-tensor-construction)

[A1] Assume the Axioms of Choice, Countable Choice and Dependent Choice as carried by the photon-field supplier; Countable Choice is also assumed for the Fourier special case in the ULE supplier. Countable Choice is used for the Fock, Hilbert tensor and adjoint constructions in [F4]–[F6]; the finite sums and tensor-factor substitutions introduce no further choice premise. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Justification

Apply [F4] to the finite-dimensional one-particle space $\mathbb C^M$. Creation raises the particle sector by one and annihilation lowers it by one, so each maps $\mathcal D_{\rm fin}$ to itself. Density of $\mathcal D$ follows from [F6] and density of $\mathcal D_{\rm fin}$: in any finite sum of elementary tensors approximate each bath factor by finite-particle truncations, using $\|s\otimes\psi\|=\|s\|\,\|\psi\|$. For a system map $X$ and a bath map $A$ on $\mathcal D_{\rm fin}$, $X\otimes A$ acts by $s\otimes\psi\mapsto Xs\otimes A\psi$ and linear extension; this is well defined by bilinearity of the algebraic tensor product. Thus all finite sums and products used here preserve the stated common domains.

The finite-mode expansion in [F1], substitution of $d_\alpha=d_0X_\alpha$, and real polarization vectors give the displayed creation coefficient. For a term $T=cX_\alpha\otimes a_j^\dagger$ and its formal conjugate $T^\sharp=\overline cX_\alpha\otimes a_j$, both restricted to $\mathcal D$, the product pairing in [F6] and mutual adjointness in [F4] give $\langle Tu,v\rangle=\langle u,T^\sharp v\rangle$ for $u,v\in\mathcal D$. By [F5], $\mathcal D\subseteq D(T^*)$ and $T^*|_{\mathcal D}=T^\sharp$. Exchanging the two terms gives symmetry of their sum on $\mathcal D$. The same pairing argument on $\mathcal D_{\rm fin}$ makes each finite field component and its real multiple $B_\alpha$ symmetric. With complex polarization vectors the conjugate in the creation term follows directly from the field expansion in [F1]. The spherical-component relations instantiate the rank-one definition in [F3].

The bath and system operators act on separate tensor factors on $\mathcal D$: both orders send $s\otimes\psi$ to $X_\alpha s\otimes E_\alpha\psi$. Substituting the stated $B_\alpha$ into the ULE coupling reproduces $-d_0\sum_\alpha X_\alpha\otimes E_\alpha$ with exactly that domain. This algebraic identification does not establish the norm bound, bath preparation, kernel conditions or short-memory regime in [F2]. Nor does symmetry alone supply a self-adjoint realization of a total Hamiltonian. In particular, a finite collection of oscillator modes is not asserted to satisfy the ULE kernel assumptions; a bath model satisfying them must be supplied separately.
