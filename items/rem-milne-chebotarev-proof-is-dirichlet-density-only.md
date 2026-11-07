---
id: rem-milne-chebotarev-proof-is-dirichlet-density-only
kind: remark
title: "Milne’s Chebotarev proof establishes Dirichlet density"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - thm-natural-density-chebotarev
  - thm-chebotarev-dirichlet-density
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §7, Theorem 7.4 and its complete proof, Remark 7.5, printed pp. 259–260."
    - title: "J. C. Lagarias and A. M. Odlyzko, Effective Versions of the Chebotarev Density Theorem"
      url: "https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf"
      locator: "Theorem 1.3 and §9, printed pp. 409–464; unconditional counting asymptotic."
verification:
  precheck: n/a
---

## Remark

Assume AC, Countable Choice, and Dependent Choice. Let $L/F$ be a finite Galois extension with group $G$, let $C\subseteq G$ be conjugacy-stable, and let $S_C$ be the nonzero prime ideals of $F$ unramified in $L$ whose arithmetic Frobenius class lies in $C$. Milne’s Chapter VIII §7 proof of the Chebotarev theorem establishes the Dirichlet-density formula
$$\lim_{s\downarrow1,\ s>1}\frac{\displaystyle\sum_{\mathfrak p\in S_C}(N_{F/\mathbb Q}\mathfrak p)^{-s}}{\log(1/(s-1))}=\frac{|C|}{|G|}.$$
This logarithmic-series limit is not itself a finite-norm counting limit. The natural-density conclusion used here is derived from an unconditional counting asymptotic.

## Remark references

[[thm-chebotarev-dirichlet-density]]

[[thm-natural-density-chebotarev]]

[Milne, Class Field Theory, Chapter VIII §7, Theorem 7.4 and Remark 7.5](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Lagarias and Odlyzko, Theorem 1.3](https://aareyanmanzoor.github.io/assets/articles/lagarias-odlyzko.pdf)

## Facts & Assumptions

[F1] [[thm-chebotarev-dirichlet-density]]: the current statement is the Dirichlet-density formula for an unramified Frobenius-stable set; its local proof is conditional on the abelian Artin/ray-class chain.

[F2] [[thm-natural-density-chebotarev]]: the finite-norm counting ratio has natural density $|C|/|G|$; its local deduction uses the unconditional Lagarias–Odlyzko asymptotic, whose current proof remains escalated.

[A1] Both density statements carry AC, Countable Choice, and Dependent Choice through their current local proof routes. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]
