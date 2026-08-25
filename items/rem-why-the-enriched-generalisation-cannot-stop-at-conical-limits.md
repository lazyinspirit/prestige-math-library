---
id: rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits
kind: remark
title: 'Why weights are needed once the base of enrichment is not $\mathbf{Set}$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-set-weighted-limit-and-weighted-colimit, thm-the-constant-singleton-weight-recovers-an-ordinary-limit, thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), §3.9"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Weighting a limit looks at first like an optional generality: by
[[thm-the-constant-singleton-weight-recovers-an-ordinary-limit]] the ordinary
limit is the weighted limit at one particular weight, so on this page nothing is
lost by working with cones alone. This remark records what that proof spends,
and hence why the generality is not optional once the hom-objects of a category
are no longer sets.

## What the constant-singleton proof uses

Two features of $\mathbf{Set}$, and only those two.

First, that a cone is a natural transformation out of a **constant** weight: the
weight $\Delta\{*\}$ exists because $\mathbf{Set}$ has a one-element set and
because the assignment sending every object of the index category to it and
every morphism to the identity is a functor. Second, that a function out of a
one-element set is the same thing as an element of the codomain, which is what
turns the components $\alpha_j:\{*\}\to\mathcal M(m,Fj)$ into the legs
$\lambda_j:m\to Fj$ of a cone.

Neither feature is about limits. Both are statements about the category in which
the weight takes its values, which on this page is $\mathbf{Set}$ throughout,
by [[def-set-weighted-limit-and-weighted-colimit]].

## Where they fail for a general base

Replace the values of the weight by the objects of some other category
$\mathcal V$, so that a hom-object $\mathcal M(m,Fj)$ is an object of
$\mathcal V$ rather than a set. Then the second feature is no longer available
in general: there need not be a canonical Set-like identification between
elements and morphisms from the monoidal unit. In bases such as
$\mathbf{Ab}$, maps from $\mathbb Z$ do recover elements, but that is additional
structure of the chosen base rather than a formal property of enrichment. The
legs of a cone must therefore be formulated through morphisms of $\mathcal V$
into the hom-objects. The first feature is not automatic either, since a constant assignment into
$\mathcal V$ has to be shown to be a $\mathcal V$-functor before it can serve as
a weight, and that is a condition on $\mathcal V$, not a triviality.

What survives untouched is the definition used on this page: a weighted limit is
a representing object for the functor sending $m$ to the transformations out of
the weight, and that definition asks nothing of the values of the weight beyond
being able to form those transformations. This is the reason the weighted
notion, and not the conical one, is the definition that is generalised; Kelly's
§3.9 works out the resulting comparison map for a general base and shows what it
fails to be.

The development that carries this out is planned for the page
`enriched-categories` and is not available at this point in the reading order,
so nothing about enriched limits is asserted here. What is asserted is only what
the proofs on this page actually spend, which
[[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]] makes
explicit: the index category is replaced by the category of **elements** of the
weight, and elements are exactly what a general base does not supply.
