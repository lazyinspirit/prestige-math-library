---
requires:
  - gr-framework-and-geometry
  - distributions-integral-manifolds-and-the-frobenius-theorem
  - roots-and-rational-powers
  - the-exterior-derivative-and-cartan-calculus
page: gr-tensors-and-observers
title: "Tensors And Observers"
status: draft
library: physics
items:
  - lem-gr-tensor-bundle-coordinate-construction
  - def-gr-tensor-fields-and-components
  - def-gr-observer-and-rest-space
  - def-gr-observer-congruence-and-adapted-charts
  - lem-gr-tensor-component-transformation-law
  - lem-gr-contraction-of-smooth-tensor-fields
  - lem-gr-observer-projection-decomposition
  - lem-gr-observer-pairing-with-future-causal-vectors
  - def-gr-local-frame-and-tetrad-fields
  - lem-gr-tetrad-change-of-basis-is-lorentz
  - thm-gr-local-lorentz-tetrad-existence
  - thm-gr-observer-relative-velocity-decomposition
  - cor-gr-adapted-chart-existence
  - prop-gr-rest-space-integrability-criterion
  - def-gr-observer-relative-energy-and-momentum
  - lem-gr-observer-energy-momentum-identities
  - rem-gr-chart-tetrad-congruence-and-observer-distinctions
examples: []
---

The page builds the tensor and observer language on the geometric arena fixed
by [[gr-framework-and-geometry]]. Tensor fields of type $(r,s)$ are defined at
a point and on a four-manifold by $C^\infty$ chart components over the maximal
smooth atlas, with the tensor-bundle formulation recorded and the index
conventions — Einstein summation and the musical movement of slots — fixed
([[def-gr-tensor-fields-and-components]]). The component transformation law
between overlapping charts is proved from the change-of-basis formulas for
coordinate derivations and coordinate differentials rather than assumed, and
the same computation shows that the smoothness condition is independent of the
atlas used ([[lem-gr-tensor-component-transformation-law]]). Contraction is
defined pointwise by the basis-independent mixed-tensor formula
([[def-contraction-of-a-mixed-tensor]],
[[lem-contraction-is-independent-of-the-basis-formula]]), and the field it
produces is proved smooth in every chart, with the explicit component formula
$\sum_iT^i{}_{i}$ in the trace case
([[lem-gr-contraction-of-smooth-tensor-fields]]).

An observer at an event is a single future-directed unit timelike tangent
vector; its rest space is the $g$-orthogonal complement of the line it spans,
and its spatial projection is defined by the formula
$h_n(v)=v+g_p(n,v)n$ ([[def-gr-observer-and-rest-space]]). The page proves
that $h_n$ is the orthogonal projection onto the rest space with kernel the
observer line, that the rest space has dimension three with positive-definite
metric restriction, and that every tangent vector has a unique orthogonal
decomposition $v=-g_p(v,n)n+h_n(v)$
([[lem-gr-observer-projection-decomposition]]). The pairing of the observer
with future causal vectors is analysed next: a nonzero future causal vector
pairs negatively with every observer, and for unit timelike vectors the sign
of the pairing decides the time direction
([[lem-gr-observer-pairing-with-future-causal-vectors]]). The relative velocity
of a future unit timelike vector $u$ is then defined and classified: $u$
decomposes uniquely as $u=\gamma(n+w/c)$ with $\gamma\ge1$, $w$ in the rest
space and $g_p(w,w)=c^2(1-\gamma^{-2})$, and the assignment
$u\mapsto(\gamma,w)$ is a bijection onto the pairs satisfying those conditions
([[thm-gr-observer-relative-velocity-decomposition]]).

Fields of observers and frames occupy the middle of the page. An observer
congruence on an open set is a smooth field whose value at every point is an
observer; its maximal integral curves are its observer curves, and charts
adapted to a congruence are defined by constancy of the spatial coordinates
along those curves ([[def-gr-observer-congruence-and-adapted-charts]]). Local
frame fields, coordinate frames and tetrad fields — pointwise $g$-orthonormal
frames, with the future-directed and congruence-adapted variants — are defined
and kept distinct, the pairwise commuting coordinate fields supplying the
necessary condition that separates coordinate frames from general frames
([[def-gr-local-frame-and-tetrad-fields]]). A smooth future-directed tetrad
field exists in a neighborhood of every event: the proof normalizes a
future-directed orthonormal basis of the tangent space at the point and
orthogonalizes the remaining fields inside the moving rest spaces, with
successive shrinking of neighborhoods and the injective-regular-map theorem
supplying smoothness of the square roots
([[thm-gr-local-lorentz-tetrad-existence]]). The change between two
future-directed tetrads is a Lorentz matrix $\Lambda$ with
$\Lambda^{\mathsf T}\eta\Lambda=\eta$, $\det\Lambda=\pm1$ and
$\Lambda^0{}_0>0$, and the components of a tensor in one tetrad are those in
the other transformed by $\Lambda$ and $\Lambda^{-1}$
([[lem-gr-tetrad-change-of-basis-is-lorentz]]).

Every congruence admits a local adapted chart, obtained by applying the
flow-box theorem to the nowhere-vanishing congruence field
([[cor-gr-adapted-chart-existence]]), while the family of rest spaces always
forms a smooth rank-three distribution that is tangent to local hypersurfaces
if and only if $\alpha\wedge d\alpha=0$ for the flat form $\alpha=n^{\flat}$ of
the congruence — an integrability criterion, not a universal property
([[prop-gr-rest-space-integrability-criterion]]). Observer-relative quantities
close the mathematical content: observer energy $E_n(P)=-c\,g_p(P,n)$, spatial
momentum $q_n(P)=h_n(P)$ and rest mass $m(P)=\sqrt{-g_p(P,P)}/c$ are defined by
explicit formulas and the unique decomposition
$P=(E_n(P)/c)n+q_n(P)$ is recorded
([[def-gr-observer-relative-energy-and-momentum]]); the page then proves the
master identity $E^2=c^2(g_p(q,q)-g_p(P,P))$, the positivity of $E$ for
nonzero future causal $P$, and the mass shell
$E^2=m^2c^4+c^2g_p(q,q)$ for future timelike $P$, including its null
specialization ([[lem-gr-observer-energy-momentum-identities]]). A closing
audit keeps observer, congruence, frame, tetrad, adapted chart, rest-space
integrability and observer-relative quantities distinct and points to the item
that proves each property
([[rem-gr-chart-tetrad-congruence-and-observer-distinctions]]).

Nothing on this page attaches a clock reading, a measurement, a dynamics or a
claim about nature to these geometric objects; those readings belong to the
physical postulates and unit conventions of the framework, recorded elsewhere
on the track. The worked examples and counterexamples of the pair are
collected on [[gr-tensors-and-observers-examples]].
