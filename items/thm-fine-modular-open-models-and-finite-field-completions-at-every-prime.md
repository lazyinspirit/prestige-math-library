---
id: thm-fine-modular-open-models-and-finite-field-completions-at-every-prime
kind: theorem
title: Fine modular open models and finite-field completions at every prime
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-full-level-four-modular-curve-over-integers-with-two-inverted
- thm-full-level-three-modular-curve-over-integers-with-three-inverted
- lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions
- lem-free-mu3-actions-on-affines-have-finite-etale-quotients
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, modular curves; the explicit local models are constructed in the cited suppliers.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is assumed by the model and normalization suppliers.
---

## Statement

Assume AC. For every prime p, choose N=3 if p=2 and N=4 otherwise. There is a smooth relative curve Y(N) over `Z[1/N]` with a universal full-level-N elliptic curve, representing the full-level-N functor on locally Noetherian bases. Its nonempty geometric fibre over F_p is a smooth curve and its F_p-fibre admits a smooth projective compactification with finite complement. The compactification is asserted only over F_p; this statement does not assert a proper integral compactification or a simultaneous model at every level.

## Facts & Assumptions

**Given:** AC and the prime p of the Statement.

[F1] The explicit full-level-four open model is smooth over `Z[1/2]`, represents the full-level-four functor on locally Noetherian bases, and is finite étale over an open affine line with coordinate b. [[thm-full-level-four-modular-curve-over-integers-with-two-inverted]]

[F2] The explicit full-level-three open model is smooth over `Z[1/3]`, represents the full-level-three functor on locally Noetherian bases, and has nonempty geometric fibres, including at p=2. [[thm-full-level-three-modular-curve-over-integers-with-three-inverted]]

[F3] A smooth curve finite over an open affine-line subset over a finite field has a smooth projective completion with finite complement. [[lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions]]

[F4] A free affine μ₃ action has the invariant affine quotient and a finite étale torsor. [[lem-free-mu3-actions-on-affines-have-finite-etale-quotients]]

[F5] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** use the explicit level-four and level-three constructions, then normalize the projective line.

1.1 For p odd, N=4 and p is not inverted in `Z[1/2]=Z[1/4]`. By [F1], the fibre Y(4)_Fp is a smooth curve finite over the nonempty open `U=Spec F_p[b,b^(-1),(1+16b)^(-1)]` of A¹. The model has nonempty geometric fibres. Apply [F3] to Y(4)_Fp→U to obtain a smooth projective F_p-curve containing it with finite complement. [F1, F3, F5, given, construct, algebra]

1.2 For p=2, N=3. In the explicit construction of [F2], let `B=Z[1/3,t,(t³−27)^(-1)]` and let V be the finite étale frame locus over Spec B. The μ₃ action sends `t↦ut`, so `j=t³` is invariant. By [F4], the quotient has coordinate ring A=B_V^(μ₃). Put `C=Z[1/3,j,(j−27)^(-1)]`; B is finite free over C with basis 1,t,t², and B_V is finite over B. Thus B_V is finite over the Noetherian ring C; its C-submodule A is finite over C. By the construction and representing property in [F2], Spec A is the model Y(3). Consequently Y(3)_F₂ is finite over the open affine line `Spec F₂[j,(j−27)^(-1)]`. It is smooth and nonempty by [F2], so [F3] gives its smooth projective completion with finite complement. [F2, F3, F4, F5, given, construct, algebra]

2.1 In either case the asserted elliptic family and full-level structure are the universal families of [F1] or [F2]. The choice of N ensures p∤N, and the compactification constructed in steps 1.1–1.2 concerns only the finite-field fibre. No mixed-characteristic compactification or all-level statement is claimed. [F1, F2, F3, F5, step 1.1, step 1.2, given, algebra] ∎

## Source and authoring record

This construction supplies the finite-characteristic fine open models and their separate fibrewise smooth projective completions. It does not supply modular cohomology comparison, Weil II, or an integral compactification.
