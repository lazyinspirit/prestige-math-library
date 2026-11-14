---
id: lem-author-11a9fe6cf386-signed-spin-four-coefficients
kind: lemma
domain: mathematics
title: Real coefficient arrays for the signed spin-four isometry
status: published
origin: session
deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - math:def-linear-map
  - def-qec-prereq-finite-operator-conventions
dependency_roles:
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  math:def-linear-map: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

In $V_4$ set $u_0=\sqrt{1/3}e_{4,-4}+\sqrt{2/3}e_{4,2}$ and $u_1=\sqrt{2/3}e_{4,-2}-\sqrt{1/3}e_{4,4}$. Let $e_0,e_1$ be the standard orthonormal basis of $\mathbb C^2$, and define $V:\mathbb C^2\to V_4$ on every input by $V(z_0e_0+z_1e_1)=z_0u_0+z_1u_1$ for $z_0,z_1\in\mathbb C$. This is the unique complex-linear map with $Ve_\mu=u_\mu$ for $\mu=0,1$, and it is an isometry: $\|Vx\|=\|x\|$ for every $x\in\mathbb C^2$, where $\|w\|=\sqrt{\langle w,w\rangle}$ for the standard coordinate inner products. Under $j=m+4$, its real coefficient arrays are $\alpha_0=1/\sqrt3$, $\alpha_6=\sqrt{2/3}$, $\beta_2=\sqrt{2/3}$, $\beta_8=-1/\sqrt3$, and zero elsewhere. In particular $\sum_{j=0}^8\alpha_j\beta_j=0$ and $\sum\alpha_j^2=\sum\beta_j^2=1$.

## Facts & Assumptions

[F1] The magnetic basis of a spin block is orthonormal and indexed from minus spin to spin. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F2] A map between vector spaces over $\mathbb C$ is complex-linear when it preserves $ax+by$ for every pair of vectors $x,y$ and scalars $a,b\in\mathbb C$. [[math:def-linear-map]]

[F3] In the specified orthonormal bases of finite coordinate spaces, $\langle x,y\rangle=\sum_i x_i\overline{y_i}$, and the adjoint of a linear map is represented by its conjugate-transpose matrix. Here $V^*$ denotes this adjoint and $I_2$ the identity matrix on $\mathbb C^2$. [[def-qec-prereq-finite-operator-conventions]]

## Proof

**Given:** The vectors, coordinate spaces and map in the Statement.

**Goal:** Prove complex-linearity, uniqueness, isometry and the coefficient identities.

1.1 The substitution $j=m+4$ sends magnetic labels $-4,2,-2,4$ to $0,6,2,8$. Reading the two displayed vectors in the orthonormal basis gives exactly the listed arrays, including the negative coefficient at $j=8$. Their supports $\{0,6\}$ and $\{2,8\}$ are disjoint, so every summand of $\sum\alpha_j\beta_j$ vanishes. [F1, algebra]

1.2 Each $x\in\mathbb C^2$ has unique coordinates $x=z_0e_0+z_1e_1$, so the stated formula defines $V$ on its entire domain. If $y=w_0e_0+w_1e_1$ and $a,b\in\mathbb C$, then $V(ax+by)=(az_0+bw_0)u_0+(az_1+bw_1)u_1=aVx+bVy$. Thus $V$ is complex-linear. Any other complex-linear map $W$ with the same two basis values satisfies $Wx=z_0We_0+z_1We_1=z_0u_0+z_1u_1=Vx$, proving uniqueness. [F2, F3, given, algebra]

2.1 The squared norm of each column is $1/3+2/3=1$, and their inner product is zero by disjoint support. Therefore $\sum_{j=0}^8\alpha_j^2=\sum_{j=0}^8\beta_j^2=1$. The conjugate-transpose product of the two-column matrix with itself has these two sums on the diagonal and zero off the diagonal, so $V^*V=I_2$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 For arbitrary $x=z_0e_0+z_1e_1$, the four supported coordinates give $\|Vx\|^2=|z_0|^2(1/3+2/3)+|z_1|^2(2/3+1/3)=|z_0|^2+|z_1|^2=\|x\|^2$. Taking nonnegative square roots proves norm preservation, hence the stated isometry. Together with steps 1.1 and 2.1 this proves all three coefficient identities. [F1, F3, step 1.1, step 1.2, step 2.1, algebra] ∎
