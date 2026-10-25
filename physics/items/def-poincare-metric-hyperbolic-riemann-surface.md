---
id: def-poincare-metric-hyperbolic-riemann-surface
kind: definition
title: "Poincaré metric on a hyperbolic Riemann surface"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-biholomorphic-map
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-universal-covering-type-riemann-surface
  - lem-holomorphic-structure-lifts-to-covering-surface
  - def-poincare-metric-and-distance-on-the-disc
  - thm-poincare-distance-formula-and-disc-automorphism-invariance
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-piecewise-c-one-curve-on-a-manifold
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $X$ be a connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]) of **hyperbolic
universal-covering type**, meaning that its holomorphic universal cover is
biholomorphic to the unit disc $\mathbb D$
([[def-universal-covering-type-riemann-surface]]); assume the Axiom of Choice
([[def-axiom-of-choice]]) throughout, as in that definition. On $\mathbb D$ let

$$ds_{\mathbb D}=\frac{2\,|dz|}{1-|z|^2}$$

be the Poincaré length element
([[def-poincare-metric-and-distance-on-the-disc]]), with the normalisation
(factor $2$) fixed there for all later surface pages.

**Uniformizations.** By the definition of hyperbolic type there are a
holomorphic universal covering $p:\widetilde X\to X$, with $\widetilde X$
carrying the complex structure of
[[lem-holomorphic-structure-lifts-to-covering-surface]] for which $p$ is a
holomorphic unbranched covering, and a biholomorphism
$\psi:\widetilde X\to\mathbb D$ ([[def-biholomorphic-map]]). Call such a pair
$(p,\psi)$, or briefly $\psi$, a **uniformization** of $X$.

**The Poincaré length element.** Let $V\subseteq X$ be a connected evenly
covered open set with inverse sheet $s:V\to\widetilde X$, that is,
$p\circ s=\operatorname{id}_V$
([[def-covering-map-and-evenly-covered-neighbourhoods]]). Then $s$ is
holomorphic and $\psi\circ s:V\to\mathbb D$ is a holomorphic local
biholomorphism, and on $V$ define

$$ds_X\big|_V:=(\psi\circ s)^*ds_{\mathbb D},$$

the local pushforward of $ds_{\mathbb D}$ along the inverse sheet $s$ of the
covering $p$, equivalently its pullback along $\psi\circ s$. In a holomorphic
chart $z$ of $X$ with domain $V$ this reads

$$ds_X=\frac{2\,|F'(\zeta)|}{1-|F(\zeta)|^{2}}\,|d\zeta|,\qquad F:=\psi\circ s\circ z^{-1},\qquad \zeta=z(x),$$

a positive smooth coefficient because $F'$ does not vanish. The **Poincaré
length element**, also called the **Poincaré metric**, of $X$ is the conformal
metric obtained by patching these local expressions.

*Consistency.* The patching requires three checks; the definition is local, so
it suffices to compare the expressions where both are defined.

1. *Charts.* If $z'$ is a further holomorphic chart on $V$, then with
   $\phi:=z\circ z'^{-1}$ one has $F\circ\phi=\psi\circ s\circ z'^{-1}$ and,
   by the chain rule,
   $$\frac{2\,|(F\circ\phi)'(\zeta')|}{1-|(F\circ\phi)(\zeta')|^{2}}=\frac{2\,|F'(\phi(\zeta'))|}{1-|F(\phi(\zeta'))|^{2}}\,|\phi'(\zeta')|,$$
   which is exactly the transformation rule of a conformal metric under the
   coordinate change $\zeta=\phi(\zeta')$. So each local expression defines a
   conformal metric on its chart, independent of the chart.

2. *Inverse sheets.* Let $s,s':V\to\widetilde X$ be two inverse sheets over a
   connected evenly covered $V$ and let $x_0\in V$. Then $s(x_0)$ and
   $s'(x_0)$ lie in the same fibre $p^{-1}(x_0)$. The base $X$ is a connected
   manifold, hence path connected, locally path connected and semilocally
   simply connected, and for a universal cover the deck group acts transitively
   on each fibre
   ([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]): a path
   in the simply connected total space joining two points of a fibre projects
   to a loop whose lifted endpoint is the second fibre point, and the loop
   class gives a deck transformation moving the first point to the second.
   Choose $h\in\operatorname{Deck}(p)$ with $h(s(x_0))=s'(x_0)$. Since $V$ is
   connected, $s(V)$ lies in a single sheet of $p^{-1}(V)$ and $s'(V)$ lies in
   a single sheet; shrinking to a connected open neighbourhood $W\subseteq V$
   of $x_0$ over which $h\circ s$ is defined, both $s'$ and $h\circ s$ are
   continuous inverses of $p$ on $W$ with values in the same sheet, where $p$
   is injective, so $s'=h\circ s$ on $W$. By
   [[lem-holomorphic-structure-lifts-to-covering-surface]] the deck
   transformation $h$ is biholomorphic, so
   $h_{\mathbb D}:=\psi\circ h\circ\psi^{-1}$ is an automorphism of
   $\mathbb D$, and by
   [[thm-poincare-distance-formula-and-disc-automorphism-invariance]] (whose
   proof derives the pointwise identity
   $2|h_{\mathbb D}'(z)|/(1-|h_{\mathbb D}(z)|^{2})=2/(1-|z|^{2})$ for every
   disc automorphism) the length element $ds_{\mathbb D}$ is
   $h_{\mathbb D}$-invariant. Hence on $W$
   $$\psi\circ s'=h_{\mathbb D}\circ(\psi\circ s),\qquad\text{so}\qquad (\psi\circ s')^*ds_{\mathbb D}=(\psi\circ s)^*ds_{\mathbb D},$$
   and the local metrics defined from $s$ and from $s'$ agree near $x_0$; as
   $x_0$ was arbitrary, they agree on $V$.

