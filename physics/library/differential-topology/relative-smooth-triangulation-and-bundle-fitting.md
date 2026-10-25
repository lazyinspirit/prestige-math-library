---
page: relative-smooth-triangulation-and-bundle-fitting
title: "Relative smooth triangulation and bundle fitting"
status: published
items: [def-relative-smooth-triangulation-and-projection-preserving-fitting,
        lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation,
        lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps,
        lem-corner-adapted-strong-approximations-remain-in-the-same-orthant,
        lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection,
        thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations,
        thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation]
examples: []
---

This page develops the differentiable-topology machinery behind finite
triangulations that respect extra structure: corners, boundary data, and a
supplied bundle projection over a fixed base triangulation. It fixes its
conventions in [[def-relative-smooth-triangulation-and-projection-preserving-fitting]]:
a whole-star immersion is required to be injective on the entire tangent star
at each point, strong $C^1$ approximation is measured on value and on tangent
star vectors, fitting is by simplexwise affine identification on a (full)
subcomplex, and a projection-preserving diagram requires $\pi F=hr$ with $h$
kept as a point map.

Three lemmas carry the analytic weight. Whole-star embeddings are stable under
sufficiently fine strong approximation
([[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]]),
with no mesh or shape bound on the subdivision: the proof uses finite-star
separation angles and a two-segment projection argument. Shape-controlled
secants approximate piecewise smooth maps and can be made relative to a
subcomplex, fixed near it, and extended locally with controlled derivatives
([[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]]).
A small corner-adapted approximation preserving coordinate planes also keeps
each piece in its orthant with unchanged face zero sets
([[lem-corner-adapted-strong-approximations-remain-in-the-same-orthant]]),
supplying the side control that plane preservation alone does not give.

The fitting lemma then resolves arbitrary overlaps of finitely many pieces by an
elementary Euclidean cell construction and fits them with exact preservation of
a bundle projection, supported away from a protected region
([[lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection]]).
The two headline results assemble these tools: compact smooth manifolds with
corners admit finite corner-adapted triangulations, relative to admissible
boundary data and to a protected collar
([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]).
Protected neighbourhood pieces must already be corner adapted, and a relative
bundle piece must carry the prescribed projection diagram. Smooth bundles
with compact total space admit finite triangulations over a
fixed base triangulation with the actual projection realised as a piecewise
affine map
([[thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation]]).
The companion page
[[relative-smooth-triangulation-and-bundle-fitting-examples]] works the product
case explicitly. All items on this page are drafts awaiting independent review.
