---
id: def-qsmx-spin-weight-and-hall-realization
kind: definition
title: Spin weight spaces and rank-one Hall realization
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-ringel-map-embedding-and-finite-dynkin-criterion
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-ringel-map-embedding-and-finite-dynkin-criterion: mathematical-premise
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "Lecture 3, Theorem 3.16 and proof, PDF pp. 39–40: the Ringel–Green embedding and the finite-type criterion."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures 1993"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§7, PDF pp. 20–21: the simple classes generate the twisted Hall algebra and the positive quantum half is identified in Dynkin type."
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice as inherited through the cited Hall supplier. Let
$V=\mathbb C^2$ with ordered orthonormal basis $|\uparrow\rangle,|\downarrow\rangle$.
On $V$ define
$$ E=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad F=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad H=\begin{pmatrix}1&0\\0&-1\end{pmatrix}. $$
They satisfy $[H,E]=2E$, $[H,F]=-2F$, and $[E,F]=H$, and therefore define
the standard two-dimensional representation of $\mathfrak{sl}_2(\mathbb C)$.
Write $S^+=E$, $S^-=F$, and $S^z=H/2$.

For each integer $N\geq1$, the spin space is
$\mathcal H_N=V^{\otimes N}$ with its tensor-product inner product. If $A$ is
an endomorphism of $V$, let $A_j$ act as $A$ on factor $j$ and as the identity
on the other factors. Define the diagonal generators
$$ S_N^+=\sum_{j=1}^N E_j,\qquad S_N^-=\sum_{j=1}^N F_j,\qquad S_N^z=\frac12\sum_{j=1}^N H_j. $$
For $m\in\{-N/2,-N/2+1,\ldots,N/2\}$, its weight space is
$\mathcal H_{N,m}=\ker(S_N^z-mI)$. These are dimensionless matrices in the
algebraic spin convention.

For each integer $r\geq0$, define $V(r)$ to be the vector space
$\mathbb C[x,y]_r$ of homogeneous polynomials of degree $r$, with
$\mathfrak{sl}_2$ action
$$ E=x\partial_y,\qquad F=y\partial_x,\qquad H=x\partial_x-y\partial_y. $$
The ordered monomials $x^{r-k}y^k$ for $0\leq k\leq r$ form its basis.
Under $x\mapsto|\uparrow\rangle$ and $y\mapsto|\downarrow\rangle$,
$V(1)$ is the representation on $V$ above. A tensor power $V(1)^{\otimes N}$
uses the diagonal action defined by the sums $S_N^+,S_N^-,2S_N^z$.

Let $q_H>1$ be a prime power and fix a finite field $\mathbb F_{q_H}$ of that
cardinality. Put $\nu=\sqrt{q_H}>1$ and $K=\mathbb Q(\nu)$. The representation category of
the one-vertex, no-arrow quiver over $\mathbb F_{q_H}$ is the category of
finite-dimensional $\mathbb F_{q_H}$-vector spaces, with unique simple object
$S=\mathbb F_{q_H}$. Its Hall composition algebra is the subalgebra generated
by the class $[S]$ in the twisted Hall algebra with the normalization of the
Ringel supplier. The rank-one positive quantum half is
$U_\nu^+(\mathfrak{sl}_2)=K[E]$. The canonical Ringel map $E\mapsto[S]$
identifies this positive half with the composition algebra; the finite-Dynkin
criterion identifies it with the full Hall algebra in this one-vertex case.

## Definition references

[[def-axiom-of-choice]]

[[thm-ringel-map-embedding-and-finite-dynkin-criterion]]

[Schiffmann, Theorem 3.16](https://arxiv.org/pdf/math/0611617v2)

[Ringel, §7](https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf)

## Remarks

The formal Hall parameter $q_H$ and its square root $\nu$ are mathematical
parameters; $q_H$ is not a physical Potts-state parameter. The field-valued
Ringel identification is stated for $\nu>1$; a specialization to $\nu=1$
requires an integral form. The positive half contains no negative generator or
compact star structure. No categorical action on $V(1)^{\otimes N}$ is part of
this definition.
