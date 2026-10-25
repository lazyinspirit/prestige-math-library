---
page: murnaghan-stability-via-fi-modules
title: "Murnaghan Stability via FI-Modules"
status: published
items: [def-lambda-ring-specializations-and-the-sigma-series,
        def-iterated-schur-coefficients,
        def-first-row-padding-completion-and-the-stabilization-operator,
        lem-schur-specialization-coproduct-and-plethysm-identities,
        lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities,
        lem-vertex-operator-series-for-padded-schur-functions,
        lem-padding-completion-is-compatible-with-the-internal-product,
        thm-murnaghan-stability-for-kronecker-coefficients,
        def-reduced-kronecker-coefficient,
        thm-brion-formula-for-reduced-kronecker-coefficients,
        lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients,
        thm-murnaghan-expansion-for-all-admissible-ranks,
        lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients,
        prop-reduced-kronecker-support-satisfies-size-triangle-inequalities,
        thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]
examples: []
requires:
  - kronecker-coefficients-and-internal-products
  - character-polynomials-fi-modules-and-representation-stability
---

**Objective.** This page proves Murnaghan's stabilization theorem for
Kronecker coefficients, develops the reduced coefficients through the
lambda-ring and vertex-operator calculus, and computes the exact global
stabilization threshold of a fixed Kronecker product. The route is the
FI-module proof: the padded irreducible families
([[prop-fi-module-realizing-one-padded-irreducible-family]]) tensor together to
a finitely generated FI-module, and finite generation is equivalent to uniform
representation stability over characteristic zero
([[thm-finite-generation-is-equivalent-to-uniform-representation-stability]]),
so the padded Kronecker multiplicities
$g^{\gamma[n]}_{\alpha[n],\beta[n]}$ are eventually constant
([[thm-murnaghan-stability-for-kronecker-coefficients]]). The limit is the
reduced Kronecker coefficient
$\bar g^\gamma_{\alpha,\beta}$
([[def-reduced-kronecker-coefficient]]).

The second half makes the stable family computable. The Jacobi–Trudi
completion of an arbitrary integer sequence
([[def-first-row-padding-completion-and-the-stabilization-operator]]) and the
vertex-operator generating series
$\sum_{n\in\mathbb Z}s_{\alpha[n]}t^n=\sigma[tX]s_\alpha[tX-1]$
([[lem-vertex-operator-series-for-padded-schur-functions]]) are combined into
the compatibility of padding with the internal product
([[lem-padding-completion-is-compatible-with-the-internal-product]]); comparing
with the stable expansion identifies the generating polynomial with
$\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_\gamma$ and yields Brion's formula
([[thm-brion-formula-for-reduced-kronecker-coefficients]]) in both its
two-alphabet and symmetric three-alphabet forms. Brion's formula expands into
four nonnegative coefficient families
([[lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients]]), which
give Murnaghan's size inequalities
([[prop-reduced-kronecker-support-satisfies-size-triangle-inequalities]]), the
top-degree Murnaghan–Littlewood rule
([[lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients]])
and the full expansion at every admissible rank
([[thm-murnaghan-expansion-for-all-admissible-ranks]]). The signed straightening
terms in that expansion genuinely cancel at small admissible ranks, and the page
keeps that behaviour rather than replacing it by coefficientwise stability.
Finally the support maximum $|\gamma|+\gamma_1\le|\alpha|+|\beta|+\alpha_1+\beta_1$,
attained at $\gamma=\alpha+\beta$ with coefficient one, is shown to be
the exact least global stabilization index
$\operatorname{stab}(\alpha,\beta)=|\alpha|+|\beta|+\alpha_1+\beta_1$
([[thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product]]),
with the one-empty and both-empty cases handled explicitly. No positivity or
combinatorial rule for general Kronecker coefficients is asserted, and the
global threshold is not claimed to be sharp for individual coefficients; the
companion page
[[murnaghan-stability-via-fi-modules-examples]] works the pair
$\alpha=\beta=(2)$ and exhibits both boundaries.
