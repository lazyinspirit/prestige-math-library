---
id: ex-qc-bell-state-schmidt-reduction
kind: example
title: Bell-state Schmidt decomposition and reduced density
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-density-operator, thm-qc-density-operator-existence, def-qc-ensemble-and-purification, thm-qc-ray-projector-well-defined-and-bijective, def-qc-dirac-notation-conversion, def-qc-tensor-register-and-permutation, def-qc-partial-trace, lem-standard-basis-of-f-n, prop-standard-coordinate-inner-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.3, Example 2.8
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles, §2.4"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §18.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For $H=K=\mathbb C^2$ with ordered standard bases $e_0,e_1$, the Bell vector $\Psi=(e_0\otimes e_0+e_1\otimes e_1)/\sqrt2$ is already in Schmidt form: it is a finite sum $\sum_j s_j u_j\otimes v_j$ with positive coefficients and orthonormal families in both factors, here $s_0=s_1=1/\sqrt2$ and $u_j=v_j=e_j$. Its reduced state on either factor is $I_2/2$.

## Example

The product-basis coordinates make the two product terms orthogonal, and the partial trace removes the two off-diagonal cross terms. Both reductions are therefore maximally mixed on the two-dimensional factor. The same state $I_2/2$ is also the barycenter of either the equal-weight computational-basis projectors or the equal-weight $\{|+\rangle,|-\rangle\}$ projectors, giving two distinct ensemble descriptions of one density operator.

## Facts & Assumptions

**Given:** $H=K=\mathbb C^2$, their ordered standard bases, and tensor order $H$ then $K$.

[F1] [[lem-standard-basis-of-f-n]]: the two standard coordinate vectors $e_0,e_1$ form the ordered standard basis of $\mathbb C^2$.

[F2] [[prop-standard-coordinate-inner-products]]: $\langle z,w\rangle=\sum_{r<2}z_r\overline{w_r}$ on $\mathbb C^2$, so $e_0,e_1$ are orthonormal.

[F3] [[def-qc-tensor-register-and-permutation]]: the ordered product basis has product pairings, and a factor permutation maps each basis tensor to the tensor with reordered factors.

[F4] [[def-qc-partial-trace]]: the partial trace over the second factor sums matrix entries with equal auxiliary indices.

[F5] [[def-qc-dirac-notation-conversion]]: $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle x$.

[F6] [[thm-qc-ray-projector-well-defined-and-bijective]] and [[def-qc-density-operator]]: for each unit vector $v$, $P_v=|v\rangle\langle v|$ is a density operator.

[F7] [[def-qc-ensemble-and-purification]]: a finite list of density operators with nonnegative weights summing to one is an ensemble, and its barycenter is the weighted operator sum.

[F8] [[lem-standard-basis-of-f-n]] and [[thm-qc-density-operator-existence]]: the standard basis gives $\dim\mathbb C^2=2$, so $I_2/2$ is a density operator on $\mathbb C^2$.

## Verification

1.1 By [F1]–[F2], $e_0,e_1$ are an ordered orthonormal basis. Taking $u_j=e_j$ and $v_j=e_j$ for $j=0,1$, the displayed expression for $\Psi$ is a finite sum with positive coefficients $s_0=s_1=1/\sqrt2$ and orthonormal families in both factors. The product basis from [F3] is orthonormal, so $\|\Psi\|^2=\frac12(1+1)=1$. Hence this expression is a Schmidt form by the finite-sum definition in the statement. [given, F1, F2, F3, algebra]

1.2 Expanding the outer product using [F5] gives $|\Psi\rangle\langle\Psi|=\frac12(|e_0e_0\rangle\langle e_0e_0|+|e_0e_0\rangle\langle e_1e_1|+|e_1e_1\rangle\langle e_0e_0|+|e_1e_1\rangle\langle e_1e_1|)$. Contracting the second factor by [F4] kills the cross terms and leaves $\frac12(|e_0\rangle\langle e_0|+|e_1\rangle\langle e_1|)=I_2/2$. [given, F1, F2, F3, F4, F5, algebra]

2.1 The factor permutation in [F3] sends $e_0\otimes e_0$ and $e_1\otimes e_1$ to themselves, so the reordered vector has the same expression as $\Psi$. Apply [F4] to trace its second factor, now the original $H$ factor; the same contraction as in step 1.2 gives $\frac12(|e_0\rangle\langle e_0|+|e_1\rangle\langle e_1|)=I_2/2$ on the original $K$. [F1, F2, F3, F4, F5, step 1.2, algebra]

3.1 Set $|+\rangle=(e_0+e_1)/\sqrt2$ and $|-\rangle=(e_0-e_1)/\sqrt2$, and write $P_v=|v\rangle\langle v|$ for $v=e_0,e_1,+,-$. These vectors are unit by [F1]–[F2], so [F6] makes their projectors density operators. By [F7], the pairs $(\frac12,P_{e_0}), (\frac12,P_{e_1})$ and $(\frac12,P_+),(\frac12,P_-)$ are finite ensembles. Expanding the outer products with [F5] gives $P_++P_-=P_{e_0}+P_{e_1}$. Since $(e_0,e_1)$ is an orthonormal basis by [F1]–[F2], each $z\in\mathbb C^2$ satisfies $z=\langle z,e_0\rangle e_0+\langle z,e_1\rangle e_1$, so $P_{e_0}+P_{e_1}=I_2$. Both ensemble barycenters are therefore $I_2/2$, which is a density operator by [F8]. The ensembles are distinct because $P_{e_0}$ and $P_+$ have different one-dimensional ranges. Thus the same density operator has two ensemble descriptions. [given, F1, F2, F5, F6, F7, F8, algebra] ∎
