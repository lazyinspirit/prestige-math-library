---
id: def-dedekind-zeta-function
kind: definition
title: "Dedekind zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-number-field, def-absolute-norm-of-an-ideal]
justified_by: [thm-dedekind-zeta-euler-product]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5, Definition 5.1 and Proposition 5.2"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed p.457."
    - title: "J. S. Milne, Class Field Theory, Chapter VI §2(b)"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed p.184, Dedekind zeta definition."
---

## Definition

For a number field $K$ and a complex number $s$ with $\operatorname{Re}(s)>1$, the **Dedekind zeta function** is the Dirichlet series
$$\zeta_K(s):=\sum_{0\ne\mathfrak a\subseteq\mathcal O_K}(N\mathfrak a)^{-s},$$
where the sum ranges over the nonzero integral ideals of the ring of integers $\mathcal O_K$ and $N\mathfrak a:=|\mathcal O_K/\mathfrak a|$ is the absolute ideal norm.

## Definition references

[[def-number-field]]

[[def-absolute-norm-of-an-ideal]]
