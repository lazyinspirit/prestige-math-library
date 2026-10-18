---
id: ex-mixed-signature-full-spin-and-norm-one-spin
kind: example
title: A mixed-sign even lift has norm minus one
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations-examples
dependency_level: 9
deps:
  - def-real-clifford-group-and-normalized-pin-spin
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-real-pin-spin-image-kernel-and-compactness
  - lem-real-spin-norm-detects-components
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 2 §4.1"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.9"
      url: https://arxiv.org/pdf/0805.0311
---

## Example

Let $V=\mathbb R^{1,1}$ with orthogonal basis $e_+,e_-$ satisfying $Q(e_+)=1$ and $Q(e_-)=-1$. The even Pin element $E=e_+e_-$ has $N(E)=-1$ and maps to $-I\in SO(1,1)$, which is outside $SO_0(1,1)$. It belongs to full-even Spin and not to norm-one Spin.

## Facts & Assumptions

**Given:** The signature $(+,-)$ Clifford relation and the conventions for full-even and norm-one Spin.

[F1] For a product of anisotropic vectors, $N(u_1\cdots u_k)=\prod_j(-Q(u_j))$ ([[lem-normalized-pin-spin-product-and-norm-laws]]).

[F2] Full-even Spin maps onto all $SO(1,1)$ ([[thm-real-pin-spin-image-kernel-and-compactness]]).

[F3] In mixed signature, $N=1$ on full-even lifts exactly over $SO_0(p,q)$ ([[lem-real-spin-norm-detects-components]]).

## Verification

**Proof technique:** direct.

1.1 The Clifford relations give $e_-e_+=-e_+e_-$, so $E^2=e_+e_-e_+e_-=-e_+^2e_-^2=1$. It is a product of two normalized vectors and therefore belongs to full-even Spin. By [F1], $N(E)=(-Q(e_+))(-Q(e_-))=(-1)(1)=-1$. [given, F1, algebra]

2.1 The reflection from $e_+$ negates $e_+$ and fixes $e_-$; the reflection from $e_-$ fixes $e_+$ and negates $e_-$. Their product is $\rho_E=-I$, with determinant $+1$. Its polar block factor is $K_+=-1$ on the positive line and $K_-=-1$ on the negative line, so [F3] puts it outside $SO_0(1,1)$. Hence the full-even lift $E$ is excluded from norm-one Spin although it lies over $SO(1,1)$, as asserted. [F2, F3, step 1.1, algebra] ∎
