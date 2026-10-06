---
id: cex-finite-length-and-finite-hom-do-not-imply-finite-category
kind: counterexample
title: "Finite length and finite Hom do not imply a finite category"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
justified_by: []
aliases: []
deps: [def-finite-k-linear-abelian-category, def-generator-and-cogenerator-of-a-category, def-locally-finite-k-linear-abelian-category, def-projective-object, def-simple-object, def-superfluous-subobject-and-projective-cover-in-an-abelian-category, lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement refuted

Every $k$-linear abelian category with finite-dimensional hom-spaces,
finite-length objects and enough projective covers is a finite $k$-linear
abelian category.

## Facts & Assumptions

**Given:** A field $k$ and the category $\mathcal C$ of finite-support $\mathbb N$-indexed families $(V_n)$ of finite-dimensional $k$-vector spaces with componentwise linear maps.

[L1] $\mathcal C$ is $k$-linear and abelian; every hom-space is finite-dimensional over $k$; every object has finite length and is projective; the objects $S_m$ with $(S_m)_m=k$ and $(S_m)_n=0$ for $n\ne m$ are pairwise non-isomorphic simple objects; and no object of $\mathcal C$ is a generator ([[lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite]]).

[L2] A projective cover of $X$ is an essential epimorphism $Q\twoheadrightarrow X$ with $Q$ projective; an epimorphism is essential when its kernel is superfluous, and the zero subobject is superfluous because $[0]\vee[m]=[m]$ for every subobject $[m]$ ([[def-superfluous-subobject-and-projective-cover-in-an-abelian-category]]).

[L3] A locally finite $k$-linear abelian category has finite-dimensional hom-spaces and every object of finite length; a finite $k$-linear abelian category is such a category with finitely many isomorphism classes of simple objects and enough projectives, that is, a projective cover of every simple object ([[def-locally-finite-k-linear-abelian-category]], [[def-finite-k-linear-abelian-category]], [[def-simple-object]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the category $\mathcal C$ is a $k$-linear abelian category with finite-dimensional hom-spaces and finite-length objects; equivalently it is a locally finite $k$-linear abelian category in the sense of [L3]. [L1, L3, given]

2.1 Every simple object $S$ of $\mathcal C$ has a projective cover: $S$ is projective by [L1], so the identity $1_S:S\to S$ is an epimorphism with projective source whose kernel is the zero subobject, which is superfluous by [L2]; hence $1_S$ is an essential epimorphism and a projective cover of $S$. [L1, L2, step 1.1]

3.1 Thus $\mathcal C$ satisfies all the hypotheses of the refuted statement: it is $k$-linear and abelian with finite-dimensional hom-spaces, all objects have finite length, and every simple object has a projective cover by step 2.1. But by [L1] its simple objects $S_m$ are pairwise non-isomorphic, one for each $m\in\mathbb N$, so $\mathcal C$ has infinitely many isomorphism classes of simple objects; by [L3] it is therefore not a finite $k$-linear abelian category. This refutes the statement. [L1, L3, step 2.1]

4.1 The failure is exactly the failure of the finite-simple-classes clause of the intrinsic definition while all the other clauses hold, and [L1] additionally supplies that no object of $\mathcal C$ is a generator; the construction of [L1] uses no choice, so no choice is used here. [L1, given] ∎
