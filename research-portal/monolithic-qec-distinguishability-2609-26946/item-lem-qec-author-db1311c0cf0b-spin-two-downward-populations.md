---
title: Spin-two downward coefficients and detection-code output populations
status: published
research_item: lem-qec-author-db1311c0cf0b-spin-two-downward-populations
dependency_level: 2
---

## Prerequisites

- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)


## Statement

In the ordered spin coupling $V_1\otimes V_2\to V_1$, choose the common coupled phase for which $C^{1,1}_{1,-1;2,2}$ is positive. Define $B_\delta e_{2,m}=\sqrt{5/3}\,C^{1,m+\delta}_{1,\delta;2,m}e_{1,m+\delta}$, with out-of-range terms zero. Put $a=(e_{2,-2}+e_{2,2})/\sqrt2$ and $b=e_{2,0}$. Let $|0\rangle=(1,0)^T$ and $|1\rangle=(0,1)^T$ be the ordered standard orthonormal basis of $\mathbb C^2$, and define the linear map $W:\mathbb C^2\to V_2$ by $W|0\rangle=a$, $W|1\rangle=b$. Then $\sum_\delta B_\delta^\dagger B_\delta=I_{V_2}$. The nonzero actions on the two codewords are
$$B_{-1}a=e_{1,1}/\sqrt2,\quad B_{+1}a=e_{1,-1}/\sqrt2,\quad B_{-1}b=e_{1,-1}/\sqrt6,\quad B_{+1}b=e_{1,1}/\sqrt6,\quad B_0b=-\sqrt{2/3}\,e_{1,0}.$$
In particular $B_0a=0$. The population vectors, in output order $m=-1,0,1$, of $\sum_\delta B_\delta|a\rangle\langle a|B_\delta^\dagger$ and $\sum_\delta B_\delta|b\rangle\langle b|B_\delta^\dagger$ are $(1/2,0,1/2)$ and $(1/6,2/3,1/6)$. They remain these diagonal matrices if arbitrary phases are put on the two nonzero magnetic amplitudes of $a$ before applying the $B_\delta$.

## Facts & Assumptions

[F1] Use the specified spin matrices and the coupled highest-weight and lowering definition of each Clebsch–Gordan coefficient. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] For $J=2$ the downward coefficient sum is $3/5$, and multiplying all components by $\sqrt{5/3}$ makes their adjoint-product sum the identity. [lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)

[F3] Use the specified finite orthonormal bases, adjoints, outer products and ordered tensor coordinates. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

## Proof

**Given:** The ordered coupling, phase and code vectors in the statement.

**Goal:** Compute the needed coefficients and normalized output populations.

1.1 In the total magnetic-weight-one product basis $e_{1,-1}\otimes e_{2,2}$, $e_{1,0}\otimes e_{2,1}$, $e_{1,1}\otimes e_{2,0}$, write the highest-weight vector as $(x,y,z)$. The total raising equation gives $\sqrt2x+2y=0$ and $\sqrt2y+\sqrt6z=0$. With positive $x$ and unit norm, these equations give $(x,y,z)=(\sqrt{3/5},-\sqrt{3/10},\sqrt{1/10})$. Lowering this vector once and twice, with the spin-one factors $\sqrt2$, gives $v_{1,0}=\sqrt{3/10}(e_{1,-1}\otimes e_{2,1}+e_{1,1}\otimes e_{2,-1})-\sqrt{2/5}e_{1,0}\otimes e_{2,0},$ and $v_{1,-1}=\sqrt{1/10}e_{1,-1}\otimes e_{2,0}-\sqrt{3/10}e_{1,0}\otimes e_{2,-1}+\sqrt{3/5}e_{1,1}\otimes e_{2,-2}$. These are the coupled vectors by the definition in [F1]. [given, F1, F3, algebra]

2.1 Reading their product-basis coefficients and multiplying by $\sqrt{5/3}$ gives exactly the five stated actions and $B_0a=0$. The identity $\sum B_\delta^\dagger B_\delta=I$ follows from [F2]. For $a$, its two magnetic components have different nonzero jump labels, so their output cross terms never occur within a single $B_\delta$ conjugation. For $b$, the three outputs have their stated squared amplitudes. Squaring and summing therefore gives the two diagonal population vectors, unchanged by phases on the two components of $a$. A different common coupled phase multiplies all $B_\delta$ by the same unit scalar and changes none of these conjugation or product claims. [F1, F2, F3, step 1.1, algebra] ∎
