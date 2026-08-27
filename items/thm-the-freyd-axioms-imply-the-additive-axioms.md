---
id: thm-the-freyd-axioms-imply-the-additive-axioms
kind: theorem
title: "Freyd's axioms force the additive structure and recover the AB2 definition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-freyd-axioms-for-an-abelian-category, thm-biproduct-data-characterisation-without-addition, thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids, thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique, def-abelian-category, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, thm-a-morphism-factors-uniquely-through-its-coimage, thm-a-morphism-factors-uniquely-through-its-image, thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique, cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Theorem 2.39"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "Barry Mitchell, Theory of Categories, Proposition 18.4"
      url: "https://archive.org/details/theoryofcategori0000mitc"
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.11"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

If a category satisfies Freyd's axioms A0, A1, A1*, A2, A2*, A3, and A3*, then
it is additive. Moreover, for every morphism the canonical map from the
coimage to the image is an isomorphism, so the category is abelian in the
working sense of [[def-abelian-category]].

## Facts & Assumptions

**Given:** A category $\mathcal A$ satisfying Freyd's axioms A0, A1, A1*, A2,
A2*, A3, and A3*.

[L1] Freyd's axioms are the zero-object, binary product, binary coproduct,
kernel, cokernel, normal-monic, and conormal-epic clauses listed in
[[def-the-freyd-axioms-for-an-abelian-category]].

[L2] Once one object carries both the product and coproduct structures with the
standard zero equations, the canonical comparison is the identity and the
object is a biproduct
([[thm-biproduct-data-characterisation-without-addition]]).

[L3] Finite biproducts give a canonical commutative-monoid enrichment on
hom-sets, and [L4] makes that enrichment unique
([[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]],
[[thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]]).

[L4] Earlier on this page, image, coimage, their factorization maps, and the
canonical coimage-to-image morphism were constructed from kernels and
cokernels
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]],
[[thm-a-morphism-factors-uniquely-through-its-coimage]],
[[thm-a-morphism-factors-uniquely-through-its-image]],
[[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]).

[L5] Every coequalizer is epic
([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 Freyd's axioms already make $\mathcal A$ balanced: if $m:A\to B$ is monic and epic, the normality clause writes $m$ as a kernel of some $g:B\to C$, so $gm=0$; because $m$ is epic, $g=0$, and the identity $1_B$ is a kernel of $0_{B,C}$, so $m$ is isomorphic to $1_B$. [L1]

2.1 Let $S=A\sqcup B$ and $P=A\times B$ be the coproduct and product supplied by [L1]. The split epics $[1_A,0]:S\to A$ and $[0,1_B]:S\to B$ are cokernels of the opposite injections because maps out of a coproduct are determined by the injections; dually the split monics $\langle1_A,0\rangle:A\to P$ and $\langle0,1_B\rangle:B\to P$ are kernels of the opposite projections because maps into a product are determined by the projections. Therefore the canonical comparison $c:S\to P$ is both monic and epic, so step 1.1 makes it an isomorphism. Thus binary biproducts exist, and together with the zero-object clause this gives finite biproducts. [L1, L2, step 1.1]

3.1 By [L3], the finite biproducts from step 2.1 give a canonical commutative-monoid law on each hom-set. On $A\oplus A$, Mitchell's shear $\theta=\begin{pmatrix}1_A&1_A\\0&1_A\end{pmatrix}$ is monic and epic by the same kernel-cokernel argument used in step 2.1, hence invertible by step 1.1. Writing $\theta^{-1}=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the matrix identity $\theta\theta^{-1}=1$ yields $1_A+b=0$ in the monoid law of [L3]. For every $x:A\to B$, the morphism $xb$ is therefore an additive inverse of $x$, so the hom-monoids are abelian groups. Hence $\mathcal A$ is preadditive, and with finite biproducts it is additive. [L3, step 1.1, step 2.1]

4.1 Let $f:A\to B$, let $k:K\to A$ be its kernel, let $p:A\to Q=\operatorname{coim}(f)$ be the cokernel of $k$, let $m:I=\operatorname{im}(f)\to B$ be the kernel of a cokernel of $f$, and let $u:Q\to I$ be the canonical morphism from [L4]. Put $i:=m u:Q\to B$. To show that $i$ is monic, let $x:X\to Q$ satisfy $ix=0$, let $q:Q\to Q'$ be a cokernel of $x$, and write $i=j q$. Since $q p$ is a composite of cokernels, [L5] makes it epic, so the conormality clause gives some $h:H\to A$ with $q p=\operatorname{coker}(h)$. Now $f h=i p h=j q p h=0$, so $h$ factors through $k$; hence $p h=0$. Because $q p$ is a cokernel of $h$, the map $p$ factors through $q p$ as $p=p' q p$. Since $p$ is epic by [L5], $p' q=1_Q$, so $q$ is monic. Then $q x=0$ forces $x=0$, and $i$ is monic. [L1, L4, L5, step 3.1]

5.1 The dual argument shows that the factorization map $e:=u p:A\to I$ is epic: starting from a kernel of a map out of $I$, one passes to the opposite category and repeats step 4.1. Since $m$ is monic and $p$ is epic by [L5], the equalities $m u=i$ and $u p=e$ imply that $u$ itself is monic and epic. Step 1.1 then makes $u$ an isomorphism. [L1, L4, L5, step 1.1, step 4.1]

6.1 Thus every morphism has kernels and cokernels and an invertible canonical coimage-to-image comparison. Together with the additivity from step 3.1, this is exactly the working abelian definition of [[def-abelian-category]]. [step 3.1, step 5.1] ∎
