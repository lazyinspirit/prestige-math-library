---
id: thm-locally-flat-slice-implies-fox-milnor-factorization
kind: theorem
title: "Locally flat sliceness implies Fox–Milnor factorization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-knot-seifert-pairing-and-matrix
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - lem-metabolic-seifert-form-implies-fox-milnor-factorization
  - lem-slice-disk-induces-seifert-metabolizer
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ralph H. Fox and John W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots"
      url: "https://ir.library.osaka-u.ac.jp/repo/ouka/all/7307/ojm03_02_08.pdf"
      locator: "§2, Theorem 2, printed pp. 262–263."
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, Theorem 2.6, printed p. 323, and §3.3, printed p. 326."
---

## Statement

Assume the full Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot, let $F\subset S^3$ be a connected compact smooth oriented Seifert surface of genus $g$, and let $V$ be its positive-push Seifert matrix, with entries $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ in an ordered integral basis of $H_1(F;\mathbb Z)$. Let $\Delta_K(t)$ be the Alexander polynomial normalized by $\Delta_K(t)\doteq\det(V-tV^T)$, where $p\doteq q$ means $p=\pm t^kq$ for some $k\in\mathbb Z$. If the integral Seifert lattice is metabolic, then there is an $f(t)\in\mathbb Z[t]$ such that $\Delta_K(t)\doteq f(t)f(t^{-1})$. The same factorization is necessary if $K$ bounds a locally flat properly embedded disk in the standard four-ball $B^4$. This is a necessary condition for either algebraic or locally flat sliceness, not a sufficient condition. The factorization concerns the Alexander polynomial $\Delta_K$, not the separate knot-normalized fraction $D_K(t)=\Delta_K(t)/(1-t)$.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The integral metabolizer condition]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant normalization of the Alexander polynomial]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$, a connected oriented Seifert surface $F$, its positive-push matrix $V$, and either a metabolizer for $V$ or a locally flat proper slice disk for $K$.

[A1] Full AC is the family-of-nonempty-sets choice axiom used by the knot Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] The positive-push matrix represents the integral Seifert pairing, with the stated linking convention. [[def-knot-seifert-pairing-and-matrix]]

[F2] The generator of the zeroth Alexander elementary ideal satisfies $\Delta_K(t)\doteq\det(V-tV^T)$ in this convention. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

[F3] A metabolic Seifert lattice has a rank-$g$ direct summand on which the pairing vanishes. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

[F4] For any integral rank-$2g$ bilinear form with unimodular skew part and a rank-$g$ direct-summand metabolizer, its determinant is $t^gf(t)f(t^{-1})$ for some $f\in\mathbb Z[t]$. [[lem-metabolic-seifert-form-implies-fox-milnor-factorization]]

[L1] The current slice-metabolizer supplier states that a locally flat slice disk induces an integral rank-$g$ metabolizer, but its proof is conditional on the separate locally flat Seifert-hypersurface construction. [[lem-slice-disk-induces-seifert-metabolizer]]

## Proof

1.1 If the Seifert lattice is metabolic, [F3] supplies a rank-$g$ direct-summand metabolizer for the positive-push matrix [F1]. Its skew part is unimodular by the knot Seifert convention, so [F4] gives $\det(V-tV^T)=t^gf(t)f(t^{-1})$. By [F2], $\Delta_K(t)$ differs from this determinant by a Laurent unit, proving the algebraic factorization claim. This matrix calculation uses no choice beyond the stated full-AC convention for the Seifert data. [A1, F1, F2, F3, F4, given, algebra]

2.1 For the locally flat slice branch, the planned route is to apply [L1] to the disk and then use step 1.1. The actual body of [L1] assumes its conclusion in step 1.1 and explicitly leaves the locally flat Seifert-hypersurface construction unproved; [L1] therefore cannot serve as an established premise here. The algebraic branch is proved, but the geometric slice implication remains escalated until that exact supplier is proved. [L1, step 1.1] ∎

## Unresolved proof obligation

The local factorization calculation is complete. The locally flat slice implication still needs a proof that a locally flat proper slice disk, capped with a Seifert surface under matching oriented product collars, bounds an oriented locally flat three-manifold with a two-sided product neighborhood aligned with the positive push-off. The current supplier `lem-locally-flat-slice-surface-bounds-seifert-hypersurface` explicitly has no such construction; Alexander duality in its current facts supplies complement homology only. This gap affects the locally flat clause here, `cor-nonfactorization-obstructs-sliceness`, and the trefoil sliceness obstruction. Reconcile the existing KT-21/KT-22 supplier placement and complete that supplier before treating these geometric consequences as proved.
