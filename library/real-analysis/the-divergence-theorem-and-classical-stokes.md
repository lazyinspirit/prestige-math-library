---
page: the-divergence-theorem-and-classical-stokes
title: "The Divergence Theorem and Classical Stokes"
status: draft
items: [def-divergence-and-curl-of-a-c1-vector-field,
        lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules,
        lem-the-divergence-and-curl-of-a-cross-product,
        cor-curl-vanishes-exactly-when-a-field-is-closed,
        thm-the-curl-of-a-gradient-vanishes,
        thm-the-divergence-of-a-curl-vanishes,
        def-laplacian-of-a-c2-function,
        cor-the-curl-of-a-curl-of-a-c2-field,
        cor-a-curl-free-c1-field-on-a-star-shaped-open-subset-of-r3-is-conservative,
        def-vector-potential-of-a-c1-vector-field,
        thm-a-divergence-free-c1-field-on-a-star-shaped-open-set-has-a-vector-potential,
        lem-curl-is-the-antisymmetric-part-of-the-total-derivative,
        lem-c-one-images-of-content-zero-compact-sets-have-content-zero,
        lem-integral-additivity-over-a-content-zero-almost-partition,
        lem-change-of-variables-with-a-degenerate-parameter-boundary,
        lem-cyclic-coordinate-permutations-preserve-integrals-in-r3,
        def-simple-solid-region-in-a-coordinate-direction,
        lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians,
        def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid,
        def-adapted-outward-boundary-presentation-of-a-simple-solid-region,
        lem-flux-of-a-single-component-field-through-an-oriented-graph-face,
        lem-the-coordinate-flux-identity-for-a-simple-solid-region,
        prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal,
        def-elementary-solid-region,
        cor-every-face-of-an-elementary-solid-region-is-outward-oriented,
        thm-the-divergence-theorem-for-an-elementary-solid-region,
        def-finite-gluing-of-elementary-solid-regions,
        lem-internal-faces-cancel-when-elementary-solid-regions-are-glued,
        thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions,
        cor-vector-forms-of-the-divergence-theorem,
        cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux,
        cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid,
        cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes,
        cor-the-divergence-is-the-limiting-outward-flux-per-unit-volume,
        cor-greens-first-identity-for-glued-elementary-solid-regions,
        cor-greens-second-identity-for-glued-elementary-solid-regions,
        def-the-induced-boundary-chain-of-a-c2-surface-patch,
        lem-a-vector-line-integral-pulls-back-to-the-parameter-region,
        lem-the-stokes-integrand-identity-on-a-c2-patch,
        thm-the-classical-stokes-theorem-for-a-c2-surface-patch,
        cor-stokes-gives-zero-circulation-for-a-curl-free-field,
        cor-the-normal-curl-is-the-limiting-circulation-per-unit-area,
        cor-greens-theorem-in-circulation-form,
        cor-the-planar-divergence-theorem-flux-form-of-greens-theorem,
        rem-the-reach-of-the-classical-divergence-and-stokes-theorems]
examples: []
---

[[regular-surfaces-and-surface-integrals]] supplies regular patches, orientations, flux, finitely patched surfaces, and the graph-based surface-integral formulas that this page repeatedly reuses. Through the prerequisite closure already established on disk, the proofs also use Jordan-set change of variables, Green's theorem on elementary plane regions, line integrals, and the star-shaped equivalence between closed and conservative fields. Those inputs are exactly what let the page work with explicit Euclidean patches and explicit boundary chains, without appealing to any unbuilt manifold or homology machinery.

The page first defines divergence, curl, the Laplacian, and vector potentials, then proves the standard first-order identities and the two degree-two identities $\operatorname{curl}\nabla=0$ and $\operatorname{div}\operatorname{curl}=0$. It next builds the coordinate-direction solid machinery needed for an honest elementary class of three-dimensional regions, proves the divergence theorem first for one elementary solid and then for finite gluings, and extracts the vector forms, Green identities, and the flux interpretation of divergence. The last block defines induced boundary chains for $C^2$ patches, proves classical Stokes in that setting, and recovers the planar Green formulas and the circulation interpretation of curl.
