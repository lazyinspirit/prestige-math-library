---
id: def-quaternionic-clutching-bundles-xi-h-j-over-s-four
kind: definition
title: "Quaternionic clutching bundles $\\xi_{h,j}$ over $S^4$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-clutching-construction-for-bundles-over-a-suspension, def-quaternions, thm-quaternions-form-a-division-ring, def-euclidean-spheres-and-closed-balls, cor-euclidean-spheres-are-path-connected, thm-path-connected-implies-connected]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 402, the maps (a,v) -> (a, a^h v a^j) defining the bundles xi_{h,j}; printed p. 403 for the associated S^3 bundles M_{h,j}"
    - title: "Hatcher, Vector Bundles & K-Theory, section 1.2"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "clutching functions and the upper/lower hemisphere description, printed pp. 21-24"
---

## Definition

Identify the oriented fibre $\mathbb R^4$ with the quaternions $\mathbb H$ in the
ordered basis $(1,i,j,k)$, so that $N(a)=1$ defines the unit sphere
$S^3\subseteq\mathbb H$ ([[def-quaternions]],
[[def-euclidean-spheres-and-closed-balls]]). For a unit quaternion $a$ and an
integer $m$, let $a^m$ denote the integer power in the group
$\mathbb H\setminus\{0\}$ ([[thm-quaternions-form-a-division-ring]]); on $S^3$
this is $a^m$ for $m\ge0$ and $(\bar a)^{-m}$ for $m<0$.

Write $S^4=D^4_+\cup_{S^3}D^4_-$ for the union of the two closed four-disks
glued along their common boundary sphere. We fix the following orientations.
The disk $D^4_+$ and the disk $D^4_-$ carry the standard orientation of
$\mathbb R^4$ in the basis $(1,i,j,k)$; the equator $S^3=\partial D^4_+$ carries
the induced boundary orientation; the fibre $\mathbb R^4$ carries the
orientation of the ordered basis $(1,i,j,k)$; and $S^4$ is oriented so that the standard coordinate orientation on
$D^4_-$ agrees with its manifold orientation, while that on $D^4_+$ is
opposite. Thus the common coordinate sphere $a\in S^3$, oriented as
$\partial D^4_+$ in its standard coordinates, is also the positively
oriented coordinate boundary of $D^4_-$. The calibration lemma proves that
this convention gives Euler number $+1$ to both basic multiplication maps. Let $u\in H^4(S^4;\mathbb Z)$ be the resulting positive
generator.

For integers $h,j$, let $g_{h,j}:S^3\to GL_4(\mathbb R)$ be the clutching map
$$g_{h,j}(a)v=a^hva^j,\qquad a\in S^3,\ v\in\mathbb H,$$
so that $g_{h,j}(a)$ is the composite of the $\mathbb R$-linear maps of left
multiplication by $a^h$ and right multiplication by $a^j$. Then $\xi_{h,j}$ is
the oriented real rank-four bundle over $S^4$ obtained by the clutching
construction from $g_{h,j}$, with the upper-to-lower identification
$$(a,v)_+\sim(a,g_{h,j}(a)v)_-,\qquad (a,v)\in S^3\times\mathbb H,$$
as in [[def-clutching-construction-for-bundles-over-a-suspension]].

## Remarks

**Well-definedness of the clutching data.** The multiplication of
$\mathbb H$ is given by a polynomial formula in the coordinates, so it is
smooth in each variable and, for fixed $a$, the maps $L_a(v)=av$ and
$R_a(v)=va$ are $\mathbb R$-linear endomorphisms of $\mathbb H=\mathbb R^4$
([[def-quaternions]], [[thm-quaternions-form-a-division-ring]]). Writing
$a=(a_0,a_1,a_2,a_3)$ and $v=(x_0,x_1,x_2,x_3)$, the product formula gives
$L_av=M(a)v$ with
$$M(a)=\begin{pmatrix}a_0&-a_1&-a_2&-a_3\\ a_1&a_0&-a_3&a_2\\ a_2&a_3&a_0&-a_1\\ a_3&-a_2&a_1&a_0\end{pmatrix}.$$
Expanding the sixteen entries of $M(a)^{\mathsf T}M(a)$ shows that its rows are
pairwise orthogonal and each has squared length $N(a)=a_0^2+a_1^2+a_2^2+a_3^2$,
so $M(a)^{\mathsf T}M(a)=N(a)I$; this is the coordinate form of the classical
four-square identity and gives
$$N(av)=N(a)N(v)\qquad\text{for all }a,v\in\mathbb H.$$
The same expansion applied to the matrix of right multiplication
$v\mapsto va$, whose columns are $a,ia,ja,ka$, gives
$N(va)=N(v)N(a)$ as well. Consequently, for $N(a)=1$ and all $m$, $L_{a^m}$
and $R_{a^m}$ are norm-preserving, hence orthogonal. Their determinants are
$1$: the maps
$a\mapsto\det L_a$ and $a\mapsto\det R_a$ are continuous on the path-connected
sphere $S^3$ ([[cor-euclidean-spheres-are-path-connected]],
[[thm-path-connected-implies-connected]]) with values in $\{\pm1\}$, and at
$a=1$ both are the identity; hence $L_a,R_a\in SO(4)$ for every unit $a$.

**Consequences for the clutching construction.** For fixed $(h,j)$ the map
$g_{h,j}:S^3\to SO(4)$ is continuous, being the restriction to $S^3$ of a
polynomial map; equivalently, on $S^3$ every negative power is the polynomial
map $a\mapsto\bar a^{\,|m|}$, because $a\bar a=1$ there
([[thm-quaternions-form-a-division-ring]]). Thus $g_{h,j}$ is a continuous map
from the compact based space $S^3$ into $GL_4(\mathbb R)$ taking values in
$SO(4)$, and the clutching construction applies to produce the rank-four
bundle $\xi_{h,j}\to S^4$ with the stated upper-to-lower transition. The
calibration of the two basic maps $g_{1,0}$ and $g_{0,1}$ to degree $+1$ is the
content of the following local lemma; the bundle orientation uses that
calibration and the fibre orientation $(1,i,j,k)$.
