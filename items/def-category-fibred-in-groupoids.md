---
id: def-category-fibred-in-groupoids
kind: definition
title: "Categories fibred in groupoids over a site"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
deps:
  - def-category
  - def-functor-and-contravariant-functor
  - def-natural-transformation
  - def-isomorphism-groupoid-and-connected-category
  - def-opposite-category
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
    - title: "Angelo Vistoli, Notes on Grothendieck topologies, fibered categories and descent theory (arXiv:math/0412512)"
      url: "https://arxiv.org/pdf/math/0412512"
      locator: "Definitions 3.1, 3.5-3.6 (PDF 44-45), Definition 3.21, Proposition 3.22 and Corollary 3.23 (PDF 55-56), and Proposition 3.36 with Lemma 3.37 and the inverse construction (PDF 59-60)"
    - title: "The Stacks Project, Chapter 4 (Categories), Section 4.33 (Fibred categories)"
      url: "https://stacks.math.columbia.edu/download/categories.pdf"
      locator: "Definition 4.33.6 (tag 02XN) and the fibred-in-groupoids statements of Section 4.33"
---

## Definition

Let $\mathcal C$ be a category ([[def-category]]). A functor
$p:\mathcal S\to\mathcal C$ ([[def-functor-and-contravariant-functor]]) is a
**category fibred in groupoids** over $\mathcal C$ if every arrow
$f:V\to U$ of $\mathcal C$ and every object $x$ of $\mathcal S$ over $U$
admit a **cartesian arrow** $\varphi:y\to x$ over $f$, and every fibre
category $\mathcal S_U$ is a groupoid
([[def-isomorphism-groupoid-and-connected-category]]).

Cartesian means: for every $g:W\to V$, every object $z$ of $\mathcal S$ over
$W$ and every arrow $\psi:z\to x$ with $p(\psi)=fg$, there is a unique arrow
$\chi:z\to y$ over $g$ with $\varphi\circ\chi=\psi$. The **fibre**
$\mathcal S_U$ is the subcategory of objects over $U$ and morphisms over
$\mathrm{id}_U$. The condition is equivalent to: every arrow of $\mathcal S$
is cartesian, and for every $f:V\to U$ and every object $x$ over $U$ there is
an arrow $y\to x$ over $f$. Since an arrow over an identity is an isomorphism
exactly when it is cartesian, this is a genuine condition on $p$ and not a
matter of choosing arrows.

A **1-morphism** $F:(p:\mathcal S\to\mathcal C)\to(q:\mathcal T\to\mathcal C)$
is a functor over $\mathcal C$, i.e. $qF=p$ (such a functor automatically
preserves cartesian arrows). A **2-morphism** is a natural transformation
$F\Rightarrow G$ over $\mathcal C$, i.e. one whose components lie in the
fibres ([[def-natural-transformation]]). An **equivalence** is a 1-morphism admitting an inverse over the base up
to natural isomorphisms over the base. It induces fully faithful,
essentially surjective functors on all fibres. Conversely, fibrewise full
faithfulness and essential surjectivity imply equivalence when choices of
preimages and vertical isomorphisms are supplied for all target objects;
for set-sized total categories these choices follow from AC
([[def-axiom-of-choice]]). Indeed cartesian factorization turns fibrewise
full faithfulness into full faithfulness on arrows over each base arrow.
For each target object x choose y over the same base object and an
isomorphism F(y) to x; full faithfulness lifts the conjugated target
arrows uniquely to define the inverse functor and its two natural
isomorphisms (Vistoli, Proposition 3.36 and Lemma 3.37). These objects, 1-morphisms and 2-morphisms form a strict
2-category: composition of 1-morphisms is strictly associative and the
identity 1-morphisms act strictly; the coherence isomorphisms familiar from a
pseudofunctor description appear only after choosing pullbacks.

The definition requires neither a cleavage nor a simultaneous choice of
pullbacks. If one does choose, for every arrow $f$, a single cartesian lift of
each object $x$, then the chosen lifts compose only up to the canonical
isomorphism supplied by cartesian uniqueness, and this global choice may use
AC; the fibred-in-groupoids definition requires no such choice. The
equivalence criterion above has its separately stated choice hypothesis. In particular the empty category is fibred in groupoids over
$\mathcal C$ vacuously, and if $\mathcal S$ is empty then the fibre categories
are empty groupoids.
