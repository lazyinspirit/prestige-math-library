---
id: def-oriented-proper-invertible-ideal-class-group-of-a-quadratic-order
kind: definition
title: Oriented Proper Ideal Classes of a Real Quadratic Order
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-quadratic-order-of-discriminant
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice
  - def-field-norm-and-trace
justified_by:
  - thm-proper-invertible-ideal-classes-form-abelian-group
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Manjul Bhargava, Higher Composition Laws I, §3.2, pp. 232–233"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf"
    - title: "William Dallaporta, Recovering the Picard group of quadratic algebras from Wood's binary quadratic forms, §§3.1–3.3"
      url: "https://arxiv.org/pdf/2111.13422"
verification:
  precheck: n/a
---

## Definition

Assume $D>0$. A fractional $\mathcal O_D$-ideal is a nonzero
$\mathcal O_D$-submodule of $K_D$ with a common nonzero denominator; it is
proper when its multiplier ring is $\mathcal O_D$ and invertible when its
product with its colon inverse is $\mathcal O_D$. The ordered basis
$(1,\tau_D)$ fixes an orientation of the two-dimensional $\mathbb Q$-vector
space $K_D$. An **oriented proper invertible fractional ideal** is a pair
$(I,\epsilon)$, where $I$ is a proper invertible fractional $\mathcal O_D$-ideal
and $\epsilon\in\{+1,-1\}$ specifies one of the two orientations of its
rank-two $\mathbb Z$-lattice relative to $(1,\tau_D)$. An ordered lattice basis
with coordinate matrix $B$ represents the selected orientation exactly when
$\epsilon=\operatorname{sgn}(\det B)$; two bases represent the same orientation
exactly when their transition matrix has determinant $+1$. Here
$N_{K_D/\mathbb Q}(\lambda)$ is the determinant of multiplication by
$\lambda$. For $\lambda\in K_D^\times$, scalar multiplication acts by
$\lambda\cdot(I,\epsilon)=(\lambda I,\operatorname{sgn}(N_{K_D/\mathbb Q}
\lambda)\epsilon)$. The oriented ideal class group
$\operatorname{Cl}_{\mathrm{or}}^+(\mathcal O_D)$ is the set of these pairs
modulo this scalar action, with product
$(I,\epsilon)(J,\eta)=(IJ,\epsilon\eta)$, where $IJ$ is the ideal of finite
sums of products $xy$ with $x\in I$ and $y\in J$.

## Definition references

[[def-proper-invertible-ideal-class-group-of-a-quadratic-order|Proper means multiplier ring O_D; invertible means I(O_D:I)=O_D.]]

[[lem-nonzero-fractional-ideal-of-quadratic-order-is-a-rank-two-lattice|Every nonzero fractional ideal is a free rank-two abelian lattice.]]

[[def-field-norm-and-trace|The field norm is the determinant of multiplication.]]

[Bhargava, “Higher Composition Laws I,” §3.2, pp. 232–233](https://annals.math.princeton.edu/wp-content/uploads/annals-v159-n1-p03.pdf)

[Dallaporta, “Recovering the Picard group…,” §§3.1–3.3](https://arxiv.org/pdf/2111.13422)
