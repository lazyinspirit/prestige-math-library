---
id: thm-qec-distinguishability-wigner-eckart
kind: theorem
domain: mathematics
title: Rank-one angular matrix elements
status: draft
origin: session
deps:
  - def-qec-distinguishability-angular-basis
  - def-qec-distinguishability-spherical-components
  - def-qec-prereq-spin-tensor-cg-conventions
  - thm-qec-prereq-wigner-eckart-contract
  - physics:thm-nrqm-orbital-and-spin-tensor-spin-composition
dependency_roles:
  def-qec-distinguishability-angular-basis: mathematical-premise
  def-qec-distinguishability-spherical-components: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  thm-qec-prereq-wigner-eckart-contract: mathematical-premise
  physics:thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 13, Eq. (S3.19) and surrounding text
      statement: For angular-momentum eigenstates the article writes the rank-one
        matrix element proportional to the Clebsch–Gordan coefficient with
        ordered labels 1,q;J,m, up to convention-dependent normalization and
        phase choices.
      hypotheses: The rank-one tensor and angular-momentum eigenstate conventions of
        the displayed equation.
      reading_limits: The supplied extracted text at Eq. (S3.19) and its surrounding
        passage was read. This citation attributes the article's formulation; it
        is not used as proof.
dependency_level: 3
---

## Statement

Let $H$ and $K$ be finite direct sums of specified spin blocks, and let $(X_q)_{q=-1}^{1}$ be a rank-one spherical tensor family from $H$ to $K$. Fix an input copy of $V_J$ and an output copy of $V_{J'}$, with angular basis vectors $|J,m\rangle$ and $|J',n\rangle$. For the ordered coupling $V_1\otimes V_J$, write $C^{J',n}_{1,q;J,m}$ for the coefficient of $|1,q\rangle\otimes|J,m\rangle$ in the chosen normalized coupled vector of spin $J'$ and magnetic label $n$. Take it to be zero if $J'$ is outside the coupling list or $n$ is outside its magnetic range. Then there is a complex scalar $R$ independent of $m,n,q$ such that $\langle J',n|X_q|J,m\rangle=R C^{J',n}_{1,q;J,m}$. The scalar depends on the fixed block copies, tensor family, coupling order and phase choices, and may vanish. In particular the matrix element vanishes unless $n=m+q$ and $J'$ belongs to $|J-1|,|J-1|+1,\ldots,J+1$. The symbols $X_q$ can be the spherical components of a Cartesian triple when those components satisfy the rank-one tensor equations; the coordinate change alone does not imply those equations.

## Statement references

[[def-qec-distinguishability-angular-basis]]

[[def-qec-distinguishability-spherical-components]]

[[def-qec-prereq-spin-tensor-cg-conventions]]

[[thm-qec-prereq-wigner-eckart-contract]]

[[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition]]

## Facts & Assumptions

[F1] The angular basis identifies $|J,m\rangle$ with the specified orthonormal spin-block basis. [[def-qec-distinguishability-angular-basis]]

[F2] Spherical components are the stated linear combinations of Cartesian operators; being such components does not by itself assert the tensor equations. [[def-qec-distinguishability-spherical-components]]

[F3] The spin convention defines the tensor equations and ordered coupled bases, with each coupled ladder basis determined by one chosen highest-weight phase. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F4] The Wigner–Eckart contract gives a magnetic-label-independent factor for the ordered coupling $V_J\otimes V_1$, together with the magnetic and coupling-list selection rules. [[thm-qec-prereq-wigner-eckart-contract]]

[F5] In each of the ordered products $V_J\otimes V_1$ and $V_1\otimes V_J$, every spin in the coupling list occurs exactly once. Its highest-weight line is one-dimensional, and a unit vector on that line determines the coupled basis by positively normalized lowering. These are the multiplicity-one decomposition and highest-weight construction in parts (b), (d) and (e) of [[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition]].

## Proof

**Given:** The fixed block copies, rank-one tensor family and chosen ordered-coupling phases in the statement.

**Goal:** Express the matrix elements using the article's reversed coupling order and establish the selection rules.

1.1 Apply the Wigner–Eckart contract with $k=1$. In the order $V_J\otimes V_1$ there is a scalar $R_0$, independent of $m,n,q$, such that the matrix element is $R_0 C^{J',n}_{J,m;1,q}$, with the stated selection rules. The angular-basis notation gives these coefficients and matrix elements their displayed meaning. [F1, F3, F4]

2.1 When $J'$ is in the coupling list, the factor-swap map sends $|J,m\rangle\otimes|1,q\rangle$ to $|1,q\rangle\otimes|J,m\rangle$ and intertwines the total spin operators. It therefore sends the chosen highest-weight vector in the first order to a unit highest-weight vector in the unique spin-$J'$ summand in the second order. The multiplicity-one decomposition in F5 makes that highest-weight space one-dimensional, so the two chosen vectors differ by one unit scalar, independent of magnetic label. Their positively normalized lowering constructions preserve this same scalar for every $n$. Consequently $C^{J',n}_{J,m;1,q}$ is one fixed scalar multiple of $C^{J',n}_{1,q;J,m}$ for all $m,n,q$. Absorb that scalar into $R_0$ to obtain $R$. If $J'$ is outside the coupling list both the matrix element and the stipulated coefficient vanish, so $R=0$ works. The selection rules remain those of step 1.1; the qualification about Cartesian components follows from their definition. This proves the statement. [F2, F3, F5, step 1.1, algebra] ∎
