---
page: algebraic-group-actions-orbits-stabilizers-and-controlled-quotients
title: "Algebraic Group Actions, Orbits, Stabilizers, and Controlled Quotients"
status: draft
category: scheme-theory
requires: [group-schemes-of-finite-type-over-a-field, affine-group-schemes-hopf-algebras-and-rational-representations, dimension-constructible-images-and-dimensions-of-fibres, fibre-products-base-change-and-scheme-theoretic-fibres, flat-smooth-and-etale-morphisms]
items:
  - def-quotient-sheaf-and-representable-quotient
  - def-algebraic-group-action-and-scheme-theoretic-stabilizer
  - lem-fppf-quotient-representability-criterion
  - thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation
  - lem-action-map-fibres-and-stabilizer-subscheme
  - lem-orbit-map-faithfully-flat-and-orbit-locally-closed
  - lem-projective-space-action-from-linear-representation
  - prop-faithfully-flat-orbit-map-represents-coset-quotient
  - lem-orbit-map-fibres-and-stabilizer-dimension
  - thm-homogeneous-space-for-smooth-affine-group
  - rem-quotient-sheaf-versus-representing-scheme
examples: []
---

This page develops actions of finite-type group schemes on schemes, their orbit
maps and stabilizers, and the two controlled settings in which quotient sheaves
are representable by schemes. It opens with the fppf quotient sheaf
[[def-quotient-sheaf-and-representable-quotient]], the sheafification of the
naive quotient presheaf of a pre-relation, and with
[[def-algebraic-group-action-and-scheme-theoretic-stabilizer]], which records
actions, equivariance, orbit maps, the reduced orbit, the scheme-theoretic
stabilizer and the action groupoid; the definition stresses that for nonsmooth
groups the orbit map need not factor through the reduced orbit.
[[lem-fppf-quotient-representability-criterion]] gives the Stacks criterion for
a scheme to represent an fppf quotient sheaf, and
[[thm-fppf-quotient-for-affine-finite-locally-free-equivalence-relation]]
records the affine finite-locally-free case as an exact interface to the
published finite flat affine quotient theorem.

The orbit theory is built from
[[lem-action-map-fibres-and-stabilizer-subscheme]], which identifies the
stabilizer as a closed subgroup scheme, computes the fibres of the orbit map as
translates of the stabilizer and identifies the kernel pair; for smooth groups
[[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]] shows that orbits
are locally closed and smooth with faithfully flat orbit maps over every field,
and [[lem-orbit-map-fibres-and-stabilizer-dimension]] records the classical
orbit-stabilizer dimension identity and the closed-orbit theorem. The
representation-theoretic input is
[[lem-projective-space-action-from-linear-representation]], which turns a
rational representation into an action on the space of lines with the same
line stabilizers. Finally
[[prop-faithfully-flat-orbit-map-represents-coset-quotient]] and
[[thm-homogeneous-space-for-smooth-affine-group]] show that coset quotients of
smooth affine groups by arbitrary closed subgroup schemes are separated
finite-type schemes, and [[rem-quotient-sheaf-versus-representing-scheme]]
keeps the orbit set, the fppf quotient sheaf and a representing scheme apart,
recording that general arbitrary-group quotient representability is outside the
scope claimed here.
