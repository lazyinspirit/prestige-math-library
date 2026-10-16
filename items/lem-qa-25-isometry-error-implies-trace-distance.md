---
id: lem-qa-25-isometry-error-implies-trace-distance
kind: lemma
title: Clean-input isometry error bounds output trace distance
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-singular-value-decomposition
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
axiom_use: "None; all spaces and matrix decompositions are finite-dimensional."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, §7E, Theorem 7.70"
      url: "https://linear.axler.net/LADR4e.pdf"
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Let $V,W:H\to K\otimes E$ be linear isometries between finite-dimensional complex inner-product spaces, meaning $V^*V=W^*W=I_H$, and assume $\delta\ge0$ and $\|V-W\|_{\rm op}\le\delta$. For every nonzero finite-dimensional reference space $R$ and density matrix $\rho$ on $H\otimes R$ (a positive semidefinite matrix of trace one), define $V_R=V\otimes I_R$ and $W_R=W\otimes I_R$ on the ordered product bases. Define the partial trace by
$$(\operatorname{Tr}_E X)_{(k,r),(k',r')}=\sum_e X_{(k,e,r),(k',e,r')},$$
and define $\|X\|_1$ as the sum of singular values and $D(\sigma,\omega)=\tfrac12\|\sigma-\omega\|_1$. The output density matrices
$$\rho_V=(\operatorname{Tr}_E\otimes I_R)(V_R\rho V_R^*),\qquad \rho_W=(\operatorname{Tr}_E\otimes I_R)(W_R\rho W_R^*)$$
satisfy $D(\rho_V,\rho_W)\le\delta$. Tensor products use the ordered product orthonormal basis and product inner product; the displayed matrix formula fixes the partial-trace convention used here. For column vectors, $a^*$ denotes conjugate transpose and $aa^*$ the rank-one matrix with entries $a_i\overline{a_j}$.

## Facts & Assumptions

**Given:** The finite spaces, maps $V,W$, and density matrix $\rho$ in the Statement.

[F1] [[thm-singular-value-decomposition]]: finite maps have orthonormal singular bases; their operator norm is the largest singular value.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite self-adjoint endomorphism has an orthonormal eigenbasis with real eigenvalues.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Put $A=V-W$, and let $(r_j)$ be an orthonormal basis of $R$. By [F1], diagonalizing $A^*A$ in a right singular basis shows that $(A\otimes I_R)^*(A\otimes I_R)=A^*A\otimes I_R$ has the same largest eigenvalue as $A^*A$: its eigenvectors are the products of right singular vectors of $A$ with the $r_j$, and its eigenvalues are the corresponding squared singular values. Therefore $\|V_R-W_R\|_{\rm op}=\|A\otimes I_R\|_{\rm op}=\|A\|_{\rm op}\le\delta$. For every unit vector $\psi\in H\otimes R$, the vectors $a=V_R\psi$ and $b=W_R\psi$ have norm one and satisfy $\|a-b\|\le\delta$. [F1, given, algebra]

1.2 For $Z=V_R\rho V_R^*$, positivity follows from $y^*Zy=(V_R^*y)^*\rho(V_R^*y)\ge0$ for every $y$; the same holds with $W_R$. For a vector $z\in K\otimes R$, the entry-sum formula gives $z^*(\operatorname{Tr}_E\otimes I_R)Zz=\sum_e (I_K\otimes|e\rangle\otimes I_R\,z)^*Z(I_K\otimes|e\rangle\otimes I_R\,z)\ge0$, and likewise for $W_R$; hence both reduced outputs are positive. That formula also gives $\operatorname{tr}((\operatorname{Tr}_E\otimes I_R)Z)=\operatorname{tr}Z$. Since $V_R^*V_R=W_R^*W_R=I$, cyclicity of finite matrix trace gives $\operatorname{tr}Z=\operatorname{tr}\rho=1$ for both outputs. Thus $\rho_V,\rho_W$ are density matrices. [given, algebra]

2.1 In an orthonormal basis of $\operatorname{span}\{a,b\}$, write $b=za+s e_2$, where $z=a^*b$, $s=\sqrt{1-|z|^2}$, and $e_2\perp a$ is unit if $s>0$. The matrix of $aa^*-bb^*$ on this span is Hermitian, has trace zero and determinant $-s^2$, so its eigenvalues are $s,-s$; outside the span it is zero. Thus $\tfrac12\|aa^*-bb^*\|_1=s$. Also $s^2=1-|z|^2\le2-2\operatorname{Re}z=\|a-b\|^2$, because the difference of the right side and left side is $|1-z|^2$. This proves $D(aa^*,bb^*)\le\delta$ for every pure input, including $s=0$. [F1, F2, step 1.1, algebra]

2.2 Let $X$ be Hermitian on $K\otimes E\otimes R$, and set $Y=(\operatorname{Tr}_E\otimes I_R)X$. For a matrix $B$ on $K\otimes R$, define $\widetilde B$ on $K\otimes E\otimes R$ by applying $B$ to the $K,R$ coordinates and leaving the $E$ coordinate fixed. The entry-sum definition of partial trace gives $\operatorname{tr}(B^*Y)=\operatorname{tr}(\widetilde B^*X)$. Reordering the product basis from $K,E,R$ to $K,R,E$ conjugates $\widetilde B$ to $B\otimes I_E$, so $\|\widetilde B\|_{\rm op}=\|B\|_{\rm op}$ by the same singular-basis argument as in step 1.1. For any square matrix $X=U\Sigma V^*$, [F1] gives its singular value decomposition, and $|\operatorname{tr}(C^*X)|=|\operatorname{tr}(V^*C^*U\Sigma)|\le\|C\|_{\rm op}\sum_j\Sigma_{jj}=\|C\|_{\rm op}\|X\|_1,$ since every diagonal entry of a contraction has modulus at most one. Taking the supremum over $\|B\|_{\rm op}\le1$, and using the equality case $B=U_YV_Y^*$ in a singular value decomposition of $Y$, proves $\|Y\|_1\le\|X\|_1$. This dual formula also gives the triangle inequality and homogeneity for $\|\cdot\|_1$ by applying it to a sum and scalar multiple. [F1, given, step 1.1, algebra]

3.1 For a pure input $\rho=\psi\psi^*$, step 2.1 bounds the trace distance before discarding $E$, and step 2.2 shows the partial trace cannot increase the trace norm of the Hermitian difference. Hence the reduced output distance is at most $\delta$. For general positive trace-one $\rho$, [F2] gives a spectral decomposition $\rho=\sum_j p_j\psi_j\psi_j^*$ with $p_j\ge0$ and $\sum_jp_j=1$. The maps and partial trace are linear; the triangle inequality and homogeneity from step 2.2 therefore bound the reduced output distance by $\sum_jp_j\delta=\delta$. [F1, F2, step 2.1, step 1.2, step 2.2, algebra] ∎
