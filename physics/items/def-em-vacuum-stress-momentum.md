---
id: def-em-vacuum-stress-momentum
kind: definition
title: "Momentum density, Maxwell stress, momentum flux and orbital angular density in vacuum"
domain: physics
physical_scope: "The mechanical quantities quadratic in the vacuum electromagnetic fields: momentum density, Maxwell stress tensor, momentum flux and the origin-relative orbital angular momentum density and its flux tensor, as pointwise functions on the named laboratory region in SI units. The item fixes objects and index and origin conventions only; it asserts no balance identity, no covariant identification, no value at a point of singular source support and no distributional product for locally integrable fields."
status: draft
origin: pipeline
dependency_level: 10
proof_strategy: direct
deps: [def-cross-product-in-r3, def-directional-and-partial-derivatives, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-vacuum-energy-flux, def-euclidean-inner-product, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  def-cross-product-in-r3: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-vacuum-energy-flux: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (cover dated Lent Term 2015, 236-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.6.1 printed pp. 128-129 (PDF pp. 136-137), eqs. (5.46)-(5.48): momentum density and momentum balance. Tong's stress symbol equals Pi=-sigma in this item, so its stress sign is opposite to our sigma. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§8.2.2-8.2.3 printed pp. 351-356 (PDF pp. 367-372), eqs. (8.19)-(8.22), (8.30)-(8.31): stress T equals our sigma, momentum density, and momentum flux -T equals our Pi; §8.2.4 printed p. 358 (PDF p. 374), eq. (8.34): orbital angular density, not its flux tensor. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§32 printed pp. 79-80 (PDF pp. 91-92), eqs. (32.8)-(32.14): generic symmetric energy-momentum tensor and flux conventions; §33 printed pp. 81-83 (PDF pp. 93-95), eqs. (33.1)-(33.3): electromagnetic components in Gaussian units. Their spatial stress equals our Pi after SI conversion. Relevant passages independently read during Step 5a reader-32, 10 October 2026."
---

## Definition

Retain the fields $E,B:\Omega\times I\to\mathbb R^3$ of [[def-em-fields]], the
energy density $u$ and Poynting vector $S$ of [[def-em-vacuum-energy-flux]],
the laboratory region, its frame basis $(e_1,e_2,e_3)$ and its spatial
Euclidean structure of [[def-em-lab-geometry]], the constants and units of
[[def-em-si-conventions]], and the partial derivatives $\partial_j$ of
[[def-directional-and-partial-derivatives]]. Write $x=(x^1,x^2,x^3)$ for the
position in the spatial chart, $\delta_{ij}$ for the Kronecker symbol
($\delta_{ij}=1$ if $i=j$ and $0$ otherwise), $\lvert E\rvert^2=\langle E,E\rangle$
with the Euclidean inner product of [[def-euclidean-inner-product]], and
$\times$ for the cross product of [[def-cross-product-in-r3]] in the frame
basis. Let $\varepsilon_0=(\mu_0c^2)^{-1}$ and $\mu_0>0$ be the constants of
[[def-em-si-conventions]].

(a) [Momentum density] The **electromagnetic momentum density** is the map
$g:\Omega\times I\to\mathbb R^3$ defined by

$$g:=\frac{S}{c^2}=\varepsilon_0\,E\times B,$$

in $\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$; the second equality uses
$\varepsilon_0=(\mu_0c^2)^{-1}$.

(b) [Maxwell stress tensor] The **Maxwell stress tensor** is the spatial
tensor field $\sigma$ on $\Omega\times I$ with components

$$\sigma_{ij}:=\varepsilon_0\Bigl(E_iE_j-\tfrac12\delta_{ij}\lvert E\rvert^2\Bigr)+\frac{1}{\mu_0}\Bigl(B_iB_j-\tfrac12\delta_{ij}\lvert B\rvert^2\Bigr),$$

in $\mathrm N\,\mathrm m^{-2}=\mathrm J\,\mathrm m^{-3}$; the indices range over
$\{1,2,3\}$ and repeated symbols are not summed here, every sum being written
explicitly. The tensor is **symmetric**, $\sigma_{ij}=\sigma_{ji}$ for all
$i,j$, by inspection of the displayed expression. Its divergence is the vector
field with components
$(\operatorname{div}\sigma)_i:=\sum_{j=1}^{3}\partial_j\sigma_{ij}$, the partial
derivatives being taken at fixed $t$.

(c) [Momentum flux] The **momentum flux tensor** is $\Pi:=-\sigma$, with
$(\operatorname{div}\Pi)_i:=\sum_{j=1}^{3}\partial_j\Pi_{ij}$; then
$\operatorname{div}\Pi=-\operatorname{div}\sigma$ componentwise.

(d) [Orbital angular momentum density and its flux] Relative to the origin of
the spatial chart, the **orbital angular momentum density** is
$\ell:=x\times g$, with components $\ell_i=\sum_{j,k=1}^{3}\epsilon_{ijk}x_jg_k$,
and its **flux tensor** is the spatial tensor field $x\times\Pi$ with
components

$$(x\times\Pi)_{i\ell}=\sum_{j,k=1}^{3}\epsilon_{ijk}\,x_j\,\Pi_{k\ell}.$$

Here $\epsilon_{ijk}$ is the Levi-Civita symbol, defined by
$\epsilon_{ijk}=+1$ if $(i,j,k)$ is an even permutation of $(1,2,3)$,
$\epsilon_{ijk}=-1$ if it is an odd permutation, and $\epsilon_{ijk}=0$ if two
indices coincide, in the positively oriented basis $(e_1,e_2,e_3)$. The object
$\ell$ carries $\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-1}$ and the components
of $x\times\Pi$ carry $\mathrm{kg}\,\mathrm s^{-2}=\mathrm N\,\mathrm m^{-1}$.

(e) [Origin] Both $\ell$ and $x\times\Pi$ depend on the origin of the spatial
chart: under a shift $x\mapsto x+a$ of the origin by a constant $a\in\mathbb R^3$
their values become $\ell+a\times g$ and $x\times\Pi+a\times\Pi$ respectively,
so the definition fixes one origin in the laboratory frame and every statement
about $\ell$ or $x\times\Pi$ is relative to that fixed origin.

(f) [Status] This item fixes objects and index conventions only. No balance
identity and no interpretation of $\sigma$ or $\Pi$ as force or momentum flux
is asserted here; every balance identity involving these objects is the content
of the separate theorem items of this page.

(g) [Quadratic character and singular support] All five objects are quadratic
in the fields $E,B$. For a locally integrable branch of
[[post-em-vacuum-maxwell]] the exclusions recorded in
[[def-em-vacuum-energy-flux]] apply to each of them: the products
$E_iE_j$, $B_iB_j$ and the components of $E\times B$ need not be locally
integrable, no product of distributions is defined, and the displayed formulas
then define the objects pointwise almost everywhere, the framework using them
only where the local integrability of the products is separately established.
No value is assigned at a point of singular source support.

(h) [No covariant object] No four-dimensional or covariant interpretation of
$(u,S,g,\sigma)$ is defined here; in particular $g$ is not identified with the
spatial components of a covariant momentum density.

## Facts & Assumptions

**Given:** The laboratory region $U\cong I\times\Omega$ with $I$ a nonempty open interval and $\Omega\subseteq\mathbb R^3$ nonempty open, its chart, frame basis and spatial Euclidean structure; the SI units and constants of the framework; and jointly $C^k$ fields $E,B$ with $k\ge1$.

[F1] The laboratory region, its chart coordinates $(t,x)$, the frame basis $(e_1,e_2,e_3)$ of each spatial slice, the identification $\mathbb R^3\cong n^\perp$, and the componentwise notion of a $C^k$ laboratory field on the open set $\Omega\times I\subseteq\mathbb R^4$, are those of [[def-em-lab-geometry]].

[F2] $E$ and $B$ are electric and magnetic fields of class $C^k$, $k\ge1$, in the sense of [[def-em-fields]]: they are maps $\Omega\times I\to\mathbb R^3$ of class $C^k$, $E$ is polar, $B$ is axial, $E$ carries $\mathrm V\,\mathrm m^{-1}$ and $B$ carries $\mathrm T$, and no value of either field is asserted at a point of singular source support.

[F3] The constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$ with $c>0$ and $\mu_0>0$, and the unit identities $1\,\mathrm N=1\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-2}$, $1\,\mathrm J=1\,\mathrm N\,\mathrm m$, $1\,\mathrm W=1\,\mathrm J\,\mathrm s^{-1}$, $1\,\mathrm V=1\,\mathrm J\,\mathrm C^{-1}$, $1\,\mathrm A=1\,\mathrm C\,\mathrm s^{-1}$ and $1\,\mathrm T=1\,\mathrm N\,\mathrm A^{-1}\mathrm m^{-1}$ hold ([[def-em-si-conventions]]).

