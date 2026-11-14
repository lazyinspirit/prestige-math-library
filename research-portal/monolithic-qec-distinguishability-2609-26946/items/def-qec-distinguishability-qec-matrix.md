---
id: def-qec-distinguishability-qec-matrix
kind: definition
domain: mathematics
title: QEC matrix and logical partial trace
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-restricted-logical-channel
  - lem-qec-prereq-qec-gram-factorization
  - math:def-qc-first-factor-partial-trace
  - math:def-frobenius-matrix-norm
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  lem-qec-prereq-qec-gram-factorization: mathematical-premise
  math:def-qc-first-factor-partial-trace: mathematical-premise
  math:def-frobenius-matrix-norm: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, Eq. (6), and p. 3; PDF p. 8, Eq. (S1.6) and following
        definitions
      statement: The QEC matrix has entries
        $M_{[\mu,l],[\nu,k]}=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$; the
        logical partial trace contracts the logical indices, and the squared
        Frobenius norm is $\operatorname{Tr}(B^\dagger B)$.
      hypotheses: A code basis and a Kraus representation of the channel are given.
      reading_limits: Article-origin attribution only; the supplied article text at
        the stated locations was read. This citation is not used as proof of a
        prerequisite.
dependency_level: 2
---

## Definition

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex coordinate spaces with specified orthonormal bases. Let $V:H_L\to H_P$ be a linear isometry, and write $|\bar\mu\rangle=V|\mu\rangle$ for the code basis, where $\mu=1,\ldots,d_L$ and $d_L=\dim H_L$. Let $E_l:H_P\to H_O$, $l=1,\ldots,r$, be a finite nonempty Kraus family for a quantum channel $\mathcal N$, meaning $\mathcal N(X)=\sum_l E_lXE_l^\dagger$; a quantum channel is a completely positive, trace-preserving linear map. Let $H_E$ have orthonormal basis $|l\rangle$ indexed by the Kraus labels and use the ordered product basis $|\mu,l\rangle=|\mu\rangle\otimes|l\rangle$ of $H_L\otimes H_E$.

The **QEC matrix** $M$ in this basis is defined by $M_{[\mu,l],[\nu,k]}=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$. The adjoint is conjugate transpose in the specified bases, and $\langle u|A|v\rangle=u^\dagger Av$.

For any operator $B$ on $H_L\otimes H_E$, its **logical partial trace** $\operatorname{Tr}_L B$ is the operator on $H_E$ with entries $(\operatorname{Tr}_L B)_{l,k}=\sum_{\mu=1}^{d_L}B_{[\mu,l],[\mu,k]}$. For a finite square complex matrix $C$, its **Frobenius norm** is $\|C\|_F=(\sum_{i,j}|C_{ij}|^2)^{1/2}$, with the nonnegative square root; equivalently, $\|C\|_F^2=\operatorname{Tr}(C^\dagger C)$, where the trace is the sum of diagonal entries.

## Facts & Assumptions

[F1] The finite coordinate conventions specify adjoints, bra-ket notation and ordered product bases. [[def-qec-prereq-finite-operator-conventions]]

[F2] An isometric code is given by an isometry from the logical space into the physical space, and a quantum channel is completely positive and trace-preserving. [[def-qec-prereq-restricted-logical-channel]]

[F3] For this finite family, the QEC entries form $A^\dagger A$, where $A|\mu,l\rangle=E_l|\bar\mu\rangle$. [[lem-qec-prereq-qec-gram-factorization]]

[F4] The first-factor partial trace has the displayed contraction in ordered orthonormal product bases. [[math:def-qc-first-factor-partial-trace]]

[F5] The Frobenius norm is the square root of the sum of squared entry moduli. [[math:def-frobenius-matrix-norm]]

## Justification

The isometry sends the logical orthonormal basis to an orthonormal code basis. By [F1] and [F3], the given entries are those of the well-defined operator $A^\dagger A$ in the specified finite product basis. The construction depends on the chosen code basis and Kraus family, both part of the input.

The logical contraction is the first-factor partial trace in [F4], so it defines an operator on $H_E$. By [F5], the stated nonnegative square root defines the Frobenius norm. For square $C$, matrix multiplication gives $(C^\dagger C)_{jj}=\sum_i\overline{C_{ij}}C_{ij}$; summing over $j$ proves the displayed trace identity.
