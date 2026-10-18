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
      locator: "Introduction, PDF pp. 1–2: general unequal-parameter KL properties remain conjectural in some regimes; Remark 5.9, PDF p. 29: the separate extension of Geck's §5 arguments to allow zero weights."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Scope note

In Lusztig's §13.1, preserving the setup of §3.1, one assumes $L(s)>0$ for every $s\in S$. The coefficient $f_{x,y,z}$ is defined by the standard-basis product $T_xT_y=\sum_z f_{x,y,z}T_z$; $f'_{x,y,z}$ is defined by the same product in the $c$-basis, and $h_{x,y,z}$ by $c_xc_y=\sum_z h_{x,y,z}c_z$. Thus the $f$-coefficients do not belong to an auxiliary $t$-basis. Section 13.2 calls $(W,L)$ **bounded** when there exists $N\in\mathbb N$ such that $v^{-N}f_{x,y,z}\in A_{\le0}$ for all $x,y,z\in W$. Section 14.1 retains the positive-weight assumption and assumes boundedness; §14.2 labels P1–P15 as conjectures in that setup. Lusztig verifies them in specified cases in later sections, but the general list is not a universally established theorem.

Geck separately notes in Remark 5.9 of his *Modular Representations of Hecke Algebras* that the arguments of his §5 (including the result he attributes there to Lusztig §5.2) also go through for $L:W\to\mathbb N$ with some $L(s)=0$, provided $\Delta(z)$ is set to $\infty$ when the trace coefficient $\tau(c_z)$ vanishes. This is a qualification for those §5 arguments, not a removal of the positive-weight hypothesis from Lusztig's §§13–14.

The general basis and quotient constructions establish the weighted bar-invariant basis and the ideal and quotient-module construction for all stated Coxeter systems. Those constructions prove none of P1–P15, no positivity theorem, no semisimplicity theorem, and no classification of irreducible representations. A separate finite-Weyl theorem on this page proves modular canonical-basic-set triangularity under the explicitly stated P2–P8 and P15′ hypotheses and good-characteristic condition; it does not prove those hypotheses universally. Any stronger cell property must be stated with its exact type, parameter, boundedness, and proof hypotheses.
