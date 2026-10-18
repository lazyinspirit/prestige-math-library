---
id: def-critical-quiver-coha-from-vanishing-cycle-data
kind: definition
title: "A conditional critical CoHA from monodromic vanishing-cycle data"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-untwisted-quiver-cohomological-hall-algebra
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - lem-quiver-potential-trace-is-additive-on-extensions
  - lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
  - def-equivariant-borel-moore-homology-and-correspondence-convolution
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

Assume AC as inherited from the equivariant Borel–Moore and constructible
categories. Let \(Q,W\) be as in
[[def-quiver-potential-and-monodromic-vanishing-cycle-data]], and suppose a
monodromic coefficient datum \(\mathscr V\) satisfying all four clauses of
that Definition has been supplied. For a dimension vector \(\mathbf d\) and
\(z\in S_{\mathbf d}\), define homology with coefficients in
\(\Phi_{\mathbf d,z}\) by
\[
H_n^{\mathrm{BM},G_{\mathbf d}}
(\operatorname{Rep}_Q(\mathbf d);\Phi_{\mathbf d,z})
:=\mathbb H^{-n}_{G_{\mathbf d}}
(\operatorname{Rep}_Q(\mathbf d),
\omega_{\operatorname{Rep}_Q(\mathbf d)}^{G_{\mathbf d}}
\otimes^{\mathbb L}\Phi_{\mathbf d,z}).
\]
The **conditional critical CoHA** is the direct sum
\[
\mathcal H^{\mathrm{crit}}_{Q,W,\mathscr V}
=\bigoplus_{\mathbf d}\ \bigoplus_{z\in S_{\mathbf d}}
H_*^{\mathrm{BM},G_{\mathbf d}}
(\operatorname{Rep}_Q(\mathbf d);\Phi_{\mathbf d,z}).
\]
For \(z_1\in S_{\mathbf a}\) and \(z_2\in S_{\mathbf b}\), multiply by
\(p_*q^!\) using the proper, smooth, and external-product maps in
\(\mathscr V\); its output lies in value \(z_1+z_2\). The degree shift is
\(-2\chi_Q(\mathbf b,\mathbf a)\), the same Borel–Moore convention as in
[[def-untwisted-quiver-cohomological-hall-algebra]]. Finite sums of
dimension/value-supported inputs multiply to finite sums, so this direct-sum
algebraic structure needs no completion.

This is the on-shell construction with monodromy retained. It is not the
off-shell rapid-decay realization, and it asserts no existence theorem for a
standard mixed-Hodge-module or 3-Calabi–Yau orientation package.

This construction also uses the quotient-stack Borel–Moore operation
interface required by
[[def-untwisted-quiver-cohomological-hall-algebra]]. That interface is not
supplied by the current fixed-group equivariant Borel–Moore item, so the
critical CoHA definition remains escalated until that prerequisite is
established.
