---
id: lem-elliptic-fibre-etale-h1-frobenius-weights
kind: lemma
title: Frobenius weights on elliptic étale H1
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-elliptic-frobenius-tate-weights
- lem-arith-dual-and-poincare-bundle-finite-field-descent
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
- thm-global-functions-proper-integral-variety
- thm-full-riemann-roch-divisor
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, The Picard scheme of a curve
    url: https://stacks.math.columbia.edu/tag/0B9R
    locator: Section 44.6 introduction read for Picard background; the Kummer and Frobenius calculations below are local and not imported.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is explicit and supplies DC for the dual-Picard and Tate-module suppliers.
---

## Statement

Assume the Axiom of Choice. Let E be an elliptic curve over F_q of characteristic p, let ℓ≠p, and put `Ebar=E×Fq Fqbar`. The compatible finite-level groups `H¹_et(Ebar,Z/ℓ^n)` are free of rank two with the natural reduction maps. On `V=(lim_n H¹_et(Ebar,Z/ℓ^n))⊗Zℓ Qℓ`, every eigenvalue of geometric Frobenius has absolute value √q under every complex embedding of its algebraic splitting field. This is a fibrewise statement and does not assert relative lissity or construct a derived rational-adic direct image.

## Facts & Assumptions

**Given:** AC, E/F_q, ℓ≠p, the algebraic closure and the finite-level étale cohomology systems in the Statement.

[F1] The q-Frobenius on the Tate module of any elliptic curve over F_q has algebraic eigenvalues of complex absolute value √q under AC. [[lem-elliptic-frobenius-tate-weights]]

[F2] The algebraically trivial rigidified Picard functor of an abelian variety is represented by its dual, compatibly with field extension. [[lem-arith-dual-and-poincare-bundle-finite-field-descent]]

[F3] For ℓ invertible, the ℓ-adic Tate module of an elliptic curve is free rank two and its reductions are its finite torsion groups. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

[F4] Global functions on a proper integral scheme over an algebraically closed field are the ground field. [[thm-global-functions-proper-integral-variety]]

[F5] Riemann–Roch holds for divisors on a smooth proper curve. [[thm-full-riemann-roch-divisor]]

[F6] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** finite-level Kummer sequences and the dual Tate module.

1.1 Put k=Fqbar and m=ℓ^n. On Ebar the Kummer sequence `1→μ_m→G_m --(m)→ G_m→1` is exact on the étale site: for a unit u, the algebra `T^m−u` is finite étale since m and T are units. By [F4], global units are k×, and the mth-power map on k× is surjective. The associated long exact sequence identifies `H¹(Ebar,μ_m)` naturally with `Pic(Ebar)[m]`; the identification `H¹(G_m)=Pic` is obtained by gluing line bundles from G_m torsors. [F2, F4, F6, given, construct, algebra]

2.1 The degree map has target Z, so every m-torsion line bundle has degree zero. Conversely Riemann–Roch [F5] on the pointed genus-one curve identifies every degree-zero line bundle with `O(P−O)` for a unique P∈Ebar(k). Varying P in the connected curve makes it algebraically trivial, so [F2] identifies `Pic(Ebar)[m]` with `E^∨[m](k)`. These identifications are natural in field automorphisms and in m; the transition from mℓ to m is multiplication by ℓ. [F2, F3, F5, F6, step 1.1, given, construct, algebra]

3.1 The dual E^∨ is an elliptic curve over F_q. By [F3], its ℓ-power torsion gives a free rank-two Tate module and the transition maps are surjective. Taking the compatible inverse limit in step 2.1 gives `lim H¹(Ebar,μ_(ℓ^n)) = T_ℓ(E^∨)`. Since `μ_(ℓ^n)=Z/ℓ^n(1)` and the coefficient module is free rank one, tensoring the finite cochain systems by that constant module gives the natural Galois-equivariant identification `V⊗Qℓ(1)=T_ℓ(E^∨)⊗Qℓ`. Thus the finite H¹ groups are free of rank two and have the required reductions. [F2, F3, F6, step 2.1, given, construct, algebra]

4.1 Arithmetic Frobenius acts on the Tate twist Qℓ(1) by q and on `T_ℓ(E^∨)` by the q-power Frobenius endomorphism. By [F1] every eigenvalue α on that Tate module has complex absolute value √q. Thus arithmetic Frobenius on V has eigenvalues α/q, and geometric Frobenius, its inverse, has eigenvalues q/α. They are algebraic and have complex absolute value √q under every complex embedding. No ordinary finite-monodromy assertion is used. [F1, F3, F6, step 3.1, given, construct, algebra] ∎

## Source and authoring record

This is a local fibrewise AC-scoped prerequisite. It does not establish relative lissity, identify the varying derived rational-adic direct image, or prove the full universal elliptic R¹ statement. No independent review is asserted.
