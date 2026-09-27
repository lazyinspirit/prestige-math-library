---
id: thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules
kind: theorem
title: Finite graded projectives are finite shifted-free summands
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-graded-ring-module-bimodule-and-internal-shift, def-finitely-generated-graded-projective-module, lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise, def-projective-object, thm-universal-property-of-free-modules, thm-a-direct-summand-of-a-projective-is-projective]
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
  precheck: pass
---

## Statement

Let $A$ be a graded $k$-algebra and let $P$ be a graded left $A$-module. Then $P$
is finite graded projective
([[def-finitely-generated-graded-projective-module]]) if and only if $P$ is a
degree-zero direct summand of a finite direct sum of internal shifts
$A\{r_1\}\oplus\cdots\oplus A\{r_n\}$. In particular every finite direct sum of
shifts $A\{r_j\}$ is a projective object of $\operatorname{GrMod}_0(A)$, and this
conclusion uses no assumption of arbitrary-index choice.

## Facts & Assumptions

**Given:** A graded $k$-algebra $A$, graded left $A$-modules and integers $r,r_1,\dots,r_n$ as specified below.

[L1] Graded left $A$-modules, degree-zero maps, the regular module $A$, internal shifts $A\{r\}$ and $\operatorname{GrMod}_0(A)$ are defined in [[def-graded-ring-module-bimodule-and-internal-shift]].

[L2] $\operatorname{GrMod}_0(A)$ is abelian, and kernels, images, cokernels, finite biproducts and exactness are computed degreewise ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L3] An object is projective exactly when it has the lifting property against every epimorphism, and a direct summand of a projective object is projective ([[def-projective-object]], [[thm-a-direct-summand-of-a-projective-is-projective]]).

[L4] Every set map from a finite set $X$ into an $A$-module extends uniquely to an $A$-module homomorphism $A^{(X)}\to M$ ([[thm-universal-property-of-free-modules]]).

[L5] Finite graded projectivity means graded projectivity together with generation by finitely many homogeneous elements ([[def-finitely-generated-graded-projective-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $q:E\to M$ be a degree-zero map in $\operatorname{GrMod}_0(A)$. Since the category is abelian, $q$ is an epimorphism if and only if its cokernel vanishes; by [L2] that cokernel is $M/\operatorname{im}q$ with degreewise pieces $M_d/\operatorname{im}q_d$. Hence $q$ is an epimorphism exactly when $q_d:E_d\to M_d$ is surjective for every $d$. [L2, algebra]

2.1 For every $r$ the shifted regular module $A\{r\}$ is projective in $\operatorname{GrMod}_0(A)$. Let $q:E\twoheadrightarrow M$ be a degree-zero epimorphism and $f:A\{r\}\to M$ degree-zero; put $m:=f(1_A)$, which lies in $M_r$ because $1_A\in(A\{r\})_r$. By step 1.1 there is $e\in E_r$ with $q(e)=m$. Define $g:A\{r\}\to E$ by $g(a):=ae$ for $a\in(A\{r\})_d=A_{d-r}$; this is well defined, $A$-linear, and $g(a)\in E_d$, so $g$ is degree-zero, and $q(g(a))=a\,q(e)=a\,f(1_A)=f(a\,1_A)=f(a)$ for every $a$. Hence $g$ is a lift and [L3] makes $A\{r\}$ projective. [step 1.1, L1, L3]

2.2 Let $P$ be finitely generated and $p_1,\dots,p_n$ homogeneous generators of degrees $r_1,\dots,r_n$; put $F:=A\{r_1\}\oplus\cdots\oplus A\{r_n\}$ and let $1_j:=1_A\in A\{r_j\}$ be the $j$-th basis vector of $F$, of degree $r_j$. By [L4] the assignment $1_j\mapsto p_j$ on the finite set $\{1_1,\dots,1_n\}$ extends uniquely to an $A$-module homomorphism $\varphi:F\to P$; it is degree-zero because $\varphi\bigl(A_{d-r_j}\,1_j\bigr)=A_{d-r_j}\,p_j\subseteq P_d$, and it is surjective because the $p_j$ generate $P$. By step 1.1 applied to the cokernel description, $\varphi$ is an epimorphism of $\operatorname{GrMod}_0(A)$. [step 1.1, L1, L4, L5]

3.1 Finite direct sums of projective objects of $\operatorname{GrMod}_0(A)$ are projective: if $P_1,\dots,P_n$ are projective and $q:E\twoheadrightarrow M$, $f:P_1\oplus\cdots\oplus P_n\to M$ are given, the composites $f\circ\jmath_j$ lift through $q$ by [L3], the universal property of the finite biproduct of [L2] assembles the $n$ lifts into $g$ with $g\circ\jmath_j$ equal to the $j$-th lift, and then $qg=f$ because both sides agree on every summand. Only finitely many lifts are chosen, one for each $j$. [step 2.1, L2, L3]

3.2 Assume now that $P$ is finite graded projective. With $\varphi:F\to P$ the degree-zero epimorphism of step 2.2, projectivity of $P$ and [L3] give a degree-zero $\psi:P\to F$ with $\varphi\psi=1_P$. Thus $P$ is a degree-zero direct summand of the finite direct sum $F$ of internal shifts $A\{r_j\}$. [step 2.2, L3, L5]

4.1 Conversely, let $P$ be a degree-zero direct summand of a finite direct sum $F=A\{r_1\}\oplus\cdots\oplus A\{r_n\}$, so that there are degree-zero maps $i:P\to F$ and $p:F\to P$ with $pi=1_P$. The module $A\{r_j\}$ is finitely generated (by its generator $1_j$) and projective by step 2.1, so $F$ is projective by step 3.1 and finitely generated; hence $F$ is finite graded projective, and its direct summand $P$ is projective by [L3] and finitely generated because $P=p(F)$ is generated by the images of a finite generating set of $F$. [step 2.1, step 3.1, L3, L5]

5.1 Steps 3.2 and 4.1 prove the two implications: $P$ is finite graded projective exactly when it is a degree-zero direct summand of a finite direct sum of internal shifts $A\{r_j\}$. The constructed data are a given finite homogeneous generating family, finitely many lifts indexed by that finite family, and one lift of the identity; no family indexed by an infinite set is selected, so the argument assumes no arbitrary-index choice. [step 3.2, step 4.1] ∎
