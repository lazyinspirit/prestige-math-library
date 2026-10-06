---
id: lem-endomorphism-ring-of-an-object-in-a-preadditive-category
kind: lemma
title: "Endomorphisms of an object of a preadditive category form a ring"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
justified_by: []
aliases: []
deps: [def-preadditive-category, def-ring, def-category, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups, def-endomorphism-ring-of-a-module, def-opposite-ring]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12 (End(P)^op for an object of an abelian category)"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, §6.3, Lemma 6.3.1 (S = Hom_R(M,M) as a ring acting on M)"
      url: "https://arxiv.org/pdf/2002.06055"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\mathcal C$ be a preadditive category and $P$ an object of $\mathcal C$. Then $\operatorname{End}_{\mathcal C}(P):=\mathcal C(P,P)$, with addition inherited from the abelian group structure on the hom-set and multiplication given by composition, is a unital ring with identity $1_P$; composition is bilinear in both variables, and the ring with the reversed multiplication is the opposite ring $\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$. For $\mathcal C$ the category of left $R$-modules this is the published endomorphism ring $\operatorname{End}_R(P)$ ([[def-endomorphism-ring-of-a-module]]). No choice is used.

## Facts & Assumptions

**Given:** A preadditive category $\mathcal C$ and an object $P$ of $\mathcal C$; write $E:=\operatorname{End}_{\mathcal C}(P)=\mathcal C(P,P)$, with addition the group operation of the hom-set and multiplication composition.

[F1] In a preadditive category every hom-set is an abelian group and composition is bilinear: $h\circ(f+g)=h\circ f+h\circ g$ and $(f+g)\circ k=f\circ k+g\circ k$ whenever the composites are defined ([[def-preadditive-category]]); equivalently, the covariant and contravariant hom-functors take values in abelian groups ([[thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]]).

[F2] A ring is a set with an addition making it an abelian group, a multiplication making it a monoid with two-sided identity $1$, and both distributive laws ([[def-ring]]).

[F3] Composition in a category is associative and unital: $h\circ(g\circ f)=(h\circ g)\circ f$ and $1_B\circ f=f=f\circ1_A$ for $f:A\to B$ ([[def-category]]).

[F4] For a unital ring $R$ the opposite ring $R^{\mathrm{op}}$ has the same underlying abelian group, identity and addition as $R$, with multiplication $a\star b:=ba$, and these operations form a unital ring ([[def-opposite-ring]]).

[F5] For a left $R$-module $M$, the published endomorphism ring is $\operatorname{End}_R(M)=\operatorname{Hom}_R(M,M)$ with pointwise addition and composition as multiplication ([[def-endomorphism-ring-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 (Addition makes $E$ an abelian group.) The set $E=\mathcal C(P,P)$ is a hom-set of the preadditive category $\mathcal C$, hence an abelian group under its addition, with zero $0_{P,P}$ and additive inverses $-f$; this is axiom (R1) of [F2] for $E$. [F1, F2, given]

1.2 (Composition is an associative unital operation on $E$.) If $f,g\in E$ then $g\circ f:P\to P$, so composition restricts to a binary operation on $E$; it is associative by [F3], and the identity morphism $1_P$ lies in $E$ and satisfies $1_P\circ f=f=f\circ1_P$ by [F3]. Hence $(E,\circ,1_P)$ is a monoid, which is axiom (R2). [F3, given]

1.3 (Both distributive laws and bilinearity.) For $f,g,h\in E$, bilinearity of composition in the preadditive category gives $h\circ(f+g)=h\circ f+h\circ g$ and $(f+g)\circ h=f\circ h+g\circ h$; these are the two distributive laws (R3) of [F2], and they say exactly that composition is bilinear in both variables on $E$. [F1, given]

2.1 ($E$ is a unital ring.) By steps 1.1, 1.2 and 1.3 the set $E$ with addition and composition satisfies (R1), (R2) and (R3) of [F2], so $E$ is a unital ring whose identity is $1_P$; no element outside the given category is chosen. [F2, step 1.1, step 1.2, step 1.3]

3.1 (The reversed multiplication is the opposite ring.) Define $f\star g:=g\circ f$ on $E$; then $(E,+,\star,1_P)$ is exactly the opposite ring of [F4] applied to the ring of step 2.1, because [F4] verifies the ring axioms for the reversed multiplication on the same abelian group with the same identity. [F4, step 2.1]

3.2 (Module case.) If $\mathcal C$ is the category of left $R$-modules, then $\mathcal C(P,P)=\operatorname{Hom}_R(P,P)$ with pointwise addition and composition, so the ring constructed in step 2.1 is exactly the published endomorphism ring $\operatorname{End}_R(P)$ of [F5]. [F5, step 2.1]

4.1 Steps 1.1-1.3 verify the ring axioms for $\operatorname{End}_{\mathcal C}(P)$ and give the bilinearity of composition, step 2.1 assembles them into the unital ring structure with identity $1_P$, step 3.1 identifies $\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$, and step 3.2 matches the published module-case definition; nothing outside $\mathcal C$ is chosen and no choice principle is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 3.2] ∎
