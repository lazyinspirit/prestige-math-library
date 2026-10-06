---
page: coxeter-descents-poincare-polynomials-and-growth
title: "Coxeter Descents, Poincaré Polynomials, and Growth"
status: draft
items: []
examples: []
---

Length enumeration measures chamber distance. Coset factorizations yield product formulas and a descent inclusion-exclusion yields rational growth; an invariant-degree product for all types needs its own comparison argument.

This is a prose scaffold for future local item authoring. Its empty item lists do not assert proof completion. Every construction below is a named supplier contract; definitions are justified by the separately named existence, descent or uniqueness proofs before any application consumes their properties. Source reading supports the selected proof route and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-length-series-descent-generating-polynomial.** Define P_W(t)=Σw t^ℓ(w) as a formal series with finite coefficients (finite S); define multivariate descent polynomial only for finite W. Define spherical subsets I by W_I finite. Formal inversion requires constant coefficient one, not analytic convergence.

Definition justification: `thm-cg-parabolic-growth-factorization-and-rationality`.

**thm-cg-parabolic-growth-factorization-and-rationality.** Length-additive coset decomposition gives P_W=P_(W^I)P_(W_I). Prove the finite descent inclusion-exclusion identity leading to Steinberg sum 1/P_W(t^-1)=Σ_(I spherical)(-1)^|I|/P_(W_I)(t), with a rigorous rational-function interpretation before substituting inverse formal variables. Every element has finite descent parabolic by exchange; establish that lemma explicitly. The finite sum proves rational growth.

**lem-cg-classical-type-poincare-products.** Construct A/B/D permutation and signed-permutation reflection models and identify them with their faithful canonical finite diagrams. A_n/A_(n−1) has coordinate-orbit distances0,...,n. B_n/B_(n−1) orbit±e_i has one distance0,...,2n−1 by moving along the chain, flipping the terminal sign and returning. D_n/D_(n−1) has one distance0,...,n−2 and n,...,2n−2, with two points at n−1, so quotient polynomial is[n]_t(1+t^(n−1)); D2=A1×A1,D3=A3 supply bases. In each model check every generator changes the displayed distance by at most one and give an attaining word for every coordinate, proving minimality. I2(m) rank-two normal words give its m-vertex quotient path and[m]_t. The length-additive parabolic factorization then proves all classical and dihedral products; no source quotient table substitutes for these lower/upper length bounds.

**lem-cg-exceptional-parabolic-orbit-length-certificates.** For T=S minus one node take the dual fundamental vector λ with zero coordinates exactly T. The chamber stabilizer theorem identifies its orbit with W/W_T, and generator Schreier distance equals minimal coset length by parabolic factorization. Independently check all exact vertex coordinates, all generator edges, involution reversals, attaining applied words and distance potentials from math-checks/finite-degree-poincare-certificates.json. Edge potential differences≤1 give lower bounds and words give upper bounds; finite edge closure plus words proves exhaustive orbit reachability. The six full quotient graphs are E6/D5(27),E7/E6(56),E8/E7(240),F4/B3(24),H3/I2(5)(12),H4/H3(120). Arithmetic is exact Q, Q(sqrt2) or Q(φ), with φ²=φ+1 and positive embedding specified. Verify coefficientwise P_T times the recorded distance polynomial equals the product using the independently proved spectral invariant degrees. This is a finite certificate proof with explicit interpretation, not unchecked exceptional enumeration or whole-group search.

**thm-cg-finite-poincare-exponent-product-and-reciprocity.** The preceding classical recurrences and six exact exceptional quotient certificates prove P_W(t)=∏[d_i]_t=∏(1+...+t^e_i), including H3,H4 and arbitrary I2(m). Invariant degrees d_i and exponents e_i=d_i−1 were independently proved by Molien/Jacobian/regular Coxeter eigenvectors, so no circular degree definition or unverified table enters this comparison. Diagram products add lengths and multiply invariant Hilbert products. The proved longest-element bijection independently gives t^|Φ_+|P_W(t^-1)=P_W(t); neither exponent comparison nor degree determination is inferred from reciprocity.

## Prerequisites and reading

Required earlier pages: [[finite-reflection-arrangements-and-spherical-coxeter-complexes]], [[parabolic-subgroups-and-double-coset-geometry]], [[finite-coxeter-invariants-and-coinvariant-gradings]]. The companion [[coxeter-descents-poincare-polynomials-and-growth-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
