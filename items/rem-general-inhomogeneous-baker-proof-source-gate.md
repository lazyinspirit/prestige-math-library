---
id: rem-general-inhomogeneous-baker-proof-source-gate
kind: remark
title: "The general inhomogeneous Baker theorem is separate from the homogeneous effective subchain"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-baker-lower-bound-linear-form-in-logarithms
  - thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
    - title: "Michel Waldschmidt, Linear Independence of Logarithms of Algebraic Numbers, IMSc Report 116 (1992)"
      url: "https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1"
verification:
  precheck: n/a
---

## Remarks

Here a homogeneous linear form has the shape $\Lambda=\sum_i\beta_i\ell_i$, while the general inhomogeneous form also has an algebraic additive term $\gamma$. The effective unit-equation and Thue subchain uses the homogeneous lower bound; its logarithmic conversion can include the additional term $2k\log(-1)$ while remaining homogeneous. The general $\gamma$-term Baker theorem is a separate established claim whose local proof remains source-gated.

## Remarks references

[[thm-baker-lower-bound-linear-form-in-logarithms]]

[[thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt]]

[[cor-effective-lower-bound-for-algebraic-unit-exponential-form]]

[Evertse, *Diophantine Equations*, Chapter 5, §§5.1–5.3](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

[Waldschmidt, *Linear Independence of Logarithms of Algebraic Numbers*, Chapter X, Theorem 10.1](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)
