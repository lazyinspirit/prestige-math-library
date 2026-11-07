---
id: def-k-pseudorandom-measure
kind: definition
title: "$k$-pseudorandom measure in the Green–Tao convention"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-linear-forms-condition-for-a-measure
  - def-correlation-condition-for-a-measure
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§3, Definition 3.3, printed p. 491; the exact parameter tuple is retained"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, A Relative Szemerédi Theorem, arXiv:1305.5440v2 (2014)"
      url: "https://arxiv.org/pdf/1305.5440v2"
      locator: "§2, Definitions 2.2 and 2.4, printed pp. 3–4; their relative theorem uses a weaker linear-forms condition and no correlation condition"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.2, printed pp. 285–288; the independent exposition treats relative Roth and a different 3-term condition"
---

## Definition

Fix an integer $k\ge3$. A measure sequence $\nu=(\nu_p)$ on the prime fields is $k$-pseudorandom in the Green–Tao convention if it satisfies the $(k2^{k-1},3k-4,k)$ linear-forms condition and the $2^{k-1}$ correlation condition. Thus the linear-forms tests have at most $k2^{k-1}$ forms, at most $3k-4$ variables, and rational coefficients whose numerators and positive denominators are at most $k$ in absolute value; the correlation tests cover every order from $2$ through $2^{k-1}$ with all fixed finite moment bounds.

## Definition references

[[def-linear-forms-condition-for-a-measure|Linear-forms condition for a measure]]

[[def-correlation-condition-for-a-measure|Correlation condition for a measure]]

[Green and Tao, §3, Definition 3.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §2](https://arxiv.org/pdf/1305.5440v2)

[Zhao, Chapter 9.2](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)
