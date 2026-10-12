---
id: thm-nrqm-composites-finite-partial-trace-and-schmidt
kind: theorem
domain: mathematics
title: "Finite partial trace, Schmidt decomposition and finite no-signalling"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-density-and-scalar-spectral-probability, thm-trace-of-ab-equals-trace-of-ba, def-trace-of-an-endomorphism, def-coordinate-column-and-matrix-of-a-linear-map, thm-singular-value-decomposition, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-spectral-resolution-and-polynomial-spectral-projections, def-self-adjoint-and-normal-endomorphism, def-non-negative-and-positive-operator, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  thm-singular-value-decomposition: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-spectral-resolution-and-polynomial-spectral-projections: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', §§1-3 pp. 1-12"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §6.1 pp. 105-111 and §6.3 pp. 121-128 (reduced states, nonunique mixtures)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Let $V,W$ be nonzero finite-dimensional complex inner product spaces with orthonormal bases $(e_1,\dots,e_m)$ of $V$ and $(f_1,\dots,f_n)$ of $W$, let $V\otimes W$ be their tensor product with the inner product of [[lem-nrqm-composites-hilbert-tensor-construction]], and let $\operatorname{tr}$ denote the basis-independent trace of an endomorphism ([[def-trace-of-an-endomorphism]]).

(a) For every endomorphism $R$ of $V\otimes W$ there is a unique endomorphism $\operatorname{Tr}_W R$ of $V$ with

$$\operatorname{tr}\bigl((\operatorname{Tr}_WR)A\bigr)=\operatorname{tr}\bigl(R(A\otimes I_W)\bigr)\qquad\text{for every }A\in\operatorname{End}(V),$$

namely $\operatorname{Tr}_WR=\sum_{j=1}^n(I_V\otimes\varphi_j)\circ R\circ(I_V\otimes\iota_j)$, where $\iota_j(v)=v\otimes f_j$ and $\varphi_j(x\otimes w)=\langle w,f_j\rangle x$; it does not depend on the orthonormal basis $(f_j)$ of $W$, and the analogous definition gives $\operatorname{Tr}_V R$ with $\operatorname{tr}((\operatorname{Tr}_VR)B)=\operatorname{tr}(R(I_V\otimes B))$.

(b) $\operatorname{Tr}_W$ is linear, positive (it maps positive endomorphisms to positive endomorphisms) and trace preserving on density matrices: if $R\ge0$ and $\operatorname{tr}R=1$ then $\operatorname{Tr}_WR\ge0$ and $\operatorname{tr}\operatorname{Tr}_WR=1$; and $\operatorname{Tr}_W T_{\Psi,\Psi}=CC^*$ for every $\Psi\in V\otimes W$, where $C:W\to V$ is the coefficient map determined by $\Psi=\sum_jCf_j\otimes f_j$.

(c) *Schmidt decomposition.* Every $\Psi\in V\otimes W$ admits an expansion

$$\Psi=\sum_{r=1}^{k}s_r\,v_r\otimes u_r,$$

with $k\le\min(m,n)$, orthonormal families $(v_r)\subseteq V$, $(u_r)\subseteq W$ and $s_1\ge\cdots\ge s_k>0$ uniquely determined by $\Psi$ as the positive singular values of the coefficient map; moreover $\|\Psi\|^2=\sum_rs_r^2$. For $\|\Psi\|=1$ the reduced density $\rho=\operatorname{Tr}_W T_{\Psi,\Psi}$ satisfies $\operatorname{tr}\rho^2=\sum_rs_r^4$, and $\operatorname{tr}\rho^2=1$ holds exactly when $k=1$, i.e. exactly when $\Psi$ is a product vector; mixed-state separability is not decided by this criterion.

(d) *Finite nonselective no-signalling.* If $(M_a)_{a=1}^p$ are endomorphisms of $W$ with $\sum_aM_a^*M_a=I_W$ then for every endomorphism $R$ of $V\otimes W$

$$\operatorname{Tr}_W\Bigl(\sum_a(I_V\otimes M_a)R(I_V\otimes M_a^*)\Bigr)=\operatorname{Tr}_WR .$$

