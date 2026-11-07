---
id: lem-smooth-localization-unit-factors-and-free-differential-retracts
kind: lemma
title: Smooth unit factors and free-differential retracts
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- thm-smooth-morphism-formally-smooth-finite-presentation
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07EU
    url: https://stacks.math.columbia.edu/tag/07EU
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. A finite-presentation algebra whose specified smooth-localization witnesses map to the unit ideal has an everywhere-smooth finite factor. For R Noetherian and A=R[x]/J, Sym_A(J/J²) is a finite-presentation retract extension whose differentials are free on every specified smooth localization.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F3] The following existing interface is used at its literal public scope: [[thm-jacobian-criterion-smooth-morphism]].

[F4] The following existing interface is used at its literal public scope: [[thm-smooth-morphism-formally-smooth-finite-presentation]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Let `R -> C -> L` be maps, with `C` finitely presented over `R`. Suppose finitely many elements `c_1,...,c_s` of `C` have **specified smooth-localization witnesses** for `C[1/c_i]/R`, and their images generate the unit ideal in `L`. Fix a finite identity `sum c_i lambda_i=1` in `L`. Define `D=C[z_1,...,z_s]/(sum c_i z_i-1)` and map `D -> L` by `z_i -> lambda_i`. This factors the original `C -> L` and is a finite-presentation algebra. [F1, F2, F3, F4, given, construct, algebra]

2.1 The opens `D(c_i)` cover `Spec D`, by its defining unit equation. On the `i`th open, `D[1/c_i] = C[1/c_i][z_j : j!=i]`, with inverse elimination formula `z_i=(1-sum_(j!=i)c_j z_j)/c_i`. Thus every one of these finitely many localizations is smooth over `R`: it is a polynomial algebra over the specified smooth localization. The local smooth charts together prove `D/R` smooth. This gives an actual factor whenever the specified witness ideal maps to the unit ideal in `L`; no claim that it can always be so enlarged is made. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 Let `R` be Noetherian and let `C=R[x_1,...,x_n]/J`, with `J` a finitely generated ideal. Put `P=J/J^2`, a finitely presented `C`-module, and define `D=Sym_C(P)`. It is finitely presented over `R`: give `P` one finite module presentation and impose its finitely many linear relations on polynomial generators. The degree-zero inclusion `C -> D` has the retraction killing all positive-degree elements. Hence every map `C -> L` extends to `D -> L` through this retraction, with no new choices. [F1, F2, F3, F4, step 2.1, given, construct, algebra]

4.1 Fix an element `c` for which `C_c/R` is smooth. In this presentation the conormal sequence is split exact `0 -> P_c -> C_c^n -> Omega_(C_c/R) -> 0`. Here is a verification valid for the actual given polynomial presentation. Apply the literal AC-qualified smooth square-zero local lifting property to `R[x]/J^2 -> C`, restricted to this smooth open. Locally there is an `R`-section `s` of that quotient. The differences `x_j-s(bar x_j)` define a derivation from the polynomial presentation into `J/J^2`; the square-zero Taylor formula shows that on a relation `f in J` it takes the value `f mod J^2`. Thus it is a local left inverse of the conormal map. This proves left injectivity on a cover. Smooth coordinate charts make `Omega_(C_c/R)` finite locally free; it is finite projective on this affine. The conormal surjection therefore splits as a module map. Its kernel `P_c` is finite projective and `P_c direct_sum Omega_(C_c/R)=C_c^n`. Only the local square-zero direction of the existing published `thm-smooth-morphism-formally-smooth-finite-presentation` is used; no global lift or arbitrary splitting is postulated. [F1, F2, F3, F4, step 3.1, given, construct, algebra]

5.1 The algebra `D_c=Sym_(C_c)(P_c)` is smooth over `C_c`: on a finite principal cover making this finite projective module free it is a polynomial algebra. Its relative differentials are `D_c tensor P_c`. The transitivity sequence is exact on the left in this situation and gives `0 -> D_c tensor Omega_(C_c/R) -> Omega_(D_c/R) -> D_c tensor P_c -> 0`. To check the left exactness without assuming it for arbitrary ring maps, use the same standard smooth chart for `C_c/R` and a local free frame for `P_c`: the total algebra is then polynomial over that etale chart, and its differential sequence is the direct sum of the chart coordinate differentials and the new polynomial-variable differentials. This verifies left injectivity on a cover. The right-hand module is projective, so the sequence splits. Consequently `Omega_(D_c/R) = D_c tensor[Omega_(C_c/R) direct_sum P_c] = D_c^n`. The isomorphism need not be canonical, but exists by this finite splitting argument. The retraction in step 3.1 is canonical and preserves the original map to `L`. Thus the construction genuinely replaces a finite algebra by a retract extension having free differentials on every specified smooth localization. It does not assume that the original conormal module is projective at nonsmooth points. [F1, F2, F3, F4, step 4.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
