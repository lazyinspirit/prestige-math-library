---
id: def-critical-quiver-coha-from-vanishing-cycle-data
kind: definition
title: "Critical quiver CoHA and its standard rational realization"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-untwisted-quiver-cohomological-hall-algebra
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - lem-quiver-potential-trace-is-additive-on-extensions
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - def-equivariant-borel-moore-homology-and-correspondence-convolution
  - def-intrinsic-quotient-stack-borel-moore-grading
  - lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §§4.7 and 7.4–7.6"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Ben Davison, The critical CoHA of a quiver with potential, §§2.2–2.7 and 3.1–3.2"
      url: "https://arxiv.org/pdf/1311.7172v5"
    - title: "Yan Soibelman, Remarks on Cohomological Hall algebras and their representations, §§2.1 and 2.4"
      url: "https://www.math.ksu.edu/~soibel/COHA-modules-2-1.pdf"
---

## Definition

Assume AC. Let $Q,W$ and an on-shell monodromic homological coefficient
datum $\mathscr K$ be as in
[[def-quiver-potential-and-monodromic-vanishing-cycle-data]]. Define
$$\mathcal H^{\mathrm{crit}}_{Q,W,\mathscr K}=\bigoplus_{\mathbf d}\ \bigoplus_{z\in S_{\mathbf d}}\ \bigoplus_{n\in\mathbb Z}H^{-n}_{G_{\mathbf d}}(X_{\mathbf d},K_{\mathbf d,z}).$$
The index $n$ is the intrinsic Borel–Moore index. For inputs in
$(\mathbf a,z_1)$ and $(\mathbf b,z_2)$, take their external product,
ordinary inverse image along $q$, identify the result with
$K_{E,z_1,z_2}[-2r]$ using the datum, and apply its proper coefficient
morphism. Here $r=-\chi_Q(\mathbf b,\mathbf a)$ and $p$ is proper by
[[lem-quiver-exact-sequence-correspondence-is-smooth-and-proper]]. The
product therefore has degree
$$\mathcal H^{\mathrm{crit}}_{n,\mathbf a,z_1}\otimes\mathcal H^{\mathrm{crit}}_{m,\mathbf b,z_2}\longrightarrow\mathcal H^{\mathrm{crit}}_{n+m-2\chi_Q(\mathbf b,\mathbf a),\mathbf a+\mathbf b,z_1+z_2}.$$
Trace additivity is
[[lem-quiver-potential-trace-is-additive-on-extensions]]. Coherent
presentation and frame operations use
[[def-intrinsic-quotient-stack-borel-moore-grading]]. Finite supported
inputs have finite supported products, so this algebraic direct sum
needs no completion. Dimension zero has its specified identity unit.

The standard rational coefficient datum EXISTS by
[[lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences]].
For this datum write $\mathcal H^{\mathrm{crit}}_{Q,W}$ without an extra
choice. Explicitly, with $g=\dim G_{\mathbf d}$,
$$\mathcal H^{\mathrm{crit}}_{n,\mathbf d,z}=H^{-n-2g}_{G_{\mathbf d}}(X_{\mathbf d},D^{G_{\mathbf d}}\Phi_{\mathbf d,z}).$$
On a free frame quotient $X_U$ with $t=\dim U$, this is the stable value
$H^{-n-2t}(X_U,D\Phi_U)$ degree by degree. It is NOT the unshifted
variety-normalized equivariant group. On smooth charts the standard
constant-input duality identifies $D\Phi=\omega\otimes\Phi$; the
intrinsic shift remains. Equivalently one may take the degreewise dual
of normalized compact-support cohomology, justified on finite models
and then stabilized; no unrestricted dual of the whole graded sum is
used. All these coefficients retain monodromy. For $W=0$ this is the
ordinary intrinsic rational CoHA of
[[def-untwisted-quiver-cohomological-hall-algebra]], with the same
proper/smooth maps and degree convention.