[F4] The energy density $u$ and the Poynting vector $S=\mu_0^{-1}E\times B$ are those of [[def-em-vacuum-energy-flux]]; in particular $S$ is of class $C^k$ with the fields and $S$ carries $\mathrm W\,\mathrm m^{-2}$.

[F5] In the laboratory's component labels $1,2,3$, the Euclidean inner product is the coordinate dot product $\langle x,y\rangle=\sum_{i=1}^{3}x_iy_i$: these labels relabel the supplier's coordinates $0,1,2$ in order. It is bilinear, symmetric and nonnegative definite ([[def-euclidean-inner-product]]); the cross product has the coordinate formula $(u\times v)_1=u_2v_3-u_3v_2$, $(u\times v)_2=u_3v_1-u_1v_3$, $(u\times v)_3=u_1v_2-u_2v_1$, is bilinear in each argument and is alternating, $u\times v=-(v\times u)$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[F6] Partial derivatives are those of [[def-directional-and-partial-derivatives]]; a $C^k$ map on the open set $\Omega\times I$ has continuous partial derivatives through order $k$, and the map $x\mapsto x_j$ on the spatial chart is $C^\infty$.

[F7] Finite componentwise sums, componentwise products and scalar multiples of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Verification

**Proof technique:** direct; the objects are explicit polynomial expressions in the fields and the coordinates, so regularity, symmetry, units, the origin law and quadratic homogeneity are read off from the algebra of the displayed formulas.

