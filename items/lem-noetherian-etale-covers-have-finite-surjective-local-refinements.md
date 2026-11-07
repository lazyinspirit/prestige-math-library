---
id: lem-noetherian-etale-covers-have-finite-surjective-local-refinements
kind: lemma
title: Finite-surjective refinements of Noetherian etale covers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-axiom-of-choice
- def-quasi-coherent-module-scheme
- def-coherent-module-scheme
- cor-localisation-commutes-with-kernels-images-and-cokernels
- lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite
- thm-lying-over
- thm-etale-locally-standard-etale
- thm-existence-of-algebraic-closures
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 09Z0
    url: https://stacks.math.columbia.edu/tag/09Z0
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Every etale covering of a Noetherian scheme admits a finite surjective scheme over it which Zariski locally maps into that covering. Integral algebra closures are intermediate limits and are not assumed finite.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F2] Quasi-coherent sheaves on affines are modules and localizations, coherent sheaves have finite relation kernels, and localization is exact. [[def-quasi-coherent-module-scheme]] [[def-coherent-module-scheme]] [[cor-localisation-commutes-with-kernels-images-and-cokernels]]

[F5] A finite family of integral elements generates a module-finite algebra. [[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]

[F6] Integral ring maps satisfy lying-over. [[thm-lying-over]]

[F3] The following existing interface is used at its literal public scope: [[thm-etale-locally-standard-etale]].

[F4] The following existing interface is used at its literal public scope: [[thm-existence-of-algebraic-closures]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 On each of the finitely many reduced irreducible components of a Noetherian scheme `T`, fix an algebraic closure of its function field, using AC. Normalize the component in that closure. The integral closure algebras glue by localization of integral equations, giving an integral surjective scheme `T^+ -> T` after taking the finite disjoint union of these normalizations. Surjectivity follows from integral lying-over [F6] at the displayed AC scope. No assertion that these normalizations are finite is made. Their affine coordinate domains are integrally closed with algebraically closed fraction field. [F1, F2, F3, F4, F6, given, construct, algebra]

2.1 An etale covering pulls back to a Zariski-locally split covering on `T^+`. Indeed work in one affine integrally closed domain `R` with algebraically closed fraction field. At a point use the AC-qualified standard-etale chart: it is given by a monic polynomial `f` with derivative inverted, and a further localization. Every root of `f` lies in `R`, since it is integral over the integrally closed ring and belongs to its fraction field. After localizing at the point the same assertion holds. The residue field there is algebraically closed: lift a monic polynomial over it to the local ring, split in the fraction field and reduce its integral roots. Hence the specified etale point has residue degree one. One of the finitely many roots reduces to its specified root, and the derivative and localization denominator are units on a principal neighbourhood. Evaluation at that root supplies the required section on this Zariski neighbourhood. This is an actual root construction, not the assertion that an arbitrary cover has a global section. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 The integral scheme `T^+` is quasi-compact over the quasi-compact `T`. Retain finitely many principal affine neighbourhoods of these sections. Its integral quasi-coherent algebra is the filtered union of finite coherent subalgebras over `T`. Here is the finite Noetherian argument. On an affine chart, a coherent submodule given on an open has finitely many generators on a finite principal cover. Express each generator as a fraction and multiply its numerator by sufficiently high powers of the principal element so that exact localization makes it lie in the given submodule on every overlap. The finitely many adjusted numerators generate a coherent module whose restriction is the original submodule: the powers are invertible on their own principal opens, and Noetherianity supplies finite relation kernels. Extend and glue in this way over a finite affine cover. Thus every finite family of local sections lies in a global coherent submodule, and all such submodules form a directed union. Applied to the integral algebra, the subalgebra generated by one such module and the unit is finite by [F5]; these finite subalgebras are directed and cover the algebra. Thus each finite set of affine functions, monic relations, and maps occurring in the finitely many section neighbourhoods occurs in one finite `T`-scheme `T_lambda`. The target etale objects are finitely presented, so their maps from these principal opens descend by their finitely many equations. The covering condition descends by a finite unit-ideal/power equation on a fixed finite affine cover; equivalently `T^+ -> T_lambda` is integral surjective by lying-over for the subalgebra inclusion, so principal opens from that stage covering `T^+` also cover `T_lambda`. Enlarging the finite stage preserves that assertion. The resulting finite surjective `T_lambda -> T` is Zariski locally mapped into the original etale covering. This proves exactly the global finite-surjective refinement required below. It does not identify this assertion with native144's different finite-flat family refinement. [F1, F2, F3, F4, F5, F6, step 2.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
