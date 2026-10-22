---
id: prop-gr-fx-su2-compact
kind: proposition
title: SU(2) is a compact Hausdorff matrix group
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-matrix-product-and-identity-matrix
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - thm-heine-borel-rn
dependency_roles:
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (2025), §5.2"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
      locator: "§5.2, compact groups and normalized Haar measure; the present finite-dimensional compactness proof is local."
    - title: "John C. Baez, Spin Network States in Gauge Theory, arXiv:gr-qc/9411007, §2"
      url: "https://arxiv.org/pdf/gr-qc/9411007"
      locator: "§2, finite graph variables valued in a compact structure group and representation spaces."
verification:
  precheck: pass
---

## Statement

Let $M_2(\mathbb C)$ have its Euclidean topology as $\mathbb R^8$, and define

$$SU(2)=\{Q\in M_2(\mathbb C):Q^\dagger Q=I_2,\ \det Q=1\}.$$

Under matrix multiplication, $SU(2)$ is a compact Hausdorff topological group.

## Statement references

[[def-matrix-product-and-identity-matrix]]

[[def-determinant-of-a-square-matrix]]

[[thm-determinant-multiplicative]]

[[thm-heine-borel-rn]]

## Facts & Assumptions

**Given:** The Euclidean topology on $M_2(\mathbb C)\cong\mathbb R^8$ and the displayed subset defined by the conjugate-transpose and determinant equations.

[F1] [[thm-determinant-multiplicative]]: $\det(AB)=\det(A)\det(B)$ for square matrices over a commutative field.

[F2] [[thm-heine-borel-rn]]: a closed and bounded subset of finite-dimensional Euclidean space is compact.

[F3] [[def-matrix-product-and-identity-matrix]]: matrix multiplication and the identity matrix have their usual finite-sum entry formulas.

## Proof

**Proof technique:** direct.

1.1 If $Q,R\in SU(2)$, then $(QR)^\dagger QR=R^\dagger Q^\dagger QR=I_2$ and $\det(QR)=\det Q\det R=1$ by [F1]; $I_2$ is in the set. Also $Q^{-1}=Q^\dagger$, and $\det(Q^\dagger)=\overline{\det Q}=1$, so the inverse belongs to $SU(2)$. Associativity is inherited from matrix multiplication. The product entries are polynomials in real and imaginary entries and the inverse $Q\mapsto Q^\dagger$ is continuous, so this is a topological group. [given, F1, F3, algebra]

1.2 The equations $Q^\dagger Q=I_2$ and $\det Q=1$ are inverse images of closed points under continuous functions, so $SU(2)$ is closed in $\mathbb R^8$. Each unitary column has squared norm one, hence the sum of the squared absolute values of all four entries is $2$; this bounds the subset. [F3, algebra]

2.1 By [F2], the closed bounded subset is compact. Euclidean space is Hausdorff and every subspace of a Hausdorff space is Hausdorff, so $SU(2)$ is compact Hausdorff. [given, F2, step 1.2, construct] ∎
