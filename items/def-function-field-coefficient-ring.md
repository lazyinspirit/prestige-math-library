---
id: def-function-field-coefficient-ring
kind: definition
title: "Function-field coefficient ring"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-finite-field-and-its-order
  - def-algebraic-curve-over-field
  - def-dedekind-domain
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §2.2"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
    - title: "Mihran Papikian, An Overview of the Theory of Drinfeld Modules, §2.1, Remark 2.1"
      url: "https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf"
verification:
  precheck: n/a
---

## Definition

Let $q$ be a prime power, let $k=\mathbb F_q$, let $C$ be a smooth proper geometrically integral curve over $k$, and let $\infty$ be a closed point of $C$. The open curve $U=C\setminus\{\infty\}$ is affine; let $A=\Gamma(U,\mathcal O_C)$ be its Dedekind coordinate ring, so $U=\operatorname{Spec}(A)$, and let $F=k(C)=\operatorname{Frac}(A)$ be the associated global function field with exact constant field $k$. The pair $(A,\infty)$ is a function-field coefficient datum. For $a\in A\setminus\{0\}$ define $\deg_A(a)=\dim_k(A/aA)$ and $|a|=q^{\deg_A(a)}=\#(A/aA)$; this quotient is finite-dimensional and has dimension zero when $a$ is a unit. For every nonzero prime ideal $\mathfrak l\subset A$, define the completed coefficient ring and its fraction field by $A_{\mathfrak l}=\varprojlim_{n\ge1}A/\mathfrak l^n$ and $K_{\mathfrak l}=\operatorname{Frac}(A_{\mathfrak l})$.

## Definition references

[[def-finite-field-and-its-order]]

[[def-algebraic-curve-over-field]]

[[def-dedekind-domain]]

Bjorn Poonen, *Introduction to Drinfeld Modules*, §2.2: https://math.mit.edu/~poonen/papers/drinfeld.pdf

Mihran Papikian, *An Overview of the Theory of Drinfeld Modules*, §2.1 and Remark 2.1: https://websites.umich.edu/~asnowden/seminar/2017/drinfeld/ODM.pdf
