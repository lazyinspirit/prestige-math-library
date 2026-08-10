---
id: ex-free-group-and-free-module-functors
kind: example
title: "The free-group functor $F:\\mathbf{Set}\\to\\mathbf{Grp}$ and free-module functor $R^{(-)}:\\mathbf{Set}\\to R\\text{-}\\mathbf{Mod}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-functor-and-contravariant-functor, prop-sets-and-functions-form-category-set, prop-groups-and-homomorphisms-form-category-grp, prop-modules-and-homomorphisms-form-category-rmod, def-free-group, thm-reduced-words-form-the-free-group, def-generated-cyclic-finitely-generated-and-free-modules, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Examples 2.1.3 and 4.5.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Free groups and free left $R$-modules vary functorially with their sets of
generators.

## Facts & Assumptions

**Given:** A unital ring $R$ and sets with functions between them.

[L1] Functors preserve identities and composition ([[def-functor-and-contravariant-functor]]), and the relevant source and target categories exist ([[prop-sets-and-functions-form-category-set]], [[prop-groups-and-homomorphisms-form-category-grp]], [[prop-modules-and-homomorphisms-form-category-rmod]]).

[L2] The reduced-word group on $X$ has the free-group universal property ([[def-free-group]], [[thm-reduced-words-form-the-free-group]]).

[L3] A free module has a basis, and finite sums in its additive commutative monoid are defined and invariant under reindexing ([[def-generated-cyclic-finitely-generated-and-free-modules]], [[def-finite-sum-in-a-commutative-monoid]]).

## Verification

**Proof technique:** direct.

1.1 For a function $f:X\to Y$, the composite $X\xrightarrow fY\to F(Y)$ extends uniquely by [L2] to a homomorphism $F(f):F(X)\to F(Y)$. [L2]

1.2 Define $R^{(X)}$ to be the free left $R$-module with basis $(e_x)_{x\in X}$. The assignment $e_x\mapsto e_{f(x)}$ extends linearly to $R^{(f)}:R^{(X)}\to R^{(Y)}$; equivalently, it sends a finitely supported coefficient family $a$ to the family $y\mapsto\sum_{x\in f^{-1}(y)}a_x$. [L3]

2.1 Both maps assigned to $1_X$ fix every generator. The uniqueness of the free extensions therefore gives $F(1_X)=1_{F(X)}$ and $R^{(1_X)}=1_{R^{(X)}}$. [step 1.1, step 1.2, L2, L3]

2.2 For $X\xrightarrow fY\xrightarrow gZ$, the maps $F(gf)$ and $F(g)F(f)$ agree on every generator. The module maps $R^{(gf)}$ and $R^{(g)}R^{(f)}$ likewise send $e_x$ to $e_{g(f(x))}$; finite-sum reindexing gives the same equality in coefficient form. [step 1.1, step 1.2, L2, L3]

3.1 Hence $X\mapsto F(X)$ and $X\mapsto R^{(X)}$, with the maps above, define functors $\mathbf{Set}\to\mathbf{Grp}$ and $\mathbf{Set}\to R\text{-}\mathbf{Mod}$. [step 2.1, step 2.2, L1] ∎
