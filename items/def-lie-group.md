---
id: def-lie-group
kind: definition
title: Lie group
status: draft
origin: pipeline
deps: ["def-group", "def-smooth-map-between-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Introductory definition, printed page 17; conventions in Chapter I §10
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Definition 2.1, printed page 14
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A **finite-dimensional real Lie group** is a group $G$, in the sense of
[[def-group]], together with the structure of a finite-dimensional real smooth
manifold such that the maps

$$m:G\times G\longrightarrow G,\qquad m(g,h)=gh,$$

and

$$\operatorname{inv}:G\longrightarrow G,\qquad \operatorname{inv}(g)=g^{-1},$$

are smooth in the sense of
[[def-smooth-map-between-manifolds-with-boundary]]. Its identity element is
denoted by $e$ (or occasionally $1$).

Unless an item explicitly says otherwise, every Lie group on this page is real,
finite-dimensional, and has no manifold boundary. Dimension zero is allowed;
for example, any countable discrete group with its discrete zero-dimensional
smooth structure is a Lie group. A Lie group cannot be empty because a group
contains its identity. The definition applies unchanged in dimension one,
uses no metric or nondegeneracy hypothesis, and makes no choice from a family
of sets.
