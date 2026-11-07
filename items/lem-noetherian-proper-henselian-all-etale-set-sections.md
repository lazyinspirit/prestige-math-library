---
id: lem-noetherian-proper-henselian-all-etale-set-sections
kind: lemma
title: All etale SET sections over Noetherian henselian bases
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-proper-noetherian-henselian-topological-sections
- lem-noetherian-etale-covers-have-finite-surjective-local-refinements
- lem-finite-surjections-have-effective-etale-set-section-descent
- def-axiom-of-choice
- thm-etale-morphisms-open-and-quasi-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 095S
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 5
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For every proper X over Noetherian henselian local A and every étale set sheaf F, the restriction Γ(X,F)→Γ(X_0,F|X_0) is bijective, where X_0 is the closed fibre and F|X_0 is its étale inverse image.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-proper-noetherian-henselian-topological-sections]].

[F2] The following existing interface is used at its literal public scope: [[lem-noetherian-etale-covers-have-finite-surjective-local-refinements]].

[F3] The following existing interface is used at its literal public scope: [[lem-finite-surjections-have-effective-etale-set-section-descent]].

[F4] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F5] Étale morphisms are open under AC. [[thm-etale-morphisms-open-and-quasi-finite]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Put `Z=X_0`. By [F1], every topological sheaf on `X` has its sections preserved on `Z`; the same is true on every finite `X`-scheme, which is proper over `A`. First restriction of etale global sections is injective, also on all these finite schemes. Indeed the equality locus of two global sections of an etale set sheaf is a Zariski open subset: the étale neighbourhoods witnessing local equality have open images by [F5]. If their restrictions agree on `Z`, that open contains `Z`. Its closed complement is proper and misses the closed fibre, so is empty. Thus the sections agree globally. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 There is an injective map of sheaves on `Z_Zar` `i_Zar^-1(F|X_Zar) -> (i_small^-1 F)|Z_Zar`. For the stalk proof, a neighbourhood appearing on the right is an etale neighbourhood of a point of `X` whose restriction has a section over a Zariski neighbourhood in `Z`. Its image in `X` is an open neighbourhood, and it covers that image. Equality of two ambient sections after pulling to it implies equality on the open image by the etale sheaf axiom. Hence two ambient Zariski germs that agree on the right already agree on the left. This is precisely injectivity of the displayed map. It is valid after every finite base change to `X` too. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 Let `t` be a section on `Z` of `i_small^-1 F`. Its inverse-image/sheafification presentation supplies local ambient representatives: etale `U_j -> X`, sections `s_j in F(U_j)`, and an etale cover `V_j -> Z` mapping to `U_j x_X Z` on which the pullbacks agree with `t`. Shrink `U_j` to the open whose intersection with its closed fibre is the image of `V_j`; then `V_j -> U_j x_X Z` is surjective and the sheaf axiom gives equality with `t` on that entire closed-fibre piece. Extract a finite family covering `Z`. The open union of their images contains `Z`, so proper closed-fibre detection makes it all of `X`. [F1, F2, F3, F4, step 2.1, given, construct, algebra]

4.1 Apply [F2] to this étale covering. Obtain a finite surjective `f:X' -> X`, with a Zariski cover `W_a` of `X'` and maps `W_a -> U_j`. Pull the sections `s_j` back to `W_a`. Write `F'=f^-1 F`, `Z'=X' x_X Z`. The resulting local sections restrict to the pullback `t'` on `Z'`. By injectivity in step 2.1 their restrictions define a section of the subsheaf `(i'_Zar)^-1(F'|X'_Zar)` and agree on all overlaps as sections of that subsheaf. Topological H0 on the proper `X'` lifts this section uniquely to `s' in Gamma(X',F')`. One cannot simply glue the original `W_a`-sections using properness of their overlaps, since those opens are not proper; the use of topological H0 is the required bridge. [F1, F2, F3, F4, step 3.1, given, construct, algebra]

5.1 The two pullbacks of `s'` to `X' x_X X'` agree on its closed fibre, since both restrict to the original `t`. This fibre product is finite over `X` and proper over `A`, so injection in step 1.1 makes the pullbacks equal globally. Finite-surjection set descent [F3] now supplies a section `s in Gamma(X,F)` whose pullback is `s'`. Its restriction is `t`, since this holds after the finite-surjective pullback to `Z'`; the same SET descent makes that pullback injective on sections. Together with step 1.1 this proves the theorem. [F1, F2, F3, F4, step 4.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. This research carrier has not been installed or recorded.
