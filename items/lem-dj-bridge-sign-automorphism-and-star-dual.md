---
id: lem-dj-bridge-sign-automorphism-and-star-dual
kind: lemma
title: "The Hecke sign automorphism, pullback and contragredient dual"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-dj-bridge-row-column-permutation-modules-and-polytabloids, lem-dj-bridge-row-permutation-module-standard-action, lem-hom-from-a-finite-free-module, def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke algebras and Schur algebras of the symmetric group, author-hosted prepublication manuscript, 79 PDF pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, printed pp. 18-27 (PDF pp. 24-33): Lemma 3.2 and Corollary 3.4 for the row module, the Warning after Corollary 3.19 (printed p. 25) on the sign twist, and the Notes on Chapter 3, Notes 3-4 (printed pp. 34-35) recording theta(x_lambda) = q^a y_lambda for some integer a; the exact exponent a = ell(w_0(S_lambda)) is derived locally in Proof 3.1."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1 (survey), 66 PDF pages"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 5.3, Remark 5.5 (PDF p. 24) and the duality conventions there: the sign twist and the conjugate-sign dictionary, used only as orientation for the q = 1 clause of this lemma."
    - title: "Alexander S. Kleshchev, Andrew Mathas, Arun Ram, Universal graded Specht modules for cyclotomic Hecke algebras, author-hosted Sydney preprint, 44 PDF pages"
      url: "https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2011/kleshchev-8.pdf"
      locator: "Section 3.3, equation (3.14), PDF p. 8: the KLR sign isomorphism sends e(i) to e(-i), y_r to -y_r and psi_s to -psi_s. This is an analogy only; it does not state the ordinary Hecke-generator formula. For the latter see Kleshchev, arXiv:0909.4844, Section 11.5, PDF p. 54, T_r mapped to -T_r + xi - 1, also proved locally here."
---

## Statement

For every commutative ring $R$ and $q\in R^\times$:

1. $\theta(T_i):=(q-1)-T_i=-qT_i^{-1}$ extends uniquely to an involutive
$R$-algebra automorphism $\theta$ of $H=H_{R,q}(S_n)$, with
$\theta(T_w)=(-q)^{\ell(w)}T_{w^{-1}}^{-1}$; $\theta$ commutes with the star
anti-involution $*$ and is compatible with every base change.

2. For a right $H$-module $M$, the pullback $M^\theta$ (same underlying
$R$-module, action $m\cdot h:=m\theta(h)$) is a right $H$-module; $(-)^\theta$
is exact, preserves submodules, quotients, finite composition multiplicities and
simplicity, and $(M^\theta)^\theta=M$.

3. The star-contragredient $M^\circ:=\operatorname{Hom}_R(M,R)$ with
$(f\cdot h)(m):=f(mh^*)$ is a right $H$-module; for finite free $M$ it is finite
free of the same rank, $(-)^\circ$ commutes with base change, and
$(M^\theta)^\circ=(M^\circ)^\theta$.

4. For every partition $\lambda\vdash n$, if $w_0(S_\lambda)$ is the longest
element of the row subgroup, then
$$\theta(x_\lambda)=q^{\ell(w_0(S_\lambda))}y_\lambda,\qquad \theta(y_\lambda)=q^{-\ell(w_0(S_\lambda))}x_\lambda.$$
In particular $\theta(x_\lambda)$ and $y_\lambda$ differ by the unit
$q^{\ell(w_0(S_\lambda))}$, and this unit factor must be carried through every
form comparison. At $q=1$, $\theta$ is the pullback along the sign automorphism
$w\mapsto\operatorname{sgn}(w)w$ of $R[S_n]$.

No choice principle is used.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^\times$, $n\ge0$, the Hecke algebra $H=H_{R,q}(S_n)$ with generators $T_i$, standard basis $\{T_w\}$ and star anti-involution $*$, a partition $\lambda\vdash n$ with row subgroup $S_\lambda$ and its longest element $w_0(S_\lambda)$ (of length $N:=\ell(w_0(S_\lambda))$), and the elements $x_\lambda,y_\lambda$ of [[def-dj-bridge-row-column-permutation-modules-and-polytabloids]].

