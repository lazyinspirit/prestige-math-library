---
page: "diagonals-separated-morphisms-and-valuative-uniqueness"
title: "Diagonals Separated Morphisms and Valuative Uniqueness"
status: draft
items: ["def-locally-closed-immersion", "def-separated-morphism-schemes", "lem-closed-immersion-local-on-target", "def-separated-scheme-over-base", "lem-diagonal-is-immersion", "lem-affine-morphism-separated", "cor-affine-schemes-separated", "lem-separated-stable-under-base-change", "lem-separated-stable-under-composition", "lem-separated-local-on-base", "lem-monomorphism-diagonal-isomorphism", "lem-graph-closed-separated-target", "thm-morphisms-agree-closed-equalizer-separated-target", "cor-morphisms-equal-on-dense-open-reduced-source", "lem-diagonal-quasi-compact-iff-quasi-separated", "def-valuative-diagram-separatedness", "lem-separated-implies-valuative-uniqueness", "lem-quasi-compact-immersion-boundary-specialization", "lem-local-domain-dominated-by-valuation-overring", "lem-immersion-with-closed-image", "thm-valuative-criterion-separatedness", "thm-immersion-monomorphism-locally-finite-type", "lem-separatedness-of-open-and-closed-immersions", "thm-separatedness-gluing-overlap-criterion", "cor-doubled-origin-not-separated", "def-relative-projective-space-standard-charts", "lem-projective-space-diagonal-closed", "rem-hausdorff-analogy-limited", "rem-valuative-criterion-quantifies-all-valuation-rings"]
---

Separatedness is a condition on a morphism, not on the point-set topology of its source: the diagonal
$\Delta_{X/S}:X\to X\times_SX$ must be a closed immersion. This page builds that definition together with the
local and global tools that make it checkable: diagonals are always immersions, affine and monomial situations are
separated, and the property is stable under base change, composition and restriction to an open cover of the base.

Later sections record the graph and equalizer forms of separatedness, quasi-separatedness through quasi-compactness
of the diagonal, and the behaviour of open, closed and locally closed immersions and monomorphisms. A direct gluing
overlap criterion and the projective-space chart computation give concrete tests, and the affine line with doubled
origin is retained as the standard nonseparated witness.

The final part states the valuative uniqueness criterion, first for separated morphisms and then for quasi-separated
ones, where the converse assumes the Axiom of Choice and quantifies over all valuation rings rather than discrete
valuation rings alone. The companion examples page computes diagonals, exhibits the doubled-origin failure and the
failure of any DVR-only reduction, and separates uniqueness from existence.
