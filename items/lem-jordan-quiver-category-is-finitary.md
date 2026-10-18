---
id: lem-jordan-quiver-category-is-finitary
kind: lemma
title: "Jordan-quiver categories are abelian; finite-field models are finitary"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-jordan-quiver-nilpotent-representation-category
  - def-hall-finitary-abelian-category
  - def-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.1"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2, §2.1"
      url: "https://arxiv.org/pdf/1810.08238v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For every field $k$, the category $\mathcal J_k$ of
[[def-jordan-quiver-nilpotent-representation-category]] is abelian, and its
subobjects are exactly the $x$-invariant subspaces of each object $(V,x)$.
When $k$ is finite, $\mathcal J_k$ is small and its Hom sets and Yoneda
$\operatorname{Ext}^1$ sets are finite. Thus it satisfies the finitary
hypotheses of [[def-hall-finitary-abelian-category]].

## Facts & Assumptions

**Given:** A field $k$ and the category $\mathcal J_k$; when $k$ is finite, two fixed objects $M,N$ for the extension-count argument.

[F1] Objects are finite-dimensional vector spaces with nilpotent endomorphisms; morphisms are the intertwining linear maps $f$ satisfying $fx=x'f$ ([[def-jordan-quiver-nilpotent-representation-category]]).

[F2] Finitary means that the category is small or is supplied with a small skeleton and that Hom and Yoneda $\operatorname{Ext}^1$ sets are finite ([[def-hall-finitary-abelian-category]]).

[F3] An abelian category is additive, has kernels and cokernels, and its canonical coimage-to-image maps are isomorphisms ([[def-abelian-category]]).

[F4] Here a monomorphism is a morphism cancellable on the left.

[F5] A subobject is a mutual-factorisation class of monomorphisms into its target ([[def-hall-finitary-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Fix a morphism $f$ intertwining two nilpotent endomorphisms. Its kernel and image are invariant, and the induced endomorphism on its cokernel is nilpotent. Intertwining maps are closed under addition, composition is bilinear, and the ordinary finite direct sums with diagonal endomorphisms and the zero object have their vector-space biproduct universal properties. Choose bases for the kernel, image, and cokernel of this one map and transport them to standard $k^d$ objects; their universal properties are preserved. The coimage-to-image isomorphism is an intertwiner because $f$ commutes with the endomorphisms. This verifies the abelian-category clauses in [F3]. [F1, F3, algebra, choose]

1.2 For any field $k$, the standard-coordinate objects and matrices between them form sets, since they are a union indexed by pairs of natural numbers of sets of matrices over $k$; hence $\mathcal J_k$ is small. If $k$ is finite, there are finitely many matrices of each size, and each Hom set is a subset of a finite set of matrices, so Hom sets are finite. [F1, F2, algebra]

1.3 Now suppose $k$ is finite and fix objects $M=(k^m,x_M)$ and $N=(k^n,x_N)$. In a short exact sequence $0\to N\to E\to M\to0$, the middle space has dimension $m+n$. After identifying it with $k^{m+n}$, only finitely many nilpotent matrices and endpoint maps are possible. Thus the set of such sequences, and its quotient by Yoneda equivalence, are finite. [F1, F2, algebra]

1.4 A monic intertwiner is injective: if $f$ has a nonzero kernel vector $w$, the source nilpotent operator $x$ preserves $\ker f$. Choose the least $j\ge1$ with $x^j w=0$; then $v=x^{j-1}w$ is nonzero, lies in the kernel, and satisfies $xv=0$. The map $S\to\operatorname{dom}(f)$ sending $1$ to $v$ is nonzero and intertwines, but its composite with $f$ is zero, contradicting left cancellation [F4]. Conversely, every injective intertwiner is monic by linear injectivity. [F1, F4, algebra]

2.1 By step 1.4, every monomorphism identifies its domain with an invariant subspace of its target. Conversely, every invariant subspace carries the restricted nilpotent endomorphism; choosing a basis for this single finite-dimensional subspace and transporting the endomorphism to $k^d$ represents its inclusion by a monic map in the standard-coordinate model. Two such monic maps have the same image exactly when they mutually factor: maps with the same image are related by the induced intertwining isomorphism of their domains, and mutual factorisation forces both image inclusions. By [F5], this is precisely equality of subobject classes. [F1, F5, step 1.4, construct, algebra]

3.1 The category is abelian by step 1.1 and small by step 1.2. For finite $k$, its Hom and Yoneda extension sets are finite by steps 1.2 and 1.3, exactly the finitary conditions in [F2]; step 2.1 proves the stated subobject description for every field. [F2, step 1.1, step 1.2, step 1.3, step 2.1] ∎
