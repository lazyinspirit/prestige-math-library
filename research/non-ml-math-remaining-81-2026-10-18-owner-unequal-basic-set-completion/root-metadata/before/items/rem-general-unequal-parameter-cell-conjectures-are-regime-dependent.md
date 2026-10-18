---
id: rem-general-unequal-parameter-cell-conjectures-are-regime-dependent
kind: remark
title: Lusztig P1–P15 are not universally proved cell properties
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§13.1–13.2 and §14.1–14.3, PDF pp. 55–58: boundedness and the explicit conjecture status of P1–P15."
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL lecture notes (2006)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Introduction, PDF pp. 1–2, and §5, PDF pp. 23–24: general unequal-parameter KL properties remain conjectural in some regimes."
verification:
  precheck: n/a
---

## Scope note

In Lusztig's §13.1 the auxiliary $t$-basis has structure constants $f_{x,y,z}$ defined by $t_xt_y=\sum_z f_{x,y,z}t_z$, with coefficient ring $A=\mathbb Z[v,v^{-1}]$ and $A_{\le0}=\bigoplus_{j\le0}\mathbb Z v^j$. Section 13.2 calls $(W,L)$ **bounded** when there exists $N\in\mathbb N$ such that $v^{-N}f_{x,y,z}\in A_{\le0}$ for all $x,y,z\in W$. Lusztig's §14 labels P1–P15 as conjectures in that bounded setup. He verifies them in specified cases in later sections, but the general list is not a universally established theorem.

The general basis and quotient constructions establish the weighted bar-invariant basis and the ideal and quotient-module construction for all stated Coxeter systems. Those constructions prove none of P1–P15, no positivity theorem, no semisimplicity theorem, and no classification of irreducible representations. A separate finite-Weyl theorem on this page proves modular canonical-basic-set triangularity under the explicitly stated P2–P8 and P15′ hypotheses and good-characteristic condition; it does not prove those hypotheses universally. Any stronger cell property must be stated with its exact type, parameter, boundedness, and proof hypotheses.