This is an identity for the specified finite local instrument; selective conditioning (dividing one summand by its nonzero trace) is not covered.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner product spaces $V,W$ with orthonormal bases $(e_i),(f_j)$; an endomorphism $R$ of $V\otimes W$; in (c) a vector $\Psi$; in (d) endomorphisms $M_a$ of $W$.

[F1] The tensor product $V\otimes W$ with the inner product $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle_V\langle v,v'\rangle_W$ is a finite-dimensional inner product space; $(e_i\otimes f_j)_{i,j}$ is an orthonormal basis, and every tensor has a unique expansion $\sum_{i,j}c_{ij}e_i\otimes f_j$ with $\|\Psi\|^2=\sum_{i,j}|c_{ij}|^2$; the inclusion and the bilinear relations are those of [[lem-nrqm-composites-hilbert-tensor-construction]].

[F2] For endomorphisms $S:V_1\to V_2$ and $T:V_2\to V_1$ of finite-dimensional spaces, $\operatorname{tr}(ST)=\operatorname{tr}(TS)$; the trace of an endomorphism is computed as the trace of its matrix in any ordered basis ([[thm-trace-of-ab-equals-trace-of-ba]], [[def-trace-of-an-endomorphism]], [[def-coordinate-column-and-matrix-of-a-linear-map]]).

[F3] Every linear map $C:W\to V$ of finite-dimensional inner product spaces has a singular value decomposition: orthonormal bases $(u_1,\dots,u_n)$ of $W$ and $(v_1,\dots,v_m)$ of $V$ and $s_1\ge\cdots\ge s_k>0$ with $Cw=\sum_{r=1}^ks_r\langle w,u_r\rangle v_r$ ([[thm-singular-value-decomposition]]); the positive numbers $s_r^2$ are the nonzero eigenvalues of $CC^*$, counted with multiplicity ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[thm-spectral-resolution-and-polynomial-spectral-projections]], [[def-self-adjoint-and-normal-endomorphism]]).

[F4] Non-negative means $\langle Tv,v\rangle\ge0$ for all $v$ ([[def-non-negative-and-positive-operator]]); every finite-dimensional inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

1.1 [Existence and uniqueness of the partial trace] Define $\operatorname{Tr}_WR:=\sum_{j=1}^n(I\otimes\varphi_j)R(I\otimes\iota_j)$, a linear endomorphism of $V$. Computed in the basis $(e_i\otimes f_j)$ and using [F2], the matrix of $(I\otimes\varphi_j)$ contracts the $W$-index into $f_j$, and the total matrix of $\operatorname{Tr}_WR$ has entries $(\operatorname{Tr}_WR)_{i i'}=\sum_jR_{ij,i'j}$; hence, with $(A)_{i'i''}$ the matrix of $A$, $\operatorname{tr}((\operatorname{Tr}_WR)A)=\sum_{i,i',j}R_{ij,i'j}A_{i'i}=\operatorname{tr}(R(A\otimes I_W))$. Uniqueness: if $S$ and $S'$ both satisfy the pairing identity, then $\operatorname{tr}((S-S')A)=0$ for all $A$; taking $A=T_{\alpha,\beta}$ (the rank-one endomorphism $v\mapsto\langle v,\beta\rangle\alpha$) for $\alpha,\beta$ ranging over a basis of $V$ and using [F1] and [F2] extracts every matrix entry of $S-S'$, so $S=S'$. Basis independence: the defining identity involves only the basis-independent trace [F2]; equivalently the formula with another orthonormal basis $(g_j)$ yields the same operator by the uniqueness just proved. [given, F1, F2, algebra]

2.1 [Positivity and trace preservation] If $R\ge0$ then for every $x\in V$, $\langle(\operatorname{Tr}_WR)x,x\rangle=\sum_j\langle R(x\otimes f_j),x\otimes f_j\rangle\ge0$ because $R\ge0$ [F4] and each summand is a nonnegative real; hence $\operatorname{Tr}_WR\ge0$. Taking $A=I_V$ in the defining identity gives $\operatorname{tr}\operatorname{Tr}_WR=\operatorname{tr}R$; consequently a density matrix $R$ (positive, $\operatorname{tr}R=1$, in the sense of [[lem-nrqm-composites-density-and-scalar-spectral-probability]]) has $\operatorname{Tr}_WR\ge0$ and trace $1$, so $(\operatorname{Tr}_W)$ maps density matrices to density matrices. [step 1.1, given, F4, algebra]

