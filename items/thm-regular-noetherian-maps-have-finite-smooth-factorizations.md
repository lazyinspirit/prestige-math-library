---
id: thm-regular-noetherian-maps-have-finite-smooth-factorizations
kind: theorem
title: Finite smooth factors for regular Noetherian maps
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-geometric-regularity-for-noetherian-algebras-and-maps
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- lem-nilpotent-flat-lifting-of-finite-smooth-factorizations
- lem-generic-smooth-factors-have-global-strict-standard-witnesses
- lem-local-smoothing-resolutions-preserve-the-old-smooth-locus
- lem-geometrically-regular-field-algebras-have-finite-smooth-factors
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-reduced-noetherian-total-fractions-and-normal-components
- lem-strict-standard-fourth-order-smoothing
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07GC
    url: https://stacks.math.columbia.edu/tag/07GC
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 6
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Every regular map R→L in the Noetherian sense has finite smooth factorization: every finitely presented R-algebra mapped to L factors through a smooth finitely presented R-algebra, with its actual target map unchanged.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[lem-nilpotent-flat-lifting-of-finite-smooth-factorizations]].

[F3] The following existing interface is used at its literal public scope: [[lem-generic-smooth-factors-have-global-strict-standard-witnesses]].

[F4] The following existing interface is used at its literal public scope: [[lem-local-smoothing-resolutions-preserve-the-old-smooth-locus]].

[F5] The following existing interface is used at its literal public scope: [[lem-geometrically-regular-field-algebras-have-finite-smooth-factors]].

[F6] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F7] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F8] The following existing interface is used at its literal public scope: [[lem-reduced-noetherian-total-fractions-and-normal-components]].

[F9] The strict-standard fourth-order construction and eighth-order bridge hold at the stated AC scope. [[lem-strict-standard-fourth-order-smoothing]]

[F10] The general Noetherian geometric-regularity and regular-map convention tests finite residue-field extensions. [[def-geometric-regularity-for-noetherian-algebras-and-maps]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Let `R -> L` be regular and both rings Noetherian. Regular means flat with geometrically regular fibres. Quotienting by an ideal gives another regular map `R/J -> L/JL`: flatness is base change and the fibre at a prime over `J` is exactly the same original fibre. Let `T` be the set of ideals `J` for which the finite smooth-factor property fails for this quotient map. If nonempty, choose a maximal member using Noetherianity and the explicitly available AC/DC ascending-chain principle. Replace `R,L` by this quotient. Thus the property holds after every nonzero ideal quotient of `R` and fails for `R -> L`. [F1, F2, F3, F4, F5, F6, F7, F8, F10, given, construct, algebra]

2.1 The new `R` is reduced. Otherwise its nonzero nilradical is nilpotent, since `R` is Noetherian; the property holds after that nonzero quotient, and the already proved nilpotent smooth-factor lifting theorem (flatness retained) gives it before quotienting, a contradiction. The zero ring is not a bad case. Let `S` be the nonzerodivisors of this nonzero reduced `R`. Its total fraction ring is a finite product of fields. This exact AC-qualified algebra interface is already published as `lem-reduced-noetherian-total-fractions-and-normal-components`; only its first total-fraction conclusion is used, not its stronger normality equivalences. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, given, construct, algebra]

3.1 Localizing the regular map gives a regular map `S^-1 R -> S^-1 L`; decomposing the base finite product gives geometrically regular Noetherian algebras over its fields. For any finitely presented `A -> L`, [F5] supplies smooth factors on these finitely many field components. Their finite product is a smooth finitely presented factor of `S^-1 A -> S^-1 L`. If a target component is zero, use the zero smooth algebra there. Apply [F3] to obtain `A -> C -> L` with a strictly-standard `pi in S`. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1, given, construct, algebra]

4.1 If `pi` is a unit of `R`, then `C=C[1/pi]` is already smooth by its strictly-standard witnesses, and we are done. Otherwise `(pi^8)` is a nonzero proper ideal: `pi` is a nonzerodivisor and `R` is nonzero. By maximal bad-ideal choice, the finite map `C/pi^8 C -> L/pi^8 L` factors through a smooth finitely presented algebra over `R/pi^8`. Multiplication by `pi` is injective on `R` and, since `R -> L` is flat, on `L`. Thus both stable-annihilator hypotheses needed by the proved eighth-order/fourth-order lifting bridge hold. The bridge [F9] constructs a genuine smooth finitely presented `R`-algebra factoring `C -> L`, hence factoring the original `A -> L`. [F1, F2, F3, F4, F5, F6, F7, F8, F9, step 3.1, given, construct, algebra]

5.1 We have factored every finitely presented map despite its assumed failure, a contradiction. Therefore no bad ideal exists, proving the stated general regular-map finite-factor property. [F1, F2, F3, F4, F5, F6, F7, F8, step 4.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
