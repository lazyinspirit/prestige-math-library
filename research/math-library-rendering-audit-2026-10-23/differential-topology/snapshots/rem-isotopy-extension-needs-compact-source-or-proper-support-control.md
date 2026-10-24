---
id: rem-isotopy-extension-needs-compact-source-or-proper-support-control
kind: remark
title: "Isotopy extension needs compact source or proper support control"
status: published
origin: session
dependency_level: 10
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-isotopy-extension,
       def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy,
       def-smooth-embedding,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds]
justified_by: []
aliases: []
landmark: false
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology (Graduate Texts in Mathematics 33, Springer 1976; full text retrieved from the Internet Archive Wayback Machine snapshot of the luis.impa.br course copy), Chapter 8 “Isotopy”, §1, printed pp. 177–183 (Theorems 1.1–1.8 and Exercises 3, 7, 9, 10, 11, 16, printed pp. 182–184)"
      url: "https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf"
    - title: "The Isotopy Extension Theorem (University of California, Riverside, graduate differential topology hand-out, 2010), complete 14-page document: statement and applications of the isotopy extension theorem, uniqueness of tubular and collar neighbourhoods, and the knotted-line counterexample to ambient extension"
      url: "https://math.ucr.edu/~res/math260s10/isotopyextension.pdf"
---

## Remark

The isotopy extension theorem [[thm-isotopy-extension]] assumes a compact source $M$ (or, in the relative form, control on a compact set), and compactness is used at three separate places: the track is compact, so finitely many local velocity-extension charts suffice; the velocity field can be cut off with compact support; and the resulting time-dependent field is complete on the finite time interval. For an arbitrary isotopy of a noncompact manifold there need not be any ambient isotopy extending it, so the compact-source hypothesis is load-bearing and cannot simply be dropped.

The standard counterexample (Hirsch, Exercise 9, p. 183, reproduced in the UCR hand-out): a properly embedded copy $L\subseteq\mathbb R^3$ of the real line obtained from the $x$-axis by tying a small trefoil knot in a finite segment is smoothly isotopic to the straight line $\mathbb R$ through embeddings — roll the knot out to infinity along the line — but no ambient isotopy of $\mathbb R^3$ carries $L$ to $\mathbb R$: such an ambient isotopy would restrict to a diffeomorphism of the complements ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-smooth-embedding]]), whereas $\pi_1(\mathbb R^3\setminus L)$ is the nonabelian trefoil knot group and $\pi_1(\mathbb R^3\setminus\mathbb R)\cong\mathbb Z$, so the complements are not even homotopy equivalent. The isotopy of embeddings here is a genuine smooth isotopy in the sense of [[def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy]]; only the ambient extension fails.

For a closed source submanifold, Hirsch Theorem 1.6 replaces compactness by bounded velocity in a complete Riemannian metric, provided the entire isotopy image lies either in $\partial N$ or in $N\setminus\partial N$. The extended time-dependent field is required to be boundary-tangent; bounded velocity and completeness of the metric then give a global ambient isotopy. The relative bounded-velocity form, Hirsch Theorem 1.7, instead assumes an isotopy of an open neighbourhood of a closed set whose track image is open. These boundary and open-track conditions are part of the respective substitutes, not consequences of bounded velocity alone. This remark asserts no new theorem; it records the exact hypothesis of [[thm-isotopy-extension]] that the counterexample tests and the substitute that restores the conclusion.
