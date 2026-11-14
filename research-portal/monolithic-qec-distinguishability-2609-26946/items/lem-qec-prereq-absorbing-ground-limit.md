---
id: lem-qec-prereq-absorbing-ground-limit
kind: lemma
domain: mathematics
title: Finite absorbing lowering dynamics and replacement limit
status: published
origin: session
deps:
  - lem-qec-prereq-lowering-invariant-truncation
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-finite-gksl-channel-interface
  - def-qec-prereq-support-spectral-calculus
  - math:def-qc-choi-matrix
  - math:thm-termwise-differentiation-of-a-real-power-series
  - math:thm-derivative-of-exponential
  - math:thm-algebra-of-derivatives
  - math:thm-chain-rule
  - math:def-operator-norm
  - math:cor-mean-value-theorem
  - math:thm-exponential-beats-every-polynomial
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  lem-qec-prereq-lowering-invariant-truncation: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  def-qec-prereq-support-spectral-calculus: mathematical-premise
  math:def-qc-choi-matrix: mathematical-premise
  math:thm-termwise-differentiation-of-a-real-power-series: mathematical-premise
  math:thm-derivative-of-exponential: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  math:thm-chain-rule: mathematical-premise
  math:def-operator-norm: mathematical-premise
  math:cor-mean-value-theorem: mathematical-premise
  math:thm-exponential-beats-every-polynomial: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let $V=\bigoplus_{j=0}^{J}V_j$ be a finite-dimensional complex inner-product space with an orthogonal grading, $J\geq0$, and $V_0=\mathbb C g$ for a unit vector $g$. Let $P_j$ be the orthogonal projection onto $V_j$. Let $H=H^\dagger$ preserve every block, and let finitely many linear maps $L_a$ satisfy $L_aV_j\subseteq V_{j-1}$, with $V_{-1}=\{0\}$. Define $R=\sum_aL_a^\dagger L_a$ and assume that, for some $r_*>0$, $P_jRP_j\geq r_*P_j$ for every $j\geq1$, where the inequality means that the difference has nonnegative quadratic form. This is a uniform lower bound on the total exit rate of every vector in each excited block.

For $t\geq0$ let $\mathcal N_t=e^{t\mathcal L}$, where $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$. Then $\mathcal N_t$ converges as $t\to\infty$ to the replacement channel $\mathcal R(X)=\operatorname{Tr}(X)|g\rangle\langle g|$, in the induced norm of the entrywise $\ell^1$ matrix norm in any fixed orthonormal basis. In particular, every initial density operator has ground population tending to one and all excited populations and ground–excited coherences tending to zero. The stated rate bound excludes a nonzero excited vector annihilated by all jumps. Here, in the chosen orthonormal basis, $\|X\|_{\mathrm{ent},1}=\sum_{k,l}|X_{kl}|$, and the induced norm of a linear map $T$ on operators is $\|T\|_{\mathrm{ent},1\to\mathrm{ent},1}=\sup_{\|X\|_{\mathrm{ent},1}\leq1}\|T(X)\|_{\mathrm{ent},1}$. The norm axioms and boundedness of every such $T$ are verified in step 4.1.

If $d=\dim V$ and $(e_k)_{k=1}^d$ is any orthonormal basis, $\mathcal R$ has Kraus operators $K_k=|g\rangle\langle e_k|$ and its input-first, unnormalized Choi matrix has rank $d$; hence $d$ is also the minimum Kraus number.

## Facts & Assumptions

**Given:** The finite orthogonal grading, operators and lower bound in the Statement. A density operator is a positive semidefinite operator of trace one.

**Goal:** Prove the population and channel limits and the asserted Kraus and Choi properties.

[F1] The lowering supplier gives the finite graded generator and shows that each lower cutoff is invariant under its exponential. [[lem-qec-prereq-lowering-invariant-truncation]]

[F2] For Hermitian $H$ and finitely many jumps on a finite-dimensional space, the displayed exponential is a completely positive trace-preserving linear map for every $t\geq0$. [[def-qec-prereq-finite-gksl-channel-interface]]

[F3] A finite-dimensional positive semidefinite operator has an orthonormal eigenbasis with nonnegative eigenvalues and a positive square root. [[def-qec-prereq-support-spectral-calculus]]

[F4] Real power series may be differentiated term by term inside their radius of convergence; the real exponential has derivative equal to itself, and the usual algebra rules apply to derivatives. [[math:thm-termwise-differentiation-of-a-real-power-series]] [[math:thm-derivative-of-exponential]] [[math:thm-algebra-of-derivatives]] The real chain rule gives $(f\circ h)'(t)=f'(h(t))h'(t)$ when $h$ is differentiable at $t$ and $f$ is differentiable at $h(t)$, with both points limit points of their respective domains. [[math:thm-chain-rule]]

[F5] The mean value theorem applies to a real function continuous on a closed interval and differentiable on its interior. For $c>0$, $e^{-ct}\to0$ as $t\to\infty$. [[math:cor-mean-value-theorem]] [[math:thm-exponential-beats-every-polynomial]]

