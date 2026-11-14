---
id: lem-qec-prereq-dipole-strength-sum-contract
kind: lemma
domain: mathematics
title: Downward dipole coefficient normalization contract
status: published
origin: session
deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - physics:thm-nrqm-orbital-and-spin-tensor-spin-composition
  - def-qec-prereq-finite-operator-conventions
  - math:def-orthogonal-projection
  - math:def-trace-of-a-square-matrix
dependency_roles:
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  physics:thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:def-orthogonal-projection: mathematical-premise
  math:def-trace-of-a-square-matrix: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $J\geq1$ be an integer. In the ordered coupling $V_1\otimes V_J$, let $c_{m,q}=C^{J-1,m+q}_{1,q;J,m}$ for $m=-J,\ldots,J$ and $q=-1,0,1$, with $c_{m,q}=0$ when $|m+q|>J-1$. The coefficients are those of the normalized coupled basis, with any allowed common phase choice for the spin-$(J-1)$ summand. Then $\sum_{q=-1}^1|c_{m,q}|^2=(2J-1)/(2J+1)$ for every $m$. Equivalently, defining $T_q:V_J\to V_{J-1}$ by $T_q e_{J,m}=c_{m,q}e_{J-1,m+q}$, with an out-of-range output interpreted as zero, gives $\sum_{q=-1}^1T_q^\dagger T_q=((2J-1)/(2J+1))I_{V_J}$. The $J=0$ block is excluded.

## Facts & Assumptions

**Given:** An integer $J\geq1$, the ordered coupling $V_1\otimes V_J$, and the coefficients and maps in the Statement.

**Goal:** Prove the coefficient sum and the equivalent operator identity.

[F1] The spin blocks have orthonormal magnetic bases, with $J_z^{(J)}e_{J,m}=m e_{J,m}$ and $J_+^{(J)}e_{J,m}=\sqrt{(J-m)(J+m+1)}e_{J,m+1}$. The coupled coefficients are the product-basis coordinates of the normalized coupled vectors; their coupling order and common phase are specified in the Statement. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F2] The ordered product $V_1\otimes V_J$ is an orthogonal direct sum of invariant spin blocks. Its spin-$(J-1)$ block has dimension $2J-1$ and an orthonormal basis $v_M$, $M=-(J-1),\ldots,J-1$, of total $J_z$ eigenvectors of eigenvalue $M$. The total spin operators are $J_a^{(1)}\otimes I+I\otimes J_a^{(J)}$. [[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition]]

[F3] All matrix entries and products are in the specified orthonormal bases. For a map $T:H\to K$ between these finite complex coordinate spaces, $T^\dagger:K\to H$ is its adjoint, satisfying $\langle Tx,y\rangle_K=\langle x,T^\dagger y\rangle_H$ for the inner products linear in the first argument; its matrix is the conjugate transpose. The finite-coordinate construction in the supplier verifies this identity and supplies existence. [[def-qec-prereq-finite-operator-conventions]]

[F4] If $W$ is a subspace of a finite-dimensional inner-product space with orthogonal decomposition $W\oplus W^\perp$, its orthogonal projection takes $w+z$ to $w$ for $w\in W$ and $z\in W^\perp$. We regard this as an endomorphism of the ambient space by the inclusion of $W$. [[math:def-orthogonal-projection]]

[F5] The trace of a square matrix is the sum of its diagonal entries. Every trace below is taken in the specified magnetic or product basis. [[math:def-trace-of-a-square-matrix]]

## Proof

1.1 Let $W$ be the spin-$(J-1)$ block and let $P$ be its orthogonal projection, viewed as an endomorphism of $V_1\otimes V_J$. Thus $P(w+z)=w$ for $w\in W$ and $z\in W^\perp$. The block and its orthogonal complement are invariant under each self-adjoint total operator, so $P$ commutes with every total operator. Indeed, if $S$ is such an operator, both $PS(w+z)$ and $SP(w+z)$ equal $Sw$. Since $(v_M)_M$ is an orthonormal basis of $W$, taking inner products with each $v_M$ gives $Px=\sum_M\langle x,v_M\rangle v_M$. Define $A$ on $V_J$ by $A_{mn}=\sum_{q=-1}^1P_{(q,m),(q,n)}$ in the product basis. These finite matrix entries specify a linear endomorphism. [F1, F2, F3, F4, algebra]

2.1 Fix $a\in\{x,y,z\}$, and write $B=J_a^{(1)}$ and $D=J_a^{(J)}$. Expanding the first-factor contribution gives $\sum_q[P,B\otimes I]_{(q,m),(q,n)}=\sum_{q,r}(P_{(q,m),(r,n)}B_{rq}-B_{qr}P_{(r,m),(q,n)})=0$, because exchanging the finite indices $q,r$ in the second sum makes it identical to the first. The other contribution is $\sum_q[P,I\otimes D]_{(q,m),(q,n)}=\sum_k(A_{mk}D_{kn}-D_{mk}A_{kn})=[A,D]_{mn}$. Step 1.1 gives $[P,B\otimes I+I\otimes D]=0$, so $[A,J_a^{(J)}]=0$ for each $a$. [step 1.1, F1, F2, F3, algebra]

3.1 Since $A$ commutes with $J_z^{(J)}$, its entries between distinct magnetic labels vanish. Write $Ae_{J,m}=a_m e_{J,m}$. Commutation with $J_+^{(J)}=J_x^{(J)}+iJ_y^{(J)}$ and its nonzero ladder coefficient for $-J\leq m<J$ give $a_{m+1}=a_m$. Thus $A=aI_{V_J}$. Put $d_{M;q,m}=\langle v_M,e_{1,q}\otimes e_{J,m}\rangle$, the product-basis coordinate of $v_M$. The projection formula from step 1.1 gives $P_{(q,m),(q,m)}=\sum_M|d_{M;q,m}|^2$. Consequently the diagonal-sum definition of trace gives $\operatorname{tr}A=\sum_{m,q}P_{(q,m),(q,m)}=\operatorname{tr}P=\sum_M\sum_{q,m}|d_{M;q,m}|^2=\sum_M1=2J-1$, using normalization of each $v_M$. Also $\operatorname{tr}A=(2J+1)a$, hence $a=(2J-1)/(2J+1)$. No change of basis for the trace is required. [step 1.1, step 2.1, F1, F2, F3, F5, algebra]

4.1 Since $v_M$ has total magnetic label $M$, its product-basis coordinate $d_{M;q,m}$ vanishes unless $M=m+q$. Thus $P_{(q,m),(q,m)}$ is $|C^{J-1,m+q}_{1,q;J,m}|^2$ when $|m+q|\leq J-1$ and is zero otherwise. Therefore $\sum_q|c_{m,q}|^2=A_{mm}=(2J-1)/(2J+1)$. By the conjugate-transpose formula, $(T_q^\dagger T_q)_{mn}=\sum_{\ell=-(J-1)}^{J-1}\overline{(T_q)_{\ell m}}(T_q)_{\ell n}$. For fixed $q$, distinct $m$ give distinct output labels $m+q$, so this matrix is diagonal with entry $|c_{m,q}|^2$ at $m$; summing proves the operator identity. A common phase change of the coupled basis does not affect either identity. [step 3.1, F1, F2, F3, algebra] ∎
