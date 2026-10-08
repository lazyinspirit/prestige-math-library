---
id: lem-cg-orthogonal-wall-form-and-subspace-restriction
kind: lemma
title: "The Wall form of an orthogonal operator, subspace restriction, and the interval structure of the orthogonal reflection-length order"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: [cor-double-orthogonal-complement-and-dimension, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-cg-real-coxeter-form-and-reflection, def-cg-reflection-length-absolute-order-and-moved-space, def-linear-isometry-and-orthogonal-or-unitary-operator, def-orthogonal-projection, def-real-and-complex-inner-product-space, prop-adjoint-algebra, thm-cg-finite-type-positive-definite-criterion, thm-finite-dimensional-isometry-characterisations, thm-finite-dimensional-orthogonal-decomposition, thm-rank-nullity]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "T. Brady and C. Watt, Lattices in finite real reflection groups (arXiv:math/0501502)"
      url: https://arxiv.org/pdf/math/0501502
      locator: "Introduction and section 2 (printed pp. 1-3: reflection length, absolute order, moved and fixed spaces M(A), F(A), M(A)=F(A)^perp, the main result of [7], and notes (1)-(7)); the opening of section 3 through Note 3.5 (printed pp. 3-6); and the opening paragraphs of section 4 (printed pp. 8-9) with the A_3 intersection example"
    - title: "R. W. Carter, Conjugacy classes in the Weyl group, Compositio Mathematica 25 (1972) 1-59 (Numdam full text)"
      url: https://www.numdam.org/item/CM_1972__25_1_1_0.pdf
      locator: "Section 2 'Products of reflections', printed pp. 2-5: the root-system setup (i)-(iv) and Lemmas 1-5 with the proofs of Lemmas 2, 3 and 4"
dependency_level: 15
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(V,B)$ be a finite-dimensional real inner product space ([[def-real-and-complex-inner-product-space]]); on this page $V=\mathbb R^S$ with the positive definite Coxeter form $B$ of a Coxeter system of finite type ([[def-cg-real-coxeter-form-and-reflection]], [[thm-cg-finite-type-positive-definite-criterion]]), and $\mathrm O(V)$ is the group of $B$-preserving invertible linear maps ([[def-linear-isometry-and-orthogonal-or-unitary-operator]]). Let $M$, $F$ and $\le_{\mathrm O}$ be as in [[def-cg-reflection-length-absolute-order-and-moved-space]]. Then:

**(1) Basic identities.** For every $A\in\mathrm O(V)$ one has $F(A)=F(A^{-1})$, $M(A)=M(A^{-1})$, $M(A)=F(A)^\perp$, $V=M(A)\oplus F(A)$, $A(M(A))=M(A)$, $A(F(A))=F(A)$, and $(A-\mathrm{id})|_{M(A)}:M(A)\to M(A)$ is a bijection ([[cor-double-orthogonal-complement-and-dimension]], [[thm-rank-nullity]]). For all $X,Y\in\mathrm O(V)$, $M(XY)\subseteq M(X)+X\,M(Y)$ and hence $\dim M(XY)\le\dim M(X)+\dim M(Y)$.

**(2) The Wall form.** For $A\in\mathrm O(V)$ put

$$\chi_A(u,v):=B\bigl((A-\mathrm{id})|_{M(A)}^{-1}u,\ v\bigr)\qquad(u,v\in M(A)).$$

Then $\chi_A$ is a bilinear form on $M(A)$ satisfying

$$\chi_A(u,v)+\chi_A(v,u)=-B(u,v)\qquad(u,v\in M(A));$$

in particular $\chi_A$ is nondegenerate and its symmetric part is $-\tfrac12B|_{M(A)}$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[prop-adjoint-algebra]]).

**(3) Subspace restriction.** Let $A\in\mathrm O(V)$, let $U\subseteq M(A)$ be a subspace and let $\Pi_U:V\to U$ be the orthogonal projection ([[def-orthogonal-projection]], [[thm-finite-dimensional-orthogonal-decomposition]]). There is a unique $H_U\in\operatorname{End}(U)$ with $B(H_Uu,v)=\chi_A(u,v)$ for all $u,v\in U$, and it satisfies $H_U+H_U^*=-\mathrm{id}_U$, so that $H_U$ is invertible. Define $A_U\in\mathrm O(V)$ by $A_Uu=u+H_U^{-1}u$ for $u\in U$ and $A_U=\mathrm{id}$ on $U^\perp$. Then $M(A_U)=U$ and

