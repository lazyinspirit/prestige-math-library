---
id: thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object
kind: theorem
title: "A complete locally small category with a jointly weakly initial set has an initial object, without class-indexed choice"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-weakly-initial-object-and-jointly-weakly-initial-set, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category, def-subcategory-and-full-subcategory, def-limit-and-colimit-of-a-diagram, def-equalizers-and-coequalizers, def-monomorphism-and-epimorphism, def-isomorphism-groupoid-and-connected-category, cor-equalizers-are-monic-and-coequalizers-are-epic]
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

[L5] An **equalizer** of $f,g:A\rightrightarrows B$ is a morphism $e:E\to A$ with $fe=ge$ such that every $h:X\to A$ with $fh=gh$ factors as $h=eu$ for a unique $u:X\to E$ ([[def-equalizers-and-coequalizers]]).

[L6] Every equalizer morphism is monic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

[L7] A morphism $f:A\to B$ is an isomorphism if there is $g:B\to A$ with $g\circ f=1_A$ and $f\circ g=1_B$ ([[def-isomorphism-groupoid-and-connected-category]]); a morphism is monic when it is left-cancellable ([[def-monomorphism-and-epimorphism]]).

## Proof

**Proof technique:** constructive.

1.1 Regard $\mathcal S$ as the full subcategory it spans. Its objects form a set, and by [L2] the union of the hom-sets between them is a set, so this full subcategory is small. By [L1] its inclusion has a limiting cone $(L,p_S:L\to S)_{S\in\mathcal S}$. This remains valid when $\mathcal S$ is empty: then joint weak initiality implies that $\mathcal C$ has no objects, so the theorem's hypotheses cannot hold for a category with a target object. [L1, L2, L3, L4, construct]

2.1 Fix one target $C$. Joint weak initiality supplies some $S_0\in\mathcal S$ and one map $h:S_0\to C$, so $h\circ p_{S_0}:L\to C$ exists. The witness is chosen only for this fixed target, not simultaneously for a proper class of targets; hence $L$ is weakly initial. [step 1.1, choose]

2.2 By [L2] the collection $\mathcal C(L,L)$ is a set, so the one-object category whose arrows are the endomorphisms of $L$ is small, and sending its object to $L$ and each arrow to itself is a diagram. By [L1] that diagram has a limit; write its single leg as $j:I\to L$. The cone condition says exactly that $\alpha\circ j=j$ for every $\alpha\in\mathcal C(L,L)$, and $j$ is monic, since $j\circ x=j\circ y$ makes $x$ and $y$ both mediate the same cone, so the uniqueness clause of [L4] gives $x=y$. [step 1.1, L1, L2, L4, construct]

3.1 $I$ is weakly initial: for a target $C$, step 2.1 supplies a map $L\to C$ and composing it with $j$ gives $I\to C$. Again one witness is used for one fixed target. [step 2.1, step 2.2, choose]

4.1 Let $f,g:I\rightrightarrows C$ and let $m:K\to I$ be their equalizer, which exists by [L1] and is monic by [L6]; it satisfies $fm=gm$ by [L5]. Step 2.1 gives $u:L\to K$, so $j\circ m\circ u:L\to L$ is an endomorphism of $L$ and step 2.2 gives $(j\circ m\circ u)\circ j=j$. Rewriting the left side as $j\circ(m\circ u\circ j)$ and cancelling the monomorphism $j$ by [L7] yields $m\circ u\circ j=1_I$. Hence $m$ is a split epimorphism as well as monic, so $m\circ(u\circ j\circ m)=(m\circ u\circ j)\circ m=m=m\circ 1_K$ and left-cancelling $m$ gives $u\circ j\circ m=1_K$; thus $m$ is an isomorphism by [L7]. From $fm=gm$ and the invertibility of $m$ we get $f=g$. There is therefore exactly one morphism $I\to C$ for every target $C$, so $I$ is an initial object of $\mathcal C$. [step 2.1, step 2.2, step 3.1, L1, L5, L6, L7, discharge-construct] ∎
