---
id: rem-null-set-not-discontinuity-set
kind: remark
title: "A null set that is the discontinuity set of no function whatsoever"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "Discontinuity sets are F-sigma, and some null sets are not"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. R. Gelbaum and J. M. H. Olmsted, Counterexamples in Analysis, Ch. 8, Examples 21 and 22"
      url: "https://faculty.ksu.edu.sa/sites/default/files/_olmsted_1.pdf"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Lebesgue measure (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue_measure"
pipeline_run: null
---

## Statement

There is $E \subseteq \mathbb{R}$ with $\lambda(E) = 0$ such that no function
$g : \mathbb{R} \to \mathbb{R}$, Riemann integrable or not, has $E$ as its set of
points of discontinuity.

The reason is a mismatch of descriptive complexity, not of size. For every
$g : \mathbb{R} \to \mathbb{R}$ the set of points of discontinuity is an
$F_{\sigma}$ set, a countable union of closed sets. So it suffices to exhibit a
null set that is not $F_{\sigma}$: for instance a null set of the second Baire
category cannot be $F_{\sigma}$, since a closed null set is nowhere dense and a
countable union of nowhere dense sets is of the first category. A Lebesgue
measurable set of measure zero that is not Borel serves as well.

This is the standard corrective to a careless reading of Lebesgue's criterion.
That criterion says a bounded function on $[a,b]$ is Riemann integrable exactly
when its discontinuity set is null; it does not say that every null set arises as
a discontinuity set, and the example above shows that most do not.

## Remarks

**Not proved in this library.** It is recorded with a citation to Gelbaum and
Olmsted and used in no proof here.

**What would prove it.** The $F_{\sigma}$ theorem for discontinuity sets is
elementary and already in scope, since the set where the oscillation of $g$ is at
least $1/n$ is closed. The remaining ingredient is a null set that is not
$F_{\sigma}$, and the cheapest construction covers $\mathbb{Q}$ by open intervals
of total length below $1/k$, intersects the resulting $G_{\delta}$ sets, and
argues by Baire category; the Baire category theorem for complete metric spaces
is in scope here, and so is the elementary notion of a null set. The alternative
construction, through a measurable non-Borel set, does need the measure track
([[rem-lebesgue-measure-and-integral]]).

**Which page it serves.** The Riemann integral page and the Cantor set, Baire and
measure zero page, immediately after Lebesgue's criterion, and beside the
counterexample that a Riemann integrable function may have a dense discontinuity
set.

**A candidate for undeferral.** Like [[rem-semicontinuous-not-ae-riemann]], this
was listed among the measure-theoretic entries of Gelbaum and Olmsted's chapter
8, but the Baire route uses only machinery this library already intends to have.
It should be re-examined when the Cantor set, Baire and measure zero page is
authored.