$$(A_U-\mathrm{id})|_U^{-1}=H_U,\qquad H_Uu=\Pi_U\bigl((A-\mathrm{id})|_{M(A)}\bigr)^{-1}u\ \ (u\in U).$$

An element $A\in\mathrm O(V)$ is a reflection (that is, $\dim M(A)=1$) if and only if $A=\mathrm{id}-2\Pi_L$ for the line $L=M(A)$; in particular every line $L\subseteq V$ is the moved space of exactly one reflection of $\mathrm O(V)$ ([[thm-finite-dimensional-isometry-characterisations]]).

**(4) The restriction theorem.** For every subspace $U\subseteq M(A)$ one has $A_U\le_{\mathrm O}A$, that is $\dim M(A)=\dim U+\dim M(A_U^{-1}A)$; and for $U\subseteq U'\subseteq M(A)$ one has $(A_{U'})_U=A_U$, hence $A_U\le_{\mathrm O}A_{U'}$. Conversely every $B\in\mathrm O(V)$ with $B\le_{\mathrm O}A$ satisfies $M(B)\subseteq M(A)$, $\chi_A|_{M(B)}=\chi_B$ and $B=A_{M(B)}$. Consequently the assignment $U\mapsto A_U$ is a bijection from the set of subspaces of $M(A)$ onto $\{B\in\mathrm O(V):B\le_{\mathrm O}A\}$, with inverse $B\mapsto M(B)$, and it is an order isomorphism for inclusion of subspaces and $\le_{\mathrm O}$.

**(5) Rank-length equality and prefixes.** Let $A\in\mathrm O(V)$ and let $r_1,\dots,r_k\in\mathrm O(V)$ be reflections with $A=r_1r_2\cdots r_k$. Then $k\ge\dim M(A)$, and $A$ is a product of exactly $\dim M(A)$ reflections. Moreover $B\le_{\mathrm O}A$ if and only if there are a shortest factorization $A=r_1\cdots r_m$ (so $m=\dim M(A)$) and an index $k$ with $B=r_1\cdots r_k$.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $(V,B)$ with the positive definite Coxeter form of a finite-type Coxeter system, an element $A\in\mathrm O(V)$, and the moved space $M(A)=\operatorname{im}(A-\mathrm{id})$, the fixed space $F(A)=\ker(A-\mathrm{id})$ and the relation $\le_{\mathrm O}$ of [[def-cg-reflection-length-absolute-order-and-moved-space]].

[F1] For a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim V=\dim\ker T+\dim\operatorname{im}T$; in particular an injective endomorphism of a finite-dimensional vector space is bijective. [[thm-rank-nullity]]

[F2] For a subspace $W$ of a finite-dimensional inner product space, $V=W\oplus W^\perp$, $W^{\perp\perp}=W$ and $\dim W+\dim W^\perp=\dim V$. [[thm-finite-dimensional-orthogonal-decomposition]] [[cor-double-orthogonal-complement-and-dimension]]

[F3] The orthogonal projection $P_W:V\to W$ sends $v=w+z$ with $w\in W$, $z\in W^\perp$ to $P_Wv=w$; equivalently $P_Wv$ is the unique vector of $W$ with $v-P_Wv\in W^\perp$, and $P_Ww=w$ for every $w\in W$. The projection is linear: combining the unique decompositions of $x$ and $y$ gives $P_W(ax+by)=aP_Wx+bP_Wy$. [[def-orthogonal-projection]]

[F4] $A\in\mathrm O(V)$ means that $A$ is invertible and $B(Au,Av)=B(u,v)$ for all $u,v\in V$; equivalently $B(Au,v)=B(u,A^{-1}v)$ for all $u,v\in V$. [[def-linear-isometry-and-orthogonal-or-unitary-operator]] [[thm-finite-dimensional-isometry-characterisations]]

[F5] $B$ is symmetric and bilinear, and positive definite: $B(u,u)\ge0$ with $B(u,u)=0$ only for $u=0$; consequently $B$ is nondegenerate, so $B(x,y)=0$ for all $y\in V$ implies $x=0$, and the same holds for the restriction of $B$ to any subspace. [[def-real-and-complex-inner-product-space]] [[thm-cg-finite-type-positive-definite-criterion]]

[F6] $M(A)=\operatorname{im}(A-\mathrm{id})$, $F(A)=\ker(A-\mathrm{id})$ and $B\le_{\mathrm O}A$ holds if and only if $\dim M(A)=\dim M(B)+\dim M(B^{-1}A)$; no order property of $\le_{\mathrm O}$ is asserted by the definition. [[def-cg-reflection-length-absolute-order-and-moved-space]]

## Proof

**Proof technique:** direct.

1.1 For $y\in V$ one has $B((A-\mathrm{id})x,y)=B(x,(A^{-1}-\mathrm{id})y)$ for all $x\in V$ by [F4], so $y\in M(A)^\perp$ holds exactly when $(A^{-1}-\mathrm{id})y=0$ and hence exactly when $A^{-1}y=y$, that is, when $y\in F(A^{-1})$; thus $M(A)^\perp=F(A^{-1})$. Since $A^{-1}y=y$ holds exactly when $Ay=y$, one has $F(A^{-1})=F(A)$, and $A^{-1}-\mathrm{id}=-A^{-1}(A-\mathrm{id})$ shows $M(A^{-1})=M(A)$. Consequently $M(A)^\perp=F(A)$, and [F2] gives $M(A)=M(A)^{\perp\perp}=F(A)^\perp$, $V=M(A)\oplus F(A)$ and $\dim M(A)+\dim F(A)=\dim V$. Moreover $A(A-\mathrm{id})=(A-\mathrm{id})A$, so $A(M(A))=M(A)$; and $A(F(A))\subseteq F(A)$ with equality because $A$ is injective. [F2, F4, F5, algebra]

1.2 For $X,Y\in\mathrm O(V)$ the identity $XY-\mathrm{id}=(X-\mathrm{id})+X(Y-\mathrm{id})$ gives $M(XY)\subseteq M(X)+X\,M(Y)$; the invertible $X$ restricts to an injective map $M(Y)\to X\,M(Y)$, whose image therefore has dimension $\dim M(Y)$ by [F1]; consequently $\dim M(XY)\le\dim M(X)+\dim M(Y)$. [F1, F4, algebra]

2.1 By step 1.1 the direct sum $V=M(A)\oplus F(A)$ gives $F(A)\cap M(A)=\{0\}$, so the restriction $(A-\mathrm{id})|_{M(A)}:M(A)\to M(A)$, whose image lies in the $A$-stable space $M(A)$, has trivial kernel and is therefore injective; by [F1] it is bijective, and $S_A:=((A-\mathrm{id})|_{M(A)})^{-1}\in\mathrm{GL}(M(A))$ is defined. [step 1.1, F1]

2.2 Let $A\in\mathrm O(V)$ with $\dim M(A)=1$, put $L:=M(A)$ and let $\Pi_L$ be the orthogonal projection onto $L$ [F3]. By step 1.1 the line $L$ and the space $F(A)=L^\perp$ are $A$-stable, so $A$ fixes $L^\perp$ pointwise; for $0\ne u\in L$ one has $Au=cu$ with $c\in\mathbb R$, and since $A$ preserves $B$ by [F4] and $B(u,u)\ne0$ by [F5], $c^2B(u,u)=B(Au,Au)=B(u,u)$ forces $c^2=1$, while $c=1$ would put $u\in L\cap F(A)=\{0\}$; hence $c=-1$ and $A=\mathrm{id}-2\Pi_L$. Conversely if $L$ is a line then $A':=\mathrm{id}-2\Pi_L$ acts as $-1$ on $L$ and as the identity on $L^\perp$, so it preserves $B$ and is invertible, and $M(A')=L$ has dimension one; if $A'\in\mathrm O(V)$ is a reflection with $M(A')=L$, the first part applied to $A'$ gives $A'=\mathrm{id}-2\Pi_L$. Hence every line $L\subseteq V$ is the moved space of exactly one reflection of $\mathrm O(V)$, namely $\mathrm{id}-2\Pi_L$. [step 1.1, F3, F4, F5, algebra]

