---
id: thm-qc-unitary-group-compact
kind: theorem
title: "Unitary Group Compact"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: ["def-real-and-complex-inner-product-space", "def-dimension", "thm-heine-borel-rn", "thm-compactness-agrees-with-metric-compactness", "thm-complex-numbers-are-the-real-coordinate-plane", "thm-finite-dimensional-isometry-characterisations", "def-matrix-product-and-identity-matrix", "thm-matrix-multiplication-laws", "def-topological-group", "def-group", "def-compact-space", "def-hausdorff-space"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.2, finite-dimensional unitary group; compactness is proved locally."
---

## Statement

For every positive integer $d$, the unitary group
$$U(d):=\{U\in M_d(\mathbb C):U^*U=I_d\}$$
is a compact Hausdorff topological group in the Euclidean topology inherited from the real and imaginary parts of its matrix entries.

## Facts & Assumptions

**Given:** A positive integer $d$ and the stated subspace topology on $M_d(\mathbb C)\cong\mathbb R^{2d^2}$.

[F1] In $\mathbb R^n$ with its Euclidean metric, every closed bounded set is compact in the metric sense ([[thm-heine-borel-rn]]). For the induced metric topology, metric compactness and topological compactness agree, also for subspaces ([[thm-compactness-agrees-with-metric-compactness]]).

[F2] Under the coordinate bijection $\mathbb C\cong\mathbb R^2$, complex addition, multiplication, and conjugation are polynomial coordinate operations ([[thm-complex-numbers-are-the-real-coordinate-plane]]); they are therefore continuous in Euclidean coordinates.

[F3] For an endomorphism of a finite-dimensional inner-product space, $U^*U=I$ implies $U$ is invertible with inverse $U^*$, and hence $UU^*=I$ ([[thm-finite-dimensional-isometry-characterisations]]).

[F4] Matrix multiplication is associative and has the identity matrix as its identity ([[def-matrix-product-and-identity-matrix]], [[thm-matrix-multiplication-laws]]).

[F5] A compact space is one for which every open cover has a finite subcover, a Hausdorff space separates distinct points by disjoint open neighborhoods, and a topological group is a group whose multiplication and inversion are continuous ([[def-compact-space]], [[def-hausdorff-space]], [[def-topological-group]], [[def-group]]).

## Proof

1.1 The map $U\mapsto U^*U$ is continuous because each entry is a finite sum of products of real-coordinate polynomial expressions from [F2]. The singleton $\{I_d\}$ is closed in the finite-dimensional Euclidean matrix space, so its inverse image $U(d)$ is closed. If $U=(u_{ij})\in U(d)$, each column has squared Euclidean norm $\sum_i|u_{ij}|^2=1$; hence every real and imaginary entry lies in $[-1,1]$. Thus $U(d)$ is bounded in $\mathbb R^{2d^2}$. [given, F2, algebra]

2.1 By Heine–Borel and the agreement of metric and topological compactness in [F1], the closed bounded set $U(d)$ from step 1.1 is compact in its Euclidean subspace topology. Distinct points of $U(d)$ have disjoint sufficiently small Euclidean balls, so its subspace topology is Hausdorff by [F5]. It is nonempty because $I_d\in U(d)$. [F1, F5, step 1.1]

3.1 By [F3], each $U\in U(d)$ has inverse $U^*$, so the defining set is closed under inverses. If $U,V\in U(d)$, then $(UV)^*(UV)=V^*(U^*U)V=V^*V=I_d$, so it is closed under multiplication; associativity and the identity follow from [F4]. Matrix multiplication is continuous by the finite coordinate formulas of step 1.1, and inversion is $U\mapsto U^*$, which is continuous by [F2]. Thus the group with its subspace topology is a topological group by [F5]. [F2, F3, F4, F5, step 1.1, algebra] ∎
