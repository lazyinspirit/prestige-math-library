---
id: lem-graded-degreewise-direct-sums-and-homogeneous-free-covers
kind: lemma
title: Degreewise direct sums and homogeneous free covers in graded modules
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-direct-sum-of-a-family-of-modules, thm-universal-property-of-module-direct-sums, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, def-module-homomorphism-kernel-image-and-cokernel, def-abelian-category]
justified_by: []
aliases: []
dependency_level: 0
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
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras (arXiv:0909.4844), §2.2 'Graded representation theory', printed pp.6-8"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Statement

Let $k$ be a commutative ring and $A$ a graded $k$-algebra
([[def-graded-ring-module-bimodule-and-internal-shift]]).

1. For every family $(X_i)_{i\in I}$ of graded left $A$-modules the
**degreewise direct sum**, defined by
$$(\bigoplus_{i\in I}X_i)_d:=\bigoplus_{i\in I}(X_i)_d$$
with componentwise action, is a graded left $A$-module and is the coproduct of the family in
$\operatorname{GrMod}_0(A)$: the coordinate inclusions are degree-zero $A$-linear and every family of
degree-zero $A$-linear maps $X_i\to Y$ assembles to a unique degree-zero $A$-linear map
$\bigoplus_iX_i\to Y$. In particular $\operatorname{GrMod}_0(A)$ has all small coproducts, computed
degreewise and agreeing with the finite biproducts of
[[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]; for $I=\varnothing$ the
coproduct is the zero module. No choice is used.

2. For every $d\in\mathbb Z$ the shifted regular module $A\{d\}$ is free on the homogeneous
generator $1_A\in(A\{d\})_d$: for every graded left $A$-module $X$ and every $x\in X_d$ there is a
unique degree-zero $A$-linear map $\ell_x:A\{d\}\to X$ with $\ell_x(1_A)=x$, namely
$\ell_x(a)=ax$.

3. Consequently every graded left $A$-module $X$ has a **canonical homogeneous free cover**: let
$H_X$ be the set of nonzero homogeneous elements of $X$, so that each $x\in H_X$ has a unique
degree $\deg x$ with $x\in X_{\deg x}$, and put
$$P_X:=\bigoplus_{x\in H_X}A\{\deg x\}.$$
The degree-zero $A$-linear map
$$q_X:P_X\longrightarrow X,\qquad q_X(e_x)=x,$$
is an epimorphism, its kernel $K_X=\ker q_X$ is a graded submodule and hence a graded left
$A$-module, and applying the same construction to $K_X$ gives an exact sequence
$$\operatorname{Free}(K_X)\xrightarrow{\ d\ }P_X\xrightarrow{\ q_X\ }X\longrightarrow0$$
in $\operatorname{GrMod}_0(A)$ whose first map is not asserted to be monic. The cover is indexed by
the actual nonzero homogeneous elements of $X$, so no generator, basis or resolution is chosen.

## Facts & Assumptions

**Given:** A commutative ring $k$, a graded $k$-algebra $A$, a family $(X_i)_{i\in I}$ of graded
left $A$-modules, a graded left $A$-module $Y$, an integer $d$ and an element $x\in X_d$.

[L1] Graded $k$-algebras, graded modules with $X=\bigoplus_dX_d$ and $A_iX_d\subseteq X_{i+d}$,
degree-zero maps, graded submodules with pieces $S_d=S\cap M_d$, and the internal shift
$(M\{r\})_e=M_{e-r}$ are defined in [[def-graded-ring-module-bimodule-and-internal-shift]].

[L2] The direct sum of a family of left modules is the submodule of the product consisting of the
finitely supported families, it carries the coordinate inclusions $\jmath_i$, and for the empty
index set both the product and the direct sum are the zero module
([[def-direct-sum-of-a-family-of-modules]]).

[L3] A family of homomorphisms $f_i:M_i\to N$ out of the summands of a direct sum has a unique
assembly $f$ with $f\circ\jmath_i=f_i$, given by $f((m_i))=\sum_if_i(m_i)$
([[thm-universal-property-of-module-direct-sums]]).

[L4] For a unital ring $R$ and a set $X$ the free left $R$-module on $X$ is $R^{(X)}=\bigoplus_{x\in X}R$,
with standard basis inclusion $x\mapsto e_x$, and a family $(b_x)$ is a basis when every element is
uniquely a finite $R$-linear combination of the $b_x$
([[def-free-module-on-a-set-and-standard-basis]]).

[L5] Every set map $u:X\to M$ into a left $R$-module extends uniquely to an $R$-module homomorphism
$\bar u:R^{(X)}\to M$ with $\bar u(e_x)=u(x)$
([[thm-universal-property-of-free-modules]]).

[L6] In $\operatorname{GrMod}_0(A)$ kernels, images, cokernels and finite biproducts are computed in
each homogeneous degree: for a degree-zero $f$ one has $\ker f=\bigoplus_d\ker(f_d)$ and
$\operatorname{im}f=\bigoplus_d\operatorname{im}(f_d)$, the binary biproduct is the graded module
with pieces $M_d\oplus N_d$, exactness is equivalent to exactness degreewise, and the category is
abelian ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L7] For a module homomorphism $f$ its kernel is $\{m:f(m)=0\}$ and its image is $\{f(m)\}$, and the
cokernel is the quotient by the image
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L8] An abelian category is an additive category, that is, a preadditive category with all finite
biproducts, in which every morphism has a kernel and a cokernel and the canonical comparison from
the coimage to the image is an isomorphism ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Give the direct sum $X:=\bigoplus_{i\in I}X_i$ of the underlying left $A$-modules its componentwise action $a\cdot(x_i)_{i\in I}:=(ax_i)_{i\in I}$; this is a left $A$-module structure preserving finite supports, and with $X_d:=\bigoplus_{i\in I}(X_i)_d$ one has $X=\bigoplus_{d\in\mathbb Z}X_d$: every element of $X$ is a finite sum of elements of the subgroups $X_d$, and if $\sum_dx^{(d)}=0$ with $x^{(d)}\in X_d$ then in each coordinate $\sum_dx^{(d)}_i=0$ with $x^{(d)}_i\in(X_i)_d$, so $x^{(d)}_i=0$ for all $i,d$ by the directness of each $X_i=\bigoplus_d(X_i)_d$. [L1, L2, algebra]

