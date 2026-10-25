---
page: the-residue-theorem
title: "The Residue Theorem and the Evaluation of Real Integrals"
status: published
items: [rem-cauchy-principal-value-dictionary,
        def-standard-residue-contours,
        def-admissible-cycle-for-residue-theorem,
        lem-finiteness-support-residue-sum,
        thm-residue-theorem-null-homologous-cycle,
        cor-residue-theorem-circle,
        lem-large-semicircle-vanishing,
        lem-jordans-lemma-rational-functions,
        lem-indented-arc-residue-limit,
        thm-residue-evaluation-rational-real-integrals,
        thm-residue-evaluation-principal-value-real-poles,
        thm-residue-evaluation-rational-fourier-integrals,
        thm-trigonometric-integral-unit-circle-substitution,
        lem-keyhole-branch-boundary-values,
        thm-keyhole-residue-formula-mellin-rational-integrals,
        thm-cotangent-residue-summation-rational-functions,
        thm-cosecant-residue-alternating-summation-rational-functions,
        cor-basel-sum-by-residues,
        fs-residue-theorem-applies-to-any-cycle-in-the-domain,
        fs-principal-value-convergence-implies-improper-convergence,
        fs-degree-drop-by-one-is-enough-for-rational-real-integral-convergence,
        fs-large-arc-vanishing-follows-from-pointwise-decay-alone]
examples: []
---

This page packages the residue theorem in the homological language already built
for winding numbers and global Cauchy theory, then uses it to evaluate several
families of definite integrals and bilateral series. The contour part is not
just the local Laurent coefficient formula: the finiteness of the residue sum,
the null-homology hypothesis, and the exact contour conventions all matter and
are made explicit here.

The application half isolates the standard estimates and bookkeeping that are
reused later: large semicircles, Jordan's lemma, upper and lower indentations,
unit-circle substitutions for trigonometric integrals, keyhole branches for
Mellin-type integrals, and rectangle contours for cotangent and cosecant
summation. The companion page records the canonical worked evaluations and the
standard failure modes these contour methods are designed to avoid.
