---
id: thm-normal-variety-regular-in-codimension-one
kind: theorem
title: A normal variety is regular in codimension one
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normal-noetherian-ring, thm-equivalent-characterisations-of-a-dvr, def-normal-point-and-normal-variety, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, def-codimension-irreducible-subvariety, thm-local-ring-affine-variety-localization, def-dimension-classical-variety, def-krull-dimension-of-a-ring, lem-normality-local-on-affine-opens, def-axiom-of-choice, thm-one-dimensional-regular-local-rings-are-dvrs]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a: normality and the height-one localisations of a normal Noetherian domain"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a normal classical variety over an algebraically closed field. For every affine chart $U$ with coordinate ring $A$ and every height-one prime $\mathfrak p\subset A$, the ring $A_{\mathfrak p}$ is a discrete valuation ring and hence regular. This is regularity in codimension one; it allows reducible and empty varieties. In particular, a classical point $x$ whose local ring has dimension one has a discrete valuation ring as its local ring and is regular. No characteristic hypothesis is needed.

## Facts & Assumptions

**Given:** AC, $X$, an affine chart $U$, and a height-one prime $\mathfrak p$ of $A=k[U]$.

[F1] Normality of $X$ makes $A$ a normal Noetherian ring, without requiring it to be a domain. Thus $A_{\mathfrak p}$ is an integrally closed domain ([[lem-normality-local-on-affine-opens]], [[def-normal-noetherian-ring]], [[def-normal-point-and-normal-variety]]).

[F2] The dimension of $A_{\mathfrak p}$ is the height of $\mathfrak p$: prime chains in this localization are exactly prime chains in $A$ below $\mathfrak p$. A one-dimensional Noetherian local integrally closed domain is a DVR, and a one-dimensional Noetherian local ring is regular if it is a DVR ([[def-krull-dimension-of-a-ring]], [[thm-equivalent-characterisations-of-a-dvr]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]).

[F3] At a classical point $x$, its local ring is the maximal localization on a chart. On a reducible chart this follows by taking germs of principal-open localized sections, as explained in [[lem-normality-local-on-affine-opens]]; the irreducible case is [[thm-local-ring-affine-variety-localization]].

## Proof

1.1 By [F1], $A_{\mathfrak p}$ is a Noetherian local integrally closed domain. Its dimension is $\operatorname{ht}\mathfrak p=1$ by [F2], so it is not a field. The DVR characterization in [F2] therefore makes it a discrete valuation ring, and the regularity characterization makes it regular. [F1, F2, given]

2.1 If a classical point $x$ has a one-dimensional local ring, normality makes that ring a Noetherian local integrally closed domain, so the same argument applies. Equivalently its maximal ideal on an affine chart has height one by [F2] and [F3]. All height-one prime localizations on all charts satisfy step 1.1, which is the asserted codimension-one conclusion. Empty charts have no such primes. No assumption on the characteristic or on irreducibility was used. [F1, F2, F3, step 1.1] ∎
