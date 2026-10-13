---
id: lem-nrqm-composites-finite-effects-and-instruments
aliases: [ nrqm-composites-finite-effects-and-instruments ]
kind: lemma
domain: mathematics
title: "Finite effects and instruments: normalization and non-determination of
  the update"
status: draft
origin: pipeline
dependency_level: 2
deps:
  [
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-non-negative-and-positive-operator,
    thm-complex-spectral-theorem-for-normal-endomorphisms,
    thm-spectral-resolution-and-polynomial-spectral-projections,
    def-functional-calculus-for-a-normal-endomorphism,
    def-self-adjoint-and-normal-endomorphism,
    def-adjoint-of-a-linear-map-between-inner-product-spaces,
    thm-trace-of-ab-equals-trace-of-ba,
    def-trace-of-an-endomorphism,
    def-hilbert-space,
    thm-hilbert-adjoint-properties,
    def-linear-isometry-and-orthogonal-or-unitary-operator,
    def-orthogonal-projection
  ]
dependency_roles:
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  thm-spectral-resolution-and-polynomial-spectral-projections: mathematical-premise
  def-functional-calculus-for-a-normal-endomorphism: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-hilbert-space: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  def-orthogonal-projection: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-half, Bras,
        Kets, and Operators' and Chapter 4 'Dirac's Bra and Ket Notation'"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/4de6d044fa9\
        d7e5b8998c5f8ca984a42_MIT8_05F13_Chap_04.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §1.4 p. 15
        and §6.3 pp. 121-128"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Let $H$ be a finite-dimensional complex Hilbert space of dimension $d\ge1$ ([[def-hilbert-space]]), with adjoints as in [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and the finite trace as in [[def-trace-of-an-endomorphism]]. Recall that an endomorphism $F$ is an **effect** when $F\ge0$ and $I-F\ge0$, i.e. $0\le F\le I$ in the quadratic-form order ([[def-non-negative-and-positive-operator]]).

(a) *Definitions.* A finite POVM is a finite family $(F_a)_{a=1}^p$, $p\ge1$, of effects with $\sum_aF_a=I$. An **instrument** here is a finite family $(M_{a,r})_{1\le a\le p,\,1\le r\le q_a}$ of endomorphisms of $H$, where each $q_a$ is a non-negative integer; its outcome operators and update maps are $F_a:=\sum_rM_{a,r}^*M_{a,r}$ and $I_a:\operatorname{End}(H)\to\operatorname{End}(H)$, $I_a(R):=\sum_rM_{a,r}RM_{a,r}^*$, with empty sums equal to zero. It is **normalized** when $\sum_{a,r}M_{a,r}^*M_{a,r}=I$. For a normalized instrument the $F_a$ are its **outcome effects**, as proved in (b); without normalization they need not be effects.

(b) If $(F_a)$ is a finite POVM and $\rho$ a density operator ([[lem-nrqm-composites-density-and-scalar-spectral-probability]]) then $p_a:=\operatorname{tr}(\rho F_a)\ge0$ and $\sum_ap_a=1$. If $(M_{a,r})$ is a normalized instrument then the $F_a$ form a finite POVM, $\operatorname{tr}I_a(\rho)=p_a$, each $I_a(\rho)$ is non-negative, and whenever $p_a>0$ the normalized update $I_a(\rho)/p_a$ is a density operator.

(c) *Ideal Lüders case.* For an orthogonal projection $P$ ([[def-orthogonal-projection]]) put $M_0=P$, $M_1=I-P$. Then $\sum_jM_j^*M_j=P+(I-P)=I$, the effects are $F_0=P$, $F_1=I-P$, and $I_j(\rho)=P\rho P$ or $(I-P)\rho(I-P)$.

(d) *Non-determination.* Effects alone do not determine the update: there are two normalized instruments on $\mathbb C^2$ with the same outcome effects $F_0=\operatorname{diag}(1,0)$, $F_1=\operatorname{diag}(0,1)$ whose updates differ on the same input.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space $H$; a density operator $\rho$; a finite POVM $(F_a)$; a normalized instrument $(M_{a,r})$; an orthogonal projection $P$.

[F2] A self-adjoint endomorphism $T$ is non-negative exactly when $\langle Tv,v\rangle\ge0$ for all $v$ ([[def-non-negative-and-positive-operator]]); its eigenvalues are then non-negative by evaluation on eigenvectors. For non-negative $\rho$, [F3] gives $(M\rho M^*)^*=M\rho M^*$, and the adjoint identity gives $\langle M\rho M^*x,x\rangle=\langle\rho M^*x,M^*x\rangle\ge0$, so $M\rho M^*$ is non-negative.

[F3] For endomorphisms $S,T$ of a finite-dimensional space, $\operatorname{tr}(ST)=\operatorname{tr}(TS)$ ([[thm-trace-of-ab-equals-trace-of-ba]], [[def-trace-of-an-endomorphism]]). The finite adjoint identities are justified directly: choose an orthonormal basis, available by applying [[thm-complex-spectral-theorem-for-normal-endomorphisms]] to $I$. If $A=(a_{ij})$ is an operator matrix, then $A^*=\overline A^{\mathsf T}$ satisfies the defining identity of [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] by expanding the two inner products in coordinates. Uniqueness follows because two adjoints $B,C$ give $\langle x,(B-C)y\rangle=0$ for all $x,y$, hence $(B-C)y=0$. Matrix conjugation and transposition now give $M^{**}=M$, $(AB)^*=B^*A^*$ and $(A+B)^*=A^*+B^*$. Thus these finite identities require no Countable Choice; the general Hilbert-space theorem [[thm-hilbert-adjoint-properties]] is not invoked.

