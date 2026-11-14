---
id: def-qec-prereq-complementary-error-record
kind: definition
domain: mathematics
title: Complementary error records in a Kraus basis
status: draft
origin: session
deps:
  - math:def-it-quantum-channel-complement-and-coherent-information
  - math:def-qc-first-factor-partial-trace
  - math:def-qc-kraus-representation
  - math:def-qc-quantum-channel
  - math:def-qc-quantum-code-isometry-and-code-projector
  - math:def-qc-density-operator
  - math:def-qc-tensor-register-and-permutation
  - math:def-qc-partial-trace
  - math:def-qc-completely-positive-map
dependency_roles:
  math:def-it-quantum-channel-complement-and-coherent-information: mathematical-premise
  math:def-qc-first-factor-partial-trace: mathematical-premise
  math:def-qc-kraus-representation: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
  math:def-qc-quantum-code-isometry-and-code-projector: mathematical-premise
  math:def-qc-density-operator: mathematical-premise
  math:def-qc-tensor-register-and-permutation: mathematical-premise
  math:def-qc-partial-trace: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $H$ and $K$ be nonzero finite-dimensional complex inner-product spaces. Let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel, meaning a completely positive, trace-preserving linear map, with a finite Kraus representation $\mathcal N(X)=\sum_a E_aXE_a^\dagger$. Here $\mathcal L(H)$ denotes the linear endomorphisms of $H$, and $E_a^\dagger$ is the adjoint of $E_a:H\to K$. Choose a nonempty finite label set for the family and an environment space $E$ with orthonormal basis $\{|a\rangle\}$ indexed by that set. Define $W:H\to K\otimes E$ by $W|\psi\rangle=\sum_a E_a|\psi\rangle\otimes|a\rangle$. The complementary error record associated with this representation is $\mathcal N^c(X)=\operatorname{Tr}_K(WXW^\dagger)$, where the partial trace contracts the first tensor factor. In the chosen label basis its $(a,b)$ entry is $\operatorname{Tr}(E_aXE_b^\dagger)$.

For an isometric code encoding $V:H_L\to H$ with nonzero finite-dimensional logical space and code subspace $C=\operatorname{im}V$, the record is **logical-state independent on the code** when $\mathcal N^c(\rho)$ is the same operator for every density operator $\rho$ on $H$ supported on $C$. A density operator is a positive semidefinite operator of trace one; supported on $C$ means $P\rho P=\rho$ for the orthogonal projector $P=VV^\dagger$. This condition concerns the entire record, including off-diagonal entries, and is stronger than merely requiring the diagonal entries to be independent of the code state.

## Facts & Assumptions

[F1] A finite Kraus representation is the stated finite sum of operator maps. [[math:def-qc-kraus-representation]]

[F2] A finite-dimensional quantum channel is linear, completely positive and trace-preserving on all input operators. [[math:def-qc-quantum-channel]]

[F3] The first-factor partial trace is given by summing the corresponding matrix entries over an orthonormal basis of that factor. [[math:def-qc-first-factor-partial-trace]]

[F4] A complementary channel is obtained by tracing the output factor of a chosen isometric dilation. [[math:def-it-quantum-channel-complement-and-coherent-information]]

[F5] An isometric encoding has code subspace $\operatorname{im}V$ and code projector $VV^\dagger$. [[math:def-qc-quantum-code-isometry-and-code-projector]]

[F6] A density operator is positive semidefinite with trace one. [[math:def-qc-density-operator]]

[F7] Ordered tensor products retain factor order and carry the factorwise product inner product, with orthonormal elementary product bases. [[math:def-qc-tensor-register-and-permutation]]

[F8] For an operator $R$ on an ordered product $K\otimes E$ with ordered orthonormal product basis, the second-factor partial trace has entries $(\operatorname{Tr}_E R)_{i i'}=\sum_a R_{(i,a),(i',a)}$. [[math:def-qc-partial-trace]]

[F9] A complex-linear map is completely positive when, for every integer $r\ge1$, its block amplification $[X_{ij}]\mapsto[\mathcal N(X_{ij})]$ preserves nonnegative operators. [[math:def-qc-completely-positive-map]]

## Justification

Trace preservation and the Kraus formula give $\operatorname{Tr}(X\sum_a E_a^\dagger E_a)=\operatorname{Tr}(X)$ for every $X$. Taking matrix units for $X$ shows $\sum_a E_a^\dagger E_a=I_H$. The product inner product and orthonormality of the label basis give $\langle W\psi,W\varphi\rangle=\sum_a\langle E_a\psi,E_a\varphi\rangle=\langle\psi,\varphi\rangle$, hence $W^\dagger W=I_H$, so $W$ is an isometry. Expanding $WXW^\dagger$ and tracing over $E$ gives $\mathcal N(X)$; thus $W$ is a dilation of the given channel. Tracing instead over $K$ gives the displayed entries, so the defined record is the complementary channel for this chosen dilation. The choice of labels and basis is part of the representation.

The code-state condition is well-defined because the code projector specifies exactly which density operators are supported on $C$. Equality of full operators entails equality of their diagonal entries, while diagonal entries alone do not specify off-diagonal entries. For example, the two density matrices $\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $\frac12\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ have the same diagonal and are different. These matrices occur as complementary records for a single channel on the full two-dimensional code: take $H=K=H_L=\mathbb C^2$, $V=I$, $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $E_0=I/\sqrt2$ and $E_1=Z/\sqrt2$. The map $\mathcal N(X)=(X+ZXZ)/2$ is completely positive, since each amplification is a sum of conjugations, and is trace-preserving, since $E_0^\dagger E_0+E_1^\dagger E_1=I$. The record formula gives $\mathcal N^c(\rho)=\frac12\begin{pmatrix}1&\operatorname{Tr}(\rho Z)\\\operatorname{Tr}(\rho Z)&1\end{pmatrix}$ for every density operator $\rho$. Its diagonal entries are both $1/2$ for every code state, whereas the inputs $|0\rangle\langle0|$ and $|1\rangle\langle1|$ yield the two distinct matrices above. Thus diagonal independence over all code states does not imply full-record independence.
