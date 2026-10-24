---
id: lem-scheme-functor-is-algebraic-space
kind: lemma
title: "Every representable functor is an algebraic space"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-fppf-sheaf-and-sheafification
  - def-representable-morphism-of-presheaves
  - def-algebraic-space-as-fppf-sheaf
  - def-presheaf-representable-functor-and-representation
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - def-fibre-product-schemes-universal-property
  - thm-fibre-products-of-schemes-exist
  - def-etale-morphism-schemes
  - def-axiom-of-choice
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
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Lemma 65.6.2"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.6.2 (tag 025Z), every scheme is an algebraic space"
---

## Statement

Assume the Axiom of Choice inherited from the quotient/sheaf and descent
suppliers ([[def-axiom-of-choice]]). For every $S$-scheme $T$ the
representable presheaf $h_T$
([[def-presheaf-representable-functor-and-representation]]) is an algebraic
space over $S$ ([[def-algebraic-space-as-fppf-sheaf]]): $h_T$ is an fppf
sheaf, its diagonal $h_T\to h_T\times h_T=h_{T\times_ST}$ is representable by
schemes because $T\times_ST$ is a scheme
([[thm-fibre-products-of-schemes-exist]]), and the identity $h_T\to h_T$ is
representable, etale and surjective. Consequently $T\mapsto h_T$ embeds the
category of $S$-schemes fully faithfully into the category of algebraic
spaces over $S$.

## Facts & Assumptions

**Given:** An $S$-scheme $T$ and its represented presheaf $h_T=\operatorname{Mor}_S(-,T)$.

[F1] Representable presheaves are fppf sheaves, under the Axiom of Choice recorded there ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[def-fppf-sheaf-and-sheafification]]).

[F2] An algebraic space over $S$ is an fppf sheaf whose diagonal is representable by schemes and which admits a representable etale surjective morphism from a scheme; a morphism of presheaves is representable by schemes when every fibre product along a morphism from a scheme is a scheme, and its fibrewise property is read on those base changes ([[def-algebraic-space-as-fppf-sheaf]], [[def-representable-morphism-of-presheaves]]).

[F3] Fibre products of schemes exist and the Yoneda embedding preserves them: $h_{T\times_ST}\cong h_T\times h_T$ and more generally $h_{T\times_{T'}T''}\cong h_T\times_{h_{T'}}h_{T''}$ ([[thm-fibre-products-of-schemes-exist]], [[def-fibre-product-schemes-universal-property]], [[def-presheaf-representable-functor-and-representation]]).

[F4] The identity morphism of a scheme is etale and surjective, and the representable presheaf of an $S$-scheme $T$ is $h_T=\operatorname{Mor}_S(-,T)$ ([[def-etale-morphism-schemes]], [[def-presheaf-representable-functor-and-representation]]). Full faithfulness is proved directly in step 2.1 below.



## Proof

1.1 The sheaf condition. $h_T$ is an fppf sheaf by [F1]: a morphism $T'\to T$ is determined by its restrictions to an fppf covering of $T'$ and such restrictions glue uniquely, which is exactly the sheaf condition for the represented functor. [F1, given]

1.2 The diagonal. The diagonal $h_T\to h_T\times h_T$ corresponds under the Yoneda identification $h_T\times h_T\cong h_{T\times_ST}$ of [F3] to the morphism $h_T\to h_{T\times_ST}$ induced by the diagonal $T\to T\times_ST$. To test representability, let $\xi\colon Z\to h_T\times h_T$ be a morphism from a scheme $Z$, corresponding to a morphism $Z\to T\times_ST$; the fibre product $h_T\times_{h_T\times h_T}Z$ is then represented by the fibre product $Z\times_{T\times_ST}T$, which is a scheme by [F3]. Hence the diagonal is representable by schemes. [F2, F3]

1.3 The etale cover. Condition 3 of [F2] is satisfied by the identity $h_T\to h_T$: it is representable, because for any $\xi\colon Z\to h_T$ the fibre product $h_T\times_{h_T}Z\cong Z$ is a scheme, and it is etale and surjective because the identity of $T$ is etale and surjective by [F4] and representability is witnessed by the identity base changes. Hence $h_T$ is an algebraic space. [F2, F4]

2.1 Full faithfulness. For $S$-schemes $T,T'$ and a natural transformation $\alpha:h_T\to h_{T'}$ of the presheaves in [F4], put $g=\alpha_T(\operatorname{id}_T)\in\operatorname{Mor}_S(T,T')$. For every $S$-scheme $Z$ and $f:Z\to T$, naturality along $f$ gives $\alpha_Z(f)=h_{T'}(f)(\alpha_T(\operatorname{id}_T))=g\circ f$, since $h_T(f)(\operatorname{id}_T)=f$. Thus $g$ determines every component of $\alpha$. Conversely any $S$-morphism $g:T\to T'$ defines the natural transformation $f\mapsto g\circ f$, because precomposition commutes with this formula; evaluating at $\operatorname{id}_T$ recovers $g$. These constructions are inverse, proving the required hom-set bijection without importing a full-faithfulness theorem from the representation definition. Together with step 1.3 this embeds schemes fully faithfully into algebraic spaces. [F4, step 1.3] ∎
