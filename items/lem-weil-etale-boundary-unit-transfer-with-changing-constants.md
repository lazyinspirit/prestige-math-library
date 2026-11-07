---
id: lem-weil-etale-boundary-unit-transfer-with-changing-constants
kind: lemma
title: Weil–étale boundary-unit transfer with changing constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-weil-etale-class-group-and-cohomology-in-function-field-tower
- lem-weil-etale-h1-boundary-unit-spectral-sequence
- lem-function-field-class-group-injects-into-weil-etale-cohomology
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stephen Lichtenbaum, The Weil–étale topology on schemes over finite fields
    url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/E70A59FA79C01CDBCD940699A72A6F59/S0010437X04001150a.pdf/the-weil-etale-topology-on-schemes-over-finite-fields.pdf
    locator: §2, the Weil–étale spectral sequence; the finite cyclic induction calculation is made below.
dependency_level: 4
proof_strategy: direct
axiom_use: AC and DC are inherited from the named Weil-site and divisor inputs.
---

## Statement

Assume AC and DC. Let k=F_q, let k'/k be finite of degree d, let C/k and C'/k' be smooth proper geometrically integral curves, let T⊂C and T'⊂C' be finite nonempty sets of closed points, and put U=C\T and U'=C'\T'. Suppose `f:C'→C` is a finite k-morphism with `T'=f^(-1)(T)` as sets and `U'→U` finite étale. Choose an embedding k'⊂k̄ and let `f₀:C'_(k̄/k')→C_(k̄/k)` be the corresponding geometric component. Write φ for arithmetic q-Frobenius, so the source arithmetic Frobenius is φ^d. Let P_T and P_T' be the corresponding boundary-supported principal-divisor lattices.

The two low-degree boundary-unit exact sequences from [[lem-weil-etale-h1-boundary-unit-spectral-sequence]] commute with Weil–étale corestriction in the middle, the map induced by geometric divisor pushforward `f₀,*` on the left, and `∑_(j=0)^(d−1) φ^j∘N_(f₀)` on geometric Picard invariants on the right. The left map is from `P_T'/(φ^d−1)` to `P_T/(φ−1)`; the right map is from `Pic(Ū')^(φ^d)` to `Pic(Ū)^φ`. The maps are independent of the chosen embedding after these invariant or coinvariant identifications. This is a finite-level statement and does not assert derived projection-formula or infinite-tower descent.

## Facts & Assumptions

**Given:** AC, DC, k'/k, the curves, nonempty boundaries, the finite map f and the chosen embedding as in the Statement.

[F1] The boundary-unit exact sequence is the low-degree exact sequence of the Weil–étale cyclic spectral sequence, with unit coinvariants identified with principal boundary-divisor coinvariants. [[lem-weil-etale-h1-boundary-unit-spectral-sequence]]

[F2] For finite étale maps, divisor norm and Weil–étale corestriction are compatible on the injected class groups, including changing finite constants. [[lem-function-field-class-group-injects-into-weil-etale-cohomology]]

[F3] The Weil–étale site has the stated arithmetic-Frobenius spectral sequence. [[def-weil-etale-class-group-and-cohomology-in-function-field-tower]]

[F4] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** finite cyclic induction and naturality of the norm.

1.1 After extension from k to k̄, the source U' has d components, indexed by the embeddings of k' in k̄ and cyclically permuted by φ. Choose the component from the given embedding and call its units or Picard group M; its stabilizer is `W'=⟨φ^d⟩`. Thus the corresponding W=⟨φ⟩ module is the direct sum of d translates of M, with cyclic shift and the φ^d-action on the wrap. Restricting a Weil sheaf to the chosen component and rebuilding its d translates gives inverse equivalences, because covers and morphisms are componentwise and the final translate is glued by φ^d. Thus its geometric cohomology is the stated finite induced module. [F2, F3, F4, given, construct, algebra]

2.1 For an arbitrary W'-module M, the invariants of this induced W-module identify with `M^(φ^d)` by taking the diagonal tuple. Its coinvariants identify with `M/(φ^d−1)M`: the relations for φ−1 move every component to the first, while the last-to-first relation is exactly φ^d−1. These identifications follow directly from the two-term group-ring resolution and are natural for module maps compatible with φ^d. No infinite choice or completion is involved. [F1, F3, F4, step 1.1, given, construct, algebra]

3.1 Over Ū the sheaf norm is the product of the norms from the d geometric components. On H⁰ of the induced W-module an invariant class is the diagonal tuple, so its image under this product is `∑_(j=0)^(d−1)φ^j N_(f₀)` in additive Picard notation. On H¹ of W, every class has a representative in the chosen component by step 2.1, so the induced map on coinvariants is just the chosen-component norm followed by quotienting by φ−1. The divisor-of-norm formula in [F2] identifies that map on units with `f₀,*` on P_T'. Finite étale corestriction is induced by the sheaf norm: on a common étale splitting cover both are multiplication over the finite fibres, and these maps descend by permutation invariance. The naturality of [F3]'s spectral sequence then gives the commutative short-exact-sequence diagram of [F1]. Choosing a different component composes the chosen-component map with a power of φ, which acts trivially on target coinvariants, and cyclically permutes the sum on target invariants. Thus both maps are independent of the embedding. [F1, F2, F3, F4, step 1.1, step 2.1, given, construct, algebra] ∎

## Source and authoring record

The result supplies the finite-level transition of the boundary-unit exact sequence with changing full constants. It does not establish the BDL duality complex, derived projection formula, finite-level square presentation or inverse-limit descent.
