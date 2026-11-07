---
id: lem-elliptic-relative-r1-lisse-and-pure
kind: lemma
title: Relative elliptic H1 is lisse and has pure finite fibres
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-lisse-zl-etale-sheaf
- def-lisse-l-adic-sheaf-on-a-scheme
- lem-proper-torsion-base-change-under-choice
- lem-proper-torsion-constructibility-under-choice
- lem-proper-henselian-restriction-for-sections-and-finite-etale-covers
- lem-proper-flat-fp-cohomology-perfect-complex
- lem-elliptic-geometric-fibre-h1-finite-system
- lem-elliptic-fibre-etale-h1-frobenius-weights
- lem-finite-constructible-bijective-specialization-is-lisse
- thm-etale-locally-standard-etale
- thm-equivalent-elementary-forms-of-hensels-property
- thm-global-functions-proper-integral-variety
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Proper base change
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Section 59.91 source scope; the proof below applies separately recorded local AC-scoped suppliers.
dependency_level: 7
proof_strategy: direct
axiom_use: AC is explicit and supplies DC for the cohomological perfect-complex and Picard inputs.
---

## Statement

Assume the Axiom of Choice. Let S be locally Noetherian, let π:E→S be an elliptic curve (a smooth proper group scheme with geometrically connected genus-one fibres and identity section), and let ℓ be invertible on S. The compatible system `R¹π_*(Z/ℓ^n)` is finite locally constant free of rank two at every level, with the standard reduction isomorphisms. Its rationalization is therefore a rank-two lisse Qℓ-sheaf. At every closed point x with finite residue field F_q, every geometric-Frobenius eigenvalue on its rational geometric stalk has complex absolute value √q under every complex embedding of its algebraic splitting field. The system is the actual finite-level étale direct-image system; no derived rational-adic Rπ_! construction is asserted.

## Facts & Assumptions

**Given:** AC, the locally Noetherian base, elliptic curve and invertible prime of the Statement.

[F1] Proper torsion base change and finite constructibility hold at explicit AC scope. [[lem-proper-torsion-base-change-under-choice]] [[lem-proper-torsion-constructibility-under-choice]]

[F2] Proper schemes over henselian local rings satisfy finite-constant H¹ restriction and finite étale equivalence under AC. [[lem-proper-henselian-restriction-for-sections-and-finite-etale-covers]]

[F3] Proper finitely presented flat coherent cohomology is computed by a nonnegative finite-projective complex compatible with all base changes. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F4] On an elliptic curve over an algebraically closed field of characteristic different from ℓ, finite-level étale H¹ is free rank two with compatible reductions. [[lem-elliptic-geometric-fibre-h1-finite-system]]

[F5] On an elliptic curve over F_q, geometric Frobenius on the rational finite-level H¹ system has weight one. [[lem-elliptic-fibre-etale-h1-frobenius-weights]]

[F6] A finite constructible sheaf whose geometric specialization maps are bijective is locally constant under AC. [[lem-finite-constructible-bijective-specialization-is-lisse]]

[F7] A rational lisse adic sheaf is represented by a compatible finite locally constant free Zℓ-system. [[def-lisse-zl-etale-sheaf]] [[def-lisse-l-adic-sheaf-on-a-scheme]]

[F8] Standard étale charts and henselian simple-root lifting give a section of every pointed étale neighbourhood of a strictly henselian local ring. [[thm-etale-locally-standard-etale]] [[thm-equivalent-elementary-forms-of-hensels-property]]

[F9] Global functions on a proper integral scheme over an algebraically closed field equal that field. [[thm-global-functions-proper-integral-variety]]

[F10] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** proper base change, torsor specialization and finite constructibility.

1.1 Work on an affine Noetherian open of S and put Λ_n=Z/ℓ^n. The constant sheaf Λ_n is finite constructible. By [F1], `G_n=R¹π_*Λ_n` is finite constructible and its geometric stalk at x is canonically `H¹(E_x,Λ_n)`; the canonical exchange also identifies the geometric specialization maps with restriction maps on fibres. By [F4] every such stalk is a free Λ_n-module of rank two. [F1, F4, F10, given, construct, algebra]

2.1 Fix a geometric specialization t→s. Let A be the strict henselization of S at s and write E_A for the base change. Its section functor is the closed geometric stalk and is exact: every pointed étale neighbourhood has a section by [F8]. Leray and [F1] identify the closed stalk of G_n with `H¹(E_A,Λ_n)`, and [F2] identifies it with `H¹(E_s,Λ_n)`. A class is represented by a finite constant Λ_n-torsor T→E_A: its local trivializations are finite disjoint unions and finite faithfully-flat descent glues the associated finite étale algebra. Suppose its specialization to t is zero. [F1, F2, F8, F10, step 1.1, given, construct, algebra]

3.1 The finite étale algebra, its action maps and the finitely many torsor equations descend through the filtered strict-henselian neighbourhood system to some Noetherian étale neighbourhood of s, by finite projective idempotents, multiplication, unit, perfect-trace inverses and finitely many gluing equations. Let t_i and s_i be the images of the chosen specialization, and restrict to the reduced closure D of t_i, localized at s_i. D is an integral Noetherian local base with generic point t_i and closed point s_i. The descended torsor remains finite étale after base change, and its geometric generic fibre is trivial because it is the specified t-fibre after field extension. [F1, F2, F8, F10, step 2.1, given, construct, algebra]

4.1 The torsor T_D is smooth proper and flat over D. By [F3], `RΓ(T_D,O)` is computed after every base change by a nonnegative finite-projective complex. Near the closed point its degree-zero term is free; the dimension of the kernel of its first differential can only increase under specialization, because matrix rank can only decrease. The geometric generic fibre is m disjoint elliptic curves, where m=|Λ_n|, so its H⁰(O) has dimension m. On the geometric closed fibre the finite étale cover of a connected elliptic curve has at most m connected components; each is a smooth proper integral curve and has one-dimensional global functions by [F9]. Thus the closed H⁰ dimension is at most m and hence exactly m. Every component has degree one over the connected elliptic curve, so T_s is the disjoint union of m copies. In particular the closed-fibre torsor is trivial. [F2, F3, F9, F10, step 3.1, given, construct, algebra]

5.1 Thus every geometric specialization map on G_n is injective. Its source and target are finite sets of the same cardinality by [F4], so it is bijective. By the constructible criterion [F6], G_n is finite locally constant; its geometric stalks are free of rank two, so it is locally the constant free Λ_n-module of rank two. [F1, F4, F6, F10, step 4.1, given, construct, algebra]

6.1 The natural map `G_(n+1)/ℓ^n→G_n` is an isomorphism on every geometric stalk by [F1] and [F4], hence is an isomorphism of sheaves. Thus the G_n form the lisse finite free Zℓ-system of [F7], and its rationalization is lisse rank two. For a finite residue field F_q, [F1] identifies its actual rational geometric stalk and Frobenius action with the finite-level H¹ system of that elliptic fibre; [F5] gives absolute value √q for every geometric-Frobenius eigenvalue. This proves the Statement without introducing an independent rational-adic derived direct-image model. [F1, F4, F5, F7, F10, step 5.1, given, construct, algebra] ∎

## Source and authoring record

This local AC-scoped construction applies the recorded finite-level proper exchange, constructibility and elliptic-fibre suppliers. The original unqualified proper-base-change item remains separate. This AC-scoped carrier is installed as a draft; its owner readiness is recorded separately.
