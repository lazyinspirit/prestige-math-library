---
title: Photon modes and field normalization
status: published
research_item: post-qec-distinguishability-photon-field
dependency_level: 3
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 11, section S3, Hamiltonian bullets and equation (S3.2)
      statement: The article specifies a free photon bath with frequency c times the
        magnitude of the wave vector, two transverse polarizations, and a
        box-normalized electric-field mode expansion at the emitter, in units
        with hbar equal to one.
      hypotheses: The idealized photon bath and electric-dipole approximation in
        section S3; the field normalization is given up to a phase convention.
      reading_limits: The supplied extracted text at the cited location was read. This
        reference attributes the article's model and is not evidence of an
        experimental measurement or of a regulator-removal theorem.
---

PDF p. 11: ` S3 Hamiltonian bullets, Eq. (S3.2) `

## Prerequisites

- [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)
- [post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)


## Postulate

Use units with $\hbar=1$. In the article's box-normalized photon model, a mode is labeled by a nonzero wave vector $\mathbf k$ and one of two polarization labels $\lambda=1,2$. Its frequency is $\omega_{\mathbf k}=c|\mathbf k|$, where $c>0$ is the speed assigned to the field. For each $\mathbf k$, the two polarization vectors $\boldsymbol\epsilon_\lambda(\mathbf k)$ are transverse, meaning $\mathbf k\cdot\boldsymbol\epsilon_\lambda(\mathbf k)=0$, and together with $\hat{\mathbf k}=\mathbf k/|\mathbf k|$ form an orthonormal basis of the complexified three-dimensional vector space with its usual Hermitian inner product.

Let $a_{\mathbf k\lambda}$ and $a_{\mathbf k\lambda}^\dagger$ be the annihilation and creation operators for the mode. Postulate the free bath Hamiltonian $H_B=\sum_{\mathbf k,\lambda}\omega_{\mathbf k}a_{\mathbf k\lambda}^\dagger a_{\mathbf k\lambda}$ and the electric field at the fixed emitter position $\mathbf r_0$ as $\mathbf E(\mathbf r_0)=\sum_{\mathbf k,\lambda}[\mathcal E_{\omega_{\mathbf k}}\boldsymbol\epsilon_\lambda(\mathbf k)a_{\mathbf k\lambda}+\mathcal E_{\omega_{\mathbf k}}^*\boldsymbol\epsilon_\lambda(\mathbf k)^*a_{\mathbf k\lambda}^\dagger]$, where $\mathcal E_\omega=i\sqrt{\omega/(2\varepsilon_0V)}$ up to a phase convention, $\varepsilon_0>0$ is the vacuum permittivity, and $V>0$ is the quantization volume. The mode functions' phases at $\mathbf r_0$ are included in the chosen mode convention.

The electric-dipole approximation evaluates the field at $\mathbf r_0$ and neglects its variation across the emitter; with electric-dipole operator $\mathbf d$, the interaction is $H_{\rm int}=-\mathbf d\cdot\mathbf E(\mathbf r_0)$. For a regulated realization, retain finitely many positive-frequency modes and a finite-dimensional emitter as in the cited bath model. The unrestricted mode sum is model notation and no removal of the finite-mode regulator is claimed.

## Postulate references

[post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)

[math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

## Facts & Assumptions

[F1] The emitter model uses $H_{\rm int}=-\mathbf d\cdot\mathbf E(\mathbf r_0)$ and identifies evaluating the field at the emitter with the electric-dipole approximation. [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[F2] The regulated bath model permits finitely many independent positive-frequency bosonic modes coupled to a finite-dimensional emitter by Hermitian linear combinations of their creation and annihilation operators. Its continuum construction and radiation-sector conventions carry the choice assumptions stated there. [post-qec-prereq-regularized-photon-dipole-model](item-post-qec-prereq-regularized-photon-dipole-model)

[A1] Assume the Axioms of Choice, Countable Choice and Dependent Choice for the cited bath construction. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Justification

For each nonzero wave vector, transversality makes the two polarization vectors orthogonal to the propagation direction; the stated orthonormal-basis convention fixes their normalization. [math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases) The dagger denotes the Hilbert-space adjoint, and complex conjugation of the coefficient and polarization vector makes each finite-mode Cartesian field component a Hermitian linear combination on the common finite-particle domain. Its positive-frequency mode energies and linear coupling have the form permitted by F2. F1 supplies the emitter interaction and its interpretation as a dipole approximation. The specific dispersion, field normalization and approximation are adopted model assumptions attributed to the article, not deductions of laboratory behavior. The finite-mode statement does not establish convergence of the unrestricted sum or the validity of a continuum point field.
