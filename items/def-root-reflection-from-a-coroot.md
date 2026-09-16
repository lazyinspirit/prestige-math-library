---
id: def-root-reflection-from-a-coroot
kind: definition
title: Root reflection defined by a coroot
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coroot-of-a-lie-algebra-root, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Theorem 19.19(iii)"
landmark: false
---

## Definition

Let $\alpha$ be a root of a finite-dimensional complex semisimple Lie algebra
$\mathfrak g$ with respect to a Cartan subalgebra $\mathfrak h$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]) and let
$h_\alpha\in\mathfrak h$ be its coroot
([[def-coroot-of-a-lie-algebra-root]]). The **root reflection** defined by
$\alpha$ is the linear map

$$s_\alpha:\mathfrak h^*\longrightarrow\mathfrak h^*,\qquad s_\alpha(\lambda)=\lambda-\lambda(h_\alpha)\alpha .$$

It is linear and involutive: $s_\alpha(\alpha)=\alpha-2\alpha=-\alpha$
because $\alpha(h_\alpha)=2$, and $s_\alpha$ fixes every $\lambda$ with
$\lambda(h_\alpha)=0$. In particular $s_\alpha$ is an automorphism of the
vector space $\mathfrak h^*$ with $s_\alpha^2=\operatorname{id}$, since
$s_\alpha(\lambda)(h_\alpha)=-\lambda(h_\alpha)$.