1.1 Well-definedness and regularity. Each component $\sigma_{ij}$ of the displayed expression is a finite sum of scalar multiples of products of the component functions $E_iE_j$, $\lvert E\rvert^2=\sum_lE_lE_l$ and their $B$-analogues, together with the constant factor $\delta_{ij}$; these are $C^k$ functions of $(x,t)$ by [F2], [F5] and the product and sum clauses of [F7], so $\sigma:\Omega\times I\to\mathbb R^{3\times3}$ is a $C^k$ tensor field. The same argument gives the regularity of $g=\varepsilon_0E\times B$ and of $\Pi=-\sigma$ from [F4]; and $\ell$ and $x\times\Pi$ are finite sums of products of the $C^k$ functions $g_k$, $\Pi_{k\ell}$ with the coordinate functions $x_j$, which are $C^\infty$ and in particular $C^k$, so $\ell$ and $x\times\Pi$ are $C^k$ as well. In particular the divergence $(\operatorname{div}\sigma)_i=\sum_{j=1}^{3}\partial_j\sigma_{ij}$ is defined for $k\ge1$, and clause (f) introduces no further object. [given, F1, F2, F4, F5, F6, F7, algebra]

1.2 Symmetry. For all $i,j$, the first parenthesis of the definition of $\sigma_{ij}$ satisfies $E_iE_j-\tfrac12\delta_{ij}\lvert E\rvert^2 =E_jE_i-\tfrac12\delta_{ji}\lvert E\rvert^2$, because the product of numbers is commutative and $\delta_{ij}=\delta_{ji}$; the same holds for the $B$-term, so $\sigma_{ij}=\sigma_{ji}$ and $\sigma$ is symmetric. [given, F5, algebra]