[F4] A density operator means a self-adjoint positive trace-class $\rho$ with trace $1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]]), where positive means non-negative as in that supplier. Write $T_{u,v}x:=\langle x,v\rangle u$, with the inner product linear in its first argument, as in the same supplier. In the finite-dimensional $H$ used here, the finite-dimensional spectral theorem ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]) gives an orthonormal eigenbasis $u_1,\dots,u_d$ for the self-adjoint, hence normal, $\rho$. Put $w_n:=\langle\rho u_n,u_n\rangle\ge0$ by [F2]. The finite trace ([[def-trace-of-an-endomorphism]]) gives $\sum_{n=1}^dw_n=\operatorname{tr}\rho=1$, and expansion in this basis gives $\rho=\sum_{n=1}^dw_nT_{u_n,u_n}$. This finite argument uses no Countable Choice and does not invoke the general density expansion.

[F5] An endomorphism $U$ with $U^*U=I$ is a linear isometry; every orthogonal projection $P$ satisfies $P^2=P=P^*$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[def-orthogonal-projection]]).

## Proof

1.1 [POVM probabilities] By the finite-dimensional argument in [F4], $\rho=\sum_{n=1}^dw_nT_{u_n,u_n}$ with $(u_n)$ orthonormal and $\sum_nw_n=1$. Then $p_a=\operatorname{tr}(\rho F_a)=\sum_nw_n\langle F_au_n,u_n\rangle$ by linearity of the finite trace [F3], and each term is non-negative because $F_a\ge0$ [F2]; hence $p_a\ge0$. Summing over $a$ and using linearity, $\sum_ap_a=\sum_nw_n\langle(\sum_aF_a)u_n,u_n\rangle=\sum_nw_n=1$. [given, F2, F3, F4, algebra]

1.2 [Lüders instance] For $M_0=P$ and $M_1=I-P$ with $P^2=P=P^*$ [F5], $M_0^*M_0=P^2=P$ and $M_1^*M_1=(I-P)^2=I-P$, so $\sum_jM_j^*M_j=I$ and the effects are $F_0=P$, $F_1=I-P$; the updates are $I_0(\rho)=P\rho P$, $I_1(\rho)=(I-P)\rho(I-P)$. [given, F3, F5, algebra]

2.1 [Update traces and positivity] Let $F_a=\sum_rM_{a,r}^*M_{a,r}$. Then $\operatorname{tr}I_a(\rho)=\sum_r\operatorname{tr}(M_{a,r}\rho M_{a,r}^*)=\sum_r\operatorname{tr}(\rho M_{a,r}^*M_{a,r})=\operatorname{tr}(\rho F_a)=p_a$, by cyclicity [F3]. For each $r$, $(M_{a,r}\rho M_{a,r}^*)^*=M_{a,r}\rho M_{a,r}^*$ because $\rho=\rho^*$; hence $I_a(\rho)$ is self-adjoint. For $x\in H$, $\langle I_a(\rho)x,x\rangle=\sum_r\langle M_{a,r}\rho M_{a,r}^*x,x\rangle=\sum_r\langle\rho (M_{a,r}^*x),M_{a,r}^*x\rangle\ge0$ because $\rho\ge0$; thus $I_a(\rho)\ge0$. If $p_a>0$, then $I_a(\rho)/p_a$ has trace $1$ and is positive, hence is a density operator in the sense of [F4]. The effects of a normalized instrument form a POVM: each $M_{a,r}^*M_{a,r}$ is non-negative, and both $F_a$ and $I-F_a=\sum_{(b,r):b\ne a}M_{b,r}^*M_{b,r}$ are non-negative, so $0\le F_a\le I$. This is (b). [step 1.1, F2, F3, F4, algebra]

3.1 [Two instruments with equal effects] On $H=\mathbb C^2$ with orthonormal basis $(e_1,e_2)$ let $F_0=T_{e_1,e_1}$, $F_1=T_{e_2,e_2}$ and let $\sigma$ be the swap $\sigma e_1=e_2$, $\sigma e_2=e_1$, so that $\sigma^*\sigma=I$ by [F5]. Instrument A: $M_{0,1}:=F_0$, $M_{1,1}:=F_1$. Instrument B: $M_{0,1}:=\sigma F_0$, $M_{1,1}:=F_1$. Both are normalized: $F_0^*F_0+F_1^*F_1=F_0+F_1=I$, and $(\sigma F_0)^*(\sigma F_0)=F_0\sigma^*\sigma F_0=F_0^2=F_0$, so $F_1+F_0=I$. Their effect families coincide, but their updates differ on $\rho=\tfrac12I$: $I_0^A(\rho)=\tfrac12F_0=\tfrac12\operatorname{diag}(1,0)$ while $I_0^B(\rho)=\tfrac12\sigma F_0\sigma=\tfrac12\operatorname{diag}(0,1)$, by $\sigma T_{e_1,e_1}\sigma=T_{\sigma e_1,\sigma e_1}=T_{e_2,e_2}$. This is (d). [step 2.1, F3, F5, algebra] ∎
