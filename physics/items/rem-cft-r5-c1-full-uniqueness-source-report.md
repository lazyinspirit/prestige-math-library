---
id: rem-cft-r5-c1-full-uniqueness-source-report
kind: remark
title: $c=1$ full-theory uniqueness source report
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
physical_scope: null
deps: []
dependency_roles: {}
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lorenz Eberhardt and Nat Levine, Classification of c=1 CFTs, arXiv:2609.16111v1"
      url: https://arxiv.org/pdf/2609.16111v1
      locator: "Theorem 1.1 and §§1, 4.1–4.4: classification statement, distinction between modular bootstrap and full-CFT uniqueness, and the operator-algebra arguments."
    - title: "Sebastiano Carpi, Tiziano Gaudio, and Luca Giorgetti, Algebra objects in direct limit completions of compact Lie group duals and the classification of c=1 vertex operator algebras, arXiv:2609.00347v1"
      url: https://arxiv.org/pdf/2609.00347v1
      locator: "§5.1, Theorem 5.6 and Remark 5.7; Theorem 5.27 and Remark 5.29."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Remark

Eberhardt–Levine's Theorem 1.1 reports that every unitary two-dimensional $c_L=c_R=1$ CFT with discrete spectrum is the compact free boson, its $\mathbb Z_2$ reflection orbifold, or one of three exceptional $SU(2)_1$ orbifolds by the tetrahedral, octahedral, or icosahedral subgroup of $SO(3)$. Their modular-bootstrap theorem is narrower in logical content than that full-theory statement: under A1–A5 it classifies partition-function densities and includes a spurious average of two distinct Narain densities. Sections 4.1–4.4 then use full CFT data, including unitarity, the operator-state correspondence, current Ward identities, OPE/crossing, and invertible or non-invertible gauging arguments, to exclude the spurious average and identify the theories. This item reports what the sources state; it does not formalize or prove the full-theory uniqueness theorem and is not a prerequisite supplier.

Carpi–Gaudio–Giorgetti's Theorem 5.6 classifies simple discrete-series vertex-operator-algebra extensions of $L(1,0)$ as fixed-point algebras $V_{L_2}^H$ for closed subgroups $H$ of $\operatorname{Aut}(V_{L_2})$ isomorphic to closed subgroups of $SO(3)$. Their Remark 5.7 explicitly says this theorem assumes neither strong rationality nor effective central charge $1$. This is a chiral VOA result, so its scope does not by itself establish the nonchiral full-CFT uniqueness claim above. Their Theorem 5.27 separately assumes strong rationality of $V_{L_2}^{A_5}$; Remark 5.29 reports a separate preprint proof of that hypothesis, but that cited preprint was not inspected here and is not adopted as an input.

## Source-report references

[Eberhardt–Levine, Theorem 1.1 and §§1, 4.1–4.4](https://arxiv.org/pdf/2609.16111v1)

[Carpi–Gaudio–Giorgetti, §5.1 and §§5.5](https://arxiv.org/pdf/2609.00347v1)