3.1 Applying step 2.1 to the orthogonal element $A^{-1}$, whose moved space is $M(A)$ by step 1.1, gives the bijection $T_A:=((A^{-1}-\mathrm{id})|_{M(A)})^{-1}:M(A)\to M(A)$. For $u,v\in M(A)$ put $w:=S_Au$ and $z:=T_Av$, so that $(A-\mathrm{id})w=u$ and $(A^{-1}-\mathrm{id})z=v$; then $B(S_Au,v)=B(w,(A^{-1}-\mathrm{id})z)=B(w,A^{-1}z)-B(w,z)=B(Aw,z)-B(w,z)=B((A-\mathrm{id})w,z)=B(u,T_Av)$, using [F4] and symmetry of $B$. Moreover $A^{-1}-\mathrm{id}=-A^{-1}(A-\mathrm{id})$ on the $A$-stable space $M(A)$, so the inverse there is $T_A=-S_AA$ and $S_A+T_A=S_A(\mathrm{id}-A)=-((A-\mathrm{id})|_{M(A)})^{-1}(A-\mathrm{id})|_{M(A)}=-\mathrm{id}_{M(A)}$. [step 1.1, step 2.1, F4, F5, algebra]

4.1 The Wall form $\chi_A(u,v)=B(S_Au,v)$ is bilinear on $M(A)$, and for $u,v\in M(A)$ the transpose identity of step 3.1 gives $B(S_Av,u)=B(v,T_Au)=B(T_Au,v)$, so $\chi_A(u,v)+\chi_A(v,u)=B(S_Au,v)+B(T_Au,v)=B((S_A+T_A)u,v)=-B(u,v)$. If $\chi_A(u,v)=0$ for all $v\in M(A)$, then $B(S_Au,\cdot)$ vanishes on $M(A)$ and, since $S_Au\in M(A)=F(A)^\perp$, also on $F(A)$, hence on $V$; by [F5] $S_Au=0$, and $S_A$ is injective, so $u=0$: the form $\chi_A$ is nondegenerate, and its symmetric part is $\tfrac12(\chi_A(u,v)+\chi_A(v,u))=-\tfrac12B(u,v)$ on $M(A)$. [step 1.1, step 3.1, F4, F5, algebra]

