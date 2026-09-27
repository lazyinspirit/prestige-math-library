---
id: lem-unipotent-invariants-are-exact-over-c
kind: lemma
title: Finite-group invariants are exact when the group order is invertible
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-harish-chandra-induction-and-restriction-for-finite-gl-n, thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq, def-compositions-partial-flags-and-standard-parabolics, def-g-module-over-a-commutative-ring, def-exact-and-short-exact-sequences-of-modules, def-module-homomorphism-kernel-image-and-cokernel, rem-standing-hypotheses-for-ordinary-character-theory, def-standard-subgroups-of-gl-n-over-a-finite-field, def-subgroup, def-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Proposition 9.4(ii), printed p. 35"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.2, printed p. 42"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Statement

Let $k$ be a field, let $U$ be a finite group, and assume that the order $|U|$
is invertible in $k$ (equivalently, that $\operatorname{char}k$ does not divide
$|U|$). For a $k$-linear $U$-module $X$
([[def-g-module-over-a-commutative-ring]]) write
$$X^U:=\{\,x\in X:u\cdot x=x\text{ for every }u\in U\,\},\qquad \pi_X:=\frac{1}{|U|}\sum_{u\in U}u\ \in\operatorname{End}_k(X)$$
for the invariants and the averaging (Reynolds) operator. Then:

1. **Projector.** $\pi_X$ is $k$-linear and idempotent, $\pi_X(X)=X^U$,
   $\pi_X$ restricts to the identity of $X^U$, and
   $X=X^U\oplus\ker\pi_X$; in particular $X^U$ is a direct summand of $X$ as a
   $k$-vector space.
2. **Exactness.** For every short exact sequence of $k$-linear $U$-modules
   $$0\longrightarrow X\xrightarrow{\ f\ }Y\xrightarrow{\ g\ }Z\longrightarrow0$$
   ([[def-exact-and-short-exact-sequences-of-modules]]) the sequence of
   invariants
   $$0\longrightarrow X^U\xrightarrow{\ f|_{X^U}\ }Y^U \xrightarrow{\ g|_{Y^U}\ }Z^U\longrightarrow0$$
   is again exact; equivalently, the invariants functor $X\mapsto X^U$ is
   additive and preserves kernels, images and cokernels, hence is exact.
3. **Unipotent radicals.** For $k=\mathbb C$ and every standard parabolic
   $P_\alpha=L_\alpha\ltimes U_\alpha$ of $G=\operatorname{GL}_n(\mathbb F_q)$
   ([[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]]) the group
   $U_\alpha$ is finite and $|U_\alpha|$ is invertible in $\mathbb C$, so with
   the Harish–Chandra restriction
   ${}^*\!R_{L_\alpha}^G(X)=X^{U_\alpha}$
   ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]) claims 1
   and 2 apply to $U=U_\alpha$: the functor
   ${}^*\!R_{L_\alpha}^G$ is exact.

## Facts & Assumptions

**Given:** A field $k$, a finite group $U$ with $|U|$ invertible in $k$, a short exact sequence $0\to X\xrightarrow{f}Y\xrightarrow{g}Z\to 0$ of $k$-linear $U$-modules, and the averaging operators $\pi_X,\pi_Y,\pi_Z$.

[L1] A $k$-linear $U$-module structure makes every $u\in U$ act as a $k$-linear map, so sums and scalar multiples of such operators are again $k$-linear, and the action is associative: $(uv)\cdot x=u\cdot(v\cdot x)$ ([[def-g-module-over-a-commutative-ring]]).

