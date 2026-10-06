---
page: formal-immersions-and-the-smale-hirsch-theorem
title: Formal Immersions and the Smale Hirsch Theorem
status: draft
requires: ["morse-functions-critical-values-and-genericity", "sublevel-deformation-and-the-handle-attachment-theorem", "handle-decompositions-duality-and-rearrangement", "smooth-vector-bundles-and-sections", "sard-theorem-and-transversality", "whitney-embedding-tubular-neighbourhoods-and-approximation", "obstruction-theory-postnikov-towers-and-classifying-spaces", "topological-vector-bundles-and-grassmannian-classification", "leray-hirsch-thom-isomorphism-and-gysin-sequences", "direct-matrix-factorisations-lu-cholesky-and-qr", "tangent-cotangent-and-the-differential"]
items: [def-formal-immersion-between-smooth-manifolds, def-weak-compact-open-smooth-topology-on-mapping-spaces, lem-regular-sublevels-are-compact-manifolds-with-boundary, rem-a-closed-n-manifold-cannot-immerse-in-r-n, lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas, def-space-of-immersions-and-space-of-formal-immersions, lem-joint-jet-continuity-and-the-weak-smooth-topology, lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources, lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary, lem-open-manifolds-admit-exhaustions-with-no-caps, def-normal-bundle-of-a-formal-immersion, def-compact-parameter-pair, def-derivative-map-from-immersions-to-formal-immersions, lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property, lem-formal-immersion-gives-the-tangent-normal-bundle-identity, lem-smoothing-formal-immersion-families, lem-the-derivative-map-is-continuous, def-regular-homotopy-of-immersions, lem-parametric-immersion-extension-on-a-disk, lem-smoothing-genuine-immersion-families, lem-formal-immersion-homotopies-extend-over-a-subcritical-handle, lem-smooth-families-and-path-components-in-the-weak-topology, lem-formal-immersion-homotopies-extend-over-a-collar, lem-open-manifolds-admit-handle-filtrations-without-top-index-handles, thm-smale-hirsch-for-open-source-manifolds, lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case, thm-smale-hirsch-immersion-theorem, cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes, rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence, lem-no-nowhere-zero-tangent-field-on-a-positive-even-sphere]
examples: []
---

This page develops the homotopy-theoretic picture of immersion theory. A
formal immersion is a smooth map together with a fibrewise injective bundle map
of tangent bundles, and the derivative map compares genuine immersions with
formal ones. The main results are the Smale--Hirsch theorem: for a closed source
of positive codimension, and for an open source in arbitrary codimension, the
derivative map is a weak homotopy equivalence; and its consequences: regular
homotopy classes of immersions are homotopy classes of formal immersions, and
the tangent-normal identity $TM\oplus\nu_F\cong f^*TN$ connects the formal
datum with the normal bundle.

The topology used throughout is the weak (compact-open) $C^\infty$ topology,
fixed once and for all. The classification corollary treats finite-CW parameter
pairs and the permitted smooth parameter families with neighbourhood-relative
conditions. The proof route passes through the disk h-principle, the
handle-attachment step, the collar lemma, the
no-top-index handle filtration of an open manifold, the closed-source
microextension reduction to the open case, and the smoothing lemmas that pass
between continuous and smooth families. Countable choice is used through the
exhaustion and approximation suppliers; no full axiom of choice is invoked.

A parameter interval keeps the source dimension fixed: a path of immersions
$M\to N$ is a smooth family of such maps, and need not be an immersion of
$M\times[0,1]$ into $N$. Throughout, countable choice is assumed when the
smooth tangent-bundle, metric, exhaustion and approximation constructions
require it.

The constructive proof uses the dimension-qualified full-column core lifting
interface from Smale's covering-homotopy construction. A normal bump and a
compact-frame estimate preserve the full derivative; cocore directions remain
source directions. Relative core integration, fixed-dimensional collar
compression and compatible source exhaustion give the open theorem, including
equal dimensions. Normal Taylor extension, fibre compression and the two
normal-identification forgetful fibrations give the closed positive-codimension
comparison without discarding identification monodromy.

The component corollary also proves finite-CW relative family classification
and the main theorem's permitted smooth parameter form. These are the family
classification conclusions established here.
