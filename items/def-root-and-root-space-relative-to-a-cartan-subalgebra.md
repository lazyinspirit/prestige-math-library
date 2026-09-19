---
id: def-root-and-root-space-relative-to-a-cartan-subalgebra
kind: definition
title: Root and root space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-subalgebra-of-a-lie-algebra, def-derivation-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, §19.4"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and
let $\mathfrak h$ be a Cartan subalgebra of $\mathfrak g$
([[def-cartan-subalgebra-of-a-lie-algebra]]). For
$\alpha\in\mathfrak h^*$ define the **root space**

$$\mathfrak g_\alpha=\{x\in\mathfrak g:[H,x]=\alpha(H)x\text{ for all }H\in\mathfrak h\},$$

using $[H,x]=\operatorname{ad}_H(x)$ from
[[def-derivation-of-a-lie-algebra]].

A **root** of $\mathfrak g$ with respect to $\mathfrak h$ is a nonzero
functional $\alpha\in\mathfrak h^*$ with $\mathfrak g_\alpha\ne0$. The set of
roots is written $\Phi(\mathfrak g,\mathfrak h)$, or simply $\Phi$. By
convention, $\mathfrak g_\lambda=0$ when a functional
$\lambda\in\mathfrak h^*$ is neither zero nor a root.
