---
id: cor-nonfactorization-obstructs-sliceness
kind: corollary
title: "Failure of Fox–Milnor factorization obstructs local sliceness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-axiom-of-choice
  - thm-locally-flat-slice-implies-fox-milnor-factorization
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
      locator: "§3.3, printed p. 326: factorization as a necessary concordance obstruction."
---

## Statement

Assume the full Axiom of Choice. Let $K\subset S^3$ be a smooth oriented knot and let $\Delta_K(t)$ be its Alexander polynomial in the determinant normalization, with $p\doteq q$ meaning $p=\pm t^kq$ for some $k\in\mathbb Z$. If there is no Laurent polynomial $f(t)\in\mathbb Z[t^{\pm1}]$ such that $\Delta_K(t)\doteq f(t)f(t^{-1})$, then $K$ does not bound a locally flat properly embedded disk in the standard four-ball $B^4$. This is a necessary obstruction only; factorization alone does not assert sliceness.

## Statement references

[[thm-locally-flat-slice-implies-fox-milnor-factorization|The necessary factorization for a locally flat slice disk]]

## Facts & Assumptions

**Given:** Full AC, an oriented knot $K$, and the hypothesis that no Laurent polynomial $f(t)\in\mathbb Z[t^{\pm1}]$ gives the stated reciprocal-norm factorization of $\Delta_K(t)$.

[A1] Full AC is the choice axiom assumed by the determinant-normalized knot Seifert-pairing convention. [[def-axiom-of-choice]]

[L1] The main theorem states that a locally flat slice disk implies the reciprocal-norm factorization, but its current proof does not establish the slice-to-metabolizer input. [[thm-locally-flat-slice-implies-fox-milnor-factorization]]

## Proof

1.1 Formally, if the geometric clause of [L1] were established, a locally flat slice disk for $K$ would yield an $f(t)\in\mathbb Z[t]$ with $\Delta_K(t)\doteq f(t)f(t^{-1})$. This is the contrapositive route from the preceding theorem. [A1, L1, given, algebra]

2.1 The current main-theorem carrier leaves that geometric clause unresolved, so [L1] is not a proved premise and the contrapositive cannot yet certify the claimed nonsliceness. The item remains escalated pending that exact supplier proof. [L1, step 1.1] ∎

## Unresolved proof obligation

The logical contrapositive is immediate once the locally flat Fox–Milnor theorem is proved. In this run, that theorem depends on the unresolved `lem-locally-flat-slice-surface-bounds-seifert-hypersurface` construction through `lem-slice-disk-induces-seifert-metabolizer`. Until the supplier is proved, this corollary's local sliceness conclusion remains escalated.