2.2 [Reduced state of a pure vector] Let $\Psi=\sum_{i,j}c_{ij}e_i\otimes f_j$ and define $C:W\to V$ by $Cf_j=\sum_ic_{ij}e_i$, so that $\Psi=\sum_jCf_j\otimes f_j$ by [F1] (insert the expansions of the $Cf_j$). For the rank-one endomorphism $T_{\Psi,\Psi}$ and $A\in\operatorname{End}(V)$, the defining identity of step 1.1 gives $\operatorname{tr}((\operatorname{Tr}_WT_{\Psi,\Psi})A)=\operatorname{tr}(T_{\Psi,\Psi}(A\otimes I))=\langle(A\otimes I)\Psi,\Psi\rangle$, and substituting the expansion yields $\sum_{i,i'}\langle A e_i,e_{i'}\rangle\sum_jc_{ij}\overline{c_{i'j}}=\operatorname{tr}(A\,CC^*)$, using the matrix of $CC^*$ in the basis $(e_i)$. Since this holds for all $A$ and the operator is determined by its pairings with all $A$ (step 1.1), $\operatorname{Tr}_WT_{\Psi,\Psi}=CC^*$. [step 1.1, F1, F2, algebra]

3.1 [Schmidt expansion] Apply the singular value decomposition [F3] to $C:W\to V$: $Cw=\sum_{r=1}^ks_r\langle w,u_r\rangle v_r$ with orthonormal $(u_r)\subseteq W$, $(v_r)\subseteq V$ and $s_r>0$. Then, expanding $C$ in the orthonormal basis $(u_r)$ extended by a basis of $\ker C$, $\Psi=\sum_jCf_j\otimes f_j=\sum_r s_rv_r\otimes u_r$: indeed $\sum_j\langle f_j,u_r\rangle f_j=u_r$ by the orthonormal expansion in $W$ [F4]. The coefficient $s_r$ is positive and the families are orthonormal, so this is a Schmidt expansion; it is determined by $\Psi$ through $C$ (step 2.2). By [F1] and orthonormality, $\|\Psi\|^2=\sum_rs_r^2$. [step 2.2, F1, F3, algebra]

4.1 [Purity and the product criterion] By steps 2.2 and 3.1, $\rho=\operatorname{Tr}_WT_{\Psi,\Psi}=CC^*$ has eigenvalues $s_r^2$ with multiplicity by [F3], so for $\|\Psi\|=1$ we have $\operatorname{tr}\rho^2=\sum_rs_r^4$ and $\operatorname{tr}\rho=1=\sum_rs_r^2$. Since all $s_r$ are positive, $\sum_rs_r^4\le(\sum_rs_r^2)^2=1$ with equality exactly when at most one $s_r$ is nonzero, i.e. $k=1$; and $k=1$ means $\Psi=s_1v_1\otimes u_1$ is a product vector, conversely a product vector has $C$ of rank one by step 2.2. This is the stated criterion; it concerns pure vectors only. [step 2.2, step 3.1, algebra]

5.1 [Finite nonselective no-signalling] Let $(M_a)$ satisfy $\sum_aM_a^*M_a=I_W$. For $A\in\operatorname{End}(V)$, using the defining identity of step 1.1 and the identity $(I\otimes M_a^*)(A\otimes I)=(A\otimes M_a^*)$ together with cyclicity [F2] inside the finite trace, $\operatorname{tr}\bigl((\operatorname{Tr}_W\sum_a(I\otimes M_a)R(I\otimes M_a^*))A\bigr)=\sum_a\operatorname{tr}\bigl(R(A\otimes M_a^*M_a)\bigr)=\operatorname{tr}\bigl(R(A\otimes\sum_aM_a^*M_a)\bigr)=\operatorname{tr}\bigl(R(A\otimes I)\bigr)=\operatorname{tr}\bigl((\operatorname{Tr}_WR)A\bigr)$; since this holds for every $A$, the uniqueness in step 1.1 gives $\operatorname{Tr}_W(\sum_a(I\otimes M_a)R(I\otimes M_a^*))=\operatorname{Tr}_WR$. [step 1.1, F2, algebra] ∎
