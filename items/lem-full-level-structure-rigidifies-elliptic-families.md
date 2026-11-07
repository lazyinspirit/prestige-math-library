---
id: lem-full-level-structure-rigidifies-elliptic-families
kind: lemma
title: Full level structure rigidifies elliptic families
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-full-level-structure-rigidifies-geometric-elliptic-curves
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-global-functions-proper-integral-variety
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Deformation theory
    url: https://stacks.math.columbia.edu/tag/0D13
    locator: Square-zero deformation and tangent sheaves; the rigidity calculation is given below.
dependency_level: 1
proof_strategy: direct
axiom_use: AC supplies DC for the perfect-complex input.
---

## Statement

Assume the Axiom of Choice. Let S be locally Noetherian, E→S an elliptic curve, and N≥3 invertible on S. Any S-group-scheme automorphism of E that acts as the identity on E[N] is the identity. In particular, a full level-N structure on E has no nontrivial automorphism, including over nonreduced bases. This does not assert existence of a moduli quotient.

## Facts & Assumptions

**Given:** AC, locally Noetherian S, elliptic curve E/S, N≥3 invertible on S, and an S-group automorphism u fixing E[N].

[F1] A geometric elliptic curve has no nonidentity automorphism fixing its N-torsion for N≥3 invertible. [[lem-full-level-structure-rigidifies-geometric-elliptic-curves]]

[F2] Proper flat finitely presented cohomology is computed universally by a nonnegative complex of finite projective modules. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F3] Global functions on a proper geometrically integral curve over an algebraically closed field are constants. [[thm-global-functions-proper-integral-variety]]

[F4] AC implies the DC needed by [F2]. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** geometric rigidity and square-zero lifting.

1.1 Work Zariski locally on S. By [F1], u is the identity on every geometric fibre. If S is reduced then E is reduced because E/S is smooth. The equalizer of u and the identity is a closed subscheme of E since E/S is separated, and it contains every point; on the reduced scheme E its ideal is zero. Thus u is the identity over reduced S. [F1, F4, given, algebra]

1.2 Let S=Spec A with A Noetherian. By [F2] applied to O_E, choose a nonnegative finite-projective complex K computing H⁰ after arbitrary base change. Locally K⁰ is free. The global section 1 gives a cocycle in K⁰ whose image in each geometric fibre is nonzero by [F3], so it spans a free direct summand. The fibrewise H⁰ has dimension one by [F3], hence the differential from the complementary summand is injective on every residue field. After localizing, a maximal minor is a unit, so that differential is split injective. Therefore for every A-module M, `H⁰(K⊗_A M)=M`; the identification sends m to the constant section m. To obtain the corresponding sheaf statement from [F2], apply its algebra base change to the square-zero algebra `A⊕M`. As O_E-modules the resulting structure sheaf is `O_E⊕π^*M`, so its H⁰ and the complex both split into their A and M summands. Hence `Γ(E,π^*M)=M`. [F2, F3, F4, given, construct, algebra]

2.1 Suppose S₀ is a closed subscheme of S defined by a square-zero quasi-coherent ideal J and that u restricts to the identity on E₀. Smoothness of E/S identifies the difference of the two S-morphisms u and identity with a derivation from `Ω¹_(E₀/S₀)` to `π₀^*J`; this is a section of `π₀^*(Lie(E₀/S₀)⊗J)` because translations trivialize the relative tangent bundle of a smooth group scheme. By step 1.2, applied locally on S₀, this section is pulled back from the base. Both group morphisms preserve the identity section, so the section vanishes there and is zero. Hence u is the identity on the square-zero thickening. [F2, F3, F4, step 1.2, given, algebra]

3.1 The nilradical of the Noetherian ring A is nilpotent. Starting with the reduced base, step 1.1 gives identity there. Apply step 2.1 successively to the finite filtration by powers of the nilradical; each successive kernel is square-zero. It follows that u is the identity over A. The conclusion is local on S and therefore holds globally. Preserving a full level structure implies fixing E[N], proving the last assertion. [F1, F4, step 1.1, step 2.1, given, induction, algebra] ∎

## Source and authoring record

The square-zero calculation proves rigidity for an already given elliptic family. Representability, compactification, and good-reduction models remain separate obligations.
