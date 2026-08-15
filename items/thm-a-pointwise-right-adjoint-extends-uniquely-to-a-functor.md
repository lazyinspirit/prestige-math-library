---
id: thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor
kind: theorem
title: 'A supplied pointwise right adjoint extends uniquely to a functor'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-representable-functor-and-representation, thm-yoneda-lemma-is-natural-in-both-variables, thm-the-adjunction-hom-set-bijection-under-local-smallness]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.4.4'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 4.2'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be a functor between locally small categories. Suppose an object $Gd\in\mathcal C$ is supplied for every $d\in\mathcal D$, together with an isomorphism

$$ \theta_d:\mathcal D(F(-),d)\cong\mathcal C(-,Gd) $$

natural in the variable of $\mathcal C$. Then the object assignment $d\mapsto Gd$ has a unique functor structure for which the $\theta_d$ are natural in $d$, and $F\dashv G$.

## Facts & Assumptions

**Given:** The functor $F$, supplied objects $Gd$, and representing isomorphisms $\theta_d$ as in the Statement.

[F1] A representation of a presheaf is an object together with a natural isomorphism from the corresponding representable presheaf ([[def-presheaf-representable-functor-and-representation]]).

[F2] The Yoneda bijection is natural in both the represented object and the presheaf, so a natural transformation between represented presheaves is induced by a unique morphism between their representing objects ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[L1] A natural family $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ determines an adjunction ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 For $h:d\to d'$, postcomposition by $h$ gives a natural transformation $\mathcal D(F(-),d)\Rightarrow\mathcal D(F(-),d')$. Transport it through $\theta_d$ and $\theta_{d'}$; [F2] supplies a unique morphism $G(h):Gd\to Gd'$ representing the result. [F1, F2, construct]

2.1 Postcomposition by an identity is the identity transformation, so Yoneda uniqueness gives $G(1_d)=1_{Gd}$. [step 1.1, F2]

2.2 Postcomposition by $kh$ is the composite of postcomposition by $h$ and by $k$, so Yoneda uniqueness gives $G(kh)=G(k)G(h)$. Thus $G$ is a functor. [step 1.1, F2]

3.1 The definition in step 1.1 makes $\theta$ natural in $d$; it was natural in $c$ by hypothesis. Therefore [L1] gives $F\dashv G$. [step 1.1, step 2.1, step 2.2, L1]

4.1 If another functor structure made every $\theta_d$ natural, its value on $h$ would induce the same transported natural transformation, so [F2] would force it to equal $G(h)$. The supplied object assignment also shows that no class-sized selection was made in the proof. [step 1.1, F2] ∎
