---
page: hormander-estimates-and-the-levi-problem
title: "Hörmander Estimates and the Levi Problem"
status: published
items: [        lem-smooth-regularization-of-psh-exhaustion,
        def-meromorphic-function-in-several-complex-variables,
        def-weighted-l2-spaces-dbar-forms,
        lem-maximal-distributional-dbar-operator-is-closed,
        thm-basic-bochner-kodaira-morrey-estimate-cn,
        lem-hilbert-complex-solver-from-coercive-estimate,
        lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains,
        lem-hormander-solver-on-smooth-pseudoconvex-domain,
        thm-pseudoconvex-domain-smooth-psh-exhaustion,
        thm-hormander-l2-dbar-existence,
        cor-dolbeault-vanishing-pseudoconvex-domain,
        lem-local-boundary-separator-for-strongly-pseudoconvex-domain,
        lem-positive-smooth-collar-for-a-strictly-psh-negative-set,
        lem-global-smooth-strictly-psh-defining-function,
        lem-smooth-psh-exhaustion-implies-hartogs-pseudoconvexity,
        lem-boundary-peak-function-by-dbar-correction,
        lem-oka-weil-on-domain-of-holomorphy,
        thm-levi-problem,
        thm-behnke-stein-increasing-union,
        thm-oka-weil-approximation-pseudoconvex-domain,
        lem-locally-finite-smooth-partition-of-unity-on-domain,
        cor-first-cousin-problem-pseudoconvex-domain]
examples: []
---

This page proves weighted $L^2$ estimates for the $\bar\partial$-equation
on pseudoconvex domains and records a sourced solution of the Levi problem. The first half
sets up the weighted Hilbert spaces of $(0,q)$-forms with their maximal
distributional $\bar\partial$ and weighted adjoint, solves the abstract
Hilbert-complex problem from a coercive estimate, and records the
Bochner-Kodaira-Morrey identity of the weighted $\bar\partial$-Laplacian
together with the weighted Morrey estimate on smooth Levi-pseudoconvex domains;
the last step produces the Hörmander solver and the existence theorem for
$\bar\partial$-closed forms on Hartogs pseudoconvex domains, including the
smooth-data branch. The local boundary separator and boundary peak
construction are recorded separately, with a positive outer collar, smooth global
defining functions and a proved exhaustion-to-Hartogs bridge supplying the
correction on a neighborhood of the closure. The host-domain Oka-Weil theorem is
used through Boas's approximation theorem.

The second half uses Demailly's Levi theorem and Cartan–Thullen to identify
Hartogs pseudoconvex domains, domains of holomorphy, and holomorphically
convex domains. The smooth exhaustion supplies the bridge to Demailly's
pseudoconvexity criterion. Oka-Weil approximation on a pseudoconvex domain,
Dolbeault vanishing, and the first Cousin problem follow from these inputs.

Conventions: $\Omega\subseteq\mathbb C^n$ is a domain with $n\ge1$, weights are
real $C^2$ (or $C^\infty$) functions, $L^2_{0,q}$ denotes the weighted Hilbert
space of [[def-weighted-l2-spaces-dbar-forms]], and the maximal distributional
$\bar\partial$ is the operator of that definition. The Axiom of Choice is
declared on every proof-bearing item and is tracked through the suppliers, with
the countable instance used by the exhaustion and regularization arguments
recorded in the item-level choice notes. No regularity of $\bar\partial$
solutions at the boundary is claimed, and the Demailly (6.9)
upper-semicontinuous weight statement is not used.
