---
id: def-root-and-root-space-relative-to-a-cartan-subalgebra
kind: definition
title: Root and root space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-cartan-subalgebra-of-a-lie-algebra, def-derivation-of-a-lie-algebra]
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
[[def-derivation-of-a-lie-algebra]]. Since $\mathfrak h$ is maximal toral
([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]])
we have $\mathfrak h\subseteq\mathfrak g_0$, and $\mathfrak g_\alpha$ is
stable under every $\operatorname{ad}_H$ with $H\in\mathfrak h$ because the
operators commute.

A **root** of $\mathfrak g$ with respect to $\mathfrak h$ is a nonzero
functional $\alpha\in\mathfrak h^*$ with $\mathfrak g_\alpha\ne0$. The set of
roots is written $\Phi(\mathfrak g,\mathfrak h)$, or simply $\Phi$. By
[[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]] the set
$\Phi$ is finite and
$\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$.
