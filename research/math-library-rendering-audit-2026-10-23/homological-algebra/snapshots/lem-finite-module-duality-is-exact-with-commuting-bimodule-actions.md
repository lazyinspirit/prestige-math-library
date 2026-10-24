---
id: lem-finite-module-duality-is-exact-with-commuting-bimodule-actions
kind: lemma
title: "Finite module duality is exact with commuting bimodule actions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
justified_by: []
aliases: []
deps: [cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension, def-algebraic-dual-and-linear-functional, def-bimodule, def-dimension, def-dual-family-associated-to-a-basis, def-equivalence-and-adjoint-equivalence-of-categories, def-exact-and-short-exact-sequences-of-modules, def-functor-and-contravariant-functor, def-hom-groups-and-induced-hom-maps, def-k-linear-category-and-k-linear-functor, def-left-and-right-modules, def-linear-map, def-monomorphism-and-epimorphism, def-natural-isomorphism, def-opposite-ring, def-vector-space-of-linear-maps, thm-dimension-of-a-linear-subspace, thm-dual-family-is-a-basis-in-finite-dimension, thm-quotient-module-universal-property, thm-rank-nullity, thm-splitting-lemma-for-modules, thm-unique-coordinates-with-respect-to-an-ordered-basis]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, Corollary 2.3, equation (2.1))"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Throughout, a bimodule over $k$-algebras means a $k$-vector space with $k$-bilinear commuting actions and agreeing scalar actions: $(c1_B)m=m(c1_A)=cm$ for $c\in k$ in a $(B,A)$-bimodule. This compatibility is an additional requirement beyond the ring-bimodule definition [[def-bimodule]].

Let $A$ be a finite-dimensional unital algebra over a field $k$, and let
$A\text{-}\mathrm{mod}$ denote the category of finite-dimensional left
$A$-modules with $A$-linear maps. For such a module $X$ put
$X^{*}=\operatorname{Hom}_k(X,k)=\mathcal L(X,k)$ with the right $A$-action
$(\lambda\cdot a)(x)=\lambda(ax)$, equivalently the left
$A^{\mathrm{op}}$-action $a\cdot\lambda:=\lambda\cdot a$; for an $A$-linear
$u:X\to Y$ put $u^{*}(\lambda)=\lambda\circ u$ for $\lambda\in Y^{*}$. Then:

(i) $(-)^{*}$ is a contravariant $k$-linear functor from
$A\text{-}\mathrm{mod}$ to the category of finite-dimensional left
$A^{\mathrm{op}}$-modules, and the evaluation
$\operatorname{ev}_X:X\to X^{**}$, $\operatorname{ev}_X(x)(\lambda)=\lambda(x)$,
is a natural isomorphism, so $(-)^{*}$ is a contravariant equivalence;

(ii) $(-)^{*}$ is exact, carrying every short exact sequence
$0\to X\xrightarrow{i}Y\xrightarrow{q}Z\to0$ of finite-dimensional left
$A$-modules to the short exact sequence
$0\to Z^{*}\xrightarrow{q^{*}}Y^{*}\xrightarrow{i^{*}}X^{*}\to0$;

(iii) if $B$ is a unital $k$-algebra and $X$ is a finite-dimensional
$(A,B)$-bimodule, then $X^{*}$ is a $(B,A)$-bimodule under the commuting
actions $(b\cdot\lambda)(x)=\lambda(xb)$ and $(\lambda\cdot a)(x)=\lambda(ax)$,
and duality is a contravariant equivalence between the categories of
finite-dimensional $(A,B)$-bimodules and finite-dimensional $(B,A)$-bimodules,
with the $k$-linear maps that are simultaneously $A$-linear and $B$-linear as
morphisms.

No choice is used.

## Facts & Assumptions

**Given:** The agreeing scalar convention above, a field $k$, a finite-dimensional unital $k$-algebra $A$, and the category $A\text{-}\mathrm{mod}$ of finite-dimensional left $A$-modules. For part (iii), a unital $k$-algebra $B$ and a finite-dimensional $(A,B)$-bimodule $X$.

[F1] For a $k$-vector space $V$, the algebraic dual $V^{*}=\mathcal L(V,k)$ is the space of linear functionals with pointwise addition and scalar multiplication ([[def-algebraic-dual-and-linear-functional]], [[def-vector-space-of-linear-maps]]).

[F2] If $(v_1,\dots,v_n)$ is an ordered basis of a finite-dimensional $k$-vector space $V$, the coordinate functionals $v_i^{*}(v_j)=\delta_{ij}$ form a basis of $V^{*}$, so $\dim_kV^{*}=\dim_kV$ ([[def-dual-family-associated-to-a-basis]], [[thm-dual-family-is-a-basis-in-finite-dimension]]).

