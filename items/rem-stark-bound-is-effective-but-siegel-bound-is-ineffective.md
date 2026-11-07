---
id: rem-stark-bound-is-effective-but-siegel-bound-is-ineffective
kind: remark
title: Effective Stark bounds and ineffective Siegel bounds have different roles
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - thm-stark-exceptional-dedekind-zeta-zero-bound
forward_refs:
  - thm-siegel-ineffective-lower-bound-dirichlet-zero
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jan-Hendrik Evertse, Analytic Number Theory: Prime Number Theory"
      url: https://pub.math.leidenuniv.nl/~evertsejh/ant20-6.pdf
      locator: Complete Chapter 6, Theorem 6.3.4, printed pp. 171–172; the Siegel exceptional-zero bound is stated but its deep proof is not supplied there.
    - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
      url: https://arxiv.org/pdf/1803.02823v3
      locator: Section 1, equation (1.4), and Section 3, Theorem 3.3; Stark’s bound is an effective input to their Hecke-character estimate.
---

## Remark

The Stark bound controls the distance from $1$ of a real zero of a Dedekind zeta function with an effectively computable absolute constant. Siegel's theorem says that for every $\epsilon>0$ there is a constant $c_\epsilon>0$ such that $1-\beta\ge c_\epsilon q^{-\epsilon}$ for a real exceptional zero of a primitive Dirichlet $L$-function of conductor $q$; its proof does not provide a computable value of $c_\epsilon$. The two bounds have different roles in uniform zero-free estimates.

## Remark references

[[thm-stark-exceptional-dedekind-zeta-zero-bound]]

[[thm-siegel-ineffective-lower-bound-dirichlet-zero]]

[Evertse, Chapter 6, Theorem 6.3.4](https://pub.math.leidenuniv.nl/~evertsejh/ant20-6.pdf)

[Thorner and Zaman, equation (1.4) and Theorem 3.3](https://arxiv.org/pdf/1803.02823v3)
