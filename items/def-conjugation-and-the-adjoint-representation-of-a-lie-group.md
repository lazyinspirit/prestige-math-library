---
id: def-conjugation-and-the-adjoint-representation-of-a-lie-group
kind: definition
title: Conjugation and the adjoint representation of a Lie group
status: published
origin: pipeline
deps: ["def-lie-group", "def-lie-group-homomorphism-isomorphism-and-automorphism", "def-differential-of-a-smooth-map", "cor-the-differential-of-a-diffeomorphism-is-an-isomorphism", "def-linear-isomorphism-and-invertible-linear-map", "def-dimension", "def-vector-space-of-linear-maps", "def-coordinate-column-and-matrix-of-a-linear-map", "cor-determinant-is-a-polynomial-in-the-matrix-entries", "thm-real-square-matrix-invertible-iff-determinant-nonzero", "prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Definition preceding formula (1.88), printed page 79
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Section 2.6 and formula (2.4), printed page 21
verification:
  audited: 2026-09-14
  precheck: pass
---

## Definition

Let $G$ be a finite-dimensional real Lie group with identity $e$ and Lie
algebra $\mathfrak g=T_eG$. For $g\in G$, **conjugation by $g$** is

$$C_g:G\longrightarrow G,\qquad C_g(h)=ghg^{-1}.$$

It is a Lie-group automorphism. Indeed, associativity gives
$C_g(hk)=C_g(h)C_g(k)$, its smoothness follows from the smooth multiplication
and inversion of [[def-lie-group]], and $C_{g^{-1}}$ is its smooth inverse.
Thus its differential at the identity is the invertible linear map

$$\operatorname{Ad}_g:=d(C_g)_e:\mathfrak g\longrightarrow\mathfrak g.$$

Here $C_g(e)=e$, so the source and target tangent spaces are both
$\mathfrak g$; invertibility follows from
[[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]. Write
$\operatorname{GL}(\mathfrak g)$ for the group of invertible real-linear maps
of $\mathfrak g$ in the sense of
[[def-linear-isomorphism-and-invertible-linear-map]]. The **adjoint map** is

$$\operatorname{Ad}:G\longrightarrow\operatorname{GL}(\mathfrak g),\qquad g\longmapsto\operatorname{Ad}_g.$$

The target carries its standard smooth structure. Explicitly, if
$n=\dim\mathfrak g\geq1$, one fixed basis identifies
$\mathcal L(\mathfrak g,\mathfrak g)$ with $M_n(\mathbb R)\simeq\mathbb R^{n^2}$
by [[def-coordinate-column-and-matrix-of-a-linear-map]]. Under this
identification $\operatorname{GL}(\mathfrak g)$ is the open set
$\det\ne0$: determinant is a polynomial by
[[cor-determinant-is-a-polynomial-in-the-matrix-entries]], and invertibility
is equivalent to nonzero determinant by
[[thm-real-square-matrix-invertible-iff-determinant-nonzero]]. It therefore
has the restricted smooth structure from
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]].
A second basis changes a matrix by $A\mapsto P^{-1}AP$, a linear
diffeomorphism, so this smooth structure is independent of the fixed basis.
If $n=0$, then $\operatorname{GL}(\mathfrak g)$ is the singleton containing
the unique endomorphism of the zero vector space, with its unique
zero-dimensional smooth structure; no determinant criterion is needed.

The next proposition proves that this map is a smooth group representation;
after that result it is called the **adjoint representation of $G$**.

A Lie group is nonempty and boundaryless. If $\dim G=0$, every
$\operatorname{Ad}_g$ is the unique automorphism of the zero vector space,
even when the discrete group itself is nonabelian; dimension one requires no
change. No metric, nondegeneracy, interval, endpoint, choice principle, or
biconditional is involved. Fixing one finite basis of the supplied
finite-dimensional space is a single finite existential instantiation, not a
choice from a family.
