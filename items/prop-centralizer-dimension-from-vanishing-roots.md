---
id: prop-centralizer-dimension-from-vanishing-roots
kind: proposition
title: Centralizer dimension from vanishing roots
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-regular-root-hyperplanes, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, def-root-and-root-space-relative-to-a-cartan-subalgebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20, Proposition 20.6(ii)"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak h$ be a Cartan subalgebra of a finite-dimensional complex
semisimple Lie algebra $\mathfrak g$ with root set $\Phi$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]). For
$H\in\mathfrak h$,
$$\mathfrak g^H=\ker(\operatorname{ad}_H)=\mathfrak h\oplus\bigoplus_{\substack{\alpha\in\Phi\\\alpha(H)=0}}\mathfrak g_\alpha,$$
and consequently
$$\dim\mathfrak g^H=\dim\mathfrak h+\#\{\alpha\in\Phi:\alpha(H)=0\}.$$
In particular $\mathfrak g^H=\mathfrak h$ exactly for the regular elements
$H\in\mathfrak h_{\mathrm{reg}}$ of [[def-regular-root-hyperplanes]].

## Facts & Assumptions

**Given:** Such $\mathfrak g,\mathfrak h$ and an element $H\in\mathfrak h$.

[L1] $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ is a direct sum, each $\mathfrak g_\alpha$ is the eigenspace of $\operatorname{ad}_{\mathfrak h}$ with eigenvalue $\alpha$, and $\mathfrak g_\alpha$ is one-dimensional ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]).

[L2] $\mathfrak h_{\mathrm{reg}}=\{H\in\mathfrak h:\alpha(H)\ne0\text{ for all }\alpha\in\Phi\}$ ([[def-regular-root-hyperplanes]]).

## Proof

**Proof technique:** direct.

1.1 Write $x=H_0+\sum_{\alpha\in\Phi}x_\alpha$ with $H_0\in\mathfrak h$ and $x_\alpha\in\mathfrak g_\alpha$, using the direct sum [L1]. Then $\operatorname{ad}_H(x)=\sum_\alpha\alpha(H)x_\alpha$ because $\mathfrak h$ is abelian, and this vanishes exactly when $\alpha(H)x_\alpha=0$ for every root. [L1, algebra]

2.1 Hence $\ker(\operatorname{ad}_H)=\mathfrak h\oplus\bigoplus_{\alpha(H)=0}\mathfrak g_\alpha$ and its dimension is $\dim\mathfrak h$ plus the number of roots vanishing at $H$, by the direct sum of [L1]. By [L2] that number is zero exactly when $H\in\mathfrak h_{\mathrm{reg}}$, in which case $\mathfrak g^H=\mathfrak h$. [L1, L2, step 1.1, algebra] ∎
