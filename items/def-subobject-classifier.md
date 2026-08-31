---
id: def-subobject-classifier
kind: definition
title: "Subobject classifier"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subobject-and-quotient-object, def-initial-terminal-and-zero-object, def-pullbacks-and-pushouts, def-monomorphism-and-epimorphism]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., IV.9"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Tom Leinster, Basic Category Theory, Exercise 6.3.26"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
---

## Definition

Let $\mathcal C$ be a category with a terminal object $\mathbf 1$ ([[def-initial-terminal-and-zero-object]]) and pullbacks ([[def-pullbacks-and-pushouts]]).

A **subobject classifier** is a monomorphism

$$\operatorname{true}:\mathbf 1\to\Omega$$

([[def-monomorphism-and-epimorphism]]) such that for every monomorphism $m:A\to X$ there exists a unique morphism $\chi_m:X\to\Omega$ for which $m$ is, up to isomorphism of pullback objects, the pullback of $\operatorname{true}$ along $\chi_m$.

The map $\chi_m$ is the **classifying morphism** of the subobject represented by $m$. The uniqueness clause is part of the definition: the classifier classifies subobjects in the sense of [[def-subobject-and-quotient-object]], not arbitrary representing monomorphisms.
