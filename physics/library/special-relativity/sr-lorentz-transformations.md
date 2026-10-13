---
page: sr-lorentz-transformations
title: "Lorentz Transformations"
status: published
library: physics
items: [def-lorentz-map-and-lorentz-group,
        def-lorentz-boost,
        def-spatial-rotation-of-an-inertial-frame,
        lem-lorentz-map-preserves-metric-and-causal-structure,
        lem-boost-is-proper-orthochronous-with-inverse,
        lem-collinear-boost-composition-and-velocity-addition,
        lem-rapidity-parametrization-of-collinear-boosts,
        lem-boost-rotation-factorization,
        thm-sr-proper-orthochronous-lorentz-algebra,
        lem-lorentz-lie-algebra-structure,
        lem-lorentz-exponential-map-and-rapidity,
        thm-sr-affine-isometry-classification,
        lem-inertial-chart-transitions-are-affine-lorentz,
        pthm-sr-interval-and-cone-invariance,
        def-ck-tensor-field-on-minkowski-space,
        thm-sr-tensor-and-current-transformation,
        rem-sr-verbal-postulate-reconstruction-obligations]
examples: []
---

The page develops the Lorentz transformations of the flat special-relativity
model as precise mathematical objects on the affine Minkowski space of
[[sr-spacetime-primitives]]. A linear Lorentz map is a linear endomorphism
preserving the Lorentz form, with the matrix criterion
$M^{T}\eta_0M=\eta_0$ in an $\eta$-orthonormal basis; affine Lorentz maps
compose a linear Lorentz map with a translation
([[def-lorentz-map-and-lorentz-group]]). The preservation of the metric, the
causal character, the cones and the volume form, together with the group
structure of $O(V,\eta)$ and $SO^+(V,\eta)$, is proved in
[[lem-lorentz-map-preserves-metric-and-causal-structure]], and the inertial
chart transitions are exactly the proper orthochronous affine Lorentz maps
([[lem-inertial-chart-transitions-are-affine-lorentz]]); the resulting
classification of affine isometries is
[[thm-sr-affine-isometry-classification]].

The passive boost $B(\boldsymbol\beta)$ is defined by its coordinate action
and matrix ([[def-lorentz-boost]]); it is proper orthochronous with inverse
$B(-\boldsymbol\beta)$ ([[lem-boost-is-proper-orthochronous-with-inverse]]),
collinear boosts compose by the velocity-addition parameter and commute
([[lem-collinear-boost-composition-and-velocity-addition]]), and along a fixed
axis the boosts are parametrized by an additive rapidity
([[lem-rapidity-parametrization-of-collinear-boosts]]). Every proper
orthochronous Lorentz map factors uniquely as $L=B(-\boldsymbol\beta)\widehat R$,
where $\widehat R$ is a spatial rotation of the frame (the rotation acts first),
with the rotation trivial exactly for boosts
([[def-spatial-rotation-of-an-inertial-frame]],
[[lem-boost-rotation-factorization]]); the assembled algebra of the group,
including the Lie algebra of generators and the exponential map, is
[[lem-lorentz-lie-algebra-structure]],
[[lem-lorentz-exponential-map-and-rapidity]] and
[[thm-sr-proper-orthochronous-lorentz-algebra]].

For fields, [[def-ck-tensor-field-on-minkowski-space]] defines
$\mathcal C^k$ tensor fields on open subsets of the model, and
[[thm-sr-tensor-and-current-transformation]] proves the vector, covector,
general $(r,s)$, derivative and current component laws, the invariance of
contractions and the volume-form components. On the physical side,
[[pthm-sr-interval-and-cone-invariance]] records the interval, cone,
orientation and light-line invariance across inertial descriptions as a
conditional consequence of the adopted postulates of
[[sr-spacetime-primitives]], and
[[rem-sr-verbal-postulate-reconstruction-obligations]] lists the
reconstruction obligations that the verbal axiom systems of the literature
leave open. Worked instances are collected on
[[sr-lorentz-transformations-examples]].
