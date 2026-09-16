---
id: prop-the-center-is-the-common-kernel-of-all-roots-inside-the-cartan-subalgebra
kind: proposition
title: The center is the common kernel of the roots inside the Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, cor-semisimple-lie-algebras-are-centerless-and-perfect, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-toral-and-maximal-toral-subalgebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 19, Theorem 19.19(i)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$, with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). Then
$$\{H\in\mathfrak h:\alpha(H)=0\text{ for all }\alpha\in\Phi\}=Z(\mathfrak g)\cap\mathfrak h=0 .$$
In particular the roots span $\mathfrak h^*$, and the description of the zero
weight space as the center holds inside any Cartan subalgebra.

## Facts & Assumptions

**Given:** Such $\mathfrak g$ and $\mathfrak h$.

[L1] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum over the root spaces ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L2] $\mathfrak h$ is abelian ([[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], [[def-toral-and-maximal-toral-subalgebra]]).

[L3] $Z(\mathfrak g)=0$ ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

## Proof

**Proof technique:** direct.

1.1 If $H\in\mathfrak h$ has $\alpha(H)=0$ for every $\alpha\in\Phi$, then $[H,\mathfrak g_\alpha]=\alpha(H)\mathfrak g_\alpha=0$ for every root, and $[H,\mathfrak h]=0$ by [L2]; by [L1] $[H,\mathfrak g]=0$, so $H\in Z(\mathfrak g)$ and $H=0$ by [L3]. [L1, L2, L3, algebra]

2.1 Conversely every central element of $\mathfrak h$ is annihilated by all roots, since $\alpha(H)=0$ is the eigenvalue of $\operatorname{ad}_H$ on $\mathfrak g_\alpha$ and $\operatorname{ad}_H=0$ for central $H$. Hence the common kernel equals $Z(\mathfrak g)\cap\mathfrak h=0$; and because no nonzero $H$ annihilates all roots, the finite set $\Phi$ spans $\mathfrak h^*$. [L1, step 1.1, algebra] ∎
