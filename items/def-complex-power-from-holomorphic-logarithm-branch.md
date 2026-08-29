---
id: def-complex-power-from-holomorphic-logarithm-branch
kind: definition
title: "Complex powers defined from a holomorphic logarithm branch"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-holomorphic-logarithm-and-principal-power-dictionary, thm-complex-exponential-addition-and-real-extension]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 2 §3.4 The Logarithm"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Definition

Let $V\subseteq\mathbb C$ be open with $0\notin V$, and let $L:V\to\mathbb C$
be a holomorphic logarithm branch of $z$ on $V$: $L$ is holomorphic and
$\exp(L(z))=z$ for every $z\in V$, the branch vocabulary being that of the
dictionary in [[rem-holomorphic-logarithm-and-principal-power-dictionary]].
For $\alpha\in\mathbb C$ define the **branch power**

$$z^\alpha_L:=\exp\bigl(\alpha L(z)\bigr)\qquad(z\in V).$$

The subscript records the branch: the same base $z$ can carry many holomorphic
logarithm branches, and different branches give different values in general.
The defining expression is well formed because the complex exponential is a
total function on $\mathbb C$, whose values and addition law are those of
[[thm-complex-exponential-addition-and-real-extension]].

The **principal branch power** is the special case on the slit plane
$S=\mathbb C\setminus\{x\in\mathbb R:x\le0\}$:

$$z^\alpha_{\operatorname{Log}}:=\exp\bigl(\alpha\operatorname{Log}z\bigr)\qquad(z\in S),$$

where $\operatorname{Log}$ is the holomorphic principal branch of the
dictionary remark. On $S$ this agrees with the pointwise principal power of the
published principal-logarithm definition; on the negative axis the pointwise
principal value is still defined while the holomorphic branch power is not, and
the two are not silently identified.
