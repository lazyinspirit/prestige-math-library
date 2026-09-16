---
id: def-real-form-of-a-complex-lie-algebra
kind: definition
title: Real form of a complex Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complexification-of-a-real-lie-algebra]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, printed pp. 348-353"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.2, printed pp. 199-201"
landmark: false
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra. A **real form**
of $\mathfrak g$ is a real Lie subalgebra $\mathfrak g_0\subseteq\mathfrak g$
such that the complex-linear extension

$$\mathfrak g_0\otimes_{\mathbb R}\mathbb C\longrightarrow\mathfrak g,\qquad X\otimes z\longmapsto zX,$$

of the inclusion
$\mathfrak g_0\hookrightarrow\mathfrak g$
([[def-complexification-of-a-real-lie-algebra]]) is an isomorphism of complex
Lie algebras. Equivalently, $\mathfrak g_0$ is a real subspace of $\mathfrak g$
with $\mathfrak g_0\cap i\mathfrak g_0=0$ and
$\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$ (a real direct sum), and
$\mathfrak g_0$ is closed under the bracket. A **conjugate-linear involution**
of $\mathfrak g$ is a conjugate-linear map $\sigma\colon\mathfrak g\to\mathfrak
g$ with $\sigma\circ\sigma=\mathrm{id}_{\mathfrak g}$ and
$\sigma[Z,W]=[\sigma Z,\sigma W]$ for all $Z,W\in\mathfrak g$. Two real forms
$\mathfrak g_0,\mathfrak g_0'$ are **conjugate** if $\mathfrak
g_0'=u(\mathfrak g_0)$ for a complex Lie-algebra automorphism $u$ of
$\mathfrak g$, and two conjugate-linear involutions $\sigma,\sigma'$ are
**conjugate** if $\sigma'=u\circ\sigma\circ u^{-1}$ for such a $u$. The
correspondence between real forms and conjugate-linear involutions is proved in
[[thm-real-forms-correspond-to-conjugate-linear-involutions]].
