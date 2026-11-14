---
title: Phenomenological angular-momentum degeneracy lift
status: published
research_item: post-qec-distinguishability-atomic-lift
dependency_level: 3
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 3, Eq. (11) and following paragraph; p. 2, Fig. 1(b) and
        caption; p. 13, final paragraph of S3
      statement: The article adds the diagonal term H_Delta = Delta sum_{J,m} Jm
        |J,m><J,m| to lift decay-process degeneracy, illustrates a J=4 to J=3
        system, and describes the term as phenomenological and separate from the
        spontaneous-decay Hamiltonian.
      hypotheses: The idealized angular-momentum decay model and the phenomenological
        lift specified in the cited passages.
      reading_limits: The supplied extracted text at the cited passages and the
        supplied image of PDF page 2 were inspected. This is attribution of the
        article's model, not evidence of a measured lift or a species-specific
        realization.
---

PDF p. 3: ` Eq. (11) `; PDF p. 2: ` Fig. 1(b) `; PDF p. 13: ` Final paragraph of S3 `

## Prerequisites

- [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)
- [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Postulate

Use the angular-momentum emitter model in units with $\hbar=1$. For a real lifting strength $\Delta$, add the phenomenological term $H_\Delta=\Delta\sum_{J,m}Jm|J,m\rangle\langle J,m|$ to the emitter Hamiltonian. Here $J$ labels a spin block and $m=-J,-J+1,\ldots,J$ labels its magnetic states. The term is separate from the spontaneous-decay coupling; it is introduced to study the effect of lifting degeneracy on decay-path distinguishability.

For the finite-emitter realization, the sum runs over the finitely many complete spin blocks retained in the emitter model. A state's lift is $\Delta Jm$. Thus a transition from $|J,m\rangle$ to $|J-1,m+\delta\rangle$ has lift contribution $\Delta[m-(J-1)\delta]$ to its source-minus-destination energy. In particular, for fixed $J$ and $\delta$, this contribution changes with the source label $m$ when $\Delta\ne0$. The article's Fig. 1(b) illustrates $J=4$ to $J=3$ transitions; its marked $6\Delta$ and $9\Delta$ are the signed lift shifts of the $J=3$, $m=2$ and $m=3$ levels relative to their unlifted energies.

This postulate specifies energy shifts, not an environmental measurement or a complete decay channel. Different transition energies alone do not establish perfect path discrimination or a measured recovery performance. The article's unrestricted sum is model notation; no domain or self-adjointness claim for an infinite-block operator is made here.

## Postulate references

[post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

## Facts & Assumptions

[F1] The emitter model uses orthonormal angular-momentum states, an emitter Hamiltonian diagonal in $J,m$, and a separate electric-dipole coupling to the photon bath; its finite realization retains finitely many complete spin blocks and a regulated bath. [post-qec-distinguishability-atomic-system](item-post-qec-distinguishability-atomic-system)

[F2] In a spin-$J$ block the magnetic labels run from $-J$ to $J$ in unit steps. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F3] For a finite diagonal lift with eigenvalues $d_x$, the change in a directed transition energy is the source eigenvalue $d_x$ minus the destination eigenvalue $d_y$. [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[A1] Assume the Axioms of Choice, Countable Choice and Dependent Choice used by the emitter model's regulated bath construction. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Justification

By [F1] and [F2], the finite sum has an orthonormal basis of eigenvectors and real eigenvalues $\Delta Jm$; it therefore defines a Hermitian diagonal operator. Adding it to the emitter term while leaving the bath coupling as specified is the physical modeling assumption, rather than a derivation of a particular field or apparatus.

By [F3], the shift for the stated transition is $\Delta[Jm-(J-1)(m+\delta)]=\Delta[m-(J-1)\delta]$. For $J=3$, the shifts at $m=2$ and $m=3$ are respectively $6\Delta$ and $9\Delta$, matching the figure's labels. These are signed shifts; their magnitudes are $6|\Delta|$ and $9|\Delta|$. The frequency calculation does not specify the bath's conditional states, so the distinguishability motivation does not assert perfect discrimination.
