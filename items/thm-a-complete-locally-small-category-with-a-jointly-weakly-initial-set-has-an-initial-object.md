---
id: thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object
kind: theorem
title: "A complete locally small category with a jointly weakly initial set has an initial object, without class-indexed choice"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-weakly-initial-object-and-jointly-weakly-initial-set, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category, def-subcategory-and-full-subcategory, def-limit-and-colimit-of-a-diagram, def-equalizers-and-coequalizers, def-monomorphism-and-epimorphism, def-isomorphism-groupoid-and-connected-category]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, lemma A.1"
      url: "https://arxiv.org/pdf/1612.09375"
    - title: "E. Riehl, Category Theory in Context, lemma 4.7.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be complete and locally small. If $\mathcal C$ has a supplied jointly weakly initial set $\mathcal S$, then $\mathcal C$ has an initial object. The construction uses only the small diagram on $\mathcal S$ and one existential witness for each fixed target; it makes no class-indexed choice.

## Facts & Assumptions

**Given:** A complete locally small category $\mathcal C$ and a supplied jointly weakly initial set $\mathcal S$ ([[def-weakly-initial-object-and-jointly-weakly-initial-set]]).

[L1] Completeness provides a limit for every small diagram, including the equalizer diagrams used below ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L2] Local smallness makes every hom-collection a set, and a category is small when both its objects and morphisms form sets ([[def-small-locally-small-and-large-category]]).

[L3] The full subcategory on a supplied set of objects contains all morphisms between those objects ([[def-subcategory-and-full-subcategory]]).

[L4] A limiting cone $(L,p_S)$ has a unique mediating map from every cone over the same diagram ([[def-limit-and-colimit-of-a-diagram]]).

[L5] The equalizer $e:E\to L$ of $f,g:L\rightrightarrows C$ is monic and satisfies $fe=ge$ ([[def-equalizers-and-coequalizers]], [[def-monomorphism-and-epimorphism]]).

[L6] A monic split epimorphism is an isomorphism, and an isomorphism has a two-sided inverse ([[def-isomorphism-groupoid-and-connected-category]], [[def-monomorphism-and-epimorphism]]).

## Proof

**Proof technique:** constructive.

1.1 Regard $\mathcal S$ as the full subcategory it spans. Its objects form a set, and by [L2] the union of the hom-sets between them is a set, so this full subcategory is small. By [L1] its inclusion has a limiting cone $(L,p_S:L\to S)_{S\in\mathcal S}$. This remains valid when $\mathcal S$ is empty: then joint weak initiality implies that $\mathcal C$ has no objects, so the theorem's hypotheses cannot hold for a category with a target object. [L1, L2, L3, L4, construct]

2.1 Fix one target $C$. Joint weak initiality supplies some $S_0\in\mathcal S$ and one map $h:S_0\to C$, so $h\circ p_{S_0}:L\to C$ exists. The witness is chosen only for this fixed target, not simultaneously for a proper class of targets; hence $L$ is weakly initial. [step 1.1, choose]

3.1 Let $f,g:L\rightrightarrows C$ and let $e:E\to L$ be their equalizer. Weak initiality of $L$ gives $t:L\to E$. Put $r=e\circ t$. For each $S\in\mathcal S$, the composite $p_S\circ e\circ t:L\to S$ is a cone leg comparison: because $p_Se t$ and $p_S$ form cones over the full inclusion, uniqueness in [L4] gives $p_S r=p_S$ for every $S$. Joint monicity of the limit cone, which follows from [L4], gives $r=1_L$. [step 2.1, L4, L5, choose]

4.1 Thus $e$ is split epic as well as monic, so [L6] makes it invertible. From $fe=ge$ we obtain $f=g$. There is therefore exactly one morphism $L\to C$ for every target $C$, so $L$ is initial. [step 3.1, L5, L6, discharge-construct] ∎
