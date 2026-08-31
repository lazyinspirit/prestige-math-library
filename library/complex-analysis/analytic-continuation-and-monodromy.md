---
page: analytic-continuation-and-monodromy
title: "Analytic Continuation, Monodromy, and Riemann Surfaces"
status: draft
items: [def-holomorphic-germ,
        thm-holomorphic-germs-at-a-point-form-a-local-ring,
        def-function-element-and-direct-analytic-continuation,
        def-analytic-continuation-along-a-path,
        lem-refinement-of-analytic-continuation-chains,
        thm-end-germ-of-path-continuation-is-independent-of-the-chain,
        thm-uniqueness-of-analytic-continuation,
        def-complete-analytic-function,
        thm-monodromy-theorem,
        cor-single-valued-continuation-on-simply-connected-domains,
        rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems,
        def-riemann-surface-of-a-complete-analytic-function,
        lem-germ-neighborhoods-form-a-riemann-surface-basis,
        thm-germ-projection-is-a-local-biholomorphism,
        rem-covering-maps-among-complete-analytic-functions,
        thm-riemann-surface-of-the-logarithm,
        thm-riemann-surface-of-an-nth-root,
        rem-schwarz-reflection-as-analytic-continuation,
        def-singular-boundary-point-and-natural-boundary,
        thm-circle-of-convergence-contains-a-singular-point,
        thm-pringsheim-theorem,
        thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary]
examples: []
---

This page starts from one holomorphic germ and studies what happens when that
germ is carried along paths through overlapping function elements. The first
block fixes the local algebra of germs, defines admissible continuation chains,
and proves that continuation along a fixed path has a well-defined terminal germ
independent of the chosen subdivision. The monodromy theorem then records the
extra homotopy invariance available when continuation exists along every path in
the domain.

The second block turns the reachable germs into an abstract surface. The basic
open sets are the local representatives themselves, so the germ space comes with
charts whose transition maps are identities on overlaps and whose projection to
the base plane is always a local biholomorphism. The logarithm and $n$th-root
surfaces are the two model examples: after choosing the correct parameter, the
projection becomes $\exp$ or $w \mapsto w^n$.

The last block records the opposite phenomenon. Power series need not continue
past their original disc of convergence, and the circle of convergence of a
finite-radius series always contains a genuine singular point. For nonnegative
coefficients Pringsheim forces the positive real boundary point itself to be
singular, and the factorial-gap series shows that every point of the unit circle
can be singular at once.
