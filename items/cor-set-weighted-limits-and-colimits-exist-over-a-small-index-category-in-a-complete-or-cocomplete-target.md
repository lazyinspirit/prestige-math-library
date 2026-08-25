---
id: cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target
kind: corollary
title: 'A limit weighted by a $\mathbf{Set}$-valued weight on a small index category exists in a complete target, and the weighted colimit in a cocomplete one'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements, def-set-weighted-limit-and-weighted-colimit, def-category-of-elements, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, (7.1.8) and (7.2.4)"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.33)-(3.34)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be a small category
([[def-small-locally-small-and-large-category]]), let $\mathcal M$ be locally
small and let $F:\mathcal J\to\mathcal M$ be a diagram.

If $\mathcal M$ is complete
([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]), then
for every weight $W:\mathcal J\to\mathbf{Set}$ the weighted limit $\{W,F\}$
exists ([[def-set-weighted-limit-and-weighted-colimit]]). If $\mathcal M$ is
cocomplete, then for every weight $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$
the weighted colimit $W\star F$ exists.

Local smallness of $\mathcal M$ is part of the hypothesis and cannot be
dropped: the definition of a weighted limit is a representation of a
$\mathbf{Set}$-valued functor built from the hom-sets of $\mathcal M$.

These conditions are sufficient and are not asserted to be necessary of the
target: a particular weighted limit in a category that is not complete may
exist all the same. The definition on this page fixes a small index category,
so no large-index weighted limit is asserted here.

## Facts & Assumptions

**Given:** A small category $\mathcal J$, a locally small category $\mathcal M$ that is complete, respectively cocomplete, a diagram $F:\mathcal J\to\mathcal M$, and a weight of the variance named in each clause.

[F3] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[F4] The category of elements $\int W$ has objects the pairs $(c,x)$ with $x\in W(c)$, and a morphism is a morphism of the index category subject to one equation ([[def-category-of-elements]]).

[F5] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, and a weighted colimit is characterised dually; the construction presupposes $\mathcal J$ small and $\mathcal M$ locally small ([[def-set-weighted-limit-and-weighted-colimit]]).

[L1] For small $\mathcal J$ the category of elements $\int W$ is small, and a weighted limit is an ordinary limit over the category of elements of the weight: $\{W,F\}$ exists exactly when $\lim_{\int W}F\pi$ does, and then they agree ([[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]]).

[L2] Under the same hypotheses, a weighted colimit an ordinary colimit over it: $W\star F$ exists exactly when $\operatorname*{colim}_{\int W}F\pi$ does, and then they agree ([[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]]).

[F6] A category is **complete** when it has all small limits and **cocomplete** when it has all small colimits, a diagram being small when its indexing category is small; Completeness and cocompleteness do not assert the existence of limits or colimits of large diagrams ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

## Proof

**Proof technique:** direct.

1.1 The category of elements $\int W$ is small. Its objects are the pairs $(c,x)$ with $c$ in the set $\operatorname{Ob}(\mathcal J)$ and $x$ in the set $W(c)$, hence a set; and a morphism of $\int W$ is determined by its domain, its codomain and the underlying morphism of $\mathcal J$, so the morphisms form a subclass of a product of three sets and hence a set. The count is carried out rather than asserted, and it uses no choice; the presheaf case counts identically. [F3, F4, L1, given]

2.1 For the limit clause, $F\pi$ is a diagram indexed by $\int W$, which is small by step 1.1, so completeness of $\mathcal M$ supplies a limit for it. By [L1] the weighted limit $\{W,F\}$ then exists and is that limit; $\mathcal M$ is locally small, so the weighted limit is defined at all. [F5, F6, L1, step 1.1]

2.2 For the colimit clause, the same diagram over the small category $\int W$ has a colimit because $\mathcal M$ is cocomplete, and by [L2] the weighted colimit $W\star F$ exists and is that colimit. [F5, F6, L2, step 1.1]

3.1 Both clauses are sufficiency only. A weighted limit is by [F5] an object representing the displayed functor, so completeness or cocompleteness of $\mathcal M$ is not necessary for a particular weighted object to exist. Smallness of $\mathcal J$ remains part of the definition in force here, and no converse is claimed. [F5, F6, step 2.1, step 2.2] ∎

## Remarks

The smallness of the category of elements, not of the index category alone, is what the argument needs, and it is the values of the weight that supply the extra objects: a weight taking large values on a small index category would not be $\mathbf{Set}$-valued, which is why the hypothesis is stated on the weight and not only on $\mathcal J$.

The corresponding statement for ends is [[cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete]], and the two are proved the same way: an existence hypothesis on the target, applied to an ordinary limit over a small index category that a comparison theorem has identified with the object in question.
