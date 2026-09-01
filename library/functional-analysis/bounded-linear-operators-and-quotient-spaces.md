---
page: bounded-linear-operators-and-quotient-spaces
title: "Bounded Linear Operators and Quotient Spaces"
status: published
items: [def-bounded-linear-operator, thm-bounded-linear-operator-equivalences,
        def-operator-norm, lem-operator-norm-is-a-norm,
        lem-composition-operator-norm-inequality,
        def-space-of-bounded-linear-operators,
        thm-bounded-operator-space-is-banach,
        thm-extension-of-a-bounded-map-from-a-dense-subspace,
        def-topological-isomorphism-of-normed-spaces,
        def-bounded-bilinear-map,
        thm-bounded-bilinear-map-equivalences,
        def-quotient-vector-space-coset-notation, def-quotient-seminorm,
        lem-quotient-seminorm-is-representative-independent,
        lem-quotient-seminorm-triangle-inequality,
        thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed,
        thm-quotient-map-is-open,
        thm-quotient-of-banach-by-closed-subspace-is-banach,
        thm-universal-property-of-the-normed-quotient,
        def-complemented-subspace,
        thm-complemented-subspace-iff-range-of-a-bounded-projection,
        def-bounded-below-operator,
        thm-bounded-below-iff-injective-with-closed-range,
        def-bounded-left-and-right-inverses,
        thm-bounded-right-inverse-iff-kernel-is-complemented,
        thm-bounded-left-inverse-iff-range-is-complemented]
examples: []
---

This page packages the first functional-analysis uses of norm completeness:
bounded linear and bilinear maps, the operator norm and the Banach space
$\mathcal B(X,Y)$, and quotient norms with their factorization property.
Under Countable Choice it proves dense extension into Banach targets and
quotient completeness; under Dependent Choice it proves the one-sided inverse
criteria. The quotient proofs keep the $\varepsilon$-minimizer route explicit,
so no best-approximation theorem is silently assumed.
