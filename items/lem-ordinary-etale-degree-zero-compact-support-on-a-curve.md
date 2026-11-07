---
id: lem-ordinary-etale-degree-zero-compact-support-on-a-curve
kind: lemma
title: "Degree-zero compact support for an ordinary étale sheaf on a curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-nagata-compactification-for-separated-finite-type-morphisms
  - def-proper-morphism
  - def-open-immersion-schemes
  - lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I §18"
      url: "https://jmilne.org/math/CourseNotes/LEC.pdf"
---

## Statement

Let k be an algebraically closed field, X a separated finite-type k-curve, and G an ordinary étale locally constant sheaf of abelian groups on X. For any proper compactification j:X→Xbar, extension by zero j_!G has global sections naturally identified with the sections of G whose nonzero geometric germs have closure in Xbar contained in X. These sections form a subgroup of Γ(X,G) independent of the proper compactification. If right-derived global sections are constructed in a category containing j_!G, the zeroth cohomology of RΓ(Xbar,j_!G) is this subgroup. This is a degree-zero ordinary-sheaf statement; it does not assert construction of a general rational adic derived category or its proper pushforward.

## Facts & Assumptions

**Given:** k, X and G as stated, together with the proper compactifications under comparison.

[F1] A separated finite-type morphism between Noetherian schemes admits a proper compactification. [[thm-nagata-compactification-for-separated-finite-type-morphisms]]

[F2] A proper morphism is universally closed, and its base change is proper. [[def-proper-morphism]]

[F3] Open immersions identify the source with an open subscheme of the target. [[def-open-immersion-schemes]]

[F4] Every étale morphism is universally open without a choice premise. [[lem-etale-morphisms-are-locally-standard-and-universally-open-in-zf]]

## Proof

1.1 Fix j. For an étale test object V→Xbar put V_X=V×Xbar X. Take sections of G on V_X whose nonzero-germ closure in V is contained in V_X. This is a subgroup. The condition is local for an étale cover: étale maps are open by [F4], and for an open map inverse image commutes with closure, so supports pull back; an open surjection also detects containment after pullback. The sheaf gluing axiom for G therefore glues these sections uniquely and gives a sheaf j_!G on Xbar. Its restriction to X is G. Its stalk at a geometric point over Xbar−X is zero, since every section has an open neighbourhood of that point disjoint from its closed support. This is extension by zero. By construction Γ(Xbar,j_!G) is exactly the displayed subgroup. [F3, F4, given, algebra]

2.1 Let j₁,j₂ be two proper compactifications and suppose the support closure C₁ of s∈Γ(X,G) in Xbar₁ lies in X. It equals the closure C in X and is closed in both X and Xbar₁. Give C its reduced closed-subscheme structure. The graph of C→X→Xbar₂ is closed in C×k Xbar₂ because Xbar₂ is separated. This product is closed in Xbar₁×k Xbar₂. The latter projects universally closed to Xbar₂ by properness of Xbar₁. Hence the image of the graph, which is the image of C in Xbar₂, is closed. It contains all nonzero germs of s and lies in X, so the support closure in Xbar₂ also lies in X. Interchange the compactifications for the converse. [F2, F3, step 1.1, algebra]

3.1 If the right-derived global-sections functor on the ordinary sheaf category is constructed, its degree-zero cohomology agrees with the original left-exact global-sections functor. Applying this to j_!G and using steps 1.1–2.1 gives the claimed identification. This step uses only the defining normalization of a right-derived functor and makes no assertion that the derived functor exists in the rational adic category. [step 1.1, step 2.1, algebra] ∎

## Scope

This staged carrier is restricted to ordinary étale sheaves and degree zero. It depends on the unqualified openness supplier [F4], whose scoped readiness is recorded. It does not close either general compact-support definition.