5.1 Let $U\subseteq M(A)$ and define $H_U:=\Pi_US_A|_U:U\to U$. For $u,v\in U$, [F3] gives $B(H_Uu,v)=B(S_Au,v)=\chi_A(u,v)$; if another operator has these pairings, its difference from $H_U$ pairs to zero with every $v\in U$, so it equals $H_U$ by [F5]. Define $H_U^t:=\Pi_UT_A|_U$, with $T_A$ from step 3.1. That step and [F3] give $B(H_U^tu,v)=B(T_Au,v)=B(u,S_Av)=B(u,H_Uv)$, so $H_U^t$ is the adjoint $H_U^*$ of [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]. Since $S_A+T_A=-\mathrm{id}_{M(A)}$, compression to $U$ gives $H_U+H_U^t=-\mathrm{id}_U$. If $H_Uu=0$, then $0=B(H_Uu,u)=\chi_A(u,u)=-\tfrac12B(u,u)$ by step 4.1, hence $u=0$; thus $H_U$ is injective and invertible by [F1], including when $U=0$. [step 3.1, step 4.1, F1, F3, F5, algebra]

6.1 Define $A_U\in\operatorname{End}(V)$ by $A_Uu=u+H_U^{-1}u$ for $u\in U$ and $A_U=\mathrm{id}$ on $U^\perp$; this is well defined and linear because $V=U\oplus U^\perp$ [F2]. Then $A_U-\mathrm{id}=H_U^{-1}\Pi_U$ has image $U$, so $M(A_U)=U$ and $(A_U-\mathrm{id})|_U^{-1}=H_U$. Put $T:=H_U^{-1}\in\mathrm{GL}(U)$ and $T^t:=(H_U^t)^{-1}$; inverting the transpose relation of step 5.1 shows that $T^t$ is the transpose of $T$, that is, $B(Tx,y)=B(x,T^ty)$ for all $x,y\in U$. Multiplying $H_U+H_U^t=-\mathrm{id}_U$ on the left by $T$ and on the right by $T^t$, and also on the left by $T^t$ and on the right by $T$, gives $T+T^t=-TT^t=-T^tT$, hence $(\mathrm{id}+T)(\mathrm{id}+T^t)=\mathrm{id}_U=(\mathrm{id}+T^t)(\mathrm{id}+T)$. Therefore $B(A_Uu,A_Uv)=B((\mathrm{id}+T^t)(\mathrm{id}+T)u,v)=B(u,v)$ for all $u,v\in U$, the transpose of $\mathrm{id}+T$ being $\mathrm{id}+T^t$; on $U^\perp$ the operator $A_U$ is the identity, and $U\perp U^\perp$, so $A_U$ preserves $B$ on $V$. If $A_Ux=0$, then $B(x,y)=B(A_Ux,A_Uy)=0$ for every $y\in V$, so $x=0$ by [F5] and $A_U$ is injective, hence invertible by [F1]: thus $A_U\in\mathrm O(V)$. [step 5.1, F1, F2, F5, algebra]

