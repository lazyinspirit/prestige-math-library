---
id: thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree
kind: theorem
title: "The cancellation and epimorphism descriptions of a generator agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category, def-the-axioms-ab3-and-ab3-star, thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Proposition 1.9.1"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Carlos E. Parra, Manuel Saorin, and Simone Virili, Section 2.1 and Lemma 2.7"
      url: "https://arxiv.org/pdf/2103.14159"
pipeline_run: frontier-22
---

## Statement

Let $\mathcal A$ be a locally small abelian category satisfying AB3, and let
$G$ be an object of $\mathcal A$. Then the following are equivalent:

1. $G$ is a generator.
2. The representable functor $\mathcal A(G,-)$ is faithful.
3. For every object $A$, the canonical morphism
   $$\coprod_{u\in\mathcal A(G,A)} G \longrightarrow A$$
   is an epimorphism.

## Facts & Assumptions

**Given:** A locally small abelian category $\mathcal A$ satisfying AB3 and an object $G$.

[L1] A generator is exactly a one-object separating set ([[def-generator-and-cogenerator-of-a-category]]).

[L2] AB3 supplies the small coproducts indexed by hom-sets ([[def-the-axioms-ab3-and-ab3-star]]).

[L3] In a locally small category, a separating set is equivalently a jointly faithful family of representables ([[thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L3], condition 1 is equivalent to condition 2: the singleton $\{G\}$ is separating exactly when the one-member family $\mathcal A(G,-)$ is faithful. [L1, L3]

1.2 Assume condition 2, and fix an object $A$. By [L2], form the canonical map $e_A:\coprod_{u\in\mathcal A(G,A)}G\to A$ whose $u$-th coproduct injection is sent to $u$. Let $q:A\to Q$ be its cokernel. If $q\ne0$, faithfulness of $\mathcal A(G,-)$ gives some $u:G\to A$ with $q u\ne0$. But $u$ is one of the coproduct components of $e_A$, so $q u=0$ because $q e_A=0$, a contradiction. Hence $q=0$, and therefore $e_A$ is epic. So condition 2 implies condition 3. [L2, L3, construct]

2.1 Assume condition 3. If $f,g:X\to Y$ are distinct, then $h:=f-g\ne0$. Apply condition 3 to $X$: if $h u=0$ for every $u:G\to X$, then $h e_X=0$, and since $e_X$ is epic that would force $h=0$. So some $u:G\to X$ satisfies $h u\ne0$, equivalently $f u\ne g u$. Thus $G$ separates maps, hence is a generator by [L1]. Therefore condition 3 implies condition 1. [L1, step 1.2, algebra]

3.1 Steps 1.1, 1.2, and 2.1 prove the equivalence of the three descriptions. [step 1.1, step 1.2, step 2.1] ∎
