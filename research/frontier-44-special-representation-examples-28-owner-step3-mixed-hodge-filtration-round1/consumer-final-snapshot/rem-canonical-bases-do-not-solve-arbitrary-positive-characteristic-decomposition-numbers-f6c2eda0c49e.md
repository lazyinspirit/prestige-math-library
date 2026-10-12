---
id: rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers
kind: remark
title: "Canonical bases do not solve arbitrary positive-characteristic decomposition numbers"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 47
deps: [thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment,
       rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity,
       rem-general-type-a-decomposition-numbers-remain-unsolved,
       def-graded-adjustment-polynomials-in-positive-characteristic,
       thm-ariki-canonical-basis-theorem-in-characteristic-zero,
       thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 5.6-5.7, printed pp. 54-57: Theorems 5.17-5.19 and the recorded limitation of the adjustment approach for arbitrary positive characteristic. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 9.1-9.5, printed pp. 39-46 and the survey's discussion of the remaining positive-characteristic decomposition-number problem. Complete passage read."
verification:
  precheck: n/a
---

## Statement

The characteristic-zero theorems of this page
([[thm-ariki-canonical-basis-theorem-in-characteristic-zero]],
[[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]])
compute graded decomposition numbers of graded Specht modules as global-basis
coefficients. In characteristic $p>0$ the factorization
[[thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment]]
reduces the graded decomposition matrix to a product of the adjustment matrix
and the SAME global-basis coefficients, but the adjustment matrix is generally
nontrivial: the theorem computes no adjustment entry and asserts no identity
adjustment matrix in general. Consequently the characteristic-zero
canonical-basis theory does not by itself solve the decomposition-number
problem in arbitrary positive characteristic; the general problem retains the
boundary recorded in
[[rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity]]
and [[rem-general-type-a-decomposition-numbers-remain-unsolved]]. This remark
records the boundary; it carries no proof obligation and no choice principle.

## Remarks

The two cited characteristic-zero theorems determine exactly the graded
decomposition numbers in branch (C0), where the transition polynomials
$d_{\lambda,\mu}(q)$ are the global-basis coefficients. The
positive-characteristic factorization leaves the adjustment coefficients
$a_{\lambda,\nu}(q)$ undetermined beyond bar-invariance, nonnegativity, the
diagonal $1$ and the dominance support recorded in
[[def-graded-adjustment-polynomials-in-positive-characteristic]]; consequently
the "same" global-basis coefficients are not by themselves the answer in branch
(CP). The source's announced specialization of the adjustment matrix to the
matrix of James concerns the degenerate parameter and lies outside this page's
nondegenerate regime, as recorded in the batch coverage. No general
positive-characteristic formula is claimed, and this remark is not consumed to
prove any replacement statement. The boundary it states is the same one
recorded in the two unsolved-decomposition-number remarks cited in the
statement.
