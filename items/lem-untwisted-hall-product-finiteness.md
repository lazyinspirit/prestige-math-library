---
id: lem-untwisted-hall-product-finiteness
kind: lemma
title: "Untwisted Hall structure constants and products are finite"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-hall-finitary-abelian-category
  - def-untwisted-hall-algebra
  - thm-short-five-lemma-in-an-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§1.1 and 1.3"
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

For a finitary abelian category, each untwisted Hall coefficient
$g^L_{M,N}$ is finite and depends only on the isomorphism classes of
$M,N,L$. For fixed $M,N$, only finitely many isomorphism classes $[L]$
have $g^L_{M,N}\ne0$. Hence the basis formula in
[[def-untwisted-hall-algebra]] is a finite sum in its direct-sum module.

## Facts & Assumptions

**Given:** A finitary abelian category $\mathcal A$, objects $M,N,L$, and
the coefficient $g^L_{M,N}$ from the untwisted Hall product.

[F1] For every pair $X,Y$, the sets $\operatorname{Hom}(X,Y)$ and
$\operatorname{YExt}^1(X,Y)$ are finite; the latter consists of Yoneda
classes of short exact sequences with the displayed endpoints
([[def-hall-finitary-abelian-category]]).

[F2] $g^L_{M,N}$ counts equivalence classes of monomorphisms $N\to L$
under precomposition by isomorphisms of $N$, retaining those whose cokernel
is isomorphic to $M$ ([[def-untwisted-hall-algebra]]).

[F3] A morphism between short exact sequences that is the identity on both
endpoints is an isomorphism on the middle object, by the short five lemma
([[thm-short-five-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 An isomorphism of middle objects transports subobjects and induces an isomorphism of their cokernel quotients; replacing either endpoint by an isomorphic object preserves the two type conditions. Thus the count in [F2] depends only on $[M],[N],[L]$. [F2, algebra]

1.2 For fixed $L$, the equivalence classes counted by [F2] are a quotient of the finite set $\operatorname{Hom}(N,L)$ from [F1]. The subset whose cokernel is isomorphic to $M$ is therefore finite. [F1, F2]

1.3 Every elementary map in the generating relation for [F1] preserves the middle-object isomorphism class by [F3], and so does its reflexive, symmetric and transitive closure. Thus taking the middle-object class defines a map from the finite set $\operatorname{YExt}^1(M,N)$. If $g^L_{M,N}\ne0$, a counted subobject and quotient give a short exact sequence $0\to N\to L\to M\to0$ after transporting its endpoints by isomorphisms, so $[L]$ lies in the image. That image is finite, proving finite support without simultaneous choices of extension representatives. [F1, F2, F3, choose]

2.1 Each coefficient is a natural number and the support is finite by steps 1.2–1.3. Mapping an integer $n$ to $n1_R$ therefore gives a well-defined element of the direct sum in [F2], with no automorphism denominator or additional finiteness condition. [F2, step 1.2, step 1.3, algebra] ∎