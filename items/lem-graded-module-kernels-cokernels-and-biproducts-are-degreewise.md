---
id: lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise
kind: lemma
title: Graded modules with degree-zero maps form an abelian category
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-abelian-category, def-additive-category, thm-first-isomorphism-theorem-modules, thm-module-kernel-image-and-injectivity, def-module-homomorphism-kernel-image-and-cokernel, thm-quotient-module-universal-property, thm-universal-property-of-module-direct-sums, def-direct-sum-of-a-family-of-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras (2009), §2.2, printed pp. 6-7"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Stacks Project, Algebra, §10.56, tag 00JL"
      url: "https://stacks.math.columbia.edu/tag/00JL"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

For any unital associative $\mathbb Z$-graded algebra $A$, the category
$\operatorname{GrMod}_0(A)$ of graded left $A$-modules and degree-zero maps is
abelian. Kernels, images, cokernels and finite biproducts are computed in each
homogeneous degree; a sequence is exact precisely when it is exact degreewise.

## Facts & Assumptions

**Given:** A unital associative $\mathbb Z$-graded algebra $A$, graded left $A$-modules and degree-zero $A$-linear maps as specified in the steps below.

[L1] Graded modules, degree-zero maps, graded submodules with pieces $S_d=S\cap M_d$ and the category $\operatorname{GrMod}_0(A)$ are defined in [[def-graded-ring-module-bimodule-and-internal-shift]].

[L2] An additive category is a preadditive category with all finite biproducts, equivalently one with a zero object and binary biproducts ([[def-additive-category]]); an abelian category is an additive category in which every morphism has a kernel and a cokernel and the canonical comparison $\operatorname{coim}(f)\to\operatorname{im}(f)$ is an isomorphism ([[def-abelian-category]]).