[F1] In $H$ the relations $(T_i-q)(T_i+1)=0$, the braid relations and the distant commutations hold, $\{T_w\}$ is an $R$-basis, $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$ and $T_wT_i=(q-1)T_w+qT_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$; the same rule holds on the left, $T_iT_w=T_{s_iw}$ respectively $T_iT_w=(q-1)T_w+qT_{s_iw}$. Moreover $T_i^{-1}=q^{-1}(T_i-(q-1))$ ([[def-generic-type-a-hecke-algebra]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] $*$ is an $R$-algebra anti-automorphism with $T_i^*=T_i$ and $T_w^*=T_{w^{-1}}$; the generators $T_i$ generate $H$ as an $R$-algebra ([[def-dj-bridge-row-column-permutation-modules-and-polytabloids]]).

[F3] $x_\lambda T_w=q^{\ell(w)}x_\lambda$ and $T_wx_\lambda=q^{\ell(w)}x_\lambda$ for $w\in S_\lambda$, and $x_\lambda^*=x_\lambda$ ([[lem-dj-bridge-row-permutation-module-standard-action]]).

[F4] For a commutative ring $R$ and $n\in\mathbb N$ the map $\operatorname{Hom}_R(R^n,N)\to N^n$, $f\mapsto(f(e_1),\dots,f(e_n))$, is an isomorphism of $R$-modules ([[lem-hom-from-a-finite-free-module]]).

[F5] The specialization construction: $H_{R,q}(S_n)$ is the base change $R\otimes_AH_v(n)$ along $v\mapsto q$, and all formulas with coefficients in $\mathbb Z[q^{\pm1}]$ specialize ([[def-generic-type-a-hecke-algebra]]).

## Proof

**Proof technique:** direct.

1.1 **The automorphism and its first properties.** Put $\theta(T_i):=(q-1)-T_i$. Since $T_i^{-1}=q^{-1}(T_i-(q-1))$ by [F1], one has $\theta(T_i)=-qT_i^{-1}$. The assignment satisfies the Hecke relations: $\theta(T_i)^2=(q-1)^2-2(q-1)T_i+T_i^2=(q-1)^2-2(q-1)T_i+(q-1)T_i+q=(q-1)\theta(T_i)+q$; the braid relation holds because $\theta(T_i)=-qT_i^{-1}$ multiplies every generator by the same scalar $-q$, and inverses satisfy the braid relations; the distant commutation holds similarly, and the scalar squares cancel. Since $H$ is presented by these relations, the assignment extends uniquely to an $R$-algebra endomorphism $\theta$ of $H$; applying it twice fixes each generator, so $\theta^2=\mathrm{id}_H$ by [F2] and $\theta$ is an involutive automorphism. For a reduced word $w=s_{i_1}\cdots s_{i_\ell}$ one gets $\theta(T_w)=(-q)^\ell T_{i_1}^{-1}\cdots T_{i_\ell}^{-1}=(-q)^{\ell(w)}T_{w^{-1}}^{-1}$, and $\theta$ commutes with $*$ because both sides of $\theta(T_w^*)=(-q)^{\ell(w)}T_w^{-1}$ and $\theta(T_w)^*=(-q)^{\ell(w)}T_{w^{-1}}^{-*}=(-q)^{\ell(w)}T_w^{-1}$ agree. All generator images have coefficients in $\mathbb Z[q^{\pm1}]$, so $\theta$ is compatible with base change by [F5]. [F1, F2, F5, algebra]

1.2 **Pullback of modules.** If $M$ is a right $H$-module, then $M^\theta$ with $m\cdot h:=m\theta(h)$ is a right $H$-module, because $(m\cdot h)\cdot k=m\theta(h)\theta(k)=m\theta(hk)=m\cdot(hk)$. Since $\theta$ is an involutive automorphism, the assignments $M\mapsto M^\theta$ on modules and $N\mapsto N$ on underlying $R$-modules are inverse bijections on submodules: a subset $N\subseteq M$ is closed under the old action if and only if it is closed under the new one, since $\theta$ is bijective and $\theta(H)=H$. Hence $(-)^\theta$ is exact, preserves submodules and quotients, and $(M^\theta)^\theta=M$; it also carries simple modules to simple modules and preserves the length of finite composition series with multiplicities, because the two module structures have exactly the same submodule lattice. [F2, algebra]

2.1 **Contragredient modules.** For a right $H$-module $M$, put $M^\circ:=\operatorname{Hom}_R(M,R)$ with $(f\cdot h)(m):=f(mh^*)$. Then $((f\cdot h)\cdot k)(m)=f(mk^*h^*)=f(m(hk)^*)$ by [F2], so $f\cdot(hk)=(f\cdot h)\cdot k$ and $M^\circ$ is a right $H$-module. If $M\cong R^r$ is finite free, then $M^\circ\cong R^r$ by [F4] applied with $N=R$, and the dual-basis identification is natural in $R$, so $(-)^\circ$ commutes with base change. Finally $(M^\theta)^\circ=(M^\circ)^\theta$: both have underlying module $\operatorname{Hom}_R(M,R)$, and for the two actions one computes $(f\cdot h)(m)=f(m\theta(h^*))$ for the first and $(f\cdot h)(m)=f(m\theta(h)^*)=f(m\theta(h^*))$ for the second, using that $\theta$ commutes with $*$ by step 1.1. [step 1.1, F2, F4, algebra]

2.2 **The common eigenspace.** Let $H_\lambda$ be the $R$-span of $\{T_w:w\in S_\lambda\}$, the subalgebra generated by the $T_i$ with $s_i\in S_\lambda$; it is $\theta$-stable because $\theta(T_i)=(q-1)-T_i\in H_\lambda$. The element $\theta(x_\lambda)$ lies in $H_\lambda$ and satisfies $T_i\theta(x_\lambda)=\theta(\theta(T_i)x_\lambda)=\theta(((q-1)-T_i)x_\lambda)=\theta((q-1)x_\lambda-qx_\lambda)=-\theta(x_\lambda)$ for every generator $T_i$ of $S_\lambda$, by [F3]; so it is a common left eigenvector for eigenvalue $-1$. Conversely let $a=\sum_{w\in S_\lambda}a_wT_w\in H_\lambda$ satisfy $T_ia=-a$ for all these generators. Comparing in the expansion $T_ia=\sum_wa_wT_iT_w$, using the left multiplication rule of [F1], the coefficient of $T_v$ equals $qa_{s_iv}$ when $\ell(s_iv)=\ell(v)+1$ and equals $(q-1)a_v+a_{s_iv}$ when $\ell(s_iv)=\ell(v)-1$, and it must equal $-a_v$; the first case gives $a_{s_iv}=-q^{-1}a_v$, and the second gives the same relation with the roles of $v$ and $s_iv$ exchanged. Hence $a_{s_iu}=-q^{-1}a_u$ whenever $\ell(s_iu)=\ell(u)+1$. Every nonidentity $w\in S_\lambda$ is a length-increasing product of generators of $S_\lambda$: the permutation $w^{-1}$ restricted to some row block $B_r$ is not the identity, hence has an adjacent descent, which exhibits a generator $s_i$ of $S_\lambda$ with $\ell(s_iw)=\ell(w)-1$. Iterating, $a_w=(-q)^{-\ell(w)}a_1$ for all $w\in S_\lambda$, so $a=a_1y_\lambda$: the common eigenspace is exactly the free line $Ry_\lambda$, and it contains $\theta(x_\lambda)$. [step 1.1, F1, F3, algebra]

2.3 **The case $q=1$.** At $q=1$ the quadratic relation is $T_i^2=1$, so $T_{w^{-1}}^{-1}=T_w$ and step 1.1 gives $\theta(T_w)=(-1)^{\ell(w)}T_w=\operatorname{sgn}(w)T_w$. The relations $T_i^2=1$, braid and distant commutation are the Coxeter relations of the adjacent transpositions of $S_n$, so the specialization $H_{R,1}(S_n)$ is the group algebra $R[S_n]$ with $T_w$ the group basis element $w$; the displayed identity then says that $\theta$ is the pullback along the sign automorphism $w\mapsto\operatorname{sgn}(w)w$. For $N=0$, as in the shapes $\varnothing$ and $(1^n)$, the unit below is $q^0=1$. [step 1.1, F5, algebra]

3.1 **The unit.** By step 2.2 write $\theta(x_\lambda)=c\,y_\lambda$ with $c\in R$. In the expansion $\theta(T_w)=\prod_j\theta(T_{i_j})=\prod_j((q-1)-T_{i_j})$ of a reduced word, every term other than the full product of the $-T_{i_j}$ has fewer than $\ell(w)$ generator factors and so cannot contribute to the standard basis element of length $N$; hence the coefficient of $T_{w_0(S_\lambda)}$ in $\theta(x_\lambda)=\sum_{w\in S_\lambda}\theta(T_w)$ is $(-1)^N$, the contribution of $w=w_0(S_\lambda)$ alone. In $c\,y_\lambda$ the coefficient of $T_{w_0(S_\lambda)}$ is $c(-q)^{-N}$, so $c=(-1)^N(-q)^N=q^N$. Therefore $\theta(x_\lambda)=q^Ny_\lambda$, and applying the involution $\theta$ and using $\theta(q^N)=q^N$ gives $\theta(y_\lambda)=q^{-N}x_\lambda$. [step 2.2, step 1.1, F1, algebra]

4.1 Statements (1), (2), (3) and (4) are established by steps 1.1, 1.2, 2.1 and 3.1, with the $q=1$ clause in step 2.3 and the unit $q^{\ell(w_0(S_\lambda))}$ displayed in step 3.1. Only the presentation of $H$, inversion counts, the standard basis and finite free duality are used; no choice principle is used. [step 1.1, step 1.2, step 2.1, step 2.3, step 3.1] ∎
