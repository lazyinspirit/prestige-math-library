---
page: tgr-mc01
title: "Rest fluid state, frame and geometric current definitions"
status: draft
library: mathematics
requires:
  - gr-connections-and-free-fall
  - inverse-and-implicit-function-theorems
  - td-math-nonsmooth-equilibrium
items:
  - def-tgr-local-fluid-state
  - lem-tgr-local-gibbs-euler
  - lem-tgr-fluid-frame-projection
examples: []
---

Here “frame” means an observer congruence $u$ on an open set: a smooth vector field whose values are future-directed unit timelike observers, together with their pointwise rest spaces, as in [[def-gr-observer-congruence-and-adapted-charts]] and [[def-gr-observer-and-rest-space]]. It is distinct from an adapted chart or tetrad, as in [[def-gr-local-frame-and-tetrad-fields]]. This mathematical page defines that frame and its rest-space projections, a $C^2$ local state function, and geometric number, entropy, and stress-energy currents with their types and units. It proves the local Gibbs, Euler, parcel, and response identities from that state function, along with current/stress decompositions. For a future timelike number-current vector $J$, the pointwise Eckart observer is $u_E=J/\sqrt{-g(J,J)}$, which has vanishing projected current, as defined in [[lem-tgr-fluid-frame-projection]]. The local Landau object is a $C^1$ observer field $u_L$ with vanishing projected energy flux, represented near a perfect-fluid tensor with $h_0>0$ by coefficients in a chosen smooth local tetrad, as defined in [[lem-tgr-fluid-frame-projection]]. Both are observer objects, not charts or tetrads. The Landau result is local; null dust gives an explicit pointwise obstruction outside that regime.

The page depends on the stated Lorentzian connection and observer geometry, the Euclidean inverse/implicit function tools, and the current nonsmooth-equilibrium mathematics page. The equations of state and tensor fields are mathematical inputs. No physical law, actual-material applicability, measurement, global gravitating extensivity, or evolution theorem is asserted.