[L3] For a module homomorphism $f$, both $\ker f$ and $\operatorname{im}f$ are submodules, and the cokernel is the quotient by the image ([[thm-module-kernel-image-and-injectivity]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[L4] A module homomorphism vanishing on a submodule factors uniquely through the quotient ([[thm-quotient-module-universal-property]]).

[L5] The first isomorphism theorem gives $M/\ker f\cong\operatorname{im}f$ by $m+\ker f\mapsto f(m)$ ([[thm-first-isomorphism-theorem-modules]]).

[L6] A family of homomorphisms out of the summands of a direct sum determines a unique homomorphism out of the direct sum, and elements of a direct sum have finite support ([[thm-universal-property-of-module-direct-sums]], [[def-direct-sum-of-a-family-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Pointwise addition makes $\operatorname{Hom}_{\operatorname{GrMod}_0(A)}(M,N)$ an abelian group: a sum of degree-zero $A$-linear maps is degree-zero and $A$-linear, and composition is additive in each variable, so $\operatorname{GrMod}_0(A)$ is preadditive. [L1, algebra]

1.2 The zero module $0$, with all homogeneous pieces zero, is a zero object of $\operatorname{GrMod}_0(A)$: for every graded $M$ the unique maps $0\to M$ and $M\to0$ are $A$-linear and degree-zero, since the only element of $0$ lies in the zero piece $0_d$ for every $d$. [L1]

1.3 For graded modules $M,N$ put $(M\oplus N)_d:=M_d\oplus N_d$; then $M\oplus N=\bigoplus_d(M\oplus N)_d$ and $A_i(M_d\oplus N_d)\subseteq M_{i+d}\oplus N_{i+d}$, so $M\oplus N$ is a graded $A$-module, and the coordinate inclusions $\jmath_M,\jmath_N$ and projections $\pi_M,\pi_N$ are degree-zero $A$-linear and satisfy $\pi_M\jmath_M=1_M$, $\pi_N\jmath_N=1_N$, $\pi_M\jmath_N=0$, $\pi_N\jmath_M=0$ and $\jmath_M\pi_M+\jmath_N\pi_N=1_{M\oplus N}$, because the sum of a summand in $M_d$ and one in $N_d$ is the unique decomposition of its sum in $(M\oplus N)_d$. [L1, L6, algebra]

1.4 Let $f:M\to N$ be degree-zero and let $f_d:M_d\to N_d$ be its restriction. Then $\ker f=\bigoplus_d\ker f_d$: if $f(m)=0$ and $m=\sum_dm_d$ is the finite decomposition of $m$ into homogeneous components, then $0=f(m)=\sum_df(m_d)$ with $f(m_d)\in N_d$, so every $f(m_d)=0$ by uniqueness of homogeneous decomposition, and conversely each $m_d\in\ker f_d$ lies in $\ker f$. Hence $\ker f$ is a graded submodule, its inclusion into $M$ is degree-zero, and any degree-zero $h:L\to M$ with $fh=0$ takes values in $\ker f$, so the inclusion is a kernel in $\operatorname{GrMod}_0(A)$. [L1, L3, algebra]

2.1 The module $M\oplus N$ is a coproduct and a product in $\operatorname{GrMod}_0(A)$. Given degree-zero maps $h:M\to L$ and $k:N\to L$, [L6] produces the unique additive map $(m,n)\mapsto h(m)+k(n)$, which satisfies both composite identities, is $A$-linear and sends $(M\oplus N)_d$ into $L_d$, hence is degree-zero; given degree-zero maps $h':L\to M$ and $k':L\to N$, the map $l\mapsto(h'(l),k'(l))$ is degree-zero $A$-linear and is the unique map with the two required composites. Thus $M\oplus N$ is a binary biproduct. [step 1.3, L1]

2.2 Similarly $\operatorname{im}f=\bigoplus_d\operatorname{im}f_d$: the image of $f$ is the sum of the images of the restrictions, and every $f(m_d)$ lies in $N_d$, so these pieces are the homogeneous pieces of a graded submodule of $N$. [step 1.4, L1, L3]

3.1 Steps 1.1, 1.2 and 2.1 give an abelian-group enrichment with bilinear composition, a zero object and binary biproducts, so $\operatorname{GrMod}_0(A)$ is an additive category. [step 1.1, step 1.2, step 2.1, L2]

3.2 Put $\operatorname{coker}f:=N/\operatorname{im}f$ with pieces $\bigl(N/\operatorname{im}f\bigr)_d:=N_d/\operatorname{im}f_d$. This is a graded $A$-module, the quotient map $q:N\to\operatorname{coker}f$ is degree-zero $A$-linear, and $\ker q=\operatorname{im}f$. Any degree-zero $g:N\to P$ with $gf=0$ kills $\operatorname{im}f$ and so factors uniquely through $q$ by [L4]; the resulting map is degree-zero because $q$ is surjective in each degree. Hence $q$ is a cokernel and $\operatorname{im}f$, being $\ker q$, is the categorical image of $f$. [step 2.2, L3, L4]

3.3 For degree-zero maps $M'\xrightarrow{f}M\xrightarrow{g}M''$ with $gf=0$ one has $\operatorname{im}f=\bigoplus_d\operatorname{im}f_d$ and $\ker g=\bigoplus_d\ker g_d$ by steps 1.4 and 2.2. Since a graded submodule is determined by its homogeneous pieces, $\operatorname{im}f=\ker g$ holds if and only if $\operatorname{im}(f_d)=\ker(g_d)$ for every $d$; applied at each position of a sequence, exactness is equivalent to exactness degreewise. [step 1.4, step 2.2, L1]

4.1 The coimage is $\operatorname{coim}f=M/\ker f$ with pieces $M_d/\ker f_d$, a graded module by the same argument as step 3.2, and the canonical comparison $\operatorname{coim}f\to\operatorname{im}f$ sends $m+\ker f$ to $f(m)$. On degree $d$ it is the map $M_d/\ker f_d\to\operatorname{im}f_d$ of [L5], an isomorphism of $k$-modules; it is $A$-linear and degree-zero, and a degree-zero bijection of graded modules has degree-zero inverse, so the comparison is an isomorphism in $\operatorname{GrMod}_0(A)$. [step 1.4, step 3.2, L5]

5.1 Steps 3.1, 1.4, 3.2 and 4.1 exhibit an additive category in which every morphism has a kernel and a cokernel and the canonical coimage-to-image comparison is an isomorphism; by [L2] the category $\operatorname{GrMod}_0(A)$ is abelian. [step 3.1, step 1.4, step 3.2, step 4.1, L2]

6.1 Steps 5.1 and 3.3 give both assertions: $\operatorname{GrMod}_0(A)$ is abelian, and its kernels, images, cokernels, finite biproducts and exactness are computed degreewise. [step 1.3, step 5.1, step 3.3] ∎
