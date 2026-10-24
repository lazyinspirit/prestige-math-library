---
id: pthm-qftx-scft-chiral-primary-unitarity-bound
kind: physics-theorem
title: Scalar Chiral-Primary Unitarity Bound
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-scft-and-frontier
deps:
  - def-qftx-scft-protected-data
dependency_roles:
  def-qftx-scft-protected-data: formulation-prerequisite
physical_scope: "Conditional representation-theoretic norm bound for scalar superconformal primaries in a unitary representation of the selected N=1 subalgebra of the source-scoped four-dimensional N=4 SU(2) SCFT data. No existence or continuum construction is asserted."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Supersymmetric Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf"
      locator: "§6.4.2, printed pp. 193–194, for the N=1 superconformal algebra and scalar chiral-primary dimension relation."
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251v1"
      locator: "§3, equations (3.1)–(3.3), printed pp. 12–13, for the selected positive supercharge anticommutator in radial quantization."
verification:
  precheck: pending
---

## Statement

Let $\mathcal H$ be a Hilbert-space representation of the selected $\mathcal N=1$ superconformal subalgebra, with positive inner product and common invariant domain on which the radial adjoint relations in the definition hold. Let $|\mathcal O\rangle\neq0$ be a scalar superconformal primary with dilation eigenvalue $d_{\mathcal O}$ and $U(1)_R$ eigenvalue $r_{\mathcal O}$. Then

$$d_{\mathcal O}\geq\frac32|r_{\mathcal O}|.$$

If $r_{\mathcal O}\geq0$, equality holds exactly when the selected chiral-branch supercharge $Q$ annihilates $|\mathcal O\rangle$. If $r_{\mathcal O}\leq0$, equality holds exactly when its conjugate $\bar Q$ annihilates $|\mathcal O\rangle$. This is a conditional algebraic statement about a state already present in the assumed unitary representation; it does not construct that representation or a continuum SCFT.

## Statement references

[David Tong, *Supersymmetric Field Theory*, §6.4.2](https://www.damtp.cam.ac.uk/user/tong/susy/susy.pdf)

[Kinney, Maldacena, Minwalla, and Raju, *An Index for 4 Dimensional Super Conformal Theories*, §3](https://arxiv.org/pdf/hep-th/0510251v1)

## Facts & Assumptions

**Given:** A positive Hilbert-space representation of the selected superconformal subalgebra, a nonzero scalar superconformal primary, and the common operator domains stated above.

[F1] [[def-qftx-scft-protected-data]]: on a scalar primary, the two adjoint supercharge anticommutators reduce to $2\{S,Q\}=D-\tfrac32R$ and $2\{\bar S,\bar Q\}=D+\tfrac32R$, with $S=Q^\dagger$ and $\bar S=\bar Q^\dagger$.

[A1] The state $|\mathcal O\rangle$ is nonzero, lies in the common invariant domain of all four operators, and is annihilated by the special superconformal charges $S$ and $\bar S$ because it is a superconformal primary.

## Proof

1.1 Using $S|\mathcal O\rangle=0$ and the Hilbert-adjoint relation, [F1] gives $(d_{\mathcal O}-\tfrac32r_{\mathcal O})\|\mathcal O\|^2=\langle\mathcal O|2\{S,Q\}|\mathcal O\rangle=2\|Q\mathcal O\|^2\geq0$. Thus $d_{\mathcal O}\geq\tfrac32r_{\mathcal O}$, with equality exactly when $Q|\mathcal O\rangle=0$. [given, F1, A1, algebra]

2.1 The conjugate anticommutator similarly gives $(d_{\mathcal O}+\tfrac32r_{\mathcal O})\|\mathcal O\|^2=\langle\mathcal O|2\{\bar S,\bar Q\}|\mathcal O\rangle=2\|\bar Q\mathcal O\|^2\geq0$. Combining the two inequalities gives $d_{\mathcal O}\geq\max(\tfrac32r_{\mathcal O},-\tfrac32r_{\mathcal O})=\tfrac32|r_{\mathcal O}|$; the active equality condition is the first norm when $r_{\mathcal O}\geq0$ and the conjugate norm when $r_{\mathcal O}\leq0$. [given, F1, A1, step 1.1, algebra] ∎
