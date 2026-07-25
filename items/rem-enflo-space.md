---
id: rem-enflo-space
kind: remark
title: "Enflo's space: a separable reflexive Banach space with no Schauder basis"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "the basis problem is false"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Enflo, A counterexample to the approximation problem in Banach spaces, Acta Math. 130 (1973) 309-317"
      url: "https://doi.org/10.1007/bf02392270"
    - title: "Approximation property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Approximation_property"
    - title: "Schauder basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Schauder_basis"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

There is a separable reflexive Banach space which fails the **approximation property**, that is, in
which the identity is not a limit of finite rank operators uniformly on compact sets (Enflo, 1973).

A Banach space with a Schauder basis has the approximation property, since the partial sum
projections are finite rank operators converging to the identity uniformly on compact sets.
Enflo's space therefore has **no Schauder basis**, which refutes Banach's basis problem: it is not
true that every separable Banach space has a Schauder basis.

The same circle of ideas refutes a second plausible statement. The spaces $\ell^p$ for
$p \neq 2$ and $c_0$, all of which have the standard unit vector basis, contain closed subspaces
failing the approximation property. So having a Schauder basis is not inherited by closed subspaces.

## Remarks

**Not proved in this library.** Recorded with a citation. Enflo's construction is long and
combinatorial and is not reproducible at any level in this library today.

**What would prove it.** Enflo's original construction, or the later simplifications of Davie and
others, which build a sequence of finite-dimensional obstructions to approximating the identity.

**Why it matters here.** It is the standard warning against believing that separability plus
completeness gives coordinates. It also sets the scale of the approximation property: a property
that looks like a formality holds in every classical space and yet is not a theorem.
