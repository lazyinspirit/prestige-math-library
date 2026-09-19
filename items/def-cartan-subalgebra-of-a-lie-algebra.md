---
id: def-cartan-subalgebra-of-a-lie-algebra
kind: definition
title: Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-normalizer-of-a-lie-subalgebra, def-lower-central-series-and-nilpotent-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, §19.3"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional Lie algebra over a field. A
**Cartan subalgebra** of $\mathfrak g$ is a Lie subalgebra $\mathfrak
h\subseteq\mathfrak g$ which is nilpotent
([[def-lower-central-series-and-nilpotent-lie-algebra]]) and satisfies
$N_{\mathfrak g}(\mathfrak h)=\mathfrak h$ for the normalizer of
[[def-normalizer-of-a-lie-subalgebra]].

This definition is stated for arbitrary finite-dimensional Lie algebras and
carries no semisimplicity hypothesis. In particular the zero subalgebra of the zero Lie
algebra is a Cartan subalgebra, since the zero algebra is nilpotent and its
normalizer is again zero; in a nonzero Lie algebra the zero subalgebra is not
a Cartan subalgebra, because its normalizer is the whole algebra.
