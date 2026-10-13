---
page: sr-lorentz-transformations-examples
title: "Lorentz Transformations — Examples"
status: published
library: physics
items: []
examples:
  - ex-sr-one-plus-one-boost-matrix
  - ex-sr-collinear-boost-composition-and-rapidity
  - ex-sr-boost-rotation-factorization-worked
  - cex-sr-noncollinear-boosts-do-not-commute
  - cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous
  - ex-sr-tensor-component-transformation
  - ex-sr-four-current-boost
  - ex-sr-primed-frame-origin-motion
  - cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost
---

These examples and counterexamples evaluate the Lorentz transformations of
[[sr-lorentz-transformations]] on explicit numbers. The $1+1$ boost at
$\beta=3/5$ is checked for its metric and determinant conditions, its inverse,
the images of the events $(0,0)$ and $(13,11)$ and the preservation of the
null lines ([[ex-sr-one-plus-one-boost-matrix]]); two collinear boosts compose
to the parameter $15/17$ with rapidities adding as $\log 2+\log 2=\log 4$
([[ex-sr-collinear-boost-composition-and-rapidity]]); and the motion of a
primed chart's origin under a passive boost is computed in
[[ex-sr-primed-frame-origin-motion]].

The noncommutativity of noncollinear boosts is witnessed by two exact
rational matrices at $\beta=3/5$ that differ in listed entries
([[cex-sr-noncollinear-boosts-do-not-commute]]), and the composition
$B(\frac35e_1)B(\frac35e_2)$ is factored as
$B(3/5,12/25,0)\operatorname{diag}(1,R)$: the rotation acts first, followed
by the boost. The rotation has cosine $40/41$ and sine $9/41$ in the
clockwise coordinate convention of the worked example
([[ex-sr-boost-rotation-factorization-worked]]). The discrete parity and
time-reversal matrices show that Lorentz maps need be neither proper nor
orthochronous and that $\det L=1$ alone does not force orthochrony
([[cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous]]), while a
spatial rotation is a proper orthochronous Lorentz map that is not a boost
([[cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost]]).
Finally the component laws are computed for a covector and a vector under the
$\beta=3/5$ boost with invariant contraction
([[ex-sr-tensor-component-transformation]]), and a constant vector field
$J=\rho_0U$, with $U$ future timelike and unit and $\rho_0$ an arbitrary real
constant, has components $(\rho_0,0,0,0)$ in the rest chart of $U$, exhibiting
the difference between the scalar multiplier and the coordinate density
([[ex-sr-four-current-boost]]).
