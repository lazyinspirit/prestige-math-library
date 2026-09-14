---
id: cor-banach-space-with-a-schauder-basis-is-separable
kind: corollary
title: "A Banach space with a Schauder basis is separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-schauder-basis-and-coordinate-functionals]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Remark following Definition 3.1.1, printed p.64"
pipeline_run: phase-2-next-18
---

## Statement

Every real or complex Banach space with a Schauder basis is separable.

## Facts & Assumptions

[L1] Every vector has norm-convergent finite partial sums in the basis
([[def-schauder-basis-and-coordinate-functionals]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 In the real case let $D$ consist of all finite linear combinations of the [given]
basis vectors with rational coefficients. In the complex case use coefficients
in $\mathbb Q+i\mathbb Q$. This is a countable union of countable finite
products and hence is countable. [definition]

2.1 Given $x$, first use [L1] to choose a basis partial sum within [given, L1, step 1.1]
$\varepsilon/2$ of $x$. Approximate its finitely many scalar coefficients by
rational, respectively Gaussian-rational, scalars closely enough that the
resulting finite combination changes by less than $\varepsilon/2$. It belongs
to $D$ and is within $\varepsilon$ of $x$. Thus $D$ is dense. [L1, step 1.1,
finite approximation] ∎
