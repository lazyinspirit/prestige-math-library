---
id: ex-pullbacks-and-pushouts-in-set
kind: example
title: "Pullbacks in Set are fibre products and pushouts are quotients of tagged disjoint unions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pullbacks-and-pushouts, prop-sets-and-functions-form-category-set, def-equivalence-relation, thm-universal-property-of-the-quotient]
justified_by: []
aliases: []
landmark: false
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Examples 3.1.24 and 3.1.25"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

For $X\xrightarrow fZ\xleftarrow gY$, the pullback in $\mathbf{Set}$ is
$\{(x,y)\in X\times Y:f(x)=g(y)\}$. For
$X\xleftarrow aW\xrightarrow bY$, the pushout is the tagged union
$X\amalg Y$ modulo the least equivalence relation identifying $a(w)$ with
$b(w)$ for every $w$.

## Facts & Assumptions

**Given:** The displayed cospan and span of sets.

[F1] Pullbacks and pushouts have their compatible-pair universal properties
([[def-pullbacks-and-pushouts]]).

[F2] Morphisms in $\mathbf{Set}$ are functions
([[prop-sets-and-functions-form-category-set]]).

[F3] Equivalence relations are reflexive, symmetric, and transitive, and maps
constant on classes factor uniquely through the quotient
([[def-equivalence-relation]], [[thm-universal-property-of-the-quotient]]).

## Verification

**Proof technique:** construction.

1.1 The coordinate projections of the displayed subset satisfy the cospan equation. If $r:T\to X$ and $s:T\to Y$ satisfy $fr=gs$, then $t\mapsto(r(t),s(t))$ is the unique function into the subset with those two projections. This is [F1]. [F1, F2]

1.2 In the tagged union, generate an equivalence relation from $(0,a(w))\sim(1,b(w))$. The quotient injections agree on $W$. [F3]

2.1 Compatible maps $r:X\to T$ and $s:Y\to T$ define a function on the tagged union by cases. It is equal on every generating pair and hence constant on classes, so [F3] gives a unique quotient factor. Conversely any quotient map restricts to such a compatible pair. This is the pushout property [F1]. [F1, F2, F3, step 1.2] ∎
