---
id: cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements
kind: corollary
title: "A colimit of a set-valued functor is the set of connected components of its category of elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category-of-elements, thm-set-has-all-small-colimits, def-limit-and-colimit-of-a-diagram, def-isomorphism-groupoid-and-connected-category, prop-sets-and-functions-form-category-set, def-equivalence-relation, def-small-locally-small-and-large-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.35)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be a small category
([[def-small-locally-small-and-large-category]]) and let
$D:\mathcal J\to\mathbf{Set}$ be a functor
([[prop-sets-and-functions-form-category-set]]). Let $\int D$ be its category of
elements ([[def-category-of-elements]]) and let $\pi_0(\int D)$ be the quotient
of its set of objects by the least equivalence relation
([[def-equivalence-relation]]) containing every pair $(a,b)$ for which there is
a morphism $a\to b$; two objects lie in the same class exactly when they are
joined by a finite zigzag of morphisms, which is the connectedness condition of
[[def-isomorphism-groupoid-and-connected-category]].

Then

$$\operatorname*{colim}_{j\in\mathcal J}D(j)\;=\;\pi_0\Bigl(\textstyle\int D\Bigr)$$

([[def-limit-and-colimit-of-a-diagram]]), the colimiting cocone sending
$x\in D(j)$ to the class of the object $(j,x)$.

## Facts & Assumptions

**Given:** A small category $\mathcal J$ and a functor $D:\mathcal J\to\mathbf{Set}$.

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[F6] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F1] The category of elements $\int G$ of a functor $G:\mathcal C\to\mathbf{Set}$ has objects $(c,x)$ with $c\in\mathcal C$ and $x\in G(c)$; and a morphism $(c,x)\to(d,y)$ given by a morphism $f:c\to d$ in $\mathcal C$ satisfying $G(f)(x)=y$ ([[def-category-of-elements]]).

[L1] Every small diagram $D:\mathcal J\to\mathbf{Set}$ has a colimit; it is the quotient of the tagged union $S=\{(j,x):x\in D(j)\}$ by the least equivalence relation containing $(j,x)\sim(k,D(u)(x))$ for $u:j\to k$ ([[thm-set-has-all-small-colimits]]).

[F2] A binary relation on a set is an **equivalence relation** when it is reflexive, symmetric and transitive; the quotient set is the set of its classes ([[def-equivalence-relation]]).

[F3] A category is **connected** when it is nonempty and any two objects can be joined by a finite zigzag of morphisms, with successive arrows allowed to point in either direction ([[def-isomorphism-groupoid-and-connected-category]]).

[F4] A colimit of $D$ is an initial cocone: explicitly, for every cocone $(X,\xi)$ there exists a unique morphism $u:Q\to X$ such that $u\rho_j=\xi_j$ for every $j$. ([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the objects of $\int D$ are exactly the pairs $(j,x)$ with $x\in D(j)$, which is exactly the tagged union named in [L1]; and a morphism $(j,x)\to(k,y)$ of $\int D$ exists precisely when some $u:j\to k$ has $D(u)(x)=y$, that is, precisely for the pairs that generate the equivalence relation of [L1]. [F1, F5, F6, L1]

2.1 The least equivalence relation containing the generating pairs of [L1] is therefore the least equivalence relation on the objects of $\int D$ containing every pair joined by a morphism, and by [F2] its classes are the classes defining $\pi_0(\int D)$. Two objects lie in one class exactly when a finite chain of generating pairs, each used in either direction, joins them, which is the finite-zigzag condition of [F3]. [F2, F3, step 1.1]

3.1 By [L1] the colimit of $D$ is the quotient of the tagged union by that relation, with cocone components sending $x\in D(j)$ to the class of $(j,x)$; by step 2.1 that quotient is $\pi_0(\int D)$, and by [F4] the universal property of the colimit is the one asserted. If $\mathcal J$ is empty, or every $D(j)$ is empty, both sides are the empty set. [F4, L1, step 2.1] ∎

## Remarks

Nothing about the category of elements is used beyond its objects and the existence of its morphisms: the identification is between the generating pairs of the published $\mathbf{Set}$-colimit construction and the morphisms of $\int D$, and everything else is the same quotient read twice.

The empty case is not an exception. A category with no objects has no connected components, and a diagram of empty sets has the empty set as its colimit, so both sides are empty; connectedness requires nonemptiness, but a set of components does not.