[F3] A right $R$-module is the same data as a left $R^{\mathrm{op}}$-module, and a left $R$-module is the same data as a right $R^{\mathrm{op}}$-module ([[def-left-and-right-modules]], [[def-opposite-ring]]).

[L1] Hom-groups are abelian groups under pointwise operations, composition is additive and $k$-bilinear, and identity maps are two-sided units ([[def-hom-groups-and-induced-hom-maps]], [[def-k-linear-category-and-k-linear-functor]]).

[L2] Rank-nullity: a $k$-linear map $T:U\to W$ with $U$ finite-dimensional satisfies $\dim_kU=\dim_k(\ker T)+\dim_k(\operatorname{im}T)$ ([[thm-rank-nullity]]).

[L3] In a short exact sequence $0\to X\xrightarrow{i}Y\xrightarrow{q}Z\to0$ of modules, $i$ is injective, $q$ is surjective, and $\operatorname{im}i=\ker q$ ([[def-exact-and-short-exact-sequences-of-modules]]).

[L4] Every linearly independent finite family in a finite-dimensional $k$-vector space is contained in a basis of that space, and no choice principle is used ([[thm-dimension-of-a-linear-subspace]]).

[L5] Two $k$-linear maps with a common finite-dimensional domain that agree on a basis of that domain are equal ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L6] In an $(S,R)$-bimodule $N$ the two actions commute: $(sn)r=s(nr)$ for all $s\in S$, $n\in N$, $r\in R$ ([[def-bimodule]]).



## Proof

**Proof technique:** direct.