1.2 The shifted regular module $A\{d\}$ has the same underlying left $A$-module as $A$, which is free on the single standard basis element $1_A$, and a left $A$-module map out of it is uniquely determined by the image of $1_A$; for every $e$ the map $\ell_x(a):=ax$ sends $(A\{d\})_e=A_{e-d}$ into $X_e$ because $A_{e-d}x\subseteq X_e$, so it is degree-zero $A$-linear with $\ell_x(1_A)=x$, and every degree-zero $A$-linear $\varphi:A\{d\}\to X$ with $\varphi(1_A)=x$ satisfies $\varphi(a)=a\varphi(1_A)=ax$. [L1, L4, L5, algebra]

2.1 Every family of degree-zero $A$-linear maps $f_i:X_i\to Y$ assembles by [L3] to the unique $A$-linear $f:X\to Y$ with $f\circ\jmath_i=f_i$, namely $f((x_i)_{i\in I})=\sum_if_i(x_i)$; it is degree-zero because for $x=(x_i)\in X_d$ all components satisfy $x_i\in(X_i)_d$, whence $f_i(x_i)\in Y_d$ and $f(x)\in Y_d$, and it is the unique degree-zero $A$-linear map with the prescribed composites, so $X$ is the coproduct of the family. [step 1.1, L3]

2.2 Since $A_i(X_j)_d\subseteq(X_j)_{i+d}$ for all $i,d,j$, the componentwise action satisfies $A_iX_d\subseteq X_{i+d}$, so $X$ is a graded left $A$-module; the coordinate inclusion $\jmath_j:X_j\to X$ maps $(X_j)_d$ into $X_d$, so it is degree-zero $A$-linear. [step 1.1, L1]

3.1 For $I=\varnothing$ the direct sum is the zero module by [L2], and the unique map from a zero module to $Y$ is $A$-linear and degree-zero, so the zero module is initial and is the coproduct of the empty family; together with step 2.1 this shows that the degreewise direct sum is the coproduct of every family, so $\operatorname{GrMod}_0(A)$ has all small coproducts. [step 2.1, L2, L8]

3.2 Suppose $I$ is finite. Then $X$ is also the product of the family: given degree-zero $A$-linear maps $g_i:Y\to X_i$, the elementwise map $g(y):=(g_i(y))_{i\in I}$ has finite support in $X$, is $A$-linear and degree-zero, and is the unique such map with $\pi_i\circ g=g_i$ for the coordinate projections $\pi_i$; for two summands $X$ has pieces $X_d=(X_1)_d\oplus(X_2)_d$ with the same coordinate inclusions and projections as the binary biproduct of [L6], and the finite case follows by iterating that identification, so the coproducts here agree with the finite biproducts computed in [L6]. [step 1.1, step 2.2, L6, L8]

3.3 Let $H_X$ be the set of nonzero homogeneous elements of $X$; each $x\in H_X$ has a unique degree $\deg x$ with $x\in X_{\deg x}$, since $x\in X_d\cap X_e$ with $x\ne0$ and $d\ne e$ would exhibit $x$ as two different finite decompositions of one element. Hence $P_X:=\bigoplus_{x\in H_X}A\{\deg x\}$ is a graded left $A$-module by steps 1.1 and 2.2, and by step 2.1 and step 1.2 the maps $\ell_x:A\{\deg x\}\to X$ assemble to the unique degree-zero $A$-linear $q_X:P_X\to X$ with $q_X(e_x)=x$ for each $x\in H_X$. [step 1.2, step 2.1, step 2.2, L1]

4.1 The map $q_X$ is surjective, hence an epimorphism: every $x'\in X$ is the finite sum of its nonzero homogeneous components $x^{(d)}\in H_X$, and $q_X(e_{x^{(d)}})=x^{(d)}$; and two degree-zero $A$-linear maps out of $X$ agreeing after composition with a surjection agree everywhere. [step 3.3, algebra]

5.1 The kernel $K_X=\ker q_X$ is $\bigoplus_d\ker\bigl((q_X)_d\bigr)$ by [L6], hence a graded submodule of $P_X$ and therefore a graded left $A$-module with pieces $K_X\cap(P_X)_d$; applying the construction of steps 3.3 and 4.1 to $K_X$ produces $\operatorname{Free}(K_X):=P_{K_X}$ and a degree-zero $A$-linear epimorphism $q_{K_X}:P_{K_X}\to K_X$, whose composite $d$ with the inclusion $K_X\to P_X$ is degree-zero $A$-linear with image $K_X$. [step 3.3, step 4.1, L1, L6, L7]

6.1 Therefore $\operatorname{im}d=K_X=\ker q_X$ while $\operatorname{im}q_X=X$ by step 4.1, so the sequence $\operatorname{Free}(K_X)\xrightarrow{d}P_X\xrightarrow{q_X}X\to0$ is exact at $P_X$ and at $X$; the map $d$ is not asserted monic, the indexing set $H_X$ and the degrees $\deg x$ are determined by $X$, and the direct sums are indexed by those elements, so no generator, basis, resolution or other choice is made. [step 3.1, step 3.2, step 5.1, L7] ∎