[F6] In a complex inner-product space, $|\langle u,v\rangle|\leq\|u\|\|v\|$. [[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

[F7] The input-first Choi matrix is $\sum_{k,l}|e_k\rangle\langle e_l|\otimes\Phi(|e_k\rangle\langle e_l|)$. For a finite-dimensional channel, its Choi rank is its minimum Kraus number. [[math:def-qc-choi-matrix]] [[lem-qec-prereq-canonical-choi-weights]]

[F8] For a bounded linear map $T$ between normed spaces over the same scalar field, its operator norm is the finite supremum $\sup_{\|X\|\leq1}\|T(X)\|$. [[math:def-operator-norm]]

## Proof

1.1 If $J=0$, the space is one-dimensional, all jumps vanish and $H$ is scalar, so $\mathcal L=0$ and every operator already equals its trace times $|g\rangle\langle g|$. Assume henceforth $J\geq1$. Put $D=\sum_{j=0}^JjP_j$ and $Q=I-P_0$. The lowering relation gives $[D,L_a]=-L_a$, including on $V_0$, while $H$ and every $L_a^\dagger L_a$ preserve the blocks. The latter follows from orthogonality: for $u\in V_j$ and $v\in V_k$ with $j\ne k$, $\langle L_au,L_av\rangle=0$. Thus cyclicity of the finite trace gives $\operatorname{Tr}(D\mathcal L(X))=-\operatorname{Tr}(RX)$ for every $X$. The blockwise rate hypothesis implies $R\geq r_*Q$; also $Q\leq D\leq JQ$. [given, F1, algebra]

2.1 Let $\rho$ be a density operator and put $\rho_t=\mathcal N_t(\rho)$ and $m(t)=\operatorname{Tr}(D\rho_t)$. By [F2], $\rho_t$ is positive and has trace one. The convergent exponential series, differentiated entrywise using [F4], gives $\dot\rho_t=\mathcal L(\rho_t)$. By step 1.1, $m'(t)=-\operatorname{Tr}(R\rho_t)\leq-r_*\operatorname{Tr}(Q\rho_t)\leq-(r_*/J)m(t)$. The trace inequalities follow by diagonalizing the positive operator $\rho_t$ as in [F3] and applying the quadratic-form inequalities to its eigenvectors. Let $c=r_*/J>0$. The difference quotient of $t\mapsto ct$ equals $c$, and the exponential is differentiable on $\mathbb R$; hence the chain rule in [F4], applied on real domains, gives $(e^{ct})'=ce^{ct}$. The product rule in [F4] now gives $(e^{ct}m(t))'=e^{ct}(cm(t)+m'(t))\leq0$; [F5] therefore makes $e^{ct}m(t)$ nonincreasing on every finite interval. Hence $0\leq\operatorname{Tr}(Q\rho_t)\leq m(t)\leq m(0)e^{-ct}\leq Je^{-ct}$. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 Choose an orthonormal basis beginning with $g$ and continuing with vectors in the excited blocks. Write its matrix entries as $(\rho_t)_{ab}$. By [F3], $\rho_t$ has a positive square root; applying [F6] to its images of two basis vectors gives $| (\rho_t)_{ab} |^2\leq(\rho_t)_{aa}(\rho_t)_{bb}$. Every excited diagonal entry is between zero and $\operatorname{Tr}(Q\rho_t)$, and the ground entry is $1-\operatorname{Tr}(Q\rho_t)$. Step 2.1 and [F5] therefore show that every matrix entry of $\rho_t$ converges to the corresponding entry of $|g\rangle\langle g|$, including all off-diagonal entries. In particular all excited populations vanish and the ground population tends to one. [given, F3, F5, F6, step 2.1, algebra]

4.1 The entrywise function in the Statement is a norm: it vanishes exactly on the zero matrix, is absolutely homogeneous, and satisfies the triangle inequality by summing $|X_{kl}+Y_{kl}|\leq|X_{kl}|+|Y_{kl}|$. The rank-one operators $|e_k\rangle\langle e_l|$ form a basis of the operator space. Each diagonal unit is a density operator. For $k\ne l$, the polarization identity expresses $|e_k\rangle\langle e_l|$ as a fixed complex linear combination of the four rank-one positive operators formed from $e_k\pm e_l$ and $e_k\pm i e_l$; after division by their traces these are density operators. By linearity and step 3.1, $\mathcal N_t(E_{kl})\to\operatorname{Tr}(E_{kl})|g\rangle\langle g|$ entrywise for every matrix unit. For any linear map $T$ on this operator space, put $C_T=\max_{k,l}\|T(E_{kl})\|_{\mathrm{ent},1}$, a finite maximum. For $X=\sum_{k,l}x_{kl}E_{kl}$, linearity and the triangle inequality give $\|T(X)\|_{\mathrm{ent},1}\leq\sum_{k,l}|x_{kl}|\|T(E_{kl})\|_{\mathrm{ent},1}\leq C_T\|X\|_{\mathrm{ent},1}$. Thus $T$ is bounded, so the operator-norm definition in [F8] applies and gives $\|T\|_{\mathrm{ent},1\to\mathrm{ent},1}\leq C_T$. For $T=\mathcal N_t-\mathcal R$, each matrix-unit image tends entrywise to zero, so its finite sum of absolute entries tends to zero; the maximum over the finitely many pairs also tends to zero. This proves the asserted channel convergence. The same argument applies in any fixed orthonormal basis. [given, F2, F8, step 3.1, algebra]

5.1 For $K_k=|g\rangle\langle e_k|$, direct expansion gives $\sum_kK_kXK_k^\dagger=\operatorname{Tr}(X)|g\rangle\langle g|$ and $\sum_kK_k^\dagger K_k=I$. By [F7], the Choi matrix is $\sum_k|e_k\rangle\langle e_k|\otimes|g\rangle\langle g|=I\otimes|g\rangle\langle g|$, whose rank is $d$; [F7] gives the minimum Kraus number. Finally, if an excited vector $v$ is annihilated by every $L_a$, then $\langle v,Rv\rangle=0$, whereas step 1.1 gives $\langle v,Rv\rangle\geq r_*\|v\|^2$; hence $v=0$. Together with the $J=0$ case, this proves all claims. [given, F7, step 1.1, step 4.1, algebra] ∎