1.3 Units. With [F3] and [F5]: the first summand of $\sigma_{ij}$ carries $(\mathrm C^2\,\mathrm N^{-1}\mathrm m^{-2})(\mathrm N\,\mathrm C^{-1})^2 =\mathrm N\,\mathrm m^{-2}$ and the second carries $(\mathrm N\,\mathrm A^{-2})^{-1}(\mathrm N\,\mathrm A^{-1}\mathrm m^{-1})^2 =\mathrm N\,\mathrm m^{-2}$, so $\sigma_{ij}$ carries $\mathrm N\,\mathrm m^{-2}=\mathrm J\,\mathrm m^{-3}$; $g=S/c^2$ carries $(\mathrm{kg}\,\mathrm s^{-3})(\mathrm m^{-2}\mathrm s^{2}) =\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$; $\ell=x\times g$ carries $\mathrm m\cdot\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1} =\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-1}$; and $x\times\Pi$ carries $\mathrm m\cdot\mathrm N\,\mathrm m^{-2} =\mathrm N\,\mathrm m^{-1}=\mathrm{kg}\,\mathrm s^{-2}$, since $\Pi=-\sigma$ has the units of $\sigma$. These are exactly the units asserted in clauses (a), (b) and (d). [given, F3, F5, algebra]

1.4 Origin shift. Let $a\in\mathbb R^3$ be constant and replace the position $x$ by $x+a$ while keeping the fields and $\Pi$ fixed. By bilinearity of the cross product in each argument [F5], $\ell(x+a)=(x+a)\times g=x\times g+a\times g=\ell(x)+a\times g$ and $(x+a)\times\Pi=x\times\Pi+a\times\Pi$; this is clause (e), with all field values evaluated at the same point $(x,t)$; $a\times g$ is a vector field and $a\times\Pi$ is a matrix-valued field, not a constant vector. [given, F5, algebra]

2.1 Quadratic character. For every real $\lambda$, substituting $(\lambda E,\lambda B)$ for $(E,B)$ multiplies each of $g$, $\sigma$ and $\Pi$ by $\lambda^2$, because every term is a product of exactly two field components and $\delta_{ij}$ is a constant; consequently $\ell=x\times g$ and $x\times\Pi$ are also multiplied by $\lambda^2$. Hence all five objects are quadratic in the fields, as asserted in clause (g); the exclusions recorded there and the status clauses (f) and (h) add no mathematical assertion beyond the displayed definitions. [step 1.1, F5, algebra] ∎

## Remarks

- **Sign convention.** With $\Pi=-\sigma$ the local balance of the next items reads $\partial_tg+\operatorname{div}\Pi=-f$ for the force density $f$ of [[post-em-lorentz-coupling]]; writing $\sigma$ in place of $\Pi$ changes the sign of the divergence term. The gradient convention $(\operatorname{div}\sigma)_i=\sum_j\partial_j\sigma_{ij}$ and the component order $\sigma_{ij}$ (first index: component of the transported momentum; second index: direction of transport) are fixed by the tensor definition above and are used consistently by the balance theorem of this page.
- **The Levi-Civita convention.** The symbol $\epsilon_{ijk}$ is the one fixed in clause (d); it is not a tensor density and no orientation-reversing change of basis is used in this framework, the laboratory basis $(e_1,e_2,e_3)$ being positively oriented by [[def-em-lab-geometry]].
