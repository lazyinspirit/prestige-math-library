---
id: thm-set-has-all-small-limits
kind: theorem
title: "Set has all small limits, realized as compatible tuples in a set-indexed product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-small-finite-and-large-limits-completeness-and-cocompleteness, prop-sets-and-functions-form-category-set, def-product-of-an-indexed-family, def-limit-and-colimit-of-a-diagram]
justified_by: []
aliases: []
landmark: true
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Every small diagram $D:\mathcal J\to\mathbf{Set}$ has a limit. It is the set

$$L=\left\{(x_j)_{j\in\operatorname{Ob}\mathcal J} \in\prod_jD(j):D(u)(x_j)=x_k\text{ for every }u:j\to k\right\}$$

with its coordinate projections.

## Facts & Assumptions

**Given:** A small category $\mathcal J$ and a diagram
$D:\mathcal J\to\mathbf{Set}$.

[F1] A small category has sets of objects and morphisms, and completeness means
existence of limits for all small diagrams
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[F2] Sets and functions form $\mathbf{Set}$
([[prop-sets-and-functions-form-category-set]]).

[F3] The product of a set-indexed family consists of functions choosing one
element from each member ([[def-product-of-an-indexed-family]]).

[F4] A limit requires a unique mediating morphism from every cone
([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** construction.

1.1 By [F1] and [F3], the displayed product and its subset $L$ are sets. For each $j$, let $p_j:L\to D(j)$ be the coordinate function. The defining equalities give $D(u)p_j=p_k$, so $(L,p)$ is a cone. [F1, F2, F3]

1.2 If $\operatorname{Ob}\mathcal J$ is empty, the product is the singleton containing the empty function and all compatibility conditions are vacuous. Thus the construction still gives the terminal set. [F3]

1.3 Let $(X,\xi_j)$ be any cone. Define $h:X\to\prod_jD(j)$ by $h(x)_j=\xi_j(x)$. The cone equations imply $h(x)\in L$, so $h$ corestricts to a function $\bar h:X\to L$ satisfying $p_j\bar h=\xi_j$. [F2, given]

2.1 If $g:X\to L$ has the same composites, then for every $x$ and $j$, $g(x)_j=p_jg(x)=\xi_j(x)=p_j\bar h(x)$. Equality of functions gives $g=\bar h$. This remains true for the empty index, where there is one function to the singleton. [step 1.2, step 1.3]

3.1 By [F4], steps 1.1, 1.3, and 2.1 prove that $(L,p)$ is a limit, with step 1.2 covering the empty boundary. Since $D$ was an arbitrary small diagram, $\mathbf{Set}$ is complete. [F1, F4, step 1.1, step 1.3, step 2.1] ∎
