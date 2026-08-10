---
id: prop-sets-and-functions-form-category-set
kind: proposition
title: "Sets and functions form the large locally small category $\\mathbf{Set}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-function, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Sets as objects and functions as morphisms form a large locally small category
$\mathbf{Set}$.

## Facts & Assumptions

**Given:** Sets $A,B,C$ and functions $f:A\to B$, $g:B\to C$.

[L1] A category has associative composition and an identity at every object, and when it is presented by its hom-collections a morphism is the triple $(A,B,f)$, so that $\operatorname{dom}$ and $\operatorname{cod}$ are the projections ([[def-category]]); a function is a set of ordered pairs with a set domain and a uniquely determined value at each point of it, and does not itself determine a codomain ([[def-function]]); the functions $A\to B$ form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[L2] Small, locally small, and large have the meanings in [[def-small-locally-small-and-large-category]], and the ordinals do not form a set ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity functions are functions, composites of functions are functions, function composition is associative, and $1_B\circ f=f=f\circ1_A$. [given, L1]

2.1 Hence sets and functions satisfy every axiom of a category. [step 1.1, L1]

3.1 For fixed $A,B$, the hom-collection is $\{(A,B,f):f\in B^A\}$, a set in bijection with the set $B^A$ from [L1]; the tagging is what gives each morphism a unique codomain, since the empty function alone would be a morphism into every set. The object class contains every ordinal and therefore is not a set, so $\mathbf{Set}$ is locally small and large. [step 2.1, L1, L2] ∎
