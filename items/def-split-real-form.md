---
id: def-split-real-form
kind: definition
title: Split real form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-form-of-a-complex-lie-algebra, def-cartan-subalgebra-of-a-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §5, printed pp. 375-380"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.3, printed pp. 202-203"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and
let $\mathfrak g_0$ be a real form of $\mathfrak g$
([[def-real-form-of-a-complex-lie-algebra]]). Then $\mathfrak g_0$ is a
**split real form** (or **normal real form**) of $\mathfrak g$ if it contains a
Cartan subalgebra $\mathfrak h_0$
([[def-cartan-subalgebra-of-a-lie-algebra]]) such that every adjoint operator
$\operatorname{ad}_H$, $H\in\mathfrak h_0$, is diagonalizable over $\mathbb R$:
that is, for each $H\in\mathfrak h_0$ the characteristic polynomial of
$\operatorname{ad}_H$ splits into linear factors over $\mathbb R$, equivalently
$\mathfrak g_0$ has a basis in which all $\operatorname{ad}_H$ are simultaneously
diagonal with real eigenvalues. Since a split real form contains a Cartan
subalgebra whose adjoint action is diagonalizable over $\mathbb R$, the complex
rank of $\mathfrak g$ equals the real rank
$\dim_{\mathbb R}\mathfrak h_0$ of this form. Existence and uniqueness up to
real isomorphism are proved in
[[thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form]].
