---
title: Order-one absorption–emission tensor error span
status: published
research_item: def-qec-prereq-ae-error-span-contract
dependency_level: 1
sources:
  references:
    - title: Absorption-Emission Codes for Atomic and Molecular Quantum Information
        Platforms
      url: https://campbellgroup.physics.ucla.edu/papers/PhysRevLett.133.260601.pdf
      locator: pp. 2–3, Eq. (2) and the discussion and operators immediately following
        it
      statement: For fixed total angular momentum, the paper gives pair-product
        Knill–Laflamme conditions, a single-operator detection condition, and
        coherent magnetic-label sums for dipole transition operators.
      hypotheses: Fixed input angular-momentum manifold and the paper's
        dipole-transition model; the listed operators are subject to the paper's
        allowed target manifolds.
      reading_limits: Read the cited discussion, conditions, and displayed operator
        definitions. The abstract finite-span convention and its typing below
        are a local adaptation; no source proof, experimental validation, or
        audit is claimed.
---

## Prerequisites

- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [` Absorption-Emission Codes for Atomic and Molecular Quantum Information Platforms · pp. 2–3, Eq. (2) and the discussion and operators immediately following it `](https://campbellgroup.physics.ucla.edu/papers/PhysRevLett.133.260601.pdf)


## Definition

Fix a spin label $J$ and its finite spin block $V_J$, with magnetic basis and spherical tensor families as in [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions). Choose a finite set $S$ of spin labels containing $J$, with $|J'-J|\leq 1$ for every $J'\in S$. Let $H=\bigoplus_{J'\in S}V_{J'}$, using one labelled copy of each block, and let $\iota_{J'}:V_{J'}\to H$ be its inclusion and $\pi_J:H\to V_J$ the orthogonal projection onto the input block.

For each $J'\in S$ and $k\in\{0,1\}$, take every component $T_q:V_J\to V_{J'}$, $-k\leq q\leq k$, of every rank-$k$ spherical tensor family in the cited convention. The **order-one absorption–emission tensor error span** for these selected blocks is the complex linear span in $\mathcal L(H)$ of $I_H$ and all $\iota_{J'}T_q\pi_J$. The selected target blocks and the tensor-family equations are part of the contract. Tensor rank here means $k$, not matrix rank. A component is one coherent linear map over its magnetic labels; an individually resolved matrix unit $|J',m'\rangle\langle J,m|$ is a distinct operator and is included only if it actually lies in the stated span.

Let $V:H_L\to V_J$ be an isometry from a nonzero finite-dimensional logical space and regard it as a map into $H$. Its code projector is $P=VV^*$ on $H$, as in [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel). The code **detects** the span when, for every $E$ in it, $PEP=c_E P$ for some complex scalar $c_E$. It satisfies the **pair-product Knill–Laflamme correction condition** for the span when, for every $E,F$ in it, $PE^*FP=c_{E,F}P$ for some complex scalar $c_{E,F}$. These conditions concern the complete selected span; no particular channel or physical recovery is specified by this definition.

## Justification

The tensor supplier defines each $T_q$ as a linear map between the named finite blocks, so $\iota_{J'}T_q\pi_J$ is an endomorphism of $H$. The complex span of these endomorphisms and $I_H$ is therefore a well-defined subspace of the finite-dimensional space $\mathcal L(H)$, even if some tensor families are zero. The code-restriction supplier gives the orthogonal projector $P$ from the isometry. Consequently $PEP$ and $PE^*FP$ are endomorphisms of $H$, and both displayed scalar-multiple conditions are well typed. Checking them on any spanning family suffices: the first condition is linear in $E$, and the second is conjugate-linear in $E$ and linear in $F$. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions) [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

## Source notes

The cited paper gives the pair-product and single-operator conditions and coherent dipole operators for its fixed-$J$ model. The general finite choice of target blocks and the span convention above make the scope explicit for this collection; they do not assert that every such operator is a realized physical error.
