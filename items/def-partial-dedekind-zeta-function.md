---
id: def-partial-dedekind-zeta-function
kind: definition
title: "Partial Dedekind zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-dedekind-zeta-function, def-ideal-class-group-of-a-domain, thm-dedekind-zeta-euler-product]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §5"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed p.458, partial zeta functions by ideal class."
    - title: "J. S. Milne, Class Field Theory, Chapter VI §2"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed p.189, partial zeta function for a ray-class coset; specialize to the ordinary ideal class group."
---

## Definition

Let $K$ be a number field and let $C$ be a class in the ideal class group of $\mathcal O_K$. For a complex number $s$ with $\operatorname{Re}(s)>1$, the **partial Dedekind zeta function of $C$** is
$$\zeta_{K,C}(s):=\sum_{\substack{0\ne\mathfrak a\subseteq\mathcal O_K\\ [\mathfrak a]=C}}(N\mathfrak a)^{-s},$$
where the sum is over the nonzero integral ideals in class $C$ and $N\mathfrak a$ is the absolute ideal norm.

## Definition references

[[def-dedekind-zeta-function]]

[[def-ideal-class-group-of-a-domain]]

[[thm-dedekind-zeta-euler-product]]
