---
id: lem-qec-prereq-isotropic-scalar-block-contract
kind: lemma
domain: mathematics
title: Rotational scalars on multiplicity-resolved spin blocks
status: draft
origin: session
deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - physics:prop-nrqm-orbital-and-spin-finite-spin-matrices
  - math:lem-exponential-series-of-a-bounded-operator
  - math:cor-inner-product-induces-a-norm
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:def-linear-map
  - math:def-operator-norm
  - math:lem-operator-norm-is-a-norm
  - math:lem-composition-operator-norm-inequality
  - physics:def-cm-special-orthogonal-group
dependency_roles:
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  physics:prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  math:lem-exponential-series-of-a-bounded-operator: mathematical-premise
  math:cor-inner-product-induces-a-norm: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  math:cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  math:def-linear-map: mathematical-premise
  math:def-operator-norm: mathematical-premise
  math:lem-operator-norm-is-a-norm: mathematical-premise
  math:lem-composition-operator-norm-inequality: mathematical-premise
  physics:def-cm-special-orthogonal-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $H$ be a finite direct sum over $\mathbb C$ of spin blocks $V_j$, with $n_j$ explicitly indexed copies of each occurring spin $j$. Write $e_{j,a,m}$ for magnetic label $m=-j,-j+1,\ldots,j$ in copy $a=1,\ldots,n_j$, and let $J_x,J_y,J_z,J_\pm$ act by the specified spin matrices on every copy. Give $H$ the sum of the block inner products, so these basis vectors are orthonormal, and equip it with the induced norm $\|\sum_{j,a,m}z_{j,a,m}e_{j,a,m}\|=(\sum_{j,a,m}|z_{j,a,m}|^2)^{1/2}$. Define the axis rotations $U_k(t)=\exp(-itJ_k)$ for $k=x,y,z$ and real $t$ by the operator exponential series.

If a complex-linear operator $T:H\to H$ commutes with all these axis rotations, then there are unique complex matrices $A^{(j)}=(A^{(j)}_{ba})_{b,a=1}^{n_j}$ such that $T e_{j,a,m}=\sum_{b=1}^{n_j}A^{(j)}_{ba}e_{j,b,m}$ for every $j,a,m$. Thus $T$ is the identity in the magnetic index and may mix copies of equal spin; in particular, on a spin occurring once it is a scalar multiple of the identity.

More generally, let $D_1,D_2,D_3,F:H\to H$ be complex-linear maps, and suppose a family of invertible complex-linear maps $U:H\to H$ includes all the axis rotations. For each $U$ suppose there is a real orthogonal $3\times3$ matrix $R$ such that $UD_iU^{-1}=\sum_{k=1}^3 R_{ki}D_k$ for $i=1,2,3$. If $F$ commutes with every such $U$, then $T=\sum_{i=1}^3D_iFD_i$ commutes with every such $U$ and has the block form above. An isotropic coefficient $\delta_{ij}$ in a contraction alone does not imply the covariance and commutation hypotheses just stated.

## Statement references

[[def-qec-prereq-spin-tensor-cg-conventions]]

[[math:cor-inner-product-induces-a-norm]]

[[math:lem-exponential-series-of-a-bounded-operator]]

[[math:def-linear-map]]

[[physics:def-cm-special-orthogonal-group]]

## Facts & Assumptions

**Given:** The finite indexed complex direct sum with its displayed norm, spin matrices and complex-linear operator $T:H\to H$, or the complex-linear maps $D_i,F:H\to H$ and family of invertible complex-linear maps $U:H\to H$, under the hypotheses of the Statement.

**Goal:** Establish the displayed block form and the conditional contraction conclusion.

[F1] On each copy $J_z e_{j,a,m}=m e_{j,a,m}$ and $J_-e_{j,a,m}=\sqrt{(j+m)(j-m+1)}e_{j,a,m-1}$, with the endpoint vector zero. The coefficient is nonzero for $m>-j$. The Casimir $C=J_x^2+J_y^2+J_z^2$ acts on that copy as $j(j+1)I$. [[def-qec-prereq-spin-tensor-cg-conventions]] [[physics:prop-nrqm-orbital-and-spin-finite-spin-matrices]]

[F2] The spin convention supplies the direct-sum complex inner product. Its induced length, displayed in the Statement, is a norm. Order the finite basis by $j$, then $a$, then $m$; the finite-dimensional completeness corollary therefore makes $H$ a complex Banach space. The boundedness corollary, with domain and codomain both $H$, makes every complex-linear endomorphism of $H$ bounded, including $T$ and $-iJ_k$. [[def-qec-prereq-spin-tensor-cg-conventions]] [[math:cor-inner-product-induces-a-norm]] [[math:cor-finite-dimensional-normed-spaces-are-banach]] [[math:cor-linear-maps-with-finite-dimensional-domain-are-bounded]]

