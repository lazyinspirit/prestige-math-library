---
page: hall-algebra-modules-and-geometric-actions
title: "Hall Algebra Modules, Fock Spaces, and Geometric Actions"
status: draft
requires:
  - green-hall-bialgebras-and-quantum-group-realizations
  - symmetric-functions-hall-inner-product-and-schur-bases
items:
  - def-a1-nakajima-framed-quiver-data
  - lem-a1-nakajima-varieties-and-hecke-correspondence-are-points
  - thm-a1-nakajima-hecke-correspondence-gives-sl2-action
  - def-hall-algebra-module
  - thm-hall-algebra-regular-module
  - thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action
examples: []
---

This page treats a Hall-algebra module as an algebra representation, with the
input category's objects kept separate from the vector space carrying the Hall
action. Associativity and the unit give the regular action. For the Jordan
quiver, the generic Hall-to-symmetric-function isomorphism and its transported
Green pairing yield explicit creation and annihilation operators; their
normalized commutators are checked directly. The Green pairing has a different
normalization from the ordinary Hall inner product on symmetric functions.
The Jordan category here is the category of nilpotent finite-dimensional
$\mathbb F_q[t]$-modules; no identification with finite abelian $p$-groups is
asserted.

The geometric construction is the framed one-vertex quiver with no arrows,
framing dimension one, and positive stability. Its two nonempty fibres and
their Hecke correspondence are points, and the resulting correspondence
operators give the two-dimensional $\mathfrak{sl}_2$ representation. No
general action theorem for arbitrary loopless quivers is asserted here.
Because these particular fibres are points, no general projectivity or
properness claim about Nakajima varieties or their correspondences is implied.

## Logical development

The A1 framed data and its point correspondence are defined and verified
first. The algebraic branch then defines Hall modules, proves the regular
action, and derives the Jordan-quiver Fock normalization from the explicit
Green pairing. The companion page works through the matrix and scalar
normalizations.
