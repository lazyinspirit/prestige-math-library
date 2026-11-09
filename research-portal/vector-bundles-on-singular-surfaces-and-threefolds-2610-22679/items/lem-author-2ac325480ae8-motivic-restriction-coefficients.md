---
id: lem-author-2ac325480ae8-motivic-restriction-coefficients
kind: lemma
title: The restricted BEM complex and the supplied EM finite quotient
status: published
domain: mathematics
deps:
  - thm-author-2ac325480ae8-bem-field-model
  - lem-derived-coefficient-exact-sequence
dependency_roles:
  thm-author-2ac325480ae8-bem-field-model: mathematical-premise
  lem-derived-coefficient-exact-sequence: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Let $k$ have characteristic zero and let $D_j$ denote BEM’s cdh-motivic complex restricted to qcqs $\mathbb Z[1/p]$-schemes. On qcqs $k$-schemes, $j^*D_3$ is naturally the restriction of the supplied EM cdh-local weight-three complex from qcqs $\mathbb Q$-schemes. The identification induces the same natural identification after objectwise derived quotient by $p$, and evaluation at any $X/k$ computes that quotient as the cofiber of multiplication by $p$.

## Facts & Assumptions
[F1] [[thm-author-2ac325480ae8-bem-field-model]] supplies the canonical field-restriction identification, via the same classical smooth-$\mathbb Q$ complex and its cdh-local left Kan extension.

[F2] [[lem-derived-coefficient-exact-sequence]] identifies $C/p$ with the cofiber of $p:C\to C$ and with $C\otimes^{\mathbf L}\mathbb Z/p$.

## Proof
**Given:** $k$ of characteristic zero, any qcqs $X/k$, and prime $p$.

**Goal:** Match the actual finite quotient rather than merely cohomology groups.

1.1 Restrict the canonical identification in [F1] first to qcqs $\mathbb Q$-schemes and then to $k$-schemes. Both sides are the indicated EM cdh-motivic target with its actual functorial maps. No finite-type separated site is inserted. [F1]

2.1 Restriction and evaluation of complex-valued presheaves are computed objectwise and preserve finite cofibers. Hence they carry the natural cofiber diagram for multiplication by $p$ to the corresponding diagram on the restricted/evaluated complex. Apply [F2] to identify each such cofiber with the specified derived tensor quotient. This proves the full map-level identification. [F2, step 1.1] ∎
