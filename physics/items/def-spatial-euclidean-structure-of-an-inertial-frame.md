---
id: def-spatial-euclidean-structure-of-an-inertial-frame
kind: definition
title: "The Euclidean spatial structure and cross product of an inertial frame"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, def-euclidean-inner-product, def-inner-product-space, def-determinant-of-a-square-matrix, cor-triangle-inequality-for-inner-product-norm, thm-unique-coordinates-with-respect-to-an-ordered-basis]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
sources:
  references:
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Definition

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space and let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame
([[def-inertial-frame-and-inertial-chart]]). Put

$$S:=\operatorname{span}(e_1,e_2,e_3)=\{w\in V:\eta(e_0,w)=0\},$$

the equality holding because a vector $w=\sum_aw^ae_a$ satisfies
$\eta(e_0,w)=-w^0$ by $\eta$-orthonormality, so $\eta(e_0,w)=0$ exactly when
$w$ is a linear combination of $e_1,e_2,e_3$. In particular $S$ is the linear
subspace of $V$ spanned by the three spatial basis vectors of the frame, and
$V=S\oplus\operatorname{span}(e_0)$.

Let $\delta$ be the restriction of $\eta$ to $S$, i.e.
$\delta(w,z):=\eta(w,z)$ for $w,z\in S$. Writing $w=\sum_{i=1}^3w^ie_i$ and
$z=\sum_{i=1}^3z^ie_i$ and using $\eta(e_i,e_j)=\delta_{ij}$ for $i,j\ge1$, one
has

$$\delta(w,z)=w^1z^1+w^2z^2+w^3z^3,\qquad \delta(w,w)=(w^1)^2+(w^2)^2+(w^3)^2 .$$

Hence $\delta$ is a symmetric bilinear form on $S$ that is positive definite:
$\delta(w,w)\ge0$, with equality exactly for $w=0$ by uniqueness of coordinates
in the basis $(e_1,e_2,e_3)$ of $S$
([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]). Thus $\delta$
is an inner product on the real vector space $S$
([[def-inner-product-space]]); the induced function

$$\lvert w\rvert:=\sqrt{\delta(w,w)}=\bigl\lVert(w^1,w^2,w^3)\bigr\rVert_2$$

is the Euclidean norm of the coordinate vector of $w$
([[def-euclidean-inner-product]]), and it is a norm on $S$
([[cor-triangle-inequality-for-inner-product-norm]]). The ordered basis
$(e_1,e_2,e_3)$ of $S$ is $\delta$-orthonormal, and it is declared **positively
oriented** in $S$ by the convention that an ordered triple $(u_1,u_2,u_3)$ of
elements of $S$ is positively oriented when the ordered basis
$(e_0,u_1,u_2,u_3)$ of $V$ is positively oriented for the fixed orientation of
$V$. The pair $(S,\delta)$, together with this orientation and the frame's
basis, is the **Euclidean spatial structure of the inertial frame**
$(o;e_0,e_1,e_2,e_3)$.

**Vector product.** For $w=\sum_{i=1}^3w^ie_i$ and $z=\sum_{i=1}^3z^ie_i$ in
$S$, define the **vector product** $w\times z$ to be the unique element of $S$
whose coordinates are

$$(w\times z)^1=w^2z^3-w^3z^2,\qquad (w\times z)^2=w^3z^1-w^1z^3,\qquad (w\times z)^3=w^1z^2-w^2z^1 .$$

This is well defined by uniqueness of coordinates in the basis
$(e_1,e_2,e_3)$. It is bilinear in $(w,z)$, alternating
($z\times w=-(w\times z)$ and $w\times w=0$), and it satisfies, for all
$w,z,y\in S$,

$$\delta(w\times z,y)=\det\begin{pmatrix}w^1&z^1&y^1\\ w^2&z^2&y^2\\ w^3&z^3&y^3\end{pmatrix},\qquad \lvert w\times z\rvert^2=\lvert w\rvert^2\lvert z\rvert^2-\delta(w,z)^2 .$$

The first identity is the expansion of the determinant along its columns, both
sides equalling $\sum_i(w\times z)^iy^i$; the second is Lagrange's identity,
obtained by expanding $\lvert w\times z\rvert^2+\delta(w,z)^2$ and comparing
termwise with $\lvert w\rvert^2\lvert z\rvert^2$ using
$\lvert w\rvert^2=\delta(w,w)$
([[def-determinant-of-a-square-matrix]]).

**Frame dependence.** The objects $S$, $\delta$, $\lvert\cdot\rvert$ and
$\times$ belong to the spatial three-space of the **named** inertial frame:
replacing the spatial basis by another $\delta$-orthonormal positively oriented
basis of $S$ transforms coordinates by an orientation-preserving orthogonal
matrix, under which $\delta$, the norm and the displayed identities are
unchanged, while a general change of inertial frame with a different time axis
$e_0$ changes $S$ itself and hence changes the domains of $\delta$ and $\times$.
The Lorentz form, the fixed orientation of $V$, and the time orientation $C^+$
are data of the model independent of the named inertial frame
([[def-sr-affine-minkowski-model]]). The Euclidean spatial structure instead
requires the choice of a time axis $e_0$; it is not an additional
frame-independent structure on the whole of $V$.