1.1 For $\lambda\in X^{*}$ and $a\in A$ define $\lambda\cdot a$ by $(\lambda\cdot a)(x)=\lambda(ax)$; this is $k$-linear in $x$ because $x\mapsto ax$ is $k$-linear and $\lambda$ is, and the right-module axioms hold: $(\lambda+\mu)\cdot a=\lambda\cdot a+\mu\cdot a$ and $\lambda\cdot(a+a')=\lambda\cdot a+\lambda\cdot a'$ by linearity of $\lambda$ and additivity of the action of $A$, while $(\lambda\cdot a)\cdot a'=\lambda\cdot(aa')$ because both sides send $x$ to $\lambda(a(a'x))$, and $\lambda\cdot1=\lambda$. Hence $X^{*}$ is a right $A$-module, equivalently by [F3] a left $A^{\mathrm{op}}$-module, and [F2] gives $\dim_kX^{*}=\dim_kX<\infty$, so $X^{*}$ is a finite-dimensional left $A^{\mathrm{op}}$-module. [F1, F2, F3, given, algebra]

1.2 For $A$-linear $u:X\to Y$ the map $u^{*}:Y^{*}\to X^{*}$, $u^{*}(\lambda)=\lambda\circ u$, is $k$-linear, since composition with the $k$-linear $u$ is additive and $k$-homogeneous by [L1]; moreover $(1_X)^{*}=1_{X^{*}}$ and $(v\circ u)^{*}=u^{*}\circ v^{*}$ for composable $A$-linear maps, while $u\mapsto u^{*}$ is additive and $k$-homogeneous, because $(u+v)^{*}(\lambda)=\lambda\circ(u+v)=\lambda\circ u+\lambda\circ v$ and $(cu)^{*}=c\,u^{*}$ for $c\in k$ by [L1]. [F1, L1, algebra]

1.3 Let $0\to X\xrightarrow{i}Y\xrightarrow{q}Z\to0$ be a short exact sequence of finite-dimensional left $A$-modules. Then $i^{*}\circ q^{*}=0$, since $(i^{*}\circ q^{*})(\lambda)=i^{*}(\lambda\circ q)=\lambda\circ q\circ i$ and $q\circ i=0$ by [L3]; and $q^{*}$ is injective, since if $q^{*}(\lambda)=\lambda\circ q=0$ then $\lambda$ vanishes on $\operatorname{im}q=Z$ by surjectivity of $q$ from [L3], so $\lambda=0$. Thus $0\to Z^{*}\xrightarrow{q^{*}}Y^{*}\xrightarrow{i^{*}}X^{*}$ is exact at $Z^{*}$ and a complex at $Y^{*}$. [F1, L3, algebra]

1.4 The map $i^{*}$ is surjective: let $(x_1,\dots,x_m)$ be an ordered basis of the finite-dimensional space $X$; since $i$ is injective by [L3], the images $i(x_1),\dots,i(x_m)$ are linearly independent and by [L4] are contained in an ordered basis $(y_1,\dots,y_n)$ of $Y$ with $y_j=i(x_j)$ for $j\le m$; let $(y_1^{*},\dots,y_n^{*})$ be its dual basis of $Y^{*}$ by [F2]. Given $\lambda=\sum_{j\le m}c_jx_j^{*}$ in $X^{*}$ with the dual basis $(x_j^{*})$ of [F2], put $\mu=\sum_{j\le m}c_jy_j^{*}\in Y^{*}$; then $i^{*}(\mu)(x_r)=\mu(i(x_r))=\mu(y_r)=c_r=\lambda(x_r)$ for every $r\le m$, so $i^{*}(\mu)=\lambda$ by [L5]. Hence $\operatorname{im}i^{*}=X^{*}$. [F2, L3, L4, L5, choose, construct, algebra]

2.1 For an $(A,B)$-bimodule $X$ define $(b\cdot\lambda)(x)=\lambda(xb)$ and $(\lambda\cdot a)(x)=\lambda(ax)$ for $a\in A$, $b\in B$, $\lambda\in X^{*}$, $x\in X$; as in step 1.1 both are $k$-linear functionals and the module axioms hold for the left $B$- and right $A$-actions, so $X^{*}$ is at once a left $B$-module and a right $A$-module. The two actions commute: $((b\cdot\lambda)\cdot a)(x)=(b\cdot\lambda)(ax)=\lambda((ax)b)=\lambda(a(xb))=(\lambda\cdot a)(xb)=(b\cdot(\lambda\cdot a))(x)$, using the bimodule identity $(ax)b=a(xb)$ of [L6]; hence $X^{*}$ is a $(B,A)$-bimodule. [F1, F3, L6, algebra]

2.2 In the situation of step 1.3, $\dim_kY=\dim_kX+\dim_kZ$: rank-nullity [L2] applied to the $k$-linear $q$ gives $\dim_kY=\dim_k(\ker q)+\dim_k(\operatorname{im}q)$, and $\ker q=\operatorname{im}i$ with $i$ injective and $q$ surjective by [L3], so $\dim_k(\ker q)=\dim_kX$ and $\dim_k(\operatorname{im}q)=\dim_kZ$. [L2, L3, algebra]

2.3 The map $u^{*}$ is $A^{\mathrm{op}}$-linear: for $\lambda\in Y^{*}$ and $a\in A$, $u^{*}(\lambda\cdot a)(x)=(\lambda\cdot a)(u(x))=\lambda(au(x))=\lambda(u(ax))=(u^{*}\lambda)(ax)=(u^{*}(\lambda)\cdot a)(x)$ for all $x$, using the action of step 1.1 and $A$-linearity of $u$. Consequently, with step 1.1 for objects and step 1.2 for the morphism assignment, identities, composition and $k$-linearity on hom-spaces, $(-)^{*}$ is a contravariant $k$-linear functor from $A\text{-}\mathrm{mod}$ to finite-dimensional left $A^{\mathrm{op}}$-modules. [step 1.1, step 1.2, algebra]

2.4 Applying step 1.1 with the unital algebra $A^{\mathrm{op}}$ in place of $A$, the dual $X^{**}$ of the finite-dimensional left $A^{\mathrm{op}}$-module $X^{*}$ is a finite-dimensional left $(A^{\mathrm{op}})^{\mathrm{op}}=A$-module, and $\operatorname{ev}_X:X\to X^{**}$, $\operatorname{ev}_X(x)(\lambda)=\lambda(x)$, is $k$-linear; it is $A$-linear because $\operatorname{ev}_X(ax)(\lambda)=\lambda(ax)=(\lambda\cdot a)(x)=\operatorname{ev}_X(x)(\lambda\cdot a)=(a\cdot\operatorname{ev}_X(x))(\lambda)$ for the left action on $X^{**}$ induced by step 1.1. Choosing an ordered basis $(x_1,\dots,x_m)$ of $X$ with dual basis $(x_1^{*},\dots,x_m^{*})$ of $X^{*}$, the dual family $(\varepsilon_1,\dots,\varepsilon_m)$ of $(x_1^{*},\dots,x_m^{*})$ is a basis of $X^{**}$ by [F2], and $\operatorname{ev}_X(x_i)(x_j^{*})=\delta_{ij}=\varepsilon_i(x_j^{*})$ for all $i,j$; hence $\operatorname{ev}_X(\sum_ia_ix_i)=\sum_ia_i\varepsilon_i$, which is zero only for the zero combination and realizes every element of $X^{**}$, so $\operatorname{ev}_X$ is a $k$-linear isomorphism. [F2, step 1.1, choose, algebra]

3.1 By rank-nullity [L2] applied to $i^{*}$ and $q^{*}$, and [F2] together with steps 1.3, 1.4 and 2.2: $\dim_k(\ker i^{*})=\dim_kY^{*}-\dim_k(\operatorname{im}i^{*})=\dim_kY-\dim_kX$, while $\dim_k(\operatorname{im}q^{*})=\dim_kZ^{*}-\dim_k(\ker q^{*})=\dim_kZ$; hence by step 2.2 both quantities equal $\dim_kZ$. [F2, L2, step 1.3, step 1.4, step 2.2, algebra]

3.2 A map $u:X\to Y$ of $(A,B)$-bimodules, that is $u(axb)=a\,u(x)\,b$ for all $a\in A$, $b\in B$, $x\in X$, has $u^{*}$ a map of $(B,A)$-bimodules: $u^{*}(b\cdot\lambda)(x)=(b\cdot\lambda)(u(x))=\lambda(u(x)b)=\lambda(u(xb))=(u^{*}\lambda)(xb)=(b\cdot(u^{*}\lambda))(x)$ and $u^{*}(\lambda\cdot a)(x)=(\lambda\cdot a)(u(x))=\lambda(au(x))=\lambda(u(ax))=(u^{*}\lambda)(ax)=((u^{*}\lambda)\cdot a)(x)$ for all $x$, using the actions of step 2.1; with step 1.2 the assignment is functorial on the bimodule categories. [step 1.2, step 2.1, algebra]

3.3 For $A$-linear $u:X\to Y$, $x\in X$ and $\lambda\in Y^{*}$ one has $(u^{**}\circ\operatorname{ev}_X)(x)(\lambda)=\operatorname{ev}_X(x)(u^{*}\lambda)=u^{*}(\lambda)(x)=\lambda(u(x))=\operatorname{ev}_Y(u(x))(\lambda)$, so $\operatorname{ev}_Y\circ u=u^{**}\circ\operatorname{ev}_X$, where $u^{**}=(u^{*})^{*}$ is the map of step 2.3; hence the isomorphisms $\operatorname{ev}_X$ of step 2.4 form a natural isomorphism $1\Rightarrow(-)^{**}$. Therefore $(-)^{*}$ is a contravariant equivalence of categories with quasi-inverse $(-)^{*}$, since both composites are $(-)^{**}$ and are naturally isomorphic to the identities, which proves (i). [step 1.2, step 2.3, step 2.4, algebra]

4.1 In the situation of step 1.3, $\operatorname{im}q^{*}\subseteq\ker i^{*}$ because $i^{*}\circ q^{*}=0$, and by step 3.1 both are $k$-subspaces of $Y^{*}$ of dimension $\dim_kZ$; since a subspace of the same finite dimension equals the whole space, $\operatorname{im}q^{*}=\ker i^{*}$. With step 1.3 the dual sequence $0\to Z^{*}\xrightarrow{q^{*}}Y^{*}\xrightarrow{i^{*}}X^{*}\to0$ is exact, which proves (ii). [step 1.3, step 3.1, algebra]

4.2 For an $(A,B)$-bimodule $X$ the evaluation of step 2.4 is also $B$-linear on the right: $\operatorname{ev}_X(xb)(\lambda)=\lambda(xb)=(b\cdot\lambda)(x)=\operatorname{ev}_X(x)(b\cdot\lambda)=(\operatorname{ev}_X(x)\cdot b)(\lambda)$ for all $b\in B$, $\lambda\in X^{*}$, where the right $B$-action on $X^{**}$ is the one induced by the left $B$-action on $X^{*}$ of step 2.1; so $\operatorname{ev}_X$ is a map of $(A,B)$-bimodules, and it is natural in the bimodule variable by the computation of step 3.3 applied to bimodule maps. By steps 3.2 and 3.3 the restriction of $(-)^{*}$ to finite-dimensional bimodules is a contravariant equivalence between finite-dimensional $(A,B)$-bimodules and finite-dimensional $(B,A)$-bimodules with quasi-inverse $(-)^{*}$, which proves (iii). [step 2.1, step 2.4, step 3.2, step 3.3, algebra]

5.1 Steps 3.3, 4.1 and 4.2 prove (i), (ii) and (iii) respectively. The only choices made are finite bases, dual bases and basis extensions in finite-dimensional spaces, supplied without any choice principle by [F2] and [L4], so no choice is used. [step 1.4, step 2.4, step 4.1, step 3.3, step 4.2, given] ∎
