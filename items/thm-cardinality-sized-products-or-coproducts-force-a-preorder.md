---
id: thm-cardinality-sized-products-or-coproducts-force-a-preorder
kind: theorem
title: "Assuming Choice, a small category with products or coproducts indexed by the cardinality of its morphism set is a preorder"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-products-and-coproducts, def-cardinality-of-a-small-category-and-kappa-small-diagram, thm-cardinal-power-set-and-cantor, def-preorder, prop-preorders-as-categories-and-monotone-maps-as-functors, prop-limit-colimit-duality]
justified_by: []
aliases: [thm-freyd-cardinality-obstruction]
landmark: true
proof_strategy: cardinality-contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.7.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Assume Choice. Let $\mathcal C$ be small and put
$\kappa=|\operatorname{Mor}(\mathcal C)|$. If every constant
$\kappa$-indexed family has a product, then $\mathcal C$ is a preorder. The
same conclusion follows if every constant $\kappa$-indexed family has a
coproduct.

## Facts & Assumptions

**Given:** The small category, its morphism cardinal $\kappa$, and one of the
two product or coproduct hypotheses.

[F1] A product represents every family of arrows into its factors
([[def-products-and-coproducts]]).

[F2] The cardinality of a small category is the cardinality of its morphism set
([[def-cardinality-of-a-small-category-and-kappa-small-diagram]]).

[L1] Cantor's theorem gives $\kappa<2^\kappa=|\mathcal P(\kappa)|$
([[thm-cardinal-power-set-and-cantor]]).

[F3] A preorder is reflexive and transitive, and its associated category has
at most one arrow between any two objects
([[def-preorder]], [[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L2] Products and coproducts are formal duals
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** cardinality contradiction.

1.1 Suppose distinct parallel arrows $f,g:A\rightrightarrows B$ exist, and let $P=B^\kappa$ be a product of the constant $\kappa$-family. For each subset $S\subseteq\kappa$, [F1] gives a unique $h_S:A\to P$ whose $i$th projection is $f$ when $i\in S$ and $g$ when $i\notin S$. [F1, given]

2.1 If $S\ne T$, choose $i$ in their symmetric difference. The $i$th composites of $h_S$ and $h_T$ are $f$ and $g$ in some order, so $h_S\ne h_T$. Thus $S\mapsto h_S$ injects $\mathcal P(\kappa)$ into $\operatorname{Mor}(\mathcal C)$. [step 1.1, given]

3.1 By [F2], the codomain has cardinality $\kappa$, whereas [L1] says the domain has strictly larger cardinality. This contradiction proves that no distinct parallel arrows exist. Identities and composition already make the object relation reflexive and transitive, so [F3] makes $\mathcal C$ a preorder. [F2, L1, F3, step 2.1]

4.1 Apply [L2] to $\mathcal C^{\mathrm{op}}$. Its morphism set has the same cardinality, a $\kappa$-indexed coproduct in $\mathcal C$ is a product there, and being a preorder is unchanged by reversal. This proves the coproduct clause. [F2, F3, L2, step 3.1] ∎
