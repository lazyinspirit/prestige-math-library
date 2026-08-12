---
id: ex-representable-presheaf-on-a-poset
kind: example
title: "A representable presheaf on a poset is the indicator of a principal down-set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-presheaf-representable-functor-and-representation,
       prop-preorders-as-categories-and-monotone-maps-as-functors,
       def-preorder, def-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Example 1.2.7 and Definition 4.1.3"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Example

Let $(P,\le)$ be a partially ordered set, viewed as a category, and fix
$p\in P$. The representable presheaf $P(-,p)$ has the object values

$$P(q,p)=\begin{cases}\{*\},&q\le p,\\ \varnothing,&q\nleq p.\end{cases}$$

Consequently its nonempty support is the principal down-set
$\mathord\downarrow p=\{q\in P:q\le p\}$.

## Facts & Assumptions

**Given:** A partially ordered set $(P,\le)$ and an element $p\in P$.

[F1] Every partial order is a preorder, and a preorder is reflexive and transitive ([[def-preorder]]).

[L1] A preorder becomes a thin category with one morphism $q\to r$ exactly when $q\le r$, and none otherwise ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[F2] The presheaf represented by $p$ is the contravariant hom-functor $P(-,p)$ ([[def-presheaf-representable-functor-and-representation]]).

[F3] There is exactly one function with empty domain, and a function is determined by its values ([[def-function]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the hom-set $P(q,p)$ has one element when $q\le p$ and no elements when $q\nleq p$, proving the displayed object table. [L1]

2.1 If $r\le q$, presheaf restriction along the unique arrow $r\to q$ maps the unique member of $P(q,p)$ to the composite $r\to q\to p$, the unique member of $P(r,p)$. Whenever the source is empty, there is instead the unique empty function of [F3]. These are all possible restriction maps. [step 1.1, F1, L1, F2, F3]

2.2 The object value is nonempty exactly when $q\le p$, so its support is precisely $\mathord\downarrow p$. Reflexivity gives $p\in\mathord\downarrow p$, and transitivity makes the support downward closed. [step 1.1, F1]

3.1 Steps 1.1 and 2.1 compute the entire representable presheaf, including every empty value and restriction map, and step 2.2 identifies its support. [step 1.1, step 2.1, step 2.2] ∎
