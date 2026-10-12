---
id: "thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties"
kind: "theorem"
title: "Polarized Hodge and hard Lefschetz package for smooth projective varieties"
status: "draft"
origin: "session"
deps: ["lem-smooth-projective-analytification-has-rational-kahler-polarization", "thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms", "thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz", "thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties", "lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}]}
proof_strategy: direct
---

## Statement

For a smooth projective complex variety $X$ of pure dimension $n$ with a chosen ample line class $\ell$, its rational cohomology is finite-dimensional pure Hodge in each degree, functorial for holomorphic pullbacks. Cup has Hodge type $(0,0)$ and $\ell$ has type $(1,1)$. The absolute hard-Lefschetz maps $\ell^{n-k}:H^k\to H^{2n-k}$ are rational isomorphisms; the rational primitive summands satisfy the Hodge–Riemann positivity of [[thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties]], and the specified sign-adjusted full cohomology pairing is a rational polarization. Rational Hodge substructures split orthogonally. The same absolute positivity and hard-Lefschetz statements hold for real Kähler classes; primitive kernels vary continuously along Kähler families. Rational splittings and isomorphisms persist after extension to any characteristic-zero field. This package does not supply weak hyperplane Lefschetz, relative hard Lefschetz, singular intersection-cohomology purity, or semisimplicity of arbitrary local systems.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.



## Proof

1.1 Apply the compact Kähler Hodge theorem and rational scalar comparison to $X$ with the projective Kähler metric explicitly constructed in the HR supplier. Closed-type pullback and wedge give the stated functoriality and cup compatibility. The rational hyperplane/ample class has type $(1,1)$ by its closed Chern form, and the rational hard-Lefschetz and primitive decomposition follow from the absolute Lefschetz supplier. [given, algebra]

2.1 The HR supplier proves primitive positivity, full sign-adjusted polarization, and real Kähler variation including the continuous-kernel matrix argument. The orthogonal polarized-Hodge lemma then splits every rational sub-Hodge structure. Both its splitting matrices and the Lefschetz isomorphism matrices extend to every characteristic-zero field, as explicitly proved in those suppliers. Each conclusion is absolute and no relative or local-system assertion is used. [step 1.1, given, algebra] ∎
