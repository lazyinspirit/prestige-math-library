---
id: def-abstract-jordan-decomposition-in-a-lie-algebra
kind: definition
title: Abstract Jordan decomposition
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-algebra-over-a-field, def-semisimple-and-nilpotent-endomorphisms]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Proposition 19.3"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra over a field
([[def-lie-algebra-over-a-field]]) and let $x\in\mathfrak g$. An **abstract
Jordan decomposition** of $x$ is a pair of elements $x_s,x_n\in\mathfrak g$
with

$$x=x_s+x_n,\qquad [x_s,x_n]=0,$$

such that the endomorphism $\operatorname{ad}_{x_s}$ of $\mathfrak g$ is
semisimple and $\operatorname{ad}_{x_n}$ is nilpotent, in the sense of
[[def-semisimple-and-nilpotent-endomorphisms]]. One then calls $x_s$ a
**semisimple part** and $x_n$ a **nilpotent part** of $x$.

Existence and uniqueness of such a decomposition are not part of the
definition. For a finite-dimensional complex semisimple Lie algebra they are
proved below in
[[thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra]]; for
an arbitrary Lie algebra neither is asserted here, and a pair displaying the
two proposed parts is not claimed to exist.