3. *Uniformization and cover.* If $(p,\psi)$ and $(p,\psi')$ are
   uniformizations of $X$ with the same cover, then
   $\psi'=h\circ\psi$ for the disc automorphism
   $h:=\psi'\circ\psi^{-1}$, and $\psi'\circ s=h\circ(\psi\circ s)$; the same
   invariance gives the identical local metric. If instead
   $p':\widetilde X'\to X$ is a further holomorphic universal cover and
   $(p',\psi')$ is a uniformization of it, then by the well-definedness
   discussion of [[def-universal-covering-type-riemann-surface]] there is a
   biholomorphism $\Phi:\widetilde X'\to\widetilde X$ over $X$, that is,
   $p\circ\Phi=p'$, and then $\psi\circ\Phi$ is a uniformization of $p'$ while
   $\Phi^{-1}\circ s$ is an inverse sheet of $p'$ over $V$ with
   $(\psi\circ\Phi)\circ(\Phi^{-1}\circ s)=\psi\circ s$; the local expressions
   coincide verbatim. So the metric depends only on $X$.

Since every point of $X$ lies in a connected evenly covered open set, the
consistent local conformal metrics patch to a global conformal metric $ds_X$
on $X$, given in each holomorphic chart by a positive smooth coefficient
$\rho_X$.

**Poincaré length and distance.** Let $\gamma:[a,b]\to X$ be a piecewise
$C^1$ curve ([[def-piecewise-c-one-curve-on-a-manifold]]). Its **Poincaré
length** is

$$\ell_X(\gamma):=\int_a^b\rho_X(\gamma(t))\,|\gamma'(t)|\,dt,$$

the integrand computed in the finitely many holomorphic charts covering the
pieces; the value is independent of those charts and of the subdivision by the
transformation rule of check 1 and the chain rule. The image of $\gamma$ is
compact and $\rho_X$ is continuous and positive, hence bounded on it, so
$\ell_X(\gamma)<\infty$. The **Poincaré distance** is

$$d_X(x,y):=\inf\{\,\ell_X(\gamma):\gamma\text{ a piecewise }C^1\text{ curve in }X\text{ from }x\text{ to }y\,\},\qquad x,y\in X.$$

The set is nonempty: a Riemann surface is locally path connected, and two
points are joined inside finitely many chart discs, in which the Euclidean
segments straighten to a piecewise $C^1$ curve. Each such curve has finite
length, so $d_X$ is finite; it is symmetric, and the triangle inequality holds
by concatenating curves and adding integrals. It is positive for $x\ne y$: in
a chart carrying $x$ to $0$, take $r>0$ with the closed disc of radius $r$
about $0$ missing the image of $y$ and with $\rho_X\ge c>0$ on that disc;
every curve from $x$ to $y$ leaves the disc, and the part up to the first exit
has Euclidean length at least $r$, hence Poincaré length at least $cr$. Thus
$d_X$ is a metric on $X$, and $\ell_X,d_X$ are its length and distance
functions.

## Remark

**Equivalent description.** By construction the pullback of $ds_X$ under the
covering is the pullback of the disc metric under the uniformization,
$p^*ds_X=\psi^*ds_{\mathbb D}$ on $\widetilde X$; the check 2 above is exactly
the statement that $\psi^*ds_{\mathbb D}$ is invariant under deck
transformations. Indeed $h^*(p^*ds_X)=(p\circ h)^*ds_X=p^*ds_X$ for every deck
transformation $h$, so deck transformations act on $\widetilde X$ by
isometries of the pulled-back metric. This is the metric statement that the
later surface page develops for the action of the deck group on the disc.

**Scope and normalisation.** The construction is made only for surfaces of
hyperbolic universal-covering type; no metric is introduced here on surfaces
whose universal cover is the sphere or the plane. The normalisation is the one
fixed in [[def-poincare-metric-and-distance-on-the-disc]] (factor $2$, the
curvature $-1$ normalisation of the disc model), so that in a coordinate obtained from an inverse covering sheet followed by
$\psi$, the surface length element is $2|dz|/(1-|z|^2)$ on that coordinate
image. An arbitrary coordinate-disc chart uses the derivative-weighted formula
in the Definition. In particular, when $X=\mathbb D$ and $z=2w$ on
$|w|<1/2$, that formula gives $ds_X=|dz|/(1-|z|^2/4)$.

**Choice accounting.** The definition makes no new selection: the cover and
the uniformization are supplied by the type definition, and the consistency
checks show that neither the choice of the cover nor the choice of the
uniformization affects $ds_X$. The Axiom of Choice enters only through
[[def-universal-covering-type-riemann-surface]], namely as Countable Choice
for the lifted holomorphic structure and as full choice through the
uniformization theorem; every other selection above is a finite one (finitely
many charts covering a curve, finitely many Euclidean segments).
