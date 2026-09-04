---
id: def-essential-epimorphism-and-projective-cover
kind: definition
title: "An essential epimorphism is a surjection with superfluous kernel, and a projective cover is a projective source with such a map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-module, thm-projective-module-characterizations, lem-radical-of-a-finite-length-module-is-superfluous]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

An **essential epimorphism** of modules is a surjective homomorphism
$\pi:P\to M$ whose kernel is superfluous: whenever $N\le P$ and
$N+\ker\pi=P$, one already has $N=P$.

A **projective cover** of $M$ is an essential epimorphism $\pi:P\to M$ with
$P$ projective in the sense of [[def-projective-module]] and
[[thm-projective-module-characterizations]].

The superfluous-kernel language is the one used on this page, motivated by
[[lem-radical-of-a-finite-length-module-is-superfluous]].
