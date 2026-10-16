---
id: ex-qc-quantum-repetition-projector-and-distance-boundary
kind: example
title: Quantum repetition subspace projector and a distance-one boundary error
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-qc-local-operator-support-and-weight, def-qc-quantum-code-distance-and-error-detection, def-qc-quantum-code-isometry-and-code-projector, def-qc-register-and-computational-basis, def-qc-tensor-map, def-qc-tensor-register-and-permutation, lem-qc-detectability-is-linear-and-encoding-invariant, lem-qc-tensor-product-basis-and-dimension, thm-qc-isometric-encoding-projector, thm-qc-quantum-distance-detects-low-weight-errors]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.3 and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.1 and 7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Example

Use the ordered three-qubit tensor basis $u_{x_0x_1x_2}$ supplied by the QC02 register interface. Set the logical space to $Q_2=\mathbb C^2$ with the standard pairing $\langle z,w\rangle=\sum_{r<2}z_r\overline{w_r}$, and let $e_0,e_1$ be its standard basis. Define $V e_0=u_{000}$, $V e_1=u_{111}$. The code projector is diagonal in this basis, with diagonal entry $1$ at $000,111$ and $0$ elsewhere. Define $E_Xu_{x_0x_1x_2}=u_{(1-x_0)x_1x_2}$ and $E_Zu_{x_0x_1x_2}=(-1)^{x_0}u_{x_0x_1x_2}$. Then $E_X$ is detectable but $E_Z$ is not; the code has distance $1$, and the boundary operator has weight exactly $d$.

## Facts & Assumptions

**Given:** The ordered three-qubit tensor basis and its orthonormality as specified by the QC02 interface, together with the maps $V,E_X,E_Z$ defined above.

[F1] [[def-qc-register-and-computational-basis]]: A qubit is $Q_2=\mathbb C^2$ with ordered standard basis $(e_0,e_1)$; for $n$ qubits, bit positions are ordered lexicographically with the first wire most significant.

[F2] [[def-qc-tensor-register-and-permutation]]: The tensor inner product is the product of the factor pairings, linear in the first argument, and product basis vectors are ordered lexicographically.

[F3] [[lem-qc-tensor-product-basis-and-dimension]]: The elementary product vectors form an orthonormal basis of the finite tensor register.

[F4] [[def-qc-tensor-map]]: A tensor map is the unique linear extension of its factorwise action on elementary tensors.

[F5] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: The adjoint satisfies $\langle Vx,z\rangle_P=\langle x,V^*z\rangle_L$.

[L1] [[def-qc-quantum-code-isometry-and-code-projector]]: The code projector is $P=VV^*$ and the code subspace is $\operatorname{im}V$.

[L2] [[thm-qc-isometric-encoding-projector]]: $P$ is the orthogonal projection onto the code subspace.

[L3] [[def-qc-local-operator-support-and-weight]]: Support on a set of wires defines operator weight, and scalar identity operators have weight zero.

[L4] [[def-qc-quantum-code-distance-and-error-detection]]: An operator is detectable iff $PEP=\lambda P$; distance is the minimum weight of an undetectable operator when $K\ge2$.

[L5] [[lem-qc-detectability-is-linear-and-encoding-invariant]]: For logical dimension at least two, the undetectable set is nonempty and its minimum weight exists; weight-zero operators are detectable.

[L6] [[thm-qc-quantum-distance-detects-low-weight-errors]]: Every operator of weight strictly below the quantum distance is detectable.

## Verification


1.1 From the standard pairing in [F1], $\langle e_i,e_j\rangle_L=\sum_{r<2}\delta_{ri}\overline{\delta_{rj}}=\delta_{ij}$, so $e_0,e_1$ are orthonormal. Each physical factor is also $Q_2$ with this pairing; [F2] gives $\langle u_x,u_y\rangle_P=\prod_{k<3}\delta_{x_k y_k}$, and [F3] gives the ordered product basis. Thus $u_{000},u_{111}$ are orthonormal, and $V$ is isometric. For each basis vector $u_x$, [F5] gives $\langle e_i,V^*u_x\rangle_L=\langle Ve_i,u_x\rangle_P$, which is $1$ for $(i,x)=(0,000)$ or $(1,111)$ and $0$ otherwise. Since $\langle e_i,y\rangle_L=\overline{y_i}$, this computes $V^*u_{000}=e_0$, $V^*u_{111}=e_1$, and $V^*u_x=0$ for the other six basis strings. Thus $P=VV^*$ has exactly the stated diagonal entries and is the code projector in [L1] and [L2]. [F1, F2, F3, F5, L1, L2, given]

1.2 The map $E_X$ sends $u_{000}$ to $u_{100}$ and $u_{111}$ to $u_{011}$, both orthogonal to the code subspace by [F3]. Thus $PE_XP=0$, so $E_X$ is detectable with scalar $0$. By [F1] and [F4], its action on elementary tensors is $X\otimes I\otimes I$; hence it is supported on the first wire and has weight at most $1$. [F1, F3, F4, L2, L3, L4, given]

1.3 The map $E_Z$ fixes $u_{000}$ and negates $u_{111}$. Thus $PE_ZP$ acts by eigenvalues $+1$ and $-1$ on the two-dimensional code subspace and is not a scalar multiple of $P$. By [F1] and [F4], it is $Z\otimes I\otimes I$, so it has weight at most $1$. It is non-detectable; every weight-zero operator is detectable by [L5]. Therefore the minimum non-detectable weight is $d=1$, and $\operatorname{wt}(E_Z)=d$. [F1, F4, L3, L4, L5, given, algebra]

2.1 By [L6], every operator of weight $<d=1$ is detectable; step 1.3 exhibits a non-detectable operator of weight exactly $d$. Thus the detection boundary is sharp, and no correction-map claim follows. [L6, step 1.3] ∎

## Remarks

The calculation follows the current QC02 basis and tensor-map definitions; the relevant supplier bodies were inspected before this example was recorded.
