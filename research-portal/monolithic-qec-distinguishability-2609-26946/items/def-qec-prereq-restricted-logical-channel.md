---
id: def-qec-prereq-restricted-logical-channel
kind: definition
domain: mathematics
title: Code restriction and decoded channel types
status: published
origin: session
deps:
  - math:def-qc-quantum-code-isometry-and-code-projector
  - math:def-qc-quantum-channel
  - math:def-qc-exact-recovery-of-a-quantum-code
  - math:def-qc-completely-positive-map
  - math:thm-qc-isometric-encoding-projector
  - math:thm-trace-of-ab-equals-trace-of-ba
  - math:def-non-negative-and-positive-operator
  - math:def-qc-tensor-register-and-permutation
dependency_roles:
  math:def-qc-quantum-code-isometry-and-code-projector: mathematical-premise
  math:def-qc-quantum-channel: mathematical-premise
  math:def-qc-exact-recovery-of-a-quantum-code: mathematical-premise
  math:def-qc-completely-positive-map: mathematical-premise
  math:thm-qc-isometric-encoding-projector: mathematical-premise
  math:thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  math:def-non-negative-and-positive-operator: mathematical-premise
  math:def-qc-tensor-register-and-permutation: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and write $\mathcal L(H)$ for the complex-linear endomorphisms of $H$. Let $V:H_L\to H_P$ be a linear isometry, $P=VV^*$ its code projector, $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ a quantum channel, and $\mathcal R:\mathcal L(H_O)\to\mathcal L(H_L)$ a quantum channel, called a decoded recovery or decoder. A quantum channel is a complex-linear, completely positive, trace-preserving map; completely positive means that its amplification by the identity on every finite-dimensional ancilla preserves positive semidefinite operators.

Throughout this definition, a code means the isometric encoding $V$ on the arbitrary physical space $H_P$, with code subspace $\operatorname{im}V$; no tensor decomposition is required. This generalizes the ordered-register code convention, with which it agrees whenever $H_P$ is supplied as a fixed ordered register tensor product with at least one factor and specified ordered orthonormal factor bases.

Define the encoding channel by $\operatorname{Ad}_V(X)=VXV^*$ and the restricted noise channel by $\mathcal N\circ\operatorname{Ad}_V$. The decoded logical channel is $\mathcal E=\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$. The code is exactly correctable for $\mathcal N$ when a decoder can be chosen with $\mathcal E=\operatorname{id}_{\mathcal L(H_L)}$.

A physical recovery supported on the code is a channel $\mathcal T:\mathcal L(H_O)\to\mathcal L(H_P)$ such that $P\mathcal T(Y)P=\mathcal T(Y)$ for every $Y\in\mathcal L(H_O)$. It corresponds to the decoder $Y\mapsto V^*\mathcal T(Y)V$; conversely a decoder $\mathcal R$ corresponds to the physical recovery $\operatorname{Ad}_V\circ\mathcal R$. If $H_P$ is supplied as the tensor-product space of an ordered physical register, the one-factor case has a single physical factor; this terminology imposes no additional channel condition.

## Facts & Assumptions

[F1] For a nonzero logical space and a fixed ordered physical register tensor product with at least one factor and specified ordered orthonormal factor bases, an isometric code has code subspace $\operatorname{im}V$ and code projector $VV^*$. [[math:def-qc-quantum-code-isometry-and-code-projector]]

[F2] A finite-dimensional quantum channel is completely positive and preserves trace on every endomorphism. [[math:def-qc-quantum-channel]]

[F3] Exact correction means that a decoded recovery composed with the noise and encoding equals the identity on the full logical operator space. [[math:def-qc-exact-recovery-of-a-quantum-code]]

[F4] Complete positivity means positivity of every finite ancilla amplification. [[math:def-qc-completely-positive-map]]

[F5] For a finite-dimensional isometry, $V^*V=I$ and $VV^*$ is the orthogonal projector onto $\operatorname{im}V$. [[math:thm-qc-isometric-encoding-projector]]

[F6] For compatible rectangular matrices, $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. [[math:thm-trace-of-ab-equals-trace-of-ba]]

[F7] Positive semidefinite means non-negative: the operator is self-adjoint and its quadratic form is nonnegative at every vector. [[math:def-non-negative-and-positive-operator]]

[F8] An ordered tensor register has a finite ordered list of finite-dimensional complex inner-product spaces with specified ordered orthonormal bases, and its space is their tensor product in the specified order. [[math:def-qc-tensor-register-and-permutation]]

## Justification

By [F5], $V^*V=I$. For every finite ancilla, the amplification of $X\mapsto VXV^*$ is conjugation by $V\otimes I$, which preserves self-adjointness and sends positive semidefinite operators to positive semidefinite operators by [F7]: its quadratic form at $z$ is the original quadratic form at $(V^*\otimes I)z$. Its trace equals the input trace by [F6] and $V^*V=I$. Thus it is a channel by [F2] and [F4]. Compositions of channels are linear and trace-preserving; their finite amplifications are compositions of positive maps, so they are completely positive. This justifies both the restricted noise channel and the logical channel.

For a code-supported physical recovery $\mathcal T$, the map $Y\mapsto V^*\mathcal T(Y)V$ is completely positive by the same conjugation argument and composition. Its trace is $\operatorname{tr}(\mathcal T(Y)P)$ by [F6], equal to $\operatorname{tr}(\mathcal T(Y))=\operatorname{tr}(Y)$ because $P\mathcal T(Y)P=\mathcal T(Y)$ and $P^2=P$. It is therefore a decoder. Conversely, $\operatorname{Ad}_V\circ\mathcal R$ is a channel, and $PV=V$ and $V^*P=V^*$ show that its outputs are supported on the code. The two assignments are inverse: $V^*V=I$ recovers $\mathcal R$, while $VV^*\mathcal T(Y)VV^*=P\mathcal T(Y)P=\mathcal T(Y)$ recovers $\mathcal T$.
