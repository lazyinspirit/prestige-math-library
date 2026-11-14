---
id: def-qec-distinguishability-spherical-components
kind: definition
domain: mathematics
title: Spherical vector components and transition-frequency convention
status: published
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-linear-isometry-and-orthogonal-or-unitary-operator
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  def-qec-prereq-diagonal-lift-phase-data: mathematical-premise
  math:def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 13, Eq. (S3.16) and preceding sentence
      statement: The spherical components are $X_{+1}=-(X_x+iX_y)/\sqrt2$,
        $X_{-1}=(X_x-iX_y)/\sqrt2$, and $X_0=X_z$, up to convention-dependent
        phases. The convention $\omega_{mn}=E_n-E_m$ is positive for an
        energy-lowering transition from $|n\rangle$ to $|m\rangle$.
      hypotheses: The Cartesian components and energy eigenstates are those used in
        the article's system model.
      reading_limits: Read the supplied article text and inspected PDF page 13. This
        citation attributes the article's convention; it is not used as proof of
        a prerequisite or of the local algebra below.
dependency_level: 2
---

## Definition

Let $H=\mathbb C^d$, $d\geq 1$, be a finite operator space with its specified orthonormal basis, and let $X_x,X_y,X_z:H\to H$ be linear operators. In the displayed phase convention their **spherical components** are $X_{+1}=-(X_x+iX_y)/\sqrt2$, $X_{-1}=(X_x-iX_y)/\sqrt2$, and $X_0=X_z$. Other conventions may multiply these components by convention-dependent unit phases. The name specifies this change of labels and combinations; by itself it does not assert that an arbitrary triple satisfies spherical-tensor commutation relations.

Let $H_0$ be a linear operator diagonal in the specified basis, with real eigenvalues $E_n$ and basis eigenvectors $|n\rangle$. For the directed transition from $|n\rangle$ to $|m\rangle$, define $\omega_{mn}=E_n-E_m$. Thus $\omega_{mn}>0$ exactly when the source energy $E_n$ exceeds the destination energy $E_m$.

## Definition references

[[def-qec-prereq-finite-operator-conventions]]

[[def-qec-prereq-diagonal-lift-phase-data]]

## Justification

The finite operator conventions make each displayed complex linear combination a well-defined operator. In the ordered input labels $(x,y,z)$ and output labels $(+1,-1,0)$, the coefficient matrix is $U=\begin{pmatrix}-1/\sqrt2&-i/\sqrt2&0\\1/\sqrt2&-i/\sqrt2&0\\0&0&1\end{pmatrix}$. Here $U$ acts on the component-label space $\mathbb C^3$ with its standard inner product, independently of the dimension $d$ of $H$.

Direct multiplication gives $UU^\dagger=U^\dagger U=I_3$, so $U^\dagger$ is an inverse. For every coordinate column $v\in\mathbb C^3$, the induced norm satisfies $\|Uv\|^2=(Uv)^\dagger(Uv)=v^\dagger U^\dagger Uv=v^\dagger v=\|v\|^2$. Thus $U$ is an invertible linear isometry, hence a unitary operator by [[math:def-linear-isometry-and-orthogonal-or-unitary-operator]]. This verifies the needed implication directly, without assuming a matrix characterization of unitarity.

For phases $p_{+1},p_{-1},p_0$ with $|p_q|=1$, let $P=\operatorname{diag}(p_{+1},p_{-1},p_0)$. Then $P^\dagger P=PP^\dagger=I_3$, so $U^\dagger P^\dagger$ is an inverse of $PU$, and $\|PUv\|^2=\sum_q|p_q(Uv)_q|^2=\sum_q|(Uv)_q|^2=\|Uv\|^2=\|v\|^2$. Therefore multiplying output components by unit phases also gives a unitary coordinate change under the same definition.

The directed energy difference agrees with the source-minus-destination convention in [[def-qec-prereq-diagonal-lift-phase-data]], and its sign statement follows by subtraction of real numbers.