[F3] For a bounded operator on a complex Banach space, the exponential series is norm differentiable and $(\exp(tA)-I)/t\to A$ as real $t\to0$. It defines invertible operators with $\exp(tA)^{-1}=\exp(-tA)$. By [F2] this applies to $A=-iJ_k$ on $H$. [[math:lem-exponential-series-of-a-bounded-operator]]

[F4] For bounded endomorphisms of $H$, use the induced operator norm $\|S\|_{\mathrm{op}}=\sup_{\|v\|\le1}\|Sv\|$. It is a norm, and composition satisfies $\|SB\|_{\mathrm{op}}\le\|S\|_{\mathrm{op}}\|B\|_{\mathrm{op}}$. These facts permit multiplication by a fixed bounded map in an operator-norm limit. [[math:def-operator-norm]] [[math:lem-operator-norm-is-a-norm]] [[math:lem-composition-operator-norm-inequality]]

[F5] All maps in the contraction act complex-linearly from $H$ to $H$. The inverse of an invertible complex-linear map is complex-linear: apply that map to $aU^{-1}x+bU^{-1}y$ and use its injectivity. Sums and compositions of these maps are complex-linear, and composition distributes over finite linear combinations by the defining linearity equation. [[math:def-linear-map]]

[F6] For a real $3\times3$ matrix, orthogonality means $R^{\mathsf T}R=I_3$. The orthogonal-group supplier also derives $R^{-1}=R^{\mathsf T}$ and $RR^{\mathsf T}=I_3$; in entries the latter equation is $\sum_{i=1}^3R_{ki}R_{\ell i}=\delta_{k\ell}$, where $\delta_{k\ell}=1$ for $k=\ell$ and $0$ otherwise. [[physics:def-cm-special-orthogonal-group]]

## Proof

1.1 Put $A=-iJ_k$ and $Q_k(t)=(U_k(t)-I)/t$ for $t\ne0$. Since $T$ commutes with $U_k(t)$, it commutes with $Q_k(t)$. By [F2] $T$ is bounded, and by [F3] $Q_k(t)\to A$ in operator norm. Thus $\|TA-AT\|_{\mathrm{op}}=\|T(A-Q_k(t))-(A-Q_k(t))T\|_{\mathrm{op}}\le2\|T\|_{\mathrm{op}}\|A-Q_k(t)\|_{\mathrm{op}}\to0$ by [F4]. Hence $[T,J_k]=0$ for $k=x,y,z$. Consequently $T$ commutes with $J_-=J_x-iJ_y$ and with $C$. [given, F2, F3, F4, algebra]

2.1 For a basis vector $e_{j,a,m}$, the equation $CTe_{j,a,m}=j(j+1)Te_{j,a,m}$ and the direct-sum basis expansion show that only spin labels $\ell$ satisfying $\ell(\ell+1)=j(j+1)$ can occur. As $j,\ell\ge0$, this equality implies $(\ell-j)(\ell+j+1)=0$, hence $\ell=j$. Commutation with $J_z$ similarly leaves only magnetic label $m$. Thus $Te_{j,a,m}=\sum_b c_{ba}^{(j,m)}e_{j,b,m}$. [F1, step 1.1, algebra]

3.1 For $m>-j$, applying $TJ_-=J_-T$ to $e_{j,a,m}$ and using the same nonzero ladder coefficient in every copy gives $c_{ba}^{(j,m-1)}=c_{ba}^{(j,m)}$ for all $a,b$. Iterating through the finite ladder, including the single-label case $j=0$, makes these coefficients independent of $m$. Their values are unique because the displayed vectors form a basis. For $n_j=1$ the resulting matrix is one complex scalar. [F1, step 2.1, algebra]

4.1 Under the additional contraction hypotheses, [F5] makes $T$ a complex-linear endomorphism of $H$. Conjugation distributes over the finite sum and compositions by [F5]; using $UFU^{-1}=F$ gives $UTU^{-1}=\sum_{i,k,\ell}R_{ki}R_{\ell i}D_kFD_\ell=\sum_kD_kFD_k=T$, since [F6] gives $\sum_iR_{ki}R_{\ell i}=\delta_{k\ell}$. The axis rotations belong to the family, so step 3.1 applies. The coefficient $\delta_{ij}$ by itself specifies only the summation: for example, take $D_1=J_z$, $D_2=D_3=0$, and $F=I$ on a spin-one block. The resulting $T=J_z^2$ has unequal eigenvalues on the magnetic basis and hence is not scalar, showing why covariance cannot be omitted. [given, F1, F5, F6, step 3.1, algebra] ∎
