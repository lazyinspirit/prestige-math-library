---
id: def-rank-of-a-drinfeld-module
kind: definition
title: "Rank of a Drinfeld module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-drinfeld-module-over-an-a-field
  - def-function-field-coefficient-ring
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §3.3"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §2.1, Remark 2.1"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification:
  precheck: n/a
---

## Definition

Let $\phi:A\to L\{\tau\}$ be a Drinfeld A-module over an A-field. For $a\in A\setminus\{0\}$, define $\deg_\tau(\phi_a)$ to be the largest exponent $i$ for which the coefficient of $\tau^i$ in $\phi_a$ is nonzero. We say that $\phi$ has **rank $r$**, for $r\in\mathbb Z_{\ge0}$, when
$$\deg_\tau(\phi_a)=r\deg_A(a)\quad\text{for every }a\in A\setminus\{0\}.$$
Equivalently, the additive polynomial $\phi_a(X)$ has polynomial degree $|a|^r$. If a rank exists, it is unique: for any nonzero prime ideal $\mathfrak l$ choose $a\in\mathfrak l\setminus\{0\}$; then $\deg_A(a)>0$, so two integers satisfying the displayed law must agree.

## Definition references

[[def-drinfeld-module-over-an-a-field]]

[[def-function-field-coefficient-ring]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §3.3: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §2.1 and Remark 2.1: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf
