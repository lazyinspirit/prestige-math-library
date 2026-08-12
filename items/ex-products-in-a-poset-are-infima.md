---
id: ex-products-in-a-poset-are-infima
kind: example
title: "In a poset regarded as a category, products are infima, coproducts are suprema, and equalizers are automatic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-products-and-coproducts, def-equalizers-and-coequalizers, prop-preorders-as-categories-and-monotone-maps-as-functors]
justified_by: []
aliases: []
landmark: false
proof_strategy: translation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.24"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

In a poset category, a product of a family is its infimum, a coproduct is its
supremum, and the identity of the domain of any parallel pair is both an
equalizer and a coequalizer.

## Facts & Assumptions

**Given:** A poset $P$ regarded as a category.

[F1] An arrow $x\to y$ means $x\le y$, and at most one such arrow exists
([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[F2] Products and coproducts represent cones and cocones over discrete
families ([[def-products-and-coproducts]]).

[F3] Equalizers and coequalizers have their parallel-pair universal properties
([[def-equalizers-and-coequalizers]]).

## Verification

**Proof technique:** translate arrows into inequalities.

1.1 A cone from $x$ to $(p_i)$ is exactly the assertion $x\le p_i$ for all $i$. Its unique factor through $p$ says $x\le p$ for every lower bound $x$. Thus [F2] is exactly the greatest-lower-bound property. [F1, F2]

1.2 Reversing all inequalities turns the coproduct property into the least-upper-bound property. The empty cases give the greatest and least elements, respectively. [F1, F2]

2.1 If $f,g:x\rightrightarrows y$ exist, [F1] gives $f=g$. Then $1_x$ equalizes them and every arrow into $x$ factors through $1_x$ uniquely. Dually, $1_y$ is a coequalizer. [F1, F3] ∎
