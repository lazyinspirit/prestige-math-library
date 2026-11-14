---
id: post-qec-distinguishability-atomic-system
kind: postulate
domain: physics
title: Angular-momentum emitter, photon bath, and dipole approximation
status: published
origin: session
deps:
  - def-qec-distinguishability-angular-basis
  - post-qec-prereq-regularized-photon-dipole-model
  - def-qec-prereq-finite-operator-conventions
  - math:def-hilbert-direct-sum-of-unitary-representations
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  def-qec-distinguishability-angular-basis: mathematical-premise
  post-qec-prereq-regularized-photon-dipole-model: formulation-prerequisite
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:def-hilbert-direct-sum-of-unitary-representations: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, Atomic and molecular systems; PDF p. 11, section S3 and Eq.
        (S3.1)
      statement: The article models an angular-momentum emitter and photon bath by H =
        H_S + H_B + H_int, with H_S diagonal in angular-momentum labels and
        electric-dipole interaction. It uses energy scaling by eta_J, including
        the rigid-rotor choice J(J+1), and presents an effective
        platform-independent baseline.
      hypotheses: The idealized angular-momentum emitter and dipole-approximation
        model described in the cited passages.
      reading_limits: The supplied extracted article text at the cited locations was
        read. This reference attributes the article's model; it is not
        independent evidence for its physical applicability or an experimental
        observation.
physical_scope: An idealized atomic or molecular angular-momentum emitter
  coupled to a photon bath; the model is not a species-specific microscopic
  description or an experimental observation.
formulation_deps:
  - def-qec-distinguishability-angular-basis
  - post-qec-prereq-regularized-photon-dipole-model
  - def-qec-prereq-finite-operator-conventions
  - math:def-hilbert-direct-sum-of-unitary-representations
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - def-qec-distinguishability-angular-basis
  - post-qec-prereq-regularized-photon-dipole-model
  - def-qec-prereq-finite-operator-conventions
  - math:def-hilbert-direct-sum-of-unitary-representations
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_level: 2
---

## Postulate

Use units with $\hbar=1$. Let the emitter have angular-momentum basis states $|J,m\rangle$, where $J$ labels a spin block and $m=-J,-J+1,\ldots,J$ labels its magnetic states. Adopt the model Hamiltonian $H=H_S+H_B+H_{\rm int}$, where $H_S=\sum_{J,m}\omega_0\eta_J|J,m\rangle\langle J,m|$. Here $\omega_0>0$ sets the energy scale and the real dimensionless level factors $\eta_J$ increase monotonically with $J$. Thus all magnetic states in a given $J$ block have the same unperturbed energy. The rigid-rotor benchmark takes $\eta_J=J(J+1)$.

The bath Hamiltonian $H_B$ is the free photon energy. In the electric-dipole approximation, take $H_{\rm int}=-\mathbf d\cdot\mathbf E(\mathbf r_0)$, where $\mathbf d$ is the emitter's electric-dipole operator and $\mathbf E(\mathbf r_0)$ is the electric field evaluated at the emitter position $\mathbf r_0$. This approximation neglects the field's spatial variation across the emitter. The Hamiltonian is an effective platform-independent baseline for atomic and molecular models, rather than a species-specific microscopic description.

For a mathematically specified finite-emitter realization, choose a finite nonempty set $\mathcal S$ of spin labels and take the orthogonal direct sum $\mathcal H_S=\bigoplus_{J\in\mathcal S}V_J$, with componentwise vector operations and inner product $\langle x,y\rangle=\sum_{J\in\mathcal S}\langle x_J,y_J\rangle_{V_J}$, linear in its first argument. Embed each block basis vector $e_{J,m}$ by zero in all other blocks and denote its image by $|J,m\rangle$. Order the combined basis by increasing $J$ and then increasing $m$; its coordinates identify $\mathcal H_S$ with $\mathbb C^d$, where $d=\sum_{J\in\mathcal S}(2J+1)\geq1$. Use the finite operator conventions for bras, outer products and adjoints: $\langle v|x\rangle=v^\dagger x$, $(|u\rangle\langle v|)x=u(v^\dagger x)$, and $A^\dagger=\overline A^T$ in these coordinates. In this realization the sum defining $H_S$ runs over $J\in\mathcal S$ and all magnetic labels in each retained block.

