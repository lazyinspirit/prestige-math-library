---
id: def-continuous-and-unitary-representation-of-a-compact-lie-group
kind: definition
title: Continuous and unitary representations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lie-group-homomorphism-isomorphism-and-automorphism, def-real-and-complex-inner-product-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1, the paragraph introducing representations after (4.3)"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§4.1–§4.2"
---

## Definition

Let $G$ be a compact Lie group with identity $e$, and let $V$ be a
finite-dimensional complex vector space. A **finite-dimensional complex
representation of $G$** on $V$ is a continuous homomorphism
$$\pi:G\longrightarrow\operatorname{GL}(V),$$
where $\operatorname{GL}(V)$ denotes the group of invertible complex-linear
endomorphisms of $V$ with its standard finite-dimensional smooth structure; a
**homomorphism** here is a group homomorphism that is a smooth map, in the
sense of [[def-lie-group-homomorphism-isomorphism-and-automorphism]]. Thus
$\pi(gh)=\pi(g)\pi(h)$ and $\pi(e)=\mathrm{id}_V$, and the entries of
$\pi$ in any basis of $V$ are continuous functions on $G$. The **dimension**
$\dim\pi$ of the representation is $\dim_{\mathbb C}V$.

The representation is **unitary** relative to an inner product
$\langle\cdot,\cdot\rangle$ on $V$ in the sense of
[[def-real-and-complex-inner-product-space]] when every operator $\pi(g)$
preserves that inner product,
$$\langle \pi(g)v,\pi(g)w\rangle=\langle v,w\rangle\qquad(v,w\in V,\ g\in G).$$
This says exactly that each $\pi(g)$ is a unitary operator for that inner product. Unless
explicitly stated otherwise, representations in this page are
finite-dimensional, and bases of $V$ are chosen so that the matrix of a unitary
representation is unitary in the usual sense.

Infinite-dimensional **Hilbert-space representations** are named explicitly at
the few places where they occur, namely for the left and right regular
representations on $L^2(G)$; a representation of $G$ on a complex Hilbert space
$H$ is a group homomorphism $\pi:G\to\mathcal B(H)$ such that each $\pi(g)$ is
unitary and $g\mapsto\pi(g)\xi$ is continuous for every $\xi\in H$.

## Remarks

- The word *continuous* is part of the data: a finite-dimensional representation
  of a Lie group is required to be a continuous (equivalently, smooth)
  homomorphism, and the smooth structure on $\operatorname{GL}(V)$ is the one
  induced by $\det\ne0$ in $\operatorname{End}(V)$.
- **Equivalence.** Two representations $\pi$ on $V$ and $\sigma$ on $W$ are
  **equivalent** (or isomorphic) when there is a linear isomorphism
  $T:V\to W$ intertwining them, $T\pi(g)=\sigma(g)T$ for all $g\in G$; a
  **subrepresentation** is a linear subspace $W\subseteq V$ with
  $\pi(g)W\subseteq W$ for all $g$. A representation is **irreducible** when it
  is nonzero and has no nonzero proper subrepresentation. These conventions are
  used throughout this page.
