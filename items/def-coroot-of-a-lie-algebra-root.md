---
id: def-coroot-of-a-lie-algebra-root
kind: definition
title: Coroot of a Lie-algebra root
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-killing-length-of-a-root-is-nonzero, def-killing-dual-vector-of-a-root]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Lemma 19.16(ii)"
landmark: false
---

## Definition

Let $\alpha$ be a root of a finite-dimensional complex semisimple Lie algebra
$\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$, and let
$H_\alpha\in\mathfrak h$ be its Killing-dual vector
([[def-killing-dual-vector-of-a-root]]). By
[[lem-killing-length-of-a-root-is-nonzero]] the number $\alpha(H_\alpha)$
equals $B(H_\alpha,H_\alpha)$ and is nonzero, so the following element of
$\mathfrak h$ is well defined:

$$h_\alpha=\frac{2H_\alpha}{\alpha(H_\alpha)} .$$

It is called the **coroot** of $\alpha$. It satisfies
$B(h_\alpha,H)=\dfrac{2\alpha(H)}{\alpha(H_\alpha)}$ for all
$H\in\mathfrak h$, and $\alpha(h_\alpha)=2$.