7.1 Fix $U\subseteq M(A)$ and let $A_U$ be as in step 6.1. In the direct sum $V=M(A)\oplus F(A)$ of step 1.1 write $x=m+f$; then $(A-A_U)x=(A-\mathrm{id})m-H_U^{-1}\Pi_Um$, so $x\in\ker(A-A_U)$ exactly when $(A-\mathrm{id})m=H_U^{-1}\Pi_Um$. With $u:=\Pi_Um\in U$ this equation reads $m=S_AH_U^{-1}u$, and it is consistent because $\Pi_US_A\Pi_U=H_U$ is step 5.1: the solutions are exactly the $x=S_AH_U^{-1}u+f$ with $u\in U$ and $f\in F(A)$ arbitrary. Hence $\ker(A-A_U)=S_AH_U^{-1}(U)\oplus F(A)$ has dimension $\dim U+\dim F(A)$, so $\operatorname{rank}(A-A_U)=\dim M(A)-\dim U$. Since $A_U^{-1}A-\mathrm{id}=A_U^{-1}(A-A_U)$, the space $M(A_U^{-1}A)$ is the image of $A-A_U$ under $A_U^{-1}$ and has the same dimension $\operatorname{rank}(A-A_U)$; therefore $\dim M(A)=\dim U+\dim M(A_U^{-1}A)$, that is, $A_U\le_{\mathrm O}A$ by [F6]. [step 1.1, step 5.1, step 6.1, F1, F6, algebra]

7.2 Let $B\le_{\mathrm O}A$ and put $C:=B^{-1}A$, so that $\dim M(A)=\dim M(B)+\dim M(C)$ by [F6]. Since $A-\mathrm{id}=(B-\mathrm{id})C+(C-\mathrm{id})$, one has $M(A)\subseteq M(B)+M(C)$, and comparing dimensions gives $M(A)=M(B)\oplus M(C)$; in particular $M(B)\subseteq M(A)$. Fix $w\in U:=M(B)$ and write $m:=S_Aw=m_B+m_C$ with $m_B\in M(B)$ and $m_C\in M(C)$; then $w=(A-\mathrm{id})m=(B-\mathrm{id})(Cm)+(C-\mathrm{id})m$ with $(B-\mathrm{id})(Cm)\in M(B)$ and $(C-\mathrm{id})m\in M(C)$, so comparing the two direct summands gives $Cm=m$ and $(B-\mathrm{id})m=w$. Hence $m-S_Bw\in F(B)=M(B)^\perp=U^\perp$, where the first equality uses step 1.1 applied to $B$; therefore for all $u,v\in U$ one has $\chi_A(u,v)=B(S_Au,v)=B(S_Bu,v)=\chi_B(u,v)$, because $S_Au-S_Bu\in U^\perp$. Thus the operator defined by $\chi_A$ on $U$ in step 5.1 is $H_U=S_B$, and the construction of step 6.1 for $A$ and $U$ gives $A_{M(B)}=\mathrm{id}+S_B^{-1}$ on $U$ and $\mathrm{id}$ on $U^\perp$, while $B=\mathrm{id}+S_B^{-1}$ on $U$ and $B=\mathrm{id}$ on $U^\perp=F(B)$ by step 1.1, so $B=A_{M(B)}$. [step 1.1, step 5.1, step 6.1, F6, algebra]

