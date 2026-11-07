---
id: thm-grothendieck-reconstruction-for-affine-hyperbolic-curves-over-finitely-generated-fields
kind: theorem
title: Relative isomorphism reconstruction for affine hyperbolic curves over finitely generated fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finitely-generated-field-extension
  - def-affine-hyperbolic-curve-type
  - def-arithmetic-fundamental-group-extension
  - def-jacobian-of-smooth-proper-curve
  - def-pointed-abel-jacobi-map-of-curve
  - def-arith-tate-module-and-inertia
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - thm-arithmetic-fundamental-group-sequence-is-exact
  - thm-picard-zero-represented-by-jacobian
  - thm-jacobian-has-canonical-principal-polarization
  - thm-abel-jacobi-universal-property-for-pointed-curve
  - thm-good-reduction-and-smooth-proper-base-change
  - thm-tamagawa-reconstruction-affine-curves-over-finite-fields
  - thm-tame-fundamental-group-specialization-over-strict-henselian-trait
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, Theorem 6.3 and §6.3
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
---

## Statement

Assume the Axiom of Choice and the Axiom of Dependent Choice. Let $k$ be a field finitely generated over $\mathbb Q$, let $\bar k$ be an algebraic closure, and for $i=1,2$ let $U_i=C_i\setminus D_i$ be affine hyperbolic compactification pairs over $k$ of types $(g_i,r_i)$, with $r_i>0$. Write $\Pi_i=\pi_1^{\mathrm{et}}(U_i,\bar u_i)$ and $\Delta_i=\pi_1^{\mathrm{et}}(U_{i,\bar k},\bar u_i)$ for compatible geometric basepoints, with their base-change maps and projections to $G_k$. An isomorphism of the geometric and arithmetic pairs means a $\bar k$-scheme isomorphism $U_{1,\bar k}\to U_{2,\bar k}$ and a $k$-scheme isomorphism $U_1\to U_2$ that commute with base change. An isomorphism of the fundamental-group sequences means a compatible pair of continuous isomorphisms $\Delta_1\to\Delta_2$ and $\Pi_1\to\Pi_2$ commuting with the inclusions and projections and inducing the identity on $G_k$, taken up to the geometric-basepoint conjugacy. The natural map from the former set to the latter is bijective.

## Statement references

[Tamagawa, Theorem 6.3 and the complete proof in §6.3](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[[def-finitely-generated-field-extension]]

[[def-affine-hyperbolic-curve-type]]

[[def-arithmetic-fundamental-group-extension]]
