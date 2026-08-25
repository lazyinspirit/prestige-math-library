---
id: thm-representable-functors-carry-weighted-limits-to-weighted-limits
kind: theorem
title: "A representable functor carries a weighted limit to the weighted limit of the composed diagram"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-weighted-limit-and-weighted-colimit, prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight, def-hom-functors-and-hom-bifunctor, thm-hom-assignment-is-a-bifunctor, def-presheaf-representable-functor-and-representation, thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism, def-small-locally-small-and-large-category, def-opposite-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.8)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small, let $\mathcal M$ be locally small
([[def-small-locally-small-and-large-category]]), let
$F:\mathcal J\to\mathcal M$ be a diagram and let $m$ be an object of
$\mathcal M$.

**Limit clause.** Let $W:\mathcal J\to\mathbf{Set}$ be a weight and suppose
$\{W,F\}$ exists ([[def-set-weighted-limit-and-weighted-colimit]]). Then the
weighted limit of the composed diagram
$\mathcal M(m,F-):\mathcal J\to\mathbf{Set}$ by the same weight exists and

$$\mathcal M\bigl(m,\{W,F\}\bigr)\;\cong\;\bigl\{W,\mathcal M(m,F-)\bigr\}$$

([[def-hom-functors-and-hom-bifunctor]],
[[thm-hom-assignment-is-a-bifunctor]]).

**Colimit clause.** Let $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ be a weight
([[def-opposite-category]]) and suppose $W\star F$ exists. Then

$$\mathcal M\bigl(W\star F,m\bigr)\;\cong\;\bigl\{W,\mathcal M(F-,m)\bigr\},$$

a weighted **limit** in $\mathbf{Set}$ of the presheaf
$\mathcal M(F-,m):\mathcal J^{\mathrm{op}}\to\mathbf{Set}$, not a weighted
colimit: the contravariant representable turns the weighted colimit into a
weighted limit over the opposite index category.

## Facts & Assumptions

**Given:** A small $\mathcal J$, a locally small $\mathcal M$, a diagram $F$, an object $m$, and a weight of the variance named in each clause whose weighted limit or colimit is assumed to exist.

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets; a small category is locally small ([[def-small-locally-small-and-large-category]]).

[F2] The covariant hom-assignment $\mathcal C(a,-)$ sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$, and the contravariant hom-assignment sends $u$ to precomposition ([[def-hom-functors-and-hom-bifunctor]]).

[L2] For every locally small category the hom-assignment $\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ is a functor, and its restrictions in the two variables are the contravariant and covariant hom-functors ([[thm-hom-assignment-is-a-bifunctor]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, that is $\mathcal M(m,\{W,F\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$ naturally in $m$; the weighted colimit is characterised by $\mathcal M(W\star F,m)\cong[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(F-,m))$ ([[def-set-weighted-limit-and-weighted-colimit]]).

[F3] A representation of a functor is an object with a natural isomorphism from the corresponding hom-functor; The pair $(R,\theta)$ is a **representation** of $F$, and $R$ is a representing object ([[def-presheaf-representable-functor-and-representation]]).

[L3] Two representing objects of one functor are joined by a unique compatible isomorphism ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]).

[L1] For a small $\mathcal J$ and functors $W,D:\mathcal J\to\mathbf{Set}$, a weighted limit of a set-valued diagram is the set of natural transformations from the weight: $\{W,D\}=[\mathcal J,\mathbf{Set}](W,D)$ ([[prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [F2] the assignment $\mathcal M(m,F-)$ is a functor $\mathcal J\to\mathbf{Set}$, its values being sets because $\mathcal M$ is locally small, and $\mathcal J$ is small by hypothesis. So [L1] applies to the pair $W$ and $\mathcal M(m,F-)$ and gives $\{W,\mathcal M(m,F-)\}=[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$, in particular the right-hand side of the limit clause exists. [F2, F5, L1, L2]

2.1 By [F1] and [F3] the defining property of $\{W,F\}$ is a bijection $\mathcal M(m,\{W,F\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$ natural in $m$. Composing it with the identification of step 1.1 gives the limit clause: the hom-set of the weighted limit is canonically bijective to the weighted limit of the hom-sets, with the bijection determined by the counit cylinder and unique by [L3]. [F1, F3, L3, step 1.1]

3.1 For the colimit clause, [F6] makes $\mathcal M(F-,m)$ a presheaf on $\mathcal J$, that is a functor on $\mathcal J^{\mathrm{op}}$, which is small with $\mathcal J$; so [L1] applied with source $\mathcal J^{\mathrm{op}}$ identifies $\{W,\mathcal M(F-,m)\}$ with $[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(F-,m))$, and [F1] gives a canonical bijection from that set to $\mathcal M(W\star F,m)$. The object produced is a weighted limit in $\mathbf{Set}$ over $\mathcal J^{\mathrm{op}}$, and calling it a weighted colimit would reverse the variance of the weight. [F1, F2, F6, L1, L3, step 2.1] ∎

## Remarks

This is the seam between the general definition and the case that can be computed. A weighted limit in an arbitrary locally small target is defined by a representation, and the theorem says that applying a representable functor turns it into the weighted limit in $\mathbf{Set}$, which [[prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight]] identifies outright. Everything that can be checked about $\{W,F\}$ by testing against objects of $\mathcal M$ is therefore a statement about sets of natural transformations.

The colimit clause is not the dual read carelessly. Both clauses produce a weighted **limit** in $\mathbf{Set}$, because the covariant representable preserves the shape of the universal property while the contravariant one reverses the direction of every morphism it is applied to, and the weight stays where it is.