[L2] A short exact sequence $0\to X\xrightarrow{f}Y\xrightarrow{g}Z\to0$ of modules is one that is exact at $X$, $Y$ and $Z$; equivalently $f$ is injective, $g$ is surjective, and $\operatorname{im}f=\ker g$ ([[def-exact-and-short-exact-sequences-of-modules]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[L3] $|U|$ invertible in $k$ means $|U|\cdot1_k\in k^\times$, so the element $|U|^{-1}\in k$ exists and $|U|\cdot|U|^{-1}=1_k$ ([[def-field]], [[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L4] For a composition $\alpha$ of $n$ the standard parabolic subgroup of $G=\operatorname{GL}_n(\mathbb F_q)$ is $P_\alpha=L_\alpha\ltimes U_\alpha$ with $U_\alpha$ the unipotent radical, a normal subgroup of $P_\alpha$ ([[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]], [[def-compositions-partial-flags-and-standard-parabolics]]).

[L5] In the finite general linear group setting, $G=\operatorname{GL}_n(\mathbb F_q)$ is a subset of the finite set of $n\times n$ matrices over $\mathbb F_q$, where $|\mathbb F_q|=q$. This implies that its subgroups, including each $U_\alpha$, are finite ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L6] $\operatorname{char}\mathbb C=0$, and $0$ does not divide the order of any finite group ([[rem-standing-hypotheses-for-ordinary-character-theory]]).



## Proof

**Proof technique:** direct.

1.1 **$\pi_X$ is a $k$-linear idempotent.** Since each $u$ acts $k$-linearly by [L1], the sum $\sum_{u\in U}u$ and its scalar multiple $\pi_X$ are $k$-linear. For the composite, associativity of the action gives $\big(\sum_{u\in U}u\big)\big(\sum_{v\in U}v\big)=\sum_{u,v\in U}uv=\sum_{w\in U}c_ww$ with $c_w=\#\{(u,v)\in U\times U:uv=w\}=|U|$ for every $w$, because for fixed $w$ the pairs are $(u,u^{-1}w)$ with $u\in U$ arbitrary; hence $\pi_X^2=|U|^{-2}|U|\sum_{w\in U}w=\pi_X$. [L1, L3]

1.2 **Kernels are preserved.** Let $f:X\to Y$ be a $U$-linear map, i.e. $f(u\cdot x)=u\cdot f(x)$ for all $u\in U$, $x\in X$. Then $f(X^U)\subseteq Y^U$, because $u\cdot f(x)=f(u\cdot x)=f(x)$ for $x\in X^U$; and $\ker(f|_{X^U})=(\ker f)^U,$ because $x\in X^U$ lies in $\ker(f|_{X^U})$ exactly when $f(x)=0$, which is exactly $x\in(\ker f)^U$. In particular, if $f$ is injective then $f|_{X^U}$ is injective. [L1, L2]

2.1 **Image and kernel of $\pi_X$.** For every $u_0\in U$ one has $u_0\pi_X=|U|^{-1}\sum_u u_0u=|U|^{-1}\sum_{u'}u'=\pi_X$ by [L1], so every value $\pi_Xx$ is fixed by every $u_0$, that is $\pi_X(X)\subseteq X^U$; conversely $\pi_Xx=x$ for $x\in X^U$ because every $u$ fixes $x$ and the sum has $|U|$ terms, so $X^U\subseteq\pi_X(X)$. Hence $\pi_X(X)=X^U$ and $\pi_X$ restricts to the identity on $X^U$. Finally, every $x\in X$ is $x=\pi_Xx+(x-\pi_Xx)$ with $\pi_Xx\in X^U$ and $\pi_X(x-\pi_Xx)=\pi_Xx-\pi_X^2x=0$; and if $x\in X^U\cap\ker\pi_X$ then $x=\pi_Xx=0$. Hence $X=X^U\oplus\ker\pi_X$. [step 1.1, L1, L3]

3.1 **Images and cokernels are preserved.** Let $f:X\to Y$ and $g:Y\to Z$ be $U$-linear. The averaging operator is natural: since $g$ is $U$-linear and additive, $g\big(\pi_Y(y)\big)=|U|^{-1}\sum_u g(u\cdot y)=|U|^{-1}\sum_u u\cdot g(y)=\pi_Z\big(g(y)\big)$ for every $y\in Y$, that is $g\circ\pi_Y=\pi_Z\circ g$. If now $g$ is surjective and $z\in Z^U$, choose $y\in Y$ with $g(y)=z$ by [L2]; then $\pi_Y(y)\in Y^U$ by step 2.1 and $g(\pi_Y(y))=\pi_Z(g(y))=\pi_Z(z)=z$ because $z$ is fixed; hence $g|_{Y^U}$ is surjective. The same naturality computation gives $f\circ\pi_X=\pi_Y\circ f$. Thus $f(X^U)=f(X)\cap Y^U$: inclusion from left to right follows from step 1.2, while if $y=f(x)\in Y^U$ then $y=\pi_Y(y)=f(\pi_X(x))$ with $\pi_X(x)\in X^U$ by step 2.1. Combining this with $\operatorname{im}f=\ker g$ of [L2], we get $\operatorname{im}(f|_{X^U})=f(X^U)=f(X)\cap Y^U=\ker g\cap Y^U=\ker(g|_{Y^U})$, the last step because $g(y)=0$ for $y\in Y^U$ exactly when $y\in\ker g$. [step 2.1, step 1.2, L1, L2]

4.1 **Exactness and the invariant functor.** In a short exact sequence as in [L2], $f$ is injective and $g$ surjective, so by steps 1.2 and 3.1 the map $f|_{X^U}$ is injective, the map $g|_{Y^U}$ is surjective and its kernel is exactly the image of $f|_{X^U}$; hence $0\to X^U\to Y^U\to Z^U\to0$ is exact by [L2]. The assignments $X\mapsto X^U$ and $f\mapsto f|_{X^U}$ define a functor that is additive — restriction of $k$-linear maps is $k$-linear, so $(f+f')|_{X^U}=f|_{X^U}+f'|_{X^U}$ — and the computations of steps 1.2 and 3.1 show that it preserves kernels, images and cokernels, which is the exactness of claim 2. [step 1.2, step 3.1, L1, L2]

5.1 **Unipotent radicals of standard parabolics.** Let $\alpha$ be a composition of $n$ and $P_\alpha=L_\alpha\ltimes U_\alpha$ as in [L4]. The group $U_\alpha$ is a subgroup of $G=\operatorname{GL}_n(\mathbb F_q)$, whose elements are matrices with entries in the finite field $\mathbb F_q$; hence $U_\alpha$ is finite, so $|U_\alpha|\in\mathbb N$ is a positive integer, and by [L6] the characteristic $0$ of $\mathbb C$ does not divide $|U_\alpha|$, so $|U_\alpha|$ is invertible in $\mathbb C$ by [L3]. Therefore steps 1.1–4.1 apply with $U=U_\alpha$ and $k=\mathbb C$: for every short exact sequence of $\mathbb C$-linear $U_\alpha$-modules the $U_\alpha$-invariants form a short exact sequence, that is, the Harish–Chandra restriction ${}^*\!R_{L_\alpha}^G(X)=X^{U_\alpha}$ is exact. ∎ [step 1.1, step 4.1, L3, L4, L5, L6]

**Remark.** The averaging operator is the diagonal action of the idempotent $e_U=|U|^{-1}\sum_{u\in U}u$, and its existence is exactly the point at which the hypothesis on $\operatorname{char}k$ enters; over a field of characteristic dividing $|U|$ the invariants functor need not be exact. For a finite group $U$ the operator is available for every field $k$ with $\operatorname{char}k\nmid|U|$, so the lemma applies verbatim to the unipotent radicals $U_\alpha$ of the standard parabolics of $\operatorname{GL}_n(\mathbb F_q)$, whose orders are powers of the prime $p$ with $q=p^m$. No choice principle is used: $U$ is finite and the average is a finite sum.