Use either of the regulated photon-bath constructions in the cited bath postulate, with its stated cutoff or finite-mode hypotheses, on this finite emitter. The displayed unrestricted expression is model notation; no regulator-removal result is asserted.

## Postulate references

[[def-qec-distinguishability-angular-basis]]

[[post-qec-prereq-regularized-photon-dipole-model]]

[[def-qec-prereq-finite-operator-conventions]]

[[math:def-hilbert-direct-sum-of-unitary-representations]]

## Facts & Assumptions

[F1] The angular basis has magnetic labels $m=-J,-J+1,\ldots,J$ and an orthonormal basis in each finite spin block. [[def-qec-distinguishability-angular-basis]]

[F2] The regulated bath postulate specifies a transverse free photon energy and a dipole coupling for a finite-dimensional emitter, subject to its cutoff or finite-mode conditions. [[post-qec-prereq-regularized-photon-dipole-model]]

[F3] The Hilbert direct-sum construction uses the componentwise inner product and zero-extension embeddings, whose images are mutually orthogonal. Its general formulation assumes the Axiom of Choice; here the index set is finite. [[math:def-hilbert-direct-sum-of-unitary-representations]]

[F4] On a nonzero finite complex coordinate space with specified ordered orthonormal basis, bras act by $v^\dagger x$, outer products by $u(v^\dagger x)$, and adjoints are conjugate transposes. [[def-qec-prereq-finite-operator-conventions]]

[A1] Assume the Axioms of Choice, Countable Choice and Dependent Choice for the cited direct-sum and regulated bath constructions. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Justification

**Given:** The finite nonempty set $\mathcal S$, the spin-block bases in F1, the direct-sum construction F3, the operator conventions F4, real level factors, and the choice assumptions A1. The numbered argument establishes the finite emitter's mathematical realization.

1.1 By F3, the zero-extension embeddings preserve each block's inner product and have orthogonal images. Thus two embedded vectors from F1 have inner product one when both labels agree and zero otherwise. Every vector $x=(x_J)_{J\in\mathcal S}$ is a sum of its finitely many block components, each expanded in the corresponding basis from F1. Hence the combined vectors span and are orthonormal; taking their inner products with a vanishing linear combination also proves linear independence. Ordering them as stated identifies the direct sum isometrically with the standard coordinate space $\mathbb C^d$, and nonemptiness of $\mathcal S$ gives $d\geq1$, as required by F4 and the finite-emitter bath construction. [F1, F3, F4, A1, algebra]

1.2 By F4, $P_{J,m}=|J,m\rangle\langle J,m|$ acts on a vector by selecting its $(J,m)$ coordinate and multiplying that coordinate by $|J,m\rangle$. Its matrix has a single diagonal entry one and all other entries zero, so its conjugate transpose equals itself. Therefore the finite real linear combination $H_S=\sum_{J\in\mathcal S}\sum_{m=-J}^{J}\omega_0\eta_J P_{J,m}$ is Hermitian and satisfies $H_S|J,m\rangle=\omega_0\eta_J|J,m\rangle$. The eigenvalue is independent of $m$, giving the stated degeneracy within each retained block. [F4, step 1.1, given, algebra] ∎

F2 supplies the meaning and hypotheses of the regulated bath and its finite-emitter coupling, applied to this $\mathbb C^d$ realization. The identification of that coupling with the electric-dipole approximation is a physical modeling assumption, not a consequence of the basis construction. The rigid-rotor scaling is a specified example of the level factors; no species-specific accuracy or regulator-free limit is claimed.