8.1 Let $U\subseteq U'\subseteq M(A)$ and apply step 6.1 to $A_{U'}$, whose moved space is $M(A_{U'})=U'$. Since $(A_{U'}-\mathrm{id})|_{U'}^{-1}=H_{U'}$, the Wall form of $A_{U'}$ on $U'$ is $\chi_{A_{U'}}(x,y)=B(H_{U'}x,y)$; for $x,y\in U$ this equals $B(\Pi_{U'}S_A\Pi_{U'}x,y)=B(S_Ax,y)=\chi_A(x,y)$ by step 5.1, because $\Pi_{U'}x=x$ and $y\in U\subseteq U'$. Hence the operator attached to $A_{U'}$ and $U$ by step 5.1 is again $H_U$, and the construction of step 6.1 gives $(A_{U'})_U=A_U$; applying step 7.1 with $A_{U'}$ in place of $A$ and the subspace $U\subseteq M(A_{U'})=U'$ then gives $A_U\le_{\mathrm O}A_{U'}$. [step 5.1, step 6.1, step 7.1, algebra]

8.2 Let $r_1,\dots,r_k\in\mathrm O(V)$ be reflections and $A=r_1r_2\cdots r_k$; since $\dim M(r_i)=1$ by step 2.2, the subadditivity of step 1.2 gives $\dim M(A)\le k$. Conversely every $A\in\mathrm O(V)$ is a product of exactly $\dim M(A)$ reflections: if $M(A)=0$ then $A=\mathrm{id}$ is the empty product, and otherwise one picks a line $L\subseteq M(A)$ and applies step 7.1 to $U:=L$, obtaining $\dim M(A_L^{-1}A)=\dim M(A)-1$, so by induction on $\dim M(A)$ the element $A_L^{-1}A$ is a product of $\dim M(A)-1$ reflections and $A=A_L\cdot(A_L^{-1}A)$ is a product of $\dim M(A)$ of them. [step 1.2, step 2.2, step 7.1]

9.1 The assignment $U\mapsto A_U$ from subspaces of $M(A)$ to $\{X\in\mathrm O(V):X\le_{\mathrm O}A\}$ is injective, because $A_U=A_{U'}$ forces $U=M(A_U)=M(A_{U'})=U'$ by step 6.1, and surjective by step 7.2; with inverse $X\mapsto M(X)$ it is a bijection. It is an order isomorphism: if $U\subseteq U'$ then $A_U\le_{\mathrm O}A_{U'}$ by step 8.1, and conversely $A_U\le_{\mathrm O}A_{U'}$ gives $U=M(A_U)\subseteq M(A_{U'})=U'$ by the inclusion clause of step 7.2. [step 6.1, step 7.2, step 8.1]

9.2 Suppose $A=r_1\cdots r_m$ with $m=\dim M(A)$ and $B=r_1\cdots r_k$; the $r_i$ are involutions by step 2.2, so $B^{-1}A=r_{k+1}\cdots r_m$, whence $\dim M(B)\le k$ and $\dim M(B^{-1}A)\le m-k$ by step 8.2, while $\dim M(A)\le\dim M(B)+\dim M(B^{-1}A)$ by step 1.2; both inequalities are therefore equalities and $B\le_{\mathrm O}A$ by [F6]. [step 1.2, step 2.2, step 8.2, F6, algebra]

10.1 Conversely, if $B\le_{\mathrm O}A$, write $B=r_1\cdots r_k$ with $k=\dim M(B)$ and $B^{-1}A=s_1\cdots s_l$ with $l=\dim M(B^{-1}A)$, both by the factorization clause of step 8.2; then $A=r_1\cdots r_ks_1\cdots s_l$ is a product of $k+l=\dim M(A)$ reflections by [F6], that is, a shortest factorization of $A$ by step 8.2, of which $B$ is the prefix of length $k$. [step 8.2, F6] ∎
