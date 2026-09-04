---
id: def-vertex-and-source-of-an-indecomposable-module
kind: definition
title: "A vertex is a minimal p-subgroup for relative projectivity, and a source is an indecomposable inducing summand there"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relative-projectivity, thm-higman-criterion-for-relative-projectivity]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $G$ be a finite group, let $k$ be a field of characteristic $p$, and let
$M$ be an indecomposable finite-dimensional $kG$-module.

- A **vertex** of $M$ is a $p$-subgroup $Q\le G$ that is minimal, under
  inclusion, among the subgroups for which $M$ is relatively
  $Q$-projective.

- A **source** of $M$ relative to a vertex $Q$ is an indecomposable
  direct summand $S$ of $\operatorname{Res}_Q^G M$ such that $M$ is a direct
  summand of $\operatorname{Ind}_Q^G S$.

The relative-projectivity notion is the one from
[[def-relative-projectivity]], and the Higman trace criterion from
[[thm-higman-criterion-for-relative-projectivity]] is the main detection tool.
