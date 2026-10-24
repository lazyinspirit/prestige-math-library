---
id: def-normalizer-of-a-lie-subalgebra
kind: definition
title: Normalizer of a Lie subalgebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-subalgebra-ideal-and-center]
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
      locator: "Lecture 19, §19.3"
landmark: false
---

## Definition

Let $\mathfrak g$ be a Lie algebra and let $\mathfrak h\subseteq\mathfrak g$
be a Lie subalgebra ([[def-lie-subalgebra-ideal-and-center]]). The
**normalizer** of $\mathfrak h$ in $\mathfrak g$ is

$$N_{\mathfrak g}(\mathfrak h)=\{x\in\mathfrak g:[x,\mathfrak h]\subseteq\mathfrak h\}.$$

It is a Lie subalgebra containing $\mathfrak h$: for $x,y\in N_{\mathfrak g}(\mathfrak h)$ and $h\in\mathfrak h$, Jacobi gives $[\,[x,y],h\,]=[x,[y,h]]-[y,[x,h]]$, a difference of two elements of $\mathfrak h$; and $\mathfrak h\subseteq N_{\mathfrak g}(\mathfrak h)$ because $\mathfrak h$ is a subalgebra. Moreover $\mathfrak h$ is an ideal of $N_{\mathfrak g}(\mathfrak h)$ by the defining condition.
