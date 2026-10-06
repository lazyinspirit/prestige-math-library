---
id: def-algebraic-stack-and-inertia
kind: definition
title: "Algebraic stacks and their inertia stacks"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
justified_by: []
aliases: []
deps:
  - def-descent-data-and-stack-in-groupoids
  - def-morphism-representable-by-algebraic-spaces
  - def-smooth-morphism-schemes
  - def-etale-morphism-schemes
  - def-category-fibred-in-groupoids
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 94 (Algebraic Stacks), Section 94.12"
      url: "https://stacks.math.columbia.edu/download/algebraic.pdf"
      locator: "Definition 94.12.1 (tag 026N) and the surrounding section text; Sections 94.10-94.11 for representability"
    - title: "The Stacks Project, Chapter 8 (Stacks), Section 8.7"
      url: "https://stacks.math.columbia.edu/download/stacks.pdf"
      locator: "Section 8.7 (tag 036X) and Lemma 8.7.1 (tag 036Y) on the inertia stack"
---

## Definition

An **algebraic stack** (or **Artin stack**) over $S$ is a stack in groupoids
$\mathcal X$ over $(\mathit{Sch}/S)_{fppf}$
([[def-descent-data-and-stack-in-groupoids]],
[[def-category-fibred-in-groupoids]]) such that

1. the diagonal 1-morphism
   $\Delta\colon\mathcal X\to\mathcal X\times_S\mathcal X$ is representable by
   algebraic spaces ([[def-morphism-representable-by-algebraic-spaces]]), and
2. there exist an $S$-scheme $U$ and a 1-morphism
   $\mathcal S_U\to\mathcal X$ from the stack in setoids of $U$ which is
   representable by algebraic spaces, surjective and smooth
   ([[def-smooth-morphism-schemes]]).

Such a pair $(U,\mathcal S_U\to\mathcal X)$ is called a **presentation** of
$\mathcal X$. The algebraic stack is **Deligne-Mumford** when a presentation
with $\mathcal S_U\to\mathcal X$ etale
([[def-etale-morphism-schemes]]) can be chosen. Under the inherited Axiom of
Choice for represented-sheaf descent ([[def-axiom-of-choice]],
[[def-descent-data-and-stack-in-groupoids]]), a scheme, viewed as a stack
in setoids, is an algebraic stack with its
identity as presentation. An algebraic space is an algebraic stack using
any of its etale scheme covers as presentation; the identity is not a
scheme presentation when the algebraic space is not a scheme.

The **inertia stack** $\mathcal I_{\mathcal X}$ is the category fibred in
groupoids whose fibre category over $T$ has as objects the pairs
$(x,\alpha)$ with $x$ an object of $\mathcal X_T$ and
$\alpha\in\operatorname{Aut}_{\mathcal X_T}(x)$. For $f:T'\to T$, a morphism from $(y,\beta)$ over $T'$ to $(x,\alpha)$ over $T$ is an arrow $\gamma:y\to x$ of $\mathcal X$ over $f$ satisfying $\gamma\beta=\alpha\gamma$. Equivalently it is a vertical isomorphism $y\to f^*x$ intertwining $\beta$ with $f^*\alpha$. Composition is composition of these arrows; cartesian uniqueness supplies the pullback identifications. The **projection**
$\mathcal I_{\mathcal X}\to\mathcal X$, $(x,\alpha)\mapsto x$, is a
1-morphism over $(\mathit{Sch}/S)_{fppf}$.

For a 1-morphism $\mathcal X\to\mathcal Y$ of stacks in groupoids, the
**relative inertia** $\mathcal I_{\mathcal X/\mathcal Y}$ imposes the
additional condition that the automorphism $\alpha$ map to the identity
automorphism of the image of $x$ in $\mathcal Y_T$; the projection
$\mathcal I_{\mathcal X/\mathcal Y}\to\mathcal X$ is again a 1-morphism. Both
$\mathcal I_{\mathcal X}$ and $\mathcal I_{\mathcal X/\mathcal Y}$ are stacks
in groupoids whenever $\mathcal X$ and $\mathcal Y$ are
([[def-descent-data-and-stack-in-groupoids]]), since automorphism data
satisfies effective descent in groupoids.
