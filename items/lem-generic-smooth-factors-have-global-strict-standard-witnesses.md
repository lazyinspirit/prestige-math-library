---
id: lem-generic-smooth-factors-have-global-strict-standard-witnesses
kind: lemma
title: Global strict-standard witnesses from generic factors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- lem-smooth-localization-unit-factors-and-free-differential-retracts
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- thm-smooth-morphism-formally-smooth-finite-presentation
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07F4
    url: https://stacks.math.columbia.edu/tag/07F4
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let R be Noetherian, S⊂R multiplicative, A finitely presented over R and A→L an R-algebra map. If the localized map S⁻¹A→S⁻¹L has an actual finite smooth factor, a finite factor A→C→L exists with a strict-standard witness π coming from S and all original generator images preserved.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[lem-smooth-localization-unit-factors-and-free-differential-retracts]].

[F3] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F4] The following existing interface is used at its literal public scope: [[thm-jacobian-criterion-smooth-morphism]].

[F5] Smooth finite-presentation morphisms have the local square-zero lifting property. [[thm-smooth-morphism-formally-smooth-finite-presentation]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Let `D'` be the given smooth finitely presented `S^-1 R`-algebra. We first construct a standard-smooth retract extension of it. By [F2], the symmetric-conormal algebra of a finite presentation is a smooth finite-presentation extension with a retraction and globally free differentials of rank `d`. Write it as `C=R'[z_1,...,z_N]/K`, where `R'=S^-1 R`. The local square-zero lifting property [F5] gives a split conormal sequence, so `(K/K^2) direct_sum C^d=C^N`. Adjoin `d` variables with the equations setting them to zero; the algebra is unchanged and its conormal module becomes free. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Lift a basis of the free conormal module to finitely many relations. The full relation ideal modulo these generators equals its product with itself; determinant Nakayama supplies `s=1+h`, with `h` in the relation ideal, which kills the quotient. Inverting `s` leaves `C` unchanged; introduce a variable with equation `us-1` to record this localization in a finite presentation. Its relation classes remain a free basis of the conormal module. Choose polynomial rows `N_i` lifting a basis of the free differential quotient so that the square matrix formed by the Jacobian rows and `N_i` is invertible over `C`. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Add variables `T` with `N(z)T=0` and write `W=z+T`. In the coordinates `(W,T)` the square Jacobian block in the `T` variables has determinant `Delta` whose value at `T=0` is a unit. Localize at `Delta`; the resulting algebra is standard smooth by [F4] and retracts to `C` by `T=0`. Composing retractions gives a standard-smooth algebra mapping back to `D'`, and its map to `S^-1 L` preserves the given factorization. Replace `D'` by this algebra. [F1, F2, F3, F4, step 2.1, construct, algebra]

4.1 We can keep the original generators of `A` as the first variables of its standard presentation. Write `A=R[x_1,...,x_n]/(g_1,...,g_t)`. In a standard presentation of `D'`, express the images of these generators as polynomials in its presentation variables; an inverted element is made an additional variable with equation `u h-1`. Adjoin the `x_i` and the `n` graph equations `x_i-H_i(y)=0`. Their derivative block in the `x` columns is the identity, so the old invertible Jacobian minor extends to one using those columns. We therefore obtain `D'=S^-1 R[x_1,...,x_(n+m)]/(f_1,...,f_c)`, where `c>=n`, a selected `c x c` Jacobian minor `Delta` is a unit, and the original `A`-map uses its first `n` variables. [F1, F2, F3, F4, step 3.1, given, construct, algebra]

5.1 The first `n` variable images already belong to `L`. For each other variable clear its one target denominator by rescaling it with an element of `S`. These are invertible changes of variables over `S^-1 R`. Multiply the finitely many equations by elements of `S` to make their coefficients lie in `R`; their chosen minor changes by a unit from `S`, so remains invertible. After these finite operations every target image is some `lambda_i/1` with `lambda_i in L`, and every `f_j` is in the polynomial ring `P=R[x_1,...,x_(n+m)]`. [F1, F2, F3, F4, step 4.1, given, construct, algebra]

6.1 The inverse of `Delta` in `D'` gives a finite polynomial identity. Clearing its base denominators yields `s_0=a_0 Delta+sum_(j=1)^c a_j f_j`, with `s_0 in S`, `a_j in P`. Since the `g_l` vanish in `D'`, clear their ideal-membership denominators to choose `s_l in S` with `s_l g_l in (f_1,...,f_c)`. Since the `f_j(lambda)` vanish in `S^-1 L`, choose `s'_j in S` with `s'_j f_j(lambda)=0` in `L`. Define `C=P/(s'_1 f_1,...,s'_c f_c,g_1,...,g_t)`. It receives `A` and maps to `L` by the original images of the first `n` variables and the chosen `lambda_i` for the rest. [F1, F2, F3, F4, step 5.1, given, construct, algebra]

7.1 Put `pi=s_0 (product_l s_l)(product_j s'_j) in S`. In the displayed presentation of `C`, take the first `c` relations to be `F_j=s'_j f_j`. Their selected minor is `Delta_F=(product_j s'_j)Delta`. Multiplying the identity in step 6.1 by the remaining products shows `pi=(product_l s_l)a_0 Delta_F` in `C`. Also `pi g_l in (F_1,...,F_c)`, by multiplying `s_l g_l in (f_j)` by the other factors, which contain every `s'_j`. These are the actual elementary-standard witnesses, stronger than the strictly-standard relations allowing squares. Hence this construction factors `A -> C -> L` and produces a strictly-standard element `pi` coming from `S`. No localization is retained in the map to `L`, and no original generator image was changed. [F1, F2, F3, F4, step 6.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
