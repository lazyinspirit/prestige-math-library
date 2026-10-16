---
id: thm-qa-finite-abelian-evaluation-map-isomorphism
kind: theorem
title: Finite abelian group is canonically isomorphic to its double dual
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, def-additive-character-of-a-finite-abelian-group, thm-qa-finite-abelian-dual-has-same-cardinality, thm-qa-finite-abelian-character-dual-is-finite-abelian-group, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, lem-qa-character-dual-of-a-product-factors, lem-qa-cyclic-group-has-n-characters, thm-complex-nth-roots-and-roots-of-unity, thm-subset-of-a-finite-set, def-finite-cardinality, def-group-isomorphism-and-automorphism]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---


## Statement

For a finite abelian group $G$, give $\widehat G$ its pointwise multiplication. Its dual $\widehat{\widehat G}$ consists of functions $\Phi:\widehat G\to\mathbb C^{\times}$ satisfying $\Phi(\chi\psi)=\Phi(\chi)\Phi(\psi)$. The evaluation map
$$\operatorname{ev}:G\longrightarrow\widehat{\widehat G},\qquad \operatorname{ev}(g)(\chi):=\chi(g),$$
is a group isomorphism. The map itself is canonical; a decomposition into cyclic factors is used only to prove it is injective.

## Facts & Assumptions

**Given:** A finite abelian group $G$ and its pointwise character dual.

[F1] $\widehat G$ is a finite abelian group under pointwise multiplication ([[thm-qa-finite-abelian-character-dual-is-finite-abelian-group]]).

[F2] A finite abelian group and its dual have equal cardinality ([[thm-qa-finite-abelian-dual-has-same-cardinality]]).

[F3] Every finite abelian group has an invariant-factor product decomposition ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[F4] Characters of a finite product factor coordinatewise ([[lem-qa-character-dual-of-a-product-factors]]); on a cyclic factor $C_n$, a character may take generator value $\omega_n:=\exp(2\pi i/\iota_{\mathbb R}(n))$, whose powers $\omega_n^m$ for $0\le m<n$ are distinct ([[lem-qa-cyclic-group-has-n-characters]], [[thm-complex-nth-roots-and-roots-of-unity]]).

[F5] If a subset $B$ of a finite set $A$ has $|B|=|A|$, then $B=A$ ([[thm-subset-of-a-finite-set]]); finite cardinality is transported by bijections ([[def-finite-cardinality]]).

[F6] A group isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

[F7] $\widehat G$ is the set of additive characters with pointwise multiplication; its elements satisfy $\chi(g+h)=\chi(g)\chi(h)$ ([[def-qa-finite-abelian-character-dual]]).

[F8] An additive character satisfies $\chi(-h)=\chi(h)^{-1}$ ([[def-additive-character-of-a-finite-abelian-group]]).

## Proof


1.1 For each $g\in G$, evaluation on the dual group [F7] is a character: if $\chi,\psi\in\widehat G$, then $\operatorname{ev}(g)(\chi\psi)=\chi(g)\psi(g)=\operatorname{ev}(g)(\chi)\operatorname{ev}(g)(\psi)$. Thus $\operatorname{ev}(g)\in\widehat{\widehat G}$. [F1, F7, given, construct]

1.2 If $G$ is nontrivial, fix the isomorphism $\varphi:G\to\prod_i C_{n_i}$ from [F3]. For any nonzero $g$, some coordinate is $\varphi(g)_j=[m]$ with $1\le m<n_j$. In the product, the character trivial on every coordinate except $j$, with generator value $\omega_{n_j}$ on that factor, exists by [F4]. Its composite $\chi$ with $\varphi$ is a character of $G$ and satisfies $\chi(g)=\omega_{n_j}^m\ne1$, because the listed $n_j$ roots are distinct and $m$ is nonzero modulo $n_j$. Thus every nonzero element is detected by a character. The trivial-group case has no nonzero element and satisfies this statement vacuously. [F3, F4, given, construct]

2.1 Evaluation is a homomorphism from $G$ to the pointwise group $\widehat{\widehat G}$, since for every $\chi$, $\operatorname{ev}(g+h)(\chi)=\chi(g+h)=\chi(g)\chi(h)=(\operatorname{ev}(g)\operatorname{ev}(h))(\chi)$. [F1, given, step 1.1]

2.2 If $\operatorname{ev}(g)=\operatorname{ev}(h)$, then for every $\chi\in\widehat G$, [F7] and [F8] give $\chi(g-h)=\chi(g)\chi(h)^{-1}=1$. If $g-h\ne0$, step 1.2 supplies a character with $\chi(g-h)\ne1$, a contradiction. Hence $g=h$ and evaluation is injective. [F7, F8, step 1.2, given]

3.1 By [F2], $|\widehat G|=|G|$ and, applying [F2] to the finite abelian group $\widehat G$ from [F1], $|\widehat{\widehat G}|=|\widehat G|$. Thus the finite domain and codomain of the injective map in step 2.2 have equal cardinality. [F1, F2, step 2.2]

4.1 The image of $\operatorname{ev}$ is a subset of $\widehat{\widehat G}$ with the same finite cardinality as that codomain, because $\operatorname{ev}$ is injective. By [F5] the image is the whole codomain, so $\operatorname{ev}$ is bijective. Together with step 2.1 and the definition [F6], it is a group isomorphism. [F5, F6, step 2.1, step 3.1] ∎

