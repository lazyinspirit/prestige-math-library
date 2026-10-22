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

[F1] A locally flat slice disk implies the stated integral reciprocal-norm factorization, by the full TOP Fox–Milnor theorem with its explicit geometric inputs. [[thm-locally-flat-slice-implies-fox-milnor-factorization]]

## Proof

1.1 Suppose, to the contrary, that $K$ bounds a locally flat proper disk in $B^4$. The full TOP implication [F1] gives a Laurent polynomial $f(t)$ with $\Delta_K(t)\doteq f(t)f(t^{-1})$. The full-AC hypothesis is the same as that of the supplier. [A1, F1, given]

2.1 This contradicts the assumed nonexistence of such an $f$. Therefore no such locally flat slice disk exists. Only the necessary implication was used; nothing asserts that reciprocal-norm factorization is sufficient for sliceness. [given, step 1.1] ∎
